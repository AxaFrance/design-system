// Export des variables et des styles Figma au format DTCG.
// Un seul fichier, sans étape de build : le manifeste pointe directement dessus.

const VERSION = '0.27.4'
const LARGEUR = 440
const HAUTEUR_INITIALE = 600
// Hauteur automatique : suit le contenu, dans ces bornes. Assez haute par défaut
// pour lire les changements sous les blocs collants du haut.
const HAUTEUR_AUTO_MIN = 560
const HAUTEUR_AUTO_MAX = 800

figma.showUI(__html__, { width: LARGEUR, height: HAUTEUR_INITIALE, themeColors: true })

// ------------------------------------------------------------------ fenêtre

// Taille manuelle : glissée depuis la poignée de l'interface, retenue sur le
// poste (figma.clientStorage), et prioritaire sur les messages de redimensionnement
// automatique tant qu'elle est active. Les bornes évitent une fenêtre inutilisable,
// trop petite comme trop grande.
const CLE_TAILLE = 'taille'
const BORNES_MANUELLES = { largeurMin: 320, largeurMax: 1000, hauteurMin: 300, hauteurMax: 1200 }

let tailleManuelle = false
let derniereTaille = { largeur: LARGEUR, hauteur: HAUTEUR_INITIALE }

const redimensionnerFenetre = (largeur, hauteur) => {
  derniereTaille = { largeur, hauteur }
  figma.ui.resize(largeur, hauteur)
}

const bornerTailleManuelle = (largeur, hauteur) => ({
  largeur: Math.min(Math.max(largeur, BORNES_MANUELLES.largeurMin), BORNES_MANUELLES.largeurMax),
  hauteur: Math.min(Math.max(hauteur, BORNES_MANUELLES.hauteurMin), BORNES_MANUELLES.hauteurMax)
})

// Taille retenue sur ce poste, relue et appliquée dès l'ouverture. Une erreur
// de stockage (clientStorage indisponible ou vide) ne doit jamais empêcher le
// plugin de s'ouvrir : la fenêtre reste alors à sa taille automatique.
;(async () => {
  try {
    const taille = await figma.clientStorage.getAsync(CLE_TAILLE)
    if (taille && typeof taille.largeur === 'number' && typeof taille.hauteur === 'number') {
      const bornee = bornerTailleManuelle(taille.largeur, taille.hauteur)
      tailleManuelle = true
      redimensionnerFenetre(bornee.largeur, bornee.hauteur)
    }
  } catch (e) {
    // Stockage indisponible : rien à faire, la fenêtre garde sa taille automatique.
  }
})()

// Heure de l'export, à la seconde, en UTC : sert à comparer une référence à sa
// date d'origine plutôt qu'à la date du fichier sur le poste.
const dateExport = () => new Date().toISOString().replace(/\.\d{3}Z$/, 'Z')

// ------------------------------------------------------------------- dépôt

// Emplacement choisi par l'équipe dev le 2026-09-30 : racine du package canopee-css.
// Objet exposé via __test (fin de fichier) : le test (node test/test.js) modifie
// ses propriétés pour simuler le dépôt sans dépendre d'une vraie configuration.
// cleFichier est la clé du fichier Figma Fondations Canopée : le dépôt n'est
// possible que depuis lui (voir blocageDepot).
const DEPOT = {
  nom: 'AxaFrance/design-system',
  branche: 'main',
  cheminTokens: 'packages/canopee-css/design-tokens-canopee.resolver.json',
  cleFichier: 'MJfhu2fwxNjxlzGqOAWJNq',
  // Première version publiée qui contient le fichier de tokens : le menu « Comparé à »
  // ne propose pas les versions plus anciennes.
  premiereVersion: '2.0.0'
}

// Recalculée à chaque message plutôt que mémorisée : DEPOT peut changer après
// le chargement du script, notamment dans le test.
const urlsDepot = (depot) => {
  const chemin = depot.cheminTokens
  const i = chemin ? chemin.lastIndexOf('/') : -1
  const dossier = i === -1 ? '' : chemin.slice(0, i)
  const nomFichier = chemin ? chemin.slice(i + 1) : ''
  return {
    urlReference: chemin ? `https://raw.githubusercontent.com/${depot.nom}/${depot.branche}/${chemin}` : null,
    // Liste des tags du dépôt, et modèle d'URL du fichier de tokens pour un tag donné
    // (« {tag} » à remplacer côté interface) : seulement si cheminTokens est renseigné.
    urlTags: chemin ? `https://api.github.com/repos/${depot.nom}/tags?per_page=100` : null,
    // PR ouvertes du dépôt, lues à l'ouverture et à chaque changement de vue pour signaler une PR de tokens en cours.
    urlPulls: chemin ? `https://api.github.com/repos/${depot.nom}/pulls?state=open&per_page=100` : null,
    urlVersion: chemin ? `https://raw.githubusercontent.com/${depot.nom}/{tag}/${chemin}` : null,
    premiereVersion: chemin ? depot.premiereVersion || null : null,
    // Éditeur web de GitHub : le fichier existe déjà dans le repo (édition), ou pas
    // encore (création dans son dossier). Pour un utilisateur sans droit d'écriture,
    // l'éditeur crée tout seul un fork et ouvre une PR.
    urlEdition: chemin ? `https://github.com/${depot.nom}/edit/${depot.branche}/${chemin}` : null,
    urlCreation: chemin ? `https://github.com/${depot.nom}/new/${depot.branche}${dossier ? '/' + dossier : ''}?filename=${encodeURIComponent(nomFichier)}` : null
  }
}

// Message de commit selon le niveau du diff. Le repo vérifie la convention
// Conventional Commits avec commitlint dans sa CI.
const MESSAGES_COMMIT = {
  majeur: 'feat(canopee)!: update design tokens',
  mineur: 'feat(canopee): update design tokens',
  correctif: 'fix(canopee): update design tokens'
}
const messageCommit = (niveau) => MESSAGES_COMMIT[niveau] || 'chore(canopee): update design tokens'

// Ce qui empêche le dépôt, ou null. Une seule raison, la première dans l'ordre :
// pas le bon fichier, rien à déposer, tokens écartés, emplacement du fichier
// pas encore fixé. La clé du fichier n'est lisible qu'en développement
// (enablePrivatePluginApi) : sans elle, on compare le nom du fichier.
const blocageDepot = (rapport) => {
  const dansFondations = figma.fileKey ? figma.fileKey === DEPOT.cleFichier : figma.root.name === 'Fondations Canopée'
  if (!dansFondations) return { raison: 'fichier' }
  if (rapport.exportees + rapport.stylesTexte + rapport.stylesEffet === 0) return { raison: 'vide' }
  const n = rapport.conflits.length + rapport.aliasIntrouvables.length
  if (n > 0) return { raison: 'ecartes', n }
  if (!DEPOT.cheminTokens) return { raison: 'chemin' }
  return null
}

// ------------------------------------------------------------------ nommage

// DTCG interdit « { », « } » et « . » dans un nom, et réserve le préfixe « $ ».
const assainir = (segment) => {
  const s = segment.trim().replace(/[{}.]/g, '-')
  return s.startsWith('$') ? '_' + s.slice(1) : s
}

const segmentsBruts = (nom) => nom.split('/').map((s) => s.trim()).filter(Boolean)
const chemin = (nom) => segmentsBruts(nom).map(assainir)
const estAssaini = (nom) => chemin(nom).join('/') !== segmentsBruts(nom).join('/')
const reference = (segments) => `{${segments.join('.')}}`
const nomSet = (collection) => chemin(collection.name).join('/')
const SET_STYLES = 'Styles'

// Pose un token dans l'arbre. Refuse d'écraser : Figma tolère qu'un nom soit à la
// fois un token et un groupe (« a/b » et « a/b/c »), DTCG non.
const poser = (arbre, segments, jeton) => {
  let noeud = arbre
  for (const s of segments.slice(0, -1)) {
    if (noeud[s] === undefined) noeud[s] = {}
    else if ('$value' in noeud[s]) return false
    noeud = noeud[s]
  }
  const feuille = segments[segments.length - 1]
  if (noeud[feuille] !== undefined) return false
  noeud[feuille] = jeton
  return true
}

// ------------------------------------------------------------------ valeurs

// Figma stocke ses nombres en float32 : un 16 peut ressortir en 16.000000238.
const arrondir = (n) => Math.round(n * 10000) / 10000
const dimension = (n) => ({ value: arrondir(n), unit: 'px' })
const duree = (n) => ({ value: arrondir(n), unit: 'ms' })

// Hex 6 chiffres, sans canal alpha : c'est le repli prévu par la spec DTCG.
const hex = ({ r, g, b }) => {
  const canal = (v) => Math.round(v * 255).toString(16).padStart(2, '0')
  return `#${canal(r)}${canal(g)}${canal(b)}`
}

// DTCG 2025.10 : une couleur est un objet sRGB. L'alpha n'apparaît que s'il
// est défini et inférieur à l'opaque (les float32 de Figma rendent 1 en 0.999997).
const couleur = ({ r, g, b, a }) => {
  const valeur = { colorSpace: 'srgb', components: [arrondir(r), arrondir(g), arrondir(b)] }
  if (a !== undefined && a <= 0.999) valeur.alpha = arrondir(a)
  valeur.hex = hex({ r, g, b })
  return valeur
}

// Figma ne dit pas si un nombre est une taille, une graisse ou une opacité.
// Les scopes le disent quand ils sont renseignés.
// Libellé d'un type DTCG dans le rapport, en langage courant.
const LIBELLE_TYPE = { dimension: 'une dimension', number: 'un nombre', fontWeight: 'une graisse', fontFamily: 'une police', duration: 'une durée' }

const TYPE_PAR_SCOPE = {
  FONT_WEIGHT: 'fontWeight',
  OPACITY: 'number',
  FONT_SIZE: 'dimension',
  LINE_HEIGHT: 'dimension',
  LETTER_SPACING: 'dimension',
  PARAGRAPH_SPACING: 'dimension',
  PARAGRAPH_INDENT: 'dimension',
  WIDTH_HEIGHT: 'dimension',
  GAP: 'dimension',
  CORNER_RADIUS: 'dimension',
  STROKE_FLOAT: 'dimension',
  EFFECT_FLOAT: 'dimension'
}

// Faute de scope, on lit le nom. C'est une supposition, elle est signalée.
const typeParNom = (nom) => {
  const n = nom.toLowerCase()
  if (/opacit/.test(n)) return 'number'
  if (/weight|graisse|poids/.test(n)) return 'fontWeight'
  if (/duration|dur[ée]e|transition|delay|d[ée]lai/.test(n)) return 'duration'
  if (/z-?index|\bordre\b|\border\b/.test(n)) return 'number'
  return 'dimension'
}

// Type DTCG d'une variable. Null quand aucun type ne convient : booléens, chaînes libres.
const typer = (variable) => {
  const scopes = variable.scopes || []
  if (variable.resolvedType === 'COLOR') return { type: 'color' }
  if (variable.resolvedType === 'FLOAT') {
    const scope = scopes.find((s) => TYPE_PAR_SCOPE[s])
    return scope ? { type: TYPE_PAR_SCOPE[scope] } : { type: typeParNom(variable.name), deduit: true }
  }
  if (variable.resolvedType === 'STRING') {
    if (scopes.includes('FONT_FAMILY')) return { type: 'fontFamily' }
    if (/font|police|famil/i.test(variable.name)) return { type: 'fontFamily', deduit: true }
  }
  return { type: null }
}

// Le px est canonique dans le pivot. Le rem éventuel se décide à la génération du CSS.
const valeurNombre = (n, type) =>
  type === 'dimension' ? dimension(n) : type === 'duration' ? duree(n) : arrondir(n)

const GRAISSES = {
  thin: 100, hairline: 100, extralight: 200, ultralight: 200, light: 300,
  regular: 400, normal: 400, book: 400, medium: 500, semibold: 600, demibold: 600,
  bold: 700, extrabold: 800, ultrabold: 800, black: 900, heavy: 900
}
// « Italic » ou « Oblique » seul, sans graisse, est l'italique du regular.
const graisse = (styleFigma) => {
  const nom = styleFigma.replace(/italic|oblique/gi, '').replace(/\s+/g, '').toLowerCase()
  return nom === '' ? 400 : GRAISSES[nom]
}

// Un token est déprécié quand sa description Figma commence par « Deprecated »,
// suivi d'une fin de texte ou d'un caractère qui n'est ni lettre ni chiffre.
// Renvoie le texte qui suit le mot (remplaçant, raison), ou true s'il n'y en a
// pas, ou undefined quand le token n'est pas déprécié.
const deprecation = (description) => {
  const m = /^\s*deprecated(?![\p{L}\p{N}])(.*)$/isu.exec(description || '')
  if (!m) return undefined
  const suite = m[1].replace(/^[\s:.,-]+/, '').trim()
  return suite || true
}

// La description Figma passe en premier pour un token déprécié, afin que le
// commentaire généré commence par « Deprecated ». Sinon la générée précède.
const assemblerDescription = (generee, figma, deprecie) =>
  (deprecie ? [figma, generee] : [generee, figma]).filter(Boolean).join(' ')

// ------------------------------------------------------------- descriptions

// Contraste WCAG 2 d'une couleur sur fond blanc : luminance relative canal par
// canal, comparée à la luminance du blanc (1).
const luminanceRelative = ({ r, g, b }) => {
  const canal = (c) => (c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4))
  return 0.2126 * canal(r) + 0.7152 * canal(g) + 0.0722 * canal(b)
}
const contrasteBlanc = (composantes) => (1 + 0.05) / (luminanceRelative(composantes) + 0.05)

// Nombre à la française, sans décimale inutile : formatDecimalFr(15.04, 1) → « 15 »,
// formatDecimalFr(1.28, 1) → « 1,3 ».
const formatDecimalFr = (n, decimales) => {
  const r = Math.round(n * 10 ** decimales) / 10 ** decimales
  return Number.isInteger(r) ? String(r) : String(r).replace('.', ',')
}
const formatPx = (n) => formatDecimalFr(n, 4)
const BASE_REM = 16
const formatRem = (px) => `${arrondir(px / BASE_REM)}rem`

// Grammaire des noms de primitives, dans deux lectures : tolérante (casse
// ignorée, tiret accepté avant la dernière partie, « font/size/16 » comme
// « font/size-18 ») pour repérer la typologie d'une description, stricte
// (minuscules, barre oblique) pour la nomenclature attendue en page
// Primitives. colorAlpha est vérifiée avant colorPalier : « color/black-alpha/20 »
// correspond aussi à colorPalier (« black-alpha » est un mot kebab valide),
// et doit rester une forme alpha plutôt qu'un palier hors échelle.
const GRAMMAIRE_PRIMITIVES = [
  { id: 'colorBlanc', tolerante: /^color\/white$/i, stricte: /^color\/white$/ },
  { id: 'colorNoir', tolerante: /^color\/black$/i, stricte: /^color\/black$/ },
  { id: 'colorAlpha', tolerante: /^color\/([a-z0-9-]+)-alpha[/-]\d+$/i, stricte: /^color\/[a-z0-9]+(?:-[a-z0-9]+)*-alpha\/\d+$/ },
  { id: 'colorPalier', tolerante: /^color\/([a-z0-9-]+)[/-](\d{2,3})$/i, stricte: /^color\/[a-z0-9]+(?:-[a-z0-9]+)*\/\d+$/ },
  { id: 'spacing', tolerante: /^spacing[/-]\d+(?:\.\d+)?$/i, stricte: /^spacing\/\d+$/ },
  { id: 'size', tolerante: /^size[/-]\d+(?:\.\d+)?$/i, stricte: /^size\/\d+$/ },
  { id: 'borderWidth', tolerante: /^border\/width[/-]\d+(?:\.\d+)?$/i, stricte: /^border\/width\/\d+$/ },
  { id: 'borderRadius', tolerante: /^border\/radius[/-]\d+(?:\.\d+)?$/i, stricte: /^border\/radius\/\d+$/ },
  { id: 'borderRadiusFull', tolerante: /^border\/radius[/-]full$/i, stricte: /^border\/radius\/full$/ },
  { id: 'breakpoint', tolerante: /^breakpoint[/-]\d+(?:\.\d+)?$/i, stricte: /^breakpoint\/\d+$/ },
  { id: 'fontSize', tolerante: /^font\/size[/-]\d+(?:\.\d+)?$/i, stricte: /^font\/size\/\d+$/ },
  { id: 'fontLineHeight', tolerante: /^font\/line-height[/-]\d+(?:\.\d+)?$/i, stricte: /^font\/line-height\/\d+$/ },
  { id: 'fontWeight', tolerante: /^font\/weight[/-]([a-z]+)$/i, stricte: /^font\/weight\/[a-z0-9]+(?:-[a-z0-9]+)*$/ },
  { id: 'fontFamily', tolerante: /^font\/family[/-]([a-z-]+)$/i, stricte: /^font\/family\/[a-z0-9]+(?:-[a-z0-9]+)*$/ }
]

// Typologie d'une description, lecture tolérante de la grammaire ci-dessus.
const analyserNom = (nom) => {
  for (const { id, tolerante } of GRAMMAIRE_PRIMITIVES) {
    const trouve = tolerante.exec(nom.trim())
    if (trouve) return { typologie: id, m: trouve }
  }
  return null
}

// Variables d'un style de texte (body/2/regular/font-size) : le dernier segment
// dit la propriété, le reste du nom est le style. Description sans valeur, donc
// identique dans tous les modes.
const PHRASES_STYLE = {
  'font-size': 'Taille de texte',
  'line-height': 'Interligne',
  'font-family': 'Famille de police',
  'font-weight': 'Graisse'
}
const descriptionVariableDeStyle = (nom) => {
  const segments = nom.trim().split('/')
  if (segments.length < 2) return null
  const propriete = segments[segments.length - 1]
  if (!Object.prototype.hasOwnProperty.call(PHRASES_STYLE, propriete)) return null
  const style = segments.slice(0, -1).join('/')
  return `${PHRASES_STYLE[propriete]} du style ${style}.`
}

// Fabrique le générateur de description.
const construireGenerateur = () => {
  const phraseContraste = (valeur) => {
    if (valeur.alpha !== undefined) return ''
    const [r, g, b] = valeur.components
    return ` Contraste de ${formatDecimalFr(contrasteBlanc({ r, g, b }), 1)}:1 sur blanc.`
  }

  // Les variables de style de texte reçoivent leur description même en alias.
  // Sinon, null si la valeur est une référence (alias non résolu) ou si le nom ne
  // correspond à aucune typologie reconnue.
  return (variable, valeur) => {
    if (valeur === null || valeur === undefined) return null
    const deStyle = descriptionVariableDeStyle(variable.name)
    if (deStyle) return deStyle
    if (typeof valeur === 'string' && valeur.startsWith('{')) return null
    const typo = analyserNom(variable.name)
    if (!typo) return null
    const estCouleur = valeur && typeof valeur === 'object' && typeof valeur.hex === 'string'
    const estDimension = valeur && typeof valeur === 'object' && valeur.unit === 'px'

    switch (typo.typologie) {
      case 'colorBlanc':
        if (!estCouleur) return null
        return `Blanc, sans teinte ni palier. ${valeur.hex.toUpperCase()}.`
      case 'colorNoir':
        if (!estCouleur) return null
        return `Noir, sans teinte ni palier. ${valeur.hex.toUpperCase()}.${phraseContraste(valeur)}`
      case 'colorAlpha': {
        if (!estCouleur) return null
        const base = typo.m[1].toLowerCase()
        const libelle = base === 'black' ? 'Noir' : base === 'white' ? 'Blanc' : `Couleur ${typo.m[1]}`
        const pourcentage = Math.round((valeur.alpha !== undefined ? valeur.alpha : 1) * 100)
        return `${libelle} à ${pourcentage} % d'opacité.`
      }
      case 'colorPalier':
        if (!estCouleur) return null
        return `Couleur ${typo.m[1]}, palier ${typo.m[2]}, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. ${valeur.hex.toUpperCase()}.${phraseContraste(valeur)}`
      case 'spacing':
        if (!estDimension) return null
        return `Espacement de ${formatPx(valeur.value)} px, soit ${formatRem(valeur.value)} dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.`
      case 'size':
        if (!estDimension) return null
        return `Dimension de ${formatPx(valeur.value)} px, soit ${formatRem(valeur.value)} dans le code. Pour la largeur ou la hauteur d'un élément, comme une icône ou un logo. Pour l'espace dans un élément ou entre deux éléments, utiliser un token spacing.`
      case 'borderRadiusFull':
        if (!estDimension) return null
        return `Arrondi complet, qui donne une forme de pilule, ou un cercle sur un élément carré. Vaut ${formatPx(valeur.value)} px.`
      case 'borderRadius':
        if (!estDimension) return null
        return `Arrondi d'angle de ${formatPx(valeur.value)} px.`
      case 'borderWidth':
        if (!estDimension) return null
        return `Épaisseur de bordure de ${formatPx(valeur.value)} px.`
      case 'breakpoint':
        if (!estDimension) return null
        return `Largeur d'écran de ${formatPx(valeur.value)} px à partir de laquelle la mise en page change. Reste en px dans le code.`
      case 'fontSize': {
        if (!estDimension) return null
        return `Taille de texte de ${formatPx(valeur.value)} px, soit ${formatRem(valeur.value)} dans le code.`
      }
      case 'fontLineHeight': {
        if (!estDimension) return null
        return `Interligne de ${formatPx(valeur.value)} px, soit ${formatRem(valeur.value)} dans le code.`
      }
      case 'fontWeight':
        if (typeof valeur !== 'number') return null
        return `Graisse ${typo.m[1]}, de valeur ${valeur}.`
      case 'fontFamily':
        if (typeof valeur !== 'string') return null
        return `Famille de police ${valeur}.`
      default:
        return null
    }
  }
}

// -------------------------------------------------------------- nomenclature

// Règles de la page Primitives de la documentation. Elles ne portent que sur les
// variables des collections dont le nom commence par « Primitive » : les tokens
// sémantiques ne sont pas concernés. Lecture stricte de GRAMMAIRE_PRIMITIVES
// (voir plus haut).
const formeCorrespondante = (nom) => GRAMMAIRE_PRIMITIVES.find((f) => f.stricte.test(nom)) || null

// Formes dont le dernier segment porte une valeur en px comparable à la variable.
const FORMES_AVEC_VALEUR = ['spacing', 'size', 'borderWidth', 'borderRadius', 'fontSize', 'fontLineHeight', 'breakpoint']
const CATEGORIES_CONNUES = ['color', 'font', 'border', 'spacing', 'size', 'breakpoint']
const EXEMPLE_CATEGORIE = { color: 'color/blue/500', font: 'font/size/16', border: 'border/radius/8', spacing: 'spacing/16', size: 'size/24', breakpoint: 'breakpoint/1024' }

// Une forme non reconnue peut n'être qu'un tiret final à la place d'une barre
// oblique avant la valeur : « font/size-16 » au lieu de « font/size/16 ».
const dernierTiretEnBarre = (nom) => {
  const i = nom.lastIndexOf('-')
  return i === -1 ? null : nom.slice(0, i) + '/' + nom.slice(i + 1)
}
const dernierSegment = (nom) => nom.slice(nom.lastIndexOf('/') + 1)

// Un seul motif par nom : celui de la première règle qui s'applique, jamais deux.
const motifNomenclature = (variable, collection) => {
  const nom = variable.name.trim()

  // 1. Écriture : minuscules, sans accent ni espace, tiret entre les mots.
  if (!nom.split('/').every((p) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(p))) {
    return "s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots"
  }

  // 2. Forme attendue selon la catégorie.
  const forme = formeCorrespondante(nom)
  if (!forme) {
    const corrige = dernierTiretEnBarre(nom)
    if (corrige && formeCorrespondante(corrige)) return `il manque une barre oblique avant le nombre, à écrire ${corrige}`
    const categorie = nom.split('/')[0]
    if (!CATEGORIES_CONNUES.includes(categorie)) return 'le nom doit commencer par color, font, border, spacing, size ou breakpoint'
    return `ce nom ne suit pas le modèle des noms ${categorie}, par exemple ${EXEMPLE_CATEGORIE[categorie]}`
  }

  // 3. Palier : 050, ou un multiple de 100 de 100 à 900, sur trois chiffres.
  if (forme.id === 'colorPalier') {
    const palier = dernierSegment(nom)
    const n = Number(palier)
    const surEchelle = palier === '050' || (/^\d{3}$/.test(palier) && n % 100 === 0 && n >= 100 && n <= 900)
    if (!surEchelle) return 'palier hors échelle, attendu : 050, ou de 100 à 900 par pas de 100'
  }

  // 4. Valeur dans le nom : ignorée quand la valeur par défaut est un alias.
  if (FORMES_AVEC_VALEUR.includes(forme.id)) {
    const n = Number(dernierSegment(nom))
    const brut = variable.valuesByMode[collection.defaultModeId]
    if (typeof brut === 'number') {
      const reel = arrondir(brut)
      if (arrondir(n) !== reel) return `le nom indique ${n}, mais la valeur est de ${formatPx(reel)} px`
    }
  }

  return null
}

// ------------------------------------------------------------------ export

// Lit le fichier Figma et construit l'état de travail que les étapes suivantes
// se partagent : index des collections et des variables, rapport initial, arbre
// de sortie par collection, et les fonctions de conversion qui s'appuient dessus.
const lireFichier = async () => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const variables = await figma.variables.getLocalVariablesAsync()

  const collectionParId = new Map(collections.map((c) => [c.id, c]))
  const variableParId = new Map(variables.map((v) => [v.id, v]))

  const rapport = {
    collections: collections.length,
    variables: variables.length,
    exportees: 0,
    stylesTexte: 0,
    stylesEffet: 0,
    conflits: [],
    aliasIntrouvables: [],
    aliasIntrouvablesMode: [],
    typesDeduits: [],
    nomsAssainis: [],
    aliasExternes: [],
    ecartes: [],
    sansDescription: [],
    nomenclature: [],
    stylesIncomplets: []
  }
  const signaler = (liste, texte) => { if (!liste.includes(texte)) liste.push(texte) }

  const collectionDe = async (variable) =>
    collectionParId.get(variable.variableCollectionId) ||
    (await figma.variables.getVariableCollectionByIdAsync(variable.variableCollectionId))

  // Le nom du token est celui de la variable, sans la collection : la nomenclature
  // garde les noms uniques d'une collection à l'autre, et un doublon remonte en conflit.
  const cheminDe = (variable) => chemin(variable.name)

  // Figma rend encore une variable supprimée à partir de son id. Locale mais
  // absente des variables du fichier, elle est traitée comme introuvable.
  const variableDepuis = async (id) => {
    if (variableParId.has(id)) return variableParId.get(id)
    const v = await figma.variables.getVariableByIdAsync(id)
    return v && v.remote ? v : null
  }

  // Référence DTCG d'un lien Figma vers une variable locale. Null pour un lien
  // vers une autre librairie, LIEN_CASSE pour une variable introuvable.
  const referenceDe = async (lien) => {
    const alias = Array.isArray(lien) ? lien[0] : lien
    if (alias?.type !== 'VARIABLE_ALIAS') return null
    const cible = await variableDepuis(alias.id)
    if (!cible) return LIEN_CASSE
    return cible.remote ? null : reference(cheminDe(cible))
  }

  // Valeur concrète d'une variable, en suivant les alias jusqu'au bout.
  const valeurConcrete = async (variable, modeId, profondeur = 0) => {
    const c = await collectionDe(variable)
    const candidats = [variable.valuesByMode[modeId], variable.valuesByMode[c?.defaultModeId], Object.values(variable.valuesByMode)[0]]
    const brut = candidats.find((v) => v !== undefined)
    if (brut?.type === 'VARIABLE_ALIAS' && profondeur < 10) {
      const cible = await variableDepuis(brut.id)
      return cible ? valeurConcrete(cible, modeId, profondeur + 1) : null
    }
    return brut
  }

  // Convertit une valeur Figma en valeur DTCG. Un alias local devient une référence.
  // Un alias vers une librairie externe est résolu en valeur : la référence ne
  // pointerait sur rien dans ce fichier. Le lien reste tracé dans les extensions.
  const convertir = async (brut, variable, type, modeId, extensions) => {
    let valeur = brut
    if (valeur?.type === 'VARIABLE_ALIAS') {
      const cible = await variableDepuis(valeur.id)
      if (!cible) {
        // Dans le mode par défaut, le token est écarté. Dans un autre mode, il reste
        // exporté : ce mode retombe sur la valeur par défaut (null, pas de surcharge).
        const c = await collectionDe(variable)
        if (!c || modeId === c.defaultModeId) {
          signaler(rapport.aliasIntrouvables, variable.name)
        } else {
          const nomMode = c.modes.find((m) => m.modeId === modeId)?.name ?? modeId
          signaler(rapport.aliasIntrouvablesMode, `${variable.name}, mode ${nomMode} : reprend la valeur du mode par défaut`)
        }
        return null
      }
      if (!cible.remote) return reference(cheminDe(cible))
      signaler(rapport.aliasExternes, `${variable.name} : pointe vers ${cible.name}`)
      if (!extensions.alias) extensions.alias = cible.name
      valeur = await valeurConcrete(cible, modeId)
      if (valeur === null || valeur === undefined) return null
    }
    if (variable.resolvedType === 'COLOR') return couleur(valeur)
    if (variable.resolvedType === 'FLOAT') return valeurNombre(valeur, type)
    return valeur
  }

  // Racines de tous les arbres de tokens produits (un par set, un par contexte de
  // modifier) : la sérialisation applique le tri des groupes uniquement à partir
  // de ces racines, jamais à l'intérieur d'un $value ou d'un $extensions.
  const racinesDeGroupe = new WeakSet()

  // Un arbre unique, toutes collections et tous styles confondus, sert uniquement
  // à détecter les conflits de nom : les sets sont fusionnés à la résolution, un
  // conflit entre deux collections est donc aussi réel qu'un conflit interne.
  const arbreConflits = {}
  const placer = (segments, jeton, arbreCible, nomAffiche) => {
    if (!poser(arbreConflits, segments, jeton)) { rapport.conflits.push(nomAffiche); return false }
    poser(arbreCible, segments, jeton)
    return true
  }

  // La date s'ajoute plus tard, à la sérialisation (docHorodate) : l'analyse
  // est mise en cache et peut resservir à plusieurs dépôts ou téléchargements.
  const doc = {
    name: figma.root.name,
    version: '2025.10',
    $extensions: { 'fr.axa.canopee': { source: figma.root.name, plugin: VERSION } },
    sets: {}
  }

  // Un arbre de sortie par collection, plus, pour chaque collection à plusieurs
  // modes, un arbre par mode autre que le défaut : il ne recevra que les tokens
  // dont la valeur y diffère du mode par défaut.
  const infoParCollection = new Map()
  const collectionsEcartees = new Set()
  for (const c of collections) {
    // Le nom d'un set identifie toute sa collection. Une fois assainis, « A.B » et
    // « A-B » donnent le même, et Styles est réservé aux styles : la collection en
    // double écraserait l'autre. Elle reste hors du fichier et remonte en conflit,
    // ce qui bloque le dépôt.
    const nom = nomSet(c)
    if (doc.sets[nom] || nom === SET_STYLES) {
      const motif = doc.sets[nom] ? `même nom que ${collections.find((autre) => nomSet(autre) === nom).name} dans le code` : 'nom réservé aux styles de texte et d\'effet'
      rapport.conflits.push(`Collection ${c.name} : ${motif}`)
      collectionsEcartees.add(c.id)
      continue
    }
    const arbre = {}
    racinesDeGroupe.add(arbre)
    doc.sets[nom] = { sources: [arbre] }
    const info = { collection: c, arbre }
    if (c.modes.length > 1) {
      info.arbresContexte = new Map(c.modes.filter((m) => m.modeId !== c.defaultModeId).map((m) => [m.modeId, {}]))
    }
    infoParCollection.set(c.id, info)
  }

  const variablesGardees = variables.filter((v) => !collectionsEcartees.has(v.variableCollectionId))
  return { variables: variablesGardees, collectionParId, rapport, signaler, doc, infoParCollection, racinesDeGroupe, cheminDe, referenceDe, convertir, placer }
}

// Nomenclature des primitives : uniquement les collections « Primitive… »,
// indépendamment de ce que la variable exporte ou non.
const verifierNomenclaturePrimitives = (variables, collectionParId, rapport) => {
  for (const variable of variables) {
    const collection = collectionParId.get(variable.variableCollectionId)
    if (!collection || !/^primitive/i.test(collection.name)) continue
    const motif = motifNomenclature(variable, collection)
    if (motif) rapport.nomenclature.push(`« ${variable.name} » : ${motif}`)
  }
}

// Construit le token DTCG de chaque variable exportable et le place dans
// l'arbre de sa collection, plus un token par mode qui diffère du mode par
// défaut dans l'arbre de contexte du modifier correspondant.
const convertirVariables = async (variables, collectionParId, infoParCollection, rapport, signaler, cheminDe, convertir, genererDescription, placer) => {
  for (const variable of variables) {
    const collection = collectionParId.get(variable.variableCollectionId)
    const { type, deduit } = typer(variable)
    if (!type || !collection) {
      const motif = variable.resolvedType === 'BOOLEAN' ? 'variable Boolean'
        : !collection ? 'collection introuvable' : 'variable String'
      rapport.ecartes.push(`${variable.name} : ${motif}`)
      continue
    }

    const segments = cheminDe(variable)
    if (!segments.length) {
      rapport.ecartes.push(`${variable.name} : nom vide`)
      continue
    }

    const extensions = {}
    if (estAssaini(variable.name)) {
      rapport.nomsAssainis.push(variable.name)
      extensions.nomFigma = variable.name
    }
    // Un token déprécié n'a plus de scope : ce n'est pas un oubli à signaler.
    if (deduit) {
      if (deprecation(variable.description) === undefined) rapport.typesDeduits.push(`${variable.name} : traité comme ${LIBELLE_TYPE[type] || type}`)
      extensions.typeDeduit = true
    }

    const defaut = await convertir(variable.valuesByMode[collection.defaultModeId], variable, type, collection.defaultModeId, extensions)
    if (defaut === null) continue

    const info = infoParCollection.get(collection.id)

    // Valeur de chaque autre mode, pour comparaison au mode par défaut une fois
    // le token construit. Le calcul alimente aussi les extensions (alias externe).
    const valeursAutresModes = []
    if (info.arbresContexte) {
      for (const m of collection.modes) {
        if (m.modeId === collection.defaultModeId) continue
        const v = await convertir(variable.valuesByMode[m.modeId], variable, type, m.modeId, extensions)
        if (v !== null) valeursAutresModes.push({ modeId: m.modeId, valeur: v })
      }
    }

    // La description générée précède la description Figma, jointes par une
    // espace, sauf pour un token déprécié. Rien n'est jamais réécrit dans
    // Figma, seulement dans le JSON.
    const deprecie = deprecation(variable.description)
    const genereDefaut = genererDescription(variable, defaut)
    const descriptionDefaut = assemblerDescription(genereDefaut, variable.description, deprecie)

    const jeton = { $type: type, $value: defaut }
    if (descriptionDefaut) jeton.$description = descriptionDefaut
    if (deprecie !== undefined) jeton.$deprecated = deprecie
    if (Object.keys(extensions).length) jeton.$extensions = { 'fr.axa.canopee': extensions }

    if (!placer(segments, jeton, info.arbre, variable.name)) continue
    rapport.exportees++
    if (!descriptionDefaut) signaler(rapport.sansDescription, variable.name)

    for (const { modeId, valeur } of valeursAutresModes) {
      if (JSON.stringify(valeur) !== JSON.stringify(defaut)) {
        const genereCtx = genererDescription(variable, valeur)
        const descriptionCtx = assemblerDescription(genereCtx, variable.description, deprecie)
        const jetonCtx = { ...jeton, $value: valeur }
        if (descriptionCtx) jetonCtx.$description = descriptionCtx
        else delete jetonCtx.$description
        poser(info.arbresContexte.get(modeId), segments, jetonCtx)
      }
    }
  }
}

// Ajoute les styles de texte et d'effet dans un set Styles séparé, s'il y en a.
const ajouterStyles = async (doc, racinesDeGroupe, rapport, referenceDe, placer, signaler) => {
  const arbreStyles = {}
  await ajouterStylesTexte(arbreStyles, rapport, referenceDe, placer, signaler)
  await ajouterStylesEffet(arbreStyles, rapport, referenceDe, placer, signaler)
  if (Object.keys(arbreStyles).length) {
    racinesDeGroupe.add(arbreStyles)
    doc.sets[SET_STYLES] = { sources: [arbreStyles] }
  }
}

// Un modifier par collection à plusieurs modes : le contexte du mode par défaut
// est vide, les autres ne portent que les tokens dont la valeur diffère. Puis
// resolutionOrder, qui fusionne tous les sets, puis tous les modifiers.
const assemblerModifiersEtOrdre = (doc, infoParCollection, racinesDeGroupe) => {
  for (const info of infoParCollection.values()) {
    if (!info.arbresContexte) continue
    if (!doc.modifiers) doc.modifiers = {}
    const c = info.collection
    const contexts = {}
    for (const m of c.modes) {
      if (m.modeId === c.defaultModeId) { contexts[m.name] = []; continue }
      const arbreMode = info.arbresContexte.get(m.modeId)
      if (Object.keys(arbreMode).length) {
        racinesDeGroupe.add(arbreMode)
        contexts[m.name] = [arbreMode]
      } else {
        contexts[m.name] = []
      }
    }
    doc.modifiers[nomSet(c)] = { default: c.modes.find((m) => m.modeId === c.defaultModeId)?.name, contexts }
  }

  const echapperPointeur = (s) => s.replace(/~/g, '~0').replace(/\//g, '~1')
  doc.resolutionOrder = [
    ...Object.keys(doc.sets).map((nom) => ({ $ref: `#/sets/${echapperPointeur(nom)}` })),
    ...(doc.modifiers ? Object.keys(doc.modifiers).map((nom) => ({ $ref: `#/modifiers/${echapperPointeur(nom)}` })) : [])
  ]
}

// Vérifie et compare le fichier Figma courant : lecture, nomenclature,
// conversion des variables en tokens, styles, puis assemblage des modifiers
// et de l'ordre de résolution. Le nom dit son usage principal : vérifier et
// comparer, l'export n'étant qu'une sérialisation du même résultat.
const analyserFichier = async () => {
  const { variables, collectionParId, rapport, signaler, doc, infoParCollection, racinesDeGroupe, cheminDe, referenceDe, convertir, placer } = await lireFichier()

  const genererDescription = construireGenerateur()

  verifierNomenclaturePrimitives(variables, collectionParId, rapport)

  await convertirVariables(variables, collectionParId, infoParCollection, rapport, signaler, cheminDe, convertir, genererDescription, placer)

  await ajouterStyles(doc, racinesDeGroupe, rapport, referenceDe, placer, signaler)

  assemblerModifiersEtOrdre(doc, infoParCollection, racinesDeGroupe)

  return { doc, rapport, racinesDeGroupe }
}

// ------------------------------------------------------------------ styles

// Un style relié à une variable introuvable n'est pas exporté : sa référence
// ne pointerait sur rien dans le fichier. Il remonte dans les liens cassés.
const LIEN_CASSE = 'lien-casse'

// Champs du type typography de DTCG : les seuls qu'une variable Figma peut
// remplacer par une référence (voir boundVariables dans ajouterStylesTexte).
const CHAMPS_TYPOGRAPHIE = ['fontFamily', 'fontSize', 'fontWeight', 'letterSpacing', 'lineHeight']

// Italique, soulignement et casse : rangés dans $extensions, seulement quand le
// style les utilise. DTCG ne les connaît pas, et le code les écrit dans le CSS
// des composants plutôt qu'en token, donc Terrazzo ne doit pas les voir. Hors
// de CHAMPS_TYPOGRAPHIE : Figma peut lier fontStyle à une variable dont la
// valeur est un nom de style Figma (« Semibold Italic »), pas un font-style CSS.
const CHAMPS_TYPOGRAPHIE_HORS_DTCG = ['fontStyle', 'textDecoration', 'textTransform']

const ajouterStylesTexte = async (arbreStyles, rapport, referenceDe, placer, signaler) => {
  for (const style of await figma.getLocalTextStylesAsync()) {
    // Sans équivalent DTCG : le style entier est écarté, pas seulement l'interlignage.
    const { lineHeight: lh, letterSpacing: ls } = style
    if (lh.unit !== 'PIXELS' && lh.unit !== 'PERCENT') {
      rapport.ecartes.push(`${style.name} : interligne automatique`)
      continue
    }

    const poids = graisse(style.fontName.style)
    const valeur = {
      fontFamily: style.fontName.family,
      fontSize: dimension(style.fontSize),
      fontWeight: poids === undefined ? style.fontName.style : poids,
      // DTCG n'autorise que px et rem : un pourcentage se convertit en px de la taille de police.
      letterSpacing: ls.unit === 'PIXELS' ? dimension(ls.value)
        : ls.unit === 'PERCENT' ? dimension(ls.value / 100 * style.fontSize)
        : dimension(0),
      // lineHeight brut est un nombre DTCG : le ratio à la taille de police.
      lineHeight: lh.unit === 'PIXELS' ? arrondir(lh.value / style.fontSize) : arrondir(lh.value / 100)
    }
    // Exportés quand même, mais avec une perte : signalés à corriger, pas écartés.
    if (poids === undefined) rapport.stylesIncomplets.push(`${style.name} : graisse « ${style.fontName.style} » non reconnue, exportée telle quelle`)

    // Voir CHAMPS_TYPOGRAPHIE_HORS_DTCG. Champs absents au défaut.
    const horsDtcg = {}
    if (/italic/i.test(style.fontName.style)) horsDtcg.fontStyle = 'italic'
    else if (/oblique/i.test(style.fontName.style)) horsDtcg.fontStyle = 'oblique'
    if (style.textDecoration === 'UNDERLINE') horsDtcg.textDecoration = 'underline'
    else if (style.textDecoration === 'STRIKETHROUGH') horsDtcg.textDecoration = 'line-through'
    if (style.textCase === 'UPPER') horsDtcg.textTransform = 'uppercase'
    else if (style.textCase === 'LOWER') horsDtcg.textTransform = 'lowercase'
    else if (style.textCase === 'TITLE') horsDtcg.textTransform = 'capitalize'
    else if (style.textCase === 'SMALL_CAPS' || style.textCase === 'SMALL_CAPS_FORCED') {
      rapport.stylesIncomplets.push(`${style.name} : les petites capitales ne sont pas exportées`)
    }

    // Un champ relié à une variable garde sa référence plutôt que sa valeur.
    let casse = false
    for (const [champ, lien] of Object.entries(style.boundVariables || {})) {
      if (!CHAMPS_TYPOGRAPHIE.includes(champ)) continue
      const ref = await referenceDe(lien)
      if (ref === LIEN_CASSE) casse = true
      else if (ref) valeur[champ] = ref
    }
    if (casse) {
      signaler(rapport.aliasIntrouvables, style.name)
      continue
    }

    const jeton = { $type: 'typography', $value: valeur }
    if (style.description) jeton.$description = style.description
    if (deprecation(style.description) !== undefined) jeton.$deprecated = deprecation(style.description)
    if (Object.keys(horsDtcg).length) jeton.$extensions = { 'fr.axa.canopee': horsDtcg }

    if (placer(['typographie', ...chemin(style.name)], jeton, arbreStyles, style.name)) {
      rapport.stylesTexte++
      if (!style.description) signaler(rapport.sansDescription, style.name)
    }
  }
}

// Correspondance entre les champs d'un effet Figma et ceux d'une ombre DTCG.
const CHAMPS_OMBRE = { color: 'color', offsetX: 'offsetX', offsetY: 'offsetY', radius: 'blur', spread: 'spread' }

const ajouterStylesEffet = async (arbreStyles, rapport, referenceDe, placer, signaler) => {
  for (const style of await figma.getLocalEffectStylesAsync()) {
    const ombres = []
    let casse = false
    for (const e of style.effects) {
      if ((e.type !== 'DROP_SHADOW' && e.type !== 'INNER_SHADOW') || e.visible === false) continue
      const ombre = {
        color: couleur(e.color),
        offsetX: dimension(e.offset.x),
        offsetY: dimension(e.offset.y),
        blur: dimension(e.radius),
        spread: dimension(e.spread || 0),
        inset: e.type === 'INNER_SHADOW'
      }
      for (const [champ, lien] of Object.entries(e.boundVariables || {})) {
        const ref = CHAMPS_OMBRE[champ] && (await referenceDe(lien))
        if (ref === LIEN_CASSE) casse = true
        else if (ref) ombre[CHAMPS_OMBRE[champ]] = ref
      }
      ombres.push(ombre)
    }
    if (casse) {
      signaler(rapport.aliasIntrouvables, style.name)
      continue
    }
    if (!ombres.length) {
      rapport.ecartes.push(`${style.name} : effet sans ombre`)
      continue
    }
    const jeton = { $type: 'shadow', $value: ombres.length === 1 ? ombres[0] : ombres }
    if (style.description) jeton.$description = style.description
    if (deprecation(style.description) !== undefined) jeton.$deprecated = deprecation(style.description)

    if (placer(['ombre', ...chemin(style.name)], jeton, arbreStyles, style.name)) {
      rapport.stylesEffet++
      if (!style.description) signaler(rapport.sansDescription, style.name)
    }
  }
}

// ------------------------------------------------------------------ sortie

// Ordre des propriétés DTCG d'un token, dans un groupe.
const ORDRE = ['$type', '$value', '$description', '$deprecated', '$extensions']
const rang = (k) => (ORDRE.includes(k) ? ORDRE.indexOf(k) : ORDRE.length)
const estNumerique = (k) => /^\d+$/.test(k)

// Ordre des clés à l'intérieur d'un groupe de tokens : les propriétés DTCG
// d'abord, puis les clés entièrement numériques triées par valeur (« 050 » avant
// « 100 » avant « 900 »), puis les autres, en comparaison de chaînes simple.
// Ne sert jamais à l'intérieur d'un $value ou d'un $extensions, qui gardent
// l'ordre dans lequel ils ont été construits.
const clesTokenGroupe = (noeud) => {
  const toutes = Object.keys(noeud).filter((k) => noeud[k] !== undefined)
  const dtcg = toutes.filter((k) => ORDRE.includes(k)).sort((a, b) => rang(a) - rang(b))
  const numeriques = toutes.filter((k) => !ORDRE.includes(k) && estNumerique(k))
    .sort((a, b) => Number(a) - Number(b) || a.length - b.length)
  const autres = toutes.filter((k) => !ORDRE.includes(k) && !estNumerique(k))
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0))
  return [...dtcg, ...numeriques, ...autres]
}

const tableauSimple = (v) => v.every((e) => typeof e === 'number' || typeof e === 'string' || typeof e === 'boolean')

// Sérialiseur maison : même format que JSON.stringify(v, null, 2) + '\n', avec deux
// écarts assumés. D'une part un tableau qui ne contient que des nombres, des
// chaînes ou des booléens tient sur une ligne. D'autre part, à partir d'une racine
// de groupe (un set ou un contexte de modifier), les clés suivent clesTokenGroupe
// plutôt que l'ordre natif de l'objet, lui-même corrompu par V8, qui fait
// toujours remonter en premier les clés numériques canoniques. Cet ordre de
// groupe se transmet aux enfants, sauf sous $value et $extensions, qui gardent
// leur ordre de construction jusqu'au bout.
const val = (v, niveau, groupe, racines) => {
  if (v === null || typeof v !== 'object') return JSON.stringify(v)
  const IND = '  '.repeat(niveau)
  const INDIN = '  '.repeat(niveau + 1)
  if (Array.isArray(v)) {
    if (!v.length) return '[]'
    if (tableauSimple(v)) return '[' + v.map((e) => JSON.stringify(e)).join(', ') + ']'
    return '[\n' + v.map((e) => INDIN + val(e, niveau + 1, groupe, racines)).join(',\n') + '\n' + IND + ']'
  }
  const estGroupe = groupe || racines.has(v)
  const cles = estGroupe ? clesTokenGroupe(v) : Object.keys(v).filter((k) => v[k] !== undefined)
  if (!cles.length) return '{}'
  const lignes = cles.map((k) => {
    const groupeEnfant = estGroupe && k !== '$value' && k !== '$extensions'
    return INDIN + JSON.stringify(k) + ': ' + val(v[k], niveau + 1, groupeEnfant, racines)
  })
  return '{\n' + lignes.join(',\n') + '\n' + IND + '}'
}

const versJSON = (doc, racines) => val(doc, 0, false, racines) + '\n'

// Nom fixe : il dit ce que contient le fichier et ne dépend pas du nom du fichier Figma.
const NOM_DE_FICHIER = 'design-tokens-canopee.resolver.json'

// -------------------------------------------------------------------- diff

// Un nœud de l'arbre est un token, et non un groupe, s'il porte un $value.
const estFeuille = (noeud) => !!noeud && typeof noeud === 'object' && '$value' in noeud

// Aplatit un arbre de tokens dans la table donnée : chemin (segments joints
// par « / », comme un nom Figma) → { chemin, type, valeur, deprecie }, plus
// modifier et contexte quand meta est fourni (un contexte de modifier). La clé
// de la table reste composite (chemin, modifier, contexte) pour l'unicité,
// mais chemin ne porte jamais le mode : c'est aplatirDoc qui en a besoin pour
// distinguer un même chemin dans deux contextes différents.
const aplatirArbre = (arbre, table, meta) => {
  const visiter = (noeud, segments) => {
    if (estFeuille(noeud)) {
      const chemin = segments.join('/')
      const cle = meta ? `${chemin}\u0000${meta.modifier}\u0000${meta.contexte}` : chemin
      // Les champs hors DTCG d'un style de texte se comparent avec sa valeur,
      // même s'ils sont rangés dans $extensions.
      let valeur = noeud.$value
      const extensions = noeud.$extensions?.['fr.axa.canopee']
      if (noeud.$type === 'typography' && valeur && typeof valeur === 'object' && extensions) {
        valeur = { ...valeur }
        for (const champ of CHAMPS_TYPOGRAPHIE_HORS_DTCG) if (extensions[champ] !== undefined) valeur[champ] = extensions[champ]
      }
      const jeton = { chemin, type: noeud.$type, valeur, deprecie: noeud.$deprecated === true || (typeof noeud.$deprecated === 'string' && noeud.$deprecated !== '') }
      table.set(cle, meta ? { ...jeton, modifier: meta.modifier, contexte: meta.contexte } : jeton)
      return
    }
    if (!noeud || typeof noeud !== 'object') return
    for (const [k, v] of Object.entries(noeud)) visiter(v, [...segments, k])
  }
  visiter(arbre, [])
}

// Aplatit un document resolver entier : tous les sets, puis les tokens des
// contextes de modifiers, marqués par leur modifier et leur contexte.
const aplatirDoc = (doc) => {
  const table = new Map()
  for (const set of Object.values(doc?.sets || {})) {
    const source = set?.sources?.[0]
    if (source) aplatirArbre(source, table)
  }
  for (const [nomModifier, modifier] of Object.entries(doc?.modifiers || {})) {
    for (const [contexte, sources] of Object.entries(modifier?.contexts || {})) {
      const source = sources?.[0]
      if (source) aplatirArbre(source, table, { modifier: nomModifier, contexte })
    }
  }
  return table
}

// Libellé court d'une valeur composite (style de texte ou ombre), pour un
// ajouté, un supprimé, un déprécié, ou pour avant/après d'un modifié :
// « style de texte », « ombre », ou « ombre à N couches » pour un tableau de
// plusieurs couches. Null pour tout ce qui n'est ni typography ni shadow.
const libelleValeurComposite = (type, valeur) => {
  if (type === 'typography') return 'style de texte'
  if (type === 'shadow') return Array.isArray(valeur) ? `ombre à ${valeur.length} couches` : 'ombre'
  return null
}

// Écriture d'une valeur dans un message de diff : hex en majuscules pour une
// couleur, nombre à la française suivi de l'unité pour une dimension ou une
// durée, telle quelle pour une référence, un nombre ou une chaîne, libellé
// court pour une valeur composite (voir libelleValeurComposite), « valeur
// composite » pour tout le reste : plus aucun objet ne sort en JSON brut.
const formaterValeurDiff = (type, valeur) => {
  if (typeof valeur === 'string' && valeur.startsWith('{')) return valeur
  if (type === 'color' && valeur && typeof valeur === 'object' && typeof valeur.hex === 'string') return valeur.hex.toUpperCase()
  if ((type === 'dimension' || type === 'duration') && valeur && typeof valeur === 'object' && typeof valeur.value === 'number') {
    return `${formatDecimalFr(valeur.value, 4)} ${type === 'dimension' ? 'px' : 'ms'}`
  }
  if (typeof valeur === 'number' || typeof valeur === 'string') return String(valeur)
  return libelleValeurComposite(type, valeur) || 'valeur composite'
}

// Libellé français d'un sous-champ de valeur composite.
const LIBELLE_CHAMP = {
  fontFamily: 'police', fontSize: 'taille', fontWeight: 'graisse', lineHeight: 'interligne', letterSpacing: 'espacement des lettres',
  fontStyle: 'style de police', textDecoration: 'décoration du texte', textTransform: 'casse',
  color: 'couleur', offsetX: 'décalage horizontal', offsetY: 'décalage vertical', blur: 'flou', spread: 'étalement', inset: 'intérieure'
}

// Champs d'une ombre DTCG, dans l'ordre où ils apparaissent dans le token
// (voir CHAMPS_TYPOGRAPHIE plus haut pour l'équivalent d'un style de texte).
const CHAMPS_OMBRE_TYPE = ['color', 'offsetX', 'offsetY', 'blur', 'spread', 'inset']

// Valeur d'un sous-champ dans un message de diff : référence telle quelle,
// couleur en hex majuscules, dimension « 16 px », booléen « oui » ou « non »,
// nombre ou chaîne tels quels, « aucun » pour un champ absent (les champs
// hors DTCG d'un style de texte sont optionnels), « valeur composite » sinon.
const formaterValeurChamp = (valeur) => {
  if (valeur === undefined) return 'aucun'
  if (typeof valeur === 'string' && valeur.startsWith('{')) return valeur
  if (valeur && typeof valeur === 'object' && typeof valeur.hex === 'string') return valeur.hex.toUpperCase()
  if (valeur && typeof valeur === 'object' && typeof valeur.value === 'number' && valeur.unit === 'px') return `${formatDecimalFr(valeur.value, 4)} px`
  if (typeof valeur === 'boolean') return valeur ? 'oui' : 'non'
  if (typeof valeur === 'number' || typeof valeur === 'string') return String(valeur)
  return 'valeur composite'
}

// Sous-propriétés qui diffèrent entre deux objets, dans l'ordre de ordre :
// [{ champ, avant, apres }]. Ignore les propriétés identiques des deux côtés.
const diffChampsObjet = (ordre, avant, apres) => {
  const diffs = []
  for (const champ of ordre) {
    const va = avant?.[champ]
    const vb = apres?.[champ]
    if (JSON.stringify(va) === JSON.stringify(vb)) continue
    diffs.push({ champ: LIBELLE_CHAMP[champ] || champ, avant: formaterValeurChamp(va), apres: formaterValeurChamp(vb) })
  }
  return diffs
}

// Détail des sous-champs d'un modifié composite (style de texte ou ombre),
// quand les deux valeurs sont du même type composite. Pour une ombre à
// plusieurs couches de même longueur, un jeu de champs par couche, préfixé
// « couche N, ». Undefined dès que la comparaison n'a pas de sens : type non
// composite, valeur manquante, ou tableaux d'ombres de longueurs différentes.
const champsModifies = (type, avant, apres) => {
  if (!avant || !apres || typeof avant !== 'object' || typeof apres !== 'object') return undefined
  if (type === 'typography') {
    if (Array.isArray(avant) || Array.isArray(apres)) return undefined
    const diffs = diffChampsObjet([...CHAMPS_TYPOGRAPHIE, ...CHAMPS_TYPOGRAPHIE_HORS_DTCG], avant, apres)
    return diffs.length ? diffs : undefined
  }
  if (type === 'shadow') {
    if (!Array.isArray(avant) && !Array.isArray(apres)) {
      const diffs = diffChampsObjet(CHAMPS_OMBRE_TYPE, avant, apres)
      return diffs.length ? diffs : undefined
    }
    if (Array.isArray(avant) && Array.isArray(apres) && avant.length === apres.length) {
      const champs = []
      avant.forEach((couche, i) => {
        for (const d of diffChampsObjet(CHAMPS_OMBRE_TYPE, couche, apres[i])) champs.push({ ...d, champ: `couche ${i + 1}, ${d.champ}` })
      })
      return champs.length ? champs : undefined
    }
    return undefined
  }
  return undefined
}

// Même ordre naturel des nombres que dans les groupes de sortie (« 050 »
// avant « 100 » avant « 900 »), comparé segment de chemin par segment.
const comparerSegments = (a, b) => {
  const na = /^\d+$/.test(a), nb = /^\d+$/.test(b)
  if (na && nb) return Number(a) - Number(b) || a.length - b.length
  return a < b ? -1 : a > b ? 1 : 0
}
const comparerChemins = (a, b) => {
  const sa = a.split('/'), sb = b.split('/')
  for (let i = 0; i < Math.max(sa.length, sb.length); i++) {
    const c = comparerSegments(sa[i] ?? '', sb[i] ?? '')
    if (c !== 0) return c
  }
  return 0
}

// Niveau de changement, à la façon d'un semver : majeur si un token disparaît
// ou change de type, sinon mineur si un token est ajouté ou déprécié, sinon
// correctif si une valeur a changé, sinon aucun niveau. Règle proposée aux
// devs, en cours de validation.
const niveauDiff = (ajoutes, modifies, supprimes, deprecies) => {
  if (supprimes.length || modifies.some((m) => m.typeChange)) return 'majeur'
  if (ajoutes.length || deprecies.length) return 'mineur'
  if (modifies.length) return 'correctif'
  return null
}

// Version suivante à partir d'une version de départ (« 1.8.0 » ou « 1.8.0-RC.2 »,
// le suffixe après X.Y.Z est ignoré) et d'un niveau de changement. Null sans niveau.
const versionSuivante = (version, niveau) => {
  if (!niveau) return null
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(version)
  if (!m) return null
  const x = Number(m[1]), y = Number(m[2]), z = Number(m[3])
  if (niveau === 'majeur') return `${x + 1}.0.0`
  if (niveau === 'mineur') return `${x}.${y + 1}.0`
  return `${x}.${y}.${z + 1}`
}

// Compare le document courant à une référence : ajoutés, modifiés (type ou
// valeur différents), supprimés, dépréciés (nouvellement $deprecated).
// $description et $extensions sont ignorées : générées, elles changeraient à
// chaque évolution du plugin. Seule exception, les champs hors DTCG d'un style
// de texte, qui viennent de Figma (voir aplatirArbre).
// chemin ne porte jamais le mode ; modifier et contexte qualifient un token de
// contexte de modifier, absents pour un token de set. ajoutes/deprecies
// portent la valeur actuelle, supprimes la valeur de la référence, modifies
// les deux, plus typeChange et, pour un composite modifié sans changement de
// type, champs (voir champsModifies). Mise en forme par formaterValeurDiff,
// tri par comparerChemins puis par contexte : l'affichage ne fait que lire ces
// objets. version, si fournie, ajoute versionSuivante au résultat.
// Un contexte de modifier ne porte que les valeurs qui diffèrent du mode par
// défaut. Quand un contexte n'existe que d'un côté, on ne peut donc pas conclure
// à un ajout ou une suppression : le mode a pu simplement rejoindre le défaut,
// ou le quitter. Il est alors comparé au token de base de l'autre côté, et ne
// compte que si les deux diffèrent. Sans token de base de l'autre côté, le
// contexte est bien ajouté ou supprimé.
const construireDiff = (docCourant, docReference, version) => {
  const actuel = aplatirDoc(docCourant)
  const reference = aplatirDoc(docReference)

  const ajoutes = [], modifies = [], supprimes = [], deprecies = []
  const metaDe = (jeton) => (jeton.modifier !== undefined ? { modifier: jeton.modifier, contexte: jeton.contexte } : {})
  const different = (a, b) => a.type !== b.type || JSON.stringify(a.valeur) !== JSON.stringify(b.valeur)
  const entreeModifie = (jetonReference, jetonActuel, meta) => {
    const typeChange = jetonReference.type !== jetonActuel.type
    const entree = {
      chemin: jetonActuel.chemin, ...meta,
      avant: formaterValeurDiff(jetonReference.type, jetonReference.valeur),
      apres: formaterValeurDiff(jetonActuel.type, jetonActuel.valeur),
      typeChange
    }
    if (!typeChange) {
      const champs = champsModifies(jetonActuel.type, jetonReference.valeur, jetonActuel.valeur)
      if (champs) entree.champs = champs
    }
    return entree
  }

  for (const [cle, jetonActuel] of actuel) {
    const jetonReference = reference.get(cle)
    if (!jetonReference) {
      const baseReference = jetonActuel.modifier !== undefined ? reference.get(jetonActuel.chemin) : undefined
      if (baseReference) {
        if (different(baseReference, jetonActuel)) modifies.push(entreeModifie(baseReference, jetonActuel, metaDe(jetonActuel)))
      } else {
        ajoutes.push({ chemin: jetonActuel.chemin, ...metaDe(jetonActuel), valeur: formaterValeurDiff(jetonActuel.type, jetonActuel.valeur) })
      }
      continue
    }
    if (different(jetonReference, jetonActuel)) modifies.push(entreeModifie(jetonReference, jetonActuel, metaDe(jetonActuel)))
    if (jetonActuel.deprecie && !jetonReference.deprecie) {
      deprecies.push({ chemin: jetonActuel.chemin, ...metaDe(jetonActuel), valeur: formaterValeurDiff(jetonActuel.type, jetonActuel.valeur) })
    }
  }
  for (const [cle, jetonReference] of reference) {
    if (actuel.has(cle)) continue
    const baseActuelle = jetonReference.modifier !== undefined ? actuel.get(jetonReference.chemin) : undefined
    if (baseActuelle) {
      if (different(jetonReference, baseActuelle)) modifies.push(entreeModifie(jetonReference, baseActuelle, metaDe(jetonReference)))
    } else {
      supprimes.push({ chemin: jetonReference.chemin, ...metaDe(jetonReference), valeur: formaterValeurDiff(jetonReference.type, jetonReference.valeur) })
    }
  }

  const comparerContexte = (a, b) => { const ca = a || '', cb = b || ''; return ca < cb ? -1 : ca > cb ? 1 : 0 }
  const parChemin = (a, b) => comparerChemins(a.chemin, b.chemin) || comparerContexte(a.contexte, b.contexte)
  ajoutes.sort(parChemin); modifies.sort(parChemin); supprimes.sort(parChemin); deprecies.sort(parChemin)
  const niveau = niveauDiff(ajoutes, modifies, supprimes, deprecies)

  const resultat = { ajoutes, modifies, supprimes, deprecies, niveau }
  if (version !== undefined) resultat.versionSuivante = versionSuivante(version, niveau)
  const dateReference = docReference?.$extensions?.['fr.axa.canopee']?.date
  if (dateReference !== undefined) resultat.dateReference = dateReference
  return resultat
}

// ------------------------------------------------------------------ dialogue avec l'interface

// Un seul message d'erreur vers l'interface, pour toutes les actions qui
// peuvent échouer. Le contexte (verification, comparaison, depot ou
// telechargement) dit à l'interface où l'afficher.
const signalerErreur = (e, contexte) => figma.ui.postMessage({ type: 'erreur', contexte, message: e?.message || String(e) })

const annoncerContexte = async () => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const variables = await figma.variables.getLocalVariablesAsync()
  // Seuls les styles de texte et d'effet sont exportés : ce sont eux qu'on compte.
  const styles = (await figma.getLocalTextStylesAsync()).length + (await figma.getLocalEffectStylesAsync()).length
  figma.ui.postMessage({ type: 'contexte', fichier: figma.root.name, variables: variables.length, styles, collections: collections.length, depot: urlsDepot(DEPOT) })
}

// ------------------------------------------------------------ analyse en cache

// Signature de tout ce qui influence l'analyse : variables (noms, types,
// scopes, valeurs, descriptions, collection), collections (noms,
// modes, mode par défaut), et contenu des styles de texte et d'effet, pas
// seulement leur nombre. Sert à détecter qu'un fichier a changé, aussi bien
// pour la mise à jour en direct que pour réutiliser la dernière analyse.
const signatureFichier = async () => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync()
  const variables = await figma.variables.getLocalVariablesAsync()
  const donneesCollections = collections.map((c) => ({ id: c.id, nom: c.name, modes: c.modes, defaut: c.defaultModeId }))
  const donneesVariables = variables.map((v) => ({
    nom: v.name, type: v.resolvedType, scopes: v.scopes, valeurs: v.valuesByMode,
    description: v.description, collection: v.variableCollectionId
  }))
  const donneesStylesTexte = (await figma.getLocalTextStylesAsync()).map((s) => ({
    nom: s.name, description: s.description, police: s.fontName, taille: s.fontSize,
    interligne: s.lineHeight, espacement: s.letterSpacing, liens: s.boundVariables,
    soulignement: s.textDecoration, casse: s.textCase
  }))
  const donneesStylesEffet = (await figma.getLocalEffectStylesAsync()).map((s) => ({
    nom: s.name, description: s.description, effets: s.effects
  }))
  return JSON.stringify({ donneesCollections, donneesVariables, donneesStylesTexte, donneesStylesEffet })
}

// Ajoute la date d'export au document analysé, dans les mêmes clés (source,
// plugin, date) qu'avant. L'analyse elle-même est mise en cache et peut
// resservir à plusieurs dépôts ou téléchargements : chacun reçoit sa propre date,
// posée seulement à la sérialisation, jamais à l'analyse.
const docHorodate = (doc) => ({
  ...doc,
  $extensions: { 'fr.axa.canopee': { ...doc.$extensions['fr.axa.canopee'], date: dateExport() } }
})

// Dernière analyse faite, et la signature du fichier au moment où elle a été
// faite : réutilisée tant que rien n'a changé, pour analyser une seule fois
// par état du fichier plutôt que deux fois par action (vérification puis
// diff…). Le dépôt et le téléchargement passent d'abord par
// verifierModifications : un changement fait juste avant le clic est ainsi
// montré dans la vérification et le diff, pas seulement pris dans le JSON.
let derniereAnalyse = null
let signatureAnalyse = null
const analyser = async () => {
  const signature = await signatureFichier()
  if (derniereAnalyse && signature === signatureAnalyse) return derniereAnalyse
  derniereAnalyse = await analyserFichier()
  signatureAnalyse = signature
  return derniereAnalyse
}

// ------------------------------------------------------------- comparaison

// Référence courante de comparaison : texte JSON et métadonnées (source,
// nomFichier, dateFichier, version). Mise à jour à chaque 'comparer' valide reçu,
// pour recalculer le diff sans dépendre de l'interface (mise à jour en direct).
let referenceCourante = null

// Calcule le diff entre l'export courant et une référence, et l'envoie. Utilisée
// aussi bien pour un message 'comparer' explicite que pour la mise à jour en direct.
const comparerEtEnvoyer = async (ref) => {
  let docReference
  try {
    docReference = JSON.parse(ref.texte)
    if (!docReference || typeof docReference !== 'object' || !docReference.sets) throw new Error('invalide')
  } catch (e) {
    figma.ui.postMessage({ type: 'diff', erreur: "Ce fichier n'est pas un export du plugin." })
    return false
  }
  try {
    const { doc } = await analyser()
    const resultat = construireDiff(doc, docReference, ref.version)
    const message = { type: 'diff', source: ref.source, nomFichier: ref.nomFichier, ...resultat }
    if (ref.dateFichier !== undefined) message.dateFichier = ref.dateFichier
    if (ref.version !== undefined) message.version = ref.version
    figma.ui.postMessage(message)
  } catch (e) {
    signalerErreur(e, 'comparaison')
  }
  return true
}

// ---------------------------------------------------------- mise à jour en direct

// Résultat de la vérification, avec ce qui bloque le dépôt. modifie dit à
// l'interface que les tokens ont changé depuis la vérification précédente.
const envoyerVerification = (rapport, modifie) =>
  figma.ui.postMessage({ type: 'verification', rapport, blocage: blocageDepot(rapport), modifie })

// Rejoue la vérification et le diff quand le fichier a changé depuis la
// dernière analyse (même signature qu'utilise analyser(), voir plus haut).
// Exposée via __test (fin de fichier) pour être appelable depuis le contexte
// du test, qui n'a pas de setInterval pour la déclencher lui-même.
const verifierModifications = async () => {
  const signature = await signatureFichier()
  if (signature === signatureAnalyse && derniereAnalyse) return
  await annoncerContexte()
  try {
    const { rapport } = await analyser()
    envoyerVerification(rapport, true)
  } catch (e) {
    signalerErreur(e, 'verification')
    return
  }
  if (referenceCourante) await comparerEtEnvoyer(referenceCourante)
}

// Absent du contexte du test : la mise à jour en direct n'y est déclenchée qu'à
// la main, par un appel explicite à verifierModifications().
if (typeof setInterval === 'function') setInterval(verifierModifications, 2000)

// Un gestionnaire par type de message reçu de l'interface. Chacun reçoit le
// message entier ; les clés reprennent exactement les msg.type d'origine.
const gestionnairesMessage = {
  // La comparaison au code se lance côté interface, à la première vérification.
  pret: async () => {
    await annoncerContexte()
    try {
      const { rapport } = await analyser()
      envoyerVerification(rapport, false)
    } catch (e) {
      signalerErreur(e, 'verification')
    }
  },

  redimensionner: (msg) => {
    if (tailleManuelle) return
    // Pas de hauteur minimale élevée : les actions sont collées en bas, la fenêtre suit le contenu.
    redimensionnerFenetre(LARGEUR, Math.min(Math.max(msg.hauteur, HAUTEUR_AUTO_MIN), HAUTEUR_AUTO_MAX))
  },

  'redimensionner-manuel': async (msg) => {
    const { largeur, hauteur } = bornerTailleManuelle(msg.largeur, msg.hauteur)
    tailleManuelle = true
    redimensionnerFenetre(largeur, hauteur)
    try {
      await figma.clientStorage.setAsync(CLE_TAILLE, { largeur, hauteur })
    } catch (e) {
      // Préférence non enregistrée : la taille reste appliquée pour cette session.
    }
  },

  'taille-auto': async () => {
    tailleManuelle = false
    try {
      await figma.clientStorage.deleteAsync(CLE_TAILLE)
    } catch (e) {
      // Rien à faire : la préférence sera simplement réécrite au prochain glisser.
    }
    redimensionnerFenetre(LARGEUR, derniereTaille.hauteur)
    figma.ui.postMessage({ type: 'recalculer-hauteur' })
  },

  // Prépare le dépôt à partir de l'état actuel de Figma : le JSON à coller, le
  // message de commit selon le niveau du changement contre le fichier du repo,
  // et l'URL de l'éditeur GitHub. referenceRepo est le texte du fichier du repo,
  // ou null s'il n'y est pas encore.
  deposer: async (msg) => {
    try {
      await verifierModifications()
      const { doc, racinesDeGroupe } = await analyser()
      const docFinal = docHorodate(doc)
      // Sans fichier dans le repo, ou s'il est illisible, tous les tokens comptent comme ajoutés.
      let docRepo = {}
      if (msg.referenceRepo) {
        try { docRepo = JSON.parse(msg.referenceRepo) || {} } catch (e) { /* JSON illisible : comme sans fichier */ }
      }
      const urls = urlsDepot(DEPOT)
      const url = msg.referenceRepo !== null && msg.referenceRepo !== undefined ? urls.urlEdition : urls.urlCreation
      if (!url) throw new Error("l'emplacement du fichier n'est pas fixé.")
      figma.ui.postMessage({
        type: 'depot-pret',
        json: versJSON(docFinal, racinesDeGroupe),
        message: messageCommit(construireDiff(docFinal, docRepo).niveau),
        url
      })
    } catch (e) {
      signalerErreur(e, 'depot')
    }
  },

  ouvrir: (msg) => {
    figma.openExternal(msg.url)
  },

  comparer: async (msg) => {
    // Une référence invalide ne remplace pas la référence courante : la mise à
    // jour en direct renverrait sinon l'erreur à chaque changement.
    const reference = { texte: msg.reference, source: msg.source, nomFichier: msg.nomFichier, dateFichier: msg.dateFichier, version: msg.version }
    if (await comparerEtEnvoyer(reference)) referenceCourante = reference
  },

  telecharger: async () => {
    try {
      await verifierModifications()
      const { doc, racinesDeGroupe } = await analyser()
      figma.ui.postMessage({ type: 'fichier', json: versJSON(docHorodate(doc), racinesDeGroupe), fichier: NOM_DE_FICHIER })
    } catch (e) {
      signalerErreur(e, 'telechargement')
    }
  }
}

figma.ui.onmessage = async (msg) => {
  const gestionnaire = gestionnairesMessage[msg.type]
  if (gestionnaire) await gestionnaire(msg)
}

// -------------------------------------------------------------------- test

// Point d'accès unique depuis le contexte du test (node test/test.js) : les
// fonctions qu'il appelle directement, et DEPOT dont il modifie les propriétés.
var __test = {
  VERSION,
  DEPOT,
  verifierModifications,
  blocageDepot,
  signalerErreur
}
