// Canopée, composants.
// Exports the JSON of a Figma component, in the format described in
// ai-ready-docs/b2c/composants/format-json-composant.md (AXA repo, ai-ready-docs branch). Built by Vite into dist/code.js.
// Derived from the Component as Data kit (Alexis Vaysse, MIT license).
//
// Organization: the extraction core sits between the two markers START and END.
// It depends only on the figma object, never on the interface or the network: the script
// scripts/build-bridge.mjs copies it as is into a script for figma_execute.
// Everything outside the markers talks to the plugin interface, computes the component
// version and reads the doc rules and the published Canopée versions from GitHub.

import type {
  Api,
  ComparableSheet,
  Config,
  Control,
  Index,
  IndexEntry,
  Issue,
  IssueDetail,
  IssueLocation,
  Json,
  LayerStyles,
  Meta,
  Override,
  Sheet,
  SheetLike,
  SheetVariant,
  Slot,
  Styles,
  Tree,
  TreeNode,
  VariantStyles,
  When,
} from "./types";
import type { Layer, ParentLayer } from "./layer";
import type {
  Card,
  PluginToUiMessage,
  Sentence,
  Summary,
  UiToPluginMessage,
  VersionView,
} from "./messages";

// Every message to the interface goes through here, typed.
const post = (message: PluginToUiMessage): void =>
  figma.ui.postMessage(message);

// >>> START EXTRACTION
const VERSION = "0.4.44";
const FORMAT = "0.4";
// The library written in the JSON. The Figma file name does not fit: in a Figma
// branch, it is the name of the branch. To review for the B2B components.
const LIBRARY = "B2C";
// The template pages of the library (02-composants.md): each one gives the level written
// in the JSON and the mention that opens the template description.
interface TemplatePage {
  page: string;
  level: string;
  mention: string;
}
const TEMPLATE_PAGES: TemplatePage[] = [
  { page: "Templates - Blocks", level: "block", mention: "Template de bloc." },
  {
    page: "Templates - Sections",
    level: "section",
    mention: "Template de section.",
  },
  { page: "Templates - Pages", level: "page", mention: "Template de page." },
];

// ------------------------------------------------------------ AXA nomenclature
// Order of the properties in the panel (03-proprietes.md): variants, booleans,
// texts, instance swaps, slots, then those that start with an underscore.
// Within each group, the order of the nomenclature tables, then the properties
// specific to the component in Figma order.
const GROUPS: Record<string, number> = {
  VARIANT: 0,
  BOOLEAN: 1,
  TEXT: 2,
  INSTANCE_SWAP: 3,
  SLOT: 4,
};
const ORDER: string[][] = [
  [
    "state",
    "disabled",
    "open",
    "selected",
    "current",
    "filled",
    "checked",
    "loading",
    "status",
    "hierarchy",
    "tone",
    "colorScheme",
    "size",
    "type",
    "breakpoint",
    "orientation",
    "placement",
    "first",
    "last",
    "even",
    "sort",
    "level",
  ],
  ["required"],
  [
    "label",
    "title",
    "subtitle",
    "description",
    "caption",
    "helper",
    "message",
    "placeholder",
    "value",
  ],
  ["icon", "leftIcon", "rightIcon"],
  ["children", "header", "actions"],
];
// ORDER, FIXED_VALUES, TRUE_FALSE_VARIANTS and SYNONYMS are the embedded copy of the
// Properties page. The plugin replaces them at launch with what it reads in the doc (loadRules).
// Values imposed by the nomenclature for some variants.
const FIXED_VALUES: Record<string, string[]> = {
  state: ["default", "hover", "focus", "press"],
  size: ["x-small", "small", "medium", "large", "x-large"],
  hierarchy: ["primary", "secondary", "tertiary"],
  tone: ["neutral", "information", "success", "warning", "error"],
  orientation: ["horizontal", "vertical"],
  placement: ["top", "bottom", "left", "right", "center"],
  sort: ["none", "ascending", "descending"],
  level: ["1", "2", "3", "4"],
};
const TRUE_FALSE_VARIANTS: Record<string, string[]> = {
  disabled: ["true", "false"],
  open: ["true", "false"],
  selected: ["true", "false"],
  current: ["true", "false"],
  filled: ["true", "false"],
  loading: ["true", "false"],
  checked: ["true", "false", "mixed"],
  first: ["true", "false"],
  last: ["true", "false"],
  even: ["true", "false"],
};
// Names not to use, with what to write instead.
const SYNONYMS: Record<string, string> = {
  variant: "hierarchy",
  mode: "tone",
  invalid: "tone",
  theme: "_theme",
};
// Order of the axes for grouping overrides: structural first, state last.
const PRIORITY = [
  "type",
  "hierarchy",
  "tone",
  "colorScheme",
  "size",
  "breakpoint",
  "orientation",
  "placement",
  "level",
  "first",
  "last",
  "even",
  "sort",
  "filled",
  "checked",
  "selected",
  "open",
  "current",
  "loading",
  "status",
  "state",
  "disabled",
];
const DEFAULT_NAME =
  /^(frame|group|rectangle|ellipse|vector|line|polygon|star|union|subtract|intersect|exclude|boolean|component|instance|slot|section|image|text|layer)[ -]?\d*$/i;
// Prefixes of the working copies of a component: the component name is what follows.
const COPY_PREFIXES = ["Test/", "Retour/", "IA/"];
const RUNTIME_STATES = ["hover", "focus", "press", "pressed", "active"];
const LEVELS = ["error", "warning", "info"];
// Sizing of a layer in Figma, and its name in the JSON.
const SIZINGS: Record<string, string> = {
  FIXED: "fixed",
  HUG: "hug",
  FILL: "fill",
};
const ATTRIBUTES: Record<string, string> = {
  visible: "visible",
  characters: "text",
  mainComponent: "component",
};

// >>> START RULES
// The format rules, written once: scripts/build-round-trip.mjs copies this block into
// the rebuild script. Pure functions, nothing else from the plugin.

// A value that is an object with named fields.
function isRecord(x: unknown): x is Record<string, unknown> {
  return !!x && typeof x === "object" && !Array.isArray(x);
}

// An override targets a variant when each key of its when equals the value of the variant,
// or contains it when the when gives a list of values.
function matches(when: When | undefined, cfg: Config): boolean {
  const w = when || {};
  return Object.keys(w).every((k) => {
    const wanted = w[k];
    return Array.isArray(wanted)
      ? wanted.indexOf(cfg[k]) >= 0
      : wanted === cfg[k];
  });
}

// Styles of a variant: the default without its when, then each override that targets it.
// A field set to null is removed, an emptied layer disappears.
function effectiveStyles(
  styles: Partial<Styles> | undefined,
  cfg: Config,
): VariantStyles {
  const copy = <T>(x: T): T => JSON.parse(JSON.stringify(x));
  const eff: VariantStyles = {};
  const d = (styles && styles.default) || {};
  for (const c of Object.keys(d))
    if (c !== "when" && d[c] && typeof d[c] === "object") eff[c] = copy(d[c]);
  for (const o of (styles && styles.overrides) || []) {
    if (!matches(o.when, cfg)) continue;
    const layers = o.styles || {};
    for (const c of Object.keys(layers)) {
      const fields = layers[c] || {};
      for (const f of Object.keys(fields)) {
        const v = fields[f];
        if (v === null) {
          if (eff[c]) delete eff[c][f];
        } else {
          eff[c] = eff[c] || {};
          eff[c][f] = copy(v);
        }
      }
    }
  }
  for (const c of Object.keys(eff))
    if (!Object.keys(eff[c]).length) delete eff[c];
  return eff;
}

// Layer tree of a variant. A tree that carries configs only applies to the variants
// listed, and takes precedence over the choice by when. Otherwise, the most specific when wins.
function applicableTree(trees: Tree[], cfg: Config): Tree | null {
  const c = canonical(cfg);
  const list = trees.find(
    (t) => t.configs && t.configs.some((x) => canonical(x) === c),
  );
  if (list) return list;
  let best: Tree | null = null;
  for (const t of trees) {
    if (t.configs || !matches(t.when, cfg)) continue;
    if (!best || Object.keys(t.when).length > Object.keys(best.when).length)
      best = t;
  }
  return best;
}

// Name in kebab-case: leftIcon gives left-icon.
function kebab(s: unknown): string {
  return String(s)
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .toLowerCase();
}

// Canonical serialization: sorted keys, and an absent value is distinct from any value.
function canonical(x: unknown): string {
  if (x === undefined) return "\u0000absent";
  if (Array.isArray(x)) return "[" + x.map(canonical).join(",") + "]";
  if (isRecord(x))
    return (
      "{" +
      Object.keys(x)
        .sort()
        .map((k) => JSON.stringify(k) + ":" + canonical(x[k]))
        .join(",") +
      "}"
    );
  return JSON.stringify(x);
}
// <<< END RULES

const camelOK = (s: string): boolean => /^[a-z][a-zA-Z0-9]*$/.test(s);
const kebabOK = (s: string): boolean => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s);
// Only Figma's internal #id suffix is removed, the name stays the designer's.
// Name of a component without the prefix of its working copy (the first one found).
const withoutCopyPrefix = (name: unknown): string => {
  const n = String(name);
  const p = COPY_PREFIXES.find((x) => n.indexOf(x) === 0);
  return p ? n.slice(p.length) : n;
};
const clean = (k: unknown): string =>
  String(k)
    .replace(/#\d+:\d+$/, "")
    .trim();
const rounded = <T>(x: T): T | number =>
  typeof x === "number" ? Math.round(x * 100) / 100 : x;
const alphaOrder = (a: string, b: string): number =>
  a < b ? -1 : a > b ? 1 : 0;

// Name of the component an instance points to: the variant set when there is one.
const componentName = (n: Layer | null | undefined): string | null => {
  if (!n) return null;
  if (n.parent && n.parent.type === "COMPONENT_SET") return n.parent.name;
  const name = String(n.name);
  return name.indexOf("/") > 0 && name.indexOf("=") > 0
    ? name.split("/")[0].trim()
    : name;
};

// Context of an extraction: caches, index of the tokens used and read errors.
// extractDetail creates it, then passes it to every function that reads or writes it.
// A variant, as captured: its root, then one candidate per layer.
interface Candidate {
  nm: string;
  es: LayerStyles;
  id: string;
  vec?: LayerStyles;
  vecId?: string;
}
interface Capture {
  id: string;
  root: LayerStyles;
  cand: Candidate[];
  modes: Record<string, string>;
}
interface Context {
  vars: Record<string, { name: string; entry: IndexEntry } | null>;
  tokens: Index;
  textStyles: Index;
  components: Index;
  modeCollections: Index;
  ids: Map<Capture, Record<string, string>>;
  collisions: Set<string>;
  notFound: Set<string>;
  errors: { where: string; message: string }[];
  libraries: Record<string, string> | undefined;
  mainComponents: Map<string, Layer | null>;
}
const newContext = (): Context => ({
  vars: {},
  tokens: {},
  textStyles: {},
  components: {},
  modeCollections: {},
  ids: new Map(),
  collisions: new Set(),
  notFound: new Set(),
  errors: [],
  libraries: undefined,
  mainComponents: new Map(),
});

// The message of a failure, whatever its kind (an error of another realm included).
const messageOf = (e: unknown): string =>
  String((isRecord(e) && e.message) || e);

// An instance: the only layer that points to a main component.
type InstanceLayer = Layer & { getMainComponentAsync(): Promise<Layer | null> };
const isInstance = (n: Layer): n is InstanceLayer =>
  n.type === "INSTANCE" && typeof n.getMainComponentAsync === "function";
// The layers below a layer, or none if the layer cannot have any.
const findAll = (n: Layer, test: (x: Layer) => boolean): Layer[] =>
  n.findAll ? n.findAll(test) : [];
const findOne = (n: Layer, test: (x: Layer) => boolean): Layer | null =>
  n.findOne ? n.findOne(test) : null;

// A read failed: the part of the JSON it was meant to fill is incomplete. The error
// becomes an issue of level error (rule read-failed) instead of disappearing.
function readError(
  ctx: Context,
  location: string,
  e: unknown,
  extra?: string,
): void {
  const msg = messageOf(e).replace(/\.+$/, "");
  ctx.errors.push({
    where: location,
    message:
      "Lecture impossible : " +
      msg +
      ". " +
      (extra ? extra + " " : "") +
      "Cette partie du JSON est incomplète.",
  });
}

// Registration in a { library, key } index: for equal names, the smallest key is kept,
// so that the reading order does not change the file. Figma does not give the library
// of a remote style or component: it is then null.
function register(index: Index, name: string, entry: IndexEntry): void {
  const e = index[name];
  if (!e || (entry.key || "") < (e.key || "")) index[name] = entry;
}
// Main component of an instance, read once per extraction and per node id.
async function readMainComponent(
  ctx: Context,
  n: InstanceLayer,
): Promise<Layer | null> {
  if (!n.id) return n.getMainComponentAsync();
  if (!ctx.mainComponents.has(n.id))
    ctx.mainComponents.set(n.id, await n.getMainComponentAsync());
  return ctx.mainComponents.get(n.id) || null;
}
const nodeLibrary = (n: { remote?: boolean } | null): string | null =>
  n && n.remote ? null : LIBRARY;

// A component (or a variant set) quoted by its name in the components index.
function registerComponent(ctx: Context, n: Layer | null): string | null {
  if (!n || !n.key) return null;
  const name = componentName(n);
  if (name === null) return null;
  register(ctx.components, name, { library: nodeLibrary(n), key: n.key });
  return name;
}

async function libraryName(
  ctx: Context,
  coll: VariableCollection | null,
): Promise<string | null> {
  if (!coll) return null;
  if (!coll.remote) return LIBRARY;
  if (ctx.libraries === undefined) {
    const libraries: Record<string, string> = {};
    ctx.libraries = libraries;
    try {
      const list =
        await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
      for (const c of list) libraries[c.key] = c.libraryName;
    } catch (e) {
      // The library name is optional: without it, library is null.
    }
  }
  return ctx.libraries[coll.key] || null;
}

// Name of the variable, and registration in the tokens index. Two variables with the same
// name and different keys are a duplicate: the smallest key is kept, and it is reported.
async function readToken(ctx: Context, id: string): Promise<string | null> {
  if (!id) return null;
  let m = ctx.vars[id];
  if (m === undefined) {
    m = null;
    try {
      const v = await figma.variables.getVariableByIdAsync(id);
      if (v) {
        const coll = await figma.variables.getVariableCollectionByIdAsync(
          v.variableCollectionId,
        );
        const entry: IndexEntry = {};
        const lib = await libraryName(ctx, coll);
        if (lib) entry.library = lib;
        if (coll && coll.name) entry.collection = coll.name;
        if (v.key) entry.key = v.key;
        m = { name: v.name, entry };
        const existing = ctx.tokens[v.name];
        if (!existing) ctx.tokens[v.name] = entry;
        else if ((existing.key || "") !== (entry.key || "")) {
          ctx.collisions.add(v.name);
          if ((entry.key || "") < (existing.key || ""))
            ctx.tokens[v.name] = entry;
        }
      }
    } catch (e) {
      readError(
        ctx,
        "tokens",
        e,
        "La variable " +
          id +
          " n'a pas pu être lue : la valeur reliée est écrite en brut.",
      );
    }
    ctx.vars[id] = m;
  }
  return m ? m.name : null;
}

// Value of a numeric property: the name of the bound variable, otherwise the raw value.
// What a style field holds: the name of a variable, a raw value, or a paint that is not handled.
type Ref =
  | { token: string }
  | { raw: number | string | undefined }
  | { unsupported: string };

async function readValue(
  ctx: Context,
  node: Layer,
  fields: string[],
  raw: number | undefined,
): Promise<Ref> {
  const bv = node.boundVariables;
  if (bv) {
    for (const c of fields) {
      const id = aliasId(bv[c]);
      if (id) {
        const n = await readToken(ctx, id);
        if (n) return { token: n };
      }
    }
  }
  return { raw: rounded(raw) };
}

// The variable a field is bound to: the id of its alias (a list of aliases, one per paint, has none).
const aliasId = (b: unknown): string | undefined =>
  isRecord(b) && typeof b.id === "string" && b.id ? b.id : undefined;

const hex2 = (x: number): string =>
  ("0" + Math.round(x * 255).toString(16)).slice(-2);
const hex = (c: RGB, a?: number): string =>
  "#" +
  hex2(c.r) +
  hex2(c.g) +
  hex2(c.b) +
  (a !== undefined && a < 1 ? hex2(a) : "");

// Color of the first visible paint: token, or raw. Gradients and images are reported.
async function readPaint(
  ctx: Context,
  node: Layer,
  field: "fills" | "strokes",
): Promise<Ref | null> {
  const paints = node[field];
  if (!paints || paints === figma.mixed || !paints.length) return null;
  const p = paints[0];
  if (!p || p.visible === false) return null;
  if (p.type !== "SOLID") return { unsupported: p.type };
  const links: string[] = [];
  const bound = node.boundVariables && node.boundVariables[field];
  const first = Array.isArray(bound) ? aliasId(bound[0]) : undefined;
  if (first) links.push(first);
  const color = aliasId(p.boundVariables && p.boundVariables.color);
  if (color) links.push(color);
  for (const l of links) {
    const n = await readToken(ctx, l);
    if (n) return { token: n };
  }
  const a =
    (typeof p.opacity === "number" ? p.opacity : 1) *
    ("a" in p.color && typeof p.color.a === "number" ? p.color.a : 1);
  return { raw: hex(p.color, a).toUpperCase() };
}

async function readEffects(ctx: Context, node: Layer): Promise<Json[] | null> {
  if (!node.effects || !node.effects.length) return null;
  const out: Json[] = [];
  for (const e of node.effects) {
    if (
      e.visible === false ||
      (e.type !== "DROP_SHADOW" && e.type !== "INNER_SHADOW")
    )
      continue;
    const ef: Record<string, Json | undefined> = {
      type: e.type === "DROP_SHADOW" ? "shadow" : "inner-shadow",
      radius: rounded(e.radius),
    };
    if (e.color) {
      let col: Ref | null = null;
      const b = e.boundVariables && e.boundVariables.color;
      if (b && b.id) {
        const n = await readToken(ctx, b.id);
        if (n) col = { token: n };
      }
      ef.color = col || { raw: hex(e.color, e.color.a).toUpperCase() };
    }
    if (e.offset)
      ef.offset = { x: rounded(e.offset.x), y: rounded(e.offset.y) };
    if (typeof e.spread === "number" && e.spread) ef.spread = rounded(e.spread);
    out.push(ef);
  }
  return out.length ? out : null;
}

// Sizing of a layer: sizingH and sizingV, with the width or height of a fixed size.
// sparse: without the hug layers, the Figma default.
async function readSizing(
  ctx: Context,
  node: Layer,
  sparse: boolean,
): Promise<Record<string, Json | undefined>> {
  const lay: Record<string, Json | undefined> = {};
  if (
    node.layoutSizingHorizontal &&
    (!sparse || node.layoutSizingHorizontal !== "HUG")
  ) {
    lay.sizingH =
      SIZINGS[node.layoutSizingHorizontal] ||
      String(node.layoutSizingHorizontal).toLowerCase();
    if (
      node.layoutSizingHorizontal === "FIXED" &&
      typeof node.width === "number"
    )
      lay.width = await readValue(ctx, node, ["width"], node.width);
  }
  if (
    node.layoutSizingVertical &&
    (!sparse || node.layoutSizingVertical !== "HUG")
  ) {
    lay.sizingV =
      SIZINGS[node.layoutSizingVertical] ||
      String(node.layoutSizingVertical).toLowerCase();
    if (
      node.layoutSizingVertical === "FIXED" &&
      typeof node.height === "number"
    )
      lay.height = await readValue(ctx, node, ["height"], node.height);
  }
  return lay;
}

// Visual styles of a layer. sparse: for a sub-element, only what matters.
async function readVisualStyles(
  ctx: Context,
  node: Layer,
  sparse: boolean,
  location: string,
): Promise<LayerStyles> {
  const s: LayerStyles = {};
  try {
    const bg = await readPaint(ctx, node, "fills");
    if (bg) s.background = bg;
    const st = await readPaint(ctx, node, "strokes");
    if (st) {
      s.stroke = st;
      if (typeof node.strokeWeight === "number")
        s.strokeWeight = await readValue(
          ctx,
          node,
          ["strokeWeight", "strokeTopWeight"],
          node.strokeWeight,
        );
      else if (
        "strokeTopWeight" in node &&
        typeof node.strokeTopWeight === "number"
      ) {
        s.strokeWeights = {
          top: await readValue(
            ctx,
            node,
            ["strokeTopWeight"],
            node.strokeTopWeight,
          ),
          right: await readValue(
            ctx,
            node,
            ["strokeRightWeight"],
            node.strokeRightWeight,
          ),
          bottom: await readValue(
            ctx,
            node,
            ["strokeBottomWeight"],
            node.strokeBottomWeight,
          ),
          left: await readValue(
            ctx,
            node,
            ["strokeLeftWeight"],
            node.strokeLeftWeight,
          ),
        };
      }
      if (node.strokeAlign)
        s.strokeAlign = String(node.strokeAlign).toLowerCase();
    }
    if (typeof node.opacity === "number" && node.opacity < 1)
      s.opacity = Math.round(node.opacity * 100) / 100;
    if (typeof node.cornerRadius === "number") {
      if (!sparse || node.cornerRadius > 0)
        s.radius = await readValue(
          ctx,
          node,
          ["cornerRadius", "topLeftRadius"],
          node.cornerRadius,
        );
    } else {
      const c: (
        | "topLeftRadius"
        | "topRightRadius"
        | "bottomRightRadius"
        | "bottomLeftRadius"
      )[] = [
        "topLeftRadius",
        "topRightRadius",
        "bottomRightRadius",
        "bottomLeftRadius",
      ];
      if (
        c.every((k) => typeof node[k] === "number") &&
        c.some((k) => (node[k] ?? 0) > 0)
      ) {
        s.radius = {
          topLeft: await readValue(
            ctx,
            node,
            ["topLeftRadius"],
            node.topLeftRadius,
          ),
          topRight: await readValue(
            ctx,
            node,
            ["topRightRadius"],
            node.topRightRadius,
          ),
          bottomRight: await readValue(
            ctx,
            node,
            ["bottomRightRadius"],
            node.bottomRightRadius,
          ),
          bottomLeft: await readValue(
            ctx,
            node,
            ["bottomLeftRadius"],
            node.bottomLeftRadius,
          ),
        };
      }
    }
    if (
      "paddingTop" in node &&
      (!sparse ||
        node.paddingTop ||
        node.paddingRight ||
        node.paddingBottom ||
        node.paddingLeft)
    ) {
      s.padding = {
        top: await readValue(ctx, node, ["paddingTop"], node.paddingTop),
        right: await readValue(ctx, node, ["paddingRight"], node.paddingRight),
        bottom: await readValue(
          ctx,
          node,
          ["paddingBottom"],
          node.paddingBottom,
        ),
        left: await readValue(ctx, node, ["paddingLeft"], node.paddingLeft),
      };
    }
    if (
      "itemSpacing" in node &&
      typeof node.itemSpacing === "number" &&
      (!sparse ||
        (node.layoutMode && node.layoutMode !== "NONE" && node.itemSpacing))
    )
      s.gap = await readValue(ctx, node, ["itemSpacing"], node.itemSpacing);
    try {
      const lay: Record<string, Json | undefined> = {};
      if (node.layoutMode === "HORIZONTAL") lay.direction = "row";
      else if (node.layoutMode === "VERTICAL") lay.direction = "column";
      if (lay.direction) {
        const A: Record<string, string> = {
          MIN: "start",
          CENTER: "center",
          MAX: "end",
          SPACE_BETWEEN: "space-between",
          BASELINE: "baseline",
        };
        if (node.primaryAxisAlignItems && node.primaryAxisAlignItems !== "MIN")
          lay.mainAlign =
            A[node.primaryAxisAlignItems] ||
            String(node.primaryAxisAlignItems).toLowerCase();
        if (node.counterAxisAlignItems && node.counterAxisAlignItems !== "MIN")
          lay.crossAlign =
            A[node.counterAxisAlignItems] ||
            String(node.counterAxisAlignItems).toLowerCase();
        if (node.layoutWrap === "WRAP") lay.wrap = true;
      }
      if (!sparse && typeof node.clipsContent === "boolean")
        lay.clip = node.clipsContent;
      if (node.layoutPositioning === "ABSOLUTE") {
        lay.absolute = true;
        lay.x = rounded(node.x);
        lay.y = rounded(node.y);
        if (node.constraints)
          lay.constraints = {
            horizontal: String(node.constraints.horizontal).toLowerCase(),
            vertical: String(node.constraints.vertical).toLowerCase(),
          };
      }
      const limits: ("minWidth" | "maxWidth" | "minHeight" | "maxHeight")[] = [
        "minWidth",
        "maxWidth",
        "minHeight",
        "maxHeight",
      ];
      for (const mk of limits)
        if (typeof node[mk] === "number")
          lay[mk] = await readValue(ctx, node, [mk], node[mk]);
      Object.assign(lay, await readSizing(ctx, node, sparse));
      if (Object.keys(lay).length) s.layout = lay;
    } catch (e) {
      readError(ctx, location, e);
    }
    const fx = await readEffects(ctx, node);
    if (fx) s.effects = fx;
  } catch (e) {
    readError(ctx, location, e);
  }
  return s;
}

// Text: color, then the text style when there is one, otherwise the detailed typography.
async function readTextStyles(
  ctx: Context,
  t: Layer,
  location: string,
): Promise<LayerStyles> {
  const s: LayerStyles = {};
  try {
    const col = await readPaint(ctx, t, "fills");
    if (col) s.textColor = col;
    let style: string | null = null;
    const id = t.textStyleId;
    if (id && id !== figma.mixed) {
      try {
        const st = await figma.getStyleByIdAsync(id);
        if (st) {
          style = st.name;
          if (st.key)
            register(ctx.textStyles, st.name, {
              library: nodeLibrary(st),
              key: st.key,
            });
        }
      } catch (e) {
        readError(ctx, location, e);
      }
    }
    if (style) s.textStyle = style;
    else {
      const ty: Record<string, Json | undefined> = {};
      if (t.fontName && t.fontName !== figma.mixed) {
        ty.fontFamily = t.fontName.family;
        ty.fontStyle = t.fontName.style;
      }
      if (typeof t.fontSize === "number") ty.fontSize = t.fontSize;
      if (
        t.lineHeight &&
        t.lineHeight !== figma.mixed &&
        t.lineHeight.unit &&
        t.lineHeight.unit !== "AUTO"
      )
        ty.lineHeight = t.lineHeight.value;
      if (
        t.letterSpacing &&
        t.letterSpacing !== figma.mixed &&
        t.letterSpacing.value
      )
        ty.letterSpacing =
          t.letterSpacing.unit === "PERCENT"
            ? t.letterSpacing.value + "%"
            : t.letterSpacing.value;
      if (t.textCase && t.textCase !== figma.mixed && t.textCase !== "ORIGINAL")
        ty.textCase = String(t.textCase).toLowerCase();
      if (
        t.textDecoration &&
        t.textDecoration !== figma.mixed &&
        t.textDecoration !== "NONE"
      )
        ty.textDecoration = String(t.textDecoration).toLowerCase();
      if (Object.keys(ty).length) s.typography = ty;
    }
    if (t.textAlignHorizontal && t.textAlignHorizontal !== "LEFT")
      s.textAlign = String(t.textAlignHorizontal).toLowerCase();
    // sizing: only what differs from the Figma defaults (hug, top)
    const lay = await readSizing(ctx, t, true);
    if (t.textAlignVertical && t.textAlignVertical !== "TOP")
      lay.textAlignVertical = String(t.textAlignVertical).toLowerCase();
    if (Object.keys(lay).length) s.layout = lay;
  } catch (e) {
    readError(ctx, location, e);
  }
  return s;
}

// Color of an icon: the first vector of the instance, when its color is bound
// to a variable or overridden. Without an override, it is the original color of the icon, not a choice.
async function instanceVector(
  ctx: Context,
  ins: Layer,
  location: string,
): Promise<{ styles: LayerStyles; id: string } | null> {
  try {
    const v = findOne(
      ins,
      (n) => n.type === "VECTOR" || n.type === "BOOLEAN_OPERATION",
    );
    if (!v) return null;
    const bg = await readPaint(ctx, v, "fills");
    if (!bg) return null;
    if ("token" in bg) return { styles: { background: bg }, id: v.id };
    const ov = (ins.overrides || []).some(
      (o) => o.id === v.id && (o.overriddenFields || []).indexOf("fills") >= 0,
    );
    return ov ? { styles: { background: bg }, id: v.id } : null;
  } catch (e) {
    readError(ctx, location, e);
    return null;
  }
}

// ------------------------------------------------------------ reading the component
// The layers of the component itself, in tree order. We do not go down into instances:
// their inside is described in their own sheet.
function collectLayers(root: Layer): Layer[] {
  const out: Layer[] = [];
  const rec = (n: Layer): void => {
    for (const c of n.children || []) {
      out.push(c);
      if (c.type !== "INSTANCE" && c.children && c.children.length) rec(c);
    }
  };
  rec(root);
  return out;
}

const readConfig = (name: unknown): Config => {
  const d: Config = {};
  for (const part of String(name).split(",")) {
    const i = part.indexOf("=");
    if (i > 0) d[part.slice(0, i).trim()] = part.slice(i + 1).trim();
  }
  return d;
};

function propertyRank(name: string, type: string): number[] {
  if (name.charAt(0) === "_") return [5, 0];
  const g = GROUPS[type] === undefined ? 4 : GROUPS[type];
  const i = ORDER[g].indexOf(name);
  return [g, i === -1 ? 999 : i];
}

// Prepares what the check and the extraction share: sorted properties, variants,
// layers of each variant, and for each property the layers it drives.
type PropDef = ComponentPropertyDefinitions[string];
interface PropInfo {
  key: string;
  name: string;
  def: PropDef;
  i: number;
  rank: number[];
}
interface Prep {
  target: Layer;
  isSet: boolean;
  defs: ComponentPropertyDefinitions;
  variants: Layer[];
  props: PropInfo[];
  nodes: Layer[][];
  refs: Record<string, Control[]>;
  axes: string[];
}
function prepare(target: Layer): Prep {
  const isSet = target.type === "COMPONENT_SET";
  const defs = target.componentPropertyDefinitions || {};
  const variants = isSet
    ? (target.children || []).filter((c) => c.type === "COMPONENT")
    : [target];
  if (!variants.length) throw new Error("Ce composant n'a aucune variante.");
  const nodes = variants.map((v) => collectLayers(v));
  // Figma does not give the order of the panel. Within one group of the nomenclature, a
  // property follows the position of the first layer it drives, then its creation order.
  const place: Record<string, number> = {};
  for (const list of nodes) {
    list.forEach((n, k) => {
      const r = n.componentPropertyReferences;
      if (!r) return;
      for (const attr of Object.keys(r)) {
        const key = String(r[attr]);
        if (!(key in place) || k < place[key]) place[key] = k;
      }
    });
  }
  const layerRank = (key: string): number =>
    key in place ? place[key] : Infinity;
  const props = Object.keys(defs)
    .map((key, i) => {
      const def = defs[key];
      const name = clean(key);
      return { key, name, def, i, rank: propertyRank(name, def.type) };
    })
    .sort(
      (a, b) =>
        a.rank[0] - b.rank[0] ||
        a.rank[1] - b.rank[1] ||
        layerRank(a.key) - layerRank(b.key) ||
        0 ||
        a.i - b.i,
    );
  const refs: Record<string, Control[]> = {};
  const seen: Record<string, boolean> = {};
  nodes.forEach((list) => {
    for (const n of list) {
      const r = n.componentPropertyReferences;
      if (!r) continue;
      for (const attr of Object.keys(r)) {
        const key = String(r[attr]);
        const c = { layer: n.name, attribute: ATTRIBUTES[attr] || attr };
        const sig = key + "|" + c.layer + "|" + c.attribute;
        if (seen[sig]) continue;
        seen[sig] = true;
        (refs[key] = refs[key] || []).push(c);
      }
    }
  });
  for (const key of Object.keys(refs))
    refs[key].sort(
      (a, b) =>
        alphaOrder(a.layer, b.layer) || alphaOrder(a.attribute, b.attribute),
    );
  const axes = props.filter((p) => p.def.type === "VARIANT").map((p) => p.name);
  return { target, isSet, defs, variants, props, nodes, refs, axes };
}

function defaultVariant(prep: Prep): { def: Layer; cfg: Config } {
  const cfg: Config = {};
  for (const p of prep.props)
    if (p.def.type === "VARIANT") cfg[p.name] = String(p.def.defaultValue);
  const def =
    prep.variants.find((c) => {
      const k = readConfig(c.name);
      return Object.keys(cfg).every((a) => k[a] === cfg[a]);
    }) || prep.variants[0];
  return { def, cfg };
}

// The template designated by the page of the component, or null. A template sub-component,
// with its underscore, is not a template.
function templateOf(target: Layer): TemplatePage | null {
  if ((String(target.name).split("/").pop() || "").charAt(0) === "_")
    return null;
  let p = target.parent;
  while (p && p.type !== "PAGE") p = p.parent;
  return (p && TEMPLATE_PAGES.find((t) => t.page === p.name)) || null;
}

// ------------------------------------------------------------ nomenclature check
async function checkNomenclature(prep: Prep): Promise<Issue[]> {
  const issues: Issue[] = [];
  const addIssue = (
    rule: string,
    where: string,
    message: string,
    level?: Issue["level"],
  ): number => issues.push({ level: level || "warning", rule, where, message });

  // the component
  const last = String(prep.target.name).split("/").pop() || "";
  if (!/^_?[A-Z][a-zA-Z0-9]*$/.test(last))
    addIssue(
      "component-name",
      "meta.name",
      "Le nom d'un composant s'écrit en PascalCase, sans espace, statut ni version.",
    );
  else if (/[A-Z]{3,}/.test(last))
    addIssue(
      "component-name",
      "meta.name",
      "Un sigle s'écrit comme un mot. Exemple : AiAnswer, et non AIAnswer.",
    );

  // the template: its page sets the mention that opens its description
  const template = templateOf(prep.target);
  const description = String(prep.target.description || "");
  if (template) {
    if (!description.startsWith(template.mention))
      addIssue(
        "template-description",
        "meta.templateLevel",
        "La description de ce template doit commencer par « " +
          template.mention +
          " ».",
      );
  } else {
    const announced = TEMPLATE_PAGES.find((t) =>
      description.startsWith(t.mention),
    );
    if (announced)
      addIssue(
        "template-page",
        "meta.templateLevel",
        "Cette description annonce un template : ranger le composant dans la page " +
          announced.page +
          ".",
      );
  }

  // the properties
  for (const p of prep.props) {
    const name = p.name;
    const t = p.def.type;
    const where =
      t === "VARIANT" || t === "BOOLEAN"
        ? "api.props." + name
        : "structure.slots." + name;
    if (name.charAt(0) === "_") {
      addIssue(
        "prop-outside-nomenclature",
        where,
        "Propriété hors nomenclature (tiret bas) : un outil qui relie Figma au code l'ignore.",
        "info",
      );
      continue;
    }
    if (!camelOK(name))
      addIssue(
        "prop-name",
        where,
        "Le nom d'une propriété s'écrit en camelCase, sans espace, tiret, accent ni majuscule initiale.",
      );
    if (SYNONYMS[name])
      addIssue(
        "prop-synonym",
        where,
        "Nom hors nomenclature : écrire " + SYNONYMS[name] + ".",
      );
    const isPrefix = /^is[A-Z]/.test(name);
    if (isPrefix) {
      const without = name.slice(2);
      addIssue(
        "prop-prefix",
        where,
        "Pas de préfixe is : écrire " +
          without.charAt(0).toLowerCase() +
          without.slice(1) +
          ".",
      );
    }
    if (t === "BOOLEAN") {
      if (name === "disabled")
        addIssue(
          "prop-disabled",
          where,
          "disabled est une variante à part (true, false), pas un booléen.",
        );
      else if (!isPrefix && !/^show[A-Z]/.test(name) && name !== "required")
        addIssue(
          "prop-boolean",
          where,
          "Un booléen d'affichage commence par show. Exemple : showIcon.",
        );
    }
    if (t === "VARIANT") {
      const opts = (p.def.variantOptions || []).map(String);
      const invalid = opts.filter((o) => !kebabOK(o));
      if (invalid.length)
        addIssue(
          "prop-value",
          where,
          "Les valeurs s'écrivent en kebab-case, en minuscules, sans espace ni accent : " +
            invalid.join(", ") +
            ".",
        );
      const fixed = FIXED_VALUES[name];
      if (fixed) {
        const outside = opts.filter((o) => fixed.indexOf(o) < 0);
        if (outside.length)
          addIssue(
            "prop-values",
            where,
            "Valeurs hors nomenclature (" +
              outside.join(", ") +
              "). Attendu parmi : " +
              fixed.join(", ") +
              "." +
              (name === "state" && outside.indexOf("disabled") >= 0
                ? " disabled est une variante à part."
                : ""),
          );
      }
      const vf = TRUE_FALSE_VARIANTS[name];
      if (vf) {
        const outside = opts.filter((o) => vf.indexOf(o) < 0);
        if (outside.length)
          addIssue(
            "prop-values",
            where,
            "Valeurs hors nomenclature (" +
              outside.join(", ") +
              "). Attendu : " +
              vf.join(", ") +
              ".",
          );
      }
      if (name === "breakpoint" && opts.some((o) => !/^\d+$/.test(o)))
        addIssue(
          "prop-values",
          where,
          "Les valeurs de breakpoint sont des largeurs en pixels, sans unité.",
        );
      if (
        name !== "state" &&
        opts.some((o) => RUNTIME_STATES.indexOf(o.toLowerCase()) >= 0)
      )
        addIssue(
          "prop-state",
          where,
          "Cette propriété ressemble à l'état d'interaction : la nommer state, avec les valeurs default, hover, focus, press.",
        );
    }
    // a content property fills the layer that carries its name
    if (t === "TEXT" || t === "INSTANCE_SWAP" || t === "SLOT") {
      const ctl = prep.refs[p.key] || [];
      const expected =
        t === "SLOT" ? name : name === "placeholder" ? "value" : kebab(name);
      const freeSlot =
        t === "SLOT" &&
        prep.nodes.some((l) =>
          l.some((n) => n.type === "SLOT" && n.name === name),
        );
      if (!ctl.length && !freeSlot)
        addIssue("prop-layer", where, "Cette propriété ne règle aucun calque.");
      else if (ctl.length && !ctl.some((c) => c.layer === expected))
        addIssue(
          "prop-layer",
          where,
          "Cette propriété remplit le calque " +
            ctl[0].layer +
            ", qui devrait s'appeler " +
            expected +
            ".",
        );
    }
  }

  // the layers, once per name
  const prefix = kebab(last.replace(/^_/, "")) + "-";
  const boundTexts: Record<string, boolean> = {};
  const seen: Record<string, boolean> = {};
  for (const list of prep.nodes) {
    for (const n of list) {
      const name = String(n.name);
      const where = "layer " + name;
      if (n.type === "TEXT")
        boundTexts[name] =
          boundTexts[name] ||
          !!(
            n.componentPropertyReferences &&
            n.componentPropertyReferences.characters
          );
      const sig = n.type + "|" + name;
      if (seen[sig]) continue;
      seen[sig] = true;
      if (DEFAULT_NAME.test(name)) {
        addIssue(
          "layer-default",
          where,
          "Nom par défaut : nommer le calque par son rôle.",
        );
        continue;
      }
      if (
        n.type === "TEXT" &&
        (n.autoRename === true ||
          (typeof n.characters === "string" && n.characters === name))
      ) {
        addIssue(
          "layer-text",
          where,
          "Un calque de texte porte le nom de son rôle, jamais son contenu.",
        );
        continue;
      }
      if (n.type === "SLOT") {
        if (!camelOK(name))
          addIssue(
            "layer-case",
            where,
            "Le calque d'un slot s'écrit en camelCase, comme sa propriété.",
          );
        continue;
      }
      if (!kebabOK(name))
        addIssue(
          "layer-case",
          where,
          "Un calque s'écrit en kebab-case, en minuscules, sans espace ni accent.",
        );
      if (name.indexOf(prefix) === 0)
        addIssue(
          "layer-prefix",
          where,
          "Un calque porte le nom de son rôle, sans reprendre celui du composant. Exemple : label, et non " +
            prefix +
            "label.",
        );
      if (
        (n.type === "FRAME" || n.type === "GROUP") &&
        (/(^|-)(wrapper|group|frame)(-|$)/.test(name) || /-and-/.test(name))
      )
        addIssue(
          "layer-frame",
          where,
          "Un cadre prend son rôle (header, actions), ou content, ou container. Jamais wrapper, group ou frame, et il ne liste pas ce qu'il contient.",
        );
      if (isInstance(n)) {
        try {
          const mc = await n.getMainComponentAsync();
          if (mc && (name === mc.name || name === componentName(mc)))
            addIssue(
              "layer-instance",
              where,
              "Une instance imbriquée prend le nom de son rôle dans le composant, pas celui de son composant d'origine.",
            );
        } catch (e) {
          // Optional name check: without a main component, this issue is not reported.
        }
      }
    }
  }
  for (const name of Object.keys(boundTexts)) {
    if (!boundTexts[name] && !DEFAULT_NAME.test(name))
      addIssue(
        "text-not-linked",
        "layer " + name,
        "Ce texte n'est relié à aucune propriété de texte.",
        "info",
      );
  }
  return issues;
}

// ------------------------------------------------------------ extraction
const MAX_ICON_SIZE = 48; // beyond this, an exposed component is a base and not an icon
const PROGRESS_THRESHOLD = 40; // number of variants beyond which progress is announced
const PROGRESS_STEP = 20; // one announcement every 20 variants
// Styles of a variant in one pass: root, then each layer of its own.
async function captureVariant(
  ctx: Context,
  prep: Prep,
  variant: Layer,
  list: Layer[],
): Promise<Capture> {
  const s: Capture = {
    id: variant.id,
    root: await readVisualStyles(ctx, variant, false, "styles.root"),
    cand: [],
    modes: {},
  };
  try {
    const ex = variant.explicitVariableModes || {};
    for (const collId of Object.keys(ex)) {
      const coll = await figma.variables.getVariableCollectionByIdAsync(collId);
      if (!coll) continue;
      const mode = (coll.modes || []).find((m) => m.modeId === ex[collId]);
      if (mode) {
        s.modes[coll.name] = mode.name;
        if (coll.key)
          register(ctx.modeCollections, coll.name, {
            library: await libraryName(ctx, coll),
            key: coll.key,
          });
      }
    }
  } catch (e) {
    readError(ctx, "styles.modes", e);
  }
  for (const el of list) {
    const nm = String(el.name) || el.type.toLowerCase();
    const es =
      el.type === "TEXT"
        ? await readTextStyles(ctx, el, "styles." + nm)
        : await readVisualStyles(ctx, el, true, "styles." + nm);
    const c: Candidate = { nm, es, id: el.id };
    if (el.type === "INSTANCE") {
      const r = await instanceVector(ctx, el, "styles." + nm);
      if (r) {
        c.vec = r.styles;
        c.vecId = r.id;
      }
    }
    s.cand.push(c);
  }
  return s;
}

// Layer tree of a variant. An instance names its component, we do not go down into it.
async function layerTree(ctx: Context, node: Layer): Promise<TreeNode> {
  const t: TreeNode = { name: String(node.name) };
  t.type = String(node.type).toLowerCase().replace(/_/g, "-");
  if (node.visible === false) t.hidden = true;
  if (isInstance(node)) {
    try {
      const mc = await readMainComponent(ctx, node);
      if (mc) {
        t.component = componentName(mc);
        registerComponent(ctx, mc);
      }
    } catch (e) {
      readError(ctx, "structure.trees", e);
    }
    return t;
  }
  if (node.children && node.children.length) {
    const kids: TreeNode[] = [];
    for (const c of node.children) kids.push(await layerTree(ctx, c));
    t.children = kids;
  }
  return t;
}

// The issues that can be read in the styles produced: raw value, paint not
// handled, text without style. A zero value is not an issue.
function stylesIssues(styles: Partial<Styles>): Issue[] {
  const out: Issue[] = [];
  // A raw fixed size is an issue, except for an absolute layer stretched on that axis.
  const freeSize = (parent: Record<string, unknown>, key: string): boolean => {
    const axis = key === "width" ? "horizontal" : "vertical";
    return (
      parent.absolute === true &&
      isRecord(parent.constraints) &&
      parent.constraints[axis] === "stretch"
    );
  };
  const walk = (
    o: unknown,
    path: string,
    key: string,
    parent: Record<string, unknown> | null,
    parentKey: string,
  ): void => {
    if (Array.isArray(o)) {
      o.forEach((x, i) =>
        walk(x, path + "[" + i + "]", key, parent, parentKey),
      );
      return;
    }
    if (!isRecord(o)) return;
    if (Object.keys(o).length === 1 && "raw" in o) {
      const size = key === "width" || key === "height";
      const excluded =
        size && (parentKey !== "layout" || !parent || freeSize(parent, key));
      if (o.raw !== 0 && o.raw !== null && !excluded)
        out.push({
          level: "warning",
          rule: "raw-value",
          where: path,
          message: "Valeur brute (" + o.raw + ") : la relier à une variable.",
        });
      return;
    }
    if ("unsupported" in o) {
      out.push({
        level: "warning",
        rule: "paint",
        where: path,
        message:
          "Peinture de type " +
          o.unsupported +
          " non reprise : seule une couleur unie se relie à une variable.",
      });
      return;
    }
    if ("typography" in o && !("textStyle" in o))
      out.push({
        level: "warning",
        rule: "text-style",
        where: path,
        message:
          "Texte sans style de texte : le relier à un style, la typo détaillée est reprise faute de mieux.",
      });
    for (const k of Object.keys(o)) walk(o[k], path + "." + k, k, o, key);
  };
  walk(styles.default, "styles.default", "", null, "");
  for (const o of styles.overrides || [])
    walk(
      o.styles,
      "styles.overrides[" +
        Object.keys(o.when)
          .map((k) => k + "=" + o.when[k])
          .join(", ") +
        "]",
      "",
      null,
      "",
    );
  // the same issue repeated from one variant to another is only reported once
  const groups = new Map<string, Issue>();
  for (const i of out) {
    const location = i.where.replace(
      /^styles\.(default|overrides\[[^\]]*\])\./,
      "",
    );
    const key = i.rule + "|" + location + "|" + i.message;
    if (!groups.has(key))
      groups.set(key, {
        level: i.level,
        rule: i.rule,
        where: "styles." + location,
        message: i.message,
      });
  }
  return Array.from(groups.values());
}

// For each style issue, the number of variants where it appears (key: issueSignature).
// The input is the list of the complete styles of each variant.
function variantsPerIssue(
  variantsStyles: VariantStyles[],
): Map<string, number> {
  const n = new Map<string, number>();
  for (const st of variantsStyles) {
    for (const d of stylesIssues({ default: st }))
      n.set(issueSignature(d), (n.get(issueSignature(d)) || 0) + 1);
  }
  return n;
}

// Groups the style differences between variants into overrides with a partial when.
// The unit is the pair (layer, field). We walk through the candidate whens, from shortest
// to longest: a when is kept when all the variants it targets want the same
// value and at least one of them does not have it yet. At equal size, each unit first takes
// the when that fixes the most variants. A variant only ever receives its final value,
// so two overrides never contradict each other. null removes a field.
// A re-expansion checks the result: a wrong export never comes out.
interface GroupInput {
  cfg: Config;
  styles: VariantStyles;
}
interface GroupedOverride {
  when: Config;
  styles: Record<string, Record<string, Json | null>>;
}
function groupOverrides(
  axes: string[],
  values: Record<string, string[]>,
  variants: GroupInput[],
  baseVariant: GroupInput,
): GroupedOverride[] {
  const ABSENT = "\u0000absent";
  const a = (o: object, k: string): boolean =>
    Object.prototype.hasOwnProperty.call(o, k);

  // units, in the order of the default then of first appearance
  const fieldsOf = new Map<string, string[]>();
  for (const v of [baseVariant].concat(variants)) {
    for (const c of Object.keys(v.styles)) {
      if (!fieldsOf.has(c)) fieldsOf.set(c, []);
      const list = fieldsOf.get(c) || [];
      for (const f of Object.keys(v.styles[c]))
        if (list.indexOf(f) < 0) list.push(f);
    }
  }
  const units: { c: string; f: string }[] = [];
  for (const [c, list] of fieldsOf) for (const f of list) units.push({ c, f });
  const valueAt = (
    v: GroupInput,
    u: { c: string; f: string },
  ): Json | undefined =>
    a(v.styles, u.c) && a(v.styles[u.c], u.f) ? v.styles[u.c][u.f] : ABSENT;
  const targets = variants.map((v) =>
    units.map((u) => canonical(valueAt(v, u))),
  );
  const current = variants.map(() =>
    units.map((u) => canonical(valueAt(baseVariant, u))),
  );

  // candidate whens, from shortest to longest, each with the variants it targets
  const candidates: {
    rank: number;
    size: number;
    when: Config;
    members: number[];
  }[] = [];
  const valuesOf = (
    positions: number[],
    k: number,
    choices: [string, string][],
  ): void => {
    if (k === positions.length) {
      const members: number[] = [];
      variants.forEach((v, i) => {
        if (choices.every(([ax, val]) => v.cfg[ax] === val)) members.push(i);
      });
      if (!members.length) return;
      const when: Config = {};
      for (const [ax, val] of choices) when[ax] = val;
      candidates.push({
        rank: candidates.length,
        size: positions.length,
        when,
        members,
      });
      return;
    }
    const ax = axes[positions[k]];
    for (const val of values[ax] || [])
      valuesOf(positions, k + 1, choices.concat([[ax, val]]));
  };
  const subsets = (s: number, start: number, positions: number[]): void => {
    if (positions.length === s) {
      valuesOf(positions, 0, []);
      return;
    }
    for (let i = start; i < axes.length; i++)
      subsets(s, i + 1, positions.concat([i]));
  };
  for (let s = 1; s <= axes.length; s++) subsets(s, 0, []);

  // rules kept, stored by when
  const byWhen = new Map<
    number,
    { when: Config; rules: Map<number, Json | null | undefined> }
  >();
  for (let s = 1; s <= axes.length; s++) {
    const ofSize = candidates.filter((c) => c.size === s);
    units.forEach((u, ui) => {
      for (;;) {
        let best: (typeof candidates)[number] | null = null;
        let gain = 0;
        for (const c of ofSize) {
          const x = targets[c.members[0]][ui];
          if (!c.members.every((i) => targets[i][ui] === x)) continue;
          const n = c.members.filter((i) => current[i][ui] !== x).length;
          if (n > gain) {
            best = c;
            gain = n;
          }
        }
        if (!best) break;
        const entry = byWhen.get(best.rank) || {
          when: best.when,
          rules: new Map<number, Json | null | undefined>(),
        };
        byWhen.set(best.rank, entry);
        const value = valueAt(variants[best.members[0]], u);
        entry.rules.set(ui, value === ABSENT ? null : value);
        for (const i of best.members)
          current[i][ui] = targets[best.members[0]][ui];
      }
    });
  }

  // overrides in the order of the candidates: the shortest first
  const overrides: GroupedOverride[] = [];
  for (const [, entry] of [...byWhen.entries()].sort((x, y) => x[0] - y[0])) {
    const { when, rules } = entry;
    const styles: Record<string, Record<string, Json | null>> = {};
    units.forEach((u, ui) => {
      if (!rules.has(ui)) return;
      if (!a(styles, u.c)) styles[u.c] = {};
      styles[u.c][u.f] = rules.get(ui) ?? null;
    });
    overrides.push({ when, styles });
  }

  // self-check: each re-expanded variant must get back its captured styles
  // (effectiveStyles on the captured styles alone gets rid of their empty layers)
  const redeveloped = { default: baseVariant.styles, overrides: overrides };
  for (const v of variants) {
    if (
      canonical(effectiveStyles(redeveloped, v.cfg)) !==
      canonical(effectiveStyles({ default: v.styles }, {}))
    )
      throw new Error(
        "Regroupement des surcharges incohérent pour la variante " +
          JSON.stringify(v.cfg),
      );
  }
  return overrides;
}

interface ExtractOptions {
  progress?: (done: number, total: number) => void;
  computeTokensVersion?: (inputs: {
    tokens: Index;
    textStyles: Index;
  }) => Promise<{ version: string | null; issues: Issue[] }>;
}
async function extract(
  target: Layer,
  options?: ExtractOptions,
): Promise<Sheet> {
  return (await extractDetail(target, options)).sheet;
}

// The sheet, and for each issue of sheet.issues the nodes it designates (same order).
async function extractDetail(
  target: Layer,
  opts?: ExtractOptions,
): Promise<{ sheet: Sheet; locations: IssueLocation[] }> {
  const options: ExtractOptions = opts || {};
  const ctx = newContext();
  const prep = prepare(target);
  const { defs, variants: variantNodes, props, nodes, refs, axes } = prep;
  const { def, cfg: cfgDef } = defaultVariant(prep);

  // variants sorted in the order of the properties, then by position
  const optsOf: Record<string, string[]> = {};
  for (const p of props)
    if (p.def.type === "VARIANT")
      optsOf[p.name] = (p.def.variantOptions || []).map(String);
  const orderCfg = (cfg: Config): Config => {
    const o: Config = {};
    for (const a of axes) if (a in cfg) o[a] = cfg[a];
    for (const k of Object.keys(cfg)) if (!(k in o)) o[k] = cfg[k];
    return o;
  };
  const lines = variantNodes.map((v, i) => ({
    v,
    i,
    cfg: orderCfg(readConfig(v.name)),
    pos: [rounded(v.x || 0), rounded(v.y || 0)],
  }));
  const valueRank = (a: string, val: string): number => {
    const k = optsOf[a].indexOf(val);
    return k === -1 ? 9999 : k;
  };
  lines.sort((a, b) => {
    for (const ax of axes) {
      const d = valueRank(ax, a.cfg[ax]) - valueRank(ax, b.cfg[ax]);
      if (d) return d;
    }
    return a.pos[1] - b.pos[1] || a.pos[0] - b.pos[0] || a.i - b.i;
  });
  const variants = lines.map((l) => ({ values: l.cfg, position: l.pos }));

  // api and slots
  const controlsOf = (key: string): Control[] =>
    (refs[key] || []).map((c) => ({ layer: c.layer, attribute: c.attribute }));
  const api: Api = { props: {} };
  const slots: Record<string, Slot> = {};
  for (const p of props) {
    const t = p.def.type;
    if (t === "VARIANT")
      api.props[p.name] = {
        type: "enum",
        enum: optsOf[p.name],
        default: String(p.def.defaultValue),
      };
    else if (t === "BOOLEAN")
      api.props[p.name] = {
        type: "boolean",
        default: !!p.def.defaultValue,
        controls: controlsOf(p.key),
      };
    else if (t === "TEXT")
      slots[p.name] = {
        as: "children",
        default: { text: String(p.def.defaultValue) },
        controls: controlsOf(p.key),
      };
    else if (t === "SLOT")
      slots[p.name] = { as: "slot", controls: controlsOf(p.key) };
    else if (t === "INSTANCE_SWAP") {
      const s: Slot = { accepts: "Instance" };
      const dv = p.def.defaultValue;
      if (dv) {
        try {
          const n = await figma.getNodeByIdAsync(String(dv));
          if (n) {
            s.default = { swap: componentName(n) };
            registerComponent(ctx, n);
          }
        } catch (e) {
          readError(ctx, "structure.slots." + p.name, e);
        }
      }
      // preferred values: each proposed component is named and registered in the components index
      const pref: string[] = [];
      for (const pv of p.def.preferredValues || []) {
        let n: Layer | null = null;
        try {
          n =
            pv.type === "COMPONENT_SET"
              ? await figma.importComponentSetByKeyAsync(pv.key)
              : await figma.importComponentByKeyAsync(pv.key);
        } catch (e) {
          // The failure is reported further down by the preferred-value issue.
        }
        const name = n ? registerComponent(ctx, n) : null;
        if (name) pref.push(name);
        else ctx.notFound.add(p.name + "|" + pv.key);
      }
      if (pref.length) s.preferred = pref;
      s.controls = controlsOf(p.key);
      slots[p.name] = s;
    } else
      slots[p.name] = {
        as: String(t || "unknown").toLowerCase(),
        controls: controlsOf(p.key),
      };
  }

  // meta
  // version and tokensVersion are null here: the plugin fills them after the extraction,
  // the bridge script leaves them as null.
  const meta: Meta = {
    name: withoutCopyPrefix(target.name),
    version: null,
    tokensVersion: null,
    type: "atom",
  };
  // an icon exposed in the panel does not make a base component: only a component
  // that carries text or exceeds the size of an icon is taken as a base
  let exposed: InstanceLayer | null = null;
  for (const n of findAll(
    def,
    (x) => x.type === "INSTANCE" && !!x.isExposedInstance,
  ).filter(isInstance)) {
    const m = await readMainComponent(ctx, n);
    const icon =
      m &&
      !findOne(m, (x) => x.type === "TEXT") &&
      typeof m.width === "number" &&
      m.width <= MAX_ICON_SIZE &&
      typeof m.height === "number" &&
      m.height <= MAX_ICON_SIZE;
    if (m && !icon) {
      exposed = n;
      break;
    }
  }
  if (exposed) {
    const mc = await readMainComponent(ctx, exposed);
    meta.type = "composed";
    meta.extends = componentName(mc);
    api.exposed = [
      {
        from: meta.extends,
        props: Object.keys(exposed.componentProperties || {}).map(clean),
      },
    ];
  }
  // a template built on another component keeps extends
  const template = templateOf(target);
  if (template) {
    meta.type = "template";
    meta.templateLevel = template.level;
  }
  meta.figmaKey = target.key || null;
  meta.library = LIBRARY;
  meta.documentationLinks = (target.documentationLinks || []).map((l) => l.uri);

  // styles: capture of all the variants, then keys common to the whole set.
  // A name carried several times gets a tree rank (-1, -2) in all the variants.
  const captures = new Map<Layer, Capture>();
  for (let i = 0; i < lines.length; i++) {
    const v = lines[i].v;
    if (
      options.progress &&
      lines.length > PROGRESS_THRESHOLD &&
      i % PROGRESS_STEP === PROGRESS_STEP - 1
    )
      options.progress(i + 1, lines.length);
    captures.set(
      v,
      await captureVariant(ctx, prep, v, nodes[variantNodes.indexOf(v)]),
    );
  }
  const dup = new Set<string>();
  for (const cap of captures.values()) {
    const cnt: Record<string, number> = {};
    for (const c of cap.cand) {
      cnt[c.nm] = (cnt[c.nm] || 0) + 1;
      if (cnt[c.nm] > 1) dup.add(c.nm);
    }
  }
  const withKeys = (cap: Capture): VariantStyles => {
    const kd: VariantStyles = {};
    if (Object.keys(cap.modes).length) kd.modes = cap.modes;
    kd.root = cap.root;
    // node ids, kept in the context for the interface: never in the sheet
    const ids: Record<string, string> = { root: cap.id };
    ctx.ids.set(cap, ids);
    const seen: Record<string, number> = {};
    for (const c of cap.cand) {
      const n = (seen[c.nm] = (seen[c.nm] || 0) + 1);
      const key = dup.has(c.nm) ? c.nm + "-" + n : c.nm;
      if (Object.keys(c.es).length) {
        kd[key] = c.es;
        ids[key] = c.id;
      }
      if (c.vec) {
        kd[key + "/vector"] = c.vec;
        ids[key + "/vector"] = c.vecId ?? "";
      }
    }
    return kd;
  };
  const defCapture = captures.get(def);
  if (!defCapture) throw new Error("La variante par défaut n'a pas été lue.");
  const defStyles = withKeys(defCapture);
  const styles: Styles = { default: {} };
  if (prep.isSet && axes.length) styles.default.when = orderCfg(cfgDef);
  Object.assign(styles.default, defStyles);
  const axesOrder = PRIORITY.filter((a) => axes.indexOf(a) >= 0).concat(
    axes.filter((a) => PRIORITY.indexOf(a) < 0),
  );
  const all = lines.map((l) => {
    const cap = captures.get(l.v);
    if (!cap) throw new Error("Une variante n'a pas été lue.");
    return { cfg: l.cfg, styles: withKeys(cap), v: l.v, cap };
  });
  const baseEntry = all.find((t) => t.v === def);
  if (!baseEntry) throw new Error("La variante par défaut n'a pas été lue.");
  const overrides = groupOverrides(axesOrder, optsOf, all, baseEntry).map(
    (o) => ({ when: orderCfg(o.when), styles: o.styles }),
  );
  if (overrides.length) styles.overrides = overrides;

  // trees: one per distinct structure. The one of the default variant is the base (empty when).
  const groups = new Map<string, { tree: TreeNode[]; configs: Config[] }>();
  const addTree = (cfg: Config, a: TreeNode[]): void => {
    const h = JSON.stringify(a);
    const group = groups.get(h) || { tree: a, configs: [] };
    groups.set(h, group);
    group.configs.push(cfg);
  };
  const treeOf = async (v: Layer): Promise<TreeNode[]> => {
    const a: TreeNode[] = [];
    for (const c of v.children || []) a.push(await layerTree(ctx, c));
    return a;
  };
  addTree(orderCfg(readConfig(def.name)), await treeOf(def));
  const defHash = [...groups.keys()][0];
  for (const l of lines) if (l.v !== def) addTree(l.cfg, await treeOf(l.v));
  const trees: Tree[] = [];
  for (const [h, g] of groups) {
    if (h === defHash) {
      trees.push({ when: {}, tree: g.tree });
      continue;
    }
    // only the values actually drawn count: a value without a variant discriminates nothing
    const when: When = {};
    for (const a of axes) {
      const vals = [
        ...new Set(g.configs.map((c) => c[a]).filter((x) => x !== undefined)),
      ];
      const present = new Set(
        lines.map((l) => l.cfg[a]).filter((x) => x !== undefined),
      );
      if (vals.length && vals.length < present.size)
        when[a] = vals.length === 1 ? vals[0] : vals.sort();
    }
    if (!Object.keys(when).length)
      trees.push({ when, configs: g.configs, tree: g.tree });
    else trees.push({ when, tree: g.tree });
  }

  // nested components, quoted by reference
  const uses = new Set<string>();
  for (const list of nodes) {
    for (const n of list) {
      if (!isInstance(n)) continue;
      try {
        const mc = await readMainComponent(ctx, n);
        const name = mc ? registerComponent(ctx, mc) : null;
        if (name) uses.add(name);
      } catch (e) {
        readError(ctx, "structure.uses", e);
      }
    }
  }
  const structure = { slots, trees, uses: [...uses].sort(alphaOrder) };

  // tokens index, sorted by name
  const tokens: Index = {};
  for (const name of Object.keys(ctx.tokens).sort(alphaOrder))
    tokens[name] = ctx.tokens[name];

  // the other indexes, sorted by name
  const sortIndex = (index: Index): Index => {
    const o: Index = {};
    for (const name of Object.keys(index).sort(alphaOrder))
      o[name] = index[name];
    return o;
  };
  const textStyles = sortIndex(ctx.textStyles);
  const components = sortIndex(ctx.components);
  const modeCollections = sortIndex(ctx.modeCollections);

  // a single list of issues: nomenclature, raw values, duplicate variables
  const issues = await checkNomenclature(prep);
  const variantCounts = variantsPerIssue(all.map((t) => t.styles));
  for (const i of stylesIssues(styles)) {
    const n = variantCounts.get(issueSignature(i));
    if (n) i.occurrences = n;
    issues.push(i);
  }
  for (const name of ctx.collisions)
    issues.push({
      level: "warning",
      rule: "token-duplicate",
      where: "tokens." + name,
      message:
        "Deux variables portent ce nom dans des collections ou des bibliothèques différentes : un seul token est indexé.",
    });

  // The design tokens version comes from outside (the network is never called here):
  // options.computeTokensVersion({ tokens, textStyles }) returns { version, issues }.
  if (options.computeTokensVersion) {
    const computation = await options.computeTokensVersion({
      tokens,
      textStyles,
    });
    meta.tokensVersion = computation.version;
    for (const i of computation.issues) issues.push(i);
  }

  for (const e of ctx.errors)
    issues.push({
      level: "error",
      rule: "read-failed",
      where: e.where,
      message: e.message,
    });

  for (const entryKey of [...ctx.notFound].sort(alphaOrder)) {
    const [name, key] = entryKey.split("|");
    issues.push({
      level: "warning",
      rule: "preferred-value",
      where: "structure.slots." + name,
      message:
        "Le composant préféré de clé " +
        key +
        " n'a pas pu être importé : il manque aux valeurs préférées.",
    });
  }

  const sheet = {
    formatVersion: FORMAT,
    meta,
    api,
    variants,
    structure,
    styles,
    tokens,
    textStyles,
    components,
    modeCollections,
    issues: sortIssues(issues),
    _tool: "canopee-export-components " + VERSION,
  };
  return { sheet, locations: locateIssues(ctx, prep, sheet.issues, all) };
}

// The Figma nodes designated by each issue, in the order of the list: { ids, variants }.
// These ids only serve the interface, they never enter the sheet.
function locateIssues(
  ctx: Context | null,
  prep: Prep,
  issues: Issue[],
  all: { cap: Capture; styles: VariantStyles }[] | null,
): IssueLocation[] {
  const styles = new Map<string, { ids: string[]; cap: Set<Capture> }>();
  for (const t of all || []) {
    const ids = (ctx && ctx.ids.get(t.cap)) || {};
    const keys = Object.keys(ids).sort((a, b) => b.length - a.length);
    for (const d of stylesIssues({ default: t.styles })) {
      const location = d.where.slice("styles.".length);
      const key = keys.find(
        (c) => location === c || location.indexOf(c + ".") === 0,
      );
      if (!key || !ids[key]) continue;
      const g = styles.get(issueSignature(d)) || {
        ids: [],
        cap: new Set<Capture>(),
      };
      styles.set(issueSignature(d), g);
      if (g.ids.indexOf(ids[key]) < 0) g.ids.push(ids[key]);
      g.cap.add(t.cap);
    }
  }
  return issues.map((i) => {
    if (i.where.indexOf("layer ") === 0) {
      const name = i.where.slice("layer ".length);
      const ids: string[] = [];
      let variants = 0;
      for (const list of prep.nodes) {
        const m = list.filter((n) => String(n.name) === name && n.id);
        if (m.length) variants++;
        for (const n of m) ids.push(n.id);
      }
      return { ids, variants };
    }
    if (i.where.indexOf("styles.") === 0) {
      const g = styles.get(issueSignature(i));
      return g
        ? { ids: g.ids, variants: g.cap.size }
        : { ids: [], variants: 0 };
    }
    if (
      i.where === "meta.name" ||
      i.where === "meta.templateLevel" ||
      i.where.indexOf("api.props.") === 0 ||
      i.where.indexOf("structure.slots.") === 0
    )
      return { ids: prep.target.id ? [prep.target.id] : [], variants: 0 };
    return { ids: [], variants: 0 };
  });
}

// The key of an issue: two issues with the same signature count as one.
const issueSignature = (i: Issue): string =>
  i.level + "|" + i.rule + "|" + i.where + "|" + i.message;

// Sorting and de-duplication: same component, same order.
function sortIssues(list: Issue[]): Issue[] {
  const seen: Record<string, boolean> = {};
  const out: Issue[] = [];
  for (const i of list) {
    const sig = issueSignature(i);
    if (seen[sig]) continue;
    seen[sig] = true;
    out.push(i);
  }
  return out.sort(
    (a, b) =>
      LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) ||
      alphaOrder(a.rule, b.rule) ||
      alphaOrder(a.where, b.where) ||
      alphaOrder(a.message, b.message),
  );
}

const serialize = (sheet: Sheet): string =>
  JSON.stringify(sheet, null, 2) + "\n";
// <<< END EXTRACTION

// ------------------------------------------------------------ labels and comparison
// What follows only serves the interface: none of it enters the sheet.
const FIELD_LABELS: Record<string, string> = {
  background: "fond",
  textColor: "couleur du texte",
  radius: "arrondi",
  padding: "marges intérieures",
  gap: "espacement",
  stroke: "contour",
  strokeWeight: "épaisseur du contour",
  opacity: "opacité",
  effects: "effets",
  typography: "typo",
  "layout.minWidth": "largeur minimale",
  "layout.maxWidth": "largeur maximale",
  "layout.minHeight": "hauteur minimale",
  "layout.maxHeight": "hauteur maximale",
  "layout.width": "largeur",
  "layout.height": "hauteur",
};
const SIDE_LABELS: Record<string, string> = {
  top: "haut",
  right: "droite",
  bottom: "bas",
  left: "gauche",
};

// The technical location of an issue, in plain words.
function readableLocation(where: unknown): string {
  const w = String(where);
  if (w === "meta.name") return "Nom du composant";
  if (w === "meta.templateLevel") return "Template";
  if (w === "tokens") return "Variables";
  if (w === "structure.trees") return "Arbre des calques";
  if (w === "structure.uses") return "Composants imbriqués";
  let m = /^(?:api\.props|structure\.slots)\.(.+)$/.exec(w);
  if (m) return "Propriété " + m[1];
  m = /^layer (.+)$/.exec(w);
  if (m) return "Calque " + m[1];
  m = /^tokens\.(.+)$/.exec(w);
  if (m) return "Variable " + m[1];
  m = /^textStyles\.(.+)$/.exec(w);
  if (m) return "Style de texte " + m[1];
  if (w === "meta.tokensVersion") return "Version des design tokens";
  if (w.indexOf("styles.") === 0) {
    const rest = w.slice("styles.".length);
    const i = rest.indexOf(".");
    const layer = i < 0 ? rest : rest.slice(0, i);
    const path = i < 0 ? [] : rest.slice(i + 1).split(".");
    const vector = /^(.*)\/vector$/.exec(layer);
    const layerName =
      layer === "root" ? "Racine" : vector ? "Vecteur de " + vector[1] : layer;
    if (!path.length) return layerName;
    const first = path[0].replace(/\[\d+\]$/, "");
    let field = path.join(".");
    let tail: string[] = [];
    if (first === "layout" && path[1] && FIELD_LABELS["layout." + path[1]]) {
      field = FIELD_LABELS["layout." + path[1]];
      tail = path.slice(2);
    } else if (FIELD_LABELS[first]) {
      field = FIELD_LABELS[first];
      tail = path.slice(1);
    }
    return (
      layerName +
      ", " +
      [field]
        .concat(tail.map((x) => (first === "padding" && SIDE_LABELS[x]) || x))
        .join(" ")
    );
  }
  return w;
}

// The issues of the sheet, with what the interface does with them: readable label and nodes to select.
const detailIssues = (
  issues: Issue[],
  locations: IssueLocation[],
): IssueDetail[] =>
  issues.map((i, k) =>
    Object.assign({}, i, {
      location: readableLocation(i.where),
      ids: locations[k].ids,
      variants: locations[k].variants,
    }),
  );

// Key figures of an already serialized sheet.
function summarize(sheet: SheetLike, text: string) {
  const n = (o: object | undefined): number => Object.keys(o || {}).length;
  return {
    variants: (sheet.variants || []).length,
    properties:
      n(sheet.api && sheet.api.props) +
      n(sheet.structure && sheet.structure.slots),
    variables: n(sheet.tokens),
    textStylesCount: n(sheet.textStyles),
    overrides: ((sheet.styles && sheet.styles.overrides) || []).length,
    kb: Math.max(1, Math.round(byteSize(text) / 1024)),
  };
}
// Size in bytes of a UTF-8 text, without depending on Buffer or TextEncoder.
function byteSize(text: unknown): number {
  let t = 0;
  for (const c of String(text)) {
    const x = c.codePointAt(0) ?? 0;
    t += x < 0x80 ? 1 : x < 0x800 ? 2 : x < 0x10000 ? 3 : 4;
  }
  return t;
}

// The leaves of a style: simple value, array, or object that has only token or only raw.
interface Leaf {
  layer: string;
  path: string[];
  v: unknown;
}
function styleLeaves(eff: VariantStyles): Map<string, Leaf> {
  const out = new Map<string, Leaf>();
  const rec = (v: unknown, layer: string, path: string[]): void => {
    const keys = isRecord(v) ? Object.keys(v) : null;
    if (
      !isRecord(v) ||
      !keys ||
      (keys.length === 1 && (keys[0] === "token" || keys[0] === "raw"))
    ) {
      out.set(layer + "\u0000" + path.join("."), { layer, path, v });
      return;
    }
    for (const k of keys) rec(v[k], layer, path.concat(k));
  };
  for (const c of Object.keys(eff))
    for (const f of Object.keys(eff[c])) rec(eff[c][f], c, [f]);
  return out;
}

const showValue = (v: unknown): string => {
  if (v === undefined) return "rien";
  if (Array.isArray(v)) return JSON.stringify(v);
  if (isRecord(v))
    return "token" in v ? String(v.token) : String(v.raw) + " en brut";
  return String(v);
};

// The label of a style change, under the title of its variants: without « Racine » for the
// component itself, and with the paddings grouped (horizontal, vertical, four sides).
function changeLabel(l: {
  layer: string;
  path: string[];
  sides: string[];
}): string {
  const location = readableLocation(
    "styles." + l.layer + "." + l.path.join("."),
  );
  const prefix = l.layer === "root" ? "" : location.split(", ")[0] + ", ";
  let field;
  if (l.sides.length) {
    const c = l.sides.slice().sort().join(",");
    field =
      c === "bottom,left,right,top"
        ? "marges, sur les quatre côtés"
        : c === "left,right"
          ? "marges horizontales"
          : c === "bottom,top"
            ? "marges verticales"
            : "marges " + l.sides.map((x) => SIDE_LABELS[x]).join(", ");
  } else
    field =
      location.indexOf(", ") < 0
        ? location
        : location.slice(location.indexOf(", ") + 2);
  const text = prefix + field;
  return l.layer === "root"
    ? text.charAt(0).toUpperCase() + text.slice(1)
    : text;
}

// The classification of what changed between two sheets (objects), single source of the
// Changements tab and of the changelog. Each change is { category, text } or, for styles,
// { category: 'modified', title, lines: [{ label, before, after }] }. The category is 'added',
// 'modified', 'removed', or 'excluded' for what the changelog does not include. Accepts the 0.2 and 0.3 formats.
type Category = "added" | "modified" | "removed" | "excluded";
interface TextChange {
  category: Category;
  text: string;
  title?: undefined;
  lines?: undefined;
}
interface StyleLine {
  label: string;
  before: string;
  after: string;
}
interface StyleChange {
  category: "modified";
  title: string;
  lines: StyleLine[];
  text?: undefined;
}
type Change = TextChange | StyleChange;
function classifyChanges(
  previous: SheetLike | null | undefined,
  next: SheetLike | null | undefined,
): Change[] {
  const a: SheetLike = previous || {};
  const b: SheetLike = next || {};
  const keys = (o: object | undefined): string[] => Object.keys(o || {});
  const list = (t: string[]): string => t.join(", ");
  const byCount = (n: number, one: string, many: string): string =>
    n > 1 ? many : one;
  const sentences: Change[] = [];
  const note = (category: Category, text: string): number =>
    sentences.push({ category, text });

  // properties and slots
  const pa = (a.api && a.api.props) || {};
  const pb = (b.api && b.api.props) || {};
  const addedProps = keys(pb).filter((k) => !(k in pa));
  const removedProps = keys(pa).filter((k) => !(k in pb));
  if (addedProps.length)
    note(
      "added",
      byCount(
        addedProps.length,
        "Propriété ajoutée : ",
        "Propriétés ajoutées : ",
      ) + list(addedProps),
    );
  if (removedProps.length)
    note(
      "removed",
      byCount(
        removedProps.length,
        "Propriété retirée : ",
        "Propriétés retirées : ",
      ) + list(removedProps),
    );
  if (
    keys(pb)
      .filter((k) => k in pa)
      .join("|") !==
    keys(pa)
      .filter((k) => k in pb)
      .join("|")
  )
    note("modified", "Ordre des propriétés modifié");
  for (const k of keys(pb).filter((x) => x in pa)) {
    const ea = pa[k].enum || [];
    const eb = pb[k].enum || [];
    const addedValues = eb.filter((v) => ea.indexOf(v) < 0);
    const removedValues = ea.filter((v) => eb.indexOf(v) < 0);
    const before = sentences.length;
    if (addedValues.length)
      note(
        "added",
        "Propriété " + k + ", valeurs ajoutées : " + list(addedValues),
      );
    if (removedValues.length)
      note(
        "removed",
        "Propriété " + k + ", valeurs retirées : " + list(removedValues),
      );
    if (canonical(pa[k].default) !== canonical(pb[k].default))
      note(
        "modified",
        "Propriété " +
          k +
          ", valeur par défaut : " +
          showValue(pa[k].default) +
          " → " +
          showValue(pb[k].default),
      );
    if (
      !addedValues.length &&
      !removedValues.length &&
      ea.join("|") !== eb.join("|")
    )
      note("modified", "Propriété " + k + ", ordre des valeurs modifié");
    // a property that differs without any line quoting it (its type, for example)
    if (sentences.length === before && canonical(pa[k]) !== canonical(pb[k]))
      note("modified", "Propriété " + k + " modifiée");
  }
  const sa = (a.structure && a.structure.slots) || {};
  const sb = (b.structure && b.structure.slots) || {};
  const addedSlots = keys(sb).filter((k) => !(k in sa));
  const removedSlots = keys(sa).filter((k) => !(k in sb));
  if (addedSlots.length)
    note(
      "added",
      byCount(addedSlots.length, "Slot ajouté : ", "Slots ajoutés : ") +
        list(addedSlots),
    );
  if (removedSlots.length)
    note(
      "removed",
      byCount(removedSlots.length, "Slot retiré : ", "Slots retirés : ") +
        list(removedSlots),
    );
  for (const k of keys(sb).filter((x) => x in sa)) {
    const before = sentences.length;
    const ta = sa[k].default && sa[k].default.text;
    const tb = sb[k].default && sb[k].default.text;
    if (canonical(ta) !== canonical(tb))
      note(
        "modified",
        "Slot " +
          k +
          ", texte par défaut : " +
          showValue(ta) +
          " → " +
          showValue(tb),
      );
    const wa = sa[k].default && sa[k].default.swap;
    const wb = sb[k].default && sb[k].default.swap;
    if (canonical(wa) !== canonical(wb))
      note(
        "modified",
        "Slot " +
          k +
          ", composant par défaut : " +
          showValue(wa) +
          " → " +
          showValue(wb),
      );
    // a slot that differs without any line quoting it
    if (sentences.length === before && canonical(sa[k]) !== canonical(sb[k]))
      note("modified", "Slot " + k + " modifié");
  }

  // variants
  const variantName = (values: Config): string =>
    keys(values)
      .map((k) => k + "=" + values[k])
      .join(", ");
  const byValues = (sheet: SheetLike): Map<string, SheetVariant> => {
    const m = new Map<string, SheetVariant>();
    for (const v of sheet.variants || []) m.set(canonical(v.values), v);
    return m;
  };
  const valuesAt = (m: Map<string, SheetVariant>, k: string): Config =>
    m.get(k)?.values || {};
  const va = byValues(a);
  const vb = byValues(b);
  const addedVariants = [...vb.keys()].filter((k) => !va.has(k));
  const removedVariants = [...va.keys()].filter((k) => !vb.has(k));
  const describe = (
    keys2: string[],
    m: Map<string, SheetVariant>,
    direction: string,
  ): void => {
    if (!keys2.length) return;
    const category: Category = direction === "ajoutée" ? "added" : "removed";
    if (keys2.length > 5)
      note(category, keys2.length + " variantes " + direction + "s");
    else
      for (const k of keys2)
        note(
          category,
          "Variante " + direction + " : " + variantName(valuesAt(m, k)),
        );
  };
  describe(addedVariants, vb, "ajoutée");
  describe(removedVariants, va, "retirée");
  const common = [...vb.keys()].filter((k) => va.has(k));
  const moved = common.filter(
    (k) => canonical(va.get(k)?.position) !== canonical(vb.get(k)?.position),
  ).length;
  if (
    common.join("\u0000") !==
    [...va.keys()].filter((k) => vb.has(k)).join("\u0000")
  )
    note("modified", "Ordre des variantes modifié");
  if (moved)
    note(
      "excluded",
      moved +
        " " +
        byCount(moved, "variante déplacée", "variantes déplacées") +
        " sur le canevas",
    );

  // styles: expanded variant by variant, then compared leaf by leaf
  const axes: string[] = [];
  for (const k of common)
    for (const ax of keys(valuesAt(vb, k)))
      if (axes.indexOf(ax) < 0) axes.push(ax);
  const groups = new Map<
    string,
    {
      layer: string;
      path: string[];
      before: unknown;
      after: unknown;
      touched: Set<number>;
    }
  >();
  // The size of a stretched absolute layer follows that of its parent: it is not a change in itself.
  const followsParent = (eff: VariantStyles, f: Leaf): boolean => {
    const l = eff[f.layer] ? eff[f.layer].layout : undefined;
    if (
      !isRecord(l) ||
      !l.absolute ||
      !isRecord(l.constraints) ||
      f.path[0] !== "layout"
    )
      return false;
    return (
      (f.path[1] === "width" && l.constraints.horizontal === "stretch") ||
      (f.path[1] === "height" && l.constraints.vertical === "stretch")
    );
  };
  common.forEach((k, idx) => {
    const cfg = valuesAt(vb, k);
    const ea = effectiveStyles(a.styles, cfg);
    const eb = effectiveStyles(b.styles, cfg);
    const fa = styleLeaves(ea);
    const fb = styleLeaves(eb);
    for (const key of new Set([...fa.keys(), ...fb.keys()])) {
      const x = fa.get(key);
      const y = fb.get(key);
      const cx = canonical(x && x.v);
      const cy = canonical(y && y.v);
      if (cx === cy) continue;
      const f = x || y;
      if (!f) continue;
      if (followsParent(ea, f) || followsParent(eb, f)) continue;
      const g = key + "\u0000" + cx + "\u0000" + cy;
      const group = groups.get(g) || {
        layer: f.layer,
        path: f.path,
        before: x && x.v,
        after: y && y.v,
        touched: new Set<number>(),
      };
      groups.set(g, group);
      group.touched.add(idx);
    }
  });
  const whichVariants = (touched: Set<number>): string => {
    if (touched.size === common.length) return "toutes les variantes";
    const members = [...touched];
    const firstValues = valuesAt(vb, common[members[0]]);
    for (let size = 1; size <= axes.length; size++) {
      const attempt = (start: number, picked: string[]): string | null => {
        if (picked.length === size) {
          const sel = common
            .map((k, i) => i)
            .filter((i) =>
              picked.every(
                (ax) => valuesAt(vb, common[i])[ax] === firstValues[ax],
              ),
            );
          if (sel.length === touched.size && sel.every((i) => touched.has(i)))
            return picked.map((ax) => ax + "=" + firstValues[ax]).join(", ");
          return null;
        }
        for (let j = start; j < axes.length; j++) {
          if (!(axes[j] in firstValues)) continue;
          const r = attempt(j + 1, picked.concat(axes[j]));
          if (r) return r;
        }
        return null;
      };
      const r = attempt(0, []);
      if (r) return r;
    }
    return touched.size + " " + byCount(touched.size, "variante", "variantes");
  };
  // Grouped by touched variants: a title, then one line per change. The paddings that
  // change together, from the same value to the same value, fit on one line.
  const byVariants = new Map<
    string,
    Map<
      string,
      {
        layer: string;
        path: string[];
        before: unknown;
        after: unknown;
        sides: string[];
      }
    >
  >();
  for (const g of groups.values()) {
    const which = whichVariants(g.touched);
    const lines =
      byVariants.get(which) ||
      new Map<
        string,
        {
          layer: string;
          path: string[];
          before: unknown;
          after: unknown;
          sides: string[];
        }
      >();
    byVariants.set(which, lines);
    const margin = g.path[0] === "padding" && g.path.length === 2;
    const key = margin
      ? g.layer +
        "\u0000padding\u0000" +
        canonical(g.before) +
        "\u0000" +
        canonical(g.after)
      : g.layer +
        "\u0000" +
        g.path.join(".") +
        "\u0000" +
        canonical(g.before) +
        "\u0000" +
        canonical(g.after);
    const line = lines.get(key) || {
      layer: g.layer,
      path: g.path,
      before: g.before,
      after: g.after,
      sides: [],
    };
    lines.set(key, line);
    if (margin) line.sides.push(g.path[1]);
  }
  for (const [which, lines] of byVariants) {
    sentences.push({
      category: "modified",
      title: which === "toutes les variantes" ? "Toutes les variantes" : which,
      lines: [...lines.values()].map((l) => ({
        label: changeLabel(l),
        before: showValue(l.before),
        after: showValue(l.after),
      })),
    });
  }

  // structure, variables, issues
  if (
    canonical(a.structure && a.structure.trees) !==
    canonical(b.structure && b.structure.trees)
  )
    note("modified", "Structure des calques modifiée");
  const ta = keys(a.tokens);
  const tb = keys(b.tokens);
  const addedTokens = tb.filter((k) => ta.indexOf(k) < 0);
  const removedTokens = ta.filter((k) => tb.indexOf(k) < 0);
  if (addedTokens.length)
    note("added", "Variables ajoutées : " + list(addedTokens));
  if (removedTokens.length)
    note("removed", "Variables retirées : " + list(removedTokens));
  // text styles, nested components and mode collections: additions and removals
  const lists: [
    "textStyles" | "components" | "modeCollections",
    string,
    string,
    string,
    string,
  ][] = [
    [
      "textStyles",
      "Style de texte ajouté : ",
      "Styles de texte ajoutés : ",
      "Style de texte retiré : ",
      "Styles de texte retirés : ",
    ],
    [
      "components",
      "Composant imbriqué ajouté : ",
      "Composants imbriqués ajoutés : ",
      "Composant imbriqué retiré : ",
      "Composants imbriqués retirés : ",
    ],
    [
      "modeCollections",
      "Collection de modes ajoutée : ",
      "Collections de modes ajoutées : ",
      "Collection de modes retirée : ",
      "Collections de modes retirées : ",
    ],
  ];
  for (const [
    field,
    oneAddition,
    manyAdditions,
    oneRemoval,
    manyRemovals,
  ] of lists) {
    const ca = keys(a[field]);
    const cb = keys(b[field]);
    const addedKeys = cb.filter((k) => ca.indexOf(k) < 0);
    const removedKeys = ca.filter((k) => cb.indexOf(k) < 0);
    if (addedKeys.length)
      note(
        "added",
        byCount(addedKeys.length, oneAddition, manyAdditions) + list(addedKeys),
      );
    if (removedKeys.length)
      note(
        "removed",
        byCount(removedKeys.length, oneRemoval, manyRemovals) +
          list(removedKeys),
      );
  }
  if (
    canonical(a.meta && a.meta.documentationLinks) !==
    canonical(b.meta && b.meta.documentationLinks)
  )
    note("modified", "Lien de documentation modifié");
  const nameA = a.meta && a.meta.name;
  const nameB = b.meta && b.meta.name;
  if (canonical(nameA) !== canonical(nameB))
    note(
      "modified",
      "Composant renommé : " + showValue(nameA) + " → " + showValue(nameB),
    );
  const levelA = a.meta && a.meta.templateLevel;
  const levelB = b.meta && b.meta.templateLevel;
  if (canonical(levelA) !== canonical(levelB))
    note(
      "modified",
      "Niveau de template : " + showValue(levelA) + " → " + showValue(levelB),
    );
  const issueCount = (f: SheetLike): number =>
    (f.issues || []).filter((i) => i.level !== "info").length;
  if (issueCount(a) !== issueCount(b))
    note("excluded", "Défauts : " + issueCount(a) + " → " + issueCount(b));

  // safety net: any change that raises the version has at least one line
  if (
    previous &&
    !sentences.some((p) => p.category !== "excluded") &&
    canonical(sheetForVersion(a)) !== canonical(sheetForVersion(b))
  )
    note("modified", "Autre changement dans le JSON");

  return sentences;
}

// What changed between two sheets, in French sentences for the Changements tab.
function compareSheets(
  previous: SheetLike | null | undefined,
  next: SheetLike | null | undefined,
): Sentence[] {
  const sentences: Sentence[] = classifyChanges(previous, next).map((c) =>
    c.title === undefined
      ? c.text
      : {
          title: c.title,
          lines: c.lines.map(
            (l) => l.label + " : " + l.before + " → " + l.after,
          ),
        },
  );
  if (sentences.length > 20) {
    const rest = sentences.length - 20;
    return sentences
      .slice(0, 20)
      .concat(
        "et " +
          rest +
          " " +
          (rest > 1 ? "autres changements" : "autre changement"),
      );
  }
  return sentences;
}

// ------------------------------------------------------------ changelog
const FIRST_VERSION = "Première version du composant";
const OVERHAUL = "Refonte complète du composant";
const MD_SHEET = "Fiche Markdown modifiée";
const lowerFirst = (t: string): string =>
  t.charAt(0).toLowerCase() + t.slice(1);

// The changelog entry for the move from one sheet to the other: { added, modified, removed }.
// A style change fits on one line: « size=medium : marges horizontales, 24 → 16 ».
interface EntryLines {
  added: string[];
  modified: string[];
  removed: string[];
}
interface ChangelogEntry extends EntryLines {
  version: string;
  date: string;
}
function changelogEntry(
  previous: SheetLike | null | undefined,
  next: SheetLike | null | undefined,
): EntryLines {
  const entry: EntryLines = { added: [], modified: [], removed: [] };
  for (const c of classifyChanges(previous, next)) {
    if (c.category === "excluded") continue;
    if (c.title === undefined) entry[c.category].push(c.text);
    else
      for (const l of c.lines)
        entry.modified.push(
          c.title +
            " : " +
            lowerFirst(l.label) +
            ", " +
            l.before +
            " → " +
            l.after,
        );
  }
  return entry;
}

// The date of an entry, displayed as DD/MM/YY. The history keeps it in the YYYY-MM-DD format.
function displayedDate(date: string): string {
  const m = /^\d{2}(\d{2})-(\d{2})-(\d{2})$/.exec(date);
  return m ? m[3] + "/" + m[2] + "/" + m[1] : date;
}

// The Markdown of the changelog, from the most recent entry to the oldest. An empty section is omitted.
function renderChangelog(
  name: string,
  history: ChangelogEntry[] | null | undefined,
): string {
  const blocks = [
    "# Changelog " +
      (/^[aeiouàâéèêëîïôöùûü]/i.test(name) ? "d'" : "de ") +
      name,
  ];
  for (const e of history || []) {
    blocks.push("## " + e.version + " - " + displayedDate(e.date));
    const sections: ["added" | "modified" | "removed", string][] = [
      ["added", "Ajouté"],
      ["modified", "Modifié"],
      ["removed", "Retiré"],
    ];
    for (const [key, title] of sections) {
      if (e[key] && e[key].length)
        blocks.push(
          "### " + title + "\n" + e[key].map((x) => "- " + x).join("\n"),
        );
    }
  }
  return blocks.join("\n\n") + "\n";
}

// The history after an export. Inputs: the base (last exported JSON), the history and the previous
// version stored in the component set, the new sheet, the chosen version and the checked boxes.
// Returns { history, previous }: previous is the JSON to store as the previous version.
interface Choices {
  keep?: boolean;
  overhaul?: boolean;
  sheetMd?: boolean;
}
interface Chosen {
  version: string;
  level: string | null;
  first: boolean;
  none: boolean;
  kept?: boolean;
}
interface HistoryInput {
  base: SheetLike | null;
  sheet: SheetLike;
  chosen: Chosen;
  date: string;
  choices?: Choices;
  history?: ChangelogEntry[];
  previous?: SheetLike | null;
}
function computeHistory(p: HistoryInput): {
  history: ChangelogEntry[];
  previous: SheetLike | null;
} {
  const { base, sheet, chosen, date } = p;
  const choices: Choices = p.choices || {};
  const stored: ChangelogEntry[] = Array.isArray(p.history) ? p.history : [];
  const previous = p.previous || null;
  const withoutVersion = (v: string): ChangelogEntry[] =>
    stored.filter((e) => e.version !== v);
  const emptyEntry = (version: string): ChangelogEntry => ({
    version,
    date,
    added: [],
    modified: [],
    removed: [],
  });
  // the lines specific to the checked boxes: the overhaul at the top of Modifié, the Markdown sheet
  // only if the JSON did not change
  const detail = (e: EntryLines): boolean =>
    e.added.length > 0 ||
    e.removed.length > 0 ||
    e.modified.some((x) => x !== OVERHAUL && x !== MD_SHEET);
  const withChoices = (entry: ChangelogEntry): ChangelogEntry => {
    const modified = entry.modified.slice();
    if (choices.overhaul && modified.indexOf(OVERHAUL) < 0)
      modified.unshift(OVERHAUL);
    if (
      choices.sheetMd &&
      !choices.overhaul &&
      !detail(entry) &&
      modified.indexOf(MD_SHEET) < 0
    )
      modified.push(MD_SHEET);
    return Object.assign({}, entry, { modified: modified });
  };
  // a component exported before the changelog and still at 1.0.0 also starts at its first version
  const bootstrap =
    !stored.length &&
    chosen.version === "1.0.0" &&
    (chosen.none || chosen.kept);
  if (chosen.first || bootstrap) {
    const e = emptyEntry("1.0.0");
    e.added.push(FIRST_VERSION);
    return { history: [e], previous: null };
  }
  if (chosen.none) return { history: stored, previous };
  if (chosen.kept) {
    const v = chosen.version;
    const existing = stored.find((e) => e.version === v);
    if (existing && existing.added.indexOf(FIRST_VERSION) >= 0) {
      return {
        history: stored.map((e) =>
          e === existing ? Object.assign({}, e, { date }) : e,
        ),
        previous,
      };
    }
    let entry: ChangelogEntry;
    if (previous) {
      // recomputed from the previous version: nothing piles up from one export to the next
      const computed = changelogEntry(previous, sheet);
      // the overhaul, and the Markdown sheet as long as the JSON did not change, stay in the entry
      const keptLines = existing
        ? existing.modified.filter(
            (x) => x === OVERHAUL || (x === MD_SHEET && !detail(computed)),
          )
        : [];
      entry = Object.assign(emptyEntry(v), computed, {
        modified: keptLines.concat(computed.modified),
      });
    } else {
      // without a previous version, the new lines are added to the existing entry, without duplicates
      const computed = changelogEntry(base, sheet);
      entry = existing
        ? {
            version: v,
            date,
            added: existing.added.slice(),
            modified: existing.modified.slice(),
            removed: existing.removed.slice(),
          }
        : emptyEntry(v);
      const keys: ("added" | "modified" | "removed")[] = [
        "added",
        "modified",
        "removed",
      ];
      for (const key of keys)
        for (const x of computed[key])
          if (entry[key].indexOf(x) < 0) entry[key].push(x);
    }
    entry = withChoices(entry);
    const history = existing
      ? stored.map((e) => (e === existing ? entry : e))
      : [entry].concat(stored);
    return { history, previous };
  }
  // new version: the entry compares the base with the new sheet
  const computed = changelogEntry(base, sheet);
  const entry = withChoices(
    Object.assign(emptyEntry(chosen.version), computed),
  );
  return {
    history: [entry].concat(withoutVersion(chosen.version)),
    previous: base,
  };
}
// ------------------------------------------------------------ versions
// Each component has its own version X.Y.Z, independent of the code. It is written in
// meta.version at export, and the comparison base is the last exported JSON, stored
// in the component set (see BASE_NAMESPACE).
const BASE_NAMESPACE = "canopee_sheets";
const BASE_KEY = "export";
// The changelog and the previous version are stored in the same namespace, under separate
// keys: Figma limits each entry to 100 KB.
const CHANGELOG_KEY = "changelog";
const PREVIOUS_KEY = "previous-version";

// The sheet without what never counts in a change: the format, the issues, the tool,
// the versions, the Figma file name and the Figma keys, the position of the variants on the canvas
// and the way style overrides are grouped (only the styles of each variant count).
function sheetForVersion(sheet: SheetLike | null | undefined): ComparableSheet {
  const c: SheetLike = JSON.parse(JSON.stringify(sheet || {}));
  delete c.formatVersion;
  delete c.issues;
  delete c._tool;
  if (c.meta) {
    delete c.meta.version;
    delete c.meta.tokensVersion;
    delete c.meta.library;
    delete c.meta.figmaKey;
  }
  const indexes: (
    "tokens" | "textStyles" | "components" | "modeCollections"
  )[] = ["tokens", "textStyles", "components", "modeCollections"];
  for (const index of indexes) {
    for (const entry of Object.values(c[index] || {}))
      if (entry && typeof entry === "object") {
        delete entry.library;
        delete entry.key;
      }
  }
  const out: ComparableSheet = { ...c };
  if (c.styles && Array.isArray(c.variants)) {
    const effectiveByVariant: Record<string, VariantStyles> = {};
    for (const v of c.variants)
      effectiveByVariant[canonical(v.values)] = effectiveStyles(
        c.styles,
        v.values,
      );
    out.styles = effectiveByVariant;
  }
  if (Array.isArray(c.variants))
    out.variants = c.variants.map((v) => ({ values: v.values }));
  return out;
}

// Level of the change between two JSON: 'minor' (properties, slots, layers, variants),
// 'patch' (any other difference) or null (nothing changed). The major level is never
// guessed: the designer chooses it.
function changeLevel(
  previous: SheetLike | null | undefined,
  next: SheetLike | null | undefined,
): "minor" | "patch" | null {
  const a = sheetForVersion(previous);
  const b = sheetForVersion(next);
  // properties are compared in their order, as compareSheets does
  const properties = (f: ComparableSheet): string =>
    canonical(Object.entries((f.api && f.api.props) || {}));
  const slots = (f: ComparableSheet): string =>
    canonical((f.structure && f.structure.slots) || {});
  const layers = (f: ComparableSheet): string =>
    canonical((f.structure && f.structure.trees) || []);
  const variants = (f: ComparableSheet): string =>
    (f.variants || [])
      .map((v) => canonical(v.values))
      .sort()
      .join("|");
  if (
    properties(a) !== properties(b) ||
    slots(a) !== slots(b) ||
    layers(a) !== layers(b) ||
    variants(a) !== variants(b)
  )
    return "minor";
  return canonical(a) !== canonical(b) ? "patch" : null;
}

const VERSION_PATTERN = /^(\d+)\.(\d+)\.(\d+)$/;

// Next version after a version X.Y.Z, for a level 'major', 'minor' or 'patch'.
function nextVersion(version: unknown, level: string): string | null {
  const m = VERSION_PATTERN.exec(String(version));
  if (!m) return null;
  const x = Number(m[1]),
    y = Number(m[2]),
    z = Number(m[3]);
  if (level === "major") return x + 1 + ".0.0";
  if (level === "minor") return x + "." + (y + 1) + ".0";
  if (level === "patch") return x + "." + y + "." + (z + 1);
  return null;
}

// What the comparison with the base says about the version: first version, current version
// (the one of the base) and detected level.
type VersionInfo =
  | { first: true; current: null; level: null }
  | { first: false; current: string; level: string | null };
function analyzeVersion(
  base: SheetLike | null | undefined,
  next: SheetLike,
): VersionInfo {
  if (!base) return { first: true, current: null, level: null };
  const v = base.meta && base.meta.version;
  return {
    first: false,
    current: v && VERSION_PATTERN.test(String(v)) ? v : "1.0.0",
    level: changeLevel(base, next),
  };
}

// The version retained according to the answers of the interface. Keep (« Non » to the delivery question):
// the current version, as long as nothing is delivered to the devs. Complete overhaul: major.
// Markdown sheet modified: patch, when nothing changed in the JSON.
function chooseVersion(info: VersionInfo, options?: Choices): Chosen {
  const choices: Choices = options || {};
  if (info.first)
    return { version: "1.0.0", level: null, first: true, none: false };
  if (choices.keep)
    return {
      version: info.current,
      level: null,
      first: false,
      none: false,
      kept: true,
    };
  if (choices.overhaul)
    return {
      version: nextVersion(info.current, "major") ?? info.current,
      level: "major",
      first: false,
      none: false,
    };
  if (info.level)
    return {
      version: nextVersion(info.current, info.level) ?? info.current,
      level: info.level,
      first: false,
      none: false,
    };
  if (choices.sheetMd)
    return {
      version: nextVersion(info.current, "patch") ?? info.current,
      level: "patch",
      first: false,
      none: false,
    };
  return { version: info.current, level: null, first: false, none: true };
}

// ------------------------------------------------------------ design tokens version
// The first published version of Canopée, from 2.0.0, whose tokens file contains
// all the tokens of the component. The network is only called here, never in the extraction.
const TOKENS_REPO = {
  name: "AxaFrance/design-system",
  path: "packages/canopee-css/design-tokens-canopee.resolver.json",
  firstVersion: "2.0.0",
  // Text styles are stored under this group, in the Styles set of the tokens file.
  stylesGroup: "typography",
  // Name of this group in the versions already published: publishedPaths maps it back to the current name.
  oldStylesGroup: "typographie",
};
const UNREACHABLE_MESSAGE =
  "GitHub ne répond pas : la version des design tokens n'a pas pu être calculée.";
const GITHUB_LIMIT_MESSAGE =
  "GitHub limite les appels depuis ce poste : la version des design tokens n'a pas pu être calculée. Réessayer plus tard.";
const NO_FILE_MESSAGE =
  "Aucune version publiée de Canopée ne contient le fichier de design tokens.";
// A call to GitHub that does not answer after this timeout (in milliseconds) fails.
const GITHUB_TIMEOUT = 10000;

const compareVersions = (a: string, b: string): number => {
  const pa = a.split(".").map(Number),
    pb = b.split(".").map(Number);
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2];
};

// The paths of all the tokens of a published tokens file: « color.blue.700 ». The sets
// have sources, nested groups, and a token is a node that carries $value.
function publishedPaths(doc: unknown): Set<string> {
  const paths = new Set<string>();
  const visit = (node: unknown, segments: string[]): void => {
    if (!isRecord(node)) return;
    if ("$value" in node) {
      const group =
        segments[0] === TOKENS_REPO.oldStylesGroup
          ? TOKENS_REPO.stylesGroup
          : segments[0];
      paths.add([group].concat(segments.slice(1)).join("."));
      return;
    }
    for (const k of Object.keys(node))
      if (k.charAt(0) !== "$") visit(node[k], segments.concat(k));
  };
  for (const set of isRecord(doc) && isRecord(doc.sets)
    ? Object.values(doc.sets)
    : []) {
    for (const source of isRecord(set) && Array.isArray(set.sources)
      ? set.sources
      : [])
      visit(source, []);
  }
  return paths;
}

// What the tokens file must contain: the variables of the component (color/blue/700
// gives color.blue.700) and its text styles (label/1/semibold gives typography.label.1.semibold).
function requiredTokens(
  tokens: Index | undefined,
  textStyles: Index | undefined,
): { name: string; path: string; where: string }[] {
  const required: { name: string; path: string; where: string }[] = [];
  for (const name of Object.keys(tokens || {}))
    required.push({
      name,
      path: name.split("/").join("."),
      where: "tokens." + name,
    });
  for (const name of Object.keys(textStyles || {}))
    required.push({
      name,
      path: TOKENS_REPO.stylesGroup + "." + name.split("/").join("."),
      where: "textStyles." + name,
    });
  return required;
}

// reader: { versions(): names of the tags, paths(tag): Set of the paths of the tokens file of the tag }.
// Returns { version, issues }: version is null, with an issue of level warning, when it
// cannot be computed.
interface GitHubReader {
  versions(): Promise<string[]>;
  paths(tag: string): Promise<Set<string>>;
}
async function computeTokensVersion(
  inputs: { tokens: Index; textStyles: Index },
  reader: GitHubReader,
): Promise<{ version: string | null; issues: Issue[] }> {
  const required = requiredTokens(inputs.tokens, inputs.textStyles);
  if (!required.length)
    return { version: TOKENS_REPO.firstVersion, issues: [] };
  const union = new Set<string>();
  const failure = (
    rule: string,
    message: string,
  ): { version: null; issues: Issue[] } => ({
    version: null,
    issues: [{ level: "warning", rule, where: "meta.tokensVersion", message }],
  });
  try {
    const versions = (await reader.versions())
      .filter(
        (n) =>
          VERSION_PATTERN.test(n) &&
          compareVersions(n, TOKENS_REPO.firstVersion) >= 0,
      )
      .sort(compareVersions);
    if (!versions.length) throw new Error("aucune version publiée");
    let withoutFile = 0;
    for (const v of versions) {
      let published;
      try {
        published = await reader.paths(v);
      } catch (e) {
        // a tag whose tokens file does not exist is ignored, the next one is tried
        if (isRecord(e) && e.status === 404) {
          withoutFile++;
          continue;
        }
        throw e;
      }
      if (required.every((r) => published.has(r.path)))
        return { version: v, issues: [] };
      for (const c of published) union.add(c);
    }
    if (withoutFile === versions.length)
      return failure("tokens-no-file", NO_FILE_MESSAGE);
  } catch (e) {
    const status = isRecord(e) ? e.status : undefined;
    if (status === 403 || status === 429)
      return failure("tokens-github-limit", GITHUB_LIMIT_MESSAGE);
    return failure("tokens-unreachable", UNREACHABLE_MESSAGE);
  }
  const missing = required.filter((r) => !union.has(r.path));
  const issues: Issue[] = missing.length
    ? missing.map((r): Issue => ({
        level: "warning",
        rule: "token-unpublished",
        where: r.where,
        message:
          "Token absent de toutes les versions publiées de Canopée : " +
          r.name +
          ".",
      }))
    : [
        {
          level: "warning",
          rule: "tokens-no-common-version",
          where: "meta.tokensVersion",
          message:
            "Aucune version publiée de Canopée ne contient tous les tokens du composant.",
        },
      ];
  return { version: null, issues };
}

// GitHub reader, read only, on the public repo. The list of tags and the files already
// read are kept for the session. A call that does not answer within the timeout fails, and a
// non-ok response throws an error that carries its HTTP status (e.status). The test provides its own
// reader, or sets the timeout: no network call goes through there.
const pathsCache = new Map<string, Set<string>>();
let versionsCache: string[] | null = null;
const fetchGitHub = async <T>(
  url: string,
  timeout: number,
  parse: (r: FetchResponse) => T | Promise<T>,
): Promise<T> => {
  let timer: number | undefined;
  const limit = new Promise<never>((resolve, reject) => {
    timer = setTimeout(
      () => reject(new Error("GitHub n'a pas répondu en " + timeout + " ms")),
      timeout,
    );
  });
  try {
    return await Promise.race([
      (async () => {
        const r = await fetch(url);
        if (!r.ok)
          throw Object.assign(new Error("GitHub " + r.status), {
            status: r.status,
          });
        return parse(r);
      })(),
      limit,
    ]);
  } finally {
    if (timer !== undefined) clearTimeout(timer);
  }
};
const createGitHubReader = (timeout: number): GitHubReader => ({
  async versions() {
    if (!versionsCache)
      versionsCache = await fetchGitHub(
        "https://api.github.com/repos/" +
          TOKENS_REPO.name +
          "/tags?per_page=100",
        timeout,
        async (r) => {
          const tags: unknown = await r.json();
          return Array.isArray(tags)
            ? tags.map((t: unknown) => String(isRecord(t) ? t.name : ""))
            : [];
        },
      );
    return versionsCache;
  },
  async paths(tag) {
    let cached = pathsCache.get(tag);
    if (!cached) {
      cached = await fetchGitHub(
        "https://raw.githubusercontent.com/" +
          TOKENS_REPO.name +
          "/" +
          tag +
          "/" +
          TOKENS_REPO.path,
        timeout,
        async (r) => publishedPaths(JSON.parse(await r.text())),
      );
      pathsCache.set(tag, cached);
    }
    return cached;
  },
});
const githubReader = createGitHubReader(GITHUB_TIMEOUT);

// ------------------------------------------------------------ doc rules
// At launch, the plugin reads its rules in the Properties page, on the branch where the doc evolves.
const RULES_URL =
  "https://raw.githubusercontent.com/AxaFrance/design-system/ai-ready-docs/ai-ready-docs/regles/03-proprietes.md";
// A short timeout: the first check of the component waits for this reading.
const RULES_TIMEOUT = 3000;
const UNREADABLE_RULES_MESSAGE =
  "Les règles de la doc n'ont pas pu être lues. Le plugin contrôle avec sa copie.";
const DOC_GROUPS: Record<string, number> = {
  Variante: 0,
  Booléen: 1,
  Texte: 2,
  "Instance swap": 3,
  Slot: 4,
};

// The tables of the Properties page, in the shape of the nomenclature constants. A list
// with a value that is not in kebab-case is a sentence: the property has no imposed
// values. Throws an error if the page no longer has the expected shape.
interface Rules {
  order: string[][];
  fixed: Record<string, string[]>;
  trueFalse: Record<string, string[]>;
  synonyms: Record<string, string>;
}
function readPropertyRules(text: string): Rules {
  const lines = (title: string): string[][] => {
    const section = text.split("\n## ").find((x) => x.indexOf(title) === 0);
    if (!section) throw new Error("section absente : " + title);
    const body = section
      .split("\n")
      .filter((l) => l.charAt(0) === "|")
      .slice(2)
      .map((l) =>
        l
          .split("|")
          .slice(1, -1)
          .map((c) => c.trim()),
      );
    if (!body.length) throw new Error("tableau vide : " + title);
    return body;
  };
  const rules: Rules = {
    order: [[], [], [], [], []],
    fixed: {},
    trueFalse: {},
    synonyms: {},
  };
  for (const [names, type, values] of lines("Variantes et booléens").concat(
    lines("Contenu"),
  )) {
    if (!(type in DOC_GROUPS) || values === undefined)
      throw new Error("ligne illisible : " + names);
    for (const name of names.split(", ").filter((x) => x !== "show*")) {
      if (!camelOK(name)) throw new Error("nom illisible : " + name);
      rules.order[DOC_GROUPS[type]].push(name);
      const list = values.split(", ");
      if (type !== "Variante" || !list.every((v) => /^[a-z0-9-]+$/.test(v)))
        continue;
      if (list[0] === "true") rules.trueFalse[name] = list;
      else rules.fixed[name] = list;
    }
  }
  if (rules.order.some((group) => !group.length))
    throw new Error("un type de propriété a disparu");
  for (const [name, replacement] of lines("Les noms à éviter")) {
    if (!name || !replacement) throw new Error("ligne illisible : " + name);
    rules.synonyms[name] = replacement;
  }
  return rules;
}

// Replaces the embedded copy. The arrays keep their identity: the extraction reads them directly.
function applyRules(rules: Rules): void {
  ORDER.splice(0, ORDER.length, ...rules.order);
  const replace = <T>(
    copy: Record<string, T>,
    parsed: Record<string, T>,
  ): void => {
    for (const name of Object.keys(copy)) delete copy[name];
    Object.assign(copy, parsed);
  };
  replace(FIXED_VALUES, rules.fixed);
  replace(TRUE_FALSE_VARIANTS, rules.trueFalse);
  replace(SYNONYMS, rules.synonyms);
}

// The properties that have a list in the embedded copy, and no longer in the doc.
const lostValues = (rules: Rules): string[] =>
  Object.keys(FIXED_VALUES)
    .concat(Object.keys(TRUE_FALSE_VARIANTS))
    .filter(
      (name) =>
        rules.order[0].indexOf(name) >= 0 &&
        !rules.fixed[name] &&
        !rules.trueFalse[name],
    );

// Reads the doc once per session. Returns the text of the banner, or null if all is well.
let rulesLoading: Promise<string | null> | null = null;
const loadRules = () => {
  if (!rulesLoading) {
    rulesLoading = (async () => {
      try {
        const rules = readPropertyRules(
          await fetchGitHub(RULES_URL, RULES_TIMEOUT, (r) => r.text()),
        );
        const lost = lostValues(rules);
        applyRules(rules);
        return lost.length
          ? "La doc ne donne plus de liste de valeurs pour " +
              lost.join(", ") +
              ". Le plugin ne contrôle plus ces valeurs."
          : null;
      } catch (e) {
        return UNREADABLE_RULES_MESSAGE;
      }
    })();
  }
  return rulesLoading;
};

// Data written by the versions up to 0.4.43, which named the namespace, one key and the fields
// of the changelog entries in French. It is read when the new key holds nothing, converted to the
// new shape, and never written again. This conversion can go once Button, IconButton and the
// Loader have been exported again with the version 0.4.44 or later.
const LEGACY_NAMESPACE = "canopee_fiches";
const LEGACY_KEYS: Record<string, string> = {
  [PREVIOUS_KEY]: "version-precedente",
};
const LEGACY_ENTRY_FIELDS: Record<string, string> = {
  ajoute: "added",
  modifie: "modified",
  retire: "removed",
  exclu: "excluded",
};
function fromLegacyEntry(entry: unknown): unknown {
  if (!isRecord(entry)) return entry;
  const converted: Record<string, unknown> = {};
  for (const field of Object.keys(entry)) {
    const known = Object.prototype.hasOwnProperty.call(
      LEGACY_ENTRY_FIELDS,
      field,
    );
    converted[known ? LEGACY_ENTRY_FIELDS[field] : field] = entry[field];
  }
  return converted;
}

// A piece of data stored in the component set, under a key of the namespace. Returns { state, value, text }:
// state is 'absent' (nothing was written), 'readable' or 'unreadable' (invalid JSON, or wrong
// shape: an array for the changelog, an object for the JSON). value is null
// unless the data is readable, and text is the raw string read.
// The only place that reads the stored data: first the new keys, then the legacy ones.
interface Stored<T> {
  state: "absent" | "readable" | "unreadable";
  value: T | null;
  text: string;
}
// The changelog is a list, the JSON an object.
const isHistory = (value: unknown): value is ChangelogEntry[] =>
  Array.isArray(value);
const isSheetLike = (value: unknown): value is SheetLike => isRecord(value);
function readStored<T>(
  node: Layer,
  key: string,
  isShape: (value: unknown) => value is T,
): Stored<T> {
  let text = "";
  try {
    text = node.getSharedPluginData(BASE_NAMESPACE, key) || "";
    let legacy = false;
    if (!text) {
      text =
        node.getSharedPluginData(LEGACY_NAMESPACE, LEGACY_KEYS[key] ?? key) ||
        "";
      legacy = !!text;
    }
    if (!text) return { state: "absent", value: null, text: "" };
    let value: unknown = JSON.parse(text);
    if (legacy && key === CHANGELOG_KEY && Array.isArray(value))
      value = value.map(fromLegacyEntry);
    return isShape(value)
      ? { state: "readable", value, text }
      : { state: "unreadable", value: null, text };
  } catch (e) {
    return { state: "unreadable", value: null, text };
  }
}

// Today's date, in the YYYY-MM-DD format.
function todayDate(): string {
  const d = new Date();
  const pad2 = (n: number): string => (n < 10 ? "0" : "") + n;
  return (
    d.getFullYear() + "-" + pad2(d.getMonth() + 1) + "-" + pad2(d.getDate())
  );
}

// ------------------------------------------------------------ interface
const WIDTH = 440;
const INITIAL_HEIGHT = 480;
// Automatic height: follows the content, within these bounds.
const AUTO_HEIGHT_MIN = 320;
const AUTO_HEIGHT_MAX = 760;
figma.showUI(__html__, {
  width: WIDTH,
  height: INITIAL_HEIGHT,
  themeColors: true,
});

// Manual size: dragged from the handle of the interface, kept on the machine
// (figma.clientStorage), and takes precedence over the automatic height as long as it is active.
const SIZE_KEY = "size";
const MANUAL_BOUNDS = {
  widthMin: 320,
  widthMax: 1000,
  heightMin: 300,
  heightMax: 1200,
};

let manualSize = false;
let lastSize = { width: WIDTH, height: INITIAL_HEIGHT };

const resizeWindow = (width: number, height: number): void => {
  lastSize = { width, height };
  figma.ui.resize(width, height);
};

const boundManualSize = (
  width: number,
  height: number,
): { width: number; height: number } => ({
  width: Math.min(
    Math.max(width, MANUAL_BOUNDS.widthMin),
    MANUAL_BOUNDS.widthMax,
  ),
  height: Math.min(
    Math.max(height, MANUAL_BOUNDS.heightMin),
    MANUAL_BOUNDS.heightMax,
  ),
});

// Stored size, read again at opening. A storage error never prevents the plugin from opening.
(async () => {
  try {
    const size = await figma.clientStorage.getAsync(SIZE_KEY);
    if (
      size &&
      typeof size.width === "number" &&
      typeof size.height === "number"
    ) {
      const bounded = boundManualSize(size.width, size.height);
      manualSize = true;
      resizeWindow(bounded.width, bounded.height);
    }
  } catch (e) {
    // Storage unavailable: the window keeps its automatic size.
  }
})();

// The component or variant set that contains a layer, unless going through an instance.
function componentAncestor(n: Layer): Layer | null {
  for (let p = n.parent; p; p = p.parent) {
    if (p.type === "COMPONENT_SET") return p;
    if (p.type === "COMPONENT")
      return p.parent && p.parent.type === "COMPONENT_SET" ? p.parent : p;
    if (p.type === "INSTANCE" || p.type === "PAGE" || p.type === "DOCUMENT")
      return null;
  }
  return null;
}

// The targeted component: the selection, brought back to its variant set. An instance
// points to its main component, a layer to the component that contains it.
// After a click on an issue, the selection stays attached to the displayed component.
let displayedTarget: Layer | null = null;
const isInside = (n: Layer, ancestor: Layer): boolean => {
  for (let p: Layer | ParentLayer | null | undefined = n; p; p = p.parent)
    if (p === ancestor) return true;
  return false;
};

async function currentTarget(): Promise<{
  node: Layer;
  viaInstance: boolean;
} | null> {
  const sel = figma.currentPage.selection;
  if (!sel.length) return null;
  const shown = displayedTarget;
  if (shown && !shown.removed && sel.every((x) => isInside(x, shown)))
    return { node: shown, viaInstance: false };
  displayedTarget = null;
  let n = sel[0];
  let viaInstance = false;
  // a layer in a component points to the component, but an instance keeps its main component
  if (
    n.type !== "COMPONENT" &&
    n.type !== "COMPONENT_SET" &&
    n.type !== "INSTANCE"
  ) {
    const parent = componentAncestor(n);
    if (parent) return { node: parent, viaInstance: false };
  }
  if (n.type === "INSTANCE") {
    const mc = await n.getMainComponentAsync();
    if (mc) {
      n = mc;
      viaInstance = true;
    }
  }
  if (n.type === "COMPONENT" && n.parent && n.parent.type === "COMPONENT_SET")
    n = n.parent;
  if (n.type !== "COMPONENT_SET" && n.type !== "COMPONENT") return null;
  return { node: n, viaInstance };
}

const fileRoot = (name: string): string =>
  withoutCopyPrefix(name)
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[\/\\:*?"<>|]/g, "-");
const fileName = (name: string): string => fileRoot(name) + ".json";
const changelogName = (name: string): string =>
  fileRoot(name) + "-changelog.md";

// What the component card displays: name, variants, properties and last stored version.
function describeCard(c: { node: Layer; viaInstance: boolean }): Card {
  const n = c.node;
  let properties = 0;
  try {
    properties = Object.keys(n.componentPropertyDefinitions || {}).length;
  } catch (e) {
    // Simple display counter: zero if the read fails.
  }
  // the last stored version, read in the shared base: the interface shows it before any generation
  // (an unreadable base gives none)
  const base = readStored(n, BASE_KEY, isSheetLike).value;
  return {
    id: n.id,
    name: withoutCopyPrefix(n.name),
    variants: n.type === "COMPONENT_SET" ? (n.children || []).length : 1,
    properties,
    viaInstance: c.viaInstance,
    latestVersion:
      base && base.meta && base.meta.version ? base.meta.version : null,
  };
}

async function sendSelection(): Promise<void> {
  const c = await currentTarget();
  if (!c || (watcher && watcher.id !== c.node.id)) stopWatching();
  if (!c) {
    post({ type: "selection", name: null });
    return;
  }
  post({ type: "selection", ...describeCard(c) });
}
figma.on("selectionchange", sendSelection);

// A page of the file (its type is what tells it).
const isPageNode = (p: Layer | ParentLayer): p is PageNode => p.type === "PAGE";
const pageOf = (n: Layer | ParentLayer | null | undefined): PageNode | null => {
  for (let p = n; p; p = p.parent) if (isPageNode(p)) return p;
  return null;
};

// Watching the generated component: a change in Figma makes the JSON stale.
interface Watcher {
  id: string;
  root: Layer;
  page: PageNode;
  listener: (event: NodeChangeEvent) => void;
  stale: boolean;
  timer: number | null;
}
let watcher: Watcher | null = null;

const POSITION_PROPERTIES = ["x", "y", "relativeTransform"];

// Does a change reported by Figma touch the component? ids: the identifiers of the component
// when the watching started.
function concernsComponent(
  change: NodeChange,
  root: Layer,
  ids: Set<string>,
): boolean {
  const c = change;
  // moving the root on the canvas does not change the component
  if (
    c.id === root.id &&
    "properties" in c &&
    c.properties &&
    c.properties.every((p) => POSITION_PROPERTIES.includes(p))
  )
    return false;
  if (ids.has(c.id)) return true;
  // a layer of an instance: I<instance>;<layer>
  if (
    typeof c.id === "string" &&
    c.id.startsWith("I") &&
    ids.has(c.id.slice(1).split(";")[0])
  )
    return true;
  // a created layer: it is in the component if one of its parents is the root
  try {
    for (
      let n:
        | {
            readonly id: string;
            readonly removed?: boolean;
            readonly parent?: ParentLayer | null;
          }
        | null
        | undefined = c.node;
      n && !n.removed;
      n = n.parent
    )
      if (n.id === root.id) return true;
  } catch (e) {
    // The parent of a deleted node is not readable: the layer is not attached.
  }
  return false;
}

function stopWatching(): void {
  const s = watcher;
  if (!s) return;
  watcher = null;
  if (s.timer !== null) clearTimeout(s.timer);
  try {
    s.page.off("nodechange", s.listener);
  } catch (e) {
    // The page is no longer readable: there is nothing left to detach.
  }
}

// Watches the root on its page. Only one listener stays active: the previous one is removed first.
async function watch(root: Layer, viaInstance: boolean): Promise<void> {
  stopWatching();
  try {
    const page = pageOf(root);
    if (!page) return;
    await page.loadAsync();
    // another watcher may have started during the loading
    stopWatching();
    const ids = new Set<string>([root.id]);
    for (const n of findAll(root, () => true)) ids.add(n.id);
    const s: Watcher = {
      id: root.id,
      root,
      page,
      stale: false,
      timer: null,
      listener: () => {},
    };
    s.listener = (event) => {
      if (watcher !== s) return;
      if (
        !(event.nodeChanges || []).some((c) => concernsComponent(c, root, ids))
      )
        return;
      s.stale = true;
      post({ type: "stale", id: s.id });
      if (s.timer !== null) clearTimeout(s.timer);
      // the card follows renames and added variants, without going through the selection
      s.timer = setTimeout(() => {
        if (watcher !== s) return;
        try {
          post({ type: "card", ...describeCard({ node: root, viaInstance }) });
        } catch (e) {
          // The component is gone: the card keeps its last state.
        }
      }, 300);
    };
    watcher = s;
    page.on("nodechange", s.listener);
  } catch (e) {
    // Without watching, generation and export remain possible.
  }
}

// The last generated JSON, kept as long as the user has not copied or downloaded it.
interface Generation {
  id: string;
  sheet: Sheet;
  json: string;
  info: VersionInfo;
  chosen: Chosen;
  base: SheetLike | null;
  baseText: string;
  unreadable: boolean;
  stored: ChangelogEntry[];
  previous: SheetLike | null;
  choices: Choices;
  overhaul?: boolean;
  written?: string;
}
let lastGeneration: Generation | null = null;

// The chosen version, as the interface displays it. detected: the level found by the
// comparison, before the checkboxes.
const describeVersion = (d: Generation): VersionView => ({
  first: d.chosen.first,
  none: d.chosen.none,
  current: d.info.current,
  version: d.chosen.version,
  level: d.chosen.level,
  detected: d.info.level,
  tokensVersion: d.sheet.meta.tokensVersion,
  kept: !!d.chosen.kept,
  // the version a delivery would bring: the one of the detected level, or the major if the overhaul is checked
  next: d.info.level
    ? nextVersion(d.info.current, d.overhaul ? "major" : d.info.level)
    : null,
});

// The history that an export of this generation would give, at the given date.
const historyOf = (d: Generation, date: string) =>
  computeHistory({
    base: d.base,
    history: d.stored,
    previous: d.previous,
    sheet: d.sheet,
    chosen: d.chosen,
    choices: d.choices,
    date,
  });

// The Markdown of the changelog, as the interface displays and downloads it.
const changelogOf = (d: Generation): string =>
  renderChangelog(d.sheet.meta.name, historyOf(d, todayDate()).history);

// One handler per message of the interface. The switch below dispatches them, and its last case
// stops compiling when a message type of messages.ts has no handler.
type Handlers = {
  [K in UiToPluginMessage["type"]]: (
    msg: Extract<UiToPluginMessage, { type: K }>,
  ) => Promise<void> | void;
};
const handlers: Handlers = {
  "ui-ready": async () => {
    post({ type: "init", version: VERSION, format: FORMAT });
    const warning = await loadRules();
    if (warning) post({ type: "rules", warning });
    await sendSelection();
  },
  check: async () => {
    const c = await currentTarget();
    if (!c) {
      post({ type: "check-result", id: null, issues: [] });
      return;
    }
    const prep = prepare(c.node);
    const issues = sortIssues(await checkNomenclature(prep));
    post({
      type: "check-result",
      id: c.node.id,
      issues: detailIssues(issues, locateIssues(null, prep, issues, null)),
    });
  },
  generate: async () => {
    const c = await currentTarget();
    if (!c) {
      post({
        type: "error",
        message: "Sélectionner un composant, ou un ensemble de variantes.",
      });
      return;
    }
    // before the extraction: a change during the generation counts too
    await watch(c.node, c.viaInstance);
    const { sheet, locations } = await extractDetail(c.node, {
      progress: (done: number, total: number) =>
        post({ type: "progress", done, total }),
      computeTokensVersion: (inputs: { tokens: Index; textStyles: Index }) =>
        computeTokensVersion(inputs, githubReader),
    });
    // the version: the shared base says where we start from, and the comparison says by how much we go up
    const baseRead = readStored(c.node, BASE_KEY, isSheetLike);
    const historyRead = readStored(c.node, CHANGELOG_KEY, isHistory);
    const previousRead = readStored(c.node, PREVIOUS_KEY, isSheetLike);
    const base = baseRead.value;
    const info = analyzeVersion(base, sheet);
    const chosen = chooseVersion(info, {});
    sheet.meta.version = chosen.version;
    const json = serialize(sheet);
    // baseText: the base as it was stored at generation, to spot another export
    // before writing. unreadable: a base or a changelog that an export must not overwrite.
    lastGeneration = {
      id: c.node.id,
      sheet,
      json,
      info,
      chosen,
      base,
      baseText: baseRead.text,
      unreadable:
        baseRead.state === "unreadable" || historyRead.state === "unreadable",
      stored: historyRead.value || [],
      previous: previousRead.value,
      choices: {},
    };
    let changes: { sentences: Sentence[] } | null = null;
    try {
      if (base) changes = { sentences: compareSheets(base, sheet) };
    } catch (e) {
      // Without a readable reference export, the Changements tab stays empty.
    }
    // the designer may have renamed the component before generating
    post({ type: "card", ...describeCard(c) });
    post({
      type: "sheet",
      id: c.node.id,
      json,
      file: fileName(c.node.name),
      changelogFile: changelogName(c.node.name),
      issues: detailIssues(sheet.issues, locations),
      summary: summarize(sheet, json),
      changes,
      version: describeVersion(lastGeneration),
      changelog: changelogOf(lastGeneration),
    });
    // the interface resets its state when receiving the sheet: a change that happened during the generation is told again
    if (watcher && watcher.id === c.node.id && watcher.stale)
      post({ type: "stale", id: c.node.id });
    if (baseRead.state === "unreadable")
      post({
        type: "error",
        message:
          "La dernière version enregistrée est illisible dans le fichier Figma. Le plugin repart de la version 1.0.0, sans toucher au changelog enregistré.",
      });
    if (historyRead.state === "unreadable")
      post({
        type: "error",
        message:
          "Le changelog enregistré est illisible dans le fichier Figma. Le plugin ne le remplacera pas.",
      });
  },
  "choose-version": async (msg) => {
    const d = lastGeneration;
    if (!d || d.id !== msg.id) return;
    d.overhaul = !!msg.overhaul;
    d.choices = { overhaul: !!msg.overhaul, sheetMd: !!msg.sheetMd };
    d.chosen = chooseVersion(d.info, {
      keep: !!msg.keep,
      overhaul: !!msg.overhaul,
      sheetMd: !!msg.sheetMd,
    });
    d.sheet.meta.version = d.chosen.version;
    d.json = serialize(d.sheet);
    post({
      type: "version",
      id: d.id,
      json: d.json,
      version: describeVersion(d),
      changelog: changelogOf(d),
    });
  },
  select: async (msg) => {
    const nodes: SceneNode[] = [];
    for (const id of msg.ids || []) {
      const n = await figma.getNodeByIdAsync(id);
      if (n && n.type !== "DOCUMENT" && n.type !== "PAGE") nodes.push(n);
    }
    if (!nodes.length) {
      post({
        type: "error",
        message: "Ces calques n'existent plus. Générer de nouveau le JSON.",
      });
      return;
    }
    const page = pageOf(nodes[0]);
    if (page && page.id !== figma.currentPage.id)
      await figma.setCurrentPageAsync(page);
    const selected = nodes.filter((n) => pageOf(n) === page);
    const displayed = msg.id ? await figma.getNodeByIdAsync(msg.id) : null;
    displayedTarget =
      displayed &&
      (displayed.type === "COMPONENT" || displayed.type === "COMPONENT_SET")
        ? displayed
        : null;
    figma.currentPage.selection = selected;
    figma.viewport.scrollAndZoomIntoView(selected);
  },
  resize: (msg) => {
    if (manualSize) return;
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
      await figma.clientStorage.setAsync(SIZE_KEY, {
        width,
        height,
      });
    } catch (e) {
      // Preference not saved: the size stays applied for this session.
    }
  },
  "auto-size": async () => {
    manualSize = false;
    try {
      await figma.clientStorage.deleteAsync(SIZE_KEY);
    } catch (e) {
      // Nothing to do: the preference will be written again at the next drag.
    }
    resizeWindow(WIDTH, lastSize.height);
    post({ type: "recompute-height" });
  },
  // An export (copy or download): the JSON becomes the comparison base in the component
  // set, so that all designers start from the same version. Nothing is written if another export
  // took place since the generation, and an unreadable changelog or base is never overwritten.
  "record-export": async (msg) => {
    const d = lastGeneration;
    if (!d || d.id !== msg.id) return;
    if (watcher && watcher.id === d.id && watcher.stale) {
      post({
        type: "error",
        message:
          "Le composant a changé depuis cette génération. Rien n'a été enregistré : générer de nouveau le JSON, puis l'exporter.",
      });
      return;
    }
    const node = await figma.getNodeByIdAsync(d.id);
    if (!node)
      throw new Error(
        "Le composant n'existe plus. Générer de nouveau le JSON.",
      );
    // the stored base must be the one of the generation, or the one that an export of this generation just wrote
    const savedBase = readStored(node, BASE_KEY, isSheetLike).text;
    if (savedBase !== d.baseText && savedBase !== d.written) {
      post({
        type: "error",
        message:
          "Un autre export de ce composant a eu lieu depuis cette génération. Rien n'a été enregistré : générer de nouveau le JSON, puis l'exporter.",
      });
      return;
    }
    const base = JSON.stringify(d.sheet);
    try {
      node.setSharedPluginData(BASE_NAMESPACE, BASE_KEY, base);
    } catch (e) {
      post({
        type: "error",
        message:
          "La version " +
          d.sheet.meta.version +
          " n'a pas pu être enregistrée dans le fichier Figma (" +
          Math.max(1, Math.round(byteSize(base) / 1024)) +
          " Ko) : " +
          messageOf(e) +
          ". Le prochain export repartira de la version précédente.",
      });
      return;
    }
    d.written = base;
    if (d.unreadable) return;
    // the changelog history and the previous version, with the date of the export
    const update = historyOf(d, todayDate());
    const write = (
      key: string,
      text: string,
      what: string,
      consequence: string,
    ): void => {
      try {
        node.setSharedPluginData(BASE_NAMESPACE, key, text);
      } catch (e) {
        post({
          type: "error",
          message:
            what +
            " n'a pas pu être enregistré dans le fichier Figma (" +
            Math.max(1, Math.round(byteSize(text) / 1024)) +
            " Ko) : " +
            messageOf(e) +
            ". " +
            consequence,
        });
      }
    };
    write(
      CHANGELOG_KEY,
      JSON.stringify(update.history),
      "L'historique du changelog",
      "Le prochain changelog repartira de l'historique précédent.",
    );
    write(
      PREVIOUS_KEY,
      update.previous ? JSON.stringify(update.previous) : "",
      "Le JSON de la version précédente",
      "Une version gardée ne pourra pas être recalculée.",
    );
  },
};

// A message of unknown type is ignored; an error in a handler goes back to the interface.
figma.ui.onmessage = async (msg: UiToPluginMessage) => {
  try {
    switch (msg.type) {
      case "ui-ready":
        return await handlers["ui-ready"](msg);
      case "check":
        return await handlers.check(msg);
      case "generate":
        return await handlers.generate(msg);
      case "record-export":
        return await handlers["record-export"](msg);
      case "choose-version":
        return await handlers["choose-version"](msg);
      case "select":
        return await handlers.select(msg);
      case "resize":
        return await handlers.resize(msg);
      case "resize-manual":
        return await handlers["resize-manual"](msg);
      case "auto-size":
        return await handlers["auto-size"](msg);
      default: {
        const unhandled: never = msg;
        return unhandled;
      }
    }
  } catch (e) {
    post({ type: "error", message: messageOf(e) });
  }
};
sendSelection();

// Single access point from the test context (npm test): the functions and constants it calls directly.
const testHooks = {
  TEMPLATE_PAGES,
  readPropertyRules,
  SYNONYMS,
  RULES_URL,
  UNREADABLE_RULES_MESSAGE,
  concernsComponent,
  classifyChanges,
  changelogEntry,
  renderChangelog,
  computeHistory,
  readStored,
  createGitHubReader,
  GITHUB_LIMIT_MESSAGE,
  NO_FILE_MESSAGE,
  UNREACHABLE_MESSAGE,
  FIRST_VERSION,
  OVERHAUL,
  MD_SHEET,
  changeLevel,
  nextVersion,
  analyzeVersion,
  chooseVersion,
  computeTokensVersion,
  publishedPaths,
  requiredTokens,
  TOKENS_REPO,
  VERSION,
  FORMAT,
  ORDER,
  FIXED_VALUES,
  TRUE_FALSE_VARIANTS,
  PRIORITY,
  COPY_PREFIXES,
  withoutCopyPrefix,
  applicableTree,
  variantsPerIssue,
  issueSignature,
  extract,
  extractDetail,
  groupOverrides,
  stylesIssues,
  serialize,
  checkNomenclature,
  prepare,
  fileName,
  changelogName,
  readableLocation,
  compareSheets,
  locateIssues,
  summarize,
  matches,
  effectiveStyles,
  canonical,
};

declare global {
  var __test: typeof testHooks;
}
// Read by the tests through the vm context, never by Figma.
globalThis.__test = testHooks;
