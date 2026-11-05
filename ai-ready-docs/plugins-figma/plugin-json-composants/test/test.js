// Runs code.js on a fake Figma (figma-simule.js) and checks what comes out.
// Each test prepares its own state. Only read-only preparations are shared
// (the exported button, the frozen sheets, the generated scripts) and no test modifies them.
// A failure does not stop the following tests: all the failures are listed.
// No dependency: node test/test.js
// To see the JSON of the button: node test/test.js --json

const { test, describe } = require('node:test')
const assert = require('node:assert/strict')
const crypto = require('crypto')
const fs = require('fs')
const os = require('os')
const path = require('path')
const { execFileSync, spawnSync } = require('child_process')
const { fakeClock, layer, connect, page, solid, alias, fakeNetwork, tokensFile, createFakePlugin, runBridge } = require('./figma-simule.js')
// The nomenclature and the outline live in the ai-ready-docs folder, two levels above the plugin folder.
const DOCS = path.join(__dirname, '..', '..', '..')

const PLUGIN = path.join(__dirname, '..')
const SCRIPTS = path.join(PLUGIN, 'scripts')

// A shared preparation: computed at the first call, never modified afterwards.
const memo = (fn) => {
  let p
  return () => p || (p = fn())
}

// Temporary folders, deleted at the end of the process.
const folders = []
const tempFolder = (prefix) => {
  const d = fs.mkdtempSync(path.join(os.tmpdir(), prefix + '-'))
  folders.push(d)
  return d
}
process.on('exit', () => { for (const d of folders) fs.rmSync(d, { recursive: true, force: true }) })

// read back as JSON: the objects created in the vm context do not have the prototypes of the test
const plain = (x) => JSON.parse(JSON.stringify(x))
const key = (o) => JSON.stringify(o)

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

const buttonChildren = (hover, name) => {
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

const buttonVariant = (name, x, y, hover) => layer('COMPONENT', name, {
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

const buttonDocument = () => {
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

const exportSheet = async (doc) => {
  const plugin = createFakePlugin(doc)
  const rawSheet = await plugin.__test.extract(doc.selection[0])
  const text = plugin.__test.serialize(rawSheet)
  // read back from the text: the objects created in the vm context do not have the prototypes of the test
  return { plugin, sheet: JSON.parse(text), text }
}

// ------------------------------------------------------------ a component that deviates
const deviationsDocument = () => {
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

const rules = (sheet) => sheet.issues.map((i) => i.rule)
const issuesFor = (sheet, rule, where) => sheet.issues.filter((i) => i.rule === rule && (where === undefined || i.where === where))

// ------------------------------------------------------------ shared preparations, read only
const button = memo(() => exportSheet(buttonDocument()))
const deviations = memo(() => exportSheet(deviationsDocument()))
const buttonDetail = memo(async () => (await button()).plugin.__test.extractDetail(buttonDocument().selection[0]))
const deviationsDetail = memo(async () => (await button()).plugin.__test.extractDetail(deviationsDocument().selection[0]))
const readJson = (name) => JSON.parse(fs.readFileSync(path.join(__dirname, name), 'utf8'))
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
  const values = {}
  for (const a of axes) values[a] = real.api.props[a].enum
  const withoutWhen = (st) => { const o = JSON.parse(key(st)); delete o.when; return o }
  const baseVariant = { cfg: previous.default.when, styles: withoutWhen(previous.default) }
  const variants = [baseVariant].concat(previous.overrides.map((o) => ({ cfg: o.when, styles: effectiveStyles({ default: previous.default, overrides: [o] }, o.when) })))
  const grouped = groupOverrides(axes, values, variants, baseVariant)
  return { previous, baseVariant, variants, grouped }
})

// The JSON of the extraction, with the two versions that the plugin writes in it. The keys already exist
// (as null): their order does not change.
const withVersions = (sheet, version, tokensVersion) => {
  const f = JSON.parse(JSON.stringify(sheet))
  f.meta.version = version
  f.meta.tokensVersion = tokensVersion
  return JSON.stringify(f, null, 2) + '\n'
}

// The plugin opened on a document: ready, with the state that the test gives it.
const openPlugin = async (doc = buttonDocument()) => {
  const p = createFakePlugin(doc)
  await p.send({ type: 'ui-pret' })
  return { doc, p }
}
const generate = async () => {
  const { doc, p } = await openPlugin()
  await p.send({ type: 'generer' })
  return { doc, p, msg: p.lastMessage() }
}

// Generated scripts: the bridge for the set S:100, the rebuild of Button.
const BUTTON_03 = path.join(__dirname, 'button-format-0.3.json')
const bridgeCode = memo(() => {
  const output = path.join(tempFolder('bridge'), 'extraire.bridge.js')
  execFileSync('node', [path.join(SCRIPTS, 'construire-bridge.mjs'), '--id', 'S:100', '--sortie', output], { stdio: 'pipe' })
  return fs.readFileSync(output, 'utf8')
})
const buildReturn = (options) => {
  const output = path.join(tempFolder('retour'), 'reconstruire.bridge.js')
  execFileSync('node', [path.join(SCRIPTS, 'construire-retour.mjs'), '--json', BUTTON_03, ...options, '--sortie', output], { stdio: 'pipe' })
  return fs.readFileSync(output, 'utf8')
}
const returnScript = memo(() => buildReturn([]))

if (process.argv.includes('--json')) button().then((b) => console.log(b.text))

// ------------------------------------------------------------ the fake button
describe('The fake button', () => {
  test('first level: formatVersion, meta, api, variants, structure, styles, tokens, textStyles, components, modeCollections, issues, then _tool', async () => {
    const { sheet } = await button()
    assert.deepEqual(Object.keys(sheet), ['formatVersion', 'meta', 'api', 'variants', 'structure', 'styles', 'tokens', 'textStyles', 'components', 'modeCollections', 'issues', '_tool'])
    assert.equal(sheet.formatVersion, '0.4')
    assert.match(sheet._tool, /^canopee-fiches-composants \d/)
  })
  test('meta: name, version, tokens version, type, Figma key, library, documentation links', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.meta, { name: 'Button', version: null, tokensVersion: null, type: 'atom', figmaKey: 'KEY-BUTTON', library: 'B2C', documentationLinks: ['https://exemple.test/button'] })
  })
  test('meta: the library is B2C, whatever the name of the Figma file or of its branch', async () => {
    const { sheet } = await button()
    assert.equal(sheet.meta.library, 'B2C')
    assert.ok(!JSON.stringify(sheet).includes('DS IA ready'))
  })
  test('meta: version and tokensVersion follow the name, in this order', async () => {
    const { sheet } = await button()
    assert.deepEqual(Object.keys(sheet.meta), ['name', 'version', 'tokensVersion', 'type', 'figmaKey', 'library', 'documentationLinks'])
  })
  test('the fields handled by the Markdown are absent', async () => {
    const { sheet, text } = await button()
    for (const c of ['role', 'description', 'platforms', 'states', 'interaction', 'rules', 'examples', 'invalidCombinations', '_doc_source', '_todo_ai', '_lint', '_collisions', 'runtime'])
      assert.ok(!text.includes('"' + c + '"'), 'présent : ' + c)
    assert.ok(!text.includes('Ne doit pas se retrouver'))
    for (const p of Object.values(sheet.api.props)) assert.equal(p.attribute, undefined)
  })
  test('Figma names kept: camelCase, without the #id suffix, nothing in kebab-case', async () => {
    const { sheet, text } = await button()
    assert.deepEqual(Object.keys(sheet.api.props), ['state', 'hierarchy', 'showLeftIcon', '_scrollable'])
    assert.deepEqual(Object.keys(sheet.structure.slots), ['label', 'leftIcon'])
    assert.ok(!text.includes('#1:'))
    assert.ok(!text.includes('show-left-icon'))
    assert.ok(sheet.styles.default['left-icon'])
  })
  test('api: enum with default, boolean with controls, nomenclature order', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.api.props.state, { type: 'enum', enum: ['default', 'hover'], default: 'default' })
    assert.deepEqual(sheet.api.props.showLeftIcon, { type: 'boolean', default: true, controls: [{ layer: 'left-icon', attribute: 'visible' }] })
  })
  test('slots: controls read from componentPropertyReferences, named default swap', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.structure.slots.label, { as: 'children', default: { text: 'Label' }, controls: [{ layer: 'label', attribute: 'text' }] })
    assert.deepEqual(sheet.structure.slots.leftIcon, { accepts: 'Instance', default: { swap: 'account_balance' }, preferred: ['Avatar', 'account_balance'], controls: [{ layer: 'left-icon', attribute: 'component' }] })
  })
  test('text: default value in the slot', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.structure.slots.label.default, { text: 'Label' })
  })
  test('text: sizing only when it differs from hug and top', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.styles.default.label.layout, { sizingH: 'fill', textAlignVertical: 'center' })
    assert.equal(sheet.styles.default.caption.layout, undefined)
  })
  test('root: layout.clip always written, never on a sub-layer', async () => {
    const { sheet } = await button()
    assert.equal(sheet.styles.default.root.layout.clip, true)
    assert.equal(sheet.styles.overrides[0].styles.root.layout.clip, false)
    assert.equal(sheet.styles.default['left-icon'].layout.clip, undefined)
  })
  test('absolutely positioned layer: constraints in lowercase', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.styles.overrides[0].styles['focus-ring'].layout, { absolute: true, x: -2, y: -2, constraints: { horizontal: 'stretch', vertical: 'stretch' } })
  })
  test('variants: values and position, sorted in the order of the properties', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.variants, [
      { values: { state: 'default', hierarchy: 'primary' }, position: [64, 64] },
      { values: { state: 'hover', hierarchy: 'primary' }, position: [64, 184] }
    ])
  })
  test('bound value: { token } for the color, the radius and the spacing', async () => {
    const r = (await button()).sheet.styles.default.root
    assert.deepEqual(r.background, { token: 'color/blue/700' })
    assert.deepEqual(r.radius, { token: 'radius/medium' })
    assert.deepEqual(r.gap, { token: 'spacing/small' })
  })
  test('raw value: { raw } and an issue in issues, except the zero value', async () => {
    const { sheet } = await button()
    const r = sheet.styles.default.root
    assert.deepEqual(r.padding.top, { raw: 12 })
    assert.deepEqual(r.padding.right, { raw: 0 })
    assert.deepEqual(r.layout.minWidth, { raw: 144 })
    assert.equal(issuesFor(sheet, 'valeur-brute', 'styles.root.padding.top').length, 1)
    assert.equal(issuesFor(sheet, 'valeur-brute', 'styles.root.layout.minWidth').length, 1)
    assert.equal(issuesFor(sheet, 'valeur-brute', 'styles.root.padding.right').length, 0)
    assert.equal(issuesFor(sheet, 'valeur-brute', 'styles.root.stroke').length, 1)
    assert.equal(issuesFor(sheet, 'valeur-brute', 'styles.left-icon.layout.width').length, 1)
  })
  test('the same issue repeated in several variants is reported once, with its count', async () => {
    const { sheet } = await button()
    const seen = new Set()
    for (const i of sheet.issues.filter((x) => x.rule === 'valeur-brute')) {
      const c = i.where + '|' + i.message
      assert.ok(!seen.has(c), 'doublon : ' + c)
      seen.add(c)
      assert.ok(i.occurrences >= 1)
    }
  })
  test('text bound to a style: textStyle, without the detailed typography', async () => {
    const { sheet } = await button()
    assert.equal(sheet.styles.default.label.textStyle, 'label/1/semibold')
    assert.equal(sheet.styles.default.label.typography, undefined)
    assert.deepEqual(sheet.styles.default.label.textColor, { token: 'color/white' })
  })
  test('text without a style: detailed typography kept and issue reported', async () => {
    const { sheet } = await button()
    assert.equal(sheet.styles.default.caption.typography.fontSize, 14)
    assert.equal(sheet.styles.default.caption.textStyle, undefined)
    assert.equal(issuesFor(sheet, 'style-de-texte', 'styles.caption').length, 1)
    assert.equal(issuesFor(sheet, 'style-de-texte', 'styles.label').length, 0)
  })
  test('nested icon: color of the first vector under <layer>/vector', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.styles.default['left-icon/vector'], { background: { token: 'color/white' } })
  })
  test('hover override: only what changes', async () => {
    const ov = (await button()).sheet.styles.overrides
    assert.equal(ov.length, 1)
    assert.deepEqual(ov[0].when, { state: 'hover' })
    assert.deepEqual(ov[0].styles.root.background, { token: 'color/blue/800' })
    assert.deepEqual(ov[0].styles.root.stroke, { raw: '#CCCCCC' })
    assert.equal(ov[0].styles.root.padding, undefined)
    assert.deepEqual(ov[0].styles['focus-ring'].stroke, { token: 'color/blue/700' })
    assert.deepEqual(ov[0].styles.modes, { Semantic: 'client' })
  })
  test('trees: base with an empty when, then the structure specific to hover, and no more precedence', async () => {
    const { sheet } = await button()
    assert.deepEqual(Object.keys(sheet.styles), ['default', 'overrides'])
    assert.equal(sheet.structure.trees.length, 2)
    assert.deepEqual(sheet.structure.trees[0].when, {})
    assert.deepEqual(sheet.structure.trees[1].when, { state: 'hover' })
    assert.deepEqual(sheet.structure.trees[0].tree.map((t) => t.name), ['left-icon', 'label', 'caption', 'badge'])
    assert.deepEqual(sheet.structure.trees[0].tree[0], { name: 'left-icon', type: 'instance', component: 'account_balance' })
    assert.deepEqual(sheet.structure.trees[1].tree.slice(-1)[0], { name: 'focus-ring', type: 'frame' })
    assert.deepEqual(sheet.structure.uses, ['Badge', 'account_balance'])
    for (const name of sheet.structure.uses) assert.ok(sheet.components[name], 'absent de components : ' + name)
  })
  test('tokens index: each variable once, sorted, with library, collection and key', async () => {
    const { sheet } = await button()
    assert.deepEqual(Object.keys(sheet.tokens), ['color/blue/700', 'color/blue/800', 'color/white', 'radius/medium', 'spacing/small'])
    assert.deepEqual(sheet.tokens['color/white'], { library: 'Fondations Canopée', collection: 'Primitive', key: 'K-white' })
    assert.deepEqual(sheet.tokens['color/blue/700'], { library: 'B2C', collection: 'Primitive', key: 'K-b700' })
  })
  test('textStyles index: name, library (null if remote), key', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.textStyles, { 'label/1/semibold': { library: null, key: 'KEY-STYLE' } })
  })
  test('components index: instances, default swap and preferred values, sorted by name', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.components, {
      Avatar: { library: null, key: 'KEY-AVATAR' },
      Badge: { library: 'B2C', key: 'KEY-BADGE' },
      account_balance: { library: null, key: 'KEY-ICON' }
    })
    assert.deepEqual(Object.keys(sheet.components), ['Avatar', 'Badge', 'account_balance'])
    for (const name of sheet.structure.slots.leftIcon.preferred) assert.ok(sheet.components[name])
  })
  test('preferred value not found: reported, not added', async () => {
    const { sheet, text } = await button()
    assert.equal(issuesFor(sheet, 'valeur-preferee', 'structure.slots.leftIcon').length, 1)
    assert.ok(!text.includes('KEY-ABSENT",'))
  })
  test('modeCollections index: collection of the set mode, with its key', async () => {
    const { sheet } = await button()
    assert.deepEqual(sheet.modeCollections, { Semantic: { library: 'B2C', key: 'CK3' } })
  })
  test('duplicate variable: reported in issues, the smallest key kept', async () => {
    const { sheet } = await button()
    assert.equal(issuesFor(sheet, 'token-doublon', 'tokens.color/blue/700').length, 1)
  })
  test('a compliant component gets no nomenclature issue', async () => {
    const { sheet } = await button()
    const e = sheet.issues.filter((i) => /^(prop|calque|composant)-/.test(i.rule) && i.rule !== 'prop-hors-nomenclature')
    assert.deepEqual(e, [])
    assert.ok(!sheet.issues.some((i) => i.level === 'error'))
  })
  test('property with an underscore: info, not an error', async () => {
    const i = issuesFor((await button()).sheet, 'prop-hors-nomenclature', 'api.props._scrollable')
    assert.equal(i.length, 1)
    assert.equal(i[0].level, 'info')
  })
  test('issues: a single list, sorted, without duplicates', async () => {
    const { sheet } = await button()
    const sig = sheet.issues.map((i) => i.level + '|' + i.rule + '|' + i.where + '|' + i.message)
    assert.equal(new Set(sig).size, sig.length)
    const rank = { error: 0, warning: 1, info: 2 }
    for (let k = 1; k < sheet.issues.length; k++) assert.ok(rank[sheet.issues[k - 1].level] <= rank[sheet.issues[k].level])
  })
  test('determinism: same file, same text', async () => {
    const { plugin, text } = await button()
    const second = await exportSheet(buttonDocument())
    const same = await plugin.__test.extract(buttonDocument().selection[0])
    assert.equal(second.text, text)
    assert.equal(plugin.__test.serialize(same), text)
    assert.ok(text.endsWith('}\n'))
    assert.ok(!/\d{4}-\d{2}-\d{2}/.test(text), 'une date dans le fichier')
  })
  test('guard: if the output of the button changes, VERSION goes up and test/sortie-reference.json follows', async () => {
    const { plugin, sheet } = await button()
    const withoutTool = JSON.stringify(Object.fromEntries(Object.entries(sheet).filter(([k]) => k !== '_tool')))
    const fingerprint = crypto.createHash('sha256').update(withoutTool).digest('hex')
    const ref = readJson('sortie-reference.json')
    const version = plugin.__test.VERSION
    if (fingerprint !== ref.empreinte && version === ref.version) assert.fail('La sortie du bouton simulé a changé sans que VERSION change. Monter VERSION dans code.js, puis mettre à jour test/sortie-reference.json avec la nouvelle version et l\'empreinte ' + fingerprint + '.')
    assert.ok(version === ref.version && fingerprint === ref.empreinte, 'test/sortie-reference.json n\'est pas à jour. Y écrire { "version": "' + version + '", "empreinte": "' + fingerprint + '" }.')
  })
  test('occurrences: the number of variants where the issue appears, absent if none', async () => {
    const { plugin, sheet } = await button()
    const occ = (where) => issuesFor(sheet, 'valeur-brute', where)[0].occurrences
    assert.equal(occ('styles.root.padding.top'), 2)
    assert.equal(occ('styles.left-icon.layout.width'), 2)
    assert.equal(occ('styles.root.stroke'), 1)
    const { variantsPerIssue, issueSignature } = plugin.__test
    const d = { level: 'warning', rule: 'valeur-brute', where: 'styles.a.gap', message: 'm' }
    assert.equal(variantsPerIssue([{ a: { gap: { raw: 4 } } }]).get(issueSignature(d)), undefined)
  })
})

// ------------------------------------------------------------ the reads that fail
describe('The reads that fail', () => {
  const trap = (node, field) => Object.defineProperty(node, field, { get() { throw new Error('lecture refusée') }, configurable: true })
  const casing = memo(async () => {
    const doc = buttonDocument()
    for (const v of doc.selection[0].children) trap(v.children.find((c) => c.name === 'caption'), 'fills')
    const p = createFakePlugin(doc)
    const readVariable = p.figma.variables.getVariableByIdAsync
    p.figma.variables.getVariableByIdAsync = async (id) => { if (id === 'v-r') throw new Error('variable illisible'); return readVariable(id) }
    return JSON.parse(p.__test.serialize(await p.__test.extract(doc.selection[0])))
  })

  test('a layer with a property that throws an exception: the export succeeds, with a lecture-impossible issue at its location', async () => {
    const c = await casing()
    const e = issuesFor(c, 'lecture-impossible', 'styles.caption')
    assert.equal(e.length, 1)
    assert.equal(e[0].level, 'error')
    assert.equal(e[0].message, 'Lecture impossible : lecture refusée. Cette partie du JSON est incomplète.')
    assert.equal(c.styles.default.caption, undefined)
    assert.deepEqual(c.styles.default.label.textColor, { token: 'color/white' })
    assert.deepEqual(c.variants.length, 2)
  })
  test('an unreadable variable: value written raw, error at the tokens location, rest of the JSON produced', async () => {
    const c = await casing()
    const e = issuesFor(c, 'lecture-impossible', 'tokens')
    assert.equal(e.length, 1)
    assert.match(e[0].message, /^Lecture impossible : variable illisible\. La variable v-r n'a pas pu être lue.* Cette partie du JSON est incomplète\.$/)
    assert.deepEqual(c.styles.default.root.radius, { raw: 8 })
    assert.deepEqual(c.styles.default.root.background, { token: 'color/blue/700' })
    assert.ok(!('radius/medium' in c.tokens))
  })
  test('without an exception, no lecture-impossible issue', async () => {
    assert.equal(issuesFor((await button()).sheet, 'lecture-impossible').length, 0)
  })
})

// ------------------------------------------------------------ the grouping of the overrides
describe('The grouping of the overrides', () => {
  test('real Button: the re-expansion of the 50 variants equals the original styles', async (t) => {
    const { plugin } = await button()
    const { effectiveStyles, canonical } = plugin.__test
    const { previous, baseVariant, variants, grouped } = await realGrouping()
    const real = real02()
    const before = JSON.stringify(real, null, 2).length
    const after = JSON.stringify({ ...real, styles: { default: previous.default, overrides: grouped } }, null, 2).length
    t.diagnostic('surcharges : ' + previous.overrides.length + ' avant, ' + grouped.length + ' après ; JSON : ' + before + ' octets avant, ' + after + ' après')
    assert.equal(variants.length, 50)
    const norm = (st) => canonical(effectiveStyles({ default: st }, {}))
    for (const v of variants) assert.equal(canonical(effectiveStyles({ default: baseVariant.styles, overrides: grouped }, v.cfg)), norm(v.styles), key(v.cfg))
  })
  test('real Button: clearly fewer overrides, and the client theme carries its radius', async () => {
    const { grouped } = await realGrouping()
    assert.ok(grouped.length < 30, 'surcharges : ' + grouped.length)
    const client = grouped.find((o) => key(o.when) === '{"_theme":"client"}')
    assert.ok(client)
    assert.deepEqual(JSON.parse(key(client.styles.root.radius)), { token: 'border/radius/8' })
  })
  test('two overrides that target the same variant do not contradict each other', async () => {
    const { plugin } = await button()
    const { matches } = plugin.__test
    const { variants, grouped } = await realGrouping()
    for (const v of variants) {
      const seen = {}
      for (const o of grouped) {
        if (!matches(o.when, v.cfg)) continue
        for (const c of Object.keys(o.styles)) for (const f of Object.keys(o.styles[c])) {
          const k = c + '|' + f
          const x = key(o.styles[c][f])
          assert.ok(!(k in seen) || seen[k] === x, 'contradiction sur ' + k + ' pour ' + key(v.cfg))
          seen[k] = x
        }
      }
    }
  })
  test('grouping: a field that disappeared is written null, and the result is stable', async () => {
    const { groupOverrides } = (await button()).plugin.__test
    const d = { cfg: { a: 'x', b: 'p' }, styles: { root: { gap: { raw: 4 }, radius: { raw: 2 } } } }
    const vs = [d,
      { cfg: { a: 'y', b: 'p' }, styles: { root: { gap: { raw: 4 } } } },
      { cfg: { a: 'y', b: 'q' }, styles: { root: { gap: { raw: 4 } } } },
      { cfg: { a: 'x', b: 'q' }, styles: { root: { gap: { raw: 4 }, radius: { raw: 2 } } } }]
    const r = groupOverrides(['a', 'b'], { a: ['x', 'y'], b: ['p', 'q'] }, vs, d)
    assert.deepEqual(JSON.parse(key(r)), [{ when: { a: 'y' }, styles: { root: { radius: null } } }])
    assert.equal(key(groupOverrides(['a', 'b'], { a: ['x', 'y'], b: ['p', 'q'] }, vs, d)), key(r))
  })
  test('self-check: an inconsistent input throws an error that names the variant', async () => {
    const { groupOverrides } = (await button()).plugin.__test
    const d = { cfg: { a: 'x' }, styles: { root: { gap: { raw: 4 } } } }
    const vs = [d,
      { cfg: { a: 'y' }, styles: { root: { gap: { raw: 8 } } } },
      { cfg: { a: 'y' }, styles: { root: { gap: { raw: 12 } } } }]
    assert.throws(() => groupOverrides(['a'], { a: ['x', 'y'] }, vs, d), /incohérent.*"a":"y"/)
  })
  test('matches: a value, a list of values, or an empty when', async () => {
    const { matches } = (await button()).plugin.__test
    assert.equal(matches({ a: 'x' }, { a: 'x', b: 'p' }), true)
    assert.equal(matches({ a: 'x' }, { a: 'y' }), false)
    assert.equal(matches({ a: ['x', 'y'] }, { a: 'y' }), true)
    assert.equal(matches({ a: ['x', 'y'] }, { a: 'z' }), false)
    assert.equal(matches({ a: 'x', b: ['p'] }, { a: 'x', b: 'q' }), false)
    assert.equal(matches({}, { a: 'x' }), true)
  })
  test('effectiveStyles: the default without when, the overrides that target, null that removes, emptied layer that disappears', async () => {
    const { effectiveStyles, canonical } = (await button()).plugin.__test
    const st = {
      default: { when: { a: 'x' }, root: { gap: { raw: 4 }, radius: { raw: 2 } }, icon: { opacity: 0.5 } },
      overrides: [
        { when: { a: 'y' }, styles: { root: { radius: null }, ring: { opacity: 0.2 } } },
        { when: { a: ['y', 'z'] }, styles: { icon: { opacity: null } } },
        { when: { a: 'x' }, styles: { ring: { opacity: null } } }
      ]
    }
    assert.equal(canonical(effectiveStyles(st, { a: 'x' })), canonical({ root: { gap: { raw: 4 }, radius: { raw: 2 } }, icon: { opacity: 0.5 } }))
    assert.equal(canonical(effectiveStyles(st, { a: 'y' })), canonical({ root: { gap: { raw: 4 } }, ring: { opacity: 0.2 } }))
    assert.equal(canonical(effectiveStyles(st, { a: 'z' })), canonical({ root: { gap: { raw: 4 }, radius: { raw: 2 } } }))
    assert.equal(st.default.root.radius.raw, 2, 'le défaut n\'est pas modifié')
  })
  test('canonical: sorted keys, absent distinct from null', async () => {
    const { canonical } = (await button()).plugin.__test
    assert.equal(canonical({ b: 1, a: [2, { d: 3, c: null }] }), canonical({ a: [2, { c: null, d: 3 }], b: 1 }))
    assert.notEqual(canonical(undefined), canonical(null))
  })
  test('occurrences of real Button: the raw minimum width counts 50 variants, not 1 override', async () => {
    const { plugin } = await button()
    const { effectiveStyles, variantsPerIssue, issueSignature } = plugin.__test
    const fb = real03()
    const byVariant = fb.variants.map((v) => plain(effectiveStyles(fb.styles, v.values)))
    const n = variantsPerIssue(byVariant)
    const i = fb.issues.find((x) => x.where === 'styles.root.layout.minWidth')
    assert.equal(n.get(issueSignature(i)), 50)
  })
  test('applicableTree: configs takes precedence over when, and only applies to its variants', async () => {
    const { applicableTree } = (await button()).plugin.__test
    const trees = [
      { when: {}, tree: 'A' },
      { when: { a: 'y' }, tree: 'C' },
      { when: {}, configs: [{ a: 'x', b: 'p' }, { a: 'y', b: 'q' }], tree: 'B' }
    ]
    const tree = (cfg) => applicableTree(trees, cfg).tree
    assert.equal(tree({ a: 'x', b: 'p' }), 'B')
    assert.equal(tree({ a: 'y', b: 'q' }), 'B')
    assert.equal(tree({ b: 'p', a: 'x' }), 'B')
    assert.equal(tree({ a: 'x', b: 'q' }), 'A')
    assert.equal(tree({ a: 'y', b: 'p' }), 'C')
  })
  test('working copies: a single prefix removed, for the component name and the file name', async () => {
    const { withoutCopyPrefix, fileName, COPY_PREFIXES } = (await button()).plugin.__test
    assert.deepEqual(plain(COPY_PREFIXES), ['Test/', 'Retour/', 'IA/'])
    assert.equal(withoutCopyPrefix('Test/Button'), 'Button')
    assert.equal(withoutCopyPrefix('Retour/Tag'), 'Tag')
    assert.equal(withoutCopyPrefix('IA/Tag'), 'Tag')
    assert.equal(withoutCopyPrefix('Retour/IA/Tag'), 'IA/Tag')
    assert.equal(withoutCopyPrefix('native/SelectList'), 'native/SelectList')
    assert.equal(fileName('Retour/Button'), 'button.json')
    assert.equal(fileName('IA/InputText'), 'inputtext.json')
  })
  const propertiesPage = () => fs.readFileSync(path.join(DOCS, 'regles', '03-proprietes.md'), 'utf8')
  // The plugin opened with a given Properties page, read on the fake network.
  const openWithRules = async (options) => {
    const doc = buttonDocument()
    doc.network = fakeNetwork({ ...BUTTON_NETWORK, ...options })
    const p = createFakePlugin(doc)
    await p.send({ type: 'ui-pret' })
    return { doc, p, banners: p.messages.filter((m) => m.type === 'regles').map((m) => m.warning) }
  }
  const replaceText = (text, before, after) => {
    assert.ok(text.includes(before), 'texte absent de la page : ' + before)
    return text.replace(before, after)
  }
  const embeddedCopy = async () => {
    const t = (await button()).plugin.__test
    return plain({ order: t.ORDER, fixed: t.FIXED_VALUES, trueFalse: t.TRUE_FALSE_VARIANTS, synonyms: t.SYNONYMS })
  }
  const activeRules = (p) => plain({ order: p.__test.ORDER, fixed: p.__test.FIXED_VALUES, trueFalse: p.__test.TRUE_FALSE_VARIANTS, synonyms: p.__test.SYNONYMS })
  test('nomenclature: the constants of code.js follow the tables of 03-proprietes.md', async () => {
    const { ORDER, FIXED_VALUES, TRUE_FALSE_VARIANTS, SYNONYMS, PRIORITY, readPropertyRules } = (await button()).plugin.__test
    const rules = plain(readPropertyRules(propertiesPage()))
    assert.deepEqual(plain(ORDER), rules.order)
    assert.deepEqual(plain(FIXED_VALUES), rules.fixed)
    assert.deepEqual(plain(TRUE_FALSE_VARIANTS), rules.trueFalse)
    assert.deepEqual(plain(SYNONYMS), rules.synonyms)
    assert.deepEqual([...plain(PRIORITY)].sort(), [...rules.order[0]].sort())
  })
  test('rules: the plugin reads the page on the ai-ready-docs branch, once, without a banner if all is well', async () => {
    const { doc, p, banners } = await openWithRules({ rules: propertiesPage() })
    await p.send({ type: 'ui-pret' })
    assert.deepEqual(banners, [])
    assert.equal(doc.network.calls.filter((u) => u === 'https://raw.githubusercontent.com/AxaFrance/design-system/ai-ready-docs/ai-ready-docs/regles/03-proprietes.md').length, 1)
    assert.deepEqual(activeRules(p), await embeddedCopy())
  })
  test('rules: the first check follows an imposed value changed in the doc', async () => {
    const page = replaceText(propertiesPage(), '| hierarchy | Variante | primary, secondary, tertiary |', '| hierarchy | Variante | primary, tertiary |')
    const { p, banners } = await openWithRules({ rules: page })
    await p.send({ type: 'controler' })
    assert.deepEqual(banners, [])
    assert.ok(p.lastMessage().issues.some((i) => i.rule === 'prop-valeurs' && i.where === 'api.props.hierarchy' && i.message.includes('secondary')))
  })
  test('rules: the check follows a name to avoid added in the doc', async () => {
    const page = replaceText(propertiesPage(), '| theme | _theme |', '| theme | _theme |\n| hierarchy | importance |')
    const { p } = await openWithRules({ rules: page })
    await p.send({ type: 'controler' })
    assert.ok(p.lastMessage().issues.some((i) => i.rule === 'prop-synonyme' && i.where === 'api.props.hierarchy' && i.message.includes('importance')))
  })
  test('rules: a new property of the doc takes its place and its values', async () => {
    const page = replaceText(propertiesPage(), '| show* | Booléen |', '| density | Variante | compact, comfortable | La densité. | Non |\n| show* | Booléen |')
    const { p, banners } = await openWithRules({ rules: page })
    assert.deepEqual(banners, [])
    assert.equal(plain(p.__test.ORDER)[0].at(-1), 'density')
    assert.deepEqual(plain(p.__test.FIXED_VALUES).density, ['compact', 'comfortable'])
  })
  test('rules: a sentence added in a list suspends the check and says so', async () => {
    const page = replaceText(propertiesPage(), '| state | Variante | default, hover, focus, press |', '| state | Variante | default, hover, focus, press, et quelques autres |')
    const { p, banners } = await openWithRules({ rules: page })
    assert.deepEqual(banners, ['La doc ne donne plus de liste de valeurs pour state. Le plugin ne contrôle plus ces valeurs.'])
    assert.equal(plain(p.__test.FIXED_VALUES).state, undefined)
  })
  for (const [scenario, options] of [
    ['GitHub injoignable', { outage: true }],
    ['une page absente', { status: 404 }],
    ['une page sans le tableau des noms à éviter', { rules: '## Variantes et booléens\n\n| a | b | c |\n|---|---|---|\n| state | Variante | default |\n\n## Contenu\n' }],
    ['une page au type inconnu', { rules: '## Variantes et booléens\n\n| a | b | c |\n|---|---|---|\n| state | Propriété | default |\n' }],
    ['une page vide', { rules: '' }]
  ]) {
    test('règles : ' + scenario + ', le plugin garde sa copie et affiche le bandeau', async () => {
      const { p, banners } = await openWithRules(options)
      assert.deepEqual(banners, [p.__test.UNREADABLE_RULES_MESSAGE])
      assert.deepEqual(activeRules(p), await embeddedCopy())
    })
  }
  test('rules: a GitHub that does not answer does not block for more than 3 seconds', async () => {
    const clock = fakeClock()
    const doc = buttonDocument()
    doc.network = fakeNetwork({ ...BUTTON_NETWORK, mute: true })
    doc.clock = clock
    const p = createFakePlugin(doc)
    const ready = p.send({ type: 'ui-pret' })
    await clock.advance(3000)
    await ready
    assert.deepEqual(p.messages.filter((m) => m.type === 'regles').map((m) => m.warning), [p.__test.UNREADABLE_RULES_MESSAGE])
    assert.ok(p.messages.some((m) => m.type === 'selection'))
  })
  test('tokens: a published file with the new typography prefix is recognized', async () => {
    const { publishedPaths } = (await button()).plugin.__test
    assert.deepEqual([...publishedPaths(plain(tokensFile(['typography.label.1.semibold'])))], ['typography.label.1.semibold'])
  })
  test('raw sizes: a fixed width is reported, not that of a stretched absolute layer', async () => {
    const { stylesIssues } = (await button()).plugin.__test
    const styles = { default: {
      icon: { layout: { sizingH: 'fixed', width: { raw: 24 }, sizingV: 'fixed', height: { raw: 24 } } },
      ring: { layout: { absolute: true, x: -2, y: -2, constraints: { horizontal: 'stretch', vertical: 'stretch' }, sizingH: 'fixed', width: { raw: 40 }, sizingV: 'fixed', height: { raw: 40 } } },
      barre: { layout: { absolute: true, x: 0, y: 0, constraints: { horizontal: 'stretch', vertical: 'top' }, width: { raw: 40 }, height: { raw: 8 } } }
    } }
    const where = Array.from(stylesIssues(styles).map((i) => i.where)).sort()
    assert.deepEqual(where, ['styles.barre.layout.height', 'styles.icon.layout.height', 'styles.icon.layout.width'])
  })
  test('order of the properties: at equal rank, the position of the driven layer comes before the creation order', async () => {
    const v = layer('COMPONENT', 'Toggle', { id: 'T:2' }, [
      layer('FRAME', 'left-icon', { componentPropertyReferences: { visible: 'showLeftIcon#2:1' } }),
      layer('FRAME', 'right-icon', { componentPropertyReferences: { visible: 'showRightIcon#2:0' } })
    ])
    v.componentPropertyDefinitions = {
      'showRightIcon#2:0': { type: 'BOOLEAN', defaultValue: false },
      'showLeftIcon#2:1': { type: 'BOOLEAN', defaultValue: false }
    }
    connect(v)
    assert.deepEqual(plain((await button()).plugin.__test.prepare(v).props.map((p) => p.name)), ['showLeftIcon', 'showRightIcon'])
  })
})

// ------------------------------------------------------------ a component that deviates
describe('A component that deviates from the nomenclature', () => {
  for (const [name, expected] of [['BadButton', 0], ['Bad Button v2', 1], ['AIBadge', 1], ['AiBadge', 0], ['_PaginationItem', 0], ['native/SelectList', 0]]) {
    test('composant : ' + name + (expected ? ' signalé' : ' conforme'), async () => {
      const d = deviationsDocument()
      d.selection[0].name = name
      const r = await exportSheet(d)
      assert.equal(issuesFor(r.sheet, 'composant-nom', 'meta.name').length, expected)
    })
  }
  test('properties: camelCase, is, show, disabled, synonyms, values, state', async () => {
    const { sheet } = await deviations()
    const where = (rule, where) => issuesFor(sheet, rule, where).length
    assert.equal(where('prop-nom', 'api.props.Size'), 1)
    assert.equal(where('prop-prefixe', 'api.props.isSelected'), 1)
    assert.equal(where('prop-booleen', 'api.props.isSelected'), 0)
    assert.equal(where('prop-disabled', 'api.props.disabled'), 1)
    assert.equal(where('prop-booleen', 'api.props.hasIcon'), 1)
    assert.equal(where('prop-booleen', 'api.props.showIcon'), 0)
    assert.equal(where('prop-synonyme', 'api.props.variant'), 1)
    assert.equal(where('prop-synonyme', 'api.props.mode'), 1)
    assert.equal(where('prop-valeur', 'api.props.Size'), 1)
    assert.equal(where('prop-valeurs', 'api.props.state'), 1)
    assert.match(issuesFor(sheet, 'prop-valeurs', 'api.props.state')[0].message, /disabled est une variante à part/)
    assert.equal(where('prop-etat', 'api.props.mode'), 1)
  })
  test('content property: the layer that fills it carries its name', async () => {
    assert.equal(issuesFor((await deviations()).sheet, 'prop-calque', 'structure.slots.text').length, 1)
  })
  test('layers: default name, prefix, text named by its content, frames, casing, instance', async () => {
    const { sheet } = await deviations()
    const where = (rule, where) => issuesFor(sheet, rule, where).length
    assert.equal(where('calque-defaut', 'calque Frame 27'), 1)
    assert.equal(where('calque-prefixe', 'calque bad-button-label'), 1)
    assert.equal(where('calque-texte', 'calque Votre devis en 2 minutes'), 1)
    assert.equal(where('calque-cadre', 'calque label-and-icon'), 1)
    assert.equal(where('calque-casse', 'calque Left Icon'), 1)
    assert.equal(where('calque-instance', 'calque account_balance'), 1)
  })
  test('no deviation is reported as an error', async () => {
    assert.ok(!(await deviations()).sheet.issues.some((i) => i.level === 'error'))
  })
})

// ------------------------------------------------------------ the plugin, through messages
describe('The plugin, through messages', () => {
  test('opening: version, and selection brought back to the variant set', async () => {
    const { p } = await openPlugin()
    const init = p.messages.find((m) => m.type === 'init')
    assert.equal(init.version, p.__test.VERSION)
    const sel = p.messages.filter((m) => m.type === 'selection').pop()
    assert.deepEqual({ name: sel.name, variants: sel.variants, properties: sel.properties }, { name: 'Button', variants: 2, properties: 6 })
    assert.equal(sel.latestVersion, null, 'jamais exporté : aucune version enregistrée')
  })
  test('after an export, the selection carries the last stored version', async () => {
    const { p, msg } = await generate()
    await p.send({ type: 'memoriser', id: msg.id })
    await p.send({ type: 'ui-pret' })
    const sel = p.messages.filter((m) => m.type === 'selection').pop()
    assert.equal(sel.latestVersion, '1.0.0')
  })
  test('check: returns the nomenclature issues, not the raw values', async () => {
    const { p } = await openPlugin()
    await p.send({ type: 'controler' })
    const c = p.lastMessage()
    assert.equal(c.type, 'controle')
    assert.ok(c.issues.every((i) => /^(prop|calque|composant|texte)-/.test(i.rule)))
  })
  test('generation: the JSON, with its version and that of the tokens, and the file name in lowercase', async () => {
    const { sheet } = await button()
    const { msg } = await generate()
    assert.equal(msg.type, 'fiche')
    assert.equal(msg.file, 'button.json')
    assert.equal(msg.changelogFile, 'button-changelog.md')
    assert.equal(msg.json, withVersions(sheet, '1.0.0', '2.1.0'))
  })
  test('file name: lowercase, without path separator', async () => {
    const { fileName, changelogName } = (await button()).plugin.__test
    assert.equal(changelogName('Retour/Button'), 'button-changelog.md')
    assert.equal(changelogName('native/SelectList'), 'native-selectlist-changelog.md')
    assert.equal(fileName('InputText'), 'inputtext.json')
    assert.equal(fileName('native/SelectList'), 'native-selectlist.json')
  })
  test('nothing selected: error message, no exception', async () => {
    const { doc, p } = await openPlugin()
    doc.selection.length = 0
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().type, 'erreur')
  })
})

// ------------------------------------------------------------ the À corriger list
describe('The À corriger list', () => {
  test('readableLocation: nomenclature, styles, layers and variables', async () => {
    const { readableLocation } = (await button()).plugin.__test
    assert.equal(readableLocation('meta.name'), 'Nom du composant')
    assert.equal(readableLocation('api.props.isSelected'), 'Propriété isSelected')
    assert.equal(readableLocation('structure.slots.label'), 'Propriété label')
    assert.equal(readableLocation('calque Frame 27'), 'Calque Frame 27')
    assert.equal(readableLocation('tokens.color/blue/700'), 'Variable color/blue/700')
    assert.equal(readableLocation('styles.root.layout.minWidth'), 'Racine, largeur minimale')
    assert.equal(readableLocation('styles.left-icon.layout.height'), 'left-icon, hauteur')
    assert.equal(readableLocation('styles.left-icon/vector.background'), 'Vecteur de left-icon, fond')
    assert.equal(readableLocation('styles.root.padding.top'), 'Racine, marges intérieures haut')
    assert.equal(readableLocation('styles.label.textColor'), 'label, couleur du texte')
    assert.equal(readableLocation('styles.caption.typography'), 'caption, typo')
    assert.equal(readableLocation('autre chose'), 'autre chose')
  })
  test('location: the raw width of the icon carries the ids of the icons, in each variant', async () => {
    const detail = await buttonDetail()
    const locationsOf = (where) => plain(detail.locations[detail.sheet.issues.findIndex((i) => i.where === where)])
    const l = locationsOf('styles.left-icon.layout.width')
    assert.deepEqual(plain(l.ids).sort(), ['LI:state=default, hierarchy=primary', 'LI:state=hover, hierarchy=primary'])
    assert.equal(l.variants, 2)
    assert.deepEqual([...locationsOf('styles.root.padding.top').ids].sort(), ['V:state=default, hierarchy=primary', 'V:state=hover, hierarchy=primary'])
  })
  test('location: a text without a style, an issue specific to a variant, the variables without a node', async () => {
    const detail = await buttonDetail()
    const locationsOf = (where) => plain(detail.locations[detail.sheet.issues.findIndex((i) => i.where === where)])
    assert.deepEqual([...locationsOf('styles.caption').ids].sort(), ['CA:state=default, hierarchy=primary', 'CA:state=hover, hierarchy=primary'])
    assert.deepEqual(locationsOf('styles.root.stroke'), { ids: ['V:state=hover, hierarchy=primary'], variants: 1 })
    assert.deepEqual(locationsOf('tokens.color/blue/700'), { ids: [], variants: 0 })
    assert.deepEqual(locationsOf('structure.slots.leftIcon'), { ids: ['S:100'], variants: 0 })
  })
  test('location: nomenclature, the component or all the layers of that name', async () => {
    const detail = await deviationsDetail()
    const i = (where) => plain(detail.locations[detail.sheet.issues.findIndex((x) => x.where === where)])
    assert.deepEqual(i('calque Frame 27'), { ids: ['F:27'], variants: 1 })
    assert.deepEqual(i('api.props.Size'), { ids: ['S:200'], variants: 0 })
  })
  test('the serialized JSON contains no ids, no labels, no date', async () => {
    const { plugin, sheet, text } = await button()
    const detail = await buttonDetail()
    assert.ok(!/"(ids|location|variantes_touchees)"/.test(text))
    assert.ok(!text.includes('LI:state'))
    assert.equal(plugin.__test.serialize(detail.sheet), text)
    for (const i of sheet.issues) assert.deepEqual(Object.keys(i).filter((k) => k === 'ids' || k === 'location'), [])
  })
  test('check: each issue has its readable label and its ids', async () => {
    const { p } = await openPlugin()
    await p.send({ type: 'controler' })
    for (const i of p.lastMessage().issues) { assert.equal(typeof i.location, 'string'); assert.ok(Array.isArray(i.ids)) }
  })
  test('generation: readable issues, summary, no changes at the first export', async () => {
    const { sheet } = await button()
    const { msg } = await generate()
    const i = msg.issues.find((x) => x.where === 'styles.left-icon.layout.width')
    assert.equal(i.location, 'left-icon, largeur')
    assert.equal(i.ids.length, 2)
    assert.equal(i.variants, 2)
    assert.equal(msg.json, withVersions(sheet, '1.0.0', '2.1.0'))
    assert.equal(msg.changes, null)
    assert.deepEqual(plain(msg.summary), { variants: 2, properties: 6, variables: 5, textStylesCount: 1, overrides: 1, kb: msg.summary.kb })
    assert.ok(msg.summary.kb >= 1)
  })
  test('summary of real Button: variants, overrides, weight in KB', async () => {
    const { summarize } = (await button()).plugin.__test
    const raw = fs.readFileSync(BUTTON_03, 'utf8')
    const r = summarize(JSON.parse(raw), raw)
    assert.equal(r.variants, 50)
    assert.equal(r.overrides, 27)
    assert.equal(r.kb, Math.round(Buffer.byteLength(raw) / 1024))
  })
})

// ------------------------------------------------------------ the selection from an issue
describe('The selection from an issue', () => {
  const iconsOf = (msg) => msg.issues.find((x) => x.where === 'styles.left-icon.layout.width').ids

  test('selectionner: the nodes are selected and brought on screen', async () => {
    const { p, msg } = await generate()
    const icons = iconsOf(msg)
    await p.send({ type: 'selectionner', ids: icons, id: 'S:100' })
    assert.deepEqual(p.figma.currentPage.selection.map((n) => n.id), icons)
    assert.equal(p.selections.length, 1)
  })
  test('the name sent to the interface is that of the JSON, without the working copy prefix', async () => {
    const doc = buttonDocument()
    const variantSet = doc.selection[0]
    variantSet.name = 'Test/Button'
    const { p } = await openPlugin(doc)
    const sel = p.messages.filter((m) => m.type === 'selection').pop()
    assert.equal(sel.name, 'Button')
    assert.equal(p.__test.withoutCopyPrefix('Test/Button'), 'Button')
  })
  test('a layer selected in the component keeps the same component', async () => {
    const { p, msg } = await generate()
    await p.send({ type: 'selectionner', ids: iconsOf(msg), id: 'S:100' })
    await p.send({ type: 'ui-pret' })
    const sel = p.messages.filter((m) => m.type === 'selection').pop()
    assert.equal(sel.id, 'S:100')
    assert.equal(sel.name, 'Button')
  })
  test('without a click on an issue, a nested instance keeps its main component', async () => {
    const { doc, p, msg } = await generate()
    const icons = iconsOf(msg)
    await p.send({ type: 'selectionner', ids: icons, id: 'S:100' })
    await p.send({ type: 'ui-pret' })
    // leave the button, then come back by directly selecting an icon
    p.figma.currentPage.selection = [doc.nodes[0]]
    await p.send({ type: 'ui-pret' })
    p.figma.currentPage.selection = [await p.figma.getNodeByIdAsync(icons[0])]
    await p.send({ type: 'ui-pret' })
    const sel = p.messages.filter((m) => m.type === 'selection').pop()
    assert.notEqual(sel.id, 'S:100')
  })
  test('selectionner: vanished nodes give a message, not an exception', async () => {
    const { p } = await openPlugin()
    await p.send({ type: 'selectionner', ids: ['absent:1'] })
    assert.equal(p.lastMessage().type, 'erreur')
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

  test('nothing is stored before a copy, nor for another component', async () => {
    const { doc, p } = await generate()
    assert.equal(doc.nodes[1].getSharedPluginData('canopee_fiches', 'export'), '', 'enregistré avant toute copie')
    await p.send({ type: 'memoriser', id: 'autre:1' })
    assert.equal(doc.nodes[1].getSharedPluginData('canopee_fiches', 'export'), '', 'enregistré pour un autre composant')
  })
  test('an export leaves no JSON on the machine', async () => {
    const { p } = await exportStored()
    assert.deepEqual(Object.keys(p.clientStorage), [], 'le stockage du poste reste vide')
  })
  test('same component exported again: no change, and no date', async () => {
    const { p } = await exportStored()
    await p.send({ type: 'generer' })
    assert.deepEqual(plain(p.lastMessage().changes), { sentences: [] })
  })
  test('without a shared base, there is nothing to compare, even with an old export kept on the machine', async () => {
    const doc = buttonDocument()
    doc.clientStorage = { 'dernier-export:KEY-BUTTON': { json: '{}', date: '2026-10-01T00:00:00.000Z' } }
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().changes, null)
  })
  test('a modified default text shows up in the changes', async () => {
    const { doc, p } = await exportStored()
    doc.nodes[1].componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await p.send({ type: 'generer' })
    assert.deepEqual(plain(p.lastMessage().changes.sentences), ['Slot label, texte par défaut : Label → Libellé'])
  })
})

// ------------------------------------------------------------ the comparison of two sheets
describe('The comparison of two sheets', () => {
  test('Button 0.2 against 0.3: exactly the known changes, and nothing else', async () => {
    const { compareSheets } = (await button()).plugin.__test
    assert.deepEqual(plain(compareSheets(real02(), real03())), [
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
  test('a sheet compared with itself: no change', async () => {
    const { compareSheets } = (await button()).plugin.__test
    assert.deepEqual(plain(compareSheets(real03(), real03())), [])
    assert.deepEqual(plain(compareSheets(real02(), real02())), [])
  })
  test('properties reordered in the panel: a single change', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const b = plain(real03())
    const { showRightIcon, showLeftIcon, _theme } = b.api.props
    delete b.api.props.showRightIcon; delete b.api.props.showLeftIcon; delete b.api.props._theme
    Object.assign(b.api.props, { showLeftIcon, showRightIcon, _theme })
    assert.deepEqual(plain(compareSheets(real03(), b)), ['Ordre des propriétés modifié'])
  })
  test('properties, variants, structure and issues', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const b = plain(real03())
    b.api.props.state.enum = b.api.props.state.enum.filter((v) => v !== 'press')
    b.api.props.state.default = 'hover'
    b.api.props.nouvelle = { type: 'boolean', default: false }
    delete b.api.props.disabled
    b.variants = b.variants.slice(1)
    b.structure.trees[0].tree.pop()
    b.issues = []
    const r = compareSheets(real03(), b)
    assert.ok(r.includes('Propriété ajoutée : nouvelle'))
    assert.ok(r.includes('Propriété retirée : disabled'))
    assert.ok(r.includes('Propriété state, valeurs retirées : press'))
    assert.ok(r.includes('Propriété state, valeur par défaut : default → hover'))
    assert.ok(r.some((x) => /^Variante retirée : state=default, disabled=false/.test(x)))
    assert.ok(r.includes('Structure des calques modifiée'))
    assert.ok(r.includes('Défauts : 1 → 0'))
  })
  test('paddings grouped, without « Racine », and the size of a stretched absolute layer ignored', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const variant = (size, theme) => ({ values: { state: 'focus', size: size, _theme: theme }, position: [0, 0] })
    const pad = (h, v) => ({ top: { token: v }, right: { token: h }, bottom: { token: v }, left: { token: h } })
    const ring = (w) => ({ layout: { absolute: true, x: -5, y: -5, constraints: { horizontal: 'stretch', vertical: 'stretch' }, sizingH: 'fixed', width: { raw: w } } })
    const sheet = (pp, pc, wp, wc) => ({
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
    assert.deepEqual(plain(compareSheets(before, after)), [
      { title: 'size=medium, _theme=prospect', lines: ['Marges horizontales : spacing/24 → spacing/16'] },
      { title: 'size=medium, _theme=client', lines: ['Marges, sur les quatre côtés : spacing/16 → spacing/12'] }
    ])
  })
  test('beyond 20 sentences: the first 20, then the remaining count', async () => {
    const { compareSheets } = (await button()).plugin.__test
    const fa = { structure: { slots: {} } }
    const fb = { structure: { slots: {} } }
    for (let k = 0; k < 25; k++) { fa.structure.slots['s' + k] = { default: { text: 'a' } }; fb.structure.slots['s' + k] = { default: { text: 'b' } } }
    const r = compareSheets(fa, fb)
    assert.equal(r.length, 21)
    assert.equal(r[20], 'et 5 autres changements')
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

  test('automatic height bounded between 320 and 760, width 440', async () => {
    const p = createFakePlugin(buttonDocument())
    await p.send({ type: 'redimensionner', height: 2000 })
    await p.send({ type: 'redimensionner', height: 100 })
    assert.deepEqual(p.resizes, [[440, 760], [440, 320]])
  })
  test('manual size bounded, applied and stored under the key taille', async () => {
    const p = await inManual()
    assert.deepEqual(p.resizes[p.resizes.length - 1], [320, 1200])
    assert.deepEqual(plain(p.clientStorage.taille), { largeur: 320, hauteur: 1200 })
  })
  test('automatic height ignored as long as the size is manual', async () => {
    const p = await inManual()
    const before = p.resizes.length
    await p.send({ type: 'redimensionner', height: 500 })
    assert.equal(p.resizes.length, before)
  })
  test('back to the automatic size: preference deleted, width 440, new height requested', async () => {
    const p = await inManual()
    const before = p.messages.length
    await p.send({ type: 'taille-auto' })
    assert.equal(p.clientStorage.taille, undefined)
    assert.deepEqual(p.resizes[p.resizes.length - 1], [440, 1200])
    assert.ok(p.messages.slice(before).some((m) => m.type === 'recalculer-hauteur'))
  })
  test('automatic height resumed after taille-auto', async () => {
    const p = await inManual()
    await p.send({ type: 'taille-auto' })
    const before = p.resizes.length
    await p.send({ type: 'redimensionner', height: 500 })
    assert.equal(p.resizes.length, before + 1)
    assert.deepEqual(p.resizes[p.resizes.length - 1], [440, 500])
  })
  test('stored size read again at opening, bounded, without touching the stored exports', async () => {
    const pr = createFakePlugin(Object.assign(buttonDocument(), { clientStorage: { taille: { largeur: 550, hauteur: 250 }, 'dernier-export:K': { json: '{}', date: '2026-10-01T00:00:00.000Z' } } }))
    await new Promise((r) => setTimeout(r, 0))
    assert.deepEqual(pr.resizes, [[550, 300]])
    assert.equal(pr.clientStorage['dernier-export:K'].json, '{}')
  })
})

// ------------------------------------------------------------ the interface
describe('The interface', () => {
  const html = () => fs.readFileSync(path.join(PLUGIN, 'ui.html'), 'utf8')
  test('the script of ui.html compiles', () => {
    const m = html().match(/<script>([\s\S]*)<\/script>/)
    assert.ok(m, 'script absent')
    new (require('vm').Script)(m[1])
  })
  test('escapeHtml also protects quotes, since it fills attributes', () => {
    const m = html().match(/const escapeHtml = .*/)
    assert.ok(m, 'escapeHtml absent')
    const escapeHtml = new Function(m[0] + '; return escapeHtml')()
    assert.equal(escapeHtml('a & <b> "c" \'d\''), 'a &amp; &lt;b&gt; &quot;c&quot; &#39;d&#39;')
  })

  // A fake DOM: one element per id of the HTML, with what the script reads and writes.
  function fakeInterface(onSend) {
    const source = html()
    const elements = {}
    const sent = []
    const selection = { target: null }
    const downloads = []
    const copies = []
    const makeElement = (id, attrs) => {
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
        classList: { contains: (c) => classes.has(c), add: (c) => classes.add(c), remove: (c) => classes.delete(c), toggle: (c, force) => { if (force === undefined ? !classes.has(c) : force) classes.add(c); else classes.delete(c) } },
        setAttribute(n, v) { if (n === 'hidden') this.hidden = true },
        toggleAttribute(n, force) { if (n === 'hidden') this.hidden = force },
        addEventListener() {}, setPointerCapture() {}, releasePointerCapture() {}, hasPointerCapture: () => false,
        focus() {}, select() {}, closest: () => null
      }
      return el
    }
    for (const m of source.matchAll(/<(\w+)([^>]*?)\bid="([^"]+)"([^>]*)>/g)) elements[m[3]] = makeElement(m[3], m[2] + ' ' + m[4])
    const context = {
      document: {
        getElementById: (id) => elements[id], body: { classList: { add() {}, remove() {} }, appendChild() {}, removeChild() {} }, createElement: () => { const a = makeElement('a', ''); a.click = () => downloads.push({ name: a.download, href: a.href }); return a }, execCommand: () => false,
        createRange: () => ({ selectNodeContents(el) { this.el = el } }),
        getSelection: () => ({ removeAllRanges() { selection.target = null }, addRange(r) { selection.target = r.el } })
      },
      parent: { postMessage: (m) => { sent.push(m.pluginMessage); if (onSend) onSend(m.pluginMessage) } },
      navigator: { clipboard: { writeText: async (t) => { copies.push(t) } } }, URL: { createObjectURL: (b) => 'blob:' + b.size + ':' + b.type, revokeObjectURL() {} }, Blob, Date, setTimeout, console
    }
    require('vm').createContext(context)
    new (require('vm').Script)(source.match(/<script>([\s\S]*)<\/script>/)[1]).runInContext(context)
    const receive = (m) => context.onmessage({ data: { pluginMessage: m } })
    return { el: elements, sent, receive, source, selection, downloads, copies }
  }
  const selection = { type: 'selection', id: '1:2', name: 'Button', variants: 60, properties: 8 }
  const versionOf = (v) => Object.assign({ first: false, none: false, current: '1.0.0', version: '1.1.0', level: 'mineure', detected: 'mineure', tokensVersion: '2.0.0', next: '1.1.0' }, v)
  const answers = (ui, answer) => { ui.el['livree-' + answer].checked = true; ui.el['livree-' + answer].onchange() }
  // The fake DOM does not read the data-* attributes, the test gives the tab name itself.
  const openTab = (ui, name) => { ui.el['onglet-' + name].dataset.onglet = name; ui.el.onglets.onclick({ target: { closest: () => ui.el['onglet-' + name] } }) }
  const sheetWith = (v) => ({ type: 'fiche', id: '1:2', json: '{}', file: 'button.json', changelogFile: 'button-changelog.md', version: versionOf(v), summary: { variables: 1, overrides: 2, kb: 3 }, changes: { sentences: ['Une propriété a été ajoutée', 'Une valeur a changé'] }, issues: [] })
  const generated = (v) => { const ui = fakeInterface(); ui.receive(selection); ui.receive(sheetWith(v)); return ui }
  const ISSUE = { level: 'warning', rule: 'valeur-brute', where: 'styles.a.gap', message: 'Valeur brute.', ids: [] }

  test('there is no longer a header or a Version block', () => {
    const { source } = fakeInterface()
    assert.ok(!/<header|class="entete"|<h1|id="bloc-version"|version-ligne|version-reste|version-changements|NB_PHRASES/.test(source))
    assert.ok(source.indexOf('id="infos"') < source.indexOf('id="onglets"'), 'la ligne du composant est au-dessus des onglets')
    assert.ok(!/id="actions"[\s\S]*id="(refonte|fichemd|val-tokens)"[\s\S]*id="poignee"/.test(source), 'les cases et la ligne des tokens ne sont plus dans la zone des boutons')
  })
  test('the text of the JSON takes the free height of the window, without a handle of its own', () => {
    const { source } = fakeInterface()
    assert.match(source, /#contenu, #panneau-json, #json-contenu \{ flex: 1 0 auto; display: flex; flex-direction: column; \}/)
    assert.match(source, /#json \{[^}]*flex: 1 0 160px;[^}]*overflow: auto;/)
    assert.doesNotMatch(source, /<textarea|resize: vertical/)
  })
  test('the automatic height is measured without the stretching of the JSON', () => {
    const { source } = fakeInterface()
    assert.match(source, /body\.mesure #contenu, body\.mesure #panneau-json, body\.mesure #json-contenu, body\.mesure #json \{ flex-grow: 0; \}/)
    assert.match(source, /classList\.add\('mesure'\)[\s\S]*offsetHeight[\s\S]*classList\.remove\('mesure'\)[\s\S]*type: 'redimensionner'/)
  })
  test('the plugin version is in the JSON tab, under the summary', () => {
    const ui = fakeInterface()
    assert.match(ui.source, /<div class="panneau" id="panneau-json"[\s\S]*id="resume"[\s\S]*<p class="aide" id="version-plugin">[\s\S]*<pre id="json"/)
    ui.receive({ type: 'init', version: '0.4.3', format: '0.4' })
    assert.equal(ui.el['version-plugin'].textContent, 'Plugin 0.4.3, format 0.4')
  })
  test('the card: tile background, 8 px radius, 16 px margin, above the tabs', () => {
    const { source } = fakeInterface()
    assert.match(source, /#infos \{ padding: 16px; border-radius: 8px; background: var\(--fond-tuile\); \}/)
    // after the generation: the version next to the name, in brand blue, and the design tokens as a pill below
    assert.match(source, /\.version-nom \{ font-size: 16px; line-height: 20px; font-weight: 700; color: var\(--texte-marque\); \}/)
    assert.match(source, /\.pastilles \{ display: flex; flex-wrap: wrap; gap: 4px; margin-top: 12px; \}/)
    assert.doesNotMatch(source, /class="tuile-libelle"|\.tuiles \{/)
    assert.match(source, /\.filet \{ height: 1px; margin: 10px 0; background: var\(--figma-color-border, #e6e6e6\); \}/)
    assert.match(source, /id="nom"[\s\S]*id="tuile-version"[\s\S]*id="etiquette"[\s\S]*id="compteurs"[\s\S]*id="regenerer"[\s\S]*id="tuiles"[\s\S]*id="tuile-tokens"[\s\S]*id="filet"[\s\S]*id="cases"/)
  })
  test('nothing selected: the invitation in the center, without a card, without tabs or buttons', () => {
    const ui = fakeInterface()
    assert.equal(ui.el.actions.hidden, true, 'pas de bouton grisé avant le premier message')
    ui.receive({ type: 'selection', id: null, name: null })
    assert.equal(ui.el.vide.hidden, false)
    assert.equal(ui.el.infos.hidden, true)
    assert.equal(ui.el.onglets.hidden, true)
    assert.equal(ui.el.actions.hidden, true)
    assert.match(ui.source, /<p class="vide-titre">Aucun composant sélectionné<\/p>/)
    assert.match(ui.source, /<p class="aide">Sélectionner dans Figma un composant, son ensemble de variantes ou une de ses instances\.<\/p>/)
    assert.match(ui.source, /\.vide \{ flex: 1 0 auto;[^}]*justify-content: center;/)
  })
  test('nothing selected: an error still shows, without the buttons', () => {
    const ui = fakeInterface()
    ui.receive({ type: 'selection', id: null, name: null })
    ui.receive({ type: 'erreur', message: 'Sélectionner un composant, ou un ensemble de variantes.' })
    assert.equal(ui.el.actions.hidden, false)
    assert.equal(ui.el.erreur.hidden, false)
    assert.equal(ui.el.boutons.hidden, true)
  })
  test('a selection makes the card and the buttons appear', () => {
    const ui = fakeInterface()
    ui.receive({ type: 'selection', id: null, name: null })
    ui.receive(selection)
    assert.equal(ui.el.vide.hidden, true)
    assert.equal(ui.el.infos.hidden, false)
    assert.equal(ui.el.actions.hidden, false)
    assert.equal(ui.el.boutons.hidden, false)
    assert.equal(ui.el.generer.disabled, false)
  })
  test('before the generation, the card gives the name, then the counters as pills on their own line, on the left', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    assert.equal(ui.el.nom.textContent, 'Button')
    assert.equal(ui.el.etiquette.innerHTML, '')
    assert.equal(ui.el.compteurs.hidden, false)
    assert.equal(ui.el.compteurs.innerHTML, '<span class="pastille"><b>60</b> variantes</span><span class="pastille"><b>8</b> propriétés</span><span class="pastille pastille-neutre">jamais exporté</span>')
    assert.equal(ui.el.tuiles.hidden, true)
    assert.equal(ui.el.filet.hidden, true)
    assert.equal(ui.el.cases.hidden, true)
    assert.match(ui.source, /\.rangee-nom \.compteurs \{[^}]*flex-basis: 100%;/)
    assert.doesNotMatch(ui.source, /\.rangee-nom \.compteurs \{[^}]*margin-left: auto;/)
    assert.match(ui.source, /\.pastille \{[^}]*background: var\(--figma-color-bg, #fff\);[^}]*font-size: 12px;/)
    assert.match(ui.source, /\.pastille b \{ color: var\(--texte-marque\); \}/)
  })
  test('opened from an instance: a gray pill says so', () => {
    const ui = fakeInterface()
    ui.receive(Object.assign({}, selection, { viaInstance: true }))
    assert.match(ui.el.compteurs.innerHTML, /<span class="pastille pastille-neutre">depuis une instance<\/span>$/)
  })
  test('after the generation, the name is alone, the tag follows it, only the Version and Design tokens tiles remain', () => {
    const ui = generated({})
    assert.equal(ui.el.nom.textContent, 'Button')
    assert.equal(ui.el.etiquette.innerHTML, '<span class="etiquette etiquette-modifie">MINEURE</span>')
    assert.equal(ui.el['tuile-version'].hidden, false)
    assert.equal(ui.el['tuile-tokens'].hidden, false)
    assert.equal(ui.el.tuiles.hidden, false)
    assert.equal(ui.el.compteurs.hidden, true)
    answers(ui, 'oui')
    assert.equal(ui.el['val-version'].textContent, '1.1.0')
    assert.equal(ui.el['generer-libelle'].textContent, 'Télécharger le JSON')
  })
  test('Changements tab: one group per variants, bold title, and the counter counts the lines', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changes: { sentences: [
      { title: 'size=medium, _theme=prospect', lines: ['Marges horizontales : spacing/24 → spacing/16'] },
      { title: 'size=medium, _theme=client', lines: ['Marges, sur les quatre côtés : spacing/16 → spacing/12', 'Fond : a → b'] }
    ] } }))
    assert.equal(ui.el['compteur-changements'].textContent, '3')
    assert.equal(ui.el.changements.innerHTML, '<p class="aide">Depuis le dernier export :</p><ul class="aide">'
      + '<li><span class="groupe">size=medium, _theme=prospect</span><ul><li>Marges horizontales : spacing/24 → spacing/16</li></ul></li>'
      + '<li><span class="groupe">size=medium, _theme=client</span><ul><li>Marges, sur les quatre côtés : spacing/16 → spacing/12</li><li>Fond : a → b</li></ul></li></ul>')
  })
  test('JSON changed: the version question is asked, and nothing is downloaded or copied without an answer', () => {
    const ui = generated({})
    assert.equal(ui.el.question.hidden, false)
    assert.equal(ui.el.question.classList.contains('a-repondre'), true)
    assert.equal(ui.el['question-titre'].textContent, 'La version 1.0.0 a-t-elle été livrée aux devs ?')
    assert.equal(ui.el['livree-oui-libelle'].textContent, 'Oui, passer en 1.1.0')
    assert.equal(ui.el['livree-non-libelle'].textContent, 'Non, garder 1.0.0')
    assert.equal(ui.el['val-version'].textContent, 'à choisir')
    assert.equal(ui.el['tuile-version'].classList.contains('a-choisir'), true)
    assert.match(ui.source, /<div class="reponses">\s*<label class="case"><input type="radio" name="livree" id="livree-oui">[\s\S]*?id="livree-non"[\s\S]*?<\/div>/)
    assert.equal(ui.el.generer.disabled, true)
    assert.equal(ui.el['generer-libelle'].textContent, 'Répondre à la question')
    assert.equal(ui.el.copier.disabled, true)
    answers(ui, 'oui')
    assert.equal(ui.el['tuile-version'].classList.contains('a-choisir'), false)
    assert.equal(ui.el.question.classList.contains('a-repondre'), false)
    assert.equal(ui.el.generer.disabled, false)
    assert.equal(ui.el.copier.disabled, false)
    assert.match(ui.source, /\.question\.a-repondre \{ box-shadow: inset 0 0 0 2px var\(--texte-marque\); \}/)
  })
  test('the question is not asked at the first version, nor when nothing changed', () => {
    for (const v of [{ version: '1.0.0', level: null, detected: null, first: true, current: null, next: null }, { version: '1.0.0', level: null, detected: null, none: true, next: null }]) {
      const ui = generated(v)
      assert.equal(ui.el['question-livree'].hidden, true)
      assert.equal(ui.el.generer.disabled, false)
      assert.equal(ui.el['val-version'].textContent, '1.0.0')
    }
  })
  test('Non, garder: the plugin keeps the version, Refonte complète is unchecked, and the tag says VERSION GARDÉE', () => {
    const ui = generated({})
    answers(ui, 'oui')
    ui.el.refonte.checked = true
    ui.el.refonte.onchange()
    answers(ui, 'non')
    assert.equal(ui.el.refonte.checked, false)
    assert.equal(ui.el['case-refonte'].hidden, true)
    assert.deepEqual(plain(ui.sent.filter((m) => m.type === 'choisir-version').pop()), { type: 'choisir-version', id: '1:2', keep: true, overhaul: false, sheetMd: false })
    ui.receive({ type: 'version', id: '1:2', json: '{}', version: versionOf({ version: '1.0.0', level: null, kept: true }) })
    assert.equal(ui.el.etiquette.innerHTML, '<span class="etiquette etiquette-neutre">VERSION GARDÉE</span>')
    assert.equal(ui.el['val-version'].textContent, '1.0.0')
    assert.equal(ui.el['generer-libelle'].textContent, 'Télécharger le JSON')
  })
  test('a new generation asks the question again', () => {
    const ui = generated({})
    answers(ui, 'non')
    ui.receive(sheetWith({}))
    assert.equal(ui.el['livree-non'].checked, false)
    assert.equal(ui.el.question.classList.contains('a-repondre'), true)
    assert.equal(ui.el.generer.disabled, true)
  })
  test('before the generation, only the À corriger tab shows, and the arrows stay on it', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    assert.doesNotMatch(ui.source, /\.onglet:disabled|tabindex="-1" disabled|-attente"/)
    assert.equal(ui.el.onglets.hidden, false)
    assert.deepEqual(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden), [false, true, true, true])
    assert.equal(ui.el['panneau-corriger'].hidden, false)
    ui.el.onglets.onkeydown({ key: 'ArrowRight', preventDefault() {} })
    assert.equal(ui.el['panneau-corriger'].hidden, false)
    assert.equal(ui.el['panneau-json'].hidden, true)
  })
  test('after the generation with an issue, the four tabs show and À corriger is open', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { issues: [ISSUE] }))
    assert.deepEqual(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden), [false, false, false, false])
    assert.equal(ui.el['panneau-corriger'].hidden, false)
    assert.equal(ui.el['json-contenu'].hidden, false)
    assert.equal(ui.el['changelog-contenu'].hidden, false)
    assert.equal(ui.el.changements.hidden, false)
  })
  test('after the generation without an issue, À corriger disappears and the first tab, JSON, is open', () => {
    const ui = generated({})
    assert.deepEqual(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden), [true, false, false, false])
    assert.equal(ui.el['panneau-json'].hidden, false)
    assert.equal(ui.el['panneau-changements'].hidden, true)
    assert.equal(ui.el['panneau-corriger'].hidden, true)
  })
  test('À corriger open, a new generation without an issue switches to JSON', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { issues: [ISSUE] }))
    assert.equal(ui.el['panneau-corriger'].hidden, false)
    ui.receive(Object.assign(sheetWith({}), { issues: [] }))
    assert.equal(ui.el['onglet-corriger'].hidden, true)
    assert.equal(ui.el['panneau-corriger'].hidden, true)
    assert.equal(ui.el['panneau-json'].hidden, false)
  })
  test('a new component hides the JSON, Changelog and Changements tabs again', () => {
    const ui = generated({})
    ui.receive(Object.assign({}, selection, { id: 'autre', name: 'Tag' }))
    assert.deepEqual(['corriger', 'json', 'changelog', 'changements'].map((n) => ui.el['onglet-' + n].hidden), [false, true, true, true])
  })
  test('the card gives the last stored version, or « jamais exporté »', () => {
    const ui = fakeInterface()
    ui.receive(Object.assign({}, selection, { latestVersion: '1.2.0' }))
    assert.match(ui.el.compteurs.innerHTML, /<span class="pastille">dernière version <b>1\.2\.0<\/b><\/span>/)
    ui.receive(Object.assign({}, selection, { id: 'autre', name: 'Tag', latestVersion: null }))
    assert.match(ui.el.compteurs.innerHTML, /<span class="pastille pastille-neutre">jamais exporté<\/span>/)
    assert.doesNotMatch(ui.el.compteurs.innerHTML, /dernière version/)
  })
  test('the tabs: 14 px text, 3 px underline, counters in brand blue', () => {
    const { source } = fakeInterface()
    assert.match(source, /\.onglet \{[^}]*padding: 10px 0;[^}]*border-bottom: 3px solid transparent;[^}]*font-size: 14px;/)
    assert.match(source, /\.compteur \{[^}]*background: var\(--fond-tuile\); color: var\(--texte-marque\);/)
  })
  test('before the generation, « À corriger » is a section title, and becomes a tab again afterwards', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    assert.equal(ui.el.onglets.classList.contains('titre-seul'), true)
    assert.match(ui.source, /\.onglets\.titre-seul \.onglet \{ border-bottom-color: transparent; cursor: default; \}/)
    ui.receive(sheetWith({}))
    assert.equal(ui.el.onglets.classList.contains('titre-seul'), false)
  })
  test('the radio buttons and the checkboxes are drawn with a brand blue outline', () => {
    const { source } = fakeInterface()
    assert.match(source, /\.case input \{[^}]*appearance: none;[^}]*border: 1\.5px solid var\(--texte-marque\);/)
    assert.match(source, /\.case input\[type="checkbox"\]:checked \{ background: var\(--texte-marque\); \}/)
    assert.doesNotMatch(source, /accent-color/)
  })
  test('Rien à corriger before the generation: a centered empty state, that invites to generate', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive({ type: 'controle', id: '1:2', issues: [] })
    assert.equal(ui.el['corriger-ok'].hidden, false)
    assert.match(ui.source, /<div class="vide" id="corriger-ok" hidden>[\s\S]*?<p class="vide-titre">Rien à corriger<\/p>\s*<p class="aide">Le composant respecte la nomenclature\. Générer le JSON pour calculer sa version et son changelog\.<\/p>/)
  })
  test('a change of component after the generation shows the counters again', () => {
    const ui = generated({})
    ui.receive(Object.assign({}, selection, { id: 'autre', name: 'Tag' }))
    assert.equal(ui.el.compteurs.hidden, false)
    assert.equal(ui.el.tuiles.hidden, true)
    assert.equal(ui.el['tuile-version'].hidden, true)
  })
  test('each level has its tag and its color', () => {
    const scenario = [
      [{ version: '2.0.0', level: 'majeure' }, 'MAJEURE', 'etiquette-supprime'],
      [{ version: '1.1.0', level: 'mineure' }, 'MINEURE', 'etiquette-modifie'],
      [{ version: '1.0.1', level: 'correctif' }, 'PATCH', 'etiquette-ajoute'],
      [{ version: '1.0.0', level: null, detected: null, first: true, current: null }, 'PREMIÈRE VERSION', 'etiquette-neutre'],
      [{ version: '1.0.0', level: null, detected: null, none: true }, 'INCHANGÉE', 'etiquette-neutre']
    ]
    for (const [v, label, cssClass] of scenario) {
      const ui = generated(v)
      if (!ui.el.question.hidden) answers(ui, 'oui')
      assert.equal(ui.el.etiquette.innerHTML, '<span class="etiquette ' + cssClass + '">' + label + '</span>')
      assert.equal(ui.el['val-version'].textContent, v.version)
    }
    const css = fakeInterface().source
    for (const cssClass of ['etiquette-supprime', 'etiquette-modifie', 'etiquette-ajoute', 'etiquette-neutre']) assert.ok(css.includes('.' + cssClass + ' {'), cssClass)
  })
  test('the pill Version minimale des tokens requise: computed version, or non calculée in error color', () => {
    const computed = generated({ tokensVersion: '2.0.0' })
    assert.equal(computed.el['val-tokens'].textContent, '2.0.0')
    assert.equal(computed.el['val-tokens'].title, '')
    const source = computed.source
    assert.ok(source.includes('<span class="pastille" id="tuile-tokens" hidden>Version minimale des tokens requise : <b id="val-tokens"></b></span>'))
    assert.equal(computed.el['val-tokens'].classList.contains('tokens-erreur'), false)
    const zero = generated({ tokensVersion: null })
    assert.equal(zero.el['val-tokens'].textContent, 'non calculée')
    assert.equal(zero.el['val-tokens'].title, 'Voir l\'onglet À corriger')
    assert.equal(zero.el['val-tokens'].classList.contains('tokens-erreur'), true)
    assert.match(zero.source, /#val-tokens\.tokens-erreur \{ color: var\(--rouge\); \}/)
  })
  test('the question and the checkboxes share the same box: the question on top, the checkboxes under a rule, one per line', () => {
    const { source } = fakeInterface()
    assert.match(source, /<div class="cases" id="cases" hidden>\s*<label class="case" id="case-refonte">[^\n]*<\/label>\s*<label class="case" id="case-fichemd" hidden>[^\n]*<\/label>\s*<\/div>\s*<\/div>/)
    assert.match(source, /#question-livree, \.cases \{ display: flex; flex-direction: column;/)
    const i = (id) => source.indexOf('id="' + id + '"')
    assert.ok(i('tuile-tokens') < i('question') && i('question') < i('question-livree') && i('question-livree') < i('question-aucun') && i('question-aucun') < i('filet') && i('filet') < i('cases'))
  })
  test('the checkboxes announce the version they give, and « Aucun changement » opens the box when nothing changed', () => {
    const change = generated({ version: '1.3.0', current: '1.2.4', next: '1.3.0' })
    answers(change, 'oui')
    assert.equal(change.el['refonte-libelle'].textContent, 'Refonte complète, passer en 2.0.0')
    assert.equal(change.el['question-aucun'].hidden, true)
    assert.equal(change.el.filet.hidden, false)
    const nothing = generated({ version: '1.2.4', current: '1.2.4', level: null, detected: null, none: true, next: null })
    assert.equal(nothing.el.question.hidden, false)
    assert.equal(nothing.el['question-livree'].hidden, true)
    assert.equal(nothing.el['question-aucun'].hidden, false)
    assert.match(nothing.source, /id="question-aucun" hidden>Aucun changement dans le composant\.</)
    assert.equal(nothing.el.filet.hidden, true)
    assert.equal(nothing.el['fichemd-libelle'].textContent, 'Fiche md modifiée, passer en 1.2.5')
    assert.equal(nothing.el['case-refonte'].hidden, true)
    const first = generated({ version: '1.0.0', level: null, detected: null, first: true, current: null, next: null })
    assert.equal(first.el.question.hidden, true, 'première version : pas d\'encadré')
  })
  test('the checkboxes: overhaul only after « Oui », md sheet only when nothing changed, the rule follows', () => {
    const first = generated({ version: '1.0.0', level: null, detected: null, first: true, current: null })
    assert.equal(first.el.cases.hidden, true)
    assert.equal(first.el.filet.hidden, true)
    assert.equal(first.el['case-refonte'].hidden, true)
    const change = generated({})
    assert.equal(change.el.cases.hidden, true, 'rien à cocher avant la réponse')
    assert.equal(change.el.filet.hidden, true)
    answers(change, 'oui')
    assert.equal(change.el.cases.hidden, false)
    assert.equal(change.el.filet.hidden, false)
    assert.equal(change.el['case-refonte'].hidden, false)
    assert.equal(change.el['case-fichemd'].hidden, true)
    const nothing = generated({ version: '1.0.0', level: null, detected: null, none: true })
    assert.equal(nothing.el['case-refonte'].hidden, true, 'rien n\'a changé : pas de refonte possible')
    assert.equal(nothing.el['case-fichemd'].hidden, false)
    assert.equal(nothing.el.filet.hidden, true, 'sans question, pas de filet au-dessus des cases')
  })
  test('empty Changements: a centered state, with a title, when nothing changed or at the first export', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changes: { sentences: [] } }))
    assert.match(ui.el.changements.innerHTML, /^<div class="vide"><span class="vide-icone"><svg[\s\S]*<\/svg><\/span><p class="vide-titre">Aucun changement<\/p><p class="aide">Le composant n&#39;a pas changé depuis le dernier export\.<\/p><\/div>$/)
    ui.receive(Object.assign(sheetWith({}), { changes: null }))
    assert.match(ui.el.changements.innerHTML, /<p class="vide-titre">Premier export<\/p><p class="aide">Ce composant n&#39;a pas encore de version précédente à comparer\.<\/p>/)
    assert.match(ui.source, /#panneau-changements, #changements \{ flex: 1 0 auto; display: flex; flex-direction: column; \}/)
  })
  test('changes compared to the shared base: « Depuis le dernier export », without a date', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changes: { sentences: ['Propriété size ajoutée'] } }))
    assert.equal(ui.el.changements.innerHTML, '<p class="aide">Depuis le dernier export : propriété size ajoutée</p>')
  })
  test('an error message clears the success banner of the download already done', () => {
    const ui = generated({})
    answers(ui, 'oui')
    ui.el.generer.onclick()
    assert.equal(ui.el.succes.textContent, 'JSON téléchargé.')
    assert.equal(ui.el.succes.hidden, false)
    ui.receive({ type: 'erreur', message: 'Un autre export a eu lieu.' })
    assert.equal(ui.el.erreur.textContent, 'Un autre export a eu lieu.')
    assert.equal(ui.el.erreur.hidden, false)
    assert.equal(ui.el.succes.hidden, true)
    assert.equal(ui.el.succes.textContent, '')
  })
  test('checking a box asks the plugin for the version, then the title, the tag and the button follow', () => {
    const ui = generated({})
    answers(ui, 'oui')
    ui.el.refonte.checked = true
    ui.el.refonte.onchange()
    assert.deepEqual(plain(ui.sent.filter((m) => m.type === 'choisir-version')), [{ type: 'choisir-version', id: '1:2', keep: false, overhaul: false, sheetMd: false }, { type: 'choisir-version', id: '1:2', keep: false, overhaul: true, sheetMd: false }])
    ui.receive({ type: 'version', id: '1:2', json: '{"x":1}', version: versionOf({ version: '2.0.0', level: 'majeure' }) })
    assert.equal(ui.el.nom.textContent, 'Button')
    assert.equal(ui.el.etiquette.innerHTML, '<span class="etiquette etiquette-supprime">MAJEURE</span>')
    assert.equal(ui.el['val-version'].textContent, '2.0.0')
    assert.equal(ui.el['generer-libelle'].textContent, 'Télécharger le JSON')
    assert.equal(ui.el.json.innerHTML, '{<span class="j-cle">&quot;x&quot;</span>:<span class="j-nombre">1</span>}')
  })
  test('the JSON is colored like in an editor, and its text stays escaped', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { json: '{\n  "nom": "a<b",\n  "n": -1.5e2,\n  "ok": true,\n  "vide": null,\n  "x": "12 true"\n}' }))
    assert.equal(ui.el.json.innerHTML, '{\n  <span class="j-cle">&quot;nom&quot;</span>: <span class="j-texte">&quot;a&lt;b&quot;</span>,\n'
      + '  <span class="j-cle">&quot;n&quot;</span>: <span class="j-nombre">-1.5e2</span>,\n'
      + '  <span class="j-cle">&quot;ok&quot;</span>: <span class="j-mot">true</span>,\n'
      + '  <span class="j-cle">&quot;vide&quot;</span>: <span class="j-mot">null</span>,\n'
      + '  <span class="j-cle">&quot;x&quot;</span>: <span class="j-texte">&quot;12 true&quot;</span>\n}')
  })
  test('the JSON colors change with the dark theme of Figma', () => {
    const { source } = fakeInterface()
    assert.match(source, /:root \{[^}]*--j-cle: #0451a5;[^}]*--j-texte: #a31515;[^}]*--j-nombre: #098658;[^}]*--j-mot: #0000ff;/)
    assert.match(source, /html\.figma-dark \{[^}]*--j-cle: #9cdcfe;[^}]*--j-texte: #ce9178;[^}]*--j-nombre: #b5cea8;[^}]*--j-mot: #569cd6;/)
  })
  test('Cmd+A in the JSON selects only the JSON', () => {
    const ui = fakeInterface()
    let prevents = false
    ui.el.json.onkeydown({ metaKey: true, key: 'a', preventDefault() { prevents = true } })
    assert.equal(prevents, true)
    assert.equal(ui.selection.target, ui.el.json)
  })
  test('Cmd+A in the changelog selects only the changelog', () => {
    const ui = fakeInterface()
    ui.el.changelog.onkeydown({ metaKey: true, key: 'a', preventDefault() {} })
    assert.equal(ui.selection.target, ui.el.changelog)
  })
  test('the Changelog tab follows the JSON tab, on the model of the others', () => {
    const { source } = fakeInterface()
    assert.match(source, /id="onglet-json"[^\n]*>JSON<\/button>\s*<button type="button" class="onglet" role="tab" id="onglet-changelog" data-onglet="changelog" aria-controls="panneau-changelog" aria-selected="false" tabindex="-1">Changelog<\/button>/)
    assert.match(source, /<div class="panneau" id="panneau-changelog" role="tabpanel" aria-labelledby="onglet-changelog" hidden>/)
    assert.match(source, /const TABS = \['corriger', 'json', 'changelog', 'changements'\]/)
    assert.match(source, /id="onglet-changelog"[^\n]*\n\s*<button[^\n]*id="onglet-changements"/)
    assert.match(source, /<pre id="changelog" tabindex="0" role="region" aria-label="Changelog du composant"><\/pre>/)
  })
  test('after the generation, the arrows go through the four tabs and come back to the first', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { issues: [ISSUE] }))
    openTab(ui, 'changelog')
    ui.el.onglets.onkeydown({ key: 'ArrowRight', preventDefault() {} })
    assert.equal(ui.el['panneau-changements'].hidden, false, 'la flèche droite passe à « Changements »')
    ui.el.onglets.onkeydown({ key: 'ArrowRight', preventDefault() {} })
    assert.equal(ui.el['panneau-corriger'].hidden, false, 'depuis le dernier onglet, la flèche droite revient au premier')
  })
  test('after the generation, the changelog is displayed as is, without coloring', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n\n## 1.1.0 - 04/11/26\n' }))
    assert.equal(ui.el['changelog-contenu'].hidden, false)
    assert.equal(ui.el.changelog.textContent, '# Changelog de Button\n\n## 1.1.0 - 04/11/26\n')
    ui.receive({ type: 'version', id: '1:2', json: '{}', version: versionOf({}), changelog: '# Changelog de Button\n' })
    assert.equal(ui.el.changelog.textContent, '# Changelog de Button\n')
  })
  test('the main button downloads the JSON alone, and stores', async () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    ui.sent.length = 0
    ui.el.generer.onclick()
    await new Promise((r) => setTimeout(r, 450))
    assert.deepEqual(ui.downloads.map((t) => t.name), ['button.json'])
    assert.equal(ui.el.succes.textContent, 'JSON téléchargé.')
    assert.deepEqual(ui.sent.map((m) => m.type).filter((t) => t !== 'redimensionner'), ['memoriser'])
  })
  test('in the Changelog tab, the bottom button downloads the changelog of the component alone, without storing', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    ui.sent.length = 0
    openTab(ui, 'changelog')
    ui.el.generer.onclick()
    assert.deepEqual(ui.downloads.map((t) => t.name), ['button-changelog.md'])
    assert.match(ui.downloads[0].href, /text\/markdown/)
    assert.equal(ui.el.succes.textContent, 'Changelog téléchargé.')
    assert.deepEqual(ui.sent.map((m) => m.type).filter((t) => t !== 'redimensionner'), [])
  })
  test('the bottom buttons act on the file of the open tab, and the plugin is called « Canopée, composants »', () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    const labels = () => [ui.el['generer-libelle'].textContent, ui.el['copier-libelle'].textContent]
    assert.deepEqual(labels(), ['Télécharger le JSON', 'Copier le JSON'])
    openTab(ui, 'changelog')
    assert.deepEqual(labels(), ['Télécharger le changelog', 'Copier le changelog'])
    openTab(ui, 'json')
    assert.deepEqual(labels(), ['Télécharger le JSON', 'Copier le JSON'])
    openTab(ui, 'changements')
    assert.deepEqual(labels(), ['Télécharger le JSON', 'Copier le JSON'])
    assert.doesNotMatch(html(), /id="telecharger-changelog"|id="copier-changelog"/)
    assert.equal(JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'manifest.json'), 'utf8')).name, 'Canopée, composants')
  })
  test('Copier le JSON copies the JSON alone, Copier le changelog copies the changelog without storing', async () => {
    const ui = fakeInterface()
    ui.receive(selection)
    ui.receive(Object.assign(sheetWith({}), { changelog: '# Changelog de Button\n' }))
    answers(ui, 'oui')
    ui.sent.length = 0
    await ui.el.copier.onclick()
    assert.deepEqual(ui.copies, ['{}'])
    assert.deepEqual(ui.sent.map((m) => m.type).filter((t) => t !== 'redimensionner'), ['memoriser'])
    ui.sent.length = 0
    openTab(ui, 'changelog')
    await ui.el.copier.onclick()
    assert.deepEqual(ui.copies, ['{}', '# Changelog de Button\n'])
    assert.equal(ui.el.succes.textContent, 'Changelog copié.')
    assert.deepEqual(ui.sent.map((m) => m.type).filter((t) => t !== 'redimensionner'), [])
  })
  test('a new component clears the tag and hides the Version and Design tokens tiles, the rule and the checkboxes', () => {
    const ui = generated({})
    ui.receive({ type: 'selection', id: '9:9', name: 'Badge', variants: 3, properties: 2 })
    assert.equal(ui.el.nom.textContent, 'Badge')
    assert.equal(ui.el.etiquette.innerHTML, '')
    assert.equal(ui.el['tuile-version'].hidden, true)
    assert.equal(ui.el['tuile-tokens'].hidden, true)
    assert.equal(ui.el.filet.hidden, true)
    assert.equal(ui.el.cases.hidden, true)
  })

  // ---------------------------------------------------------- a component modified after the generation
  // The real ui.html plugged into the real code.js, with a fake page that emits nodechange.
  const release = async () => { for (let i = 0; i < 5; i++) await new Promise((r) => setImmediate(r)) }
  async function attach() {
    const doc = buttonDocument()
    const set = doc.nodes[1]
    const pg = page('Composants')
    set.parent = pg
    const other = connect(layer('COMPONENT_SET', 'Autre', { id: 'S:200', componentPropertyDefinitions: {} }, [layer('COMPONENT', 'state=a', { id: 'V:a' })]), pg)
    doc.nodes.push(other)
    doc.clock = fakeClock()
    let ui = null
    let plugin = null
    doc.onMessage = (m) => { if (ui) ui.receive(m) }
    plugin = createFakePlugin(doc)
    ui = fakeInterface((m) => { if (plugin) plugin.send(m) })
    await plugin.send({ type: 'ui-pret' })
    await release()
    const variant = set.children[1]
    const textLayer = variant.children[1]
    const click = async (id) => { ui.el[id].onclick(); await release() }
    return { doc, set, pg, other, ui, p: plugin, clock: doc.clock, variant, textLayer, click }
  }
  const attachAndGenerate = async () => { const b = await attach(); await b.click('generer'); return b }
  const change = (id, extra = {}) => ({ type: 'PROPERTY_CHANGE', origin: 'LOCAL', id, node: { id }, properties: ['fills'], ...extra })
  const event = (...changes) => ({ nodeChanges: changes })
  const isStale = (ui) => !ui.el.perime.hidden
  const staleCount = (p) => p.messages.filter((m) => m.type === 'perime').length

  test('a modified layer of the component: banner, copy disabled, the main button regenerates', async () => {
    const { ui, pg, textLayer } = await attachAndGenerate()
    assert.ok(!isStale(ui))
    assert.equal(ui.el['generer-libelle'].textContent, 'Télécharger le JSON')
    pg.trigger(event(change(textLayer.id)))
    assert.ok(isStale(ui))
    assert.match(ui.source, /<p class="bandeau info" id="perime" hidden>Le composant a changé depuis la génération de ce JSON\.<\/p>/)
    assert.equal(ui.el.copier.disabled, true)
    assert.equal(ui.el.generer.disabled, false)
    assert.equal(ui.el['generer-libelle'].textContent, 'Générer de nouveau')
    assert.equal(ui.el['ico-generer'].hidden, false)
    assert.equal(ui.el['ico-telecharger'].hidden, true)
  })
  test('a click on copy or on the button does nothing but regenerate when the JSON is stale', async () => {
    const { ui, pg, p, textLayer } = await attachAndGenerate()
    pg.trigger(event(change(textLayer.id)))
    await ui.el.copier.onclick()
    assert.deepEqual(ui.copies, [])
    await ui.el.generer.onclick()
    await release()
    assert.equal(ui.downloads.length, 0)
    assert.equal(p.messages.filter((m) => m.type === 'memoriser').length, 0)
  })
  test('after a new generation, the banner disappears and the export comes back', async () => {
    const { ui, pg, click, textLayer } = await attachAndGenerate()
    pg.trigger(event(change(textLayer.id)))
    await click('generer')
    assert.ok(!isStale(ui))
    assert.equal(ui.el.copier.disabled, false)
    assert.equal(ui.el['generer-libelle'].textContent, 'Télécharger le JSON')
    assert.equal(ui.el['ico-telecharger'].hidden, false)
    await click('generer')
    assert.equal(ui.downloads.length, 1)
  })
  test('a change outside the component warns of nothing', async () => {
    const { ui, pg, p } = await attachAndGenerate()
    const before = staleCount(p)
    pg.trigger(event(change('X:999', { node: { id: 'X:999', parent: { id: 'P:1', parent: null } } }), { type: 'CREATE', id: 'X:998', node: { id: 'X:998', parent: { id: 'X:999', parent: null } } }))
    assert.equal(staleCount(p), before)
    assert.ok(!isStale(ui))
  })
  test('moving the root does not count, moving a variant counts', async () => {
    const { ui, pg, set } = await attachAndGenerate()
    pg.trigger(event(change(set.id, { properties: ['x', 'y'] }), change(set.id, { properties: ['relativeTransform'] })))
    assert.ok(!isStale(ui))
    pg.trigger(event(change(set.id, { properties: ['x', 'name'] })))
    assert.ok(isStale(ui), 'la racine renommée en même temps qu\'elle bouge est modifiée')
    const b = await attachAndGenerate()
    b.pg.trigger(event(change(b.variant.id, { properties: ['x', 'y'] })))
    assert.ok(isStale(b.ui))
  })
  test('a deleted layer, a created layer and an instance layer make the JSON stale', async () => {
    const scenario = {
      deleted: (b) => ({ type: 'DELETE', id: b.textLayer.id, node: { id: b.textLayer.id, removed: true, get parent() { throw new Error('nœud supprimé') } } }),
      created: (b) => ({ type: 'CREATE', id: 'N:1', node: { id: 'N:1', parent: b.variant } }),
      'd\'instance': (b) => ({ type: 'PROPERTY_CHANGE', id: 'I' + b.variant.children[0].id + ';55:1', node: { id: 'I' + b.variant.children[0].id + ';55:1' }, properties: ['fills'] })
    }
    for (const [name, factory] of Object.entries(scenario)) {
      const b = await attachAndGenerate()
      b.pg.trigger(event(factory(b)))
      assert.ok(isStale(b.ui), name)
    }
  })
  test('a layer created outside the component, or whose parent is unreadable, does not count', async () => {
    const { ui, pg } = await attachAndGenerate()
    pg.trigger(event({ type: 'DELETE', id: 'X:5', node: { id: 'X:5', removed: true, get parent() { throw new Error('nœud supprimé') } } }))
    assert.ok(!isStale(ui))
  })
  test('a change during the generation makes the JSON stale as soon as the sheet arrives', async () => {
    const b = await attach()
    const read = b.p.figma.variables.getVariableByIdAsync
    let done = false
    b.p.figma.variables.getVariableByIdAsync = async (id) => {
      if (!done) { done = true; b.pg.trigger(event(change(b.textLayer.id))) }
      return read(id)
    }
    await b.click('generer')
    assert.ok(done)
    assert.ok(isStale(b.ui))
    assert.equal(b.ui.el['generer-libelle'].textContent, 'Générer de nouveau')
    assert.equal(b.ui.el.copier.disabled, true)
  })
  test('switching the selection to another component removes the listener', async () => {
    const { ui, pg, p, other, textLayer } = await attachAndGenerate()
    assert.equal(pg.listeners.length, 1)
    p.figma.currentPage.selection = [other]
    await p.triggerFigma('selectionchange')
    await release()
    assert.equal(pg.listeners.length, 0)
    assert.equal(pg.offCalls, 1)
    const before = staleCount(p)
    pg.trigger(event(change(textLayer.id)))
    assert.equal(staleCount(p), before)
    assert.ok(!isStale(ui))
  })
  test('a click on a layer of the component keeps the watching', async () => {
    const { pg, p, textLayer } = await attachAndGenerate()
    p.figma.currentPage.selection = [textLayer]
    await p.triggerFigma('selectionchange')
    await release()
    assert.equal(pg.listeners.length, 1)
  })
  test('several generations leave a single listener', async () => {
    const { pg, click, ui } = await attachAndGenerate()
    await click('regenerer')
    await click('regenerer')
    assert.equal(pg.listeners.length, 1)
    assert.ok(!isStale(ui))
  })
  test('exporting a stale JSON is refused, without writing anything in the file', async () => {
    const { pg, p, set, textLayer } = await attachAndGenerate()
    const written = []
    const write = set.setSharedPluginData
    set.setSharedPluginData = (...args) => { written.push(args); return write(...args) }
    pg.trigger(event(change(textLayer.id)))
    await p.send({ type: 'memoriser', id: set.id })
    assert.deepEqual(plain(p.lastMessage()), { type: 'erreur', message: 'Le composant a changé depuis cette génération. Rien n\'a été enregistré : générer de nouveau le JSON, puis l\'exporter.' })
    assert.deepEqual(written, [])
  })
  test('an unmodified component exports as before', async () => {
    const { p, set, ui, click } = await attachAndGenerate()
    const written = []
    const write = set.setSharedPluginData
    set.setSharedPluginData = (...args) => { written.push(args); return write(...args) }
    await click('generer')
    assert.ok(written.length > 0)
    assert.ok(!isStale(ui))
    assert.equal(p.messages.filter((m) => m.type === 'erreur').length, 0)
  })
  test('a rename and an added variant update the card, without clearing the displayed error', async () => {
    const b = await attachAndGenerate()
    b.ui.receive({ type: 'erreur', message: 'Une erreur à garder.' })
    assert.equal(b.ui.el.nom.textContent, 'Button')
    assert.match(b.ui.el.compteurs.innerHTML, /<b>2<\/b> variantes/)
    b.set.name = 'Bouton principal'
    const next = connect(layer('COMPONENT', 'state=focus, hierarchy=primary', { id: 'V:focus' }), b.set)
    b.set.children.push(next)
    b.pg.trigger(event(change(b.set.id, { properties: ['name'] }), { type: 'CREATE', id: 'V:focus', node: next }))
    assert.equal(b.ui.el.nom.textContent, 'Button', 'la carte attend le délai')
    b.clock.advance()
    assert.equal(b.ui.el.nom.textContent, 'Bouton principal')
    assert.match(b.ui.el.compteurs.innerHTML, /<b>3<\/b> variantes/)
    assert.equal(b.ui.el.erreur.textContent, 'Une erreur à garder.')
    assert.equal(b.ui.el.erreur.hidden, false)
    assert.ok(isStale(b.ui))
  })
  test('several close changes schedule only one refresh of the card', async () => {
    const b = await attachAndGenerate()
    for (let i = 0; i < 5; i++) b.pg.trigger(event(change(b.textLayer.id)))
    assert.equal(b.clock.pending(), 1)
    const before = b.p.messages.filter((m) => m.type === 'carte').length
    b.clock.advance()
    assert.equal(b.p.messages.filter((m) => m.type === 'carte').length, before + 1)
  })
  test('a rename done before the generation shows in the card', async () => {
    const b = await attach()
    b.set.name = 'Bouton renommé'
    await b.click('generer')
    assert.equal(b.ui.el.nom.textContent, 'Bouton renommé')
  })
  test('a perime message from another component, or before any generation, is ignored', async () => {
    const b = await attach()
    b.ui.receive({ type: 'perime', id: 'S:100' })
    assert.ok(!isStale(b.ui))
    await b.click('generer')
    b.ui.receive({ type: 'perime', id: 'S:999' })
    assert.ok(!isStale(b.ui))
  })
})

// ------------------------------------------------------------ the bridge
describe('The bridge', () => {
  test('the generated script starts with the id constant and has no interface part', () => {
    const code = bridgeCode()
    assert.match(code, /const ID_COMPONENT_SET = "S:100"/)
    assert.ok(!code.includes('figma.showUI'))
    assert.ok(!code.includes('figma.ui'))
  })
  test('the committed bridge script is the one that code.js generates', () => {
    const committedText = fs.readFileSync(path.join(SCRIPTS, 'extraire.bridge.js'), 'utf8')
    const id = (committedText.match(/^const ID_COMPONENT_SET = "(.*)"$/m) || [])[1]
    assert.ok(id, 'id introuvable dans scripts/extraire.bridge.js')
    const regenerate = path.join(tempFolder('bridge'), 'regenere.bridge.js')
    execFileSync('node', [path.join(SCRIPTS, 'construire-bridge.mjs'), '--id', id, '--sortie', regenerate], { stdio: 'pipe' })
    assert.ok(fs.readFileSync(regenerate, 'utf8') === committedText, 'scripts/extraire.bridge.js est périmé. Lancer : node scripts/construire-bridge.mjs --id ' + id)
  })
  test('pasted into figma_execute, it returns exactly the JSON of the plugin', async () => {
    const { text } = await button()
    assert.equal(await runBridge(buttonDocument(), bridgeCode()), text)
  })
  test('unknown id: clear error', async () => {
    const unknown = bridgeCode().replace('"S:100"', '"X:0"')
    await assert.rejects(() => runBridge(buttonDocument(), unknown), /Aucun noeud/)
  })
})

// ------------------------------------------------------------ the rebuild
describe('The rebuild', () => {
  const DEFAULT_FILE = 'UWk4fT45i82ESNhGaAnj6p'
  const DEFAULT_PAGE = 'Test - Components AI-ready'

  test('the rebuild script contains the core rules, and no marker anymore', () => {
    const s = returnScript()
    for (const f of ['function matches(', 'function effectiveStyles(', 'function canonical(']) assert.ok(s.includes(f), 'absent : ' + f)
    for (const m of ['__REGLES__', '__FICHE__', '__CONFIG__']) assert.ok(!s.includes(m), 'marqueur restant : ' + m)
    assert.ok(!s.includes('DEBUT REGLES'))
    const AsyncFunction = Object.getPrototypeOf(async function () {}).constructor
    new AsyncFunction('figma', s)
  })
  test('the rebuild: file, page, name and mark come from the configuration, with default values', () => {
    const s = returnScript()
    assert.match(s, /"etape":"tout"\}/)
    assert.ok(s.includes('const FILE_KEY = CONFIG.file || \'' + DEFAULT_FILE + '\''))
    const withOptions = buildReturn(['--fichier', 'F1', '--page', 'Ma page', '--nom', 'IA/Button'])
    assert.match(withOptions, /"file":"F1","page":"Ma page","name":"IA\/Button"/)
  })
  test('a file other than the one in the configuration is refused, with a clear error', async () => {
    await assert.rejects(
      () => runBridge({ fileKey: 'AUTRE', pages: [page(DEFAULT_PAGE)] }, returnScript()),
      new RegExp('Fichier refusé : AUTRE \\(attendu ' + DEFAULT_FILE + '\\)')
    )
    await assert.rejects(
      () => runBridge({ fileKey: DEFAULT_FILE, pages: [page(DEFAULT_PAGE)] }, buildReturn(['--fichier', 'F1'])),
      /Fichier refusé : UWk4fT45i82ESNhGaAnj6p \(attendu F1\)/
    )
  })
  test('the file of the configuration passes the check, the missing page is reported afterwards', async () => {
    await assert.rejects(
      () => runBridge({ fileKey: 'F1', pages: [page('Autre page')] }, buildReturn(['--fichier', 'F1', '--page', 'Ma page'])),
      /Page introuvable : Ma page/
    )
  })
  test('the supprimer step only removes the named set and the components that carry its mark', async () => {
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
    assert.deepEqual(report.supprimes, ['COMPONENT_SET Retour/Button', 'COMPONENT state=default', 'COMPONENT state=hover'])
    assert.deepEqual(p.children.map((n) => n.type + ' ' + n.name + ' ' + n.getPluginData('marque')), [
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
  test('two simultaneous extractions share nothing: each gives the expected JSON', async () => {
    const { text } = await button()
    const doc = buttonDocument()
    const p = createFakePlugin(doc)
    const [e1, e2] = await Promise.all([p.__test.extract(doc.selection[0]), p.__test.extract(doc.selection[0])])
    assert.equal(p.__test.serialize(e1), text)
    assert.equal(p.__test.serialize(e2), text)
  })
})

// ------------------------------------------------------------ the templates
describe('A template, recognized by its page in the library', () => {
  const TEMPLATE_LEVELS = [['Templates - Blocks', 'block', 'Template de bloc.'], ['Templates - Sections', 'section', 'Template de section.'], ['Templates - Pages', 'page', 'Template de page.']]
  const inPage = (pageName, fields = {}) => {
    const d = deviationsDocument()
    Object.assign(d.selection[0], { name: 'Loader', parent: { type: 'FRAME', name: 'Loader', parent: { type: 'PAGE', name: pageName } } }, fields)
    return d
  }
  const templateIssues = (sheet) => sheet.issues.filter((i) => i.where === 'meta.templateLevel')

  for (const [pageName, level, mention] of TEMPLATE_LEVELS) {
    test(pageName + ' : niveau ' + level + ', sans défaut quand la description commence par la mention', async () => {
      const { sheet } = await exportSheet(inPage(pageName, { description: mention + ' Le Loader indique un chargement.' }))
      assert.equal(sheet.meta.templateLevel, level)
      assert.deepEqual(templateIssues(sheet), [])
    })
  }
  test('the level follows the type and comes before figmaKey', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Blocks', { description: 'Template de bloc.' }))
    assert.deepEqual(Object.keys(sheet.meta), ['name', 'version', 'tokensVersion', 'type', 'templateLevel', 'figmaKey', 'library', 'documentationLinks'])
  })
  test('a template has the type template, without extends', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Blocks', { description: 'Template de bloc.' }))
    assert.equal(sheet.meta.type, 'template')
    assert.ok(!('extends' in sheet.meta))
  })
  test('a template built on another component has the type template and keeps extends', async () => {
    const d = inPage('Templates - Blocks', { description: 'Template de bloc.' })
    const base = connect(layer('COMPONENT', 'Spinner', { id: 'C:9', key: 'KEY-SPINNER', width: 200, height: 200 }, [layer('TEXT', 'label', { characters: 'x', autoRename: false })]))
    const variant = d.selection[0].children[0]
    const instance = connect(layer('INSTANCE', 'loader', { mainComponent: base, isExposedInstance: true, componentProperties: {} }), variant)
    variant.children.push(instance)
    const { sheet } = await exportSheet(d)
    assert.equal(sheet.meta.type, 'template')
    assert.equal(sheet.meta.extends, 'Spinner')
  })
  test('a description without a mention is reported, and the level stays written', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Sections', { description: 'Le Header assemble un logo et un menu.' }))
    assert.equal(sheet.meta.templateLevel, 'section')
    assert.deepEqual(templateIssues(sheet).map((i) => [i.level, i.rule, i.message]), [['warning', 'template-description', 'La description de ce template doit commencer par « Template de section. ».']])
  })
  test('a mention placed further in the description does not count', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Blocks', { description: 'Le Loader. Template de bloc.' }))
    assert.equal(issuesFor(sheet, 'template-description').length, 1)
  })
  test('the mention of another level is reported', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Pages', { description: 'Template de bloc. Un écran complet.' }))
    assert.equal(sheet.meta.templateLevel, 'page')
    assert.match(issuesFor(sheet, 'template-description')[0].message, /Template de page\./)
  })
  test('a mention outside the template pages is reported, without a level in the JSON', async () => {
    const { sheet } = await exportSheet(inPage('Feedback', { description: 'Template de section. Un en-tête.' }))
    assert.ok(!('templateLevel' in sheet.meta))
    assert.equal(sheet.meta.type, 'atom')
    assert.deepEqual(templateIssues(sheet).map((i) => [i.rule, i.message]), [['template-page', 'Cette description annonce un template : ranger le composant dans la page Templates - Sections.']])
  })
  test('an ordinary component has neither a level nor a template issue', async () => {
    const { sheet } = await exportSheet(inPage('Actions', { name: 'Button', description: 'Le Button déclenche une action.' }))
    assert.ok(!('templateLevel' in sheet.meta))
    assert.deepEqual(templateIssues(sheet), [])
  })
  test('a component without a readable page is not a template', async () => {
    const { sheet } = await button()
    assert.ok(!('templateLevel' in sheet.meta))
    assert.deepEqual(templateIssues(sheet), [])
  })
  test('a sub-component stored with the templates is not a template', async () => {
    const { sheet } = await exportSheet(inPage('Templates - Sections', { name: '_HeaderSkipLinks', description: 'Les liens d\'évitement du Header.' }))
    assert.ok(!('templateLevel' in sheet.meta))
    assert.deepEqual(templateIssues(sheet), [])
  })
  test('the issue reads « Template » and designates the component', async () => {
    const d = inPage('Templates - Blocks', { description: 'Sans mention.' })
    const { plugin } = await exportSheet(d)
    assert.equal(plugin.__test.readableLocation('meta.templateLevel'), 'Template')
    const detail = await plugin.__test.extractDetail(d.selection[0])
    const rank = detail.sheet.issues.findIndex((i) => i.rule === 'template-description')
    assert.deepEqual(plain(detail.locations[rank].ids), ['S:200'])
  })
  test('changing the level gives a patch and a changelog line', async () => {
    const { plugin } = await button()
    const previous = { meta: { name: 'Header', templateLevel: 'block' } }
    const next = { meta: { name: 'Header', templateLevel: 'section' } }
    assert.equal(plugin.__test.changeLevel(previous, next), 'correctif')
    assert.ok(plain(plugin.__test.classifyChanges(previous, next)).some((c) => c.category === 'modifie' && c.text === 'Niveau de template : block → section'))
  })
  test('the pages and mentions of code.js follow 02-composants.md', async () => {
    const { TEMPLATE_PAGES } = (await button()).plugin.__test
    assert.deepEqual(plain(TEMPLATE_PAGES).map((t) => [t.page, t.level, t.mention]), TEMPLATE_LEVELS)
    const doc = fs.readFileSync(path.join(DOCS, 'regles', '02-composants.md'), 'utf8')
    for (const t of TEMPLATE_PAGES) {
      assert.ok(doc.includes(t.page), t.page + ' absent de 02-composants.md')
      assert.ok(doc.includes('« ' + t.mention + ' »'), t.mention + ' absent de 02-composants.md')
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
  const sheet = (o = {}) => [
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
  const check = (md, meta = {}) => {
    const d = tempFolder('verifier-fiche')
    fs.copyFileSync(OUTLINE, path.join(d, 'trame-fiche-composant.md'))
    fs.mkdirSync(path.join(d, 'button'))
    fs.writeFileSync(path.join(d, 'button', 'button.md'), md)
    fs.writeFileSync(path.join(d, 'button', 'button.json'), JSON.stringify({ ...MINIMAL_JSON, meta: { ...MINIMAL_JSON.meta, ...meta } }))
    const r = spawnSync('node', [path.join(SCRIPTS, 'verifier-fiche.mjs'), path.join(d, 'button', 'button.md'), path.join(d, 'button', 'button.json')], { encoding: 'utf8' })
    return { code: r.status, output: r.stdout }
  }

  test('a correct sheet exits with 0', () => {
    const r = check(sheet())
    assert.equal(r.code, 0, r.output)
    assert.match(r.output, /0 erreur\(s\)/)
  })
  test('a known template level passes, an unknown level exits with 1', () => {
    assert.equal(check(sheet(), { type: 'template', templateLevel: 'block' }).code, 0)
    const r = check(sheet(), { type: 'template', templateLevel: 'bloc' })
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}Niveau de template inconnu : bloc/)
  })
  test('the template type and the level go together, otherwise exit 1', () => {
    for (const meta of [{ templateLevel: 'block' }, { type: 'atom', templateLevel: 'block' }, { type: 'template' }]) {
      const r = check(sheet(), meta)
      assert.equal(r.code, 1, JSON.stringify(meta))
      assert.match(r.output, /ERREUR {4}Un template a le type template et un templateLevel/)
    }
  })
  test('a property unknown to the JSON exits with 1, with the mention at fault', () => {
    const r = check(sheet({ mention: 'couleur=rouge' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}Propriété inconnue du JSON : couleur=rouge/)
  })
  test('a value unknown to the JSON exits with 1, with the known values', () => {
    const r = check(sheet({ mention: 'size=xl' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /Valeur inconnue du JSON : size=xl \(valeurs : md, lg\)/)
  })
  test('an absent instruction for the AI exits with 1', () => {
    const r = check(sheet({ instruction: 'Une phrase qui n\'est pas la consigne.' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}La consigne pour l'IA ne ferme pas la fiche, ou diffère de la trame/)
  })
  test('the outline starts with the versioned title and the design tokens line', () => {
    const outline = fs.readFileSync(OUTLINE, 'utf8')
    assert.match(outline, /^# <Composant> <version>$/m)
    assert.match(outline, /^Utilise les design tokens de Canopée <version des design tokens> ou d'une version plus récente\.$/m)
    assert.match(outline, /\*\*1\.2\.0 - 04\/11\/26\.\*\*/)
  })
  test('a title without the version of the JSON exits with 1', () => {
    const r = check(sheet({ title: '# Button' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}Le titre de la fiche n'est pas « # Button 1\.2\.0 »/)
    assert.equal(check(sheet({ title: '# Button 1.1.0' })).code, 1)
  })
  test('an instruction placed elsewhere than at the end of the sheet exits with 1', () => {
    const block = '## Pour l\'IA qui lit cette fiche\n\n' + instruction + '\n'
    const md = sheet().replace(block, '').replace('## Décisions', block + '\n## Décisions')
    const r = check(md)
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}La consigne pour l'IA ne ferme pas la fiche/)
  })
  test('the design tokens line absent, or of another version, exits with 1', () => {
    for (const tokens of ['', 'Utilise les design tokens de Canopée 2.1.0 ou d\'une version plus récente.', 'Utilise les design tokens de Canopée 2.0.0.']) {
      const r = check(sheet({ tokens }))
      assert.equal(r.code, 1, tokens)
      assert.match(r.output, /ERREUR {4}La ligne des design tokens ne suit pas le titre : « Utilise les design tokens de Canopée 2\.0\.0 ou d'une version plus récente\. »/)
    }
  })
  test('a JSON without a design tokens version exits with 1', () => {
    const r = check(sheet(), { tokensVersion: null })
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}JSON sans version des design tokens/)
  })
  test('a JSON without a version exits with 1, without an absurd title', () => {
    const r = check(sheet(), { version: null })
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}JSON sans version$/m)
    assert.ok(!/Le titre de la fiche/.test(r.output))
  })
  test('a decision without a version and date at the start exits with 1', () => {
    for (const decision of ['- Le libellé reste sur une seule ligne.', '- **1.1.0.** Le libellé.', '- **1.1.0, 2026-11-04.** Le libellé.', '- **1.1.0 - 04/11/2026.** Le libellé.']) {
      const r = check(sheet({ decision }))
      assert.equal(r.code, 1, decision)
      assert.match(r.output, /ERREUR {4}Décision sans « \*\*X\.Y\.Z - JJ\/MM\/AA\.\*\* » en tête/)
    }
  })
  test('a decision dated from a version newer than the JSON exits with 1', () => {
    const r = check(sheet({ decision: '- **1.3.0 - 04/11/26.** Le libellé.' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}Décision datée d'une version plus récente que le JSON \(1\.2\.0\)/)
    assert.equal(check(sheet({ decision: '- **1.2.0 - 04/11/26.** Le libellé.' })).code, 0)
  })
  test('a Décisions section that says « Aucun » exits with 0', () => {
    assert.equal(check(sheet({ decision: 'Aucun' })).code, 0)
  })
  test('an open point without « En attendant : » exits with 1', () => {
    const r = check(sheet({ openPoint: '- Faut-il un état chargé ?' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}Point ouvert sans « En attendant : » : Faut-il un état chargé \?/)
  })
  test('a documentation link of the JSON absent from the Code section exits with 1', () => {
    const r = check(sheet({ link: 'https://exemple.test/autre-page' }))
    assert.equal(r.code, 1)
    assert.match(r.output, /ERREUR {4}Lien de documentation du JSON absent de la rubrique Code : https:\/\/exemple\.test\/storybook/)
  })
  test('a variant value without a rule is a remark, not an error', () => {
    const r = check(sheet().replace('### size=lg', '### autre titre'))
    assert.equal(r.code, 0, r.output)
    assert.match(r.output, /REMARQUE {2}Pas de règle pour size=lg/)
  })
})

// ------------------------------------------------------------ the versions
describe('The change level and the next version', () => {
  const tools = async () => (await button()).plugin.__test
  // an editable copy of the real Button
  const copy = () => plain(real03())

  test('nothing changed: null', async () => {
    const { changeLevel } = await tools()
    assert.equal(changeLevel(real03(), copy()), null)
  })
  test('do not count: position of the variants, issues, tool, format, meta.version, meta.tokensVersion', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    for (const v of b.variants) v.position = [v.position[0] + 100, v.position[1] + 100]
    b.issues = []
    b._tool = 'canopee-fiches-composants 9.9.9'
    b.formatVersion = '0.9'
    b.meta.version = '3.0.0'
    b.meta.tokensVersion = '4.0.0'
    assert.equal(changeLevel(real03(), b), null)
  })
  test('property value added: minor', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    b.api.props.hierarchy.enum.push('quaternary')
    assert.equal(changeLevel(real03(), b), 'mineure')
  })
  test('property added, removed, renamed, or default value changed: minor', async () => {
    const { changeLevel } = await tools()
    const added = copy(); added.api.props.nouvelle = { type: 'boolean', default: false }
    const removed = copy(); delete removed.api.props.disabled
    const renamed = copy(); renamed.api.props = Object.fromEntries(Object.entries(renamed.api.props).map(([k, v]) => [k === 'colorScheme' ? 'scheme' : k, v]))
    const baseVariant = copy(); baseVariant.api.props.hierarchy.default = 'secondary'
    for (const b of [added, removed, renamed, baseVariant]) assert.equal(changeLevel(real03(), b), 'mineure')
  })
  test('properties reordered: minor, as the Changements tab says', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    const { showRightIcon, showLeftIcon, _theme } = b.api.props
    delete b.api.props.showRightIcon; delete b.api.props.showLeftIcon; delete b.api.props._theme
    Object.assign(b.api.props, { showLeftIcon, showRightIcon, _theme })
    assert.equal(changeLevel(real03(), b), 'mineure')
  })
  test('slot, layers, variant added or removed: minor', async () => {
    const { changeLevel } = await tools()
    const slot = copy(); slot.structure.slots.label.default.text = 'Autre'
    const layers = copy(); layers.structure.trees[0].tree.pop()
    const removed = copy(); removed.variants = removed.variants.slice(1)
    const added = copy(); added.variants.push({ values: { ...added.variants[0].values, state: 'inconnu' }, position: [0, 0] })
    for (const b of [slot, layers, removed, added]) assert.equal(changeLevel(real03(), b), 'mineure')
  })
  test('variants in another order, without a value added or removed: patch', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    b.variants.reverse()
    assert.equal(changeLevel(real03(), b), 'correctif')
  })
  test('token, style, text style, component, mode, documentation link: patch', async () => {
    const { changeLevel } = await tools()
    const token = copy(); token.tokens['color/blue/900'] = { library: null, key: 'k' }
    const style = copy(); style.styles.default.root.background = { token: 'color/blue/800' }
    const text = copy(); text.textStyles['label/2/semibold'] = { library: null, key: 'k' }
    const component = copy(); component.components.Spinner = { library: null, key: 'k' }
    const mode = copy(); mode.modeCollections.Theme = { library: null, key: 'k' }
    const alias = copy(); alias.meta.documentationLinks = ['https://exemple.test/autre']
    for (const b of [token, style, text, component, mode, alias]) assert.equal(changeLevel(real03(), b), 'correctif')
  })
  test('a minor level change wins over a patch', async () => {
    const { changeLevel } = await tools()
    const b = copy()
    b.tokens['color/blue/900'] = { library: null, key: 'k' }
    b.api.props.hierarchy.enum.push('quaternary')
    assert.equal(changeLevel(real03(), b), 'mineure')
  })
  test('nextVersion: major, minor, patch', async () => {
    const { nextVersion } = await tools()
    assert.equal(nextVersion('1.2.3', 'majeure'), '2.0.0')
    assert.equal(nextVersion('1.2.3', 'mineure'), '1.3.0')
    assert.equal(nextVersion('1.2.3', 'correctif'), '1.2.4')
    assert.equal(nextVersion('1.9.9', 'mineure'), '1.10.0')
    assert.equal(nextVersion('1.0.0', 'inconnu'), null)
    assert.equal(nextVersion('pas une version', 'mineure'), null)
  })
  test('chooseVersion: first version, detected level, checkboxes, nothing changed', async () => {
    const { chooseVersion, analyzeVersion } = await tools()
    const first = analyzeVersion(null, real03())
    assert.deepEqual(plain(first), { first: true, current: null, level: null })
    assert.equal(chooseVersion(first, {}).version, '1.0.0')
    assert.equal(chooseVersion(first, { overhaul: true }).version, '1.0.0', 'pas de majeure à la première version')
    const base = copy(); base.meta.version = '1.1.0'
    const b = copy(); b.api.props.hierarchy.enum.push('quaternary')
    const minor = analyzeVersion(base, b)
    assert.deepEqual(plain(chooseVersion(minor, {})), { version: '1.2.0', level: 'mineure', first: false, none: false })
    assert.equal(chooseVersion(minor, { overhaul: true }).version, '2.0.0')
    const nothing = analyzeVersion(base, copy())
    assert.deepEqual(plain(chooseVersion(nothing, {})), { version: '1.1.0', level: null, first: false, none: true })
    assert.deepEqual(plain(chooseVersion(nothing, { sheetMd: true })), { version: '1.1.1', level: 'correctif', first: false, none: false })
    assert.equal(chooseVersion(nothing, { overhaul: true, sheetMd: true }).version, '2.0.0')
    assert.deepEqual(plain(chooseVersion(minor, { keep: true })), { version: '1.1.0', level: null, first: false, none: false, kept: true })
    assert.equal(chooseVersion(minor, { keep: true, overhaul: true }).version, '1.1.0', 'garder l\'emporte')
    assert.equal(chooseVersion(first, { keep: true }).version, '1.0.0')
    assert.equal(analyzeVersion(copy(), copy()).current, '1.0.0', 'une base sans version repart de 1.0.0')
  })
})

describe('The version level and the lines of the changelog', () => {
  const tools = async () => (await button()).plugin.__test
  const copy = () => plain(real03())
  // the text lines (the style groups have no text), with their category
  const lines = async (a, b) => plain((await tools()).classifyChanges(a, b)).filter((c) => c.title === undefined).map((c) => c.category + ' : ' + c.text)

  test('invariant: when the level is not null, the changelog has at least one line', async () => {
    const { changeLevel, changelogEntry } = await tools()
    const modifications = {
      'valeur de propriété ajoutée': (b) => b.api.props.hierarchy.enum.push('quaternary'),
      'valeurs de propriété dans un autre ordre': (b) => b.api.props.hierarchy.enum.reverse(),
      'type de propriété changé': (b) => { b.api.props.disabled.type = 'boolean' },
      'propriété rebranchée': (b) => { b.api.props.disabled.controls = [{ layer: 'autre', attribute: 'visible' }] },
      'slot rebranché': (b) => { b.structure.slots.label.as = 'title' },
      'variantes dans un autre ordre': (b) => b.variants.reverse(),
      'variante retirée': (b) => { b.variants = b.variants.slice(1) },
      'style de texte ajouté': (b) => { b.textStyles['label/2/semibold'] = { library: null, key: 'k' } },
      'composant imbriqué retiré': (b) => { delete b.components.account_balance },
      'collection de modes ajoutée': (b) => { b.modeCollections.Theme = { library: null, key: 'k' } },
      'lien de documentation': (b) => { b.meta.documentationLinks = ['https://exemple.test/autre'] },
      'composant renommé': (b) => { b.meta.name = 'Bouton' },
      'style d\'une variante': (b) => { b.styles.default.root.background = { token: 'color/blue/800' } },
      'calques': (b) => { b.structure.trees[0].tree.pop() },
      'champ racine inconnu': (b) => { b.champInconnu = { nouveau: true } },
      'champ inconnu dans meta': (b) => { b.meta.champInconnu = 'x' }
    }
    assert.ok(Object.keys(modifications).length >= 10)
    for (const [name, modify] of Object.entries(modifications)) {
      const b = copy()
      modify(b)
      const level = changeLevel(real03(), b)
      assert.notEqual(level, null, name + ' : le niveau devrait détecter la modification')
      const e = plain(changelogEntry(real03(), b))
      assert.ok(e.ajoute.length + e.modifie.length + e.retire.length > 0, name + ' : niveau ' + level + ' sans ligne de changelog')
    }
    // the unknown field does raise the version, and goes through the safety net
    const b = copy(); b.champInconnu = 1
    assert.equal(changeLevel(real03(), b), 'correctif')
    assert.deepEqual(plain(changelogEntry(real03(), b)).modifie, ['Autre changement dans le JSON'])
  })
  test('the library, the key of the component, the key and the library of the indexes do not change the level', async () => {
    const { changeLevel } = await tools()
    const meta = copy(); meta.meta.library = 'Autre librairie'; meta.meta.figmaKey = 'autre-cle'
    const index = copy()
    for (const field of ['tokens', 'textStyles', 'components', 'modeCollections']) {
      for (const entry of Object.values(index[field])) { entry.key = 'autre-' + entry.key; entry.library = 'Autre librairie' }
    }
    const readToken = copy(); readToken.tokens['color/blue/700'].key = 'autre'; readToken.tokens['color/blue/700'].library = 'Autre'
    for (const b of [meta, index, readToken]) assert.equal(changeLevel(real03(), b), null)
  })
  test('two groupings of the same effective styles: null level, and a real style change is seen', async () => {
    const { changeLevel } = await tools()
    const variants = [{ values: { size: 'a' } }, { values: { size: 'b' } }]
    const sheet = (styles) => ({ variants, styles })
    const onA = sheet({ default: { when: { size: 'a' }, root: { background: { token: 'x' } } }, overrides: [{ when: { size: 'b' }, styles: { root: { background: { token: 'y' } } } }] })
    const onB = sheet({ default: { when: { size: 'b' }, root: { background: { token: 'y' } } }, overrides: [{ when: { size: 'a' }, styles: { root: { background: { token: 'x' } } } }] })
    assert.equal(changeLevel(onA, onB), null)
    assert.equal(changeLevel(onB, onA), null)
    const other = sheet({ default: { when: { size: 'a' }, root: { background: { token: 'x' } } }, overrides: [{ when: { size: 'b' }, styles: { root: { background: { token: 'z' } } } }] })
    assert.equal(changeLevel(onA, other), 'correctif')
    // the order of the variants does not lose the link between a variant and its styles
    const inverse = { variants: variants.slice().reverse(), styles: onA.styles }
    assert.equal(changeLevel(onA, inverse), 'correctif', 'l\'ordre seul est un correctif, les styles suivent leur variante')
  })
  test('Propriété <k>, ordre des valeurs modifié', async () => {
    const b = copy(); b.api.props.hierarchy.enum.reverse()
    assert.deepEqual(await lines(real03(), b), ['modifie : Propriété hierarchy, ordre des valeurs modifié'])
  })
  test('Propriété <k> modifiée: only when no other line quotes it', async () => {
    const single = copy(); single.api.props.disabled.type = 'boolean'
    assert.deepEqual(await lines(real03(), single), ['modifie : Propriété disabled modifiée'])
    const quoted = copy(); quoted.api.props.disabled.default = 'true'; quoted.api.props.disabled.type = 'boolean'
    assert.deepEqual(await lines(real03(), quoted), ['modifie : Propriété disabled, valeur par défaut : false → true'])
  })
  test('Slot <k> modifié: only when no other line quotes it', async () => {
    const only = copy(); only.structure.slots.label.as = 'title'
    assert.deepEqual(await lines(real03(), only), ['modifie : Slot label modifié'])
    const quotes = copy(); quotes.structure.slots.label.as = 'title'; quotes.structure.slots.label.default.text = 'Autre'
    assert.deepEqual(await lines(real03(), quotes), ['modifie : Slot label, texte par défaut : Label → Autre'])
  })
  test('Ordre des variantes modifié', async () => {
    const b = copy(); b.variants.reverse()
    assert.deepEqual(await lines(real03(), b), ['modifie : Ordre des variantes modifié'])
    const removed = copy(); removed.variants = removed.variants.slice(1)
    assert.ok(!(await lines(real03(), removed)).some((l) => /Ordre des variantes/.test(l)), 'une variante retirée ne change pas l\'ordre des autres')
  })
  test('text styles, nested components and mode collections: additions and removals, singular and plural', async () => {
    const one = copy()
    one.textStyles['label/2/semibold'] = { library: null, key: 'k' }
    one.components.Spinner = { library: null, key: 'k' }
    one.modeCollections.Theme = { library: null, key: 'k' }
    assert.deepEqual(await lines(real03(), one), [
      'ajoute : Style de texte ajouté : label/2/semibold',
      'ajoute : Composant imbriqué ajouté : Spinner',
      'ajoute : Collection de modes ajoutée : Theme'
    ])
    assert.deepEqual(await lines(one, real03()), [
      'retire : Style de texte retiré : label/2/semibold',
      'retire : Composant imbriqué retiré : Spinner',
      'retire : Collection de modes retirée : Theme'
    ])
    const pad2 = copy()
    pad2.textStyles.a = { library: null, key: 'k' }; pad2.textStyles.b = { library: null, key: 'k' }
    pad2.components.A = { library: null, key: 'k' }; pad2.components.B = { library: null, key: 'k' }
    pad2.modeCollections.A = { library: null, key: 'k' }; pad2.modeCollections.B = { library: null, key: 'k' }
    assert.deepEqual(await lines(real03(), pad2), [
      'ajoute : Styles de texte ajoutés : a, b',
      'ajoute : Composants imbriqués ajoutés : A, B',
      'ajoute : Collections de modes ajoutées : A, B'
    ])
    assert.deepEqual(await lines(pad2, real03()), [
      'retire : Styles de texte retirés : a, b',
      'retire : Composants imbriqués retirés : A, B',
      'retire : Collections de modes retirées : A, B'
    ])
  })
  test('Lien de documentation modifié, and Composant renommé : <ancien> → <nouveau>', async () => {
    const b = copy(); b.meta.documentationLinks = ['https://exemple.test/autre']
    assert.deepEqual(await lines(real03(), b), ['modifie : Lien de documentation modifié'])
    const c = copy(); c.meta.name = 'Bouton'
    assert.deepEqual(await lines(real03(), c), ['modifie : Composant renommé : Button → Bouton'])
  })
  test('Autre changement dans le JSON: safety net when nothing else says it, and only with a previous sheet', async () => {
    const { classifyChanges } = await tools()
    const b = copy(); b.champInconnu = 1
    assert.deepEqual(await lines(real03(), b), ['modifie : Autre changement dans le JSON'])
    assert.deepEqual(plain(classifyChanges(null, b)).filter((c) => c.text === 'Autre changement dans le JSON'), [], 'première version : pas de filet')
    const withUnknown = copy(); withUnknown.champInconnu = 1; withUnknown.meta.name = 'Bouton'
    assert.ok(!(await lines(real03(), withUnknown)).some((l) => /Autre changement/.test(l)), 'une autre ligne dispense du filet')
    const excluded = copy(); excluded.issues = []; excluded.variants.forEach((v) => { v.position = [0, 0] })
    assert.ok(!(await lines(real03(), excluded)).some((l) => /Autre changement/.test(l)), 'ce qui ne compte pas ne déclenche pas le filet')
  })
})

describe('The design tokens version', () => {
  const tools = async () => (await button()).plugin.__test
  // a reader that serves the tokens files provided, in disorder, and counts the reads
  const reader = (tags, files) => {
    const readOnes = []
    return {
      readOnes,
      versions: async () => tags,
      paths: async (tag) => { readOnes.push(tag); return new Set(files[tag]) }
    }
  }
  const inputs = { tokens: { 'color/blue/700': {}, 'spacing/16': {} }, textStyles: { 'label/1/semibold': {} } }

  test('publishedPaths: sets, sources, nested groups, without the dollar keys', async () => {
    const { publishedPaths } = await tools()
    const doc = tokensFile(['color.blue.700', 'color.white', 'typographie.label.1.semibold'])
    assert.deepEqual([...publishedPaths(plain(doc))].sort(), ['color.blue.700', 'color.white', 'typography.label.1.semibold'])
  })
  test('requiredTokens: color/blue/700 gives color.blue.700, a text style lives under typography', async () => {
    const { requiredTokens } = await tools()
    assert.deepEqual(plain(requiredTokens(inputs.tokens, inputs.textStyles).map((r) => r.path)), ['color.blue.700', 'spacing.16', 'typography.label.1.semibold'])
  })
  test('the first version that contains all the tokens, text styles included', async () => {
    const { computeTokensVersion } = await tools()
    const allPaths = ['color.blue.700', 'spacing.16', 'typography.label.1.semibold']
    const l = reader(['2.2.0', '2.1.0', '2.0.0'], { '2.0.0': ['color.blue.700', 'spacing.16'], '2.1.0': allPaths, '2.2.0': allPaths })
    const r = await computeTokensVersion(inputs, l)
    assert.deepEqual(plain(r), { version: '2.1.0', issues: [] })
    assert.deepEqual(l.readOnes, ['2.0.0', '2.1.0'], 'versions lues dans l\'ordre, arrêt à la première qui convient')
  })
  test('only the X.Y.Z versions from 2.0.0 count: no candidates, no component tags, no 1.x', async () => {
    const { computeTokensVersion } = await tools()
    const allPaths = ['color.blue.700', 'spacing.16', 'typography.label.1.semibold']
    const l = reader(['slash/3.0.0', '2.0.0-RC.1', '1.8.0', '2.0.0'], { '1.8.0': allPaths, '2.0.0-RC.1': allPaths, 'slash/3.0.0': allPaths, '2.0.0': allPaths })
    assert.equal((await computeTokensVersion(inputs, l)).version, '2.0.0')
    assert.deepEqual(l.readOnes, ['2.0.0'])
  })
  test('a numeric sort: 2.10.0 comes after 2.9.0', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.10.0', '2.9.0'], { '2.9.0': [], '2.10.0': ['color.blue.700', 'spacing.16', 'typography.label.1.semibold'] })
    assert.equal((await computeTokensVersion(inputs, l)).version, '2.10.0')
  })
  test('a text style absent from the tokens file prevents the version', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.0.0'], { '2.0.0': ['color.blue.700', 'spacing.16'] })
    const r = plain(await computeTokensVersion(inputs, l))
    assert.equal(r.version, null)
    assert.deepEqual(r.issues, [{ level: 'warning', rule: 'token-non-publie', where: 'textStyles.label/1/semibold', message: 'Token absent de toutes les versions publiées de Canopée : label/1/semibold.' }])
  })
  test('a token present in no published version: one issue per token, version null', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.1.0', '2.0.0'], { '2.0.0': ['spacing.16', 'typography.label.1.semibold'], '2.1.0': ['spacing.16', 'typography.label.1.semibold'] })
    const r = plain(await computeTokensVersion(inputs, l))
    assert.equal(r.version, null)
    assert.deepEqual(r.issues, [{ level: 'warning', rule: 'token-non-publie', where: 'tokens.color/blue/700', message: 'Token absent de toutes les versions publiées de Canopée : color/blue/700.' }])
  })
  test('each token exists somewhere, but no version brings them together: dedicated issue, version null', async () => {
    const { computeTokensVersion } = await tools()
    const l = reader(['2.1.0', '2.0.0'], { '2.0.0': ['color.blue.700', 'spacing.16'], '2.1.0': ['spacing.16', 'typography.label.1.semibold'] })
    const r = plain(await computeTokensVersion(inputs, l))
    assert.equal(r.version, null)
    assert.deepEqual(r.issues.map((i) => i.rule), ['tokens-sans-version-commune'])
  })
  test('GitHub does not answer: tokens-injoignables issue, version null', async () => {
    const { computeTokensVersion } = await tools()
    const l = { versions: async () => { throw new Error('Failed to fetch') }, paths: async () => new Set() }
    const r = plain(await computeTokensVersion(inputs, l))
    assert.deepEqual(r, { version: null, issues: [{ level: 'warning', rule: 'tokens-injoignables', where: 'meta.tokensVersion', message: 'GitHub ne répond pas : la version des design tokens n\'a pas pu être calculée.' }] })
    const l2 = { versions: async () => ['2.0.0'], paths: async () => { throw new Error('GitHub 500') } }
    assert.equal((await computeTokensVersion(inputs, l2)).issues[0].rule, 'tokens-injoignables')
  })
  test('no version published from 2.0.0: GitHub unreachable for the computation', async () => {
    const { computeTokensVersion } = await tools()
    const r = await computeTokensVersion(inputs, reader(['1.8.0', 'slash/3.0.0'], {}))
    assert.equal(r.version, null)
    assert.equal(r.issues[0].rule, 'tokens-injoignables')
  })
  test('a component without a token or text style: 2.0.0, without calling GitHub', async () => {
    const { computeTokensVersion } = await tools()
    const l = { versions: async () => { throw new Error('ne doit pas être appelé') }, paths: async () => { throw new Error('ne doit pas être appelé') } }
    assert.deepEqual(plain(await computeTokensVersion({ tokens: {}, textStyles: {} }, l)), { version: '2.0.0', issues: [] })
  })
  test('the plugin reads GitHub read only: list of tags, then one file per version, kept for the session', async () => {
    const doc = buttonDocument()
    const p = createFakePlugin(doc)
    await p.send({ type: 'ui-pret' })
    await p.send({ type: 'generer' })
    await p.send({ type: 'generer' })
    const files = doc.network.calls.filter((u) => u.startsWith('https://raw.githubusercontent.com/') && u.endsWith('.resolver.json'))
    assert.deepEqual(files.map((u) => u.split('/')[5]), ['2.0.0', '2.1.0'], 'chaque fichier est lu une fois pour la session')
    assert.equal(doc.network.calls.filter((u) => u.startsWith('https://api.github.com/')).length, 1, 'la liste des versions est gardée pour la session')
    assert.ok(doc.network.calls.every((u) => /^https:\/\/(api\.github\.com|raw\.githubusercontent\.com)\//.test(u)))
  })
  // the real GitHub reader, on a fake network, with a timeout of a few milliseconds
  const ALL = ['color.blue.700', 'spacing.16', 'typography.label.1.semibold']
  const readerOverNetwork = async (network, timeout = 1000) => {
    const doc = buttonDocument()
    doc.network = network
    const p = createFakePlugin(doc)
    return p.__test.createGitHubReader(timeout)
  }
  test('a tag whose file answers 404 is ignored: the next tag is tried', async () => {
    const { computeTokensVersion } = await tools()
    const l = await readerOverNetwork(fakeNetwork({ tags: ['2.1.0', '2.0.0'], files: { '2.1.0': tokensFile(ALL) } }))
    assert.deepEqual(plain(await computeTokensVersion(inputs, l)), { version: '2.1.0', issues: [] })
    const l2 = { versions: async () => ['2.0.0', '2.1.0'], paths: async (tag) => { if (tag === '2.0.0') throw Object.assign(new Error('GitHub 404'), { status: 404 }); return new Set(ALL) } }
    assert.deepEqual(plain(await computeTokensVersion(inputs, l2)), { version: '2.1.0', issues: [] })
  })
  test('all tags answer 404: tokens-sans-fichier issue', async () => {
    const { computeTokensVersion } = await tools()
    const l = await readerOverNetwork(fakeNetwork({ tags: ['2.1.0', '2.0.0'], files: {} }))
    const r = plain(await computeTokensVersion(inputs, l))
    assert.deepEqual(r, { version: null, issues: [{ level: 'warning', rule: 'tokens-sans-fichier', where: 'meta.tokensVersion', message: 'Aucune version publiée de Canopée ne contient le fichier de design tokens.' }] })
  })
  test('a 403 or 429 status: tokens-limite-github issue, not tokens-injoignables', async () => {
    const { computeTokensVersion } = await tools()
    for (const status of [403, 429]) {
      const l = await readerOverNetwork(fakeNetwork({ status }))
      const r = plain(await computeTokensVersion(inputs, l))
      assert.deepEqual(r, { version: null, issues: [{ level: 'warning', rule: 'tokens-limite-github', where: 'meta.tokensVersion', message: 'GitHub limite les appels depuis ce poste : la version des design tokens n\'a pas pu être calculée. Réessayer plus tard.' }] })
    }
    // the limit can also hit the file of a tag
    const l2 = { versions: async () => ['2.0.0'], paths: async () => { throw Object.assign(new Error('GitHub 403'), { status: 403 }) } }
    assert.equal((await computeTokensVersion(inputs, l2)).issues[0].rule, 'tokens-limite-github')
  })
  test('another status, or a fetch with no answer after the timeout: tokens-injoignables', async () => {
    const { computeTokensVersion } = await tools()
    const l500 = await readerOverNetwork(fakeNetwork({ status: 500 }))
    assert.equal((await computeTokensVersion(inputs, l500)).issues[0].rule, 'tokens-injoignables')
    const start = Date.now()
    const mute = await readerOverNetwork(fakeNetwork({ mute: true }), 20)
    const r = plain(await computeTokensVersion(inputs, mute))
    assert.equal(r.version, null)
    assert.deepEqual(r.issues.map((i) => i.rule), ['tokens-injoignables'])
    assert.ok(Date.now() - start < 2000, 'le délai coupe l\'attente')
  })
  test('the bridge script calls no network', () => {
    const code = bridgeCode()
    assert.ok(!/fetch\(|github/i.test(code))
  })
  test('manifest: the two GitHub domains, with their reason in French', () => {
    const m = JSON.parse(fs.readFileSync(path.join(PLUGIN, 'manifest.json'), 'utf8'))
    assert.deepEqual(m.networkAccess.allowedDomains, ['https://api.github.com', 'https://raw.githubusercontent.com'])
    assert.match(m.networkAccess.reasoning, /lecture seule/)
  })
})

describe('The version in the plugin', () => {
  const NS = 'canopee_fiches'
  const variantSet = (doc) => doc.nodes[1]
  const generatedPlugin = async (doc = buttonDocument()) => {
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    return { doc, p, msg: p.lastMessage() }
  }
  const exported = async (doc) => {
    const r = await generatedPlugin(doc)
    await r.p.send({ type: 'memoriser', id: 'S:100' })
    return r
  }

  test('first export: version 1.0.0 and tokens 2.1.0 in the JSON, no base', async () => {
    const { doc, msg } = await generatedPlugin()
    assert.equal(variantSet(doc).getSharedPluginData(NS, 'export'), '')
    assert.deepEqual(plain(msg.version), { first: true, none: false, current: null, version: '1.0.0', level: null, detected: null, tokensVersion: '2.1.0', kept: false, next: null })
    const sheet = JSON.parse(msg.json)
    assert.equal(sheet.meta.version, '1.0.0')
    assert.equal(sheet.meta.tokensVersion, '2.1.0')
    assert.deepEqual(Object.keys(sheet.meta).slice(0, 3), ['name', 'version', 'tokensVersion'])
  })
  test('the generation writes nothing: only an export updates the base', async () => {
    const { doc } = await generatedPlugin()
    assert.equal(variantSet(doc).getSharedPluginData(NS, 'export'), '')
  })
  test('export: the minified JSON is written in the component set, under canopee_fiches / export', async () => {
    const { doc, msg } = await exported()
    const base = variantSet(doc).getSharedPluginData(NS, 'export')
    assert.equal(base, JSON.stringify(JSON.parse(msg.json)))
    assert.ok(!base.includes('\n'), 'minifié')
    assert.equal(JSON.parse(base).meta.version, '1.0.0')
  })
  test('no date in the shared base, nor in the JSON', async () => {
    const { doc } = await exported()
    assert.ok(!/\d{4}-\d{2}-\d{2}/.test(variantSet(doc).getSharedPluginData(NS, 'export')))
  })
  test('same component exported again: no change since 1.0.0, version unchanged', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    assert.deepEqual(plain(m.version), { first: false, none: true, current: '1.0.0', version: '1.0.0', level: null, detected: null, tokensVersion: '2.1.0', kept: false, next: null })
    assert.equal(JSON.parse(m.json).meta.version, '1.0.0')
  })
  test('a property value added: 1.1.0, minor', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].componentPropertyDefinitions.hierarchy.variantOptions.push('secondary')
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    assert.equal(m.version.version, '1.1.0')
    assert.equal(m.version.level, 'mineure')
    assert.equal(JSON.parse(m.json).meta.version, '1.1.0')
  })
  test('a default text changes a slot: minor, and the change sentences are sent', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    assert.equal(m.version.version, '1.1.0')
    assert.deepEqual(plain(m.changes.sentences), ['Slot label, texte par défaut : Label → Libellé'])
  })
  test('a documentation link modified: 1.0.1, patch', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].documentationLinks = [{ uri: 'https://exemple.test/autre' }]
    await p.send({ type: 'generer' })
    const m = p.lastMessage()
    assert.equal(m.version.version, '1.0.1')
    assert.equal(m.version.level, 'correctif')
  })
  test('Refonte complète checkbox: major, and the JSON follows the chosen version', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: true, sheetMd: false })
    const m = p.lastMessage()
    assert.equal(m.type, 'version')
    assert.equal(m.version.version, '2.0.0')
    assert.equal(m.version.level, 'majeure')
    assert.equal(JSON.parse(m.json).meta.version, '2.0.0')
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: false, sheetMd: false })
    assert.equal(p.lastMessage().version.version, '1.0.0')
  })
  test('Fiche md modifiée checkbox: patch when nothing changed', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: false, sheetMd: true })
    const m = p.lastMessage()
    assert.equal(m.version.version, '1.0.1')
    assert.equal(JSON.parse(m.json).meta.version, '1.0.1')
  })
  test('answer Non, garder: the current version despite a change, and the base is replaced at export', async () => {
    const { doc, p } = await exported()
    doc.nodes[1].componentPropertyDefinitions.hierarchy.variantOptions.push('secondary')
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().version.version, '1.1.0')
    assert.equal(p.lastMessage().version.next, '1.1.0')
    await p.send({ type: 'choisir-version', id: 'S:100', keep: false, overhaul: true, sheetMd: false })
    assert.equal(p.lastMessage().version.next, '2.0.0', 'la réponse Oui annonce la majeure quand la refonte est cochée')
    await p.send({ type: 'choisir-version', id: 'S:100', keep: true, overhaul: false, sheetMd: false })
    const m = p.lastMessage()
    assert.equal(m.version.version, '1.0.0')
    assert.equal(m.version.kept, true)
    assert.equal(m.version.detected, 'mineure')
    assert.equal(JSON.parse(m.json).meta.version, '1.0.0')
    await p.send({ type: 'memoriser', id: 'S:100' })
    const base = JSON.parse(variantSet(doc).getSharedPluginData(NS, 'export'))
    assert.equal(base.meta.version, '1.0.0')
    assert.ok(base.api.props.hierarchy.enum.includes('secondary'), 'la base contient le changement')
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().version.none, true, 'le changement gardé ne compte plus au prochain export')
  })
  test('at the first version, the Refonte complète checkbox changes nothing', async () => {
    const { p } = await generatedPlugin()
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: true, sheetMd: false })
    assert.equal(p.lastMessage().version.version, '1.0.0')
  })
  test('a version choice for another component is ignored', async () => {
    const { p } = await generatedPlugin()
    const before = p.messages.length
    await p.send({ type: 'choisir-version', id: 'autre:1', overhaul: true })
    assert.equal(p.messages.length, before)
  })
  test('the export writes the JSON of the chosen version, and the next generation starts from this version', async () => {
    const { doc, p } = await generatedPlugin()
    await p.send({ type: 'memoriser', id: 'S:100' })
    await p.send({ type: 'generer' })
    await p.send({ type: 'choisir-version', id: 'S:100', overhaul: true })
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(JSON.parse(variantSet(doc).getSharedPluginData(NS, 'export')).meta.version, '2.0.0')
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().version.current, '2.0.0')
  })
  test('the shared base wins over the machine memo: another designer starts from the same version', async () => {
    const { doc } = await exported()
    // another machine: no local memo, the same base in the file
    const other = buttonDocument()
    variantSet(other).setSharedPluginData(NS, 'export', variantSet(doc).getSharedPluginData(NS, 'export'))
    const { msg } = await generatedPlugin(other)
    assert.equal(msg.version.current, '1.0.0')
    assert.equal(msg.version.none, true)
    assert.deepEqual(plain(msg.changes.sentences), [])
  })
  test('unreadable base: the component starts again from version 1.0.0', async () => {
    const doc = buttonDocument()
    variantSet(doc).setSharedPluginData(NS, 'export', '{pas du json')
    const { p } = await generatedPlugin(doc)
    const msg = p.messages.find((m) => m.type === 'fiche')
    assert.equal(msg.version.first, true)
    assert.equal(p.messages.filter((m) => m.type === 'selection').pop().latestVersion, null, 'aucune version affichée pour une base illisible')
  })
  test('base write refused (size): the error shows, neither the history nor the previous version are written', async () => {
    const doc = buttonDocument()
    doc.nodes[1].shareLimit = 1000
    const { p } = await generatedPlugin(doc)
    await p.send({ type: 'memoriser', id: 'S:100' })
    const m = p.lastMessage()
    assert.equal(m.type, 'erreur')
    assert.match(m.message, /^La version 1\.0\.0 n'a pas pu être enregistrée dans le fichier Figma \(\d+ Ko\) : Data too large/)
    assert.equal(variantSet(doc).getSharedPluginData(NS, 'export'), '')
    assert.equal(variantSet(doc).getSharedPluginData(NS, 'changelog'), '', 'historique non écrit')
    assert.equal(variantSet(doc).getSharedPluginData(NS, 'version-precedente'), '', 'version précédente non écrite')
  })
  test('offline: tokensVersion null and tokens-injoignables issue, the JSON is produced', async () => {
    const doc = buttonDocument()
    doc.network = fakeNetwork({ outage: true })
    const { msg } = await generatedPlugin(doc)
    assert.equal(JSON.parse(msg.json).meta.tokensVersion, null)
    assert.equal(msg.version.tokensVersion, null)
    const i = msg.issues.find((x) => x.rule === 'tokens-injoignables')
    assert.equal(i.level, 'warning')
    assert.equal(i.message, 'GitHub ne répond pas : la version des design tokens n\'a pas pu être calculée.')
    assert.equal(i.location, 'Version des design tokens')
  })
  test('token absent from all versions: token-non-publie issue in À corriger, tokensVersion null', async () => {
    const doc = buttonDocument()
    doc.network = fakeNetwork({ tags: ['2.0.0'], files: { '2.0.0': tokensFile(BUTTON_PATHS.filter((c) => c !== 'radius.medium')) } })
    const { msg } = await generatedPlugin(doc)
    assert.equal(JSON.parse(msg.json).meta.tokensVersion, null)
    const i = msg.issues.find((x) => x.rule === 'token-non-publie')
    assert.equal(i.message, 'Token absent de toutes les versions publiées de Canopée : radius/medium.')
    assert.equal(i.location, 'Variable radius/medium')
  })
  test('version issues do not change the level: only the sheet counts', async () => {
    const { p } = await exported()
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().version.none, true)
  })
  test('the format is 0.4, and the plugin version starts with the format', async () => {
    const { p } = await openPlugin()
    assert.equal(p.__test.FORMAT, '0.4')
    assert.ok(p.__test.VERSION.startsWith(p.__test.FORMAT + '.'))
  })
})

// ------------------------------------------------------------ the changelog
describe('The changelog: the content of an entry', () => {
  const tools = async () => (await button()).plugin.__test
  const slots = (text) => ({ structure: { slots: { label: { default: { text: text } } } } })

  test('classification: added, modified, removed', async () => {
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
    assert.deepEqual(plain(changelogEntry(before, after)), {
      ajoute: ['Propriété ajoutée : loading', 'Propriété size, valeurs ajoutées : large', 'Slot ajouté : label', 'Variables ajoutées : color/new'],
      modifie: ['Propriété size, valeur par défaut : small → medium', 'Slot icone, composant par défaut : Icon → Autre', 'Structure des calques modifiée'],
      retire: ['Propriété retirée : disabled', 'Variables retirées : color/old']
    })
  })
  test('order of the properties and default text go under Modifié', async () => {
    const { changelogEntry } = await tools()
    const a = { api: { props: { size: {}, tone: {} } } }
    const b = { api: { props: { tone: {}, size: {} } } }
    assert.deepEqual(plain(changelogEntry(a, b)), { ajoute: [], modifie: ['Ordre des propriétés modifié'], retire: [] })
    assert.deepEqual(plain(changelogEntry(slots('Label'), slots('Libellé'))).modifie, ['Slot label, texte par défaut : Label → Libellé'])
  })
  test('variants added and removed, including the « N variantes » form', async () => {
    const { changelogEntry } = await tools()
    const v = (n) => ({ values: { size: n }, position: [0, 0] })
    assert.deepEqual(plain(changelogEntry({ variants: [v('a'), v('b')] }, { variants: [v('b'), v('c')] })), { ajoute: ['Variante ajoutée : size=c'], modifie: [], retire: ['Variante retirée : size=a'] })
    const seven = [1, 2, 3, 4, 5, 6, 7].map((n) => v('s' + n))
    assert.deepEqual(plain(changelogEntry({ variants: [] }, { variants: seven })).ajoute, ['7 variantes ajoutées'])
    assert.deepEqual(plain(changelogEntry({ variants: seven }, { variants: [] })).retire, ['7 variantes retirées'])
  })
  test('excluded: variants moved on the canvas and Défauts line', async () => {
    const { changelogEntry, compareSheets } = await tools()
    const a = { variants: [{ values: { size: 'a' }, position: [0, 0] }], issues: [{ level: 'error' }] }
    const b = { variants: [{ values: { size: 'a' }, position: [10, 0] }], issues: [] }
    assert.deepEqual(plain(changelogEntry(a, b)), { ajoute: [], modifie: [], retire: [] })
    assert.deepEqual(plain(compareSheets(a, b)), ['1 variante déplacée sur le canevas', 'Défauts : 1 → 0'], 'l\'onglet Changements les garde')
  })
  test('a style change fits on one line: title, label in lowercase, before → after', async () => {
    const { changelogEntry } = await tools()
    const variant = (size, theme) => ({ values: { state: 'focus', size: size, _theme: theme }, position: [0, 0] })
    const pad = (h, v) => ({ top: { token: v }, right: { token: h }, bottom: { token: v }, left: { token: h } })
    const sheet = (pm, pl) => ({
      variants: [variant('medium', 'prospect'), variant('large', 'prospect')],
      styles: {
        default: { when: { state: 'focus', size: 'large', _theme: 'prospect' }, root: { padding: pad('spacing/24', 'spacing/12') } },
        overrides: [{ when: { size: 'medium' }, styles: { root: { padding: pm } } }, { when: { size: 'large' }, styles: { root: { padding: pl } } }]
      }
    })
    const r = changelogEntry(sheet(pad('spacing/24', 'spacing/12'), pad('spacing/24', 'spacing/12')), sheet(pad('spacing/16', 'spacing/12'), pad('spacing/24', 'spacing/12')))
    assert.deepEqual(plain(r), { ajoute: [], modifie: ['size=medium : marges horizontales, spacing/24 → spacing/16'], retire: [] })
    const wholeEntry = changelogEntry(sheet(pad('spacing/24', 'spacing/12'), pad('spacing/24', 'spacing/12')), sheet(pad('spacing/16', 'spacing/12'), pad('spacing/16', 'spacing/12')))
    assert.deepEqual(plain(wholeEntry).modifie, ['Toutes les variantes : marges horizontales, spacing/24 → spacing/16'])
  })
  test('no truncation at 20 lines in the changelog, whereas the Changements tab truncates', async () => {
    const { changelogEntry, compareSheets } = await tools()
    const fa = { structure: { slots: {} } }
    const fb = { structure: { slots: {} } }
    for (let k = 0; k < 25; k++) { fa.structure.slots['s' + k] = { default: { text: 'a' } }; fb.structure.slots['s' + k] = { default: { text: 'b' } } }
    assert.equal(changelogEntry(fa, fb).modifie.length, 25)
    assert.equal(compareSheets(fa, fb).length, 21)
  })
  test('Button 0.2 against 0.3: the entry takes the sentences of compareSheets, excluded ones left out', async () => {
    const { changelogEntry, compareSheets } = await tools()
    const wholeEntry = (c) => [].concat(c.ajoute, c.modifie, c.retire)
    const sentences = compareSheets(real02(), real03()).filter((x) => typeof x === 'string' && !/déplacée|^Défauts/.test(x))
    const lines = wholeEntry(plain(changelogEntry(real02(), real03())))
    for (const p of sentences) assert.ok(lines.includes(p), p)
  })
})

describe('The changelog: the Markdown file', () => {
  const tools = async () => (await button()).plugin.__test
  const e = (version, extra) => Object.assign({ version, date: '2026-11-04', ajoute: [], modifie: [], retire: [] }, extra)

  test('title, entries from the most recent to the oldest, empty sections omitted, final line break', async () => {
    const { renderChangelog } = await tools()
    const md = renderChangelog('Button', [
      e('1.1.0', { ajoute: ['Propriété ajoutée : loading'], modifie: ['Structure des calques modifiée'] }),
      e('1.0.0', { ajoute: ['Première version du composant'] })
    ])
    assert.equal(md, [
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
  test('a Retiré section alone, and several lines per section', async () => {
    const { renderChangelog } = await tools()
    const md = renderChangelog('Tag', [e('2.0.0', { retire: ['a', 'b'] })])
    assert.equal(md, '# Changelog de Tag\n\n## 2.0.0 - 04/11/26\n\n### Retiré\n- a\n- b\n')
  })
  test('a date already stored shows as DD/MM/YY, and a date outside the format stays as is', async () => {
    const { renderChangelog } = await tools()
    assert.match(renderChangelog('Tag', [e('1.0.0', { date: '2026-03-09' })]), /^## 1\.0\.0 - 09\/03\/26$/m)
    assert.match(renderChangelog('Tag', [e('1.0.0', { date: 'inconnue' })]), /^## 1\.0\.0 - inconnue$/m)
  })
  test('the title writes « d\' » before a vowel and « de » otherwise', async () => {
    const { renderChangelog } = await tools()
    assert.equal(renderChangelog('IconButton', []), "# Changelog d'IconButton\n")
    assert.equal(renderChangelog('Accordion', []), "# Changelog d'Accordion\n")
    assert.equal(renderChangelog('Tag', []), '# Changelog de Tag\n')
  })
  test('an empty history gives only the title', async () => {
    const { renderChangelog } = await tools()
    assert.equal(renderChangelog('Button', []), '# Changelog de Button\n')
  })
})

describe('The changelog: the history in the plugin', () => {
  const NS = 'canopee_fiches'
  const variantSet = (doc) => doc.nodes[1]
  const read = (doc, key) => variantSet(doc).getSharedPluginData(NS, key)
  const history = (doc) => JSON.parse(read(doc, 'changelog') || '[]')
  const exported = async (doc = buttonDocument(), choices) => {
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    if (choices) await p.send({ type: 'choisir-version', id: 'S:100', ...choices })
    const msg = p.lastMessage()
    await p.send({ type: 'memoriser', id: 'S:100' })
    return { doc, p, msg }
  }
  // another plugin on the same document: a new designer who opens the file
  const reopen = async (doc, choices) => exported(doc, choices)
  const addValue = (doc, v) => variantSet(doc).componentPropertyDefinitions.hierarchy.variantOptions.push(v)
  const today = /^\d{4}-\d{2}-\d{2}$/
  const FIRST = 'Première version du composant'

  test('first version: entry 1.0.0, « Première version du composant », no previous version', async () => {
    const { doc, msg } = await exported()
    const h = history(doc)
    assert.equal(h.length, 1)
    assert.equal(h[0].version, '1.0.0')
    assert.match(h[0].date, today)
    assert.deepEqual([h[0].ajoute, h[0].modifie, h[0].retire], [[FIRST], [], []])
    assert.equal(read(doc, 'version-precedente'), '')
    assert.match(msg.changelog, /^# Changelog de Button\n\n## 1\.0\.0 - \d{2}\/\d{2}\/\d{2}\n\n### Ajouté\n- Première version du composant\n$/)
  })
  test('the generation alone writes nothing: only the export stores', async () => {
    const { doc, p } = await openPlugin()
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().type, 'fiche')
    assert.equal(typeof p.lastMessage().changelog, 'string')
    assert.equal(read(doc, 'changelog'), '')
    assert.equal(read(doc, 'export'), '')
  })
  test('new version: the entry compares the base with the new sheet, at the top, and the base becomes the previous version', async () => {
    const { doc } = await exported()
    const base = read(doc, 'export')
    addValue(doc, 'tertiary')
    const { msg } = await reopen(doc)
    const h = history(doc)
    assert.deepEqual(h.map((x) => x.version), ['1.1.0', '1.0.0'])
    assert.deepEqual(h[0].ajoute, ['Propriété hierarchy, valeurs ajoutées : tertiary'])
    assert.equal(read(doc, 'version-precedente'), base)
    assert.match(msg.changelog, /^# Changelog de Button\n\n## 1\.1\.0 - [\d\/]+\n\n### Ajouté\n- Propriété hierarchy, valeurs ajoutées : tertiary\n\n## 1\.0\.0 - [\d\/]+\n/)
  })
  test('kept version: the entry is recomputed from the previous version, without piling up', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    await reopen(doc)
    // 1.1.0 is exported; a second change, and the designer keeps 1.1.0
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { keep: true })
    let h = history(doc)
    assert.deepEqual(h.map((x) => x.version), ['1.1.0', '1.0.0'])
    assert.deepEqual(h[0].ajoute, ['Propriété hierarchy, valeurs ajoutées : tertiary'])
    assert.deepEqual(h[0].modifie, ['Slot label, texte par défaut : Label → Libellé'])
    // the same export repeated duplicates nothing
    await reopen(doc, { keep: true })
    await reopen(doc, { keep: true })
    h = history(doc)
    assert.equal(h.length, 2)
    assert.deepEqual(h[0].ajoute, ['Propriété hierarchy, valeurs ajoutées : tertiary'])
    assert.deepEqual(h[0].modifie, ['Slot label, texte par défaut : Label → Libellé'])
    assert.equal(JSON.parse(read(doc, 'version-precedente')).meta.version, '1.0.0', 'la version précédente ne bouge pas')
    // a cancelled change disappears from the kept entry
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Label'
    await reopen(doc, { keep: true })
    assert.deepEqual(history(doc)[0].modifie, [])
  })
  test('kept version without a previous version: the new lines are added, without duplicates', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    await reopen(doc)
    // a component exported before this evolution has no previous version
    variantSet(doc).setSharedPluginData(NS, 'version-precedente', '')
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { keep: true })
    const h = history(doc)
    assert.deepEqual(h.map((x) => x.version), ['1.1.0', '1.0.0'])
    assert.deepEqual(h[0].ajoute, ['Propriété hierarchy, valeurs ajoutées : tertiary'])
    assert.deepEqual(h[0].modifie, ['Slot label, texte par défaut : Label → Libellé'])
    await reopen(doc, { keep: true })
    assert.deepEqual(history(doc)[0].modifie, ['Slot label, texte par défaut : Label → Libellé'])
    assert.equal(read(doc, 'version-precedente'), '', 'toujours pas de version précédente')
  })
  test('first version kept: the entry stays « Première version du composant », the date is that of the export', async () => {
    const { doc } = await exported()
    const h = history(doc)
    h[0].date = '2020-01-01'
    variantSet(doc).setSharedPluginData(NS, 'changelog', JSON.stringify(h))
    addValue(doc, 'tertiary')
    await reopen(doc, { keep: true })
    const after = history(doc)
    assert.equal(after.length, 1)
    assert.deepEqual(after[0].ajoute, [FIRST])
    assert.deepEqual(after[0].modifie, [])
    assert.match(after[0].date, today)
    assert.notEqual(after[0].date, '2020-01-01')
  })
  test('Markdown sheet modified: a single line under Modifié', async () => {
    const { doc } = await exported()
    await reopen(doc, { overhaul: false, sheetMd: true })
    const h = history(doc)
    assert.deepEqual(h.map((x) => x.version), ['1.0.1', '1.0.0'])
    assert.deepEqual([h[0].ajoute, h[0].modifie, h[0].retire], [[], ['Fiche Markdown modifiée'], []])
  })
  test('complete overhaul: the line at the top of Modifié, then the detail', async () => {
    const { doc } = await exported()
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { overhaul: true, sheetMd: false })
    const h = history(doc)
    assert.equal(h[0].version, '2.0.0')
    assert.deepEqual(h[0].modifie, ['Refonte complète du composant', 'Slot label, texte par défaut : Label → Libellé'])
  })
  test('overhaul without any other change: the overhaul line alone', async () => {
    const { doc } = await exported()
    await reopen(doc, { overhaul: true, sheetMd: false })
    assert.deepEqual(history(doc)[0].modifie, ['Refonte complète du composant'])
  })
  test('a version kept after an overhaul keeps the overhaul line', async () => {
    const { doc } = await exported()
    await reopen(doc, { overhaul: true, sheetMd: false })
    variantSet(doc).componentPropertyDefinitions['label#1:1'].defaultValue = 'Libellé'
    await reopen(doc, { keep: true })
    assert.deepEqual(history(doc)[0].modifie, ['Refonte complète du composant', 'Slot label, texte par défaut : Label → Libellé'])
  })
  test('no change: the history stays identical', async () => {
    const { doc } = await exported()
    const before = read(doc, 'changelog')
    const previous = read(doc, 'version-precedente')
    const { msg } = await reopen(doc)
    assert.equal(read(doc, 'changelog'), before)
    assert.equal(read(doc, 'version-precedente'), previous)
    assert.match(msg.changelog, /^# Changelog de Button\n\n## 1\.0\.0 - /)
  })
  test('component already exported but without a history: it starts with the entry of this export', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '')
    addValue(doc, 'tertiary')
    await reopen(doc)
    const h = history(doc)
    assert.deepEqual(h.map((x) => x.version), ['1.1.0'])
    assert.deepEqual(h[0].ajoute, ['Propriété hierarchy, valeurs ajoutées : tertiary'])
  })
  test('component exported before the changelog, still at 1.0.0: the history starts at the first version', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '')
    const { msg } = await reopen(doc)
    const h = history(doc)
    assert.deepEqual(h.map((x) => x.version), ['1.0.0'])
    assert.deepEqual([h[0].ajoute, h[0].modifie, h[0].retire], [[FIRST], [], []])
    assert.match(msg.changelog, /^# Changelog de Button\n\n## 1\.0\.0 - [\d\/]+\n\n### Ajouté\n- Première version du composant\n$/)
    // same thing when the designer keeps 1.0.0 after a change
    variantSet(doc).setSharedPluginData(NS, 'changelog', '')
    addValue(doc, 'tertiary')
    await reopen(doc, { keep: true })
    assert.deepEqual(history(doc).map((x) => [x.version, x.ajoute]), [['1.0.0', [FIRST]]])
  })
  test('an unreadable history is not overwritten by an export, and the message shows', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '{pas du json')
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().type, 'erreur')
    assert.equal(p.lastMessage().message, 'Le changelog enregistré est illisible dans le fichier Figma. Le plugin ne le remplacera pas.')
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(read(doc, 'changelog'), '{pas du json')
    assert.equal(JSON.parse(read(doc, 'export')).meta.version, '1.1.0', 'la base est quand même enregistrée')
  })
  test('a changelog that is not an array is unreadable too', async () => {
    const { doc } = await exported()
    variantSet(doc).setSharedPluginData(NS, 'changelog', '{"version":"1.0.0"}')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    assert.match(p.lastMessage().message, /^Le changelog enregistré est illisible/)
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(read(doc, 'changelog'), '{"version":"1.0.0"}')
  })
  test('an unreadable base with a stored history: the history stays intact and the message shows', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    await reopen(doc)
    const before = read(doc, 'changelog')
    assert.equal(history(doc).length, 2)
    variantSet(doc).setSharedPluginData(NS, 'export', '{pas du json')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    assert.equal(p.lastMessage().message, 'La dernière version enregistrée est illisible dans le fichier Figma. Le plugin repart de la version 1.0.0, sans toucher au changelog enregistré.')
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(read(doc, 'changelog'), before, 'historique intact')
    assert.equal(JSON.parse(read(doc, 'export')).meta.version, '1.0.0', 'la base est réécrite')
  })
  test('Copy then Download: the same history, without duplicates', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.deepEqual(history(doc).map((x) => x.version), ['1.1.0', '1.0.0'])
  })
  test('the version choice message carries the changelog of the chosen version', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    assert.match(p.lastMessage().changelog, /## 1\.1\.0 - /)
    await p.send({ type: 'choisir-version', id: 'S:100', keep: true })
    const m = p.lastMessage()
    assert.equal(m.type, 'version')
    assert.doesNotMatch(m.changelog, /## 1\.1\.0 - /)
    assert.match(m.changelog, /^# Changelog de Button\n\n## 1\.0\.0 - /)
  })
  test('history write refused: the error shows, the base is still stored', async () => {
    const doc = buttonDocument()
    const node = variantSet(doc)
    const write = node.setSharedPluginData
    node.setSharedPluginData = (space, key, value) => { if (key === 'changelog') throw new Error('Data too large'); write(space, key, value) }
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    const m = p.lastMessage()
    assert.equal(m.type, 'erreur')
    assert.match(m.message, /^L'historique du changelog n'a pas pu être enregistré dans le fichier Figma \(\d+ Ko\) : Data too large\./)
    assert.equal(JSON.parse(read(doc, 'export')).meta.version, '1.0.0')
  })
  test('previous version write refused: the error shows', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const node = variantSet(doc)
    const write = node.setSharedPluginData
    node.setSharedPluginData = (space, key, value) => { if (key === 'version-precedente') throw new Error('Data too large'); write(space, key, value) }
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.match(p.lastMessage().message, /^Le JSON de la version précédente n'a pas pu être enregistré dans le fichier Figma/)
  })

  const CONCURRENT_MESSAGE = 'Un autre export de ce composant a eu lieu depuis cette génération. Rien n\'a été enregistré : générer de nouveau le JSON, puis l\'exporter.'
  test('concurrent exports: A generates, B exports a version, A exports: B stays intact and A sees the error', async () => {
    const { doc } = await exported()
    const a = (await openPlugin(doc)).p
    await a.send({ type: 'generer' })
    // B adds a value and exports 1.1.0 while A holds its generation
    addValue(doc, 'tertiary')
    await reopen(doc)
    const baseB = read(doc, 'export')
    const historyB = read(doc, 'changelog')
    const previousB = read(doc, 'version-precedente')
    assert.equal(JSON.parse(baseB).meta.version, '1.1.0')
    await a.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(a.lastMessage().type, 'erreur')
    assert.equal(a.lastMessage().message, CONCURRENT_MESSAGE)
    assert.equal(read(doc, 'export'), baseB, 'la base de B est intacte')
    assert.equal(read(doc, 'changelog'), historyB, 'l\'historique de B est intact')
    assert.equal(read(doc, 'version-precedente'), previousB, 'la version précédente de B est intacte')
  })
  test('copy then download the same generation: accepted, without an error', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(p.messages.filter((m) => m.type === 'erreur').length, 0)
    assert.equal(JSON.parse(read(doc, 'export')).meta.version, '1.1.0')
  })
  test('answer « Non, garder » after a first export of the same generation: accepted, without an error', async () => {
    const { doc } = await exported()
    addValue(doc, 'tertiary')
    const { p } = await openPlugin(doc)
    await p.send({ type: 'generer' })
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(JSON.parse(read(doc, 'export')).meta.version, '1.1.0')
    await p.send({ type: 'choisir-version', id: 'S:100', keep: true })
    await p.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(p.messages.filter((m) => m.type === 'erreur').length, 0)
    assert.equal(JSON.parse(read(doc, 'export')).meta.version, '1.0.0', 'la version gardée remplace celle du premier export')
  })
  test('an export refused because another took place does not block the next generation', async () => {
    const { doc } = await exported()
    const a = (await openPlugin(doc)).p
    await a.send({ type: 'generer' })
    addValue(doc, 'tertiary')
    await reopen(doc)
    await a.send({ type: 'memoriser', id: 'S:100' })
    await a.send({ type: 'generer' })
    await a.send({ type: 'memoriser', id: 'S:100' })
    assert.equal(a.messages.filter((m) => m.type === 'erreur').length, 1, 'seule la première tentative est refusée')
  })
})

// ------------------------------------------------------------ the texts
describe('The texts', () => {
  test('no em dash, en dash or middle dot in the plugin files', () => {
    const forbidden = new RegExp('[' + String.fromCharCode(0x2013, 0x2014, 0xB7) + ']')
    const extensions = new Set(['.js', '.mjs', '.html', '.json', '.md'])
    const files = []
    const browse = (folder) => {
      for (const e of fs.readdirSync(folder, { withFileTypes: true })) {
        const filePath = path.join(folder, e.name)
        if (e.isDirectory()) browse(filePath)
        else if (extensions.has(path.extname(e.name)) || e.name === 'LICENSE') files.push(filePath)
      }
    }
    browse(PLUGIN)
    assert.ok(files.some((f) => f.endsWith('verifier-fiche.mjs')), 'les scripts ne sont pas parcourus')
    for (const f of files) assert.ok(!forbidden.test(fs.readFileSync(f, 'utf8')), 'tiret long ou point médian dans ' + path.relative(PLUGIN, f))
  })
})
