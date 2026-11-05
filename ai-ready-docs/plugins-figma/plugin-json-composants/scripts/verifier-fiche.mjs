// Checks that a Markdown sheet follows its JSON and the outline: each « propriété=valeur » quoted in
// the Markdown must exist in the JSON, each variant value should have its rule, the title
// is « # <meta.name> <meta.version> », the design tokens line follows the title and quotes
// meta.tokensVersion, each decision starts with the version that introduced it and its date (without a
// version newer than meta.version), each open point says what applies in the meantime,
// the documentation link set in Figma appears in the Code section, the level of a template
// is block, section or page, and the instruction for the AI closes the sheet.
// Usage: node scripts/verifier-fiche.mjs ../../b2c/composants/button/button.md ../../b2c/composants/button/button.json
// The outline is read in the parent folder of the sheet. Exit code 1 if there is an error, 0 otherwise (the
// remarks do not prevent exit code 0).
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";

const [mdPath, jsonPath] = process.argv.slice(2);
if (!mdPath || !jsonPath) {
  console.error(
    "Usage : node scripts/verifier-fiche.mjs <fiche.md> <fiche.json>",
  );
  process.exit(2);
}
const md = readFileSync(mdPath, "utf8");
const sheet = JSON.parse(readFileSync(jsonPath, "utf8"));

// The known properties: variants and booleans in api.props, texts and swaps in structure.slots.
const values = {};
for (const [name, p] of Object.entries(
  sheet.api && sheet.api.props ? sheet.api.props : {},
)) {
  values[name] = p.type === "enum" ? p.enum.map(String) : ["true", "false"];
}
const slots = Object.keys(
  sheet.structure && sheet.structure.slots ? sheet.structure.slots : {},
);

// The text of the Markdown, without the header comment. Code blocks are kept: the Code section
// also quotes Figma properties in its table.
const text = md.replace(/<!--[\s\S]*?-->/g, "");
const errors = [];
const remarks = [];

// 1. Each « propriété=valeur » quoted exists in the JSON.
const seenMentions = new Set();
for (const m of text.matchAll(
  /(?<![\w-])(_?[a-z][a-zA-Z0-9]*)=([a-z0-9][a-z0-9-]*)/g,
)) {
  const [, prop, val] = m;
  const key = prop + "=" + val;
  if (seenMentions.has(key)) continue;
  seenMentions.add(key);
  if (!(prop in values)) errors.push("Propriété inconnue du JSON : " + key);
  else if (!values[prop].includes(val))
    errors.push(
      "Valeur inconnue du JSON : " +
        key +
        " (valeurs : " +
        values[prop].join(", ") +
        ")",
    );
}

// 2. In the Figma column of the deviations table, each property name quoted alone exists in
// the JSON. Only camelCase names are checked, so as not to take a French word for
// a property; label, in lowercase, is checked apart.
const codeCategory = (text.split(/^## Code$/m)[1] || "").split(/^## /m)[0];
for (const line of codeCategory.split("\n").filter((l) => l.startsWith("|"))) {
  const figma = (line.split("|")[1] || "").replace(
    /(?<![\w-])_?[a-z][a-zA-Z0-9]*=[a-z0-9-]+/g,
    "",
  );
  for (const word of figma.match(/\b[a-z]+[A-Z][a-zA-Z0-9]*\b|\blabel\b/g) ||
    []) {
    if (!(word in values) && !slots.includes(word))
      errors.push("Propriété du tableau des écarts absente du JSON : " + word);
  }
}

// 3. Each variant value has its rule, under a « ### propriété=valeur » title.
const titles = new Set(
  [...text.matchAll(/^### (\S+=\S+)\s*$/gm)].map((m) => m[1]),
);
const ignoredProps = new Set(["state", "_theme"]);
for (const [prop, vals] of Object.entries(values)) {
  if (ignoredProps.has(prop) || !(sheet.api.props[prop].type === "enum"))
    continue;
  const baseVariant = String(sheet.api.props[prop].default);
  for (const v of vals) {
    if (v === baseVariant && prop !== "hierarchy") continue;
    if (!titles.has(prop + "=" + v))
      remarks.push(
        "Pas de règle pour " +
          prop +
          "=" +
          v +
          " dans « Règles selon les propriétés »",
      );
  }
}

// 4. The instruction for the AI is the last section of the sheet, word for word as in the outline.
const outline = readFileSync(
  join(dirname(mdPath), "..", "trame-fiche-composant.md"),
  "utf8",
);
const instruction = (outline.match(
  /^## Pour l'IA qui lit cette fiche\n+(.+)$/m,
) || [])[1];
const lastCategory = text.split(/^## /m).pop().trim();
if (!instruction) errors.push("Consigne pour l'IA introuvable dans la trame");
else if (lastCategory !== "Pour l'IA qui lit cette fiche\n\n" + instruction)
  errors.push(
    "La consigne pour l'IA ne ferme pas la fiche, ou diffère de la trame",
  );

// 5. The title carries the version of the component and is followed by the design tokens line.
const meta = sheet.meta || {};
const versionPattern = /^\d+\.\d+\.\d+$/;
const validVersion = versionPattern.test(String(meta.version));
if (!validVersion) errors.push("JSON sans version");
else if (
  (text.match(/^# .*$/m) || [""])[0] !==
  "# " + meta.name + " " + meta.version
)
  errors.push(
    "Le titre de la fiche n'est pas « # " +
      meta.name +
      " " +
      meta.version +
      " »",
  );
if (!versionPattern.test(String(meta.tokensVersion)))
  errors.push("JSON sans version des design tokens");
else {
  const lines = (text.split(/^# .*$/m)[1] || "").split("\n");
  const expectedLine =
    "Utilise les design tokens de Canopée " +
    meta.tokensVersion +
    " ou d'une version plus récente.";
  if (lines.find((l) => l.trim() !== "") !== expectedLine)
    errors.push(
      "La ligne des design tokens ne suit pas le titre : « " +
        expectedLine +
        " »",
    );
}

// 6. Each decision starts with the version that introduced it and its date, without a version newer
// than the one of the JSON.
const compareVersions = (a, b) => {
  const pa = a.split(".").map(Number),
    pb = b.split(".").map(Number);
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2];
};
const decisions = (text.split(/^## Décisions$/m)[1] || "").split(/^## /m)[0];
for (const line of decisions.split("\n").filter((l) => l.startsWith("- "))) {
  const m = /^- \*\*(\d+\.\d+\.\d+) - \d{2}\/\d{2}\/\d{2}\.\*\*/.exec(line);
  if (!m)
    errors.push(
      "Décision sans « **X.Y.Z - JJ/MM/AA.** » en tête : " + line.slice(2, 50),
    );
  else if (validVersion && compareVersions(m[1], meta.version) > 0)
    errors.push(
      "Décision datée d'une version plus récente que le JSON (" +
        meta.version +
        ") : " +
        line.slice(2, 50),
    );
}

// 7. Each open point ends with what applies in the meantime.
const openPoints = (text.split(/^## Points ouverts$/m)[1] || "").split(
  /^## /m,
)[0];
for (const line of openPoints.split("\n").filter((l) => l.startsWith("- "))) {
  if (!line.includes("En attendant : "))
    errors.push("Point ouvert sans « En attendant : » : " + line.slice(2, 50));
}

// 8. The documentation link set in Figma appears in the Code section.
for (const link of (sheet.meta && sheet.meta.documentationLinks) || []) {
  if (!codeCategory.includes(link))
    errors.push(
      "Lien de documentation du JSON absent de la rubrique Code : " + link,
    );
}

// 9. The level of a template is block, section or page. A component does not have this field.
if (
  "templateLevel" in meta &&
  !["block", "section", "page"].includes(meta.templateLevel)
)
  errors.push(
    "Niveau de template inconnu : " +
      meta.templateLevel +
      " (valeurs : block, section, page)",
  );
if ((meta.type === "template") !== "templateLevel" in meta)
  errors.push(
    "Un template a le type template et un templateLevel, un composant n'a ni l'un ni l'autre",
  );

for (const e of errors) console.log("ERREUR    " + e);
for (const r of remarks) console.log("REMARQUE  " + r);
console.log(
  errors.length +
    " erreur(s), " +
    remarks.length +
    " remarque(s), " +
    seenMentions.size +
    " mention(s) propriété=valeur contrôlée(s)",
);
process.exit(errors.length ? 1 : 0);
