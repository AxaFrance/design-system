// Builds a mock Figma plugin: loads dist/code.js (the file Figma runs, built by
// npm run build) in a vm context, on data chosen by the caller, and exposes what
// is needed to talk to it and read what it produces. Used by the tests
// (test/plugin.test.ts).
import fs from 'node:fs'
import path from 'node:path'
import vm from 'node:vm'
import { fileURLToPath } from 'node:url'

const CODE_PATH = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'dist', 'code.js')

// Data of the simulated Figma, and files the plugin writes: left untyped on
// purpose. The shapes are those of the Figma API, and the assertions of each test
// read them.
export type MockData = any

// A message sent by the plugin to its interface, as the test sees it.
export type PluginMessage = { type: string; [key: string]: MockData }

export interface MockOptions {
  fileName?: string
  fileKey?: string
  collections?: MockData[] | Record<string, MockData>
  locals?: MockData[]
  remotes?: MockData[]
  deletedVariables?: MockData[]
  textStyles?: MockData[]
  effectStyles?: MockData[]
  clientStorage?: Record<string, MockData>
}

// collections can be an array (as returned by the Figma API, or a JSON
// snapshot) or an object { key: collection } (easier to read by hand in a test):
// both forms are accepted, normalized to an array.
const toCollectionsArray = (collections: MockData[] | Record<string, MockData>): MockData[] => (Array.isArray(collections) ? collections : Object.values(collections))

// Creates a mock plugin: loads dist/code.js in its own vm context, on the given
// collections, variables and styles. Each call produces an independent
// plugin, with its own execution of dist/code.js (hence its own REPO,
// its own internal state): two mock plugins never share anything.
export type MockPlugin = ReturnType<typeof createMockPlugin>

export const createMockPlugin = ({
  fileName = 'Document simulé',
  fileKey,
  collections = [],
  locals = [],
  remotes = [],
  // Deleted variables: Figma still returns them by their id, outside the local variables.
  deletedVariables = [],
  textStyles = [],
  effectStyles = [],
  clientStorage = {}
}: MockOptions = {}) => {
  const collectionsList = toCollectionsArray(collections)
  const collectionById = new Map(collectionsList.map((c) => [c.id, c]))
  const variableById = new Map([...locals, ...remotes, ...deletedVariables].map((v) => [v.id, v]))

  const sentMessages: PluginMessage[] = []
  // Bridge to a real UI (integration test), connected by connectUi.
  // Without a bridge, figma.ui.postMessage just records the message.
  let bridge: ((m: PluginMessage) => void) | null = null
  const resizes: number[][] = []
  const openedUrls: string[] = []

  // Storage on the user's machine (figma.clientStorage), in memory, for the window
  // size kept by the user. Cloned so as never to modify the object
  // received from the caller.
  const localClientStorage: Record<string, MockData> = JSON.parse(JSON.stringify(clientStorage))

  // fileKey is only readable for a plugin in development: absent, it
  // stays undefined, as in Figma.
  // The handler is set by dist/code.js, when it runs in the context below.
  const ui: {
    onmessage: ((msg: PluginMessage) => Promise<void> | void) | null
    postMessage: (m: PluginMessage) => void
    resize: (width: number, height: number) => void
  } = {
    onmessage: null,
    postMessage: (m) => { sentMessages.push(m); if (bridge) bridge(m) },
    resize: (l, h) => { resizes.push([l, h]) }
  }
  const figma = {
    fileKey,
    root: { name: fileName },
    showUI() {},
    openExternal: (url: string) => { openedUrls.push(url) },
    ui,
    clientStorage: {
      getAsync: async (key: string) => localClientStorage[key],
      setAsync: async (key: string, value: MockData) => { localClientStorage[key] = value },
      deleteAsync: async (key: string) => { delete localClientStorage[key] }
    },
    variables: {
      getLocalVariableCollectionsAsync: async () => collectionsList.filter((c) => !c.remote),
      getLocalVariablesAsync: async () => locals,
      getVariableByIdAsync: async (id: string) => variableById.get(id) || null,
      getVariableCollectionByIdAsync: async (id: string) => collectionById.get(id) || null
    },
    getLocalTextStylesAsync: async () => textStyles,
    getLocalEffectStylesAsync: async () => effectStyles
  }

  const context = vm.createContext({ figma, __html__: '', console })
  vm.runInContext(fs.readFileSync(CODE_PATH, 'utf8'), context)

  return {
    // Sends a message to the plugin, as figma.ui.onmessage would receive it from the UI.
    send: async (msg: PluginMessage) => {
      if (!ui.onmessage) throw new Error('the plugin has not set figma.ui.onmessage')
      await ui.onmessage(msg)
    },
    // Connects the plugin to a UI: each figma.ui.postMessage(m) also calls
    // fn(m), in addition to being recorded in messages.
    connectUi: (fn: (m: PluginMessage) => void) => { bridge = fn },
    // Messages received by the UI (figma.ui.postMessage), in order.
    messages: sentMessages,
    lastMessage: () => sentMessages[sentMessages.length - 1],
    // Sizes requested through figma.ui.resize, in order.
    resizes,
    // URLs opened through figma.openExternal, in order.
    openedUrls,
    // Storage on the user's machine: live object, to be read directly.
    clientStorage: localClientStorage,
    // Internal functions and state of the plugin, exposed by dist/code.js for the test.
    __test: context.__test as MockData
  }
}

