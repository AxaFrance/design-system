// Export of Figma variables and styles in the DTCG format.
// Built by Vite into dist/code.js, the file the manifest points at (npm run build).

import type {
  DiffEntry,
  DiffLevel,
  DiffMeta,
  DiffResult,
  DiffResultMessage,
  ErrorContext,
  FieldDiff,
  ModifiedEntry,
  PluginToUiMessage,
  ReferenceSource,
  RepoUrls,
  Report,
  SubmitBlocker,
  UiToPluginMessage,
} from "./messages";

// ------------------------------------------------------------------- types

// A DTCG color: an sRGB object, with the hex fallback.
interface ColorValue {
  colorSpace: "srgb";
  components: number[];
  alpha?: number;
  hex: string;
}
// A dimension (px) or a duration (ms).
interface Measure {
  value: number;
  unit: "px" | "ms";
}
interface TypographyValue {
  fontFamily: string;
  fontSize: Measure | string;
  fontWeight: number | string;
  letterSpacing: Measure | string;
  lineHeight: number | string;
}
interface ShadowValue {
  color: ColorValue | string;
  offsetX: Measure | string;
  offsetY: Measure | string;
  blur: Measure | string;
  spread: Measure | string;
  inset: boolean;
}
type TokenValue =
  | string
  | number
  | boolean
  | ColorValue
  | Measure
  | TypographyValue
  | ShadowValue
  | ShadowValue[];
type DtcgType =
  "color" | "dimension" | "number" | "fontWeight" | "fontFamily" | "duration";

// Keys written in $extensions['fr.axa.canopee']: part of the published file format.
interface TokenExtensions {
  nomFigma?: string;
  typeDeduit?: boolean;
  alias?: string;
  fontStyle?: string;
  textDecoration?: string;
  textTransform?: string;
}
interface Token {
  $type: string;
  $value: TokenValue;
  $description?: string;
  $deprecated?: string | true;
  $extensions?: { "fr.axa.canopee": TokenExtensions };
}
// A group of tokens: a name is either a token or a group.
interface TokenTree {
  [name: string]: Token | TokenTree;
}
interface ResolverDoc {
  name: string;
  version: string;
  $extensions: {
    "fr.axa.canopee": { source: string; plugin: string; date?: string };
  };
  sets: Record<string, { sources: TokenTree[] }>;
  modifiers?: Record<
    string,
    { default: string | undefined; contexts: Record<string, TokenTree[]> }
  >;
  resolutionOrder?: { $ref: string }[];
}

// A JSON value read from a file or a message: an object to inspect before use.
const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null;
const isAlias = (v: unknown): v is VariableAlias =>
  isRecord(v) && v.type === "VARIABLE_ALIAS";

// Any message to the interface goes through here, so that it is checked against the contract.
const post = (message: PluginToUiMessage) => figma.ui.postMessage(message);

const VERSION = "0.31.0";
const WIDTH = 440;
const INITIAL_HEIGHT = 600;
// Automatic height: follows the content, within these bounds. High enough by default
// to read the changes under the sticky blocks at the top.
const AUTO_HEIGHT_MIN = 560;
const AUTO_HEIGHT_MAX = 800;

figma.showUI(__html__, {
  width: WIDTH,
  height: INITIAL_HEIGHT,
  themeColors: true,
});

// ------------------------------------------------------------------- window

// Manual size: dragged from the UI handle, kept on the user's
// machine (figma.clientStorage), and takes priority over automatic resize
// messages while it is active. The bounds prevent an unusable window,
// too small or too large.
const SIZE_KEY = "size";
const MANUAL_BOUNDS = {
  widthMin: 320,
  widthMax: 1000,
  heightMin: 300,
  heightMax: 1200,
};

let manualSize = false;
let lastSize = { width: WIDTH, height: INITIAL_HEIGHT };

const resizeWindow = (width: number, height: number) => {
  lastSize = { width, height };
  figma.ui.resize(width, height);
};

const boundManualSize = (width: number, height: number) => ({
  width: Math.min(
    Math.max(width, MANUAL_BOUNDS.widthMin),
    MANUAL_BOUNDS.widthMax,
  ),
  height: Math.min(
    Math.max(height, MANUAL_BOUNDS.heightMin),
    MANUAL_BOUNDS.heightMax,
  ),
});

// Size kept on this machine, read back and applied on opening. A storage error
// (clientStorage unavailable or empty) must never prevent the
// plugin from opening: the window then stays at its automatic size.
(async () => {
  try {
    const size: unknown = await figma.clientStorage.getAsync(SIZE_KEY);
    if (
      isRecord(size) &&
      typeof size.width === "number" &&
      typeof size.height === "number"
    ) {
      const bounded = boundManualSize(size.width, size.height);
      manualSize = true;
      resizeWindow(bounded.width, bounded.height);
    }
  } catch (e) {
    // Storage unavailable: nothing to do, the window keeps its automatic size.
  }
})();

// Time of the export, to the second, in UTC: used to compare a reference with its
// original date rather than the date of the file on the user's machine.
const exportDate = () => new Date().toISOString().replace(/\.\d{3}Z$/, "Z");

// ----------------------------------------------------------------- submit

// Location chosen by the dev team on 2026-09-30: root of the canopee-css package.
// Object exposed through __test (end of file): the test (npm test) changes
// its properties to simulate the submission without depending on a real configuration.
// fileKey is the key of the Figma file Fondations Canopée: the submission is only
// possible from that file (see submitBlocker).
interface RepoConfig {
  name: string;
  branch: string;
  tokensPath: string | null;
  fileKey: string;
  firstVersion: string;
}
const REPO: RepoConfig = {
  name: "AxaFrance/design-system",
  branch: "main",
  tokensPath: "packages/canopee-css/design-tokens-canopee.resolver.json",
  fileKey: "MJfhu2fwxNjxlzGqOAWJNq",
  // First published version that contains the tokens file: the "Comparé à" menu
  // does not offer older versions.
  firstVersion: "2.0.0",
};

// Recomputed on every message rather than memoized: REPO can change after
// the script has loaded, notably in the test.
const repoUrls = (repo: RepoConfig): RepoUrls => {
  const path = repo.tokensPath;
  const i = path ? path.lastIndexOf("/") : -1;
  const folder = path && i !== -1 ? path.slice(0, i) : "";
  const fileName = path ? path.slice(i + 1) : "";
  return {
    urlReference: path
      ? `https://raw.githubusercontent.com/${repo.name}/${repo.branch}/${path}`
      : null,
    // List of the repository tags, and URL template of the tokens file for a given tag
    // ("{tag}" to be replaced on the UI side): only if tokensPath is set.
    urlTags: path
      ? `https://api.github.com/repos/${repo.name}/tags?per_page=100`
      : null,
    // Open PRs of the repository, read on opening and on every view change to flag a tokens PR in progress.
    urlPulls: path
      ? `https://api.github.com/repos/${repo.name}/pulls?state=open&per_page=100`
      : null,
    urlVersion: path
      ? `https://raw.githubusercontent.com/${repo.name}/{tag}/${path}`
      : null,
    firstVersion: path ? repo.firstVersion || null : null,
    // GitHub web editor: the file already exists in the repo (edit), or does not yet
    // (creation in its folder). For a user without write access,
    // the editor creates a fork by itself and opens a PR.
    urlEdition: path
      ? `https://github.com/${repo.name}/edit/${repo.branch}/${path}`
      : null,
    urlCreation: path
      ? `https://github.com/${repo.name}/new/${repo.branch}${folder ? "/" + folder : ""}?filename=${encodeURIComponent(fileName)}`
      : null,
  };
};

// Commit message depending on the diff level. The repo checks the
// Conventional Commits convention with commitlint in its CI.
type CommitLevel = "major" | "minor" | "patch";
const COMMIT_MESSAGES: Record<CommitLevel, string> = {
  major: "feat(canopee)!: update design tokens",
  minor: "feat(canopee): update design tokens",
  patch: "fix(canopee): update design tokens",
};
const commitMessage = (level: CommitLevel | null) =>
  (level && COMMIT_MESSAGES[level]) || "chore(canopee): update design tokens";

// What prevents the submission, or null. A single reason, the first in order:
// wrong file, nothing to submit, excluded tokens, file location
// not yet set. The file key is only readable in development
// (enablePrivatePluginApi): without it, the file name is compared.
const submitBlocker = (report: Report): SubmitBlocker | null => {
  const inFoundations = figma.fileKey
    ? figma.fileKey === REPO.fileKey
    : figma.root.name === "Fondations Canopée";
  if (!inFoundations) return { reason: "file" };
  if (report.exported + report.textStyles + report.effectStyles === 0)
    return { reason: "empty" };
  const n = report.conflicts.length + report.missingAliases.length;
  if (n > 0) return { reason: "excluded", n };
  if (!REPO.tokensPath) return { reason: "path" };
  return null;
};

// ------------------------------------------------------------------- naming

// DTCG forbids "{", "}" and "." in a name, and reserves the "$" prefix.
const sanitize = (segment: string) => {
  const s = segment.trim().replace(/[{}.]/g, "-");
  return s.startsWith("$") ? "_" + s.slice(1) : s;
};

const rawSegments = (name: string) =>
  name
    .split("/")
    .map((s) => s.trim())
    .filter(Boolean);
const path = (name: string) => rawSegments(name).map(sanitize);
const isSanitized = (name: string) =>
  path(name).join("/") !== rawSegments(name).join("/");
const reference = (segments: string[]) => `{${segments.join(".")}}`;
const setName = (collection: VariableCollection) =>
  path(collection.name).join("/");
const SET_STYLES = "Styles";

// Puts a token in the tree. Refuses to overwrite: Figma tolerates a name being
// both a token and a group ("a/b" and "a/b/c"), DTCG does not.
const put = (tree: TokenTree, segments: string[], token: Token) => {
  let node = tree;
  for (const s of segments.slice(0, -1)) {
    let child = node[s];
    if (child === undefined) {
      child = {};
      node[s] = child;
    } else if ("$value" in child) return false;
    node = child;
  }
  const leaf = segments[segments.length - 1];
  if (node[leaf] !== undefined) return false;
  node[leaf] = token;
  return true;
};

// ------------------------------------------------------------------- values

// Figma stores its numbers as float32: a 16 can come back as 16.000000238.
const roundNumber = (n: number) => Math.round(n * 10000) / 10000;
const dimension = (n: number): Measure => ({
  value: roundNumber(n),
  unit: "px",
});
const toDuration = (n: number): Measure => ({
  value: roundNumber(n),
  unit: "ms",
});

// 6-digit hex, no alpha channel: this is the fallback provided by the DTCG spec.
const hex = ({ r, g, b }: RGB) => {
  const channel = (v: number) =>
    Math.round(v * 255)
      .toString(16)
      .padStart(2, "0");
  return `#${channel(r)}${channel(g)}${channel(b)}`;
};

// DTCG 2025.10: a color is an sRGB object. Alpha only appears when it
// is defined and below fully opaque (Figma float32 values give 1 as 0.999997).
const toColor = ({ r, g, b, a }: RGB & { a?: number }): ColorValue => {
  const alpha = a !== undefined && a <= 0.999 ? { alpha: roundNumber(a) } : {};
  return {
    colorSpace: "srgb",
    components: [roundNumber(r), roundNumber(g), roundNumber(b)],
    ...alpha,
    hex: hex({ r, g, b }),
  };
};

// Figma does not say whether a number is a size, a weight or an opacity.
// Scopes say so when they are set.
// Label of a DTCG type in the report, in plain language.
const TYPE_LABEL: Partial<Record<DtcgType, string>> = {
  dimension: "une dimension",
  number: "un nombre",
  fontWeight: "une graisse",
  fontFamily: "une police",
  duration: "une durée",
};

const TYPE_BY_SCOPE: Partial<Record<VariableScope, DtcgType>> = {
  FONT_WEIGHT: "fontWeight",
  OPACITY: "number",
  FONT_SIZE: "dimension",
  LINE_HEIGHT: "dimension",
  LETTER_SPACING: "dimension",
  PARAGRAPH_SPACING: "dimension",
  PARAGRAPH_INDENT: "dimension",
  WIDTH_HEIGHT: "dimension",
  GAP: "dimension",
  CORNER_RADIUS: "dimension",
  STROKE_FLOAT: "dimension",
  EFFECT_FLOAT: "dimension",
};

// Without a scope, the name is read. This is a guess, and it is flagged.
const typeByName = (name: string): DtcgType => {
  const n = name.toLowerCase();
  if (/opacit/.test(n)) return "number";
  if (/weight|graisse|poids/.test(n)) return "fontWeight";
  if (/duration|dur[ée]e|transition|delay|d[ée]lai/.test(n)) return "duration";
  if (/z-?index|\bordre\b|\border\b/.test(n)) return "number";
  return "dimension";
};

// DTCG type of a variable. Null when no type fits: booleans, free strings.
const inferType = (
  variable: Variable,
): { type: DtcgType | null; inferred?: boolean } => {
  const scopes = variable.scopes || [];
  if (variable.resolvedType === "COLOR") return { type: "color" };
  if (variable.resolvedType === "FLOAT") {
    const scope = scopes.find((s) => TYPE_BY_SCOPE[s]);
    const scopeType = scope ? TYPE_BY_SCOPE[scope] : undefined;
    return scopeType
      ? { type: scopeType }
      : { type: typeByName(variable.name), inferred: true };
  }
  if (variable.resolvedType === "STRING") {
    if (scopes.includes("FONT_FAMILY")) return { type: "fontFamily" };
    if (/font|police|famil/i.test(variable.name))
      return { type: "fontFamily", inferred: true };
  }
  return { type: null };
};

// The px is canonical in the pivot. Any rem is decided when the CSS is generated.
const numberValue = (n: number, type: DtcgType): Measure | number =>
  type === "dimension"
    ? dimension(n)
    : type === "duration"
      ? toDuration(n)
      : roundNumber(n);

const WEIGHTS: Record<string, number> = {
  thin: 100,
  hairline: 100,
  extralight: 200,
  ultralight: 200,
  light: 300,
  regular: 400,
  normal: 400,
  book: 400,
  medium: 500,
  semibold: 600,
  demibold: 600,
  bold: 700,
  extrabold: 800,
  ultrabold: 800,
  black: 900,
  heavy: 900,
};
// "Italic" or "Oblique" alone, without a weight, is the italic of regular.
const parseWeight = (figmaStyle: string): number | undefined => {
  const name = figmaStyle
    .replace(/italic|oblique/gi, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  return name === "" ? 400 : WEIGHTS[name];
};

// A token is deprecated when its Figma description starts with "Deprecated",
// followed by the end of the text or a character that is neither a letter nor a digit.
// Returns the text that follows the word (replacement, reason), or true if there is
// none, or undefined when the token is not deprecated.
const deprecation = (
  description: string | undefined,
): string | true | undefined => {
  const m = /^\s*deprecated(?![\p{L}\p{N}])(.*)$/isu.exec(description || "");
  if (!m) return undefined;
  const rest = m[1].replace(/^[\s:.,-]+/, "").trim();
  return rest || true;
};

// The Figma description comes first for a deprecated token, so that the generated
// comment starts with "Deprecated". Otherwise the generated one comes first.
const assembleDescription = (
  generated: string | null,
  figma: string,
  isDeprecated: string | true | undefined,
) =>
  (isDeprecated ? [figma, generated] : [generated, figma])
    .filter(Boolean)
    .join(" ");

// ------------------------------------------------------------- descriptions

// WCAG 2 contrast of a color on a white background: relative luminance channel by
// channel, compared with the luminance of white (1).
const relativeLuminance = ({ r, g, b }: RGB) => {
  const channel = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
  return 0.2126 * channel(r) + 0.7152 * channel(g) + 0.0722 * channel(b);
};
const contrastOnWhite = (components: RGB) =>
  (1 + 0.05) / (relativeLuminance(components) + 0.05);

// French-style number, without useless decimals: formatDecimalFr(15.04, 1) → "15",
// formatDecimalFr(1.28, 1) → "1,3".
const formatDecimalFr = (n: number, decimals: number) => {
  const r = Math.round(n * 10 ** decimals) / 10 ** decimals;
  return Number.isInteger(r) ? String(r) : String(r).replace(".", ",");
};
const formatPx = (n: number) => formatDecimalFr(n, 4);
const BASE_REM = 16;
const formatRem = (px: number) => `${roundNumber(px / BASE_REM)}rem`;

// Grammar of primitive names, in two readings: tolerant (case
// ignored, dash accepted before the last part, "font/size/16" as well as
// "font/size-18") to recognize the kind of a description, strict
// (lowercase, slash) for the naming expected on the
// Primitives page. colorAlpha is checked before colorStep: "color/black-alpha/20"
// also matches colorStep ("black-alpha" is a valid kebab word),
// and must remain an alpha shape rather than a step out of the scale.
interface GrammarEntry {
  id: string;
  tolerant: RegExp;
  strict: RegExp;
}
const PRIMITIVES_GRAMMAR: GrammarEntry[] = [
  { id: "colorWhite", tolerant: /^color\/white$/i, strict: /^color\/white$/ },
  { id: "colorBlack", tolerant: /^color\/black$/i, strict: /^color\/black$/ },
  {
    id: "colorAlpha",
    tolerant: /^color\/([a-z0-9-]+)-alpha[/-]\d+$/i,
    strict: /^color\/[a-z0-9]+(?:-[a-z0-9]+)*-alpha\/\d+$/,
  },
  {
    id: "colorStep",
    tolerant: /^color\/([a-z0-9-]+)[/-](\d{2,3})$/i,
    strict: /^color\/[a-z0-9]+(?:-[a-z0-9]+)*\/\d+$/,
  },
  {
    id: "spacing",
    tolerant: /^spacing[/-]\d+(?:\.\d+)?$/i,
    strict: /^spacing\/\d+$/,
  },
  { id: "size", tolerant: /^size[/-]\d+(?:\.\d+)?$/i, strict: /^size\/\d+$/ },
  {
    id: "borderWidth",
    tolerant: /^border\/width[/-]\d+(?:\.\d+)?$/i,
    strict: /^border\/width\/\d+$/,
  },
  {
    id: "borderRadius",
    tolerant: /^border\/radius[/-]\d+(?:\.\d+)?$/i,
    strict: /^border\/radius\/\d+$/,
  },
  {
    id: "borderRadiusFull",
    tolerant: /^border\/radius[/-]full$/i,
    strict: /^border\/radius\/full$/,
  },
  {
    id: "breakpoint",
    tolerant: /^breakpoint[/-]\d+(?:\.\d+)?$/i,
    strict: /^breakpoint\/\d+$/,
  },
  {
    id: "fontSize",
    tolerant: /^font\/size[/-]\d+(?:\.\d+)?$/i,
    strict: /^font\/size\/\d+$/,
  },
  {
    id: "fontLineHeight",
    tolerant: /^font\/line-height[/-]\d+(?:\.\d+)?$/i,
    strict: /^font\/line-height\/\d+$/,
  },
  {
    id: "fontWeight",
    tolerant: /^font\/weight[/-]([a-z]+)$/i,
    strict: /^font\/weight\/[a-z0-9]+(?:-[a-z0-9]+)*$/,
  },
  {
    id: "fontFamily",
    tolerant: /^font\/family[/-]([a-z-]+)$/i,
    strict: /^font\/family\/[a-z0-9]+(?:-[a-z0-9]+)*$/,
  },
];

// Kind of a description, tolerant reading of the grammar above.
const analyzeName = (
  name: string,
): { kind: string; m: RegExpExecArray } | null => {
  for (const { id, tolerant } of PRIMITIVES_GRAMMAR) {
    const found = tolerant.exec(name.trim());
    if (found) return { kind: id, m: found };
  }
  return null;
};

// Variables of a text style (body/2/regular/font-size): the last segment
// gives the property, the rest of the name is the style. Description without a value, so
// identical in all modes.
const STYLE_PHRASES: Record<string, string> = {
  "font-size": "Taille de texte",
  "line-height": "Interligne",
  "font-family": "Famille de police",
  "font-weight": "Graisse",
};
const styleVariableDescription = (name: string) => {
  const segments = name.trim().split("/");
  if (segments.length < 2) return null;
  const property = segments[segments.length - 1];
  if (!Object.prototype.hasOwnProperty.call(STYLE_PHRASES, property))
    return null;
  const style = segments.slice(0, -1).join("/");
  return `${STYLE_PHRASES[property]} du style ${style}.`;
};

// Builds the description generator.
type DescriptionGenerator = (
  variable: Variable,
  value: TokenValue | null | undefined,
) => string | null;
const isColorValue = (v: unknown): v is ColorValue =>
  isRecord(v) && typeof v.hex === "string";
const isPxDimension = (v: unknown): v is Measure =>
  isRecord(v) && v.unit === "px";

const buildGenerator = (): DescriptionGenerator => {
  const contrastPhrase = (value: ColorValue) => {
    if (value.alpha !== undefined) return "";
    const [r, g, b] = value.components;
    return ` Contraste de ${formatDecimalFr(contrastOnWhite({ r, g, b }), 1)}:1 sur blanc.`;
  };

  // Text style variables get their description even as aliases.
  // Otherwise, null if the value is a reference (unresolved alias) or if the name does not
  // match any recognized kind.
  return (variable, value) => {
    if (value === null || value === undefined) return null;
    const fromStyle = styleVariableDescription(variable.name);
    if (fromStyle) return fromStyle;
    if (typeof value === "string" && value.startsWith("{")) return null;
    const kindMatch = analyzeName(variable.name);
    if (!kindMatch) return null;

    switch (kindMatch.kind) {
      case "colorWhite":
        if (!isColorValue(value)) return null;
        return `Blanc, sans teinte ni palier. ${value.hex.toUpperCase()}.`;
      case "colorBlack":
        if (!isColorValue(value)) return null;
        return `Noir, sans teinte ni palier. ${value.hex.toUpperCase()}.${contrastPhrase(value)}`;
      case "colorAlpha": {
        if (!isColorValue(value)) return null;
        const base = kindMatch.m[1].toLowerCase();
        const label =
          base === "black"
            ? "Noir"
            : base === "white"
              ? "Blanc"
              : `Couleur ${kindMatch.m[1]}`;
        const percentage = Math.round(
          (value.alpha !== undefined ? value.alpha : 1) * 100,
        );
        return `${label} à ${percentage} % d'opacité.`;
      }
      case "colorStep":
        if (!isColorValue(value)) return null;
        return `Couleur ${kindMatch.m[1]}, palier ${kindMatch.m[2]}, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. ${value.hex.toUpperCase()}.${contrastPhrase(value)}`;
      case "spacing":
        if (!isPxDimension(value)) return null;
        return `Espacement de ${formatPx(value.value)} px, soit ${formatRem(value.value)} dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.`;
      case "size":
        if (!isPxDimension(value)) return null;
        return `Dimension de ${formatPx(value.value)} px, soit ${formatRem(value.value)} dans le code. Pour la largeur ou la hauteur d'un élément, comme une icône ou un logo. Pour l'espace dans un élément ou entre deux éléments, utiliser un token spacing.`;
      case "borderRadiusFull":
        if (!isPxDimension(value)) return null;
        return `Arrondi complet, qui donne une forme de pilule, ou un cercle sur un élément carré. Vaut ${formatPx(value.value)} px.`;
      case "borderRadius":
        if (!isPxDimension(value)) return null;
        return `Arrondi d'angle de ${formatPx(value.value)} px.`;
      case "borderWidth":
        if (!isPxDimension(value)) return null;
        return `Épaisseur de bordure de ${formatPx(value.value)} px.`;
      case "breakpoint":
        if (!isPxDimension(value)) return null;
        return `Largeur d'écran de ${formatPx(value.value)} px à partir de laquelle la mise en page change. Reste en px dans le code.`;
      case "fontSize": {
        if (!isPxDimension(value)) return null;
        return `Taille de texte de ${formatPx(value.value)} px, soit ${formatRem(value.value)} dans le code.`;
      }
      case "fontLineHeight": {
        if (!isPxDimension(value)) return null;
        return `Interligne de ${formatPx(value.value)} px, soit ${formatRem(value.value)} dans le code.`;
      }
      case "fontWeight":
        if (typeof value !== "number") return null;
        return `Graisse ${kindMatch.m[1]}, de valeur ${value}.`;
      case "fontFamily":
        if (typeof value !== "string") return null;
        return `Famille de police ${value}.`;
      default:
        return null;
    }
  };
};

// -------------------------------------------------------------- naming rules

// Rules of the Primitives page of the documentation. They only apply to the
// variables of collections whose name starts with "Primitive": semantic
// tokens are not concerned. Strict reading of PRIMITIVES_GRAMMAR
// (see above).
const matchingShape = (name: string) =>
  PRIMITIVES_GRAMMAR.find((f) => f.strict.test(name)) || null;

// Shapes whose last segment carries a px value comparable to the variable.
const SHAPES_WITH_VALUE = [
  "spacing",
  "size",
  "borderWidth",
  "borderRadius",
  "fontSize",
  "fontLineHeight",
  "breakpoint",
];
const KNOWN_CATEGORIES = [
  "color",
  "font",
  "border",
  "spacing",
  "size",
  "breakpoint",
];
const CATEGORY_EXAMPLE: Record<string, string> = {
  color: "color/blue/500",
  font: "font/size/16",
  border: "border/radius/8",
  spacing: "spacing/16",
  size: "size/24",
  breakpoint: "breakpoint/1024",
};
const STEPS = [
  "050",
  "100",
  "200",
  "300",
  "400",
  "500",
  "600",
  "700",
  "800",
  "900",
];

// An unrecognized shape may only be a final dash in place of a slash
// before the value: "font/size-16" instead of "font/size/16".
const lastDashToSlash = (name: string) => {
  const i = name.lastIndexOf("-");
  return i === -1 ? null : name.slice(0, i) + "/" + name.slice(i + 1);
};
const lastSegment = (name: string) => name.slice(name.lastIndexOf("/") + 1);

// A single problem per name: the one from the first rule that applies, never two.
const namingProblem = (variable: Variable, collection: VariableCollection) => {
  const name = variable.name.trim();

  // 1. Spelling: lowercase, no accent or space, dash between words.
  if (!name.split("/").every((p) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(p))) {
    return "s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots";
  }

  // 2. Expected shape depending on the category.
  const shape = matchingShape(name);
  if (!shape) {
    const fixed = lastDashToSlash(name);
    if (fixed && matchingShape(fixed))
      return `il manque une barre oblique avant le nombre, à écrire ${fixed}`;
    const category = name.split("/")[0];
    if (!KNOWN_CATEGORIES.includes(category))
      return "le nom doit commencer par color, font, border, spacing, size ou breakpoint";
    return `ce nom ne suit pas le modèle des noms ${category}, par exemple ${CATEGORY_EXAMPLE[category]}`;
  }

  // 3. Step: 050, or a multiple of 100 from 100 to 900, on three digits.
  if (shape.id === "colorStep" && !STEPS.includes(lastSegment(name))) {
    return "palier hors échelle, attendu : 050, ou de 100 à 900 par pas de 100";
  }

  // 4. Value in the name: ignored when the default value is an alias.
  if (SHAPES_WITH_VALUE.includes(shape.id)) {
    const n = Number(lastSegment(name));
    const raw = variable.valuesByMode[collection.defaultModeId];
    if (typeof raw === "number") {
      const actual = roundNumber(raw);
      if (roundNumber(n) !== actual)
        return `le nom indique ${n}, mais la valeur est de ${formatPx(actual)} px`;
    }
  }

  // 5. Opacity in the name of a transparent color: ignored for an alias.
  if (shape.id === "colorAlpha") {
    const n = Number(lastSegment(name));
    const raw = variable.valuesByMode[collection.defaultModeId];
    if (raw && typeof raw === "object" && !isAlias(raw)) {
      const alpha = "a" in raw ? raw.a : undefined;
      const opacity = Math.round((alpha !== undefined ? alpha : 1) * 100);
      if (n !== opacity)
        return `le nom indique ${n} % d'opacité, mais la valeur est de ${opacity} %`;
    }
  }

  return null;
};

// Text style names, following the Text styles page of the documentation.
const STYLE_FAMILIES = [
  "heading",
  "title",
  "subtitle",
  "body",
  "label",
  "caption",
];

const styleProblem = (rawName: string) => {
  const name = rawName.trim();
  if (!name.split("/").every((p) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(p))) {
    return "s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots";
  }
  const family = name.split("/")[0];
  if (!STYLE_FAMILIES.includes(family)) {
    return `le nom doit commencer par ${STYLE_FAMILIES.slice(0, -1).join(", ")} ou ${STYLE_FAMILIES[STYLE_FAMILIES.length - 1]}`;
  }
  if (family === "heading") {
    return /^heading\/h\d$/.test(name)
      ? null
      : "ce nom ne suit pas le modèle des styles heading, par exemple heading/h2";
  }
  return /^[a-z]+\/\d+\/[a-z0-9]+(-[a-z0-9]+)*$/.test(name)
    ? null
    : `ce nom ne suit pas le modèle des styles ${family}, par exemple ${family}/2/semibold`;
};

// ------------------------------------------------------------------ export

// Reads the Figma file and builds the working state that the following steps
// share: index of collections and variables, initial report, output tree
// per collection, and the conversion functions that rely on them.
type Flag = (list: string[], text: string) => void;
type ReferenceOf = (
  link: VariableAlias | VariableAlias[] | undefined,
) => Promise<string | null>;
type Place = (
  segments: string[],
  token: Token,
  targetTree: TokenTree,
  displayName: string,
) => boolean;
type Convert = (
  raw: VariableValue | undefined,
  variable: Variable,
  type: DtcgType,
  modeId: string,
  extensions: TokenExtensions,
) => Promise<TokenValue | null>;
// What is kept of a collection while the file is analyzed.
interface CollectionInfo {
  collection: VariableCollection;
  tree: TokenTree;
  contextTrees?: Map<string, TokenTree>;
}

const readFile = async () => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const variables = await figma.variables.getLocalVariablesAsync();

  const collectionById = new Map(collections.map((c) => [c.id, c]));
  const variableById = new Map(variables.map((v) => [v.id, v]));

  const report: Report = {
    collections: collections.length,
    variables: variables.length,
    exported: 0,
    textStyles: 0,
    effectStyles: 0,
    conflicts: [],
    missingAliases: [],
    missingModeAliases: [],
    inferredTypes: [],
    sanitizedNames: [],
    externalAliases: [],
    excluded: [],
    noDescription: [],
    naming: [],
    incompleteStyles: [],
  };
  const flag: Flag = (list, text) => {
    if (!list.includes(text)) list.push(text);
  };

  const collectionOf = async (variable: Variable) =>
    collectionById.get(variable.variableCollectionId) ||
    (await figma.variables.getVariableCollectionByIdAsync(
      variable.variableCollectionId,
    ));

  // The token name is the variable name, without the collection: the naming
  // keeps names unique from one collection to another, and a duplicate is reported as a conflict.
  const pathOf = (variable: Variable) => path(variable.name);

  // Figma still returns a deleted variable from its id. Local but
  // absent from the file's variables, it is treated as not found.
  const variableFrom = async (id: string): Promise<Variable | null> => {
    const known = variableById.get(id);
    if (known !== undefined) return known;
    const v = await figma.variables.getVariableByIdAsync(id);
    return v && v.remote ? v : null;
  };

  // DTCG reference of a Figma link to a local variable. Null for a link
  // to another library, BROKEN_LINK for a variable that cannot be found.
  const referenceOf: ReferenceOf = async (link) => {
    const alias = Array.isArray(link) ? link[0] : link;
    if (!isAlias(alias)) return null;
    const target = await variableFrom(alias.id);
    if (!target) return BROKEN_LINK;
    return target.remote ? null : reference(pathOf(target));
  };

  // Concrete value of a variable, following aliases all the way.
  const concreteValue = async (
    variable: Variable,
    modeId: string,
    depth = 0,
  ): Promise<VariableValue | null | undefined> => {
    const c = await collectionOf(variable);
    const candidates = [
      variable.valuesByMode[modeId],
      c ? variable.valuesByMode[c.defaultModeId] : undefined,
      Object.values(variable.valuesByMode)[0],
    ];
    const raw = candidates.find((v) => v !== undefined);
    if (isAlias(raw) && depth < 10) {
      const target = await variableFrom(raw.id);
      return target ? concreteValue(target, modeId, depth + 1) : null;
    }
    return raw;
  };

  // Converts a Figma value into a DTCG value. A local alias becomes a reference.
  // An alias to an external library is resolved to a value: the reference would
  // point at nothing in this file. The link stays traced in the extensions.
  const convert: Convert = async (raw, variable, type, modeId, extensions) => {
    let value: VariableValue | null | undefined = raw;
    if (isAlias(value)) {
      const target = await variableFrom(value.id);
      if (!target) {
        // In the default mode, the token is excluded. In another mode, it stays
        // exported: that mode falls back to the default value (null, no override).
        const c = await collectionOf(variable);
        if (!c || modeId === c.defaultModeId) {
          flag(report.missingAliases, variable.name);
        } else {
          const modeName =
            c.modes.find((m) => m.modeId === modeId)?.name ?? modeId;
          flag(
            report.missingModeAliases,
            `${variable.name}, mode ${modeName} : reprend la valeur du mode par défaut`,
          );
        }
        return null;
      }
      if (!target.remote) return reference(pathOf(target));
      flag(
        report.externalAliases,
        `${variable.name} : pointe vers ${target.name}`,
      );
      // alias is part of the published file format, like nomFigma and typeDeduit.
      if (!extensions.alias) extensions.alias = target.name;
      value = await concreteValue(target, modeId);
      if (value === null || value === undefined) return null;
    }
    // The type of the variable says what Figma returns as its value.
    if (variable.resolvedType === "COLOR") return toColor(value as RGBA);
    if (variable.resolvedType === "FLOAT")
      return numberValue(value as number, type);
    return value as string;
  };

  // Roots of all the token trees produced (one per set, one per modifier
  // context): serialization applies group sorting only from
  // these roots, never inside a $value or a $extensions.
  const groupRoots = new WeakSet<object>();

  // A single tree, all collections and all styles together, only used
  // to detect name conflicts: sets are merged at resolution, so a
  // conflict between two collections is as real as an internal conflict.
  const conflictTree: TokenTree = {};
  const place: Place = (segments, token, targetTree, displayName) => {
    if (!put(conflictTree, segments, token)) {
      report.conflicts.push(displayName);
      return false;
    }
    put(targetTree, segments, token);
    return true;
  };

  // The date is added later, at serialization (timestampedDoc): the analysis
  // is cached and may serve several submissions or downloads.
  const doc: ResolverDoc = {
    name: figma.root.name,
    version: "2025.10",
    $extensions: {
      "fr.axa.canopee": { source: figma.root.name, plugin: VERSION },
    },
    sets: {},
  };

  // One output tree per collection, plus, for each collection with several
  // modes, one tree per mode other than the default: it will only receive the tokens
  // whose value differs there from the default mode.
  const infoByCollection = new Map<string, CollectionInfo>();
  const excludedCollections = new Set<string>();
  for (const c of collections) {
    // The name of a set identifies its whole collection. Once sanitized, "A.B" and
    // "A-B" give the same one, and Styles is reserved for styles: the duplicate
    // collection would overwrite the other. It stays out of the file and is reported as a conflict,
    // which blocks the submission.
    const name = setName(c);
    if (doc.sets[name] || name === SET_STYLES) {
      const problem = doc.sets[name]
        ? `même nom que ${collections.find((other) => setName(other) === name)?.name} dans le code`
        : "nom réservé aux styles de texte et d'effet";
      report.conflicts.push(`Collection ${c.name} : ${problem}`);
      excludedCollections.add(c.id);
      continue;
    }
    const tree: TokenTree = {};
    groupRoots.add(tree);
    doc.sets[name] = { sources: [tree] };
    const info: CollectionInfo = { collection: c, tree };
    if (c.modes.length > 1) {
      info.contextTrees = new Map(
        c.modes
          .filter((m) => m.modeId !== c.defaultModeId)
          .map((m): [string, TokenTree] => [m.modeId, {}]),
      );
    }
    infoByCollection.set(c.id, info);
  }

  const keptVariables = variables.filter(
    (v) => !excludedCollections.has(v.variableCollectionId),
  );
  return {
    variables: keptVariables,
    collectionById,
    report,
    flag,
    doc,
    infoByCollection,
    groupRoots,
    pathOf,
    referenceOf,
    convert,
    place,
  };
};

// Naming of primitives: only the "Primitive…" collections,
// regardless of whether the variable is exported.
const checkPrimitivesNaming = (
  variables: Variable[],
  collectionById: Map<string, VariableCollection>,
  report: Report,
) => {
  for (const variable of variables) {
    const collection = collectionById.get(variable.variableCollectionId);
    if (!collection || !/^primitive/i.test(collection.name)) continue;
    const problem = namingProblem(variable, collection);
    if (problem) report.naming.push(`« ${variable.name} » : ${problem}`);
  }
};

// Naming of text styles, including those that the export excludes afterwards.
const checkStylesNaming = async (report: Report) => {
  for (const style of await figma.getLocalTextStylesAsync()) {
    const problem = styleProblem(style.name);
    if (problem) report.naming.push(`« ${style.name} » : ${problem}`);
  }
};

// Builds the DTCG token of each exportable variable and places it in
// the tree of its collection, plus one token per mode that differs from the
// default mode in the context tree of the matching modifier.
const convertVariables = async (
  variables: Variable[],
  collectionById: Map<string, VariableCollection>,
  infoByCollection: Map<string, CollectionInfo>,
  report: Report,
  flag: Flag,
  pathOf: (variable: Variable) => string[],
  convert: Convert,
  generateDescription: DescriptionGenerator,
  place: Place,
) => {
  for (const variable of variables) {
    const collection = collectionById.get(variable.variableCollectionId);
    const { type, inferred } = inferType(variable);
    if (!type || !collection) {
      const problem =
        variable.resolvedType === "BOOLEAN"
          ? "variable Boolean"
          : !collection
            ? "collection introuvable"
            : "variable String";
      report.excluded.push(`${variable.name} : ${problem}`);
      continue;
    }

    const segments = pathOf(variable);
    if (!segments.length) {
      report.excluded.push(`${variable.name} : nom vide`);
      continue;
    }

    // The keys written in extensions (nomFigma, typeDeduit, alias) are part of the published file format: they keep their names.
    const extensions: TokenExtensions = {};
    if (isSanitized(variable.name)) {
      report.sanitizedNames.push(variable.name);
      extensions.nomFigma = variable.name;
    }
    // A deprecated token no longer has a scope: this is not an omission to report.
    if (inferred) {
      if (deprecation(variable.description) === undefined)
        report.inferredTypes.push(
          `${variable.name} : traité comme ${TYPE_LABEL[type] || type}`,
        );
      extensions.typeDeduit = true;
    }

    const defaultValue = await convert(
      variable.valuesByMode[collection.defaultModeId],
      variable,
      type,
      collection.defaultModeId,
      extensions,
    );
    if (defaultValue === null) continue;

    const info = infoByCollection.get(collection.id);
    if (!info) continue;

    // Value of each other mode, to compare with the default mode once
    // the token is built. The computation also feeds the extensions (external alias).
    const otherModesValues: { modeId: string; value: TokenValue }[] = [];
    if (info.contextTrees) {
      for (const m of collection.modes) {
        if (m.modeId === collection.defaultModeId) continue;
        const v = await convert(
          variable.valuesByMode[m.modeId],
          variable,
          type,
          m.modeId,
          extensions,
        );
        if (v !== null) otherModesValues.push({ modeId: m.modeId, value: v });
      }
    }

    // The generated description comes before the Figma description, joined by a
    // space, except for a deprecated token. Nothing is ever written back to
    // Figma, only to the JSON.
    const isDeprecated = deprecation(variable.description);
    const defaultGenerated = generateDescription(variable, defaultValue);
    const defaultDescription = assembleDescription(
      defaultGenerated,
      variable.description,
      isDeprecated,
    );

    const token: Token = { $type: type, $value: defaultValue };
    if (defaultDescription) token.$description = defaultDescription;
    if (isDeprecated !== undefined) token.$deprecated = isDeprecated;
    if (Object.keys(extensions).length)
      token.$extensions = { "fr.axa.canopee": extensions };

    if (!place(segments, token, info.tree, variable.name)) continue;
    report.exported++;
    if (!defaultDescription) flag(report.noDescription, variable.name);

    for (const { modeId, value } of otherModesValues) {
      if (JSON.stringify(value) !== JSON.stringify(defaultValue)) {
        const contextGenerated = generateDescription(variable, value);
        const contextDescription = assembleDescription(
          contextGenerated,
          variable.description,
          isDeprecated,
        );
        const contextToken: Token = { ...token, $value: value };
        if (contextDescription) contextToken.$description = contextDescription;
        else delete contextToken.$description;
        const contextTree = info.contextTrees?.get(modeId);
        if (contextTree) put(contextTree, segments, contextToken);
      }
    }
  }
};

// Adds text and effect styles in a separate Styles set, if there are any.
const addStyles = async (
  doc: ResolverDoc,
  groupRoots: WeakSet<object>,
  report: Report,
  referenceOf: ReferenceOf,
  place: Place,
  flag: Flag,
) => {
  const stylesTree: TokenTree = {};
  await addTextStyles(stylesTree, report, referenceOf, place, flag);
  await addEffectStyles(stylesTree, report, referenceOf, place, flag);
  if (Object.keys(stylesTree).length) {
    groupRoots.add(stylesTree);
    doc.sets[SET_STYLES] = { sources: [stylesTree] };
  }
};

// One modifier per collection with several modes: the context of the default mode
// is empty, the others only carry the tokens whose value differs. Then
// resolutionOrder, which merges all the sets, then all the modifiers.
const assembleModifiersAndOrder = (
  doc: ResolverDoc,
  infoByCollection: Map<string, CollectionInfo>,
  groupRoots: WeakSet<object>,
) => {
  for (const info of infoByCollection.values()) {
    if (!info.contextTrees) continue;
    if (!doc.modifiers) doc.modifiers = {};
    const c = info.collection;
    const contexts: Record<string, TokenTree[]> = {};
    for (const m of c.modes) {
      if (m.modeId === c.defaultModeId) {
        contexts[m.name] = [];
        continue;
      }
      const modeTree = info.contextTrees.get(m.modeId);
      if (modeTree && Object.keys(modeTree).length) {
        groupRoots.add(modeTree);
        contexts[m.name] = [modeTree];
      } else {
        contexts[m.name] = [];
      }
    }
    doc.modifiers[setName(c)] = {
      default: c.modes.find((m) => m.modeId === c.defaultModeId)?.name,
      contexts,
    };
  }

  const escapePointer = (s: string) =>
    s.replace(/~/g, "~0").replace(/\//g, "~1");
  doc.resolutionOrder = [
    ...Object.keys(doc.sets).map((name) => ({
      $ref: `#/sets/${escapePointer(name)}`,
    })),
    ...(doc.modifiers
      ? Object.keys(doc.modifiers).map((name) => ({
          $ref: `#/modifiers/${escapePointer(name)}`,
        }))
      : []),
  ];
};

// Checks and compares the current Figma file: reading, naming rules,
// conversion of variables into tokens, styles, then assembly of the modifiers
// and of the resolution order. The name states its main use: check and
// compare, the export being only a serialization of the same result.
const analyzeFile = async () => {
  const {
    variables,
    collectionById,
    report,
    flag,
    doc,
    infoByCollection,
    groupRoots,
    pathOf,
    referenceOf,
    convert,
    place,
  } = await readFile();

  const generateDescription = buildGenerator();

  checkPrimitivesNaming(variables, collectionById, report);
  await checkStylesNaming(report);

  await convertVariables(
    variables,
    collectionById,
    infoByCollection,
    report,
    flag,
    pathOf,
    convert,
    generateDescription,
    place,
  );

  await addStyles(doc, groupRoots, report, referenceOf, place, flag);

  assembleModifiersAndOrder(doc, infoByCollection, groupRoots);

  return { doc, report, groupRoots };
};

// ------------------------------------------------------------------ styles

// A style linked to a variable that cannot be found is not exported: its reference
// would point at nothing in the file. It goes into the broken links.
const BROKEN_LINK = "broken-link";

// Fields of the DTCG typography type: the only ones a Figma variable can
// replace with a reference (see boundVariables in addTextStyles).
const TYPOGRAPHY_FIELDS: (keyof TypographyValue)[] = [
  "fontFamily",
  "fontSize",
  "fontWeight",
  "letterSpacing",
  "lineHeight",
];
const isTypographyField = (field: string): field is keyof TypographyValue =>
  TYPOGRAPHY_FIELDS.some((f) => f === field);

// Italic, underline and case: stored in $extensions, only when the
// style uses them. DTCG does not know them, and the code writes them in the CSS
// of components rather than as tokens, so Terrazzo must not see them. Outside
// TYPOGRAPHY_FIELDS: Figma can bind fontStyle to a variable whose
// value is a Figma style name ("Semibold Italic"), not a CSS font-style.
const NON_DTCG_TYPOGRAPHY_FIELDS = [
  "fontStyle",
  "textDecoration",
  "textTransform",
];

const addTextStyles = async (
  stylesTree: TokenTree,
  report: Report,
  referenceOf: ReferenceOf,
  place: Place,
  flag: Flag,
) => {
  for (const style of await figma.getLocalTextStylesAsync()) {
    // No DTCG equivalent: the whole style is excluded, not only the line height.
    const { lineHeight: lh, letterSpacing: ls } = style;
    if (lh.unit !== "PIXELS" && lh.unit !== "PERCENT") {
      report.excluded.push(`${style.name} : interligne automatique`);
      continue;
    }

    const weight = parseWeight(style.fontName.style);
    const value: TypographyValue = {
      fontFamily: style.fontName.family,
      fontSize: dimension(style.fontSize),
      fontWeight: weight === undefined ? style.fontName.style : weight,
      // DTCG only allows px and rem: a percentage is converted into px of the font size.
      letterSpacing:
        ls.unit === "PIXELS"
          ? dimension(ls.value)
          : ls.unit === "PERCENT"
            ? dimension((ls.value / 100) * style.fontSize)
            : dimension(0),
      // Raw lineHeight is a DTCG number: the ratio to the font size.
      lineHeight:
        lh.unit === "PIXELS"
          ? roundNumber(lh.value / style.fontSize)
          : roundNumber(lh.value / 100),
    };
    // Exported anyway, but with a loss: reported as to be fixed, not excluded.
    if (weight === undefined)
      report.incompleteStyles.push(
        `${style.name} : graisse « ${style.fontName.style} » non reconnue, exportée telle quelle`,
      );

    // See NON_DTCG_TYPOGRAPHY_FIELDS. Fields absent by default.
    const nonDtcg: TokenExtensions = {};
    if (/italic/i.test(style.fontName.style)) nonDtcg.fontStyle = "italic";
    else if (/oblique/i.test(style.fontName.style))
      nonDtcg.fontStyle = "oblique";
    if (style.textDecoration === "UNDERLINE")
      nonDtcg.textDecoration = "underline";
    else if (style.textDecoration === "STRIKETHROUGH")
      nonDtcg.textDecoration = "line-through";
    if (style.textCase === "UPPER") nonDtcg.textTransform = "uppercase";
    else if (style.textCase === "LOWER") nonDtcg.textTransform = "lowercase";
    else if (style.textCase === "TITLE") nonDtcg.textTransform = "capitalize";
    else if (
      style.textCase === "SMALL_CAPS" ||
      style.textCase === "SMALL_CAPS_FORCED"
    ) {
      report.incompleteStyles.push(
        `${style.name} : les petites capitales ne sont pas exportées`,
      );
    }

    // A field bound to a variable keeps its reference rather than its value.
    let broken = false;
    for (const [field, link] of Object.entries(style.boundVariables || {})) {
      if (!isTypographyField(field)) continue;
      const ref = await referenceOf(link);
      if (ref === BROKEN_LINK) broken = true;
      else if (ref) value[field] = ref;
    }
    if (broken) {
      flag(report.missingAliases, style.name);
      continue;
    }

    const token: Token = { $type: "typography", $value: value };
    if (style.description) token.$description = style.description;
    const deprecated = deprecation(style.description);
    if (deprecated !== undefined) token.$deprecated = deprecated;
    if (Object.keys(nonDtcg).length)
      token.$extensions = { "fr.axa.canopee": nonDtcg };

    if (
      place(["typography", ...path(style.name)], token, stylesTree, style.name)
    ) {
      report.textStyles++;
      if (!style.description) flag(report.noDescription, style.name);
    }
  }
};

// Mapping between the fields of a Figma effect and those of a DTCG shadow.
type ShadowReferenceField = "color" | "offsetX" | "offsetY" | "blur" | "spread";
const SHADOW_FIELDS: Partial<Record<string, ShadowReferenceField>> = {
  color: "color",
  offsetX: "offsetX",
  offsetY: "offsetY",
  radius: "blur",
  spread: "spread",
};

const addEffectStyles = async (
  stylesTree: TokenTree,
  report: Report,
  referenceOf: ReferenceOf,
  place: Place,
  flag: Flag,
) => {
  for (const style of await figma.getLocalEffectStylesAsync()) {
    const shadows: ShadowValue[] = [];
    let broken = false;
    for (const e of style.effects) {
      if (
        (e.type !== "DROP_SHADOW" && e.type !== "INNER_SHADOW") ||
        e.visible === false
      )
        continue;
      const shadow: ShadowValue = {
        color: toColor(e.color),
        offsetX: dimension(e.offset.x),
        offsetY: dimension(e.offset.y),
        blur: dimension(e.radius),
        spread: dimension(e.spread || 0),
        inset: e.type === "INNER_SHADOW",
      };
      for (const [field, link] of Object.entries(e.boundVariables || {})) {
        const target = SHADOW_FIELDS[field];
        if (!target) continue;
        const ref = await referenceOf(link);
        if (ref === BROKEN_LINK) broken = true;
        else if (ref) shadow[target] = ref;
      }
      shadows.push(shadow);
    }
    if (broken) {
      flag(report.missingAliases, style.name);
      continue;
    }
    if (!shadows.length) {
      report.excluded.push(`${style.name} : effet sans ombre`);
      continue;
    }
    const token: Token = {
      $type: "shadow",
      $value: shadows.length === 1 ? shadows[0] : shadows,
    };
    if (style.description) token.$description = style.description;
    const deprecated = deprecation(style.description);
    if (deprecated !== undefined) token.$deprecated = deprecated;

    if (place(["shadow", ...path(style.name)], token, stylesTree, style.name)) {
      report.effectStyles++;
      if (!style.description) flag(report.noDescription, style.name);
    }
  }
};

// ------------------------------------------------------------------ output

// Order of the DTCG properties of a token, in a group.
const ORDER = ["$type", "$value", "$description", "$deprecated", "$extensions"];
const rank = (k: string) =>
  ORDER.includes(k) ? ORDER.indexOf(k) : ORDER.length;
const isNumeric = (k: string) => /^\d+$/.test(k);

// Order of keys inside a group of tokens: the DTCG properties
// first, then fully numeric keys sorted by value ("050" before
// "100" before "900"), then the others, with a simple string comparison.
// Never used inside a $value or a $extensions, which keep
// the order in which they were built.
const tokenGroupKeys = (node: Record<string, unknown>) => {
  const all = Object.keys(node).filter((k) => node[k] !== undefined);
  const dtcg = all
    .filter((k) => ORDER.includes(k))
    .sort((a, b) => rank(a) - rank(b));
  const numerics = all
    .filter((k) => !ORDER.includes(k) && isNumeric(k))
    .sort((a, b) => Number(a) - Number(b) || a.length - b.length);
  const others = all
    .filter((k) => !ORDER.includes(k) && !isNumeric(k))
    .sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));
  return [...dtcg, ...numerics, ...others];
};

const isSimpleArray = (v: unknown[]) =>
  v.every(
    (e) =>
      typeof e === "number" || typeof e === "string" || typeof e === "boolean",
  );

// Home-made serializer: same format as JSON.stringify(v, null, 2) + '\n', with two
// deliberate differences. First, an array that only contains numbers, strings
// or booleans fits on one line. Second, from a group root
// (a set or a modifier context), keys follow tokenGroupKeys
// rather than the native order of the object, itself distorted by V8, which
// always puts canonical numeric keys first. This group order
// is passed on to the children, except under $value and $extensions, which keep
// their construction order all the way down.
const val = (
  v: unknown,
  depth: number,
  group: boolean,
  roots: WeakSet<object>,
): string => {
  const INDENT = "  ".repeat(depth);
  const INNER_INDENT = "  ".repeat(depth + 1);
  if (Array.isArray(v)) {
    if (!v.length) return "[]";
    if (isSimpleArray(v))
      return "[" + v.map((e) => JSON.stringify(e)).join(", ") + "]";
    return (
      "[\n" +
      v.map((e) => INNER_INDENT + val(e, depth + 1, group, roots)).join(",\n") +
      "\n" +
      INDENT +
      "]"
    );
  }
  if (!isRecord(v)) return JSON.stringify(v);
  const isGroup = group || roots.has(v);
  const keys = isGroup
    ? tokenGroupKeys(v)
    : Object.keys(v).filter((k) => v[k] !== undefined);
  if (!keys.length) return "{}";
  const lines = keys.map((k) => {
    const childGroup = isGroup && k !== "$value" && k !== "$extensions";
    return (
      INNER_INDENT +
      JSON.stringify(k) +
      ": " +
      val(v[k], depth + 1, childGroup, roots)
    );
  });
  return "{\n" + lines.join(",\n") + "\n" + INDENT + "}";
};

const toJson = (doc: ResolverDoc, roots: WeakSet<object>) =>
  val(doc, 0, false, roots) + "\n";

// Fixed name: it says what the file contains and does not depend on the name of the Figma file.
const FILE_NAME = "design-tokens-canopee.resolver.json";

// -------------------------------------------------------------------- diff

// A node of the tree is a token, not a group, if it carries a $value.
const isLeaf = (node: unknown): node is Record<string, unknown> =>
  isRecord(node) && "$value" in node;

// A token of a reference file, flattened. Its type and value come from a JSON
// file: they are inspected before use.
interface FlatToken extends DiffMeta {
  path: string;
  type: unknown;
  value: unknown;
  isDeprecated: boolean;
}

// Flattens a token tree into the given table: path (segments joined
// by "/", like a Figma name) → { path, type, value, isDeprecated }, plus
// modifier and context when meta is provided (a modifier context). The key
// of the table stays composite (path, modifier, context) for uniqueness,
// but path never carries the mode: flattenDoc is the one that needs it
// to tell apart the same path in two different contexts.
const flattenTree = (
  tree: unknown,
  table: Map<string, FlatToken>,
  meta?: { modifier: string; context: string },
) => {
  const visit = (node: unknown, segments: string[]) => {
    if (isLeaf(node)) {
      const path = segments.join("/");
      const key = meta
        ? `${path}\u0000${meta.modifier}\u0000${meta.context}`
        : path;
      // Non-DTCG fields of a text style are compared along with its value,
      // even though they are stored in $extensions.
      let value = node.$value;
      const extensions = isRecord(node.$extensions)
        ? node.$extensions["fr.axa.canopee"]
        : undefined;
      if (
        node.$type === "typography" &&
        isRecord(value) &&
        isRecord(extensions)
      ) {
        const merged = { ...value };
        for (const field of NON_DTCG_TYPOGRAPHY_FIELDS)
          if (extensions[field] !== undefined)
            merged[field] = extensions[field];
        value = merged;
      }
      const token: FlatToken = {
        path,
        type: node.$type,
        value,
        isDeprecated:
          node.$deprecated === true ||
          (typeof node.$deprecated === "string" && node.$deprecated !== ""),
      };
      table.set(
        key,
        meta
          ? { ...token, modifier: meta.modifier, context: meta.context }
          : token,
      );
      return;
    }
    if (!isRecord(node)) return;
    for (const [k, v] of Object.entries(node)) visit(v, [...segments, k]);
  };
  visit(tree, []);
};

// Flattens a whole resolver document: all the sets, then the tokens of the
// modifier contexts, marked with their modifier and their context.
// The first element of a list read from a file, if the list is there.
const firstOf = (list: unknown): unknown =>
  isRecord(list) ? list[0] : undefined;
const recordIn = (container: unknown, key: string): Record<string, unknown> => {
  const found = isRecord(container) ? container[key] : undefined;
  return isRecord(found) ? found : {};
};

const flattenDoc = (doc: unknown) => {
  const table = new Map<string, FlatToken>();
  for (const set of Object.values(recordIn(doc, "sets"))) {
    const source = isRecord(set) ? firstOf(set.sources) : undefined;
    if (source) flattenTree(source, table);
  }
  for (const [modifierName, modifier] of Object.entries(
    recordIn(doc, "modifiers"),
  )) {
    for (const [context, sources] of Object.entries(
      recordIn(modifier, "contexts"),
    )) {
      const source = firstOf(sources);
      if (source)
        flattenTree(source, table, { modifier: modifierName, context });
    }
  }
  return table;
};

// Short label of a composite value (text style or shadow), for an
// added, a removed, a deprecated, or for before/after of a modified:
// "style de texte", "ombre", or "ombre à N couches" for an array of
// several layers. Null for anything that is neither typography nor shadow.
const compositeValueLabel = (type: unknown, value: unknown) => {
  if (type === "typography") return "style de texte";
  if (type === "shadow")
    return Array.isArray(value) ? `ombre à ${value.length} couches` : "ombre";
  return null;
};

// How a value is written in a diff message: uppercase hex for a
// color, French-style number followed by the unit for a dimension or a
// duration, as is for a reference, a number or a string, short label
// for a composite value (see compositeValueLabel), "valeur
// composite" for everything else: no object is ever output as raw JSON.
const formatDiffValue = (type: unknown, value: unknown): string => {
  if (typeof value === "string" && value.startsWith("{")) return value;
  if (type === "color" && isColorValue(value)) return value.hex.toUpperCase();
  if (
    (type === "dimension" || type === "duration") &&
    isRecord(value) &&
    typeof value.value === "number"
  ) {
    return `${formatDecimalFr(value.value, 4)} ${type === "dimension" ? "px" : "ms"}`;
  }
  if (typeof value === "number" || typeof value === "string")
    return String(value);
  return compositeValueLabel(type, value) || "valeur composite";
};

// French label of a sub-field of a composite value.
const FIELD_LABEL: Record<string, string> = {
  fontFamily: "police",
  fontSize: "taille",
  fontWeight: "graisse",
  lineHeight: "interligne",
  letterSpacing: "espacement des lettres",
  fontStyle: "style de police",
  textDecoration: "décoration du texte",
  textTransform: "casse",
  color: "couleur",
  offsetX: "décalage horizontal",
  offsetY: "décalage vertical",
  blur: "flou",
  spread: "étalement",
  inset: "intérieure",
};

// Fields of a DTCG shadow, in the order in which they appear in the token
// (see TYPOGRAPHY_FIELDS above for the text style equivalent).
const SHADOW_TYPE_FIELDS = [
  "color",
  "offsetX",
  "offsetY",
  "blur",
  "spread",
  "inset",
];

// Value of a sub-field in a diff message: reference as is,
// color in uppercase hex, dimension "16 px", boolean "oui" or "non",
// number or string as is, "aucun" for an absent field (non-DTCG
// fields of a text style are optional), "valeur composite" otherwise.
const formatFieldValue = (value: unknown): string => {
  if (value === undefined) return "aucun";
  if (typeof value === "string" && value.startsWith("{")) return value;
  if (isColorValue(value)) return value.hex.toUpperCase();
  if (isRecord(value) && typeof value.value === "number" && value.unit === "px")
    return `${formatDecimalFr(value.value, 4)} px`;
  if (typeof value === "boolean") return value ? "oui" : "non";
  if (typeof value === "number" || typeof value === "string")
    return String(value);
  return "valeur composite";
};

// Sub-properties that differ between two objects, in the order of order:
// [{ field, before, after }]. Ignores properties that are identical on both sides.
const diffObjectFields = (
  order: readonly string[],
  before: unknown,
  after: unknown,
) => {
  const diffs: FieldDiff[] = [];
  for (const field of order) {
    const va = isRecord(before) ? before[field] : undefined;
    const vb = isRecord(after) ? after[field] : undefined;
    if (JSON.stringify(va) === JSON.stringify(vb)) continue;
    diffs.push({
      field: FIELD_LABEL[field] || field,
      before: formatFieldValue(va),
      after: formatFieldValue(vb),
    });
  }
  return diffs;
};

// Detail of the sub-fields of a composite modified entry (text style or shadow),
// when both values are of the same composite type. For a shadow with
// several layers of the same length, one set of fields per layer, prefixed
// "couche N, ". Undefined as soon as the comparison makes no sense: non-composite
// type, missing value, or shadow arrays of different lengths.
const modifiedFields = (
  type: unknown,
  before: unknown,
  after: unknown,
): FieldDiff[] | undefined => {
  if (
    !before ||
    !after ||
    typeof before !== "object" ||
    typeof after !== "object"
  )
    return undefined;
  if (type === "typography") {
    if (Array.isArray(before) || Array.isArray(after)) return undefined;
    const diffs = diffObjectFields(
      [...TYPOGRAPHY_FIELDS, ...NON_DTCG_TYPOGRAPHY_FIELDS],
      before,
      after,
    );
    return diffs.length ? diffs : undefined;
  }
  if (type === "shadow") {
    if (!Array.isArray(before) && !Array.isArray(after)) {
      const diffs = diffObjectFields(SHADOW_TYPE_FIELDS, before, after);
      return diffs.length ? diffs : undefined;
    }
    if (
      Array.isArray(before) &&
      Array.isArray(after) &&
      before.length === after.length
    ) {
      const fields: FieldDiff[] = [];
      before.forEach((layer, i) => {
        for (const d of diffObjectFields(SHADOW_TYPE_FIELDS, layer, after[i]))
          fields.push({ ...d, field: `couche ${i + 1}, ${d.field}` });
      });
      return fields.length ? fields : undefined;
    }
    return undefined;
  }
  return undefined;
};

// Same natural order of numbers as in the output groups ("050"
// before "100" before "900"), compared path segment by path segment.
const compareSegments = (a: string, b: string) => {
  const na = /^\d+$/.test(a),
    nb = /^\d+$/.test(b);
  if (na && nb) return Number(a) - Number(b) || a.length - b.length;
  return a < b ? -1 : a > b ? 1 : 0;
};
const comparePaths = (a: string, b: string) => {
  const sa = a.split("/"),
    sb = b.split("/");
  for (let i = 0; i < Math.max(sa.length, sb.length); i++) {
    const c = compareSegments(sa[i] ?? "", sb[i] ?? "");
    if (c !== 0) return c;
  }
  return 0;
};

// Change level: minor if one or more tokens are added, removed,
// deprecated or change type, otherwise patch if one or more values
// change, otherwise no level. Major never comes out of it: the plugin cannot guess
// a complete redesign, the team ticks it at submission (see submit). Rule
// proposed to the devs, being validated.
const diffLevel = (
  added: DiffEntry[],
  modified: ModifiedEntry[],
  removed: DiffEntry[],
  deprecated: DiffEntry[],
): DiffLevel => {
  if (
    added.length ||
    removed.length ||
    deprecated.length ||
    modified.some((m) => m.typeChange)
  )
    return "minor";
  if (modified.length) return "patch";
  return null;
};

// Next version from a starting version ("1.8.0" or "1.8.0-RC.2",
// the suffix after X.Y.Z is ignored) and a change level. Null without a level.
const nextVersion = (version: string, level: DiffLevel) => {
  if (!level) return null;
  const m = /^(\d+)\.(\d+)\.(\d+)/.exec(version);
  if (!m) return null;
  const x = Number(m[1]),
    y = Number(m[2]),
    z = Number(m[3]);
  if (level === "minor") return `${x}.${y + 1}.0`;
  return `${x}.${y}.${z + 1}`;
};

// Compares the current document with a reference: added, modified (different type
// or value), removed, deprecated (newly $deprecated).
// $description and $extensions are ignored: being generated, they would change with
// every evolution of the plugin. The only exception is the non-DTCG fields of a text
// style, which come from Figma (see flattenTree).
// path never carries the mode; modifier and context qualify a token of a
// modifier context, absent for a set token. added/deprecated
// carry the current value, removed the value of the reference, modified
// both, plus typeChange and, for a composite modified without a type
// change, fields (see modifiedFields). Formatting by formatDiffValue,
// sorting by comparePaths then by context: the display only reads these
// objects. version, if provided, adds nextVersion to the result.
// A modifier context only carries the values that differ from the default
// mode. When a context exists on one side only, one cannot conclude
// that it was added or removed: the mode may simply have joined the default,
// or left it. It is then compared with the base token on the other side, and only
// counts if the two differ. Without a base token on the other side, the
// context really is added or removed.
const buildDiff = (
  currentDoc: unknown,
  referenceDoc: unknown,
  version?: string,
): DiffResult => {
  const current = flattenDoc(currentDoc);
  const reference = flattenDoc(referenceDoc);

  const added: DiffEntry[] = [],
    modified: ModifiedEntry[] = [],
    removed: DiffEntry[] = [],
    deprecated: DiffEntry[] = [];
  const metaOf = (token: FlatToken): DiffMeta =>
    token.modifier !== undefined
      ? { modifier: token.modifier, context: token.context }
      : {};
  const different = (a: FlatToken, b: FlatToken) =>
    a.type !== b.type || JSON.stringify(a.value) !== JSON.stringify(b.value);
  const modifiedEntry = (
    referenceToken: FlatToken,
    currentToken: FlatToken,
    meta: DiffMeta,
  ): ModifiedEntry => {
    const typeChange = referenceToken.type !== currentToken.type;
    const entry: ModifiedEntry = {
      path: currentToken.path,
      ...meta,
      before: formatDiffValue(referenceToken.type, referenceToken.value),
      after: formatDiffValue(currentToken.type, currentToken.value),
      typeChange,
    };
    if (!typeChange) {
      const fields = modifiedFields(
        currentToken.type,
        referenceToken.value,
        currentToken.value,
      );
      if (fields) entry.fields = fields;
    }
    return entry;
  };

  for (const [key, currentToken] of current) {
    const referenceToken = reference.get(key);
    if (!referenceToken) {
      const referenceBase =
        currentToken.modifier !== undefined
          ? reference.get(currentToken.path)
          : undefined;
      if (referenceBase) {
        if (different(referenceBase, currentToken))
          modified.push(
            modifiedEntry(referenceBase, currentToken, metaOf(currentToken)),
          );
      } else {
        added.push({
          path: currentToken.path,
          ...metaOf(currentToken),
          value: formatDiffValue(currentToken.type, currentToken.value),
        });
      }
      continue;
    }
    if (different(referenceToken, currentToken))
      modified.push(
        modifiedEntry(referenceToken, currentToken, metaOf(currentToken)),
      );
    if (currentToken.isDeprecated && !referenceToken.isDeprecated) {
      deprecated.push({
        path: currentToken.path,
        ...metaOf(currentToken),
        value: formatDiffValue(currentToken.type, currentToken.value),
      });
    }
  }
  for (const [key, referenceToken] of reference) {
    if (current.has(key)) continue;
    const currentBase =
      referenceToken.modifier !== undefined
        ? current.get(referenceToken.path)
        : undefined;
    if (currentBase) {
      if (different(referenceToken, currentBase))
        modified.push(
          modifiedEntry(referenceToken, currentBase, metaOf(referenceToken)),
        );
    } else {
      removed.push({
        path: referenceToken.path,
        ...metaOf(referenceToken),
        value: formatDiffValue(referenceToken.type, referenceToken.value),
      });
    }
  }

  const compareContext = (a?: string, b?: string) => {
    const ca = a || "",
      cb = b || "";
    return ca < cb ? -1 : ca > cb ? 1 : 0;
  };
  const byPath = (
    a: DiffMeta & { path: string },
    b: DiffMeta & { path: string },
  ) => comparePaths(a.path, b.path) || compareContext(a.context, b.context);
  added.sort(byPath);
  modified.sort(byPath);
  removed.sort(byPath);
  deprecated.sort(byPath);
  const level = diffLevel(added, modified, removed, deprecated);

  const result: DiffResult = { added, modified, removed, deprecated, level };
  if (version !== undefined) result.nextVersion = nextVersion(version, level);
  const referenceDate = recordIn(
    recordIn(referenceDoc, "$extensions"),
    "fr.axa.canopee",
  ).date;
  if (typeof referenceDate === "string") result.referenceDate = referenceDate;
  return result;
};

// ----------------------------------------------------------------------- dialogue with the UI

// A single error message towards the UI, for all the actions that
// can fail. The context (verification, comparison, submit or
// download) tells the UI where to display it.
const sendError = (e: unknown, context: ErrorContext) => {
  const message = isRecord(e) ? e.message : undefined;
  post({
    type: "error",
    context,
    message: typeof message === "string" && message ? message : String(e),
  });
};

const announceContext = async () => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const variables = await figma.variables.getLocalVariablesAsync();
  // Only text and effect styles are exported: these are the ones counted.
  const styles =
    (await figma.getLocalTextStylesAsync()).length +
    (await figma.getLocalEffectStylesAsync()).length;
  post({
    type: "context",
    file: figma.root.name,
    variables: variables.length,
    styles,
    collections: collections.length,
    repoUrls: repoUrls(REPO),
  });
};

// ------------------------------------------------------------- cached analysis

// Signature of everything that influences the analysis: variables (names, types,
// scopes, values, descriptions, collection), collections (names,
// modes, default mode), and the content of text and effect styles, not
// only their number. Used to detect that a file has changed, both
// for live update and to reuse the last analysis.
const fileSignature = async () => {
  const collections = await figma.variables.getLocalVariableCollectionsAsync();
  const variables = await figma.variables.getLocalVariablesAsync();
  const collectionsData = collections.map((c) => ({
    id: c.id,
    name: c.name,
    modes: c.modes,
    defaultValue: c.defaultModeId,
  }));
  const variablesData = variables.map((v) => ({
    name: v.name,
    type: v.resolvedType,
    scopes: v.scopes,
    values: v.valuesByMode,
    description: v.description,
    collection: v.variableCollectionId,
  }));
  const textStylesData = (await figma.getLocalTextStylesAsync()).map((s) => ({
    name: s.name,
    description: s.description,
    font: s.fontName,
    size: s.fontSize,
    lineHeight: s.lineHeight,
    letterSpacing: s.letterSpacing,
    links: s.boundVariables,
    underline: s.textDecoration,
    textCase: s.textCase,
  }));
  const effectStylesData = (await figma.getLocalEffectStylesAsync()).map(
    (s) => ({
      name: s.name,
      description: s.description,
      effects: s.effects,
    }),
  );
  return JSON.stringify({
    collectionsData,
    variablesData,
    textStylesData,
    effectStylesData,
  });
};

// Adds the export date to the analyzed document, in the same keys (source,
// plugin, date) as before. The analysis itself is cached and may serve
// several submissions or downloads: each one gets its own date,
// set only at serialization, never at analysis.
const timestampedDoc = (doc: ResolverDoc): ResolverDoc => ({
  ...doc,
  $extensions: {
    "fr.axa.canopee": {
      ...doc.$extensions["fr.axa.canopee"],
      date: exportDate(),
    },
  },
});

// Last analysis made, and the signature of the file at the time it was
// made: reused as long as nothing has changed, to analyze only once
// per state of the file rather than twice per action (verification then
// diff…). Submit and download go through
// checkModifications first: a change made just before the click is thus
// shown in the verification and the diff, not only taken into the JSON.
interface Analysis {
  doc: ResolverDoc;
  report: Report;
  groupRoots: WeakSet<object>;
}
let lastAnalysis: Analysis | null = null;
let analysisSignature: string | null = null;
const analyze = async (): Promise<Analysis> => {
  const signature = await fileSignature();
  if (lastAnalysis && signature === analysisSignature) return lastAnalysis;
  lastAnalysis = await analyzeFile();
  analysisSignature = signature;
  return lastAnalysis;
};

// -------------------------------------------------------------- comparison

// Current comparison reference: JSON text and metadata (source,
// fileName, fileDate, version). Updated on every valid 'compare' received,
// to recompute the diff without depending on the UI (live update).
// The reference as the interface sends it, in a 'compare' message.
interface ComparisonReference {
  text: string;
  source: ReferenceSource;
  fileName?: string;
  fileDate?: number;
  version?: string;
}
let currentReference: ComparisonReference | null = null;

// Computes the diff between the current export and a reference, and sends it. Used
// for an explicit 'compare' message as well as for the live update.
const compareAndSend = async (ref: ComparisonReference) => {
  let referenceDoc: unknown;
  try {
    referenceDoc = JSON.parse(ref.text);
    if (!isRecord(referenceDoc) || !referenceDoc.sets)
      throw new Error("invalide");
  } catch (e) {
    post({ type: "diff", error: "Ce fichier n'est pas un export du plugin." });
    return false;
  }
  try {
    const { doc } = await analyze();
    const result = buildDiff(doc, referenceDoc, ref.version);
    const message: DiffResultMessage = {
      type: "diff",
      source: ref.source,
      fileName: ref.fileName,
      ...result,
    };
    if (ref.fileDate !== undefined) message.fileDate = ref.fileDate;
    if (ref.version !== undefined) message.version = ref.version;
    post(message);
  } catch (e) {
    sendError(e, "comparison");
  }
  return true;
};

// -------------------------------------------------------------------- live update

// Result of the verification, with what blocks the submission. changed tells the
// UI that the tokens have changed since the previous verification.
const sendVerification = (report: Report, changed: boolean) =>
  post({
    type: "verification",
    report,
    blocker: submitBlocker(report),
    changed,
  });

// Replays the verification and the diff when the file has changed since the
// last analysis (same signature as the one analyze() uses, see above).
// Exposed through __test (end of file) so that it can be called from the context
// of the test, which has no setInterval to trigger it by itself.
const checkModifications = async () => {
  const signature = await fileSignature();
  if (signature === analysisSignature && lastAnalysis) return;
  await announceContext();
  try {
    const { report } = await analyze();
    sendVerification(report, true);
  } catch (e) {
    sendError(e, "verification");
    return;
  }
  if (currentReference) await compareAndSend(currentReference);
};

// Absent from the test context: live update is only triggered there by hand,
// through an explicit call to checkModifications().
if (typeof setInterval === "function") setInterval(checkModifications, 2000);

// One handler per type of message received from the UI. Each one receives the
// whole message; the keys exactly match the msg.type values. The type makes a
// message type without a handler, or a handler without a message type, an error.
type MessageHandlers = {
  [T in UiToPluginMessage["type"]]: (
    msg: Extract<UiToPluginMessage, { type: T }>,
  ) => void | Promise<void>;
};
const messageHandlers: MessageHandlers = {
  // The comparison with the code is started on the UI side, at the first verification.
  ready: async () => {
    await announceContext();
    try {
      const { report } = await analyze();
      sendVerification(report, false);
    } catch (e) {
      sendError(e, "verification");
    }
  },

  resize: (msg) => {
    if (manualSize) return;
    // No high minimum height: the actions are stuck at the bottom, the window follows the content.
    resizeWindow(
      WIDTH,
      Math.min(Math.max(msg.height, AUTO_HEIGHT_MIN), AUTO_HEIGHT_MAX),
    );
  },

  "resize-manual": async (msg) => {
    const { width, height } = boundManualSize(msg.width, msg.height);
    manualSize = true;
    resizeWindow(width, height);
    try {
      await figma.clientStorage.setAsync(SIZE_KEY, { width, height });
    } catch (e) {
      // Preference not saved: the size stays applied for this session.
    }
  },

  "auto-size": async () => {
    manualSize = false;
    try {
      await figma.clientStorage.deleteAsync(SIZE_KEY);
    } catch (e) {
      // Nothing to do: the preference will simply be written again at the next drag.
    }
    resizeWindow(WIDTH, lastSize.height);
    post({ type: "recompute-height" });
  },

  // Prepares the submission from the current state of Figma: the JSON to paste, the
  // commit message depending on the level of the change against the repo file,
  // and the URL of the GitHub editor. repoReference is the text of the repo file,
  // or null if it is not there yet. redesign says whether the "Refonte complète" checkbox is ticked.
  submit: async (msg) => {
    try {
      await checkModifications();
      const { doc, groupRoots } = await analyze();
      const finalDoc = timestampedDoc(doc);
      // Without a file in the repo, or if it is unreadable, all tokens count as added.
      let repoDoc: unknown = {};
      if (msg.repoReference) {
        try {
          repoDoc = JSON.parse(msg.repoReference) || {};
        } catch (e) {
          /* Unreadable JSON: same as without a file */
        }
      }
      const urls = repoUrls(REPO);
      const url =
        msg.repoReference !== null && msg.repoReference !== undefined
          ? urls.urlEdition
          : urls.urlCreation;
      if (!url) throw new Error("l'emplacement du fichier n'est pas fixé.");
      post({
        type: "submit-ready",
        json: toJson(finalDoc, groupRoots),
        message: commitMessage(
          msg.redesign ? "major" : buildDiff(finalDoc, repoDoc).level,
        ),
        url,
      });
    } catch (e) {
      sendError(e, "submit");
    }
  },

  open: (msg) => {
    figma.openExternal(msg.url);
  },

  compare: async (msg) => {
    // An invalid reference does not replace the current reference: live
    // update would otherwise send the error back at every change.
    const reference: ComparisonReference = {
      text: msg.reference,
      source: msg.source,
      fileName: msg.fileName,
      fileDate: msg.fileDate,
      version: msg.version,
    };
    if (await compareAndSend(reference)) currentReference = reference;
  },

  download: async () => {
    try {
      await checkModifications();
      const { doc, groupRoots } = await analyze();
      post({
        type: "file",
        json: toJson(timestampedDoc(doc), groupRoots),
        file: FILE_NAME,
      });
    } catch (e) {
      sendError(e, "download");
    }
  },
};

// A message of unknown type is ignored.
figma.ui.onmessage = async (msg: UiToPluginMessage) => {
  switch (msg.type) {
    case "ready":
      return messageHandlers.ready(msg);
    case "resize":
      return messageHandlers.resize(msg);
    case "resize-manual":
      return messageHandlers["resize-manual"](msg);
    case "auto-size":
      return messageHandlers["auto-size"](msg);
    case "submit":
      return messageHandlers.submit(msg);
    case "open":
      return messageHandlers.open(msg);
    case "compare":
      return messageHandlers.compare(msg);
    case "download":
      return messageHandlers.download(msg);
    default: {
      const unhandled: never = msg;
      return unhandled;
    }
  }
};

// -------------------------------------------------------------------- test

// Single access point from the test context (npm test): the
// functions it calls directly, and REPO whose properties it changes.
const testHooks = {
  VERSION,
  REPO,
  checkModifications,
  submitBlocker,
  sendError,
  PRIMITIVES_GRAMMAR,
  KNOWN_CATEGORIES,
  CATEGORY_EXAMPLE,
  STEPS,
  STYLE_FAMILIES,
  STYLE_PHRASES,
  matchingShape,
  styleProblem,
};

declare global {
  var __test: typeof testHooks;
}
// Read by the tests through the vm context, never by Figma.
globalThis.__test = testHooks;
