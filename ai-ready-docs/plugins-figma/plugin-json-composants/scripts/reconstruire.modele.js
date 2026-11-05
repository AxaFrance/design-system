// Template of scripts/reconstruire.bridge.js. Do not paste as is: scripts/construire-retour.mjs
// injects into it the JSON of the sheet, the configuration and the format rules (taken from code.js),
// and writes scripts/reconstruire.bridge.js.
//
// Rebuilds a component in Figma from its JSON alone, to test the round trip
// of the format. Writes only in the file and on the page of the configuration (by default, the test
// page of the « DS IA ready » branch).
// It reads nothing but the JSON: if information is missing, it stops with an error.
// Only these come from the configuration: the file, the page, the name of the rebuilt set,
// the mark of the layers and the position of the result on the page (CONFIG.x, CONFIG.y).
const SHEET = __FICHE__
const CONFIG = __CONFIG__

const FILE_KEY = CONFIG.file || 'UWk4fT45i82ESNhGaAnj6p'
const PAGE = CONFIG.page || 'Test - Components AI-ready'
const SET_NAME = CONFIG.name || 'Retour/' + SHEET.meta.name
const MARK = CONFIG.mark || 'retour-' + kebab(SHEET.meta.name)

if (figma.fileKey !== FILE_KEY) throw new Error('Fichier refusé : ' + figma.fileKey + ' (attendu ' + FILE_KEY + ')')
const page = figma.root.children.find((p) => p.name === PAGE)
if (!page) throw new Error('Page introuvable : ' + PAGE)
await figma.setCurrentPageAsync(page)

// contournements: what the script had to look for elsewhere than in the JSON. Must stay empty.
// horsFormat: presentation choices that the format deliberately does not carry.
const report = { etape: CONFIG.etape, contournements: {}, horsFormat: [], ignores: [], erreurs: [] }

// ------------------------------------------------------------ cleanup (only our nodes)
function removeLeftovers() {
  const removed = []
  for (const n of [...page.children]) {
    const isSet = n.type === 'COMPONENT_SET' && n.name === SET_NAME
    const isLeftover = n.type === 'COMPONENT' && n.getPluginData('marque') === MARK
    if (isSet || isLeftover) { removed.push(n.type + ' ' + n.name); n.remove() }
  }
  return removed
}

if (CONFIG.etape === 'supprimer') {
  report.supprimes = removeLeftovers()
  return JSON.stringify(report)
}

// ------------------------------------------------------------ token resolution
const varsCache = {}
async function variable(name) {
  if (varsCache[name]) return varsCache[name]
  const t = SHEET.tokens[name]
  if (!t || !t.key) throw new Error('Token sans clé : ' + name)
  const v = await figma.variables.importVariableByKeyAsync(t.key)
  varsCache[name] = v
  return v
}

// ------------------------------------------------------------ what the JSON gives by key
const missing = (index, name) => {
  const e = SHEET[index] && SHEET[index][name]
  if (!e || !e.key) throw new Error('Le JSON ne donne pas ' + index + '.' + name + ' (clé absente)')
  return e
}

// Text style: by its key, in the file then in the libraries.
const stylesCache = {}
async function readTextStyle(name) {
  if (stylesCache[name]) return stylesCache[name]
  const e = missing('textStyles', name)
  let s = (await figma.getLocalTextStylesAsync()).find((x) => x.key === e.key)
  if (!s) s = await figma.importStyleByKeyAsync(e.key)
  await figma.loadFontAsync(s.fontName)
  stylesCache[name] = s
  return s
}

// Nested or proposed component: by its key, single component first, variant set next.
const componentsCache = {}
async function component(name) {
  if (componentsCache[name]) return componentsCache[name]
  const e = missing('components', name)
  let r = null
  try { r = { node: await figma.importComponentByKeyAsync(e.key), type: 'COMPONENT' } } catch (x) {}
  if (!r) {
    try {
      const set = await figma.importComponentSetByKeyAsync(e.key)
      r = { node: set.defaultVariant, type: 'COMPONENT_SET' }
    } catch (x) {}
  }
  if (!r) throw new Error('Composant introuvable par sa clé : ' + name + ' (' + e.key + ')')
  r.key = e.key
  componentsCache[name] = r
  return r
}

// Collection of a variable mode: by its key, in the file then in the libraries.
const collectionsCache = {}
async function collection(name) {
  if (collectionsCache[name]) return collectionsCache[name]
  const e = missing('modeCollections', name)
  let c = (await figma.variables.getLocalVariableCollectionsAsync()).find((x) => x.key === e.key)
  if (!c) {
    const vars = await figma.teamLibrary.getVariablesInLibraryCollectionAsync(e.key)
    if (!vars.length) throw new Error('Collection sans variable : ' + name)
    const v = await figma.variables.importVariableByKeyAsync(vars[0].key)
    c = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId)
  }
  collectionsCache[name] = c
  return c
}

// Default text of a layer: the one of the text slot that drives it.
function defaultText(layer) {
  for (const name of Object.keys(SHEET.structure.slots)) {
    const sl = SHEET.structure.slots[name]
    if (sl.as !== 'children') continue
    if ((sl.controls || []).some((c) => c.layer === layer && c.attribute === 'text')) {
      if (!sl.default || typeof sl.default.text !== 'string') throw new Error('Le slot ' + name + ' n\'a pas de texte par défaut')
      return sl.default.text
    }
  }
  throw new Error('Le texte ' + layer + ' n\'est réglé par aucun slot : le JSON ne donne pas son contenu')
}

// ------------------------------------------------------------ values
const val = async (x) => (x && x.token !== undefined ? { v: await variable(x.token) } : { r: x ? x.raw : undefined })

async function numeric(node, field, x) {
  const a = await val(x)
  if (a.v) node.setBoundVariable(field, a.v)
  else node[field] = a.r
}

async function readPaint(x) {
  const a = await val(x)
  if (a.v) return figma.variables.setBoundVariableForPaint({ type: 'SOLID', color: { r: 0, g: 0, b: 0 } }, 'color', a.v)
  const h = String(a.r).replace('#', '')
  const c = { r: parseInt(h.slice(0, 2), 16) / 255, g: parseInt(h.slice(2, 4), 16) / 255, b: parseInt(h.slice(4, 6), 16) / 255 }
  const p = { type: 'SOLID', color: c }
  if (h.length === 8) p.opacity = parseInt(h.slice(6, 8), 16) / 255
  return p
}

// ------------------------------------------------------------ effective styles of a variant
// The rules (matches, effectiveStyles, canonical, applicableTree, kebab) come from code.js, copied here at generation.
__REGLES__

function treeOf(cfg) {
  return applicableTree(SHEET.structure.trees, cfg).tree
}

// ------------------------------------------------------------ applying the styles
const FIGMA_SIZINGS = { fixed: 'FIXED', hug: 'HUG', fill: 'FILL' }
const FRAME_FIELDS = ['background', 'stroke', 'strokeWeight', 'strokeAlign', 'radius', 'padding', 'gap', 'layout', 'opacity', 'effects']
const TEXT_FIELDS = ['textColor', 'textStyle', 'textAlign', 'typography', 'layout']

async function applyFrame(n, s, isInstance, isRoot) {
  const unknowns = Object.keys(s).filter((k) => FRAME_FIELDS.indexOf(k) < 0)
  if (unknowns.length) report.ignores.push('champs non gérés sur ' + n.name + ' : ' + unknowns.join(', '))
  const lay = s.layout || {}
  if (lay.direction) {
    n.layoutMode = lay.direction === 'row' ? 'HORIZONTAL' : 'VERTICAL'
    const A = { start: 'MIN', center: 'CENTER', end: 'MAX', 'space-between': 'SPACE_BETWEEN', baseline: 'BASELINE' }
    if (lay.mainAlign) n.primaryAxisAlignItems = A[lay.mainAlign]
    if (lay.crossAlign) n.counterAxisAlignItems = A[lay.crossAlign]
    if (lay.wrap) n.layoutWrap = 'WRAP'
  }
  if (s.padding) for (const [c, field] of [['top', 'paddingTop'], ['right', 'paddingRight'], ['bottom', 'paddingBottom'], ['left', 'paddingLeft']]) if (s.padding[c]) await numeric(n, field, s.padding[c])
  if (s.gap) await numeric(n, 'itemSpacing', s.gap)
  // an instance keeps its original paints: only the color of its vector is set
  if (!isInstance) n.fills = s.background ? [await readPaint(s.background)] : []
  if (!isInstance) n.strokes = s.stroke ? [await readPaint(s.stroke)] : []
  if (s.stroke && !isInstance) {
    if (s.strokeWeight) await numeric(n, 'strokeWeight', s.strokeWeight)
    if (s.strokeAlign) n.strokeAlign = s.strokeAlign.toUpperCase()
  }
  if (s.radius && !isInstance) {
    if (s.radius.token !== undefined || s.radius.raw !== undefined) {
      if (s.radius.token !== undefined) { const v = await variable(s.radius.token); for (const c of ['topLeftRadius', 'topRightRadius', 'bottomRightRadius', 'bottomLeftRadius']) n.setBoundVariable(c, v) }
      else n.cornerRadius = s.radius.raw
    } else report.ignores.push('rayons par coin non gérés sur ' + n.name)
  }
  if (typeof s.opacity === 'number') n.opacity = s.opacity
  if (s.effects) report.ignores.push('effets non gérés sur ' + n.name)
  // size: minWidth/maxWidth, then dimensions
  for (const mk of ['minWidth', 'maxWidth', 'minHeight', 'maxHeight']) if (lay[mk]) await numeric(n, mk, lay[mk])
  if (isRoot) {
    if (typeof lay.clip !== 'boolean') throw new Error('Le JSON ne donne pas layout.clip pour la racine')
    n.clipsContent = lay.clip
  }
  if (lay.absolute) n.layoutPositioning = 'ABSOLUTE'
  if (lay.sizingH === 'fixed' && lay.width && lay.width.raw !== undefined) n.resize(lay.width.raw, n.height)
  if (lay.sizingV === 'fixed' && lay.height && lay.height.raw !== undefined) n.resize(n.width, lay.height.raw)
  if (lay.sizingH) n.layoutSizingHorizontal = FIGMA_SIZINGS[lay.sizingH]
  if (lay.sizingV) n.layoutSizingVertical = FIGMA_SIZINGS[lay.sizingV]
  if (lay.sizingV === 'fixed' && lay.height && lay.height.token !== undefined) { n.resize(n.width, n.height); n.setBoundVariable('height', await variable(lay.height.token)) }
  if (lay.sizingH === 'fixed' && lay.width && lay.width.token !== undefined) n.setBoundVariable('width', await variable(lay.width.token))
  if (lay.absolute) {
    if (!lay.constraints) throw new Error('Le JSON ne donne pas layout.constraints pour ' + n.name + ', posé en absolu')
    n.x = lay.x; n.y = lay.y
  }
}

async function applyText(t, s) {
  const unknowns = Object.keys(s).filter((k) => TEXT_FIELDS.indexOf(k) < 0)
  if (unknowns.length) report.ignores.push('champs non gérés sur ' + t.name + ' : ' + unknowns.join(', '))
  if (s.textStyle) { const st = await readTextStyle(s.textStyle); await t.setTextStyleIdAsync(st.id) }
  else if (s.typography) report.ignores.push('typographie détaillée non gérée sur ' + t.name)
  t.characters = defaultText(t.name)
  if (s.textColor) t.fills = [await readPaint(s.textColor)]
  if (s.textAlign) t.textAlignHorizontal = s.textAlign.toUpperCase()
  // sizing: without layout, the text stays hug and aligned at the top, as in Figma
  const lay = s.layout || {}
  if (lay.sizingH === 'fixed' && lay.width && lay.width.raw !== undefined) t.resize(lay.width.raw, t.height)
  if (lay.sizingV === 'fixed' && lay.height && lay.height.raw !== undefined) t.resize(t.width, lay.height.raw)
  if (lay.sizingH) t.layoutSizingHorizontal = FIGMA_SIZINGS[lay.sizingH]
  if (lay.sizingV) t.layoutSizingVertical = FIGMA_SIZINGS[lay.sizingV]
  if (lay.textAlignVertical) t.textAlignVertical = lay.textAlignVertical.toUpperCase()
}

// ------------------------------------------------------------ one variant
async function createVariant(v) {
  const cfg = v.values
  const name = Object.keys(cfg).map((k) => k + '=' + cfg[k]).join(', ')
  const eff = effectiveStyles(SHEET.styles, cfg)
  const comp = figma.createComponent()
  comp.name = name
  comp.setPluginData('marque', MARK)
  comp.x = 0; comp.y = 0
  try {
    if (eff.modes) {
      for (const coll of Object.keys(eff.modes)) {
        const c = await collection(coll)
        const m = c.modes.find((x) => x.name === eff.modes[coll])
        if (!m) throw new Error('Mode introuvable : ' + coll + ' / ' + eff.modes[coll])
        comp.setExplicitVariableModeForCollection(c, m.modeId)
      }
    }
    // the root first: the auto-layout must exist before the children
    comp.layoutMode = 'HORIZONTAL'
    // constraints are set after the root: otherwise resizing the root stretches the focus-ring
    const toConstrain = []
    for (const node of treeOf(cfg)) {
      const s = eff[node.name] || {}
      let child
      if (node.type === 'instance') {
        const base = (await component(node.component)).node
        child = base.createInstance()
        child.name = node.name
        comp.appendChild(child)
        await applyFrame(child, s, true)
        // the color of the icon is under <layer>/vector
        const sv = eff[node.name + '/vector']
        if (sv && sv.background) {
          const vec = child.findOne((x) => x.type === 'VECTOR' || x.type === 'BOOLEAN_OPERATION')
          vec.fills = [await readPaint(sv.background)]
        }
      } else if (node.type === 'text') {
        child = figma.createText()
        child.name = node.name
        await figma.loadFontAsync({ family: 'Inter', style: 'Regular' })
        comp.appendChild(child)
        await applyText(child, s)
      } else if (node.type === 'frame') {
        child = figma.createFrame()
        child.name = node.name
        comp.appendChild(child)
        await applyFrame(child, s, false)
        if (s.layout && s.layout.absolute) toConstrain.push([child, s.layout.constraints])
      } else throw new Error('Type de calque non géré : ' + node.type)
      if (node.hidden) child.visible = false
      if (node.children) report.ignores.push('enfants de ' + node.name + ' non gérés')
    }
    // the root last: the fixed height and the paddings apply once the children are in place
    await applyFrame(comp, eff.root || {}, false, true)
    for (const [f, c] of toConstrain) f.constraints = { horizontal: c.horizontal.toUpperCase(), vertical: c.vertical.toUpperCase() }
  } catch (e) {
    comp.remove()
    throw e
  }
  return comp
}

// ------------------------------------------------------------ steps
const variants = SHEET.variants
const de = CONFIG.from === undefined ? 0 : CONFIG.from
const a = CONFIG.to === undefined ? variants.length : Math.min(CONFIG.to, variants.length)

if (CONFIG.etape === 'tout' || CONFIG.etape === 'creer') {
  if (de === 0) report.supprimes = removeLeftovers()
  const t0 = Date.now()
  try {
    for (let i = de; i < a; i++) await createVariant(variants[i])
  } catch (e) {
    report.erreurs.push(String(e && e.message || e))
    report.supprimes = (report.supprimes || []).concat(removeLeftovers())
    return JSON.stringify(report)
  }
  report.created = a - de
  report.ms = Date.now() - t0
}

if (CONFIG.etape === 'tout' || CONFIG.etape === 'assembler') {
  try {
    const comps = page.children.filter((n) => n.type === 'COMPONENT' && n.getPluginData('marque') === MARK)
    if (comps.length !== variants.length) throw new Error(comps.length + ' variantes présentes sur ' + variants.length)
    // order of the layers = order of the JSON, so that the variant options follow the order of the enums
    const nameOf = (v) => Object.keys(v.values).map((k) => k + '=' + v.values[k]).join(', ')
    const ordered = variants.map((v) => comps.find((c) => c.name === nameOf(v)))
    if (ordered.some((c) => !c)) throw new Error('Une variante manque')
    const variantSet = figma.combineAsVariants(ordered, page)
    variantSet.name = SET_NAME
    // positions
    let maxX = 0, maxY = 0
    variants.forEach((v, i) => {
      const c = variantSet.children.find((x) => x.name === nameOf(v))
      c.x = v.position[0]; c.y = v.position[1]
      maxX = Math.max(maxX, c.x + c.width); maxY = Math.max(maxY, c.y + c.height)
    })
    variantSet.resizeWithoutConstraints(maxX + 64, maxY + 64)
    report.horsFormat.push('Taille de l\'ensemble = emprise des variantes + 64 : le JSON ne porte ni la taille, ni le cadre de l\'ensemble (présentation sur le canevas).')
    variantSet.documentationLinks = ((SHEET.meta && SHEET.meta.documentationLinks) || []).map((uri) => ({ uri }))
    // properties: booleans (order of api.props), then texts and swaps (order of structure.slots)
    const keys = {}
    for (const name of Object.keys(SHEET.api.props)) {
      const p = SHEET.api.props[name]
      if (p.type === 'boolean') keys[name] = variantSet.addComponentProperty(name, 'BOOLEAN', p.default)
    }
    for (const name of Object.keys(SHEET.structure.slots)) {
      const s = SHEET.structure.slots[name]
      if (s.accepts === 'Instance') {
        if (!s.default || !s.default.swap) throw new Error('Le JSON ne donne pas de composant par défaut pour le swap ' + name)
        const c = await component(s.default.swap)
        const options = {}
        if (s.preferred && s.preferred.length) {
          options.preferredValues = []
          for (const p of s.preferred) { const r = await component(p); options.preferredValues.push({ type: r.type, key: r.key }) }
        }
        keys[name] = variantSet.addComponentProperty(name, 'INSTANCE_SWAP', c.node.id, options)
      } else if (s.as === 'children') {
        if (!s.default || typeof s.default.text !== 'string') throw new Error('Le JSON ne donne pas de texte par défaut pour ' + name)
        keys[name] = variantSet.addComponentProperty(name, 'TEXT', s.default.text)
      } else report.ignores.push('slot non géré : ' + name)
    }
    const ATTR = { visible: 'visible', text: 'characters', component: 'mainComponent' }
    const checks = []
    for (const name of Object.keys(SHEET.api.props)) for (const c of SHEET.api.props[name].controls || []) checks.push([name, c])
    for (const name of Object.keys(SHEET.structure.slots)) for (const c of SHEET.structure.slots[name].controls || []) checks.push([name, c])
    for (const comp of variantSet.children) {
      for (const layer of comp.children) {
        const refs = {}
        for (const [name, c] of checks) if (c.layer === layer.name) refs[ATTR[c.attribute]] = keys[name]
        if (Object.keys(refs).length) layer.componentPropertyReferences = refs
      }
    }
    // placement: the one of the configuration, otherwise under the content of the page
    if (typeof CONFIG.x === 'number' && typeof CONFIG.y === 'number') { variantSet.x = CONFIG.x; variantSet.y = CONFIG.y }
    else {
      const others = page.children.filter((n) => n !== variantSet)
      variantSet.x = others.length ? Math.min(...others.map((n) => n.x)) : 0
      variantSet.y = others.length ? Math.max(...others.map((n) => n.y + n.height)) + 200 : 0
    }
    report.horsFormat.push('Emplacement de l\'ensemble sur la page : choisi par la configuration, pas par le JSON.')
    report.variantSet = { id: variantSet.id, name: variantSet.name, x: variantSet.x, y: variantSet.y, w: variantSet.width, h: variantSet.height, keys }
  } catch (e) {
    report.erreurs.push(String(e && e.message || e))
    report.supprimes = (report.supprimes || []).concat(removeLeftovers())
  }
}
return JSON.stringify(report)
