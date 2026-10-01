// Plugin Terrazzo : écrit les @custom-media de chaque univers à partir des
// primitives breakpoint du JSON. Les noms restent ceux du code actuel, la
// valeur vient du token, et l'opérateur est toujours >= : le token porte la
// largeur où le palier commence.

const enPx = (token) => {
  const v = token.$value
  if (!v || v.unit !== 'px') throw new Error(`${token.id} : dimension en px attendue`)
  return v.value
}

export default function customMedia({ univers }) {
  return {
    name: 'canopee-custom-media',
    build({ tokens, outputFile }) {
      for (const [nomUnivers, { filename, medias }] of Object.entries(univers)) {
        const lignes = Object.entries(medias).map(([media, id]) => {
          const token = tokens[id]
          if (!token) throw new Error(`${nomUnivers} : --${media} renvoie vers ${id}, absent du JSON`)
          const px = enPx(token)
          return `@custom-media --${media} screen and (width >= ${px === 0 ? 0 : `${px}px`});`
        })
        outputFile(filename, `/* Généré par Terrazzo à partir des design tokens. Ne pas modifier. */\n\n${lignes.join('\n')}\n`)
      }
    }
  }
}
