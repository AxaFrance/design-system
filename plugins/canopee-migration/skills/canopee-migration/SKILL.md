---
name: canopee-migration
description: Migrates a React project to the Canopée design system (@axa-fr/canopee-react, @axa-fr/canopee-css) from @axa-fr/react-toolkit-*, @axa-fr/design-system-slash-*, @axa-fr/design-system-apollo-* or @axa-fr/design-system-look-and-feel-*, and from Canopée 1.x to 2.0. Use it when someone asks to migrate, upgrade or "migrer" a project to Canopée or away from react-toolkit, Slash, Apollo or Look & Feel, when package.json depends on one of these old packages, or when an upgrade breaks on classModifier, Alert, Badge, PassInput or CardRadio. A bundled Node script does the inventory and every safe rewrite, so the migration takes few requests.
---

# Canopée migration

A script does the mechanical work. Your job: run it, install, fix the few lines it lists, verify.
To save requests: do not read the script, do not explore the codebase, read only the reference
section you need, change only the lines the script lists, and edit each file once (all its listed
lines in one edit).

**Done means one thing: the last `--check` printed `VERDICT: DONE`.** Typecheck and build passing is
not done: failing lint or tests are part of the migration, even when they look like formatting or old
snapshots. If you stop before `VERDICT: DONE`, your answer starts with `MIGRATION NOT FINISHED` and the
`VERDICT: NOT DONE` line; never call it done, complete or successful, in any language, in that case.

## Before you start

- The git working tree must be clean (`git status`). Otherwise stop and ask.
- `SKILL_DIR` below is the folder of this file, usually `.github/skills/canopee-migration`
  (or `.agents/skills/canopee-migration`, `.claude/skills/canopee-migration`; if unsure:
  `ls .github/skills .agents/skills .claude/skills`).
- Target: 1.x (latest stable, default). Add `--target 2` to every command only if the user asked for
  Canopée 2.0 (not released yet).
- Monorepo: run the procedure once per application, passing its folder as first argument
  (`node SKILL_DIR/scripts/canopee-migrate.mjs apps/web`).

## Procedure

1. Inventory, writes nothing: `node SKILL_DIR/scripts/canopee-migrate.mjs`.
   If it finds no old package and MANUAL is empty, stop: nothing to migrate.
   A NOTE about another `package.json` (e.g. `scripts/files/package.json`): that folder is another
   package and is not scanned. A template or an example: leave it, it does not block the VERDICT.
   Another application: run this whole procedure on its folder afterwards.
2. If a NOTE says React is too old, upgrade `react`, `react-dom`, `@types/react`, `@types/react-dom`
   first (Canopée 1.x needs React 18, 2.0 needs React 19), with React's own changes
   (e.g. `ReactDOM.render` -> `createRoot`).
3. Safe rewrites and checklist:
   `node SKILL_DIR/scripts/canopee-migrate.mjs --write --report canopee-migration-todo.md`
   If it prints a FORMAT command, run it (the rewritten imports follow the project's Prettier).
   Never back files up yourself (`sed -i.bak`, copies): git keeps the history.
   In style files it replaces every toolkit Sass variable, function and `media-breakpoint-*` whose
   value is certain (the exact Canopée token, otherwise the literal toolkit value) and lists every
   other one in MANUAL with the value to write: it never deletes one. It deletes the toolkit Sass
   imports (or imports `_toolkit-breakpoints.scss`, which it writes, where a rule computes a
   breakpoint) and records every toolkit value in use: `--check` lists each one that disappears
   without its replacement (`SASS_LOST`).
   The toolkit stylesheet import of the entry file becomes `import "@axa-fr/canopee-react/distributeur";`:
   keep it before your own stylesheets (the design system CSS must load first).
4. Run the INSTALL command printed by the script, exactly as printed. Apply every NOTE
   (e.g. `TSCONFIG`).
5. Work through `canopee-migration-todo.md` from top to bottom. It is ordered: styles first (one
   broken stylesheet breaks the build and every page), then imports (they break the typecheck), then
   components. For each code:
   - open the reference file named for the code and read only the section `### <CODE>`;
   - change the listed lines as the line or the BEFORE / AFTER example says; a value printed by the
     script (colour, media query) is copied as is, never replaced by another one;
   - a Sass variable, function, mixin, breakpoint (`@include media-breakpoint-*`, `@media`) or a
     `var(--x)`: replace it with exactly what its line says, or leave the line as it is and STOP.
     Never delete it, nor the declaration or the rule that uses it, to clear an error or a line;
   - a prop you remove often carried a value (an Alert `type` gave the colour, a HelpInfo `content`
     was the help bubble): it must reach the new prop the reference names, never be dropped. Delete
     only what the reference says has no equivalent (e.g. the Alert `icon`);
   - tick the line.
   Then run Prettier on the files you changed (`npx prettier --write <files>`, if the project has it).
6. Verify: `node SKILL_DIR/scripts/canopee-migrate.mjs --check`, once per group of step 5 (not after
   each file). It lists what is left (MANUAL, and `NO_CAST` for every cast you added), runs the
   project's typecheck, lint, tests and build, prints a `FIX` line for the usual failures, and ends
   with a VERDICT line. Do what each MANUAL and FIX line says (table below otherwise), in this order:
   MANUAL, typecheck, lint, build, then tests (snapshots last), then run `--check` again. Repeat until
   `VERDICT: DONE`. AUTO 0 and MANUAL 0 are not enough, and a dev server that answers 200 proves
   nothing (styles compile only when a page loads). Stop before DONE only on a STOP rule, or when two
   `--check` in a row print the same MANUAL count and the same failing checks (no progress): then
   report NOT DONE.
7. Only after `VERDICT: DONE`: delete `canopee-migration-todo.md` and `.canopee-migrate.json`, then
   write the report. While NOT DONE, keep them: they hold what is left.

Suggest two commits: one after step 4 (automatic part), one after step 6 (manual part).

## Errors after the migration

| Error | Where to look |
| --- | --- |
| `Property 'classModifier' does not exist` | `CLASSMODIFIER` (or `BUTTON_CLASSMODIFIER` for Button) |
| `Module '...' has no exported member 'X'` | search `X` in the three references; absent: STOP |
| `Property 'X' does not exist on type` | search `X` in the references, then read the component type in `node_modules/@axa-fr/canopee-react/dist/<universe>/` |
| `TS2783: 'disabled' is specified more than once` | spread first, then your props, merge both values: "Expression" in `BUTTON_CLASSMODIFIER` |
| `'X' is defined but never used` (lint) or `TS6133` after your edit | the `FIX unused` line: the old value must reach the new prop (Alert `type` -> `variant`, HelpInfo `content` -> `popoverElement`) |
| `HelpInfo` passed as a component (`Cmpt = HelpInfo`) or as a type (`typeof HelpInfo`), or a `title=` attribute that does not type-check in its place | `TK_REMOVED`, "HelpInfo used as a value or a type": a local `HelpInfo`, never a `title` attribute |
| `TS2307: Cannot find module '@axa-fr/canopee-react/distributeur'` | `TSCONFIG` in packages-and-css.md |
| Sass `Undefined variable`, `Undefined mixin` or `Undefined function` | the `SASS_VAR` / `SASS_MIXIN` / `SASS_UNDEFINED` line of that name gives the value to write; listed nowhere: STOP. Never delete the line or the rule, never declare the name with a value of your own |
| `SASS_LOST` | a toolkit variable, breakpoint or token was deleted without its replacement: put it back (`git diff <file>`), packages-and-css.md, `SASS_LOST` |
| Lint: Prettier errors | the `FIX lint` line of `--check` (Prettier on the listed files) |
| Lint: `Unexpected any`, `NO_CAST` | `NO_CAST` in packages-and-css.md: remove the cast; `classModifier` expression: "Expression" in `BUTTON_CLASSMODIFIER` / `TK_ALERT_CLASSMODIFIER` |
| Snapshot mismatch, role or name not found in a test | the `FIX test` lines, then `TESTS` in packages-and-css.md; snapshots only once typecheck, lint and build pass |
| `toHaveClass('af-alert--...')` or `af-btn--...` fails | the component lost a modifier class: `TK_ALERT_CLASSMODIFIER` / `BUTTON_CLASSMODIFIER`, fix the component, not the test |
| `Element implicitly has an 'any' type` on `dependencies['@axa-fr/...']` | `OLD_STRING` in packages-and-css.md |
| Jest cannot import `@axa-fr/canopee-react` | `JEST` in packages-and-css.md |
| Components without styles, or your style overrides lost (CSS order) | packages-and-css.md, "CSS imports" |
| A link-looking button became a blue button | `BUTTON_CLASSNAME` |
| A hidden or restyled round icon button (`Action`) shows its default look | `TK_ACTION_CLASS` |

## Stop rules: ask, never guess

- No reference section and no matching prop in the component `.d.ts`.
- The fix is a design choice (a component without equivalent, a colour without an exact token).
- The same error comes back after two attempts.
- A test only passes if the design system is mocked away.
- An `OLD_STRING` line that is a URL or a label, not a version lookup or a setting.
- A Sass variable, mixin, function or breakpoint whose value no line of the script gives.

Never invent a package, component, prop, token, value (colour, size, breakpoint), URL or repository.
Never delete a Sass variable, a breakpoint or a `var(--x)`, nor the line or the rule that uses it, to
make the build or a check pass: replace it with the value the script prints, or STOP.
Never edit `node_modules`. Never pin or downgrade another dependency to silence an error. Never add a
cast (`as unknown as`, `as any`), an `any` type, `@ts-ignore` or `eslint-disable` to make a check pass:
it hides a wrong migration, and `--check` lists it as `NO_CAST` (read the section again, or STOP).
Never change a test to match broken markup, never skip or delete a test.

## References

| File | Codes |
| --- | --- |
| [references/toolkit-to-canopee.md](references/toolkit-to-canopee.md) | `TK_*` (including `TK_ALERT_CLASSMODIFIER`, `TK_ACTION_CLASS`), `BUTTON_CLASSMODIFIER`, `BUTTON_CLASSNAME` |
| [references/packages-and-css.md](references/packages-and-css.md) | package names, CSS, `SASS`, `SASS_VAR`, `SASS_MIXIN`, `SASS_UNDEFINED`, `SASS_LOST`, `SASS_VALUE`, `CSS_MISSING`, `TOKEN_REMOVED`, `CSS_ORDER`, `EXPORT_MISSING`, `OLD_STRING`, `OLD_LF`, `DS0`, `JEST`, `TSCONFIG`, `TESTS`, `VISUAL`, `NO_CAST` |
| [references/canopee-1-to-2.md](references/canopee-1-to-2.md) | `REMOVED_2`, `CLASSMODIFIER`, `PROP_REMOVED_2`, `PROP_CONFLICT`, `LOADER_2`, `FIELD_2`, `CARDRADIO_2`, `LAYERS`, `NAME` |

Component documentation, when the zeroheight MCP servers are configured:
`univers-distributeur-et-collaborateur` (distributeur) and `univers-client-et-prospect` (prospect,
client), with `search-pages` then `get-page`.

## Report (for the pull request)

- First line: the `VERDICT` line of the last `--check`, copied as printed. If it is not
  `VERDICT: DONE`, the title of the report is `MIGRATION NOT FINISHED`.
- From (old packages and versions) to (Canopée version, target 1.x or 2.0).
- AUTO edits applied by the script, MANUAL items fixed.
- Items left and STOP questions, with `file:line`.
- The `CHECK` lines of the last `--check`, as printed (never "PASS" for a check you did not see pass).
  Without `VERDICT: DONE`, say the migration is not finished, what is left and why.
- Snapshots updated and test queries changed (`TESTS`), with the reason.
- Pages to check visually: those using Button, Message, Popover, HelpButton, CollapseCard, Loader,
  Modal, DateInput, Action (all pages for 2.0: CSS layers), at desktop and mobile width, and every
  `VISUAL` line of the last `--check` with `file:line` (packages-and-css.md, `VISUAL`).
