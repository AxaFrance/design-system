// Interface of the plugin Canopée, design tokens. Built by Vite and put inside dist/ui.html
// with src/ui/styles.css (npm run build).
import type {
  DiffErrorMessage,
  DiffMeta,
  DiffResultMessage,
  FieldDiff,
  PluginToUiMessage,
  ReferenceSource,
  RepoUrls,
  Report,
  SubmitBlocker,
  UiToPluginMessage,
} from "../messages";

// The elements are those of ui.html, found by their id: no check, the page is ours.
const $ = <T extends HTMLElement = HTMLElement>(id: string) =>
  document.getElementById(id) as T;
const html = (s: unknown) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;");
const send = (message: UiToPluginMessage) =>
  parent.postMessage({ pluginMessage: message }, "*");

// A JSON value read from GitHub or from a message: an object to inspect before use.
const isRecord = (v: unknown): v is Record<string, unknown> =>
  typeof v === "object" && v !== null;
// The closest element, from the target of an event.
const closest = <T extends Element = Element>(e: Event, selector: string) =>
  e.target instanceof Element ? e.target.closest<T>(selector) : null;

// Natural height of the displayed view, without the space that pushes the actions down.
// Hidden blocks count for zero.
const adjustHeight = () =>
  send({
    type: "resize",
    height:
      16 +
      $("content").offsetHeight +
      $("actions").offsetHeight +
      $("submit-view").offsetHeight,
  });

// ------------------------------------------------------------------ manual resize

const handle = $("handle");
handle.addEventListener("pointerdown", (e) => {
  handle.setPointerCapture(e.pointerId);
  document.body.classList.add("resizing");
});
handle.addEventListener("pointermove", (e) => {
  if (!handle.hasPointerCapture(e.pointerId)) return;
  send({
    type: "resize-manual",
    width: Math.round(e.clientX + 8),
    height: Math.round(e.clientY + 8),
  });
});
handle.addEventListener("pointerup", (e) => {
  handle.releasePointerCapture(e.pointerId);
  document.body.classList.remove("resizing");
});
handle.addEventListener("dblclick", () => send({ type: "auto-size" }));

const count = (n: number, word: string) => `${n} ${word}${n > 1 ? "s" : ""}`;

const CHEVRON =
  '<svg class="chevron" width="12" height="12" viewBox="0 0 12 12" aria-hidden="true"><path d="M4.5 2.5 8 6l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

// A section of the report: a title in plain language, a help line saying
// what happens and what to do, then the list.
const section = (
  cssClass: string,
  title: string,
  help: string,
  items: string[],
  isOpen: boolean,
) =>
  !items.length
    ? ""
    : `<details class="${cssClass}"${isOpen ? " open" : ""}><summary><span class="section-title">${CHEVRON}${title}</span><span class="badge">${items.length}</span></summary>
       <p class="help section-help">${help}</p>
       <ul>${items.map((i) => `<li>${html(i)}</li>`).join("")}</ul></details>`;

// Order: blocking, naming, then the rest of the levels to check, then
// information. Blocking and naming sections are open by
// default, the rest collapsed. Nothing is displayed when there is nothing to report.
const renderVerification = (r: Report) => {
  const sections =
    section(
      "blocking",
      "Noms en conflit",
      "Deux tokens ou deux collections portent le même nom, ou un token porte le nom d'un groupe. Renommez-les dans Figma, sinon ils ne passent pas dans le code.",
      r.conflicts,
      true,
    ) +
    section(
      "blocking",
      "Liens cassés",
      "Ces tokens pointent vers une variable supprimée. Reliez-les à une autre variable dans Figma.",
      [
        ...r.missingAliases.map(
          (name: string) => `${name} : ne passe pas dans le code`,
        ),
        ...r.missingModeAliases,
      ],
      true,
    ) +
    section(
      "warning",
      "Noms à corriger",
      "Ces noms ne suivent pas les règles de nommage des primitives et des styles de texte.",
      r.naming,
      true,
    ) +
    section(
      "warning",
      "Scope à renseigner",
      "Sans scope, le plugin devine le type du token d'après son nom. Renseignez le scope dans Figma pour en être sûr.",
      r.inferredTypes,
      false,
    ) +
    section(
      "warning",
      "Caractères interdits",
      "Le code n'accepte ni les accolades ni le point dans un nom. Le plugin les remplace par un tiret. Renommez ces tokens dans Figma pour garder le même nom partout.",
      r.sanitizedNames,
      false,
    ) +
    section(
      "warning",
      "Liens vers une autre librairie",
      "Le code reçoit seulement leur valeur. Si la variable de l'autre librairie change, le token ne suivra pas.",
      r.externalAliases,
      false,
    ) +
    section(
      "warning",
      "Styles incomplets dans le code",
      "Le code reçoit ces styles, mais pas toutes leurs propriétés.",
      r.incompleteStyles || [],
      false,
    ) +
    section(
      "",
      "Sans description",
      "Ces tokens n'ont pas de description dans Figma, et le plugin ne sait pas en générer une. Ajoutez-en une si le nom ne dit pas à quoi sert le token.",
      r.noDescription,
      false,
    ) +
    section(
      "",
      "Absents du code",
      "Ces éléments n'ont pas d'équivalent dans le code, ils restent dans Figma.",
      r.excluded,
      false,
    );
  if (!sections) return "";
  const total =
    r.conflicts.length +
    r.missingAliases.length +
    r.missingModeAliases.length +
    r.naming.length +
    r.inferredTypes.length +
    r.sanitizedNames.length +
    r.externalAliases.length +
    (r.incompleteStyles || []).length;
  const title = total > 0 ? "À corriger" : "À savoir";
  const badge = total > 0 ? `<span class="badge">${total}</span>` : "";
  return `<div class="changes-card"><div class="changes-title"><p class="block-title">${title}</p>${badge}</div>${sections}</div>`;
};

// Help text under the buttons when the submission is blocked, depending on the reason.
const blockerText = (b: SubmitBlocker) => {
  if (b.reason === "file")
    return "Le dépôt se fait depuis la librairie Fondations Canopée.";
  if (b.reason === "empty") return "Aucun token à déposer dans ce fichier.";
  if (b.reason === "excluded")
    return b.n === 1
      ? "1 token bloque le dépôt. Corrigez-le d'abord, il est signalé en rouge dans À corriger."
      : `${b.n} tokens bloquent le dépôt. Corrigez-les d'abord, ils sont signalés en rouge dans À corriger.`;
  return "Disponible dès que l'emplacement du fichier sera fixé dans le repo.";
};

// State of the UI, in a single object: read and changed by the message
// handlers and the user's actions, rendered by render() (below).
// Buttons and their texts are computed only from view, step,
// action and blocker (see renderActions).
type DiffType = "added" | "modified" | "removed" | "deprecated";
// A reference file or a reference read from GitHub, as the plugin compares it.
interface LoadedReference {
  text: string;
  source: ReferenceSource;
  fileName?: string;
  fileDate?: number;
  version?: string;
}
// A file chosen by the designer: its text, its name and its date.
interface ReferenceFile {
  text: string;
  fileName?: string;
  fileDate?: number;
  referenceDate?: string;
}
interface State {
  view: "normal" | "submit";
  repoUrls: RepoUrls;
  report: Report | null;
  blocker: SubmitBlocker | null;
  verificationError: string | null;
  lastReference: LoadedReference | null;
  selection: { source: ReferenceSource; version?: string };
  diffResult: DiffResultMessage | null;
  failure: "not-in-code" | "version-missing" | "github" | null;
  comparisonError: string | null;
  validationError: string | null;
  comparisonCode:
    "in-progress" | "identical" | "changes" | "not-in-code" | "failed" | null;
  hiddenTypes: DiffType[];
  tokensPulls: { number: number; url: string }[];
  pullsAlreadyTried: boolean;
  repoAlreadyTried: boolean;
  repoComparisonInProgress: boolean;
  versionsList: string[] | null;
  versionsAlreadyTried: boolean;
  pendingFile: ReferenceFile | null;
  lastFile: ReferenceFile | null;
  step: "start" | "message";
  action: "submit" | "download" | null;
  result: { cssClass: string; text: string; closable?: boolean } | null;
  commitMessage: string | null;
  redesign: boolean;
  pendingUrl: string | null;
  jsonToCopy: string | null;
  recentCopy: boolean;
  messageHelp: "copy-ok" | "copy-failed" | null;
  changesCollapsed: boolean;
}
const state: State = {
  view: "normal", // 'normal', or 'submit': the submission view replaces everything else
  repoUrls: {
    urlReference: null,
    urlTags: null,
    urlPulls: null,
    urlVersion: null,
    firstVersion: null,
    urlEdition: null,
    urlCreation: null,
  },
  report: null, // last verification report received
  blocker: null, // what prevents the submission: { reason, n? } or null
  verificationError: null, // message if the verification failed
  lastReference: null, // { text, source, fileName, fileDate, version } of the last reference loaded
  selection: { source: "repo" }, // reference chosen in the "Comparé à" menu: { source, version? }
  diffResult: null, // last diff received: { added, modified, removed, deprecated, level, source, fileName, fileDate, version }
  failure: null, // 'not-in-code', 'version-missing' or 'github' if the chosen reference could not be read
  comparisonError: null, // message if the diff computation failed on the plugin side
  validationError: null, // message if the loaded reference is not a plugin export
  comparisonCode: null, // last comparison with the code: 'in-progress', 'identical', 'changes', 'not-in-code', 'failed', or null if unknown
  hiddenTypes: [], // types hidden in the list by their chip: 'added', 'modified', 'removed', 'deprecated'
  tokensPulls: [], // open tokens PRs: { number, url }
  pullsAlreadyTried: false, // true once the PRs have been read on opening
  repoAlreadyTried: false,
  repoComparisonInProgress: false,
  versionsList: null, // published versions, sorted from newest to oldest, or null until loaded
  versionsAlreadyTried: false,
  pendingFile: null, // { text, fileName, fileDate } of the file being compared
  lastFile: null, // the same, once the comparison succeeded, with its referenceDate
  step: "start", // 'start', or 'message' once the JSON is copied and GitHub is open
  action: null, // 'submit' or 'download' during an action, otherwise null
  result: null, // banner above the buttons: { cssClass, text, closable? }
  commitMessage: null, // commit message received at submission
  redesign: false, // "Refonte complète" checkbox of the submission view
  pendingUrl: null, // GitHub page to open once the JSON is copied
  jsonToCopy: null, // JSON displayed to copy by hand when the automatic copy failed
  recentCopy: false, // true for 2 seconds after the commit message is copied
  messageHelp: null, // 'copy-ok' or 'copy-failed' after a click on the message copy
  changesCollapsed: true, // Changements card collapsed to its title line, by default
};

// Rendering of the verification block from the state: nothing until a report
// has arrived, to keep the opening message.
const showVerification = () => {
  if (state.verificationError) {
    $("verification").innerHTML =
      `<div class="banner error">Vérification impossible : ${html(state.verificationError)}</div>`;
    $("verification").hidden = false;
    return;
  }
  if (!state.report) return;
  const content = renderVerification(state.report);
  $("verification").innerHTML = content;
  $("verification").hidden = !content;
};

// ----------------------------------------------------- comparison with the code

// Change types, in list order: diff key, word, color class.
const DIFF_TYPES: [DiffType, string, string][] = [
  ["added", "ajouté", "added"],
  ["modified", "modifié", "modified"],
  ["removed", "supprimé", "removed"],
  ["deprecated", "déprécié", "deprecated"],
];
const CHECKMARK =
  '<svg class="checkmark" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true"><path d="M2 5.2 4 7.2 8 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';
// The data-type of a chip is one of the keys of DIFF_TYPES.
const isDiffType = (type: string | undefined): type is DiffType =>
  DIFF_TYPES.some(([key]) => key === type);
const isTypeShown = (type: DiffType) => !state.hiddenTypes.includes(type);

// One chip per type present in the diff: a toggle button, active by default.
const diffChip = (
  type: DiffType,
  n: number,
  word: string,
  cssClass: string,
) => {
  const active = isTypeShown(type);
  return `<button type="button" class="chip ${cssClass}" data-type="${type}" aria-pressed="${active}">${active ? CHECKMARK : ""}${count(n, word)}</button>`;
};

// Under the main line, one line per sub-field of a modified composite,
// aligned with the path thanks to an invisible tag of the same size.
const diffFieldLine = (kindLabel: string, cssClass: string, c: FieldDiff) =>
  `<div class="diff-line field-line">` +
  `<span class="tag ${cssClass} tag-ghost" aria-hidden="true">${kindLabel}</span>` +
  `<span class="field-name">${html(c.field)}</span>` +
  `<span class="diff-value"><span class="value-removed">${html(c.before)}</span> → <span class="value-added">${html(c.after)}</span></span>` +
  `</div>`;

// item carries path, and depending on the case context (mode of a modifier context
// token, displayed under the path) and fields (detail of a modified composite,
// displayed as lines under the main line, see diffFieldLine).
const diffLine = (
  kindLabel: string,
  cssClass: string,
  item: DiffMeta & { path: string; fields?: FieldDiff[] },
  valueHtml: string,
) => {
  const mode = item.context
    ? `<div class="diff-mode">mode ${html(item.context)}</div>`
    : "";
  const fields = (item.fields || [])
    .map((c) => diffFieldLine(kindLabel, cssClass, c))
    .join("");
  return (
    `<div class="diff-line"><span class="tag ${cssClass}">${kindLabel}</span>` +
    `<div class="diff-path">${html(item.path).replace(/\//g, "/<wbr>")}${mode}</div>` +
    `<span class="diff-value">${valueHtml}</span></div>` +
    fields
  );
};

// French-style number without Intl: the day and month of a date, on two digits.
const formatDateFr = (date: string | number | Date) => {
  const d = new Date(date);
  const twoDigits = (n: number) => String(n).padStart(2, "0");
  return `${twoDigits(d.getDate())}/${twoDigits(d.getMonth() + 1)}`;
};

// Like formatDateFr, with local time: used for referenceDate, the exact
// time of the export of the reference, more precise than the date of the file.
const formatDateTimeFr = (date: string | number) => {
  const d = new Date(date);
  const twoDigits = (n: number) => String(n).padStart(2, "0");
  return `${formatDateFr(d)} à ${twoDigits(d.getHours())}h${twoDigits(d.getMinutes())}`;
};

// Label of the loaded file in the menu: the date alone, without the time, which
// is read separately under the footer (see footerDateDetail).
const fileLabel = (f: ReferenceFile) => {
  if (f.referenceDate !== undefined)
    return `l'export du ${formatDateFr(f.referenceDate)}`;
  if (f.fileDate !== undefined)
    return `l'export du ${formatDateFr(f.fileDate)}`;
  return f.fileName;
};

// Full date of the loaded file, when it is known: under the menu, which
// only carries the short date. Only for a file.
const footerDateDetail = () => {
  if (
    state.selection.source === "file" &&
    state.lastFile &&
    state.lastFile.referenceDate !== undefined
  ) {
    return `<p class="help diff-footer-help">Export du ${formatDateTimeFr(state.lastFile.referenceDate)}</p>`;
  }
  return "";
};

// Card footer: a single menu, which says what is being compared and allows
// changing it, always displayed. The current code, the published versions when they
// are loaded, the last loaded file, and "un autre fichier…".
const changesFooter = () => {
  const { source, version } = state.selection;
  const option = (value: string, label: string | undefined, chosen: boolean) =>
    `<option value="${html(value)}"${chosen ? " selected" : ""}>${html(label)}</option>`;
  const options = [option("repo", "le code actuel", source === "repo")];
  for (const v of state.versionsList || [])
    options.push(
      option(v, `la version ${v}`, source === "version" && version === v),
    );
  if (state.lastFile)
    options.push(option("file", fileLabel(state.lastFile), source === "file"));
  options.push(option("other-file", "un autre fichier…", false));
  return (
    `<div class="diff-footer"><label class="help" for="reference-select">Comparé à</label>` +
    `<select id="reference-select" class="reference-select">${options.join("")}</select></div>` +
    footerDateDetail()
  );
};

// Level tag, next to the title: same colors as the list, a higher
// level borrows those of a more visible change.
const LEVEL_LABEL: Record<string, [string, string, string] | undefined> = {
  major: [
    "MAJEUR",
    "tag-removed",
    "Une refonte complète des tokens : version majeure.",
  ],
  minor: [
    "MINEUR",
    "tag-modified",
    "Un ou plusieurs tokens ajoutés, supprimés ou dépréciés, ou dont le type change : version mineure.",
  ],
  patch: [
    "PATCH",
    "tag-added",
    "Une ou plusieurs valeurs ou descriptions modifiées : patch.",
  ],
};
// Compact reminder of the non-zero counters, displayed in the sticky header.
const compactSummary = (d?: DiffResultMessage | null) => {
  if (!d) return "";
  const pieces = [
    [d.added, "ajouté", "added"],
    [d.modified, "modifié", "modified"],
    [d.removed, "supprimé", "removed"],
    [d.deprecated, "déprécié", "deprecated"],
  ]
    .filter(([list]) => list.length)
    .map(
      ([list, word, cssClass]) =>
        `<span class="${cssClass}">${list.length} ${word}${list.length > 1 ? "s" : ""}</span>`,
    );
  return pieces.length
    ? `<span class="compact-summary">${pieces.join(", ")}</span>`
    : "";
};
const changesTitle = (level?: string | null, d?: DiffResultMessage) => {
  const [label, cssClass, title] = (level && LEVEL_LABEL[level]) || [];
  const kindLabel = label
    ? `<span class="tag ${cssClass}" title="${title}">${label}</span>`
    : "";
  const collapsed = state.changesCollapsed;
  return (
    `<div class="changes-title${collapsed ? " collapsed" : ""}" role="button" tabindex="0" aria-expanded="${!collapsed}">` +
    `<span class="section-title">${CHEVRON}<span class="block-title">Changements</span></span>${compactSummary(d)}${kindLabel}</div>`
  );
};

const renderDiffBody = (d: DiffResultMessage) => {
  const total =
    d.added.length + d.modified.length + d.removed.length + d.deprecated.length;
  if (total === 0) {
    return `<p class="diff-no-change">${d.source === "repo" ? IDENTICAL_TO_CODE_TEXT : "Aucun changement : les tokens sont identiques à la version comparée."}</p>`;
  }
  const present = DIFF_TYPES.filter(([type]) => d[type].length);
  const chips =
    '<div class="diff-chips">' +
    present
      .map(([type, word, cssClass]) =>
        diffChip(type, d[type].length, word, cssClass),
      )
      .join("") +
    "</div>";
  const nextVersionHtml = d.nextVersion
    ? `<p class="help next-version">Prochaine version : ${html(d.nextVersion)}</p>`
    : "";
  const lines = <T>(type: DiffType, list: T[]): T[] =>
    isTypeShown(type) ? list : [];
  const noType = present.every(([type]) => !isTypeShown(type));
  const bodyHtml =
    '<div class="diff-list">' +
    (noType
      ? '<p class="help">Sélectionnez au moins un type de changement.</p>'
      : "") +
    lines("added", d.added)
      .map((c) =>
        diffLine(
          "AJOUTÉ",
          "tag-added",
          c,
          `<span class="value-added">${html(c.value)}</span>`,
        ),
      )
      .join("") +
    lines("modified", d.modified)
      .map((c) =>
        diffLine(
          "MODIFIÉ",
          "tag-modified",
          c,
          c.fields && c.fields.length
            ? html(c.after)
            : `<span class="value-removed">${html(c.before)}</span> → <span class="value-added">${html(c.after)}</span>`,
        ),
      )
      .join("") +
    lines("removed", d.removed)
      .map((c) =>
        diffLine(
          "SUPPRIMÉ",
          "tag-removed",
          c,
          `<span class="value-removed">${html(c.value)}</span>`,
        ),
      )
      .join("") +
    lines("deprecated", d.deprecated)
      .map((c) => diffLine("DÉPRÉCIÉ", "tag-deprecated", c, html(c.value)))
      .join("") +
    "</div>";
  return chips + nextVersionHtml + bodyHtml;
};

const IDENTICAL_TO_CODE_TEXT =
  "Aucun changement : les tokens sont identiques au code.";

// What the chosen reference could not provide, in plain language.
const FAILURE_TEXTS = {
  "not-in-code":
    "Les tokens ne sont pas encore dans le code. Au premier dépôt, ils seront tous ajoutés.",
  "version-missing":
    "Cette version ne contient pas encore de fichier de tokens.",
  github: "Comparaison impossible : GitHub ne répond pas.",
};

// The Changements card is always rendered, with its menu in the footer. Its body
// says where the comparison stands: in progress, failed, or a diff (with or without
// changes). An invalid reference keeps the previous diff, with the reason
// in red below.
const renderChanges = () => {
  const validationError = state.validationError
    ? `<p class="reference-error">${html(state.validationError)}</p>`
    : "";
  let title = changesTitle();
  const collapsed = state.changesCollapsed;
  let bodyHtml = validationError;
  if (state.repoComparisonInProgress) {
    bodyHtml = '<p class="help">Comparaison avec le code…</p>';
  } else if (state.comparisonError) {
    bodyHtml = `<p class="reference-error">Comparaison impossible : ${html(state.comparisonError)}</p>`;
  } else if (state.failure) {
    bodyHtml = `<p class="help">${FAILURE_TEXTS[state.failure]}</p>`;
  } else if (state.diffResult) {
    title = changesTitle(state.diffResult.level, state.diffResult);
    bodyHtml = renderDiffBody(state.diffResult) + validationError;
  }
  // When collapsed, the card only keeps its title line.
  $("changes").innerHTML =
    `<div class="changes-card${collapsed ? " collapsed-card" : ""}" id="changes-card">${title}${collapsed ? "" : bodyHtml + changesFooter()}</div>`;
};

// Renders the three blocks driven by the state (verification, changes, actions),
// then adjusts the height once.
// Height of the top block, used for the position of sticky card headers,
// and line under this block as soon as the page has scrolled.
const updateTopHeight = () =>
  document.documentElement.style.setProperty(
    "--top-height",
    $("sticky-top").offsetHeight + "px",
  );
updateTopHeight();
if (typeof ResizeObserver === "function")
  new ResizeObserver(updateTopHeight).observe($("sticky-top"));
const updateTopLine = () =>
  $("sticky-top").classList.toggle(
    "scrolled",
    (document.body.scrollTop || document.documentElement.scrollTop) > 0,
  );
document.body.addEventListener("scroll", updateTopLine, { passive: true });
window.addEventListener("scroll", updateTopLine, { passive: true });

// After each render, tracks the card headers: "stuck" when the header
// is stuck at the top, "with-summary" when the counters have scrolled out at the top.
let observers: IntersectionObserver[] = [];
const observeHeaders = () => {
  observers.forEach((o) => o.disconnect());
  observers = [];
  if (typeof IntersectionObserver !== "function") return;
  // Headers stick under the top block: the observed area starts under it.
  const topBlockHeight = $("sticky-top").offsetHeight;
  document.querySelectorAll<HTMLElement>(".changes-title").forEach((header) => {
    const stuck = new IntersectionObserver(
      ([e]) =>
        header.classList.toggle(
          "stuck",
          e.intersectionRatio < 1 && e.boundingClientRect.top < topBlockHeight,
        ),
      { threshold: [1], rootMargin: `-${topBlockHeight}px 0px 0px 0px` },
    );
    stuck.observe(header);
    observers.push(stuck);
    const chips = header.parentElement?.querySelector(".diff-chips");
    if (!chips) return;
    const output = new IntersectionObserver(
      ([e]) =>
        header.classList.toggle(
          "with-summary",
          !e.isIntersecting && e.boundingClientRect.top < topBlockHeight,
        ),
      { rootMargin: `-${topBlockHeight + header.offsetHeight}px 0px 0px 0px` },
    );
    output.observe(chips);
    observers.push(output);
  });
};

const render = () => {
  showVerification();
  renderChanges();
  renderActions();
  observeHeaders();
  adjustHeight();
};

// Collapses or expands the Changements card, on click or by keyboard on its title line.
// The render rebuilds the title: focus is given back to it to stay on the keyboard.
const toggleChanges = () => {
  state.changesCollapsed = !state.changesCollapsed;
  render();
  const title = document.querySelector<HTMLElement>(
    "#changes-card .changes-title",
  );
  if (title && document.activeElement === document.body) title.focus();
};
// Click on a chip: hides the lines of its type, or shows them again.
const toggleType = (type: DiffType) => {
  state.hiddenTypes = isTypeShown(type)
    ? [...state.hiddenTypes, type]
    : state.hiddenTypes.filter((t) => t !== type);
  render();
  const chip = document.querySelector<HTMLElement>(
    `#changes-card .chip[data-type="${type}"]`,
  );
  if (chip) chip.focus();
};
$("changes").addEventListener("click", (e) => {
  const chip = closest<HTMLElement>(e, ".chip[data-type]");
  const type = chip?.dataset.type;
  if (isDiffType(type)) return toggleType(type);
  if (closest(e, '.changes-title[role="button"]')) toggleChanges();
});
$("changes").addEventListener("keydown", (e) => {
  if (
    (e.key === "Enter" || e.key === " ") &&
    e.target instanceof Element &&
    e.target.matches('.changes-title[role="button"]')
  ) {
    e.preventDefault();
    toggleChanges();
  }
});

// A JSON file dropped on the whole card becomes the comparison reference.
const cardUnder = (e: Event) => closest(e, "#changes-card");
$("changes").addEventListener("dragover", (e) => {
  const card = cardUnder(e);
  if (!card) return;
  e.preventDefault();
  card.classList.add("hover");
});
$("changes").addEventListener("dragleave", (e) => {
  const card = cardUnder(e);
  if (
    card &&
    !card.contains(e.relatedTarget instanceof Node ? e.relatedTarget : null)
  )
    card.classList.remove("hover");
});
$("changes").addEventListener("drop", (e) => {
  const card = cardUnder(e);
  if (!card) return;
  e.preventDefault();
  card.classList.remove("hover");
  const f = e.dataTransfer?.files && e.dataTransfer.files[0];
  if (f) readReferenceFile(f);
});
// Prevents the browser from opening a file dropped outside the card.
document.addEventListener("dragover", (e) => e.preventDefault());
document.addEventListener("drop", (e) => e.preventDefault());

$("changes").addEventListener("change", (e) => {
  if (
    !(e.target instanceof HTMLSelectElement) ||
    e.target.id !== "reference-select"
  )
    return;
  const v = e.target.value;
  if (v === "other-file") {
    // The menu goes back to the current reference as long as no file is chosen.
    renderChanges();
    $("reference-file").click();
  } else if (v === "repo") compareToCurrentCode();
  else if (v === "file") {
    if (state.lastFile)
      loadReference(
        state.lastFile.text,
        "file",
        state.lastFile.fileName,
        state.lastFile.fileDate,
      );
  } else compareToVersion(v);
});

const loadReference = (
  text: string,
  source: ReferenceSource,
  fileName?: string,
  fileDate?: number,
  version?: string,
) => {
  state.lastReference = { text, source, fileName, fileDate, version };
  if (source === "file") state.pendingFile = { text, fileName, fileDate };
  state.failure = null;
  state.comparisonError = null;
  send({
    type: "compare",
    reference: text,
    source,
    fileName,
    fileDate,
    version,
  });
};

const readReferenceFile = (f: File) => {
  const reader = new FileReader();
  reader.onload = () =>
    loadReference(String(reader.result), "file", f.name, f.lastModified);
  reader.readAsText(f);
};

$("reference-file").onchange = (e) => {
  const input = $<HTMLInputElement>("reference-file");
  const f = input.files?.[0];
  input.value = "";
  if (f) readReferenceFile(f);
};

// Start of a comparison with a reference read from GitHub: the menu already shows
// the chosen reference, and previous failures are forgotten.
const startComparison = (selection: State["selection"]) => {
  state.selection = selection;
  state.failure = null;
  state.comparisonError = null;
  state.validationError = null;
  state.repoComparisonInProgress = true;
  render();
};

// End without a diff: the chosen reference could not be read, the old diff disappears.
const failComparison = (failure: NonNullable<State["failure"]>) => {
  state.repoComparisonInProgress = false;
  state.failure = failure;
  state.diffResult = null;
  render();
};

// Comparison with the code of the configured branch: started on its own at the first
// verification (tryRepoComparison, once), or resumed from the <select>.
// Without a tokens path in the repo, nothing to read: no network call.
const compareToCurrentCode = async () => {
  if (!state.repoUrls.urlReference) {
    state.selection = { source: "repo" };
    state.comparisonError = null;
    state.validationError = null;
    state.comparisonCode = "not-in-code";
    failComparison("not-in-code");
    return;
  }
  state.comparisonCode = "in-progress";
  startComparison({ source: "repo" });
  try {
    const response = await fetch(state.repoUrls.urlReference);
    if (response.status === 404) {
      state.comparisonCode = "not-in-code";
      return failComparison("not-in-code");
    }
    if (!response.ok) throw new Error(String(response.status));
    const text = await response.text();
    state.repoComparisonInProgress = false;
    loadReference(text, "repo");
  } catch (e) {
    state.comparisonCode = "failed";
    failComparison("github");
  }
};

const tryRepoComparison = () => {
  if (state.repoAlreadyTried) return;
  state.repoAlreadyTried = true;
  compareToCurrentCode();
};

// Comparison with a published version chosen in the <select>.
const compareToVersion = async (tag: string) => {
  startComparison({ source: "version", version: tag });
  try {
    const template = state.repoUrls.urlVersion;
    if (template === null) throw new Error("the tokens path is not set");
    const response = await fetch(template.replace("{tag}", tag));
    if (response.status === 404) return failComparison("version-missing");
    if (!response.ok) throw new Error(String(response.status));
    const text = await response.text();
    state.repoComparisonInProgress = false;
    loadReference(text, "version", undefined, undefined, tag);
  } catch (e) {
    failComparison("github");
  }
};

// Order of x.y.z versions: negative if a is older than b.
const compareVersions = (a: string, b: string) => {
  const pa = a.split(".").map(Number),
    pb = b.split(".").map(Number);
  return pa[0] - pb[0] || pa[1] - pb[1] || pa[2] - pb[2];
};

// List of published versions, loaded once the repo is known, without
// those that precede the tokens file (firstVersion).
// If it fails, versionsList stays null: the footer keeps its original text.
// What is read from the GitHub API: the fields the plugin uses.
interface GithubTag {
  name: string;
}
interface GithubPull {
  number: number;
  title: string;
  html_url: string;
}
const loadVersionsList = async () => {
  if (state.versionsAlreadyTried || !state.repoUrls.urlTags) return;
  state.versionsAlreadyTried = true;
  try {
    const response = await fetch(state.repoUrls.urlTags);
    if (!response.ok) throw new Error(String(response.status));
    const body: unknown = await response.json();
    if (!Array.isArray(body)) throw new Error("unexpected answer from GitHub");
    const tags: GithubTag[] = body;
    const firstPublished = state.repoUrls.firstVersion;
    const versions = tags
      .map((t) => t.name)
      .filter(
        (n) =>
          /^\d+\.\d+\.\d+$/.test(n) &&
          (!firstPublished || compareVersions(n, firstPublished) >= 0),
      );
    versions.sort((a, b) => compareVersions(b, a));
    state.versionsList = versions;
    render();
  } catch (e) {
    state.versionsList = null;
  }
};

// Open tokens PRs, read when the plugin opens then on every view change:
// a PR created from the repo shows up on return, and disappears once merged.
// As long as a PR blocks the submission, they are also read again when the plugin regains
// focus, at most once per interval: with no possible view change, this is the
// only way to see the PR merged or closed. A failure keeps the last known list.
const TOKENS_PR_TITLES = [
  "update design tokens",
  "mettre à jour les design tokens",
];
const PULLS_REFRESH_INTERVAL = 15000;
let lastPullsRead = 0;
const loadTokensPulls = async () => {
  if (!state.repoUrls.urlPulls) return;
  lastPullsRead = Date.now();
  try {
    // no-cache: GitHub caches the list for 60 s, a closed PR would stay displayed.
    const response = await fetch(state.repoUrls.urlPulls, {
      cache: "no-cache",
    });
    if (!response.ok) throw new Error(String(response.status));
    const body: unknown = await response.json();
    if (!Array.isArray(body)) throw new Error("unexpected answer from GitHub");
    const pulls: GithubPull[] = body;
    state.tokensPulls = pulls
      .filter(
        (p) =>
          TOKENS_PR_TITLES.some((t) =>
            String(p.title).toLowerCase().includes(t),
          ) && String(p.html_url).startsWith("https://github.com/"),
      )
      .map((p) => ({ number: p.number, url: p.html_url }));
  } catch (e) {
    return;
  }
  updateActions();
};

// ---------------------------------------------------------------- buttons

// Copy to the clipboard: navigator.clipboard when it is available,
// otherwise an offscreen textarea, selected, and execCommand. Returns true if
// the copy succeeded. A single copy chain, for the JSON as for the message.
const copyText = async (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch (e) {
      /* refused: fallback below */
    }
  }
  const zone = document.createElement("textarea");
  zone.value = text;
  zone.setAttribute("readonly", "");
  zone.style.cssText = "position: fixed; left: -9999px; top: 0";
  document.body.appendChild(zone);
  zone.select();
  let copy = false;
  try {
    copy = document.execCommand("copy");
  } catch (e) {
    copy = false;
  }
  zone.remove();
  return copy;
};

const triggerDownload = (content: string, name: string) => {
  const url = URL.createObjectURL(
    new Blob([content], { type: "application/json" }),
  );
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
};

const HELP_COPY_FAILED =
  "Copie impossible. Le texte est sélectionné, faites Cmd+C (Ctrl+C sur Windows).";
const NOTHING_TO_SUBMIT_TEXT =
  "Rien à déposer : les tokens sont identiques au code.";
// Text of the banner for open tokens PRs, with a link to each one.
const INFO_ICON =
  '<svg class="info-icon" width="14" height="14" viewBox="0 0 14 14" aria-hidden="true"><circle cx="7" cy="7" r="6.25" fill="none" stroke="currentColor" stroke-width="1.5"/><path d="M7 6.2v3.6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/><circle cx="7" cy="4.2" r="0.9" fill="currentColor"/></svg>';
const tokensPullsText = (pulls: State["tokensPulls"]) => {
  const buttons = pulls.map(
    (p) =>
      `<button type="button" class="link" data-url="${html(p.url)}">#${html(p.number)}</button>`,
  );
  const links =
    buttons.length > 1
      ? buttons.slice(0, -1).join(", ") + " et " + buttons[buttons.length - 1]
      : buttons[0];
  return pulls.length === 1
    ? `La PR ${links} attend d'être intégrée par un développeur.`
    : `Les PR ${links} attendent d'être intégrées par un développeur.`;
};
const CODE_IN_PROGRESS_TEXT = "Comparaison avec le code en cours…";
const CODE_FAILURE_TEXT =
  "Comparaison avec le code impossible : GitHub ne répond pas. Réessayez dans un moment.";
const HELP_MESSAGE_STEP: Record<"copy-ok" | "copy-failed", string> = {
  "copy-ok":
    "Une fois la PR créée, un développeur la relit puis l'intègre. D'ici là, les changements restent affichés dans le plugin.",
  "copy-failed": HELP_COPY_FAILED,
};

// Help text under the buttons, and whether it is displayed as an alert.
const actionsHelp = () => {
  if (state.step === "message")
    return {
      text: state.messageHelp ? HELP_MESSAGE_STEP[state.messageHelp] : "",
    };
  if (state.blocker)
    return {
      text: blockerText(state.blocker),
      alert: state.blocker.reason === "excluded",
    };
  if (state.jsonToCopy !== null) return { text: HELP_COPY_FAILED };
  if (state.comparisonCode === "in-progress")
    return { text: CODE_IN_PROGRESS_TEXT };
  if (state.comparisonCode === "failed")
    return { text: CODE_FAILURE_TEXT, alert: true, retry: true };
  if (state.comparisonCode === "identical")
    return { text: NOTHING_TO_SUBMIT_TEXT };
  return { text: "" };
};

// Reminder line of the submission view: the level and the counters of the comparison
// with the code. Empty when this comparison is not available.
const submitReminder = () => {
  if (
    state.selection.source !== "repo" ||
    state.repoComparisonInProgress ||
    state.comparisonError
  )
    return "";
  if (state.failure === "not-in-code")
    return html(FAILURE_TEXTS["not-in-code"]);
  const d = state.diffResult;
  if (state.failure || !d || d.source !== "repo") return "";
  const summary = compactSummary(d);
  if (!summary) return IDENTICAL_TO_CODE_TEXT;
  const level = state.redesign ? "major" : d.level;
  const [label, cssClass, title] = (level && LEVEL_LABEL[level]) || [];
  const kindLabel = label
    ? `<span class="tag ${cssClass}" title="${title}">${label}</span>`
    : "";
  return kindLabel + summary;
};

// Renders the bottom area from the state alone: the step, the current action and the
// blocker decide the buttons. Elements are fixed and only updated,
// so as not to lose a text selection in progress.
const renderActions = () => {
  // Until the first verification has arrived, we do not know whether the submission is possible.
  const inAction = state.action !== null || state.report === null;
  const message = state.step === "message";
  const submit = state.view === "submit";

  // A single view at a time: the submission view hides the content and the footer.
  $("content").hidden = submit;
  $("actions").hidden = submit;
  $("submit-view").hidden = !submit;

  // The result banner follows the view: in the footer, or at the top of the submission view.
  const r = state.result;
  $(submit ? "submit-result" : "result").innerHTML = !r
    ? ""
    : `<div class="banner ${r.cssClass}"><span>${html(r.text)}</span>` +
      (r.closable
        ? '<button type="button" class="close" id="close" aria-label="Fermer" title="Fermer">×</button>'
        : "") +
      "</div>";
  $(submit ? "result" : "submit-result").innerHTML = "";

  // Normal view: a single button, with the reason for the blocker under it.
  // Nothing to submit when the tokens are identical to the code: blockers keep priority.
  // An open tokens PR also blocks: its banner, just above the button, says so.
  const pulls = state.tokensPulls;
  const identical =
    state.blocker === null && state.comparisonCode === "identical";
  $<HTMLButtonElement>("open-submit").disabled =
    inAction || state.blocker !== null || identical || pulls.length > 0;
  $("pr-in-progress").innerHTML = !pulls.length
    ? ""
    : `<div class="banner info">${INFO_ICON}<span>${tokensPullsText(pulls)}</span></div>`;
  const blocker = state.blocker
    ? blockerText(state.blocker)
    : identical
      ? NOTHING_TO_SUBMIT_TEXT
      : "";
  $("block-help").textContent = blocker;
  $("block-help").hidden = !blocker;
  $("block-help").classList.toggle(
    "help-alert",
    !!state.blocker && state.blocker.reason === "excluded",
  );

  const reminder = submitReminder();
  $("submit-reminder").innerHTML = reminder;
  $("submit-reminder").hidden = !reminder;

  // The checkbox decides the commit message: frozen once the message is prepared.
  $<HTMLInputElement>("redesign").checked = state.redesign;
  $<HTMLInputElement>("redesign").disabled = inAction || message;

  $("finish").hidden = !(message && state.messageHelp === "copy-ok");

  $<HTMLTextAreaElement>("json-field").hidden = state.jsonToCopy === null;
  if (
    state.jsonToCopy !== null &&
    $<HTMLTextAreaElement>("json-field").value !== state.jsonToCopy
  )
    $<HTMLTextAreaElement>("json-field").value = state.jsonToCopy;

  $("commit-block").hidden = !message;
  const commit = state.commitMessage || "";
  if ($<HTMLInputElement>("commit-field").value !== commit)
    $<HTMLInputElement>("commit-field").value = commit;

  // Current step: 1 at the start, 2 once GitHub is open, 4 once the message is copied.
  const currentStep = !message ? 1 : state.messageHelp === "copy-ok" ? 4 : 2;
  for (let i = 1; i <= 4; i++) {
    const li = $("step-" + i);
    li.className =
      "step " +
      (i < currentStep
        ? "done"
        : i === currentStep
          ? "in-progress"
          : "upcoming");
    if (i === currentStep) li.setAttribute("aria-current", "step");
    else li.removeAttribute("aria-current");
    const marker = li.querySelector(".marker");
    if (marker) marker.textContent = i < currentStep ? "✓" : String(i);
  }
  // The submission is always compared with the code: no submission while this comparison is in progress, failed or identical.
  const codeUnusable =
    state.comparisonCode !== null &&
    ["in-progress", "failed", "identical"].includes(state.comparisonCode);
  $<HTMLButtonElement>("submit").disabled =
    inAction || message || state.blocker !== null || codeUnusable;
  $<HTMLButtonElement>("copy-message").textContent = state.recentCopy
    ? "Copié"
    : "Copier le message";
  $<HTMLButtonElement>("copy-message").disabled = inAction || !message;
  // At the message step, only the copy and "Recommencer le dépôt" are useful.
  // The download, at the top right, does not depend on the submission.
  $<HTMLButtonElement>("download").disabled =
    inAction || (state.blocker !== null && state.blocker.reason === "empty");

  // Before the copy, the help explains step 1 and is displayed right under it; afterwards, under the list.
  const help = actionsHelp();
  const target = $(message ? "buttons-help" : "step-1-help");
  const other = $(message ? "step-1-help" : "buttons-help");
  target.innerHTML =
    html(help.text) +
    (help.retry
      ? ' <button type="button" class="link" id="retry">Réessayer</button>'
      : "");
  target.hidden = !help.text;
  target.classList.toggle("help-alert", !!help.alert);
  other.innerHTML = "";
  other.hidden = true;
  $("secondary-action").hidden = !message;
};

const updateActions = () => {
  renderActions();
  adjustHeight();
};

// Switch from one view to the other. Entering the submission view resets the flow to the
// start; leaving it too. Focus follows: "← Retour" on entry, the
// "Déposer sur GitHub" button on return.
const changeView = (view: State["view"]) => {
  backToStart();
  state.redesign = false;
  // A preparation in progress keeps its banner and its blocker, it finishes by itself.
  if (state.action === null) state.result = null;
  state.view = view;
  window.scrollTo(0, 0);
  document.body.scrollTop = 0;
  // The submission is always compared with the code. Open PRs are read again on every view change.
  loadTokensPulls();
  if (view === "submit" && state.selection.source !== "repo")
    compareToCurrentCode();
  render();
  $(view === "submit" ? "back" : "open-submit").focus();
};

// Back to the start step: no more commit message, no more JSON to copy.
let copyTimer: number | undefined;
const backToStart = () => {
  clearTimeout(copyTimer);
  state.step = "start";
  state.commitMessage = null;
  state.jsonToCopy = null;
  state.recentCopy = false;
  state.messageHelp = null;
};

// The JSON is copied: GitHub opens, and the designer moves on to the commit message.
const goToMessage = () => {
  if (state.pendingUrl !== null) send({ type: "open", url: state.pendingUrl });
  state.step = "message";
  state.action = null;
  state.result = null;
  state.jsonToCopy = null;
  state.messageHelp = null;
  updateActions();
};

// Submit: reads the repo file to compare its content, then asks the
// plugin to prepare the JSON and the commit message ('submit' message). A 404
// means the file is not in the repo yet.
const doSubmit = async () => {
  backToStart();
  state.action = "submit";
  state.result = { cssClass: "empty", text: "Préparation…" };
  updateActions();
  let repoReference: string | null = null;
  try {
    const url = state.repoUrls.urlReference;
    if (url === null) throw new Error("the tokens path is not set");
    const response = await fetch(url);
    if (response.status !== 404) {
      if (!response.ok) throw new Error(String(response.status));
      repoReference = await response.text();
    }
  } catch (e) {
    state.action = null;
    state.result = {
      cssClass: "error",
      text: "Dépôt impossible : GitHub ne répond pas.",
    };
    updateActions();
    return;
  }
  send({ type: "submit", repoReference, redesign: state.redesign });
};

const onSubmitReady = async ({
  json,
  message,
  url,
}: {
  json: string;
  message: string;
  url: string;
}) => {
  state.commitMessage = message;
  state.pendingUrl = url;
  if (await copyText(json)) {
    goToMessage();
    return;
  }
  // Copy refused: the JSON is displayed, selected, to copy by hand. The
  // submit continues at the first copy event (see below).
  state.action = null;
  state.result = null;
  state.jsonToCopy = json;
  updateActions();
  $<HTMLTextAreaElement>("json-field").focus();
  $<HTMLTextAreaElement>("json-field").select();
};

// The text stays selected during the event: hiding it right away
// would empty the copy. The state change therefore moves to the next tick.
$<HTMLTextAreaElement>("json-field").addEventListener("copy", () => {
  if (state.jsonToCopy !== null) setTimeout(goToMessage, 0);
});

const copyCommitMessage = async () => {
  if (await copyText(state.commitMessage ?? "")) {
    state.messageHelp = "copy-ok";
    state.recentCopy = true;
    clearTimeout(copyTimer);
    copyTimer = setTimeout(() => {
      state.recentCopy = false;
      updateActions();
    }, 2000);
    updateActions();
    return;
  }
  if (state.messageHelp !== "copy-ok") state.messageHelp = "copy-failed";
  updateActions();
  $<HTMLInputElement>("commit-field").focus();
  $<HTMLInputElement>("commit-field").select();
};

const requestDownload = () => {
  state.action = "download";
  state.result = null;
  updateActions();
  send({ type: "download" });
};

$<HTMLButtonElement>("open-submit").onclick = () => changeView("submit");
$("back").onclick = () => changeView("normal");
$("finish").onclick = () => changeView("normal");
$<HTMLInputElement>("redesign").onchange = (e) => {
  state.redesign = $<HTMLInputElement>("redesign").checked;
  updateActions();
};
$<HTMLButtonElement>("submit").onclick = doSubmit;
$<HTMLButtonElement>("copy-message").onclick = copyCommitMessage;
$("restart").onclick = doSubmit;
$("submit-view").addEventListener("click", (e) => {
  if (closest(e, "#retry")) compareToCurrentCode();
});
$("pr-in-progress").addEventListener("click", (e) => {
  const url = closest<HTMLElement>(e, "[data-url]")?.dataset.url;
  if (url !== undefined) send({ type: "open", url });
});
window.addEventListener("focus", () => {
  if (
    state.tokensPulls.length &&
    Date.now() - lastPullsRead > PULLS_REFRESH_INTERVAL
  )
    loadTokensPulls();
});
$<HTMLButtonElement>("download").onclick = requestDownload;
for (const zone of [$("result"), $("submit-result")]) {
  zone.addEventListener("click", (e) => {
    if (!closest(e, "#close")) return;
    state.result = null;
    updateActions();
  });
}

// A plugin error is displayed where it occurred, depending on its context.
// A submission or download error re-enables the buttons.
const showError = ({
  context,
  message,
}: Extract<PluginToUiMessage, { type: "error" }>) => {
  if (context === "verification") {
    state.verificationError = message;
  } else if (context === "comparison") {
    state.repoComparisonInProgress = false;
    state.comparisonError = message;
    if (state.comparisonCode === "in-progress") state.comparisonCode = "failed";
  } else {
    state.action = null;
    state.result = {
      cssClass: "error",
      text: `${context === "submit" ? "Dépôt" : "Téléchargement"} impossible : ${message}`,
    };
  }
  render();
};

// A 'diff' message either carries a diff, or says that the reference is not valid.
const isDiffError = (
  m: DiffErrorMessage | DiffResultMessage,
): m is DiffErrorMessage => !!m.error;

window.onmessage = ({
  data: { pluginMessage: msg },
}: MessageEvent<{ pluginMessage?: PluginToUiMessage }>) => {
  if (!msg) return;
  if (msg.type === "context") {
    $("context").textContent = msg.file;
    $("file-summary").textContent = [
      count(msg.collections, "collection"),
      count(msg.variables, "variable"),
      count(msg.styles, "style"),
    ].join(", ");
    state.repoUrls = msg.repoUrls;
    loadVersionsList();
    if (!state.pullsAlreadyTried) {
      state.pullsAlreadyTried = true;
      loadTokensPulls();
    }
    render();
    return;
  }
  if (msg.type === "verification") {
    state.report = msg.report;
    state.blocker = msg.blocker;
    state.verificationError = null;
    // The tokens changed in Figma: the copied JSON and the commit message are no longer up to date.
    if (msg.changed && (state.step === "message" || state.jsonToCopy !== null))
      backToStart();
    // A comparison with another reference says nothing about the new tokens against the code: unknown status.
    if (
      msg.changed &&
      state.selection.source !== "repo" &&
      state.comparisonCode !== "in-progress"
    )
      state.comparisonCode = null;
    tryRepoComparison();
    render();
    return;
  }
  if (msg.type === "diff") {
    if (isDiffError(msg)) {
      state.validationError = msg.error;
      if (state.comparisonCode === "in-progress")
        state.comparisonCode = "failed";
    } else {
      state.validationError = null;
      state.comparisonError = null;
      state.failure = null;
      state.diffResult = msg;
      state.selection = { source: msg.source, version: msg.version };
      const total =
        msg.added.length +
        msg.modified.length +
        msg.removed.length +
        msg.deprecated.length;
      if (msg.source === "repo")
        state.comparisonCode = total === 0 ? "identical" : "changes";
      if (msg.source === "file" && state.pendingFile)
        state.lastFile = {
          ...state.pendingFile,
          referenceDate: msg.referenceDate,
        };
    }
    render();
    return;
  }
  if (msg.type === "submit-ready") {
    // Back to the normal view during the preparation: GitHub is not opened.
    if (state.view !== "submit") {
      state.action = null;
      state.result = null;
      updateActions();
      return;
    }
    onSubmitReady(msg);
    return;
  }
  if (msg.type === "file") {
    triggerDownload(msg.json, msg.file);
    state.action = null;
    state.result = {
      cssClass: "success",
      text: `${msg.file} téléchargé`,
      closable: true,
    };
    updateActions();
    return;
  }
  if (msg.type === "error") {
    showError(msg);
    return;
  }
  if (msg.type === "recompute-height") {
    adjustHeight();
    return;
  }
  const unhandled: never = msg;
  return unhandled;
};

renderActions();
send({ type: "ready" });
