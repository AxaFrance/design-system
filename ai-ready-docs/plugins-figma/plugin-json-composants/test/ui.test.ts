// Integration test: the real dist/ui.html, in jsdom, connected to the real dist/code.js (simulated
// Figma) by a bridge that reproduces the one in Figma. It protects the message contract
// between the two sides, which the other tests only check one side at a time.
//
// Elements are found by their visible text (never by id or class), and the texts
// of the interface are protected by one snapshot per journey.
//
// The only places that name message types are the expected lists below. The bridge records
// the types seen in each direction, and the last test compares these sets with the lists:
// it fails if a type is no longer exercised end to end.

import { afterEach, describe, expect, it } from 'vitest'
import { JSDOM, VirtualConsole, type DOMWindow } from 'jsdom'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { fakeClock, layer, connect, page, solid, alias, fakeNetwork, tokensFile, createFakePlugin, type MockData } from './figma-mock'

const HERE = path.dirname(fileURLToPath(import.meta.url))
const DOCS = path.join(HERE, '..', '..', '..')

// Message contract between the interface and the plugin. A type renamed on one side only,
// or that no journey exercises any more, makes the last test fail.
const TYPES_UI_TO_PLUGIN = [
  'choisir-version',
  'controler',
  'generer',
  'memoriser',
  'redimensionner',
  'redimensionner-manuel',
  'selectionner',
  'taille-auto',
  'ui-pret'
]
const TYPES_PLUGIN_TO_UI = ['carte', 'controle', 'erreur', 'fiche', 'init', 'perime', 'progression', 'recalculer-hauteur', 'regles', 'selection', 'version']
const typesToPlugin = new Set<string>()
const typesToUi = new Set<string>()

const HTML = fs.readFileSync(path.join(HERE, '..', 'dist', 'ui.html'), 'utf8')
const RULES = fs.readFileSync(path.join(DOCS, 'regles', '03-proprietes.md'), 'utf8')

// ------------------------------------------------------------------ documents

const COLLECTIONS = [{ id: 'C1', name: 'Primitive', key: 'CK1', modes: [{ modeId: 'm1', name: 'Mode 1' }] }]
const VARIABLES = [
  { id: 'v-b7', name: 'color/blue/700', key: 'K-b700', variableCollectionId: 'C1' },
  { id: 'v-b8', name: 'color/blue/800', key: 'K-b800', variableCollectionId: 'C1' }
]

// What Canopée publishes: the tokens of the button exist from 2.0.0.
const network = (options = {}) => fakeNetwork({ tags: ['2.0.0'], files: { '2.0.0': tokensFile(['color.blue.700', 'color.blue.800']) }, rules: RULES, ...options })

const buttonVariant = (name: string, x: number, y: number, hover: boolean) =>
  layer('COMPONENT', name, { id: 'V:' + name, x, y, fills: [solid(0, 0, 0.56)], boundVariables: { fills: [alias(hover ? 'v-b8' : 'v-b7')] } }, [
    layer('TEXT', 'label', { id: 'LA:' + name, characters: 'Label', autoRename: false, fills: [solid(1, 1, 1)], boundVariables: { fills: [alias('v-b7')] }, componentPropertyReferences: { characters: 'label#1:1' } }),
    // a raw color: an issue that points at layers
    layer('TEXT', 'caption', { id: 'CA:' + name, characters: 'Aide', autoRename: false, fills: [solid(0.2, 0.2, 0.2)] })
  ])

// A button with a property that deviates from the nomenclature (Size), selected in a page
// that emits its changes.
const buttonDocument = (options: { empty?: boolean; network?: MockData } = {}): MockData => {
  const set = connect(
    layer(
      'COMPONENT_SET',
      'Button',
      {
        id: 'S:100',
        key: 'KEY-BUTTON',
        componentPropertyDefinitions: {
          hierarchy: { type: 'VARIANT', defaultValue: 'primary', variantOptions: ['primary'] },
          'label#1:1': { type: 'TEXT', defaultValue: 'Label' },
          state: { type: 'VARIANT', defaultValue: 'default', variantOptions: ['default', 'hover'] },
          Size: { type: 'VARIANT', defaultValue: 'md', variantOptions: ['md'] }
        }
      },
      [buttonVariant('state=hover, hierarchy=primary, Size=md', 0, 100, true), buttonVariant('state=default, hierarchy=primary, Size=md', 0, 0, false)]
    )
  )
  const pg = page('Composants')
  set.parent = pg
  return { fileName: 'DS IA ready', collections: COLLECTIONS, variables: VARIABLES, nodes: [set], selection: options.empty ? [] : [set], network: network(options.network), clock: fakeClock(), set, pg }
}

// More than 40 variants: the plugin announces its progress.
const wideDocument = (): MockData => {
  const options = Array.from({ length: 5 }, (_, i) => 'h' + (i + 1))
  const states = Array.from({ length: 9 }, (_, i) => 's' + (i + 1))
  const variants = []
  let y = 0
  for (const h of options) for (const s of states) variants.push(layer('COMPONENT', 'state=' + s + ', hierarchy=' + h, { id: 'V:' + h + s, x: 0, y: (y += 10) }))
  const set = connect(
    layer('COMPONENT_SET', 'Wide', { id: 'S:300', key: 'KEY-WIDE', componentPropertyDefinitions: { hierarchy: { type: 'VARIANT', defaultValue: 'h1', variantOptions: options }, state: { type: 'VARIANT', defaultValue: 's1', variantOptions: states } } }, variants)
  )
  const pg = page('Composants')
  set.parent = pg
  return { fileName: 'DS IA ready', collections: [], variables: [], nodes: [set], selection: [set], network: network(), clock: fakeClock(), set, pg }
}

// The export of the button by a first designer: the JSON becomes the comparison base stored in the file.
const exportOnce = async (doc: MockData) => {
  const plugin = createFakePlugin(doc)
  await plugin.send({ type: 'ui-pret' })
  await plugin.send({ type: 'generer' })
  await plugin.send({ type: 'memoriser', id: 'S:100' })
}
const addHierarchy = (doc: MockData, value: string) => doc.set.componentPropertyDefinitions.hierarchy.variantOptions.push(value)

// ----------------------------------------------------------------------- UI

const clone = (m: MockData) => JSON.parse(JSON.stringify(m))
const normalize = (text: string) => text.replace(/\s+/g, ' ').trim()

const openedWindows: DOMWindow[] = []

// Opens dist/ui.html in jsdom, connected to a simulated plugin on the given document.
const openUi = async (doc: MockData) => {
  const errors: MockData[] = []
  const downloads: MockData[] = []
  const copies: MockData[] = []
  const fetchCalls: string[] = []
  const sent: string[] = []
  const received: string[] = []
  const duringProgress: string[][] = []
  let window: DOMWindow | null = null
  let inProgress = 0
  const track = (promise: MockData) => {
    inProgress++
    return promise.then(
      () => {
        inProgress--
      },
      (e: MockData) => {
        inProgress--
        errors.push(e)
      }
    )
  }

  // Plugin to interface: figma.ui.postMessage(m) arrives as a message event.
  doc.onMessage = (m: MockData) => {
    typesToUi.add(m.type)
    received.push(m.type)
    if (!window) return
    window.dispatchEvent(new window.MessageEvent('message', { data: { pluginMessage: clone(m) } }))
    if (m.type === 'progression') duringProgress.push([...window.document.querySelectorAll('button')].map((b) => normalize(b.textContent)).filter(Boolean))
  }
  const plugin = createFakePlugin(doc)

  const virtualConsole = new VirtualConsole()
  virtualConsole.on('jsdomError', (e) => errors.push(e))

  const dom = new JSDOM(HTML, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'https://plugin.test/',
    virtualConsole,
    beforeParse(w) {
      window = w
      // Any uncaught JavaScript error on the interface side makes the test fail.
      w.addEventListener('error', (e) => errors.push(e.error || new Error(e.message)))
      w.addEventListener('unhandledrejection', (e) => errors.push(e.reason))

      // Interface to plugin: parent.postMessage({ pluginMessage }, '*') calls figma.ui.onmessage,
      // outside the caller's stack as in Figma.
      Object.defineProperty(w, 'postMessage', {
        configurable: true,
        value: (m: MockData) => {
          typesToPlugin.add(m.pluginMessage.type)
          sent.push(m.pluginMessage.type)
          track(Promise.resolve().then(() => plugin.send(clone(m.pluginMessage))))
        }
      })

      // The interface never goes on the network: GitHub is read by the plugin.
      w.fetch = (url) => {
        fetchCalls.push(String(url))
        return Promise.reject(new Error('unexpected network call from the interface: ' + url))
      }

      // What jsdom does not provide.
      w.URL.createObjectURL = (blob) => {
        downloads.push({ blob })
        return 'blob:essai'
      }
      w.URL.revokeObjectURL = () => {}
      w.scrollTo = () => {}
      // The clipboard: each copied text is kept.
      Object.defineProperty(w.navigator, 'clipboard', {
        configurable: true,
        value: {
          writeText: async (text: string) => {
            copies.push(text)
          }
        }
      })
      // The pointer capture by the handle.
      w.Element.prototype.setPointerCapture = () => {}
      w.Element.prototype.hasPointerCapture = () => true
      w.Element.prototype.releasePointerCapture = () => {}
      w.HTMLAnchorElement.prototype.click = function () {
        const last = downloads[downloads.length - 1]
        if (last) Object.assign(last, { name: this.download })
      }
    }
  })

  const view = dom.window
  const { document } = view
  openedWindows.push(view)

  // Waits until the exchanges between the interface and the plugin are over.
  const settle = async () => {
    for (let i = 0; i < 5; i++) {
      do {
        await new Promise((resolve) => setTimeout(resolve, 0))
      } while (inProgress > 0)
    }
  }
  await settle()

  // The text the person sees: without script or style, without what is hidden.
  // The date of the changelog and the version of the plugin change over time: they are replaced.
  const text = (): string => {
    const copy = document.body.cloneNode(true)
    if (!(copy instanceof view.HTMLElement)) throw new Error('the copy of the body is not an element')
    copy.querySelectorAll('script, style, [hidden]').forEach((e) => e.remove())
    return normalize(copy.textContent ?? '')
      .replaceAll(plugin.__test.VERSION, '<version>')
      .replace(/\b\d{2}\/\d{2}\/\d{2}\b/g, 'jj/mm/aa')
  }
  const clickable = (label: string, selector: string): HTMLElement => {
    const matches = [...document.querySelectorAll<HTMLElement>(selector)].filter((e) => !e.closest('[hidden]') && normalize(e.textContent ?? '').startsWith(label))
    expect(matches.length, `${matches.length} elements "${label}"`).toBe(1)
    return matches[0]
  }
  const button = (label: string): HTMLButtonElement => {
    const element = clickable(label, 'button')
    if (!(element instanceof view.HTMLButtonElement)) throw new Error(`"${label}" is not a button`)
    return element
  }
  const tab = (label: string): HTMLElement => clickable(label, '[role="tab"]')
  const choice = (label: string): HTMLInputElement => {
    const element = clickable(label, 'label')
    if (!(element instanceof view.HTMLLabelElement) || !(element.control instanceof view.HTMLInputElement)) throw new Error(`"${label}" is not a label of an input`)
    return element.control
  }
  const clickOn = async (element: HTMLElement): Promise<void> => {
    element.click()
    await settle()
  }
  const noError = () => {
    expect(errors.map((e) => (e && e.message) || String(e))).toStrictEqual([])
  }
  // Content of the visible panel: the JSON or the changelog, as shown on the screen.
  const byAriaLabel = (label: string): Element => {
    const element = document.querySelector(`[aria-label="${label}"]`)
    if (!element) throw new Error(`no element labelled "${label}"`)
    return element
  }
  const panel = (label: string): string => normalize(byAriaLabel(label).textContent ?? '')
  const handle = (): Element => byAriaLabel('Redimensionner la fenêtre')

  return { plugin, window: view, document, text, button, tab, choice, clickable, clickOn, settle, noError, downloads, copies, fetchCalls, sent, received, duringProgress, panel, handle, doc }
}

afterEach(() => {
  for (const view of openedWindows.splice(0)) view.close()
})

const downloadedText = (download: MockData) => download.blob.text()

// ------------------------------------------------------------------ journeys

describe('Interface and plugin: end-to-end journeys', () => {
  it('(a) nothing selected: the invitation, and the plugin has answered to its opening', async () => {
    const ui = await openUi(buttonDocument({ empty: true }))
    expect(ui.text()).toContain('Aucun composant sélectionné')
    expect(ui.text()).toContain('Sélectionner dans Figma un composant')
    expect(ui.text()).not.toContain('Générer le JSON')
    expect(ui.sent).toContain('ui-pret')
    expect(ui.received).toContain('init')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(b) a selected component: its card, then the nomenclature check lists what deviates', async () => {
    const ui = await openUi(buttonDocument())
    expect(ui.text()).toContain('Button')
    expect(ui.text()).toContain('2 variantes')
    expect(ui.text()).toContain('4 propriétés')
    expect(ui.text()).toContain('jamais exporté')
    expect(ui.sent).toContain('controler')
    expect(ui.received).toContain('controle')
    expect(ui.text()).toContain('Propriété Size')
    expect(ui.text()).toContain("Le nom d'une propriété s'écrit en camelCase")
    expect(ui.button('Générer le JSON').disabled).toBe(false)
    expect(ui.text()).not.toContain('Télécharger le JSON')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(c) "Générer le JSON": the plugin generates, the card shows the first version and the tabs appear', async () => {
    const ui = await openUi(buttonDocument())
    const before = ui.text()
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.sent).toContain('generer')
    expect(ui.received).toContain('fiche')
    expect(ui.text()).toContain('PREMIÈRE VERSION')
    expect(ui.text()).toContain('Version minimale des tokens requise : 2.0.0')
    expect(ui.text()).toContain('Télécharger le JSON')
    expect(ui.button('Copier le JSON').disabled).toBe(false)
    // « À corriger » stays, because of the issues of the sheet, and the three other tabs appear
    expect(ui.tab('À corriger').getAttribute('aria-selected')).toBe('true')
    for (const label of ['JSON', 'Changelog', 'Changements']) expect(ui.tab(label)).toBeTruthy()
    ui.noError()
    expect({ before, after: ui.text() }).toMatchSnapshot()
  })

  it('(d) the tabs show the JSON, the changelog and the changes, and the main button follows the tab', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))

    await ui.clickOn(ui.tab('JSON'))
    expect(ui.tab('JSON').getAttribute('aria-selected')).toBe('true')
    expect(ui.panel('JSON du composant')).toContain('"name": "Button"')
    expect(ui.text()).toContain('Plugin <version>, format')
    expect(ui.text()).toContain('button.json')
    expect(ui.button('Télécharger le JSON')).toBeTruthy()
    const json = ui.text()

    await ui.clickOn(ui.tab('Changelog'))
    expect(ui.panel('Changelog du composant')).toContain('# Changelog de Button')
    expect(ui.panel('Changelog du composant')).toContain('Première version du composant')
    expect(ui.button('Télécharger le changelog')).toBeTruthy()
    expect(ui.button('Copier le changelog')).toBeTruthy()
    const changelog = ui.text()

    await ui.clickOn(ui.tab('Changements'))
    expect(ui.text()).toContain('Premier export')
    expect(ui.text()).toContain("Ce composant n'a pas encore de version précédente à comparer.")
    expect(ui.button('Télécharger le JSON')).toBeTruthy()
    ui.noError()
    expect({ json, changelog, changes: ui.text() }).toMatchSnapshot()
  })

  it('(e) the arrow keys move between the tabs', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    const press = async (key: string) => {
      ui.tab('À corriger').parentElement?.dispatchEvent(new ui.window.KeyboardEvent('keydown', { key, bubbles: true }))
      await ui.settle()
    }
    await press('ArrowRight')
    expect(ui.tab('JSON').getAttribute('aria-selected')).toBe('true')
    await press('ArrowLeft')
    await press('ArrowLeft')
    expect(ui.tab('Changements').getAttribute('aria-selected')).toBe('true')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(f) "Télécharger le JSON": a file is offered, the success banner appears and the plugin stores the export', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.doc.set.getSharedPluginData('canopee_fiches', 'export')).toBe('')
    await ui.clickOn(ui.button('Télécharger le JSON'))
    expect(ui.downloads.map((d) => d.name)).toStrictEqual(['button.json'])
    expect(JSON.parse(await downloadedText(ui.downloads[0])).meta.name).toBe('Button')
    expect(ui.text()).toContain('JSON téléchargé.')
    expect(ui.sent).toContain('memoriser')
    expect(JSON.parse(ui.doc.set.getSharedPluginData('canopee_fiches', 'export')).meta.version).toBe('1.0.0')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(g) "Copier le JSON", then "Copier le changelog": the texts are copied', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    await ui.clickOn(ui.button('Copier le JSON'))
    expect(ui.copies).toHaveLength(1)
    expect(JSON.parse(ui.copies[0]).meta.name).toBe('Button')
    expect(ui.text()).toContain('JSON copié.')
    expect(ui.sent.filter((t) => t === 'memoriser')).toHaveLength(1)
    const afterJson = ui.text()

    await ui.clickOn(ui.tab('Changelog'))
    await ui.clickOn(ui.button('Copier le changelog'))
    expect(ui.copies).toHaveLength(2)
    expect(ui.copies[1]).toMatch(/^# Changelog de Button\n/)
    expect(ui.text()).toContain('Changelog copié.')
    // copying the changelog does not count as an export
    expect(ui.sent.filter((t) => t === 'memoriser')).toHaveLength(1)
    ui.noError()
    expect({ afterJson, afterChangelog: ui.text() }).toMatchSnapshot()
  })

  it('(h) a click on an issue selects its layers in Figma, and the interface keeps the same component', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    const issue = ui.button('caption, couleur du texte')
    expect(issue.textContent).toContain('Valeur brute (#333333) : la relier à une variable.')
    await ui.clickOn(issue)
    expect(ui.sent).toContain('selectionner')
    expect(Array.from<MockData, string>(ui.plugin.figma.currentPage.selection, (n) => n.id).sort()).toStrictEqual(['CA:state=default, hierarchy=primary, Size=md', 'CA:state=hover, hierarchy=primary, Size=md'])
    expect(ui.plugin.selections).toHaveLength(1)
    // Figma tells the plugin that the selection changed: the result stays
    await ui.plugin.triggerFigma('selectionchange')
    await ui.settle()
    expect(ui.text()).toContain('Télécharger le JSON')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(i) a component changed in Figma after the generation: the interface asks to generate again', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.text()).not.toContain('Le composant a changé depuis la génération de ce JSON.')
    const layerId = 'LA:state=default, hierarchy=primary, Size=md'
    ui.doc.pg.trigger({ nodeChanges: [{ type: 'PROPERTY_CHANGE', origin: 'LOCAL', id: layerId, node: { id: layerId }, properties: ['fills'] }] })
    await ui.settle()
    expect(ui.received).toContain('perime')
    expect(ui.text()).toContain('Le composant a changé depuis la génération de ce JSON.')
    expect(ui.button('Générer de nouveau').disabled).toBe(false)
    expect(ui.button('Copier le JSON').disabled).toBe(true)
    const stale = ui.text()

    // the card follows the component 300 ms after the change
    ui.doc.set.name = 'Button principal'
    const cards = ui.received.filter((t) => t === 'carte').length
    ui.doc.clock.advance()
    await ui.settle()
    expect(ui.received.filter((t) => t === 'carte')).toHaveLength(cards + 1)
    expect(ui.text()).toContain('Button principal')

    await ui.clickOn(ui.button('Générer de nouveau'))
    expect(ui.text()).not.toContain('Le composant a changé depuis la génération de ce JSON.')
    expect(ui.text()).toContain('Télécharger le JSON')
    ui.noError()
    expect({ stale, regenerated: ui.text() }).toMatchSnapshot()
  })

  it('(j) another export happened since the generation: the plugin refuses to store, and the interface shows the error', async () => {
    const ui = await openUi(buttonDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    // another designer exports the same component from another copy of the file
    ui.doc.set.setSharedPluginData('canopee_fiches', 'export', '{"meta":{"version":"1.0.0"}}')
    await ui.clickOn(ui.button('Télécharger le JSON'))
    expect(ui.sent).toContain('memoriser')
    expect(ui.received).toContain('erreur')
    expect(ui.text()).toContain("Un autre export de ce composant a eu lieu depuis cette génération. Rien n'a été enregistré")
    expect(ui.text()).not.toContain('JSON téléchargé.')
    expect(ui.doc.set.getSharedPluginData('canopee_fiches', 'export')).toBe('{"meta":{"version":"1.0.0"}}')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(k) a component changed since its last export: the version question blocks the export until it is answered', async () => {
    const doc = buttonDocument()
    await exportOnce(doc)
    addHierarchy(doc, 'secondary')
    const ui = await openUi(doc)
    expect(ui.text()).toContain('dernière version 1.0.0')
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.text()).toContain('La version 1.0.0 a-t-elle été livrée aux devs ?')
    expect(ui.text()).toContain('à choisir')
    expect(ui.button('Répondre à la question').disabled).toBe(true)
    expect(ui.button('Copier le JSON').disabled).toBe(true)
    const question = ui.text()

    // « Oui »: the plugin recomputes the sheet at the next minor version
    await ui.clickOn(ui.choice('Oui, passer en 1.1.0'))
    expect(ui.received).toContain('version')
    expect(ui.text()).toContain('MINEURE')
    expect(ui.button('Télécharger le JSON').disabled).toBe(false)
    expect(ui.tab('Changements').textContent).toContain('1')
    expect(ui.sent.filter((t) => t === 'choisir-version')).toHaveLength(1)
    expect(ui.text()).toContain('Refonte complète, passer en 2.0.0')
    const yes = ui.text()

    // the overhaul checkbox goes to the next major version
    await ui.clickOn(ui.choice('Refonte complète'))
    expect(ui.text()).toContain('MAJEURE')
    expect(ui.sent.filter((t) => t === 'choisir-version')).toHaveLength(2)
    const overhaul = ui.text()

    // « Non »: the version is kept, and the overhaul is dropped
    await ui.clickOn(ui.choice('Non, garder 1.0.0'))
    expect(ui.text()).toContain('VERSION GARDÉE')
    expect(ui.sent.filter((t) => t === 'choisir-version')).toHaveLength(3)
    expect(JSON.parse(ui.panel('JSON du composant')).meta.version).toBe('1.0.0')
    ui.noError()
    expect({ question, yes, overhaul, no: ui.text() }).toMatchSnapshot()
  })

  it('(l) over 40 variants, the button shows the progress of the generation', async () => {
    const ui = await openUi(wideDocument())
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.received.filter((t) => t === 'progression')).toHaveLength(2)
    expect(ui.duringProgress.map((buttons) => buttons.find((b: string) => b.startsWith('Génération en cours')))).toStrictEqual(['Génération en cours, 20 sur 45...', 'Génération en cours, 40 sur 45...'])
    expect(ui.text()).toContain('Télécharger le JSON')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(m) the rules page cannot be read: the banner tells it', async () => {
    const ui = await openUi(buttonDocument({ network: { rules: '' } }))
    expect(ui.received).toContain('regles')
    expect(ui.text()).toContain(ui.plugin.__test.UNREADABLE_RULES_MESSAGE)
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(n) the extraction fails: the interface shows the error and the button works again', async () => {
    const doc = buttonDocument()
    const ui = await openUi(doc)
    const nodeBefore = doc.set.componentPropertyDefinitions
    // reading the properties now throws
    Object.defineProperty(doc.set, 'componentPropertyDefinitions', {
      configurable: true,
      get() {
        throw new Error('lecture impossible')
      }
    })
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.received).toContain('erreur')
    expect(ui.text()).toContain('lecture impossible')
    expect(ui.button('Générer le JSON').disabled).toBe(false)
    Object.defineProperty(doc.set, 'componentPropertyDefinitions', { configurable: true, value: nodeBefore })
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(o) a second component is selected: the card changes and the result of the first is dropped', async () => {
    const doc = buttonDocument()
    const other = connect(layer('COMPONENT_SET', 'Autre', { id: 'S:200', componentPropertyDefinitions: {} }, [layer('COMPONENT', 'state=a', { id: 'V:a' })]), doc.pg)
    doc.nodes.push(other)
    const ui = await openUi(doc)
    await ui.clickOn(ui.button('Générer le JSON'))
    expect(ui.text()).toContain('Télécharger le JSON')
    doc.selection.splice(0, 1, other)
    await ui.plugin.triggerFigma('selectionchange')
    await ui.settle()
    expect(ui.text()).toContain('Autre')
    expect(ui.text()).not.toContain('Button')
    expect(ui.text()).toContain('Générer le JSON')
    expect(ui.text()).not.toContain('Télécharger le JSON')
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })

  it('(p) the window follows the content: the interface sends its height and the plugin resizes', async () => {
    const ui = await openUi(buttonDocument())
    expect(ui.sent).toContain('redimensionner')
    // jsdom has no layout: the measured height is the minimum of the automatic height
    expect(ui.plugin.resizes.at(-1)).toStrictEqual([440, 320])
    ui.noError()
  })

  it('(q) manual resize: the handle saves the size in the machine storage, and a double click goes back to automatic', async () => {
    const ui = await openUi(buttonDocument())
    expect(ui.plugin.clientStorage.taille).toBe(undefined)
    ui.handle().dispatchEvent(new ui.window.PointerEvent('pointerdown', { bubbles: true, pointerId: 1 }))
    ui.handle().dispatchEvent(new ui.window.PointerEvent('pointermove', { bubbles: true, pointerId: 1, clientX: 512, clientY: 632 }))
    ui.handle().dispatchEvent(new ui.window.PointerEvent('pointerup', { bubbles: true, pointerId: 1 }))
    await ui.settle()
    expect(ui.sent).toContain('redimensionner-manuel')
    expect(clone(ui.plugin.clientStorage.taille)).toStrictEqual({ largeur: 520, hauteur: 640 })
    expect(ui.plugin.resizes.at(-1)).toStrictEqual([520, 640])

    // a double click: the stored size is forgotten, the plugin asks the interface to measure again
    const before = ui.sent.filter((t) => t === 'redimensionner').length
    ui.handle().dispatchEvent(new ui.window.MouseEvent('dblclick', { bubbles: true }))
    await ui.settle()
    expect(ui.sent).toContain('taille-auto')
    expect(ui.received).toContain('recalculer-hauteur')
    expect(ui.plugin.clientStorage.taille).toBe(undefined)
    expect(ui.sent.filter((t) => t === 'redimensionner').length).toBeGreaterThan(before)
    expect(ui.plugin.resizes.at(-1)).toStrictEqual([440, 320])
    ui.noError()
    expect(ui.text()).toMatchSnapshot()
  })
})

// Figma reads dist/ui.html as a single string (__html__) and runs dist/code.js without any
// module system: a relative reference or an import would not resolve.
describe('files built for Figma', () => {
  it('dist/ui.html has no external script or stylesheet', () => {
    expect(HTML).not.toMatch(/<script[^>]*\ssrc\s*=/i)
    expect(HTML).not.toMatch(/<link[^>]*rel\s*=\s*["']?stylesheet/i)
    expect(HTML).not.toMatch(/<script[^>]*type\s*=\s*["']?module/i)
  })

  it('dist/code.js has no import or export', () => {
    const code = fs.readFileSync(path.join(HERE, '..', 'dist', 'code.js'), 'utf8')
    expect(code).not.toMatch(/^\s*(import|export)\b/m)
  })
})

// Must stay the last test of the file: it reads what the journeys above have exercised.
describe('message contract between interface and plugin', () => {
  it('each message type is exercised end to end, in both directions', () => {
    expect([...typesToPlugin].sort()).toStrictEqual([...TYPES_UI_TO_PLUGIN].sort())
    expect([...typesToUi].sort()).toStrictEqual([...TYPES_PLUGIN_TO_UI].sort())
  })
})
