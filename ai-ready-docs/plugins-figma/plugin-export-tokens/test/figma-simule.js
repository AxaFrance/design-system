// Fabrique un plugin Figma simulé : charge code.js dans un contexte vm, sur des
// données choisies par l'appelant, et expose de quoi lui parler et lire ce qu'il
// produit. Module CommonJS, sans dépendance. Utilisé par les tests (test/test.js).
'use strict'

const fs = require('fs')
const vm = require('vm')
const path = require('path')

const CHEMIN_CODE = path.join(__dirname, '..', 'code.js')

// collections peut être un tableau (comme le renvoie l'API Figma, ou un relevé
// JSON) ou un objet { clé: collection } (plus lisible à la main dans un test) :
// les deux formes sont acceptées, normalisées en tableau.
const versTableauCollections = (collections) => (Array.isArray(collections) ? collections : Object.values(collections))

// Crée un plugin simulé : charge code.js dans son propre contexte vm, sur les
// collections, variables et styles donnés. Chaque appel produit un plugin
// indépendant, avec sa propre exécution de code.js (donc son propre DEPOT,
// son propre état interne) : deux plugins simulés ne partagent jamais rien.
const creerPluginSimule = ({
  nomFichier = 'Document simulé',
  fileKey,
  collections = [],
  locales = [],
  distantes = [],
  // Variables supprimées : Figma les rend encore par leur id, hors des variables locales.
  supprimees = [],
  stylesTexte = [],
  stylesEffet = [],
  stockageClient = {}
} = {}) => {
  const listeCollections = versTableauCollections(collections)
  const collectionParId = new Map(listeCollections.map((c) => [c.id, c]))
  const variableParId = new Map([...locales, ...distantes, ...supprimees].map((v) => [v.id, v]))

  const envoyes = []
  const redimensionnements = []
  const ouvertures = []

  // Stockage sur le poste (figma.clientStorage), en mémoire, pour la taille de
  // fenêtre retenue par l'utilisateur. Cloné pour ne jamais modifier l'objet
  // reçu de l'appelant.
  const stockageClientLocal = JSON.parse(JSON.stringify(stockageClient))

  // fileKey n'est lisible que pour un plugin en développement : absent, il
  // reste undefined, comme dans Figma.
  const figma = {
    fileKey,
    root: { name: nomFichier },
    showUI() {},
    openExternal: (url) => ouvertures.push(url),
    ui: { onmessage: null, postMessage: (m) => envoyes.push(m), resize: (l, h) => redimensionnements.push([l, h]) },
    clientStorage: {
      getAsync: async (cle) => stockageClientLocal[cle],
      setAsync: async (cle, valeur) => { stockageClientLocal[cle] = valeur },
      deleteAsync: async (cle) => { delete stockageClientLocal[cle] }
    },
    variables: {
      getLocalVariableCollectionsAsync: async () => listeCollections.filter((c) => !c.remote),
      getLocalVariablesAsync: async () => locales,
      getVariableByIdAsync: async (id) => variableParId.get(id) || null,
      getVariableCollectionByIdAsync: async (id) => collectionParId.get(id) || null
    },
    getLocalTextStylesAsync: async () => stylesTexte,
    getLocalEffectStylesAsync: async () => stylesEffet
  }

  const contexte = vm.createContext({ figma, __html__: '', console })
  vm.runInContext(fs.readFileSync(CHEMIN_CODE, 'utf8'), contexte)

  return {
    // Envoie un message à l'interface, comme le ferait figma.ui.onmessage.
    envoyer: (msg) => figma.ui.onmessage(msg),
    // Messages reçus par l'interface (figma.ui.postMessage), dans l'ordre.
    messages: envoyes,
    dernierMessage: () => envoyes[envoyes.length - 1],
    // Tailles demandées par figma.ui.resize, dans l'ordre.
    redimensionnements,
    // URLs ouvertes par figma.openExternal, dans l'ordre.
    ouvertures,
    // Stockage du poste : objet vivant, à lire directement.
    stockageClient: stockageClientLocal,
    // Fonctions et état internes du plugin, exposés par code.js pour le test.
    __test: contexte.__test
  }
}

module.exports = { creerPluginSimule }
