// Généré par scripts/construire-bridge.mjs depuis src/code.ts. Ne pas modifier à la main.
// À coller tel quel dans un figma_execute, après avoir remplacé l'id ci-dessous par celui
// du component set (ou d'un composant seul). Retourne le JSON de la fiche, sous forme de texte.
const ID_COMPONENT_SET = "ID_DU_COMPONENT_SET"

const VERSION = "0.4.43";
const FORMAT = "0.4";
// The library written in the JSON. The Figma file name does not fit: in a Figma
// branch, it is the name of the branch. To review for the B2B components.
const LIBRARY = "B2C";
const TEMPLATE_PAGES = [
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
const GROUPS = {
    VARIANT: 0,
    BOOLEAN: 1,
    TEXT: 2,
    INSTANCE_SWAP: 3,
    SLOT: 4,
};
const ORDER = [
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
const FIXED_VALUES = {
    state: ["default", "hover", "focus", "press"],
    size: ["x-small", "small", "medium", "large", "x-large"],
    hierarchy: ["primary", "secondary", "tertiary"],
    tone: ["neutral", "information", "success", "warning", "error"],
    orientation: ["horizontal", "vertical"],
    placement: ["top", "bottom", "left", "right", "center"],
    sort: ["none", "ascending", "descending"],
    level: ["1", "2", "3", "4"],
};
const TRUE_FALSE_VARIANTS = {
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
const SYNONYMS = {
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
const DEFAULT_NAME = /^(frame|group|rectangle|ellipse|vector|line|polygon|star|union|subtract|intersect|exclude|boolean|component|instance|slot|section|image|text|layer)[ -]?\d*$/i;
// Prefixes of the working copies of a component: the component name is what follows.
const COPY_PREFIXES = ["Test/", "Retour/", "IA/"];
const RUNTIME_STATES = ["hover", "focus", "press", "pressed", "active"];
const LEVELS = ["error", "warning", "info"];
// Sizing of a layer in Figma, and its name in the JSON.
const SIZINGS = {
    FIXED: "fixed",
    HUG: "hug",
    FILL: "fill",
};
const ATTRIBUTES = {
    visible: "visible",
    characters: "text",
    mainComponent: "component",
};
// >>> DEBUT REGLES
// The format rules, written once: scripts/construire-retour.mjs copies this block into
// the rebuild script. Pure functions, nothing else from the plugin.
// A value that is an object with named fields.
function isRecord(x) {
    return !!x && typeof x === "object" && !Array.isArray(x);
}
// An override targets a variant when each key of its when equals the value of the variant,
// or contains it when the when gives a list of values.
function matches(when, cfg) {
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
function effectiveStyles(styles, cfg) {
    const copy = (x) => JSON.parse(JSON.stringify(x));
    const eff = {};
    const d = (styles && styles.default) || {};
    for (const c of Object.keys(d))
        if (c !== "when" && d[c] && typeof d[c] === "object")
            eff[c] = copy(d[c]);
    for (const o of (styles && styles.overrides) || []) {
        if (!matches(o.when, cfg))
            continue;
        const layers = o.styles || {};
        for (const c of Object.keys(layers)) {
            const fields = layers[c] || {};
            for (const f of Object.keys(fields)) {
                const v = fields[f];
                if (v === null) {
                    if (eff[c])
                        delete eff[c][f];
                }
                else {
                    eff[c] = eff[c] || {};
                    eff[c][f] = copy(v);
                }
            }
        }
    }
    for (const c of Object.keys(eff))
        if (!Object.keys(eff[c]).length)
            delete eff[c];
    return eff;
}
// Layer tree of a variant. A tree that carries configs only applies to the variants
// listed, and takes precedence over the choice by when. Otherwise, the most specific when wins.
function applicableTree(trees, cfg) {
    const c = canonical(cfg);
    const list = trees.find((t) => t.configs && t.configs.some((x) => canonical(x) === c));
    if (list)
        return list;
    let best = null;
    for (const t of trees) {
        if (t.configs || !matches(t.when, cfg))
            continue;
        if (!best || Object.keys(t.when).length > Object.keys(best.when).length)
            best = t;
    }
    return best;
}
// Name in kebab-case: leftIcon gives left-icon.
function kebab(s) {
    return String(s)
        .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
        .toLowerCase();
}
// Canonical serialization: sorted keys, and an absent value is distinct from any value.
function canonical(x) {
    if (x === undefined)
        return "\u0000absent";
    if (Array.isArray(x))
        return "[" + x.map(canonical).join(",") + "]";
    if (isRecord(x))
        return ("{" +
            Object.keys(x)
                .sort()
                .map((k) => JSON.stringify(k) + ":" + canonical(x[k]))
                .join(",") +
            "}");
    return JSON.stringify(x);
}
// <<< FIN REGLES
const camelOK = (s) => /^[a-z][a-zA-Z0-9]*$/.test(s);
const kebabOK = (s) => /^[a-z0-9]+(-[a-z0-9]+)*$/.test(s);
// Only Figma's internal #id suffix is removed, the name stays the designer's.
// Name of a component without the prefix of its working copy (the first one found).
const withoutCopyPrefix = (name) => {
    const n = String(name);
    const p = COPY_PREFIXES.find((x) => n.indexOf(x) === 0);
    return p ? n.slice(p.length) : n;
};
const clean = (k) => String(k)
    .replace(/#\d+:\d+$/, "")
    .trim();
const rounded = (x) => typeof x === "number" ? Math.round(x * 100) / 100 : x;
const alphaOrder = (a, b) => a < b ? -1 : a > b ? 1 : 0;
// Name of the component an instance points to: the variant set when there is one.
const componentName = (n) => {
    if (!n)
        return null;
    if (n.parent && n.parent.type === "COMPONENT_SET")
        return n.parent.name;
    const name = String(n.name);
    return name.indexOf("/") > 0 && name.indexOf("=") > 0
        ? name.split("/")[0].trim()
        : name;
};
const newContext = () => ({
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
const messageOf = (e) => String((isRecord(e) && e.message) || e);
const isInstance = (n) => n.type === "INSTANCE" && typeof n.getMainComponentAsync === "function";
// The layers below a layer, or none if the layer cannot have any.
const findAll = (n, test) => n.findAll ? n.findAll(test) : [];
const findOne = (n, test) => n.findOne ? n.findOne(test) : null;
// A read failed: the part of the JSON it was meant to fill is incomplete. The error
// becomes an issue of level error (rule lecture-impossible) instead of disappearing.
function readError(ctx, location, e, extra) {
    const msg = messageOf(e).replace(/\.+$/, "");
    ctx.errors.push({
        where: location,
        message: "Lecture impossible : " +
            msg +
            ". " +
            (extra ? extra + " " : "") +
            "Cette partie du JSON est incomplète.",
    });
}
// Registration in a { library, key } index: for equal names, the smallest key is kept,
// so that the reading order does not change the file. Figma does not give the library
// of a remote style or component: it is then null.
function register(index, name, entry) {
    const e = index[name];
    if (!e || (entry.key || "") < (e.key || ""))
        index[name] = entry;
}
// Main component of an instance, read once per extraction and per node id.
async function readMainComponent(ctx, n) {
    if (!n.id)
        return n.getMainComponentAsync();
    if (!ctx.mainComponents.has(n.id))
        ctx.mainComponents.set(n.id, await n.getMainComponentAsync());
    return ctx.mainComponents.get(n.id) || null;
}
const nodeLibrary = (n) => n && n.remote ? null : LIBRARY;
// A component (or a variant set) quoted by its name in the components index.
function registerComponent(ctx, n) {
    if (!n || !n.key)
        return null;
    const name = componentName(n);
    if (name === null)
        return null;
    register(ctx.components, name, { library: nodeLibrary(n), key: n.key });
    return name;
}
async function libraryName(ctx, coll) {
    if (!coll)
        return null;
    if (!coll.remote)
        return LIBRARY;
    if (ctx.libraries === undefined) {
        const libraries = {};
        ctx.libraries = libraries;
        try {
            const list = await figma.teamLibrary.getAvailableLibraryVariableCollectionsAsync();
            for (const c of list)
                libraries[c.key] = c.libraryName;
        }
        catch (e) {
            // The library name is optional: without it, library is null.
        }
    }
    return ctx.libraries[coll.key] || null;
}
// Name of the variable, and registration in the tokens index. Two variables with the same
// name and different keys are a duplicate: the smallest key is kept, and it is reported.
async function readToken(ctx, id) {
    if (!id)
        return null;
    let m = ctx.vars[id];
    if (m === undefined) {
        m = null;
        try {
            const v = await figma.variables.getVariableByIdAsync(id);
            if (v) {
                const coll = await figma.variables.getVariableCollectionByIdAsync(v.variableCollectionId);
                const entry = {};
                const lib = await libraryName(ctx, coll);
                if (lib)
                    entry.library = lib;
                if (coll && coll.name)
                    entry.collection = coll.name;
                if (v.key)
                    entry.key = v.key;
                m = { name: v.name, entry };
                const existing = ctx.tokens[v.name];
                if (!existing)
                    ctx.tokens[v.name] = entry;
                else if ((existing.key || "") !== (entry.key || "")) {
                    ctx.collisions.add(v.name);
                    if ((entry.key || "") < (existing.key || ""))
                        ctx.tokens[v.name] = entry;
                }
            }
        }
        catch (e) {
            readError(ctx, "tokens", e, "La variable " +
                id +
                " n'a pas pu être lue : la valeur reliée est écrite en brut.");
        }
        ctx.vars[id] = m;
    }
    return m ? m.name : null;
}
async function readValue(ctx, node, fields, raw) {
    const bv = node.boundVariables;
    if (bv) {
        for (const c of fields) {
            const id = aliasId(bv[c]);
            if (id) {
                const n = await readToken(ctx, id);
                if (n)
                    return { token: n };
            }
        }
    }
    return { raw: rounded(raw) };
}
// The variable a field is bound to: the id of its alias (a list of aliases, one per paint, has none).
const aliasId = (b) => isRecord(b) && typeof b.id === "string" && b.id ? b.id : undefined;
const hex2 = (x) => ("0" + Math.round(x * 255).toString(16)).slice(-2);
const hex = (c, a) => "#" +
    hex2(c.r) +
    hex2(c.g) +
    hex2(c.b) +
    (a !== undefined && a < 1 ? hex2(a) : "");
// Color of the first visible paint: token, or raw. Gradients and images are reported.
async function readPaint(ctx, node, field) {
    const paints = node[field];
    if (!paints || paints === figma.mixed || !paints.length)
        return null;
    const p = paints[0];
    if (!p || p.visible === false)
        return null;
    if (p.type !== "SOLID")
        return { unsupported: p.type };
    const links = [];
    const bound = node.boundVariables && node.boundVariables[field];
    const first = Array.isArray(bound) ? aliasId(bound[0]) : undefined;
    if (first)
        links.push(first);
    const color = aliasId(p.boundVariables && p.boundVariables.color);
    if (color)
        links.push(color);
    for (const l of links) {
        const n = await readToken(ctx, l);
        if (n)
            return { token: n };
    }
    const a = (typeof p.opacity === "number" ? p.opacity : 1) *
        ("a" in p.color && typeof p.color.a === "number" ? p.color.a : 1);
    return { raw: hex(p.color, a).toUpperCase() };
}
async function readEffects(ctx, node) {
    if (!node.effects || !node.effects.length)
        return null;
    const out = [];
    for (const e of node.effects) {
        if (e.visible === false ||
            (e.type !== "DROP_SHADOW" && e.type !== "INNER_SHADOW"))
            continue;
        const ef = {
            type: e.type === "DROP_SHADOW" ? "shadow" : "inner-shadow",
            radius: rounded(e.radius),
        };
        if (e.color) {
            let col = null;
            const b = e.boundVariables && e.boundVariables.color;
            if (b && b.id) {
                const n = await readToken(ctx, b.id);
                if (n)
                    col = { token: n };
            }
            ef.color = col || { raw: hex(e.color, e.color.a).toUpperCase() };
        }
        if (e.offset)
            ef.offset = { x: rounded(e.offset.x), y: rounded(e.offset.y) };
        if (typeof e.spread === "number" && e.spread)
            ef.spread = rounded(e.spread);
        out.push(ef);
    }
    return out.length ? out : null;
}
// Sizing of a layer: sizingH and sizingV, with the width or height of a fixed size.
// sparse: without the hug layers, the Figma default.
async function readSizing(ctx, node, sparse) {
    const lay = {};
    if (node.layoutSizingHorizontal &&
        (!sparse || node.layoutSizingHorizontal !== "HUG")) {
        lay.sizingH =
            SIZINGS[node.layoutSizingHorizontal] ||
                String(node.layoutSizingHorizontal).toLowerCase();
        if (node.layoutSizingHorizontal === "FIXED" &&
            typeof node.width === "number")
            lay.width = await readValue(ctx, node, ["width"], node.width);
    }
    if (node.layoutSizingVertical &&
        (!sparse || node.layoutSizingVertical !== "HUG")) {
        lay.sizingV =
            SIZINGS[node.layoutSizingVertical] ||
                String(node.layoutSizingVertical).toLowerCase();
        if (node.layoutSizingVertical === "FIXED" &&
            typeof node.height === "number")
            lay.height = await readValue(ctx, node, ["height"], node.height);
    }
    return lay;
}
// Visual styles of a layer. sparse: for a sub-element, only what matters.
async function readVisualStyles(ctx, node, sparse, location) {
    const s = {};
    try {
        const bg = await readPaint(ctx, node, "fills");
        if (bg)
            s.background = bg;
        const st = await readPaint(ctx, node, "strokes");
        if (st) {
            s.stroke = st;
            if (typeof node.strokeWeight === "number")
                s.strokeWeight = await readValue(ctx, node, ["strokeWeight", "strokeTopWeight"], node.strokeWeight);
            else if ("strokeTopWeight" in node &&
                typeof node.strokeTopWeight === "number") {
                s.strokeWeights = {
                    top: await readValue(ctx, node, ["strokeTopWeight"], node.strokeTopWeight),
                    right: await readValue(ctx, node, ["strokeRightWeight"], node.strokeRightWeight),
                    bottom: await readValue(ctx, node, ["strokeBottomWeight"], node.strokeBottomWeight),
                    left: await readValue(ctx, node, ["strokeLeftWeight"], node.strokeLeftWeight),
                };
            }
            if (node.strokeAlign)
                s.strokeAlign = String(node.strokeAlign).toLowerCase();
        }
        if (typeof node.opacity === "number" && node.opacity < 1)
            s.opacity = Math.round(node.opacity * 100) / 100;
        if (typeof node.cornerRadius === "number") {
            if (!sparse || node.cornerRadius > 0)
                s.radius = await readValue(ctx, node, ["cornerRadius", "topLeftRadius"], node.cornerRadius);
        }
        else {
            const c = [
                "topLeftRadius",
                "topRightRadius",
                "bottomRightRadius",
                "bottomLeftRadius",
            ];
            if (c.every((k) => typeof node[k] === "number") &&
                c.some((k) => (node[k] ?? 0) > 0)) {
                s.radius = {
                    topLeft: await readValue(ctx, node, ["topLeftRadius"], node.topLeftRadius),
                    topRight: await readValue(ctx, node, ["topRightRadius"], node.topRightRadius),
                    bottomRight: await readValue(ctx, node, ["bottomRightRadius"], node.bottomRightRadius),
                    bottomLeft: await readValue(ctx, node, ["bottomLeftRadius"], node.bottomLeftRadius),
                };
            }
        }
        if ("paddingTop" in node &&
            (!sparse ||
                node.paddingTop ||
                node.paddingRight ||
                node.paddingBottom ||
                node.paddingLeft)) {
            s.padding = {
                top: await readValue(ctx, node, ["paddingTop"], node.paddingTop),
                right: await readValue(ctx, node, ["paddingRight"], node.paddingRight),
                bottom: await readValue(ctx, node, ["paddingBottom"], node.paddingBottom),
                left: await readValue(ctx, node, ["paddingLeft"], node.paddingLeft),
            };
        }
        if ("itemSpacing" in node &&
            typeof node.itemSpacing === "number" &&
            (!sparse ||
                (node.layoutMode && node.layoutMode !== "NONE" && node.itemSpacing)))
            s.gap = await readValue(ctx, node, ["itemSpacing"], node.itemSpacing);
        try {
            const lay = {};
            if (node.layoutMode === "HORIZONTAL")
                lay.direction = "row";
            else if (node.layoutMode === "VERTICAL")
                lay.direction = "column";
            if (lay.direction) {
                const A = {
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
                if (node.layoutWrap === "WRAP")
                    lay.wrap = true;
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
            const limits = [
                "minWidth",
                "maxWidth",
                "minHeight",
                "maxHeight",
            ];
            for (const mk of limits)
                if (typeof node[mk] === "number")
                    lay[mk] = await readValue(ctx, node, [mk], node[mk]);
            Object.assign(lay, await readSizing(ctx, node, sparse));
            if (Object.keys(lay).length)
                s.layout = lay;
        }
        catch (e) {
            readError(ctx, location, e);
        }
        const fx = await readEffects(ctx, node);
        if (fx)
            s.effects = fx;
    }
    catch (e) {
        readError(ctx, location, e);
    }
    return s;
}
// Text: color, then the text style when there is one, otherwise the detailed typography.
async function readTextStyles(ctx, t, location) {
    const s = {};
    try {
        const col = await readPaint(ctx, t, "fills");
        if (col)
            s.textColor = col;
        let style = null;
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
            }
            catch (e) {
                readError(ctx, location, e);
            }
        }
        if (style)
            s.textStyle = style;
        else {
            const ty = {};
            if (t.fontName && t.fontName !== figma.mixed) {
                ty.fontFamily = t.fontName.family;
                ty.fontStyle = t.fontName.style;
            }
            if (typeof t.fontSize === "number")
                ty.fontSize = t.fontSize;
            if (t.lineHeight &&
                t.lineHeight !== figma.mixed &&
                t.lineHeight.unit &&
                t.lineHeight.unit !== "AUTO")
                ty.lineHeight = t.lineHeight.value;
            if (t.letterSpacing &&
                t.letterSpacing !== figma.mixed &&
                t.letterSpacing.value)
                ty.letterSpacing =
                    t.letterSpacing.unit === "PERCENT"
                        ? t.letterSpacing.value + "%"
                        : t.letterSpacing.value;
            if (t.textCase && t.textCase !== figma.mixed && t.textCase !== "ORIGINAL")
                ty.textCase = String(t.textCase).toLowerCase();
            if (t.textDecoration &&
                t.textDecoration !== figma.mixed &&
                t.textDecoration !== "NONE")
                ty.textDecoration = String(t.textDecoration).toLowerCase();
            if (Object.keys(ty).length)
                s.typography = ty;
        }
        if (t.textAlignHorizontal && t.textAlignHorizontal !== "LEFT")
            s.textAlign = String(t.textAlignHorizontal).toLowerCase();
        // sizing: only what differs from the Figma defaults (hug, top)
        const lay = await readSizing(ctx, t, true);
        if (t.textAlignVertical && t.textAlignVertical !== "TOP")
            lay.textAlignVertical = String(t.textAlignVertical).toLowerCase();
        if (Object.keys(lay).length)
            s.layout = lay;
    }
    catch (e) {
        readError(ctx, location, e);
    }
    return s;
}
// Color of an icon: the first vector of the instance, when its color is bound
// to a variable or overridden. Without an override, it is the original color of the icon, not a choice.
async function instanceVector(ctx, ins, location) {
    try {
        const v = findOne(ins, (n) => n.type === "VECTOR" || n.type === "BOOLEAN_OPERATION");
        if (!v)
            return null;
        const bg = await readPaint(ctx, v, "fills");
        if (!bg)
            return null;
        if ("token" in bg)
            return { styles: { background: bg }, id: v.id };
        const ov = (ins.overrides || []).some((o) => o.id === v.id && (o.overriddenFields || []).indexOf("fills") >= 0);
        return ov ? { styles: { background: bg }, id: v.id } : null;
    }
    catch (e) {
        readError(ctx, location, e);
        return null;
    }
}
// ------------------------------------------------------------ reading the component
// The layers of the component itself, in tree order. We do not go down into instances:
// their inside is described in their own sheet.
function collectLayers(root) {
    const out = [];
    const rec = (n) => {
        for (const c of n.children || []) {
            out.push(c);
            if (c.type !== "INSTANCE" && c.children && c.children.length)
                rec(c);
        }
    };
    rec(root);
    return out;
}
const readConfig = (name) => {
    const d = {};
    for (const part of String(name).split(",")) {
        const i = part.indexOf("=");
        if (i > 0)
            d[part.slice(0, i).trim()] = part.slice(i + 1).trim();
    }
    return d;
};
function propertyRank(name, type) {
    if (name.charAt(0) === "_")
        return [5, 0];
    const g = GROUPS[type] === undefined ? 4 : GROUPS[type];
    const i = ORDER[g].indexOf(name);
    return [g, i === -1 ? 999 : i];
}
function prepare(target) {
    const isSet = target.type === "COMPONENT_SET";
    const defs = target.componentPropertyDefinitions || {};
    const variants = isSet
        ? (target.children || []).filter((c) => c.type === "COMPONENT")
        : [target];
    if (!variants.length)
        throw new Error("Ce composant n'a aucune variante.");
    const nodes = variants.map((v) => collectLayers(v));
    // Figma does not give the order of the panel. Within one group of the nomenclature, a
    // property follows the position of the first layer it drives, then its creation order.
    const place = {};
    for (const list of nodes) {
        list.forEach((n, k) => {
            const r = n.componentPropertyReferences;
            if (!r)
                return;
            for (const attr of Object.keys(r)) {
                const key = String(r[attr]);
                if (!(key in place) || k < place[key])
                    place[key] = k;
            }
        });
    }
    const layerRank = (key) => key in place ? place[key] : Infinity;
    const props = Object.keys(defs)
        .map((key, i) => {
        const def = defs[key];
        const name = clean(key);
        return { key, name, def, i, rank: propertyRank(name, def.type) };
    })
        .sort((a, b) => a.rank[0] - b.rank[0] ||
        a.rank[1] - b.rank[1] ||
        layerRank(a.key) - layerRank(b.key) ||
        0 ||
        a.i - b.i);
    const refs = {};
    const seen = {};
    nodes.forEach((list) => {
        for (const n of list) {
            const r = n.componentPropertyReferences;
            if (!r)
                continue;
            for (const attr of Object.keys(r)) {
                const key = String(r[attr]);
                const c = { layer: n.name, attribute: ATTRIBUTES[attr] || attr };
                const sig = key + "|" + c.layer + "|" + c.attribute;
                if (seen[sig])
                    continue;
                seen[sig] = true;
                (refs[key] = refs[key] || []).push(c);
            }
        }
    });
    for (const key of Object.keys(refs))
        refs[key].sort((a, b) => alphaOrder(a.layer, b.layer) || alphaOrder(a.attribute, b.attribute));
    const axes = props.filter((p) => p.def.type === "VARIANT").map((p) => p.name);
    return { target, isSet, defs, variants, props, nodes, refs, axes };
}
function defaultVariant(prep) {
    const cfg = {};
    for (const p of prep.props)
        if (p.def.type === "VARIANT")
            cfg[p.name] = String(p.def.defaultValue);
    const def = prep.variants.find((c) => {
        const k = readConfig(c.name);
        return Object.keys(cfg).every((a) => k[a] === cfg[a]);
    }) || prep.variants[0];
    return { def, cfg };
}
// The template designated by the page of the component, or null. A template sub-component,
// with its underscore, is not a template.
function templateOf(target) {
    if ((String(target.name).split("/").pop() || "").charAt(0) === "_")
        return null;
    let p = target.parent;
    while (p && p.type !== "PAGE")
        p = p.parent;
    return (p && TEMPLATE_PAGES.find((t) => t.page === p.name)) || null;
}
// ------------------------------------------------------------ nomenclature check
async function checkNomenclature(prep) {
    const issues = [];
    const addIssue = (rule, where, message, level) => issues.push({ level: level || "warning", rule, where, message });
    // the component
    const last = String(prep.target.name).split("/").pop() || "";
    if (!/^_?[A-Z][a-zA-Z0-9]*$/.test(last))
        addIssue("composant-nom", "meta.name", "Le nom d'un composant s'écrit en PascalCase, sans espace, statut ni version.");
    else if (/[A-Z]{3,}/.test(last))
        addIssue("composant-nom", "meta.name", "Un sigle s'écrit comme un mot. Exemple : AiAnswer, et non AIAnswer.");
    // the template: its page sets the mention that opens its description
    const template = templateOf(prep.target);
    const description = String(prep.target.description || "");
    if (template) {
        if (!description.startsWith(template.mention))
            addIssue("template-description", "meta.templateLevel", "La description de ce template doit commencer par « " +
                template.mention +
                " ».");
    }
    else {
        const announced = TEMPLATE_PAGES.find((t) => description.startsWith(t.mention));
        if (announced)
            addIssue("template-page", "meta.templateLevel", "Cette description annonce un template : ranger le composant dans la page " +
                announced.page +
                ".");
    }
    // the properties
    for (const p of prep.props) {
        const name = p.name;
        const t = p.def.type;
        const where = t === "VARIANT" || t === "BOOLEAN"
            ? "api.props." + name
            : "structure.slots." + name;
        if (name.charAt(0) === "_") {
            addIssue("prop-hors-nomenclature", where, "Propriété hors nomenclature (tiret bas) : un outil qui relie Figma au code l'ignore.", "info");
            continue;
        }
        if (!camelOK(name))
            addIssue("prop-nom", where, "Le nom d'une propriété s'écrit en camelCase, sans espace, tiret, accent ni majuscule initiale.");
        if (SYNONYMS[name])
            addIssue("prop-synonyme", where, "Nom hors nomenclature : écrire " + SYNONYMS[name] + ".");
        const isPrefix = /^is[A-Z]/.test(name);
        if (isPrefix) {
            const without = name.slice(2);
            addIssue("prop-prefixe", where, "Pas de préfixe is : écrire " +
                without.charAt(0).toLowerCase() +
                without.slice(1) +
                ".");
        }
        if (t === "BOOLEAN") {
            if (name === "disabled")
                addIssue("prop-disabled", where, "disabled est une variante à part (true, false), pas un booléen.");
            else if (!isPrefix && !/^show[A-Z]/.test(name) && name !== "required")
                addIssue("prop-booleen", where, "Un booléen d'affichage commence par show. Exemple : showIcon.");
        }
        if (t === "VARIANT") {
            const opts = (p.def.variantOptions || []).map(String);
            const invalid = opts.filter((o) => !kebabOK(o));
            if (invalid.length)
                addIssue("prop-valeur", where, "Les valeurs s'écrivent en kebab-case, en minuscules, sans espace ni accent : " +
                    invalid.join(", ") +
                    ".");
            const fixed = FIXED_VALUES[name];
            if (fixed) {
                const outside = opts.filter((o) => fixed.indexOf(o) < 0);
                if (outside.length)
                    addIssue("prop-valeurs", where, "Valeurs hors nomenclature (" +
                        outside.join(", ") +
                        "). Attendu parmi : " +
                        fixed.join(", ") +
                        "." +
                        (name === "state" && outside.indexOf("disabled") >= 0
                            ? " disabled est une variante à part."
                            : ""));
            }
            const vf = TRUE_FALSE_VARIANTS[name];
            if (vf) {
                const outside = opts.filter((o) => vf.indexOf(o) < 0);
                if (outside.length)
                    addIssue("prop-valeurs", where, "Valeurs hors nomenclature (" +
                        outside.join(", ") +
                        "). Attendu : " +
                        vf.join(", ") +
                        ".");
            }
            if (name === "breakpoint" && opts.some((o) => !/^\d+$/.test(o)))
                addIssue("prop-valeurs", where, "Les valeurs de breakpoint sont des largeurs en pixels, sans unité.");
            if (name !== "state" &&
                opts.some((o) => RUNTIME_STATES.indexOf(o.toLowerCase()) >= 0))
                addIssue("prop-etat", where, "Cette propriété ressemble à l'état d'interaction : la nommer state, avec les valeurs default, hover, focus, press.");
        }
        // a content property fills the layer that carries its name
        if (t === "TEXT" || t === "INSTANCE_SWAP" || t === "SLOT") {
            const ctl = prep.refs[p.key] || [];
            const expected = t === "SLOT" ? name : name === "placeholder" ? "value" : kebab(name);
            const freeSlot = t === "SLOT" &&
                prep.nodes.some((l) => l.some((n) => n.type === "SLOT" && n.name === name));
            if (!ctl.length && !freeSlot)
                addIssue("prop-calque", where, "Cette propriété ne règle aucun calque.");
            else if (ctl.length && !ctl.some((c) => c.layer === expected))
                addIssue("prop-calque", where, "Cette propriété remplit le calque " +
                    ctl[0].layer +
                    ", qui devrait s'appeler " +
                    expected +
                    ".");
        }
    }
    // the layers, once per name
    const prefix = kebab(last.replace(/^_/, "")) + "-";
    const boundTexts = {};
    const seen = {};
    for (const list of prep.nodes) {
        for (const n of list) {
            const name = String(n.name);
            const where = "calque " + name;
            if (n.type === "TEXT")
                boundTexts[name] =
                    boundTexts[name] ||
                        !!(n.componentPropertyReferences &&
                            n.componentPropertyReferences.characters);
            const sig = n.type + "|" + name;
            if (seen[sig])
                continue;
            seen[sig] = true;
            if (DEFAULT_NAME.test(name)) {
                addIssue("calque-defaut", where, "Nom par défaut : nommer le calque par son rôle.");
                continue;
            }
            if (n.type === "TEXT" &&
                (n.autoRename === true ||
                    (typeof n.characters === "string" && n.characters === name))) {
                addIssue("calque-texte", where, "Un calque de texte porte le nom de son rôle, jamais son contenu.");
                continue;
            }
            if (n.type === "SLOT") {
                if (!camelOK(name))
                    addIssue("calque-casse", where, "Le calque d'un slot s'écrit en camelCase, comme sa propriété.");
                continue;
            }
            if (!kebabOK(name))
                addIssue("calque-casse", where, "Un calque s'écrit en kebab-case, en minuscules, sans espace ni accent.");
            if (name.indexOf(prefix) === 0)
                addIssue("calque-prefixe", where, "Un calque porte le nom de son rôle, sans reprendre celui du composant. Exemple : label, et non " +
                    prefix +
                    "label.");
            if ((n.type === "FRAME" || n.type === "GROUP") &&
                (/(^|-)(wrapper|group|frame)(-|$)/.test(name) || /-and-/.test(name)))
                addIssue("calque-cadre", where, "Un cadre prend son rôle (header, actions), ou content, ou container. Jamais wrapper, group ou frame, et il ne liste pas ce qu'il contient.");
            if (isInstance(n)) {
                try {
                    const mc = await n.getMainComponentAsync();
                    if (mc && (name === mc.name || name === componentName(mc)))
                        addIssue("calque-instance", where, "Une instance imbriquée prend le nom de son rôle dans le composant, pas celui de son composant d'origine.");
                }
                catch (e) {
                    // Optional name check: without a main component, this issue is not reported.
                }
            }
        }
    }
    for (const name of Object.keys(boundTexts)) {
        if (!boundTexts[name] && !DEFAULT_NAME.test(name))
            addIssue("texte-non-relie", "calque " + name, "Ce texte n'est relié à aucune propriété de texte.", "info");
    }
    return issues;
}
// ------------------------------------------------------------ extraction
const MAX_ICON_SIZE = 48; // beyond this, an exposed component is a base and not an icon
const PROGRESS_THRESHOLD = 40; // number of variants beyond which progress is announced
const PROGRESS_STEP = 20; // one announcement every 20 variants
// Styles of a variant in one pass: root, then each layer of its own.
async function captureVariant(ctx, prep, variant, list) {
    const s = {
        id: variant.id,
        root: await readVisualStyles(ctx, variant, false, "styles.root"),
        cand: [],
        modes: {},
    };
    try {
        const ex = variant.explicitVariableModes || {};
        for (const collId of Object.keys(ex)) {
            const coll = await figma.variables.getVariableCollectionByIdAsync(collId);
            if (!coll)
                continue;
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
    }
    catch (e) {
        readError(ctx, "styles.modes", e);
    }
    for (const el of list) {
        const nm = String(el.name) || el.type.toLowerCase();
        const es = el.type === "TEXT"
            ? await readTextStyles(ctx, el, "styles." + nm)
            : await readVisualStyles(ctx, el, true, "styles." + nm);
        const c = { nm, es, id: el.id };
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
async function layerTree(ctx, node) {
    const t = { name: String(node.name) };
    t.type = String(node.type).toLowerCase().replace(/_/g, "-");
    if (node.visible === false)
        t.hidden = true;
    if (isInstance(node)) {
        try {
            const mc = await readMainComponent(ctx, node);
            if (mc) {
                t.component = componentName(mc);
                registerComponent(ctx, mc);
            }
        }
        catch (e) {
            readError(ctx, "structure.trees", e);
        }
        return t;
    }
    if (node.children && node.children.length) {
        const kids = [];
        for (const c of node.children)
            kids.push(await layerTree(ctx, c));
        t.children = kids;
    }
    return t;
}
// The issues that can be read in the styles produced: raw value, paint not
// handled, text without style. A zero value is not an issue.
function stylesIssues(styles) {
    const out = [];
    // A raw fixed size is an issue, except for an absolute layer stretched on that axis.
    const freeSize = (parent, key) => {
        const axis = key === "width" ? "horizontal" : "vertical";
        return (parent.absolute === true &&
            isRecord(parent.constraints) &&
            parent.constraints[axis] === "stretch");
    };
    const walk = (o, path, key, parent, parentKey) => {
        if (Array.isArray(o)) {
            o.forEach((x, i) => walk(x, path + "[" + i + "]", key, parent, parentKey));
            return;
        }
        if (!isRecord(o))
            return;
        if (Object.keys(o).length === 1 && "raw" in o) {
            const size = key === "width" || key === "height";
            const excluded = size && (parentKey !== "layout" || !parent || freeSize(parent, key));
            if (o.raw !== 0 && o.raw !== null && !excluded)
                out.push({
                    level: "warning",
                    rule: "valeur-brute",
                    where: path,
                    message: "Valeur brute (" + o.raw + ") : la relier à une variable.",
                });
            return;
        }
        if ("unsupported" in o) {
            out.push({
                level: "warning",
                rule: "peinture",
                where: path,
                message: "Peinture de type " +
                    o.unsupported +
                    " non reprise : seule une couleur unie se relie à une variable.",
            });
            return;
        }
        if ("typography" in o && !("textStyle" in o))
            out.push({
                level: "warning",
                rule: "style-de-texte",
                where: path,
                message: "Texte sans style de texte : le relier à un style, la typo détaillée est reprise faute de mieux.",
            });
        for (const k of Object.keys(o))
            walk(o[k], path + "." + k, k, o, key);
    };
    walk(styles.default, "styles.default", "", null, "");
    for (const o of styles.overrides || [])
        walk(o.styles, "styles.overrides[" +
            Object.keys(o.when)
                .map((k) => k + "=" + o.when[k])
                .join(", ") +
            "]", "", null, "");
    // the same issue repeated from one variant to another is only reported once
    const groups = new Map();
    for (const i of out) {
        const location = i.where.replace(/^styles\.(default|overrides\[[^\]]*\])\./, "");
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
function variantsPerIssue(variantsStyles) {
    const n = new Map();
    for (const st of variantsStyles) {
        for (const d of stylesIssues({ default: st }))
            n.set(issueSignature(d), (n.get(issueSignature(d)) || 0) + 1);
    }
    return n;
}
function groupOverrides(axes, values, variants, baseVariant) {
    const ABSENT = "\u0000absent";
    const a = (o, k) => Object.prototype.hasOwnProperty.call(o, k);
    // units, in the order of the default then of first appearance
    const fieldsOf = new Map();
    for (const v of [baseVariant].concat(variants)) {
        for (const c of Object.keys(v.styles)) {
            if (!fieldsOf.has(c))
                fieldsOf.set(c, []);
            const list = fieldsOf.get(c) || [];
            for (const f of Object.keys(v.styles[c]))
                if (list.indexOf(f) < 0)
                    list.push(f);
        }
    }
    const units = [];
    for (const [c, list] of fieldsOf)
        for (const f of list)
            units.push({ c, f });
    const valueAt = (v, u) => a(v.styles, u.c) && a(v.styles[u.c], u.f) ? v.styles[u.c][u.f] : ABSENT;
    const targets = variants.map((v) => units.map((u) => canonical(valueAt(v, u))));
    const current = variants.map(() => units.map((u) => canonical(valueAt(baseVariant, u))));
    // candidate whens, from shortest to longest, each with the variants it targets
    const candidates = [];
    const valuesOf = (positions, k, choices) => {
        if (k === positions.length) {
            const members = [];
            variants.forEach((v, i) => {
                if (choices.every(([ax, val]) => v.cfg[ax] === val))
                    members.push(i);
            });
            if (!members.length)
                return;
            const when = {};
            for (const [ax, val] of choices)
                when[ax] = val;
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
    const subsets = (s, start, positions) => {
        if (positions.length === s) {
            valuesOf(positions, 0, []);
            return;
        }
        for (let i = start; i < axes.length; i++)
            subsets(s, i + 1, positions.concat([i]));
    };
    for (let s = 1; s <= axes.length; s++)
        subsets(s, 0, []);
    // rules kept, stored by when
    const byWhen = new Map();
    for (let s = 1; s <= axes.length; s++) {
        const ofSize = candidates.filter((c) => c.size === s);
        units.forEach((u, ui) => {
            for (;;) {
                let best = null;
                let gain = 0;
                for (const c of ofSize) {
                    const x = targets[c.members[0]][ui];
                    if (!c.members.every((i) => targets[i][ui] === x))
                        continue;
                    const n = c.members.filter((i) => current[i][ui] !== x).length;
                    if (n > gain) {
                        best = c;
                        gain = n;
                    }
                }
                if (!best)
                    break;
                const entry = byWhen.get(best.rank) || {
                    when: best.when,
                    rules: new Map(),
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
    const overrides = [];
    for (const [, entry] of [...byWhen.entries()].sort((x, y) => x[0] - y[0])) {
        const { when, rules } = entry;
        const styles = {};
        units.forEach((u, ui) => {
            if (!rules.has(ui))
                return;
            if (!a(styles, u.c))
                styles[u.c] = {};
            styles[u.c][u.f] = rules.get(ui) ?? null;
        });
        overrides.push({ when, styles });
    }
    // self-check: each re-expanded variant must get back its captured styles
    // (effectiveStyles on the captured styles alone gets rid of their empty layers)
    const redeveloped = { default: baseVariant.styles, overrides: overrides };
    for (const v of variants) {
        if (canonical(effectiveStyles(redeveloped, v.cfg)) !==
            canonical(effectiveStyles({ default: v.styles }, {})))
            throw new Error("Regroupement des surcharges incohérent pour la variante " +
                JSON.stringify(v.cfg));
    }
    return overrides;
}
async function extract(target, options) {
    return (await extractDetail(target, options)).sheet;
}
// The sheet, and for each issue of sheet.issues the nodes it designates (same order).
async function extractDetail(target, opts) {
    const options = opts || {};
    const ctx = newContext();
    const prep = prepare(target);
    const { defs, variants: variantNodes, props, nodes, refs, axes } = prep;
    const { def, cfg: cfgDef } = defaultVariant(prep);
    // variants sorted in the order of the properties, then by position
    const optsOf = {};
    for (const p of props)
        if (p.def.type === "VARIANT")
            optsOf[p.name] = (p.def.variantOptions || []).map(String);
    const orderCfg = (cfg) => {
        const o = {};
        for (const a of axes)
            if (a in cfg)
                o[a] = cfg[a];
        for (const k of Object.keys(cfg))
            if (!(k in o))
                o[k] = cfg[k];
        return o;
    };
    const lines = variantNodes.map((v, i) => ({
        v,
        i,
        cfg: orderCfg(readConfig(v.name)),
        pos: [rounded(v.x || 0), rounded(v.y || 0)],
    }));
    const valueRank = (a, val) => {
        const k = optsOf[a].indexOf(val);
        return k === -1 ? 9999 : k;
    };
    lines.sort((a, b) => {
        for (const ax of axes) {
            const d = valueRank(ax, a.cfg[ax]) - valueRank(ax, b.cfg[ax]);
            if (d)
                return d;
        }
        return a.pos[1] - b.pos[1] || a.pos[0] - b.pos[0] || a.i - b.i;
    });
    const variants = lines.map((l) => ({ values: l.cfg, position: l.pos }));
    // api and slots
    const controlsOf = (key) => (refs[key] || []).map((c) => ({ layer: c.layer, attribute: c.attribute }));
    const api = { props: {} };
    const slots = {};
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
            const s = { accepts: "Instance" };
            const dv = p.def.defaultValue;
            if (dv) {
                try {
                    const n = await figma.getNodeByIdAsync(String(dv));
                    if (n) {
                        s.default = { swap: componentName(n) };
                        registerComponent(ctx, n);
                    }
                }
                catch (e) {
                    readError(ctx, "structure.slots." + p.name, e);
                }
            }
            // preferred values: each proposed component is named and registered in the components index
            const pref = [];
            for (const pv of p.def.preferredValues || []) {
                let n = null;
                try {
                    n =
                        pv.type === "COMPONENT_SET"
                            ? await figma.importComponentSetByKeyAsync(pv.key)
                            : await figma.importComponentByKeyAsync(pv.key);
                }
                catch (e) {
                    // The failure is reported further down by the valeur-preferee issue.
                }
                const name = n ? registerComponent(ctx, n) : null;
                if (name)
                    pref.push(name);
                else
                    ctx.notFound.add(p.name + "|" + pv.key);
            }
            if (pref.length)
                s.preferred = pref;
            s.controls = controlsOf(p.key);
            slots[p.name] = s;
        }
        else
            slots[p.name] = {
                as: String(t || "unknown").toLowerCase(),
                controls: controlsOf(p.key),
            };
    }
    // meta
    // version and tokensVersion are null here: the plugin fills them after the extraction,
    // the bridge script leaves them as null.
    const meta = {
        name: withoutCopyPrefix(target.name),
        version: null,
        tokensVersion: null,
        type: "atom",
    };
    // an icon exposed in the panel does not make a base component: only a component
    // that carries text or exceeds the size of an icon is taken as a base
    let exposed = null;
    for (const n of findAll(def, (x) => x.type === "INSTANCE" && !!x.isExposedInstance).filter(isInstance)) {
        const m = await readMainComponent(ctx, n);
        const icon = m &&
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
    const captures = new Map();
    for (let i = 0; i < lines.length; i++) {
        const v = lines[i].v;
        if (options.progress &&
            lines.length > PROGRESS_THRESHOLD &&
            i % PROGRESS_STEP === PROGRESS_STEP - 1)
            options.progress(i + 1, lines.length);
        captures.set(v, await captureVariant(ctx, prep, v, nodes[variantNodes.indexOf(v)]));
    }
    const dup = new Set();
    for (const cap of captures.values()) {
        const cnt = {};
        for (const c of cap.cand) {
            cnt[c.nm] = (cnt[c.nm] || 0) + 1;
            if (cnt[c.nm] > 1)
                dup.add(c.nm);
        }
    }
    const withKeys = (cap) => {
        const kd = {};
        if (Object.keys(cap.modes).length)
            kd.modes = cap.modes;
        kd.root = cap.root;
        // node ids, kept in the context for the interface: never in the sheet
        const ids = { root: cap.id };
        ctx.ids.set(cap, ids);
        const seen = {};
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
    if (!defCapture)
        throw new Error("La variante par défaut n'a pas été lue.");
    const defStyles = withKeys(defCapture);
    const styles = { default: {} };
    if (prep.isSet && axes.length)
        styles.default.when = orderCfg(cfgDef);
    Object.assign(styles.default, defStyles);
    const axesOrder = PRIORITY.filter((a) => axes.indexOf(a) >= 0).concat(axes.filter((a) => PRIORITY.indexOf(a) < 0));
    const all = lines.map((l) => {
        const cap = captures.get(l.v);
        if (!cap)
            throw new Error("Une variante n'a pas été lue.");
        return { cfg: l.cfg, styles: withKeys(cap), v: l.v, cap };
    });
    const baseEntry = all.find((t) => t.v === def);
    if (!baseEntry)
        throw new Error("La variante par défaut n'a pas été lue.");
    const overrides = groupOverrides(axesOrder, optsOf, all, baseEntry).map((o) => ({ when: orderCfg(o.when), styles: o.styles }));
    if (overrides.length)
        styles.overrides = overrides;
    // trees: one per distinct structure. The one of the default variant is the base (empty when).
    const groups = new Map();
    const addTree = (cfg, a) => {
        const h = JSON.stringify(a);
        const group = groups.get(h) || { tree: a, configs: [] };
        groups.set(h, group);
        group.configs.push(cfg);
    };
    const treeOf = async (v) => {
        const a = [];
        for (const c of v.children || [])
            a.push(await layerTree(ctx, c));
        return a;
    };
    addTree(orderCfg(readConfig(def.name)), await treeOf(def));
    const defHash = [...groups.keys()][0];
    for (const l of lines)
        if (l.v !== def)
            addTree(l.cfg, await treeOf(l.v));
    const trees = [];
    for (const [h, g] of groups) {
        if (h === defHash) {
            trees.push({ when: {}, tree: g.tree });
            continue;
        }
        // only the values actually drawn count: a value without a variant discriminates nothing
        const when = {};
        for (const a of axes) {
            const vals = [
                ...new Set(g.configs.map((c) => c[a]).filter((x) => x !== undefined)),
            ];
            const present = new Set(lines.map((l) => l.cfg[a]).filter((x) => x !== undefined));
            if (vals.length && vals.length < present.size)
                when[a] = vals.length === 1 ? vals[0] : vals.sort();
        }
        if (!Object.keys(when).length)
            trees.push({ when, configs: g.configs, tree: g.tree });
        else
            trees.push({ when, tree: g.tree });
    }
    // nested components, quoted by reference
    const uses = new Set();
    for (const list of nodes) {
        for (const n of list) {
            if (!isInstance(n))
                continue;
            try {
                const mc = await readMainComponent(ctx, n);
                const name = mc ? registerComponent(ctx, mc) : null;
                if (name)
                    uses.add(name);
            }
            catch (e) {
                readError(ctx, "structure.uses", e);
            }
        }
    }
    const structure = { slots, trees, uses: [...uses].sort(alphaOrder) };
    // tokens index, sorted by name
    const tokens = {};
    for (const name of Object.keys(ctx.tokens).sort(alphaOrder))
        tokens[name] = ctx.tokens[name];
    // the other indexes, sorted by name
    const sortIndex = (index) => {
        const o = {};
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
        if (n)
            i.occurrences = n;
        issues.push(i);
    }
    for (const name of ctx.collisions)
        issues.push({
            level: "warning",
            rule: "token-doublon",
            where: "tokens." + name,
            message: "Deux variables portent ce nom dans des collections ou des bibliothèques différentes : un seul token est indexé.",
        });
    // The design tokens version comes from outside (the network is never called here):
    // options.computeTokensVersion({ tokens, textStyles }) returns { version, issues }.
    if (options.computeTokensVersion) {
        const computation = await options.computeTokensVersion({
            tokens,
            textStyles,
        });
        meta.tokensVersion = computation.version;
        for (const i of computation.issues)
            issues.push(i);
    }
    for (const e of ctx.errors)
        issues.push({
            level: "error",
            rule: "lecture-impossible",
            where: e.where,
            message: e.message,
        });
    for (const entryKey of [...ctx.notFound].sort(alphaOrder)) {
        const [name, key] = entryKey.split("|");
        issues.push({
            level: "warning",
            rule: "valeur-preferee",
            where: "structure.slots." + name,
            message: "Le composant préféré de clé " +
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
        _tool: "canopee-fiches-composants " + VERSION,
    };
    return { sheet, locations: locateIssues(ctx, prep, sheet.issues, all) };
}
// The Figma nodes designated by each issue, in the order of the list: { ids, variants }.
// These ids only serve the interface, they never enter the sheet.
function locateIssues(ctx, prep, issues, all) {
    const styles = new Map();
    for (const t of all || []) {
        const ids = (ctx && ctx.ids.get(t.cap)) || {};
        const keys = Object.keys(ids).sort((a, b) => b.length - a.length);
        for (const d of stylesIssues({ default: t.styles })) {
            const location = d.where.slice("styles.".length);
            const key = keys.find((c) => location === c || location.indexOf(c + ".") === 0);
            if (!key || !ids[key])
                continue;
            const g = styles.get(issueSignature(d)) || {
                ids: [],
                cap: new Set(),
            };
            styles.set(issueSignature(d), g);
            if (g.ids.indexOf(ids[key]) < 0)
                g.ids.push(ids[key]);
            g.cap.add(t.cap);
        }
    }
    return issues.map((i) => {
        if (i.where.indexOf("calque ") === 0) {
            const name = i.where.slice("calque ".length);
            const ids = [];
            let variants = 0;
            for (const list of prep.nodes) {
                const m = list.filter((n) => String(n.name) === name && n.id);
                if (m.length)
                    variants++;
                for (const n of m)
                    ids.push(n.id);
            }
            return { ids, variants };
        }
        if (i.where.indexOf("styles.") === 0) {
            const g = styles.get(issueSignature(i));
            return g
                ? { ids: g.ids, variants: g.cap.size }
                : { ids: [], variants: 0 };
        }
        if (i.where === "meta.name" ||
            i.where === "meta.templateLevel" ||
            i.where.indexOf("api.props.") === 0 ||
            i.where.indexOf("structure.slots.") === 0)
            return { ids: prep.target.id ? [prep.target.id] : [], variants: 0 };
        return { ids: [], variants: 0 };
    });
}
// The key of an issue: two issues with the same signature count as one.
const issueSignature = (i) => i.level + "|" + i.rule + "|" + i.where + "|" + i.message;
// Sorting and de-duplication: same component, same order.
function sortIssues(list) {
    const seen = {};
    const out = [];
    for (const i of list) {
        const sig = issueSignature(i);
        if (seen[sig])
            continue;
        seen[sig] = true;
        out.push(i);
    }
    return out.sort((a, b) => LEVELS.indexOf(a.level) - LEVELS.indexOf(b.level) ||
        alphaOrder(a.rule, b.rule) ||
        alphaOrder(a.where, b.where) ||
        alphaOrder(a.message, b.message));
}
const serialize = (sheet) => JSON.stringify(sheet, null, 2) + "\n";

const bridgeTarget = await figma.getNodeByIdAsync(ID_COMPONENT_SET)
if (!bridgeTarget) throw new Error('Aucun noeud pour l\'id ' + ID_COMPONENT_SET)
if (bridgeTarget.type !== 'COMPONENT_SET' && bridgeTarget.type !== 'COMPONENT') throw new Error('Le noeud ' + ID_COMPONENT_SET + ' est de type ' + bridgeTarget.type + ' : il faut un component set ou un composant.')
return serialize(await extract(bridgeTarget))
