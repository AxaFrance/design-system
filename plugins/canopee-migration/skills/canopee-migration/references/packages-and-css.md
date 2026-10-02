# Old package names, CSS, Sass and tokens

## Names

Canopée is the design system that groups three universes:

| Universe | Old names | React entry point | CSS entry point |
| --- | --- | --- | --- |
| Distributeur (B2B, internal apps) | `@axa-fr/react-toolkit-*`, `@axa-fr/design-system-react` / `-css` 0.x, `@axa-fr/design-system-slash-react` / `-css` (Slash) | `@axa-fr/canopee-react/distributeur` | `@axa-fr/canopee-css/distributeur/distributeur.css` |
| Prospect (B2C, axa.fr) | `@axa-fr/design-system-apollo-react` / `-css` (Apollo) | `@axa-fr/canopee-react/prospect` | `@axa-fr/canopee-css/prospect/prospect.css` |
| Client (B2C, customer area) | `@axa-fr/design-system-apollo-react/lf`, `@axa-fr/design-system-look-and-feel-react` / `-css` (Look & Feel) | `@axa-fr/canopee-react/client` | `@axa-fr/canopee-css/client/client.css` |

These packages never existed: `@axa-fr/react-toolkit`, `@axa-fr/design-system`, `@axa-fr/canopee`,
`@axa-fr/slash-*`, `@axa-fr/design-system-{client,prospect,distributeur}-*`. Never install them.

Slash 4.x and Apollo 4.x only wrap Canopée 1.x and are deprecated: go straight to `@axa-fr/canopee-*`.

Install (the script prints the exact command for your package manager):

```bash
npm install @axa-fr/canopee-react@^1.8.0 @axa-fr/canopee-css@^1.8.0 @material-symbols/svg-400 @material-symbols/svg-700
```

`@axa-fr/canopee-react` and `@axa-fr/canopee-css` must have the same version.

## CSS imports

With the React package you do not import CSS yourself: the entry point imports reboot, grid,
tokens and the font, and each component imports its own file. Your bundler must accept CSS imports
from `node_modules` (Vite does; webpack needs `css-loader`).

Order matters: the design system CSS must load before your own stylesheets, or every rule of yours
that is as specific as a Canopée rule loses (a link styled `.af-link` becomes a blue `.af-btn`). Coming
from the toolkit, `--write` turns the first toolkit stylesheet import of the entry file into
`import "@axa-fr/canopee-react/distributeur";`, which loads all the Canopée CSS at that place. Keep it
before your own stylesheet imports.

### CSS_ORDER

The entry file (`createRoot`, `ReactDOM.render`) imports your stylesheets and nothing loads the Canopée
CSS before the last of them. Add `import "@axa-fr/canopee-react/distributeur";` where the toolkit
stylesheet import was (`git log -p -- <entry file>` shows it): after the stylesheets the toolkit CSS
came after (a reset, a grid), before the ones that override the design system.

```tsx
import "shared/scss/reboot.css";
import "@axa-fr/canopee-react/distributeur"; // was: import "@axa-fr/react-toolkit-all/dist/style/af-components.scss";
import "shared/scss/custom.scss";            // your overrides win again
```

Without React, import one stylesheet per universe (table above) or one file per component, e.g.
`@axa-fr/canopee-css/distributeur/Button/Button.css`. Tokens: `@axa-fr/canopee-css/<universe>/common/tokens.css`.
Logo: `@axa-fr/canopee-css/logo-axa.svg`.

### CSS_MISSING

The old stylesheet path has no file with the same name in `@axa-fr/canopee-css`. List the files with
`ls node_modules/@axa-fr/canopee-css/dist/<universe>/` and pick the file of the same component.
Known cases: `slash.css` -> `distributeur/distributeur.css`; Apollo `CardRadio` became `CardRadioGroup`
(`prospect/Form/Radio/CardRadioGroup/CardRadioGroupApollo.css`, `client/.../CardRadioGroupLF.css`).
If you use the React components, the import can simply be deleted.

### SASS

Canopée ships no Sass, except one file in each B2C universe: `prospect/common/breakpoints.scss` and
`client/common/breakpoints.scss` (`$breakpoint-xs` 0, `-sm` 667px, `-md` 1023px, `-lg` 1279px, `-xl` 1599px).
Apollo's `dist/common/breakpoints.scss` is the same file: the script rewrites that import to
`@axa-fr/canopee-css/prospect/common/breakpoints.scss`, keep the `$breakpoint-*` variables.
Slash 3.0 and Look & Feel 3.0 moved their colours to CSS custom properties: for every other Sass import,
delete it. Coming from the toolkit, `--write` already did the safe part in `.scss` files: it deleted
each toolkit `@import` with a single path, and replaced each toolkit variable, `media-breakpoint-*`
and `rem()` whose replacement cannot change what Sass computes (`var(--token)` in a plain declaration,
the literal toolkit value elsewhere). What is left is listed file by file, with the exact replacement:
`SASS` (a `@use`, a commented or multi-path import), `SASS_VAR` (maps, values next to `/`, inside
`#{...}` or after a unary minus, a font stack inside a longer value) and `SASS_MIXIN`; do exactly what
each line says. The toolkit is uninstalled at step 4, so its values are gone from `node_modules`:
never guess one, never declare a "fallback" variable with a value of your own.

Other origins (Slash, Look & Feel): replace each Sass variable by a CSS custom property of
`<universe>/common/tokens.css` that has exactly the same value. Same values, toolkit and Slash Sass:

| Sass | CSS |
| --- | --- |
| `$color-axa`, `$brand-primary` | `var(--axablue80)` |
| `$color-texte`, `$color-mine-shaft`, `$color-scorpion` | `var(--gray80)` |
| `$color-gray-1`, `$color-silver` | `var(--gray40)` |
| `$color-dusty-gray` | `var(--gray50)` |
| `$color-gray-3`, `$color-wild-sand` | `var(--gray10)` |
| `$white`, `$color-white` | `var(--white)` |
| `$black` | `var(--black)` |

Rules: never pick a "close" colour. A variable with no exact token keeps its old value in a
project variable (declare it once, e.g. `:root { --app-color-red-error: #f02849; }`).
Sass functions (`darken($color-axa, 10%)`, `rgba($x, .5)`) do not accept `var(...)`: keep a local
Sass variable with the literal value there.

### SASS_VAR

A toolkit Sass variable that no file of the project defines. The line gives the replacement:
`var(--token)` when a Canopée token has exactly the toolkit value, otherwise the toolkit value itself
(e.g. `$color-mercury -> #e5e5e5`). Replace the variable on the listed lines of that file. Used many
times, the literal may go in one project variable with exactly that value. A toolkit map
(`$grid-breakpoints`) is declared in the project with the value printed.

Next to `/`, write the result: in a property, Sass divides a variable but prints two literals as they
are (`padding: $grid-gutter-width / 2` gave `15px`, `padding: 30px / 2` gives `30px/2`).

```scss
.cell { padding: $grid-gutter-width / 2; }   // BEFORE (toolkit $grid-gutter-width: 30px)
.cell { padding: 15px; }                     // AFTER: the result, or calc(30px / 2)
```

### SASS_MIXIN

Toolkit breakpoints: `xs` 0, `sm` 576px, `md` 768px, `lg` 992px, `xl` 1200px. The line gives the media
query to write; `down` ends 0.02px before the next breakpoint, `up(sm)` starts at 576px (not 768px):

```scss
@include media-breakpoint-down(sm) { .menu { display: none; } }  // BEFORE
@media (max-width: 767.98px) { .menu { display: none; } }         // AFTER
```

`rem(24px)` becomes `1.5rem` (px / 16). A toolkit function or mixin without equivalent (`theme-color`,
`generate-universes`...): STOP and ask.

### SASS_VALUE

A toolkit variable that the project defines with another value than the toolkit, in a line added after
`--write` (the script records the definitions that existed before). It is an invented value: write the
value printed on the line, or the `var(--token)` it gives.

### TOKEN_REMOVED

Custom properties of Apollo / Look & Feel that Canopée no longer defines. A `var(--x)` with an unknown
name silently renders nothing. Use a Canopée token with the same meaning, or declare the old value in a
project variable (the script prints the old value):

| Removed | Old value |
| --- | --- |
| `--spacing-8`, `--spacing-10`, `--spacing-12`, `--spacing-16` | `8px`, `10px`, `12px`, `16px` |
| `--black-20` | `hsl(from var(--black) h s l/20%)` |
| `--axa-red-digital-100` | `#ff4751` |
| `--red-alert-80` | `#ff1f1f` |
| `--warning-4` | `#fef9f6` |
| `--color-red-600` | `#d4435b` |
| `--color-gray-300` | `#e9ecf2` |
| `--error-custom-border`, `--error-custom-bg` | `#d18e8e`, `#ffbfbf` |
| `--color-alert-danger-color-border`, `--color-alert-danger-bg-color` | `#c8b282`, `#f1d596` |

With `--target 2`, also component variables removed in 2.0 (`--radio-option-*`, `--item-message-icon-size`,
`--link-font-size`, `--dropdown-border-color`): overriding them has no effect any more; restyle with a
class instead.

Slash 1.x only: `--green40` became `--green30` and `--green50` became `--green40` (Slash 2.0).
The script does this rename once, in the right order, and records it in `.canopee-migrate.json`.

## Imports and tests

### EXPORT_MISSING

The name is not exported by the Canopée entry point.

- `useIsSmallScreen`, `BREAKPOINT` (Slash `utilities`): not exported by Canopée. Copy the Slash 3.0.0 code
  into the project and import it from there:

  ```ts
  import { useCallback, useSyncExternalStore } from "react";

  export enum BREAKPOINT { SM = 667, MD = 1023, LG = 1279, XL = 1599 }

  export const useIsSmallScreen = (breakPointToCheck: number) => {
    const subscribe = useCallback((listener: () => void) => {
      window.addEventListener("resize", listener);
      return () => window.removeEventListener("resize", listener);
    }, []);
    return useSyncExternalStore(subscribe, () => window.innerWidth <= breakPointToCheck, () => false);
  };
  ```
- `ClickEvent` (type of `@axa-fr/react-toolkit-core`, `{ id?: string }`): not exported. Canopée callbacks
  such as `BooleanModal` `onSubmit` / `onCancel` receive a React event: type it `React.SyntheticEvent`.
  The toolkit `{ id }` payload is gone: use the `id` you pass to the component.
- Default import from Slash / Apollo: Canopée only has named exports: `import { Button } from ...`.
- Any other name: search it in `node_modules/@axa-fr/canopee-react/dist/<universe>.d.ts`. Absent: STOP.

### OLD_STRING

The name of an old package written outside an import. After the install it points to nothing.

- Version lookup (`packageJson.dependencies["@axa-fr/react-toolkit-all"]`, often inside a link to the
  old documentation): write the old version as text, the one the line prints (`"2.3.1"`), and keep the
  URL around it as it is. The link stays right; the typecheck no longer fails on the missing key.
- Bundler or test setting (`optimizeDeps.include`, `transformIgnorePatterns`, `moduleNameMapper`): name the
  Canopée package instead (`@axa-fr/canopee-react`, `@axa-fr/canopee-css`).
- Comment: update it or delete it.
- Anything else (a URL to change, a label): STOP and ask. Never write a new URL, organisation or
  repository name, even one that looks likely.

```ts
// BEFORE
export const GITHUB = `https://github.com/org/react-toolkit/tree/v${packageJson.dependencies["@axa-fr/react-toolkit-all"]}/packages/`;
// AFTER: same link as before the migration
export const GITHUB = `https://github.com/org/react-toolkit/tree/v2.3.1/packages/`;
```

### OLD_LF

`@axa-fr/design-system-look-and-feel-react` / `-css` (first Look & Feel, Sass based) is not the same code as
`@axa-fr/canopee-react/client`. The script moved the names that exist with the same name in `client`;
check each one with the typecheck. For a name that does not exist (`Alert`, `Header`, `NavBar`,
`Title`, `Tabs`, `Select`, `RadioCard`...), use the client component documented in the Canopée
client documentation, or STOP and ask. Replace the CSS import by `@axa-fr/canopee-css/client/client.css`
only if you do not use the React components.

### DS0

`@axa-fr/design-system-react` / `-css` 0.x (2024 betas): the `agent` entry point maps to
`@axa-fr/canopee-react/distributeur` (done by the script); `client` and `utilities` have no 1:1 target: STOP and ask.

### JEST

`@axa-fr/canopee-react` is published as ES modules only (its `exports` only declare `import` and `types`)
and its components import `.css` and `.svg` files. Vitest works out of the box. With Jest:

```js
// jest.config.js (adapt to your existing config)
module.exports = {
  transformIgnorePatterns: ["node_modules/(?!(@axa-fr/canopee-react|@axa-fr/canopee-css)/)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy", // or a small stub file
    "\\.svg$": "<rootDir>/test/svgStub.js",
  },
};
```

If the tests still cannot import the package, report it (STOP) instead of mocking the design system away.

### TSCONFIG

`@axa-fr/canopee-react` only declares `exports` (`/distributeur`, `/prospect`, `/client`). With
`"moduleResolution": "node"` (or `node10`, `classic`), TypeScript cannot read them: every import fails
with `TS2307: Cannot find module '@axa-fr/canopee-react/distributeur' or its corresponding type
declarations`. In `tsconfig.json`, set `"moduleResolution": "bundler"` (TypeScript 5.0 or later, with
`"module": "ESNext"`); with an older TypeScript, upgrade it first. Do not add a `paths` alias or a
`declare module` to hide the error.

### TESTS

The design system markup changed, so some tests fail without any bug. Failing tests are part of the
migration: `--check` stays NOT DONE until they pass, and prints a `FIX test` line for each case below.

- Snapshot mismatch: deal with it last, once typecheck, lint and build pass (a snapshot taken from
  broken code records the bug). Then read the diff. If it only shows design system markup (classes, wrappers, icons),
  update the snapshots of those files with the command of the `FIX test` line (`npx vitest run -u <files>`
  or `npx jest -u <files>`) and list them in the report. If it shows your own text or data changing,
  the migration is wrong: fix the code, not the snapshot.
- A query by role and name finds nothing: Canopée may name elements differently. Example: the
  distributeur `User` link is named `user info link` (its `aria-label`), not by the user name. Change
  the query to what the component renders now, never the component. The query is often in a shared
  step or helper file (BDD steps), not in the failing test: the `FIX test` line gives its `file:line`.

  ```ts
  const link = within(header).getByRole("link", { name: /Not connected/ });   // BEFORE: name was the text
  const link = within(header).getByRole("link", { name: "user info link" });  // AFTER: the aria-label
  expect(link).toHaveTextContent(/Not connected/);                            // the text is still checked
  ```
- A test that checks a toolkit class (`toHaveClass("af-alert--myclass")`, `af-btn--...`): the component
  lost a modifier word. Fix the component (`TK_ALERT_CLASSMODIFIER`, `BUTTON_CLASSMODIFIER`, "Expression"),
  not the test.
- Never skip, delete or loosen a test to reach `VERDICT: DONE`.

### VISUAL

`--check` lists, after the install, the rules of your style files that use a class of a design system
block (`af-alert__title-icon`, `af-link--hasIconLeft`) that neither Canopée nor your code renders any
more. They compile and pass every check, but no longer apply: the toolkit markup they styled is gone
(Canopée `Message` renders `af-alert__sidebar`, `af-alert__title`, not `af-alert__title-icon` or
`af-alert__content__left`), or a modifier class was lost on the way (fix the component then, see
`BUTTON_CLASSNAME`, `TK_ALERT_CLASSMODIFIER`). They do not block `VERDICT: DONE`: look at each page,
restyle what changed on the Canopée markup (classes in `node_modules/@axa-fr/canopee-css/dist/<universe>/`)
or delete the dead rule, and list the lines left in the report.

### NO_CAST

`--check` counts, in each file, the casts and checker suppressions (`as any`, `as unknown as`, `: any`,
`@ts-ignore`, `@ts-expect-error`, `eslint-disable`) and lists every file that has more of them than at
`--write`. A cast hides a wrong migration from the typecheck: remove the ones you added and fix the
value instead.

- `variant={type as any}`, `variant={classModifier as any}`: the old `classModifier` value is an
  expression. Use the helper of "Expression" in `TK_ALERT_CLASSMODIFIER` (Message) or
  `BUTTON_CLASSMODIFIER` (Button).
- A union that is wider than the Canopée type (`"danger"` for `Message`): map it with a typed object
  (`const VARIANT = { danger: "warning", ... } as const`), never a cast.
- An event type: use the React type (`React.ChangeEvent<HTMLInputElement>`, `React.SyntheticEvent`).
- Nothing fits: STOP and ask.
