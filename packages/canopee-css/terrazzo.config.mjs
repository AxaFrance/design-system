import { defineConfig } from '@terrazzo/cli'
import css from '@terrazzo/plugin-css'
import customMedia from './terrazzo-custom-media.mjs'

// Les dimensions passent en rem, sur une base de 16 px. Les épaisseurs de
// bordure, les arrondis et les breakpoints restent en px, comme dans le code actuel.
const resteEnPx = (id) => ['border.width.', 'border.radius.', 'breakpoint.'].some((p) => id.startsWith(p))
const enRem = (token) => {
  const v = token.$value
  if (token.$type !== 'dimension' || resteEnPx(token.id) || v?.unit !== 'px') return
  return `${Math.round((v.value / 16) * 10000) / 10000}rem`
}

// Tokens de la collection Typography, les seuls qui changent entre mobile et desktop.
const TYPO_RESPONSIVE = ['heading.**', 'body.**']

export default defineConfig({
  tokens: ['./design-tokens-canopee.resolver.json'],
  outDir: './generated/',
  plugins: [
    // Un fichier par thème B2C : typo mobile par défaut, typo desktop à partir
    // de desktop-small (1024 px), comme le fait déjà le code.
    ...['prospect', 'client'].map((theme) => css({
      filename: `${theme}/tokens.css`,
      legacyHex: true,
      transform: enRem,
      permutations: [
        { input: { Typography: `${theme}-mobile` }, prepare: (contenu) => `:root {\n  ${contenu}\n}` },
        {
          input: { Typography: `${theme}-desktop` },
          include: TYPO_RESPONSIVE,
          prepare: (contenu) => `@media (--desktop-small) {\n  :root {\n    ${contenu}\n  }\n}`
        }
      ]
    })),
    // Noms des custom media du code actuel, et primitive breakpoint de chacun.
    customMedia({
      univers: {
        'prospect-client': {
          filename: 'prospect-client/custom-media.css',
          medias: {
            mobile: 'breakpoint.0',
            tablet: 'breakpoint.668',
            'desktop-small': 'breakpoint.1024',
            'desktop-medium': 'breakpoint.1280',
            'desktop-large': 'breakpoint.1600'
          }
        },
        distributeur: {
          filename: 'distributeur/custom-media.css',
          medias: {
            small: 'breakpoint.0',
            'tablet-portrait': 'breakpoint.576',
            'tablet-landscape': 'breakpoint.772',
            'desktop-small': 'breakpoint.1016',
            'desktop-medium': 'breakpoint.1272',
            'desktop-large': 'breakpoint.1432',
            'desktop-xl': 'breakpoint.1432'
          }
        }
      }
    })
  ]
})
