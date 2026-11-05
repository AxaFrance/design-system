// Where the migration script may write var(--token) instead of a toolkit value (varContext): only a
// plain declaration of a .scss file, in a project that loads the Canopée tokens. With the sass
// package of the repository, every allowed case is also compiled twice (var(--token) and the
// literal): the CSS must be the same once var(--token) is replaced by its value; the silent cases
// that are refused are compiled too, to show what var() would have broken.
// Run: node --test plugins/canopee-v1-migration/tests/*.test.mjs
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(
  here,
  "../skills/canopee-v1-migration/scripts/canopee-migrate.mjs",
);
const { varContext, blankComments, exportMixins } = await import(
  `${pathToFileURL(script).href}?no-main`
);
let sass = null;
try {
  sass = createRequire(path.join(here, "../../../package.json"))("sass");
} catch {
  // no sass at the root of the repository: the compiled checks are skipped
}

const VAR = "$color-axa";
const TOKEN = "var(--axablue80)";
const LITERAL = "#00008f";

// @@ marks the toolkit variable; null: var() allowed. silent: refused, and var() would compile
// without any error into another CSS ("differs": a rule lost, an invalid value) or into a place where
// no browser evaluates it ("string": a data URI, the :export block read by JavaScript)
const CASES = [
  ["plain declaration", ".a { color: @@; }", null],
  ["shorthand", ".a { border: 1px solid @@; }", null],
  ["!important", ".a { color: @@ !important; }", null],
  [
    "gradient with %",
    ".a { background: linear-gradient(90deg, @@ 0%, #fff 100%); }",
    null,
  ],
  ["drop-shadow()", ".a { filter: drop-shadow(0 0 2px @@); }", null],
  ["var() fallback", ".a { color: var(--x, @@); }", null],
  ["plain parenthesis", ".a { color: (@@); }", null],
  [
    "list of shadows",
    ".a { box-shadow: 0 0 0 1px @@, inset 0 1px 0 #fff; }",
    null,
  ],
  ["nested rule", ".a { &:hover { color: @@; } }", null],
  ["in a mixin", "@mixin m { color: @@; } .a { @include m; }", null],
  [
    "@include content block",
    "@mixin m { @content; } .a { @include m { color: @@; } }",
    null,
  ],
  ["inside @media", ".a { @media (min-width: 768px) { color: @@; } }", null],
  ["inside an @if body", ".a { @if true { color: @@; } }", null],
  [
    "after a division in another statement",
    ".a { grid-area: 1 / 2; color: @@; }",
    null,
  ],
  ["after a string with ;", '.a { content: "a;b"; color: @@; }', null],
  [
    "next to a url() with a /",
    '.a { background: @@ url("../img/a.png") no-repeat; }',
    null,
  ],
  [
    "next to an unquoted url() with a /",
    ".a { background: @@ url(../img/a.png) no-repeat; }",
    null,
  ],
  [
    "next to a data URI with ;",
    '.a { background: @@ url("data:image/svg+xml;charset=utf8,%3Csvg%3E"); }',
    null,
  ],
  ["commented :export", "/* :export { */ .a { color: @@; }", null],
  ["module member tk.$x", ".a { color: @@; }", null, { ns: true }],
  ["Sass colour function", ".a { color: darken(@@, 10%); }", "function"],
  ["rgba()", ".a { color: rgba(@@, 0.5); }", "function", { silent: "differs" }],
  [
    "module member in rgba()",
    ".a { color: rgba(@@, 0.5); }",
    "function",
    { ns: true },
  ],
  ["mix()", ".a { color: mix(@@, #fff, 50%); }", "function"],
  ["transparentize()", ".a { color: transparentize(@@, 0.5); }", "function"],
  ["if()", ".a { color: if(true, @@, red); }", "function"],
  [
    "map.get()",
    '@use "sass:map"; .a { color: map.get((p: @@), p); }',
    "function",
  ],
  [
    "math.div()",
    '@use "sass:math"; .a { width: math.div(@@, 2); }',
    "function",
  ],
  ["url()", ".a { background: url(@@); }", "function"],
  [
    "a function elsewhere in the value",
    ".a { box-shadow: 0 0 1px @@, 0 0 2px rgba(0, 0, 0, 0.5); }",
    "function",
  ],
  ["multiplication", ".a { width: @@ * 2; }", "arithmetic"],
  ["addition", ".a { color: @@ + 1; }", "arithmetic"],
  ["slash", ".a { font: 12px/1.5 @@; }", "arithmetic"],
  ["modulo", ".a { width: @@ % 2; }", "arithmetic"],
  [
    "@if condition",
    ".a { @if @@ == #00008f { color: red; } }",
    "sass-statement",
    { silent: "differs" },
  ],
  [
    "@each list",
    ".a { @each $c in @@, #fff { color: $c; } }",
    "sass-statement",
  ],
  [
    "@return",
    "@function f() { @return @@; } .a { color: f(); }",
    "sass-statement",
  ],
  ["variable definition", "$my: @@; .a { color: $my; }", "sass-statement"],
  [
    "mixin argument",
    "@mixin tint($c) { color: $c; } .a { @include tint(@@); }",
    "sass-statement",
  ],
  [
    "parameter default",
    "@mixin tint($c: @@) { color: $c; } .a { @include tint; }",
    "sass-statement",
  ],
  [
    "@supports",
    ".a { @supports (color: @@) { color: red; } }",
    "sass-statement",
  ],
  ["declaration at the top level", "color: @@;", "sass-statement"],
  [
    ":export (CSS Modules)",
    ":export { primary: @@; }",
    "export",
    { silent: "string" },
  ],
  [
    ":export, second declaration",
    ":export { a: 1; primary: @@; }",
    "export",
    { silent: "string" },
  ],
  [
    "a mixin included in :export",
    "@mixin exp { primary: @@; } :export { @include exp; }",
    "export",
    { silent: "string" },
  ],
  [
    "a mixin included in :export through another mixin",
    "@mixin a { primary: @@; } @mixin b { @include a; } :export { @include b; }",
    "export",
    { silent: "string" },
  ],
  [
    "an @include block in :export",
    "@mixin wrap { @content; } :export { @include wrap { primary: @@; } }",
    "export",
    { silent: "string" },
  ],
  [
    "a Sass variable after a string with ;",
    '.a { $x: "a;b: c" @@; color: nth($x, 2); }',
    "sass-statement",
  ],
  [
    "a mixin argument after a string with ;",
    '@mixin m($a, $c) { @if $c == #00008f { color: red; } } .a { @include m("x;color: ", @@); }',
    "sass-statement",
    { silent: "differs" },
  ],
  ["custom property", ".a { --x: @@; }", "custom-property"],
  ["interpolated custom property", ".a { --x: #{@@}; }", "interpolation"],
  [
    "data URI",
    ".a { background: url(\"data:image/svg+xml,fill='#{@@}'\"); }",
    "interpolation",
    { silent: "string" },
  ],
  ["interpolated string", '.a { content: "#{@@}"; }', "interpolation"],
  ["interpolation on the line", ".t-#{a} { color: @@; }", "interpolation"],
  ["unary minus", ".a { margin: -@@; }", "operand"],
  ["indented syntax", ".a\n  color: @@\n", "indented", { file: "a.sass" }],
  [
    "tokens not loaded",
    ".a { color: @@; }",
    "no-tokens-css",
    { loaded: false },
  ],
];

const context = (src, opts = {}) => {
  const name = opts.ns ? `tk.${VAR}` : VAR;
  const text = src.replace("@@", name);
  const t = blankComments(text);
  return varContext(
    t,
    t.indexOf(name),
    opts.file || "src/a.scss",
    opts.loaded ?? true,
    exportMixins([t]),
  );
};
const compile = (src) => {
  try {
    return sass.compileString(src, {
      style: "expanded",
      logger: sass.Logger.silent,
    }).css;
  } catch (e) {
    return `ERROR ${String(e.message).split("\n")[0]}`;
  }
};

for (const [name, src, expected, opts = {}] of CASES)
  test(`varContext: ${name} -> ${expected ?? "var() allowed"}`, () => {
    assert.equal(context(src, opts), expected);
  });

test("compiled: var(--token) gives the literal CSS wherever varContext allows it", (t) => {
  if (!sass)
    return t.skip("sass is not installed at the root of the repository");
  for (const [name, src, expected, opts = {}] of CASES) {
    if (expected !== null) continue;
    const withVar = compile(src.replace("@@", TOKEN));
    const withLiteral = compile(src.replace("@@", LITERAL));
    assert.ok(!withLiteral.startsWith("ERROR"), `${name}: ${withLiteral}`);
    assert.equal(withVar.split(TOKEN).join(LITERAL), withLiteral, name);
  }
});

test("compiled: the silent cases refused would compile without error into another CSS", (t) => {
  if (!sass)
    return t.skip("sass is not installed at the root of the repository");
  for (const [name, src, , opts = {}] of CASES) {
    if (!opts.silent) continue;
    const withVar = compile(src.replace("@@", TOKEN));
    const withLiteral = compile(src.replace("@@", LITERAL));
    assert.ok(!withVar.startsWith("ERROR"), `${name}: ${withVar}`);
    if (opts.silent === "differs")
      assert.notEqual(withVar.split(TOKEN).join(LITERAL), withLiteral, name);
    else
      assert.match(
        withVar,
        /:export\s*\{[^}]*var\(--axablue80\)|"[^"]*var\(--axablue80\)[^"]*"/,
        name,
      );
  }
});
