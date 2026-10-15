// The token map committed in toolkit-sass.json: each entry is exact, nothing exact is missing, and
// the map is what tools/build-token-map.mjs computes (never edited by hand). Offline.
// Run: node --test plugins/canopee-v1-migration/tests/*.test.mjs
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { test } from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildTokenMap,
  canonColor,
  eligibleTokens,
  mapEntries,
  resolveToken,
} from "../tools/build-token-map.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const tool = path.join(here, "../tools/build-token-map.mjs");
const jsonPath = path.join(
  here,
  "../skills/canopee-v1-migration/scripts/toolkit-sass.json",
);
const json = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
const eligible = eligibleTokens(json.tokens, json.tokensRedefined);

// every toolkit value of the JSON, as the migration script reads it: [section, key, sub, value]
function toolkitValues() {
  const out = [];
  const names = [
    ...new Set([...Object.keys(json.toolkit), ...Object.keys(json.bootstrap)]),
  ];
  for (const n of names) {
    const v = String(json.toolkit[n] ?? json.bootstrap[n]);
    if (v.trim().startsWith("("))
      for (const [k, x] of Object.entries(mapEntries(v)))
        out.push(["maps", k, n, x]);
    else out.push(["variables", n, null, v]);
  }
  for (const [n, files] of Object.entries(json.components)) {
    const vals = [...new Set(Object.values(files))];
    if (vals.length === 1) out.push(["components", n, null, vals[0]]);
  }
  for (const [n, v] of Object.entries(json.rootProperties))
    out.push(["rootProperties", n, null, v]);
  return out;
}
const mapped = (section, key, sub) =>
  sub ? json.tokenMap[section]?.[sub]?.[key] : json.tokenMap[section]?.[key];
const ambiguous = (section, key, sub) =>
  sub
    ? json.tokenAmbiguous?.[section]?.[sub]?.[key]
    : json.tokenAmbiguous?.[section]?.[key];

test("tokens: the 74 custom properties of the published :root, --orange10 included", () => {
  assert.equal(Object.keys(json.tokens).length, 74);
  assert.equal(json.tokens["--orange10"], "snow");
  assert.equal(json.tokens["--brand-primary"], "var(--axablue80)");
  assert.equal(json.tokensSource.package, "@axa-fr/canopee-css");
  assert.equal(json.tokensSource.version, "1.8.0");
  assert.deepEqual(json.tokensRedefined, [
    "--color-border-selected",
    "--text-color",
  ]);
});

test("every tokenMap entry is exactly the colour of its toolkit value, with an eligible token", () => {
  let n = 0;
  for (const [section, key, sub, value] of toolkitValues()) {
    const token = mapped(section, key, sub);
    if (!token) continue;
    n++;
    const label = `${section} ${sub ? `${sub}.` : ""}${key}`;
    assert.ok(eligible.has(token), `${label}: ${token} is not eligible`);
    assert.ok(canonColor(value), `${label}: ${value} is not an opaque colour`);
    assert.equal(
      canonColor(value),
      canonColor(resolveToken(token, json.tokens)),
      `${label}: ${value} != ${token}`,
    );
  }
  assert.equal(n, 73);
});

test("no exact match is missing: a value with an eligible token of its colour has an entry", () => {
  const keys = new Set([...eligible.values()].map((e) => e.key));
  for (const [section, key, sub, value] of toolkitValues()) {
    const k = canonColor(value);
    if (!k || !keys.has(k)) continue;
    assert.ok(
      mapped(section, key, sub) || ambiguous(section, key, sub),
      `${section} ${sub ? `${sub}.` : ""}${key} (${value}) has a token but no entry`,
    );
  }
});

test("never a redefined token, transparent or a number", () => {
  const all = JSON.stringify(json.tokenMap);
  for (const t of json.tokensRedefined) assert.ok(!all.includes(`"${t}"`), t);
  assert.ok(!all.includes('"--color-border-default"'));
  assert.ok(!all.includes('"--font-size-base"'));
  // $color-border-default (panel, #494df4) has the name of a token but not its value
  assert.equal(json.tokenMap.components["color-border-default"], undefined);
});

test("the token of the same name comes first, then the palette token", () => {
  assert.equal(json.tokenMap.variables["brand-primary"], "--brand-primary");
  assert.equal(json.tokenMap.variables["color-axa"], "--axablue80");
  assert.equal(json.tokenMap.variables["color-texte"], "--gray80");
  assert.equal(json.tokenMap.variables.white, "--white");
  assert.equal(json.tokenMap.maps.colors.white, "--white");
  assert.equal(json.tokenMap.rootProperties["--white"], "--white");
  // close but not equal: no mapping (#3032c1 vs --azur #3032c0)
  assert.equal(json.tokenMap.variables["color-azur"], undefined);
});

test("tokenMap is what the tool computes from tokens and tokensRedefined (no hand edit)", () => {
  const built = buildTokenMap(json, json.tokens, json.tokensRedefined);
  assert.deepEqual(json.tokenMap, built.tokenMap);
  assert.deepEqual(json.tokenAmbiguous ?? {}, built.tokenAmbiguous);
  const r = spawnSync(process.execPath, [tool, "--from-json", "--check"], {
    encoding: "utf8",
  });
  assert.equal(r.status, 0, r.stdout + r.stderr);
  assert.match(r.stdout, /CHECK: OK/);
});

// With the published package at hand (CANOPEE_CSS_DIR=<npm pack ... ; tar -xzf>/package), the JSON
// is also checked against it: tokens, redefinitions, sha256 of tokens.css.
test("the JSON matches the published package", (t) => {
  const dir = process.env.CANOPEE_CSS_DIR;
  if (!dir) return t.skip("CANOPEE_CSS_DIR not set");
  const r = spawnSync(
    process.execPath,
    [tool, "--canopee-css", dir, "--check"],
    { encoding: "utf8" },
  );
  assert.equal(r.status, 0, r.stdout + r.stderr);
});
