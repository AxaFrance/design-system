// Integration test: the real dist/ui.html, in jsdom, connected to the real dist/code.js (mock
// plugin) by a bridge that reproduces the one in Figma. It protects the message
// contract between the two sides, which nothing else tests.
//
// Elements are found by their visible text (never by id or class),
// and the texts of the UI are protected by one snapshot per journey.
//
// The only places that name message types are the expected lists
// below, and the preparation messages of exportJson(). The bridge records the types
// seen in each direction, and the last test compares these sets with the lists: it
// fails if a type is no longer exercised end to end.

import { afterEach, describe, expect, it } from "vitest";
import { JSDOM, VirtualConsole } from "jsdom";
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

// Message contract between the UI and the plugin. A type renamed on one side
// only, or that no journey exercises any more, makes the last test fail.
const TYPES_UI_TO_PLUGIN = [
  "compare",
  "submit",
  "open",
  "ready",
  "resize",
  "resize-manual",
  "auto-size",
  "download",
];
const TYPES_PLUGIN_TO_UI = [
  "context",
  "submit-ready",
  "diff",
  "error",
  "file",
  "recompute-height",
  "verification",
];
const typesToPlugin = new Set();
const typesToUi = new Set();

const HTML = fs.readFileSync(path.join(HERE, "..", "dist", "ui.html"), "utf8");

// ------------------------------------------------------------------ documents

const alias = (id: MockData) => ({ type: "VARIABLE_ALIAS", id });
const collectionPrimitives = {
  id: "C1",
  name: "Primitives",
  modes: [{ modeId: "m1", name: "Mode 1" }],
  defaultModeId: "m1",
};
const variable = (
  id: MockData,
  name: MockData,
  type: MockData,
  value: MockData,
  scopes: string[] = [],
) => ({
  id,
  name: name,
  resolvedType: type,
  variableCollectionId: "C1",
  scopes,
  valuesByMode: { m1: value },
});

// Document without a problem, in the file where the submission is allowed.
const healthyDocument = (
  modifications: {
    blue?: MockData;
    noSpacing?: boolean;
    withExtra?: boolean;
  } = {},
) => ({
  fileName: "Fondations Canopée",
  collections: [collectionPrimitives],
  locals: [
    variable(
      "v1",
      "color/blue/700",
      "COLOR",
      modifications.blue || { r: 0, g: 0, b: 143 / 255 },
    ),
    variable("v2", "color/white", "COLOR", { r: 1, g: 1, b: 1 }),
    variable("v3", "spacing/16", "FLOAT", 16, ["GAP"]),
    ...(modifications.noSpacing
      ? []
      : [variable("v4", "spacing/2", "FLOAT", 2, ["GAP"])]),
    ...(modifications.withExtra
      ? [variable("v5", "spacing/8", "FLOAT", 8, ["GAP"])]
      : []),
  ],
  textStyles: [],
  effectStyles: [],
});

// A token carries the name of a group: name conflict.
const documentWithConflict = () => ({
  fileName: "Canopée B2B",
  collections: [collectionPrimitives],
  locals: [
    variable("v1", "Couleur/Bleu", "COLOR", { r: 0, g: 0, b: 0.5 }),
    variable("v2", "Couleur/Bleu/clair", "COLOR", { r: 1, g: 1, b: 1 }),
    variable("v3", "Espacement/m", "FLOAT", 16, ["GAP"]),
  ],
  textStyles: [],
  effectStyles: [],
});

// A variable whose reading fails as soon as breakDocument() is called: the plugin then
// reports an error to the UI.
const breakableDocument = () => {
  let broken = false;
  const document = healthyDocument();
  document.locals.push({
    id: "v99",
    get name() {
      if (broken) throw new Error("lecture impossible");
      return "spacing/4";
    },
    resolvedType: "FLOAT",
    variableCollectionId: "C1",
    scopes: ["GAP"],
    valuesByMode: { m1: 4 },
  });
  return {
    document,
    breakDocument: () => {
      broken = true;
    },
  };
};

// The tokens file that a document would produce, to serve as the code file.
const exportJson = async (doc: MockData) => {
  const plugin = createMockPlugin(doc);
  await plugin.send({ type: "ready" });
  await plugin.send({ type: "download" });
  return plugin.lastMessage().json;
};

// ----------------------------------------------------------------------- UI

const clone = (m: MockData) => JSON.parse(JSON.stringify(m));
const normalize = (text: MockData) => text.replace(/\s+/g, " ").trim();

const openedWindows: MockData[] = [];

// Opens dist/ui.html in jsdom, connected to a mock plugin on the given document.
// repoReference: text of the code file on GitHub, or null if it is not there.
// pulls: open PRs returned by GitHub. versions: text of the code file at
// each published version, by number.
const openUi = async (
  figmaDocument: MockData,
  {
    repoReference = null,
    pulls = [],
    versions = {},
  }: {
    repoReference?: string | null;
    pulls?: MockData[];
    versions?: Record<string, string>;
  } = {},
) => {
  const plugin = createMockPlugin(figmaDocument);
  const errors: MockData[] = [];
  const downloads: MockData[] = [];
  const copies: MockData[] = [];
  const fetchCalls: MockData[] = [];
  let inProgress = 0;
  const track = (promise: MockData) => {
    inProgress++;
    return promise.then(
      () => {
        inProgress--;
      },
      (e: MockData) => {
        inProgress--;
        errors.push(e);
      },
    );
  };

  const virtualConsole = new VirtualConsole();
  virtualConsole.on("jsdomError", (e) => errors.push(e));

  const dom = new JSDOM(HTML, {
    runScripts: "dangerously",
    pretendToBeVisual: true,
    url: "https://plugin.test/",
    virtualConsole,
    beforeParse(window) {
      // Any uncaught JavaScript error on the UI side makes the test fail.
      window.addEventListener("error", (e) =>
        errors.push(e.error || new Error(e.message)),
      );
      window.addEventListener("unhandledrejection", (e) =>
        errors.push(e.reason),
      );

      // UI to plugin: parent.postMessage({ pluginMessage }, '*') calls
      // figma.ui.onmessage, outside the caller's stack as in Figma.
      Object.defineProperty(window, "postMessage", {
        configurable: true,
        value: (m: MockData) => {
          typesToPlugin.add(m.pluginMessage.type);
          track(
            Promise.resolve().then(() => plugin.send(clone(m.pluginMessage))),
          );
        },
      });
      // Plugin to UI: figma.ui.postMessage(m) arrives as a message event.
      plugin.connectUi((m) => {
        typesToUi.add(m.type);
        window.dispatchEvent(
          new window.MessageEvent("message", {
            data: { pluginMessage: clone(m) },
          }),
        );
      });

      // GitHub, without a network: fixed responses depending on the address called.
      const response = (status: MockData, bodyHtml: MockData) => ({
        ok: status >= 200 && status < 300,
        status,
        text: async () => bodyHtml,
        json: async () => JSON.parse(bodyHtml),
      });
      window.fetch = (url) => {
        fetchCalls.push(String(url));
        const address = String(url);
        let rep;
        if (
          address.startsWith("https://api.github.com/") &&
          address.includes("/pulls")
        )
          rep = response(200, JSON.stringify(pulls));
        else if (
          address.startsWith("https://api.github.com/") &&
          address.includes("/tags")
        )
          rep = response(
            200,
            JSON.stringify([
              { name: "2.0.0" },
              { name: "2.1.0" },
              { name: "v-ancienne" },
            ]),
          );
        else if (address.startsWith("https://raw.githubusercontent.com/")) {
          const version = Object.keys(versions).find((v) =>
            address.includes(`/${v}/`),
          );
          if (version) rep = response(200, versions[version]);
          else
            rep =
              repoReference === null
                ? response(404, "")
                : response(200, repoReference);
        } else
          return Promise.reject(
            new Error(`unexpected network call: ${address}`),
          );
        return track(Promise.resolve()).then(() => rep);
      };

      // What jsdom does not provide.
      window.URL.createObjectURL = () => "blob:essai";
      window.URL.revokeObjectURL = () => {};
      window.scrollTo = () => {};
      // The clipboard, which jsdom does not provide: each copied text is kept.
      Object.defineProperty(window.navigator, "clipboard", {
        configurable: true,
        value: {
          writeText: async (text: MockData) => {
            copies.push(text);
          },
        },
      });
      // The pointer capture by the handle, which jsdom does not provide either.
      window.Element.prototype.setPointerCapture = () => {};
      window.Element.prototype.hasPointerCapture = () => true;
      window.Element.prototype.releasePointerCapture = () => {};
      window.HTMLAnchorElement.prototype.click = function () {
        downloads.push({ href: this.href, name: this.download });
      };
    },
  });

  const { window } = dom;
  const { document } = window;
  openedWindows.push(window);

  // Waits until the exchanges between the UI, the plugin and GitHub are over.
  const settle = async () => {
    for (let i = 0; i < 5; i++) {
      do {
        await new Promise((resolve) => setTimeout(resolve, 0));
      } while (inProgress > 0);
    }
  };
  await settle();

  // The text the person sees: without script or style, without what is hidden.
  const text = () => {
    const copy = document.body.cloneNode(true) as HTMLElement;
    copy
      .querySelectorAll("script, style, [hidden]")
      .forEach((e: MockData) => e.remove());
    return normalize(copy.textContent);
  };
  const clickable = (label: MockData, selector: MockData) => {
    const matches = [...document.querySelectorAll(selector)].filter((e) =>
      normalize(e.textContent).startsWith(label),
    );
    expect(matches.length, `${matches.length} elements "${label}"`).toBe(1);
    return matches[0];
  };
  const button = (label: MockData) => clickable(label, "button");
  const clickOn = async (element: MockData) => {
    element.click();
    await settle();
  };
  const noError = () => {
    expect(errors.map((e) => (e && e.message) || String(e))).toStrictEqual([]);
  };

  return {
    plugin,
    window,
    document,
    text,
    button,
    clickable,
    clickOn,
    settle,
    noError,
    downloads,
    copies,
    fetchCalls,
  };
};

afterEach(() => {
  while (openedWindows.length) openedWindows.pop().close();
});

// ------------------------------------------------------------------ journeys

describe("UI and plugin: end-to-end journeys", () => {
  it("(a) on opening, the header shows the file name and its figures", async () => {
    const ui = await openUi(healthyDocument());
    expect(ui.text()).toContain("Design tokens");
    expect(ui.text()).toContain("Fondations Canopée");
    expect(ui.text()).toContain("1 collection, 4 variables, 0 style");
    expect(ui.text()).not.toContain("Lecture du fichier");
    expect(ui.text()).not.toContain("Vérification…");
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it('(b) a name conflict shows the "Noms en conflit" section', async () => {
    const ui = await openUi(documentWithConflict());
    expect(ui.text()).toContain("Noms en conflit");
    expect(ui.text()).toContain("Couleur/Bleu/clair");
    expect(ui.text()).toContain("À corriger");
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it('(c) in "Fondations Canopée" without problems, "Déposer sur GitHub" opens the submission view and "← Retour" goes back', async () => {
    const ui = await openUi(healthyDocument());
    const doSubmit = ui.button("Déposer sur GitHub");
    expect(doSubmit.disabled).toBe(false);
    expect(ui.text()).not.toContain("Avant de déposer");
    const normalView = ui.text();

    await ui.clickOn(doSubmit);
    expect(ui.text()).toContain("Avant de déposer");
    expect(ui.text()).toContain("Copier et ouvrir");
    expect(ui.text()).not.toContain("Télécharger le fichier");
    const submitView = ui.text();

    await ui.clickOn(ui.button("← Retour"));
    expect(ui.text()).not.toContain("Avant de déposer");
    expect(ui.text()).toContain("Télécharger le fichier");
    expect(ui.button("Déposer sur GitHub").disabled).toBe(false);
    expect(ui.text()).toBe(normalView);
    ui.noError();
    expect({ normalView, submitView, back: ui.text() }).toMatchSnapshot();
  });

  it('(d) "Télécharger le fichier": the plugin answers, a file is offered, no error', async () => {
    const ui = await openUi(healthyDocument());
    await ui.clickOn(ui.button("Télécharger le fichier"));
    expect(ui.downloads).toEqual([
      { href: "blob:essai", name: "design-tokens-canopee.resolver.json" },
    ]);
    expect(ui.text()).toContain(
      "design-tokens-canopee.resolver.json téléchargé",
    );
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it("(e) the resize messages of the UI reach the plugin", async () => {
    const ui = await openUi(healthyDocument());
    // On opening, the UI asks for its height: the plugin resizes the window.
    expect(ui.plugin.resizes.length).toBeGreaterThan(0);
    const before = ui.plugin.resizes.length;
    // A double click on the handle sends "auto size" to the plugin, which
    // resizes the window then asks the UI for a height recalculation.
    const handle = ui.document.querySelector(
      '[aria-label="Redimensionner la fenêtre"]',
    )!;
    expect(handle, "handle not found").toBeTruthy();
    handle.dispatchEvent(
      new ui.window.MouseEvent("dblclick", { bubbles: true }),
    );
    await ui.settle();
    expect(ui.plugin.resizes.length).toBeGreaterThan(before);
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it('(f) the comparison with the code file shows the "Changements" card', async () => {
    // The code has a different color, one more spacing and one fewer than Figma.
    const repoReference = await exportJson(
      healthyDocument({
        blue: { r: 0, g: 0, b: 0.5 },
        noSpacing: true,
        withExtra: true,
      }),
    );
    const ui = await openUi(healthyDocument(), { repoReference });
    expect(
      ui.fetchCalls.some((u) =>
        u.startsWith("https://raw.githubusercontent.com/"),
      ),
    ).toBe(true);
    expect(ui.text()).toContain("Changements");
    const collapsed = ui.text();

    // The card is collapsed on opening: a click on its title expands it.
    await ui.clickOn(ui.clickable("Changements", '[role="button"]'));
    expect(ui.text()).toContain("Comparé à");
    expect(ui.text()).toContain("le code actuel");
    expect(ui.text()).toContain("AJOUTÉ");
    expect(ui.text()).toContain("MODIFIÉ");
    expect(ui.text()).toContain("SUPPRIMÉ");
    expect(ui.text()).toContain("color/blue/700");
    ui.noError();
    expect({ collapsed, expanded: ui.text() }).toMatchSnapshot();
  });

  it("a description that changes alone is shown as modified, not as identical to the code", async () => {
    const reference = JSON.parse(await exportJson(healthyDocument()));
    reference.sets.Primitives.sources[0].color.blue["700"].$description =
      "Ancien texte";
    const ui = await openUi(healthyDocument(), {
      repoReference: JSON.stringify(reference),
    });
    await ui.clickOn(ui.clickable("Changements", '[role="button"]'));
    expect(ui.text()).not.toContain("identiques au code");
    expect(ui.text()).toContain("MODIFIÉ");
    expect(ui.text()).toContain("description");
    expect(ui.text()).toContain("Ancien texte");
    ui.noError();
  });

  it('full submission: "Copier et ouvrir", "Copier le message", then "Terminé"', async () => {
    const ui = await openUi(healthyDocument());
    await ui.clickOn(ui.button("Déposer sur GitHub"));
    expect(ui.plugin.openedUrls).toStrictEqual([]);
    const beforeCopy = ui.text();

    // The file is copied, then GitHub opens at the address given by the plugin.
    await ui.clickOn(ui.button("Copier et ouvrir"));
    expect(ui.copies).toHaveLength(1);
    expect(JSON.parse(ui.copies[0]).name).toBe("Fondations Canopée");
    expect(ui.plugin.openedUrls).toHaveLength(1);
    expect(ui.plugin.openedUrls[0]).toMatch(/^https:\/\/github\.com\//);
    expect(ui.button("Copier le message").disabled).toBe(false);
    const afterOpening = ui.text();

    // The commit message is copied: nothing in the repo, so all tokens are added.
    await ui.clickOn(ui.button("Copier le message"));
    expect(ui.copies).toHaveLength(2);
    expect(ui.copies[1]).toBe("feat(canopee): update design tokens");
    expect(ui.text()).toContain("Une fois la PR créée");
    const afterCopy = ui.text();

    await ui.clickOn(ui.button("Terminé"));
    expect(ui.text()).not.toContain("Avant de déposer");
    expect(ui.text()).toContain("Télécharger le fichier");
    expect(ui.button("Déposer sur GitHub").disabled).toBe(false);
    expect(ui.plugin.openedUrls).toHaveLength(1);
    ui.noError();
    expect({
      beforeCopy,
      afterOpening,
      afterCopy,
      final: ui.text(),
    }).toMatchSnapshot();
  });

  it("manual resize: the handle saves the size in the machine storage", async () => {
    const ui = await openUi(healthyDocument());
    const handle = ui.document.querySelector(
      '[aria-label="Redimensionner la fenêtre"]',
    )!;
    expect(handle, "handle not found").toBeTruthy();
    expect(ui.plugin.clientStorage.size).toBe(undefined);
    handle.dispatchEvent(
      new ui.window.PointerEvent("pointerdown", {
        bubbles: true,
        pointerId: 1,
      }),
    );
    handle.dispatchEvent(
      new ui.window.PointerEvent("pointermove", {
        bubbles: true,
        pointerId: 1,
        clientX: 512,
        clientY: 632,
      }),
    );
    handle.dispatchEvent(
      new ui.window.PointerEvent("pointerup", { bubbles: true, pointerId: 1 }),
    );
    await ui.settle();
    expect(clone(ui.plugin.clientStorage.size)).toStrictEqual({
      width: 520,
      height: 640,
    });
    expect(ui.plugin.resizes.at(-1)).toStrictEqual([520, 640]);
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it('"Comparé à" menu: choosing a published version compares with the code file of that version', async () => {
    const repoReference = await exportJson(healthyDocument());
    const version = await exportJson(healthyDocument({ withExtra: true }));
    const ui = await openUi(healthyDocument(), {
      repoReference,
      versions: { "2.1.0": version },
    });
    await ui.clickOn(ui.clickable("Changements", '[role="button"]'));
    expect(ui.text()).toContain(
      "Aucun changement : les tokens sont identiques au code.",
    );
    const before = ui.text();

    const menu = ui.clickable("Comparé à", "label").control;
    const option = [...menu.options].find(
      (o) => normalize(o.textContent) === "la version 2.1.0",
    );
    expect(option, "version 2.1.0 missing from the menu").toBeTruthy();
    menu.value = option.value;
    menu.dispatchEvent(new ui.window.Event("change", { bubbles: true }));
    await ui.settle();

    expect(ui.fetchCalls.some((u) => u.includes("/2.1.0/"))).toBe(true);
    expect(ui.text()).not.toContain("Aucun changement");
    expect(ui.text()).toContain("SUPPRIMÉ");
    expect(ui.text()).toContain("spacing/8");
    const menuAfter = ui.clickable("Comparé à", "label").control;
    expect(normalize(menuAfter.selectedOptions[0].textContent)).toBe(
      "la version 2.1.0",
    );
    ui.noError();
    expect({ before, after: ui.text() }).toMatchSnapshot();
  });

  it("error reported by the plugin during a download: the UI displays it", async () => {
    const { document: doc, breakDocument } = breakableDocument();
    const ui = await openUi(doc);
    expect(ui.text()).not.toContain("impossible");
    breakDocument();
    await ui.clickOn(ui.button("Télécharger le fichier"));
    expect(ui.text()).toContain(
      "Téléchargement impossible : lecture impossible",
    );
    expect(ui.downloads).toStrictEqual([]);
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it("error reported by the plugin during the verification: the UI displays it", async () => {
    const { document: doc, breakDocument } = breakableDocument();
    breakDocument();
    const ui = await openUi(doc);
    expect(ui.text()).toContain("Vérification impossible : lecture impossible");
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });

  it('an open "update design tokens" PR blocks the submission: banner, disabled button, link to the PR', async () => {
    const pulls = [
      {
        number: 1500,
        title: "chore: autre sujet",
        html_url: "https://github.com/AxaFrance/design-system/pull/1500",
      },
      {
        number: 2091,
        title: "feat(canopee): update design tokens",
        html_url: "https://github.com/AxaFrance/design-system/pull/2091",
      },
    ];
    const ui = await openUi(healthyDocument(), { pulls });
    expect(ui.text()).toContain(
      "La PR #2091 attend d'être intégrée par un développeur.",
    );
    expect(ui.text()).not.toContain("#1500");
    expect(ui.button("Déposer sur GitHub").disabled).toBe(true);

    await ui.clickOn(ui.button("#2091"));
    expect(ui.plugin.openedUrls).toStrictEqual([
      "https://github.com/AxaFrance/design-system/pull/2091",
    ]);
    ui.noError();
    expect(ui.text()).toMatchSnapshot();
  });
});

// Figma reads dist/ui.html as a single string (__html__) and runs dist/code.js
// without any module system: a relative reference or an import would not resolve.
describe("files built for Figma", () => {
  it("dist/ui.html has no external script or stylesheet", () => {
    expect(HTML).not.toMatch(/<script[^>]*\ssrc\s*=/i);
    expect(HTML).not.toMatch(/<link[^>]*rel\s*=\s*["']?stylesheet/i);
    expect(HTML).not.toMatch(/<script[^>]*type\s*=\s*["']?module/i);
  });

  it("dist/code.js has no import or export", () => {
    const code = fs.readFileSync(
      path.join(HERE, "..", "dist", "code.js"),
      "utf8",
    );
    expect(code).not.toMatch(/^\s*(import|export)\b/m);
  });
});

// Must stay the last test of the file: it reads what the journeys above have exercised.
describe("message contract between UI and plugin", () => {
  it("each message type is exercised end to end, in both directions", () => {
    expect([...typesToPlugin].sort()).toStrictEqual(
      [...TYPES_UI_TO_PLUGIN].sort(),
    );
    expect([...typesToUi].sort()).toStrictEqual([...TYPES_PLUGIN_TO_UI].sort());
  });
});
