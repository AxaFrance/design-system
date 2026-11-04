// Fait tourner code.js sur un plugin Figma simulé (figma-simule.js) et vérifie
// ce qui sort. Chaque scénario crée son propre plugin, indépendant des autres :
// aucun scénario ne dépend de ce qu'un autre a laissé derrière lui, et l'ordre
// d'exécution ne change aucun résultat.
// Sans dépendance : node test/test.js
// Pour voir le JSON produit : node test/test.js --json

const assert = require('assert/strict')
const fs = require('fs')
const path = require('path')
const { creerPluginSimule } = require('./figma-simule.js')

const alias = (id) => ({ type: 'VARIABLE_ALIAS', id })
const ombre = (y, extra = {}) => ({ type: 'DROP_SHADOW', color: { r: 0, g: 0, b: 0, a: 0.2 }, offset: { x: 0, y }, radius: 8, spread: 0, ...extra })

// Document Figma commun à la plupart des scénarios : mêmes collections,
// variables et styles qu'avant le refacto. documentDeTest() en renvoie une
// copie neuve à chaque appel, pour qu'un scénario qui modifie une variable
// (mise à jour en direct) ne puisse jamais affecter un autre scénario.
const DOCUMENT_COMMUN = {
  nomFichier: 'Canopée B2B',
  collections: [
    { id: 'C1', name: 'Primitives', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' },
    { id: 'C2', name: 'Sémantique', modes: [{ modeId: 'ma', name: 'prospect' }, { modeId: 'mb', name: 'client' }], defaultModeId: 'ma' },
    { id: 'CR', name: 'Charte AXA', modes: [{ modeId: 'mr', name: 'Mode 1' }], defaultModeId: 'mr', remote: true }
  ],
  locales: [
    { id: 'v1', name: 'Couleur/AXA blue 100', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: ['ALL_SCOPES'], description: 'Bleu de marque', valuesByMode: { m1: { r: 0, g: 0, b: 0.5607843 } } },
    { id: 'v2', name: 'Espacement/m', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP', 'WIDTH_HEIGHT'], valuesByMode: { m1: 16 } },
    { id: 'v3', name: 'Opacité/disabled', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: 0.4 } },
    { id: 'v4', name: 'Action/primaire', resolvedType: 'COLOR', variableCollectionId: 'C2', scopes: [], valuesByMode: { ma: alias('v1'), mb: alias('v8') } },
    { id: 'v5', name: 'Afficher/badge', resolvedType: 'BOOLEAN', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: true } },
    { id: 'v6', name: 'Police/famille', resolvedType: 'STRING', variableCollectionId: 'C1', scopes: ['FONT_FAMILY'], valuesByMode: { m1: 'Source Sans Pro' } },
    { id: 'v7', name: 'Rayon/petit.5', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['CORNER_RADIUS'], valuesByMode: { m1: 4 } },
    { id: 'v8', name: 'Couleur/old grey DEPRECATED', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], description: 'Deprecated: use color/blue/700.', valuesByMode: { m1: { r: 0.5, g: 0.5, b: 0.5 } } },
    { id: 'v9', name: 'Couleur/AXA blue 100/clair', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 1, g: 1, b: 1 } } },
    { id: 'v10', name: 'Fond/marque', resolvedType: 'COLOR', variableCollectionId: 'C2', scopes: [], valuesByMode: { ma: alias('r1'), mb: alias('r1') } },
    { id: 'v11', name: 'Espacement/xs', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { m1: 4.000000238418579 } },
    { id: 'v12', name: 'Contenu/libellé', resolvedType: 'STRING', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: 'Voir plus' } },
    { id: 'v13', name: 'Typo/famille secondaire', resolvedType: 'STRING', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: 'Publico' } },
    // Nuances numériques : sert à vérifier l'ordre naturel des clés dans un groupe.
    // « 050 » n'est pas un index canonique pour le moteur JS, « 100 » et « 900» le
    // sont : sans tri maison, 100 et 900 remontent avant 050 quel que soit l'ordre
    // d'écriture.
    { id: 'v14', name: 'Couleur/gris/900', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 0.1, g: 0.1, b: 0.1 } } },
    { id: 'v15', name: 'Couleur/gris/050', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 0.95, g: 0.95, b: 0.95 } } },
    { id: 'v16', name: 'Couleur/gris/100', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 0.9, g: 0.9, b: 0.9 } } },
    // Variables au nom en anglais/kebab : servent uniquement à couvrir chaque
    // typologie de description générée (0.6.0), indépendamment des noms français
    // ci-dessus qui ne correspondent à aucune typologie.
    { id: 'v17', name: 'color/blue/700', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 0, g: 0, b: 143 / 255 } } },
    { id: 'v18', name: 'color/sunshine/500', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 1, g: 229 / 255, b: 0 } } },
    { id: 'v18b', name: 'color/cotton-candy/500', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 1, g: 0, b: 88 / 255 } } },
    { id: 'v19', name: 'color/white', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 1, g: 1, b: 1 } } },
    { id: 'v20', name: 'color/black', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 0, g: 0, b: 0 } } },
    { id: 'v21', name: 'color/black-alpha/20', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: { r: 0, g: 0, b: 0, a: 0.2 } } },
    { id: 'v22', name: 'spacing/16', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { m1: 16 } },
    { id: 'v23', name: 'spacing/2', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { m1: 2 } },
    { id: 'v24', name: 'size/24', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['WIDTH_HEIGHT'], valuesByMode: { m1: 24 } },
    { id: 'v25', name: 'border/radius/8', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['CORNER_RADIUS'], valuesByMode: { m1: 8 } },
    { id: 'v26', name: 'border/radius/full', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['CORNER_RADIUS'], valuesByMode: { m1: 9999 } },
    { id: 'v27', name: 'border/width/1', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['STROKE_FLOAT'], valuesByMode: { m1: 1 } },
    { id: 'v28', name: 'font/size/16', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['FONT_SIZE'], valuesByMode: { m1: 16 } },
    { id: 'v29', name: 'font/size-18', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['FONT_SIZE'], valuesByMode: { m1: 18 } },
    { id: 'v30', name: 'font/line-height/20', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['LINE_HEIGHT'], valuesByMode: { m1: 20 } },
    { id: 'v31', name: 'font/line-height/23', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['LINE_HEIGHT'], valuesByMode: { m1: 23 } },
    { id: 'v50', name: 'font/line-height/22', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['LINE_HEIGHT'], valuesByMode: { m1: 22 } },
    { id: 'v32', name: 'font/size/15', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['FONT_SIZE'], valuesByMode: { m1: 15 } },
    { id: 'v33', name: 'font/weight/semibold', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['FONT_WEIGHT'], valuesByMode: { m1: 600 } },
    { id: 'v34', name: 'font/family/sans-serif', resolvedType: 'STRING', variableCollectionId: 'C1', scopes: ['FONT_FAMILY'], valuesByMode: { m1: 'Source Sans Pro' } },
    // Typologie reconnue, avec une description Figma : vérifie l'ajout après la description générée.
    { id: 'v35', name: 'border/width/2', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['STROKE_FLOAT'], description: 'Utilisé pour les inputs en erreur.', valuesByMode: { m1: 2 } },
    // Alias vers une typologie reconnue : ne reçoit pas de description générée.
    { id: 'v36', name: 'color/blue/800', resolvedType: 'COLOR', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: alias('v17') } },
    // Cas ajoutés pour la nomenclature des primitives (0.7.0). En booléen pour ne
    // pas se mêler à l'export normal : seule la vérification de nom nous intéresse
    // ici, sauf pour spacing/12 qui doit rester un vrai nombre pour tester l'écart
    // entre le nom et la valeur.
    { id: 'v37', name: 'color/Blue/500', resolvedType: 'BOOLEAN', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: true } },
    { id: 'v38', name: 'color/blue/550', resolvedType: 'BOOLEAN', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: true } },
    { id: 'v39', name: 'spacing/12', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { m1: 10 } },
    { id: 'v40', name: 'shadow/1', resolvedType: 'BOOLEAN', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: true } },
    { id: 'v41', name: 'color/blue', resolvedType: 'BOOLEAN', variableCollectionId: 'C1', scopes: [], valuesByMode: { m1: true } }
  ],
  distantes: [
    { id: 'r1', name: 'Marque/Bleu', resolvedType: 'COLOR', variableCollectionId: 'CR', remote: true, valuesByMode: { mr: { r: 1, g: 0, b: 0, a: 0.5 } } }
  ],
  stylesTexte: [{
    id: 's1', name: 'Titre/H1', description: 'Titre de page',
    fontName: { family: 'Source Sans Pro', style: 'Bold' }, fontSize: 32,
    lineHeight: { unit: 'PIXELS', value: 40 }, letterSpacing: { unit: 'PERCENT', value: -1 },
    boundVariables: { fontSize: alias('v2'), paragraphSpacing: alias('v2') }
  }, {
    id: 's2', name: 'Corps/texte', description: '',
    fontName: { family: 'Source Sans Pro', style: 'Regular' }, fontSize: 16,
    lineHeight: { unit: 'AUTO' }, letterSpacing: { unit: 'PIXELS', value: 0 }
  }],
  stylesEffet: [
    { id: 'e1', name: 'Élévation/2', description: '', effects: [ombre(2)] },
    { id: 'e2', name: 'Élévation/marque', description: '', effects: [ombre(99, { visible: false }), ombre(4, { boundVariables: { color: alias('v1') } })] },
    { id: 'e3', name: 'Flou/fond', description: '', effects: [{ type: 'LAYER_BLUR', radius: 4 }] }
  ]
}

const documentDeTest = () => JSON.parse(JSON.stringify(DOCUMENT_COMMUN))

// Un token DTCG se lit dans sets.<collection>.sources[0].
const lireSet = (doc, nom) => doc.sets[nom].sources[0]
// Comme lireSet, mais undefined si la collection n'existe pas dans ce document
// (un document de scénario n'a pas forcément Primitives et Sémantique).
const lireSetSiPresent = (doc, nom) => (doc.sets[nom] ? lireSet(doc, nom) : undefined)

let n = 0
const verifier = (libelle, fn) => { fn(); n++; console.log('  ✓', libelle) }
// Les messages et rapports viennent d'un autre contexte VM : on les normalise
// pour comparer les tableaux et objets avec deepEqual (strict).
const normaliser = (m) => JSON.parse(JSON.stringify(m))

// Ouvre le plugin puis télécharge le document chargé, et prépare les raccourcis
// de lecture (t, json, rapport, P/S/STY) que la plupart des scénarios utilisent.
// Le rapport vient du message de vérification de l'ouverture : le téléchargement
// ne renvoie que le fichier.
const exporterDocument = async (plugin) => {
  await plugin.envoyer({ type: 'pret' })
  const verification = plugin.messages.filter((m) => m.type === 'verification').pop()
  await plugin.envoyer({ type: 'telecharger' })
  const dernier = plugin.dernierMessage()
  assert.equal(dernier.type, 'fichier', dernier.message)
  const t = JSON.parse(dernier.json)
  return {
    dernier, t, json: dernier.json, fichier: dernier.fichier,
    rapport: normaliser(verification.rapport),
    P: lireSetSiPresent(t, 'Primitives'), S: lireSetSiPresent(t, 'Sémantique'), STY: lireSetSiPresent(t, 'Styles')
  }
}

const CHEMIN_TOKENS = 'packages/canopee-css/design-tokens-canopee.resolver.json'

// Prépare le dépôt, comme le ferait l'interface après avoir lu le fichier du
// repo : referenceRepo est son texte, ou null s'il n'y est pas. Renvoie le
// message depot-pret.
const deposerDocument = async (plugin, referenceRepo, options = {}) => {
  await plugin.envoyer({ type: 'deposer', referenceRepo, ...options })
  const message = plugin.dernierMessage()
  assert.equal(message.type, 'depot-pret', message.message)
  return normaliser(message)
}

// Le même document, sans la date d'export : seule chose qui change d'une
// sérialisation à l'autre.
const sansDate = (doc) => {
  const copie = JSON.parse(JSON.stringify(doc))
  delete copie.$extensions['fr.axa.canopee'].date
  return copie
}

// -------------------------------------------------------------- ouverture

const scenarioOuvertureSansReference = async () => {
  const plugin = creerPluginSimule()
  await plugin.envoyer({ type: 'pret' })
  verifier("à l'ouverture : contexte puis vérification, pas de diff automatique", () => {
    assert.deepEqual(plugin.messages.map((m) => m.type), ['contexte', 'verification'])
  })
}

// ------------------------------------------------------------------ export

// Un seul export sert deux usages : la sortie --json et la
// vérification de la forme d'un export en configuration par défaut (workflow
// nul). Renvoie 'stop' quand --json a déjà tout affiché : le script s'arrête
// là, comme avant le refacto, sans lancer les scénarios suivants.
const scenarioExportParDefaut = async () => {
  const plugin = creerPluginSimule(documentDeTest())
  const { dernier, t, json, fichier, rapport, P, S, STY } = await exporterDocument(plugin)

  if (process.argv.includes('--json')) { console.log(json); return 'stop' }

  verifier("téléchargement : après l'ouverture, seul le message fichier est envoyé, sans rapport ni diff", () => {
    assert.deepEqual(plugin.messages.map((m) => m.type), ['contexte', 'verification', 'fichier'])
    assert.equal('rapport' in dernier, false)
  })

  verifier('couleur en objet sRGB avec hex en repli', () => assert.deepEqual(P.Couleur['AXA blue 100'].$value, {
    colorSpace: 'srgb', components: [0, 0, 0.5608], hex: '#00008f'
  }))
  verifier('alpha absent sous forme de canal, non défini ici', () => assert.equal(P.Couleur['AXA blue 100'].$value.alpha, undefined))
  verifier('description conservée', () => assert.equal(P.Couleur['AXA blue 100'].$description, 'Bleu de marque'))
  verifier('nombre typé par le scope, en objet dimension', () => assert.deepEqual([P.Espacement.m.$type, P.Espacement.m.$value], ['dimension', { value: 16, unit: 'px' }]))
  verifier('bruit des flottants gommé', () => assert.deepEqual(P.Espacement.xs.$value, { value: 4, unit: 'px' }))
  verifier('nombre sans scope, type déduit du nom et signalé', () => {
    assert.equal(P['Opacité'].disabled.$type, 'number')
    assert.equal(P['Opacité'].disabled.$extensions['fr.axa.canopee'].typeDeduit, true)
    assert.ok(rapport.typesDeduits.includes('Opacité/disabled : traité comme un nombre'))
  })
  verifier('chaîne typée fontFamily par le scope', () => assert.equal(P.Police.famille.$type, 'fontFamily'))
  verifier('chaîne typée fontFamily par le nom, signalée', () => {
    assert.equal(P.Typo['famille secondaire'].$type, 'fontFamily')
    assert.ok(rapport.typesDeduits.includes('Typo/famille secondaire : traité comme une police'))
  })
  verifier('chaîne libre écartée, absente du fichier', () => {
    assert.equal(P.Contenu, undefined)
    assert.ok(rapport.ecartes.includes('Contenu/libellé : variable String'))
  })
  verifier('booléen écarté et signalé', () => assert.ok(rapport.ecartes.includes('Afficher/badge : variable Boolean')))
  verifier('alias local en référence, non résolu', () => assert.equal(S.Action.primaire.$value, '{Couleur.AXA blue 100}'))
  verifier('nom assaini, nom Figma gardé, rien sinon', () => {
    assert.equal(P.Rayon['petit-5'].$extensions['fr.axa.canopee'].nomFigma, 'Rayon/petit.5')
    assert.equal(P.Espacement.m.$extensions, undefined)
  })
  verifier('déprécié détecté dans la description, texte de suite gardé, description en premier', () => {
    const jeton = P.Couleur['old grey DEPRECATED']
    assert.equal(jeton.$deprecated, 'use color/blue/700.')
    assert.ok(jeton.$description.startsWith('Deprecated'))
  })
  verifier('le nom seul ne déprécie plus rien', () => assert.equal(P.Couleur['old grey DEPRECATED'].$deprecated !== true, true))
  verifier('conflit token / groupe refusé et signalé', () => {
    assert.equal(P.Couleur['AXA blue 100'].clair, undefined)
    assert.deepEqual(rapport.conflits, ['Couleur/AXA blue 100/clair'])
  })
  verifier('alias externe résolu en valeur, alpha sous 1 conservé', () => {
    assert.deepEqual(S.Fond.marque.$value, { colorSpace: 'srgb', components: [1, 0, 0], alpha: 0.5, hex: '#ff0000' })
    assert.deepEqual(Object.keys(S.Fond.marque.$extensions['fr.axa.canopee']), ['alias'])
    assert.equal(S.Fond.marque.$extensions['fr.axa.canopee'].alias, 'Marque/Bleu')
    assert.deepEqual(rapport.aliasExternes, ['Fond/marque : pointe vers Marque/Bleu'])
  })
  verifier('style de texte en typography, alias gardé, interligne px converti en ratio, espacement pourcentage en px', () => {
    const h1 = STY.typography.Titre.H1
    assert.equal(h1.$type, 'typography')
    assert.deepEqual(h1.$value, {
      fontFamily: 'Source Sans Pro',
      fontSize: '{Espacement.m}',
      fontWeight: 700,
      letterSpacing: { value: -0.32, unit: 'px' },
      lineHeight: 1.25
    })
  })
  verifier('interlignage automatique écarté, style entier absent du fichier', () => {
    assert.equal(STY.typography.Corps, undefined)
    assert.ok(rapport.ecartes.includes('Corps/texte : interligne automatique'))
  })
  verifier('ombre en shadow, couleur et dimensions en objets', () => {
    assert.deepEqual(STY.shadow['Élévation']['2'].$value, {
      color: { colorSpace: 'srgb', components: [0, 0, 0], alpha: 0.2, hex: '#000000' },
      offsetX: { value: 0, unit: 'px' },
      offsetY: { value: 2, unit: 'px' },
      blur: { value: 8, unit: 'px' },
      spread: { value: 0, unit: 'px' },
      inset: false
    })
  })
  verifier('ombre masquée ignorée, couleur reliée gardée en référence', () => {
    const v = STY.shadow['Élévation'].marque.$value
    assert.equal(Array.isArray(v), false)
    assert.deepEqual([v.offsetY, v.color], [{ value: 4, unit: 'px' }, '{Couleur.AXA blue 100}'])
  })
  verifier('effet sans ombre écarté', () => {
    assert.equal(STY.shadow.Flou, undefined)
    assert.ok(rapport.ecartes.includes('Flou/fond : effet sans ombre'))
  })
  verifier('$type précède $value dans un token, groupes triés', () => {
    assert.ok(json.indexOf('"$type": "color"') < json.indexOf('"hex": "#00008f"'))
    assert.deepEqual(Object.keys(P), ['Couleur', 'Espacement', 'Opacité', 'Police', 'Rayon', 'Typo', 'border', 'color', 'font', 'size', 'spacing'])
  })

  verifier('description générée : couleur à palier, contraste WCAG', () => {
    assert.equal(P.color.blue['700'].$description,
      "Couleur blue, palier 700, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #00008F. Contraste de 15:1 sur blanc.")
    assert.equal(P.color.sunshine['500'].$description,
      "Couleur sunshine, palier 500, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #FFE500. Contraste de 1,3:1 sur blanc.")
    assert.equal(P.color['cotton-candy']['500'].$description,
      "Couleur cotton-candy, palier 500, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #FF0058. Contraste de 3,9:1 sur blanc.")
  })
  verifier('description générée : blanc et noir', () => {
    assert.equal(P.color.white.$description, 'Blanc, sans teinte ni palier. #FFFFFF.')
    assert.equal(P.color.black.$description, 'Noir, sans teinte ni palier. #000000. Contraste de 21:1 sur blanc.')
  })
  verifier('description générée : couleur transparente, pourcentage de l\'alpha réel', () => {
    assert.equal(P.color['black-alpha']['20'].$description, "Noir à 20 % d'opacité.")
  })
  verifier('description générée : espacement, px et rem', () => {
    assert.equal(P.spacing['16'].$description,
      "Espacement de 16 px, soit 1rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.")
    assert.equal(P.spacing['2'].$description,
      "Espacement de 2 px, soit 0.125rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.")
  })
  verifier('description générée : dimension', () => {
    assert.equal(P.size['24'].$description,
      "Dimension de 24 px, soit 1.5rem dans le code. Pour la largeur ou la hauteur d'un élément, comme une icône ou un logo. Pour l'espace dans un élément ou entre deux éléments, utiliser un token spacing.")
  })
  verifier('description générée : arrondi, cas normal et cas full', () => {
    assert.equal(P.border.radius['8'].$description, "Arrondi d'angle de 8 px.")
    assert.equal(P.border.radius.full.$description,
      "Arrondi complet, qui donne une forme de pilule, ou un cercle sur un élément carré. Vaut 9999 px.")
  })
  verifier('description générée : épaisseur de bordure, sans rem', () => {
    assert.equal(P.border.width['1'].$description, 'Épaisseur de bordure de 1 px.')
  })
  verifier('description générée : taille de texte, dans les deux écritures du nom', () => {
    assert.equal(P.font.size['16'].$description, 'Taille de texte de 16 px, soit 1rem dans le code.')
    assert.equal(P.font['size-18'].$description, 'Taille de texte de 18 px, soit 1.125rem dans le code.')
    assert.equal(P.font.size['15'].$description, 'Taille de texte de 15 px, soit 0.9375rem dans le code.')
  })
  verifier('description générée : interligne', () => {
    assert.equal(P.font['line-height']['20'].$description, 'Interligne de 20 px, soit 1.25rem dans le code.')
    assert.equal(P.font['line-height']['23'].$description, 'Interligne de 23 px, soit 1.4375rem dans le code.')
  })
  verifier('description générée : graisse et famille de police', () => {
    assert.equal(P.font.weight.semibold.$description, 'Graisse semibold, de valeur 600.')
    assert.equal(P.font.family['sans-serif'].$description, 'Famille de police Source Sans Pro.')
  })
  verifier('description générée suivie de la description Figma, séparées par une espace', () => {
    assert.equal(P.border.width['2'].$description, 'Épaisseur de bordure de 2 px. Utilisé pour les inputs en erreur.')
  })
  verifier('alias vers une typologie reconnue : pas de description générée', () => {
    assert.equal(P.color.blue['800'].$description, undefined)
    assert.ok(rapport.sansDescription.includes('color/blue/800'))
  })

  verifier('en-tête du resolver : name, version, extension de plugin', () => {
    assert.equal(t.name, 'Canopée B2B')
    assert.equal(t.version, '2025.10')
    assert.equal(t.$extensions['fr.axa.canopee'].source, 'Canopée B2B')
    assert.equal(t.$extensions['fr.axa.canopee'].plugin, plugin.__test.VERSION)
  })
  verifier('en-tête du resolver : date de l\'export au format ISO, à la seconde, en UTC', () => {
    assert.ok(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(t.$extensions['fr.axa.canopee'].date))
  })
  verifier('en-tête du resolver : ordre des clés source, plugin, date', () => {
    const i = json.indexOf('"fr.axa.canopee": {')
    const bloc = json.slice(i, i + 200)
    assert.ok(bloc.indexOf('"source"') < bloc.indexOf('"plugin"') && bloc.indexOf('"plugin"') < bloc.indexOf('"date"'))
  })
  verifier('un set par collection dans l\'ordre Figma, puis Styles', () => {
    assert.deepEqual(Object.keys(t.sets), ['Primitives', 'Sémantique', 'Styles'])
  })
  verifier('resolutionOrder en $ref, tous les sets puis les modifiers', () => {
    assert.deepEqual(t.resolutionOrder, [
      { $ref: '#/sets/Primitives' },
      { $ref: '#/sets/Sémantique' },
      { $ref: '#/sets/Styles' },
      { $ref: '#/modifiers/Sémantique' }
    ])
  })
  verifier('pas de modifier pour une collection à un seul mode', () => {
    assert.deepEqual(Object.keys(t.modifiers), ['Sémantique'])
    assert.equal(t.modifiers.Primitives, undefined)
  })
  verifier('modifier : mode par défaut nommé, contexte par défaut vide', () => {
    assert.equal(t.modifiers.Sémantique.default, 'prospect')
    assert.deepEqual(t.modifiers.Sémantique.contexts.prospect, [])
  })
  verifier('modifier : seuls les tokens qui diffèrent, en token complet', () => {
    const client = t.modifiers.Sémantique.contexts.client
    assert.equal(client.length, 1)
    const surcharge = client[0]
    // Fond/marque référence la même variable distante dans les deux modes : identique, absent.
    assert.equal(surcharge.Fond, undefined)
    assert.equal(surcharge.Action.primaire.$type, 'color')
    assert.equal(surcharge.Action.primaire.$value, '{Couleur.old grey DEPRECATED}')
  })
  verifier('ordre naturel des clés numériques dans le texte : 050 avant 100 avant 900', () => {
    assert.ok(json.indexOf('"050"') < json.indexOf('"100"'))
    assert.ok(json.indexOf('"100"') < json.indexOf('"900"'))
  })
  verifier('tableau de composantes sur une ligne dans le texte', () => {
    assert.ok(json.includes('"components": [0, 0, 0.5608]'))
  })
  verifier('tokens sans description listés dans le rapport, seulement ceux ni générée ni Figma', () => {
    assert.ok(rapport.sansDescription.includes('Espacement/m'))
    assert.ok(rapport.sansDescription.includes('Élévation/2'))
    assert.ok(rapport.sansDescription.includes('color/blue/800'))
    assert.ok(!rapport.sansDescription.includes('Couleur/AXA blue 100'))
    assert.ok(!rapport.sansDescription.includes('Titre/H1'))
    assert.ok(!rapport.sansDescription.includes('Corps/texte'))
    assert.ok(!rapport.sansDescription.includes('Couleur/AXA blue 100/clair'))
    assert.ok(!rapport.sansDescription.includes('Contenu/libellé'))
    assert.ok(!rapport.sansDescription.includes('spacing/16'))
    assert.ok(!rapport.sansDescription.includes('border/width/2'))
  })
  verifier('nom de fichier fixe, en .resolver.json', () => assert.equal(fichier, 'design-tokens-canopee.resolver.json'))
  verifier('compteurs du rapport', () => {
    assert.deepEqual([rapport.variables, rapport.exportees, rapport.stylesTexte, rapport.stylesEffet], [43, 36, 1, 2])
  })

  verifier('nomenclature : écriture, noms français non kebab signalés', () => {
    assert.ok(rapport.nomenclature.includes('« Couleur/AXA blue 100 » : s\'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots'))
    assert.ok(rapport.nomenclature.includes('« Espacement/m » : s\'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots'))
  })
  verifier('nomenclature : écriture, majuscule au milieu d\'un nom déjà en anglais', () => {
    assert.ok(rapport.nomenclature.includes('« color/Blue/500 » : s\'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots'))
  })
  verifier('nomenclature : barre oblique attendue avant la valeur', () => {
    assert.ok(rapport.nomenclature.includes('« font/size-18 » : il manque une barre oblique avant le nombre, à écrire font/size/18'))
  })
  verifier('nomenclature : catégorie inconnue', () => {
    assert.ok(rapport.nomenclature.includes('« shadow/1 » : le nom doit commencer par color, font, border, spacing, size ou breakpoint'))
  })
  verifier('nomenclature : forme inattendue pour une catégorie connue', () => {
    assert.ok(rapport.nomenclature.includes('« color/blue » : ce nom ne suit pas le modèle des noms color, par exemple color/blue/500'))
  })
  verifier('nomenclature : palier hors échelle', () => {
    assert.ok(rapport.nomenclature.includes('« color/blue/550 » : palier hors échelle, attendu : 050, ou de 100 à 900 par pas de 100'))
  })
  verifier('nomenclature : le nom dit une valeur différente de la valeur réelle', () => {
    assert.ok(rapport.nomenclature.includes('« spacing/12 » : le nom indique 12, mais la valeur est de 10 px'))
  })
  verifier('nomenclature : taille et interligne indépendants, aucune alerte sans correspondance', () => {
    for (const nom of ['font/size/15', 'font/line-height/22']) assert.ok(!rapport.nomenclature.some((m) => m.startsWith(`« ${nom} »`)), nom)
  })
  verifier('nomenclature : noms conformes, non signalés', () => {
    const conformes = ['color/blue/700', 'spacing/16', 'font/size/16', 'font/line-height/20', 'border/radius/full', 'color/white', 'color/black-alpha/20']
    for (const nom of conformes) assert.ok(!rapport.nomenclature.some((m) => m.startsWith(`« ${nom} »`)), nom)
  })
  verifier('nomenclature : collection Sémantique non vérifiée', () => {
    assert.ok(!rapport.nomenclature.some((m) => m.includes('Action/primaire') || m.includes('Fond/marque')))
  })

  return 'continue'
}

// ---------------------------------------------------------- comparer (diff)

const scenarioComparerDiff = async () => {
  const plugin = creerPluginSimule(documentDeTest())
  const { t, json } = await exporterDocument(plugin)
  const cloneReference = () => JSON.parse(JSON.stringify(t))

  // Référence modifiée à partir de l'export courant : un token en moins (ressort
  // en « ajouté »), une couleur changée (ressort en « modifié »), un $deprecated
  // retiré (ressort en « déprécié »), un token en plus (ressort en « supprimé »).
  const referenceModifiee = cloneReference()
  const P_ref = lireSet(referenceModifiee, 'Primitives')
  delete P_ref.Opacité.disabled
  P_ref.color.blue['700'].$value = { ...P_ref.color.blue['700'].$value, hex: '#000066' }
  delete P_ref.Couleur['old grey DEPRECATED'].$deprecated
  P_ref.Couleur.disparue = { $type: 'color', $value: { colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000' } }

  await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(referenceModifiee), source: 'fichier', nomFichier: 'ancien-export.json', dateFichier: 1700000000000 })
  const diffModifie = normaliser(plugin.dernierMessage())
  verifier('diff : source, nom de fichier et date de fichier renvoyés', () => {
    assert.equal(diffModifie.type, 'diff')
    assert.deepEqual([diffModifie.source, diffModifie.nomFichier, diffModifie.dateFichier], ['fichier', 'ancien-export.json', 1700000000000])
  })
  verifier('diff : token absent de la référence, ajouté, avec sa valeur actuelle', () => {
    assert.deepEqual(diffModifie.ajoutes, [{ chemin: 'Opacité/disabled', valeur: '0.4' }])
  })
  verifier('diff : valeur de couleur différente, modifiée avec le hex des deux côtés, sans changement de type', () => {
    assert.deepEqual(diffModifie.modifies, [{ chemin: 'color/blue/700', avant: '#000066', apres: '#00008F', typeChange: false }])
  })
  verifier('diff : token en trop dans la référence, supprimé, avec la valeur de la référence', () => {
    assert.deepEqual(diffModifie.supprimes, [{ chemin: 'Couleur/disparue', valeur: '#000000' }])
  })
  verifier('diff : $deprecated en chaîne, absent de la référence, compté comme déprécié, avec sa valeur actuelle', () => {
    assert.deepEqual(diffModifie.deprecies, [{ chemin: 'Couleur/old grey DEPRECATED', valeur: '#808080' }])
  })

  await plugin.envoyer({ type: 'comparer', reference: json, source: 'repo' })
  verifier('diff : référence identique à l\'export courant, quatre listes vides', () => {
    const d = normaliser(plugin.dernierMessage())
    assert.deepEqual([d.ajoutes, d.modifies, d.supprimes, d.deprecies], [[], [], [], []])
  })
  verifier('diff : dateFichier absent du message quand il n\'est pas fourni dans comparer', () => {
    assert.equal('dateFichier' in plugin.dernierMessage(), false)
  })
  verifier('diff : niveau mineur quand une suppression se mêle aux autres changements', () => {
    assert.equal(diffModifie.niveau, 'mineur')
  })
  verifier('diff : dateReference reprise de la référence, transmise dans le message', () => {
    assert.equal(diffModifie.dateReference, t.$extensions['fr.axa.canopee'].date)
  })
}

// ------------------------------------------------------- niveau et version suivante

// Chaque cas isole un seul type de changement, pour vérifier le niveau qui lui
// correspond sans mélange avec les autres.
const scenarioNiveauEtVersionSuivante = async () => {
  const plugin = creerPluginSimule(documentDeTest())
  const { t } = await exporterDocument(plugin)
  const cloneReference = () => JSON.parse(JSON.stringify(t))
  const comparerA = async (ref, version) => {
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(ref), source: version ? 'version' : 'fichier', nomFichier: 'x.json', version })
    return plugin.dernierMessage()
  }

  const refSuppression = cloneReference()
  lireSet(refSuppression, 'Primitives').Couleur.disparue = { $type: 'color', $value: { colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000' } }

  const refChangementType = cloneReference()
  lireSet(refChangementType, 'Primitives').color.blue['700'].$type = 'dimension'

  const refAjout = cloneReference()
  delete lireSet(refAjout, 'Primitives').Opacité.disabled

  const refDepreciation = cloneReference()
  delete lireSet(refDepreciation, 'Primitives').Couleur['old grey DEPRECATED'].$deprecated

  const refValeurModifiee = cloneReference()
  {
    const token = lireSet(refValeurModifiee, 'Primitives').color.blue['700']
    token.$value = { ...token.$value, hex: '#000066' }
  }

  await comparerA(refSuppression)
  verifier('niveau : token supprimé → mineur', () => assert.equal(plugin.dernierMessage().niveau, 'mineur'))

  await comparerA(refChangementType)
  verifier('niveau : $type changé → mineur, modifies marqué typeChange', () => {
    const d = plugin.dernierMessage()
    assert.equal(d.niveau, 'mineur')
    assert.equal(d.modifies[0].typeChange, true)
  })

  await comparerA(refAjout)
  verifier('niveau : token ajouté → mineur', () => assert.equal(plugin.dernierMessage().niveau, 'mineur'))

  await comparerA(refDepreciation)
  verifier('niveau : token déprécié → mineur', () => assert.equal(plugin.dernierMessage().niveau, 'mineur'))

  await comparerA(refValeurModifiee)
  verifier('niveau : valeur modifiée seule → correctif, modifies marqué typeChange à false', () => {
    const d = plugin.dernierMessage()
    assert.equal(d.niveau, 'correctif')
    assert.equal(d.modifies[0].typeChange, false)
  })

  await comparerA(cloneReference())
  verifier('niveau : aucun changement → null', () => assert.equal(plugin.dernierMessage().niveau, null))

  const attenduesVersionSuivante = { mineur: '1.9.0', correctif: '1.8.1' }
  for (const version of ['1.8.0', '1.8.0-RC.2']) {
    await comparerA(refSuppression, version)
    verifier(`versionSuivante : ${version}, suppression → ${attenduesVersionSuivante.mineur}`, () => assert.equal(plugin.dernierMessage().versionSuivante, attenduesVersionSuivante.mineur))

    await comparerA(refAjout, version)
    verifier(`versionSuivante : ${version}, mineur → ${attenduesVersionSuivante.mineur}`, () => assert.equal(plugin.dernierMessage().versionSuivante, attenduesVersionSuivante.mineur))

    await comparerA(refValeurModifiee, version)
    verifier(`versionSuivante : ${version}, correctif → ${attenduesVersionSuivante.correctif}`, () => assert.equal(plugin.dernierMessage().versionSuivante, attenduesVersionSuivante.correctif))

    await comparerA(cloneReference(), version)
    verifier(`versionSuivante : ${version}, aucun changement → null`, () => assert.equal(plugin.dernierMessage().versionSuivante, null))
  }

  await comparerA(refAjout)
  verifier('versionSuivante : absent du message sans champ version dans comparer', () => {
    assert.equal('versionSuivante' in plugin.dernierMessage(), false)
  })
}

// dateReference : absente sans extension dans la référence, ignorée quand elle
// est seule à différer de l'export courant.
const scenarioReferenceEtDates = async () => {
  const plugin = creerPluginSimule(documentDeTest())
  const { t } = await exporterDocument(plugin)
  const cloneReference = () => JSON.parse(JSON.stringify(t))

  {
    const refSansDate = cloneReference()
    delete refSansDate.$extensions
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(refSansDate), source: 'fichier', nomFichier: 'sans-date.json' })
    verifier('dateReference : absente du message quand la référence n\'a pas d\'extension', () => {
      assert.equal('dateReference' in plugin.dernierMessage(), false)
    })
  }

  {
    const refAutreDate = cloneReference()
    refAutreDate.$extensions['fr.axa.canopee'].date = '2000-01-01T00:00:00Z'
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(refAutreDate), source: 'fichier', nomFichier: 'autre-date.json' })
    const d = normaliser(plugin.dernierMessage())
    verifier('diff : la date de l\'export est ignorée, aucun changement pour une référence qui ne diffère que par la date', () => {
      assert.deepEqual([d.ajoutes, d.modifies, d.supprimes, d.deprecies], [[], [], [], []])
      assert.equal(d.niveau, null)
      assert.equal(d.dateReference, '2000-01-01T00:00:00Z')
    })
  }
}

// Une référence invalide est détectée avant toute analyse du document : un
// plugin minimal, sans variables ni styles, suffit.
const scenarioComparerReferenceInvalide = async () => {
  const plugin = creerPluginSimule()
  await plugin.envoyer({ type: 'comparer', reference: 'ceci n\'est pas du JSON', source: 'fichier', nomFichier: 'invalide.json' })
  const diffPasDuJson = normaliser(plugin.dernierMessage())
  await plugin.envoyer({ type: 'comparer', reference: JSON.stringify({ nom: 'sans champ sets' }), source: 'fichier', nomFichier: 'sans-sets.json' })
  const diffSansSets = normaliser(plugin.dernierMessage())
  verifier('diff : référence invalide (JSON malformé ou sans champ sets), erreur renvoyée', () => {
    assert.deepEqual(diffPasDuJson, { type: 'diff', erreur: "Ce fichier n'est pas un export du plugin." })
    assert.deepEqual(diffSansSets, { type: 'diff', erreur: "Ce fichier n'est pas un export du plugin." })
  })
}

// -------------------------------------------------------- valeurs composites et contextes de modifier

// Document dédié : styles de texte et d'effet, plus une collection à quatre
// modes (client/prospect, desktop/mobile), pour vérifier les valeurs
// composites résumées dans le diff et les tokens de contexte de modifier. Un
// document à part, plutôt que DOCUMENT_COMMUN, pour ne pas l'alourdir.
const documentDiffComposites = () => ({
  nomFichier: 'Canopée Fondations',
  collections: [
    { id: 'CP', name: 'Primitives', modes: [{ modeId: 'p1', name: 'Mode 1' }], defaultModeId: 'p1' },
    {
      id: 'CT',
      name: 'Typography',
      modes: [
        { modeId: 'cd', name: 'client-desktop' }, { modeId: 'cm', name: 'client-mobile' },
        { modeId: 'pd', name: 'prospect-desktop' }, { modeId: 'pm', name: 'prospect-mobile' }
      ],
      defaultModeId: 'cd'
    }
  ],
  locales: [
    { id: 'p1v', name: 'font/family/sans-serif', resolvedType: 'STRING', variableCollectionId: 'CP', scopes: ['FONT_FAMILY'], valuesByMode: { p1: 'Source Sans Pro' } },
    // Seul le mode client-mobile diffère du mode par défaut (client-desktop) :
    // c'est le seul contexte qui reçoit un token.
    { id: 'tv1', name: 'heading/h4/line-height', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['LINE_HEIGHT'], valuesByMode: { cd: 24, cm: 20, pd: 24, pm: 24 } }
  ],
  distantes: [],
  stylesTexte: [
    {
      id: 's1', name: 'Corps/1', description: '',
      fontName: { family: 'Source Sans Pro', style: 'Regular' }, fontSize: 16,
      lineHeight: { unit: 'PIXELS', value: 24 }, letterSpacing: { unit: 'PIXELS', value: 0 }
    },
    {
      id: 's2', name: 'Titre/H5', description: '',
      fontName: { family: 'Source Sans Pro', style: 'Bold' }, fontSize: 20,
      lineHeight: { unit: 'PIXELS', value: 26 }, letterSpacing: { unit: 'PIXELS', value: 0 },
      boundVariables: { fontFamily: alias('p1v') }
    }
  ],
  stylesEffet: [
    { id: 'e1', name: 'Ombre/carte', description: '', effects: [ombre(2)] }
  ]
})

const scenarioDiffValeursComposites = async () => {
  const plugin = creerPluginSimule(documentDiffComposites())
  const { t } = await exporterDocument(plugin)

  // Référence construite à partir de l'export courant : Titre/H5 n'existe pas
  // encore (ressort en ajouté), la taille de Corps/1 et le flou de l'ombre
  // sont différents (ressortent en modifié, avec le détail du champ), et
  // l'interligne du contexte client-mobile est différent (ressort en modifié,
  // avec modifier et contexte renseignés).
  const reference = JSON.parse(JSON.stringify(t))
  const STY_ref = lireSet(reference, 'Styles')
  delete STY_ref.typography.Titre.H5
  STY_ref.typography.Corps['1'].$value.fontSize = { value: 14, unit: 'px' }
  STY_ref.shadow.Ombre.carte.$value.blur = { value: 4, unit: 'px' }
  reference.modifiers.Typography.contexts['client-mobile'][0].heading.h4['line-height'].$value = { value: 18, unit: 'px' }

  await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(reference), source: 'fichier', nomFichier: 'reference-composites.json' })
  const diff = normaliser(plugin.dernierMessage())

  verifier('diff : token de contexte de modifier, chemin sans suffixe, modifier et contexte renseignés', () => {
    const m = diff.modifies.find((x) => x.chemin === 'heading/h4/line-height' && x.modifier)
    assert.ok(m, 'entrée attendue absente')
    assert.deepEqual([m.modifier, m.contexte, m.avant, m.apres], ['Typography', 'client-mobile', '18 px', '20 px'])
  })
  verifier('diff : style de texte ajouté, valeur résumée plutôt qu\'en JSON', () => {
    const a = diff.ajoutes.find((x) => x.chemin === 'typography/Titre/H5')
    assert.ok(a)
    assert.equal(a.valeur, 'style de texte')
  })
  verifier('diff : style de texte modifié, résumé en tête, champ taille détaillé en dessous', () => {
    const m = diff.modifies.find((x) => x.chemin === 'typography/Corps/1')
    assert.ok(m)
    assert.equal(m.avant, 'style de texte')
    assert.equal(m.apres, 'style de texte')
    assert.deepEqual(m.champs, [{ champ: 'taille', avant: '14 px', apres: '16 px' }])
  })
  verifier('diff : ombre modifiée, résumée en tête, champ flou détaillé en dessous', () => {
    const m = diff.modifies.find((x) => x.chemin === 'shadow/Ombre/carte')
    assert.ok(m)
    assert.equal(m.avant, 'ombre')
    assert.equal(m.apres, 'ombre')
    assert.deepEqual(m.champs, [{ champ: 'flou', avant: '4 px', apres: '8 px' }])
  })
  verifier('diff : plus aucune valeur en JSON brut, y compris dans le détail des champs', () => {
    const entrees = [...diff.ajoutes, ...diff.modifies, ...diff.supprimes, ...diff.deprecies]
    const estJsonBrut = (v) => typeof v === 'string' && v.startsWith('{"')
    for (const e of entrees) {
      if ('valeur' in e) assert.ok(!estJsonBrut(e.valeur), e.valeur)
      if ('avant' in e) assert.ok(!estJsonBrut(e.avant), e.avant)
      if ('apres' in e) assert.ok(!estJsonBrut(e.apres), e.apres)
      for (const c of e.champs || []) {
        assert.ok(!estJsonBrut(c.avant), c.avant)
        assert.ok(!estJsonBrut(c.apres), c.apres)
      }
    }
  })
}

// ---------------------------------------------------------------- ouverture

const scenarioOuverture = async () => {
  const plugin = creerPluginSimule(documentDeTest())
  await plugin.envoyer({ type: 'pret' })
  verifier("contexte puis vérification annoncés à l'ouverture, dans l'ordre, sans diff", () => {
    assert.equal(plugin.messages.length, 2)
    assert.deepEqual(normaliser(plugin.messages[0]), {
      type: 'contexte', fichier: 'Canopée B2B', variables: 43, styles: 5, collections: 2,
      depot: {
        urlReference: `https://raw.githubusercontent.com/AxaFrance/design-system/main/${CHEMIN_TOKENS}`,
        urlTags: 'https://api.github.com/repos/AxaFrance/design-system/tags?per_page=100',
        urlPulls: 'https://api.github.com/repos/AxaFrance/design-system/pulls?state=open&per_page=100',
        urlVersion: `https://raw.githubusercontent.com/AxaFrance/design-system/{tag}/${CHEMIN_TOKENS}`,
        premiereVersion: '2.0.0',
        urlEdition: `https://github.com/AxaFrance/design-system/edit/main/${CHEMIN_TOKENS}`,
        urlCreation: 'https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json'
      }
    })
    const verification = plugin.messages[1]
    assert.equal(verification.type, 'verification')
    assert.equal(verification.modifie, false)
    assert.equal(verification.rapport.exportees, 36)
    assert.ok(verification.rapport.nomenclature.includes('« font/size-18 » : il manque une barre oblique avant le nombre, à écrire font/size/18'))
  })
}

// ------------------------------------------------------- redimensionnement automatique

const scenarioRedimensionnementAutomatique = async () => {
  const plugin = creerPluginSimule()
  await plugin.envoyer({ type: 'redimensionner', hauteur: 2000 })
  verifier('hauteur de fenêtre bornée', () => assert.deepEqual(plugin.redimensionnements, [[440, 800]]))
}

// ------------------------------------------------------- redimensionnement manuel

const scenarioRedimensionnementManuel = async () => {
  const plugin = creerPluginSimule()

  await plugin.envoyer({ type: 'redimensionner-manuel', largeur: 200, hauteur: 5000 })
  verifier('redimensionnement manuel : largeur et hauteur bornées, appliquées', () => {
    assert.deepEqual(plugin.redimensionnements[plugin.redimensionnements.length - 1], [320, 1200])
  })
  verifier('redimensionnement manuel : taille bornée enregistrée sur le poste', () => {
    // L'objet vient du contexte VM : on le normalise pour comparer, comme les messages.
    assert.deepEqual(normaliser(plugin.stockageClient.taille), { largeur: 320, hauteur: 1200 })
  })

  const avantAutoIgnore = plugin.redimensionnements.length
  await plugin.envoyer({ type: 'redimensionner', hauteur: 500 })
  verifier('redimensionnement automatique ignoré tant que la taille est manuelle', () => {
    assert.equal(plugin.redimensionnements.length, avantAutoIgnore)
  })

  const avantTailleAuto = plugin.messages.length
  await plugin.envoyer({ type: 'taille-auto' })
  verifier('taille auto : taille manuelle oubliée, largeur ramenée à 440, hauteur recalculée demandée', () => {
    assert.equal(plugin.stockageClient.taille, undefined)
    assert.deepEqual(plugin.redimensionnements[plugin.redimensionnements.length - 1], [440, 1200])
    const nouveaux = plugin.messages.slice(avantTailleAuto)
    assert.ok(nouveaux.some((m) => m.type === 'recalculer-hauteur'))
  })

  const avantAutoRepris = plugin.redimensionnements.length
  await plugin.envoyer({ type: 'redimensionner', hauteur: 500 })
  verifier('redimensionnement automatique repris après taille auto, hauteur minimale respectée', () => {
    assert.equal(plugin.redimensionnements.length, avantAutoRepris + 1)
    assert.deepEqual(plugin.redimensionnements[plugin.redimensionnements.length - 1], [440, 560])
  })
}

// ------------------------------------------------------------------ dépôt

// Adresses du dépôt, annoncées à l'interface dans le message contexte.
const scenarioUrlsDepot = async () => {
  const plugin = creerPluginSimule()
  plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
  await plugin.envoyer({ type: 'pret' })
  const depot = normaliser(plugin.messages.find((m) => m.type === 'contexte').depot)
  verifier('urls : lecture du fichier, versions, éditeur GitHub et création dans son dossier', () => {
    assert.deepEqual(depot, {
      urlReference: `https://raw.githubusercontent.com/AxaFrance/design-system/main/${CHEMIN_TOKENS}`,
      urlTags: 'https://api.github.com/repos/AxaFrance/design-system/tags?per_page=100',
      urlPulls: 'https://api.github.com/repos/AxaFrance/design-system/pulls?state=open&per_page=100',
      urlVersion: `https://raw.githubusercontent.com/AxaFrance/design-system/{tag}/${CHEMIN_TOKENS}`,
      premiereVersion: '2.0.0',
      urlEdition: `https://github.com/AxaFrance/design-system/edit/main/${CHEMIN_TOKENS}`,
      urlCreation: 'https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json'
    })
  })

  plugin.__test.DEPOT.cheminTokens = 'tokens/mon fichier.json'
  await plugin.envoyer({ type: 'pret' })
  const dernierContexte = plugin.messages.filter((m) => m.type === 'contexte').pop()
  verifier('urls : le nom du fichier est encodé dans le paramètre de création', () => {
    assert.equal(dernierContexte.depot.urlCreation, 'https://github.com/AxaFrance/design-system/new/main/tokens?filename=mon%20fichier.json')
  })
  verifier('urls : la clé du fichier Fondations est configurée', () => {
    assert.equal(plugin.__test.DEPOT.cleFichier, 'MJfhu2fwxNjxlzGqOAWJNq')
  })
}

// Une raison à la fois, dans l'ordre de priorité : fichier, vide, écartés, chemin.
const scenarioBlocageDepot = async () => {
  const rapport = (extra = {}) => ({ exportees: 3, stylesTexte: 0, stylesEffet: 0, conflits: [], aliasIntrouvables: [], ...extra })
  const bloquer = (plugin, r) => normaliser(plugin.__test.blocageDepot(r) ?? null)
  const dansFondations = () => creerPluginSimule({ fileKey: 'MJfhu2fwxNjxlzGqOAWJNq' })

  verifier('blocage : hors Fondations, raison fichier, avant toute autre', () => {
    const plugin = creerPluginSimule({ fileKey: 'AUTRE-CLE' })
    assert.deepEqual(bloquer(plugin, rapport({ exportees: 0, conflits: ['a'] })), { raison: 'fichier' })
  })
  verifier('blocage : la clé du fichier prime sur son nom', () => {
    const plugin = creerPluginSimule({ fileKey: 'AUTRE-CLE', nomFichier: 'Fondations Canopée' })
    assert.deepEqual(bloquer(plugin, rapport()), { raison: 'fichier' })
    const bonneCle = creerPluginSimule({ fileKey: 'MJfhu2fwxNjxlzGqOAWJNq', nomFichier: 'Autre nom' })
    bonneCle.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    assert.equal(bloquer(bonneCle, rapport()), null)
  })
  verifier('blocage : sans clé de fichier lisible, le nom du fichier Fondations Canopée suffit', () => {
    const plugin = creerPluginSimule({ nomFichier: 'Fondations Canopée' })
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    assert.equal(bloquer(plugin, rapport()), null)
    assert.deepEqual(bloquer(creerPluginSimule({ nomFichier: 'Canopée B2B' }), rapport()), { raison: 'fichier' })
  })
  verifier('blocage : ni token exporté, ni style de texte, ni style d\'effet, raison vide', () => {
    assert.deepEqual(bloquer(dansFondations(), rapport({ exportees: 0 })), { raison: 'vide' })
    assert.deepEqual(bloquer(dansFondations(), rapport({ exportees: 0, conflits: ['a'] })), { raison: 'vide' })
    const avecStyle = dansFondations()
    avecStyle.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    assert.equal(bloquer(avecStyle, rapport({ exportees: 0, stylesTexte: 1 })), null)
    assert.equal(bloquer(avecStyle, rapport({ exportees: 0, stylesEffet: 1 })), null)
  })
  verifier('blocage : tokens écartés, raison ecartes avec le compte des conflits et des liens cassés', () => {
    assert.deepEqual(bloquer(dansFondations(), rapport({ conflits: ['a'] })), { raison: 'ecartes', n: 1 })
    assert.deepEqual(bloquer(dansFondations(), rapport({ conflits: ['a', 'b'], aliasIntrouvables: ['c'] })), { raison: 'ecartes', n: 3 })
  })
  verifier('blocage : les liens cassés dans un autre mode ne comptent pas', () => {
    const plugin = dansFondations()
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    assert.equal(bloquer(plugin, rapport({ aliasIntrouvablesMode: ['a, mode sombre : reprend la valeur du mode par défaut'] })), null)
  })
  verifier('blocage : emplacement du fichier pas fixé, raison chemin, puis null une fois fixé', () => {
    const plugin = dansFondations()
    plugin.__test.DEPOT.cheminTokens = null
    assert.deepEqual(bloquer(plugin, rapport()), { raison: 'chemin' })
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    assert.equal(bloquer(plugin, rapport()), null)
  })

  // Le blocage part dans chaque message de vérification, ouverture comme mise à jour en direct.
  const doc = { ...documentDeTest(), nomFichier: 'Fondations Canopée' }
  const plugin = creerPluginSimule(doc)
  await plugin.envoyer({ type: 'pret' })
  verifier('blocage : porté par le message verification, ici un conflit de nom', () => {
    assert.deepEqual(normaliser(plugin.dernierMessage().blocage), { raison: 'ecartes', n: 1 })
  })
}

const scenarioDeposer = async () => {
  const plugin = creerPluginSimule(documentDeTest())
  plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
  const { json: courant } = await exporterDocument(plugin)
  const jsonCourant = sansDate(JSON.parse(courant))
  const urlEdition = `https://github.com/AxaFrance/design-system/edit/main/${CHEMIN_TOKENS}`
  const urlCreation = 'https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json'

  const sansFichier = await deposerDocument(plugin, null)
  verifier("deposer sans fichier dans le repo : URL de création, tout compte comme ajouté, feat", () => {
    assert.equal(sansFichier.url, urlCreation)
    assert.equal(sansFichier.message, 'feat(canopee): update design tokens')
  })
  verifier("deposer : le JSON est le document courant, avec sa date d'export", () => {
    assert.deepEqual(sansDate(JSON.parse(sansFichier.json)), jsonCourant)
    assert.ok(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(JSON.parse(sansFichier.json).$extensions['fr.axa.canopee'].date))
    assert.ok(sansFichier.json.endsWith('\n'))
  })

  const identique = await deposerDocument(plugin, courant)
  verifier('deposer avec un fichier identique dans le repo : URL d\'édition, chore', () => {
    assert.equal(identique.url, urlEdition)
    assert.equal(identique.message, 'chore(canopee): update design tokens')
    assert.deepEqual(sansDate(JSON.parse(identique.json)), jsonCourant)
  })

  const avecSuppression = JSON.parse(courant)
  lireSet(avecSuppression, 'Primitives').Couleur.disparue = { $type: 'color', $value: { colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000' } }
  const suppression = await deposerDocument(plugin, JSON.stringify(avecSuppression))
  verifier('deposer avec une suppression par rapport au repo : feat sans point d\'exclamation', () => {
    assert.equal(suppression.message, 'feat(canopee): update design tokens')
    assert.equal(suppression.url, urlEdition)
    assert.deepEqual(sansDate(JSON.parse(suppression.json)), jsonCourant)
  })

  const illisible = await deposerDocument(plugin, 'ceci n\'est pas du JSON')
  verifier('deposer avec un fichier du repo illisible : compte comme sans fichier pour le message, édition pour l\'URL', () => {
    assert.equal(illisible.message, 'feat(canopee): update design tokens')
    assert.equal(illisible.url, urlEdition)
  })

  verifier("deposer n'ouvre rien tout seul : l'ouverture est un message à part", () => {
    assert.deepEqual(plugin.ouvertures, [])
  })

  const sansChemin = creerPluginSimule(documentDeTest())
  sansChemin.__test.DEPOT.cheminTokens = null
  await sansChemin.envoyer({ type: 'deposer', referenceRepo: null })
  verifier("deposer sans emplacement de fichier dans le repo : erreur de contexte depot", () => {
    assert.deepEqual(normaliser(sansChemin.dernierMessage()), { type: 'erreur', contexte: 'depot', message: "l'emplacement du fichier n'est pas fixé." })
  })
}

const scenarioOuvrir = async () => {
  const plugin = creerPluginSimule()
  await plugin.envoyer({ type: 'ouvrir', url: 'https://github.com/AxaFrance/design-system/edit/main/x.json' })
  verifier("ouvrir : figma.openExternal est appelé avec l'URL reçue", () => {
    assert.deepEqual(plugin.ouvertures, ['https://github.com/AxaFrance/design-system/edit/main/x.json'])
  })
}

const scenarioTelecharger = async () => {
  const doc = documentDeTest()
  const plugin = creerPluginSimule(doc)
  // Comme à l'ouverture : l'interface envoie 'pret' avant toute action.
  await plugin.envoyer({ type: 'pret' })
  const avant = plugin.messages.length
  await plugin.envoyer({ type: 'telecharger' })
  const nouveaux = plugin.messages.slice(avant)
  verifier('telecharger : un seul message fichier, avec le nom fixe et le JSON du fichier Figma', () => {
    assert.equal(nouveaux.length, 1)
    assert.equal(nouveaux[0].type, 'fichier')
    assert.equal(nouveaux[0].fichier, 'design-tokens-canopee.resolver.json')
    const t = JSON.parse(nouveaux[0].json)
    assert.equal(t.name, 'Canopée B2B')
    assert.deepEqual(Object.keys(t.sets), ['Primitives', 'Sémantique', 'Styles'])
  })
  verifier('telecharger : ne touche pas à la comparaison', () => {
    assert.equal(nouveaux.some((m) => m.type === 'diff'), false)
    assert.deepEqual(plugin.ouvertures, [])
  })

  // Un changement fait juste avant le clic, pas encore vu par la mise à jour en
  // direct : il est annoncé à l'interface avant le fichier, et pris dans le JSON.
  doc.locales.find((v) => v.id === 'v2').valuesByMode.m1 = 24
  const avantChangement = plugin.messages.length
  await plugin.envoyer({ type: 'telecharger' })
  const apresChangement = plugin.messages.slice(avantChangement)
  verifier('telecharger juste après un changement : verification (modifie: true) envoyée avant le fichier', () => {
    const verification = apresChangement.findIndex((m) => m.type === 'verification')
    assert.ok(verification !== -1)
    assert.equal(apresChangement[verification].modifie, true)
    assert.equal(apresChangement[apresChangement.length - 1].type, 'fichier')
    assert.deepEqual(lireSet(JSON.parse(apresChangement[apresChangement.length - 1].json), 'Primitives').Espacement.m.$value, { value: 24, unit: 'px' })
  })
}

// Un seul plugin, quatre niveaux : chaque dépôt se compare à ce que le repo
// contiendrait après le dépôt précédent. Le premier, sans fichier dans le repo,
// compte tout comme ajouté.
const scenarioMessagesDeCommit = async () => {
  const doc = documentDeTest()
  const plugin = creerPluginSimule(doc)
  plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
  let repo = null
  const deposer = async () => {
    const depot = await deposerDocument(plugin, repo)
    repo = depot.json
    return depot.message
  }
  const messages = {}

  messages.premier = await deposer()
  messages.aucun = await deposer()
  doc.locales.find((v) => v.id === 'v2').valuesByMode.m1 = 24
  messages.correctif = await deposer()
  doc.locales.push({ id: 'v99', name: 'spacing/32', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { m1: 32 } })
  messages.mineur = await deposer()
  doc.locales.splice(doc.locales.findIndex((v) => v.id === 'v99'), 1)
  messages.suppression = await deposer()
  doc.locales.find((v) => v.id === 'v2').valuesByMode.m1 = 32
  messages.majeur = (await deposerDocument(plugin, repo, { refonte: true })).message

  console.log('  messages de commit :', JSON.stringify(messages, null, 2).replace(/\n/g, '\n  '))

  verifier('commit : sans fichier dans le repo, tous les tokens ajoutés → mineur', () => {
    assert.equal(messages.premier, 'feat(canopee): update design tokens')
  })
  verifier('commit : aucun changement → chore', () => {
    assert.equal(messages.aucun, 'chore(canopee): update design tokens')
  })
  verifier('commit : valeur modifiée → fix', () => {
    assert.equal(messages.correctif, 'fix(canopee): update design tokens')
  })
  verifier('commit : token ajouté → feat', () => {
    assert.equal(messages.mineur, 'feat(canopee): update design tokens')
  })
  verifier('commit : token supprimé → feat sans point d\'exclamation', () => {
    assert.equal(messages.suppression, 'feat(canopee): update design tokens')
  })
  verifier('commit : case Refonte complète → feat avec point d\'exclamation, même pour une valeur modifiée', () => {
    assert.equal(messages.majeur, 'feat(canopee)!: update design tokens')
  })
}

// ------------------------------------------------------- mise à jour en direct

const scenarioMiseAJourEnDirect = async () => {
  const doc = documentDeTest()
  const plugin = creerPluginSimule(doc)
  const { json } = await exporterDocument(plugin)
  // Une référence courante, comme après une comparaison au code : condition du diff ci-dessous.
  await plugin.envoyer({ type: 'comparer', reference: json, source: 'repo' })

  const avantModif = plugin.messages.length
  const variableEspacement = doc.locales.find((v) => v.id === 'v2')
  variableEspacement.valuesByMode.m1 = 24
  await plugin.__test.verifierModifications()
  verifier('mise à jour en direct : une modification déclenche contexte, verification (modifie: true) et diff', () => {
    const nouveaux = plugin.messages.slice(avantModif)
    assert.equal(nouveaux.length, 3)
    assert.equal(nouveaux[0].type, 'contexte')
    assert.equal(nouveaux[1].type, 'verification')
    assert.equal(nouveaux[1].modifie, true)
    assert.ok('blocage' in nouveaux[1])
    const diff = normaliser(nouveaux[2])
    assert.equal(diff.type, 'diff')
    assert.equal(diff.source, 'repo')
    assert.deepEqual(diff.modifies, [{ chemin: 'Espacement/m', avant: '16 px', apres: '24 px', typeChange: false }])
  })

  const avantSecondAppel = plugin.messages.length
  await plugin.__test.verifierModifications()
  verifier('mise à jour en direct : un second appel sans modification ne renvoie rien', () => {
    assert.equal(plugin.messages.length, avantSecondAppel)
  })
}

// ------------------------------------------------------------------ erreurs

const scenarioErreurs = async () => {
  const plugin = creerPluginSimule()
  plugin.__test.signalerErreur(new Error('boum'), 'depot')
  verifier('erreur : le message porte le contexte', () => {
    assert.deepEqual(normaliser(plugin.dernierMessage()), { type: 'erreur', contexte: 'depot', message: 'boum' })
  })
  plugin.__test.signalerErreur('texte brut', 'comparaison')
  verifier("erreur : une valeur qui n'est pas une erreur devient son texte", () => {
    assert.deepEqual(normaliser(plugin.dernierMessage()), { type: 'erreur', contexte: 'comparaison', message: 'texte brut' })
  })

  // Un fichier dont la lecture des variables échoue : chaque action renvoie son contexte.
  const locales = []
  locales.map = () => { throw new Error('lecture impossible') }
  const casse = creerPluginSimule({ locales })
  const contexteDe = async (msg) => {
    const avant = casse.messages.length
    await casse.envoyer(msg)
    return normaliser(casse.messages.slice(avant).filter((m) => m.type === 'erreur'))
  }
  const attendu = (contexte) => [{ type: 'erreur', contexte, message: 'lecture impossible' }]
  const verification = await contexteDe({ type: 'pret' })
  const comparaison = await contexteDe({ type: 'comparer', reference: '{"sets":{}}', source: 'fichier' })
  const depot = await contexteDe({ type: 'deposer', referenceRepo: null })
  const telechargement = await contexteDe({ type: 'telecharger' })
  verifier('erreur : vérification, comparaison, dépôt et téléchargement portent chacun leur contexte', () => {
    assert.deepEqual(verification, attendu('verification'))
    assert.deepEqual(comparaison, attendu('comparaison'))
    assert.deepEqual(depot, attendu('depot'))
    assert.deepEqual(telechargement, attendu('telechargement'))
  })
}

// ------------------------------------------------------------- liens cassés

// Un lien cassé dans le mode par défaut écarte le token. Dans un autre mode, le
// token reste exporté et ce mode prend la valeur par défaut.
const scenarioLiensCasses = async () => {
  const plugin = creerPluginSimule({
    nomFichier: 'Fondations Canopée',
    collections: [{ id: 'C1', name: 'Thème', modes: [{ modeId: 'md', name: 'clair' }, { modeId: 'mx', name: 'sombre' }], defaultModeId: 'md' }],
    locales: [
      { id: 'a', name: 'Espacement/a', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { md: 16, mx: alias('inexistante') } },
      { id: 'b', name: 'Espacement/b', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { md: alias('inexistante'), mx: 8 } },
      { id: 'c', name: 'Espacement/c', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { md: 4, mx: 4 } }
    ]
  })
  plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
  const { t, rapport } = await exporterDocument(plugin)
  const set = lireSet(t, 'Thème')
  verifier('lien cassé dans le mode par défaut : token écarté, listé dans aliasIntrouvables', () => {
    assert.deepEqual(rapport.aliasIntrouvables, ['Espacement/b'])
    assert.equal(set.Espacement.b, undefined)
  })
  verifier('lien cassé dans un autre mode : token exporté, mode listé dans aliasIntrouvablesMode', () => {
    assert.deepEqual(rapport.aliasIntrouvablesMode, ['Espacement/a, mode sombre : reprend la valeur du mode par défaut'])
    assert.deepEqual(set.Espacement.a.$value, { value: 16, unit: 'px' })
  })
  verifier('lien cassé dans un autre mode : le mode ne porte pas de surcharge, il retombe sur la valeur par défaut', () => {
    assert.deepEqual(t.modifiers['Thème'].contexts.sombre, [])
    assert.equal(rapport.exportees, 2)
  })
  verifier("lien cassé dans un autre mode : ne bloque pas le dépôt, seul l'autre lien compte", () => {
    const blocage = normaliser(plugin.messages.filter((m) => m.type === 'verification').pop().blocage)
    assert.deepEqual(blocage, { raison: 'ecartes', n: 1 })
  })
}

// --------------------------------------------------------------- diff des modes

// Un contexte de modifier ne porte que les valeurs qui diffèrent du défaut : un
// mode qui rejoint (ou quitte) la valeur par défaut n'est pas un ajout ni une suppression.
const scenarioDiffDesModes = async () => {
  const document = (defaut, modeSombre, { avecA = true } = {}) => ({
    nomFichier: 'Canopée Fondations',
    collections: [{ id: 'CT', name: 'Thème', modes: [{ modeId: 'md', name: 'clair' }, { modeId: 'mx', name: 'sombre' }], defaultModeId: 'md' }],
    locales: [
      ...(avecA ? [{ id: 'a', name: 'Espacement/a', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['GAP'], valuesByMode: { md: defaut, mx: modeSombre } }] : []),
      { id: 'b', name: 'Espacement/b', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['GAP'], valuesByMode: { md: 4, mx: 4 } }
    ]
  })
  // Diff de l'état actuel contre l'état de référence, chacun sur son propre plugin.
  const comparer = async (docReference, docActuel) => {
    const { json } = await exporterDocument(creerPluginSimule(docReference))
    const plugin = creerPluginSimule(docActuel)
    await plugin.envoyer({ type: 'comparer', reference: json, source: 'fichier', nomFichier: 'x.json' })
    return normaliser(plugin.dernierMessage())
  }
  const sombre = { modifier: 'Thème', contexte: 'sombre' }

  const rejointLeDefaut = await comparer(document(16, 24), document(16, 16))
  verifier('diff des modes : un mode qui rejoint la valeur par défaut est un modifié, pas un supprimé', () => {
    assert.deepEqual(rejointLeDefaut.modifies, [{ chemin: 'Espacement/a', ...sombre, avant: '24 px', apres: '16 px', typeChange: false }])
    assert.deepEqual([rejointLeDefaut.ajoutes, rejointLeDefaut.supprimes, rejointLeDefaut.deprecies], [[], [], []])
    assert.equal(rejointLeDefaut.niveau, 'correctif')
  })

  const quitteLeDefaut = await comparer(document(16, 16), document(16, 24))
  verifier('diff des modes : un mode qui quitte la valeur par défaut est un modifié, pas un ajouté', () => {
    assert.deepEqual(quitteLeDefaut.modifies, [{ chemin: 'Espacement/a', ...sombre, avant: '16 px', apres: '24 px', typeChange: false }])
    assert.deepEqual([quitteLeDefaut.ajoutes, quitteLeDefaut.supprimes], [[], []])
    assert.equal(quitteLeDefaut.niveau, 'correctif')
  })

  const defautChange = await comparer(document(16, 16), document(24, 16))
  verifier("diff des modes : la base change et le mode garde sa valeur, un seul modifié sur la base", () => {
    assert.deepEqual(defautChange.modifies, [{ chemin: 'Espacement/a', avant: '16 px', apres: '24 px', typeChange: false }])
    assert.deepEqual([defautChange.ajoutes, defautChange.supprimes], [[], []])
    assert.equal(defautChange.niveau, 'correctif')
  })

  const tokenSupprime = await comparer(document(16, 24), document(16, 24, { avecA: false }))
  verifier('diff des modes : un token supprimé avec ses modes donne des supprimés, base et mode', () => {
    assert.deepEqual(tokenSupprime.supprimes, [
      { chemin: 'Espacement/a', valeur: '16 px' },
      { chemin: 'Espacement/a', ...sombre, valeur: '24 px' }
    ])
    assert.deepEqual([tokenSupprime.ajoutes, tokenSupprime.modifies], [[], []])
    assert.equal(tokenSupprime.niveau, 'mineur')
  })

  const tokenAjoute = await comparer(document(16, 24, { avecA: false }), document(16, 24))
  verifier('diff des modes : un token ajouté avec ses modes donne des ajoutés, base et mode', () => {
    assert.deepEqual(tokenAjoute.ajoutes, [
      { chemin: 'Espacement/a', valeur: '16 px' },
      { chemin: 'Espacement/a', ...sombre, valeur: '24 px' }
    ])
    assert.deepEqual([tokenAjoute.supprimes, tokenAjoute.modifies], [[], []])
    assert.equal(tokenAjoute.niveau, 'mineur')
  })
}

// -------------------------------------------------- taille retenue, à l'ouverture

const scenarioTailleRetenueAOuverture = async () => {
  const plugin = creerPluginSimule({ stockageClient: { taille: { largeur: 550, hauteur: 250 } } })
  // La taille retenue se réapplique dans l'IIFE de tête de code.js, avant tout
  // message : laisser le temps aux micro-tâches de s'exécuter.
  await new Promise((r) => setTimeout(r, 0))
  verifier("taille enregistrée réappliquée à l'ouverture, bornée comme une taille manuelle", () => {
    assert.deepEqual(plugin.redimensionnements, [[550, 300]])
  })
}

// ------------------------------------------------------------ dépréciation

const scenarioDepreciation = async () => {
  const variable = (id, nom, extra = {}) => ({
    id, name: nom, resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['GAP'], valuesByMode: { p1: 8 }, ...extra
  })
  const style = (id, nom, description) => ({
    id, name: nom, description, fontName: { family: 'Source Sans Pro', style: 'Regular' }, fontSize: 16,
    lineHeight: { unit: 'PIXELS', value: 20 }, letterSpacing: { unit: 'PIXELS', value: 0 }, boundVariables: {}
  })
  const plugin = creerPluginSimule({
    collections: [{ id: 'CP', name: 'Primitives', modes: [{ modeId: 'p1', name: 'Mode 1' }], defaultModeId: 'p1' }],
    locales: [
      variable('d1', 'Espacement/avec-remplacant', { description: 'Deprecated: use color/blue/700.' }),
      variable('d2', 'Espacement/seul', { description: 'Deprecated' }),
      variable('d3', 'Espacement/tiret', { description: '  deprecated - voir spacing/16' }),
      variable('d4', 'Espacement/mot-colle', { description: 'Deprecatedx : autre chose' }),
      variable('d5', 'Espacement/masque', { hiddenFromPublishing: true }),
      variable('d6', 'Espacement/sans-scope', { scopes: [], description: 'Deprecated. Use spacing/16 or spacing/24.' }),
      variable('d7', 'Espacement/sans-scope-actif', { scopes: [] }),
      variable('d8', 'Espacement/deprecated-dans-le-nom', { description: 'Pour un usage ancien' })
    ],
    stylesTexte: [style('s1', 'Ancien/titre', 'Deprecated: use Titre/H1'), style('s2', 'Titre/H1', 'Titre de page')],
    stylesEffet: [{ id: 'e1', name: 'Ancienne/ombre', description: 'Deprecated', effects: [ombre(2)] }]
  })
  const { t, P, rapport } = await exporterDocument(plugin)
  const E = P.Espacement
  verifier('description « Deprecated: use color/blue/700. » : $deprecated porte la suite, la description commence par Deprecated', () => {
    assert.equal(E['avec-remplacant'].$deprecated, 'use color/blue/700.')
    assert.ok(E['avec-remplacant'].$description.startsWith('Deprecated'))
  })
  verifier('« Deprecated » seul : $deprecated vaut true', () => assert.equal(E.seul.$deprecated, true))
  verifier('espaces de début ignorés, tiret de liaison retiré', () => assert.equal(E.tiret.$deprecated, 'voir spacing/16'))
  verifier('« Deprecated » collé à d\'autres lettres : pas déprécié', () => assert.equal(E['mot-colle'].$deprecated, undefined))
  verifier('variable masquée à la publication sans « Deprecated » : exportée comme les autres', () => {
    assert.equal(E.masque.$deprecated, undefined)
    assert.equal(E.masque.$type, 'dimension')
  })
  verifier('« deprecated » dans le nom ou ailleurs dans la description : pas déprécié', () => assert.equal(E['deprecated-dans-le-nom'].$deprecated, undefined))
  verifier('variable dépréciée sans scope : absente de typesDeduits, active sans scope : présente', () => {
    assert.equal(E['sans-scope'].$deprecated, 'Use spacing/16 or spacing/24.')
    assert.equal(E['sans-scope'].$type, 'dimension')
    assert.ok(!rapport.typesDeduits.some((e) => e.startsWith('Espacement/sans-scope :')))
    assert.ok(rapport.typesDeduits.some((e) => e.startsWith('Espacement/sans-scope-actif :')))
  })
  verifier('style de texte et style d\'effet dont la description commence par Deprecated : dépréciés', () => {
    const STY = lireSet(t, 'Styles')
    assert.equal(STY.typography.Ancien.titre.$deprecated, 'use Titre/H1')
    assert.equal(STY.typography.Titre.H1.$deprecated, undefined)
    assert.equal(STY.shadow.Ancienne.ombre.$deprecated, true)
  })
  const reference = JSON.parse(JSON.stringify(t))
  delete lireSet(reference, 'Primitives').Espacement['avec-remplacant'].$deprecated
  delete lireSet(reference, 'Styles').typography.Ancien.titre.$deprecated
  await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(reference), source: 'repo' })
  const diff = normaliser(plugin.dernierMessage())
  verifier('diff : $deprecated en chaîne (variable ou style) compté comme déprécié, niveau mineur', () => {
    assert.deepEqual(diff.deprecies.map((d) => d.chemin).sort(), ['Espacement/avec-remplacant', 'typography/Ancien/titre'])
    assert.equal(diff.niveau, 'mineur')
  })
}

// ------------------------------------------------------- styles exportés incomplets

const scenarioStylesIncomplets = async () => {
  const style = (id, nom, graisse, extra = {}) => ({
    id, name: nom, description: '', fontName: { family: 'Source Sans Pro', style: graisse }, fontSize: 16,
    lineHeight: { unit: 'PIXELS', value: 20 }, letterSpacing: { unit: 'PIXELS', value: 0 }, boundVariables: {}, ...extra
  })
  const plugin = creerPluginSimule({
    collections: [{ id: 'CP', name: 'Primitive', modes: [{ modeId: 'p1', name: 'Mode 1' }], defaultModeId: 'p1' }],
    // Variable de style de police Figma : sa valeur est un nom de style, pas un font-style CSS.
    locales: [{ id: 'fs1', name: 'font/style/semibold-italic', resolvedType: 'STRING', variableCollectionId: 'CP', scopes: ['FONT_STYLE'], valuesByMode: { p1: 'Semibold Italic' } }],
    stylesTexte: [
      style('s1', 'Citation', 'Italic'), style('s2', 'Légende', 'Book Heavy'),
      style('s3', 'Lien', 'Regular', { textDecoration: 'UNDERLINE' }),
      style('s4', 'Prix barré', 'Regular', { textDecoration: 'STRIKETHROUGH' }),
      style('s5', 'Majuscules', 'Regular', { textCase: 'UPPER' }),
      style('s6', 'Petites capitales', 'Regular', { textCase: 'SMALL_CAPS' }),
      style('s7', 'Simple', 'Regular', { textDecoration: 'NONE', textCase: 'ORIGINAL' }),
      style('s8', 'Oblique', 'Semibold Oblique'),
      style('s9', 'Lié', 'Semibold Italic', { boundVariables: { fontStyle: alias('fs1') } })
    ]
  })
  const { t, rapport } = await exporterDocument(plugin)
  const T = lireSet(t, 'Styles').typography
  // Champs hors DTCG d'un style : dans $extensions, jamais dans $value.
  const ext = (nom) => T[nom].$extensions?.['fr.axa.canopee'] || {}
  const HORS_DTCG = ['fontStyle', 'textDecoration', 'textTransform']
  verifier("style « Italic » seul : graisse 400 et fontStyle italic, ni incomplet ni écarté", () => {
    assert.equal(rapport.stylesTexte, 9)
    assert.equal(T.Citation.$value.fontWeight, 400)
    assert.equal(ext('Citation').fontStyle, 'italic')
    assert.ok(!rapport.stylesIncomplets.some((e) => e.startsWith('Citation')))
    assert.ok(!rapport.ecartes.some((e) => e.startsWith('Citation')))
  })
  verifier('style oblique : fontStyle oblique', () => {
    assert.equal(ext('Oblique').fontStyle, 'oblique')
  })
  verifier('graisse non reconnue : exportée telle quelle, et signalée comme incomplète', () => {
    assert.ok(rapport.stylesIncomplets.includes('Légende : graisse « Book Heavy » non reconnue, exportée telle quelle'))
  })
  verifier('souligné : textDecoration underline', () => {
    assert.equal(ext('Lien').textDecoration, 'underline')
  })
  verifier('barré : textDecoration line-through', () => {
    assert.equal(ext('Prix barré').textDecoration, 'line-through')
  })
  verifier('majuscules : textTransform uppercase', () => {
    assert.equal(ext('Majuscules').textTransform, 'uppercase')
  })
  verifier('petites capitales : aucun textTransform, signalé comme incomplet', () => {
    assert.ok(!('textTransform' in ext('Petites capitales')))
    assert.ok(rapport.stylesIncomplets.includes('Petites capitales : les petites capitales ne sont pas exportées'))
  })
  verifier('style sans italique, soulignement ni casse : aucune extension', () => {
    assert.equal(T.Simple.$extensions, undefined)
  })
  verifier('italique, soulignement et casse jamais dans $value, que Terrazzo lit', () => {
    for (const [nom, jeton] of Object.entries(T)) {
      for (const cle of HORS_DTCG) assert.ok(!(cle in jeton.$value), `${nom} : ${cle}`)
    }
  })
  verifier('fontStyle relié à une variable : le champ garde sa valeur CSS, jamais une référence', () => {
    assert.equal(ext('Lié').fontStyle, 'italic')
  })

  // Diff : référence sans le soulignement du style Lien.
  const reference = JSON.parse(JSON.stringify(t))
  delete lireSet(reference, 'Styles').typography.Lien.$extensions
  await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(reference), source: 'fichier', nomFichier: 'reference-souligne.json' })
  const diff = normaliser(plugin.dernierMessage())
  verifier('diff : style souligné comparé à une référence sans le champ, « décoration du texte » de aucun à underline', () => {
    const m = diff.modifies.find((x) => x.chemin === 'typography/Lien')
    assert.ok(m)
    assert.deepEqual(m.champs, [{ champ: 'décoration du texte', avant: 'aucun', apres: 'underline' }])
  })
  verifier('diff : rien d\'autre ne change, les autres extensions restent ignorées', () => {
    assert.deepEqual(diff.modifies.map((x) => x.chemin), ['typography/Lien'])
  })
}

const scenarioBreakpoints = async () => {
  const breakpoint = (id, nom, valeur) => ({ id, name: nom, resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['WIDTH_HEIGHT'], description: 'Utilisé par prospect et client.', valuesByMode: { m1: valeur } })
  const plugin = creerPluginSimule({
    collections: [{ id: 'CP', name: 'Primitive', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' }],
    locales: [breakpoint('b1', 'breakpoint/1024', 1024), breakpoint('b2', 'breakpoint/0', 0), breakpoint('b3', 'breakpoint/1280', 1279)]
  })
  const { t, rapport } = await exporterDocument(plugin)
  const B = lireSet(t, 'Primitive').breakpoint
  verifier('breakpoint : dimension en px, description générée avant celle de Figma', () => {
    assert.deepEqual([B['1024'].$type, B['1024'].$value], ['dimension', { value: 1024, unit: 'px' }])
    assert.equal(B['1024'].$description, "Largeur d'écran de 1024 px à partir de laquelle la mise en page change. Reste en px dans le code. Utilisé par prospect et client.")
  })
  verifier('breakpoint : nom conforme, y compris breakpoint/0', () => {
    assert.ok(!rapport.nomenclature.some((m) => m.startsWith('« breakpoint/1024 »') || m.startsWith('« breakpoint/0 »')))
  })
  verifier('breakpoint : le nombre du nom doit égaler la valeur', () => {
    assert.ok(rapport.nomenclature.includes('« breakpoint/1280 » : le nom indique 1280, mais la valeur est de 1279 px'))
  })
}

const scenarioVariablesSupprimees = async () => {
  const collection = { id: 'CP', name: 'Primitive', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' }
  const supprimee = { id: 'vs', name: 'Shadow/Blur', resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['EFFECT_FLOAT'], valuesByMode: { m1: 8 } }
  const plugin = creerPluginSimule({
    collections: [collection],
    locales: [
      { id: 'v1', name: 'spacing/8', resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['GAP'], valuesByMode: { m1: 8 } },
      { id: 'v2', name: 'spacing/flou', resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['GAP'], valuesByMode: { m1: alias('vs') } }
    ],
    supprimees: [supprimee],
    stylesEffet: [{
      id: 'e1', name: 'Shadow', description: '',
      effects: [{ type: 'DROP_SHADOW', visible: true, color: { r: 0, g: 0, b: 0, a: 0.25 }, offset: { x: 0, y: 2 }, radius: 8, spread: 0, boundVariables: { radius: alias('vs') } }]
    }]
  })
  const { t, rapport } = await exporterDocument(plugin)
  verifier('variable supprimée : un alias vers elle est un lien cassé, le token n\'est pas exporté', () => {
    assert.ok(rapport.aliasIntrouvables.includes('spacing/flou'))
    assert.equal(lireSet(t, 'Primitive').spacing.flou, undefined)
  })
  verifier('variable supprimée : un style relié à elle est un lien cassé, le style n\'est pas exporté', () => {
    assert.ok(rapport.aliasIntrouvables.includes('Shadow'))
    assert.equal(rapport.stylesEffet, 0)
    assert.equal(t.sets.Styles, undefined)
  })
}

const scenarioOpaciteEtStyles = async () => {
  const couleurAlpha = (id, nom, valeur) => ({ id, name: nom, resolvedType: 'COLOR', variableCollectionId: 'CP', scopes: [], valuesByMode: { m1: valeur } })
  const styleTexte = (id, nom) => ({
    id, name: nom, description: 'Texte',
    fontName: { family: 'Source Sans Pro', style: 'Regular' }, fontSize: 16,
    lineHeight: { unit: 'PIXELS', value: 20 }, letterSpacing: { unit: 'PIXELS', value: 0 }
  })
  const plugin = creerPluginSimule({
    collections: [{ id: 'CP', name: 'Primitive', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' }],
    locales: [
      couleurAlpha('a1', 'color/black-alpha/20', { r: 0, g: 0, b: 0, a: 0.20000000298023224 }),
      couleurAlpha('a2', 'color/black-alpha/30', { r: 0, g: 0, b: 0, a: 0.5 }),
      couleurAlpha('a3', 'color/white-alpha/40', { r: 1, g: 1, b: 1 }),
      couleurAlpha('a4', 'color/gray-alpha/50', alias('a1'))
    ],
    stylesTexte: [
      styleTexte('s1', 'heading/h2'),
      styleTexte('s2', 'body/2/semibold'),
      styleTexte('s3', 'Titre/H1'),
      styleTexte('s4', 'quote/1/regular'),
      styleTexte('s5', 'body/2'),
      styleTexte('s6', 'heading/2/regular')
    ]
  })
  const { rapport } = await exporterDocument(plugin)
  const motifDe = (nom) => rapport.nomenclature.find((m) => m.startsWith(`« ${nom} »`))
  verifier('nomenclature : opacité conforme au nom, malgré l\'arrondi de Figma', () => assert.equal(motifDe('color/black-alpha/20'), undefined))
  verifier('nomenclature : opacité différente du nom', () => {
    assert.equal(motifDe('color/black-alpha/30'), "« color/black-alpha/30 » : le nom indique 30 % d'opacité, mais la valeur est de 50 %")
  })
  verifier('nomenclature : couleur sans alpha, comptée opaque', () => {
    assert.equal(motifDe('color/white-alpha/40'), "« color/white-alpha/40 » : le nom indique 40 % d'opacité, mais la valeur est de 100 %")
  })
  verifier('nomenclature : opacité non comparée pour un alias', () => assert.equal(motifDe('color/gray-alpha/50'), undefined))
  verifier('nomenclature : styles de texte conformes, non signalés', () => {
    for (const nom of ['heading/h2', 'body/2/semibold']) assert.equal(motifDe(nom), undefined, nom)
  })
  verifier('nomenclature : style mal écrit', () => {
    assert.equal(motifDe('Titre/H1'), "« Titre/H1 » : s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots")
  })
  verifier('nomenclature : style hors des familles', () => {
    assert.equal(motifDe('quote/1/regular'), '« quote/1/regular » : le nom doit commencer par heading, title, subtitle, body, label ou caption')
  })
  verifier('nomenclature : style sans graisse', () => {
    assert.equal(motifDe('body/2'), '« body/2 » : ce nom ne suit pas le modèle des styles body, par exemple body/2/semibold')
  })
  verifier('nomenclature : heading écrit comme les autres familles', () => {
    assert.equal(motifDe('heading/2/regular'), '« heading/2/regular » : ce nom ne suit pas le modèle des styles heading, par exemple heading/h2')
  })
}

// La doc et le plugin vivent dans le même repo : une règle de nommage changée
// d'un seul côté fait échouer ce scénario.
const scenarioDocumentation = async () => {
  const fondations = (page) => fs.readFileSync(path.join(__dirname, '..', '..', '..', 'fondations', page), 'utf8')
  const tableau = (texte, premiereColonne) => {
    const lignes = texte.split('\n')
    const debut = lignes.findIndex((l) => l.startsWith(`| ${premiereColonne} |`))
    assert.notEqual(debut, -1, `tableau « ${premiereColonne} » introuvable`)
    const corps = []
    for (const l of lignes.slice(debut + 2)) {
      if (!l.startsWith('|')) break
      corps.push(l.split('|').slice(1, -1).map((c) => c.trim()))
    }
    return corps
  }
  const { __test: t } = creerPluginSimule()
  const primitives = fondations('01-primitives.md')
  const styles = fondations('02-styles-de-texte.md')
  const modeles = tableau(primitives, "Ce qu'elle désigne")
  const noms = modeles.map((l) => l[1])
  const valeursAdmises = (partie) => {
    const ligne = tableau(primitives, 'Partie').find((l) => l[0] === partie)
    assert.ok(ligne, `ligne « ${partie} » introuvable`)
    return ligne[1].split(', ')
  }

  verifier('doc : chaque modèle de 01-primitives.md suit une forme du plugin', () => {
    for (const nom of noms) assert.ok(t.formeCorrespondante(nom), `${nom} : le plugin ne connaît pas ce modèle`)
  })
  verifier('doc : chaque forme du plugin a sa ligne dans 01-primitives.md', () => {
    const couvertes = noms.map((nom) => t.formeCorrespondante(nom).id).sort()
    assert.deepEqual(couvertes, [...t.GRAMMAIRE_PRIMITIVES].map((f) => f.id).sort())
  })
  verifier('doc : les catégories du plugin sont celles de 01-primitives.md', () => {
    assert.deepEqual([...new Set(noms.map((nom) => nom.split('/')[0]))].sort(), [...t.CATEGORIES_CONNUES].sort())
    for (const exemple of Object.values(t.EXEMPLE_CATEGORIE)) assert.ok(noms.includes(exemple), `${exemple} : absent de la doc`)
  })
  verifier('doc : le nom dans le code suit le nom dans Figma', () => {
    for (const [, figma, code] of modeles) assert.equal(code, '--' + figma.replace(/\//g, '-'))
  })
  verifier('doc : les paliers du plugin sont ceux de 01-primitives.md', () => {
    assert.deepEqual(valeursAdmises("Palier d'une couleur"), [...t.PALIERS])
  })
  verifier('doc : le plugin connaît le seul mot-clé d\'arrondi de 01-primitives.md', () => {
    assert.deepEqual(valeursAdmises("Mot-clé d'un arrondi"), ['full'])
  })
  verifier('doc : les familles du plugin sont celles de 02-styles-de-texte.md', () => {
    assert.deepEqual(tableau(styles, 'Famille').map((l) => l[0]), [...t.FAMILLES_STYLE])
  })
  verifier('doc : chaque style de 02-styles-de-texte.md suit le modèle du plugin', () => {
    for (const [style] of tableau(styles, 'Style')) {
      const complets = style.startsWith('heading/') ? [style] : [`${style}/regular`, `${style}/semibold`]
      for (const nom of complets) assert.equal(t.motifStyle(nom), null, nom)
    }
  })
  verifier('doc : les propriétés de style du plugin sont celles de 02-styles-de-texte.md', () => {
    const phrase = /Chaque style en a quatre : ([^.]+)\./.exec(styles)
    assert.ok(phrase, 'phrase des quatre propriétés introuvable')
    assert.deepEqual(phrase[1].split(/, | et /).sort(), Object.keys(t.PHRASES_STYLE).sort())
  })
  verifier('doc : les niveaux de 03-creer-ou-modifier-un-token.md sont ceux du plugin', () => {
    const niveaux = Object.fromEntries(tableau(fondations('03-creer-ou-modifier-un-token.md'), 'Changement').map(([changement, niveau]) => [niveau, changement.toLowerCase()]))
    assert.deepEqual(Object.keys(niveaux), ['Majeur', 'Mineur', 'Patch'])
    assert.ok(niveaux.Majeur.includes('refonte complète'))
    for (const mot of ['ajoutés', 'supprimés', 'dépréciés', 'type']) assert.ok(niveaux.Mineur.includes(mot), mot)
    assert.ok(niveaux.Patch.includes('valeurs modifiées'))
  })
}

const scenarioVariablesDeStyle = async () => {
  const plugin = creerPluginSimule({
    collections: [
      { id: 'CP', name: 'Primitive', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' },
      { id: 'CT', name: 'Typography', modes: [{ modeId: 'md', name: 'desktop' }, { modeId: 'mm', name: 'mobile' }], defaultModeId: 'md' }
    ],
    locales: [
      { id: 'p16', name: 'font/size/16', resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['FONT_SIZE'], valuesByMode: { m1: 16 } },
      { id: 'p14', name: 'font/size/14', resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['FONT_SIZE'], valuesByMode: { m1: 14 } },
      { id: 'pw', name: 'font/weight/regular', resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['FONT_WEIGHT'], valuesByMode: { m1: 400 } },
      { id: 'pf', name: 'font/family/sans-serif', resolvedType: 'STRING', variableCollectionId: 'CP', scopes: ['FONT_FAMILY'], valuesByMode: { m1: 'Source Sans Pro' } },
      { id: 's1', name: 'body/2/regular/font-size', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['FONT_SIZE'], description: 'Texte courant.', valuesByMode: { md: alias('p16'), mm: alias('p14') } },
      { id: 's2', name: 'body/2/regular/line-height', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['LINE_HEIGHT'], valuesByMode: { md: 24, mm: 24 } },
      { id: 's3', name: 'body/2/regular/font-weight', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['FONT_WEIGHT'], valuesByMode: { md: alias('pw'), mm: alias('pw') } },
      { id: 's4', name: 'body/2/regular/font-family', resolvedType: 'STRING', variableCollectionId: 'CT', scopes: ['FONT_FAMILY'], valuesByMode: { md: alias('pf'), mm: alias('pf') } },
      { id: 's5', name: 'font-size', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['FONT_SIZE'], valuesByMode: { md: 16, mm: 16 } }
    ]
  })
  const { t, rapport } = await exporterDocument(plugin)
  const T = lireSet(t, 'Typography').body['2'].regular
  const ctx = t.modifiers.Typography.contexts.mobile[0].body['2'].regular
  verifier('variable de style : description sans valeur, y compris en alias, avec la description Figma après', () => {
    assert.equal(T['font-size'].$description, 'Taille de texte du style body/2/regular. Texte courant.')
    assert.equal(T['line-height'].$description, 'Interligne du style body/2/regular.')
    assert.equal(T['font-weight'].$description, 'Graisse du style body/2/regular.')
    assert.equal(T['font-family'].$description, 'Famille de police du style body/2/regular.')
  })
  verifier('variable de style : même description dans le contexte d\'un mode qui diffère', () => {
    assert.equal(ctx['font-size'].$description, 'Taille de texte du style body/2/regular. Texte courant.')
    assert.equal(ctx['line-height'], undefined)
  })
  verifier('variable de style : absente de « Sans description »', () => {
    assert.ok(!rapport.sansDescription.some((nom) => nom.startsWith('body/2/regular/')))
  })
  verifier('variable de style : un nom à un seul segment et les primitives ne sont pas concernés', () => {
    assert.ok(rapport.sansDescription.includes('font-size'))
    const P = lireSet(t, 'Primitive').font
    assert.equal(P.size['16'].$description, 'Taille de texte de 16 px, soit 1rem dans le code.')
    assert.equal(P.weight.regular.$description, 'Graisse regular, de valeur 400.')
    assert.equal(P.family['sans-serif'].$description, 'Famille de police Source Sans Pro.')
  })
}

;(async () => {
  await scenarioOuvertureSansReference()
  await scenarioDepreciation()

  if (await scenarioExportParDefaut() === 'stop') return

  await scenarioComparerDiff()
  await scenarioDiffValeursComposites()
  await scenarioDiffDesModes()
  await scenarioNiveauEtVersionSuivante()
  await scenarioReferenceEtDates()
  await scenarioComparerReferenceInvalide()
  await scenarioOuverture()
  await scenarioRedimensionnementAutomatique()
  await scenarioRedimensionnementManuel()
  await scenarioUrlsDepot()
  await scenarioBlocageDepot()
  await scenarioDeposer()
  await scenarioOuvrir()
  await scenarioTelecharger()
  await scenarioMessagesDeCommit()
  await scenarioMiseAJourEnDirect()
  await scenarioErreurs()
  await scenarioLiensCasses()
  await scenarioTailleRetenueAOuverture()
  await scenarioStylesIncomplets()
  await scenarioBreakpoints()
  await scenarioVariablesSupprimees()
  await scenarioVariablesDeStyle()
  await scenarioOpaciteEtStyles()
  await scenarioDocumentation()

  console.log(`\n${n} vérifications passées`)
})().catch((e) => { console.error('\n✗', e.message); process.exit(1) })
