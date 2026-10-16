// The migration script on a small toolkit project (black box): which toolkit values become
// var(--token) and which stay literal, the LITERAL list (--json, report, state, --check), the
// MANUAL lines, the non-loss ledger, and, with the sass package of the repository, the CSS compiled
// before (toolkit values) and after --write (var(--token) replaced by the token value): the same.
// Run: node --test plugins/canopee-v1-migration/tests/*.test.mjs
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import { createRequire } from "node:module";
import os from "node:os";
import path from "node:path";
import { after, test } from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { canonColor, resolveToken } from "../tools/build-token-map.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const script = path.join(
  here,
  "../skills/canopee-v1-migration/scripts/canopee-migrate.mjs",
);
const data = JSON.parse(
  fs.readFileSync(path.join(path.dirname(script), "toolkit-sass.json"), "utf8"),
);
const { breakpointHelper, literalLines } = await import(
  `${pathToFileURL(script).href}?no-main`
);
let sass = null;
try {
  sass = createRequire(path.join(here, "../../../package.json"))("sass");
} catch {
  // no sass at the root of the repository: the compiled comparison is skipped
}
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "canopee-sass-tokens-"));
after(() => fs.rmSync(tmp, { recursive: true, force: true }));

const TK = '@import "~@axa-fr/react-toolkit-core/src/common/scss/core";\n';
const PROJECT = {
  "package.json": JSON.stringify({
    name: "fx",
    private: true,
    dependencies: { "@axa-fr/react-toolkit-all": "2.3.1", react: "^18.2.0" },
  }),
  "src/index.tsx": [
    'import "@axa-fr/react-toolkit-all/dist/style/af-toolkit-core.css";',
    'import { Button } from "@axa-fr/react-toolkit-all";',
    'import "./a.scss";',
    'import s from "./b.module.scss";',
    "export const App = () => <Button className={s.x}>ok</Button>;",
    "",
  ].join("\n"),
  // every line here is AUTO
  "src/a.scss":
    TK +
    [
      ".plain { color: $color-axa; border: 1px solid $brand-primary; background: $white; }",
      ".fn { color: darken($color-axa, 10%); background: rgba($black, 0.5); }",
      ".grad { background: linear-gradient(90deg, $color-axa 0%, $white 100%); }",
      ".paren { color: ($color-axa); }",
      "$my-primary: $color-axa;",
      ".uses-def { color: lighten($my-primary, 5%); }",
      "@mixin tint($c) { color: $c; }",
      ".inc { @include tint($color-axa); }",
      ".azur { color: $color-azur; }",
      ".body { color: $body-color; background: $body-bg; }",
      '.panel { color: theme-color("primary"); }',
      ".mq { @include media-breakpoint-up(md) { color: $color-texte; } }",
      '.map { color: map-get($theme-colors, "primary"); background: map-get($colors, "white"); }',
      "",
    ].join("\n"),
  // CSS Modules: :export gives the value to JavaScript
  "src/b.module.scss":
    TK +
    ":export { primary: $color-axa; white: $white; }\n.x { color: $color-axa; }\n",
  // MANUAL: var() would be lost or wrong here
  "src/m.scss":
    TK +
    [
      ".cmp { @if $color-axa == #00008f { color: red; } }",
      ".svg { background: url(\"data:image/svg+xml,%3Csvg fill='#{$color-axa}'/%3E\"); }",
      ".custom { --app-primary: $color-axa; }",
      "",
    ].join("\n"),
  "src/c.sass": `${TK.replace(";\n", "\n")}.y\n  color: $color-axa\n`,
};
// a Sass-only package: nothing loads the Canopée tokens
const SASS_ONLY = {
  "package.json": JSON.stringify({
    name: "lib",
    private: true,
    dependencies: { "@axa-fr/react-toolkit-core": "2.3.1" },
  }),
  "src/only.scss": `${TK}.a { color: $color-axa; border: 1px solid $white; }\n`,
};
function project(name, files) {
  const dir = path.join(tmp, name);
  for (const [f, text] of Object.entries(files)) {
    fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true });
    fs.writeFileSync(path.join(dir, f), text);
  }
  return dir;
}
const run = (dir, ...args) =>
  spawnSync(process.execPath, [script, dir, ...args], { encoding: "utf8" });
const read = (dir, f) => fs.readFileSync(path.join(dir, f), "utf8");

const dir = project("app", PROJECT);
const before = Object.fromEntries(
  Object.keys(PROJECT).map((f) => [f, read(dir, f)]),
);
const dry = JSON.parse(run(dir, "--json").stdout);
const written = run(dir, "--write", "--report", "todo.md");

test("dry run: the LITERAL list, with a reason for each toolkit value kept as is", () => {
  const lit = (file, line, label) =>
    dry.literals.find(
      (x) => x.file === file && x.line === line && x.label === label,
    );
  assert.equal(lit("src/a.scss", 3, "$color-axa").reason, "function");
  assert.equal(lit("src/a.scss", 3, "$color-axa").token, "--axablue80");
  assert.equal(lit("src/a.scss", 6, "$color-axa").reason, "sass-statement");
  assert.match(lit("src/a.scss", 6, "$color-axa").note, /Sass variable/);
  assert.match(lit("src/a.scss", 9, "$color-axa").note, /mixin argument/);
  assert.equal(lit("src/a.scss", 10, "$color-azur").reason, "no-token");
  assert.equal(
    lit("src/a.scss", 12, 'theme-color("primary")').reason,
    "no-token",
  );
  assert.equal(lit("src/b.module.scss", 2, "$color-axa").reason, "export");
  assert.equal(lit("src/m.scss", 2, "$color-axa").reason, "sass-statement");
  assert.equal(lit("src/m.scss", 2, "$color-axa").manual, true);
  assert.equal(lit("src/m.scss", 3, "$color-axa").reason, "interpolation");
  assert.equal(lit("src/m.scss", 4, "$color-axa").reason, "custom-property");
  assert.equal(lit("src/c.sass", 3, "$color-axa").reason, "indented");
  // a value written as var(--token) is not in the list
  assert.equal(lit("src/a.scss", 2, "$color-axa"), undefined);
  assert.equal(lit("src/b.module.scss", 3, "$color-axa"), undefined);
});

test("dry run: the MANUAL lines never ask for var() where Sass or JavaScript reads the value", () => {
  const manual = dry.manual.filter((i) => i.code === "SASS_VAR");
  const m = (file, line) =>
    manual.find((i) => i.file === file && i.line === line)?.detail;
  assert.match(
    m("src/m.scss", 2),
    /-> #00008f .*in an @if.*not var\(--axablue80\)/,
  );
  assert.match(m("src/m.scss", 3), /-> #00008f .*interpolated/);
  assert.doesNotMatch(m("src/m.scss", 3), /next to "\/"/);
  assert.match(m("src/m.scss", 4), /-> #00008f .*custom property/);
  assert.match(m("src/c.sass", 3), /-> #00008f .*indented syntax/);
  for (const i of manual) assert.doesNotMatch(i.detail, /-> var\(/, i.detail);
});

test("--write: var(--token) only in plain declarations, the literal elsewhere", () => {
  assert.equal(written.status, 0, written.stderr);
  const a = read(dir, "src/a.scss").split("\n");
  assert.equal(
    a[0],
    ".plain { color: var(--axablue80); border: 1px solid var(--brand-primary); background: var(--white); }",
  );
  assert.equal(
    a[1],
    ".fn { color: darken(#00008f, 10%); background: rgba(#000, 0.5); }",
  );
  assert.equal(
    a[2],
    ".grad { background: linear-gradient(90deg, var(--axablue80) 0%, var(--white) 100%); }",
  );
  assert.equal(a[3], ".paren { color: (var(--axablue80)); }");
  assert.equal(a[4], "$my-primary: #00008f;");
  assert.equal(a[7], ".inc { @include tint(#00008f); }");
  assert.equal(a[8], ".azur { color: #3032c1; }");
  assert.equal(
    a[9],
    ".body { color: var(--gray80); background: var(--white); }",
  );
  assert.equal(a[10], ".panel { color: #0275d8; }");
  assert.equal(
    a[11],
    ".mq { @media (min-width: 768px) { color: var(--gray80); } }",
  );
  assert.equal(a[12], ".map { color: #0275d8; background: var(--white); }");
  assert.equal(
    read(dir, "src/b.module.scss"),
    ":export { primary: #00008f; white: #fff; }\n.x { color: var(--axablue80); }\n",
  );
  // the MANUAL lines are left as they are
  assert.equal(read(dir, "src/m.scss"), before["src/m.scss"].replace(TK, ""));
  // nowhere var() inside a call that is not a CSS function
  for (const f of ["src/a.scss", "src/b.module.scss", "src/m.scss"])
    assert.doesNotMatch(
      read(dir, f),
      /\b(?:darken|lighten|rgba?|mix|transparentize|if|map-get|map\.get|tint)\([^;{}]*var\(/,
      f,
    );
});

test("--write: the LITERAL list is in the report and in the state, and --check prints it again", () => {
  assert.match(
    written.stdout,
    /^LITERAL: \d+ toolkit colours written as the toolkit value/m,
  );
  const todo = read(dir, "todo.md");
  assert.match(todo, /^## Toolkit values kept as literals$/m);
  // grouped by reason, the reason written once; the MANUAL ones apart
  assert.match(
    todo,
    /^No Canopée token has exactly this value \(never use a close one\):\n\n- `src\/a\.scss:9` \$color-azur -> #3032c1$/m,
  );
  assert.equal(todo.match(/never use a close one/g).length, 1);
  const manual = todo.slice(
    todo.indexOf("To write by hand, as its MANUAL line"),
  );
  assert.match(
    manual,
    /`src\/m\.scss:1` \$color-axa -> #00008f \(--axablue80; in an @if/,
  );
  assert.doesNotMatch(
    todo.slice(
      todo.indexOf("## Toolkit values kept as literals"),
      todo.indexOf("To write by hand"),
    ),
    /`src\/m\.scss:/,
  );
  const state = JSON.parse(read(dir, ".canopee-migrate.json"));
  assert.deepEqual(state.origin.tokensLoaded, ["."]);
  assert.ok(state.sassLiterals.length >= 10);
  // lines after the rewrite (the toolkit import line is gone)
  assert.ok(
    state.sassLiterals.some(
      (x) =>
        x.file === "src/a.scss" && x.line === 9 && x.label === "$color-azur",
    ),
  );
  const check = run(dir, "--check");
  assert.equal(check.status, 1);
  assert.match(check.stdout, /^LITERAL: /m);
  assert.match(check.stdout, /src\/a\.scss:9 {2}\$color-azur -> #3032c1/);
  assert.match(check.stdout, /no typecheck, lint, test or build script found/);
  assert.match(check.stdout, /VERDICT: NOT DONE/);
  assert.doesNotMatch(check.stdout, /SASS_LOST/);
});

test("non-loss ledger: the literal for var(--token) is an exact replacement, a deletion is not", () => {
  const f = path.join(dir, "src/a.scss");
  const after = read(dir, "src/a.scss");
  fs.writeFileSync(
    f,
    after.replace(
      ".plain { color: var(--axablue80);",
      ".plain { color: #00008f;",
    ),
  );
  assert.doesNotMatch(run(dir, "--check").stdout, /SASS_LOST/);
  fs.writeFileSync(
    f,
    after.replace(".paren { color: (var(--axablue80)); }", ".paren { }"),
  );
  assert.match(run(dir, "--check").stdout, /SASS_LOST/);
  fs.writeFileSync(f, after);
});

test("a project that loads no Canopée stylesheet keeps every toolkit value literal", () => {
  const lib = project("lib", SASS_ONLY);
  const r = JSON.parse(run(lib, "--json").stdout);
  assert.ok(r.literals.length >= 2);
  for (const x of r.literals) assert.equal(x.reason, "no-tokens-css");
  assert.equal(run(lib, "--write").status, 0);
  assert.equal(
    read(lib, "src/only.scss"),
    ".a { color: #00008f; border: 1px solid #fff; }\n",
  );
});

// the toolkit core, reduced to what the project uses, with the values of toolkit-sass.json
function toolkitStub() {
  const v = (n) => data.toolkit[n] ?? data.bootstrap[n];
  const names = ["color-axa", "brand-primary", "white", "black", "color-azur"];
  names.push("body-color", "body-bg", "color-texte", "theme-colors", "colors");
  return [
    breakpointHelper(data.breakpoints),
    ...names.map((n) => `$${n}: ${v(n)};`),
    "@function theme-color($key) { @return map-get($theme-colors, $key); }",
    "",
  ].join("\n");
}
// CSS with each var(--token) replaced by its value, every colour written #rrggbb
function normalise(css) {
  return css
    .replace(
      /var\((--[\w-]+)\)/g,
      (m, t) => canonColor(resolveToken(t, data.tokens)) ?? m,
    )
    .replace(/#[0-9a-f]{3,8}\b/gi, (m) => canonColor(m) ?? m);
}

test("compiled: the CSS after --write is the CSS of the toolkit (var(--token) = its value)", (t) => {
  if (!sass)
    return t.skip("sass is not installed at the root of the repository");
  const stub = path.join(tmp, "stub", "_core.scss");
  fs.mkdirSync(path.dirname(stub), { recursive: true });
  fs.writeFileSync(stub, toolkitStub());
  const importers = [
    {
      findFileUrl: (url) =>
        url.startsWith("~@axa-fr/react-toolkit-core/")
          ? pathToFileURL(stub)
          : null,
    },
  ];
  const compile = (src) =>
    sass.compileString(src, {
      style: "expanded",
      importers,
      logger: sass.Logger.silent,
    }).css;
  for (const f of ["src/a.scss", "src/b.module.scss"]) {
    const was = normalise(compile(before[f]));
    const now = normalise(compile(read(dir, f)));
    assert.equal(now, was, f);
  }
});

// --- the cases found in review ---------------------------------------------------------------

test("LITERAL after FORMAT: --check finds each value on its new line", () => {
  const p = project("moved", {
    "package.json": PROJECT["package.json"],
    "src/index.tsx": PROJECT["src/index.tsx"]
      .replace('import s from "./b.module.scss";\n', "")
      .replace("className={s.x}", ""),
    "src/a.scss": `${TK}\n.azur { color: $color-azur; }\n.fn { color: darken($color-axa, 5%); }\n.z { color: $color-mercury; }\n`,
  });
  assert.equal(run(p, "--write").status, 0);
  const at = (r, label) => r.literals.find((x) => x.label === label);
  let r = JSON.parse(run(p, "--json").stdout);
  assert.equal(at(r, "$color-azur").line, 2);
  assert.equal(at(r, "$color-axa").line, 3);
  // what Prettier does: the blank line left by the deleted @import goes
  const f = path.join(p, "src/a.scss");
  fs.writeFileSync(f, read(p, "src/a.scss").replace(/^\n/, ""));
  r = JSON.parse(run(p, "--json").stdout);
  assert.equal(at(r, "$color-azur").line, 1);
  assert.equal(at(r, "$color-axa").line, 2);
  assert.equal(at(r, "$color-mercury").line, 3);
  assert.match(
    run(p, "--check").stdout,
    /^ {4}src\/a\.scss:1 {2}\$color-azur -> #3032c1$/m,
  );
  // a line reformatted on several lines: found by its value
  fs.writeFileSync(
    f,
    read(p, "src/a.scss").replace(
      ".fn { color: darken(#00008f, 5%); }",
      ".fn {\n  color: darken(#00008f, 5%);\n}",
    ),
  );
  r = JSON.parse(run(p, "--json").stdout);
  assert.equal(at(r, "$color-axa").line, 3);
  assert.equal(at(r, "$color-mercury").line, 5);
  // gone: the file, without a wrong line
  fs.writeFileSync(
    f,
    read(p, "src/a.scss").replace(".z { color: #e5e5e5; }\n", ""),
  );
  r = JSON.parse(run(p, "--json").stdout);
  assert.equal(at(r, "$color-mercury").moved, true);
  assert.match(run(p).stdout, /src\/a\.scss \(line moved\) {2}\$color-mercury/);
});

test("a token the project declares itself is never written as var()", () => {
  const p = project("own", {
    "package.json": PROJECT["package.json"],
    "src/index.tsx": PROJECT["src/index.tsx"]
      .replace('import s from "./b.module.scss";\n', "")
      .replace("className={s.x}", ""),
    "src/theme.scss":
      ".theme-client { --brand-primary: #c00; }\n:root { --gray80: #222; }\n",
    "src/a.scss": `${TK}.t { color: $brand-primary; background: $body-color; border-color: $color-axa; }\n`,
  });
  const r = JSON.parse(run(p, "--json").stdout);
  const lit = (label) => r.literals.find((x) => x.label === label);
  assert.equal(lit("$brand-primary").reason, "project-token");
  assert.match(lit("$brand-primary").note, /declares --brand-primary itself/);
  assert.equal(lit("$body-color").reason, "project-token");
  assert.equal(lit("$color-axa"), undefined);
  assert.equal(run(p, "--write").status, 0);
  assert.equal(
    read(p, "src/a.scss"),
    ".t { color: #00008f; background: #333; border-color: var(--axablue80); }\n",
  );
});

test("a mixin included in :export, a ; or a / in a string or a url(): no var() there", () => {
  const p = project("ctx", {
    "package.json": PROJECT["package.json"],
    "src/index.tsx": PROJECT["src/index.tsx"],
    "src/b.module.scss": `${TK}@mixin exp { primary: $color-axa; }\n@mixin wrap { @content; }\n:export { @include exp; @include wrap { white: $white; } }\n.x { color: $color-axa; }\n`,
    "src/a.scss": `${TK}@mixin m($a, $c) { @if $c == #00008f { color: red; } }\n.a { @include m("x;color: ", $color-axa); }\n.b { background: $color-axa url("../img/a.png") no-repeat; }\n.c { background: $white url(../img/b.png); }\n`,
  });
  const r = JSON.parse(run(p, "--json").stdout);
  const lit = (f, label) =>
    r.literals.filter((x) => x.file === f && x.label === label);
  assert.deepEqual(
    lit("src/b.module.scss", "$color-axa").map((x) => x.reason),
    ["export"],
  );
  assert.equal(lit("src/b.module.scss", "$white")[0].reason, "export");
  assert.equal(lit("src/a.scss", "$color-axa")[0].reason, "sass-statement");
  assert.equal(run(p, "--write").status, 0);
  assert.equal(
    read(p, "src/b.module.scss"),
    "@mixin exp { primary: #00008f; }\n@mixin wrap { @content; }\n:export { @include exp; @include wrap { white: #fff; } }\n.x { color: var(--axablue80); }\n",
  );
  assert.equal(
    read(p, "src/a.scss"),
    '@mixin m($a, $c) { @if $c == #00008f { color: red; } }\n.a { @include m("x;color: ", #00008f); }\n.b { background: var(--axablue80) url("../img/a.png") no-repeat; }\n.c { background: var(--white) url(../img/b.png); }\n',
  );
});

test("an unquoted colour name or number as key: Sass found nothing, the line is kept with STOP", () => {
  const src = `.a { color: map-get($colors, white); }\n.b { color: color(white); }\n.c { color: gray(100); }\n.d { margin: map-get($spacers, 1); color: map-get($colors, "white"); }\n`;
  const p = project("keys", {
    "package.json": PROJECT["package.json"],
    "src/index.tsx": PROJECT["src/index.tsx"],
    "src/a.scss": TK + src,
  });
  const r = JSON.parse(run(p, "--json").stdout);
  const m = (line) =>
    r.manual.find((i) => i.file === "src/a.scss" && i.line === line);
  assert.match(
    m(2).detail,
    /reads white as a colour, not as the key "white" of \$colors.*STOP/,
  );
  assert.match(m(3).detail, /^color\(white\): .*STOP/);
  assert.match(
    m(4).detail,
    /reads 100 as a number, not as the key "100" of \$grays/,
  );
  assert.equal(run(p, "--write").status, 0);
  assert.equal(
    read(p, "src/a.scss"),
    src.replace(
      '.d { margin: map-get($spacers, 1); color: map-get($colors, "white"); }',
      ".d { margin: 0.25rem; color: var(--white); }",
    ),
  );
});

test("the tokens are loaded per package, by an import of the app (not a string, not a test)", () => {
  const mono = project("mono", {
    "package.json": JSON.stringify({
      name: "mono",
      private: true,
      workspaces: ["packages/*"],
    }),
    "packages/app/package.json": PROJECT["package.json"],
    "packages/app/src/index.tsx": PROJECT["src/index.tsx"]
      .replace('import s from "./b.module.scss";\n', "")
      .replace("className={s.x}", ""),
    "packages/app/src/a.scss": `${TK}.a { color: $color-axa; }\n`,
    "packages/theme/package.json": JSON.stringify({
      name: "theme",
      dependencies: { "@axa-fr/react-toolkit-core": "2.3.1" },
    }),
    "packages/theme/src/theme.scss": `${TK}.t { color: $color-axa; }\n`,
  });
  assert.equal(run(mono, "--write").status, 0);
  assert.equal(
    read(mono, "packages/app/src/a.scss"),
    ".a { color: var(--axablue80); }\n",
  );
  assert.equal(
    read(mono, "packages/theme/src/theme.scss"),
    ".t { color: #00008f; }\n",
  );
  const p = project("mention", {
    "package.json": SASS_ONLY["package.json"],
    "src/index.tsx":
      'import "./a.scss";\nexport const doc = "see @axa-fr/canopee-css/distributeur/common/tokens.css";\n',
    "src/setupTests.ts":
      'import "@axa-fr/canopee-css/distributeur/common/tokens.css";\n',
    "src/a.scss": `${TK}.a { color: $color-axa; }\n`,
  });
  const r = JSON.parse(run(p, "--json").stdout);
  assert.deepEqual(
    r.literals.map((x) => x.reason),
    ["no-tokens-css"],
  );
});

test("an installed Canopée whose mapped token has another value: a NOTE that says STOP", () => {
  const p = project("installed", {
    "package.json": PROJECT["package.json"],
    "src/index.tsx": PROJECT["src/index.tsx"]
      .replace('import s from "./b.module.scss";\n', "")
      .replace("className={s.x}", ""),
    "src/a.scss": `${TK}.a { color: $color-axa; }\n`,
  });
  const pkg = path.join(p, "node_modules/@axa-fr/canopee-css");
  const css = path.join(pkg, data.tokensSource.tokensCss);
  fs.mkdirSync(path.dirname(css), { recursive: true });
  fs.writeFileSync(path.join(pkg, "package.json"), '{"version":"1.9.0"}');
  const root = (tokens) =>
    `:root{${Object.entries(tokens)
      .map(([k, v]) => `${k}:${v}`)
      .join(";")}}`;
  fs.writeFileSync(css, root(data.tokens));
  assert.doesNotMatch(
    run(p).stdout,
    /is installed, and toolkit-sass\.json maps/,
  );
  fs.writeFileSync(css, root({ ...data.tokens, "--axablue80": "#000080" }));
  const out = run(p).stdout;
  assert.match(
    out,
    /^NOTE: @axa-fr\/canopee-css 1\.9\.0 is installed, .*--axablue80 #00008f -> #000080.*STOP and ask$/m,
  );
});

test('LITERAL: several tokens with the value are not under "no Canopée token"', () => {
  const L = literalLines([
    {
      file: "src/a.scss",
      line: 1,
      label: "$x",
      value: "#00008f",
      reason: "ambiguous",
      candidates: ["--a", "--b"],
      manual: false,
    },
  ]);
  assert.equal(
    L[1],
    "  several Canopée tokens have exactly this value, none is chosen:",
  );
  assert.equal(
    L[2],
    "    src/a.scss:1  $x -> #00008f (tokens --a, --b: none chosen)",
  );
});
