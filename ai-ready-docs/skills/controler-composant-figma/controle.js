// Contrôle général d'un composant Figma et de toutes ses instances.
// À coller tel quel dans figma_execute, avec le fileKey du fichier, après avoir
// remplacé SET_ID. Lecture seule : le script ne modifie rien.
// Il rend { set, variantes, instances, defauts, surcharges } ; chaque défaut porte des exemples.

const SET_ID = "SET_ID";
// Pattern d'interaction du composant, d'après la page des principes d'interaction :
// "Fond", "Contour", "Hybride" ou "Halo". Une chaîne vide pour un composant sans état d'interaction.
const PATTERN = "PATTERN";
// Calques qui peuvent n'exister que dans certaines variantes, comme l'anneau de focus.
const CALQUES_OPTIONNELS = ["focus-ring"];
// Formes : leur taille vient du tracé, elle n'est pas une valeur de mise en page.
const FORMES = ["ELLIPSE", "VECTOR", "RECTANGLE", "LINE", "POLYGON", "STAR", "BOOLEAN_OPERATION", "GROUP"];
// Un asset de Fondations porte un nom qui commence par son type.
const ASSET = /^(icon|pictogram|logo|flag)\//;
// Rôle attendu d'un calque, selon son nom.
const ROLES = [
  { nom: /^mask$/, test: (n) => n.isMask === true, attendu: "un masque" },
  { nom: /^focus-ring$/, test: (n) => n.type === "FRAME" && n.layoutPositioning === "ABSOLUTE", attendu: "un cadre posé en absolu" },
  { nom: /^(label|title|subtitle|description|caption|helper|message|value)$/, test: (n) => n.type === "TEXT", attendu: "un texte" },
  { nom: /^(icon|left-icon|right-icon)$/, test: (n) => n.type === "INSTANCE", attendu: "une instance" },
];
// Nom donné par Figma ou par un import : « Frame 27 », « Vector », « axa_logo_solid_rgb 1 ».
const NOM_PAR_DEFAUT = /^(Frame|Group|Rectangle|Ellipse|Vector|Line|Polygon|Star|Union|Subtract|Intersect|Exclude|Text|Image|Component|Instance)( \d+)?$|\s\d+$/;
// Surcharges d'instance, par famille. Permises : le contenu et la place dans la maquette.
const CONTENU = ["characters", "componentProperties", "mainComponent", "text"];
const PLACEMENT = ["layoutGrow", "layoutAlign", "layoutPositioning", "constraints", "reactions", "x", "y", "explicitVariableModes"];
// À vérifier, rangées par famille.
const FAMILLES = {
  taille: ["width", "height", "minWidth", "maxWidth", "minHeight", "maxHeight", "primaryAxisSizingMode", "counterAxisSizingMode", "layoutSizingHorizontal", "layoutSizingVertical", "textAutoResize"],
  couleur: ["fills", "strokes", "opacity", "effects", "fillStyleId", "strokeStyleId"],
  texte: ["textStyleId", "fontName", "fontSize", "fontWeight", "lineHeight", "letterSpacing", "textDecoration", "textDecorationThickness", "textCase"],
  marges: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "itemSpacing", "primaryAxisAlignItems", "counterAxisAlignItems", "cornerRadius", "strokeWeight"],
  visibilite: ["visible"],
};
const famille = (champ) => Object.keys(FAMILLES).find((f) => FAMILLES[f].includes(champ)) || "autres";
const DUREE_MAX_MS = 240000;

const debut = Date.now();
const set = await figma.getNodeByIdAsync(SET_ID);
if (!set || set.type !== "COMPONENT_SET") return "SET_ID ne désigne pas un ensemble de variantes.";
if (!["Fond", "Contour", "Hybride", "Halo", ""].includes(PATTERN)) return "PATTERN vaut Fond, Contour, Hybride, Halo, ou une chaîne vide.";
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
const nomComposant = (mc) => (mc.parent && mc.parent.type === "COMPONENT_SET" ? mc.parent.name : mc.name);
const defs = set.componentPropertyDefinitions;

// 1. Le set : mêmes calques partout et liens aux propriétés.
// Les variantes se comparent à l'intérieur d'une même valeur de type, qui change la structure.
const typeDe = (v) => { const m = /(?:^|, )type=([^,]+)/.exec(v.name); return m ? m[1] : ""; };
const parType = {};
for (const v of set.children) (parType[typeDe(v)] = parType[typeDe(v)] || []).push(v);
for (const variantes of Object.values(parType)) {
  const structures = {};
  for (const v of variantes) {
    const noms = v.findAll(() => true).map((n) => chemin(n, v)).filter((p) => !CALQUES_OPTIONNELS.some((o) => p.split("/").includes(o)));
    const cle = noms.join("|");
    (structures[cle] = structures[cle] || []).push(v.name);
  }
  const formes = Object.values(structures).sort((a, b) => b.length - a.length);
  for (const groupe of formes.slice(1)) for (const nom of groupe) note("structure-differente", nom + " n'a pas les mêmes calques que la majorité des variantes de son type");
}

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

// 2. Le set : couleurs, valeurs, tailles, rôles, calques sans rôle et instances imbriquées.
const visibles = (peintures) => (Array.isArray(peintures) ? peintures.filter((p) => p.visible !== false) : []);
const masques = {};
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
  // Une taille fixe se relie à un token, sauf pour une forme ou un calque absolu étiré.
  if (!FORMES.includes(n.type)) {
    const etire = (axe) => n.layoutPositioning === "ABSOLUTE" && n.constraints && n.constraints[axe] === "STRETCH";
    if (n.layoutSizingHorizontal === "FIXED" && !lies.width && !etire("horizontal")) note("taille-brute", ou + " : largeur " + Math.round(n.width * 100) / 100);
    if (n.layoutSizingVertical === "FIXED" && !lies.height && !etire("vertical")) note("taille-brute", ou + " : hauteur " + Math.round(n.height * 100) / 100);
  }
  // Un ratio verrouillé ne garde qu'une dimension reliée.
  if (n.targetAspectRatio && (!!lies.width) !== (!!lies.height))
    note("taille-verrouillee", ou + " : ratio verrouillé, seule la " + (lies.width ? "largeur" : "hauteur") + " est reliée");
  for (const r of ROLES) if (r.nom.test(n.name) && !r.test(n)) note("role-incoherent", ou + " : nommé " + n.name + ", ce n'est pas " + r.attendu);
  // Un nom par défaut, hors calques d'un composant imbriqué, qui appartiennent à ce composant.
  let imbrique = false;
  for (let p = n.parent; p && p !== v; p = p.parent) if (p.type === "INSTANCE") imbrique = true;
  if (n !== v && !imbrique && NOM_PAR_DEFAUT.test(n.name)) note("nom-par-defaut", ou);
  // Calques sans rôle, hors calques d'un composant imbriqué.
  if (!imbrique) {
    const f = visibles(n.fills), s = visibles(n.strokes);
    // Un contour intérieur de la couleur du fond ne se voit pas.
    if (f.length === 1 && s.length === 1 && f[0].type === "SOLID" && s[0].type === "SOLID" && n.strokeAlign === "INSIDE") {
      const vf = f[0].boundVariables && f[0].boundVariables.color, vs = s[0].boundVariables && s[0].boundVariables.color;
      const meme = vf && vs ? vf.id === vs.id : !vf && !vs && memeCouleur(f[0].color, s[0].color);
      if (meme && f[0].opacity === s[0].opacity) note("contour-invisible", ou + " : contour intérieur de la couleur du fond");
    }
    // Un groupe ou un cadre qui n'enveloppe qu'un calque de même taille, sans rendu ni lien propre.
    const lie = Object.keys(n.componentPropertyReferences || {}).length > 0;
    const rendu = f.length || s.length || visibles(n.effects).length || n.opacity < 1 || !["PASS_THROUGH", "NORMAL"].includes(n.blendMode);
    if (n !== v && (n.type === "GROUP" || n.type === "FRAME") && !CALQUES_OPTIONNELS.includes(n.name) && n.children.length === 1 && !rendu && !lie) {
      const c = n.children[0];
      if (Math.abs(c.width - n.width) < 0.5 && Math.abs(c.height - n.height) < 0.5) note("groupe-sans-role", ou + " : n'enveloppe que " + c.name + ", à la même taille");
    }
    // Un masque coupe les calques posés au-dessus de lui.
    if (n.isMask) {
      const couverts = n.parent.children.slice(n.parent.children.indexOf(n) + 1);
      const dedans = (c) => c.x >= n.x - 0.5 && c.y >= n.y - 0.5 && c.x + c.width <= n.x + n.width + 0.5 && c.y + c.height <= n.y + n.height + 0.5;
      if (!couverts.length) note("masque-sans-effet", ou + " : aucun calque au-dessus du masque");
      else if (n.type === "RECTANGLE" && n.cornerRadius === 0 && couverts.every(dedans)) note("masque-sans-effet", ou + " : rectangle qui contient déjà tout ce qu'il masque");
    }
    // Un calque masqué dans toutes les variantes, sans booléen, ne sert à rien.
    if (n !== v) {
      const m = masques[chemin(n, v)] || (masques[chemin(n, v)] = { variantes: 0, masque: 0, lie: false });
      m.variantes++;
      if (!n.visible) m.masque++;
      if ((n.componentPropertyReferences || {}).visible) m.lie = true;
    }
  }
  if (n.type === "INSTANCE" && n !== v) {
    let mc = null;
    try { mc = await n.getMainComponentAsync(); } catch (e) { mc = null; }
    if (!mc || mc.removed) note("instance-sans-master", ou + " : son composant principal n'existe plus");
    else if (mc.remote && !ASSET.test(nomComposant(mc))) note("instance-hors-fondations", ou + " : " + nomComposant(mc) + " vient d'une librairie, sans nom d'asset de Fondations");
  }
}

for (const [p, m] of Object.entries(masques))
  if (m.masque === m.variantes && !m.lie) note("calque-toujours-masque", p + " : masqué dans les " + m.variantes + " variantes, sans booléen");

// 3. Les règles communes des principes d'interaction : press, disabled, hover et focus.
// Calques propres à une variante, hors calques d'un composant imbriqué, rangés par chemin.
const propres = (v) => {
  const m = new Map([["", v]]);
  for (const n of v.findAll(() => true)) {
    let imbrique = false;
    for (let p = n.parent; p && p !== v; p = p.parent) if (p.type === "INSTANCE") imbrique = true;
    if (!imbrique) m.set(chemin(n, v), n);
  }
  return m;
};
// Variante qui ne diffère de v que par la valeur d'une propriété.
const jumelle = (v, prop, val) => set.children.find((w) => {
  const a = w.variantProperties || {}, b = v.variantProperties || {};
  return Object.keys(b).every((k) => (k === prop ? a[k] === val : a[k] === b[k]));
});
const couleurDe = async (p) => (p && p.boundVariables && p.boundVariables.color ? await variable(p.boundVariables.color.id) : null);
if (PATTERN) for (const v of set.children) {
  const vp = v.variantProperties || {};
  const etat = vp.state;
  if (["Contour", "Halo"].includes(PATTERN) && etat === "press") note("press-en-trop", v.name + " : le pattern " + PATTERN + " n'a pas de press");
  if (vp.disabled === "true" && etat && etat !== "default") note("disabled-avec-etat", v.name + " : disabled=true n'existe qu'avec state=default");
  // Le hover ne prend jamais une nuance 050 : seule compte une couleur qui change par rapport au default.
  if (etat === "hover") {
    const repos = jumelle(v, "state", "default");
    const calquesRepos = repos ? propres(repos) : new Map();
    for (const [p, n] of propres(v)) for (const champ of ["fills", "strokes"]) for (const peinture of visibles(n[champ])) {
      const vv = await couleurDe(peinture);
      if (!vv || !/\/050$/.test(vv.name)) continue;
      const avant = calquesRepos.get(p);
      const dejaLa = avant && (await Promise.all(visibles(avant[champ]).map(couleurDe))).some((x) => x && x.id === vv.id);
      if (!dejaLa) note("hover-050", v.name + " / " + (p || "racine") + " : " + champ + " " + vv.name);
    }
  }
  // Le focus ajoute un indicateur color/blue/400 de 2 px, et une outline s'écarte de 2 px du composant.
  if (etat === "focus") {
    const indicateurs = [];
    for (const [p, n] of propres(v)) for (const peinture of visibles(n.strokes)) {
      const vv = await couleurDe(peinture);
      if (vv && vv.name === "color/blue/400") indicateurs.push(n);
    }
    if (!indicateurs.length) note("focus-absent", v.name + " : aucun contour color/blue/400");
    for (const n of indicateurs) {
      const ou = v.name + " / " + (chemin(n, v) || "racine");
      const ep = typeof n.strokeWeight === "number" ? n.strokeWeight : Math.max(n.strokeTopWeight, n.strokeRightWeight, n.strokeBottomWeight, n.strokeLeftWeight);
      if (ep !== 2) note("focus-epaisseur", ou + " : " + ep + " px au lieu de 2 px");
      if (n.name !== "focus-ring") continue;
      const a = v.absoluteBoundingBox, r = n.absoluteBoundingBox;
      const retrait = n.strokeAlign === "INSIDE" ? ep : n.strokeAlign === "CENTER" ? ep / 2 : 0;
      const ecarts = { haut: a.y - r.y, droite: r.x + r.width - a.x - a.width, bas: r.y + r.height - a.y - a.height, gauche: a.x - r.x };
      const cotes = PATTERN === "Hybride" ? { haut: 2, bas: 2, gauche: 0, droite: 0 } : { haut: 2, bas: 2, gauche: 2, droite: 2 };
      const faux = Object.keys(cotes).filter((k) => Math.abs(ecarts[k] - retrait - cotes[k]) > 0.5);
      if (faux.length) note("focus-ecart", ou + " : écart " + faux.map((k) => k + " " + Math.round((ecarts[k] - retrait) * 10) / 10 + " px au lieu de " + cotes[k]).join(", "));
    }
  }
}

// 4. Les instances de tout le fichier : texte, visibilité, rendu et surcharges.
// Valeur d'un champ, comparable entre un calque d'instance et le calque du composant.
const valeur = (n, champ) => {
  let x;
  try { x = n[champ]; } catch (e) { return undefined; }
  if (x === undefined || typeof x === "symbol") return undefined;
  return typeof x === "number" ? String(Math.round(x * 100) / 100) : JSON.stringify(x);
};
// Calque du composant principal qui correspond à un calque de l'instance.
// Un calque d'un composant imbriqué garde la valeur que lui donne le composant principal.
const calqueDuComposant = async (i, cible, mc) => {
  if (cible.id === i.id) return mc;
  const prefixe = "I" + i.id.replace(/^I/, "") + ";";
  if (!cible.id.startsWith(prefixe)) return null;
  const reste = cible.id.slice(prefixe.length);
  return figma.getNodeByIdAsync(reste.includes(";") ? "I" + reste : reste).catch(() => null);
};
let instances = 0, coupe = false;
const surcharges = { permises: { contenu: 0, placement: 0, asset: 0 }, noms: 0, sansEffet: { nombre: 0, champs: {}, exemples: [] }, aVerifier: {}, exemples: {} };
for (const v of set.children) {
  if (coupe) break;
  for (const i of await v.getInstancesAsync()) {
    if (Date.now() - debut > DUREE_MAX_MS) { coupe = true; break; }
    let page = i;
    while (page && page.type !== "PAGE") page = page.parent;
    if (!page || i.removed) continue;
    instances++;
    const mcInstance = await i.getMainComponentAsync().catch(() => null);
    const ou = page.name + " / " + i.name + " (" + v.name + ")";
    const props = i.componentProperties || {};
    const champs = new Map();
    for (const o of i.overrides || []) for (const f of o.overriddenFields) champs.set(o.id.split(";").pop() + "|" + f, o.id);
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
      if (!champs.has(idMain + "|opacity") && !champs.has(idMain + "|fills") && Math.abs(opa(n) - opa(m)) > 0.01)
        note("instance-opacite", ou + " : " + n.name + " à " + Math.round(opa(n) * 100) + " %, " + Math.round(opa(m) * 100) + " % sur le composant");
      if (n.type === "TEXT" && !champs.has(idMain + "|fills")) {
        const a = n.getStyledTextSegments(["fills"])[0], b = m.getStyledTextSegments(["fills"])[0];
        if (a && b && a.fills[0] && b.fills[0] && !memeCouleur(a.fills[0].color, b.fills[0].color))
          note("instance-couleur-texte", ou + " : " + n.name + " en " + rgb(a.fills[0].color) + ", " + rgb(b.fills[0].color) + " sur le composant");
      }
    }
    // Classement des surcharges : permises, noms de calque, ou à vérifier par famille.
    for (const [cle, idInstance] of champs) {
      const champ = cle.split("|")[1];
      if (CONTENU.includes(champ)) { surcharges.permises.contenu++; continue; }
      if (PLACEMENT.includes(champ)) { surcharges.permises.placement++; continue; }
      if (champ === "name") { surcharges.noms++; continue; }
      const cible = await figma.getNodeByIdAsync(idInstance);
      if (champ === "fills" && cible && Array.isArray(cible.fills) && cible.fills.some((f) => f.type === "IMAGE")) { surcharges.permises.contenu++; continue; }
      // Une largeur ou une hauteur qui suit le contenu, ou qui remplit le parent, n'est pas choisie par le designer.
      const axe = { width: "layoutSizingHorizontal", height: "layoutSizingVertical" }[champ];
      if (axe && cible && cible[axe] === "HUG") { surcharges.permises.contenu++; continue; }
      if (axe && cible && cible[axe] === "FILL") { surcharges.permises.placement++; continue; }
      // Sans effet : la valeur est celle du composant, mais l'instance ne suivra plus ce champ s'il change.
      const ref = cible && mcInstance ? await calqueDuComposant(i, cible, mcInstance) : null;
      const valeurInstance = cible ? valeur(cible, champ) : undefined;
      if (ref && valeurInstance !== undefined && valeurInstance === valeur(ref, champ)) {
        const s = surcharges.sansEffet;
        s.nombre++;
        s.champs[champ] = (s.champs[champ] || 0) + 1;
        if (s.exemples.length < 5) s.exemples.push(ou + " : " + cible.name + " / " + champ);
        continue;
      }
      let dansAsset = false;
      for (let p = cible; p && p !== i; p = p.parent) {
        if (p.type === "INSTANCE") {
          const mc = await p.getMainComponentAsync().catch(() => null);
          if (mc && ASSET.test(nomComposant(mc)) && ["fills", "width", "height", "boundVariables"].includes(champ)) dansAsset = true;
        }
      }
      if (dansAsset) { surcharges.permises.asset++; continue; }
      const f = famille(champ);
      const g = surcharges.aVerifier[f] || (surcharges.aVerifier[f] = {});
      g[champ] = (g[champ] || 0) + 1;
      const ex = surcharges.exemples[f] || (surcharges.exemples[f] = []);
      if (ex.length < 3) ex.push(ou + " : " + (cible ? cible.name : idInstance) + " / " + champ);
    }
  }
}

return {
  set: set.name,
  variantes: set.children.length,
  instances: coupe ? instances + " (contrôle arrêté à la durée maximale, instances suivantes non lues)" : instances,
  defauts: Object.keys(defauts).length ? defauts : "aucun",
  surcharges,
};
