import { defineConfig } from '@terrazzo/cli'
import css from '@terrazzo/plugin-css'
import customMedia from './terrazzo-custom-media.mjs'

// Colors are written in HSL, as in the current code, rounded to one decimal.
// An alias keeps its var() reference.
const round = (n) => Math.round(n * 10) / 10
const toHsl = ([r, g, b]) => {
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2
  const d = max - min
  let h = 0
  let s = 0
  if (d) {
    s = d / (1 - Math.abs(2 * l - 1))
    h = max === r ? ((g - b) / d) % 6 : max === g ? (b - r) / d + 2 : (r - g) / d + 4
    h = (h * 60 + 360) % 360
  }
  return `hsl(${round(h)}deg, ${round(s * 100)}%, ${round(l * 100)}%)`
}

// Dimensions are converted to rem, on a 16 px base. Border widths, border radii
// and breakpoints stay in px, as in the current code.
const staysInPx = (id) => ['border.width.', 'border.radius.', 'breakpoint.'].some((p) => id.startsWith(p))

const formatValue = (token) => {
  const v = token.$value
  if (token.$type === 'color') return token.aliasOf ? undefined : toHsl(v.components)
  if (token.$type !== 'dimension' || staysInPx(token.id) || v?.unit !== 'px') return
  return `${Math.round((v.value / 16) * 10000) / 10000}rem`
}

// Tokens of the Typography collection, the only ones that change between mobile and desktop.
const RESPONSIVE_TYPOGRAPHY = ['heading.**', 'body.**']

// Custom media names of the current code, and the breakpoint primitive of each.
// Prospect and client share the same breakpoints.
const B2C_MEDIA = {
  mobile: 'breakpoint.0',
  tablet: 'breakpoint.668',
  'desktop-small': 'breakpoint.1024',
  'desktop-medium': 'breakpoint.1280',
  'desktop-large': 'breakpoint.1600'
}

export default defineConfig({
  tokens: ['./design-tokens-canopee.resolver.json'],
  outDir: './generated/',
  plugins: [
    // One file per B2C theme: mobile typography by default, desktop typography
    // from desktop-small (1024 px), as the current code already does.
    ...['prospect', 'client'].map((theme) => css({
      filename: `${theme}/tokens.css`,
      transform: formatValue,
      permutations: [
        { input: { Typography: `${theme}-mobile` }, prepare: (content) => `:root {\n  ${content}\n}` },
        {
          input: { Typography: `${theme}-desktop` },
          include: RESPONSIVE_TYPOGRAPHY,
          prepare: (content) => `@media (--desktop-small) {\n  :root {\n    ${content}\n  }\n}`
        }
      ]
    })),
    // One custom media file per folder of dist.
    customMedia({
      targets: {
        prospect: { filename: 'prospect/custom-media.css', media: B2C_MEDIA },
        client: { filename: 'client/custom-media.css', media: B2C_MEDIA },
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
