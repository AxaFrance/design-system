#!/usr/bin/env node
// Produces scripts/reconstruire.bridge.js: the script to paste into a figma_execute to
// rebuild a component in Figma from its JSON alone (round trip test).
//
// Usage: node scripts/construire-retour.mjs [--json path] [--etape tout|creer|assembler|supprimer]
//                                           [--de 0] [--a 50] [--x 0 --y 0] [--sortie path]
//                                           [--fichier key] [--page name] [--nom name]
//   --json    sheet to rebuild (default ai-ready-docs/b2c/composants/button/button.json)
//   --fichier key of the only Figma file where the script agrees to write (default the
//             « DS IA ready » B2C branch, UWk4fT45i82ESNhGaAnj6p)
//   --page    page where it writes (default « Test - Components AI-ready »)
//   --nom     name of the rebuilt set (default « Retour/ » followed by the component name)
//   --etape   tout (default), or creer / assembler in several calls, or supprimer
//   --de, --a range of variants created (creer step)
//   --fiche-globale  reads the sheet in globalThis.__FICHE_RETOUR instead of embedding it
//   --x, --y  position of the set on the page (otherwise under the content of the page)
// The expansion rules of the overrides are copied from src/code.ts. The types are removed with
// TypeScript (devDependency of the plugin): run npm ci first.

import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ts from "typescript";

const here = dirname(fileURLToPath(import.meta.url));
const args = process.argv.slice(2);
const option = (name) => {
  const i = args.indexOf(name);
  return i >= 0 ? args[i + 1] : undefined;
};
const json = resolve(
  option("--json") ||
    join(here, "..", "..", "..", "b2c", "composants", "button", "button.json"),
);
const output = resolve(
  option("--sortie") || join(here, "reconstruire.bridge.js"),
);
const config = { etape: option("--etape") || "tout" };
if (option("--de") !== undefined) config.from = Number(option("--de"));
if (option("--a") !== undefined) config.to = Number(option("--a"));
if (option("--fichier") !== undefined) config.file = option("--fichier");
if (option("--page") !== undefined) config.page = option("--page");
if (option("--nom") !== undefined) config.name = option("--nom");
if (option("--x") !== undefined) config.x = Number(option("--x"));
if (option("--y") !== undefined) config.y = Number(option("--y"));

// --fiche-globale: the sheet is not copied into the script, it reads it in globalThis.__FICHE_RETOUR,
// set once by a figma_execute (useful when the sheet is too heavy to paste at each step).
const sheet = args.includes("--fiche-globale")
  ? "globalThis.__FICHE_RETOUR"
  : JSON.stringify(JSON.parse(readFileSync(json, "utf8")));
const template = readFileSync(join(here, "reconstruire.modele.js"), "utf8");

// The format rules come from src/code.ts, between the markers DEBUT REGLES and FIN REGLES.
const START = "// >>> DEBUT REGLES";
const END = "// <<< FIN REGLES";
// src/code.ts without its types: the script pasted in figma_execute is plain JavaScript.
const code = ts.transpileModule(
  readFileSync(join(here, "..", "src", "code.ts"), "utf8"),
  {
    compilerOptions: {
      target: ts.ScriptTarget.ES2020,
      module: ts.ModuleKind.ESNext,
      removeComments: false,
    },
  },
).outputText;
const start = code.indexOf(START);
const end = code.indexOf(END);
if (start < 0 || end < start) {
  console.error(
    "Repères introuvables dans src/code.ts : " + START + " et " + END,
  );
  process.exit(1);
}
const rules = code.slice(start + START.length, end).trim();
const bridge =
  "// Généré par scripts/construire-retour.mjs. Ne pas modifier à la main.\n" +
  template
    .split("__REGLES__")
    .join(rules)
    .split("__FICHE__")
    .join(sheet)
    .split("__CONFIG__")
    .join(JSON.stringify(config));

writeFileSync(output, bridge);
console.log(
  "Écrit : " +
    output +
    " (" +
    bridge.length +
    " caractères, étape " +
    config.etape +
    ")",
);
