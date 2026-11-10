// Runs dist/code.js on a mock Figma plugin (figma-mock.ts) and checks
// what comes out. Each suite creates its own plugin, independent of the others:
// no suite depends on what another one left behind, and the order of
// execution changes no result.
// Run by Vitest: npm test

import { beforeAll, describe, expect, it } from "vitest";

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  createMockPlugin,
  type MockData,
  type MockPlugin,
  type PluginMessage,
} from "./figma-mock";

const HERE = path.dirname(fileURLToPath(import.meta.url));

const alias = (id: string) => ({ type: "VARIABLE_ALIAS", id });
const shadow = (y: number, extra = {}) => ({
  type: "DROP_SHADOW",
  color: { r: 0, g: 0, b: 0, a: 0.2 },
  offset: { x: 0, y },
  radius: 8,
  spread: 0,
  ...extra,
});

// Figma document shared by most suites: same collections,
// variables and styles as before the refactoring. testDocument() returns a fresh
// copy on each call, so that a suite that changes a variable
// (live update) can never affect another suite.
const COMMON_DOCUMENT = {
  fileName: "Canopée B2B",
  collections: [
    {
      id: "C1",
      name: "Primitives",
      modes: [{ modeId: "m1", name: "Mode 1" }],
      defaultModeId: "m1",
    },
    {
      id: "C2",
      name: "Sémantique",
      modes: [
        { modeId: "ma", name: "prospect" },
        { modeId: "mb", name: "client" },
      ],
      defaultModeId: "ma",
    },
    {
      id: "CR",
      name: "Charte AXA",
      modes: [{ modeId: "mr", name: "Mode 1" }],
      defaultModeId: "mr",
      remote: true,
    },
  ],
  locals: [
    {
      id: "v1",
      name: "Couleur/AXA blue 100",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: ["ALL_SCOPES"],
      description: "Bleu de marque",
      valuesByMode: { m1: { r: 0, g: 0, b: 0.5607843 } },
    },
    {
      id: "v2",
      name: "Espacement/m",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["GAP", "WIDTH_HEIGHT"],
      valuesByMode: { m1: 16 },
    },
    {
      id: "v3",
      name: "Opacité/disabled",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: 0.4 },
    },
    {
      id: "v4",
      name: "Action/primaire",
      resolvedType: "COLOR",
      variableCollectionId: "C2",
      scopes: [],
      valuesByMode: { ma: alias("v1"), mb: alias("v8") },
    },
    {
      id: "v5",
      name: "Afficher/badge",
      resolvedType: "BOOLEAN",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: true },
    },
    {
      id: "v6",
      name: "Police/famille",
      resolvedType: "STRING",
      variableCollectionId: "C1",
      scopes: ["FONT_FAMILY"],
      valuesByMode: { m1: "Source Sans Pro" },
    },
    {
      id: "v7",
      name: "Rayon/petit.5",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["CORNER_RADIUS"],
      valuesByMode: { m1: 4 },
    },
    {
      id: "v8",
      name: "Couleur/old grey DEPRECATED",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      description: "Deprecated: use color/blue/700.",
      valuesByMode: { m1: { r: 0.5, g: 0.5, b: 0.5 } },
    },
    {
      id: "v9",
      name: "Couleur/AXA blue 100/clair",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 1, g: 1, b: 1 } },
    },
    {
      id: "v10",
      name: "Fond/marque",
      resolvedType: "COLOR",
      variableCollectionId: "C2",
      scopes: [],
      valuesByMode: { ma: alias("r1"), mb: alias("r1") },
    },
    {
      id: "v11",
      name: "Espacement/xs",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["GAP"],
      valuesByMode: { m1: 4.000000238418579 },
    },
    {
      id: "v12",
      name: "Contenu/libellé",
      resolvedType: "STRING",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: "Voir plus" },
    },
    {
      id: "v13",
      name: "Typo/famille secondaire",
      resolvedType: "STRING",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: "Publico" },
    },
    // Numeric shades: used to check the natural order of keys in a group.
    // "050" is not a canonical index for the JS engine, "100" and "900" are:
    // without a custom sort, 100 and 900 come up before 050 whatever the order
    // of writing.
    {
      id: "v14",
      name: "Couleur/gris/900",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 0.1, g: 0.1, b: 0.1 } },
    },
    {
      id: "v15",
      name: "Couleur/gris/050",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 0.95, g: 0.95, b: 0.95 } },
    },
    {
      id: "v16",
      name: "Couleur/gris/100",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 0.9, g: 0.9, b: 0.9 } },
    },
    // Variables with English/kebab names: only used to cover each kind
    // of generated description (0.6.0), independently of the French names
    // above, which match no kind.
    {
      id: "v17",
      name: "color/blue/700",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 0, g: 0, b: 143 / 255 } },
    },
    {
      id: "v18",
      name: "color/sunshine/500",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 1, g: 229 / 255, b: 0 } },
    },
    {
      id: "v18b",
      name: "color/cotton-candy/500",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 1, g: 0, b: 88 / 255 } },
    },
    {
      id: "v19",
      name: "color/white",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 1, g: 1, b: 1 } },
    },
    {
      id: "v20",
      name: "color/black",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 0, g: 0, b: 0 } },
    },
    {
      id: "v21",
      name: "color/black-alpha/20",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: { r: 0, g: 0, b: 0, a: 0.2 } },
    },
    {
      id: "v22",
      name: "spacing/16",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["GAP"],
      valuesByMode: { m1: 16 },
    },
    {
      id: "v23",
      name: "spacing/2",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["GAP"],
      valuesByMode: { m1: 2 },
    },
    {
      id: "v24",
      name: "size/24",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["WIDTH_HEIGHT"],
      valuesByMode: { m1: 24 },
    },
    {
      id: "v25",
      name: "border/radius/8",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["CORNER_RADIUS"],
      valuesByMode: { m1: 8 },
    },
    {
      id: "v26",
      name: "border/radius/full",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["CORNER_RADIUS"],
      valuesByMode: { m1: 9999 },
    },
    {
      id: "v27",
      name: "border/width/1",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["STROKE_FLOAT"],
      valuesByMode: { m1: 1 },
    },
    {
      id: "v28",
      name: "font/size/16",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["FONT_SIZE"],
      valuesByMode: { m1: 16 },
    },
    {
      id: "v29",
      name: "font/size-18",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["FONT_SIZE"],
      valuesByMode: { m1: 18 },
    },
    {
      id: "v30",
      name: "font/line-height/20",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["LINE_HEIGHT"],
      valuesByMode: { m1: 20 },
    },
    {
      id: "v31",
      name: "font/line-height/23",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["LINE_HEIGHT"],
      valuesByMode: { m1: 23 },
    },
    {
      id: "v50",
      name: "font/line-height/22",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["LINE_HEIGHT"],
      valuesByMode: { m1: 22 },
    },
    {
      id: "v32",
      name: "font/size/15",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["FONT_SIZE"],
      valuesByMode: { m1: 15 },
    },
    {
      id: "v33",
      name: "font/weight/semibold",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["FONT_WEIGHT"],
      valuesByMode: { m1: 600 },
    },
    {
      id: "v34",
      name: "font/family/sans-serif",
      resolvedType: "STRING",
      variableCollectionId: "C1",
      scopes: ["FONT_FAMILY"],
      valuesByMode: { m1: "Source Sans Pro" },
    },
    // Recognized kind, with a Figma description: checks it is appended after the generated description.
    {
      id: "v35",
      name: "border/width/2",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["STROKE_FLOAT"],
      description: "Utilisé pour les inputs en erreur.",
      valuesByMode: { m1: 2 },
    },
    // Alias to a recognized kind: does not receive a generated description.
    {
      id: "v36",
      name: "color/blue/800",
      resolvedType: "COLOR",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: alias("v17") },
    },
    // Cases added for the naming of primitives (0.7.0). As booleans so as not to
    // get mixed up with the normal export: only the name check interests us
    // here, except for spacing/12 which must remain a real number to test the gap
    // between the name and the value.
    {
      id: "v37",
      name: "color/Blue/500",
      resolvedType: "BOOLEAN",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: true },
    },
    {
      id: "v38",
      name: "color/blue/550",
      resolvedType: "BOOLEAN",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: true },
    },
    {
      id: "v39",
      name: "spacing/12",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["GAP"],
      valuesByMode: { m1: 10 },
    },
    {
      id: "v40",
      name: "shadow/1",
      resolvedType: "BOOLEAN",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: true },
    },
    {
      id: "v41",
      name: "color/blue",
      resolvedType: "BOOLEAN",
      variableCollectionId: "C1",
      scopes: [],
      valuesByMode: { m1: true },
    },
  ],
  remotes: [
    {
      id: "r1",
      name: "Marque/Bleu",
      resolvedType: "COLOR",
      variableCollectionId: "CR",
      remote: true,
      valuesByMode: { mr: { r: 1, g: 0, b: 0, a: 0.5 } },
    },
  ],
  textStyles: [
    {
      id: "s1",
      name: "Titre/H1",
      description: "Titre de page",
      fontName: { family: "Source Sans Pro", style: "Bold" },
      fontSize: 32,
      lineHeight: { unit: "PIXELS", value: 40 },
      letterSpacing: { unit: "PERCENT", value: -1 },
      boundVariables: { fontSize: alias("v2"), paragraphSpacing: alias("v2") },
    },
    {
      id: "s2",
      name: "Corps/texte",
      description: "",
      fontName: { family: "Source Sans Pro", style: "Regular" },
      fontSize: 16,
      lineHeight: { unit: "AUTO" },
      letterSpacing: { unit: "PIXELS", value: 0 },
    },
  ],
  effectStyles: [
    { id: "e1", name: "Élévation/2", description: "", effects: [shadow(2)] },
    {
      id: "e2",
      name: "Élévation/marque",
      description: "",
      effects: [
        shadow(99, { visible: false }),
        shadow(4, { boundVariables: { color: alias("v1") } }),
      ],
    },
    {
      id: "e3",
      name: "Flou/fond",
      description: "",
      effects: [{ type: "LAYER_BLUR", radius: 4 }],
    },
  ],
};

const testDocument = () => JSON.parse(JSON.stringify(COMMON_DOCUMENT));

// A DTCG token is read in sets.<collection>.sources[0].
const readSet = (doc: MockData, name: string) => doc.sets[name].sources[0];
// Like readSet, but undefined if the collection does not exist in this document
// (a suite document does not necessarily have Primitives and Sémantique).
const readSetIfPresent = (doc: MockData, name: string) =>
  doc.sets[name] ? readSet(doc, name) : undefined;

// Messages and reports come from another VM context: they are normalized
// to compare arrays and objects with toStrictEqual.
const normalize = (m: MockData) => JSON.parse(JSON.stringify(m));

// Opens the plugin then downloads the loaded document, and prepares the reading
// shortcuts (t, json, report, P/S/STY) that most suites use.
// The report comes from the verification message sent on opening: the download
// only returns the file.
const exportDocument = async (plugin: MockPlugin) => {
  await plugin.send({ type: "ready" });
  const verification = plugin.messages
    .filter((m) => m.type === "verification")
    .pop();
  await plugin.send({ type: "download" });
  const last = plugin.lastMessage();
  expect(last.type, last.message).toBe("file");
  const t = JSON.parse(last.json);
  return {
    last,
    t,
    json: last.json,
    file: last.file,
    report: normalize(verification!.report),
    P: readSetIfPresent(t, "Primitives"),
    S: readSetIfPresent(t, "Sémantique"),
    STY: readSetIfPresent(t, "Styles"),
  };
};

const TOKENS_PATH = "packages/canopee-css/design-tokens-canopee.resolver.json";

// Prepares the submission, as the UI would after reading the repo
// file: repoReference is its text, or null if it is not there. Returns the
// submit-ready message.
const submitDocument = async (
  plugin: MockPlugin,
  repoReference: MockData,
  options = {},
) => {
  await plugin.send({ type: "submit", repoReference, ...options });
  const message = plugin.lastMessage();
  expect(message.type, message.message).toBe("submit-ready");
  return normalize(message);
};

// The same document, without the export date: the only thing that changes from one
// serialization to the next.
const withoutDate = (doc: MockData) => {
  const copy = JSON.parse(JSON.stringify(doc));
  delete copy.$extensions["fr.axa.canopee"].date;
  return copy;
};

// ---------------------------------------------------------------- opening

describe("opening without reference", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin();
    await plugin.send({ type: "ready" });
  });

  it("on opening: context then verification, no automatic diff", () => {
    expect(plugin.messages.map((m) => m.type)).toStrictEqual([
      "context",
      "verification",
    ]);
  });
});

// ------------------------------------------------------------------ export

// Check of the shape of an export in the default configuration (null workflow).
describe("default export", () => {
  let plugin: MockPlugin,
    last: MockData,
    t: MockData,
    json: MockData,
    file: MockData,
    report: MockData,
    P: MockData,
    S: MockData,
    STY: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin(testDocument());
    ({ last, t, json, file, report, P, S, STY } = await exportDocument(plugin));
  });

  it("download: after opening, only the file message is sent, with no report or diff", () => {
    expect(plugin.messages.map((m) => m.type)).toStrictEqual([
      "context",
      "verification",
      "file",
    ]);
    expect("report" in last).toBe(false);
  });

  it("color as an sRGB object with hex fallback", () => {
    expect(P.Couleur["AXA blue 100"].$value).toStrictEqual({
      colorSpace: "srgb",
      components: [0, 0, 0.5608],
      hex: "#00008f",
    });
  });

  it("alpha absent as a channel, not defined here", () => {
    expect(P.Couleur["AXA blue 100"].$value.alpha).toBe(undefined);
  });

  it("description kept", () => {
    expect(P.Couleur["AXA blue 100"].$description).toBe("Bleu de marque");
  });

  it("number typed by the scope, as a dimension object", () => {
    expect([P.Espacement.m.$type, P.Espacement.m.$value]).toStrictEqual([
      "dimension",
      { value: 16, unit: "px" },
    ]);
  });

  it("float noise erased", () => {
    expect(P.Espacement.xs.$value).toStrictEqual({ value: 4, unit: "px" });
  });

  it("number without scope, type inferred from the name and flagged", () => {
    expect(P["Opacité"].disabled.$type).toBe("number");
    expect(
      P["Opacité"].disabled.$extensions["fr.axa.canopee"].inferredType,
    ).toBe(true);
    expect(
      report.inferredTypes.includes(
        "Opacité/disabled : traité comme un nombre",
      ),
    ).toBeTruthy();
  });

  it("string typed fontFamily by the scope", () => {
    expect(P.Police.famille.$type).toBe("fontFamily");
  });

  it("string typed fontFamily by the name, flagged", () => {
    expect(P.Typo["famille secondaire"].$type).toBe("fontFamily");
    expect(
      report.inferredTypes.includes(
        "Typo/famille secondaire : traité comme une police",
      ),
    ).toBeTruthy();
  });

  it("free string excluded, absent from the file", () => {
    expect(P.Contenu).toBe(undefined);
    expect(
      report.excluded.includes("Contenu/libellé : variable String"),
    ).toBeTruthy();
  });

  it("boolean excluded and flagged", () => {
    expect(
      report.excluded.includes("Afficher/badge : variable Boolean"),
    ).toBeTruthy();
  });

  it("local alias as a reference, not resolved", () => {
    expect(S.Action.primaire.$value).toBe("{Couleur.AXA blue 100}");
  });

  it("name sanitized, Figma name kept, nothing otherwise", () => {
    expect(P.Rayon["petit-5"].$extensions["fr.axa.canopee"].figmaName).toBe(
      "Rayon/petit.5",
    );
    expect(P.Espacement.m.$extensions).toBe(undefined);
  });

  it("deprecated detected in the description, trailing text kept, description first", () => {
    const token = P.Couleur["old grey DEPRECATED"];
    expect(token.$deprecated).toBe("use color/blue/700.");
    expect(token.$description.startsWith("Deprecated")).toBeTruthy();
  });

  it("the name alone no longer deprecates anything", () => {
    expect(P.Couleur["old grey DEPRECATED"].$deprecated !== true).toBe(true);
  });

  it("token / group conflict refused and flagged", () => {
    expect(P.Couleur["AXA blue 100"].clair).toBe(undefined);
    expect(report.conflicts).toStrictEqual(["Couleur/AXA blue 100/clair"]);
  });

  it("external alias resolved to a value, alpha below 1 kept", () => {
    expect(S.Fond.marque.$value).toStrictEqual({
      colorSpace: "srgb",
      components: [1, 0, 0],
      alpha: 0.5,
      hex: "#ff0000",
    });
    expect(
      Object.keys(S.Fond.marque.$extensions["fr.axa.canopee"]),
    ).toStrictEqual(["alias"]);
    expect(S.Fond.marque.$extensions["fr.axa.canopee"].alias).toBe(
      "Marque/Bleu",
    );
    expect(report.externalAliases).toStrictEqual([
      "Fond/marque : pointe vers Marque/Bleu",
    ]);
  });

  it("text style as typography, alias kept, px line height converted to ratio, percentage letter spacing to px", () => {
    const h1 = STY.typography.Titre.H1;
    expect(h1.$type).toBe("typography");
    expect(h1.$value).toStrictEqual({
      fontFamily: "Source Sans Pro",
      fontSize: "{Espacement.m}",
      fontWeight: 700,
      letterSpacing: { value: -0.32, unit: "px" },
      lineHeight: 1.25,
    });
  });

  it("automatic line height excluded, whole style absent from the file", () => {
    expect(STY.typography.Corps).toBe(undefined);
    expect(
      report.excluded.includes("Corps/texte : interligne automatique"),
    ).toBeTruthy();
  });

  it("shadow as shadow, color and dimensions as objects", () => {
    expect(STY.shadow["Élévation"]["2"].$value).toStrictEqual({
      color: {
        colorSpace: "srgb",
        components: [0, 0, 0],
        alpha: 0.2,
        hex: "#000000",
      },
      offsetX: { value: 0, unit: "px" },
      offsetY: { value: 2, unit: "px" },
      blur: { value: 8, unit: "px" },
      spread: { value: 0, unit: "px" },
      inset: false,
    });
  });

  it("hidden shadow ignored, bound color kept as a reference", () => {
    const v = STY.shadow["Élévation"].marque.$value;
    expect(Array.isArray(v)).toBe(false);
    expect([v.offsetY, v.color]).toStrictEqual([
      { value: 4, unit: "px" },
      "{Couleur.AXA blue 100}",
    ]);
  });

  it("effect without a shadow excluded", () => {
    expect(STY.shadow.Flou).toBe(undefined);
    expect(
      report.excluded.includes("Flou/fond : effet sans ombre"),
    ).toBeTruthy();
  });

  it("$type comes before $value in a token, groups sorted", () => {
    expect(
      json.indexOf('"$type": "color"') < json.indexOf('"hex": "#00008f"'),
    ).toBeTruthy();
    expect(Object.keys(P)).toStrictEqual([
      "Couleur",
      "Espacement",
      "Opacité",
      "Police",
      "Rayon",
      "Typo",
      "border",
      "color",
      "font",
      "size",
      "spacing",
    ]);
  });

  it("generated description: color with step, WCAG contrast", () => {
    expect(P.color.blue["700"].$description).toBe(
      "Couleur blue, palier 700, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #00008F. Contraste de 15:1 sur blanc.",
    );
    expect(P.color.sunshine["500"].$description).toBe(
      "Couleur sunshine, palier 500, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #FFE500. Contraste de 1,3:1 sur blanc.",
    );
    expect(P.color["cotton-candy"]["500"].$description).toBe(
      "Couleur cotton-candy, palier 500, sur une échelle qui va du 050, le plus clair, au 900, le plus foncé. #FF0058. Contraste de 3,9:1 sur blanc.",
    );
  });

  it("generated description: white and black", () => {
    expect(P.color.white.$description).toBe(
      "Blanc, sans teinte ni palier. #FFFFFF.",
    );
    expect(P.color.black.$description).toBe(
      "Noir, sans teinte ni palier. #000000. Contraste de 21:1 sur blanc.",
    );
  });

  it("generated description: transparent color, percentage of the real alpha", () => {
    expect(P.color["black-alpha"]["20"].$description).toBe(
      "Noir à 20 % d'opacité.",
    );
  });

  it("generated description: spacing, px and rem", () => {
    expect(P.spacing["16"].$description).toBe(
      "Espacement de 16 px, soit 1rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.",
    );
    expect(P.spacing["2"].$description).toBe(
      "Espacement de 2 px, soit 0.125rem dans le code. Pour l'espace dans un élément ou entre deux éléments, comme un padding ou un gap. Pour une largeur ou une hauteur, utiliser un token size.",
    );
  });

  it("generated description: dimension", () => {
    expect(P.size["24"].$description).toBe(
      "Dimension de 24 px, soit 1.5rem dans le code. Pour la largeur ou la hauteur d'un élément, comme une icône ou un logo. Pour l'espace dans un élément ou entre deux éléments, utiliser un token spacing.",
    );
  });

  it("generated description: radius, normal case and full case", () => {
    expect(P.border.radius["8"].$description).toBe("Arrondi d'angle de 8 px.");
    expect(P.border.radius.full.$description).toBe(
      "Arrondi complet, qui donne une forme de pilule, ou un cercle sur un élément carré. Vaut 9999 px.",
    );
  });

  it("generated description: border width, no rem", () => {
    expect(P.border.width["1"].$description).toBe(
      "Épaisseur de bordure de 1 px.",
    );
  });

  it("generated description: font size, in both spellings of the name", () => {
    expect(P.font.size["16"].$description).toBe(
      "Taille de texte de 16 px, soit 1rem dans le code.",
    );
    expect(P.font["size-18"].$description).toBe(
      "Taille de texte de 18 px, soit 1.125rem dans le code.",
    );
    expect(P.font.size["15"].$description).toBe(
      "Taille de texte de 15 px, soit 0.9375rem dans le code.",
    );
  });

  it("generated description: line height", () => {
    expect(P.font["line-height"]["20"].$description).toBe(
      "Interligne de 20 px, soit 1.25rem dans le code.",
    );
    expect(P.font["line-height"]["23"].$description).toBe(
      "Interligne de 23 px, soit 1.4375rem dans le code.",
    );
  });

  it("generated description: font weight and family", () => {
    expect(P.font.weight.semibold.$description).toBe(
      "Graisse semibold, de valeur 600.",
    );
    expect(P.font.family["sans-serif"].$description).toBe(
      "Famille de police Source Sans Pro.",
    );
  });

  it("generated description followed by the Figma description, separated by a space", () => {
    expect(P.border.width["2"].$description).toBe(
      "Épaisseur de bordure de 2 px. Utilisé pour les inputs en erreur.",
    );
  });

  it("alias to a recognized kind: no generated description", () => {
    expect(P.color.blue["800"].$description).toBe(undefined);
    expect(report.noDescription.includes("color/blue/800")).toBeTruthy();
  });

  it("resolver header: name, version, plugin extension", () => {
    expect(t.name).toBe("Canopée B2B");
    expect(t.version).toBe("2025.10");
    expect(t.$extensions["fr.axa.canopee"].source).toBe("Canopée B2B");
    expect(t.$extensions["fr.axa.canopee"].plugin).toBe(plugin.__test.VERSION);
  });

  it("resolver header: export date in ISO format, to the second, in UTC", () => {
    expect(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(
        t.$extensions["fr.axa.canopee"].date,
      ),
    ).toBeTruthy();
  });

  it("resolver header: order of the keys source, plugin, date", () => {
    const i = json.indexOf('"fr.axa.canopee": {');
    const block = json.slice(i, i + 200);
    expect(
      block.indexOf('"source"') < block.indexOf('"plugin"') &&
        block.indexOf('"plugin"') < block.indexOf('"date"'),
    ).toBeTruthy();
  });

  it("one set per collection in Figma order, then Styles", () => {
    expect(Object.keys(t.sets)).toStrictEqual([
      "Primitives",
      "Sémantique",
      "Styles",
    ]);
  });

  it("resolutionOrder as $ref, all the sets then the modifiers", () => {
    expect(t.resolutionOrder).toStrictEqual([
      { $ref: "#/sets/Primitives" },
      { $ref: "#/sets/Sémantique" },
      { $ref: "#/sets/Styles" },
      { $ref: "#/modifiers/Sémantique" },
    ]);
  });

  it("no modifier for a single-mode collection", () => {
    expect(Object.keys(t.modifiers)).toStrictEqual(["Sémantique"]);
    expect(t.modifiers.Primitives).toBe(undefined);
  });

  it("modifier: default mode named, default context empty", () => {
    expect(t.modifiers.Sémantique.default).toBe("prospect");
    expect(t.modifiers.Sémantique.contexts.prospect).toStrictEqual([]);
  });

  it("modifier: only the tokens that differ, as a full token", () => {
    const client = t.modifiers.Sémantique.contexts.client;
    expect(client.length).toBe(1);
    const override = client[0];
    // Fond/marque references the same remote variable in both modes: identical, absent.
    expect(override.Fond).toBe(undefined);
    expect(override.Action.primaire.$type).toBe("color");
    expect(override.Action.primaire.$value).toBe(
      "{Couleur.old grey DEPRECATED}",
    );
  });

  it("natural order of numeric keys in the text: 050 before 100 before 900", () => {
    expect(json.indexOf('"050"') < json.indexOf('"100"')).toBeTruthy();
    expect(json.indexOf('"100"') < json.indexOf('"900"')).toBeTruthy();
  });

  it("components array on one line in the text", () => {
    expect(json.includes('"components": [0, 0, 0.5608]')).toBeTruthy();
  });

  it("tokens without description listed in the report, only those with neither generated nor Figma", () => {
    expect(report.noDescription.includes("Espacement/m")).toBeTruthy();
    expect(report.noDescription.includes("Élévation/2")).toBeTruthy();
    expect(report.noDescription.includes("color/blue/800")).toBeTruthy();
    expect(!report.noDescription.includes("Couleur/AXA blue 100")).toBeTruthy();
    expect(!report.noDescription.includes("Titre/H1")).toBeTruthy();
    expect(!report.noDescription.includes("Corps/texte")).toBeTruthy();
    expect(
      !report.noDescription.includes("Couleur/AXA blue 100/clair"),
    ).toBeTruthy();
    expect(!report.noDescription.includes("Contenu/libellé")).toBeTruthy();
    expect(!report.noDescription.includes("spacing/16")).toBeTruthy();
    expect(!report.noDescription.includes("border/width/2")).toBeTruthy();
  });

  it("fixed file name, in .resolver.json", () => {
    expect(file).toBe("design-tokens-canopee.resolver.json");
  });

  it("report counters", () => {
    expect([
      report.variables,
      report.exported,
      report.textStyles,
      report.effectStyles,
    ]).toStrictEqual([43, 36, 1, 2]);
  });

  it("naming: spelling, non-kebab French names flagged", () => {
    expect(
      report.naming.includes(
        "« Couleur/AXA blue 100 » : s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots",
      ),
    ).toBeTruthy();
    expect(
      report.naming.includes(
        "« Espacement/m » : s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots",
      ),
    ).toBeTruthy();
  });

  it("naming: spelling, capital letter in the middle of a name already in English", () => {
    expect(
      report.naming.includes(
        "« color/Blue/500 » : s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots",
      ),
    ).toBeTruthy();
  });

  it("naming: slash expected before the value", () => {
    expect(
      report.naming.includes(
        "« font/size-18 » : il manque une barre oblique avant le nombre, à écrire font/size/18",
      ),
    ).toBeTruthy();
  });

  it("naming: unknown category", () => {
    expect(
      report.naming.includes(
        "« shadow/1 » : le nom doit commencer par color, font, border, spacing, size ou breakpoint",
      ),
    ).toBeTruthy();
  });

  it("naming: unexpected shape for a known category", () => {
    expect(
      report.naming.includes(
        "« color/blue » : ce nom ne suit pas le modèle des noms color, par exemple color/blue/500",
      ),
    ).toBeTruthy();
  });

  it("naming: step out of the scale", () => {
    expect(
      report.naming.includes(
        "« color/blue/550 » : palier hors échelle, attendu : 050, ou de 100 à 900 par pas de 100",
      ),
    ).toBeTruthy();
  });

  it("naming: the name says a value different from the real value", () => {
    expect(
      report.naming.includes(
        "« spacing/12 » : le nom indique 12, mais la valeur est de 10 px",
      ),
    ).toBeTruthy();
  });

  it("naming: independent size and line height, no alert without a match", () => {
    for (const name of ["font/size/15", "font/line-height/22"])
      expect(
        !report.naming.some((m: string) => m.startsWith(`« ${name} »`)),
        name,
      ).toBeTruthy();
  });

  it("naming: compliant names, not flagged", () => {
    const compliant = [
      "color/blue/700",
      "spacing/16",
      "font/size/16",
      "font/line-height/20",
      "border/radius/full",
      "color/white",
      "color/black-alpha/20",
    ];
    for (const name of compliant)
      expect(
        !report.naming.some((m: string) => m.startsWith(`« ${name} »`)),
        name,
      ).toBeTruthy();
  });

  it("naming: Sémantique collection not checked", () => {
    expect(
      !report.naming.some(
        (m: MockData) =>
          m.includes("Action/primaire") || m.includes("Fond/marque"),
      ),
    ).toBeTruthy();
  });
});

// ----------------------------------------------------------- compare (diff)

describe("compare (diff)", () => {
  let plugin: MockPlugin, t: MockData, json: MockData, modifiedDiff: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin(testDocument());
    ({ t, json } = await exportDocument(plugin));
    const cloneReference = () => JSON.parse(JSON.stringify(t));

    // Reference modified from the current export: one token fewer (shows up
    // as "ajouté"), a changed color (shows up as "modifié"), a $deprecated
    // removed (shows up as "déprécié"), one token more (shows up as "supprimé").
    const modifiedReference = cloneReference();
    const P_ref = readSet(modifiedReference, "Primitives");
    delete P_ref.Opacité.disabled;
    P_ref.color.blue["700"].$value = {
      ...P_ref.color.blue["700"].$value,
      hex: "#000066",
    };
    delete P_ref.Couleur["old grey DEPRECATED"].$deprecated;
    P_ref.Couleur.disparue = {
      $type: "color",
      $value: { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" },
    };

    await plugin.send({
      type: "compare",
      reference: JSON.stringify(modifiedReference),
      source: "file",
      fileName: "ancien-export.json",
      fileDate: 1700000000000,
    });
    modifiedDiff = normalize(plugin.lastMessage());
  });

  it("diff: source, file name and file date returned", () => {
    expect(modifiedDiff.type).toBe("diff");
    expect([
      modifiedDiff.source,
      modifiedDiff.fileName,
      modifiedDiff.fileDate,
    ]).toStrictEqual(["file", "ancien-export.json", 1700000000000]);
  });

  it("diff: token absent from the reference, added, with its current value", () => {
    expect(modifiedDiff.added).toStrictEqual([
      { path: "Opacité/disabled", value: "0.4" },
    ]);
  });

  it("diff: different color value, modified with the hex on both sides, no type change", () => {
    expect(modifiedDiff.modified).toStrictEqual([
      {
        path: "color/blue/700",
        before: "#000066",
        after: "#00008F",
        typeChange: false,
      },
    ]);
  });

  it("diff: extra token in the reference, removed, with the value of the reference", () => {
    expect(modifiedDiff.removed).toStrictEqual([
      { path: "Couleur/disparue", value: "#000000" },
    ]);
  });

  it("diff: $deprecated as a string, absent from the reference, counted as deprecated, with its current value", () => {
    expect(modifiedDiff.deprecated).toStrictEqual([
      { path: "Couleur/old grey DEPRECATED", value: "#808080" },
    ]);
  });

  it("diff: reference identical to the current export, four empty lists", async () => {
    await plugin.send({ type: "compare", reference: json, source: "repo" });
    const d = normalize(plugin.lastMessage());
    expect([d.added, d.modified, d.removed, d.deprecated]).toStrictEqual([
      [],
      [],
      [],
      [],
    ]);
  });

  it("diff: fileDate absent from the message when it is not provided in compare", () => {
    expect("dateFichier" in plugin.lastMessage()).toBe(false);
  });

  it("diff: minor level when a removal is mixed with the other changes", () => {
    expect(modifiedDiff.level).toBe("minor");
  });

  it("diff: referenceDate taken from the reference, passed on in the message", () => {
    expect(modifiedDiff.referenceDate).toBe(
      t.$extensions["fr.axa.canopee"].date,
    );
  });
});

// ----------------------------------------------------------- level and next version

// Each case isolates a single type of change, to check the level that goes with it
// without mixing with the others.
describe("level and next version", () => {
  let plugin: MockPlugin,
    cloneReference: MockData,
    compareTo: MockData,
    refRemoval: MockData,
    refTypeChange: MockData,
    refAddition: MockData,
    refDeprecation: MockData,
    refModifiedValue: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin(testDocument());
    const { t } = await exportDocument(plugin);
    cloneReference = () => JSON.parse(JSON.stringify(t));
    compareTo = async (ref: MockData, version: MockData) => {
      await plugin.send({
        type: "compare",
        reference: JSON.stringify(ref),
        source: version ? "version" : "file",
        fileName: "x.json",
        version,
      });
      return plugin.lastMessage();
    };

    refRemoval = cloneReference();
    readSet(refRemoval, "Primitives").Couleur.disparue = {
      $type: "color",
      $value: { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" },
    };

    refTypeChange = cloneReference();
    readSet(refTypeChange, "Primitives").color.blue["700"].$type = "dimension";

    refAddition = cloneReference();
    delete readSet(refAddition, "Primitives").Opacité.disabled;

    refDeprecation = cloneReference();
    delete readSet(refDeprecation, "Primitives").Couleur["old grey DEPRECATED"]
      .$deprecated;

    refModifiedValue = cloneReference();
    {
      const token = readSet(refModifiedValue, "Primitives").color.blue["700"];
      token.$value = { ...token.$value, hex: "#000066" };
    }

    await compareTo(refRemoval);
  });

  it("level: token removed → minor", () => {
    expect(plugin.lastMessage().level).toBe("minor");
  });

  it("level: $type changed → minor, modified marked typeChange", async () => {
    await compareTo(refTypeChange);
    const d = plugin.lastMessage();
    expect(d.level).toBe("minor");
    expect(d.modified[0].typeChange).toBe(true);
  });

  it("level: token added → minor", async () => {
    await compareTo(refAddition);
    expect(plugin.lastMessage().level).toBe("minor");
  });

  it("level: token deprecated → minor", async () => {
    await compareTo(refDeprecation);
    expect(plugin.lastMessage().level).toBe("minor");
  });

  it("level: value modified alone → patch, modified marked typeChange false", async () => {
    await compareTo(refModifiedValue);
    const d = plugin.lastMessage();
    expect(d.level).toBe("patch");
    expect(d.modified[0].typeChange).toBe(false);
  });

  it("level: no change → null", async () => {
    await compareTo(cloneReference());
    expect(plugin.lastMessage().level).toBe(null);
  });

  const expectedNextVersion = { minor: "1.9.0", patch: "1.8.1" };

  for (const version of ["1.8.0", "1.8.0-RC.2"]) {
    it(`nextVersion: ${version}, removal → ${expectedNextVersion.minor}`, async () => {
      await compareTo(refRemoval, version);
      expect(plugin.lastMessage().nextVersion).toBe(expectedNextVersion.minor);
    });

    it(`nextVersion: ${version}, minor → ${expectedNextVersion.minor}`, async () => {
      await compareTo(refAddition, version);
      expect(plugin.lastMessage().nextVersion).toBe(expectedNextVersion.minor);
    });

    it(`nextVersion: ${version}, patch → ${expectedNextVersion.patch}`, async () => {
      await compareTo(refModifiedValue, version);
      expect(plugin.lastMessage().nextVersion).toBe(expectedNextVersion.patch);
    });

    it(`nextVersion: ${version}, no change → null`, async () => {
      await compareTo(cloneReference(), version);
      expect(plugin.lastMessage().nextVersion).toBe(null);
    });
  }

  it("nextVersion: absent from the message without a version field in compare", async () => {
    await compareTo(refAddition);
    expect("nextVersion" in plugin.lastMessage()).toBe(false);
  });
});

// referenceDate: absent without an extension in the reference, ignored when it
// is the only difference from the current export.
describe("reference and dates", () => {
  let plugin: MockPlugin, cloneReference: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin(testDocument());
    const { t } = await exportDocument(plugin);
    cloneReference = () => JSON.parse(JSON.stringify(t));

    const refNoDate = cloneReference();
    delete refNoDate.$extensions;
    await plugin.send({
      type: "compare",
      reference: JSON.stringify(refNoDate),
      source: "file",
      fileName: "sans-date.json",
    });
  });

  it("referenceDate: absent from the message when the reference has no extension", () => {
    expect("referenceDate" in plugin.lastMessage()).toBe(false);
  });

  it("diff: the export date is ignored, no change for a reference that only differs by its date", async () => {
    const refOtherDate = cloneReference();
    refOtherDate.$extensions["fr.axa.canopee"].date = "2000-01-01T00:00:00Z";
    await plugin.send({
      type: "compare",
      reference: JSON.stringify(refOtherDate),
      source: "file",
      fileName: "autre-date.json",
    });
    const d = normalize(plugin.lastMessage());
    expect([d.added, d.modified, d.removed, d.deprecated]).toStrictEqual([
      [],
      [],
      [],
      [],
    ]);
    expect(d.level).toBe(null);
    expect(d.referenceDate).toBe("2000-01-01T00:00:00Z");
  });
});

// An invalid reference is detected before any analysis of the document: a
// minimal plugin, with no variables or styles, is enough.
describe("compare, invalid reference", () => {
  let plugin, notJsonDiff: MockData, noSetsDiff: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin();
    await plugin.send({
      type: "compare",
      reference: "ceci n'est pas du JSON",
      source: "file",
      fileName: "invalide.json",
    });
    notJsonDiff = normalize(plugin.lastMessage());
    await plugin.send({
      type: "compare",
      reference: JSON.stringify({ name: "sans champ sets" }),
      source: "file",
      fileName: "sans-sets.json",
    });
    noSetsDiff = normalize(plugin.lastMessage());
  });

  it("diff: invalid reference (malformed JSON or without a sets field), error returned", () => {
    expect(notJsonDiff).toStrictEqual({
      type: "diff",
      error: "Ce fichier n'est pas un export du plugin.",
    });
    expect(noSetsDiff).toStrictEqual({
      type: "diff",
      error: "Ce fichier n'est pas un export du plugin.",
    });
  });
});

// ------------------------------------------------------------- composite values and modifier contexts

// Dedicated document: text and effect styles, plus a collection with four
// modes (client/prospect, desktop/mobile), to check the composite values
// summarized in the diff and the modifier context tokens. A separate
// document, rather than COMMON_DOCUMENT, so as not to make it heavier.
const compositeDiffDocument = () => ({
  fileName: "Canopée Fondations",
  collections: [
    {
      id: "CP",
      name: "Primitives",
      modes: [{ modeId: "p1", name: "Mode 1" }],
      defaultModeId: "p1",
    },
    {
      id: "CT",
      name: "Typography",
      modes: [
        { modeId: "cd", name: "client-desktop" },
        { modeId: "cm", name: "client-mobile" },
        { modeId: "pd", name: "prospect-desktop" },
        { modeId: "pm", name: "prospect-mobile" },
      ],
      defaultModeId: "cd",
    },
  ],
  locals: [
    {
      id: "p1v",
      name: "font/family/sans-serif",
      resolvedType: "STRING",
      variableCollectionId: "CP",
      scopes: ["FONT_FAMILY"],
      valuesByMode: { p1: "Source Sans Pro" },
    },
    // Only the client-mobile mode differs from the default mode (client-desktop):
    // it is the only context that receives a token.
    {
      id: "tv1",
      name: "heading/h4/line-height",
      resolvedType: "FLOAT",
      variableCollectionId: "CT",
      scopes: ["LINE_HEIGHT"],
      valuesByMode: { cd: 24, cm: 20, pd: 24, pm: 24 },
    },
  ],
  remotes: [],
  textStyles: [
    {
      id: "s1",
      name: "Corps/1",
      description: "",
      fontName: { family: "Source Sans Pro", style: "Regular" },
      fontSize: 16,
      lineHeight: { unit: "PIXELS", value: 24 },
      letterSpacing: { unit: "PIXELS", value: 0 },
    },
    {
      id: "s2",
      name: "Titre/H5",
      description: "",
      fontName: { family: "Source Sans Pro", style: "Bold" },
      fontSize: 20,
      lineHeight: { unit: "PIXELS", value: 26 },
      letterSpacing: { unit: "PIXELS", value: 0 },
      boundVariables: { fontFamily: alias("p1v") },
    },
  ],
  effectStyles: [
    { id: "e1", name: "Ombre/carte", description: "", effects: [shadow(2)] },
  ],
});

describe("composite values and modifier contexts", () => {
  let t, diff: MockData;

  beforeAll(async () => {
    const plugin = createMockPlugin(compositeDiffDocument());
    ({ t } = await exportDocument(plugin));

    // Reference built from the current export: Titre/H5 does not exist
    // yet (shows up as added), the size of Corps/1 and the blur of the shadow
    // are different (show up as modified, with the field detail), and
    // the line height of the client-mobile context is different (shows up as modified,
    // with modifier and context filled in).
    const reference = JSON.parse(JSON.stringify(t));
    const STY_ref = readSet(reference, "Styles");
    delete STY_ref.typography.Titre.H5;
    STY_ref.typography.Corps["1"].$value.fontSize = { value: 14, unit: "px" };
    STY_ref.shadow.Ombre.carte.$value.blur = { value: 4, unit: "px" };
    reference.modifiers.Typography.contexts["client-mobile"][0].heading.h4[
      "line-height"
    ].$value = { value: 18, unit: "px" };

    await plugin.send({
      type: "compare",
      reference: JSON.stringify(reference),
      source: "file",
      fileName: "reference-composites.json",
    });
    diff = normalize(plugin.lastMessage());
  });

  it("diff: modifier context token, path without suffix, modifier and context filled in", () => {
    const m = diff.modified.find(
      (x: MockData) => x.path === "heading/h4/line-height" && x.modifier,
    );
    expect(m, "expected entry missing").toBeTruthy();
    expect([m.modifier, m.context, m.before, m.after]).toStrictEqual([
      "Typography",
      "client-mobile",
      "18 px",
      "20 px",
    ]);
  });

  it("diff: text style added, value summarized rather than as JSON", () => {
    const a = diff.added.find(
      (x: MockData) => x.path === "typography/Titre/H5",
    );
    expect(a).toBeTruthy();
    expect(a.value).toBe("style de texte");
  });

  it("diff: text style modified, summarized at the top, size field detailed below", () => {
    const m = diff.modified.find(
      (x: MockData) => x.path === "typography/Corps/1",
    );
    expect(m).toBeTruthy();
    expect(m.before).toBe("style de texte");
    expect(m.after).toBe("style de texte");
    expect(m.fields).toStrictEqual([
      { field: "taille", before: "14 px", after: "16 px" },
    ]);
  });

  it("diff: shadow modified, summarized at the top, blur field detailed below", () => {
    const m = diff.modified.find(
      (x: MockData) => x.path === "shadow/Ombre/carte",
    );
    expect(m).toBeTruthy();
    expect(m.before).toBe("ombre");
    expect(m.after).toBe("ombre");
    expect(m.fields).toStrictEqual([
      { field: "flou", before: "4 px", after: "8 px" },
    ]);
  });

  it("diff: no more raw JSON values, including in the field detail", () => {
    const entries = [
      ...diff.added,
      ...diff.modified,
      ...diff.removed,
      ...diff.deprecated,
    ];
    const isRawJson = (v: MockData) =>
      typeof v === "string" && v.startsWith('{"');
    for (const e of entries) {
      if ("valeur" in e) expect(!isRawJson(e.value), e.value).toBeTruthy();
      if ("avant" in e) expect(!isRawJson(e.before), e.before).toBeTruthy();
      if ("apres" in e) expect(!isRawJson(e.after), e.after).toBeTruthy();
      for (const c of e.fields || []) {
        expect(!isRawJson(c.before), c.before).toBeTruthy();
        expect(!isRawJson(c.after), c.after).toBeTruthy();
      }
    }
  });
});

// ------------------------------------------------------------------ opening

describe("opening", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin(testDocument());
    await plugin.send({ type: "ready" });
  });

  it("context then verification announced on opening, in order, without a diff", () => {
    expect(plugin.messages.length).toBe(2);
    expect(normalize(plugin.messages[0])).toStrictEqual({
      type: "context",
      file: "Canopée B2B",
      variables: 43,
      styles: 5,
      collections: 2,
      repoUrls: {
        urlReference: `https://raw.githubusercontent.com/AxaFrance/design-system/main/${TOKENS_PATH}`,
        urlTags:
          "https://api.github.com/repos/AxaFrance/design-system/tags?per_page=100",
        urlPulls:
          "https://api.github.com/repos/AxaFrance/design-system/pulls?state=open&per_page=100",
        urlVersion: `https://raw.githubusercontent.com/AxaFrance/design-system/{tag}/${TOKENS_PATH}`,
        firstVersion: "2.0.0",
        urlEdition: `https://github.com/AxaFrance/design-system/edit/main/${TOKENS_PATH}`,
        urlCreation:
          "https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json",
      },
    });
    const verification = plugin.messages[1];
    expect(verification.type).toBe("verification");
    expect(verification.changed).toBe(false);
    expect(verification.report.exported).toBe(36);
    expect(
      verification.report.naming.includes(
        "« font/size-18 » : il manque une barre oblique avant le nombre, à écrire font/size/18",
      ),
    ).toBeTruthy();
  });
});

// -------------------------------------------------------------------- automatic resize

describe("automatic resize", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin();
    await plugin.send({ type: "resize", height: 2000 });
  });

  it("window height bounded", () => {
    expect(plugin.resizes).toStrictEqual([[440, 800]]);
  });
});

// ------------------------------------------------------------------ manual resize

describe("manual resize", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin();

    await plugin.send({ type: "resize-manual", width: 200, height: 5000 });
  });

  it("manual resize: width and height bounded, applied", () => {
    expect(plugin.resizes[plugin.resizes.length - 1]).toStrictEqual([
      320, 1200,
    ]);
  });

  it("manual resize: bounded size saved on the machine", () => {
    // The object comes from the VM context: it is normalized to compare, like the messages.
    expect(normalize(plugin.clientStorage.size)).toStrictEqual({
      width: 320,
      height: 1200,
    });
  });

  it("automatic resize ignored while the size is manual", async () => {
    const beforeAutoIgnored = plugin.resizes.length;
    await plugin.send({ type: "resize", height: 500 });
    expect(plugin.resizes.length).toBe(beforeAutoIgnored);
  });

  it("auto size: manual size forgotten, width brought back to 440, height recalculation requested", async () => {
    const beforeAutoSize = plugin.messages.length;
    await plugin.send({ type: "auto-size" });
    expect(plugin.clientStorage.size).toBe(undefined);
    expect(plugin.resizes[plugin.resizes.length - 1]).toStrictEqual([
      440, 1200,
    ]);
    const newMessages = plugin.messages.slice(beforeAutoSize);
    expect(
      newMessages.some((m: MockData) => m.type === "recompute-height"),
    ).toBeTruthy();
  });

  it("automatic resize resumed after auto size, minimum height respected", async () => {
    const beforeAutoResumed = plugin.resizes.length;
    await plugin.send({ type: "resize", height: 500 });
    expect(plugin.resizes.length).toBe(beforeAutoResumed + 1);
    expect(plugin.resizes[plugin.resizes.length - 1]).toStrictEqual([440, 560]);
  });
});

// ---------------------------------------------------------------- submit

// Repository addresses, announced to the UI in the context message.
describe("repo URLs", () => {
  let plugin: MockPlugin, urls: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin();
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    await plugin.send({ type: "ready" });
    urls = normalize(
      plugin.messages.find((m) => m.type === "context")!.repoUrls,
    );
  });

  it("urls: file reading, versions, GitHub editor and creation in its folder", () => {
    expect(urls).toStrictEqual({
      urlReference: `https://raw.githubusercontent.com/AxaFrance/design-system/main/${TOKENS_PATH}`,
      urlTags:
        "https://api.github.com/repos/AxaFrance/design-system/tags?per_page=100",
      urlPulls:
        "https://api.github.com/repos/AxaFrance/design-system/pulls?state=open&per_page=100",
      urlVersion: `https://raw.githubusercontent.com/AxaFrance/design-system/{tag}/${TOKENS_PATH}`,
      firstVersion: "2.0.0",
      urlEdition: `https://github.com/AxaFrance/design-system/edit/main/${TOKENS_PATH}`,
      urlCreation:
        "https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json",
    });
  });

  it("urls: the file name is encoded in the creation parameter", async () => {
    plugin.__test.REPO.tokensPath = "tokens/mon fichier.json";
    await plugin.send({ type: "ready" });
    const lastContext = plugin.messages
      .filter((m) => m.type === "context")
      .pop();
    expect(lastContext!.repoUrls.urlCreation).toBe(
      "https://github.com/AxaFrance/design-system/new/main/tokens?filename=mon%20fichier.json",
    );
  });

  it("urls: the key of the Fondations file is configured", () => {
    expect(plugin.__test.REPO.fileKey).toBe("MJfhu2fwxNjxlzGqOAWJNq");
  });
});

// One reason at a time, in priority order: file, empty, excluded, path.
describe("submit blockers", () => {
  const report = (extra = {}) => ({
    exported: 3,
    textStyles: 0,
    effectStyles: 0,
    conflicts: [],
    missingAliases: [],
    ...extra,
  });
  const getBlocker = (plugin: MockPlugin, r: MockData) =>
    normalize(plugin.__test.submitBlocker(r) ?? null);
  const inFoundations = () =>
    createMockPlugin({ fileKey: "MJfhu2fwxNjxlzGqOAWJNq" });

  it("blocker: outside Fondations, reason file, before any other", () => {
    const plugin = createMockPlugin({ fileKey: "AUTRE-CLE" });
    expect(
      getBlocker(plugin, report({ exported: 0, conflicts: ["a"] })),
    ).toStrictEqual({ reason: "file" });
  });

  it("blocker: the file key takes precedence over its name", () => {
    const plugin = createMockPlugin({
      fileKey: "AUTRE-CLE",
      fileName: "Fondations Canopée",
    });
    expect(getBlocker(plugin, report())).toStrictEqual({ reason: "file" });
    const goodKey = createMockPlugin({
      fileKey: "MJfhu2fwxNjxlzGqOAWJNq",
      fileName: "Autre nom",
    });
    goodKey.__test.REPO.tokensPath = TOKENS_PATH;
    expect(getBlocker(goodKey, report())).toBe(null);
  });

  it("blocker: without a readable file key, the file name Fondations Canopée is enough", () => {
    const plugin = createMockPlugin({ fileName: "Fondations Canopée" });
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    expect(getBlocker(plugin, report())).toBe(null);
    expect(
      getBlocker(createMockPlugin({ fileName: "Canopée B2B" }), report()),
    ).toStrictEqual({ reason: "file" });
  });

  it("blocker: no exported token, no text style, no effect style, reason empty", () => {
    expect(getBlocker(inFoundations(), report({ exported: 0 }))).toStrictEqual({
      reason: "empty",
    });
    expect(
      getBlocker(inFoundations(), report({ exported: 0, conflicts: ["a"] })),
    ).toStrictEqual({ reason: "empty" });
    const withStyle = inFoundations();
    withStyle.__test.REPO.tokensPath = TOKENS_PATH;
    expect(getBlocker(withStyle, report({ exported: 0, textStyles: 1 }))).toBe(
      null,
    );
    expect(
      getBlocker(withStyle, report({ exported: 0, effectStyles: 1 })),
    ).toBe(null);
  });

  it("blocker: excluded tokens, reason excluded with the count of conflicts and broken links", () => {
    expect(
      getBlocker(inFoundations(), report({ conflicts: ["a"] })),
    ).toStrictEqual({ reason: "excluded", n: 1 });
    expect(
      getBlocker(
        inFoundations(),
        report({ conflicts: ["a", "b"], missingAliases: ["c"] }),
      ),
    ).toStrictEqual({ reason: "excluded", n: 3 });
  });

  it("blocker: broken links in another mode do not count", () => {
    const plugin = inFoundations();
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    expect(
      getBlocker(
        plugin,
        report({
          missingModeAliases: [
            "a, mode sombre : reprend la valeur du mode par défaut",
          ],
        }),
      ),
    ).toBe(null);
  });

  it("blocker: file location not set, reason path, then null once set", () => {
    const plugin = inFoundations();
    plugin.__test.REPO.tokensPath = null;
    expect(getBlocker(plugin, report())).toStrictEqual({ reason: "path" });
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    expect(getBlocker(plugin, report())).toBe(null);
  });

  it("blocker: carried by the verification message, here a name conflict", async () => {
    // The blocker is sent in every verification message, on opening as on live update.
    const doc = { ...testDocument(), fileName: "Fondations Canopée" };
    const plugin = createMockPlugin(doc);
    await plugin.send({ type: "ready" });
    expect(normalize(plugin.lastMessage().blocker)).toStrictEqual({
      reason: "excluded",
      n: 1,
    });
  });
});

describe("submit", () => {
  let plugin: MockPlugin,
    currentExport: MockData,
    currentJson: MockData,
    urlEdition: MockData,
    urlCreation: MockData,
    noFile: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin(testDocument());
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    ({ json: currentExport } = await exportDocument(plugin));
    currentJson = withoutDate(JSON.parse(currentExport));
    urlEdition = `https://github.com/AxaFrance/design-system/edit/main/${TOKENS_PATH}`;
    urlCreation =
      "https://github.com/AxaFrance/design-system/new/main/packages/canopee-css?filename=design-tokens-canopee.resolver.json";

    noFile = await submitDocument(plugin, null);
  });

  it("submit without a file in the repo: creation URL, everything counts as added, feat", () => {
    expect(noFile.url).toBe(urlCreation);
    expect(noFile.message).toBe("feat(canopee): update design tokens");
  });

  it("submit: the JSON is the current document, with its export date", () => {
    expect(withoutDate(JSON.parse(noFile.json))).toStrictEqual(currentJson);
    expect(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}Z$/.test(
        JSON.parse(noFile.json).$extensions["fr.axa.canopee"].date,
      ),
    ).toBeTruthy();
    expect(noFile.json.endsWith("\n")).toBeTruthy();
  });

  it("submit with an identical file in the repo: edit URL, chore", async () => {
    const identical = await submitDocument(plugin, currentExport);
    expect(identical.url).toBe(urlEdition);
    expect(identical.message).toBe("chore(canopee): update design tokens");
    expect(withoutDate(JSON.parse(identical.json))).toStrictEqual(currentJson);
  });

  it("submit with a removal compared with the repo: feat without exclamation mark", async () => {
    const withRemoval = JSON.parse(currentExport);
    readSet(withRemoval, "Primitives").Couleur.disparue = {
      $type: "color",
      $value: { colorSpace: "srgb", components: [0, 0, 0], hex: "#000000" },
    };
    const removal = await submitDocument(plugin, JSON.stringify(withRemoval));
    expect(removal.message).toBe("feat(canopee): update design tokens");
    expect(removal.url).toBe(urlEdition);
    expect(withoutDate(JSON.parse(removal.json))).toStrictEqual(currentJson);
  });

  it("submit with an unreadable repo file: counts as no file for the message, edit for the URL", async () => {
    const unreadable = await submitDocument(plugin, "ceci n'est pas du JSON");
    expect(unreadable.message).toBe("feat(canopee): update design tokens");
    expect(unreadable.url).toBe(urlEdition);
  });

  it("submit opens nothing by itself: opening is a separate message", () => {
    expect(plugin.openedUrls).toStrictEqual([]);
  });

  it("submit without a file location in the repo: error with submit context", async () => {
    const noPath = createMockPlugin(testDocument());
    noPath.__test.REPO.tokensPath = null;
    await noPath.send({ type: "submit", repoReference: null });
    expect(normalize(noPath.lastMessage())).toStrictEqual({
      type: "error",
      context: "submit",
      message: "l'emplacement du fichier n'est pas fixé.",
    });
  });
});

describe("open", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin();
    await plugin.send({
      type: "open",
      url: "https://github.com/AxaFrance/design-system/edit/main/x.json",
    });
  });

  it("open: figma.openExternal is called with the received URL", () => {
    expect(plugin.openedUrls).toStrictEqual([
      "https://github.com/AxaFrance/design-system/edit/main/x.json",
    ]);
  });
});

describe("download", () => {
  let doc: MockData, plugin: MockPlugin, before, newMessages: MockData;

  beforeAll(async () => {
    doc = testDocument();
    plugin = createMockPlugin(doc);
    // As on opening: the UI sends 'ready' before any action.
    await plugin.send({ type: "ready" });
    before = plugin.messages.length;
    await plugin.send({ type: "download" });
    newMessages = plugin.messages.slice(before);
  });

  it("download: a single file message, with the fixed name and the JSON of the Figma file", () => {
    expect(newMessages.length).toBe(1);
    expect(newMessages[0].type).toBe("file");
    expect(newMessages[0].file).toBe("design-tokens-canopee.resolver.json");
    const t = JSON.parse(newMessages[0].json);
    expect(t.name).toBe("Canopée B2B");
    expect(Object.keys(t.sets)).toStrictEqual([
      "Primitives",
      "Sémantique",
      "Styles",
    ]);
  });

  it("download: does not touch the comparison", () => {
    expect(newMessages.some((m: MockData) => m.type === "diff")).toBe(false);
    expect(plugin.openedUrls).toStrictEqual([]);
  });

  it("download right after a change: verification (changed: true) sent before the file", async () => {
    // A change made just before the click, not yet seen by the live
    // update: it is announced to the UI before the file, and taken into the JSON.
    doc.locals.find((v: MockData) => v.id === "v2").valuesByMode.m1 = 24;
    const beforeChange = plugin.messages.length;
    await plugin.send({ type: "download" });
    const afterChange = plugin.messages.slice(beforeChange);
    const verification = afterChange.findIndex(
      (m: MockData) => m.type === "verification",
    );
    expect(verification !== -1).toBeTruthy();
    expect(afterChange[verification].changed).toBe(true);
    expect(afterChange[afterChange.length - 1].type).toBe("file");
    expect(
      readSet(
        JSON.parse(afterChange[afterChange.length - 1].json),
        "Primitives",
      ).Espacement.m.$value,
    ).toStrictEqual({ value: 24, unit: "px" });
  });
});

// A single plugin, four levels: each submission is compared with what the repo
// would contain after the previous submission. The first one, with no file in the repo,
// counts everything as added.
describe("commit messages", () => {
  let repo: MockData, messages: MockData;

  beforeAll(async () => {
    const doc = testDocument();
    const plugin = createMockPlugin(doc);
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    repo = null;
    const doSubmit = async () => {
      const submit = await submitDocument(plugin, repo);
      repo = submit.json;
      return submit.message;
    };
    messages = {};

    messages.first = await doSubmit();
    messages.none = await doSubmit();
    doc.locals.find((v: MockData) => v.id === "v2").valuesByMode.m1 = 24;
    messages.patch = await doSubmit();
    doc.locals.push({
      id: "v99",
      name: "spacing/32",
      resolvedType: "FLOAT",
      variableCollectionId: "C1",
      scopes: ["GAP"],
      valuesByMode: { m1: 32 },
    });
    messages.minor = await doSubmit();
    doc.locals.splice(
      doc.locals.findIndex((v: MockData) => v.id === "v99"),
      1,
    );
    messages.removal = await doSubmit();
    doc.locals.find((v: MockData) => v.id === "v2").valuesByMode.m1 = 32;
    messages.major = (
      await submitDocument(plugin, repo, { redesign: true })
    ).message;
  });

  it("commit: without a file in the repo, all tokens added → minor", () => {
    expect(messages.first).toBe("feat(canopee): update design tokens");
  });

  it("commit: no change → chore", () => {
    expect(messages.none).toBe("chore(canopee): update design tokens");
  });

  it("commit: value modified → fix", () => {
    expect(messages.patch).toBe("fix(canopee): update design tokens");
  });

  it("commit: token added → feat", () => {
    expect(messages.minor).toBe("feat(canopee): update design tokens");
  });

  it("commit: token removed → feat without exclamation mark", () => {
    expect(messages.removal).toBe("feat(canopee): update design tokens");
  });

  it("commit: Refonte complète checkbox → feat with exclamation mark, even for a modified value", () => {
    expect(messages.major).toBe("feat(canopee)!: update design tokens");
  });
});

// ----------------------------------------------------------------- live update

describe("live update", () => {
  let plugin: MockPlugin, beforeModification: MockData;

  beforeAll(async () => {
    const doc = testDocument();
    plugin = createMockPlugin(doc);
    const { json } = await exportDocument(plugin);
    // A current reference, as after a comparison with the code: condition for the diff below.
    await plugin.send({ type: "compare", reference: json, source: "repo" });

    beforeModification = plugin.messages.length;
    const spacingVariable = doc.locals.find((v: MockData) => v.id === "v2");
    spacingVariable.valuesByMode.m1 = 24;
    await plugin.__test.checkModifications();
  });

  it("live update: a change triggers context, verification (changed: true) and diff", () => {
    const newMessages = plugin.messages.slice(beforeModification);
    expect(newMessages.length).toBe(3);
    expect(newMessages[0].type).toBe("context");
    expect(newMessages[1].type).toBe("verification");
    expect(newMessages[1].changed).toBe(true);
    expect("blocker" in newMessages[1]).toBeTruthy();
    const diff = normalize(newMessages[2]);
    expect(diff.type).toBe("diff");
    expect(diff.source).toBe("repo");
    expect(diff.modified).toStrictEqual([
      {
        path: "Espacement/m",
        before: "16 px",
        after: "24 px",
        typeChange: false,
      },
    ]);
  });

  it("live update: a second call without change returns nothing", async () => {
    const beforeSecondCall = plugin.messages.length;
    await plugin.__test.checkModifications();
    expect(plugin.messages.length).toBe(beforeSecondCall);
  });
});

// ------------------------------------------------------------------- errors

describe("errors", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin();
    plugin.__test.sendError(new Error("boum"), "submit");
  });

  it("error: the message carries the context", () => {
    expect(normalize(plugin.lastMessage())).toStrictEqual({
      type: "error",
      context: "submit",
      message: "boum",
    });
  });

  it("error: a value that is not an error becomes its text", () => {
    plugin.__test.sendError("texte brut", "comparison");
    expect(normalize(plugin.lastMessage())).toStrictEqual({
      type: "error",
      context: "comparison",
      message: "texte brut",
    });
  });

  it("error: verification, comparison, submit and download each carry their context", async () => {
    // A file whose variables cannot be read: each action returns its context.
    const locals: MockData[] = [];
    locals.map = () => {
      throw new Error("lecture impossible");
    };
    const broken = createMockPlugin({ locals });
    const contextOf = async (msg: MockData) => {
      const before = broken.messages.length;
      await broken.send(msg);
      return normalize(
        broken.messages.slice(before).filter((m) => m.type === "error"),
      );
    };
    const expected = (context: MockData) => [
      { type: "error", context, message: "lecture impossible" },
    ];
    const verification = await contextOf({ type: "ready" });
    const comparison = await contextOf({
      type: "compare",
      reference: '{"sets":{}}',
      source: "file",
    });
    const submit = await contextOf({ type: "submit", repoReference: null });
    const download = await contextOf({ type: "download" });
    expect(verification).toStrictEqual(expected("verification"));
    expect(comparison).toStrictEqual(expected("comparison"));
    expect(submit).toStrictEqual(expected("submit"));
    expect(download).toStrictEqual(expected("download"));
  });
});

// ------------------------------------------------------------- broken links

// A broken link in the default mode excludes the token. In another mode, the
// token stays exported and that mode takes the default value.
describe("broken links", () => {
  let plugin: MockPlugin, t: MockData, report: MockData, set: MockData;

  beforeAll(async () => {
    plugin = createMockPlugin({
      fileName: "Fondations Canopée",
      collections: [
        {
          id: "C1",
          name: "Thème",
          modes: [
            { modeId: "md", name: "clair" },
            { modeId: "mx", name: "sombre" },
          ],
          defaultModeId: "md",
        },
      ],
      locals: [
        {
          id: "a",
          name: "Espacement/a",
          resolvedType: "FLOAT",
          variableCollectionId: "C1",
          scopes: ["GAP"],
          valuesByMode: { md: 16, mx: alias("inexistante") },
        },
        {
          id: "b",
          name: "Espacement/b",
          resolvedType: "FLOAT",
          variableCollectionId: "C1",
          scopes: ["GAP"],
          valuesByMode: { md: alias("inexistante"), mx: 8 },
        },
        {
          id: "c",
          name: "Espacement/c",
          resolvedType: "FLOAT",
          variableCollectionId: "C1",
          scopes: ["GAP"],
          valuesByMode: { md: 4, mx: 4 },
        },
      ],
    });
    plugin.__test.REPO.tokensPath = TOKENS_PATH;
    ({ t, report } = await exportDocument(plugin));
    set = readSet(t, "Thème");
  });

  it("broken link in the default mode: token excluded, listed in missingAliases", () => {
    expect(report.missingAliases).toStrictEqual(["Espacement/b"]);
    expect(set.Espacement.b).toBe(undefined);
  });

  it("broken link in another mode: token exported, mode listed in missingModeAliases", () => {
    expect(report.missingModeAliases).toStrictEqual([
      "Espacement/a, mode sombre : reprend la valeur du mode par défaut",
    ]);
    expect(set.Espacement.a.$value).toStrictEqual({ value: 16, unit: "px" });
  });

  it("broken link in another mode: the mode carries no override, it falls back to the default value", () => {
    expect(t.modifiers["Thème"].contexts.sombre).toStrictEqual([]);
    expect(report.exported).toBe(2);
  });

  it("broken link in another mode: does not block the submission, only the other link counts", () => {
    const blocker = normalize(
      plugin.messages.filter((m) => m.type === "verification").pop()!.blocker,
    );
    expect(blocker).toStrictEqual({ reason: "excluded", n: 1 });
  });
});

// -------------------------------------------------------------------- mode diff

// A modifier context only carries the values that differ from the default: a
// mode that joins (or leaves) the default value is not an addition or a removal.
describe("mode diff", () => {
  let document: MockData,
    compare: MockData,
    dark: MockData,
    joinsDefault: MockData;

  beforeAll(async () => {
    document = (
      defaultValue: MockData,
      darkMode: MockData,
      { withA = true } = {},
    ) => ({
      fileName: "Canopée Fondations",
      collections: [
        {
          id: "CT",
          name: "Thème",
          modes: [
            { modeId: "md", name: "clair" },
            { modeId: "mx", name: "sombre" },
          ],
          defaultModeId: "md",
        },
      ],
      locals: [
        ...(withA
          ? [
              {
                id: "a",
                name: "Espacement/a",
                resolvedType: "FLOAT",
                variableCollectionId: "CT",
                scopes: ["GAP"],
                valuesByMode: { md: defaultValue, mx: darkMode },
              },
            ]
          : []),
        {
          id: "b",
          name: "Espacement/b",
          resolvedType: "FLOAT",
          variableCollectionId: "CT",
          scopes: ["GAP"],
          valuesByMode: { md: 4, mx: 4 },
        },
      ],
    });
    // Diff of the current state against the reference state, each on its own plugin.
    compare = async (referenceDoc: MockData, currentDocument: MockData) => {
      const { json } = await exportDocument(createMockPlugin(referenceDoc));
      const plugin = createMockPlugin(currentDocument);
      await plugin.send({
        type: "compare",
        reference: json,
        source: "file",
        fileName: "x.json",
      });
      return normalize(plugin.lastMessage());
    };
    dark = { modifier: "Thème", context: "sombre" };

    joinsDefault = await compare(document(16, 24), document(16, 16));
  });

  it("mode diff: a mode that joins the default value is a modified, not a removed", () => {
    expect(joinsDefault.modified).toStrictEqual([
      {
        path: "Espacement/a",
        ...dark,
        before: "24 px",
        after: "16 px",
        typeChange: false,
      },
    ]);
    expect([
      joinsDefault.added,
      joinsDefault.removed,
      joinsDefault.deprecated,
    ]).toStrictEqual([[], [], []]);
    expect(joinsDefault.level).toBe("patch");
  });

  it("mode diff: a mode that leaves the default value is a modified, not an added", async () => {
    const leavesDefault = await compare(document(16, 16), document(16, 24));
    expect(leavesDefault.modified).toStrictEqual([
      {
        path: "Espacement/a",
        ...dark,
        before: "16 px",
        after: "24 px",
        typeChange: false,
      },
    ]);
    expect([leavesDefault.added, leavesDefault.removed]).toStrictEqual([
      [],
      [],
    ]);
    expect(leavesDefault.level).toBe("patch");
  });

  it("mode diff: the base changes and the mode keeps its value, a single modified on the base", async () => {
    const defaultChanged = await compare(document(16, 16), document(24, 16));
    expect(defaultChanged.modified).toStrictEqual([
      {
        path: "Espacement/a",
        before: "16 px",
        after: "24 px",
        typeChange: false,
      },
    ]);
    expect([defaultChanged.added, defaultChanged.removed]).toStrictEqual([
      [],
      [],
    ]);
    expect(defaultChanged.level).toBe("patch");
  });

  it("mode diff: a token removed with its modes gives removed entries, base and mode", async () => {
    const removedToken = await compare(
      document(16, 24),
      document(16, 24, { withA: false }),
    );
    expect(removedToken.removed).toStrictEqual([
      { path: "Espacement/a", value: "16 px" },
      { path: "Espacement/a", ...dark, value: "24 px" },
    ]);
    expect([removedToken.added, removedToken.modified]).toStrictEqual([[], []]);
    expect(removedToken.level).toBe("minor");
  });

  it("mode diff: a token added with its modes gives added entries, base and mode", async () => {
    const addedToken = await compare(
      document(16, 24, { withA: false }),
      document(16, 24),
    );
    expect(addedToken.added).toStrictEqual([
      { path: "Espacement/a", value: "16 px" },
      { path: "Espacement/a", ...dark, value: "24 px" },
    ]);
    expect([addedToken.removed, addedToken.modified]).toStrictEqual([[], []]);
    expect(addedToken.level).toBe("minor");
  });
});

// ---------------------------------------------------------- size kept, on opening

describe("kept size, on opening", () => {
  let plugin: MockPlugin;

  beforeAll(async () => {
    plugin = createMockPlugin({
      clientStorage: { size: { width: 550, height: 250 } },
    });
    // The kept size is applied again in the leading IIFE of dist/code.js, before any
    // message: leave time for microtasks to run.
    await new Promise((r) => setTimeout(r, 0));
  });

  it("saved size applied again on opening, bounded like a manual size", () => {
    expect(plugin.resizes).toStrictEqual([[550, 300]]);
  });
});

// ------------------------------------------------------------- deprecation

describe("deprecation", () => {
  let variable,
    style,
    plugin: MockPlugin,
    t: MockData,
    P,
    report: MockData,
    E: MockData;

  beforeAll(async () => {
    variable = (id: MockData, name: MockData, extra = {}) => ({
      id,
      name: name,
      resolvedType: "FLOAT",
      variableCollectionId: "CP",
      scopes: ["GAP"],
      valuesByMode: { p1: 8 },
      ...extra,
    });
    style = (id: MockData, name: MockData, description: MockData) => ({
      id,
      name: name,
      description,
      fontName: { family: "Source Sans Pro", style: "Regular" },
      fontSize: 16,
      lineHeight: { unit: "PIXELS", value: 20 },
      letterSpacing: { unit: "PIXELS", value: 0 },
      boundVariables: {},
    });
    plugin = createMockPlugin({
      collections: [
        {
          id: "CP",
          name: "Primitives",
          modes: [{ modeId: "p1", name: "Mode 1" }],
          defaultModeId: "p1",
        },
      ],
      locals: [
        variable("d1", "Espacement/avec-remplacant", {
          description: "Deprecated: use color/blue/700.",
        }),
        variable("d2", "Espacement/seul", { description: "Deprecated" }),
        variable("d3", "Espacement/tiret", {
          description: "  deprecated - voir spacing/16",
        }),
        variable("d4", "Espacement/mot-colle", {
          description: "Deprecatedx : autre chose",
        }),
        variable("d5", "Espacement/masque", { hiddenFromPublishing: true }),
        variable("d6", "Espacement/sans-scope", {
          scopes: [],
          description: "Deprecated. Use spacing/16 or spacing/24.",
        }),
        variable("d7", "Espacement/sans-scope-actif", { scopes: [] }),
        variable("d8", "Espacement/deprecated-dans-le-nom", {
          description: "Pour un usage ancien",
        }),
      ],
      textStyles: [
        style("s1", "Ancien/titre", "Deprecated: use Titre/H1"),
        style("s2", "Titre/H1", "Titre de page"),
      ],
      effectStyles: [
        {
          id: "e1",
          name: "Ancienne/ombre",
          description: "Deprecated",
          effects: [shadow(2)],
        },
      ],
    });
    ({ t, P, report } = await exportDocument(plugin));
    E = P.Espacement;
  });

  it('description "Deprecated: use color/blue/700.": $deprecated carries the rest, the description starts with Deprecated', () => {
    expect(E["avec-remplacant"].$deprecated).toBe("use color/blue/700.");
    expect(
      E["avec-remplacant"].$description.startsWith("Deprecated"),
    ).toBeTruthy();
  });

  it('"Deprecated" alone: $deprecated is true', () => {
    expect(E.seul.$deprecated).toBe(true);
  });

  it("leading spaces ignored, joining dash removed", () => {
    expect(E.tiret.$deprecated).toBe("voir spacing/16");
  });

  it('"Deprecated" stuck to other letters: not deprecated', () => {
    expect(E["mot-colle"].$deprecated).toBe(undefined);
  });

  it('variable hidden from publishing without "Deprecated": exported like the others', () => {
    expect(E.masque.$deprecated).toBe(undefined);
    expect(E.masque.$type).toBe("dimension");
  });

  it('"deprecated" in the name or elsewhere in the description: not deprecated', () => {
    expect(E["deprecated-dans-le-nom"].$deprecated).toBe(undefined);
  });

  it("deprecated variable without scope: absent from inferredTypes, active without scope: present", () => {
    expect(E["sans-scope"].$deprecated).toBe("Use spacing/16 or spacing/24.");
    expect(E["sans-scope"].$type).toBe("dimension");
    expect(
      !report.inferredTypes.some((e: string) =>
        e.startsWith("Espacement/sans-scope :"),
      ),
    ).toBeTruthy();
    expect(
      report.inferredTypes.some((e: string) =>
        e.startsWith("Espacement/sans-scope-actif :"),
      ),
    ).toBeTruthy();
  });

  it("text style and effect style whose description starts with Deprecated: deprecated", () => {
    const STY = readSet(t, "Styles");
    expect(STY.typography.Ancien.titre.$deprecated).toBe("use Titre/H1");
    expect(STY.typography.Titre.H1.$deprecated).toBe(undefined);
    expect(STY.shadow.Ancienne.ombre.$deprecated).toBe(true);
  });

  it("diff: $deprecated as a string (variable or style) counted as deprecated, minor level", async () => {
    const reference = JSON.parse(JSON.stringify(t));
    delete readSet(reference, "Primitives").Espacement["avec-remplacant"]
      .$deprecated;
    delete readSet(reference, "Styles").typography.Ancien.titre.$deprecated;
    await plugin.send({
      type: "compare",
      reference: JSON.stringify(reference),
      source: "repo",
    });
    const diff = normalize(plugin.lastMessage());
    expect(diff.deprecated.map((d: MockData) => d.path).sort()).toStrictEqual([
      "Espacement/avec-remplacant",
      "typography/Ancien/titre",
    ]);
    expect(diff.level).toBe("minor");
  });
});

// ------------------------------------------------------- incomplete exported styles

describe("incomplete exported styles", () => {
  let style,
    plugin: MockPlugin,
    t: MockData,
    report: MockData,
    T: MockData,
    ext: MockData,
    NON_DTCG: MockData,
    diff: MockData;

  beforeAll(async () => {
    style = (
      id: MockData,
      name: MockData,
      parseWeight: MockData,
      extra = {},
    ) => ({
      id,
      name: name,
      description: "",
      fontName: { family: "Source Sans Pro", style: parseWeight },
      fontSize: 16,
      lineHeight: { unit: "PIXELS", value: 20 },
      letterSpacing: { unit: "PIXELS", value: 0 },
      boundVariables: {},
      ...extra,
    });
    plugin = createMockPlugin({
      collections: [
        {
          id: "CP",
          name: "Primitive",
          modes: [{ modeId: "p1", name: "Mode 1" }],
          defaultModeId: "p1",
        },
      ],
      // Figma font style variable: its value is a style name, not a CSS font-style.
      locals: [
        {
          id: "fs1",
          name: "font/style/semibold-italic",
          resolvedType: "STRING",
          variableCollectionId: "CP",
          scopes: ["FONT_STYLE"],
          valuesByMode: { p1: "Semibold Italic" },
        },
      ],
      textStyles: [
        style("s1", "Citation", "Italic"),
        style("s2", "Légende", "Book Heavy"),
        style("s3", "Lien", "Regular", { textDecoration: "UNDERLINE" }),
        style("s4", "Prix barré", "Regular", {
          textDecoration: "STRIKETHROUGH",
        }),
        style("s5", "Majuscules", "Regular", { textCase: "UPPER" }),
        style("s6", "Petites capitales", "Regular", { textCase: "SMALL_CAPS" }),
        style("s7", "Simple", "Regular", {
          textDecoration: "NONE",
          textCase: "ORIGINAL",
        }),
        style("s8", "Oblique", "Semibold Oblique"),
        style("s9", "Lié", "Semibold Italic", {
          boundVariables: { fontStyle: alias("fs1") },
        }),
      ],
    });
    ({ t, report } = await exportDocument(plugin));
    T = readSet(t, "Styles").typography;
    // Non-DTCG fields of a style: in $extensions, never in $value.
    ext = (name: MockData) => T[name].$extensions?.["fr.axa.canopee"] || {};
    NON_DTCG = ["fontStyle", "textDecoration", "textTransform"];
  });

  it('"Italic" style alone: weight 400 and fontStyle italic, neither incomplete nor excluded', () => {
    expect(report.textStyles).toBe(9);
    expect(T.Citation.$value.fontWeight).toBe(400);
    expect(ext("Citation").fontStyle).toBe("italic");
    expect(
      !report.incompleteStyles.some((e: string) => e.startsWith("Citation")),
    ).toBeTruthy();
    expect(
      !report.excluded.some((e: string) => e.startsWith("Citation")),
    ).toBeTruthy();
  });

  it("oblique style: fontStyle oblique", () => {
    expect(ext("Oblique").fontStyle).toBe("oblique");
  });

  it("unrecognized weight: exported as is, and flagged as incomplete", () => {
    expect(
      report.incompleteStyles.includes(
        "Légende : graisse « Book Heavy » non reconnue, exportée telle quelle",
      ),
    ).toBeTruthy();
  });

  it("underlined: textDecoration underline", () => {
    expect(ext("Lien").textDecoration).toBe("underline");
  });

  it("struck through: textDecoration line-through", () => {
    expect(ext("Prix barré").textDecoration).toBe("line-through");
  });

  it("uppercase: textTransform uppercase", () => {
    expect(ext("Majuscules").textTransform).toBe("uppercase");
  });

  it("small caps: no textTransform, flagged as incomplete", () => {
    expect(!("textTransform" in ext("Petites capitales"))).toBeTruthy();
    expect(
      report.incompleteStyles.includes(
        "Petites capitales : les petites capitales ne sont pas exportées",
      ),
    ).toBeTruthy();
  });

  it("style without italic, underline or case: no extension", () => {
    expect(T.Simple.$extensions).toBe(undefined);
  });

  it("italic, underline and case never in $value, which Terrazzo reads", () => {
    for (const [name, token] of Object.entries<MockData>(T)) {
      for (const key of NON_DTCG)
        expect(!(key in token.$value), `${name} : ${key}`).toBeTruthy();
    }
  });

  it("fontStyle bound to a variable: the field keeps its CSS value, never a reference", () => {
    expect(ext("Lié").fontStyle).toBe("italic");
  });

  it('diff: underlined style compared with a reference without the field, "décoration du texte" from none to underline', async () => {
    // Diff: reference without the underline of the Lien style.
    const reference = JSON.parse(JSON.stringify(t));
    delete readSet(reference, "Styles").typography.Lien.$extensions;
    await plugin.send({
      type: "compare",
      reference: JSON.stringify(reference),
      source: "file",
      fileName: "reference-souligne.json",
    });
    diff = normalize(plugin.lastMessage());
    const m = diff.modified.find((x: MockData) => x.path === "typography/Lien");
    expect(m).toBeTruthy();
    expect(m.fields).toStrictEqual([
      { field: "décoration du texte", before: "aucun", after: "underline" },
    ]);
  });

  it("diff: nothing else changes, the other extensions stay ignored", () => {
    expect(diff.modified.map((x: MockData) => x.path)).toStrictEqual([
      "typography/Lien",
    ]);
  });
});

describe("breakpoints", () => {
  let breakpoint, t, report: MockData, B: MockData;

  beforeAll(async () => {
    breakpoint = (id: MockData, name: MockData, value: MockData) => ({
      id,
      name: name,
      resolvedType: "FLOAT",
      variableCollectionId: "CP",
      scopes: ["WIDTH_HEIGHT"],
      description: "Utilisé par prospect et client.",
      valuesByMode: { m1: value },
    });
    const plugin = createMockPlugin({
      collections: [
        {
          id: "CP",
          name: "Primitive",
          modes: [{ modeId: "m1", name: "Mode 1" }],
          defaultModeId: "m1",
        },
      ],
      locals: [
        breakpoint("b1", "breakpoint/1024", 1024),
        breakpoint("b2", "breakpoint/0", 0),
        breakpoint("b3", "breakpoint/1280", 1279),
      ],
    });
    ({ t, report } = await exportDocument(plugin));
    B = readSet(t, "Primitive").breakpoint;
  });

  it("breakpoint: dimension in px, generated description before the Figma one", () => {
    expect([B["1024"].$type, B["1024"].$value]).toStrictEqual([
      "dimension",
      { value: 1024, unit: "px" },
    ]);
    expect(B["1024"].$description).toBe(
      "Largeur d'écran de 1024 px à partir de laquelle la mise en page change. Reste en px dans le code. Utilisé par prospect et client.",
    );
  });

  it("breakpoint: compliant name, including breakpoint/0", () => {
    expect(
      !report.naming.some(
        (m: string) =>
          m.startsWith("« breakpoint/1024 »") ||
          m.startsWith("« breakpoint/0 »"),
      ),
    ).toBeTruthy();
  });

  it("breakpoint: the number of the name must equal the value", () => {
    expect(
      report.naming.includes(
        "« breakpoint/1280 » : le nom indique 1280, mais la valeur est de 1279 px",
      ),
    ).toBeTruthy();
  });
});

// The name of a set identifies its whole collection: a duplicate collection must
// never overwrite the other without saying so.
describe("collections with the same name", () => {
  let duplicatePlugin: MockPlugin, duplicate: MockData;

  beforeAll(async () => {
    duplicatePlugin = createMockPlugin({
      fileName: "Fondations Canopée",
      collections: [
        {
          id: "CA",
          name: "A.B",
          modes: [{ modeId: "m1", name: "Mode 1" }],
          defaultModeId: "m1",
        },
        {
          id: "CB",
          name: "A-B",
          modes: [
            { modeId: "m2", name: "clair" },
            { modeId: "m3", name: "sombre" },
          ],
          defaultModeId: "m2",
        },
      ],
      locals: [
        {
          id: "v1",
          name: "spacing/1",
          resolvedType: "FLOAT",
          variableCollectionId: "CA",
          scopes: ["GAP"],
          valuesByMode: { m1: 1 },
        },
        {
          id: "v2",
          name: "spacing/2",
          resolvedType: "FLOAT",
          variableCollectionId: "CB",
          scopes: ["GAP"],
          valuesByMode: { m2: 2, m3: 3 },
        },
      ],
    });
    duplicate = await exportDocument(duplicatePlugin);
  });

  it("collections with the same name once sanitized: the first keeps its set, the second stays out of the file", () => {
    expect(readSet(duplicate.t, "A-B").spacing["1"].$value.value).toBe(1);
    expect(readSet(duplicate.t, "A-B").spacing["2"]).toBe(undefined);
    expect(duplicate.t.modifiers).toBe(undefined);
    expect(duplicate.report.exported).toBe(1);
  });

  it("collections with the same name once sanitized: the second is reported as a conflict and blocks the submission", () => {
    expect(duplicate.report.conflicts).toStrictEqual([
      "Collection A-B : même nom que A.B dans le code",
    ]);
    expect(
      normalize(
        duplicatePlugin.messages.filter((m) => m.type === "verification").pop()!
          .blocker,
      ),
    ).toStrictEqual({ reason: "excluded", n: 1 });
  });

  it("collection named Styles: the set stays the styles one, the collection is reported as a conflict", async () => {
    const reservedPlugin = createMockPlugin({
      collections: [
        {
          id: "CS",
          name: "Styles",
          modes: [{ modeId: "m1", name: "Mode 1" }],
          defaultModeId: "m1",
        },
      ],
      locals: [
        {
          id: "v1",
          name: "spacing/1",
          resolvedType: "FLOAT",
          variableCollectionId: "CS",
          scopes: ["GAP"],
          valuesByMode: { m1: 1 },
        },
      ],
      effectStyles: [
        {
          id: "e1",
          name: "shadow/1",
          description: "",
          effects: [shadow(2, { visible: true })],
        },
      ],
    });
    const reserved = await exportDocument(reservedPlugin);
    expect(reserved.report.effectStyles).toBe(1);
    expect(readSet(reserved.t, "Styles").spacing).toBe(undefined);
    expect(reserved.report.conflicts).toStrictEqual([
      "Collection Styles : nom réservé aux styles de texte et d'effet",
    ]);
  });
});

describe("deleted variables", () => {
  let t: MockData, report: MockData;

  beforeAll(async () => {
    const collection = {
      id: "CP",
      name: "Primitive",
      modes: [{ modeId: "m1", name: "Mode 1" }],
      defaultModeId: "m1",
    };
    const deleted = {
      id: "vs",
      name: "Shadow/Blur",
      resolvedType: "FLOAT",
      variableCollectionId: "CP",
      scopes: ["EFFECT_FLOAT"],
      valuesByMode: { m1: 8 },
    };
    const plugin = createMockPlugin({
      collections: [collection],
      locals: [
        {
          id: "v1",
          name: "spacing/8",
          resolvedType: "FLOAT",
          variableCollectionId: "CP",
          scopes: ["GAP"],
          valuesByMode: { m1: 8 },
        },
        {
          id: "v2",
          name: "spacing/flou",
          resolvedType: "FLOAT",
          variableCollectionId: "CP",
          scopes: ["GAP"],
          valuesByMode: { m1: alias("vs") },
        },
      ],
      deletedVariables: [deleted],
      effectStyles: [
        {
          id: "e1",
          name: "Shadow",
          description: "",
          effects: [
            {
              type: "DROP_SHADOW",
              visible: true,
              color: { r: 0, g: 0, b: 0, a: 0.25 },
              offset: { x: 0, y: 2 },
              radius: 8,
              spread: 0,
              boundVariables: { radius: alias("vs") },
            },
          ],
        },
      ],
    });
    ({ t, report } = await exportDocument(plugin));
  });

  it("deleted variable: an alias to it is a broken link, the token is not exported", () => {
    expect(report.missingAliases.includes("spacing/flou")).toBeTruthy();
    expect(readSet(t, "Primitive").spacing.flou).toBe(undefined);
  });

  it("deleted variable: a style bound to it is a broken link, the style is not exported", () => {
    expect(report.missingAliases.includes("Shadow")).toBeTruthy();
    expect(report.effectStyles).toBe(0);
    expect(t.sets.Styles).toBe(undefined);
  });
});

describe("opacity and styles", () => {
  let problemOf: MockData;

  beforeAll(async () => {
    const alphaColor = (id: MockData, name: MockData, value: MockData) => ({
      id,
      name: name,
      resolvedType: "COLOR",
      variableCollectionId: "CP",
      scopes: [],
      valuesByMode: { m1: value },
    });
    const textStyle = (id: MockData, name: MockData) => ({
      id,
      name: name,
      description: "Texte",
      fontName: { family: "Source Sans Pro", style: "Regular" },
      fontSize: 16,
      lineHeight: { unit: "PIXELS", value: 20 },
      letterSpacing: { unit: "PIXELS", value: 0 },
    });
    const plugin = createMockPlugin({
      collections: [
        {
          id: "CP",
          name: "Primitive",
          modes: [{ modeId: "m1", name: "Mode 1" }],
          defaultModeId: "m1",
        },
      ],
      locals: [
        alphaColor("a1", "color/black-alpha/20", {
          r: 0,
          g: 0,
          b: 0,
          a: 0.20000000298023224,
        }),
        alphaColor("a2", "color/black-alpha/30", { r: 0, g: 0, b: 0, a: 0.5 }),
        alphaColor("a3", "color/white-alpha/40", { r: 1, g: 1, b: 1 }),
        alphaColor("a4", "color/gray-alpha/50", alias("a1")),
      ],
      textStyles: [
        textStyle("s1", "heading/h2"),
        textStyle("s2", "body/2/semibold"),
        textStyle("s3", "Titre/H1"),
        textStyle("s4", "quote/1/regular"),
        textStyle("s5", "body/2"),
        textStyle("s6", "heading/2/regular"),
      ],
    });
    const { report } = await exportDocument(plugin);
    problemOf = (name: MockData) =>
      report.naming.find((m: string) => m.startsWith(`« ${name} »`));
  });

  it("naming: opacity matching the name, despite Figma rounding", () => {
    expect(problemOf("color/black-alpha/20")).toBe(undefined);
  });

  it("naming: opacity different from the name", () => {
    expect(problemOf("color/black-alpha/30")).toBe(
      "« color/black-alpha/30 » : le nom indique 30 % d'opacité, mais la valeur est de 50 %",
    );
  });

  it("naming: color without alpha, counted as opaque", () => {
    expect(problemOf("color/white-alpha/40")).toBe(
      "« color/white-alpha/40 » : le nom indique 40 % d'opacité, mais la valeur est de 100 %",
    );
  });

  it("naming: opacity not compared for an alias", () => {
    expect(problemOf("color/gray-alpha/50")).toBe(undefined);
  });

  it("naming: compliant text styles, not flagged", () => {
    for (const name of ["heading/h2", "body/2/semibold"])
      expect(problemOf(name), name).toBe(undefined);
  });

  it("naming: badly spelled style", () => {
    expect(problemOf("Titre/H1")).toBe(
      "« Titre/H1 » : s'écrit en minuscules, sans accent ni espace, avec un tiret entre les mots",
    );
  });

  it("naming: style outside the families", () => {
    expect(problemOf("quote/1/regular")).toBe(
      "« quote/1/regular » : le nom doit commencer par heading, title, subtitle, body, label ou caption",
    );
  });

  it("naming: style without a weight", () => {
    expect(problemOf("body/2")).toBe(
      "« body/2 » : ce nom ne suit pas le modèle des styles body, par exemple body/2/semibold",
    );
  });

  it("naming: heading written like the other families", () => {
    expect(problemOf("heading/2/regular")).toBe(
      "« heading/2/regular » : ce nom ne suit pas le modèle des styles heading, par exemple heading/h2",
    );
  });
});

// The docs and the plugin live in the same repo: a naming rule changed
// on one side only makes this suite fail.
describe("documentation", () => {
  let foundations: MockData,
    table: MockData,
    t: MockData,
    primitives: MockData,
    styles: MockData,
    patterns: MockData,
    names: MockData,
    allowedValues: MockData;

  beforeAll(async () => {
    foundations = (page: MockData) =>
      fs.readFileSync(
        path.join(HERE, "..", "..", "..", "fondations", page),
        "utf8",
      );
    table = (text: MockData, firstColumn: MockData) => {
      const lines = text.split("\n");
      const start = lines.findIndex((l: string) =>
        l.startsWith(`| ${firstColumn} |`),
      );
      expect(start, `table "${firstColumn}" not found`).not.toBe(-1);
      const bodyHtml = [];
      for (const l of lines.slice(start + 2)) {
        if (!l.startsWith("|")) break;
        bodyHtml.push(
          l
            .split("|")
            .slice(1, -1)
            .map((c: MockData) => c.trim()),
        );
      }
      return bodyHtml;
    };
    ({ __test: t } = createMockPlugin());
    primitives = foundations("01-primitives.md");
    styles = foundations("02-typographies.md");
    patterns = table(primitives, "Ce qu'elle désigne");
    names = patterns.map((l: MockData) => l[1]);
    allowedValues = (part: MockData) => {
      const line = table(primitives, "Partie").find(
        (l: MockData) => l[0] === part,
      );
      expect(line, `row "${part}" not found`).toBeTruthy();
      return line[1].split(", ");
    };
  });

  it("docs: each pattern of 01-primitives.md follows a plugin shape", () => {
    for (const name of names)
      expect(
        t.matchingShape(name),
        `${name}: the plugin does not know this pattern`,
      ).toBeTruthy();
  });

  it("docs: each plugin shape has its line in 01-primitives.md", () => {
    const covered = names
      .map((name: MockData) => t.matchingShape(name).id)
      .sort();
    expect(covered).toStrictEqual(
      [...t.PRIMITIVES_GRAMMAR].map((f) => f.id).sort(),
    );
  });

  it("docs: the plugin categories are those of 01-primitives.md", () => {
    expect(
      [...new Set(names.map((name: MockData) => name.split("/")[0]))].sort(),
    ).toStrictEqual([...t.KNOWN_CATEGORIES].sort());
    for (const example of Object.values(t.CATEGORY_EXAMPLE))
      expect(
        names.includes(example),
        `${example}: absent from the docs`,
      ).toBeTruthy();
  });

  it("docs: the name in the code follows the name in Figma", () => {
    for (const [, figma, code] of patterns)
      expect(code).toBe("--" + figma.replace(/\//g, "-"));
  });

  it("docs: the plugin steps are those of 01-primitives.md", () => {
    expect(allowedValues("Palier d'une couleur")).toStrictEqual([...t.STEPS]);
  });

  it("docs: the plugin knows the single rounding keyword of 01-primitives.md", () => {
    expect(allowedValues("Mot-clé d'un arrondi")).toStrictEqual(["full"]);
  });

  it("docs: the plugin families are those of 02-typographies.md", () => {
    expect(table(styles, "Famille").map((l: MockData) => l[0])).toStrictEqual([
      ...t.STYLE_FAMILIES,
    ]);
  });

  it("docs: each style of 02-typographies.md follows the plugin pattern", () => {
    for (const [style] of table(styles, "Style")) {
      const fullNames = style.startsWith("heading/")
        ? [style]
        : [`${style}/regular`, `${style}/semibold`];
      for (const name of fullNames)
        expect(t.styleProblem(name), name).toBe(null);
    }
  });

  it("docs: the plugin style properties are those of 02-typographies.md", () => {
    const phrase = /Chaque style en a quatre : ([^.]+)\./.exec(styles);
    expect(phrase, "sentence of the four properties not found").toBeTruthy();
    expect(phrase![1].split(/, | et /).sort()).toStrictEqual(
      Object.keys(t.STYLE_PHRASES).sort(),
    );
  });

  it("docs: the levels of 03-creer-ou-modifier-un-token.md are those of the plugin", () => {
    const levels = Object.fromEntries(
      table(foundations("03-creer-ou-modifier-un-token.md"), "Changement").map(
        ([change, level]: string[]) => [level, change.toLowerCase()],
      ),
    );
    expect(Object.keys(levels)).toStrictEqual(["Majeur", "Mineur", "Patch"]);
    expect(levels.Majeur.includes("refonte complète")).toBeTruthy();
    for (const word of ["ajoutés", "supprimés", "dépréciés", "type"])
      expect(levels.Mineur.includes(word), word).toBeTruthy();
    expect(levels.Patch.includes("valeurs modifiées")).toBeTruthy();
  });
});

describe("style variables", () => {
  let t: MockData, report: MockData, T: MockData, ctx: MockData;

  beforeAll(async () => {
    const plugin = createMockPlugin({
      collections: [
        {
          id: "CP",
          name: "Primitive",
          modes: [{ modeId: "m1", name: "Mode 1" }],
          defaultModeId: "m1",
        },
        {
          id: "CT",
          name: "Typography",
          modes: [
            { modeId: "md", name: "desktop" },
            { modeId: "mm", name: "mobile" },
          ],
          defaultModeId: "md",
        },
      ],
      locals: [
        {
          id: "p16",
          name: "font/size/16",
          resolvedType: "FLOAT",
          variableCollectionId: "CP",
          scopes: ["FONT_SIZE"],
          valuesByMode: { m1: 16 },
        },
        {
          id: "p14",
          name: "font/size/14",
          resolvedType: "FLOAT",
          variableCollectionId: "CP",
          scopes: ["FONT_SIZE"],
          valuesByMode: { m1: 14 },
        },
        {
          id: "pw",
          name: "font/weight/regular",
          resolvedType: "FLOAT",
          variableCollectionId: "CP",
          scopes: ["FONT_WEIGHT"],
          valuesByMode: { m1: 400 },
        },
        {
          id: "pf",
          name: "font/family/sans-serif",
          resolvedType: "STRING",
          variableCollectionId: "CP",
          scopes: ["FONT_FAMILY"],
          valuesByMode: { m1: "Source Sans Pro" },
        },
        {
          id: "s1",
          name: "body/2/regular/font-size",
          resolvedType: "FLOAT",
          variableCollectionId: "CT",
          scopes: ["FONT_SIZE"],
          description: "Texte courant.",
          valuesByMode: { md: alias("p16"), mm: alias("p14") },
        },
        {
          id: "s2",
          name: "body/2/regular/line-height",
          resolvedType: "FLOAT",
          variableCollectionId: "CT",
          scopes: ["LINE_HEIGHT"],
          valuesByMode: { md: 24, mm: 24 },
        },
        {
          id: "s3",
          name: "body/2/regular/font-weight",
          resolvedType: "FLOAT",
          variableCollectionId: "CT",
          scopes: ["FONT_WEIGHT"],
          valuesByMode: { md: alias("pw"), mm: alias("pw") },
        },
        {
          id: "s4",
          name: "body/2/regular/font-family",
          resolvedType: "STRING",
          variableCollectionId: "CT",
          scopes: ["FONT_FAMILY"],
          valuesByMode: { md: alias("pf"), mm: alias("pf") },
        },
        {
          id: "s5",
          name: "font-size",
          resolvedType: "FLOAT",
          variableCollectionId: "CT",
          scopes: ["FONT_SIZE"],
          valuesByMode: { md: 16, mm: 16 },
        },
      ],
    });
    ({ t, report } = await exportDocument(plugin));
    T = readSet(t, "Typography").body["2"].regular;
    ctx = t.modifiers.Typography.contexts.mobile[0].body["2"].regular;
  });

  it("style variable: description without a value, including as an alias, with the Figma description after", () => {
    expect(T["font-size"].$description).toBe(
      "Taille de texte du style body/2/regular. Texte courant.",
    );
    expect(T["line-height"].$description).toBe(
      "Interligne du style body/2/regular.",
    );
    expect(T["font-weight"].$description).toBe(
      "Graisse du style body/2/regular.",
    );
    expect(T["font-family"].$description).toBe(
      "Famille de police du style body/2/regular.",
    );
  });

  it("style variable: same description in the context of a mode that differs", () => {
    expect(ctx["font-size"].$description).toBe(
      "Taille de texte du style body/2/regular. Texte courant.",
    );
    expect(ctx["line-height"]).toBe(undefined);
  });

  it('style variable: absent from "Sans description"', () => {
    expect(
      !report.noDescription.some((name: string) =>
        name.startsWith("body/2/regular/"),
      ),
    ).toBeTruthy();
  });

  it("style variable: a single-segment name and primitives are not concerned", () => {
    expect(report.noDescription.includes("font-size")).toBeTruthy();
    const P = readSet(t, "Primitive").font;
    expect(P.size["16"].$description).toBe(
      "Taille de texte de 16 px, soit 1rem dans le code.",
    );
    expect(P.weight.regular.$description).toBe(
      "Graisse regular, de valeur 400.",
    );
    expect(P.family["sans-serif"].$description).toBe(
      "Famille de police Source Sans Pro.",
    );
  });
});

// -------------------------------------------------------- produced file, end to end

// The file produced for the test document, byte for byte, except for the date and the
// plugin version number: the only things that change from one run
// to the next. Reference: test/fixtures/reference-output.json.
const normalizeProducedFile = (text: MockData) =>
  text
    .replace(/("plugin": )"[^"]*"/, '$1"<version>"')
    .replace(/("date": )"\d{4}-[^"]*"/, '$1"<date>"');

describe("produced file", () => {
  let json: MockData, reference: MockData;

  beforeAll(async () => {
    const plugin = createMockPlugin(testDocument());
    ({ json } = await exportDocument(plugin));
    reference = fs.readFileSync(
      path.join(HERE, "fixtures", "reference-output.json"),
      "utf8",
    );
  });

  it("produced file for the test document: identical to the recorded reference", () => {
    expect(normalizeProducedFile(json)).toBe(reference);
  });
});
