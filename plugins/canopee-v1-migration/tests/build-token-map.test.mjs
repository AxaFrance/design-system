// tools/build-token-map.mjs: colour normalisation, eligible tokens, choice of the token, and the
// command line on a small package shaped like @axa-fr/canopee-css (written to a temporary folder:
// dist/ folders are ignored by git).
// Run: node --test plugins/canopee-v1-migration/tests/*.test.mjs
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { after, test } from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildTokenMap,
  canonColor,
  chooseToken,
  eligibleTokens,
  parseTokens,
  readPackage,
  redefinedTokens,
} from "../tools/build-token-map.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const tool = path.join(here, "../tools/build-token-map.mjs");
const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "build-token-map-"));
after(() => fs.rmSync(tmp, { recursive: true, force: true }));

// --text is set again by a component, --accent too (in a media query): neither is eligible
const TOKENS_CSS =
  ":root{--blue80:#00008f;--blue-alias:var(--blue80);--brand:var(--blue80);--gray80:#333;" +
  "--text:var(--gray80);--white:#fff;--orange10:snow;--twin-a:#123456;--twin-b:#123456;" +
  "--accent:#abcdef;--accent-alias:var(--accent);--border-default:transparent;--size:16}\n";
const PACKAGE = {
  "package.json": JSON.stringify({
    name: "@axa-fr/canopee-css",
    version: "0.0.0-test",
  }),
  "dist/distributeur/common/tokens.css": TOKENS_CSS,
  "dist/distributeur/Comp/Comp.css":
    ".af-comp{--text:var(--blue80);color:var(--text)}@media (min-width:768px){.af-comp--x{--accent:#000}}\n",
  // the :root of distributeur.css repeats tokens.css: not a redefinition
  "dist/distributeur/distributeur.css":
    ":root{--blue80:#00008f;--white:#fff}.af-other{color:var(--white)}\n",
};
const pkgDir = path.join(tmp, "package");
for (const [f, text] of Object.entries(PACKAGE)) {
  fs.mkdirSync(path.dirname(path.join(pkgDir, f)), { recursive: true });
  fs.writeFileSync(path.join(pkgDir, f), text);
}
const tokens = parseTokens(TOKENS_CSS);
const redefined = redefinedTokens(
  tokens,
  Object.entries(PACKAGE)
    .filter(([f]) => f.endsWith(".css"))
    .map(([file, css]) => ({ file, css })),
);
const eligible = eligibleTokens(tokens, redefined);

test("canonColor: the same opaque colour, whatever the notation", () => {
  for (const v of [
    "#FFF",
    "#ffffff",
    "#ffff",
    "#ffffffff",
    "rgb(255,255,255)",
    "rgb(255 255 255 / 1)",
    "rgba(255, 255, 255, 1)",
    "rgb(255 255 255 / 100%)",
    "white",
    " White ",
  ])
    assert.equal(canonColor(v), "#ffffff", v);
  assert.equal(canonColor("snow"), "#fffafa");
  assert.equal(canonColor("#00008F"), "#00008f");
  assert.equal(canonColor("#333"), "#333333");
});

test("canonColor: never a translucent colour, an approximation or a non-colour", () => {
  assert.notEqual(canonColor("#3032c1"), canonColor("#3032c0"));
  for (const v of [
    "rgba(0,0,0,.5)",
    "rgba(0, 0, 0, 0.5)",
    "#00000080",
    "#0008",
    "transparent",
    "currentcolor",
    "hsl(0deg 100% 99%)",
    "hsl(0, 0%, 100%)",
    "rgb(100%,0%,0%)",
    "rgb(0, 0, 114.4)",
    "rgb(256, 0, 0)",
    "16px",
    "16",
    "0",
    "none",
    "(primary: #fff)",
    '"Source Sans Pro", Arial',
    "",
    undefined,
  ])
    assert.equal(canonColor(v), null, String(v));
});

test("tokens.css: one :root rule, otherwise refused", () => {
  assert.equal(Object.keys(tokens).length, 13);
  assert.equal(tokens["--brand"], "var(--blue80)");
  assert.throws(
    () => parseTokens(":root{--a:#fff}:root{--b:#000}"),
    /one :root/,
  );
  assert.throws(() => parseTokens(".a{--a:#fff}"), /one :root/);
  assert.throws(() => parseTokens(""), /one :root/);
});

test("a token another rule declares again is not eligible (a :root with the same value is not one)", () => {
  assert.deepEqual(redefined, ["--accent", "--text"]);
  assert.ok(!eligible.has("--text"));
  assert.ok(!eligible.has("--accent"));
  assert.ok(eligible.has("--blue80"));
  assert.ok(eligible.has("--white"));
  // transparent and a number are never eligible
  assert.ok(!eligible.has("--border-default"));
  assert.ok(!eligible.has("--size"));
  assert.equal(eligible.get("--brand").palette, false);
  assert.equal(eligible.get("--blue80").palette, true);
});

test("chooseToken: the same name first, then the only palette token", () => {
  assert.deepEqual(chooseToken("brand", "#00008f", eligible), {
    token: "--brand",
    by: "name",
  });
  assert.deepEqual(chooseToken("color-axa", "#00008F", eligible), {
    token: "--blue80",
    by: "palette",
  });
  assert.deepEqual(chooseToken("white", "#ffffff", eligible), {
    token: "--white",
    by: "name",
  });
  assert.deepEqual(chooseToken("x", "snow", eligible), {
    token: "--orange10",
    by: "palette",
  });
  // --text has the name and the value, but a component sets it again: the palette token
  assert.deepEqual(chooseToken("text", "#333", eligible), {
    token: "--gray80",
    by: "palette",
  });
});

test("chooseToken: no mapping without exactly one palette token", () => {
  // two palette tokens with the same value
  assert.deepEqual(chooseToken("x", "#123456", eligible), {
    reason: "ambiguous",
    candidates: ["--twin-a", "--twin-b"],
  });
  // only an alias has the colour: an alias is never chosen by its value
  assert.deepEqual(chooseToken("x", "#abcdef", eligible), {
    reason: "ambiguous",
    candidates: ["--accent-alias"],
  });
  // the name alone is not enough
  assert.deepEqual(chooseToken("border-default", "#494df4", eligible), {
    reason: "no-token",
  });
  assert.deepEqual(chooseToken("white", "#fefefe", eligible), {
    reason: "no-token",
  });
  for (const v of ["transparent", "16", "16px", "rgba(0, 0, 0, 0.5)"])
    assert.deepEqual(chooseToken("size", v, eligible), {
      reason: "not-colour",
    });
});

const JSON_IN = {
  source: "test",
  toolkit: { "color-axa": "#00008f", brand: "#00008F", azur: "#3032c1" },
  bootstrap: {
    white: "#fff",
    twin: "#123456",
    "theme-colors": "(primary: #00008f, light: #f8f9fa, white: #fff)",
    spacer: "1rem",
  },
  components: {
    "panel-bg": { "a.scss": "#333", "b.scss": "#333" },
    "panel-fg": { "a.scss": "#333", "b.scss": "#fff" },
  },
  rootProperties: { "--white": "#fff", "--primary": "#0275d8" },
  deps: {},
};

test("buildTokenMap: variables, map entries, components and :root properties", () => {
  const { tokenMap, tokenAmbiguous, stats } = buildTokenMap(
    JSON_IN,
    tokens,
    redefined,
  );
  assert.deepEqual(tokenMap, {
    variables: { brand: "--brand", "color-axa": "--blue80", white: "--white" },
    maps: { "theme-colors": { primary: "--blue80", white: "--white" } },
    // a component variable with two values has no entry
    components: { "panel-bg": "--gray80" },
    rootProperties: { "--white": "--white" },
  });
  assert.deepEqual(tokenAmbiguous, {
    variables: { twin: ["--twin-a", "--twin-b"] },
  });
  assert.equal(stats.noToken.length, 3); // azur, theme-colors.light, --primary
});

test("command line: --write, then --check; a hand edit fails --check", () => {
  const jsonPath = path.join(tmp, "toolkit-sass.json");
  fs.writeFileSync(jsonPath, JSON.stringify(JSON_IN, null, 2));
  const run = (...args) =>
    spawnSync(process.execPath, [tool, ...args, "--json", jsonPath], {
      encoding: "utf8",
    });
  // a new version needs the integrity of its tarball
  let r = run("--canopee-css", pkgDir, "--write");
  assert.equal(r.status, 2);
  assert.match(r.stderr, /--integrity/);
  r = run("--canopee-css", pkgDir, "--integrity", "sha512-test", "--write");
  assert.equal(r.status, 0, r.stderr);
  const written = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
  assert.deepEqual(Object.keys(written).slice(0, 7), [
    "source",
    "tokensSource",
    "tokens",
    "tokensRedefined",
    "tokenMap",
    "tokenAmbiguous",
    "toolkit",
  ]);
  assert.equal(written.tokensSource.version, "0.0.0-test");
  assert.equal(written.tokensSource.integrity, "sha512-test");
  assert.equal(
    written.tokensSource.tokensCssSha256,
    readPackage(pkgDir).tokensSource.tokensCssSha256,
  );
  assert.deepEqual(written.toolkit, JSON_IN.toolkit);
  // the integrity is kept for the same version
  assert.equal(run("--canopee-css", pkgDir, "--check").status, 0);
  assert.equal(run("--from-json", "--check").status, 0);
  written.tokenMap.variables.azur = "--blue80";
  fs.writeFileSync(jsonPath, JSON.stringify(written, null, 2));
  r = run("--from-json", "--check");
  assert.equal(r.status, 1);
  assert.match(r.stdout, /CHECK: FAIL.*tokenMap/);
  assert.equal(run("--canopee-css", pkgDir, "--check").status, 1);
});

test("command line: a package that is not @axa-fr/canopee-css is refused", () => {
  const other = path.join(tmp, "other");
  fs.mkdirSync(other, { recursive: true });
  fs.writeFileSync(
    path.join(other, "package.json"),
    JSON.stringify({ name: "x", version: "1.0.0" }),
  );
  const r = spawnSync(
    process.execPath,
    [tool, "--canopee-css", other, "--integrity", "sha512-x"],
    { encoding: "utf8" },
  );
  assert.notEqual(r.status, 0);
});
