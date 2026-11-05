// Test d'intégration : le vrai ui.html, dans jsdom, relié au vrai code.js (plugin
// simulé) par un pont qui reproduit celui de Figma. Il protège le contrat de
// messages entre les deux côtés, que rien d'autre ne teste.
//
// Les éléments se trouvent par leur texte visible (jamais par id ni par classe),
// et les textes de l'interface sont protégés par un instantané par parcours.
//
// Les seuls endroits qui citent des types de messages sont les listes attendues
// ci-dessous, et les messages de préparation de exporter(). Le pont note les types
// vus dans chaque sens, et le dernier test compare ces ensembles aux listes : il
// échoue si un type n'est plus exercé de bout en bout.

import { afterEach, describe, expect, it } from 'vitest'
import { JSDOM, VirtualConsole } from 'jsdom'

const fs = require('fs')
const path = require('path')
const { creerPluginSimule } = require('./figma-simule.js')

// Contrat de messages entre l'interface et le plugin. Un type renommé d'un seul
// côté, ou qu'aucun parcours n'exerce plus, fait échouer le dernier test.
const TYPES_INTERFACE_VERS_PLUGIN = ['comparer', 'deposer', 'ouvrir', 'pret', 'redimensionner', 'redimensionner-manuel', 'taille-auto', 'telecharger']
const TYPES_PLUGIN_VERS_INTERFACE = ['contexte', 'depot-pret', 'diff', 'erreur', 'fichier', 'recalculer-hauteur', 'verification']
const typesVersPlugin = new Set()
const typesVersInterface = new Set()

const HTML = fs.readFileSync(path.join(__dirname, '..', 'ui.html'), 'utf8')

// ------------------------------------------------------------------ documents

const alias = (id) => ({ type: 'VARIABLE_ALIAS', id })
const collectionPrimitives = { id: 'C1', name: 'Primitives', modes: [{ modeId: 'm1', name: 'Mode 1' }], defaultModeId: 'm1' }
const variable = (id, nom, type, valeur, scopes = []) => ({ id, name: nom, resolvedType: type, variableCollectionId: 'C1', scopes, valuesByMode: { m1: valeur } })

// Document sans problème, dans le fichier où le dépôt est permis.
const documentSain = (modifs = {}) => ({
  nomFichier: 'Fondations Canopée',
  collections: [collectionPrimitives],
  locales: [
    variable('v1', 'color/blue/700', 'COLOR', modifs.bleu || { r: 0, g: 0, b: 143 / 255 }),
    variable('v2', 'color/white', 'COLOR', { r: 1, g: 1, b: 1 }),
    variable('v3', 'spacing/16', 'FLOAT', 16, ['GAP']),
    ...(modifs.sansEspacement ? [] : [variable('v4', 'spacing/2', 'FLOAT', 2, ['GAP'])]),
    ...(modifs.avecEnPlus ? [variable('v5', 'spacing/8', 'FLOAT', 8, ['GAP'])] : [])
  ],
  stylesTexte: [],
  stylesEffet: []
})

// Un token porte le nom d'un groupe : conflit de noms.
const documentAvecConflit = () => ({
  nomFichier: 'Canopée B2B',
  collections: [collectionPrimitives],
  locales: [
    variable('v1', 'Couleur/Bleu', 'COLOR', { r: 0, g: 0, b: 0.5 }),
    variable('v2', 'Couleur/Bleu/clair', 'COLOR', { r: 1, g: 1, b: 1 }),
    variable('v3', 'Espacement/m', 'FLOAT', 16, ['GAP'])
  ],
  stylesTexte: [],
  stylesEffet: []
})

// Une variable dont la lecture échoue dès qu'on appelle casser() : le plugin signale
// alors une erreur à l'interface.
const documentQuiCasse = () => {
  let casse = false
  const document = documentSain()
  document.locales.push({
    id: 'v99',
    get name() { if (casse) throw new Error('lecture impossible'); return 'spacing/4' },
    resolvedType: 'FLOAT',
    variableCollectionId: 'C1',
    scopes: ['GAP'],
    valuesByMode: { m1: 4 }
  })
  return { document, casser: () => { casse = true } }
}

// Le fichier de tokens que produirait un document, pour servir de fichier du code.
const exporter = async (doc) => {
  const plugin = creerPluginSimule(doc)
  await plugin.envoyer({ type: 'pret' })
  await plugin.envoyer({ type: 'telecharger' })
  return plugin.dernierMessage().json
}

// ---------------------------------------------------------------- interface

const cloner = (m) => JSON.parse(JSON.stringify(m))
const normaliser = (texte) => texte.replace(/\s+/g, ' ').trim()

const ouvertes = []

// Ouvre ui.html dans jsdom, relié à un plugin simulé sur le document donné.
// referenceRepo : texte du fichier du code sur GitHub, ou null s'il n'y est pas.
// pulls : PR ouvertes renvoyées par GitHub. versions : texte du fichier du code à
// chaque version publiée, par numéro.
const ouvrirInterface = async (documentFigma, { referenceRepo = null, pulls = [], versions = {} } = {}) => {
  const plugin = creerPluginSimule(documentFigma)
  const erreurs = []
  const telechargements = []
  const copies = []
  const appelsFetch = []
  let enCours = 0
  const suivre = (promesse) => {
    enCours++
    return promesse.then(() => { enCours-- }, (e) => { enCours--; erreurs.push(e) })
  }

  const virtualConsole = new VirtualConsole()
  virtualConsole.on('jsdomError', (e) => erreurs.push(e))

  const dom = new JSDOM(HTML, {
    runScripts: 'dangerously',
    pretendToBeVisual: true,
    url: 'https://plugin.test/',
    virtualConsole,
    beforeParse(window) {
      // Toute erreur JavaScript non interceptée côté interface fait échouer le test.
      window.addEventListener('error', (e) => erreurs.push(e.error || new Error(e.message)))
      window.addEventListener('unhandledrejection', (e) => erreurs.push(e.reason))

      // Interface vers plugin : parent.postMessage({ pluginMessage }, '*') appelle
      // figma.ui.onmessage, hors de la pile de l'appelant comme dans Figma.
      Object.defineProperty(window, 'postMessage', {
        configurable: true,
        value: (m) => {
          typesVersPlugin.add(m.pluginMessage.type)
          suivre(Promise.resolve().then(() => plugin.envoyer(cloner(m.pluginMessage))))
        }
      })
      // Plugin vers interface : figma.ui.postMessage(m) arrive en événement message.
      plugin.brancherInterface((m) => {
        typesVersInterface.add(m.type)
        window.dispatchEvent(new window.MessageEvent('message', { data: { pluginMessage: cloner(m) } }))
      })

      // GitHub, sans réseau : réponses fixes selon l'adresse appelée.
      const reponse = (status, corps) => ({
        ok: status >= 200 && status < 300,
        status,
        text: async () => corps,
        json: async () => JSON.parse(corps)
      })
      window.fetch = (url) => {
        appelsFetch.push(String(url))
        const adresse = String(url)
        let rep
        if (adresse.startsWith('https://api.github.com/') && adresse.includes('/pulls')) rep = reponse(200, JSON.stringify(pulls))
        else if (adresse.startsWith('https://api.github.com/') && adresse.includes('/tags')) rep = reponse(200, JSON.stringify([{ name: '2.0.0' }, { name: '2.1.0' }, { name: 'v-ancienne' }]))
        else if (adresse.startsWith('https://raw.githubusercontent.com/')) {
          const version = Object.keys(versions).find((v) => adresse.includes(`/${v}/`))
          if (version) rep = reponse(200, versions[version])
          else rep = referenceRepo === null ? reponse(404, '') : reponse(200, referenceRepo)
        }
        else return Promise.reject(new Error(`appel réseau inattendu : ${adresse}`))
        return suivre(Promise.resolve()).then(() => rep)
      }

      // Ce que jsdom ne fournit pas.
      window.URL.createObjectURL = () => 'blob:essai'
      window.URL.revokeObjectURL = () => {}
      window.scrollTo = () => {}
      // Le presse-papiers, que jsdom ne fournit pas : chaque texte copié est gardé.
      Object.defineProperty(window.navigator, 'clipboard', { configurable: true, value: { writeText: async (texte) => { copies.push(texte) } } })
      // La capture du pointeur par la poignée, que jsdom ne fournit pas non plus.
      window.Element.prototype.setPointerCapture = () => {}
      window.Element.prototype.hasPointerCapture = () => true
      window.Element.prototype.releasePointerCapture = () => {}
      window.HTMLAnchorElement.prototype.click = function () { telechargements.push({ href: this.href, nom: this.download }) }
    }
  })

  const { window } = dom
  const { document } = window
  ouvertes.push(window)

  // Attend que les échanges entre l'interface, le plugin et GitHub soient finis.
  const stabiliser = async () => {
    for (let i = 0; i < 5; i++) {
      do { await new Promise((resolve) => setTimeout(resolve, 0)) } while (enCours > 0)
    }
  }
  await stabiliser()

  // Le texte que voit la personne : sans script ni style, sans ce qui est masqué.
  const texte = () => {
    const copie = document.body.cloneNode(true)
    copie.querySelectorAll('script, style, [hidden]').forEach((e) => e.remove())
    return normaliser(copie.textContent)
  }
  const cliquable = (libelle, selecteur) => {
    const trouves = [...document.querySelectorAll(selecteur)].filter((e) => normaliser(e.textContent).startsWith(libelle))
    expect(trouves.length, `${trouves.length} éléments « ${libelle} »`).toBe(1)
    return trouves[0]
  }
  const bouton = (libelle) => cliquable(libelle, 'button')
  const cliquer = async (element) => {
    element.click()
    await stabiliser()
  }
  const sansErreur = () => {
    expect(erreurs.map((e) => (e && e.message) || String(e))).toStrictEqual([])
  }

  return { plugin, window, document, texte, bouton, cliquable, cliquer, stabiliser, sansErreur, telechargements, copies, appelsFetch }
}

afterEach(() => {
  while (ouvertes.length) ouvertes.pop().close()
})

// ------------------------------------------------------------------ parcours

describe("interface et plugin : parcours de bout en bout", () => {
  it("(a) à l'ouverture, l'en-tête affiche le nom du fichier et ses chiffres", async () => {
    const ui = await ouvrirInterface(documentSain())
    expect(ui.texte()).toContain('Design tokens')
    expect(ui.texte()).toContain('Fondations Canopée')
    expect(ui.texte()).toContain('1 collection, 4 variables, 0 style')
    expect(ui.texte()).not.toContain('Lecture du fichier')
    expect(ui.texte()).not.toContain('Vérification…')
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it('(b) un conflit de noms affiche la section « Noms en conflit »', async () => {
    const ui = await ouvrirInterface(documentAvecConflit())
    expect(ui.texte()).toContain('Noms en conflit')
    expect(ui.texte()).toContain('Couleur/Bleu/clair')
    expect(ui.texte()).toContain('À corriger')
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it('(c) dans « Fondations Canopée » sans problème, « Déposer sur GitHub » ouvre la vue dépôt et « ← Retour » revient', async () => {
    const ui = await ouvrirInterface(documentSain())
    const deposer = ui.bouton('Déposer sur GitHub')
    expect(deposer.disabled).toBe(false)
    expect(ui.texte()).not.toContain('Avant de déposer')
    const vueNormale = ui.texte()

    await ui.cliquer(deposer)
    expect(ui.texte()).toContain('Avant de déposer')
    expect(ui.texte()).toContain('Copier et ouvrir')
    expect(ui.texte()).not.toContain('Télécharger le fichier')
    const vueDepot = ui.texte()

    await ui.cliquer(ui.bouton('← Retour'))
    expect(ui.texte()).not.toContain('Avant de déposer')
    expect(ui.texte()).toContain('Télécharger le fichier')
    expect(ui.bouton('Déposer sur GitHub').disabled).toBe(false)
    expect(ui.texte()).toBe(vueNormale)
    ui.sansErreur()
    expect({ vueNormale, vueDepot, retour: ui.texte() }).toMatchSnapshot()
  })

  it('(d) « Télécharger le fichier » : le plugin répond, un fichier est proposé, aucune erreur', async () => {
    const ui = await ouvrirInterface(documentSain())
    await ui.cliquer(ui.bouton('Télécharger le fichier'))
    expect(ui.telechargements).toEqual([{ href: 'blob:essai', nom: 'design-tokens-canopee.resolver.json' }])
    expect(ui.texte()).toContain('design-tokens-canopee.resolver.json téléchargé')
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it("(e) les messages de redimensionnement de l'interface arrivent au plugin", async () => {
    const ui = await ouvrirInterface(documentSain())
    // À l'ouverture, l'interface demande sa hauteur : le plugin redimensionne la fenêtre.
    expect(ui.plugin.redimensionnements.length).toBeGreaterThan(0)
    const avant = ui.plugin.redimensionnements.length
    // Un double-clic sur la poignée envoie « taille automatique » au plugin, qui
    // redimensionne la fenêtre puis demande un recalcul de hauteur à l'interface.
    const poignee = ui.document.querySelector('[aria-label="Redimensionner la fenêtre"]')
    expect(poignee, 'poignée introuvable').toBeTruthy()
    poignee.dispatchEvent(new ui.window.MouseEvent('dblclick', { bubbles: true }))
    await ui.stabiliser()
    expect(ui.plugin.redimensionnements.length).toBeGreaterThan(avant)
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it('(f) la comparaison avec le fichier du code affiche la carte « Changements »', async () => {
    // Le code a une couleur différente, un espacement de plus et un de moins que Figma.
    const referenceRepo = await exporter(documentSain({ bleu: { r: 0, g: 0, b: 0.5 }, sansEspacement: true, avecEnPlus: true }))
    const ui = await ouvrirInterface(documentSain(), { referenceRepo })
    expect(ui.appelsFetch.some((u) => u.startsWith('https://raw.githubusercontent.com/'))).toBe(true)
    expect(ui.texte()).toContain('Changements')
    const replie = ui.texte()

    // La carte est repliée à l'ouverture : un clic sur son titre la déplie.
    await ui.cliquer(ui.cliquable('Changements', '[role="button"]'))
    expect(ui.texte()).toContain('Comparé à')
    expect(ui.texte()).toContain('le code actuel')
    expect(ui.texte()).toContain('AJOUTÉ')
    expect(ui.texte()).toContain('MODIFIÉ')
    expect(ui.texte()).toContain('SUPPRIMÉ')
    expect(ui.texte()).toContain('color/blue/700')
    ui.sansErreur()
    expect({ replie, deplie: ui.texte() }).toMatchSnapshot()
  })

  it('dépôt complet : « Copier et ouvrir », « Copier le message », puis « Terminé »', async () => {
    const ui = await ouvrirInterface(documentSain())
    await ui.cliquer(ui.bouton('Déposer sur GitHub'))
    expect(ui.plugin.ouvertures).toStrictEqual([])
    const avantCopie = ui.texte()

    // Le fichier est copié, puis GitHub s'ouvre sur l'adresse que donne le plugin.
    await ui.cliquer(ui.bouton('Copier et ouvrir'))
    expect(ui.copies).toHaveLength(1)
    expect(JSON.parse(ui.copies[0]).name).toBe('Fondations Canopée')
    expect(ui.plugin.ouvertures).toHaveLength(1)
    expect(ui.plugin.ouvertures[0]).toMatch(/^https:\/\/github\.com\//)
    expect(ui.bouton('Copier le message').disabled).toBe(false)
    const apresOuverture = ui.texte()

    // Le message de commit est copié : rien dans le dépôt, donc tous les tokens sont ajoutés.
    await ui.cliquer(ui.bouton('Copier le message'))
    expect(ui.copies).toHaveLength(2)
    expect(ui.copies[1]).toBe('feat(canopee): update design tokens')
    expect(ui.texte()).toContain('Une fois la PR créée')
    const apresCopie = ui.texte()

    await ui.cliquer(ui.bouton('Terminé'))
    expect(ui.texte()).not.toContain('Avant de déposer')
    expect(ui.texte()).toContain('Télécharger le fichier')
    expect(ui.bouton('Déposer sur GitHub').disabled).toBe(false)
    expect(ui.plugin.ouvertures).toHaveLength(1)
    ui.sansErreur()
    expect({ avantCopie, apresOuverture, apresCopie, final: ui.texte() }).toMatchSnapshot()
  })

  it('redimensionnement manuel : la poignée enregistre la taille dans le stockage du poste', async () => {
    const ui = await ouvrirInterface(documentSain())
    const poignee = ui.document.querySelector('[aria-label="Redimensionner la fenêtre"]')
    expect(poignee, 'poignée introuvable').toBeTruthy()
    expect(ui.plugin.stockageClient.taille).toBe(undefined)
    poignee.dispatchEvent(new ui.window.PointerEvent('pointerdown', { bubbles: true, pointerId: 1 }))
    poignee.dispatchEvent(new ui.window.PointerEvent('pointermove', { bubbles: true, pointerId: 1, clientX: 512, clientY: 632 }))
    poignee.dispatchEvent(new ui.window.PointerEvent('pointerup', { bubbles: true, pointerId: 1 }))
    await ui.stabiliser()
    expect(cloner(ui.plugin.stockageClient.taille)).toStrictEqual({ largeur: 520, hauteur: 640 })
    expect(ui.plugin.redimensionnements.at(-1)).toStrictEqual([520, 640])
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it('menu « Comparé à » : choisir une version publiée la compare au fichier du code de cette version', async () => {
    const referenceRepo = await exporter(documentSain())
    const version = await exporter(documentSain({ avecEnPlus: true }))
    const ui = await ouvrirInterface(documentSain(), { referenceRepo, versions: { '2.1.0': version } })
    await ui.cliquer(ui.cliquable('Changements', '[role="button"]'))
    expect(ui.texte()).toContain('Aucun changement : les tokens sont identiques au code.')
    const avant = ui.texte()

    const menu = ui.cliquable('Comparé à', 'label').control
    const option = [...menu.options].find((o) => normaliser(o.textContent) === 'la version 2.1.0')
    expect(option, 'version 2.1.0 absente du menu').toBeTruthy()
    menu.value = option.value
    menu.dispatchEvent(new ui.window.Event('change', { bubbles: true }))
    await ui.stabiliser()

    expect(ui.appelsFetch.some((u) => u.includes('/2.1.0/'))).toBe(true)
    expect(ui.texte()).not.toContain('Aucun changement')
    expect(ui.texte()).toContain('SUPPRIMÉ')
    expect(ui.texte()).toContain('spacing/8')
    const menuApres = ui.cliquable('Comparé à', 'label').control
    expect(normaliser(menuApres.selectedOptions[0].textContent)).toBe('la version 2.1.0')
    ui.sansErreur()
    expect({ avant, apres: ui.texte() }).toMatchSnapshot()
  })

  it("erreur remontée par le plugin pendant un téléchargement : l'interface l'affiche", async () => {
    const { document: doc, casser } = documentQuiCasse()
    const ui = await ouvrirInterface(doc)
    expect(ui.texte()).not.toContain('impossible')
    casser()
    await ui.cliquer(ui.bouton('Télécharger le fichier'))
    expect(ui.texte()).toContain('Téléchargement impossible : lecture impossible')
    expect(ui.telechargements).toStrictEqual([])
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it("erreur remontée par le plugin pendant la vérification : l'interface l'affiche", async () => {
    const { document: doc, casser } = documentQuiCasse()
    casser()
    const ui = await ouvrirInterface(doc)
    expect(ui.texte()).toContain('Vérification impossible : lecture impossible')
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })

  it('une PR « update design tokens » ouverte bloque le dépôt : bandeau, bouton désactivé, lien vers la PR', async () => {
    const pulls = [
      { number: 1500, title: 'chore: autre sujet', html_url: 'https://github.com/AxaFrance/design-system/pull/1500' },
      { number: 2091, title: 'feat(canopee): update design tokens', html_url: 'https://github.com/AxaFrance/design-system/pull/2091' }
    ]
    const ui = await ouvrirInterface(documentSain(), { pulls })
    expect(ui.texte()).toContain("La PR #2091 attend d'être intégrée par un développeur.")
    expect(ui.texte()).not.toContain('#1500')
    expect(ui.bouton('Déposer sur GitHub').disabled).toBe(true)

    await ui.cliquer(ui.bouton('#2091'))
    expect(ui.plugin.ouvertures).toStrictEqual(['https://github.com/AxaFrance/design-system/pull/2091'])
    ui.sansErreur()
    expect(ui.texte()).toMatchSnapshot()
  })
})

// Doit rester le dernier test du fichier : il lit ce que les parcours ci-dessus ont fait passer.
describe('contrat de messages entre interface et plugin', () => {
  it('chaque type de message est exercé de bout en bout, dans les deux sens', () => {
    expect([...typesVersPlugin].sort()).toStrictEqual([...TYPES_INTERFACE_VERS_PLUGIN].sort())
    expect([...typesVersInterface].sort()).toStrictEqual([...TYPES_PLUGIN_VERS_INTERFACE].sort())
  })
})
