// Runs dist/code.js (built from src/code.ts) on a simulated Figma (figma-mock.ts) and checks what comes out.
// Each test prepares its own state. Only read-only preparations are shared
// (the exported button, the frozen sheets, the generated scripts) and no test modifies them.
// Run with: npm test
import { afterAll, describe, expect, it } from 'vitest'
import crypto from 'node:crypto'
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import vm from 'node:vm'
import { execFileSync, spawnSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { fakeClock, layer, connect, page, solid, alias, fakeNetwork, tokensFile, createFakePlugin, runBridge, type MockData } from './figma-mock'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
// The nomenclature and the outline live in the ai-ready-docs folder, two levels above the plugin folder.
const DOCS = path.join(__dirname, '..', '..', '..')

const PLUGIN = path.join(__dirname, '..')
const SCRIPTS = path.join(PLUGIN, 'scripts')
const FIXTURES = path.join(__dirname, 'fixtures')

// A shared preparation: computed at the first call, never modified afterwards.
const memo = (fn: MockData) => {
  let p: MockData
  return () => p || (p = fn())
}

// Temporary folders, deleted at the end of the process.
const folders: string[] = []
const tempFolder = (prefix: string) => {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix + '-'))
  folders.push(d)
  return d
}
afterAll(() => { for (const d of folders) fs.rmSync(d, { recursive: true, force: true }) })

// read back as JSON: the objects created in the vm context do not have the prototypes of the test
const plain = (x: MockData) => JSON.parse(JSON.stringify(x))
const key = (o: MockData) => JSON.stringify(o)

// ------------------------------------------------------------ the fake button
// Two variants (state default and hover), a bound color variable, raw
// values, a nested icon whose vector is bound, a text bound to a text
// style and a text without a style.
const VARIABLES = [
  { id: 'v-b7', name: 'color/blue/700', key: 'K-b700', variableCollectionId: 'C1' },
  { id: 'v-b8', name: 'color/blue/800', key: 'K-b800', variableCollectionId: 'C1' },
  { id: 'v-w', name: 'color/white', key: 'K-white', variableCollectionId: 'CR', remote: true },
  { id: 'v-r', name: 'radius/medium', key: 'K-radius', variableCollectionId: 'C1' },
  { id: 'v-s', name: 'spacing/small', key: 'K-space', variableCollectionId: 'C1' },
  // same name as color/blue/700, another collection: a duplicate
  { id: 'v-b7bis', name: 'color/blue/700', key: 'K-b700-bis', variableCollectionId: 'C3' }
]
const COLLECTIONS = [
  { id: 'C1', name: 'Primitive', key: 'CK1', modes: [{ modeId: 'm1', name: 'Mode 1' }] },
  { id: 'CR', name: 'Primitive', key: 'CKR', remote: true, modes: [{ modeId: 'm1', name: 'Mode 1' }] },
  { id: 'C3', name: 'Semantic', key: 'CK3', modes: [{ modeId: 'ma', name: 'client' }, { modeId: 'mb', name: 'prospect' }] }
]

// the icon comes from a library (remote), the badge is local
const iconSource = { id: 'I:1', type: 'COMPONENT', name: 'account_balance', key: 'KEY-ICON', remote: true, parent: null }
const badgeSource = { id: 'B:1', type: 'COMPONENT', name: 'tone=neutral', key: 'KEY-BADGE', remote: false, parent: { type: 'COMPONENT_SET', name: 'Badge' } }
// proposed in the preferred values of the swap, importable by key
const avatarSet = { id: 'A:1', type: 'COMPONENT_SET', name: 'Avatar', key: 'KEY-AVATAR', remote: true, parent: null }

const buttonChildren = (hover: boolean, name: string) => {
  const children = [
    layer('INSTANCE', 'left-icon', {
      id: 'LI:' + name,
      mainComponent: iconSource, layoutSizingHorizontal: 'FIXED', layoutSizingVertical: 'FIXED', width: 24, height: 24,
      componentPropertyReferences: { visible: 'showLeftIcon#1:0', mainComponent: 'leftIcon#1:2' }
    }, [layer('VECTOR', 'Vector', { id: 'LV:' + name, fills: [solid(1, 1, 1)], boundVariables: { fills: [alias('v-w')] } })]),
    layer('TEXT', 'label', {
      id: 'LA:' + name,
      characters: 'Label', autoRename: false, textStyleId: 'S:1', fills: [solid(1, 1, 1)], boundVariables: { fills: [alias('v-w')] },
      layoutSizingHorizontal: 'FILL', layoutSizingVertical: 'HUG', textAlignVertical: 'CENTER',
      componentPropertyReferences: { characters: 'label#1:1' }
    }),
    layer('TEXT', 'caption', {
      id: 'CA:' + name,
      characters: 'Texte d\'aide', autoRename: false, fills: [solid(0.2, 0.2, 0.2)], textStyleId: '',
      fontName: { family: 'Source Sans Pro', style: 'Regular' }, fontSize: 14, layoutSizingHorizontal: 'HUG', layoutSizingVertical: 'HUG', textAlignVertical: 'TOP', lineHeight: { unit: 'PIXELS', value: 20 }
    }),
    layer('INSTANCE', 'badge', { mainComponent: badgeSource })
  ]
  if (hover) children.push(layer('FRAME', 'focus-ring', { strokes: [solid(0, 0, 1)], strokeWeight: 2, boundVariables: { strokes: [alias('v-b7bis')] }, layoutPositioning: 'ABSOLUTE', x: -2, y: -2, constraints: { horizontal: 'STRETCH', vertical: 'STRETCH' } }))
  return children
}

const buttonVariant = (name: string, x: number, y: number, hover: boolean) => layer('COMPONENT', name, {
  id: 'V:' + name, x, y, fills: [solid(0, 0, 0.56)], boundVariables: { fills: [alias(hover ? 'v-b8' : 'v-b7')], topLeftRadius: alias('v-r'), itemSpacing: alias('v-s') },
  strokes: hover ? [solid(0.8, 0.8, 0.8)] : [], strokeWeight: 1, strokeAlign: 'INSIDE',
  cornerRadius: 8, paddingTop: 12, paddingBottom: 12, paddingLeft: 16, paddingRight: 0, itemSpacing: 8,
  layoutMode: 'HORIZONTAL', primaryAxisAlignItems: 'CENTER', counterAxisAlignItems: 'CENTER', minWidth: 144, clipsContent: !hover,
  layoutSizingHorizontal: 'HUG', layoutSizingVertical: 'HUG',
  explicitVariableModes: hover ? { C3: 'ma' } : {}
}, buttonChildren(hover, name))

const buttonSet = () => connect(layer('COMPONENT_SET', 'Button', {
  id: 'S:100', key: 'KEY-BUTTON', description: 'Ne doit pas se retrouver dans le JSON.',
  documentationLinks: [{ uri: 'https://exemple.test/button' }],
  componentPropertyDefinitions: {
    'showLeftIcon#1:0': { type: 'BOOLEAN', defaultValue: true },
    hierarchy: { type: 'VARIANT', defaultValue: 'primary', variantOptions: ['primary', 'secondary'] },
    'label#1:1': { type: 'TEXT', defaultValue: 'Label' },
    state: { type: 'VARIANT', defaultValue: 'default', variantOptions: ['default', 'hover'] },
    'leftIcon#1:2': { type: 'INSTANCE_SWAP', defaultValue: 'I:1', preferredValues: [{ type: 'COMPONENT_SET', key: 'KEY-AVATAR' }, { type: 'COMPONENT', key: 'KEY-ICON' }, { type: 'COMPONENT', key: 'KEY-ABSENT' }] },
    '_scrollable#1:3': { type: 'BOOLEAN', defaultValue: false }
  }
}, [
  // deliberately in disorder: the export must sort
  buttonVariant('state=hover, hierarchy=primary', 64, 184, true),
  buttonVariant('state=default, hierarchy=primary', 64, 64, false)
]))

// What Canopée publishes, for the fake button: 2.0.0 lacks radius.medium, 2.1.0 has everything.
// Component tags (slash/3.0.0), candidate versions and those before 2.0.0 are ignored.
const BUTTON_PATHS = ['color.blue.700', 'color.blue.800', 'color.white', 'radius.medium', 'spacing.small', 'typographie.label.1.semibold']
const BUTTON_NETWORK = {
  tags: ['slash/3.0.0', '2.1.0', '2.0.0', '2.0.0-RC.1', '1.8.0', 'client/3.2.0'],
  files: {
    '2.0.0': tokensFile(BUTTON_PATHS.filter((c) => c !== 'radius.medium')),
    '2.1.0': tokensFile(BUTTON_PATHS.concat('color.red.500')),
    '1.8.0': tokensFile(BUTTON_PATHS)
  }
}

const buttonDocument = (): MockData => {
  const set = buttonSet()
  return {
    fileName: 'DS IA ready',
    collections: COLLECTIONS,
    variables: VARIABLES,
    styles: [{ id: 'S:1', name: 'label/1/semibold', key: 'KEY-STYLE', remote: true }],
    nodes: [iconSource, set],
    importables: { 'KEY-ICON': iconSource, 'KEY-AVATAR': avatarSet },
    libraries: [{ key: 'CKR', libraryName: 'Fondations Canopée' }],
    selection: [set],
    network: fakeNetwork(BUTTON_NETWORK)
  }
}

const exportSheet = async (doc: MockData): Promise<MockData> => {
  const plugin = createFakePlugin(doc)
  const rawSheet = await plugin.__test.extract(doc.selection[0])
  const text = plugin.__test.serialize(rawSheet)
  // read back from the text: the objects created in the vm context do not have the prototypes of the test
  return { plugin, sheet: JSON.parse(text), text }
}

// ------------------------------------------------------------ a component that deviates
const deviationsDocument = (): MockData => {
  const set = connect(layer('COMPONENT_SET', 'BadButton', {
    id: 'S:200', key: 'KEY-BAD',
    componentPropertyDefinitions: {
      Size: { type: 'VARIANT', defaultValue: 'md', variantOptions: ['md', 'Large'] },
      state: { type: 'VARIANT', defaultValue: 'enabled', variantOptions: ['enabled', 'hover', 'disabled'] },
      'isSelected#2:0': { type: 'BOOLEAN', defaultValue: false },
      'disabled#2:1': { type: 'BOOLEAN', defaultValue: false },
      'hasIcon#2:2': { type: 'BOOLEAN', defaultValue: false },
      'showIcon#2:3': { type: 'BOOLEAN', defaultValue: false },
      variant: { type: 'VARIANT', defaultValue: 'a', variantOptions: ['a'] },
      mode: { type: 'VARIANT', defaultValue: 'pressed', variantOptions: ['pressed'] },
      'text#2:4': { type: 'TEXT', defaultValue: 'x' }
    }
  }, [layer('COMPONENT', 'Size=md, state=enabled, isSelected=false', { x: 0, y: 0 }, [
    layer('FRAME', 'Frame 27', { id: 'F:27' }),
    layer('TEXT', 'bad-button-label', { characters: 'Label', autoRename: false, componentPropertyReferences: { characters: 'text#2:4' } }),
    layer('TEXT', 'Votre devis en 2 minutes', { characters: 'Votre devis en 2 minutes', autoRename: false }),
    layer('FRAME', 'label-and-icon'),
    layer('FRAME', 'Wrapper'),
    layer('FRAME', 'Left Icon'),
    layer('INSTANCE', 'account_balance', { mainComponent: iconSource })
  ])]))
  return { fileName: 'Test', collections: [], variables: [], nodes: [iconSource, set], selection: [set] }
}

const rules = (sheet: MockData) => sheet.issues.map((i: MockData) => i.rule)
const issuesFor = (sheet: MockData, rule: string, where?: string) => sheet.issues.filter((i: MockData) => i.rule === rule && (where === undefined || i.where === where))

// ------------------------------------------------------------ shared preparations, read only
const button = memo(() => exportSheet(buttonDocument()))
const deviations = memo(() => exportSheet(deviationsDocument()))
const buttonDetail = memo(async () => (await button()).plugin.__test.extractDetail(buttonDocument().selection[0]))
const deviationsDetail = memo(async () => (await button()).plugin.__test.extractDetail(deviationsDocument().selection[0]))
const readJson = (name: string) => JSON.parse(fs.readFileSync(path.join(FIXTURES, name), 'utf8'))
// the export of Button in the 0.2 format, one override per variant, frozen on 2026-10-23
const real02 = memo(() => readJson('button-format-0.2.json'))
const real03 = memo(() => readJson('button-format-0.3.json'))

// Real Button: the 50 variants re-expanded, then grouped.
const realGrouping = memo(async () => {
  const { plugin } = await button()
  const { groupOverrides, effectiveStyles } = plugin.__test
  const real = real02()
  const previous = real.styles
  const axes = previous.precedence
  const values: Record<string, MockData> = {}
  for (const a of axes) values[a] = real.api.props[a].enum
  const withoutWhen = (st: MockData) => { const o = JSON.parse(key(st)); delete o.when; return o }
  const baseVariant = { cfg: previous.default.when, styles: withoutWhen(previous.default) }
  const variants = [baseVariant].concat(previous.overrides.map((o: MockData) => ({ cfg: o.when, styles: effectiveStyles({ default: previous.default, overrides: [o] }, o.when) })))
  const grouped = groupOverrides(axes, values, variants, baseVariant)
  return { previous, baseVariant, variants, grouped }
})

// The JSON of the extraction, with the two versions that the plugin writes in it. The keys already exist
// (as null): their order does not change.
const withVersions = (sheet: MockData, version: string, tokensVersion: string) => {
  const f = JSON.parse(JSON.stringify(sheet))
  f.meta.version = version
  f.meta.tokensVersion = tokensVersion
  return JSON.stringify(f, null, 2) + '\n'
}

// The plugin opened on a document: ready, with the state that the test gives it.
const openPlugin = async (doc: MockData = buttonDocument()): Promise<MockData> => {
  const p = createFakePlugin(doc)
  await p.send({ type: 'ui-pret' })
  return { doc, p }
}
const generate = async (): Promise<MockData> => {
  const { doc, p } = await openPlugin()
  await p.send({ type: 'generer' })
  return { doc, p, msg: p.lastMessage() }
}

// Generated scripts: the bridge for the set S:100, the rebuild of Button.
const BUTTON_03 = path.join(FIXTURES, 'button-format-0.3.json')
const bridgeCode = memo(() => {
  const output = path.join(tempFolder('bridge'), 'extraire.bridge.js')
  execFileSync('node', [path.join(SCRIPTS, 'construire-bridge.mjs'), '--id', 'S:100', '--sortie', output], { stdio: 'pipe' })
  return fs.readFileSync(output, 'utf8')
})
const buildReturn = (options: string[]) => {
  const output = path.join(tempFolder('retour'), 'reconstruire.bridge.js')
  execFileSync('node', [path.join(SCRIPTS, 'construire-retour.mjs'), '--json', BUTTON_03, ...options, '--sortie', output], { stdio: 'pipe' })
  return fs.readFileSync(output, 'utf8')
}
const returnScript = memo(() => buildReturn([]))

// ------------------------------------------------------------ the fake button
describe('The fake button', () => {
  it('first level: formatVersion, meta, api, variants, structure, styles, tokens, textStyles, components, modeCollections, issues, then _tool', async () => {
    const { sheet } = await button()
    expect(Object.keys(sheet)).toStrictEqual(['formatVersion', 'meta', 'api', 'variants', 'structure', 'styles', 'tokens', 'textStyles', 'components', 'modeCollections', 'issues', '_tool'])
    expect(sheet.formatVersion).toBe('0.4')
    expect(sheet._tool).toMatch(/^canopee-fiches-composants \d/)
  })
  it('meta: name, version, tokens version, type, Figma key, library, documentation links', async () => {
    const { sheet } = await button()
    expect(sheet.meta).toStrictEqual({ name: 'Button', version: null, tokensVersion: null, type: 'atom', figmaKey: 'KEY-BUTTON', library: 'B2C', documentationLinks: ['https://exemple.test/button'] })
  })
  it('meta: the library is B2C, whatever the name of the Figma file or of its branch', async () => {
    const { sheet } = await button()
    expect(sheet.meta.library).toBe('B2C')
    expect(!JSON.stringify(sheet).includes('DS IA ready')).toBeTruthy()
  })
  it('meta: version and tokensVersion follow the name, in this order', async () => {
    const { sheet } = await button()
    expect(Object.keys(sheet.meta)).toStrictEqual(['name', 'version', 'tokensVersion', 'type', 'figmaKey', 'library', 'documentationLinks'])
  })
  it('the exact text of the JSON of the button is the reference file test/fixtures/reference-output.json', async () => {
    // Nothing varies from one run to the next in this text: no date, no random identifier.
    const { text } = await button()
    expect(text).toBe(fs.readFileSync(path.join(FIXTURES, 'reference-output.json'), 'utf8'))
  })
  it('the fields handled by the Markdown are absent', async () => {
    const { sheet, text } = await button()
    for (const c of ['role', 'description', 'platforms', 'states', 'interaction', 'rules', 'examples', 'invalidCombinations', '_doc_source', '_todo_ai', '_lint', '_collisions', 'runtime'])
      expect(!text.includes('"' + c + '"'), 'présent : ' + c).toBeTruthy()
    expect(!text.includes('Ne doit pas se retrouver')).toBeTruthy()
    for (const p of Object.values<MockData>(sheet.api.props)) expect(p.attribute).toBe(undefined)
  })
  it('Figma names kept: camelCase, without the #id suffix, nothing in kebab-case', async () => {
    const { sheet, text } = await button()
    expect(Object.keys(sheet.api.props)).toStrictEqual(['state', 'hierarchy', 'showLeftIcon', '_scrollable'])
    expect(Object.keys(sheet.structure.slots)).toStrictEqual(['label', 'leftIcon'])
    expect(!text.includes('#1:')).toBeTruthy()
    expect(!text.includes('show-left-icon')).toBeTruthy()
    expect(sheet.styles.default['left-icon']).toBeTruthy()
  })
  it('api: enum with default, boolean with controls, nomenclature order', async () => {
    const { sheet } = await button()
    expect(sheet.api.props.state).toStrictEqual({ type: 'enum', enum: ['default', 'hover'], default: 'default' })
    expect(sheet.api.props.showLeftIcon).toStrictEqual({ type: 'boolean', default: true, controls: [{ layer: 'left-icon', attribute: 'visible' }] })
  })
  it('slots: controls read from componentPropertyReferences, named default swap', async () => {
    const { sheet } = await button()
    expect(sheet.structure.slots.label).toStrictEqual({ as: 'children', default: { text: 'Label' }, controls: [{ layer: 'label', attribute: 'text' }] })
    expect(sheet.structure.slots.leftIcon).toStrictEqual({ accepts: 'Instance', default: { swap: 'account_balance' }, preferred: ['Avatar', 'account_balance'], controls: [{ layer: 'left-icon', attribute: 'component' }] })
  })
  it('text: default value in the slot', async () => {
    const { sheet } = await button()
    expect(sheet.structure.slots.label.default).toStrictEqual({ text: 'Label' })
  })
  it('text: sizing only when it differs from hug and top', async () => {
    const { sheet } = await button()
    expect(sheet.styles.default.label.layout).toStrictEqual({ sizingH: 'fill', textAlignVertical: 'center' })
    expect(sheet.styles.default.caption.layout).toBe(undefined)
  })
  it('root: layout.clip always written, never on a sub-layer', async () => {
    const { sheet } = await button()
    expect(sheet.styles.default.root.layout.clip).toBe(true)
    expect(sheet.styles.overrides[0].styles.root.layout.clip).toBe(false)
    expect(sheet.styles.default['left-icon'].layout.clip).toBe(undefined)
  })
  it('absolutely positioned layer: constraints in lowercase', async () => {
    const { sheet } = await button()
    expect(sheet.styles.overrides[0].styles['focus-ring'].layout).toStrictEqual({ absolute: true, x: -2, y: -2, constraints: { horizontal: 'stretch', vertical: 'stretch' } })
  })
  it('variants: values and position, sorted in the order of the properties', async () => {
    const { sheet } = await button()
    expect(sheet.variants).toStrictEqual([
      { values: { state: 'default', hierarchy: 'primary' }, position: [64, 64] },
      { values: { state: 'hover', hierarchy: 'primary' }, position: [64, 184] }
    ])
  })
  it('bound value: { token } for the color, the radius and the spacing', async () => {
    const r = (await button()).sheet.styles.default.root
    expect(r.background).toStrictEqual({ token: 'color/blue/700' })
    expect(r.radius).toStrictEqual({ token: 'radius/medium' })
    expect(r.gap).toStrictEqual({ token: 'spacing/small' })
  })
  it('raw value: { raw } and an issue in issues, except the zero value', async () => {
    const { sheet } = await button()
    const r = sheet.styles.default.root
    expect(r.padding.top).toStrictEqual({ raw: 12 })
    expect(r.padding.right).toStrictEqual({ raw: 0 })
    expect(r.layout.minWidth).toStrictEqual({ raw: 144 })
    expect(issuesFor(sheet, 'valeur-brute', 'styles.root.padding.top').length).toBe(1)
    expect(issuesFor(sheet, 'valeur-brute', 'styles.root.layout.minWidth').length).toBe(1)
    expect(issuesFor(sheet, 'valeur-brute', 'styles.root.padding.right').length).toBe(0)
    expect(issuesFor(sheet, 'valeur-brute', 'styles.root.stroke').length).toBe(1)
    expect(issuesFor(sheet, 'valeur-brute', 'styles.left-icon.layout.width').length).toBe(1)
  })
  it('the same issue repeated in several variants is reported once, with its count', async () => {
    const { sheet } = await button()
    const seen = new Set()
    for (const i of sheet.issues.filter((x: MockData) => x.rule === 'valeur-brute')) {
      const c = i.where + '|' + i.message
      expect(!seen.has(c), 'doublon : ' + c).toBeTruthy()
      seen.add(c)
      expect(i.occurrences >= 1).toBeTruthy()
    }
  })
  it('text bound to a style: textStyle, without the detailed typography', async () => {
    const { sheet } = await button()
    expect(sheet.styles.default.label.textStyle).toBe('label/1/semibold')
    expect(sheet.styles.default.label.typography).toBe(undefined)
    expect(sheet.styles.default.label.textColor).toStrictEqual({ token: 'color/white' })
  })
  it('text without a style: detailed typography kept and issue reported', async () => {
    const { sheet } = await button()
    expect(sheet.styles.default.caption.typography.fontSize).toBe(14)
    expect(sheet.styles.default.caption.textStyle).toBe(undefined)
    expect(issuesFor(sheet, 'style-de-texte', 'styles.caption').length).toBe(1)
    expect(issuesFor(sheet, 'style-de-texte', 'styles.label').length).toBe(0)
  })
  it('nested icon: color of the first vector under <layer>/vector', async () => {
    const { sheet } = await button()
    expect(sheet.styles.default['left-icon/vector']).toStrictEqual({ background: { token: 'color/white' } })
  })
  it('hover override: only what changes', async () => {
    const ov = (await button()).sheet.styles.overrides
    expect(ov.length).toBe(1)
    expect(ov[0].when).toStrictEqual({ state: 'hover' })
    expect(ov[0].styles.root.background).toStrictEqual({ token: 'color/blue/800' })
    expect(ov[0].styles.root.stroke).toStrictEqual({ raw: '#CCCCCC' })
    expect(ov[0].styles.root.padding).toBe(undefined)
    expect(ov[0].styles['focus-ring'].stroke).toStrictEqual({ token: 'color/blue/700' })
    expect(ov[0].styles.modes).toStrictEqual({ Semantic: 'client' })
  })
  it('trees: base with an empty when, then the structure specific to hover, and no more precedence', async () => {
    const { sheet } = await button()
    expect(Object.keys(sheet.styles)).toStrictEqual(['default', 'overrides'])
    expect(sheet.structure.trees.length).toBe(2)
    expect(sheet.structure.trees[0].when).toStrictEqual({})
    expect(sheet.structure.trees[1].when).toStrictEqual({ state: 'hover' })
    expect(sheet.structure.trees[0].tree.map((t: MockData) => t.name)).toStrictEqual(['left-icon', 'label', 'caption', 'badge'])
    expect(sheet.structure.trees[0].tree[0]).toStrictEqual({ name: 'left-icon', type: 'instance', component: 'account_balance' })
    expect(sheet.structure.trees[1].tree.slice(-1)[0]).toStrictEqual({ name: 'focus-ring', type: 'frame' })
    expect(sheet.structure.uses).toStrictEqual(['Badge', 'account_balance'])
    for (const name of sheet.structure.uses) expect(sheet.components[name], 'absent de components : ' + name).toBeTruthy()
  })
  it('tokens index: each variable once, sorted, with library, collection and key', async () => {
    const { sheet } = await button()
    expect(Object.keys(sheet.tokens)).toStrictEqual(['color/blue/700', 'color/blue/800', 'color/white', 'radius/medium', 'spacing/small'])
    expect(sheet.tokens['color/white']).toStrictEqual({ library: 'Fondations Canopée', collection: 'Primitive', key: 'K-white' })
    expect(sheet.tokens['color/blue/700']).toStrictEqual({ library: 'B2C', collection: 'Primitive', key: 'K-b700' })
  })
  it('textStyles index: name, library (null if remote), key', async () => {
    const { sheet } = await button()
    expect(sheet.textStyles).toStrictEqual({ 'label/1/semibold': { library: null, key: 'KEY-STYLE' } })
  })
  it('components index: instances, default swap and preferred values, sorted by name', async () => {
    const { sheet } = await button()
    expect(sheet.components).toStrictEqual({
      Avatar: { library: null, key: 'KEY-AVATAR' },
      Badge: { library: 'B2C', key: 'KEY-BADGE' },
      account_balance: { library: null, key: 'KEY-ICON' }
    })
    expect(Object.keys(sheet.components)).toStrictEqual(['Avatar', 'Badge', 'account_balance'])
    for (const name of sheet.structure.slots.leftIcon.preferred) expect(sheet.components[name]).toBeTruthy()
  })
  it('preferred value not found: reported, not added', async () => {
    const { sheet, text } = await button()
    expect(issuesFor(sheet, 'valeur-preferee', 'structure.slots.leftIcon').length).toBe(1)
    expect(!text.includes('KEY-ABSENT",')).toBeTruthy()
  })
  it('modeCollections index: collection of the set mode, with its key', async () => {
    const { sheet } = await button()
    expect(sheet.modeCollections).toStrictEqual({ Semantic: { library: 'B2C', key: 'CK3' } })
  })
  it('duplicate variable: reported in issues, the smallest key kept', async () => {
    const { sheet } = await button()
    expect(issuesFor(sheet, 'token-doublon', 'tokens.color/blue/700').length).toBe(1)
  })
  it('a compliant component gets no nomenclature issue', async () => {
    const { sheet } = await button()
    const e = sheet.issues.filter((i: MockData) => /^(prop|calque|composant)-/.test(i.rule) && i.rule !== 'prop-hors-nomenclature')
    expect(e).toStrictEqual([])
    expect(!sheet.issues.some((i: MockData) => i.level === 'error')).toBeTruthy()
  })
  it('property with an underscore: info, not an error', async () => {
    const i = issuesFor((await button()).sheet, 'prop-hors-nomenclature', 'api.props._scrollable')
    expect(i.length).toBe(1)
    expect(i[0].level).toBe('info')
  })
  it('issues: a single list, sorted, without duplicates', async () => {
    const { sheet } = await button()
    const sig = sheet.issues.map((i: MockData) => i.level + '|' + i.rule + '|' + i.where + '|' + i.message)
    expect(new Set(sig).size).toBe(sig.length)
    const rank: Record<string, number> = { error: 0, warning: 1, info: 2 }
    for (let k = 1; k < sheet.issues.length; k++) expect(rank[sheet.issues[k - 1].level] <= rank[sheet.issues[k].level]).toBeTruthy()
  })
  it('determinism: same file, same text', async () => {
    const { plugin, text } = await button()
    const second = await exportSheet(buttonDocument())
    const same = await plugin.__test.extract(buttonDocument().selection[0])
    expect(second.text).toBe(text)
    expect(plugin.__test.serialize(same)).toBe(text)
    expect(text.endsWith('}\n')).toBeTruthy()
    expect(!/\d{4}-\d{2}-\d{2}/.test(text), 'une date dans le fichier').toBeTruthy()
  })
  it('guard: if the output of the button changes, VERSION goes up and test/fixtures/sortie-reference.json follows', async () => {
    const { plugin, sheet } = await button()
    const withoutTool = JSON.stringify(Object.fromEntries(Object.entries(sheet).filter(([k]) => k !== '_tool')))
    const fingerprint = crypto.createHash('sha256').update(withoutTool).digest('hex')
    const ref = readJson('sortie-reference.json')
    const version = plugin.__test.VERSION
    if (fingerprint !== ref.empreinte && version === ref.version) expect.fail('La sortie du bouton simulé a changé sans que VERSION change. Monter VERSION dans src/code.ts, puis mettre à jour test/fixtures/sortie-reference.json avec la nouvelle version et l\'empreinte ' + fingerprint + '.')
    expect(version === ref.version && fingerprint === ref.empreinte, 'test/fixtures/sortie-reference.json n\'est pas à jour. Y écrire { "version": "' + version + '", "empreinte": "' + fingerprint + '" }.').toBeTruthy()
  })
  it('occurrences: the number of variants where the issue appears, absent if none', async () => {
    const { plugin, sheet } = await button()
    const occ = (where: string) => issuesFor(sheet, 'valeur-brute', where)[0].occurrences
    expect(occ('styles.root.padding.top')).toBe(2)
    expect(occ('styles.left-icon.layout.width')).toBe(2)
    expect(occ('styles.root.stroke')).toBe(1)
    const { variantsPerIssue, issueSignature } = plugin.__test
    const d = { level: 'warning', rule: 'valeur-brute', where: 'styles.a.gap', message: 'm' }
    expect(variantsPerIssue([{ a: { gap: { raw: 4 } } }]).get(issueSignature(d))).toBe(undefined)
  })
})

// ------------------------------------------------------------ the reads that fail
describe('The reads that fail', () => {
  const trap = (node: MockData, field: PropertyKey) => Object.defineProperty(node, field, { get() { throw new Error('lecture refusée') }, configurable: true })
  const casing = memo(async () => {
    const doc = buttonDocument()
    for (const v of doc.selection[0].children) trap(v.children.find((c: MockData) => c.name === 'caption'), 'fills')
    const p = createFakePlugin(doc)
    const readVariable = p.figma.variables.getVariableByIdAsync
    p.figma.variables.getVariableByIdAsync = async (id: string) => { if (id === 'v-r') throw new Error('variable illisible'); return readVariable(id) }
    return JSON.parse(p.__test.serialize(await p.__test.extract(doc.selection[0])))
  })

  it('a layer with a property that throws an exception: the export succeeds, with a lecture-impossible issue at its location', async () => {
    const c = await casing()
    const e = issuesFor(c, 'lecture-impossible', 'styles.caption')
    expect(e.length).toBe(1)
    expect(e[0].level).toBe('error')
    expect(e[0].message).toBe('Lecture impossible : lecture refusée. Cette partie du JSON est incomplète.')
    expect(c.styles.default.caption).toBe(undefined)
    expect(c.styles.default.label.textColor).toStrictEqual({ token: 'color/white' })
    expect(c.variants.length).toStrictEqual(2)
  })
  it('an unreadable variable: value written raw, error at the tokens location, rest of the JSON produced', async () => {
    const c = await casing()
    const e = issuesFor(c, 'lecture-impossible', 'tokens')
    expect(e.length).toBe(1)
    expect(e[0].message).toMatch(/^Lecture impossible : variable illisible\. La variable v-r n'a pas pu être lue.* Cette partie du JSON est incomplète\.$/)
    expect(c.styles.default.root.radius).toStrictEqual({ raw: 8 })
    expect(c.styles.default.root.background).toStrictEqual({ token: 'color/blue/700' })
    expect(!('radius/medium' in c.tokens)).toBeTruthy()
  })
  it('without an exception, no lecture-impossible issue', async () => {
    expect(issuesFor((await button()).sheet, 'lecture-impossible').length).toBe(0)
  })
})

// ------------------------------------------------------------ the grouping of the overrides
describe('The grouping of the overrides', () => {
  it('real Button: the re-expansion of the 50 variants equals the original styles', async () => {
    const { plugin } = await button()
    const { effectiveStyles, canonical } = plugin.__test
    const { previous, baseVariant, variants, grouped } = await realGrouping()
    expect(variants.length).toBe(50)
    const norm = (st: MockData) => canonical(effectiveStyles({ default: st }, {}))
    for (const v of variants) expect(canonical(effectiveStyles({ default: baseVariant.styles, overrides: grouped }, v.cfg)), key(v.cfg)).toBe(norm(v.styles))
  })
  it('real Button: clearly fewer overrides, and the client theme carries its radius', async () => {
    const { grouped } = await realGrouping()
    expect(grouped.length < 30, 'surcharges : ' + grouped.length).toBeTruthy()
    const client = grouped.find((o: MockData) => key(o.when) === '{"_theme":"client"}')
    expect(client).toBeTruthy()
    expect(JSON.parse(key(client.styles.root.radius))).toStrictEqual({ token: 'border/radius/8' })
  })
  it('two overrides that target the same variant do not contradict each other', async () => {
    const { plugin } = await button()
    const { matches } = plugin.__test
    const { variants, grouped } = await realGrouping()
    for (const v of variants) {
      const seen: Record<string, MockData> = {}
      for (const o of grouped) {
        if (!matches(o.when, v.cfg)) continue
        for (const c of Object.keys(o.styles)) for (const f of Object.keys(o.styles[c])) {
          const k = c + '|' + f
          const x = key(o.styles[c][f])
          expect(!(k in seen) || seen[k] === x, 'contradiction sur ' + k + ' pour ' + key(v.cfg)).toBeTruthy()
          seen[k] = x
        }
      }
    }
  })
  it('grouping: a field that disappeared is written null, and the result is stable', async () => {
    const { groupOverrides } = (await button()).plugin.__test
    const d = { cfg: { a: 'x', b: 'p' }, styles: { root: { gap: { raw: 4 }, radius: { raw: 2 } } } }
    const vs = [d,
      { cfg: { a: 'y', b: 'p' }, styles: { root: { gap: { raw: 4 } } } },
      { cfg: { a: 'y', b: 'q' }, styles: { root: { gap: { raw: 4 } } } },
      { cfg: { a: 'x', b: 'q' }, styles: { root: { gap: { raw: 4 }, radius: { raw: 2 } } } }]
    const r = groupOverrides(['a', 'b'], { a: ['x', 'y'], b: ['p', 'q'] }, vs, d)
    expect(JSON.parse(key(r))).toStrictEqual([{ when: { a: 'y' }, styles: { root: { radius: null } } }])
    expect(key(groupOverrides(['a', 'b'], { a: ['x', 'y'], b: ['p', 'q'] }, vs, d))).toBe(key(r))
  })
  it('self-check: an inconsistent input throws an error that names the variant', async () => {
    const { groupOverrides } = (await button()).plugin.__test
    const d = { cfg: { a: 'x' }, styles: { root: { gap: { raw: 4 } } } }
    const vs = [d,
      { cfg: { a: 'y' }, styles: { root: { gap: { raw: 8 } } } },
      { cfg: { a: 'y' }, styles: { root: { gap: { raw: 12 } } } }]
    expect(() => groupOverrides(['a'], { a: ['x', 'y'] }, vs, d)).toThrow(/incohérent.*"a":"y"/)
  })
  it('matches: a value, a list of values, or an empty when', async () => {
    const { matches } = (await button()).plugin.__test
    expect(matches({ a: 'x' }, { a: 'x', b: 'p' })).toBe(true)
    expect(matches({ a: 'x' }, { a: 'y' })).toBe(false)
    expect(matches({ a: ['x', 'y'] }, { a: 'y' })).toBe(true)
    expect(matches({ a: ['x', 'y'] }, { a: 'z' })).toBe(false)
    expect(matches({ a: 'x', b: ['p'] }, { a: 'x', b: 'q' })).toBe(false)
    expect(matches({}, { a: 'x' })).toBe(true)
  })
  it('effectiveStyles: the default without when, the overrides that target, null that removes, emptied layer that disappears', async () => {
    const { effectiveStyles, canonical } = (await button()).plugin.__test
    const st = {
      default: { when: { a: 'x' }, root: { gap: { raw: 4 }, radius: { raw: 2 } }, icon: { opacity: 0.5 } },
      overrides: [
        { when: { a: 'y' }, styles: { root: { radius: null }, ring: { opacity: 0.2 } } },
        { when: { a: ['y', 'z'] }, styles: { icon: { opacity: null } } },
        { when: { a: 'x' }, styles: { ring: { opacity: null } } }
      ]
    }
    expect(canonical(effectiveStyles(st, { a: 'x' }))).toBe(canonical({ root: { gap: { raw: 4 }, radius: { raw: 2 } }, icon: { opacity: 0.5 } }))
    expect(canonical(effectiveStyles(st, { a: 'y' }))).toBe(canonical({ root: { gap: { raw: 4 } }, ring: { opacity: 0.2 } }))
    expect(canonical(effectiveStyles(st, { a: 'z' }))).toBe(canonical({ root: { gap: { raw: 4 }, radius: { raw: 2 } } }))
    expect(st.default.root.radius.raw, 'le défaut n\'est pas modifié').toBe(2)
  })
  it('canonical: sorted keys, absent distinct from null', async () => {
    const { canonical } = (await button()).plugin.__test
    expect(canonical({ b: 1, a: [2, { d: 3, c: null }] })).toBe(canonical({ a: [2, { c: null, d: 3 }], b: 1 }))
    expect(canonical(undefined)).not.toBe(canonical(null))
  })
  it('occurrences of real Button: the raw minimum width counts 50 variants, not 1 override', async () => {
    const { plugin } = await button()
    const { effectiveStyles, variantsPerIssue, issueSignature } = plugin.__test
    const fb = real03()
    const byVariant = fb.variants.map((v: MockData[]) => plain(effectiveStyles(fb.styles, v.values)))
    const n = variantsPerIssue(byVariant)
    const i = fb.issues.find((x: MockData) => x.where === 'styles.root.layout.minWidth')
    expect(n.get(issueSignature(i))).toBe(50)
  })
  it('applicableTree: configs takes precedence over when, and only applies to its variants', async () => {
    const { applicableTree } = (await button()).plugin.__test
    const trees = [
      { when: {}, tree: 'A' },
      { when: { a: 'y' }, tree: 'C' },
      { when: {}, configs: [{ a: 'x', b: 'p' }, { a: 'y', b: 'q' }], tree: 'B' }
    ]
    const tree = (cfg: MockData) => applicableTree(trees, cfg).tree
    expect(tree({ a: 'x', b: 'p' })).toBe('B')
    expect(tree({ a: 'y', b: 'q' })).toBe('B')
    expect(tree({ b: 'p', a: 'x' })).toBe('B')
    expect(tree({ a: 'x', b: 'q' })).toBe('A')
    expect(tree({ a: 'y', b: 'p' })).toBe('C')
  })
  it('working copies: a single prefix removed, for the component name and the file name', async () => {
    const { withoutCopyPrefix, fileName, COPY_PREFIXES } = (await button()).plugin.__test
    expect(plain(COPY_PREFIXES)).toStrictEqual(['Test/', 'Retour/', 'IA/'])
    expect(withoutCopyPrefix('Test/Button')).toBe('Button')
    expect(withoutCopyPrefix('Retour/Tag')).toBe('Tag')
    expect(withoutCopyPrefix('IA/Tag')).toBe('Tag')
    expect(withoutCopyPrefix('Retour/IA/Tag')).toBe('IA/Tag')
    expect(withoutCopyPrefix('native/SelectList')).toBe('native/SelectList')
    expect(fileName('Retour/Button')).toBe('button.json')
    expect(fileName('IA/InputText')).toBe('inputtext.json')
  })
  const propertiesPage = () => fs.readFileSync(path.join(DOCS, 'regles', '03-proprietes.md'), 'utf8')
  // The plugin opened with a given Properties page, read on the fake network.
  const openWithRules = async (options: MockData) => {
    const doc = buttonDocument()
    doc.network = fakeNetwork({ ...BUTTON_NETWORK, ...options })
    const p = createFakePlugin(doc)
    await p.send({ type: 'ui-pret' })
    return { doc, p, banners: p.messages.filter((m: MockData) => m.type === 'regles').map((m: MockData) => m.warning) }
  }
  const replaceText = (text: string, before: string, after: string) => {
    expect(text.includes(before), 'texte absent de la page : ' + before).toBeTruthy()
    return text.replace(before, after)
  }
  const embeddedCopy = async () => {
    const t = (await button()).plugin.__test
    return plain({ order: t.ORDER, fixed: t.FIXED_VALUES, trueFalse: t.TRUE_FALSE_VARIANTS, synonyms: t.SYNONYMS })
  }
  const activeRules = (p: MockData) => plain({ order: p.__test.ORDER, fixed: p.__test.FIXED_VALUES, trueFalse: p.__test.TRUE_FALSE_VARIANTS, synonyms: p.__test.SYNONYMS })
  it('nomenclature: the constants of code.js follow the tables of 03-proprietes.md', async () => {
    const { ORDER, FIXED_VALUES, TRUE_FALSE_VARIANTS, SYNONYMS, PRIORITY, readPropertyRules } = (await button()).plugin.__test
    const rules = plain(readPropertyRules(propertiesPage()))
    expect(plain(ORDER)).toStrictEqual(rules.order)
    expect(plain(FIXED_VALUES)).toStrictEqual(rules.fixed)
    expect(plain(TRUE_FALSE_VARIANTS)).toStrictEqual(rules.trueFalse)
    expect(plain(SYNONYMS)).toStrictEqual(rules.synonyms)
    expect([...plain(PRIORITY)].sort()).toStrictEqual([...rules.order[0]].sort())
  })
  it('rules: the plugin reads the page on the ai-ready-docs branch, once, without a banner if all is well', async () => {
    const { doc, p, banners } = await openWithRules({ rules: propertiesPage() })
    await p.send({ type: 'ui-pret' })
    expect(banners).toStrictEqual([])
    expect(doc.network.calls.filter((u: string) => u === 'https://raw.githubusercontent.com/AxaFrance/design-system/ai-ready-docs/ai-ready-docs/regles/03-proprietes.md').length).toBe(1)
    expect(activeRules(p)).toStrictEqual(await embeddedCopy())
  })
  it('rules: the first check follows an imposed value changed in the doc', async () => {
    const page = replaceText(propertiesPage(), '| hierarchy | Variante | primary, secondary, tertiary |', '| hierarchy | Variante | primary, tertiary |')
    const { p, banners } = await openWithRules({ rules: page })
    await p.send({ type: 'controler' })
    expect(banners).toStrictEqual([])
    expect(p.lastMessage().issues.some((i: MockData) => i.rule === 'prop-valeurs' && i.where === 'api.props.hierarchy' && i.message.includes('secondary'))).toBeTruthy()
  })
  it('rules: the check follows a name to avoid added in the doc', async () => {
    const page = replaceText(propertiesPage(), '| theme | _theme |', '| theme | _theme |\n| hierarchy | importance |')
    const { p } = await openWithRules({ rules: page })
    await p.send({ type: 'controler' })
    expect(p.lastMessage().issues.some((i: MockData) => i.rule === 'prop-synonyme' && i.where === 'api.props.hierarchy' && i.message.includes('importance'))).toBeTruthy()
  })
  it('rules: a new property of the doc takes its place and its values', async () => {
    const page = replaceText(propertiesPage(), '| show* | Booléen |', '| density | Variante | compact, comfortable | La densité. | Non |\n| show* | Booléen |')
    const { p, banners } = await openWithRules({ rules: page })
    expect(banners).toStrictEqual([])
    expect(plain(p.__test.ORDER)[0].at(-1)).toBe('density')
    expect(plain(p.__test.FIXED_VALUES).density).toStrictEqual(['compact', 'comfortable'])
  })
  it('rules: a sentence added in a list suspends the check and says so', async () => {
    const page = replaceText(propertiesPage(), '| state | Variante | default, hover, focus, press |', '| state | Variante | default, hover, focus, press, et quelques autres |')
    const { p, banners } = await openWithRules({ rules: page })
    expect(banners).toStrictEqual(['La doc ne donne plus de liste de valeurs pour state. Le plugin ne contrôle plus ces valeurs.'])
    expect(plain(p.__test.FIXED_VALUES).state).toBe(undefined)
  })
  for (const [scenario, options] of [
    ['GitHub injoignable', { outage: true }],
    ['une page absente', { status: 404 }],
    ['une page sans le tableau des noms à éviter', { rules: '## Variantes et booléens\n\n| a | b | c |\n|---|---|---|\n| state | Variante | default |\n\n## Contenu\n' }],
    ['une page au type inconnu', { rules: '## Variantes et booléens\n\n| a | b | c |\n|---|---|---|\n| state | Propriété | default |\n' }],
    ['une page vide', { rules: '' }]
  ]) {
    it('règles : ' + scenario + ', le plugin garde sa copie et affiche le bandeau', async () => {
      const { p, banners } = await openWithRules(options)
      expect(banners).toStrictEqual([p.__test.UNREADABLE_RULES_MESSAGE])
      expect(activeRules(p)).toStrictEqual(await embeddedCopy())
    })
  }
  it('rules: a GitHub that does not answer does not block for more than 3 seconds', async () => {
    const clock = fakeClock()
    const doc = buttonDocument()
    doc.network = fakeNetwork({ ...BUTTON_NETWORK, mute: true })
    doc.clock = clock
    const p = createFakePlugin(doc)
    const ready = p.send({ type: 'ui-pret' })
    await clock.advance(3000)
    await ready
    expect(p.messages.filter((m: MockData) => m.type === 'regles').map((m: MockData) => m.warning)).toStrictEqual([p.__test.UNREADABLE_RULES_MESSAGE])
    expect(p.messages.some((m: MockData) => m.type === 'selection')).toBeTruthy()
  })
  it('tokens: a published file with the new typography prefix is recognized', async () => {
    const { publishedPaths } = (await button()).plugin.__test
    expect([...publishedPaths(plain(tokensFile(['typography.label.1.semibold'])))]).toStrictEqual(['typography.label.1.semibold'])
  })
  it('raw sizes: a fixed width is reported, not that of a stretched absolute layer', async () => {
    const { stylesIssues } = (await button()).plugin.__test
    const styles = { default: {
      icon: { layout: { sizingH: 'fixed', width: { raw: 24 }, sizingV: 'fixed', height: { raw: 24 } } },
      ring: { layout: { absolute: true, x: -2, y: -2, constraints: { horizontal: 'stretch', vertical: 'stretch' }, sizingH: 'fixed', width: { raw: 40 }, sizingV: 'fixed', height: { raw: 40 } } },
      barre: { layout: { absolute: true, x: 0, y: 0, constraints: { horizontal: 'stretch', vertical: 'top' }, width: { raw: 40 }, height: { raw: 8 } } }
    } }
    const where = Array.from(stylesIssues(styles).map((i: MockData) => i.where)).sort()
    expect(where).toStrictEqual(['styles.barre.layout.height', 'styles.icon.layout.height', 'styles.icon.layout.width'])
  })
  it('order of the properties: at equal rank, the position of the driven layer comes before the creation order', async () => {
    const v = layer('COMPONENT', 'Toggle', { id: 'T:2' }, [
      layer('FRAME', 'left-icon', { componentPropertyReferences: { visible: 'showLeftIcon#2:1' } }),
      layer('FRAME', 'right-icon', { componentPropertyReferences: { visible: 'showRightIcon#2:0' } })
    ])
    v.componentPropertyDefinitions = {
      'showRightIcon#2:0': { type: 'BOOLEAN', defaultValue: false },
      'showLeftIcon#2:1': { type: 'BOOLEAN', defaultValue: false }
    }
    connect(v)
    expect(plain((await button()).plugin.__test.prepare(v).props.map((p: MockData) => p.name))).toStrictEqual(['showLeftIcon', 'showRightIcon'])
  })
})

// ------------------------------------------------------------ a component that deviates
describe('A component that deviates from the nomenclature', () => {
  for (const [name, expected] of [['BadButton', 0], ['Bad Button v2', 1], ['AIBadge', 1], ['AiBadge', 0], ['_PaginationItem', 0], ['native/SelectList', 0]]) {
    it('composant : ' + name + (expected ? ' signalé' : ' conforme'), async () => {
      const d = deviationsDocument()
      d.selection[0].name = name
      const r = await exportSheet(d)
      expect(issuesFor(r.sheet, 'composant-nom', 'meta.name').length).toBe(expected)
    })
  }
  it('properties: camelCase, is, show, disabled, synonyms, values, state', async () => {
    const { sheet } = await deviations()
    const where = (rule: string, where: string) => issuesFor(sheet, rule, where).length
    expect(where('prop-nom', 'api.props.Size')).toBe(1)
    expect(where('prop-prefixe', 'api.props.isSelected')).toBe(1)
    expect(where('prop-booleen', 'api.props.isSelected')).toBe(0)
    expect(where('prop-disabled', 'api.props.disabled')).toBe(1)
    expect(where('prop-booleen', 'api.props.hasIcon')).toBe(1)
    expect(where('prop-booleen', 'api.props.showIcon')).toBe(0)
    expect(where('prop-synonyme', 'api.props.variant')).toBe(1)
    expect(where('prop-synonyme', 'api.props.mode')).toBe(1)
    expect(where('prop-valeur', 'api.props.Size')).toBe(1)
    expect(where('prop-valeurs', 'api.props.state')).toBe(1)
    expect(issuesFor(sheet, 'prop-valeurs', 'api.props.state')[0].message).toMatch(/disabled est une variante à part/)
    expect(where('prop-etat', 'api.props.mode')).toBe(1)
  })
  it('content property: the layer that fills it carries its name', async () => {
    expect(issuesFor((await deviations()).sheet, 'prop-calque', 'structure.slots.text').length).toBe(1)
  })
  it('layers: default name, prefix, text named by its content, frames, casing, instance', async () => {
    const { sheet } = await deviations()
    const where = (rule: string, where: string) => issuesFor(sheet, rule, where).length
    expect(where('calque-defaut', 'calque Frame 27')).toBe(1)
    expect(where('calque-prefixe', 'calque bad-button-label')).toBe(1)
    expect(where('calque-texte', 'calque Votre devis en 2 minutes')).toBe(1)
    expect(where('calque-cadre', 'calque label-and-icon')).toBe(1)
    expect(where('calque-casse', 'calque Left Icon')).toBe(1)
    expect(where('calque-instance', 'calque account_balance')).toBe(1)
  })
  it('no deviation is reported as an error', async () => {
    expect(!(await deviations()).sheet.issues.some((i: MockData) => i.level === 'error')).toBeTruthy()
  })
})

// ------------------------------------------------------------ the plugin, through messages
describe('The plugin, through messages', () => {
  it('opening: version, and selection brought back to the variant set', async () => {
    const { p } = await openPlugin()
    const init = p.messages.find((m: MockData) => m.type === 'init')
    expect(init.version).toBe(p.__test.VERSION)
    const sel = p.messages.filter((m: MockData) => m.type === 'selection').pop()
    expect({ name: sel.name, variants: sel.variants, properties: sel.properties }).toStrictEqual({ name: 'Button', variants: 2, properties: 6 })
    expect(sel.latestVersion, 'jamais exporté : aucune version enregistrée').toBe(null)
  })
  it('after an export, the selection carries the last stored version', async () => {
    const { p, msg } = await generate()
    await p.send({ type: 'memoriser', id: msg.id })
    await p.send({ type: 'ui-pret' })
    const sel = p.messages.filter((m: MockData) => m.type === 'selection').pop()
    expect(sel.latestVersion).toBe('1.0.0')
  })
  it('check: returns the nomenclature issues, not the raw values', async () => {
    const { p } = await openPlugin()
    await p.send({ type: 'controler' })
    const c = p.lastMessage()
    expect(c.type).toBe('controle')
    expect(c.issues.every((i: MockData) => /^(prop|calque|composant|texte)-/.test(i.rule))).toBeTruthy()
  })
  it('generation: the JSON, with its version and that of the tokens, and the file name in lowercase', async () => {
    const { sheet } = await button()
    const { msg } = await generate()
    expect(msg.type).toBe('fiche')
    expect(msg.file).toBe('button.json')
    expect(msg.changelogFile).toBe('button-changelog.md')
    expect(msg.json).toBe(withVersions(sheet, '1.0.0', '2.1.0'))
  })
  it('file name: lowercase, without path separator', async () => {
    const { fileName, changelogName } = (await button()).plugin.__test
    expect(changelogName('Retour/Button')).toBe('button-changelog.md')
    expect(changelogName('native/SelectList')).toBe('native-selectlist-changelog.md')
    expect(fileName('InputText')).toBe('inputtext.json')
    expect(fileName('native/SelectList')).toBe('native-selectlist.json')
  })
  it('nothing selected: error message, no exception', async () => {
    const { doc, p } = await openPlugin()
    doc.selection.length = 0
    await p.send({ type: 'generer' })
    expect(p.lastMessage().type).toBe('erreur')
  })
})

// ------------------------------------------------------------ the À corriger list
describe('The À corriger list', () => {
  it('readableLocation: nomenclature, styles, layers and variables', async () => {
    const { readableLocation } = (await button()).plugin.__test
    expect(readableLocation('meta.name')).toBe('Nom du composant')
    expect(readableLocation('api.props.isSelected')).toBe('Propriété isSelected')
    expect(readableLocation('structure.slots.label')).toBe('Propriété label')
    expect(readableLocation('calque Frame 27')).toBe('Calque Frame 27')
    expect(readableLocation('tokens.color/blue/700')).toBe('Variable color/blue/700')
    expect(readableLocation('styles.root.layout.minWidth')).toBe('Racine, largeur minimale')
    expect(readableLocation('styles.left-icon.layout.height')).toBe('left-icon, hauteur')
    expect(readableLocation('styles.left-icon/vector.background')).toBe('Vecteur de left-icon, fond')
    expect(readableLocation('styles.root.padding.top')).toBe('Racine, marges intérieures haut')
    expect(readableLocation('styles.label.textColor')).toBe('label, couleur du texte')
    expect(readableLocation('styles.caption.typography')).toBe('caption, typo')
    expect(readableLocation('autre chose')).toBe('autre chose')
  })
  it('location: the raw width of the icon carries the ids of the icons, in each variant', async () => {
    const detail = await buttonDetail()
    const locationsOf = (where: string) => plain(detail.locations[detail.sheet.issues.findIndex((i: MockData) => i.where === where)])
    const l = locationsOf('styles.left-icon.layout.width')
    expect(plain(l.ids).sort()).toStrictEqual(['LI:state=default, hierarchy=primary', 'LI:state=hover, hierarchy=primary'])
    expect(l.variants).toBe(2)
    expect([...locationsOf('styles.root.padding.top').ids].sort()).toStrictEqual(['V:state=default, hierarchy=primary', 'V:state=hover, hierarchy=primary'])
  })
  it('location: a text without a style, an issue specific to a variant, the variables without a node', async () => {
    const detail = await buttonDetail()
    const locationsOf = (where: string) => plain(detail.locations[detail.sheet.issues.findIndex((i: MockData) => i.where === where)])
    expect([...locationsOf('styles.caption').ids].sort()).toStrictEqual(['CA:state=default, hierarchy=primary', 'CA:state=hover, hierarchy=primary'])
    expect(locationsOf('styles.root.stroke')).toStrictEqual({ ids: ['V:state=hover, hierarchy=primary'], variants: 1 })
    expect(locationsOf('tokens.color/blue/700')).toStrictEqual({ ids: [], variants: 0 })
    expect(locationsOf('structure.slots.leftIcon')).toStrictEqual({ ids: ['S:100'], variants: 0 })
  })
  it('location: nomenclature, the component or all the layers of that name', async () => {
    const detail = await deviationsDetail()
    const i = (where: string) => plain(detail.locations[detail.sheet.issues.findIndex((x: MockData) => x.where === where)])
    expect(i('calque Frame 27')).toStrictEqual({ ids: ['F:27'], variants: 1 })
    expect(i('api.props.Size')).toStrictEqual({ ids: ['S:200'], variants: 0 })
  })
  it('the serialized JSON contains no ids, no labels, no date', async () => {
    const { plugin, sheet, text } = await button()
    const detail = await buttonDetail()
    expect(!/"(ids|location|variantes_touchees)"/.test(text)).toBeTruthy()
    expect(!text.includes('LI:state')).toBeTruthy()
    expect(plugin.__test.serialize(detail.sheet)).toBe(text)
    for (const i of sheet.issues) expect(Object.keys(i).filter((k) => k === 'ids' || k === 'location')).toStrictEqual([])
  })
  it('check: each issue has its readable label and its ids', async () => {
    const { p } = await openPlugin()
    await p.send({ type: 'controler' })
    for (const i of p.lastMessage().issues) { expect(typeof i.location).toBe('string'); expect(Array.isArray(i.ids)).toBeTruthy() }
  })
  it('generation: readable issues, summary, no changes at the first export', async () => {
    const { sheet } = await button()
    const { msg } = await generate()
    const i = msg.issues.find((x: MockData) => x.where === 'styles.left-icon.layout.width')
    expect(i.location).toBe('left-icon, largeur')
    expect(i.ids.length).toBe(2)
    expect(i.variants).toBe(2)
    expect(msg.json).toBe(withVersions(sheet, '1.0.0', '2.1.0'))
    expect(msg.changes).toBe(null)
    expect(plain(msg.summary)).toStrictEqual({ variants: 2, properties: 6, variables: 5, textStylesCount: 1, overrides: 1, kb: msg.summary.kb })
    expect(msg.summary.kb >= 1).toBeTruthy()
  })
  it('summary of real Button: variants, overrides, weight in KB', async () => {
    const { summarize } = (await button()).plugin.__test
    const raw = fs.readFileSync(BUTTON_03, 'utf8')
    const r = summarize(JSON.parse(raw), raw)
    expect(r.variants).toBe(50)
    expect(r.overrides).toBe(27)
    expect(r.kb).toBe(Math.round(Buffer.byteLength(raw) / 1024))
  })
})

// ------------------------------------------------------------ the selection from an issue
describe('The selection from an issue', () => {
  const iconsOf = (msg: MockData) => msg.issues.find((x: MockData) => x.where === 'styles.left-icon.layout.width').ids

  it('selectionner: the nodes are selected and brought on screen', async () => {
    const { p, msg } = await generate()
    const icons = iconsOf(msg)
    await p.send({ type: 'selectionner', ids: icons, id: 'S:100' })
    expect(p.figma.currentPage.selection.map((n: MockData) => n.id)).toStrictEqual(icons)
    expect(p.selections.length).toBe(1)
  })
  it('the name sent to the interface is that of the JSON, without the working copy prefix', async () => {
    const doc = buttonDocument()
    const variantSet = doc.selection[0]
    variantSet.name = 'Test/Button'
    const { p } = await openPlugin(doc)
    const sel = p.messages.filter((m: MockData) => m.type === 'selection').pop()
    expect(sel.name).toBe('Button')
    expect(p.__test.withoutCopyPrefix('Test/Button')).toBe('Button')
  })
  it('a layer selected in the component keeps the same component', async () => {
    const { p, msg } = await generate()
    await p.send({ type: 'selectionner', ids: iconsOf(msg), id: 'S:100' })
    await p.send({ type: 'ui-pret' })
    const sel = p.messages.filter((m: MockData) => m.type === 'selection').pop()
    expect(sel.id).toBe('S:100')
    expect(sel.name).toBe('Button')
  })
  it('without a click on an issue, a nested instance keeps its main component', async () => {
    const { doc, p, msg } = await generate()
    const icons = iconsOf(msg)
    await p.send({ type: 'selectionner', ids: icons, id: 'S:100' })
    await p.send({ type: 'ui-pret' })
    // leave the button, then come back by directly selecting an icon
    p.figma.currentPage.selection = [doc.nodes[0]]
    await p.send({ type: 'ui-pret' })
    p.figma.currentPage.selection = [await p.figma.getNodeByIdAsync(icons[0])]
    await p.send({ type: 'ui-pret' })
    const sel = p.messages.filter((m: MockData) => m.type === 'selection').pop()
    expect(sel.id).not.toBe('S:100')
  })
  it('selectionner: vanished nodes give a message, not an exception', async () => {
    const { p } = await openPlugin()
    await p.send({ type: 'selectionner', ids: ['absent:1'] })
    expect(p.lastMessage().type).toBe('erreur')
  })
})

// ------------------------------------------------------------ since the last export
describe('Since the last export', () => {
  // a copied export: generated, then stored for the component
  const exportStored = async () => {
    const { doc, p } = await openPlugin()
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    return { doc, p }
  }

  it('nothing is stored before a copy, nor for another component', async () => {
    const { doc, p } = await generate()
    expect(doc.nodes[1].getSharedPluginData('canopee_fiches', 'export'), 'enregistré avant toute copie').toBe('')
    await p.send({ type: 'memoriser', id: 'autre:1' })
    expect(doc.nodes[1].getSharedPluginData('canopee_fiches', 'export'), 'enregistré pour un autre composant').toBe('')
  })
  it('an export leaves no JSON on the machine', async () => {
    const { p } = await exportStored()
    expect(Object.keys(p.clientStorage), 'le stockage du poste reste vide').toStrictEqual([])
  })
  it('same component exported again: no change, and no date', async () => {
    const { p } = await exportStored()
    await p.send({ type: 'generer' })
    expect(plain(p.lastMessage().changes)).toStrictEqual({ sentences: [] })
  })
  it('without a shared base, there is nothing to compare, even with an old export kept on the machine', async () => {
    const doc = buttonDocument()
    doc.clientStorage = { 'dernier-export:KEY-BUTTON': { json: '{}', date: '2026-10-01T00:00:00.000Z' } }
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    expect(p.lastMessage().changes).toBe(null)
  })
  it('a modified default text shows up in the changes', async () => {
    const { doc, p } = await exportStored()
    doc.nodes[1].componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await p.send({ type: 'generer' })
    expect(plain(p.lastMessage().changes.sentences)).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
  })
})

// ------------------------------------------------------------ the comparison of two sheets
describe('The comparison of two sheets', () => {
  it('Button 0.2 against 0.3: exactly the known changes, and nothing else', async () => {
    const { compareSheets } = (await button()).plugin.__test
    expect(plain(compareSheets(real02(), real03()))).toStrictEqual([
      '32 variantes déplacées sur le canevas',
      { title: 'Toutes les variantes', lines: [
        'left-icon, largeur : 24 en brut → size/24',
        'left-icon, hauteur : 24 en brut → size/24',
        'right-icon, largeur : 24 en brut → size/24',
        'right-icon, hauteur : 24 en brut → size/24'
      ] },
      { title: 'state=focus, colorScheme=business', lines: ['Fond : color/orange/600 → color/orange/700'] },
      'Variables ajoutées : size/24'
    ])
  })
  it('a sheet compared with itself: no change', async () => {
    const { compareSheets } = (await button()).plugin.__test
    expect(plain(compareSheets(real03(), real03()))).toStrictEqual([])
    expect(plain(compareSheets(real02(), real02()))).toStrictEqual([])
  })
  it('properties reordered in the panel: a single change', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const b = plain(real03())
    const { showRightIcon, showLeftIcon, _theme } = b.api.props
    delete b.api.props.showRightIcon; delete b.api.props.showLeftIcon; delete b.api.props._theme
    Object.assign(b.api.props, { showLeftIcon, showRightIcon, _theme })
    expect(plain(compareSheets(real03(), b))).toStrictEqual(['Ordre des propriétés modifié'])
  })
  it('properties, variants, structure and issues', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const b = plain(real03())
    b.api.props.state.enum = b.api.props.state.enum.filter((v: string) => v !== 'press')
    b.api.props.state.default = 'hover'
    b.api.props.nouvelle = { type: 'boolean', default: false }
    delete b.api.props.disabled
    b.variants = b.variants.slice(1)
    b.structure.trees[0].tree.pop()
    b.issues = []
    const r = compareSheets(real03(), b)
    expect(r.includes('Propriété ajoutée : nouvelle')).toBeTruthy()
    expect(r.includes('Propriété retirée : disabled')).toBeTruthy()
    expect(r.includes('Propriété state, valeurs retirées : press')).toBeTruthy()
    expect(r.includes('Propriété state, valeur par défaut : default → hover')).toBeTruthy()
    expect(r.some((x: string) => /^Variante retirée : state=default, disabled=false/.test(x))).toBeTruthy()
    expect(r.includes('Structure des calques modifiée')).toBeTruthy()
    expect(r.includes('Défauts : 1 → 0')).toBeTruthy()
  })
  it('paddings grouped, without « Racine », and the size of a stretched absolute layer ignored', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const variant = (size: string, theme: string) => ({ values: { state: 'focus', size: size, _theme: theme }, position: [0, 0] })
    const pad = (h: string, v: string) => ({ top: { token: v }, right: { token: h }, bottom: { token: v }, left: { token: h } })
    const ring = (w: number) => ({ layout: { absolute: true, x: -5, y: -5, constraints: { horizontal: 'stretch', vertical: 'stretch' }, sizingH: 'fixed', width: { raw: w } } })
    const sheet = (pp: MockData, pc: MockData, wp: number, wc: number) => ({
      variants: [variant('medium', 'prospect'), variant('medium', 'client'), variant('large', 'prospect'), variant('large', 'client')],
      styles: {
        default: { when: { state: 'focus', size: 'large', _theme: 'prospect' }, root: { padding: pad('spacing/24', 'spacing/12') }, 'focus-ring': ring(101) },
        overrides: [
          { when: { size: 'medium', _theme: 'prospect' }, styles: { root: { padding: pp }, 'focus-ring': ring(wp) } },
          { when: { size: 'medium', _theme: 'client' }, styles: { root: { padding: pc }, 'focus-ring': ring(wc) } }
        ]
      }
    })
    const before = sheet(pad('spacing/24', 'spacing/12'), pad('spacing/16', 'spacing/16'), 101, 85)
    const after = sheet(pad('spacing/16', 'spacing/12'), pad('spacing/12', 'spacing/12'), 85, 77)
    expect(plain(compareSheets(before, after))).toStrictEqual([
      { title: 'size=medium, _theme=prospect', lines: ['Marges horizontales : spacing/24 → spacing/16'] },
      { title: 'size=medium, _theme=client', lines: ['Marges, sur les quatre côtés : spacing/16 → spacing/12'] }
    ])
  })
  it('beyond 20 sentences: the first 20, then the remaining count', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const fa: MockData = { structure: { slots: {} } }
    const fb: MockData = { structure: { slots: {} } }
    for (let k = 0; k < 25; k++) { fa.structure.slots['s' + k] = { default: { text: 'a' } }; fb.structure.slots['s' + k] = { default: { text: 'b' } } }
    const r = compareSheets(fa, fb)
    expect(r.length).toBe(21)
    expect(r[20]).toBe('et 5 autres changements')
  })
})

// ------------------------------------------------------------ the window
describe('The window', () => {
  // the size chosen by hand, then the useful measures
  const inManual = async () => {
    const p = createFakePlugin(buttonDocument())
    await p.send({ type: 'redimensionner-manuel', width: 200, height: 5000 })
    return p
  }

  it('automatic height bounded between 320 and 760, width 440', async () => {
    const p = createFakePlugin(buttonDocument())
    await p.send({ type: 'redimensionner', height: 2000 })
    await p.send({ type: 'redimensionner', height: 100 })
    expect(p.resizes).toStrictEqual([[440, 760], [440, 320]])
  })
  it('manual size bounded, applied and stored under the key taille', async () => {
    const p = await inManual()
    expect(p.resizes[p.resizes.length - 1]).toStrictEqual([320, 1200])
    expect(plain(p.clientStorage.taille)).toStrictEqual({ largeur: 320, hauteur: 1200 })
  })
  it('automatic height ignored as long as the size is manual', async () => {
    const p = await inManual()
    const before = p.resizes.length
    await p.send({ type: 'redimensionner', height: 500 })
    expect(p.resizes.length).toBe(before)
  })
  it('back to the automatic size: preference deleted, width 440, new height requested', async () => {
    const p = await inManual()
    const before = p.messages.length
    await p.send({ type: 'taille-auto' })
    expect(p.clientStorage.taille).toBe(undefined)
    expect(p.resizes[p.resizes.length - 1]).toStrictEqual([440, 1200])
    expect(p.messages.slice(before).some((m: MockData) => m.type === 'recalculer-hauteur')).toBeTruthy()
  })
  it('automatic height resumed after taille-auto', async () => {
    const p = await inManual()
    await p.send({ type: 'taille-auto' })
    const before = p.resizes.length
    await p.send({ type: 'redimensionner', height: 500 })
    expect(p.resizes.length).toBe(before + 1)
    expect(p.resizes[p.resizes.length - 1]).toStrictEqual([440, 500])
  })
  it('stored size read again at opening, bounded, without touching the stored exports', async () => {
    const pr = createFakePlugin(Object.assign(buttonDocument(), { clientStorage: { taille: { largeur: 550, hauteur: 250 }, 'dernier-export:K': { json: '{}', date: '2026-10-01T00:00:00.000Z' } } }))
    await new Promise((r) => setTimeout(r, 0))
    expect(pr.resizes).toStrictEqual([[550, 300]])
    expect(pr.clientStorage['dernier-export:K'].json).toBe('{}')
  })
})

// ------------------------------------------------------------ the interface
describe('The interface', () => {
  const html = () => fs.readFileSync(path.join(PLUGIN, 'dist', 'ui.html'), 'utf8')
  // The page without its layout: one space between words, none around the tags. The checks on the
  // markup and the style do not depend on how the sources are formatted.
  const squash = (text: string) => text.replace(/\s+/g, ' ').replace(/ ?([<>]) ?/g, '$1')
  it('the script of ui.html compiles', () => {
    const m = html().match(/<script>([\s\S]*)<\/script>/)
    expect(m, 'script absent').toBeTruthy()
    new vm.Script(m![1])
  })
  it('escapeHtml also protects quotes, since it fills attributes', () => {
    const m = html().match(/(?:const|var|let) escapeHtml = .*/)
    expect(m, 'escapeHtml absent').toBeTruthy()
    const escapeHtml = new Function(m![0] + '; return escapeHtml')()
    expect(escapeHtml('a & <b> "c" \'d\'')).toBe('a &amp; &lt;b&gt; &quot;c&quot; &#39;d&#39;')
  })

  // A fake DOM: one element per id of the HTML, with what the script reads and writes.
  function fakeInterface(onSend?: MockData): MockData {
    const source = html()
    const elements: Record<string, MockData> = {}
    const sent: MockData[] = []
    const selection = { target: null }
    const downloads: MockData[] = []
    const copies: MockData[] = []
    const makeElement = (id: string, attrs: string): MockData => {
      const classes = new Set(((/class="([^"]*)"/.exec(attrs) || [])[1] || '').split(' ').filter(Boolean))
      const attributes = new Set()
      if (/\bhidden\b/.test(attrs.replace(/(class|title|aria-label|d|points)="[^"]*"/g, ''))) attributes.add('hidden')
      let text = ''
      let markup = ''
      const el = {
        id, checked: false, disabled: false, value: '', title: '', tabIndex: 0, onclick: null, onchange: null, onkeydown: null,
        dataset: {}, style: {}, offsetHeight: 0,
        get hidden() { return attributes.has('hidden') },
        set hidden(v) { if (v) attributes.add('hidden'); else attributes.delete('hidden') },
        get textContent() { return text },
        set textContent(v) { text = String(v); markup = '' },
        get innerHTML() { return markup || text },
        set innerHTML(v) { markup = String(v); text = '' },
        classList: { contains: (c: string) => classes.has(c), add: (c: string) => classes.add(c), remove: (c: string) => classes.delete(c), toggle: (c: string, force?: boolean) => { if (force === undefined ? !classes.has(c) : force) classes.add(c); else classes.delete(c) } },
        setAttribute(n: string, v: MockData) { if (n === 'hidden') this.hidden = true },
        toggleAttribute(n: string, force: boolean) { if (n === 'hidden') this.hidden = force },
        addEventListener() {}, setPointerCapture() {}, releasePointerCapture() {}, hasPointerCapture: () => false,
        focus() {}, select() {}, closest: () => null
      }
      return el
    }
    for (const m of source.matchAll(/<(\w+)([^>]*?)\bid="([^"]+)"([^>]*)>/g)) elements[m[3]] = makeElement(m[3], m[2] + ' ' + m[4])
    const context: MockData = {
      document: {
        getElementById: (id: string) => elements[id], body: { classList: { add() {}, remove() {} }, appendChild() {}, removeChild() {} }, createElement: () => { const a = makeElement('a', ''); a.click = () => downloads.push({ name: a.download, href: a.href }); return a }, execCommand: () => false,
        createRange: () => ({ selectNodeContents(this: MockData, el: MockData) { this.el = el } }),
        getSelection: () => ({ removeAllRanges() { selection.target = null }, addRange(r: MockData) { selection.target = r.el } })
      },
      parent: { postMessage: (m: MockData) => { sent.push(m.pluginMessage); if (onSend) onSend(m.pluginMessage) } },
      navigator: { clipboard: { writeText: async (t: MockData) => { copies.push(t) } } }, URL: { createObjectURL: (b: MockData) => 'blob:' + b.size + ':' + b.type, revokeObjectURL() {} }, Blob, Date, setTimeout, console
    }
    vm.createContext(context)
    new vm.Script(source.match(/<script>([\s\S]*)<\/script>/)![1]).runInContext(context)
    const receive = (m: MockData) => context.onmessage({ data: { pluginMessage: m } })
    return { el: elements, sent, receive, source: squash(source), selection, downloads, copies }
  }
  const selection = { type: 'selection', id: '1:2', name: 'Button', variants: 60, properties: 8 }
  const versionOf = (v: MockData) => Object.assign({ first: false, none: false, current: '1.0.0', version: '1.1.0', level: 'mineure', detected: 'mineure', tokensVersion: '2.0.0', next: '1.1.0' }, v)
  const answers = (ui: MockData, answer: string) => { ui.el['livree-' + answer].checked = true; ui.el['livree-' + answer].onchange() }
  // The fake DOM does not read the data-* attributes, the test gives the tab name itself.
  const openTab = (ui: MockData, name: string) => { ui.el['onglet-' + name].dataset.onglet = name; ui.el.onglets.onclick({ target: { closest: () => ui.el['onglet-' + name] } }) }
  const sheetWith = (v: MockData) => ({ type: 'fiche', id: '1:2', json: '{}', file: 'button.json', changelogFile: 'button-changelog.md', version: versionOf(v), summary: { variables: 1, overrides: 2, kb: 3 }, changes: { sentences: ['Une propriété a été ajoutée', 'Une valeur a changé'] }, issues: [] })
  const generated = (v: MockData) => { const ui = fakeInterface(); ui.receive(selection); ui.receive(sheetWith(v)); return ui }
  const ISSUE = { level: 'warning', rule: 'valeur-brute', where: 'styles.a.gap', message: 'Valeur brute.', ids: [] }

  it('there is no longer a header or a Version block', () => {
    const { source } = fakeInterface()
    expect(!/<header|class="entete"|<h1|id="bloc-version"|version-ligne|version-reste|version-changements|NB_PHRASES/.test(source)).toBeTruthy()
    expect(source.indexOf('id="infos"') < source.indexOf('id="onglets"'), 'la ligne du composant est au-dessus des onglets').toBeTruthy()
    expect(!/id="actions"[\s\S]*id="(refonte|fichemd|val-tokens)"[\s\S]*id="poignee"/.test(source), 'les cases et la ligne des tokens ne sont plus dans la zone des boutons').toBeTruthy()
  })
  it('the text of the JSON takes the free height of the window, without a handle of its own', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/#contenu, #panneau-json, #json-contenu \{ flex: 1 0 auto; display: flex; flex-direction: column; \}/)
    expect(source).toMatch(/#json \{[^}]*flex: 1 0 160px;[^}]*overflow: auto;/)
    expect(source).not.toMatch(/<textarea|resize: vertical/)
  })
  it('the automatic height is measured without the stretching of the JSON', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/body\.mesure #contenu, body\.mesure #panneau-json, body\.mesure #json-contenu, body\.mesure #json \{ flex-grow: 0; \}/)
    expect(source).toMatch(/classList\.add\(['"]mesure['"]\)[\s\S]*offsetHeight[\s\S]*classList\.remove\(['"]mesure['"]\)[\s\S]*type: ['"]redimensionner['"]/)
  })
  it('the plugin version is in the JSON tab, under the summary', () => {
    const ui = fakeInterface()
    expect(ui.source).toMatch(/<div class="panneau" id="panneau-json"[\s\S]*id="resume"[\s\S]*<p class="aide" id="version-plugin">[\s\S]*<pre id="json"/)
    ui.receive({ type: 'init', version: '0.4.3', format: '0.4' })
    expect(ui.el['version-plugin'].textContent).toBe('Plugin 0.4.3, format 0.4')
  })
  it('the card: tile background, 8 px radius, 16 px margin, above the tabs', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/#infos \{ padding: 16px; border-radius: 8px; background: var\(--fond-tuile\); \}/)
    // after the generation: the version next to the name, in brand blue, and the design tokens as a pill below
    expect(source).toMatch(/\.version-nom \{ font-size: 16px; line-height: 20px; font-weight: 700; color: var\(--texte-marque\); \}/)
    expect(source).toMatch(/\.pastilles \{ display: flex; flex-wrap: wrap; gap: 4px; margin-top: 12px; \}/)
    expect(source).not.toMatch(/class="tuile-libelle"|\.tuiles \{/)
    expect(source).toMatch(/\.filet \{ height: 1px; margin: 10px 0; background: var\(--figma-color-border, #e6e6e6\); \}/)
    expect(source).toMatch(/id="nom"[\s\S]*id="tuile-version"[\s\S]*id="etiquette"[\s\S]*id="compteurs"[\s\S]*id="regenerer"[\s\S]*id="tuiles"[\s\S]*id="tuile-tokens"[\s\S]*id="filet"[\s\S]*id="cases"/)
  })
  it('nothing selected: the invitation in the center, without a card, without tabs or buttons', () => {
    const ui = fakeInterface()
    expect(ui.el.actions.hidden, 'pas de bouton grisé avant le premier message').toBe(true)
    ui.receive({ type: 'selection', id: null, name: null })
    expect(ui.el.vide.hidden).toBe(false)
    expect(ui.el.infos.hidden).toBe(true)
    expect(ui.el.onglets.hidden).toBe(true)
    expect(ui.el.actions.hidden).toBe(true)
    expect(ui.source).toMatch(/<p class="vide-titre">Aucun composant sélectionné<\/p>/)
    expect(ui.source).toMatch(/<p class="aide">Sélectionner dans Figma un composant, son ensemble de variantes ou une de ses instances\.<\/p>/)
    expect(ui.source).toMatch(/\.vide \{ flex: 1 0 auto;[^}]*justify-content: center;/)
  })
  it('nothing selected: an error still shows, without the buttons', () => {
    const ui = fakeInterface()
    ui.receive({ type: 'selection', id: null, name: null })
    ui.receive({ type: 'erreur', message: 'Sélectionner un composant, ou un ensemble de variantes.' })
    expect(ui.el.actions.hidden).toBe(false)
    expect(ui.el.erreur.hidden).toBe(false)
    expect(ui.el.boutons.hidden).toBe(true)
  })
  it('a selection makes the card and the buttons appear', () => {
    const ui = fakeInterface()
    ui.receive({ type: 'selection', id: null, name: null })
    ui.receive(selection)
    expect(ui.el.vide.hidden).toBe(true)
    expect(ui.el.infos.hidden).toBe(false)
    expect(ui.el.actions.hidden).toBe(false)
    expect(ui.el.boutons.hidden).toBe(false)
    expect(ui.el.generer.disabled).toBe(false)
  })
  it('before the generation, the card gives the name, then the counters as pills on their own line, on the left', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    expect(ui.el.nom.textContent).toBe('Button')
    expect(ui.el.etiquette.innerHTML).toBe('')
    expect(ui.el.compteurs.hidden).toBe(false)
    expect(ui.el.compteurs.innerHTML).toBe('<span class="pastille"><b>60</b> variantes</span><span class="pastille"><b>8</b> propriétés</span><span class="pastille pastille-neutre">jamais exporté</span>')
    expect(ui.el.tuiles.hidden).toBe(true)
    expect(ui.el.filet.hidden).toBe(true)
    expect(ui.el.cases.hidden).toBe(true)
    expect(ui.source).toMatch(/\.rangee-nom \.compteurs \{[^}]*flex-basis: 100%;/)
    expect(ui.source).not.toMatch(/\.rangee-nom \.compteurs \{[^}]*margin-left: auto;/)
    expect(ui.source).toMatch(/\.pastille \{[^}]*background: var\(--figma-color-bg, #fff\);[^}]*font-size: 12px;/)
    expect(ui.source).toMatch(/\.pastille b \{ color: var\(--texte-marque\); \}/)
  })
  it('opened from an instance: a gray pill says so', () => {
    const ui = fakeInterface()
    ui.receive(Object.assign({}, selection, { viaInstance: true }))
    expect(ui.el.compteurs.innerHTML).toMatch(/<span class="pastille pastille-neutre">depuis une instance<\/span>$/)
  })
  it('after the generation, the name is alone, the tag follows it, only the Version and Design tokens tiles remain', () => {
    const ui = generated({})
    expect(ui.el.nom.textContent).toBe('Button')
    expect(ui.el.etiquette.innerHTML).toBe('<span class="etiquette etiquette-modifie">MINEURE</span>')
    expect(ui.el['tuile-version'].hidden).toBe(false)
    expect(ui.el['tuile-tokens'].hidden).toBe(false)
    expect(ui.el.tuiles.hidden).toBe(false)
    expect(ui.el.compteurs.hidden).toBe(true)
    answers(ui, 'oui')
    expect(ui.el['val-version'].textContent).toBe('1.1.0')
    expect(ui.el['generer-libelle'].textContent).toBe('Télécharger le JSON')
  })
  it('Changements tab: one group per variants, bold title, and the counter counts the lines', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changes: { sentences: [
      { title: 'size=medium, _theme=prospect', lines: ['Marges horizontales : spacing/24 → spacing/16'] },
      { title: 'size=medium, _theme=client', lines: ['Marges, sur les quatre côtés : spacing/16 → spacing/12', 'Fond : a → b'] }
    ] } }))
    expect(ui.el['compteur-changements'].textContent).toBe('3')
    expect(ui.el.changements.innerHTML).toBe('<p class="aide">Depuis le dernier export :</p><ul class="aide">'
      + '<li><span class="groupe">size=medium, _theme=prospect</span><ul><li>Marges horizontales : spacing/24 → spacing/16</li></ul></li>'
      + '<li><span class="groupe">size=medium, _theme=client</span><ul><li>Marges, sur les quatre côtés : spacing/16 → spacing/12</li><li>Fond : a → b</li></ul></li></ul>')
  })
  it('JSON changed: the version question is asked, and nothing is downloaded or copied without an answer', () => {
    const ui = generated({})
    expect(ui.el.question.hidden).toBe(false)
    expect(ui.el.question.classList.contains('a-repondre')).toBe(true)
    expect(ui.el['question-titre'].textContent).toBe('La version 1.0.0 a-t-elle été livrée aux devs ?')
    expect(ui.el['livree-oui-libelle'].textContent).toBe('Oui, passer en 1.1.0')
    expect(ui.el['livree-non-libelle'].textContent).toBe('Non, garder 1.0.0')
    expect(ui.el['val-version'].textContent).toBe('à choisir')
    expect(ui.el['tuile-version'].classList.contains('a-choisir')).toBe(true)
    expect(ui.source).toMatch(/<div class="reponses">\s*<label class="case"><input type="radio" name="livree" id="livree-oui" ?\/?>[\s\S]*?id="livree-non"[\s\S]*?<\/div>/)
    expect(ui.el.generer.disabled).toBe(true)
    expect(ui.el['generer-libelle'].textContent).toBe('Répondre à la question')
    expect(ui.el.copier.disabled).toBe(true)
    answers(ui, 'oui')
    expect(ui.el['tuile-version'].classList.contains('a-choisir')).toBe(false)
    expect(ui.el.question.classList.contains('a-repondre')).toBe(false)
    expect(ui.el.generer.disabled).toBe(false)
    expect(ui.el.copier.disabled).toBe(false)
    expect(ui.source).toMatch(/\.question\.a-repondre \{ box-shadow: inset 0 0 0 2px var\(--texte-marque\); \}/)
  })
  it('the question is not asked at the first version, nor when nothing changed', () => {
    for (const v of [{ version: '1.0.0', level: null, detected: null, first: true, current: null, next: null }, { version: '1.0.0', level: null, detected: null, none: true, next: null }]) {
      const ui = generated(v)
      expect(ui.el['question-livree'].hidden).toBe(true)
      expect(ui.el.generer.disabled).toBe(false)
      expect(ui.el['val-version'].textContent).toBe('1.0.0')
    }
  })
  it('Non, garder: the plugin keeps the version, Refonte complète is unchecked, and the tag says VERSION GARDÉE', () => {
    const ui = generated({})
    answers(ui, 'oui')
    ui.el.refonte.checked = true
    ui.el.refonte.onchange()
    answers(ui, 'non')
    expect(ui.el.refonte.checked).toBe(false)
    expect(ui.el['case-refonte'].hidden).toBe(true)
    expect(plain(ui.sent.filter((m: MockData) => m.type === 'choisir-version').pop())).toStrictEqual({ type: 'choisir-version', id: '1:2', keep: true, overhaul: false, sheetMd: false })
    ui.receive({ type: 'version', id: '1:2', json: '{}', version: versionOf({ version: '1.0.0', level: null, kept: true }) })
    expect(ui.el.etiquette.innerHTML).toBe('<span class="etiquette etiquette-neutre">VERSION GARDÉE</span>')
    expect(ui.el['val-version'].textContent).toBe('1.0.0')
    expect(ui.el['generer-libelle'].textContent).toBe('Télécharger le JSON')
  })
  it('a new generation asks the question again', () => {
    const ui = generated({})
    answers(ui, 'non')
    ui.receive(sheetWith({}))
    expect(ui.el['livree-non'].checked).toBe(false)
    expect(ui.el.question.classList.contains('a-repondre')).toBe(true)
    expect(ui.el.generer.disabled).toBe(true)
  })
  it('before the generation, only the À corriger tab shows, and the arrows stay on it', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    expect(ui.source).not.toMatch(/\.onglet:disabled|tabindex="-1" disabled|-attente"/)
    expect(ui.el.onglets.hidden).toBe(false)
    expect(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden)).toStrictEqual([false, true, true, true])
    expect(ui.el['panneau-corriger'].hidden).toBe(false)
    ui.el.onglets.onkeydown({ key: 'ArrowRight', preventDefault() {} })
    expect(ui.el['panneau-corriger'].hidden).toBe(false)
    expect(ui.el['panneau-json'].hidden).toBe(true)
  })
  it('after the generation with an issue, the four tabs show and À corriger is open', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { issues: [ISSUE] }))
    expect(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden)).toStrictEqual([false, false, false, false])
    expect(ui.el['panneau-corriger'].hidden).toBe(false)
    expect(ui.el['json-contenu'].hidden).toBe(false)
    expect(ui.el['changelog-contenu'].hidden).toBe(false)
    expect(ui.el.changements.hidden).toBe(false)
  })
  it('after the generation without an issue, À corriger disappears and the first tab, JSON, is open', () => {
    const ui = generated({})
    expect(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden)).toStrictEqual([true, false, false, false])
    expect(ui.el['panneau-json'].hidden).toBe(false)
    expect(ui.el['panneau-changements'].hidden).toBe(true)
    expect(ui.el['panneau-corriger'].hidden).toBe(true)
  })
  it('À corriger open, a new generation without an issue switches to JSON', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { issues: [ISSUE] }))
    expect(ui.el['panneau-corriger'].hidden).toBe(false)
    ui.receive(Object.assign(sheetWith({}), { issues: [] }))
    expect(ui.el['onglet-corriger'].hidden).toBe(true)
    expect(ui.el['panneau-corriger'].hidden).toBe(true)
    expect(ui.el['panneau-json'].hidden).toBe(false)
  })
  it('a new component hides the JSON, Changelog and Changements tabs again', () => {
    const ui = generated({})
    ui.receive(Object.assign({}, selection, { id: 'autre', name: 'Tag' }))
    expect(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden)).toStrictEqual([false, true, true, true])
  })
  it('the card gives the last stored version, or « jamais exporté »', () => {
    const ui = fakeInterface()
    ui.receive(Object.assign({}, selection, { latestVersion: '1.2.0' }))
    expect(ui.el.compteurs.innerHTML).toMatch(/<span class="pastille">dernière version <b>1\.2\.0<\/b><\/span>/)
    ui.receive(Object.assign({}, selection, { id: 'autre', name: 'Tag', latestVersion: null }))
    expect(ui.el.compteurs.innerHTML).toMatch(/<span class="pastille pastille-neutre">jamais exporté<\/span>/)
    expect(ui.el.compteurs.innerHTML).not.toMatch(/dernière version/)
  })
  it('the tabs: 14 px text, 3 px underline, counters in brand blue', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/\.onglet \{[^}]*padding: 10px 0;[^}]*border-bottom: 3px solid transparent;[^}]*font-size: 14px;/)
    expect(source).toMatch(/\.compteur \{[^}]*background: var\(--fond-tuile\); color: var\(--texte-marque\);/)
  })
  it('before the generation, « À corriger » is a section title, and becomes a tab again afterwards', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    expect(ui.el.onglets.classList.contains('titre-seul')).toBe(true)
    expect(ui.source).toMatch(/\.onglets\.titre-seul \.onglet \{ border-bottom-color: transparent; cursor: default; \}/)
    ui.receive(sheetWith({}))
    expect(ui.el.onglets.classList.contains('titre-seul')).toBe(false)
  })
  it('the radio buttons and the checkboxes are drawn with a brand blue outline', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/\.case input \{[^}]*appearance: none;[^}]*border: 1\.5px solid var\(--texte-marque\);/)
    expect(source).toMatch(/\.case input\[type="checkbox"\]:checked \{ background: var\(--texte-marque\); \}/)
    expect(source).not.toMatch(/accent-color/)
  })
  it('Rien à corriger before the generation: a centered empty state, that invites to generate', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive({ type: 'controle', id: '1:2', issues: [] })
    expect(ui.el['corriger-ok'].hidden).toBe(false)
    expect(ui.source).toMatch(/<div class="vide" id="corriger-ok" hidden>[\s\S]*?<p class="vide-titre">Rien à corriger<\/p>\s*<p class="aide">Le composant respecte la nomenclature\. Générer le JSON pour calculer sa version et son changelog\.<\/p>/)
  })
  it('a change of component after the generation shows the counters again', () => {
    const ui = generated({})
    ui.receive(Object.assign({}, selection, { id: 'autre', name: 'Tag' }))
    expect(ui.el.compteurs.hidden).toBe(false)
    expect(ui.el.tuiles.hidden).toBe(true)
    expect(ui.el['tuile-version'].hidden).toBe(true)
  })
  it('each level has its tag and its color', () => {
    const scenario: MockData[] = [
      [{ version: '2.0.0', level: 'majeure' }, 'MAJEURE', 'etiquette-supprime'],
      [{ version: '1.1.0', level: 'mineure' }, 'MINEURE', 'etiquette-modifie'],
      [{ version: '1.0.1', level: 'correctif' }, 'PATCH', 'etiquette-ajoute'],
      [{ version: '1.0.0', level: null, detected: null, first: true, current: null }, 'PREMIÈRE VERSION', 'etiquette-neutre'],
      [{ version: '1.0.0', level: null, detected: null, none: true }, 'INCHANGÉE', 'etiquette-neutre']
    ]
    for (const [v, label, cssClass] of scenario) {
      const ui = generated(v)
      if (!ui.el.question.hidden) answers(ui, 'oui')
      expect(ui.el.etiquette.innerHTML).toBe('<span class="etiquette ' + cssClass + '">' + label + '</span>')
      expect(ui.el['val-version'].textContent).toBe(v.version)
    }
    const css = fakeInterface().source
    for (const cssClass of ['etiquette-supprime', 'etiquette-modifie', 'etiquette-ajoute', 'etiquette-neutre']) expect(css.includes('.' + cssClass + ' {'), cssClass).toBeTruthy()
  })
  it('the pill Version minimale des tokens requise: computed version, or non calculée in error color', () => {
    const computed = generated({ tokensVersion: '2.0.0' })
    expect(computed.el['val-tokens'].textContent).toBe('2.0.0')
    expect(computed.el['val-tokens'].title).toBe('')
    const source = computed.source
    expect(source.includes('<span class="pastille" id="tuile-tokens" hidden>Version minimale des tokens requise :<b id="val-tokens"></b></span>')).toBeTruthy()
    expect(computed.el['val-tokens'].classList.contains('tokens-erreur')).toBe(false)
    const zero = generated({ tokensVersion: null })
    expect(zero.el['val-tokens'].textContent).toBe('non calculée')
    expect(zero.el['val-tokens'].title).toBe('Voir l\'onglet À corriger')
    expect(zero.el['val-tokens'].classList.contains('tokens-erreur')).toBe(true)
    expect(zero.source).toMatch(/#val-tokens\.tokens-erreur \{ color: var\(--rouge\); \}/)
  })
  it('the question and the checkboxes share the same box: the question on top, the checkboxes under a rule, one per line', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/<div class="cases" id="cases" hidden>\s*<label class="case" id="case-refonte">[^\n]*<\/label>\s*<label class="case" id="case-fichemd" hidden>[^\n]*<\/label>\s*<\/div>\s*<\/div>/)
    expect(source).toMatch(/#question-livree, \.cases \{ display: flex; flex-direction: column;/)
    const i = (id: string) => source.indexOf('id="' + id + '"')
    expect(i('tuile-tokens') < i('question') && i('question') < i('question-livree') && i('question-livree') < i('question-aucun') && i('question-aucun') < i('filet') && i('filet') < i('cases')).toBeTruthy()
  })
  it('the checkboxes announce the version they give, and « Aucun changement » opens the box when nothing changed', () => {
    const change = generated({ version: '1.3.0', current: '1.2.4', next: '1.3.0' })
    answers(change, 'oui')
    expect(change.el['refonte-libelle'].textContent).toBe('Refonte complète, passer en 2.0.0')
    expect(change.el['question-aucun'].hidden).toBe(true)
    expect(change.el.filet.hidden).toBe(false)
    const nothing = generated({ version: '1.2.4', current: '1.2.4', level: null, detected: null, none: true, next: null })
    expect(nothing.el.question.hidden).toBe(false)
    expect(nothing.el['question-livree'].hidden).toBe(true)
    expect(nothing.el['question-aucun'].hidden).toBe(false)
    expect(nothing.source).toMatch(/id="question-aucun" hidden>Aucun changement dans le composant\.</)
    expect(nothing.el.filet.hidden).toBe(true)
    expect(nothing.el['fichemd-libelle'].textContent).toBe('Fiche md modifiée, passer en 1.2.5')
    expect(nothing.el['case-refonte'].hidden).toBe(true)
    const first = generated({ version: '1.0.0', level: null, detected: null, first: true, current: null, next: null })
    expect(first.el.question.hidden, 'première version : pas d\'encadré').toBe(true)
  })
  it('the checkboxes: overhaul only after « Oui », md sheet only when nothing changed, the rule follows', () => {
    const first = generated({ version: '1.0.0', level: null, detected: null, first: true, current: null })
    expect(first.el.cases.hidden).toBe(true)
    expect(first.el.filet.hidden).toBe(true)
    expect(first.el['case-refonte'].hidden).toBe(true)
    const change = generated({})
    expect(change.el.cases.hidden, 'rien à cocher avant la réponse').toBe(true)
    expect(change.el.filet.hidden).toBe(true)
    answers(change, 'oui')
    expect(change.el.cases.hidden).toBe(false)
    expect(change.el.filet.hidden).toBe(false)
    expect(change.el['case-refonte'].hidden).toBe(false)
    expect(change.el['case-fichemd'].hidden).toBe(true)
    const nothing = generated({ version: '1.0.0', level: null, detected: null, none: true })
    expect(nothing.el['case-refonte'].hidden, 'rien n\'a changé : pas de refonte possible').toBe(true)
    expect(nothing.el['case-fichemd'].hidden).toBe(false)
    expect(nothing.el.filet.hidden, 'sans question, pas de filet au-dessus des cases').toBe(true)
  })
  it('empty Changements: a centered state, with a title, when nothing changed or at the first export', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changes: { sentences: [] } }))
    expect(ui.el.changements.innerHTML).toMatch(/^<div class="vide"><span class="vide-icone"><svg[\s\S]*<\/svg><\/span><p class="vide-titre">Aucun changement<\/p><p class="aide">Le composant n&#39;a pas changé depuis le dernier export\.<\/p><\/div>$/)
    ui.receive(Object.assign(sheetWith({}), { changes: null }))
    expect(ui.el.changements.innerHTML).toMatch(/<p class="vide-titre">Premier export<\/p><p class="aide">Ce composant n&#39;a pas encore de version précédente à comparer\.<\/p>/)
    expect(ui.source).toMatch(/#panneau-changements, #changements \{ flex: 1 0 auto; display: flex; flex-direction: column; \}/)
  })
  it('changes compared to the shared base: « Depuis le dernier export », without a date', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changes: { sentences: ['Propriété size ajoutée'] } }))
    expect(ui.el.changements.innerHTML).toBe('<p class="aide">Depuis le dernier export : propriété size ajoutée</p>')
  })
  it('an error message clears the success banner of the download already done', () => {
    const ui = generated({})
    answers(ui, 'oui')
    ui.el.generer.onclick()
    expect(ui.el.succes.textContent).toBe('JSON téléchargé.')
    expect(ui.el.succes.hidden).toBe(false)
    ui.receive({ type: 'erreur', message: 'Un autre export a eu lieu.' })
    expect(ui.el.erreur.textContent).toBe('Un autre export a eu lieu.')
    expect(ui.el.erreur.hidden).toBe(false)
    expect(ui.el.succes.hidden).toBe(true)
    expect(ui.el.succes.textContent).toBe('')
  })
  it('checking a box asks the plugin for the version, then the title, the tag and the button follow', () => {
    const ui = generated({})
    answers(ui, 'oui')
    ui.el.refonte.checked = true
    ui.el.refonte.onchange()
    expect(plain(ui.sent.filter((m: MockData) => m.type === 'choisir-version'))).toStrictEqual([{ type: 'choisir-version', id: '1:2', keep: false, overhaul: false, sheetMd: false }, { type: 'choisir-version', id: '1:2', keep: false, overhaul: true, sheetMd: false }])
    ui.receive({ type: 'version', id: '1:2', json: '{"x":1}', version: versionOf({ version: '2.0.0', level: 'majeure' }) })
    expect(ui.el.nom.textContent).toBe('Button')
    expect(ui.el.etiquette.innerHTML).toBe('<span class="etiquette etiquette-supprime">MAJEURE</span>')
    expect(ui.el['val-version'].textContent).toBe('2.0.0')
    expect(ui.el['generer-libelle'].textContent).toBe('Télécharger le JSON')
    expect(ui.el.json.innerHTML).toBe('{<span class="j-cle">&quot;x&quot;</span>:<span class="j-nombre">1</span>}')
  })
  it('the JSON is colored like in an editor, and its text stays escaped', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { json: '{\n  "nom": "a<b",\n  "n": -1.5e2,\n  "ok": true,\n  "vide": null,\n  "x": "12 true"\n}' }))
    expect(ui.el.json.innerHTML).toBe('{\n  <span class="j-cle">&quot;nom&quot;</span>: <span class="j-texte">&quot;a&lt;b&quot;</span>,\n'
      + '  <span class="j-cle">&quot;n&quot;</span>: <span class="j-nombre">-1.5e2</span>,\n'
      + '  <span class="j-cle">&quot;ok&quot;</span>: <span class="j-mot">true</span>,\n'
      + '  <span class="j-cle">&quot;vide&quot;</span>: <span class="j-mot">null</span>,\n'
      + '  <span class="j-cle">&quot;x&quot;</span>: <span class="j-texte">&quot;12 true&quot;</span>\n}')
  })
  it('the JSON colors change with the dark theme of Figma', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/:root \{[^}]*--j-cle: #0451a5;[^}]*--j-texte: #a31515;[^}]*--j-nombre: #098658;[^}]*--j-mot: #0000ff;/)
    expect(source).toMatch(/html\.figma-dark \{[^}]*--j-cle: #9cdcfe;[^}]*--j-texte: #ce9178;[^}]*--j-nombre: #b5cea8;[^}]*--j-mot: #569cd6;/)
  })
  it('Cmd+A in the JSON selects only the JSON', () => {
    const ui = fakeInterface()
    let prevents = false
    ui.el.json.onkeydown({ metaKey: true, key: 'a', preventDefault() { prevents = true } })
    expect(prevents).toBe(true)
    expect(ui.selection.target).toBe(ui.el.json)
  })
  it('Cmd+A in the changelog selects only the changelog', () => {
    const ui = fakeInterface()
    ui.el.changelog.onkeydown({ metaKey: true, key: 'a', preventDefault() {} })
    expect(ui.selection.target).toBe(ui.el.changelog)
  })
  it('the Changelog tab follows the JSON tab, on the model of the others', () => {
    const { source } = fakeInterface()
    expect(source).toMatch(/id="onglet-json"[^\n]*>JSON<\/button>\s*<button type="button" class="onglet" role="tab" id="onglet-changelog" data-onglet="changelog" aria-controls="panneau-changelog" aria-selected="false" tabindex="-1">Changelog<\/button>/)
    expect(source).toMatch(/<div class="panneau" id="panneau-changelog" role="tabpanel" aria-labelledby="onglet-changelog" hidden>/)
    expect(source).toMatch(/(?:const|var|let) TABS = \[\s*['"]corriger['"],\s*['"]json['"],\s*['"]changelog['"],\s*['"]changements['"]\s*\]/)
    expect(source).toMatch(/id="onglet-changelog"[^>]*>Changelog<\/button><button[^>]*id="onglet-changements"/)
    expect(source).toMatch(/<pre id="changelog" tabindex="0" role="region" aria-label="Changelog du composant"><\/pre>/)
  })
  it('after the generation, the arrows go through the four tabs and come back to the first', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { issues: [ISSUE] }))
    openTab(ui, 'changelog')
    ui.el.onglets.onkeydown({ key: 'ArrowRight', preventDefault() {} })
    expect(ui.el['panneau-changements'].hidden, 'la flèche droite passe à « Changements »').toBe(false)
    ui.el.onglets.onkeydown({ key: 'ArrowRight', preventDefault() {} })
    expect(ui.el['panneau-corriger'].hidden, 'depuis le dernier onglet, la flèche droite revient au premier').toBe(false)
  })
  it('after the generation, the changelog is displayed as is, without coloring', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n\n## 1.1.0 - 04/11/26\n' }))
    expect(ui.el['changelog-contenu'].hidden).toBe(false)
    expect(ui.el.changelog.textContent).toBe('# Changelog de Button\n\n## 1.1.0 - 04/11/26\n')
    ui.receive({ type: 'version', id: '1:2', json: '{}', version: versionOf({}), changelog: '# Changelog de Button\n' })
    expect(ui.el.changelog.textContent).toBe('# Changelog de Button\n')
  })
  it('the main button downloads the JSON alone, and stores', async () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    ui.sent.length = 0
    ui.el.generer.onclick()
    await new Promise((r) => setTimeout(r, 450))
    expect(ui.downloads.map((t: MockData) => t.name)).toStrictEqual(['button.json'])
    expect(ui.el.succes.textContent).toBe('JSON téléchargé.')
    expect(ui.sent.map((m: MockData) => m.type).filter((t: MockData) => t !== 'redimensionner')).toStrictEqual(['memoriser'])
  })
  it('in the Changelog tab, the bottom button downloads the changelog of the component alone, without storing', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    ui.sent.length = 0
    openTab(ui, 'changelog')
    ui.el.generer.onclick()
    expect(ui.downloads.map((t: MockData) => t.name)).toStrictEqual(['button-changelog.md'])
    expect(ui.downloads[0].href).toMatch(/text\/markdown/)
    expect(ui.el.succes.textContent).toBe('Changelog téléchargé.')
    expect(ui.sent.map((m: MockData) => m.type).filter((t: MockData) => t !== 'redimensionner')).toStrictEqual([])
  })
  it('the bottom buttons act on the file of the open tab, and the plugin is called « Canopée, composants »', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    const labels = () => [ui.el['generer-libelle'].textContent, ui.el['copier-libelle'].textContent]
    expect(labels()).toStrictEqual(['Télécharger le JSON', 'Copier le JSON'])
    openTab(ui, 'changelog')
    expect(labels()).toStrictEqual(['Télécharger le changelog', 'Copier le changelog'])
    openTab(ui, 'json')
    expect(labels()).toStrictEqual(['Télécharger le JSON', 'Copier le JSON'])
    openTab(ui, 'changements')
    expect(labels()).toStrictEqual(['Télécharger le JSON', 'Copier le JSON'])
    expect(html()).not.toMatch(/id="telecharger-changelog"|id="copier-changelog"/)
    expect(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'manifest.json'), 'utf8')).name).toBe('Canopée, composants')
  })
  it('Copier le JSON copies the JSON alone, Copier le changelog copies the changelog without storing', async () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    ui.sent.length = 0
    await ui.el.copier.onclick()
    expect(ui.copies).toStrictEqual(['{}'])
    expect(ui.sent.map((m: MockData) => m.type).filter((t: MockData) => t !== 'redimensionner')).toStrictEqual(['memoriser'])
    ui.sent.length = 0
    openTab(ui, 'changelog')
    await ui.el.copier.onclick()
    expect(ui.copies).toStrictEqual(['{}', '# Changelog de Button\n'])
    expect(ui.el.succes.textContent).toBe('Changelog copié.')
    expect(ui.sent.map((m: MockData) => m.type).filter((t: MockData) => t !== 'redimensionner')).toStrictEqual([])
  })
  it('a new component clears the tag and hides the Version and Design tokens tiles, the rule and the checkboxes', () => {
    const ui = generated({})
    ui.receive({ type: 'selection', id: '9:9', name: 'Badge', variants: 3, properties: 2 })
    expect(ui.el.nom.textContent).toBe('Badge')
    expect(ui.el.etiquette.innerHTML).toBe('')
    expect(ui.el['tuile-version'].hidden).toBe(true)
    expect(ui.el['tuile-tokens'].hidden).toBe(true)
    expect(ui.el.filet.hidden).toBe(true)
    expect(ui.el.cases.hidden).toBe(true)
  })

  // ---------------------------------------------------------- a component modified after the generation
  // The real dist/ui.html plugged into the real dist/code.js, with a fake page that emits nodechange.
  const release = async () => { for (let i = 0; i < 5; i++) await new Promise((r) => setImmediate(r)) }
  async function attach(): Promise<MockData> {
    const doc = buttonDocument()
    const set = doc.nodes[1]
    const pg = page('Composants')
    set.parent = pg
    const other = connect(layer('COMPONENT_SET', 'Autre', { id: 'S:200', componentPropertyDefinitions: {} }, [layer('COMPONENT', 'state=a', { id: 'V:a' })]), pg)
    doc.nodes.push(other)
    doc.clock = fakeClock()
    let ui: MockData = null
    let plugin = null
    doc.onMessage = (m: MockData) => { if (ui) ui.receive(m) }
    plugin = createFakePlugin(doc)
    ui = fakeInterface((m: MockData) => { if (plugin) plugin.send(m) })
    await plugin.send({ type: 'ui-pret' })
    await release()
    const variant = set.children[1]
    const textLayer = variant.children[1]
    const click = async (id: string) => { ui.el[id].onclick(); await release() }
    return { doc, set, pg, other, ui, p: plugin, clock: doc.clock, variant, textLayer, click }
  }
  const attachAndGenerate = async () => { const b = await attach(); await b.click('generer'); return b }
  const change = (id: string, extra = {}) => ({ type: 'PROPERTY_CHANGE', origin: 'LOCAL', id, node: { id }, properties: ['fills'], ...extra })
  const event = (...changes: MockData[]) => ({ nodeChanges: changes })
  const isStale = (ui: MockData) => !ui.el.perime.hidden
  const staleCount = (p: MockData) => p.messages.filter((m: MockData) => m.type === 'perime').length

  it('a modified layer of the component: banner, copy disabled, the main button regenerates', async () => {
    const { ui, pg, textLayer } = await attachAndGenerate()
    expect(!isStale(ui)).toBeTruthy()
    expect(ui.el['generer-libelle'].textContent).toBe('Télécharger le JSON')
    pg.trigger(event(change(textLayer.id)))
    expect(isStale(ui)).toBeTruthy()
    expect(ui.source).toMatch(/<p class="bandeau info" id="perime" hidden>Le composant a changé depuis la génération de ce JSON\.<\/p>/)
    expect(ui.el.copier.disabled).toBe(true)
    expect(ui.el.generer.disabled).toBe(false)
    expect(ui.el['generer-libelle'].textContent).toBe('Générer de nouveau')
    expect(ui.el['ico-generer'].hidden).toBe(false)
    expect(ui.el['ico-telecharger'].hidden).toBe(true)
  })
  it('a click on copy or on the button does nothing but regenerate when the JSON is stale', async () => {
    const { ui, pg, p, textLayer } = await attachAndGenerate()
    pg.trigger(event(change(textLayer.id)))
    await ui.el.copier.onclick()
    expect(ui.copies).toStrictEqual([])
    await ui.el.generer.onclick()
    await release()
    expect(ui.downloads.length).toBe(0)
    expect(p.messages.filter((m: MockData) => m.type === 'memoriser').length).toBe(0)
  })
  it('after a new generation, the banner disappears and the export comes back', async () => {
    const { ui, pg, click, textLayer } = await attachAndGenerate()
    pg.trigger(event(change(textLayer.id)))
    await click('generer')
    expect(!isStale(ui)).toBeTruthy()
    expect(ui.el.copier.disabled).toBe(false)
    expect(ui.el['generer-libelle'].textContent).toBe('Télécharger le JSON')
    expect(ui.el['ico-telecharger'].hidden).toBe(false)
    await click('generer')
    expect(ui.downloads.length).toBe(1)
  })
  it('a change outside the component warns of nothing', async () => {
    const { ui, pg, p } = await attachAndGenerate()
    const before = staleCount(p)
    pg.trigger(event(change('X:999', { node: { id: 'X:999', parent: { id: 'P:1', parent: null } } }), { type: 'CREATE', id: 'X:998', node: { id: 'X:998', parent: { id: 'X:999', parent: null } } }))
    expect(staleCount(p)).toBe(before)
    expect(!isStale(ui)).toBeTruthy()
  })
  it('moving the root does not count, moving a variant counts', async () => {
    const { ui, pg, set } = await attachAndGenerate()
    pg.trigger(event(change(set.id, { properties: ['x', 'y'] }), change(set.id, { properties: ['relativeTransform'] })))
    expect(!isStale(ui)).toBeTruthy()
    pg.trigger(event(change(set.id, { properties: ['x', 'name'] })))
    expect(isStale(ui), 'la racine renommée en même temps qu\'elle bouge est modifiée').toBeTruthy()
    const b = await attachAndGenerate()
    b.pg.trigger(event(change(b.variant.id, { properties: ['x', 'y'] })))
    expect(isStale(b.ui)).toBeTruthy()
  })
  it('a deleted layer, a created layer and an instance layer make the JSON stale', async () => {
    const scenario = {
      deleted: (b: MockData) => ({ type: 'DELETE', id: b.textLayer.id, node: { id: b.textLayer.id, removed: true, get parent() { throw new Error('nœud supprimé') } } }),
      created: (b: MockData) => ({ type: 'CREATE', id: 'N:1', node: { id: 'N:1', parent: b.variant } }),
      'd\'instance': (b: MockData) => ({ type: 'PROPERTY_CHANGE', id: 'I' + b.variant.children[0].id + ';55:1', node: { id: 'I' + b.variant.children[0].id + ';55:1' }, properties: ['fills'] })
    }
    for (const [name, factory] of Object.entries(scenario)) {
      const b = await attachAndGenerate()
      b.pg.trigger(event(factory(b)))
      expect(isStale(b.ui), name).toBeTruthy()
    }
  })
  it('a layer created outside the component, or whose parent is unreadable, does not count', async () => {
    const { ui, pg } = await attachAndGenerate()
    pg.trigger(event({ type: 'DELETE', id: 'X:5', node: { id: 'X:5', removed: true, get parent() { throw new Error('nœud supprimé') } } }))
    expect(!isStale(ui)).toBeTruthy()
  })
  it('a change during the generation makes the JSON stale as soon as the sheet arrives', async () => {
    const b = await attach()
    const read = b.p.figma.variables.getVariableByIdAsync
    let done = false
    b.p.figma.variables.getVariableByIdAsync = async (id: string) => {
      if (!done) { done = true; b.pg.trigger(event(change(b.textLayer.id))) }
      return read(id)
    }
    await b.click('generer')
    expect(done).toBeTruthy()
    expect(isStale(b.ui)).toBeTruthy()
    expect(b.ui.el['generer-libelle'].textContent).toBe('Générer de nouveau')
    expect(b.ui.el.copier.disabled).toBe(true)
  })
  it('switching the selection to another component removes the listener', async () => {
    const { ui, pg, p, other, textLayer } = await attachAndGenerate()
    expect(pg.listeners.length).toBe(1)
    p.figma.currentPage.selection = [other]
    await p.triggerFigma('selectionchange')
    await release()
    expect(pg.listeners.length).toBe(0)
    expect(pg.offCalls).toBe(1)
    const before = staleCount(p)
    pg.trigger(event(change(textLayer.id)))
    expect(staleCount(p)).toBe(before)
    expect(!isStale(ui)).toBeTruthy()
  })
  it('a click on a layer of the component keeps the watching', async () => {
    const { pg, p, textLayer } = await attachAndGenerate()
    p.figma.currentPage.selection = [textLayer]
    await p.triggerFigma('selectionchange')
    await release()
    expect(pg.listeners.length).toBe(1)
  })
  it('several generations leave a single listener', async () => {
    const { pg, click, ui } = await attachAndGenerate()
    await click('regenerer')
    await click('regenerer')
    expect(pg.listeners.length).toBe(1)
    expect(!isStale(ui)).toBeTruthy()
  })
  it('exporting a stale JSON is refused, without writing anything in the file', async () => {
    const { pg, p, set, textLayer } = await attachAndGenerate()
    const written: MockData[] = []
    const write = set.setSharedPluginData
    set.setSharedPluginData = (...args: MockData) => { written.push(args); return write(...args) }
    pg.trigger(event(change(textLayer.id)))
    await p.send({ type: 'memoriser', id: set.id })
    expect(plain(p.lastMessage())).toStrictEqual({ type: 'erreur', message: 'Le composant a changé depuis cette génération. Rien n\'a été enregistré : générer de nouveau le JSON, puis l\'exporter.' })
    expect(written).toStrictEqual([])
  })
  it('an unmodified component exports as before', async () => {
    const { p, set, ui, click } = await attachAndGenerate()
    const written = []
    const write = set.setSharedPluginData
    set.setSharedPluginData = (...args: MockData) => { written.push(args); return write(...args) }
    await click('generer')
    expect(written.length > 0).toBeTruthy()
    expect(!isStale(ui)).toBeTruthy()
    expect(p.messages.filter((m: MockData) => m.type === 'erreur').length).toBe(0)
  })
  it('a rename and an added variant update the card, without clearing the displayed error', async () => {
    const b = await attachAndGenerate()
    b.ui.receive({ type: 'erreur', message: 'Une erreur à garder.' })
    expect(b.ui.el.nom.textContent).toBe('Button')
    expect(b.ui.el.compteurs.innerHTML).toMatch(/<b>2<\/b> variantes/)
    b.set.name = 'Bouton principal'
    const next = connect(layer('COMPONENT', 'state=focus, hierarchy=primary', { id: 'V:focus' }), b.set)
    b.set.children.push(next)
    b.pg.trigger(event(change(b.set.id, { properties: ['name'] }), { type: 'CREATE', id: 'V:focus', node: next }))
    expect(b.ui.el.nom.textContent, 'la carte attend le délai').toBe('Button')
    b.clock.advance()
    expect(b.ui.el.nom.textContent).toBe('Bouton principal')
    expect(b.ui.el.compteurs.innerHTML).toMatch(/<b>3<\/b> variantes/)
    expect(b.ui.el.erreur.textContent).toBe('Une erreur à garder.')
    expect(b.ui.el.erreur.hidden).toBe(false)
    expect(isStale(b.ui)).toBeTruthy()
  })
  it('several close changes schedule only one refresh of the card', async () => {
    const b = await attachAndGenerate()
    for (let i = 0; i < 5; i++) b.pg.trigger(event(change(b.textLayer.id)))
    expect(b.clock.pending()).toBe(1)
    const before = b.p.messages.filter((m: MockData) => m.type === 'carte').length
    b.clock.advance()
    expect(b.p.messages.filter((m: MockData) => m.type === 'carte').length).toBe(before + 1)
  })
  it('a rename done before the generation shows in the card', async () => {
    const b = await attach()
    b.set.name = 'Bouton renommé'
    await b.click('generer')
    expect(b.ui.el.nom.textContent).toBe('Bouton renommé')
  })
  it('a perime message from another component, or before any generation, is ignored', async () => {
    const b = await attach()
    b.ui.receive({ type: 'perime', id: 'S:100' })
    expect(!isStale(b.ui)).toBeTruthy()
    await b.click('generer')
    b.ui.receive({ type: 'perime', id: 'S:999' })
    expect(!isStale(b.ui)).toBeTruthy()
  })
})

// ------------------------------------------------------------ the bridge
describe('The bridge', () => {
  it('the generated script starts with the id constant and has no interface part', () => {
    const code = bridgeCode()
    expect(code).toMatch(/const ID_COMPONENT_SET = "S:100"/)
    expect(!code.includes('figma.showUI')).toBeTruthy()
    expect(!code.includes('figma.ui')).toBeTruthy()
  })
  it('the committed bridge script is the one that code.js generates', () => {
    const committedText = fs.readFileSync(path.join(SCRIPTS, 'extraire.bridge.js'), 'utf8')
    const id = (committedText.match(/^const ID_COMPONENT_SET = "(.*)"$/m) || [])[1]
    expect(id, 'id introuvable dans scripts/extraire.bridge.js').toBeTruthy()
    const regenerate = path.join(tempFolder('bridge'), 'regenere.bridge.js')
    execFileSync('node', [path.join(SCRIPTS, 'construire-bridge.mjs'), '--id', id, '--sortie', regenerate], { stdio: 'pipe' })
    expect(fs.readFileSync(regenerate, 'utf8') === committedText, 'scripts/extraire.bridge.js est périmé. Lancer : node scripts/construire-bridge.mjs --id ' + id).toBeTruthy()
  })
  it('pasted into figma_execute, it returns exactly the JSON of the plugin', async () => {
    const { text } = await button()
    expect(await runBridge(buttonDocument(), bridgeCode())).toBe(text)
  })
  it('unknown id: clear error', async () => {
    const unknown = bridgeCode().replace('"S:100"', '"X:0"')
    await expect(runBridge(buttonDocument(), unknown)).rejects.toThrow(/Aucun noeud/)
  })
})

// ------------------------------------------------------------ the rebuild
describe('The rebuild', () => {
  const DEFAULT_FILE = 'UWk4fT45i82ESNhGaAnj6p'
  const DEFAULT_PAGE = 'Test - Components AI-ready'

  it('the rebuild script contains the core rules, and no marker anymore', () => {
    const s = returnScript()
    for (const f of ['function matches(', 'function effectiveStyles(', 'function canonical(']) expect(s.includes(f), 'absent : ' + f).toBeTruthy()
    for (const m of ['__REGLES__', '__FICHE__', '__CONFIG__']) expect(!s.includes(m), 'marqueur restant : ' + m).toBeTruthy()
    expect(!s.includes('DEBUT REGLES')).toBeTruthy()
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor
    new AsyncFunction('figma', s)
  })
  it('the rebuild: file, page, name and mark come from the configuration, with default values', () => {
    const s = returnScript()
    expect(s).toMatch(/"etape":"tout"\}/)
    expect(s).toMatch(new RegExp('const FILE_KEY = CONFIG\\.file \\|\\| [\'"]' + DEFAULT_FILE + '[\'"]'))
    const withOptions = buildReturn(['--fichier', 'F1', '--page', 'Ma page', '--nom', 'IA/Button'])
    expect(withOptions).toMatch(/"file":"F1","page":"Ma page","name":"IA\/Button"/)
  })
  it('a file other than the one in the configuration is refused, with a clear error', async () => {
    await expect(runBridge({ fileKey: 'AUTRE', pages: [page(DEFAULT_PAGE)] }, returnScript())).rejects.toThrow(new RegExp('Fichier refusé : AUTRE \\(attendu ' + DEFAULT_FILE + '\\)'))
    await expect(runBridge({ fileKey: DEFAULT_FILE, pages: [page(DEFAULT_PAGE)] }, buildReturn(['--fichier', 'F1']))).rejects.toThrow(/Fichier refusé : UWk4fT45i82ESNhGaAnj6p \(attendu F1\)/)
  })
  it('the file of the configuration passes the check, the missing page is reported afterwards', async () => {
    await expect(runBridge({ fileKey: 'F1', pages: [page('Autre page')] }, buildReturn(['--fichier', 'F1', '--page', 'Ma page']))).rejects.toThrow(/Page introuvable : Ma page/)
  })
  it('the supprimer step only removes the named set and the components that carry its mark', async () => {
    const p = page(DEFAULT_PAGE, [
      { type: 'COMPONENT_SET', name: 'Retour/Button' },
      { type: 'COMPONENT', name: 'state=default', mark: 'retour-button' },
      { type: 'COMPONENT', name: 'state=hover', mark: 'retour-button' },
      { type: 'COMPONENT', name: 'state=default', mark: 'retour-tag' },
      { type: 'COMPONENT', name: 'state=default' },
      { type: 'COMPONENT_SET', name: 'Button', mark: 'retour-button' },
      { type: 'COMPONENT_SET', name: 'Retour/Tag' },
      { type: 'FRAME', name: 'Retour/Button' }
    ])
    const report = JSON.parse(await runBridge({ fileKey: DEFAULT_FILE, pages: [p] }, buildReturn(['--etape', 'supprimer'])))
    expect(report.supprimes).toStrictEqual(['COMPONENT_SET Retour/Button', 'COMPONENT state=default', 'COMPONENT state=hover'])
    expect(p.children.map((n: MockData) => n.type + ' ' + n.name + ' ' + n.getPluginData('marque'))).toStrictEqual([
      'COMPONENT state=default retour-tag',
      'COMPONENT state=default ',
      'COMPONENT_SET Button retour-button',
      'COMPONENT_SET Retour/Tag ',
      'FRAME Retour/Button '
    ])
  })
})

// ------------------------------------------------------------ the extraction context
describe('The extraction context', () => {
  it('two simultaneous extractions share nothing: each gives the expected JSON', async () => {
    const { text } = await button()
    const doc = buttonDocument()
    const p = createFakePlugin(doc)
    const [e1, e2] = await Promise.all([p.__test.extract(doc.selection[0]), p.__test.extract(doc.selection[0])])
    expect(p.__test.serialize(e1)).toBe(text)
    expect(p.__test.serialize(e2)).toBe(text)
  })
})

// ------------------------------------------------------------ the templates
describe('A template, recognized by its page in the library', () => {
  const TEMPLATE_LEVELS = [['Templates - Blocks', 'block', 'Template de bloc.'], ['Templates - Sections', 'section', 'Template de section.'], ['Templates - Pages', 'page', 'Template de page.']]
  const inPage = (pageName: string, fields = {}) => {
    const d = deviationsDocument()
    Object.assign(d.selection[0], { name: 'Loader', parent: { type: 'FRAME', name: 'Loader', parent: { type: 'PAGE', name: pageName } } }, fields)
    return d
  }
  const templateIssues = (sheet: MockData) => sheet.issues.filter((i: MockData) => i.where === 'meta.templateLevel')

  for (const [pageName, level, mention] of TEMPLATE_LEVELS) {
    it(pageName + ' : niveau ' + level + ', sans défaut quand la description commence par la mention', async () => {
      const { sheet } = await exportSheet(inPage(pageName, { description: mention + ' Le Loader indique un chargement.' }))
      expect(sheet.meta.templateLevel).toBe(level)
      expect(templateIssues(sheet)).toStrictEqual([])
    })
  }
  it('the level follows the type and comes before figmaKey', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Blocks', { description: 'Template de bloc.' }))
    expect(Object.keys(sheet.meta)).toStrictEqual(['name', 'version', 'tokensVersion', 'type', 'templateLevel', 'figmaKey', 'library', 'documentationLinks'])
  })
  it('a template has the type template, without extends', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Blocks', { description: 'Template de bloc.' }))
    expect(sheet.meta.type).toBe('template')
    expect(!('extends' in sheet.meta)).toBeTruthy()
  })
  it('a template built on another component has the type template and keeps extends', async () => {
    const d = inPage('Templates - Blocks', { description: 'Template de bloc.' })
    const base = connect(layer('COMPONENT', 'Spinner', { id: 'C:9', key: 'KEY-SPINNER', width: 200, height: 200 }, [layer('TEXT', 'label', { characters: 'x', autoRename: false })]))
    const variant = d.selection[0].children[0]
    const instance = connect(layer('INSTANCE', 'loader', { mainComponent: base, isExposedInstance: true, componentProperties: {} }), variant)
    variant.children.push(instance)
    const { sheet } = await exportSheet(d)
    expect(sheet.meta.type).toBe('template')
    expect(sheet.meta.extends).toBe('Spinner')
  })
  it('a description without a mention is reported, and the level stays written', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Sections', { description: 'Le Header assemble un logo et un menu.' }))
    expect(sheet.meta.templateLevel).toBe('section')
    expect(templateIssues(sheet).map((i: MockData) => [i.level, i.rule, i.message])).toStrictEqual([['warning', 'template-description', 'La description de ce template doit commencer par « Template de section. ».']])
  })
  it('a mention placed further in the description does not count', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Blocks', { description: 'Le Loader. Template de bloc.' }))
    expect(issuesFor(sheet, 'template-description').length).toBe(1)
  })
  it('the mention of another level is reported', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Pages', { description: 'Template de bloc. Un écran complet.' }))
    expect(sheet.meta.templateLevel).toBe('page')
    expect(issuesFor(sheet, 'template-description')[0].message).toMatch(/Template de page\./)
  })
  it('a mention outside the template pages is reported, without a level in the JSON', async () => {
    const { sheet } = await exportSheet(inPage('Feedback', { description: 'Template de section. Un en-tête.' }))
    expect(!('templateLevel' in sheet.meta)).toBeTruthy()
    expect(sheet.meta.type).toBe('atom')
    expect(templateIssues(sheet).map((i: MockData) => [i.rule, i.message])).toStrictEqual([['template-page', 'Cette description annonce un template : ranger le composant dans la page Templates - Sections.']])
  })
  it('an ordinary component has neither a level nor a template issue', async () => {
    const { sheet } = await exportSheet(inPage('Actions', { name: 'Button', description: 'Le Button déclenche une action.' }))
    expect(!('templateLevel' in sheet.meta)).toBeTruthy()
    expect(templateIssues(sheet)).toStrictEqual([])
  })
  it('a component without a readable page is not a template', async () => {
    const { sheet } = await button()
    expect(!('templateLevel' in sheet.meta)).toBeTruthy()
    expect(templateIssues(sheet)).toStrictEqual([])
  })
  it('a sub-component stored with the templates is not a template', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Sections', { name: '_HeaderSkipLinks', description: 'Les liens d\'évitement du Header.' }))
    expect(!('templateLevel' in sheet.meta)).toBeTruthy()
    expect(templateIssues(sheet)).toStrictEqual([])
  })
  it('the issue reads « Template » and designates the component', async () => {
    const d = inPage('Templates - Blocks', { description: 'Sans mention.' })
    const { plugin } = await exportSheet(d)
    expect(plugin.__test.readableLocation('meta.templateLevel')).toBe('Template')
    const detail = await plugin.__test.extractDetail(d.selection[0])
    const rank = detail.sheet.issues.findIndex((i: MockData) => i.rule === 'template-description')
    expect(plain(detail.locations[rank].ids)).toStrictEqual(['S:200'])
  })
  it('changing the level gives a patch and a changelog line', async () => {
    const { plugin } = await button()
    const previous = { meta: { name: 'Header', templateLevel: 'block' } }
    const next = { meta: { name: 'Header', templateLevel: 'section' } }
    expect(plugin.__test.changeLevel(previous, next)).toBe('correctif')
    expect(plain(plugin.__test.classifyChanges(previous, next)).some((c: MockData) => c.category === 'modifie' && c.text === 'Niveau de template : block → section')).toBeTruthy()
  })
  it('the pages and mentions of code.js follow 02-composants.md', async () => {
    const { TEMPLATE_PAGES } = (await button()).plugin.__test
    expect(plain(TEMPLATE_PAGES).map((t: MockData) => [t.page, t.level, t.mention])).toStrictEqual(TEMPLATE_LEVELS)
    const doc = fs.readFileSync(path.join(DOCS, 'regles', '02-composants.md'), 'utf8')
    for (const t of TEMPLATE_PAGES) {
      expect(doc.includes(t.page), t.page + ' absent de 02-composants.md').toBeTruthy()
      expect(doc.includes('« ' + t.mention + ' »'), t.mention + ' absent de 02-composants.md').toBeTruthy()
    }
  })
})

// ------------------------------------------------------------ verifier-fiche.mjs
describe('verifier-fiche.mjs', () => {
  const OUTLINE = path.join(DOCS, 'b2c', 'composants', 'trame-fiche-composant.md')
  const instruction = (fs.readFileSync(OUTLINE, 'utf8').match(/^## Pour l'IA qui lit cette fiche\n+(.+)$/m) || [])[1]

  const LINK = 'https://exemple.test/storybook/?path=/docs/components-button--button'
  const MINIMAL_JSON = {
    meta: { name: 'Button', version: '1.2.0', tokensVersion: '2.0.0', documentationLinks: [LINK] },
    api: { props: {
      state: { type: 'enum', enum: ['default', 'hover'], default: 'default' },
      size: { type: 'enum', enum: ['md', 'lg'], default: 'md' },
      showIcon: { type: 'boolean', default: true }
    } },
    structure: { slots: { label: { as: 'children', default: { text: 'Label' } } } }
  }
  const TOKENS = 'Utilise les design tokens de Canopée 2.0.0 ou d\'une version plus récente.'
  const DECISION = '- **1.1.0 - 04/11/26.** Le libellé reste sur une seule ligne.'
  const sheet = (o: MockData = {}) => [
    o.title || '# Button 1.2.0', '',
    o.tokens === undefined ? TOKENS : o.tokens, '',
    '## Règles selon les propriétés', '',
    '### size=lg', '',
    'Pour le grand format. ' + (o.mention || 'showIcon=true'), '',
    '## Code', '',
    'Storybook : [Button](' + (o.link === undefined ? LINK : o.link) + ').', '',
    '## Décisions', '',
    o.decision || DECISION, '',
    '## Points ouverts', '',
    o.openPoint || '- Faut-il un état chargé ? En attendant : ne pas en afficher.', '',
    '## Pour l\'IA qui lit cette fiche', '',
    o.instruction === undefined ? instruction : o.instruction, ''
  ].join('\n')

  // the sheet and its outline in a temporary folder, then the script run on them
  const check = (md: MockData, meta = {}) => {
    const d = tempFolder('verifier-fiche')
    fs.copyFileSync(OUTLINE, path.join(d, 'trame-fiche-composant.md'))
    fs.mkdirSync(path.join(d, 'button'))
    fs.writeFileSync(path.join(d, 'button', 'button.md'), md)
    fs.writeFileSync(path.join(d, 'button', 'button.json'), JSON.stringify({ ...MINIMAL_JSON, meta: { ...MINIMAL_JSON.meta, ...meta } }))
    const r = spawnSync('node', [path.join(SCRIPTS, 'verifier-fiche.mjs'), path.join(d, 'button', 'button.md'), path.join(d, 'button', 'button.json')], { encoding: 'utf8' })
    return { code: r.status, output: r.stdout }
  }

  it('a correct sheet exits with 0', () => {
    const r = check(sheet())
    expect(r.code, r.output).toBe(0)
    expect(r.output).toMatch(/0 erreur\(s\)/)
  })
  it('a known template level passes, an unknown level exits with 1', () => {
    expect(check(sheet(), { type: 'template', templateLevel: 'block' }).code).toBe(0)
    const r = check(sheet(), { type: 'template', templateLevel: 'bloc' })
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}Niveau de template inconnu : bloc/)
  })
  it('the template type and the level go together, otherwise exit 1', () => {
    for (const meta of [{ templateLevel: 'block' }, { type: 'atom', templateLevel: 'block' }, { type: 'template' }]) {
      const r = check(sheet(), meta)
      expect(r.code, JSON.stringify(meta)).toBe(1)
      expect(r.output).toMatch(/ERREUR {4}Un template a le type template et un templateLevel/)
    }
  })
  it('a property unknown to the JSON exits with 1, with the mention at fault', () => {
    const r = check(sheet({ mention: 'couleur=rouge' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}Propriété inconnue du JSON : couleur=rouge/)
  })
  it('a value unknown to the JSON exits with 1, with the known values', () => {
    const r = check(sheet({ mention: 'size=xl' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/Valeur inconnue du JSON : size=xl \(valeurs : md, lg\)/)
  })
  it('an absent instruction for the AI exits with 1', () => {
    const r = check(sheet({ instruction: 'Une phrase qui n\'est pas la consigne.' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}La consigne pour l'IA ne ferme pas la fiche, ou diffère de la trame/)
  })
  it('the outline starts with the versioned title and the design tokens line', () => {
    const outline = fs.readFileSync(OUTLINE, 'utf8')
    expect(outline).toMatch(/^# <Composant> <version>$/m)
    expect(outline).toMatch(/^Utilise les design tokens de Canopée <version des design tokens> ou d'une version plus récente\.$/m)
    expect(outline).toMatch(/\*\*1\.2\.0 - 04\/11\/26\.\*\*/)
  })
  it('a title without the version of the JSON exits with 1', () => {
    const r = check(sheet({ title: '# Button' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}Le titre de la fiche n'est pas « # Button 1\.2\.0 »/)
    expect(check(sheet({ title: '# Button 1.1.0' })).code).toBe(1)
  })
  it('an instruction placed elsewhere than at the end of the sheet exits with 1', () => {
    const block = '## Pour l\'IA qui lit cette fiche\n\n' + instruction + '\n'
    const md = sheet().replace(block, '').replace('## Décisions', block + '\n## Décisions')
    const r = check(md)
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}La consigne pour l'IA ne ferme pas la fiche/)
  })
  it('the design tokens line absent, or of another version, exits with 1', () => {
    for (const tokens of ['', 'Utilise les design tokens de Canopée 2.1.0 ou d\'une version plus récente.', 'Utilise les design tokens de Canopée 2.0.0.']) {
      const r = check(sheet({ tokens }))
      expect(r.code, tokens).toBe(1)
      expect(r.output).toMatch(/ERREUR {4}La ligne des design tokens ne suit pas le titre : « Utilise les design tokens de Canopée 2\.0\.0 ou d'une version plus récente\. »/)
    }
  })
  it('a JSON without a design tokens version exits with 1', () => {
    const r = check(sheet(), { tokensVersion: null })
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}JSON sans version des design tokens/)
  })
  it('a JSON without a version exits with 1, without an absurd title', () => {
    const r = check(sheet(), { version: null })
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}JSON sans version$/m)
    expect(!/Le titre de la fiche/.test(r.output)).toBeTruthy()
  })
  it('a decision without a version and date at the start exits with 1', () => {
    for (const decision of ['- Le libellé reste sur une seule ligne.', '- **1.1.0.** Le libellé.', '- **1.1.0, 2026-11-04.** Le libellé.', '- **1.1.0 - 04/11/2026.** Le libellé.']) {
      const r = check(sheet({ decision }))
      expect(r.code, decision).toBe(1)
      expect(r.output).toMatch(/ERREUR {4}Décision sans « \*\*X\.Y\.Z - JJ\/MM\/AA\.\*\* » en tête/)
    }
  })
  it('a decision dated from a version newer than the JSON exits with 1', () => {
    const r = check(sheet({ decision: '- **1.3.0 - 04/11/26.** Le libellé.' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}Décision datée d'une version plus récente que le JSON \(1\.2\.0\)/)
    expect(check(sheet({ decision: '- **1.2.0 - 04/11/26.** Le libellé.' })).code).toBe(0)
  })
  it('a Décisions section that says « Aucun » exits with 0', () => {
    expect(check(sheet({ decision: 'Aucun' })).code).toBe(0)
  })
  it('an open point without « En attendant : » exits with 1', () => {
    const r = check(sheet({ openPoint: '- Faut-il un état chargé ?' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}Point ouvert sans « En attendant : » : Faut-il un état chargé \?/)
  })
  it('a documentation link of the JSON absent from the Code section exits with 1', () => {
    const r = check(sheet({ link: 'https://exemple.test/autre-page' }))
    expect(r.code).toBe(1)
    expect(r.output).toMatch(/ERREUR {4}Lien de documentation du JSON absent de la rubrique Code : https:\/\/exemple\.test\/storybook/)
  })
  it('a variant value without a rule is a remark, not an error', () => {
    const r = check(sheet().replace('### size=lg', '### autre titre'))
    expect(r.code, r.output).toBe(0)
    expect(r.output).toMatch(/REMARQUE {2}Pas de règle pour size=lg/)
  })
})

// ------------------------------------------------------------ the versions
describe('The change level and the next version', () => {
  const tools = async () => (await button()).plugin.__test
  // an editable copy of the real Button
  const copy = () => plain(real03())

  it('nothing changed: null', async () => {
    const { changeLevel } = await tools()
    expect(changeLevel(real03(), copy())).toBe(null)
  })
  it('do not count: position of the variants, issues, tool, format, meta.version, meta.tokensVersion', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    for (const v of b.variants) v.position = [v.position[0] + 100, v.position[1] + 100]
    b.issues = []
    b._tool = 'canopee-fiches-composants 9.9.9'
    b.formatVersion = '0.9'
    b.meta.version = '3.0.0'
    b.meta.tokensVersion = '4.0.0'
    expect(changeLevel(real03(), b)).toBe(null)
  })
  it('property value added: minor', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    b.api.props.hierarchy.enum.push('quaternary')
    expect(changeLevel(real03(), b)).toBe('mineure')
  })
  it('property added, removed, renamed, or default value changed: minor', async () => {
    const { changeLevel } = await tools()
    const added = copy(); added.api.props.nouvelle = { type: 'boolean', default: false }
    const removed = copy(); delete removed.api.props.disabled
    const renamed = copy(); renamed.api.props = Object.fromEntries(Object.entries(renamed.api.props).map(([k, v]) => [k === 'colorScheme' ? 'scheme' : k, v]))
    const baseVariant = copy(); baseVariant.api.props.hierarchy.default = 'secondary'
    for (const b of [added, removed, renamed, baseVariant]) expect(changeLevel(real03(), b)).toBe('mineure')
  })
  it('properties reordered: minor, as the Changements tab says', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    const { showRightIcon, showLeftIcon, _theme } = b.api.props
    delete b.api.props.showRightIcon; delete b.api.props.showLeftIcon; delete b.api.props._theme
    Object.assign(b.api.props, { showLeftIcon, showRightIcon, _theme })
    expect(changeLevel(real03(), b)).toBe('mineure')
  })
  it('slot, layers, variant added or removed: minor', async () => {
    const { changeLevel } = await tools()
    const slot = copy(); slot.structure.slots.label.default.text = 'Autre'
    const layers = copy(); layers.structure.trees[0].tree.pop()
    const removed = copy(); removed.variants = removed.variants.slice(1)
    const added = copy(); added.variants.push({ values: { ...added.variants[0].values, state: 'inconnu' }, position: [0, 0] })
    for (const b of [slot, layers, removed, added]) expect(changeLevel(real03(), b)).toBe('mineure')
  })
  it('variants in another order, without a value added or removed: patch', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    b.variants.reverse()
    expect(changeLevel(real03(), b)).toBe('correctif')
  })
  it('token, style, text style, component, mode, documentation link: patch', async () => {
    const { changeLevel } = await tools()
    const token = copy(); token.tokens['color/blue/900'] = { library: null, key: 'k' }
    const style = copy(); style.styles.default.root.background = { token: 'color/blue/800' }
    const text = copy(); text.textStyles['label/2/semibold'] = { library: null, key: 'k' }
    const component = copy(); component.components.Spinner = { library: null, key: 'k' }
    const mode = copy(); mode.modeCollections.Theme = { library: null, key: 'k' }
    const alias = copy(); alias.meta.documentationLinks = ['https://exemple.test/autre']
    for (const b of [token, style, text, component, mode, alias]) expect(changeLevel(real03(), b)).toBe('correctif')
  })
  it('a minor level change wins over a patch', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    b.tokens['color/blue/900'] = { library: null, key: 'k' }
    b.api.props.hierarchy.enum.push('quaternary')
    expect(changeLevel(real03(), b)).toBe('mineure')
  })
  it('nextVersion: major, minor, patch', async () => {
    const { nextVersion } = await tools()
    expect(nextVersion('1.2.3', 'majeure')).toBe('2.0.0')
    expect(nextVersion('1.2.3', 'mineure')).toBe('1.3.0')
    expect(nextVersion('1.2.3', 'correctif')).toBe('1.2.4')
    expect(nextVersion('1.9.9', 'mineure')).toBe('1.10.0')
    expect(nextVersion('1.0.0', 'inconnu')).toBe(null)
    expect(nextVersion('pas une version', 'mineure')).toBe(null)
  })
  it('chooseVersion: first version, detected level, checkboxes, nothing changed', async () => {
    const { chooseVersion, analyzeVersion } = await tools()
    const first = analyzeVersion(null, real03())
    expect(plain(first)).toStrictEqual({ first: true, current: null, level: null })
    expect(chooseVersion(first, {}).version).toBe('1.0.0')
    expect(chooseVersion(first, { overhaul: true }).version, 'pas de majeure à la première version').toBe('1.0.0')
    const base = copy(); base.meta.version = '1.1.0'
    const b = copy(); b.api.props.hierarchy.enum.push('quaternary')
    const minor = analyzeVersion(base, b)
    expect(plain(chooseVersion(minor, {}))).toStrictEqual({ version: '1.2.0', level: 'mineure', first: false, none: false })
    expect(chooseVersion(minor, { overhaul: true }).version).toBe('2.0.0')
    const nothing = analyzeVersion(base, copy())
    expect(plain(chooseVersion(nothing, {}))).toStrictEqual({ version: '1.1.0', level: null, first: false, none: true })
    expect(plain(chooseVersion(nothing, { sheetMd: true }))).toStrictEqual({ version: '1.1.1', level: 'correctif', first: false, none: false })
    expect(chooseVersion(nothing, { overhaul: true, sheetMd: true }).version).toBe('2.0.0')
    expect(plain(chooseVersion(minor, { keep: true }))).toStrictEqual({ version: '1.1.0', level: null, first: false, none: false, kept: true })
    expect(chooseVersion(minor, { keep: true, overhaul: true }).version, 'garder l\'emporte').toBe('1.1.0')
    expect(chooseVersion(first, { keep: true }).version).toBe('1.0.0')
    expect(analyzeVersion(copy(), copy()).current, 'une base sans version repart de 1.0.0').toBe('1.0.0')
  })
})

describe('The version level and the lines of the changelog', () => {
  const tools = async () => (await button()).plugin.__test
  const copy = () => plain(real03())
  // the text lines (the style groups have no text), with their category
  const lines = async (a: MockData, b: MockData) => plain((await tools()).classifyChanges(a, b)).filter((c: MockData) => c.title === undefined).map((c: MockData) => c.category + ' : ' + c.text)

  it('invariant: when the level is not null, the changelog has at least one line', async () => {
    const { changeLevel, changelogEntry } = await tools()
    const modifications = {
      'valeur de propriété ajoutée': (b: MockData) => b.api.props.hierarchy.enum.push('quaternary'),
      'valeurs de propriété dans un autre ordre': (b: MockData) => b.api.props.hierarchy.enum.reverse(),
      'type de propriété changé': (b: MockData) => { b.api.props.disabled.type = 'boolean' },
      'propriété rebranchée': (b: MockData) => { b.api.props.disabled.controls = [{ layer: 'autre', attribute: 'visible' }] },
      'slot rebranché': (b: MockData) => { b.structure.slots.label.as = 'title' },
      'variantes dans un autre ordre': (b: MockData) => b.variants.reverse(),
      'variante retirée': (b: MockData) => { b.variants = b.variants.slice(1) },
      'style de texte ajouté': (b: MockData) => { b.textStyles['label/2/semibold'] = { library: null, key: 'k' } },
      'composant imbriqué retiré': (b: MockData) => { delete b.components.account_balance },
      'collection de modes ajoutée': (b: MockData) => { b.modeCollections.Theme = { library: null, key: 'k' } },
      'lien de documentation': (b: MockData) => { b.meta.documentationLinks = ['https://exemple.test/autre'] },
      'composant renommé': (b: MockData) => { b.meta.name = 'Bouton' },
      'style d\'une variante': (b: MockData) => { b.styles.default.root.background = { token: 'color/blue/800' } },
      'calques': (b: MockData) => { b.structure.trees[0].tree.pop() },
      'champ racine inconnu': (b: MockData) => { b.champInconnu = { nouveau: true } },
      'champ inconnu dans meta': (b: MockData) => { b.meta.champInconnu = 'x' }
    }
    expect(Object.keys(modifications).length >= 10).toBeTruthy()
    for (const [name, modify] of Object.entries(modifications)) {
      const b = copy()
      modify(b)
      const level = changeLevel(real03(), b)
      expect(level, name + ' : le niveau devrait détecter la modification').not.toBe(null)
      const e = plain(changelogEntry(real03(), b))
      expect(e.ajoute.length + e.modifie.length + e.retire.length > 0, name + ' : niveau ' + level + ' sans ligne de changelog').toBeTruthy()
    }
    // the unknown field does raise the version, and goes through the safety net
    const b = copy(); b.champInconnu = 1
    expect(changeLevel(real03(), b)).toBe('correctif')
    expect(plain(changelogEntry(real03(), b)).modifie).toStrictEqual(['Autre changement dans le JSON'])
  })
  it('the library, the key of the component, the key and the library of the indexes do not change the level', async () => {
    const { changeLevel } = await tools()
    const meta = copy(); meta.meta.library = 'Autre librairie'; meta.meta.figmaKey = 'autre-cle'
    const index = copy()
    for (const field of ['tokens', 'textStyles', 'components', 'modeCollections']) {
      for (const entry of Object.values<MockData>(index[field])) { entry.key = 'autre-' + entry.key; entry.library = 'Autre librairie' }
    }
    const readToken = copy(); readToken.tokens['color/blue/700'].key = 'autre'; readToken.tokens['color/blue/700'].library = 'Autre'
    for (const b of [meta, index, readToken]) expect(changeLevel(real03(), b)).toBe(null)
  })
  it('two groupings of the same effective styles: null level, and a real style change is seen', async () => {
    const { changeLevel } = await tools()
    const variants = [{ values: { size: 'a' } }, { values: { size: 'b' } }]
    const sheet = (styles: MockData) => ({ variants, styles })
    const onA = sheet({ default: { when: { size: 'a' }, root: { background: { token: 'x' } } }, overrides: [{ when: { size: 'b' }, styles: { root: { background: { token: 'y' } } } }] })
    const onB = sheet({ default: { when: { size: 'b' }, root: { background: { token: 'y' } } }, overrides: [{ when: { size: 'a' }, styles: { root: { background: { token: 'x' } } } }] })
    expect(changeLevel(onA, onB)).toBe(null)
    expect(changeLevel(onB, onA)).toBe(null)
    const other = sheet({ default: { when: { size: 'a' }, root: { background: { token: 'x' } } }, overrides: [{ when: { size: 'b' }, styles: { root: { background: { token: 'z' } } } }] })
    expect(changeLevel(onA, other)).toBe('correctif')
    // the order of the variants does not lose the link between a variant and its styles
    const inverse = { variants: variants.slice().reverse(), styles: onA.styles }
    expect(changeLevel(onA, inverse), 'l\'ordre seul est un correctif, les styles suivent leur variante').toBe('correctif')
  })
  it('Propriété <k>, ordre des valeurs modifié', async () => {
    const b = copy(); b.api.props.hierarchy.enum.reverse()
    expect(await lines(real03(), b)).toStrictEqual(['modifie : Propriété hierarchy, ordre des valeurs modifié'])
  })
  it('Propriété <k> modifiée: only when no other line quotes it', async () => {
    const single = copy(); single.api.props.disabled.type = 'boolean'
    expect(await lines(real03(), single)).toStrictEqual(['modifie : Propriété disabled modifiée'])
    const quoted = copy(); quoted.api.props.disabled.default = 'true'; quoted.api.props.disabled.type = 'boolean'
    expect(await lines(real03(), quoted)).toStrictEqual(['modifie : Propriété disabled, valeur par défaut : false → true'])
  })
  it('Slot <k> modifié: only when no other line quotes it', async () => {
    const only = copy(); only.structure.slots.label.as = 'title'
    expect(await lines(real03(), only)).toStrictEqual(['modifie : Slot label modifié'])
    const quotes = copy(); quotes.structure.slots.label.as = 'title'; quotes.structure.slots.label.default.text = 'Autre'
    expect(await lines(real03(), quotes)).toStrictEqual(['modifie : Slot label, texte par défaut : Label → Autre'])
  })
  it('Ordre des variantes modifié', async () => {
    const b = copy(); b.variants.reverse()
    expect(await lines(real03(), b)).toStrictEqual(['modifie : Ordre des variantes modifié'])
    const removed = copy(); removed.variants = removed.variants.slice(1)
    expect(!(await lines(real03(), removed)).some((l: string) => /Ordre des variantes/.test(l)), 'une variante retirée ne change pas l\'ordre des autres').toBeTruthy()
  })
  it('text styles, nested components and mode collections: additions and removals, singular and plural', async () => {
    const one = copy()
    one.textStyles['label/2/semibold'] = { library: null, key: 'k' }
    one.components.Spinner = { library: null, key: 'k' }
    one.modeCollections.Theme = { library: null, key: 'k' }
    expect(await lines(real03(), one)).toStrictEqual([
      'ajoute : Style de texte ajouté : label/2/semibold',
      'ajoute : Composant imbriqué ajouté : Spinner',
      'ajoute : Collection de modes ajoutée : Theme'
    ])
    expect(await lines(one, real03())).toStrictEqual([
      'retire : Style de texte retiré : label/2/semibold',
      'retire : Composant imbriqué retiré : Spinner',
      'retire : Collection de modes retirée : Theme'
    ])
    const pad2 = copy()
    pad2.textStyles.a = { library: null, key: 'k' }; pad2.textStyles.b = { library: null, key: 'k' }
    pad2.components.A = { library: null, key: 'k' }; pad2.components.B = { library: null, key: 'k' }
    pad2.modeCollections.A = { library: null, key: 'k' }; pad2.modeCollections.B = { library: null, key: 'k' }
    expect(await lines(real03(), pad2)).toStrictEqual([
      'ajoute : Styles de texte ajoutés : a, b',
      'ajoute : Composants imbriqués ajoutés : A, B',
      'ajoute : Collections de modes ajoutées : A, B'
    ])
    expect(await lines(pad2, real03())).toStrictEqual([
      'retire : Styles de texte retirés : a, b',
      'retire : Composants imbriqués retirés : A, B',
      'retire : Collections de modes retirées : A, B'
    ])
  })
  it('Lien de documentation modifié, and Composant renommé : <ancien> → <nouveau>', async () => {
    const b = copy(); b.meta.documentationLinks = ['https://exemple.test/autre']
    expect(await lines(real03(), b)).toStrictEqual(['modifie : Lien de documentation modifié'])
    const c = copy(); c.meta.name = 'Bouton'
    expect(await lines(real03(), c)).toStrictEqual(['modifie : Composant renommé : Button → Bouton'])
  })
  it('Autre changement dans le JSON: safety net when nothing else says it, and only with a previous sheet', async () => {
    const { classifyChanges } = await tools()
    const b = copy(); b.champInconnu = 1
    expect(await lines(real03(), b)).toStrictEqual(['modifie : Autre changement dans le JSON'])
    expect(plain(classifyChanges(null, b)).filter((c: MockData) => c.text === 'Autre changement dans le JSON'), 'première version : pas de filet').toStrictEqual([])
    const withUnknown = copy(); withUnknown.champInconnu = 1; withUnknown.meta.name = 'Bouton'
    expect(!(await lines(real03(), withUnknown)).some((l: string) => /Autre changement/.test(l)), 'une autre ligne dispense du filet').toBeTruthy()
    const excluded = copy(); excluded.issues = []; excluded.variants.forEach((v: MockData) => { v.position = [0, 0] })
    expect(!(await lines(real03(), excluded)).some((l: string) => /Autre changement/.test(l)), 'ce qui ne compte pas ne déclenche pas le filet').toBeTruthy()
  })
})

describe('The design tokens version', () => {
  const tools = async () => (await button()).plugin.__test
  // a reader that serves the tokens files provided, in disorder, and counts the reads
  const reader = (tags: string[], files: MockData) => {
    const readOnes: MockData[] = []
    return {
      readOnes,
      versions: async () => tags,
      paths: async (tag: string) => { readOnes.push(tag); return new Set(files[tag]) }
    }
  }
  const inputs = { tokens: { 'color/blue/700': {}, 'spacing/16': {} }, textStyles: { 'label/1/semibold': {} } }

  it('publishedPaths: sets, sources, nested groups, without the dollar keys', async () => {
    const { publishedPaths } = await tools()
    const doc = tokensFile(['color.blue.700', 'color.white', 'typographie.label.1.semibold'])
    expect([...publishedPaths(plain(doc))].sort()).toStrictEqual(['color.blue.700', 'color.white', 'typography.label.1.semibold'])
  })
  it('requiredTokens: color/blue/700 gives color.blue.700, a text style lives under typography', async () => {
    const { requiredTokens } = await tools()
    expect(plain(requiredTokens(inputs.tokens, inputs.textStyles).map((r: MockData) => r.path))).toStrictEqual(['color.blue.700', 'spacing.16', 'typography.label.1.semibold'])
  })
  it('the first version that contains all the tokens, text styles included', async () => {
    const { computeTokensVersion } = await tools()
    const allPaths = ['color.blue.700', 'spacing.16', 'typography.label.1.semibold']
    const l = reader(['2.2.0', '2.1.0', '2.0.0'], { '2.0.0': ['color.blue.700', 'spacing.16'], '2.1.0': allPaths, '2.2.0': allPaths })
    const r = await computeTokensVersion(inputs, l)
    expect(plain(r)).toStrictEqual({ version: '2.1.0', issues: [] })
    expect(l.readOnes, 'versions lues dans l\'ordre, arrêt à la première qui convient').toStrictEqual(['2.0.0', '2.1.0'])
  })
  it('only the X.Y.Z versions from 2.0.0 count: no candidates, no component tags, no 1.x', async () => {
    const { computeTokensVersion } = await tools()
    const allPaths = ['color.blue.700', 'spacing.16', 'typography.label.1.semibold']
    const l = reader(['slash/3.0.0', '2.0.0-RC.1', '1.8.0', '2.0.0'], { '1.8.0': allPaths, '2.0.0-RC.1': allPaths, 'slash/3.0.0': allPaths, '2.0.0': allPaths })
    expect((await computeTokensVersion(inputs, l)).version).toBe('2.0.0')
    expect(l.readOnes).toStrictEqual(['2.0.0'])
  })
  it('a numeric sort: 2.10.0 comes after 2.9.0', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.10.0', '2.9.0'], { '2.9.0': [], '2.10.0': ['color.blue.700', 'spacing.16', 'typography.label.1.semibold'] })
    expect((await computeTokensVersion(inputs, l)).version).toBe('2.10.0')
  })
  it('a text style absent from the tokens file prevents the version', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.0.0'], { '2.0.0': ['color.blue.700', 'spacing.16'] })
    const r = plain(await computeTokensVersion(inputs, l))
    expect(r.version).toBe(null)
    expect(r.issues).toStrictEqual([{ level: 'warning', rule: 'token-non-publie', where: 'textStyles.label/1/semibold', message: 'Token absent de toutes les versions publiées de Canopée : label/1/semibold.' }])
  })
  it('a token present in no published version: one issue per token, version null', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.1.0', '2.0.0'], { '2.0.0': ['spacing.16', 'typography.label.1.semibold'], '2.1.0': ['spacing.16', 'typography.label.1.semibold'] })
    const r = plain(await computeTokensVersion(inputs, l))
    expect(r.version).toBe(null)
    expect(r.issues).toStrictEqual([{ level: 'warning', rule: 'token-non-publie', where: 'tokens.color/blue/700', message: 'Token absent de toutes les versions publiées de Canopée : color/blue/700.' }])
  })
  it('each token exists somewhere, but no version brings them together: dedicated issue, version null', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.1.0', '2.0.0'], { '2.0.0': ['color.blue.700', 'spacing.16'], '2.1.0': ['spacing.16', 'typography.label.1.semibold'] })
    const r = plain(await computeTokensVersion(inputs, l))
    expect(r.version).toBe(null)
    expect(r.issues.map((i: MockData) => i.rule)).toStrictEqual(['tokens-sans-version-commune'])
  })
  it('GitHub does not answer: tokens-injoignables issue, version null', async () => {
    const { computeTokensVersion } = await tools()
    const l = { versions: async () => { throw new Error('Failed to fetch') }, paths: async () => new Set() }
    const r = plain(await computeTokensVersion(inputs, l))
    expect(r).toStrictEqual({ version: null, issues: [{ level: 'warning', rule: 'tokens-injoignables', where: 'meta.tokensVersion', message: 'GitHub ne répond pas : la version des design tokens n\'a pas pu être calculée.' }] })
    const l2 = { versions: async () => ['2.0.0'], paths: async () => { throw new Error('GitHub 500') } }
    expect((await computeTokensVersion(inputs, l2)).issues[0].rule).toBe('tokens-injoignables')
  })
  it('no version published from 2.0.0: GitHub unreachable for the computation', async () => {
    const { computeTokensVersion } = await tools()
    const r = await computeTokensVersion(inputs, reader(['1.8.0', 'slash/3.0.0'], {}))
    expect(r.version).toBe(null)
    expect(r.issues[0].rule).toBe('tokens-injoignables')
  })
  it('a component without a token or text style: 2.0.0, without calling GitHub', async () => {
    const { computeTokensVersion } = await tools()
    const l = { versions: async () => { throw new Error('ne doit pas être appelé') }, paths: async () => { throw new Error('ne doit pas être appelé') } }
    expect(plain(await computeTokensVersion({ tokens: {}, textStyles: {} }, l))).toStrictEqual({ version: '2.0.0', issues: [] })
  })
  it('the plugin reads GitHub read only: list of tags, then one file per version, kept for the session', async () => {
    const doc = buttonDocument()
    const p = createFakePlugin(doc)
    await p.send({ type: 'ui-pret' })
    await p.send({ type: 'generer' })
    await p.send({ type: 'generer' })
    const files = doc.network.calls.filter((u: string) => u.startsWith('https://raw.githubusercontent.com/') && u.endsWith('.resolver.json'))
    expect(files.map((u: string) => u.split('/')[5]), 'chaque fichier est lu une fois pour la session').toStrictEqual(['2.0.0', '2.1.0'])
    expect(doc.network.calls.filter((u: string) => u.startsWith('https://api.github.com/')).length, 'la liste des versions est gardée pour la session').toBe(1)
    expect(doc.network.calls.every((u: string) => /^https:\/\/(api\.github\.com|raw\.githubusercontent\.com)\//.test(u))).toBeTruthy()
  })
  // the real GitHub reader, on a fake network, with a timeout of a few milliseconds
  const ALL = ['color.blue.700', 'spacing.16', 'typography.label.1.semibold']
  const readerOverNetwork = async (network: MockData, timeout = 1000) => {
    const doc = buttonDocument()
    doc.network = network
    const p = createFakePlugin(doc)
    return p.__test.createGitHubReader(timeout)
  }
  it('a tag whose file answers 404 is ignored: the next tag is tried', async () => {
    const { computeTokensVersion } = await tools()
    const l = await readerOverNetwork(fakeNetwork({ tags: ['2.1.0', '2.0.0'], files: { '2.1.0': tokensFile(ALL) } }))
    expect(plain(await computeTokensVersion(inputs, l))).toStrictEqual({ version: '2.1.0', issues: [] })
    const l2 = { versions: async () => ['2.0.0', '2.1.0'], paths: async (tag: string) => { if (tag === '2.0.0') throw Object.assign(new Error('GitHub 404'), { status: 404 }); return new Set(ALL) } }
    expect(plain(await computeTokensVersion(inputs, l2))).toStrictEqual({ version: '2.1.0', issues: [] })
  })
  it('all tags answer 404: tokens-sans-fichier issue', async () => {
    const { computeTokensVersion } = await tools()
    const l = await readerOverNetwork(fakeNetwork({ tags: ['2.1.0', '2.0.0'], files: {} }))
    const r = plain(await computeTokensVersion(inputs, l))
    expect(r).toStrictEqual({ version: null, issues: [{ level: 'warning', rule: 'tokens-sans-fichier', where: 'meta.tokensVersion', message: 'Aucune version publiée de Canopée ne contient le fichier de design tokens.' }] })
  })
  it('a 403 or 429 status: tokens-limite-github issue, not tokens-injoignables', async () => {
    const { computeTokensVersion } = await tools()
    for (const status of [403, 429]) {
      const l = await readerOverNetwork(fakeNetwork({ status }))
      const r = plain(await computeTokensVersion(inputs, l))
      expect(r).toStrictEqual({ version: null, issues: [{ level: 'warning', rule: 'tokens-limite-github', where: 'meta.tokensVersion', message: 'GitHub limite les appels depuis ce poste : la version des design tokens n\'a pas pu être calculée. Réessayer plus tard.' }] })
    }
    // the limit can also hit the file of a tag
    const l2 = { versions: async () => ['2.0.0'], paths: async () => { throw Object.assign(new Error('GitHub 403'), { status: 403 }) } }
    expect((await computeTokensVersion(inputs, l2)).issues[0].rule).toBe('tokens-limite-github')
  })
  it('another status, or a fetch with no answer after the timeout: tokens-injoignables', async () => {
    const { computeTokensVersion } = await tools()
    const l500 = await readerOverNetwork(fakeNetwork({ status: 500 }))
    expect((await computeTokensVersion(inputs, l500)).issues[0].rule).toBe('tokens-injoignables')
    const start = Date.now()
    const mute = await readerOverNetwork(fakeNetwork({ mute: true }), 20)
    const r = plain(await computeTokensVersion(inputs, mute))
    expect(r.version).toBe(null)
    expect(r.issues.map((i: MockData) => i.rule)).toStrictEqual(['tokens-injoignables'])
    expect(Date.now() - start < 2000, 'le délai coupe l\'attente').toBeTruthy()
  })
  it('the bridge script calls no network', () => {
    const code = bridgeCode()
    expect(!/fetch\(|github/i.test(code)).toBeTruthy()
  })
  it('manifest: the two GitHub domains, with their reason in French', () => {
    const m = JSON.parse(fs.readFileSync(path.join(PLUGIN, 'manifest.json'), 'utf8'))
    expect(m.networkAccess.allowedDomains).toStrictEqual(['https://api.github.com', 'https://raw.githubusercontent.com'])
    expect(m.networkAccess.reasoning).toMatch(/lecture seule/)
  })
})

describe('The version in the plugin', () => {
  const NS = 'canopee_fiches'
  const variantSet = (doc: MockData) => doc.nodes[1]
  const generatedPlugin = async (doc = buttonDocument()) => {
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    return { doc, p, msg: p.lastMessage() }
  }
  const exported = async (doc?: MockData) => {
    const r = await generatedPlugin(doc)
    await r.p.send({ type: 'memoriser', id: 'S:100' })
    return r
  }

  it('first export: version 1.0.0 and tokens 2.1.0 in the JSON, no base', async () => {
    const { doc, msg } = await generatedPlugin()
    expect(variantSet(doc).getSharedPluginData(NS, 'export')).toBe('')
    expect(plain(msg.version)).toStrictEqual({ first: true, none: false, current: null, version: '1.0.0', level: null, detected: null, tokensVersion: '2.1.0', kept: false, next: null })
    const sheet = JSON.parse(msg.json)
    expect(sheet.meta.version).toBe('1.0.0')
    expect(sheet.meta.tokensVersion).toBe('2.1.0')
    expect(Object.keys(sheet.meta).slice(0, 3)).toStrictEqual(['name', 'version', 'tokensVersion'])
  })
  it('the generation writes nothing: only an export updates the base', async () => {
    const { doc } = await generatedPlugin()
    expect(variantSet(doc).getSharedPluginData(NS, 'export')).toBe('')
  })
  it('export: the minified JSON is written in the component set, under canopee_fiches / export', async () => {
    const { doc, msg } = await exported()
    const base = variantSet(doc).getSharedPluginData(NS, 'export')
    expect(base).toBe(JSON.stringify(JSON.parse(msg.json)))
    expect(!base.includes('\n'), 'minifié').toBeTruthy()
    expect(JSON.parse(base).meta.version).toBe('1.0.0')
  })
  it('no date in the shared base, nor in the JSON', async () => {
    const { doc } = await exported()
    expect(!/\d{4}-\d{2}-\d{2}/.test(variantSet(doc).getSharedPluginData(NS, 'export'))).toBeTruthy()
  })
  it('same component exported again: no change since 1.0.0, version unchanged', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    expect(plain(m.version)).toStrictEqual({ first: false, none: true, current: '1.0.0', version: '1.0.0', level: null, detected: null, tokensVersion: '2.1.0', kept: false, next: null })
    expect(JSON.parse(m.json).meta.version).toBe('1.0.0')
  })
  it('a property value added: 1.1.0, minor', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].componentPropertyDefinitions.hierarchy.variantOptions.push('secondary')
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    expect(m.version.version).toBe('1.1.0')
    expect(m.version.level).toBe('mineure')
    expect(JSON.parse(m.json).meta.version).toBe('1.1.0')
  })
  it('a default text changes a slot: minor, and the change sentences are sent', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    expect(m.version.version).toBe('1.1.0')
    expect(plain(m.changes.sentences)).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
  })
  it('a documentation link modified: 1.0.1, patch', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].documentationLinks = [{ uri: 'https://exemple.test/autre' }]
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    expect(m.version.version).toBe('1.0.1')
    expect(m.version.level).toBe('correctif')
  })
  it('Refonte complète checkbox: major, and the JSON follows the chosen version', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: true, sheetMd: false })
    const m = p.lastMessage()
    expect(m.type).toBe('version')
    expect(m.version.version).toBe('2.0.0')
    expect(m.version.level).toBe('majeure')
    expect(JSON.parse(m.json).meta.version).toBe('2.0.0')
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: false, sheetMd: false })
    expect(p.lastMessage().version.version).toBe('1.0.0')
  })
  it('Fiche md modifiée checkbox: patch when nothing changed', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: false, sheetMd: true })
    const m = p.lastMessage()
    expect(m.version.version).toBe('1.0.1')
    expect(JSON.parse(m.json).meta.version).toBe('1.0.1')
  })
  it('answer Non, garder: the current version despite a change, and the base is replaced at export', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].componentPropertyDefinitions.hierarchy.variantOptions.push('secondary')
    await p.send({ type: 'generer' })
    expect(p.lastMessage().version.version).toBe('1.1.0')
    expect(p.lastMessage().version.next).toBe('1.1.0')
    await p.send({ type: 'choisir-version', id: 'S:100', keep: false, overhaul: true, sheetMd: false })
    expect(p.lastMessage().version.next, 'la réponse Oui annonce la majeure quand la refonte est cochée').toBe('2.0.0')
    await p.send({ type: 'choisir-version', id: 'S:100', keep: true, overhaul: false, sheetMd: false })
    const m = p.lastMessage()
    expect(m.version.version).toBe('1.0.0')
    expect(m.version.kept).toBe(true)
    expect(m.version.detected).toBe('mineure')
    expect(JSON.parse(m.json).meta.version).toBe('1.0.0')
    await p.send({ type: 'memoriser', id: 'S:100' })
    const base = JSON.parse(variantSet(doc).getSharedPluginData(NS, 'export'))
    expect(base.meta.version).toBe('1.0.0')
    expect(base.api.props.hierarchy.enum.includes('secondary'), 'la base contient le changement').toBeTruthy()
    await p.send({ type: 'generer' })
    expect(p.lastMessage().version.none, 'le changement gardé ne compte plus au prochain export').toBe(true)
  })
  it('at the first version, the Refonte complète checkbox changes nothing', async () => {
    const { p } = await generatedPlugin()
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: true, sheetMd: false })
    expect(p.lastMessage().version.version).toBe('1.0.0')
  })
  it('a version choice for another component is ignored', async () => {
    const { p } = await generatedPlugin()
    const before = p.messages.length
    await p.send({ type: 'choisir-version', id: 'autre:1', overhaul: true })
    expect(p.messages.length).toBe(before)
  })
  it('the export writes the JSON of the chosen version, and the next generation starts from this version', async () => {
    const { doc, p } = await generatedPlugin()
    await p.send({ type: 'memoriser', id: 'S:100' })
    await p.send({ type: 'generer' })
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: true })
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(JSON.parse(variantSet(doc).getSharedPluginData(NS, 'export')).meta.version).toBe('2.0.0')
    await p.send({ type: 'generer' })
    expect(p.lastMessage().version.current).toBe('2.0.0')
  })
  it('the shared base wins over the machine memo: another designer starts from the same version', async () => {
    const { doc } = await exported()
    // another machine: no local memo, the same base in the file
    const other = buttonDocument()
    variantSet(other).setSharedPluginData(NS, 'export', variantSet(doc).getSharedPluginData(NS, 'export'))
    const { msg } = await generatedPlugin(other)
    expect(msg.version.current).toBe('1.0.0')
    expect(msg.version.none).toBe(true)
    expect(plain(msg.changes.sentences)).toStrictEqual([])
  })
  it('unreadable base: the component starts again from version 1.0.0', async () => {
    const doc = buttonDocument()
    variantSet(doc).setSharedPluginData(NS, 'export', '{pas du json')
    const { p } = await generatedPlugin(doc)
    const msg = p.messages.find((m: MockData) => m.type === 'fiche')
    expect(msg.version.first).toBe(true)
    expect(p.messages.filter((m: MockData) => m.type === 'selection').pop().latestVersion, 'aucune version affichée pour une base illisible').toBe(null)
  })
  it('base write refused (size): the error shows, neither the history nor the previous version are written', async () => {
    const doc = buttonDocument()
    doc.nodes[1].shareLimit = 1000
    const { p } = await generatedPlugin(doc)
    await p.send({ type: 'memoriser', id: 'S:100' })
    const m = p.lastMessage()
    expect(m.type).toBe('erreur')
    expect(m.message).toMatch(/^La version 1\.0\.0 n'a pas pu être enregistrée dans le fichier Figma \(\d+ Ko\) : Data too large/)
    expect(variantSet(doc).getSharedPluginData(NS, 'export')).toBe('')
    expect(variantSet(doc).getSharedPluginData(NS, 'changelog'), 'historique non écrit').toBe('')
    expect(variantSet(doc).getSharedPluginData(NS, 'version-precedente'), 'version précédente non écrite').toBe('')
  })
  it('offline: tokensVersion null and tokens-injoignables issue, the JSON is produced', async () => {
    const doc = buttonDocument()
    doc.network = fakeNetwork({ outage: true })
    const { msg } = await generatedPlugin(doc)
    expect(JSON.parse(msg.json).meta.tokensVersion).toBe(null)
    expect(msg.version.tokensVersion).toBe(null)
    const i = msg.issues.find((x: MockData) => x.rule === 'tokens-injoignables')
    expect(i.level).toBe('warning')
    expect(i.message).toBe('GitHub ne répond pas : la version des design tokens n\'a pas pu être calculée.')
    expect(i.location).toBe('Version des design tokens')
  })
  it('token absent from all versions: token-non-publie issue in À corriger, tokensVersion null', async () => {
    const doc = buttonDocument()
    doc.network = fakeNetwork({ tags: ['2.0.0'], files: { '2.0.0': tokensFile(BUTTON_PATHS.filter((c) => c !== 'radius.medium')) } })
    const { msg } = await generatedPlugin(doc)
    expect(JSON.parse(msg.json).meta.tokensVersion).toBe(null)
    const i = msg.issues.find((x: MockData) => x.rule === 'token-non-publie')
    expect(i.message).toBe('Token absent de toutes les versions publiées de Canopée : radius/medium.')
    expect(i.location).toBe('Variable radius/medium')
  })
  it('version issues do not change the level: only the sheet counts', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    expect(p.lastMessage().version.none).toBe(true)
  })
  it('the format is 0.4, and the plugin version starts with the format', async () => {
    const { p } = await openPlugin()
    expect(p.__test.FORMAT).toBe('0.4')
    expect(p.__test.VERSION.startsWith(p.__test.FORMAT + '.')).toBeTruthy()
  })
})

// ------------------------------------------------------------ the changelog
describe('The changelog: the content of an entry', () => {
  const tools = async () => (await button()).plugin.__test
  const slots = (text: string) => ({ structure: { slots: { label: { default: { text: text } } } } })

  it('classification: added, modified, removed', async () => {
    const { changelogEntry } = await tools()
    const before = {
      api: { props: { size: { enum: ['small', 'medium'], default: 'small' }, disabled: { enum: ['true', 'false'] }, tone: { enum: ['a'] } } },
      structure: { slots: { icone: { default: { swap: 'Icon' } } }, trees: ['a'] },
      tokens: { 'color/old': 1 }
    }
    const after = {
      api: { props: { size: { enum: ['small', 'medium', 'large'], default: 'medium' }, tone: { enum: ['a'] }, loading: { enum: ['true', 'false'] } } },
      structure: { slots: { icone: { default: { swap: 'Autre' } }, label: { default: { text: 'x' } } }, trees: ['b'] },
      tokens: { 'color/new': 1 }
    }
    expect(plain(changelogEntry(before, after))).toStrictEqual({
      ajoute: ['Propriété ajoutée : loading', 'Propriété size, valeurs ajoutées : large', 'Slot ajouté : label', 'Variables ajoutées : color/new'],
      modifie: ['Propriété size, valeur par défaut : small → medium', 'Slot icone, composant par défaut : Icon → Autre', 'Structure des calques modifiée'],
      retire: ['Propriété retirée : disabled', 'Variables retirées : color/old']
    })
  })
  it('order of the properties and default text go under Modifié', async () => {
    const { changelogEntry } = await tools()
    const a = { api: { props: { size: {}, tone: {} } } }
    const b = { api: { props: { tone: {}, size: {} } } }
    expect(plain(changelogEntry(a, b))).toStrictEqual({ ajoute: [], modifie: ['Ordre des propriétés modifié'], retire: [] })
    expect(plain(changelogEntry(slots('Label'), slots('Libellé'))).modifie).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
  })
  it('variants added and removed, including the « N variantes » form', async () => {
    const { changelogEntry } = await tools()
    const v = (n: string) => ({ values: { size: n }, position: [0, 0] })
    expect(plain(changelogEntry({ variants: [v('a'), v('b')] }, { variants: [v('b'), v('c')] }))).toStrictEqual({ ajoute: ['Variante ajoutée : size=c'], modifie: [], retire: ['Variante retirée : size=a'] })
    const seven = [1, 2, 3, 4, 5, 6, 7].map((n) => v('s' + n))
    expect(plain(changelogEntry({ variants: [] }, { variants: seven })).ajoute).toStrictEqual(['7 variantes ajoutées'])
    expect(plain(changelogEntry({ variants: seven }, { variants: [] })).retire).toStrictEqual(['7 variantes retirées'])
  })
  it('excluded: variants moved on the canvas and Défauts line', async () => {
    const { changelogEntry, compareSheets } = await tools()
    const a = { variants: [{ values: { size: 'a' }, position: [0, 0] }], issues: [{ level: 'error' }] }
    const b = { variants: [{ values: { size: 'a' }, position: [10, 0] }], issues: [] }
    expect(plain(changelogEntry(a, b))).toStrictEqual({ ajoute: [], modifie: [], retire: [] })
    expect(plain(compareSheets(a, b)), 'l\'onglet Changements les garde').toStrictEqual(['1 variante déplacée sur le canevas', 'Défauts : 1 → 0'])
  })
  it('a style change fits on one line: title, label in lowercase, before → after', async () => {
    const { changelogEntry } = await tools()
    const variant = (size: string, theme: string) => ({ values: { state: 'focus', size: size, _theme: theme }, position: [0, 0] })
    const pad = (h: string, v: string) => ({ top: { token: v }, right: { token: h }, bottom: { token: v }, left: { token: h } })
    const sheet = (pm: MockData, pl: MockData) => ({
      variants: [variant('medium', 'prospect'), variant('large', 'prospect')],
      styles: {
        default: { when: { state: 'focus', size: 'large', _theme: 'prospect' }, root: { padding: pad('spacing/24', 'spacing/12') } },
        overrides: [{ when: { size: 'medium' }, styles: { root: { padding: pm } } }, { when: { size: 'large' }, styles: { root: { padding: pl } } }]
      }
    })
    const r = changelogEntry(sheet(pad('spacing/24', 'spacing/12'), pad('spacing/24', 'spacing/12')), sheet(pad('spacing/16', 'spacing/12'), pad('spacing/24', 'spacing/12')))
    expect(plain(r)).toStrictEqual({ ajoute: [], modifie: ['size=medium : marges horizontales, spacing/24 → spacing/16'], retire: [] })
    const wholeEntry = changelogEntry(sheet(pad('spacing/24', 'spacing/12'), pad('spacing/24', 'spacing/12')), sheet(pad('spacing/16', 'spacing/12'), pad('spacing/16', 'spacing/12')))
    expect(plain(wholeEntry).modifie).toStrictEqual(['Toutes les variantes : marges horizontales, spacing/24 → spacing/16'])
  })
  it('no truncation at 20 lines in the changelog, whereas the Changements tab truncates', async () => {
    const { changelogEntry, compareSheets } = await tools()
    const fa: MockData = { structure: { slots: {} } }
    const fb: MockData = { structure: { slots: {} } }
    for (let k = 0; k < 25; k++) { fa.structure.slots['s' + k] = { default: { text: 'a' } }; fb.structure.slots['s' + k] = { default: { text: 'b' } } }
    expect(changelogEntry(fa, fb).modifie.length).toBe(25)
    expect(compareSheets(fa, fb).length).toBe(21)
  })
  it('Button 0.2 against 0.3: the entry takes the sentences of compareSheets, excluded ones left out', async () => {
    const { changelogEntry, compareSheets } = await tools()
    const wholeEntry = (c: MockData): string[] => [...c.ajoute, ...c.modifie, ...c.retire]
    const sentences = compareSheets(real02(), real03()).filter((x: string) => typeof x === 'string' && !/déplacée|^Défauts/.test(x))
    const lines = wholeEntry(plain(changelogEntry(real02(), real03())))
    for (const p of sentences) expect(lines.includes(p), p).toBeTruthy()
  })
})

describe('The changelog: the Markdown file', () => {
  const tools = async () => (await button()).plugin.__test
  const e = (version: string, extra: MockData) => Object.assign({ version, date: '2026-11-04', ajoute: [], modifie: [], retire: [] }, extra)

  it('title, entries from the most recent to the oldest, empty sections omitted, final line break', async () => {
    const { renderChangelog } = await tools()
    const md = renderChangelog('Button', [
      e('1.1.0', { ajoute: ['Propriété ajoutée : loading'], modifie: ['Structure des calques modifiée'] }),
      e('1.0.0', { ajoute: ['Première version du composant'] })
    ])
    expect(md).toBe([
      '# Changelog de Button',
      '',
      '## 1.1.0 - 04/11/26',
      '',
      '### Ajouté',
      '- Propriété ajoutée : loading',
      '',
      '### Modifié',
      '- Structure des calques modifiée',
      '',
      '## 1.0.0 - 04/11/26',
      '',
      '### Ajouté',
      '- Première version du composant',
      ''
    ].join('\n'))
  })
  it('a Retiré section alone, and several lines per section', async () => {
    const { renderChangelog } = await tools()
    const md = renderChangelog('Tag', [e('2.0.0', { retire: ['a', 'b'] })])
    expect(md).toBe('# Changelog de Tag\n\n## 2.0.0 - 04/11/26\n\n### Retiré\n- a\n- b\n')
  })
  it('a date already stored shows as DD/MM/YY, and a date outside the format stays as is', async () => {
    const { renderChangelog } = await tools()
    expect(renderChangelog('Tag', [e('1.0.0', { date: '2026-03-09' })])).toMatch(/^## 1\.0\.0 - 09\/03\/26$/m)
    expect(renderChangelog('Tag', [e('1.0.0', { date: 'inconnue' })])).toMatch(/^## 1\.0\.0 - inconnue$/m)
  })
  it('the title writes « d\' » before a vowel and « de » otherwise', async () => {
    const { renderChangelog } = await tools()
    expect(renderChangelog('IconButton', [])).toBe("# Changelog d'IconButton\n")
    expect(renderChangelog('Accordion', [])).toBe("# Changelog d'Accordion\n")
    expect(renderChangelog('Tag', [])).toBe('# Changelog de Tag\n')
  })
  it('an empty history gives only the title', async () => {
    const { renderChangelog } = await tools()
    expect(renderChangelog('Button', [])).toBe('# Changelog de Button\n')
  })
})

describe('The changelog: the history in the plugin', () => {
  const NS = 'canopee_fiches'
  const variantSet = (doc: MockData) => doc.nodes[1]
  const read = (doc: MockData, key: string) => variantSet(doc).getSharedPluginData(NS, key)
  const history = (doc: MockData) => JSON.parse(read(doc, 'changelog') || '[]')
  const exported = async (doc = buttonDocument(), choices?: MockData) => {
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    if (choices) await p.send({ type: 'choisir-version', id: 'S:100', ...choices })
    const msg = p.lastMessage()
    await p.send({ type: 'memoriser', id: 'S:100' })
    return { doc, p, msg }
  }
  // another plugin on the same document: a new designer who opens the file
  const reopen = async (doc: MockData, choices?: MockData) => exported(doc, choices)
  const addValue = (doc: MockData, v: string) => variantSet(doc).componentPropertyDefinitions.hierarchy.variantOptions.push(v)
  const today = /^\d{4}-\d{2}-\d{2}$/
  const FIRST = 'Première version du composant'

  it('first version: entry 1.0.0, « Première version du composant », no previous version', async () => {
    const { doc, msg } = await exported()
    const h = history(doc)
    expect(h.length).toBe(1)
    expect(h[0].version).toBe('1.0.0')
    expect(h[0].date).toMatch(today)
    expect([h[0].ajoute, h[0].modifie, h[0].retire]).toStrictEqual([[FIRST], [], []])
    expect(read(doc, 'version-precedente')).toBe('')
    expect(msg.changelog).toMatch(/^# Changelog de Button\n\n## 1\.0\.0 - \d{2}\/\d{2}\/\d{2}\n\n### Ajouté\n- Première version du composant\n$/)
  })
  it('the generation alone writes nothing: only the export stores', async () => {
    const { doc, p } = await openPlugin()
    await p.send({ type: 'generer' })
    expect(p.lastMessage().type).toBe('fiche')
    expect(typeof p.lastMessage().changelog).toBe('string')
    expect(read(doc, 'changelog')).toBe('')
    expect(read(doc, 'export')).toBe('')
  })
  it('new version: the entry compares the base with the new sheet, at the top, and the base becomes the previous version', async () => {
    const { doc } = await exported()
    const base = read(doc, 'export')
    addValue(doc, 'tertiary')
    const { msg } = await reopen(doc)
    const h = history(doc)
    expect(h.map((x: MockData) => x.version)).toStrictEqual(['1.1.0', '1.0.0'])
    expect(h[0].ajoute).toStrictEqual(['Propriété hierarchy, valeurs ajoutées : tertiary'])
    expect(read(doc, 'version-precedente')).toBe(base)
    expect(msg.changelog).toMatch(/^# Changelog de Button\n\n## 1\.1\.0 - [\d\/]+\n\n### Ajouté\n- Propriété hierarchy, valeurs ajoutées : tertiary\n\n## 1\.0\.0 - [\d\/]+\n/)
  })
  it('kept version: the entry is recomputed from the previous version, without piling up', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    await reopen(doc)
    // 1.1.0 is exported; a second change, and the designer keeps 1.1.0
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { keep: true })
    let h = history(doc)
    expect(h.map((x: MockData) => x.version)).toStrictEqual(['1.1.0', '1.0.0'])
    expect(h[0].ajoute).toStrictEqual(['Propriété hierarchy, valeurs ajoutées : tertiary'])
    expect(h[0].modifie).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
    // the same export repeated duplicates nothing
    await reopen(doc, { keep: true })
    await reopen(doc, { keep: true })
    h = history(doc)
    expect(h.length).toBe(2)
    expect(h[0].ajoute).toStrictEqual(['Propriété hierarchy, valeurs ajoutées : tertiary'])
    expect(h[0].modifie).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
    expect(JSON.parse(read(doc, 'version-precedente')).meta.version, 'la version précédente ne bouge pas').toBe('1.0.0')
    // a cancelled change disappears from the kept entry
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Label'
    await reopen(doc, { keep: true })
    expect(history(doc)[0].modifie).toStrictEqual([])
  })
  it('kept version without a previous version: the new lines are added, without duplicates', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    await reopen(doc)
    // a component exported before this evolution has no previous version
    variantSet(doc).setSharedPluginData(NS, 'version-precedente', '')
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { keep: true })
    const h = history(doc)
    expect(h.map((x: MockData) => x.version)).toStrictEqual(['1.1.0', '1.0.0'])
    expect(h[0].ajoute).toStrictEqual(['Propriété hierarchy, valeurs ajoutées : tertiary'])
    expect(h[0].modifie).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
    await reopen(doc, { keep: true })
    expect(history(doc)[0].modifie).toStrictEqual(['Slot label, texte par défaut : Label → Libellé'])
    expect(read(doc, 'version-precedente'), 'toujours pas de version précédente').toBe('')
  })
  it('first version kept: the entry stays « Première version du composant », the date is that of the export', async () => {
    const { doc } = await exported()
    const h = history(doc)
    h[0].date = '2020-01-01'
    variantSet(doc).setSharedPluginData(NS, 'changelog', JSON.stringify(h))
    addValue(doc, 'tertiary')
    await reopen(doc, { keep: true })
    const after = history(doc)
    expect(after.length).toBe(1)
    expect(after[0].ajoute).toStrictEqual([FIRST])
    expect(after[0].modifie).toStrictEqual([])
    expect(after[0].date).toMatch(today)
    expect(after[0].date).not.toBe('2020-01-01')
  })
  it('Markdown sheet modified: a single line under Modifié', async () => {
    const { doc } = await exported()
    await reopen(doc, { overhaul: false, sheetMd: true })
    const h = history(doc)
    expect(h.map((x: MockData) => x.version)).toStrictEqual(['1.0.1', '1.0.0'])
    expect([h[0].ajoute, h[0].modifie, h[0].retire]).toStrictEqual([[], ['Fiche Markdown modifiée'], []])
  })
  it('complete overhaul: the line at the top of Modifié, then the detail', async () => {
    const { doc } = await exported()
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { overhaul: true, sheetMd: false })
    const h = history(doc)
    expect(h[0].version).toBe('2.0.0')
    expect(h[0].modifie).toStrictEqual(['Refonte complète du composant', 'Slot label, texte par défaut : Label → Libellé'])
  })
  it('overhaul without any other change: the overhaul line alone', async () => {
    const { doc } = await exported()
    await reopen(doc, { overhaul: true, sheetMd: false })
    expect(history(doc)[0].modifie).toStrictEqual(['Refonte complète du composant'])
  })
  it('a version kept after an overhaul keeps the overhaul line', async () => {
    const { doc } = await exported()
    await reopen(doc, { overhaul: true, sheetMd: false })
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { keep: true })
    expect(history(doc)[0].modifie).toStrictEqual(['Refonte complète du composant', 'Slot label, texte par défaut : Label → Libellé'])
  })
  it('no change: the history stays identical', async () => {
    const { doc } = await exported()
    const before = read(doc, 'changelog')
    const previous = read(doc, 'version-precedente')
    const { msg } = await reopen(doc)
    expect(read(doc, 'changelog')).toBe(before)
    expect(read(doc, 'version-precedente')).toBe(previous)
    expect(msg.changelog).toMatch(/^# Changelog de Button\n\n## 1\.0\.0 - /)
  })
  it('component already exported but without a history: it starts with the entry of this export', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '')
    addValue(doc, 'tertiary')
    await reopen(doc)
    const h = history(doc)
    expect(h.map((x: MockData) => x.version)).toStrictEqual(['1.1.0'])
    expect(h[0].ajoute).toStrictEqual(['Propriété hierarchy, valeurs ajoutées : tertiary'])
  })
  it('component exported before the changelog, still at 1.0.0: the history starts at the first version', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '')
    const { msg } = await reopen(doc)
    const h = history(doc)
    expect(h.map((x: MockData) => x.version)).toStrictEqual(['1.0.0'])
    expect([h[0].ajoute, h[0].modifie, h[0].retire]).toStrictEqual([[FIRST], [], []])
    expect(msg.changelog).toMatch(/^# Changelog de Button\n\n## 1\.0\.0 - [\d\/]+\n\n### Ajouté\n- Première version du composant\n$/)
    // same thing when the designer keeps 1.0.0 after a change
    variantSet(doc).setSharedPluginData(NS, 'changelog', '')
    addValue(doc, 'tertiary')
    await reopen(doc, { keep: true })
    expect(history(doc).map((x: MockData) => [x.version, x.ajoute])).toStrictEqual([['1.0.0', [FIRST]]])
  })
  it('an unreadable history is not overwritten by an export, and the message shows', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '{pas du json')
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    expect(p.lastMessage().type).toBe('erreur')
    expect(p.lastMessage().message).toBe('Le changelog enregistré est illisible dans le fichier Figma. Le plugin ne le remplacera pas.')
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(read(doc, 'changelog')).toBe('{pas du json')
    expect(JSON.parse(read(doc, 'export')).meta.version, 'la base est quand même enregistrée').toBe('1.1.0')
  })
  it('a changelog that is not an array is unreadable too', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '{"version":"1.0.0"}')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    expect(p.lastMessage().message).toMatch(/^Le changelog enregistré est illisible/)
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(read(doc, 'changelog')).toBe('{"version":"1.0.0"}')
  })
  it('an unreadable base with a stored history: the history stays intact and the message shows', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    await reopen(doc)
    const before = read(doc, 'changelog')
    expect(history(doc).length).toBe(2)
    variantSet(doc).setSharedPluginData(NS, 'export', '{pas du json')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    expect(p.lastMessage().message).toBe('La dernière version enregistrée est illisible dans le fichier Figma. Le plugin repart de la version 1.0.0, sans toucher au changelog enregistré.')
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(read(doc, 'changelog'), 'historique intact').toBe(before)
    expect(JSON.parse(read(doc, 'export')).meta.version, 'la base est réécrite').toBe('1.0.0')
  })
  it('Copy then Download: the same history, without duplicates', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(history(doc).map((x: MockData) => x.version)).toStrictEqual(['1.1.0', '1.0.0'])
  })
  it('the version choice message carries the changelog of the chosen version', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    expect(p.lastMessage().changelog).toMatch(/## 1\.1\.0 - /)
    await p.send({ type: 'choisir-version', id: 'S:100', keep: true })
    const m = p.lastMessage()
    expect(m.type).toBe('version')
    expect(m.changelog).not.toMatch(/## 1\.1\.0 - /)
    expect(m.changelog).toMatch(/^# Changelog de Button\n\n## 1\.0\.0 - /)
  })
  it('history write refused: the error shows, the base is still stored', async () => {
    const doc = buttonDocument()
    const node = variantSet(doc)
    const write = node.setSharedPluginData
    node.setSharedPluginData = (space: string, key: string, value: string) => { if (key === 'changelog') throw new Error('Data too large'); write(space, key, value) }
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    const m = p.lastMessage()
    expect(m.type).toBe('erreur')
    expect(m.message).toMatch(/^L'historique du changelog n'a pas pu être enregistré dans le fichier Figma \(\d+ Ko\) : Data too large\./)
    expect(JSON.parse(read(doc, 'export')).meta.version).toBe('1.0.0')
  })
  it('previous version write refused: the error shows', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const node = variantSet(doc)
    const write = node.setSharedPluginData
    node.setSharedPluginData = (space: string, key: string, value: string) => { if (key === 'version-precedente') throw new Error('Data too large'); write(space, key, value) }
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(p.lastMessage().message).toMatch(/^Le JSON de la version précédente n'a pas pu être enregistré dans le fichier Figma/)
  })

  const CONCURRENT_MESSAGE = 'Un autre export de ce composant a eu lieu depuis cette génération. Rien n\'a été enregistré : générer de nouveau le JSON, puis l\'exporter.'
  it('concurrent exports: A generates, B exports a version, A exports: B stays intact and A sees the error', async () => {
    const { doc } = await exported()
    const a = (await openPlugin(doc)).p
    await a.send({ type: 'generer' })
    // B adds a value and exports 1.1.0 while A holds its generation
    addValue(doc, 'tertiary')
    await reopen(doc)
    const baseB = read(doc, 'export')
    const historyB = read(doc, 'changelog')
    const previousB = read(doc, 'version-precedente')
    expect(JSON.parse(baseB).meta.version).toBe('1.1.0')
    await a.send({ type: 'memoriser', id: 'S:100' })
    expect(a.lastMessage().type).toBe('erreur')
    expect(a.lastMessage().message).toBe(CONCURRENT_MESSAGE)
    expect(read(doc, 'export'), 'la base de B est intacte').toBe(baseB)
    expect(read(doc, 'changelog'), 'l\'historique de B est intact').toBe(historyB)
    expect(read(doc, 'version-precedente'), 'la version précédente de B est intacte').toBe(previousB)
  })
  it('copy then download the same generation: accepted, without an error', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(p.messages.filter((m: MockData) => m.type === 'erreur').length).toBe(0)
    expect(JSON.parse(read(doc, 'export')).meta.version).toBe('1.1.0')
  })
  it('answer « Non, garder » after a first export of the same generation: accepted, without an error', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(JSON.parse(read(doc, 'export')).meta.version).toBe('1.1.0')
    await p.send({ type: 'choisir-version', id: 'S:100', keep: true })
    await p.send({ type: 'memoriser', id: 'S:100' })
    expect(p.messages.filter((m: MockData) => m.type === 'erreur').length).toBe(0)
    expect(JSON.parse(read(doc, 'export')).meta.version, 'la version gardée remplace celle du premier export').toBe('1.0.0')
  })
  it('an export refused because another took place does not block the next generation', async () => {
    const { doc } = await exported()
    const a = (await openPlugin(doc)).p
    await a.send({ type: 'generer' })
    addValue(doc, 'tertiary')
    await reopen(doc)
    await a.send({ type: 'memoriser', id: 'S:100' })
    await a.send({ type: 'generer' })
    await a.send({ type: 'memoriser', id: 'S:100' })
    expect(a.messages.filter((m: MockData) => m.type === 'erreur').length, 'seule la première tentative est refusée').toBe(1)
  })
})

// ------------------------------------------------------------ the texts
describe('The texts', () => {
  it('no em dash, en dash or middle dot in the plugin files', () => {
    const forbidden = new RegExp('[' + String.fromCharCode(0x2013, 0x2014, 0xB7) + ']')
    const extensions = new Set(['.js', '.mjs', '.ts', '.css', '.html', '.json', '.md'])
    const files: string[] = []
    const browse = (folder: MockData) => {
      for (const e of fs.readdirSync(folder, { withFileTypes: true })) {
        const filePath = path.join(folder, e.name)
        if (e.isDirectory()) { if (e.name !== 'node_modules' && e.name !== 'dist') browse(filePath) }
        else if (extensions.has(path.extname(e.name)) || e.name === 'LICENSE') files.push(filePath)
      }
    }
    browse(PLUGIN)
    expect(files.some((f) => f.endsWith('verifier-fiche.mjs')), 'les scripts ne sont pas parcourus').toBeTruthy()
    for (const f of files) expect(!forbidden.test(fs.readFileSync(f, 'utf8')), 'tiret long ou point médian dans ' + path.relative(PLUGIN, f)).toBeTruthy()
  })
})
