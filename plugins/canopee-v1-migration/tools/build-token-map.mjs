#!/usr/bin/env node
// build-token-map.mjs: builds the toolkit to Canopée token map of toolkit-sass.json from the
// published @axa-fr/canopee-css package. For the maintainers of the skill: it is not part of the
// skill folder that projects copy. Node >= 18, no dependency.
//
//   node build-token-map.mjs --canopee-css DIR [--integrity sha512-...] [--write | --check] [--json FILE]
//   node build-token-map.mjs --from-json [--write | --check] [--json FILE]
//
//   --canopee-css DIR  the published package, extracted (npm pack @axa-fr/canopee-css@<version>,
//                      tar -xzf: DIR is package/)
//   --integrity X      integrity of that tarball (npm view @axa-fr/canopee-css@<version>
//                      dist.integrity); not needed when the JSON already records this version
//   --from-json        recomputes tokenMap from the tokens and tokensRedefined of the JSON (offline)
//   --write            writes tokensSource, tokens, tokensRedefined, tokenMap and tokenAmbiguous into
//                      the JSON (then run Prettier on it)
//   --check            exits 1 when the JSON differs from what --write would write
//   --json FILE        default: ../skills/canopee-v1-migration/scripts/toolkit-sass.json
//   (default)          prints a summary, writes nothing
//
// The rule. A toolkit value and a Canopée token match when they are the same opaque colour once
// normalised (canonColor: case, #fff and #ffffff, rgb() with integer channels, CSS colour names);
// nothing else ever matches (transparent, translucent colours, hsl(), sizes, numbers). A token is
// eligible when the :root of distributeur/common/tokens.css declares it, its value (var() resolved
// in that :root) is an opaque colour and no other rule of the distributeur CSS declares it again
// (EditorialMessage sets --text-color to a green: var(--text-color) is not #333 everywhere). Among
// the eligible tokens of that colour: the token of the same name ($brand-primary: --brand-primary),
// otherwise the only palette token (a literal value, not a var() alias); otherwise no mapping, and
// the value is listed in tokenAmbiguous.

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PKG = "@axa-fr/canopee-css";
const TOKENS_CSS = "dist/distributeur/common/tokens.css";
const CSS_DIR = "dist/distributeur";
const SECTIONS = ["variables", "maps", "components", "rootProperties"];

// The 148 colour names of CSS Color 4.
const NAMED = Object.fromEntries(
  (
    "aliceblue:f0f8ff antiquewhite:faebd7 aqua:00ffff aquamarine:7fffd4 azure:f0ffff beige:f5f5dc " +
    "bisque:ffe4c4 black:000000 blanchedalmond:ffebcd blue:0000ff blueviolet:8a2be2 brown:a52a2a " +
    "burlywood:deb887 cadetblue:5f9ea0 chartreuse:7fff00 chocolate:d2691e coral:ff7f50 " +
    "cornflowerblue:6495ed cornsilk:fff8dc crimson:dc143c cyan:00ffff darkblue:00008b " +
    "darkcyan:008b8b darkgoldenrod:b8860b darkgray:a9a9a9 darkgreen:006400 darkgrey:a9a9a9 " +
    "darkkhaki:bdb76b darkmagenta:8b008b darkolivegreen:556b2f darkorange:ff8c00 darkorchid:9932cc " +
    "darkred:8b0000 darksalmon:e9967a darkseagreen:8fbc8f darkslateblue:483d8b darkslategray:2f4f4f " +
    "darkslategrey:2f4f4f darkturquoise:00ced1 darkviolet:9400d3 deeppink:ff1493 deepskyblue:00bfff " +
    "dimgray:696969 dimgrey:696969 dodgerblue:1e90ff firebrick:b22222 floralwhite:fffaf0 " +
    "forestgreen:228b22 fuchsia:ff00ff gainsboro:dcdcdc ghostwhite:f8f8ff gold:ffd700 " +
    "goldenrod:daa520 gray:808080 green:008000 greenyellow:adff2f grey:808080 honeydew:f0fff0 " +
    "hotpink:ff69b4 indianred:cd5c5c indigo:4b0082 ivory:fffff0 khaki:f0e68c lavender:e6e6fa " +
    "lavenderblush:fff0f5 lawngreen:7cfc00 lemonchiffon:fffacd lightblue:add8e6 lightcoral:f08080 " +
    "lightcyan:e0ffff lightgoldenrodyellow:fafad2 lightgray:d3d3d3 lightgreen:90ee90 " +
    "lightgrey:d3d3d3 lightpink:ffb6c1 lightsalmon:ffa07a lightseagreen:20b2aa lightskyblue:87cefa " +
    "lightslategray:778899 lightslategrey:778899 lightsteelblue:b0c4de lightyellow:ffffe0 " +
    "lime:00ff00 limegreen:32cd32 linen:faf0e6 magenta:ff00ff maroon:800000 mediumaquamarine:66cdaa " +
    "mediumblue:0000cd mediumorchid:ba55d3 mediumpurple:9370db mediumseagreen:3cb371 " +
    "mediumslateblue:7b68ee mediumspringgreen:00fa9a mediumturquoise:48d1cc mediumvioletred:c71585 " +
    "midnightblue:191970 mintcream:f5fffa mistyrose:ffe4e1 moccasin:ffe4b5 navajowhite:ffdead " +
    "navy:000080 oldlace:fdf5e6 olive:808000 olivedrab:6b8e23 orange:ffa500 orangered:ff4500 " +
    "orchid:da70d6 palegoldenrod:eee8aa palegreen:98fb98 paleturquoise:afeeee palevioletred:db7093 " +
    "papayawhip:ffefd5 peachpuff:ffdab9 peru:cd853f pink:ffc0cb plum:dda0dd powderblue:b0e0e6 " +
    "purple:800080 rebeccapurple:663399 red:ff0000 rosybrown:bc8f8f royalblue:4169e1 " +
    "saddlebrown:8b4513 salmon:fa8072 sandybrown:f4a460 seagreen:2e8b57 seashell:fff5ee " +
    "sienna:a0522d silver:c0c0c0 skyblue:87ceeb slateblue:6a5acd slategray:708090 slategrey:708090 " +
    "snow:fffafa springgreen:00ff7f steelblue:4682b4 tan:d2b48c teal:008080 thistle:d8bfd8 " +
    "tomato:ff6347 turquoise:40e0d0 violet:ee82ee wheat:f5deb3 white:ffffff whitesmoke:f5f5f5 " +
    "yellow:ffff00 yellowgreen:9acd32"
  )
    .split(" ")
    .map((e) => {
      const [name, hex] = e.split(":");
      return [name, `#${hex}`];
    }),
);

// The key of an opaque colour (#rrggbb), or null: such a value is never matched with a token.
export function canonColor(value) {
  const s = String(value ?? "")
    .trim()
    .toLowerCase();
  if (Object.hasOwn(NAMED, s)) return NAMED[s];
  let m = /^#([0-9a-f]{3,4}|[0-9a-f]{6}|[0-9a-f]{8})$/.exec(s);
  if (m) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map((c) => c + c).join("");
    if (h.length === 8) {
      if (!h.endsWith("ff")) return null;
      h = h.slice(0, 6);
    }
    return `#${h}`;
  }
  m =
    /^rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*([\d.]+%?)\s*)?\)$/.exec(
      s,
    ) ||
    /^rgba?\(\s*(\d{1,3})\s+(\d{1,3})\s+(\d{1,3})\s*(?:\/\s*([\d.]+%?)\s*)?\)$/.exec(
      s,
    );
  if (!m) return null;
  if (m[4] !== undefined) {
    const a = m[4].endsWith("%")
      ? Number(m[4].slice(0, -1)) / 100
      : Number(m[4]);
    if (a !== 1) return null;
  }
  const c = [m[1], m[2], m[3]].map(Number);
  if (c.some((x) => x > 255)) return null;
  return `#${c.map((x) => x.toString(16).padStart(2, "0")).join("")}`;
}

// Every custom property declaration of a stylesheet, with the prelude of its block (selector or
// at-rule, whitespace collapsed), in order: [{ prelude, name, value }]. Also the preludes of the
// blocks, to count the :root rules.
export function cssDeclarations(css) {
  const t = String(css).replace(/\/\*[\s\S]*?\*\//g, "");
  const decls = [];
  const blocks = [];
  const stack = [];
  let buf = "";
  let paren = 0;
  const flush = () => {
    const d = /^\s*(--[\w-]+)\s*:([\s\S]*)$/.exec(buf);
    if (d && stack.length)
      decls.push({
        prelude: stack[stack.length - 1],
        name: d[1],
        value: d[2].replace(/\s+/g, " ").trim(),
      });
    buf = "";
  };
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    if (c === '"' || c === "'") {
      let j = i + 1;
      while (j < t.length && t[j] !== c) j += t[j] === "\\" ? 2 : 1;
      buf += t.slice(i, j + 1);
      i = j;
      continue;
    }
    if (c === "(") paren++;
    else if (c === ")") paren--;
    if (paren > 0 || c === ")") {
      buf += c;
      continue;
    }
    if (c === "{") {
      const prelude = buf.replace(/\s+/g, " ").trim();
      stack.push(prelude);
      blocks.push(prelude);
      buf = "";
    } else if (c === "}") {
      flush();
      stack.pop();
    } else if (c === ";") flush();
    else buf += c;
  }
  return { decls, blocks };
}

// The :root of tokens.css: { name: value as published }, in file order. Refused unless the file is
// one :root rule.
export function parseTokens(css) {
  const { decls, blocks } = cssDeclarations(css);
  if (blocks.length !== 1 || blocks[0] !== ":root")
    throw new Error(
      `${TOKENS_CSS}: expected one :root rule, found ${blocks.length ? blocks.join(", ") : "none"}`,
    );
  const tokens = {};
  for (const d of decls) tokens[d.name] = d.value;
  return tokens;
}

// The value of a token once its var() aliases are resolved in the same :root, or undefined.
export function resolveToken(name, tokens, seen = new Set()) {
  const v = tokens[name];
  if (v === undefined || seen.has(name)) return undefined;
  const r = /^var\(\s*(--[\w-]+)\s*\)$/.exec(v);
  return r ? resolveToken(r[1], tokens, new Set([...seen, name])) : v;
}

// The tokens that another rule of the distributeur CSS declares again (any rule but a :root with the
// same value), sorted. files: [{ file, css }].
export function redefinedTokens(tokens, files) {
  const out = new Set();
  for (const { css } of files)
    for (const d of cssDeclarations(css).decls)
      if (
        Object.hasOwn(tokens, d.name) &&
        !(d.prelude === ":root" && d.value === tokens[d.name])
      )
        out.add(d.name);
  return [...out].sort();
}

// Eligible tokens: name -> { key, palette } (palette: a literal value, not a var() alias).
export function eligibleTokens(tokens, redefined) {
  const out = new Map();
  for (const name of Object.keys(tokens)) {
    if (redefined.includes(name)) continue;
    const key = canonColor(resolveToken(name, tokens));
    if (key) out.set(name, { key, palette: !/^var\(/.test(tokens[name]) });
  }
  return out;
}

// The token for a toolkit value: { token, by: "name" | "palette" }, or { reason, candidates? } with
// reason "not-colour", "no-token" or "ambiguous". name: the toolkit name without $ or --.
export function chooseToken(name, value, eligible) {
  const key = canonColor(value);
  if (!key) return { reason: "not-colour" };
  const same = [...eligible].filter(([, e]) => e.key === key).map(([n]) => n);
  if (!same.length) return { reason: "no-token" };
  if (same.includes(`--${name}`)) return { token: `--${name}`, by: "name" };
  const palette = same.filter((n) => eligible.get(n).palette);
  if (palette.length === 1) return { token: palette[0], by: "palette" };
  return { reason: "ambiguous", candidates: palette.length ? palette : same };
}

// The values of a Sass map literal "(a: 1px, b: #fff)", keyed by name (quotes removed), as the
// migration script reads them.
export function mapEntries(v) {
  const out = {};
  const s = String(v).trim();
  if (!s.startsWith("(")) return out;
  let depth = 0;
  let cur = "";
  const parts = [];
  for (const c of s.slice(1, -1)) {
    if (c === "(") depth++;
    if (c === ")") depth--;
    if (c === "," && !depth) {
      parts.push(cur);
      cur = "";
    } else cur += c;
  }
  parts.push(cur);
  for (const p of parts) {
    const i = p.indexOf(":");
    if (i > 0)
      out[
        p
          .slice(0, i)
          .trim()
          .replace(/^['"]|['"]$/g, "")
      ] = p.slice(i + 1).trim();
  }
  return out;
}

// tokenMap and tokenAmbiguous for the toolkit values of the JSON, and what the summary prints. The
// toolkit side is the value the migration script writes without a token: toolkit[n] ?? bootstrap[n]
// (an entry of a map value goes to maps), a component variable whose files all give the same value,
// a :root property of af-toolkit-core.css.
export function buildTokenMap(json, tokens, redefined) {
  const eligible = eligibleTokens(tokens, redefined);
  const tokenMap = {};
  const tokenAmbiguous = {};
  for (const s of SECTIONS) {
    tokenMap[s] = {};
    tokenAmbiguous[s] = {};
  }
  const stats = { name: [], palette: 0, noToken: [], ambiguous: [], other: 0 };
  const rec = (section, key, name, value, sub) => {
    const r = chooseToken(name, value, eligible);
    const label = sub ? `${sub}.${key}` : key;
    const into = (o) => (sub ? (o[section][sub] ??= {}) : o[section]);
    if (r.token) {
      into(tokenMap)[key] = r.token;
      if (r.by === "name") stats.name.push(`${label} -> ${r.token}`);
      else stats.palette++;
    } else if (r.reason === "ambiguous") {
      into(tokenAmbiguous)[key] = r.candidates;
      stats.ambiguous.push(`${label} ${value}: ${r.candidates.join(", ")}`);
    } else if (r.reason === "no-token")
      stats.noToken.push({ label, value, key: canonColor(value) });
    else stats.other++;
  };
  const names = [
    ...new Set([
      ...Object.keys(json.toolkit || {}),
      ...Object.keys(json.bootstrap || {}),
    ]),
  ].sort();
  for (const n of names) {
    const v = String(json.toolkit?.[n] ?? json.bootstrap[n]);
    if (v.trim().startsWith("(")) {
      const entries = mapEntries(v);
      for (const k of Object.keys(entries).sort())
        rec("maps", k, k, entries[k], n);
    } else rec("variables", n, n, v);
  }
  for (const n of Object.keys(json.components || {}).sort()) {
    const vals = [...new Set(Object.values(json.components[n]))];
    if (vals.length === 1) rec("components", n, n, vals[0]);
  }
  for (const n of Object.keys(json.rootProperties || {}).sort())
    rec("rootProperties", n, n.replace(/^--/, ""), json.rootProperties[n]);
  for (const s of SECTIONS)
    if (!Object.keys(tokenAmbiguous[s]).length) delete tokenAmbiguous[s];
  // the colours at most 2/255 per channel from an eligible token: for the people who review the
  // map, never a mapping
  const rgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  stats.near = [];
  for (const x of stats.noToken)
    for (const [n, e] of eligible) {
      if (!e.palette) continue;
      const d = Math.max(
        ...rgb(x.key).map((c, i) => Math.abs(c - rgb(e.key)[i])),
      );
      if (d <= 2)
        stats.near.push(`${x.label} ${x.value} ~ ${n} ${e.key} (${d}/255)`);
    }
  stats.eligible = eligible.size;
  return { tokenMap, tokenAmbiguous, stats };
}

function cssFiles(dir) {
  const out = [];
  const walk = (d) => {
    for (const e of fs.readdirSync(d, { withFileTypes: true })) {
      const p = path.join(d, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".css")) out.push(p);
    }
  };
  walk(dir);
  return out.sort();
}

// Reads the extracted package: { tokensSource (without integrity), tokens, tokensRedefined }.
export function readPackage(dir) {
  const pkg = JSON.parse(
    fs.readFileSync(path.join(dir, "package.json"), "utf8"),
  );
  if (pkg.name !== PKG)
    throw new Error(`${dir}/package.json is ${pkg.name}, not ${PKG}`);
  const raw = fs.readFileSync(path.join(dir, TOKENS_CSS));
  const tokens = parseTokens(raw.toString("utf8"));
  const files = cssFiles(path.join(dir, CSS_DIR)).map((f) => ({
    file: f,
    css: fs.readFileSync(f, "utf8"),
  }));
  return {
    tokensSource: {
      package: PKG,
      version: pkg.version,
      tokensCss: TOKENS_CSS,
      tokensCssSha256: crypto.createHash("sha256").update(raw).digest("hex"),
      redefinitions: `${CSS_DIR}/**/*.css, any rule but a :root with the same value`,
    },
    tokens,
    tokensRedefined: redefinedTokens(tokens, files),
  };
}

// The JSON with the token sections first (where reviewers look), every other section as it was.
export function withSections(json, sections) {
  const out = { source: json.source };
  for (const k of [
    "tokensSource",
    "tokens",
    "tokensRedefined",
    "tokenMap",
    "tokenAmbiguous",
  ])
    if (sections[k] !== undefined) out[k] = sections[k];
  for (const [k, v] of Object.entries(json))
    if (!(k in out) && !(k === "tokenAmbiguous" && !sections.tokenAmbiguous))
      out[k] = v;
  return out;
}

function deepEqual(a, b) {
  return JSON.stringify(sortKeys(a)) === JSON.stringify(sortKeys(b));
}
function sortKeys(v) {
  if (Array.isArray(v)) return v.map(sortKeys);
  if (v && typeof v === "object")
    return Object.fromEntries(
      Object.keys(v)
        .sort()
        .map((k) => [k, sortKeys(v[k])]),
    );
  return v;
}

function main(argv) {
  const opts = { json: null, dir: null, fromJson: false, integrity: null };
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === "--canopee-css") opts.dir = argv[++i];
    else if (a === "--integrity") opts.integrity = argv[++i];
    else if (a === "--json") opts.json = argv[++i];
    else if (a === "--from-json") opts.fromJson = true;
    else if (a === "--write") opts.write = true;
    else if (a === "--check") opts.check = true;
    else {
      process.stderr.write(`build-token-map: unknown argument ${a}\n`);
      return 2;
    }
  }
  if (!opts.dir === !opts.fromJson || (opts.write && opts.check)) {
    process.stderr.write(
      "build-token-map: --canopee-css DIR or --from-json, with --write or --check (see the header)\n",
    );
    return 2;
  }
  const here = path.dirname(fileURLToPath(import.meta.url));
  const jsonPath =
    opts.json ||
    path.join(here, "../skills/canopee-v1-migration/scripts/toolkit-sass.json");
  const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  let sections;
  if (opts.dir) {
    const p = readPackage(opts.dir);
    const recorded = json.tokensSource;
    const integrity =
      opts.integrity ||
      (recorded?.version === p.tokensSource.version
        ? recorded.integrity
        : undefined);
    if (!integrity) {
      process.stderr.write(
        `build-token-map: pass --integrity (npm view ${PKG}@${p.tokensSource.version} dist.integrity)\n`,
      );
      return 2;
    }
    sections = {
      tokensSource: {
        package: p.tokensSource.package,
        version: p.tokensSource.version,
        integrity,
        tokensCss: p.tokensSource.tokensCss,
        tokensCssSha256: p.tokensSource.tokensCssSha256,
        redefinitions: p.tokensSource.redefinitions,
      },
      tokens: p.tokens,
      tokensRedefined: p.tokensRedefined,
    };
  } else {
    if (!json.tokens || !json.tokensRedefined) {
      process.stderr.write(
        "build-token-map: the JSON has no tokens or tokensRedefined: build it once with --canopee-css\n",
      );
      return 2;
    }
    sections = {
      tokensSource: json.tokensSource,
      tokens: json.tokens,
      tokensRedefined: json.tokensRedefined,
    };
  }
  const built = buildTokenMap(json, sections.tokens, sections.tokensRedefined);
  sections.tokenMap = built.tokenMap;
  if (Object.keys(built.tokenAmbiguous).length)
    sections.tokenAmbiguous = built.tokenAmbiguous;
  const next = withSections(json, sections);
  const s = built.stats;
  const count = (o) =>
    Object.values(o).reduce(
      (n, v) => n + (typeof v === "string" ? 1 : count(v)),
      0,
    );
  const L = [
    `tokens: ${Object.keys(sections.tokens).length} in the :root of ${TOKENS_CSS}${sections.tokensSource ? ` (${sections.tokensSource.package} ${sections.tokensSource.version})` : ""}, ${s.eligible} eligible; declared again by another rule: ${sections.tokensRedefined.join(", ") || "none"}`,
    `tokenMap: ${count(built.tokenMap)} toolkit values (${SECTIONS.map((k) => `${k} ${count(built.tokenMap[k])}`).join(", ")}), ${s.name.length} by name, ${s.palette} by palette`,
    `  by name: ${s.name.join(", ") || "none"}`,
    `tokenAmbiguous: ${s.ambiguous.length ? s.ambiguous.join("; ") : "none"}`,
    `opaque colours without token: ${s.noToken.length}; other values (never a token): ${s.other}`,
    `within 2/255 of a palette token (never mapped, for the reviewers): ${s.near.length || "none"}`,
    ...s.near.map((x) => `  ${x}`),
  ];
  process.stdout.write(L.join("\n") + "\n");
  if (opts.check) {
    const keys = opts.dir
      ? [
          "tokensSource",
          "tokens",
          "tokensRedefined",
          "tokenMap",
          "tokenAmbiguous",
        ]
      : ["tokenMap", "tokenAmbiguous"];
    const diff = keys.filter((k) => !deepEqual(json[k], next[k]));
    if (diff.length) {
      process.stdout.write(
        `CHECK: FAIL, ${path.basename(jsonPath)} differs in ${diff.join(", ")}: run --write\n`,
      );
      return 1;
    }
    process.stdout.write(
      `CHECK: OK, ${path.basename(jsonPath)} is up to date\n`,
    );
  }
  if (opts.write) {
    fs.writeFileSync(jsonPath, JSON.stringify(next, null, 2) + "\n");
    process.stdout.write(`WRITTEN: ${jsonPath} (now run Prettier on it)\n`);
  }
  return 0;
}

const invoked = (() => {
  try {
    return (
      fs.realpathSync(process.argv[1]) ===
      fs.realpathSync(fileURLToPath(import.meta.url))
    );
  } catch {
    return false;
  }
})();
if (invoked)
  try {
    process.exitCode = main(process.argv.slice(2));
  } catch (e) {
    process.stderr.write(`build-token-map: ${e.message}\n`);
    process.exitCode = 2;
  }
