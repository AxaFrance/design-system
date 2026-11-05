#!/usr/bin/env node
// Produces scripts/extraire.bridge.js: the extraction core of code.js, ready to be
// pasted as is into a figma_execute. It takes the id of a component set from a
// constant at the top and returns the JSON of the sheet.
//
// Usage: node scripts/construire-bridge.mjs [--id 12:34] [--sortie path]
//   --id      id of the component set, written in the constant at the top (otherwise to replace by hand)
//   --sortie  file to write (default scripts/extraire.bridge.js)
// No dependency.

import { readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const START = '// >>> DEBUT EXTRACTION'
const END = '// <<< FIN EXTRACTION'

const args = process.argv.slice(2)
const option = (name) => {
  const i = args.indexOf(name)
  return i >= 0 ? args[i + 1] : undefined
}
const id = option('--id') || 'ID_DU_COMPONENT_SET'
const output = resolve(option('--sortie') || join(here, 'extraire.bridge.js'))

const code = readFileSync(join(here, '..', 'code.js'), 'utf8')
const start = code.indexOf(START)
const end = code.indexOf(END)
if (start < 0 || end < 0 || end < start) {
  console.error('Repères introuvables dans code.js : ' + START + ' et ' + END)
  process.exit(1)
}
const core = code.slice(start + START.length, end).trim()

const bridge = `// Généré par scripts/construire-bridge.mjs depuis code.js. Ne pas modifier à la main.
// À coller tel quel dans un figma_execute, après avoir remplacé l'id ci-dessous par celui
// du component set (ou d'un composant seul). Retourne le JSON de la fiche, sous forme de texte.
const ID_COMPONENT_SET = ${JSON.stringify(id)}

${core}

const bridgeTarget = await figma.getNodeByIdAsync(ID_COMPONENT_SET)
if (!bridgeTarget) throw new Error('Aucun noeud pour l\\'id ' + ID_COMPONENT_SET)
if (bridgeTarget.type !== 'COMPONENT_SET' && bridgeTarget.type !== 'COMPONENT') throw new Error('Le noeud ' + ID_COMPONENT_SET + ' est de type ' + bridgeTarget.type + ' : il faut un component set ou un composant.')
return serialize(await extract(bridgeTarget))
`

writeFileSync(output, bridge)
console.log('Écrit : ' + output + ' (' + bridge.length + ' caractères)')
