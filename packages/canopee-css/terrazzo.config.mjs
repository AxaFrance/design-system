import { defineConfig } from '@terrazzo/cli'
import css from '@terrazzo/plugin-css'
import customMedia from './terrazzo-custom-media.mjs'

// Dimensions are converted to rem, on a 16 px base. Border widths, border radii
// and breakpoints stay in px, as in the current code.
const staysInPx = (id) => ['border.width.', 'border.radius.', 'breakpoint.'].some((p) => id.startsWith(p))
const toRem = (token) => {
  const v = token.$value
  if (token.$type !== 'dimension' || staysInPx(token.id) || v?.unit !== 'px') return
  return `${Math.round((v.value / 16) * 10000) / 10000}rem`
}

// Tokens of the Typography collection, the only ones that change between mobile and desktop.
const RESPONSIVE_TYPOGRAPHY = ['heading.**', 'body.**']

export default defineConfig({
  tokens: ['./design-tokens-canopee.resolver.json'],
  outDir: './generated/',
  plugins: [
    // One file per B2C theme: mobile typography by default, desktop typography
    // from desktop-small (1024 px), as the current code already does.
    ...['prospect', 'client'].map((theme) => css({
      filename: `${theme}/tokens.css`,
      legacyHex: true,
      transform: toRem,
      permutations: [
        { input: { Typography: `${theme}-mobile` }, prepare: (content) => `:root {\n  ${content}\n}` },
        {
          input: { Typography: `${theme}-desktop` },
          include: RESPONSIVE_TYPOGRAPHY,
          prepare: (content) => `@media (--desktop-small) {\n  :root {\n    ${content}\n  }\n}`
        }
      ]
    })),
    // Custom media names of the current code, and the breakpoint primitive of each.
    customMedia({
      targets: {
        'prospect-client': {
          filename: 'prospect-client/custom-media.css',
          media: {
            mobile: 'breakpoint.0',
            tablet: 'breakpoint.668',
            'desktop-small': 'breakpoint.1024',
            'desktop-medium': 'breakpoint.1280',
            'desktop-large': 'breakpoint.1600'
          }
        },
        distributeur: {
          filename: 'distributeur/custom-media.css',
          media: {
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
