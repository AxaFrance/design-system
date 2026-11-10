// Contrôle général d'un composant Figma et de toutes ses instances.
// À coller tel quel dans figma_execute, avec le fileKey de la branche, après avoir
// remplacé SET_ID. Lecture seule : le script ne modifie rien.
// Il rend { set, variantes, instances, defauts } ; chaque défaut porte un exemple.

const SET_ID = "SET_ID";
// Calques qui peuvent n'exister que dans certaines variantes, comme l'anneau de focus.
const CALQUES_OPTIONNELS = ["focus-ring"];
const FORMES = ["ELLIPSE", "VECTOR", "RECTANGLE", "LINE", "POLYGON", "STAR", "BOOLEAN_OPERATION", "GROUP"];

const set = await figma.getNodeByIdAsync(SET_ID);
if (!set || set.type !== "COMPONENT_SET") return "SET_ID ne désigne pas un ensemble de variantes.";
await figma.loadAllPagesAsync();

const defauts = {};
const note = (regle, exemple) => {
  const d = defauts[regle] || (defauts[regle] = { nombre: 0, exemples: [] });
  d.nombre++;
  if (d.exemples.length < 5) d.exemples.push(exemple);
};
const rgb = (c) => [c.r, c.g, c.b].map((x) => Math.round(x * 255)).join(",");
const memeCouleur = (a, b) => Math.abs(a.r - b.r) + Math.abs(a.g - b.g) + Math.abs(a.b - b.b) < 0.01;
const nomVar = {};
const variable = async (id) => {
  if (!(id in nomVar)) nomVar[id] = await figma.variables.getVariableByIdAsync(id);
  return nomVar[id];
};
const chemin = (n, racine) => {
  const p = [];
  while (n && n !== racine) { p.unshift(n.name); n = n.parent; }
  return p.join("/");
};
const defs = set.componentPropertyDefinitions;

// 1. Le set : mêmes calques partout, liens aux propriétés, peintures et valeurs.
const structures = {};
for (const v of set.children) {
  const noms = v.findAll(() => true).map((n) => chemin(n, v)).filter((p) => !CALQUES_OPTIONNELS.some((o) => p.split("/").includes(o)));
  const cle = noms.join("|");
  (structures[cle] = structures[cle] || []).push(v.name);
}
const formes = Object.values(structures).sort((a, b) => b.length - a.length);
for (const groupe of formes.slice(1)) for (const nom of groupe) note("structure-differente", nom + " n'a pas les mêmes calques que la majorité des variantes");

const liens = {};
for (const v of set.children) for (const n of v.findAll(() => true)) {
  const refs = n.componentPropertyReferences || {};
  for (const [champ, cle] of Object.entries(refs)) {
    if (!(cle in defs)) note("lien-propriete-mort", v.name + " / " + chemin(n, v) + " : " + champ + " vers " + cle);
    (liens[chemin(n, v) + "|" + champ] = liens[chemin(n, v) + "|" + champ] || new Set()).add(cle);
  }
}
for (const v of set.children) for (const n of v.findAll(() => true)) {
  for (const k of Object.keys(liens)) {
    const [p, champ] = k.split("|");
    if (p !== chemin(n, v)) continue;
    const refs = n.componentPropertyReferences || {};
    if (!refs[champ]) note("lien-propriete-absent", v.name + " / " + p + " : " + champ + " non relié, alors qu'il l'est ailleurs");
  }
  const refs = n.componentPropertyReferences || {};
  if (refs.visible && defs[refs.visible] && n.visible !== defs[refs.visible].defaultValue)
    note("visibilite-defaut", v.name + " / " + chemin(n, v) + " : visible=" + n.visible + ", défaut du booléen " + defs[refs.visible].defaultValue);
}

for (const v of set.children) for (const n of [v, ...v.findAll(() => true)]) {
  const ou = v.name + " / " + (chemin(n, v) || "racine");
  for (const champ of ["fills", "strokes"]) {
    const peintures = champ === "fills" && n.type === "TEXT" ? n.getStyledTextSegments(["fills"]).flatMap((s) => s.fills) : n[champ];
    if (!Array.isArray(peintures)) continue;
    for (const p of peintures) {
      if (!p || p.visible === false || p.type !== "SOLID") continue;
      const b = p.boundVariables && p.boundVariables.color;
      if (!b) { note("couleur-brute", ou + " : " + champ + " " + rgb(p.color)); continue; }
      const vv = await variable(b.id);
      if (!vv) { note("variable-introuvable", ou + " : " + b.id); continue; }
      const res = vv.resolveForConsumer(n).value;
      if (res && typeof res === "object" && "r" in res && !memeCouleur(res, p.color))
        note("couleur-de-base-fausse", ou + " : " + vv.name + " vaut " + rgb(res) + ", la peinture garde " + rgb(p.color));
      if (typeof p.opacity === "number" && p.opacity < 1)
        note("opacite-sur-peinture", ou + " : " + vv.name + " à " + Math.round(p.opacity * 100) + " %, perdue sur les instances, la mettre sur le calque");
    }
  }
  if (n.type === "TEXT" && !n.textStyleId) note("texte-sans-style", ou);
  const lies = n.boundVariables || {};
  if (n.layoutMode && n.layoutMode !== "NONE") {
    for (const f of ["itemSpacing", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft"])
      if (n[f] && !lies[f]) note("espacement-brut", ou + " : " + f + " " + n[f]);
  }
  if (typeof n.strokeWeight === "number" && n.strokes && n.strokes.length && !lies.strokeWeight && !lies.strokeTopWeight)
    note("epaisseur-brute", ou + " : " + n.strokeWeight);
}

// 2. Les instances de tout le fichier : texte, visibilité et rendu conformes.
let instances = 0;
for (const v of set.children) for (const i of await v.getInstancesAsync()) {
  let page = i;
  while (page && page.type !== "PAGE") page = page.parent;
  if (!page || i.removed) continue;
  instances++;
  const ou = page.name + " / " + i.name + " (" + v.name + ")";
  const props = i.componentProperties || {};
  const surcharges = new Set();
  for (const o of i.overrides || []) for (const f of o.overriddenFields) surcharges.add(o.id.split(";").pop() + "|" + f);
  for (const n of i.findAll(() => true)) {
    const refs = n.componentPropertyReferences || {};
    if (refs.characters && props[refs.characters] && n.characters !== props[refs.characters].value)
      note("instance-texte", ou + " : affiche « " + n.characters + " », la propriété vaut « " + props[refs.characters].value + " »");
    if (refs.visible && props[refs.visible] && n.visible !== props[refs.visible].value)
      note("instance-visibilite", ou + " : " + n.name + " visible=" + n.visible + ", booléen " + props[refs.visible].value);
    const idMain = n.id.split(";").pop();
    const m = await figma.getNodeByIdAsync(idMain);
    if (!m || m.type !== n.type) continue;
    const opa = (x) => x.opacity * (x.fills && Array.isArray(x.fills) && x.fills[0] && typeof x.fills[0].opacity === "number" ? x.fills[0].opacity : 1);
    if (!surcharges.has(idMain + "|opacity") && !surcharges.has(idMain + "|fills") && Math.abs(opa(n) - opa(m)) > 0.01)
      note("instance-opacite", ou + " : " + n.name + " à " + Math.round(opa(n) * 100) + " %, " + Math.round(opa(m) * 100) + " % sur le composant");
    if (n.type === "TEXT" && !surcharges.has(idMain + "|fills")) {
      const a = n.getStyledTextSegments(["fills"])[0], b = m.getStyledTextSegments(["fills"])[0];
      if (a && b && a.fills[0] && b.fills[0] && !memeCouleur(a.fills[0].color, b.fills[0].color))
        note("instance-couleur-texte", ou + " : " + n.name + " en " + rgb(a.fills[0].color) + ", " + rgb(b.fills[0].color) + " sur le composant");
    }
  }
}

return {
  set: set.name,
  variantes: set.children.length,
  instances,
  defauts: Object.keys(defauts).length ? defauts : "aucun",
};
