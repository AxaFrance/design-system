// Interface of the plugin Canopée, composants. Built by Vite and put inside dist/ui.html
// with src/ui/styles.css (npm run build).
import type {
  Card,
  PluginToUiMessage,
  Sentence,
  UiToPluginMessage,
  VersionView,
} from "../messages";
import type { IssueDetail } from "../types";

// A message of the plugin, by its type.
type Message<T extends PluginToUiMessage["type"]> = Extract<
  PluginToUiMessage,
  { type: T }
>;

// The elements are those of src/ui/ui.html, found by their id. A missing one is a mistake of the page.
const $ = (id: string): HTMLElement => {
  const element = document.getElementById(id);
  if (!element) throw new Error("missing element: " + id);
  return element;
};
// The checks look at what the element has, not at its class: the page is ours, and the tests
// of the interface give it simpler elements.
const isButton = (element: HTMLElement): element is HTMLButtonElement =>
  "disabled" in element;
const isInput = (element: HTMLElement): element is HTMLInputElement =>
  "checked" in element;
const isElement = (x: unknown): x is HTMLElement =>
  typeof x === "object" && x !== null && "dataset" in x;
const $button = (id: string): HTMLButtonElement => {
  const element = $(id);
  if (!isButton(element)) throw new Error("not a button: " + id);
  return element;
};
const $input = (id: string): HTMLInputElement => {
  const element = $(id);
  if (!isInput(element)) throw new Error("not a checkbox: " + id);
  return element;
};
// The closest element, from the target of an event.
const closest = (e: Event, selector: string): HTMLElement | null => {
  const target = e.target;
  if (!target || !("closest" in target) || typeof target.closest !== "function")
    return null;
  const found: unknown = target.closest(selector);
  return isElement(found) ? found : null;
};
const escapeHtml = (s: unknown): string =>
  String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
const send = (message: UiToPluginMessage): void =>
  parent.postMessage({ pluginMessage: message }, "*");
const plural = (n: number, word: string): string =>
  n + " " + word + (n > 1 ? "s" : "");
const pill = (n: number, word: string): string =>
  '<span class="pill"><b>' +
  n +
  "</b> " +
  word +
  (n > 1 ? "s" : "") +
  "</span>";

// Natural height of the content and of the actions, so that the window follows it.
// The height is measured without the stretching of the JSON: otherwise the window would never shrink again.
const adjustHeight = (): void => {
  document.body.classList.add("measuring");
  const height = 16 + $("content").offsetHeight + $("actions").offsetHeight;
  document.body.classList.remove("measuring");
  send({ type: "resize", height });
};

// ------------------------------------------------------- manual resizing

const handle = $("handle");
handle.addEventListener("pointerdown", (e: PointerEvent) => {
  handle.setPointerCapture(e.pointerId);
  document.body.classList.add("resizing");
});
handle.addEventListener("pointermove", (e: PointerEvent) => {
  if (!handle.hasPointerCapture(e.pointerId)) return;
  send({
    type: "resize-manual",
    width: Math.round(e.clientX + 8),
    height: Math.round(e.clientY + 8),
  });
});
handle.addEventListener("pointerup", (e: PointerEvent) => {
  handle.releasePointerCapture(e.pointerId);
  document.body.classList.remove("resizing");
});
handle.addEventListener("dblclick", () => send({ type: "auto-size" }));

// The targeted component and what was generated for it: an answer that arrives for a
// component we have left since then is dropped.
type Tab = "issues" | "json" | "changelog" | "changes";
interface State {
  id: string | null;
  json: string | null;
  file: string | null;
  changelogFile: string | null;
  issues: IssueDetail[];
  inProgress: boolean;
  tab: Tab;
  generated: boolean;
  version: VersionView | null;
  name: string;
  answer: "yes" | "no" | null;
  changelog: string | null;
  stale: boolean;
}
const state: State = {
  id: null,
  json: null,
  file: null,
  changelogFile: null,
  issues: [],
  inProgress: false,
  tab: "issues",
  generated: false,
  version: null,
  name: "",
  answer: null,
  changelog: null,
  stale: false,
};
const TABS: Tab[] = ["issues", "json", "changelog", "changes"];

// Without a selected component, the bottom bar only keeps its messages, and disappears if there are none.
const updateActions = (): void => {
  $("buttons").hidden = !state.id;
  $("actions").hidden =
    !state.id &&
    $("error").hidden &&
    $("success").hidden &&
    $("stale").hidden &&
    $("rules").hidden;
};
const showError = (m: string): void => {
  $("error").textContent = m;
  $("error").hidden = !m;
  updateActions();
  adjustHeight();
};
const showSuccess = (m: string): void => {
  $("success").textContent = m;
  $("success").hidden = !m;
  updateActions();
  adjustHeight();
};

// Before the generation: « Générer le JSON ». After: « Télécharger » and « Copier », and the icon that generates again.
// Both buttons act on the file of the open tab: the changelog in « Changelog », the JSON everywhere else.
const onChangelog = (): boolean => state.tab === "changelog";
function updateButtons(progress?: string): void {
  const generated = !!state.json;
  const blocked = generated && !state.stale && answerExpected();
  // stale JSON: only a new JSON can be exported, the main button regenerates it
  const regenerate = generated && state.stale;
  $("stale").hidden = !(generated && state.stale);
  $button("generate").disabled = state.inProgress || !state.id || blocked;
  $("generate-label").textContent = state.inProgress
    ? progress || "Génération en cours..."
    : blocked
      ? "Répondre à la question"
      : regenerate
        ? "Générer de nouveau"
        : !generated
          ? "Générer le JSON"
          : onChangelog()
            ? "Télécharger le changelog"
            : "Télécharger le JSON";
  $("copy-label").textContent = onChangelog()
    ? "Copier le changelog"
    : "Copier le JSON";
  // an SVG has no hidden property: go through the attribute
  $("icon-generate").toggleAttribute(
    "hidden",
    generated && !regenerate && !state.inProgress,
  );
  $("icon-download").toggleAttribute(
    "hidden",
    !generated || regenerate || state.inProgress,
  );
  $button("copy").hidden = !generated;
  $button("copy").disabled = state.inProgress || blocked || state.stale;
  $button("regenerate").hidden = !generated;
  $button("regenerate").disabled = state.inProgress;
  updateActions();
}

// The tabs: only the active panel is visible. Before the generation, only « À corriger » has content,
// the nomenclature check: « JSON », « Changelog » and « Changements » only appear afterwards.
// After the generation, « À corriger » stays only if it lists at least one issue.
const visibleTabs = (): Tab[] =>
  !state.json
    ? ["issues"]
    : state.issues.length
      ? TABS
      : TABS.filter((name) => name !== "issues");
function updateTabs(): void {
  const visible = state.id !== null;
  $("tabs").classList.toggle("title-only", !state.json);
  // the open tab has disappeared (no more issues after a new generation): the first tab takes over
  if (!visibleTabs().includes(state.tab)) state.tab = visibleTabs()[0];
  $("tabs").hidden = !visible;
  $("changes").hidden = !state.json;
  $("json-content").hidden = !state.json;
  $("changelog-content").hidden = !state.json;
  for (const name of TABS) {
    const b = $("tab-" + name);
    const active = name === state.tab;
    b.hidden = !visibleTabs().includes(name);
    b.setAttribute("aria-selected", active ? "true" : "false");
    b.tabIndex = active ? 0 : -1;
    $("panel-" + name).hidden = !visible || !active;
  }
}

function chooseTab(name: Tab): void {
  state.tab = name;
  updateTabs();
  updateButtons();
  adjustHeight();
}

const updateCounter = (name: "issues" | "changes", n: number): void => {
  $("counter-" + name).textContent = String(n);
  $("counter-" + name).hidden = !n;
};

const tabOf = (name: string | undefined): Tab | undefined =>
  TABS.find((t) => t === name);
$("tabs").onclick = (event) => {
  const b = closest(event, "button[data-tab]");
  const tab = b ? tabOf(b.dataset.tab) : undefined;
  if (tab) chooseTab(tab);
};
$("tabs").onkeydown = (event) => {
  if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
  const tabs = visibleTabs();
  const i = tabs.indexOf(state.tab);
  event.preventDefault();
  const next =
    tabs[
      (i + (event.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length
    ];
  chooseTab(next);
  $("tab-" + next).focus();
};

// One row per issue. With nodes to show, it is a button that selects them in Figma.
const issueRow = (i: IssueDetail, k: number): string => {
  const inVariants =
    i.variants > 1
      ? '<span class="msg">, dans ' + plural(i.variants, "variante") + "</span>"
      : "";
  const error =
    i.level === "error" ? '<span class="error-word">Erreur</span>' : "";
  const content =
    error +
    '<strong class="where">' +
    escapeHtml(i.location || i.where) +
    "</strong>" +
    inVariants +
    '<div class="msg">' +
    escapeHtml(i.message) +
    "</div>";
  const body =
    i.ids && i.ids.length
      ? '<button type="button" class="line" data-issue="' +
        k +
        '" title="' +
        escapeHtml(i.where) +
        '">' +
        content +
        "</button>"
      : '<div class="line" title="' +
        escapeHtml(i.where) +
        '">' +
        content +
        "</div>";
  return "<li>" + body + "</li>";
};

// The À corriger list: the nomenclature check before the export, the issues of the sheet after.
// The info issues are not displayed, they stay in the JSON.
function showIssues(issues: IssueDetail[]): void {
  state.issues = issues.filter((i) => i.level !== "info");
  $("issues-ok").hidden = state.issues.length > 0;
  $("issues-list").innerHTML = state.issues.map(issueRow).join("");
  updateCounter("issues", state.issues.length);
  adjustHeight();
}

$("issues-list").onclick = (event) => {
  const b = closest(event, "button[data-issue]");
  if (!b) return;
  const d = state.issues[Number(b.dataset.issue)];
  if (d && d.ids.length) send({ type: "select", ids: d.ids, id: state.id });
};

const clearResult = (): void => {
  state.stale = false;
  state.json = null;
  state.changelog = null;
  state.version = null;
  $("version-tile").hidden = true;
  $("tokens-tile").hidden = true;
  $("tiles").hidden = true;
  $("counters").hidden = false;
  $("divider").hidden = true;
  $("checkboxes").hidden = true;
  $("question").hidden = true;
  clearAnswer();
  $input("overhaul").checked = false;
  $input("sheet-md").checked = false;
  state.generated = false;
  state.tab = "issues";
  updateCounter("changes", 0);
  showSuccess("");
};

// The pills of the card: variants, properties, last version stored in the Figma file
// (none if the component has never been exported).
const updateCounters = (m: Card): void => {
  $("counters").innerHTML =
    pill(m.variants, "variante") +
    pill(m.properties, "propriété") +
    (m.latestVersion
      ? '<span class="pill">dernière version <b>' +
        escapeHtml(m.latestVersion) +
        "</b></span>"
      : '<span class="pill pill-neutral">jamais exporté</span>') +
    (m.viaInstance
      ? '<span class="pill pill-neutral">depuis une instance</span>'
      : "");
};

// The component was modified in Figma, or its name and variants changed: the card follows, nothing else moves.
function showCard(m: Message<"card">): void {
  if (m.id !== state.id) return;
  state.name = m.name;
  updateTitle();
  updateCounters(m);
}

function markStale(m: Message<"stale">): void {
  if (m.id !== state.id || !state.json) return;
  state.stale = true;
  showSuccess("");
  updateButtons();
  adjustHeight();
}

function showSelection(m: Message<"selection">): void {
  showError("");
  // same component (a click on an issue selects a layer inside it): we keep the result,
  // and the check runs again as long as nothing has been generated
  if (m.name && m.id === state.id) {
    if (!state.json) send({ type: "check" });
    return;
  }
  clearResult();
  state.id = m.name ? m.id : null;
  state.inProgress = false;
  updateButtons();
  $("empty").hidden = !!m.name;
  $("card").hidden = !m.name;
  $("issues-list").innerHTML = "";
  $("issues-ok").hidden = true;
  state.issues = [];
  updateCounter("issues", 0);
  updateTabs();
  if (!m.name) {
    adjustHeight();
    return;
  }
  state.name = m.name;
  updateTitle();
  // the last version stored in the Figma file, or none if the component has never been exported
  updateCounters(m);
  adjustHeight();
  send({ type: "check" });
}

function showCheck(m: Message<"check-result">): void {
  if (m.id !== state.id || state.json) return;
  showIssues(m.issues);
}

// First letter in lowercase, except for an acronym or a word in capitals.
const lowerFirst = (p: string): string =>
  /^[A-ZÀ-Ý][a-zà-ÿ]/.test(p) ? p.charAt(0).toLowerCase() + p.slice(1) : p;

// A sentence is a text, or a group: the touched variants as title, then their changes.
const changeCount = (sentences: Sentence[]): number =>
  sentences.reduce(
    (n, p) => n + (typeof p === "string" ? 1 : p.lines.length),
    0,
  );
const changeToHtml = (p: Sentence): string =>
  typeof p === "string"
    ? "<li>" + escapeHtml(lowerFirst(p)) + "</li>"
    : '<li><span class="group">' +
      escapeHtml(p.title) +
      "</span><ul>" +
      p.lines.map((l) => "<li>" + escapeHtml(l) + "</li>").join("") +
      "</ul></li>";
// The empty state of a panel, centered like « Rien à corriger »: an icon, a title and a help line.
const EQUAL_ICON =
  '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9.5h12M6 14.5h12" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>';
const NEW_ICON =
  '<svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4l1.9 4.6L18.5 10.5l-4.6 1.9L12 17l-1.9-4.6L5.5 10.5l4.6-1.9Z" fill="currentColor"/></svg>';
const emptyState = (icon: string, title: string, help: string): string =>
  '<div class="empty"><span class="empty-icon">' +
  icon +
  '</span><p class="empty-title">' +
  escapeHtml(title) +
  '</p><p class="help">' +
  escapeHtml(help) +
  "</p></div>";
function showChanges(c: { sentences: Sentence[] } | null): void {
  const area = $("changes");
  updateCounter("changes", c ? changeCount(c.sentences) : 0);
  if (!c) {
    area.innerHTML = emptyState(
      NEW_ICON,
      "Premier export",
      "Ce composant n'a pas encore de version précédente à comparer.",
    );
    return;
  }
  const since = "Depuis le dernier export";
  if (!c.sentences.length) {
    area.innerHTML = emptyState(
      EQUAL_ICON,
      "Aucun changement",
      "Le composant n'a pas changé depuis le dernier export.",
    );
    return;
  }
  if (c.sentences.length === 1 && typeof c.sentences[0] === "string") {
    area.innerHTML =
      '<p class="help">' +
      since +
      " : " +
      escapeHtml(lowerFirst(c.sentences[0])) +
      "</p>";
    return;
  }
  area.innerHTML =
    '<p class="help">' +
    since +
    ' :</p><ul class="help">' +
    c.sentences.map(changeToHtml).join("") +
    "</ul>";
}

// The tag of the retained level: the detected or chosen level, or the absence of a previous version or of a change.
const VERSION_TAGS: Record<string, [string, string]> = {
  major: ["MAJEURE", "tag-removed"],
  minor: ["MINEURE", "tag-modified"],
  patch: ["PATCH", "tag-added"],
};
function versionTag(v: VersionView): string {
  const [label, cssClass] = v.first
    ? ["PREMIÈRE VERSION", "tag-neutral"]
    : v.kept
      ? ["VERSION GARDÉE", "tag-neutral"]
      : v.none
        ? ["INCHANGÉE", "tag-neutral"]
        : (v.level !== null && VERSION_TAGS[v.level]) || ["", ""];
  return label ? '<span class="tag ' + cssClass + '">' + label + "</span>" : "";
}

// The name row: the component name, then after the generation the tag of the retained level.
function updateTitle(): void {
  const v = state.version;
  $("name").textContent = state.name;
  $("tag").innerHTML = v ? versionTag(v) : "";
}

// After the generation: the version next to the name, the design tokens pill, then the version box.
// The counters are only for before: when downloading, they bring nothing.
function showVersion(v: VersionView): void {
  state.version = v;
  updateTitle();
  $("counters").hidden = true;
  $("tiles").hidden = false;
  $("version-tile").hidden = false;
  $("tokens-tile").hidden = false;
  const tokens = $("tokens-value");
  tokens.textContent = v.tokensVersion || "non calculée";
  tokens.title = v.tokensVersion ? "" : "Voir l'onglet À corriger";
  tokens.classList.toggle("tokens-error", !v.tokensVersion);
  updateQuestion();
  updateButtons();
  adjustHeight();
}

// The version question, asked only when the JSON changed since a stored version.
// Without an answer, download and copy stay blocked.
const questionAsked = (): boolean =>
  !!(state.version && !state.version.first && state.version.detected);
function answerExpected(): boolean {
  return questionAsked() && !state.answer;
}
function clearAnswer(): void {
  state.answer = null;
  $input("delivered-yes").checked = false;
  $input("delivered-no").checked = false;
}
// The version that a checkbox gives, announced in its label: the next major, or the next patch.
const boxVersion = (current: string | null, level: string): string => {
  const [x, y, z] = String(current).split(".").map(Number);
  return level === "major" ? x + 1 + ".0.0" : x + "." + y + "." + (z + 1);
};
// The question, the version and the checkboxes, in the same box: Refonte complète only after « Oui ».
// Without a question (nothing changed), the box says « Aucun changement dans le composant. », followed by the only
// checkbox Fiche md modifiée: an overhaul necessarily changes the component, so it always goes through the question.
function updateQuestion(): void {
  const v = state.version;
  if (!v) return;
  const asked = questionAsked();
  $("question-delivered").hidden = !asked;
  if (asked) {
    $("question-title").textContent =
      "La version " + v.current + " a-t-elle été livrée aux devs ?";
    $("delivered-yes-label").textContent =
      "Oui, passer en " + (v.next || v.version);
    $("delivered-no-label").textContent = "Non, garder " + v.current;
  }
  $("version-value").textContent = answerExpected() ? "à choisir" : v.version;
  $("version-tile").classList.toggle("to-choose", answerExpected());
  $("checkbox-overhaul").hidden = v.first || !asked || state.answer !== "yes";
  $("checkbox-sheet-md").hidden = v.first || !!v.detected;
  $("checkboxes").hidden =
    $("checkbox-overhaul").hidden && $("checkbox-sheet-md").hidden;
  if (!v.first) {
    $("overhaul-label").textContent =
      "Refonte complète, passer en " + boxVersion(v.current, "major");
    $("sheet-md-label").textContent =
      "Fiche md modifiée, passer en " + boxVersion(v.current, "patch");
  }
  $("question-none").hidden = asked || $("checkboxes").hidden;
  $("divider").hidden = !asked || $("checkboxes").hidden;
  $("question").hidden = !asked && $("checkboxes").hidden;
  $("question").classList.toggle("to-answer", answerExpected());
}

// An answer or a checkbox changes the version: the plugin recomputes the JSON, which the interface displays.
const chooseVersion = (): void =>
  send({
    type: "choose-version",
    id: state.id,
    keep: state.answer === "no",
    overhaul: $input("overhaul").checked,
    sheetMd: $input("sheet-md").checked,
  });
const submitAnswer = (answer: "yes" | "no"): void => {
  state.answer = answer;
  if (answer === "no") $input("overhaul").checked = false;
  updateQuestion();
  updateButtons();
  adjustHeight();
  chooseVersion();
};
$input("delivered-yes").onchange = () => submitAnswer("yes");
$input("delivered-no").onchange = () => submitAnswer("no");
$input("overhaul").onchange = chooseVersion;
$input("sheet-md").onchange = chooseVersion;

function showChosenVersion(m: Message<"version">): void {
  if (m.id !== state.id || !state.json) return;
  state.json = m.json;
  state.changelog = m.changelog;
  $("json").innerHTML = colorize(m.json);
  $("changelog").textContent = m.changelog || "";
  showVersion(m.version);
}

function showSheet(m: Message<"sheet">): void {
  if (m.id !== state.id) return;
  state.inProgress = false;
  state.stale = false;
  state.json = m.json;
  state.changelog = m.changelog;
  state.file = m.file;
  state.changelogFile = m.changelogFile;
  clearAnswer();
  $input("overhaul").checked = false;
  $input("sheet-md").checked = false;
  showVersion(m.version);
  $("result-title").textContent = m.file;
  $("json").innerHTML = colorize(m.json);
  $("changelog").textContent = m.changelog || "";
  $("summary").textContent =
    plural(m.summary.variables, "variable") +
    ", " +
    plural(m.summary.overrides, "surcharge") +
    ", " +
    m.summary.kb +
    " Ko";
  showChanges(m.changes);
  showIssues(m.issues);
  // first generation: the first tab, « À corriger » if issues remain, « JSON » otherwise.
  // After that, the user's choice stays.
  if (!state.generated) {
    state.generated = true;
    state.tab = visibleTabs()[0];
  }
  updateTabs();
  showSuccess("");
  adjustHeight();
}

// Coloring of the JSON, like in an editor: keys, texts, numbers, true, false and null.
const JSON_TOKENS =
  /("(?:\\.|[^"\\])*")(\s*:)?|(-?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?)|\b(true|false|null)\b/g;
const colorize = (json: string): string => {
  let html = "";
  let end = 0;
  for (const m of json.matchAll(JSON_TOKENS)) {
    const index = m.index ?? 0;
    const cssClass = m[1]
      ? m[2]
        ? "key"
        : "string"
      : m[3]
        ? "number"
        : "keyword";
    html +=
      escapeHtml(json.slice(end, index)) +
      '<span class="j-' +
      cssClass +
      '">' +
      escapeHtml(m[1] || m[3] || m[4]) +
      "</span>" +
      (m[2] || "");
    end = index + m[0].length;
  }
  return html + escapeHtml(json.slice(end));
};

// Cmd+A or Ctrl+A in the JSON selects only it, not the whole window.
const selectContents = (el: HTMLElement): void => {
  const range = document.createRange();
  range.selectNodeContents(el);
  const s = document.getSelection();
  if (!s) return;
  s.removeAllRanges();
  s.addRange(range);
};
// Cmd+A selects only the text of the block, JSON or changelog.
const selectAll =
  (id: string) =>
  (event: KeyboardEvent): void => {
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "a") {
      event.preventDefault();
      selectContents($(id));
    }
  };
$("json").onkeydown = selectAll("json");
$("changelog").onkeydown = selectAll("changelog");
// Copy: navigator.clipboard when available, otherwise the selection of the text (JSON or changelog) and execCommand.
async function copyText(
  text: string,
  areaId?: "json" | "changelog",
): Promise<boolean> {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      /* refused: fallback below */
    }
  }
  chooseTab(areaId || "json");
  const area = $(areaId || "json");
  area.focus();
  selectContents(area);
  let ok = false;
  try {
    ok = document.execCommand("copy");
  } catch (e) {
    ok = false;
  }
  return ok;
}

function download(content: string, name: string | null, type?: string): void {
  const url = URL.createObjectURL(
    new Blob([content], { type: type || "application/json" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = String(name);
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}

const generate = (): void => {
  showError("");
  showSuccess("");
  state.inProgress = true;
  updateButtons();
  send({ type: "generate" });
};
// Figma blocks a second download triggered by the same click, so each file is downloaded from its tab.
// Only the JSON counts as an export.
$button("generate").onclick = () => {
  if (!state.json || state.stale) {
    generate();
    return;
  }
  if (onChangelog()) {
    if (!state.changelog) return;
    download(state.changelog, state.changelogFile, "text/markdown");
    showSuccess("Changelog téléchargé.");
    return;
  }
  download(state.json, state.file);
  showSuccess("JSON téléchargé.");
  send({ type: "record-export", id: state.id });
};
$button("regenerate").onclick = generate;
$button("copy").onclick = async () => {
  if (!state.json || state.stale) return;
  if (onChangelog()) {
    if (!state.changelog) return;
    if (await copyText(state.changelog, "changelog"))
      showSuccess("Changelog copié.");
    else
      showError(
        "La copie a échoué : sélectionner le texte et le copier à la main.",
      );
    return;
  }
  if (await copyText(state.json)) {
    showSuccess("JSON copié.");
    send({ type: "record-export", id: state.id });
  } else
    showError(
      "La copie a échoué : sélectionner le texte et le copier à la main.",
    );
};

// The messages of the plugin are read as they come: this is the border of the interface.
onmessage = (
  event: MessageEvent<{ pluginMessage?: PluginToUiMessage } | null>,
) => {
  const m = event.data && event.data.pluginMessage;
  if (!m) return;
  switch (m.type) {
    case "init":
      $("plugin-version").textContent =
        "Plugin " + m.version + ", format " + m.format;
      return;
    case "rules":
      $("rules").textContent = m.warning;
      $("rules").hidden = false;
      updateActions();
      adjustHeight();
      return;
    case "selection":
      return showSelection(m);
    case "check-result":
      return showCheck(m);
    case "progress":
      if (state.inProgress)
        updateButtons(
          "Génération en cours, " + m.done + " sur " + m.total + "...",
        );
      return;
    case "sheet":
      return showSheet(m);
    case "stale":
      return markStale(m);
    case "card":
      return showCard(m);
    case "version":
      return showChosenVersion(m);
    case "recompute-height":
      return adjustHeight();
    case "error":
      state.inProgress = false;
      updateButtons();
      // the download already took place: the success banner does not stay next to the error
      showSuccess("");
      showError(m.message);
      return;
    default: {
      const unhandled: never = m;
      return unhandled;
    }
  }
};
send({ type: "ui-ready" });
