import { readFileSync } from "node:fs";
import { defineConfig } from "@terrazzo/cli";
import css from "@terrazzo/plugin-css";
import customMedia from "./terrazzo-custom-media.mjs";

const TOKENS = "./design-tokens-canopee.resolver.json";

// Colors are written in HSL, as in the current code, rounded to one decimal.
// An alias keeps its var() reference.
const round = (n) => Math.round(n * 10) / 10;
const toHsl = ([r, g, b]) => {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const d = max - min;
  let h = 0;
  let s = 0;
  if (d) {
    s = d / (1 - Math.abs(2 * l - 1));
    h =
      max === r
        ? ((g - b) / d) % 6
        : max === g
          ? (b - r) / d + 2
          : (r - g) / d + 4;
    h = (h * 60 + 360) % 360;
  }
  return `hsl(${round(h)}deg, ${round(s * 100)}%, ${round(l * 100)}%)`;
};

// Dimensions are converted to rem, on a 16 px base. Border widths, border radii
// and breakpoints stay in px, as in the current code.
const staysInPx = (id) =>
  ["border.width.", "border.radius.", "breakpoint."].some((p) =>
    id.startsWith(p),
  );

const formatValue = (token) => {
  const v = token.$value;
  if (token.$type === "color")
    return token.aliasOf ? undefined : toHsl(v.components);
  if (token.$type !== "dimension" || staysInPx(token.id) || v?.unit !== "px")
    return;
  return `${Math.round((v.value / 16) * 10000) / 10000}rem`;
};

// Typography modes and families are read from the tokens file, so that a mode
// or a family added in Figma needs no change here. A theme with a mobile and a
// desktop mode (prospect, client) is responsive, a theme with a single mode
// (distributeur) is not. Typography tokens are the only ones that change
// between mobile and desktop.
const resolver = JSON.parse(readFileSync(new URL(TOKENS, import.meta.url)));
const typographyModes = Object.keys(resolver.modifiers.Typography.contexts);
const responsiveThemes = typographyModes
  .filter((mode) => mode.endsWith("-desktop"))
  .map((mode) => mode.replace(/-desktop$/, ""));
const singleModeThemes = typographyModes.filter(
  (mode) => !/-(mobile|desktop)$/.test(mode),
);
const RESPONSIVE_TYPOGRAPHY = resolver.sets.Typography.sources.flatMap(
  (source) => Object.keys(source).map((family) => `${family}.**`),
);

const root = (content) => `:root {\n  ${content}\n}`;

// Custom media names of the current code, and the breakpoint primitive of each.
// Prospect and client share the same breakpoints.
const B2C_MEDIA = {
  mobile: "breakpoint.0",
  tablet: "breakpoint.668",
  "desktop-small": "breakpoint.1024",
  "desktop-medium": "breakpoint.1280",
  "desktop-large": "breakpoint.1600",
};

export default defineConfig({
  tokens: [TOKENS],
  outDir: "./generated/",
  plugins: [
    // One file per responsive theme: mobile typography by default, desktop
    // typography from desktop-small, as the current code already does.
    ...responsiveThemes.map((theme) =>
      css({
        filename: `${theme}/tokens.css`,
        transform: formatValue,
        permutations: [
          {
            input: { Typography: `${theme}-mobile` },
            prepare: root,
          },
          {
            input: { Typography: `${theme}-desktop` },
            include: RESPONSIVE_TYPOGRAPHY,
            prepare: (content) =>
              `@media (--desktop-small) {\n  :root {\n    ${content}\n  }\n}`,
          },
        ],
      }),
    ),
    // One file per single-mode theme, with the same typography on every screen.
    ...singleModeThemes.map((theme) =>
      css({
        filename: `${theme}/tokens.css`,
        transform: formatValue,
        permutations: [{ input: { Typography: theme }, prepare: root }],
      }),
    ),
    // One custom media file per folder of dist.
    customMedia({
      targets: {
        prospect: { filename: "prospect/custom-media.css", media: B2C_MEDIA },
        client: { filename: "client/custom-media.css", media: B2C_MEDIA },
        distributeur: {
          filename: "distributeur/custom-media.css",
          media: {
            small: "breakpoint.0",
            "tablet-portrait": "breakpoint.576",
            "tablet-landscape": "breakpoint.772",
            "desktop-small": "breakpoint.1016",
            "desktop-medium": "breakpoint.1272",
            "desktop-large": "breakpoint.1432",
            "desktop-xl": "breakpoint.1432",
          },
        },
      },
    }),
  ],
});
