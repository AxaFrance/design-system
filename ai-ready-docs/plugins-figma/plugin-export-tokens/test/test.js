// Fait tourner code.js sur un plugin Figma simulé (figma-simule.js) et vérifie
// ce qui sort. Chaque scénario crée son propre plugin, indépendant des autres :
// aucun scénario ne dépend de ce qu'un autre a laissé derrière lui, et l'ordre
// d'exécution ne change aucun résultat.
// Lancé par Vitest : npm test

import { beforeAll, describe, expect, it } from 'vitest'

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

// Les messages et rapports viennent d'un autre contexte VM : on les normalise
// pour comparer les tableaux et objets avec toStrictEqual.
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
  expect(dernier.type, dernier.message).toBe('fichier')
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
  expect(message.type, message.message).toBe('depot-pret')
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

describe('ouverture sans référence', () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule()
    await plugin.envoyer({ type: 'pret' })
  })

  it("à l'ouverture : contexte puis vérification, pas de diff automatique", () => {
    expect(plugin.messages.map((m) => m.type)).toStrictEqual(['contexte', 'verification'])
  })
})

// ------------------------------------------------------------------ export

// Vérification de la forme d'un export en configuration par défaut (workflow nul).
describe('export par défaut', () => {
  let plugin, dernier, t, json, fichier, rapport, P, S, STY

  beforeAll(async () => {
    plugin = creerPluginSimule(documentDeTest())
    ;({ dernier, t, json, fichier, rapport, P, S, STY } = await exporterDocument(plugin))
  })

  it("téléchargement : après l'ouverture, seul le message fichier est envoyé, sans rapport ni diff", () => {
    expect(plugin.messages.map((m) => m.type)).toStrictEqual(['contexte', 'verification', 'fichier'])
    expect('rapport' in dernier).toBe(false)
  })

  it('couleur en objet sRGB avec hex en repli', () => {
    expect(P.Couleur['AXA blue 100'].$value).toStrictEqual({
      colorSpace: 'srgb', components: [0, 0, 0.5608], hex: '#00008f'
    })
  })

  it('alpha absent sous forme de canal, non défini ici', () => {
    expect(P.Couleur['AXA blue 100'].$value.alpha).toBe(undefined)
  })

  it('description conservée', () => {
    expect(P.Couleur['AXA blue 100'].$description).toBe('Bleu de marque')
  })

  it('nombre typé par le scope, en objet dimension', () => {
    expect([P.Espacement.m.$type, P.Espacement.m.$value]).toStrictEqual(['dimension', { value: 16, unit: 'px' }])
  })

  it('bruit des flottants gommé', () => {
    expect(P.Espacement.xs.$value).toStrictEqual({ value: 4, unit: 'px' })
  })

  it('nombre sans scope, type déduit du nom et signalé', () => {
    expect(P['Opacité'].disabled.$type).toBe('number')
    expect(P['Opacité'].disabled.$extensions['fr.axa.canopee'].typeDeduit).toBe(true)
    expect(rapport.typesDeduits.includes('Opacité/disabled : traité comme un nombre')).toBeTruthy()
  })

  it('chaîne typée fontFamily par le scope', () => {
    expect(P.Police.famille.$type).toBe('fontFamily')
  })

  it('chaîne typée fontFamily par le nom, signalée', () => {
    expect(P.Typo['famille secondaire'].$type).toBe('fontFamily')
    expect(rapport.typesDeduits.includes('Typo/famille secondaire : traité comme une police')).toBeTruthy()
  })

  it('chaîne libre écartée, absente du fichier', () => {
    expect(P.Contenu).toBe(undefined)
    expect(rapport.ecartes.includes('Contenu/libellé : variable String')).toBeTruthy()
  })

  it('booléen écarté et signalé', () => {
    expect(rapport.ecartes.includes('Afficher/badge : variable Boolean')).toBeTruthy()
  })

  it('alias local en référence, non résolu', () => {
    expect(S.Action.primaire.$value).toBe('{Couleur.AXA blue 100}')
  })

  it('nom assaini, nom Figma gardé, rien sinon', () => {
    expect(P.Rayon['petit-5'].$extensions['fr.axa.canopee'].nomFigma).toBe('Rayon/petit.5')
    expect(P.Espacement.m.$extensions).toBe(undefined)
  })

  it('déprécié détecté dans la description, texte de suite gardé, description en premier', () => {
    const jeton = P.Couleur['old grey DEPRECATED']
    expect(jeton.$deprecated).toBe('use color/blue/700.')
    expect(jeton.$description.startsWith('Deprecated')).toBeTruthy()
  })

  it('le nom seul ne déprécie plus rien', () => {
    expect(P.Couleur['old grey DEPRECATED'].$deprecated !== true).toBe(true)
  })

  it('conflit token / groupe refusé et signalé', () => {
    expect(P.Couleur['AXA blue 100'].clair).toBe(undefined)
    expect(rapport.conflits).toStrictEqual(['Couleur/AXA blue 100/clair'])
  })

  it('alias externe résolu en valeur, alpha sous 1 conservé', () => {
    expect(S.Fond.marque.$value).toStrictEqual({ colorSpace: 'srgb', components: [1, 0, 0], alpha: 0.5, hex: '#ff0000' })
    expect(Object.keys(S.Fond.marque.$extensions['fr.axa.canopee'])).toStrictEqual(['alias'])
    expect(S.Fond.marque.$extensions['fr.axa.canopee'].alias).toBe('Marque/Bleu')
    expect(rapport.aliasExternes).toStrictEqual(['Fond/marque : pointe vers Marque/Bleu'])
  })

  it('style de texte en typography, alias gardé, interligne px converti en ratio, espacement pourcentage en px', () => {
    const h1 = STY.typography.Titre.H1
    expect(h1.$type).toBe('typography')
    expect(h1.$value).toStrictEqual({
      fontFamily: 'Source Sans Pro',
      fontSize: '{Espacement.m}',
      fontWeight: 700,
      letterSpacing: { value: -0.32, unit: 'px' },
      lineHeight: 1.25
    })
  })

  it('interlignage automatique écarté, style entier absent du fichier', () => {
    expect(STY.typography.Corps).toBe(undefined)
    expect(rapport.ecartes.includes('Corps/texte : interligne automatique')).toBeTruthy()
  })

  it('ombre en shadow, couleur et dimensions en objets', () => {
    expect(STY.shadow['Élévation']['2'].$value).toStrictEqual({
      color: { colorSpace: 'srgb', components: [0, 0, 0], alpha: 0.2, hex: '#000000' },
      offsetX: { value: 0, unit: 'px' },
      offsetY: { value: 2, unit: 'px' },
      blur: { value: 8, unit: 'px' },
      spread: { value: 0, unit: 'px' },
      inset: false
    })
  })

  it('ombre masquée ignorée, couleur reliée gardée en référence', () => {
    const v = STY.shadow['Élévation'].marque.$value
    expect(Array.isArray(v)).toBe(false)
    expect([v.offsetY, v.color]).toStrictEqual([{ value: 4, unit: 'px' }, '{Couleur.AXA blue 100}'])
  })

  it('effet sans ombre écarté', () => {
    expect(STY.shadow.Flou).toBe(undefined)
    expect(rapport.ecartes.includes('Flou/fond : effet sans ombre')).toBeTruthy()
  })

  it('$type précède $value dans un token, groupes triés', () => {
    expect(json.indexOf('"$type": "color"') < json.indexOf('"hex": "#00008f"')).toBeTruthy()
    expect(Object.keys(P)).toStrictEqual(['Couleur', 'Espacement', 'Opacité', 'Police', 'Rayon', 'Typo', 'border', 'color', 'font', 'size', 'spacing'])
  })

  it('description générée : couleur à palier, contraste WCAG', () => {
    expect(P.color.blue['700'].$description).toBe("Couleur blue, palier 700, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #00008F. Contraste de 15:1 sur blanc.")
    expect(P.color.sunshine['500'].$description).toBe("Couleur sunshine, palier 500, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #FFE500. Contraste de 1,3:1 sur blanc.")
    expect(P.color['cotton-candy']['500'].$description).toBe("Couleur cotton-candy, palier 500, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #FF0058. Contraste de 3,9:1 sur blanc.")
  })

  it('description générée : blanc et noir', () => {
    expect(P.color.white.$description).toBe('Blanc, sans teinte ni palier. #FFFFFF.')
    expect(P.color.black.$description).toBe('Noir, sans teinte ni palier. #000000. Contraste de 21:1 sur blanc.')
  })

  it('description générée : couleur transparente, pourcentage de l\'alpha réel', () => {
    expect(P.color['black-alpha']['20'].$description).toBe("Noir à 20 % d'opacité.")
  })

  it('description générée : espacement, px et rem', () => {
    expect(P.spacing['16'].$description).toBe("Espacement de 16 px, soit 1rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.")
    expect(P.spacing['2'].$description).toBe("Espacement de 2 px, soit 0.125rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.")
  })

  it('description générée : dimension', () => {
    expect(P.size['24'].$description).toBe("Dimension de 24 px, soit 1.5rem dans le code. Pour la largeur ou la hauteur d'un élément, comme une icône ou un logo. Pour l'espace dans un élément ou entre deux éléments, utiliser un token spacing.")
  })

  it('description générée : arrondi, cas normal et cas full', () => {
    expect(P.border.radius['8'].$description).toBe("Arrondi d'angle de 8 px.")
    expect(P.border.radius.full.$description).toBe("Arrondi complet, qui donne une forme de pilule, ou un cercle sur un élément carré. Vaut 9999 px.")
  })

  it('description générée : épaisseur de bordure, sans rem', () => {
    expect(P.border.width['1'].$description).toBe('Épaisseur de bordure de 1 px.')
  })

  it('description générée : taille de texte, dans les deux écritures du nom', () => {
    expect(P.font.size['16'].$description).toBe('Taille de texte de 16 px, soit 1rem dans le code.')
    expect(P.font['size-18'].$description).toBe('Taille de texte de 18 px, soit 1.125rem dans le code.')
    expect(P.font.size['15'].$description).toBe('Taille de texte de 15 px, soit 0.9375rem dans le code.')
  })

  it('description générée : interligne', () => {
    expect(P.font['line-height']['20'].$description).toBe('Interligne de 20 px, soit 1.25rem dans le code.')
    expect(P.font['line-height']['23'].$description).toBe('Interligne de 23 px, soit 1.4375rem dans le code.')
  })

  it('description générée : graisse et famille de police', () => {
    expect(P.font.weight.semibold.$description).toBe('Graisse semibold, de valeur 600.')
    expect(P.font.family['sans-serif'].$description).toBe('Famille de police Source Sans Pro.')
  })

  it('description générée suivie de la description Figma, séparées par une espace', () => {
    expect(P.border.width['2'].$description).toBe('Épaisseur de bordure de 2 px. Utilisé pour les inputs en erreur.')
  })

  it('alias vers une typologie reconnue : pas de description générée', () => {
    expect(P.color.blue['800'].$description).toBe(undefined)
    expect(rapport.sansDescription.includes('color/blue/800')).toBeTruthy()
  })

  it('en-tête du resolver : name, version, extension de plugin', () => {
    expect(t.name).toBe('Canopée B2B')
    expect(t.version).toBe('2025.10')
    expect(t.$extensions['fr.axa.canopee'].source).toBe('Canopée B2B')
    expect(t.$extensions['fr.axa.canopee'].plugin).toBe(plugin.__test.VERSION)
  })

  it('en-tête du resolver : date de l\'export au format ISO, à la seconde, en UTC', () => {
    expect(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(t.$extensions['fr.axa.canopee'].date)).toBeTruthy()
  })

  it('en-tête du resolver : ordre des clés source, plugin, date', () => {
    const i = json.indexOf('"fr.axa.canopee": {')
    const bloc = json.slice(i, i + 200)
    expect(bloc.indexOf('"source"') < bloc.indexOf('"plugin"') && bloc.indexOf('"plugin"') < bloc.indexOf('"date"')).toBeTruthy()
  })

  it('un set par collection dans l\'ordre Figma, puis Styles', () => {
    expect(Object.keys(t.sets)).toStrictEqual(['Primitives', 'Sémantique', 'Styles'])
  })

  it('resolutionOrder en $ref, tous les sets puis les modifiers', () => {
    expect(t.resolutionOrder).toStrictEqual([
      { $ref: '#/sets/Primitives' },
      { $ref: '#/sets/Sémantique' },
      { $ref: '#/sets/Styles' },
      { $ref: '#/modifiers/Sémantique' }
    ])
  })

  it('pas de modifier pour une collection à un seul mode', () => {
    expect(Object.keys(t.modifiers)).toStrictEqual(['Sémantique'])
    expect(t.modifiers.Primitives).toBe(undefined)
  })

  it('modifier : mode par défaut nommé, contexte par défaut vide', () => {
    expect(t.modifiers.Sémantique.default).toBe('prospect')
    expect(t.modifiers.Sémantique.contexts.prospect).toStrictEqual([])
  })

  it('modifier : seuls les tokens qui diffèrent, en token complet', () => {
    const client = t.modifiers.Sémantique.contexts.client
    expect(client.length).toBe(1)
    const surcharge = client[0]
    // Fond/marque référence la même variable distante dans les deux modes : identique, absent.
    expect(surcharge.Fond).toBe(undefined)
    expect(surcharge.Action.primaire.$type).toBe('color')
    expect(surcharge.Action.primaire.$value).toBe('{Couleur.old grey DEPRECATED}')
  })

  it('ordre naturel des clés numériques dans le texte : 050 avant 100 avant 900', () => {
    expect(json.indexOf('"050"') < json.indexOf('"100"')).toBeTruthy()
    expect(json.indexOf('"100"') < json.indexOf('"900"')).toBeTruthy()
  })

  it('tableau de composantes sur une ligne dans le texte', () => {
    expect(json.includes('"components": [0, 0, 0.5608]')).toBeTruthy()
  })

  it('tokens sans description listés dans le rapport, seulement ceux ni générée ni Figma', () => {
    expect(rapport.sansDescription.includes('Espacement/m')).toBeTruthy()
    expect(rapport.sansDescription.includes('Élévation/2')).toBeTruthy()
    expect(rapport.sansDescription.includes('color/blue/800')).toBeTruthy()
    expect(!rapport.sansDescription.includes('Couleur/AXA blue 100')).toBeTruthy()
    expect(!rapport.sansDescription.includes('Titre/H1')).toBeTruthy()
    expect(!rapport.sansDescription.includes('Corps/texte')).toBeTruthy()
    expect(!rapport.sansDescription.includes('Couleur/AXA blue 100/clair')).toBeTruthy()
    expect(!rapport.sansDescription.includes('Contenu/libellé')).toBeTruthy()
    expect(!rapport.sansDescription.includes('spacing/16')).toBeTruthy()
    expect(!rapport.sansDescription.includes('border/width/2')).toBeTruthy()
  })

  it('nom de fichier fixe, en .resolver.json', () => {
    expect(fichier).toBe('design-tokens-canopee.resolver.json')
  })

  it('compteurs du rapport', () => {
    expect([rapport.variables, rapport.exportees, rapport.stylesTexte, rapport.stylesEffet]).toStrictEqual([43, 36, 1, 2])
  })

  it('nomenclature : écriture, noms français non kebab signalés', () => {
    expect(rapport.nomenclature.includes('« Couleur/AXA blue 100 » : s\'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots')).toBeTruthy()
    expect(rapport.nomenclature.includes('« Espacement/m » : s\'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots')).toBeTruthy()
  })

  it('nomenclature : écriture, majuscule au milieu d\'un nom déjà en anglais', () => {
    expect(rapport.nomenclature.includes('« color/Blue/500 » : s\'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots')).toBeTruthy()
  })

  it('nomenclature : barre oblique attendue avant la valeur', () => {
    expect(rapport.nomenclature.includes('« font/size-18 » : il manque une barre oblique avant le nombre, à écrire font/size/18')).toBeTruthy()
  })

  it('nomenclature : catégorie inconnue', () => {
    expect(rapport.nomenclature.includes('« shadow/1 » : le nom doit commencer par color, font, border, spacing, size ou breakpoint')).toBeTruthy()
  })

  it('nomenclature : forme inattendue pour une catégorie connue', () => {
    expect(rapport.nomenclature.includes('« color/blue » : ce nom ne suit pas le modèle des noms color, par exemple color/blue/500')).toBeTruthy()
  })

  it('nomenclature : palier hors échelle', () => {
    expect(rapport.nomenclature.includes('« color/blue/550 » : palier hors échelle, attendu : 050, ou de 100 à 900 par pas de 100')).toBeTruthy()
  })

  it('nomenclature : le nom dit une valeur différente de la valeur réelle', () => {
    expect(rapport.nomenclature.includes('« spacing/12 » : le nom indique 12, mais la valeur est de 10 px')).toBeTruthy()
  })

  it('nomenclature : taille et interligne indépendants, aucune alerte sans correspondance', () => {
    for (const nom of ['font/size/15', 'font/line-height/22']) expect(!rapport.nomenclature.some((m) => m.startsWith(`« ${nom} »`)), nom).toBeTruthy()
  })

  it('nomenclature : noms conformes, non signalés', () => {
    const conformes = ['color/blue/700', 'spacing/16', 'font/size/16', 'font/line-height/20', 'border/radius/full', 'color/white', 'color/black-alpha/20']
    for (const nom of conformes) expect(!rapport.nomenclature.some((m) => m.startsWith(`« ${nom} »`)), nom).toBeTruthy()
  })

  it('nomenclature : collection Sémantique non vérifiée', () => {
    expect(!rapport.nomenclature.some((m) => m.includes('Action/primaire') || m.includes('Fond/marque'))).toBeTruthy()
  })
})

// ---------------------------------------------------------- comparer (diff)

describe('comparer (diff)', () => {
  let plugin, t, json, diffModifie

  beforeAll(async () => {
    plugin = creerPluginSimule(documentDeTest())
    ;({ t, json } = await exporterDocument(plugin))
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
    diffModifie = normaliser(plugin.dernierMessage())
  })

  it('diff : source, nom de fichier et date de fichier renvoyés', () => {
    expect(diffModifie.type).toBe('diff')
    expect([diffModifie.source, diffModifie.nomFichier, diffModifie.dateFichier]).toStrictEqual(['fichier', 'ancien-export.json', 1700000000000])
  })

  it('diff : token absent de la référence, ajouté, avec sa valeur actuelle', () => {
    expect(diffModifie.ajoutes).toStrictEqual([{ chemin: 'Opacité/disabled', valeur: '0.4' }])
  })

  it('diff : valeur de couleur différente, modifiée avec le hex des deux côtés, sans changement de type', () => {
    expect(diffModifie.modifies).toStrictEqual([{ chemin: 'color/blue/700', avant: '#000066', apres: '#00008F', typeChange: false }])
  })

  it('diff : token en trop dans la référence, supprimé, avec la valeur de la référence', () => {
    expect(diffModifie.supprimes).toStrictEqual([{ chemin: 'Couleur/disparue', valeur: '#000000' }])
  })

  it('diff : $deprecated en chaîne, absent de la référence, compté comme déprécié, avec sa valeur actuelle', () => {
    expect(diffModifie.deprecies).toStrictEqual([{ chemin: 'Couleur/old grey DEPRECATED', valeur: '#808080' }])
  })

  it('diff : référence identique à l\'export courant, quatre listes vides', async () => {
    await plugin.envoyer({ type: 'comparer', reference: json, source: 'repo' })
    const d = normaliser(plugin.dernierMessage())
    expect([d.ajoutes, d.modifies, d.supprimes, d.deprecies]).toStrictEqual([[], [], [], []])
  })

  it('diff : dateFichier absent du message quand il n\'est pas fourni dans comparer', () => {
    expect('dateFichier' in plugin.dernierMessage()).toBe(false)
  })

  it('diff : niveau mineur quand une suppression se mêle aux autres changements', () => {
    expect(diffModifie.niveau).toBe('mineur')
  })

  it('diff : dateReference reprise de la référence, transmise dans le message', () => {
    expect(diffModifie.dateReference).toBe(t.$extensions['fr.axa.canopee'].date)
  })
})

// ------------------------------------------------------- niveau et version suivante

// Chaque cas isole un seul type de changement, pour vérifier le niveau qui lui
// correspond sans mélange avec les autres.
describe('niveau et version suivante', () => {
  let plugin, cloneReference, comparerA, refSuppression, refChangementType, refAjout, refDepreciation, refValeurModifiee

  beforeAll(async () => {
    plugin = creerPluginSimule(documentDeTest())
    const { t } = await exporterDocument(plugin)
    cloneReference = () => JSON.parse(JSON.stringify(t))
    comparerA = async (ref, version) => {
      await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(ref), source: version ? 'version' : 'fichier', nomFichier: 'x.json', version })
      return plugin.dernierMessage()
    }

    refSuppression = cloneReference()
    lireSet(refSuppression, 'Primitives').Couleur.disparue = { $type: 'color', $value: { colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000' } }

    refChangementType = cloneReference()
    lireSet(refChangementType, 'Primitives').color.blue['700'].$type = 'dimension'

    refAjout = cloneReference()
    delete lireSet(refAjout, 'Primitives').Opacité.disabled

    refDepreciation = cloneReference()
    delete lireSet(refDepreciation, 'Primitives').Couleur['old grey DEPRECATED'].$deprecated

    refValeurModifiee = cloneReference()
    {
      const token = lireSet(refValeurModifiee, 'Primitives').color.blue['700']
      token.$value = { ...token.$value, hex: '#000066' }
    }

    await comparerA(refSuppression)
  })

  it('niveau : token supprimé → mineur', () => {
    expect(plugin.dernierMessage().niveau).toBe('mineur')
  })

  it('niveau : $type changé → mineur, modifies marqué typeChange', async () => {
    await comparerA(refChangementType)
    const d = plugin.dernierMessage()
    expect(d.niveau).toBe('mineur')
    expect(d.modifies[0].typeChange).toBe(true)
  })

  it('niveau : token ajouté → mineur', async () => {
    await comparerA(refAjout)
    expect(plugin.dernierMessage().niveau).toBe('mineur')
  })

  it('niveau : token déprécié → mineur', async () => {
    await comparerA(refDepreciation)
    expect(plugin.dernierMessage().niveau).toBe('mineur')
  })

  it('niveau : valeur modifiée seule → correctif, modifies marqué typeChange à false', async () => {
    await comparerA(refValeurModifiee)
    const d = plugin.dernierMessage()
    expect(d.niveau).toBe('correctif')
    expect(d.modifies[0].typeChange).toBe(false)
  })

  it('niveau : aucun changement → null', async () => {
    await comparerA(cloneReference())
    expect(plugin.dernierMessage().niveau).toBe(null)
  })

  const attenduesVersionSuivante = { mineur: '1.9.0', correctif: '1.8.1' }

  for (const version of ['1.8.0', '1.8.0-RC.2']) {
    it(`versionSuivante : ${version}, suppression → ${attenduesVersionSuivante.mineur}`, async () => {
      await comparerA(refSuppression, version)
      expect(plugin.dernierMessage().versionSuivante).toBe(attenduesVersionSuivante.mineur)
    })

    it(`versionSuivante : ${version}, mineur → ${attenduesVersionSuivante.mineur}`, async () => {
      await comparerA(refAjout, version)
      expect(plugin.dernierMessage().versionSuivante).toBe(attenduesVersionSuivante.mineur)
    })

    it(`versionSuivante : ${version}, correctif → ${attenduesVersionSuivante.correctif}`, async () => {
      await comparerA(refValeurModifiee, version)
      expect(plugin.dernierMessage().versionSuivante).toBe(attenduesVersionSuivante.correctif)
    })

    it(`versionSuivante : ${version}, aucun changement → null`, async () => {
      await comparerA(cloneReference(), version)
      expect(plugin.dernierMessage().versionSuivante).toBe(null)
    })
  }

  it('versionSuivante : absent du message sans champ version dans comparer', async () => {
    await comparerA(refAjout)
    expect('versionSuivante' in plugin.dernierMessage()).toBe(false)
  })
})

// dateReference : absente sans extension dans la référence, ignorée quand elle
// est seule à différer de l'export courant.
describe('référence et dates', () => {
  let plugin, cloneReference

  beforeAll(async () => {
    plugin = creerPluginSimule(documentDeTest())
    const { t } = await exporterDocument(plugin)
    cloneReference = () => JSON.parse(JSON.stringify(t))

    const refSansDate = cloneReference()
    delete refSansDate.$extensions
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(refSansDate), source: 'fichier', nomFichier: 'sans-date.json' })
  })

  it('dateReference : absente du message quand la référence n\'a pas d\'extension', () => {
      expect('dateReference' in plugin.dernierMessage()).toBe(false)
  })

  it('diff : la date de l\'export est ignorée, aucun changement pour une référence qui ne diffère que par la date', async () => {
    const refAutreDate = cloneReference()
    refAutreDate.$extensions['fr.axa.canopee'].date = '2000-01-01T00:00:00Z'
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(refAutreDate), source: 'fichier', nomFichier: 'autre-date.json' })
    const d = normaliser(plugin.dernierMessage())
      expect([d.ajoutes, d.modifies, d.supprimes, d.deprecies]).toStrictEqual([[], [], [], []])
      expect(d.niveau).toBe(null)
      expect(d.dateReference).toBe('2000-01-01T00:00:00Z')
  })
})

// Une référence invalide est détectée avant toute analyse du document : un
// plugin minimal, sans variables ni styles, suffit.
describe('comparer, référence invalide', () => {
  let plugin, diffPasDuJson, diffSansSets

  beforeAll(async () => {
    plugin = creerPluginSimule()
    await plugin.envoyer({ type: 'comparer', reference: 'ceci n\'est pas du JSON', source: 'fichier', nomFichier: 'invalide.json' })
    diffPasDuJson = normaliser(plugin.dernierMessage())
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify({ nom: 'sans champ sets' }), source: 'fichier', nomFichier: 'sans-sets.json' })
    diffSansSets = normaliser(plugin.dernierMessage())
  })

  it('diff : référence invalide (JSON malformé ou sans champ sets), erreur renvoyée', () => {
    expect(diffPasDuJson).toStrictEqual({ type: 'diff', erreur: "Ce fichier n'est pas un export du plugin." })
    expect(diffSansSets).toStrictEqual({ type: 'diff', erreur: "Ce fichier n'est pas un export du plugin." })
  })
})

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

describe('valeurs composites et contextes de modifier', () => {
  let t, diff

  beforeAll(async () => {
    const plugin = creerPluginSimule(documentDiffComposites())
    ;({ t } = await exporterDocument(plugin))

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
    diff = normaliser(plugin.dernierMessage())
  })

  it('diff : token de contexte de modifier, chemin sans suffixe, modifier et contexte renseignés', () => {
    const m = diff.modifies.find((x) => x.chemin === 'heading/h4/line-height' && x.modifier)
    expect(m, 'entrée attendue absente').toBeTruthy()
    expect([m.modifier, m.contexte, m.avant, m.apres]).toStrictEqual(['Typography', 'client-mobile', '18 px', '20 px'])
  })

  it('diff : style de texte ajouté, valeur résumée plutôt qu\'en JSON', () => {
    const a = diff.ajoutes.find((x) => x.chemin === 'typography/Titre/H5')
    expect(a).toBeTruthy()
    expect(a.valeur).toBe('style de texte')
  })

  it('diff : style de texte modifié, résumé en tête, champ taille détaillé en dessous', () => {
    const m = diff.modifies.find((x) => x.chemin === 'typography/Corps/1')
    expect(m).toBeTruthy()
    expect(m.avant).toBe('style de texte')
    expect(m.apres).toBe('style de texte')
    expect(m.champs).toStrictEqual([{ champ: 'taille', avant: '14 px', apres: '16 px' }])
  })

  it('diff : ombre modifiée, résumée en tête, champ flou détaillé en dessous', () => {
    const m = diff.modifies.find((x) => x.chemin === 'shadow/Ombre/carte')
    expect(m).toBeTruthy()
    expect(m.avant).toBe('ombre')
    expect(m.apres).toBe('ombre')
    expect(m.champs).toStrictEqual([{ champ: 'flou', avant: '4 px', apres: '8 px' }])
  })

  it('diff : plus aucune valeur en JSON brut, y compris dans le détail des champs', () => {
    const entrees = [...diff.ajoutes, ...diff.modifies, ...diff.supprimes, ...diff.deprecies]
    const estJsonBrut = (v) => typeof v === 'string' && v.startsWith('{"')
    for (const e of entrees) {
      if ('valeur' in e) expect(!estJsonBrut(e.valeur), e.valeur).toBeTruthy()
      if ('avant' in e) expect(!estJsonBrut(e.avant), e.avant).toBeTruthy()
      if ('apres' in e) expect(!estJsonBrut(e.apres), e.apres).toBeTruthy()
      for (const c of e.champs || []) {
        expect(!estJsonBrut(c.avant), c.avant).toBeTruthy()
        expect(!estJsonBrut(c.apres), c.apres).toBeTruthy()
      }
    }
  })
})

// ---------------------------------------------------------------- ouverture

describe('ouverture', () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule(documentDeTest())
    await plugin.envoyer({ type: 'pret' })
  })

  it("contexte puis vérification annoncés à l'ouverture, dans l'ordre, sans diff", () => {
    expect(plugin.messages.length).toBe(2)
    expect(normaliser(plugin.messages[0])).toStrictEqual({
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
    expect(verification.type).toBe('verification')
    expect(verification.modifie).toBe(false)
    expect(verification.rapport.exportees).toBe(36)
    expect(verification.rapport.nomenclature.includes('« font/size-18 » : il manque une barre oblique avant le nombre, à écrire font/size/18')).toBeTruthy()
  })
})

// ------------------------------------------------------- redimensionnement automatique

describe('redimensionnement automatique', () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule()
    await plugin.envoyer({ type: 'redimensionner', hauteur: 2000 })
  })

  it('hauteur de fenêtre bornée', () => {
    expect(plugin.redimensionnements).toStrictEqual([[440, 800]])
  })
})

// ------------------------------------------------------- redimensionnement manuel

describe('redimensionnement manuel', () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule()

    await plugin.envoyer({ type: 'redimensionner-manuel', largeur: 200, hauteur: 5000 })
  })

  it('redimensionnement manuel : largeur et hauteur bornées, appliquées', () => {
    expect(plugin.redimensionnements[plugin.redimensionnements.length - 1]).toStrictEqual([320, 1200])
  })

  it('redimensionnement manuel : taille bornée enregistrée sur le poste', () => {
    // L'objet vient du contexte VM : on le normalise pour comparer, comme les messages.
    expect(normaliser(plugin.stockageClient.taille)).toStrictEqual({ largeur: 320, hauteur: 1200 })
  })

  it('redimensionnement automatique ignoré tant que la taille est manuelle', async () => {
    const avantAutoIgnore = plugin.redimensionnements.length
    await plugin.envoyer({ type: 'redimensionner', hauteur: 500 })
    expect(plugin.redimensionnements.length).toBe(avantAutoIgnore)
  })

  it('taille auto : taille manuelle oubliée, largeur ramenée à 440, hauteur recalculée demandée', async () => {
    const avantTailleAuto = plugin.messages.length
    await plugin.envoyer({ type: 'taille-auto' })
    expect(plugin.stockageClient.taille).toBe(undefined)
    expect(plugin.redimensionnements[plugin.redimensionnements.length - 1]).toStrictEqual([440, 1200])
    const nouveaux = plugin.messages.slice(avantTailleAuto)
    expect(nouveaux.some((m) => m.type === 'recalculer-hauteur')).toBeTruthy()
  })

  it('redimensionnement automatique repris après taille auto, hauteur minimale respectée', async () => {
    const avantAutoRepris = plugin.redimensionnements.length
    await plugin.envoyer({ type: 'redimensionner', hauteur: 500 })
    expect(plugin.redimensionnements.length).toBe(avantAutoRepris + 1)
    expect(plugin.redimensionnements[plugin.redimensionnements.length - 1]).toStrictEqual([440, 560])
  })
})

// ------------------------------------------------------------------ dépôt

// Adresses du dépôt, annoncées à l'interface dans le message contexte.
describe('URLs du dépôt', () => {
  let plugin, depot

  beforeAll(async () => {
    plugin = creerPluginSimule()
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    await plugin.envoyer({ type: 'pret' })
    depot = normaliser(plugin.messages.find((m) => m.type === 'contexte').depot)
  })

  it('urls : lecture du fichier, versions, éditeur GitHub et création dans son dossier', () => {
    expect(depot).toStrictEqual({
      urlReference: `https://raw.githubusercontent.com/AxaFrance/design-system/main/${CHEMIN_TOKENS}`,
      urlTags: 'https://api.github.com/repos/AxaFrance/design-system/tags?per_page=100',
      urlPulls: 'https://api.github.com/repos/AxaFrance/design-system/pulls?state=open&per_page=100',
      urlVersion: `https://raw.githubusercontent.com/AxaFrance/design-system/{tag}/${CHEMIN_TOKENS}`,
      premiereVersion: '2.0.0',
      urlEdition: `https://github.com/AxaFrance/design-system/edit/main/${CHEMIN_TOKENS}`,
      urlCreation: 'https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json'
    })
  })

  it('urls : le nom du fichier est encodé dans le paramètre de création', async () => {
    plugin.__test.DEPOT.cheminTokens = 'tokens/mon fichier.json'
    await plugin.envoyer({ type: 'pret' })
    const dernierContexte = plugin.messages.filter((m) => m.type === 'contexte').pop()
    expect(dernierContexte.depot.urlCreation).toBe('https://github.com/AxaFrance/design-system/new/main/tokens?filename=mon%20fichier.json')
  })

  it('urls : la clé du fichier Fondations est configurée', () => {
    expect(plugin.__test.DEPOT.cleFichier).toBe('MJfhu2fwxNjxlzGqOAWJNq')
  })
})

// Une raison à la fois, dans l'ordre de priorité : fichier, vide, écartés, chemin.
describe('blocage du dépôt', () => {
  const rapport = (extra = {}) => ({ exportees: 3, stylesTexte: 0, stylesEffet: 0, conflits: [], aliasIntrouvables: [], ...extra })
  const bloquer = (plugin, r) => normaliser(plugin.__test.blocageDepot(r) ?? null)
  const dansFondations = () => creerPluginSimule({ fileKey: 'MJfhu2fwxNjxlzGqOAWJNq' })

  it('blocage : hors Fondations, raison fichier, avant toute autre', () => {
    const plugin = creerPluginSimule({ fileKey: 'AUTRE-CLE' })
    expect(bloquer(plugin, rapport({ exportees: 0, conflits: ['a'] }))).toStrictEqual({ raison: 'fichier' })
  })

  it('blocage : la clé du fichier prime sur son nom', () => {
    const plugin = creerPluginSimule({ fileKey: 'AUTRE-CLE', nomFichier: 'Fondations Canopée' })
    expect(bloquer(plugin, rapport())).toStrictEqual({ raison: 'fichier' })
    const bonneCle = creerPluginSimule({ fileKey: 'MJfhu2fwxNjxlzGqOAWJNq', nomFichier: 'Autre nom' })
    bonneCle.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    expect(bloquer(bonneCle, rapport())).toBe(null)
  })

  it('blocage : sans clé de fichier lisible, le nom du fichier Fondations Canopée suffit', () => {
    const plugin = creerPluginSimule({ nomFichier: 'Fondations Canopée' })
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    expect(bloquer(plugin, rapport())).toBe(null)
    expect(bloquer(creerPluginSimule({ nomFichier: 'Canopée B2B' }), rapport())).toStrictEqual({ raison: 'fichier' })
  })

  it('blocage : ni token exporté, ni style de texte, ni style d\'effet, raison vide', () => {
    expect(bloquer(dansFondations(), rapport({ exportees: 0 }))).toStrictEqual({ raison: 'vide' })
    expect(bloquer(dansFondations(), rapport({ exportees: 0, conflits: ['a'] }))).toStrictEqual({ raison: 'vide' })
    const avecStyle = dansFondations()
    avecStyle.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    expect(bloquer(avecStyle, rapport({ exportees: 0, stylesTexte: 1 }))).toBe(null)
    expect(bloquer(avecStyle, rapport({ exportees: 0, stylesEffet: 1 }))).toBe(null)
  })

  it('blocage : tokens écartés, raison ecartes avec le compte des conflits et des liens cassés', () => {
    expect(bloquer(dansFondations(), rapport({ conflits: ['a'] }))).toStrictEqual({ raison: 'ecartes', n: 1 })
    expect(bloquer(dansFondations(), rapport({ conflits: ['a', 'b'], aliasIntrouvables: ['c'] }))).toStrictEqual({ raison: 'ecartes', n: 3 })
  })

  it('blocage : les liens cassés dans un autre mode ne comptent pas', () => {
    const plugin = dansFondations()
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    expect(bloquer(plugin, rapport({ aliasIntrouvablesMode: ['a, mode sombre : reprend la valeur du mode par défaut'] }))).toBe(null)
  })

  it('blocage : emplacement du fichier pas fixé, raison chemin, puis null une fois fixé', () => {
    const plugin = dansFondations()
    plugin.__test.DEPOT.cheminTokens = null
    expect(bloquer(plugin, rapport())).toStrictEqual({ raison: 'chemin' })
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    expect(bloquer(plugin, rapport())).toBe(null)
  })

  it('blocage : porté par le message verification, ici un conflit de nom', async () => {
    // Le blocage part dans chaque message de vérification, ouverture comme mise à jour en direct.
    const doc = { ...documentDeTest(), nomFichier: 'Fondations Canopée' }
    const plugin = creerPluginSimule(doc)
    await plugin.envoyer({ type: 'pret' })
    expect(normaliser(plugin.dernierMessage().blocage)).toStrictEqual({ raison: 'ecartes', n: 1 })
  })
})

describe('déposer', () => {
  let plugin, courant, jsonCourant, urlEdition, urlCreation, sansFichier

  beforeAll(async () => {
    plugin = creerPluginSimule(documentDeTest())
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    ;({ json: courant } = await exporterDocument(plugin))
    jsonCourant = sansDate(JSON.parse(courant))
    urlEdition = `https://github.com/AxaFrance/design-system/edit/main/${CHEMIN_TOKENS}`
    urlCreation = 'https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json'

    sansFichier = await deposerDocument(plugin, null)
  })

  it("deposer sans fichier dans le repo : URL de création, tout compte comme ajouté, feat", () => {
    expect(sansFichier.url).toBe(urlCreation)
    expect(sansFichier.message).toBe('feat(canopee): update design tokens')
  })

  it("deposer : le JSON est le document courant, avec sa date d'export", () => {
    expect(sansDate(JSON.parse(sansFichier.json))).toStrictEqual(jsonCourant)
    expect(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(JSON.parse(sansFichier.json).$extensions['fr.axa.canopee'].date)).toBeTruthy()
    expect(sansFichier.json.endsWith('\n')).toBeTruthy()
  })

  it('deposer avec un fichier identique dans le repo : URL d\'édition, chore', async () => {
    const identique = await deposerDocument(plugin, courant)
    expect(identique.url).toBe(urlEdition)
    expect(identique.message).toBe('chore(canopee): update design tokens')
    expect(sansDate(JSON.parse(identique.json))).toStrictEqual(jsonCourant)
  })

  it('deposer avec une suppression par rapport au repo : feat sans point d\'exclamation', async () => {
    const avecSuppression = JSON.parse(courant)
    lireSet(avecSuppression, 'Primitives').Couleur.disparue = { $type: 'color', $value: { colorSpace: 'srgb', components: [0, 0, 0], hex: '#000000' } }
    const suppression = await deposerDocument(plugin, JSON.stringify(avecSuppression))
    expect(suppression.message).toBe('feat(canopee): update design tokens')
    expect(suppression.url).toBe(urlEdition)
    expect(sansDate(JSON.parse(suppression.json))).toStrictEqual(jsonCourant)
  })

  it('deposer avec un fichier du repo illisible : compte comme sans fichier pour le message, édition pour l\'URL', async () => {
    const illisible = await deposerDocument(plugin, 'ceci n\'est pas du JSON')
    expect(illisible.message).toBe('feat(canopee): update design tokens')
    expect(illisible.url).toBe(urlEdition)
  })

  it("deposer n'ouvre rien tout seul : l'ouverture est un message à part", () => {
    expect(plugin.ouvertures).toStrictEqual([])
  })

  it("deposer sans emplacement de fichier dans le repo : erreur de contexte depot", async () => {
    const sansChemin = creerPluginSimule(documentDeTest())
    sansChemin.__test.DEPOT.cheminTokens = null
    await sansChemin.envoyer({ type: 'deposer', referenceRepo: null })
    expect(normaliser(sansChemin.dernierMessage())).toStrictEqual({ type: 'erreur', contexte: 'depot', message: "l'emplacement du fichier n'est pas fixé." })
  })
})

describe('ouvrir', () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule()
    await plugin.envoyer({ type: 'ouvrir', url: 'https://github.com/AxaFrance/design-system/edit/main/x.json' })
  })

  it("ouvrir : figma.openExternal est appelé avec l'URL reçue", () => {
    expect(plugin.ouvertures).toStrictEqual(['https://github.com/AxaFrance/design-system/edit/main/x.json'])
  })
})

describe('télécharger', () => {
  let doc, plugin, avant, nouveaux

  beforeAll(async () => {
    doc = documentDeTest()
    plugin = creerPluginSimule(doc)
    // Comme à l'ouverture : l'interface envoie 'pret' avant toute action.
    await plugin.envoyer({ type: 'pret' })
    avant = plugin.messages.length
    await plugin.envoyer({ type: 'telecharger' })
    nouveaux = plugin.messages.slice(avant)
  })

  it('telecharger : un seul message fichier, avec le nom fixe et le JSON du fichier Figma', () => {
    expect(nouveaux.length).toBe(1)
    expect(nouveaux[0].type).toBe('fichier')
    expect(nouveaux[0].fichier).toBe('design-tokens-canopee.resolver.json')
    const t = JSON.parse(nouveaux[0].json)
    expect(t.name).toBe('Canopée B2B')
    expect(Object.keys(t.sets)).toStrictEqual(['Primitives', 'Sémantique', 'Styles'])
  })

  it('telecharger : ne touche pas à la comparaison', () => {
    expect(nouveaux.some((m) => m.type === 'diff')).toBe(false)
    expect(plugin.ouvertures).toStrictEqual([])
  })

  it('telecharger juste après un changement : verification (modifie: true) envoyée avant le fichier', async () => {
    // Un changement fait juste avant le clic, pas encore vu par la mise à jour en
    // direct : il est annoncé à l'interface avant le fichier, et pris dans le JSON.
    doc.locales.find((v) => v.id === 'v2').valuesByMode.m1 = 24
    const avantChangement = plugin.messages.length
    await plugin.envoyer({ type: 'telecharger' })
    const apresChangement = plugin.messages.slice(avantChangement)
    const verification = apresChangement.findIndex((m) => m.type === 'verification')
    expect(verification !== -1).toBeTruthy()
    expect(apresChangement[verification].modifie).toBe(true)
    expect(apresChangement[apresChangement.length - 1].type).toBe('fichier')
    expect(lireSet(JSON.parse(apresChangement[apresChangement.length - 1].json), 'Primitives').Espacement.m.$value).toStrictEqual({ value: 24, unit: 'px' })
  })
})

// Un seul plugin, quatre niveaux : chaque dépôt se compare à ce que le repo
// contiendrait après le dépôt précédent. Le premier, sans fichier dans le repo,
// compte tout comme ajouté.
describe('messages de commit', () => {
  let repo, messages

  beforeAll(async () => {
    const doc = documentDeTest()
    const plugin = creerPluginSimule(doc)
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    repo = null
    const deposer = async () => {
      const depot = await deposerDocument(plugin, repo)
      repo = depot.json
      return depot.message
    }
    messages = {}

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
  })

  it('commit : sans fichier dans le repo, tous les tokens ajoutés → mineur', () => {
    expect(messages.premier).toBe('feat(canopee): update design tokens')
  })

  it('commit : aucun changement → chore', () => {
    expect(messages.aucun).toBe('chore(canopee): update design tokens')
  })

  it('commit : valeur modifiée → fix', () => {
    expect(messages.correctif).toBe('fix(canopee): update design tokens')
  })

  it('commit : token ajouté → feat', () => {
    expect(messages.mineur).toBe('feat(canopee): update design tokens')
  })

  it('commit : token supprimé → feat sans point d\'exclamation', () => {
    expect(messages.suppression).toBe('feat(canopee): update design tokens')
  })

  it('commit : case Refonte complète → feat avec point d\'exclamation, même pour une valeur modifiée', () => {
    expect(messages.majeur).toBe('feat(canopee)!: update design tokens')
  })
})

// ------------------------------------------------------- mise à jour en direct

describe('mise à jour en direct', () => {
  let plugin, avantModif

  beforeAll(async () => {
    const doc = documentDeTest()
    plugin = creerPluginSimule(doc)
    const { json } = await exporterDocument(plugin)
    // Une référence courante, comme après une comparaison au code : condition du diff ci-dessous.
    await plugin.envoyer({ type: 'comparer', reference: json, source: 'repo' })

    avantModif = plugin.messages.length
    const variableEspacement = doc.locales.find((v) => v.id === 'v2')
    variableEspacement.valuesByMode.m1 = 24
    await plugin.__test.verifierModifications()
  })

  it('mise à jour en direct : une modification déclenche contexte, verification (modifie: true) et diff', () => {
    const nouveaux = plugin.messages.slice(avantModif)
    expect(nouveaux.length).toBe(3)
    expect(nouveaux[0].type).toBe('contexte')
    expect(nouveaux[1].type).toBe('verification')
    expect(nouveaux[1].modifie).toBe(true)
    expect('blocage' in nouveaux[1]).toBeTruthy()
    const diff = normaliser(nouveaux[2])
    expect(diff.type).toBe('diff')
    expect(diff.source).toBe('repo')
    expect(diff.modifies).toStrictEqual([{ chemin: 'Espacement/m', avant: '16 px', apres: '24 px', typeChange: false }])
  })

  it('mise à jour en direct : un second appel sans modification ne renvoie rien', async () => {
    const avantSecondAppel = plugin.messages.length
    await plugin.__test.verifierModifications()
    expect(plugin.messages.length).toBe(avantSecondAppel)
  })
})

// ------------------------------------------------------------------ erreurs

describe('erreurs', () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule()
    plugin.__test.signalerErreur(new Error('boum'), 'depot')
  })

  it('erreur : le message porte le contexte', () => {
    expect(normaliser(plugin.dernierMessage())).toStrictEqual({ type: 'erreur', contexte: 'depot', message: 'boum' })
  })

  it("erreur : une valeur qui n'est pas une erreur devient son texte", () => {
    plugin.__test.signalerErreur('texte brut', 'comparaison')
    expect(normaliser(plugin.dernierMessage())).toStrictEqual({ type: 'erreur', contexte: 'comparaison', message: 'texte brut' })
  })

  it('erreur : vérification, comparaison, dépôt et téléchargement portent chacun leur contexte', async () => {
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
    expect(verification).toStrictEqual(attendu('verification'))
    expect(comparaison).toStrictEqual(attendu('comparaison'))
    expect(depot).toStrictEqual(attendu('depot'))
    expect(telechargement).toStrictEqual(attendu('telechargement'))
  })
})

// ------------------------------------------------------------- liens cassés

// Un lien cassé dans le mode par défaut écarte le token. Dans un autre mode, le
// token reste exporté et ce mode prend la valeur par défaut.
describe('liens cassés', () => {
  let plugin, t, rapport, set

  beforeAll(async () => {
    plugin = creerPluginSimule({
      nomFichier: 'Fondations Canopée',
      collections: [{ id: 'C1', name: 'Thème', modes: [{ modeId: 'md', name: 'clair' }, { modeId: 'mx', name: 'sombre' }], defaultModeId: 'md' }],
      locales: [
        { id: 'a', name: 'Espacement/a', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { md: 16, mx: alias('inexistante') } },
        { id: 'b', name: 'Espacement/b', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { md: alias('inexistante'), mx: 8 } },
        { id: 'c', name: 'Espacement/c', resolvedType: 'FLOAT', variableCollectionId: 'C1', scopes: ['GAP'], valuesByMode: { md: 4, mx: 4 } }
      ]
    })
    plugin.__test.DEPOT.cheminTokens = CHEMIN_TOKENS
    ;({ t, rapport } = await exporterDocument(plugin))
    set = lireSet(t, 'Thème')
  })

  it('lien cassé dans le mode par défaut : token écarté, listé dans aliasIntrouvables', () => {
    expect(rapport.aliasIntrouvables).toStrictEqual(['Espacement/b'])
    expect(set.Espacement.b).toBe(undefined)
  })

  it('lien cassé dans un autre mode : token exporté, mode listé dans aliasIntrouvablesMode', () => {
    expect(rapport.aliasIntrouvablesMode).toStrictEqual(['Espacement/a, mode sombre : reprend la valeur du mode par défaut'])
    expect(set.Espacement.a.$value).toStrictEqual({ value: 16, unit: 'px' })
  })

  it('lien cassé dans un autre mode : le mode ne porte pas de surcharge, il retombe sur la valeur par défaut', () => {
    expect(t.modifiers['Thème'].contexts.sombre).toStrictEqual([])
    expect(rapport.exportees).toBe(2)
  })

  it("lien cassé dans un autre mode : ne bloque pas le dépôt, seul l'autre lien compte", () => {
    const blocage = normaliser(plugin.messages.filter((m) => m.type === 'verification').pop().blocage)
    expect(blocage).toStrictEqual({ raison: 'ecartes', n: 1 })
  })
})

// --------------------------------------------------------------- diff des modes

// Un contexte de modifier ne porte que les valeurs qui diffèrent du défaut : un
// mode qui rejoint (ou quitte) la valeur par défaut n'est pas un ajout ni une suppression.
describe('diff des modes', () => {
  let document, comparer, sombre, rejointLeDefaut

  beforeAll(async () => {
    document = (defaut, modeSombre, { avecA = true } = {}) => ({
      nomFichier: 'Canopée Fondations',
      collections: [{ id: 'CT', name: 'Thème', modes: [{ modeId: 'md', name: 'clair' }, { modeId: 'mx', name: 'sombre' }], defaultModeId: 'md' }],
      locales: [
        ...(avecA ? [{ id: 'a', name: 'Espacement/a', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['GAP'], valuesByMode: { md: defaut, mx: modeSombre } }] : []),
        { id: 'b', name: 'Espacement/b', resolvedType: 'FLOAT', variableCollectionId: 'CT', scopes: ['GAP'], valuesByMode: { md: 4, mx: 4 } }
      ]
    })
    // Diff de l'état actuel contre l'état de référence, chacun sur son propre plugin.
    comparer = async (docReference, docActuel) => {
      const { json } = await exporterDocument(creerPluginSimule(docReference))
      const plugin = creerPluginSimule(docActuel)
      await plugin.envoyer({ type: 'comparer', reference: json, source: 'fichier', nomFichier: 'x.json' })
      return normaliser(plugin.dernierMessage())
    }
    sombre = { modifier: 'Thème', contexte: 'sombre' }

    rejointLeDefaut = await comparer(document(16, 24), document(16, 16))
  })

  it('diff des modes : un mode qui rejoint la valeur par défaut est un modifié, pas un supprimé', () => {
    expect(rejointLeDefaut.modifies).toStrictEqual([{ chemin: 'Espacement/a', ...sombre, avant: '24 px', apres: '16 px', typeChange: false }])
    expect([rejointLeDefaut.ajoutes, rejointLeDefaut.supprimes, rejointLeDefaut.deprecies]).toStrictEqual([[], [], []])
    expect(rejointLeDefaut.niveau).toBe('correctif')
  })

  it('diff des modes : un mode qui quitte la valeur par défaut est un modifié, pas un ajouté', async () => {
    const quitteLeDefaut = await comparer(document(16, 16), document(16, 24))
    expect(quitteLeDefaut.modifies).toStrictEqual([{ chemin: 'Espacement/a', ...sombre, avant: '16 px', apres: '24 px', typeChange: false }])
    expect([quitteLeDefaut.ajoutes, quitteLeDefaut.supprimes]).toStrictEqual([[], []])
    expect(quitteLeDefaut.niveau).toBe('correctif')
  })

  it("diff des modes : la base change et le mode garde sa valeur, un seul modifié sur la base", async () => {
    const defautChange = await comparer(document(16, 16), document(24, 16))
    expect(defautChange.modifies).toStrictEqual([{ chemin: 'Espacement/a', avant: '16 px', apres: '24 px', typeChange: false }])
    expect([defautChange.ajoutes, defautChange.supprimes]).toStrictEqual([[], []])
    expect(defautChange.niveau).toBe('correctif')
  })

  it('diff des modes : un token supprimé avec ses modes donne des supprimés, base et mode', async () => {
    const tokenSupprime = await comparer(document(16, 24), document(16, 24, { avecA: false }))
    expect(tokenSupprime.supprimes).toStrictEqual([
      { chemin: 'Espacement/a', valeur: '16 px' },
      { chemin: 'Espacement/a', ...sombre, valeur: '24 px' }
    ])
    expect([tokenSupprime.ajoutes, tokenSupprime.modifies]).toStrictEqual([[], []])
    expect(tokenSupprime.niveau).toBe('mineur')
  })

  it('diff des modes : un token ajouté avec ses modes donne des ajoutés, base et mode', async () => {
    const tokenAjoute = await comparer(document(16, 24, { avecA: false }), document(16, 24))
    expect(tokenAjoute.ajoutes).toStrictEqual([
      { chemin: 'Espacement/a', valeur: '16 px' },
      { chemin: 'Espacement/a', ...sombre, valeur: '24 px' }
    ])
    expect([tokenAjoute.supprimes, tokenAjoute.modifies]).toStrictEqual([[], []])
    expect(tokenAjoute.niveau).toBe('mineur')
  })
})

// -------------------------------------------------- taille retenue, à l'ouverture

describe("taille retenue, à l'ouverture", () => {
  let plugin

  beforeAll(async () => {
    plugin = creerPluginSimule({ stockageClient: { taille: { largeur: 550, hauteur: 250 } } })
    // La taille retenue se réapplique dans l'IIFE de tête de code.js, avant tout
    // message : laisser le temps aux micro-tâches de s'exécuter.
    await new Promise((r) => setTimeout(r, 0))
  })

  it("taille enregistrée réappliquée à l'ouverture, bornée comme une taille manuelle", () => {
    expect(plugin.redimensionnements).toStrictEqual([[550, 300]])
  })
})

// ------------------------------------------------------------ dépréciation

describe('dépréciation', () => {
  let variable, style, plugin, t, P, rapport, E

  beforeAll(async () => {
    variable = (id, nom, extra = {}) => ({
      id, name: nom, resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['GAP'], valuesByMode: { p1: 8 }, ...extra
    })
    style = (id, nom, description) => ({
      id, name: nom, description, fontName: { family: 'Source Sans Pro', style: 'Regular' }, fontSize: 16,
      lineHeight: { unit: 'PIXELS', value: 20 }, letterSpacing: { unit: 'PIXELS', value: 0 }, boundVariables: {}
    })
    plugin = creerPluginSimule({
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
    ;({ t, P, rapport } = await exporterDocument(plugin))
    E = P.Espacement
  })

  it('description « Deprecated: use color/blue/700. » : $deprecated porte la suite, la description commence par Deprecated', () => {
    expect(E['avec-remplacant'].$deprecated).toBe('use color/blue/700.')
    expect(E['avec-remplacant'].$description.startsWith('Deprecated')).toBeTruthy()
  })

  it('« Deprecated » seul : $deprecated vaut true', () => {
    expect(E.seul.$deprecated).toBe(true)
  })

  it('espaces de début ignorés, tiret de liaison retiré', () => {
    expect(E.tiret.$deprecated).toBe('voir spacing/16')
  })

  it('« Deprecated » collé à d\'autres lettres : pas déprécié', () => {
    expect(E['mot-colle'].$deprecated).toBe(undefined)
  })

  it('variable masquée à la publication sans « Deprecated » : exportée comme les autres', () => {
    expect(E.masque.$deprecated).toBe(undefined)
    expect(E.masque.$type).toBe('dimension')
  })

  it('« deprecated » dans le nom ou ailleurs dans la description : pas déprécié', () => {
    expect(E['deprecated-dans-le-nom'].$deprecated).toBe(undefined)
  })

  it('variable dépréciée sans scope : absente de typesDeduits, active sans scope : présente', () => {
    expect(E['sans-scope'].$deprecated).toBe('Use spacing/16 or spacing/24.')
    expect(E['sans-scope'].$type).toBe('dimension')
    expect(!rapport.typesDeduits.some((e) => e.startsWith('Espacement/sans-scope :'))).toBeTruthy()
    expect(rapport.typesDeduits.some((e) => e.startsWith('Espacement/sans-scope-actif :'))).toBeTruthy()
  })

  it('style de texte et style d\'effet dont la description commence par Deprecated : dépréciés', () => {
    const STY = lireSet(t, 'Styles')
    expect(STY.typography.Ancien.titre.$deprecated).toBe('use Titre/H1')
    expect(STY.typography.Titre.H1.$deprecated).toBe(undefined)
    expect(STY.shadow.Ancienne.ombre.$deprecated).toBe(true)
  })

  it('diff : $deprecated en chaîne (variable ou style) compté comme déprécié, niveau mineur', async () => {
    const reference = JSON.parse(JSON.stringify(t))
    delete lireSet(reference, 'Primitives').Espacement['avec-remplacant'].$deprecated
    delete lireSet(reference, 'Styles').typography.Ancien.titre.$deprecated
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(reference), source: 'repo' })
    const diff = normaliser(plugin.dernierMessage())
    expect(diff.deprecies.map((d) => d.chemin).sort()).toStrictEqual(['Espacement/avec-remplacant', 'typography/Ancien/titre'])
    expect(diff.niveau).toBe('mineur')
  })
})

// ------------------------------------------------------- styles exportés incomplets

describe('styles exportés incomplets', () => {
  let style, plugin, t, rapport, T, ext, HORS_DTCG, diff

  beforeAll(async () => {
    style = (id, nom, graisse, extra = {}) => ({
      id, name: nom, description: '', fontName: { family: 'Source Sans Pro', style: graisse }, fontSize: 16,
      lineHeight: { unit: 'PIXELS', value: 20 }, letterSpacing: { unit: 'PIXELS', value: 0 }, boundVariables: {}, ...extra
    })
    plugin = creerPluginSimule({
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
    ;({ t, rapport } = await exporterDocument(plugin))
    T = lireSet(t, 'Styles').typography
    // Champs hors DTCG d'un style : dans $extensions, jamais dans $value.
    ext = (nom) => T[nom].$extensions?.['fr.axa.canopee'] || {}
    HORS_DTCG = ['fontStyle', 'textDecoration', 'textTransform']
  })

  it("style « Italic » seul : graisse 400 et fontStyle italic, ni incomplet ni écarté", () => {
    expect(rapport.stylesTexte).toBe(9)
    expect(T.Citation.$value.fontWeight).toBe(400)
    expect(ext('Citation').fontStyle).toBe('italic')
    expect(!rapport.stylesIncomplets.some((e) => e.startsWith('Citation'))).toBeTruthy()
    expect(!rapport.ecartes.some((e) => e.startsWith('Citation'))).toBeTruthy()
  })

  it('style oblique : fontStyle oblique', () => {
    expect(ext('Oblique').fontStyle).toBe('oblique')
  })

  it('graisse non reconnue : exportée telle quelle, et signalée comme incomplète', () => {
    expect(rapport.stylesIncomplets.includes('Légende : graisse « Book Heavy » non reconnue, exportée telle quelle')).toBeTruthy()
  })

  it('souligné : textDecoration underline', () => {
    expect(ext('Lien').textDecoration).toBe('underline')
  })

  it('barré : textDecoration line-through', () => {
    expect(ext('Prix barré').textDecoration).toBe('line-through')
  })

  it('majuscules : textTransform uppercase', () => {
    expect(ext('Majuscules').textTransform).toBe('uppercase')
  })

  it('petites capitales : aucun textTransform, signalé comme incomplet', () => {
    expect(!('textTransform' in ext('Petites capitales'))).toBeTruthy()
    expect(rapport.stylesIncomplets.includes('Petites capitales : les petites capitales ne sont pas exportées')).toBeTruthy()
  })

  it('style sans italique, soulignement ni casse : aucune extension', () => {
    expect(T.Simple.$extensions).toBe(undefined)
  })

  it('italique, soulignement et casse jamais dans $value, que Terrazzo lit', () => {
    for (const [nom, jeton] of Object.entries(T)) {
      for (const cle of HORS_DTCG) expect(!(cle in jeton.$value), `${nom} : ${cle}`).toBeTruthy()
    }
  })

  it('fontStyle relié à une variable : le champ garde sa valeur CSS, jamais une référence', () => {
    expect(ext('Lié').fontStyle).toBe('italic')
  })

  it('diff : style souligné comparé à une référence sans le champ, « décoration du texte » de aucun à underline', async () => {
    // Diff : référence sans le soulignement du style Lien.
    const reference = JSON.parse(JSON.stringify(t))
    delete lireSet(reference, 'Styles').typography.Lien.$extensions
    await plugin.envoyer({ type: 'comparer', reference: JSON.stringify(reference), source: 'fichier', nomFichier: 'reference-souligne.json' })
    diff = normaliser(plugin.dernierMessage())
    const m = diff.modifies.find((x) => x.chemin === 'typography/Lien')
    expect(m).toBeTruthy()
    expect(m.champs).toStrictEqual([{ champ: 'décoration du texte', avant: 'aucun', apres: 'underline' }])
  })

  it('diff : rien d\'autre ne change, les autres extensions restent ignorées', () => {
    expect(diff.modifies.map((x) => x.chemin)).toStrictEqual(['typography/Lien'])
  })
})

describe('breakpoints', () => {
  let breakpoint, t, rapport, B

  beforeAll(async () => {
    breakpoint = (id, nom, valeur) => ({ id, name: nom, resolvedType: 'FLOAT', variableCollectionId: 'CP', scopes: ['WIDTH_HEIGHT'], description: 'Utilisé par prospect et client.', valuesByMode: { m1: valeur } })
    const plugin = creerPluginSimule({
      collections: [{ id: 'CP', name: 'Primitive', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' }],
      locales: [breakpoint('b1', 'breakpoint/1024', 1024), breakpoint('b2', 'breakpoint/0', 0), breakpoint('b3', 'breakpoint/1280', 1279)]
    })
    ;({ t, rapport } = await exporterDocument(plugin))
    B = lireSet(t, 'Primitive').breakpoint
  })

  it('breakpoint : dimension en px, description générée avant celle de Figma', () => {
    expect([B['1024'].$type, B['1024'].$value]).toStrictEqual(['dimension', { value: 1024, unit: 'px' }])
    expect(B['1024'].$description).toBe("Largeur d'écran de 1024 px à partir de laquelle la mise en page change. Reste en px dans le code. Utilisé par prospect et client.")
  })

  it('breakpoint : nom conforme, y compris breakpoint/0', () => {
    expect(!rapport.nomenclature.some((m) => m.startsWith('« breakpoint/1024 »') || m.startsWith('« breakpoint/0 »'))).toBeTruthy()
  })

  it('breakpoint : le nombre du nom doit égaler la valeur', () => {
    expect(rapport.nomenclature.includes('« breakpoint/1280 » : le nom indique 1280, mais la valeur est de 1279 px')).toBeTruthy()
  })
})

// Le nom d'un set identifie toute sa collection : une collection en double ne
// doit jamais écraser l'autre sans le dire.
describe('collections de même nom', () => {
  let pluginDoublon, doublon

  beforeAll(async () => {
    pluginDoublon = creerPluginSimule({
      nomFichier: 'Fondations Canopée',
      collections: [
        { id: 'CA', name: 'A.B', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' },
        { id: 'CB', name: 'A-B', modes: [{ modeId: 'm2', name: 'clair' }, { modeId: 'm3', name: 'sombre' }], defaultModeId: 'm2' }
      ],
      locales: [
        { id: 'v1', name: 'spacing/1', resolvedType: 'FLOAT', variableCollectionId: 'CA', scopes: ['GAP'], valuesByMode: { m1: 1 } },
        { id: 'v2', name: 'spacing/2', resolvedType: 'FLOAT', variableCollectionId: 'CB', scopes: ['GAP'], valuesByMode: { m2: 2, m3: 3 } }
      ]
    })
    doublon = await exporterDocument(pluginDoublon)
  })

  it('collections de même nom une fois assaini : la première garde son set, la seconde reste hors du fichier', () => {
    expect(lireSet(doublon.t, 'A-B').spacing['1'].$value.value).toBe(1)
    expect(lireSet(doublon.t, 'A-B').spacing['2']).toBe(undefined)
    expect(doublon.t.modifiers).toBe(undefined)
    expect(doublon.rapport.exportees).toBe(1)
  })

  it('collections de même nom une fois assaini : la seconde remonte en conflit et bloque le dépôt', () => {
    expect(doublon.rapport.conflits).toStrictEqual(['Collection A-B : même nom que A.B dans le code'])
    expect(normaliser(pluginDoublon.messages.filter((m) => m.type === 'verification').pop().blocage)).toStrictEqual({ raison: 'ecartes', n: 1 })
  })

  it('collection nommée Styles : le set reste celui des styles, la collection remonte en conflit', async () => {
    const pluginReserve = creerPluginSimule({
      collections: [{ id: 'CS', name: 'Styles', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' }],
      locales: [{ id: 'v1', name: 'spacing/1', resolvedType: 'FLOAT', variableCollectionId: 'CS', scopes: ['GAP'], valuesByMode: { m1: 1 } }],
      stylesEffet: [{ id: 'e1', name: 'shadow/1', description: '', effects: [ombre(2, { visible: true })] }]
    })
    const reserve = await exporterDocument(pluginReserve)
    expect(reserve.rapport.stylesEffet).toBe(1)
    expect(lireSet(reserve.t, 'Styles').spacing).toBe(undefined)
    expect(reserve.rapport.conflits).toStrictEqual(['Collection Styles : nom réservé aux styles de texte et d\'effet'])
  })
})

describe('variables supprimées', () => {
  let t, rapport

  beforeAll(async () => {
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
    ;({ t, rapport } = await exporterDocument(plugin))
  })

  it('variable supprimée : un alias vers elle est un lien cassé, le token n\'est pas exporté', () => {
    expect(rapport.aliasIntrouvables.includes('spacing/flou')).toBeTruthy()
    expect(lireSet(t, 'Primitive').spacing.flou).toBe(undefined)
  })

  it('variable supprimée : un style relié à elle est un lien cassé, le style n\'est pas exporté', () => {
    expect(rapport.aliasIntrouvables.includes('Shadow')).toBeTruthy()
    expect(rapport.stylesEffet).toBe(0)
    expect(t.sets.Styles).toBe(undefined)
  })
})

describe('opacité et styles', () => {
  let motifDe

  beforeAll(async () => {
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
    motifDe = (nom) => rapport.nomenclature.find((m) => m.startsWith(`« ${nom} »`))
  })

  it('nomenclature : opacité conforme au nom, malgré l\'arrondi de Figma', () => {
    expect(motifDe('color/black-alpha/20')).toBe(undefined)
  })

  it('nomenclature : opacité différente du nom', () => {
    expect(motifDe('color/black-alpha/30')).toBe("« color/black-alpha/30 » : le nom indique 30 % d'opacité, mais la valeur est de 50 %")
  })

  it('nomenclature : couleur sans alpha, comptée opaque', () => {
    expect(motifDe('color/white-alpha/40')).toBe("« color/white-alpha/40 » : le nom indique 40 % d'opacité, mais la valeur est de 100 %")
  })

  it('nomenclature : opacité non comparée pour un alias', () => {
    expect(motifDe('color/gray-alpha/50')).toBe(undefined)
  })

  it('nomenclature : styles de texte conformes, non signalés', () => {
    for (const nom of ['heading/h2', 'body/2/semibold']) expect(motifDe(nom), nom).toBe(undefined)
  })

  it('nomenclature : style mal écrit', () => {
    expect(motifDe('Titre/H1')).toBe("« Titre/H1 » : s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots")
  })

  it('nomenclature : style hors des familles', () => {
    expect(motifDe('quote/1/regular')).toBe('« quote/1/regular » : le nom doit commencer par heading, title, subtitle, body, label ou caption')
  })

  it('nomenclature : style sans graisse', () => {
    expect(motifDe('body/2')).toBe('« body/2 » : ce nom ne suit pas le modèle des styles body, par exemple body/2/semibold')
  })

  it('nomenclature : heading écrit comme les autres familles', () => {
    expect(motifDe('heading/2/regular')).toBe('« heading/2/regular » : ce nom ne suit pas le modèle des styles heading, par exemple heading/h2')
  })
})

// La doc et le plugin vivent dans le même repo : une règle de nommage changée
// d'un seul côté fait échouer ce scénario.
describe('documentation', () => {
  let fondations, tableau, t, primitives, styles, modeles, noms, valeursAdmises

  beforeAll(async () => {
    fondations = (page) => fs.readFileSync(path.join(__dirname, '..', '..', '..', 'fondations', page), 'utf8')
    tableau = (texte, premiereColonne) => {
      const lignes = texte.split('\n')
      const debut = lignes.findIndex((l) => l.startsWith(`| ${premiereColonne} |`))
      expect(debut, `tableau « ${premiereColonne} » introuvable`).not.toBe(-1)
      const corps = []
      for (const l of lignes.slice(debut + 2)) {
        if (!l.startsWith('|')) break
        corps.push(l.split('|').slice(1, -1).map((c) => c.trim()))
      }
      return corps
    }
    ;({ __test: t } = creerPluginSimule())
    primitives = fondations('01-primitives.md')
    styles = fondations('02-styles-de-texte.md')
    modeles = tableau(primitives, "Ce qu'elle désigne")
    noms = modeles.map((l) => l[1])
    valeursAdmises = (partie) => {
      const ligne = tableau(primitives, 'Partie').find((l) => l[0] === partie)
      expect(ligne, `ligne « ${partie} » introuvable`).toBeTruthy()
      return ligne[1].split(', ')
    }
  })

  it('doc : chaque modèle de 01-primitives.md suit une forme du plugin', () => {
    for (const nom of noms) expect(t.formeCorrespondante(nom), `${nom} : le plugin ne connaît pas ce modèle`).toBeTruthy()
  })

  it('doc : chaque forme du plugin a sa ligne dans 01-primitives.md', () => {
    const couvertes = noms.map((nom) => t.formeCorrespondante(nom).id).sort()
    expect(couvertes).toStrictEqual([...t.GRAMMAIRE_PRIMITIVES].map((f) => f.id).sort())
  })

  it('doc : les catégories du plugin sont celles de 01-primitives.md', () => {
    expect([...new Set(noms.map((nom) => nom.split('/')[0]))].sort()).toStrictEqual([...t.CATEGORIES_CONNUES].sort())
    for (const exemple of Object.values(t.EXEMPLE_CATEGORIE)) expect(noms.includes(exemple), `${exemple} : absent de la doc`).toBeTruthy()
  })

  it('doc : le nom dans le code suit le nom dans Figma', () => {
    for (const [, figma, code] of modeles) expect(code).toBe('--' + figma.replace(/\//g, '-'))
  })

  it('doc : les paliers du plugin sont ceux de 01-primitives.md', () => {
    expect(valeursAdmises("Palier d'une couleur")).toStrictEqual([...t.PALIERS])
  })

  it('doc : le plugin connaît le seul mot-clé d\'arrondi de 01-primitives.md', () => {
    expect(valeursAdmises("Mot-clé d'un arrondi")).toStrictEqual(['full'])
  })

  it('doc : les familles du plugin sont celles de 02-styles-de-texte.md', () => {
    expect(tableau(styles, 'Famille').map((l) => l[0])).toStrictEqual([...t.FAMILLES_STYLE])
  })

  it('doc : chaque style de 02-styles-de-texte.md suit le modèle du plugin', () => {
    for (const [style] of tableau(styles, 'Style')) {
      const complets = style.startsWith('heading/') ? [style] : [`${style}/regular`, `${style}/semibold`]
      for (const nom of complets) expect(t.motifStyle(nom), nom).toBe(null)
    }
  })

  it('doc : les propriétés de style du plugin sont celles de 02-styles-de-texte.md', () => {
    const phrase = /Chaque style en a quatre : ([^.]+)\./.exec(styles)
    expect(phrase, 'phrase des quatre propriétés introuvable').toBeTruthy()
    expect(phrase[1].split(/, | et /).sort()).toStrictEqual(Object.keys(t.PHRASES_STYLE).sort())
  })

  it('doc : les niveaux de 03-creer-ou-modifier-un-token.md sont ceux du plugin', () => {
    const niveaux = Object.fromEntries(tableau(fondations('03-creer-ou-modifier-un-token.md'), 'Changement').map(([changement, niveau]) => [niveau, changement.toLowerCase()]))
    expect(Object.keys(niveaux)).toStrictEqual(['Majeur', 'Mineur', 'Patch'])
    expect(niveaux.Majeur.includes('refonte complète')).toBeTruthy()
    for (const mot of ['ajoutés', 'supprimés', 'dépréciés', 'type']) expect(niveaux.Mineur.includes(mot), mot).toBeTruthy()
    expect(niveaux.Patch.includes('valeurs modifiées')).toBeTruthy()
  })
})

describe('variables de style', () => {
  let t, rapport, T, ctx

  beforeAll(async () => {
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
    ;({ t, rapport } = await exporterDocument(plugin))
    T = lireSet(t, 'Typography').body['2'].regular
    ctx = t.modifiers.Typography.contexts.mobile[0].body['2'].regular
  })

  it('variable de style : description sans valeur, y compris en alias, avec la description Figma après', () => {
    expect(T['font-size'].$description).toBe('Taille de texte du style body/2/regular. Texte courant.')
    expect(T['line-height'].$description).toBe('Interligne du style body/2/regular.')
    expect(T['font-weight'].$description).toBe('Graisse du style body/2/regular.')
    expect(T['font-family'].$description).toBe('Famille de police du style body/2/regular.')
  })

  it('variable de style : même description dans le contexte d\'un mode qui diffère', () => {
    expect(ctx['font-size'].$description).toBe('Taille de texte du style body/2/regular. Texte courant.')
    expect(ctx['line-height']).toBe(undefined)
  })

  it('variable de style : absente de « Sans description »', () => {
    expect(!rapport.sansDescription.some((nom) => nom.startsWith('body/2/regular/'))).toBeTruthy()
  })

  it('variable de style : un nom à un seul segment et les primitives ne sont pas concernés', () => {
    expect(rapport.sansDescription.includes('font-size')).toBeTruthy()
    const P = lireSet(t, 'Primitive').font
    expect(P.size['16'].$description).toBe('Taille de texte de 16 px, soit 1rem dans le code.')
    expect(P.weight.regular.$description).toBe('Graisse regular, de valeur 400.')
    expect(P.family['sans-serif'].$description).toBe('Famille de police Source Sans Pro.')
  })
})

// ------------------------------------------------- fichier produit, de bout en bout

// Le fichier produit pour le document de test, octet pour octet, à la date et au
// numéro de version du plugin près : seules choses qui changent d'un lancement
// à l'autre. Référence : test/fixtures/reference-output.json.
const normaliserFichierProduit = (texte) => texte
  .replace(/("plugin": )"[^"]*"/, '$1"<version>"')
  .replace(/("date": )"\d{4}-[^"]*"/, '$1"<date>"')

describe('fichier produit', () => {
  let json, reference

  beforeAll(async () => {
    const plugin = creerPluginSimule(documentDeTest())
    ;({ json } = await exporterDocument(plugin))
    reference = fs.readFileSync(path.join(__dirname, 'fixtures', 'reference-output.json'), 'utf8')
  })

  it('fichier produit pour le document de test : identique à la référence enregistrée', () => {
    expect(normaliserFichierProduit(json)).toBe(reference)
  })
})































