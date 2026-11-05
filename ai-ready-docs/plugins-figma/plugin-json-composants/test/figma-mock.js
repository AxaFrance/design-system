// Builds a fake Figma: loads a code (code.js, or the bridge script) into a
// vm context, on a document described by the caller, and exposes what is needed to talk to it.
// ES module, no dependency.
import fs from 'node:fs'
import vm from 'node:vm'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const CODE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'code.js')

// ------------------------------------------------------------ layer factory
// A fake layer has the fields that the extraction reads, with neutral values.
// parent, findOne and getMainComponentAsync are set by connect().
const layer = (type, name, fields = {}, children) => {
  const n = {
    type, name: name, visible: true, fills: [], strokes: [], effects: [], boundVariables: {},
    ...fields
  }
  if (children) n.children = children
  // Data shared between plugins, like that of a real node. shareLimit: maximum size
  // in bytes of a value, beyond it the write throws an error like Figma.
  const shared = new Map()
  n.getSharedPluginData = (space, key) => shared.get(space + '|' + key) || ''
  n.setSharedPluginData = (space, key, value) => {
    if (n.shareLimit && Buffer.byteLength(value) > n.shareLimit) throw new Error('Data too large (' + Buffer.byteLength(value) + ' bytes)')
    shared.set(space + '|' + key, value)
  }
  return n
}

const connect = (n, parent) => {
  n.parent = parent || null
  n.findAll = (fn) => {
    const out = []
    const rec = (x) => { for (const c of x.children || []) { if (fn(c)) out.push(c); rec(c) } }
    rec(n)
    return out
  }
  n.findOne = (fn) => n.findAll(fn)[0] || null
  if (n.type === 'INSTANCE') n.getMainComponentAsync = async () => n.mainComponent || null
  for (const c of n.children || []) connect(c, n)
  return n
}

// A fake page and its children, enough to test what the rebuild removes: a child
// knows its mark (getPluginData) and removes itself from the page (remove).
// It also tracks its nodechange listeners: listeners (the active ones), offCalls (the off calls received)
// and trigger(event), which does what Figma does when a layer of the page changes.
const page = (name, children = []) => {
  const p = {
    type: 'PAGE', name: name, children: [], listeners: [], offCalls: 0,
    loadAsync: async () => {},
    on: (event, fn) => { if (event === 'nodechange') p.listeners.push(fn) },
    off: (event, fn) => { p.offCalls++; if (event === 'nodechange') p.listeners = p.listeners.filter((e) => e !== fn) },
    trigger: (event) => { for (const fn of [...p.listeners]) fn(event) }
  }
  for (const e of children) {
    const n = { type: e.type, name: e.name, getPluginData: (key) => (key === 'marque' && e.mark) || '', remove: () => { p.children.splice(p.children.indexOf(n), 1) } }
    p.children.push(n)
  }
  return p
}

const solid = (r, g, b, extra = {}) => ({ type: 'SOLID', color: { r, g, b }, ...extra })
const alias = (id) => ({ type: 'VARIABLE_ALIAS', id })

// A fake clock, for the timers of the plugin: advance() triggers those that are waiting.
const fakeClock = () => {
  let next = 1
  const waiting = new Map()
  return {
    setTimeout: (fn) => { const id = next++; waiting.set(id, fn); return id },
    clearTimeout: (id) => { waiting.delete(id) },
    advance: () => { const fns = [...waiting.values()]; waiting.clear(); for (const fn of fns) fn() },
    pending: () => waiting.size
  }
}

// ------------------------------------------------------------ fake network
// A fetch that answers in place of GitHub: the list of tags, then the tokens file of each
// tag. options: { tags: [names], files: { tag: document }, outage: true for an unreachable GitHub,
// mute: true for a GitHub that never answers, status: an HTTP code returned to all calls,
// rules: the text of the Properties page of the doc }.
// Returns { fetch, calls }: calls keeps the URLs requested.
const URL_TAGS = 'https://api.github.com/repos/AxaFrance/design-system/tags?per_page=100'
const FILE_PREFIX = 'https://raw.githubusercontent.com/AxaFrance/design-system/'
const FILE_SUFFIX = '/packages/canopee-css/design-tokens-canopee.resolver.json'
const fakeNetwork = (options = {}) => {
  const calls = []
  const answer = (status, body) => ({ ok: status >= 200 && status < 300, status, json: async () => body, text: async () => JSON.stringify(body) })
  const fakeFetch = async (url) => {
    calls.push(url)
    if (options.outage) throw new Error('Failed to fetch')
    if (options.mute) return new Promise(() => {})
    if (options.status) return answer(options.status, {})
    if (options.rules !== undefined && url.endsWith('/regles/03-proprietes.md')) return { ok: true, status: 200, text: async () => options.rules }
    if (url === URL_TAGS) return answer(200, (options.tags || []).map((name) => ({ name })))
    if (url.startsWith(FILE_PREFIX) && url.endsWith(FILE_SUFFIX)) {
      const tag = url.slice(FILE_PREFIX.length, url.length - FILE_SUFFIX.length)
      const doc = (options.files || {})[tag]
      return doc ? answer(200, doc) : answer(404, {})
    }
    return answer(404, {})
  }
  return { fetch: fakeFetch, calls }
}

// A published tokens file, from dotted paths: « color.blue.700 ». Text styles
// (typographie.…) go into the Styles set, the rest into Primitive. Each group carries a
// description, which the reading must ignore.
const tokensFile = (paths) => {
  const sets = { Primitive: { sources: [{}] }, Styles: { sources: [{}] } }
  for (const path of paths) {
    const segments = path.split('.')
    let node = sets[segments[0] === 'typographie' || segments[0] === 'typography' ? 'Styles' : 'Primitive'].sources[0]
    for (const seg of segments.slice(0, -1)) {
      node[seg] = node[seg] || { $description: 'Groupe ' + seg }
      node = node[seg]
    }
    node[segments[segments.length - 1]] = { $type: 'color', $value: '#000000', $description: path }
  }
  return { name: 'Canopée', version: '0', sets, modifiers: {} }
}

// ------------------------------------------------------------ fake Figma
// doc: { fileName, fileKey, pages, collections, variables, styles, nodes, selection, libraries, importables }
const createFakeFigma = (doc = {}) => {
  const colls = new Map((doc.collections || []).map((c) => [c.id, c]))
  const vars = new Map((doc.variables || []).map((v) => [v.id, v]))
  const styles = new Map((doc.styles || []).map((s) => [s.id, s]))
  const nodes = new Map()
  const indexNode = (n) => { if (n.id) nodes.set(n.id, n); for (const c of n.children || []) indexNode(c) }
  for (const n of doc.nodes || []) indexNode(n)
  const selections = []
  const pages = []
  const sent = []
  const notifications = []
  const storage = JSON.parse(JSON.stringify(doc.clientStorage || {}))
  const resizes = []
  const figmaListeners = {}
  const figma = {
    mixed: Symbol('mixed'),
    root: { name: doc.fileName || 'Document simulé', children: doc.pages || [] },
    fileKey: doc.fileKey,
    currentPage: { id: 'P:1', type: 'PAGE', selection: doc.selection || [] },
    viewport: { scrollAndZoomIntoView: (list) => selections.push(list) },
    setCurrentPageAsync: async (page) => { pages.push(page); figma.currentPage = page },
    showUI() {},
    on: (event, fn) => { (figmaListeners[event] = figmaListeners[event] || []).push(fn) },
    notify: (m) => notifications.push(m),
    ui: { onmessage: null, postMessage: (m) => { sent.push(m); if (doc.onMessage) doc.onMessage(m) }, resize: (l, h) => resizes.push([l, h]) },
    clientStorage: { getAsync: async (k) => storage[k], setAsync: async (k, v) => { storage[k] = v }, deleteAsync: async (k) => { delete storage[k] } },
    variables: {
      getVariableByIdAsync: async (id) => vars.get(id) || null,
      getVariableCollectionByIdAsync: async (id) => colls.get(id) || null
    },
    getStyleByIdAsync: async (id) => styles.get(id) || null,
    getNodeByIdAsync: async (id) => nodes.get(id) || null,
    importComponentByKeyAsync: async (k) => { const n = (doc.importables || {})[k]; if (!n || n.type !== 'COMPONENT') throw new Error('hors ligne'); return n },
    importComponentSetByKeyAsync: async (k) => { const n = (doc.importables || {})[k]; if (!n || n.type !== 'COMPONENT_SET') throw new Error('hors ligne'); return n }
  }
  if (doc.libraries) figma.teamLibrary = { getAvailableLibraryVariableCollectionsAsync: async () => doc.libraries }
  return { figma, sent, notifications, selections, pages, resizes, storage, figmaListeners }
}

// Fake plugin: runs code.js and gives what is needed to send it messages.
const createFakePlugin = (doc) => {
  const { figma, sent, selections, pages, resizes, storage, figmaListeners } = createFakeFigma(doc)
  // without a fake network, GitHub does not answer: no test calls the real network
  const network = doc && doc.network ? doc.network : fakeNetwork({ outage: true })
  const context = vm.createContext({ figma, __html__: '', console, fetch: network.fetch, setTimeout: (doc && doc.clock ? doc.clock.setTimeout : setTimeout), clearTimeout: (doc && doc.clock ? doc.clock.clearTimeout : clearTimeout) })
  vm.runInContext(fs.readFileSync(CODE_PATH, 'utf8'), context)
  return {
    figma,
    send: (msg) => figma.ui.onmessage(msg),
    // a Figma event (selectionchange...): all its listeners are called
    triggerFigma: (event) => Promise.all((figmaListeners[event] || []).map((fn) => fn())),
    messages: sent,
    selections,
    pages,
    resizes,
    clientStorage: storage,
    lastMessage: () => sent[sent.length - 1],
    __test: context.__test
  }
}

// Runs a bridge script as figma_execute does: the code becomes the body
// of an async function, and what it returns is the result.
const runBridge = async (doc, code) => {
  const { figma } = createFakeFigma(doc)
  const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor
  return new AsyncFunction('figma', code)(figma)
}

export { fakeClock, layer, connect, page, solid, alias, fakeNetwork, tokensFile, createFakePlugin, runBridge }
