// Interface of the plugin Canopée, composants. Built by Vite and put inside dist/ui.html
// with src/ui/styles.css (npm run build).
import type { Card, PluginToUiMessage, Sentence, UiToPluginMessage, VersionView } from '../messages'
import type { IssueDetail } from '../types'

// A message of the plugin, by its type.
type Message<T extends PluginToUiMessage['type']> = Extract<PluginToUiMessage, { type: T }>

// The elements are those of ui.html, found by their id. A missing one is a mistake of the page.
const $ = (id: string): HTMLElement => {
  const element = document.getElementById(id)
  if (!element) throw new Error('élément absent : ' + id)
  return element
}
// The checks look at what the element has, not at its class: the page is ours, and the tests
// of the interface give it simpler elements.
const isButton = (element: HTMLElement): element is HTMLButtonElement => 'disabled' in element
const isInput = (element: HTMLElement): element is HTMLInputElement => 'checked' in element
const isElement = (x: unknown): x is HTMLElement => typeof x === 'object' && x !== null && 'dataset' in x
const $button = (id: string): HTMLButtonElement => {
  const element = $(id)
  if (!isButton(element)) throw new Error('pas un bouton : ' + id)
  return element
}
const $input = (id: string): HTMLInputElement => {
  const element = $(id)
  if (!isInput(element)) throw new Error('pas une case : ' + id)
  return element
}
// The closest element, from the target of an event.
const closest = (e: Event, selector: string): HTMLElement | null => {
  const target = e.target
  if (!target || !('closest' in target) || typeof target.closest !== 'function') return null
  const found: unknown = target.closest(selector)
  return isElement(found) ? found : null
}
const escapeHtml = (s: unknown): string => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')
const send = (message: UiToPluginMessage): void => parent.postMessage({ pluginMessage: message }, '*')
const plural = (n: number, word: string): string => n + ' ' + word + (n > 1 ? 's' : '')
const pill = (n: number, word: string): string => '<span class="pastille"><b>' + n + '</b> ' + word + (n > 1 ? 's' : '') + '</span>'

// Natural height of the content and of the actions, so that the window follows it.
// The height is measured without the stretching of the JSON: otherwise the window would never shrink again.
const adjustHeight = (): void => {
  document.body.classList.add('mesure')
  const height = 16 + $('contenu').offsetHeight + $('actions').offsetHeight
  document.body.classList.remove('mesure')
  send({ type: 'redimensionner', height })
}

// ------------------------------------------------------- manual resizing

const handle = $('poignee')
handle.addEventListener('pointerdown', (e: PointerEvent) => {
  handle.setPointerCapture(e.pointerId)
  document.body.classList.add('redimensionnement')
})
handle.addEventListener('pointermove', (e: PointerEvent) => {
  if (!handle.hasPointerCapture(e.pointerId)) return
  send({ type: 'redimensionner-manuel', width: Math.round(e.clientX + 8), height: Math.round(e.clientY + 8) })
})
handle.addEventListener('pointerup', (e: PointerEvent) => {
  handle.releasePointerCapture(e.pointerId)
  document.body.classList.remove('redimensionnement')
})
handle.addEventListener('dblclick', () => send({ type: 'taille-auto' }))

// The targeted component and what was generated for it: an answer that arrives for a
// component we have left since then is dropped.
type Tab = 'corriger' | 'json' | 'changelog' | 'changements'
interface State {
  id: string | null
  json: string | null
  file: string | null
  changelogFile: string | null
  issues: IssueDetail[]
  inProgress: boolean
  tab: Tab
  generated: boolean
  version: VersionView | null
  name: string
  answer: 'oui' | 'non' | null
  changelog: string | null
  stale: boolean
}
const state: State = { id: null, json: null, file: null, changelogFile: null, issues: [], inProgress: false, tab: 'corriger', generated: false, version: null, name: '', answer: null, changelog: null, stale: false }
const TABS: Tab[] = ['corriger', 'json', 'changelog', 'changements']

// Without a selected component, the bottom bar only keeps its messages, and disappears if there are none.
const updateActions = (): void => {
  $('boutons').hidden = !state.id
  $('actions').hidden = !state.id && $('erreur').hidden && $('succes').hidden && $('perime').hidden && $('regles').hidden
}
const showError = (m: string): void => { $('erreur').textContent = m; $('erreur').hidden = !m; updateActions(); adjustHeight() }
const showSuccess = (m: string): void => { $('succes').textContent = m; $('succes').hidden = !m; updateActions(); adjustHeight() }

// Before the generation: « Générer le JSON ». After: « Télécharger » and « Copier », and the icon that generates again.
// Both buttons act on the file of the open tab: the changelog in « Changelog », the JSON everywhere else.
const onChangelog = (): boolean => state.tab === 'changelog'
function updateButtons(progress?: string): void {
  const generated = !!state.json
  const blocked = generated && !state.stale && answerExpected()
  // stale JSON: only a new JSON can be exported, the main button regenerates it
  const regenerate = generated && state.stale
  $('perime').hidden = !(generated && state.stale)
  $button('generer').disabled = state.inProgress || !state.id || blocked
  $('generer-libelle').textContent = state.inProgress ? (progress || 'Génération en cours...')
    : blocked ? 'Répondre à la question'
    : regenerate ? 'Générer de nouveau'
    : !generated ? 'Générer le JSON'
    : onChangelog() ? 'Télécharger le changelog' : 'Télécharger le JSON'
  $('copier-libelle').textContent = onChangelog() ? 'Copier le changelog' : 'Copier le JSON'
  // an SVG has no hidden property: go through the attribute
  $('ico-generer').toggleAttribute('hidden', generated && !regenerate && !state.inProgress)
  $('ico-telecharger').toggleAttribute('hidden', !generated || regenerate || state.inProgress)
  $button('copier').hidden = !generated
  $button('copier').disabled = state.inProgress || blocked || state.stale
  $button('regenerer').hidden = !generated
  $button('regenerer').disabled = state.inProgress
  updateActions()
}

// The tabs: only the active panel is visible. Before the generation, only « À corriger » has content,
// the nomenclature check: « JSON », « Changelog » and « Changements » only appear afterwards.
// After the generation, « À corriger » stays only if it lists at least one issue.
const visibleTabs = (): Tab[] => !state.json ? ['corriger']
  : state.issues.length ? TABS : TABS.filter((name) => name !== 'corriger')
function updateTabs(): void {
  const visible = state.id !== null
  $('onglets').classList.toggle('titre-seul', !state.json)
  // the open tab has disappeared (no more issues after a new generation): the first tab takes over
  if (!visibleTabs().includes(state.tab)) state.tab = visibleTabs()[0]
  $('onglets').hidden = !visible
  $('changements').hidden = !state.json
  $('json-contenu').hidden = !state.json
  $('changelog-contenu').hidden = !state.json
  for (const name of TABS) {
    const b = $('onglet-' + name)
    const active = name === state.tab
    b.hidden = !visibleTabs().includes(name)
    b.setAttribute('aria-selected', active ? 'true' : 'false')
    b.tabIndex = active ? 0 : -1
    $('panneau-' + name).hidden = !visible || !active
  }
}

function chooseTab(name: Tab): void {
  state.tab = name
  updateTabs()
  updateButtons()
  adjustHeight()
}

const updateCounter = (name: 'corriger' | 'changements', n: number): void => { $('compteur-' + name).textContent = String(n); $('compteur-' + name).hidden = !n }

const tabOf = (name: string | undefined): Tab | undefined => TABS.find((t) => t === name)
$('onglets').onclick = (event) => {
  const b = closest(event, 'button[data-onglet]')
  const tab = b ? tabOf(b.dataset.onglet) : undefined
  if (tab) chooseTab(tab)
}
$('onglets').onkeydown = (event) => {
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  const tabs = visibleTabs()
  const i = tabs.indexOf(state.tab)
  event.preventDefault()
  const next = tabs[(i + (event.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length]
  chooseTab(next)
  $('onglet-' + next).focus()
}

// One row per issue. With nodes to show, it is a button that selects them in Figma.
const issueRow = (i: IssueDetail, k: number): string => {
  const inVariants = i.variants > 1 ? '<span class="msg">, dans ' + plural(i.variants, 'variante') + '</span>' : ''
  const error = i.level === 'error' ? '<span class="erreur-mot">Erreur</span>' : ''
  const content = error + '<strong class="ou">' + escapeHtml(i.location || i.where) + '</strong>' + inVariants + '<div class="msg">' + escapeHtml(i.message) + '</div>'
  const body = i.ids && i.ids.length
    ? '<button type="button" class="ligne" data-defaut="' + k + '" title="' + escapeHtml(i.where) + '">' + content + '</button>'
    : '<div class="ligne" title="' + escapeHtml(i.where) + '">' + content + '</div>'
  return '<li>' + body + '</li>'
}

// The À corriger list: the nomenclature check before the export, the issues of the sheet after.
// The info issues are not displayed, they stay in the JSON.
function showIssues(issues: IssueDetail[]): void {
  state.issues = issues.filter((i) => i.level !== 'info')
  $('corriger-ok').hidden = state.issues.length > 0
  $('corriger-liste').innerHTML = state.issues.map(issueRow).join('')
  updateCounter('corriger', state.issues.length)
  adjustHeight()
}

$('corriger-liste').onclick = (event) => {
  const b = closest(event, 'button[data-defaut]')
  if (!b) return
  const d = state.issues[Number(b.dataset.defaut)]
  if (d && d.ids.length) send({ type: 'selectionner', ids: d.ids, id: state.id })
}

const clearResult = (): void => {
  state.stale = false
  state.json = null
  state.changelog = null
  state.version = null
  $('tuile-version').hidden = true
  $('tuile-tokens').hidden = true
  $('tuiles').hidden = true
  $('compteurs').hidden = false
  $('filet').hidden = true
  $('cases').hidden = true
  $('question').hidden = true
  clearAnswer()
  $input('refonte').checked = false
  $input('fichemd').checked = false
  state.generated = false
  state.tab = 'corriger'
  updateCounter('changements', 0)
  showSuccess('')
}

// The pills of the card: variants, properties, last version stored in the Figma file
// (none if the component has never been exported).
const updateCounters = (m: Card): void => {
  $('compteurs').innerHTML = pill(m.variants, 'variante') + pill(m.properties, 'propriété')
    + (m.latestVersion ? '<span class="pastille">dernière version <b>' + escapeHtml(m.latestVersion) + '</b></span>'
      : '<span class="pastille pastille-neutre">jamais exporté</span>')
    + (m.viaInstance ? '<span class="pastille pastille-neutre">depuis une instance</span>' : '')
}

// The component was modified in Figma, or its name and variants changed: the card follows, nothing else moves.
function showCard(m: Message<'carte'>): void {
  if (m.id !== state.id) return
  state.name = m.name
  updateTitle()
  updateCounters(m)
}

function markStale(m: Message<'perime'>): void {
  if (m.id !== state.id || !state.json) return
  state.stale = true
  showSuccess('')
  updateButtons()
  adjustHeight()
}

function showSelection(m: Message<'selection'>): void {
  showError('')
  // same component (a click on an issue selects a layer inside it): we keep the result,
  // and the check runs again as long as nothing has been generated
  if (m.name && m.id === state.id) { if (!state.json) send({ type: 'controler' }); return }
  clearResult()
  state.id = m.name ? m.id : null
  state.inProgress = false
  updateButtons()
  $('vide').hidden = !!m.name
  $('infos').hidden = !m.name
  $('corriger-liste').innerHTML = ''
  $('corriger-ok').hidden = true
  state.issues = []
  updateCounter('corriger', 0)
  updateTabs()
  if (!m.name) { adjustHeight(); return }
  state.name = m.name
  updateTitle()
  // the last version stored in the Figma file, or none if the component has never been exported
  updateCounters(m)
  adjustHeight()
  send({ type: 'controler' })
}

function showCheck(m: Message<'controle'>): void {
  if (m.id !== state.id || state.json) return
  showIssues(m.issues)
}

// First letter in lowercase, except for an acronym or a word in capitals.
const lowerFirst = (p: string): string => (/^[A-ZÀ-Ý][a-zà-ÿ]/.test(p) ? p.charAt(0).toLowerCase() + p.slice(1) : p)

// A sentence is a text, or a group: the touched variants as title, then their changes.
const changeCount = (sentences: Sentence[]): number => sentences.reduce((n, p) => n + (typeof p === 'string' ? 1 : p.lines.length), 0)
const changeToHtml = (p: Sentence): string => typeof p === 'string' ? '<li>' + escapeHtml(lowerFirst(p)) + '</li>'
  : '<li><span class="groupe">' + escapeHtml(p.title) + '</span><ul>' + p.lines.map((l) => '<li>' + escapeHtml(l) + '</li>').join('') + '</ul></li>'
// The empty state of a panel, centered like « Rien à corriger »: an icon, a title and a help line.
const EQUAL_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5h12M6 14.5h12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
const NEW_ICON = '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l1.9 4.6L18.5 10.5l-4.6 1.9L12 17l-1.9-4.6L5.5 10.5l4.6-1.9Z" fill="currentColor"/></svg>'
const emptyState = (icon: string, title: string, help: string): string => '<div class="vide"><span class="vide-icone">' + icon + '</span><p class="vide-titre">' + escapeHtml(title)
  + '</p><p class="aide">' + escapeHtml(help) + '</p></div>'
function showChanges(c: { sentences: Sentence[] } | null): void {
  const area = $('changements')
  updateCounter('changements', c ? changeCount(c.sentences) : 0)
  if (!c) { area.innerHTML = emptyState(NEW_ICON, 'Premier export', 'Ce composant n\'a pas encore de version précédente à comparer.'); return }
  const since = 'Depuis le dernier export'
  if (!c.sentences.length) {
    area.innerHTML = emptyState(EQUAL_ICON, 'Aucun changement', 'Le composant n\'a pas changé depuis le dernier export.')
    return
  }
  if (c.sentences.length === 1 && typeof c.sentences[0] === 'string') { area.innerHTML = '<p class="aide">' + since + ' : ' + escapeHtml(lowerFirst(c.sentences[0])) + '</p>'; return }
  area.innerHTML = '<p class="aide">' + since + ' :</p><ul class="aide">' + c.sentences.map(changeToHtml).join('') + '</ul>'
}

// The tag of the retained level: the detected or chosen level, or the absence of a previous version or of a change.
const VERSION_TAGS: Record<string, [string, string]> = {
  majeure: ['MAJEURE', 'etiquette-supprime'],
  mineure: ['MINEURE', 'etiquette-modifie'],
  correctif: ['PATCH', 'etiquette-ajoute']
}
function versionTag(v: VersionView): string {
  const [label, cssClass] = v.first ? ['PREMIÈRE VERSION', 'etiquette-neutre']
    : v.kept ? ['VERSION GARDÉE', 'etiquette-neutre']
    : v.none ? ['INCHANGÉE', 'etiquette-neutre']
    : (v.level !== null && VERSION_TAGS[v.level]) || ['', '']
  return label ? '<span class="etiquette ' + cssClass + '">' + label + '</span>' : ''
}

// The name row: the component name, then after the generation the tag of the retained level.
function updateTitle(): void {
  const v = state.version
  $('nom').textContent = state.name
  $('etiquette').innerHTML = v ? versionTag(v) : ''
}

// After the generation: the version next to the name, the design tokens pill, then the version box.
// The counters are only for before: when downloading, they bring nothing.
function showVersion(v: VersionView): void {
  state.version = v
  updateTitle()
  $('compteurs').hidden = true
  $('tuiles').hidden = false
  $('tuile-version').hidden = false
  $('tuile-tokens').hidden = false
  const tokens = $('val-tokens')
  tokens.textContent = v.tokensVersion || 'non calculée'
  tokens.title = v.tokensVersion ? '' : 'Voir l\'onglet À corriger'
  tokens.classList.toggle('tokens-erreur', !v.tokensVersion)
  updateQuestion()
  updateButtons()
  adjustHeight()
}

// The version question, asked only when the JSON changed since a stored version.
// Without an answer, download and copy stay blocked.
const questionAsked = (): boolean => !!(state.version && !state.version.first && state.version.detected)
function answerExpected(): boolean { return questionAsked() && !state.answer }
function clearAnswer(): void {
  state.answer = null
  $input('livree-oui').checked = false
  $input('livree-non').checked = false
}
// The version that a checkbox gives, announced in its label: the next major, or the next patch.
const boxVersion = (current: string | null, level: string): string => {
  const [x, y, z] = String(current).split('.').map(Number)
  return level === 'majeure' ? (x + 1) + '.0.0' : x + '.' + y + '.' + (z + 1)
}
// The question, the version and the checkboxes, in the same box: Refonte complète only after « Oui ».
// Without a question (nothing changed), the box says « Aucun changement dans le composant. », followed by the only
// checkbox Fiche md modifiée: an overhaul necessarily changes the component, so it always goes through the question.
function updateQuestion(): void {
  const v = state.version
  if (!v) return
  const asked = questionAsked()
  $('question-livree').hidden = !asked
  if (asked) {
    $('question-titre').textContent = 'La version ' + v.current + ' a-t-elle été livrée aux devs ?'
    $('livree-oui-libelle').textContent = 'Oui, passer en ' + (v.next || v.version)
    $('livree-non-libelle').textContent = 'Non, garder ' + v.current
  }
  $('val-version').textContent = answerExpected() ? 'à choisir' : v.version
  $('tuile-version').classList.toggle('a-choisir', answerExpected())
  $('case-refonte').hidden = v.first || !asked || state.answer !== 'oui'
  $('case-fichemd').hidden = v.first || !!v.detected
  $('cases').hidden = $('case-refonte').hidden && $('case-fichemd').hidden
  if (!v.first) {
    $('refonte-libelle').textContent = 'Refonte complète, passer en ' + boxVersion(v.current, 'majeure')
    $('fichemd-libelle').textContent = 'Fiche md modifiée, passer en ' + boxVersion(v.current, 'patch')
  }
  $('question-aucun').hidden = asked || $('cases').hidden
  $('filet').hidden = !asked || $('cases').hidden
  $('question').hidden = !asked && $('cases').hidden
  $('question').classList.toggle('a-repondre', answerExpected())
}

// An answer or a checkbox changes the version: the plugin recomputes the JSON, which the interface displays.
const chooseVersion = (): void => send({ type: 'choisir-version', id: state.id, keep: state.answer === 'non', overhaul: $input('refonte').checked, sheetMd: $input('fichemd').checked })
const submitAnswer = (answer: 'oui' | 'non'): void => {
  state.answer = answer
  if (answer === 'non') $input('refonte').checked = false
  updateQuestion(); updateButtons(); adjustHeight()
  chooseVersion()
}
$input('livree-oui').onchange = () => submitAnswer('oui')
$input('livree-non').onchange = () => submitAnswer('non')
$input('refonte').onchange = chooseVersion
$input('fichemd').onchange = chooseVersion

function showChosenVersion(m: Message<'version'>): void {
  if (m.id !== state.id || !state.json) return
  state.json = m.json
  state.changelog = m.changelog
  $('json').innerHTML = colorize(m.json)
  $('changelog').textContent = m.changelog || ''
  showVersion(m.version)
}

function showSheet(m: Message<'fiche'>): void {
  if (m.id !== state.id) return
  state.inProgress = false
  state.stale = false
  state.json = m.json
  state.changelog = m.changelog
  state.file = m.file
  state.changelogFile = m.changelogFile
  clearAnswer()
  $input('refonte').checked = false
  $input('fichemd').checked = false
  showVersion(m.version)
  $('resultat-titre').textContent = m.file
  $('json').innerHTML = colorize(m.json)
  $('changelog').textContent = m.changelog || ''
  $('resume').textContent = plural(m.summary.variables, 'variable') + ', ' + plural(m.summary.overrides, 'surcharge') + ', ' + m.summary.kb + ' Ko'
  showChanges(m.changes)
  showIssues(m.issues)
  // first generation: the first tab, « À corriger » if issues remain, « JSON » otherwise.
  // After that, the user's choice stays.
  if (!state.generated) { state.generated = true; state.tab = visibleTabs()[0] }
  updateTabs()
  showSuccess('')
  adjustHeight()
}

// Coloring of the JSON, like in an editor: keys, texts, numbers, true, false and null.
const JSON_TOKENS = /("(?:\\.|[^"\\])*")(\s*:)?|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|\b(true|false|null)\b/g
const colorize = (json: string): string => {
  let html = ''
  let end = 0
  for (const m of json.matchAll(JSON_TOKENS)) {
    const index = m.index ?? 0
    const cssClass = m[1] ? (m[2] ? 'cle' : 'texte') : m[3] ? 'nombre' : 'mot'
    html += escapeHtml(json.slice(end, index)) + '<span class="j-' + cssClass + '">' + escapeHtml(m[1] || m[3] || m[4]) + '</span>' + (m[2] || '')
    end = index + m[0].length
  }
  return html + escapeHtml(json.slice(end))
}

// Cmd+A or Ctrl+A in the JSON selects only it, not the whole window.
const selectContents = (el: HTMLElement): void => {
  const range = document.createRange()
  range.selectNodeContents(el)
  const s = document.getSelection()
  if (!s) return
  s.removeAllRanges(); s.addRange(range)
}
// Cmd+A selects only the text of the block, JSON or changelog.
const selectAll = (id: string) => (event: KeyboardEvent): void => {
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'a') { event.preventDefault(); selectContents($(id)) }
}
$('json').onkeydown = selectAll('json')
$('changelog').onkeydown = selectAll('changelog')
// Copy: navigator.clipboard when available, otherwise the selection of the text (JSON or changelog) and execCommand.
async function copyText(text: string, areaId?: 'json' | 'changelog'): Promise<boolean> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try { await navigator.clipboard.writeText(text); return true } catch (e) { /* refused: fallback below */ }
  }
  chooseTab(areaId || 'json')
  const area = $(areaId || 'json')
  area.focus(); selectContents(area)
  let ok = false
  try { ok = document.execCommand('copy') } catch (e) { ok = false }
  return ok
}

function download(content: string, name: string | null, type?: string): void {
  const url = URL.createObjectURL(new Blob([content], { type: type || 'application/json' }))
  const a = document.createElement('a')
  a.href = url; a.download = String(name)
  document.body.appendChild(a); a.click(); document.body.removeChild(a)
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}

const generate = (): void => {
  showError(''); showSuccess('')
  state.inProgress = true
  updateButtons()
  send({ type: 'generer' })
}
// Figma blocks a second download triggered by the same click, so each file is downloaded from its tab.
// Only the JSON counts as an export.
$button('generer').onclick = () => {
  if (!state.json || state.stale) { generate(); return }
  if (onChangelog()) {
    if (!state.changelog) return
    download(state.changelog, state.changelogFile, 'text/markdown')
    showSuccess('Changelog téléchargé.')
    return
  }
  download(state.json, state.file)
  showSuccess('JSON téléchargé.')
  send({ type: 'memoriser', id: state.id })
}
$button('regenerer').onclick = generate
$button('copier').onclick = async () => {
  if (!state.json || state.stale) return
  if (onChangelog()) {
    if (!state.changelog) return
    if (await copyText(state.changelog, 'changelog')) showSuccess('Changelog copié.')
    else showError('La copie a échoué : sélectionner le texte et le copier à la main.')
    return
  }
  if (await copyText(state.json)) { showSuccess('JSON copié.'); send({ type: 'memoriser', id: state.id }) }
  else showError('La copie a échoué : sélectionner le texte et le copier à la main.')
}

// The messages of the plugin are read as they come: this is the border of the interface.
onmessage = (event: MessageEvent<{ pluginMessage?: PluginToUiMessage } | null>) => {
  const m = event.data && event.data.pluginMessage
  if (!m) return
  switch (m.type) {
    case 'init':
      $('version-plugin').textContent = 'Plugin ' + m.version + ', format ' + m.format
      return
    case 'regles':
      $('regles').textContent = m.warning; $('regles').hidden = false; updateActions(); adjustHeight()
      return
    case 'selection':
      return showSelection(m)
    case 'controle':
      return showCheck(m)
    case 'progression':
      if (state.inProgress) updateButtons('Génération en cours, ' + m.done + ' sur ' + m.total + '...')
      return
    case 'fiche':
      return showSheet(m)
    case 'perime':
      return markStale(m)
    case 'carte':
      return showCard(m)
    case 'version':
      return showChosenVersion(m)
    case 'recalculer-hauteur':
      return adjustHeight()
    case 'erreur':
      state.inProgress = false
      updateButtons()
      // the download already took place: the success banner does not stay next to the error
      showSuccess('')
      showError(m.message)
      return
    default: {
      const unhandled: never = m
      return unhandled
    }
  }
}
send({ type: 'ui-pret' })
