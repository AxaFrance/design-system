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
If you use the React components, the import of a stylesheet can simply be deleted. A toolkit Sass
partial (`.../scss/variables`, `.../scss/core`) is not a stylesheet: it gave variables, see `SASS`.

### SASS

Canopée ships no Sass, except one file in each B2C universe: `prospect/common/breakpoints.scss` and
`client/common/breakpoints.scss` (`$breakpoint-xs` 0, `-sm` 667px, `-md` 1023px, `-lg` 1279px, `-xl` 1599px).
Apollo's `dist/common/breakpoints.scss` is the same file: the script rewrites that import to
`@axa-fr/canopee-css/prospect/common/breakpoints.scss`, keep the `$breakpoint-*` variables.
Slash 3.0 and Look & Feel 3.0 moved their colours to CSS custom properties: for every other Sass import,
delete the import, then replace each variable it gave (below).

**The rule: no Sass variable, function, mixin or breakpoint disappears without its replacement.**
Replace it with exactly what its line says, or leave the line as it is and STOP. Never delete the
variable, the `@include`, the `@media`, the declaration or the rule that uses it to clear an error or
a MANUAL line; never declare it with a value of your own; never pick a "close" value. `--write`
records every one it found, and `--check` lists each one that disappeared without its replacement
(`SASS_LOST`): the VERDICT stays NOT DONE.

Coming from the toolkit, `--write` already did the safe part in `.scss` files:

- each toolkit variable, `map-get` of a toolkit map, `theme-color()` / `gray()` / `color()` with a
  written key, `breakpoint-min()` / `breakpoint-max()` and `rem()` whose replacement cannot change what
  Sass computes became `var(--token)` or the literal toolkit value (rule below);
- each `@include media-breakpoint-*` with a written breakpoint became its `@media` query (table in
  `SASS_MIXIN`); when the toolkit printed no media query (`up(xs)`, `down(xl)`), only the `@include`
  line and its closing brace were removed, every rule inside is kept;
- a rule that computes a breakpoint (`media-breakpoint-up($breakpoint, $breakpoints)` in a mixin or an
  `@each`) keeps its `@include`: `--write` wrote the toolkit breakpoint functions and mixins, same
  values, in `_toolkit-breakpoints.scss`, and imports it where the toolkit import was;
- each toolkit `@import` with a single path was deleted (or became that import).

`--write` does not replace a toolkit value when the project changes what the toolkit computes. A toolkit
variable set before the toolkit import or in `@use ... with (...)` (`$primary: #00ff00;`) changes every
toolkit value computed from it (`theme-color('primary')`, `$component-active-bg`, `$theme-colors`); a file
compiled with only a partial of the core (`.../scss/variables`, `functions`) does not get the values of the
whole core. Those uses are listed with STOP (`SASS_VAR`, `SASS_MIXIN`): leave the line as it is and ask what
value it must keep. A project `$grid-breakpoints` is the exception: the breakpoints of its files keep the
toolkit mixins (`_toolkit-breakpoints.scss`), which read the project map.

`var(--token)` replaces a toolkit value only when a Canopée distributeur token has exactly that colour
(the token of the same name first: `$brand-primary` -> `var(--brand-primary)`), in a plain property
declaration of a `.scss` file, outside any Sass function and operator, in a package that loads the
Canopée stylesheet (`@axa-fr/canopee-react/distributeur` or `distributeur.css`, imported by the app,
not only by a test) and does not declare that token itself (`--brand-primary` in a theme: `var()` would
take the project value). Everywhere else the literal toolkit value is written: a Sass function
(`darken()`, `rgba()`, `if()`), an operator, `/`, a Sass variable, `@if`, `@each`, `@return`, a mixin
argument, a media query, an interpolation (`#{}`), a custom property, a `:export` block or a mixin
included there (CSS Modules give it to JavaScript), a `.sass` file. Each such value is listed in
`LITERAL` with the reason.

What is left is listed file by file, with the exact replacement: `SASS` (a `@use`, a commented or
multi-path import), `SASS_VAR`, `SASS_MIXIN`, `SASS_UNDEFINED`, `SASS_VALUE`; do exactly what each line
says. The toolkit is uninstalled at step 4, so its values are gone from `node_modules`: never guess one,
never declare a "fallback" variable with a value of your own.

Other origins (Slash, Look & Feel): replace each Sass variable by a CSS custom property of
`<universe>/common/tokens.css` that has exactly the same value, with the same rule. Same values,
toolkit and Slash Sass (the whole list: `tokenMap` in `scripts/toolkit-sass.json`):

| Sass | CSS |
| --- | --- |
| `$color-axa` | `var(--axablue80)` |
| `$brand-primary` | `var(--brand-primary)` |
| `$color-texte`, `$color-mine-shaft`, `$color-scorpion` | `var(--gray80)` |
| `$color-gray-1`, `$color-silver` | `var(--gray40)` |
| `$color-dusty-gray` | `var(--gray50)` |
| `$color-gray-3`, `$color-wild-sand` | `var(--gray10)` |
| `$white`, `$color-white` | `var(--white)` |
| `$black` | `var(--black)` |

Rules: never pick a "close" colour (`$color-azur` is `#3032c1`, `--azur` is `#3032c0`: no token). A
variable with no exact token keeps its old value in a project variable (declare it once, e.g.
`:root { --app-color-red-error: #f02849; }`). Sass functions (`darken($color-axa, 10%)`,
`rgba($x, .5)`) do not accept `var(...)`: keep a local Sass variable with the literal value there.

### SASS_VAR

A toolkit Sass variable that no file compiled with this one defines. The line gives the replacement:
`var(--token)` when a Canopée token has exactly the toolkit value and the line is a plain declaration,
otherwise the toolkit value itself, with the reason (e.g. `$color-mercury -> #e5e5e5`, no token;
`$color-axa -> #00008f` in an `@if`: Sass compares the value, `var(...)` would drop the rule). Replace
the variable on the listed lines of that file and keep the rest of the line. Used many times, the
literal may go in one project variable with exactly that value (it still counts for `SASS_LOST`). A
toolkit map (`$container-max-widths`) is declared in the project with the value printed.
`tk.$color-axa` (a `@use ... as tk` namespace): replace the whole `tk.$color-axa`.

A lookup whose key is an unquoted colour name or a number (`map-get($colors, white)`, `color(white)`,
`gray(100)`) found nothing: Sass looked up the colour `white` or the number `100`, not the key `"white"`
or `"100"`, and printed no declaration. Its line says STOP: keep it as it is and ask.

A `SASS_VAR` line that says STOP has no value to write: the toolkit value of that variable is not the one
the pages had (see `SASS`). Keep the line, do not write the value of another variable, ask.

Next to `/`, write the result the line prints: in a property, Sass divides a variable but prints two
literals as they are (`padding: $grid-gutter-width / 2` gave `15px`, `padding: 30px / 2` gives `30px/2`).
After a unary minus, the line prints the result too (`-$spacer`: `-1rem`).

```scss
.cell { padding: $grid-gutter-width / 2; }   // BEFORE (toolkit $grid-gutter-width: 30px)
.cell { padding: 15px; }                     // AFTER: the result, or calc(30px / 2)
.cell { }                                    // WRONG: the value is gone (SASS_LOST)
```

### SASS_MIXIN

The toolkit breakpoints are those of Bootstrap 4: `xs` 0, `sm` 576px, `md` 768px, `lg` 992px,
`xl` 1200px. The Canopée distributeur grid uses exactly the same thresholds (`.col-sm-*` from 576px,
`md` 768px, `lg` 992px, `xl` 1200px, `@axa-fr/canopee-css/distributeur/common/grid.css`), but Canopée
publishes no Sass mixin, Sass variable or custom media for them: a toolkit breakpoint becomes this
literal media query, never another one.

| Breakpoint | `media-breakpoint-up(X)` | `media-breakpoint-down(X)` | `media-breakpoint-only(X)` |
| --- | --- | --- | --- |
| `xs` | none | `(max-width: 575.98px)` | `(max-width: 575.98px)` |
| `sm` | `(min-width: 576px)` | `(max-width: 767.98px)` | `(min-width: 576px) and (max-width: 767.98px)` |
| `md` | `(min-width: 768px)` | `(max-width: 991.98px)` | `(min-width: 768px) and (max-width: 991.98px)` |
| `lg` | `(min-width: 992px)` | `(max-width: 1199.98px)` | `(min-width: 992px) and (max-width: 1199.98px)` |
| `xl` | `(min-width: 1200px)` | none | `(min-width: 1200px)` |

`media-breakpoint-between(A, B)`: the `min-width` of `up(A)` and the `max-width` of `down(B)`.
`breakpoint-min(X)` / `breakpoint-max(X)`: the values of `up(X)` / `down(X)`. `down` ends 0.02px
before the next breakpoint: never write `768px` or `width < 768px` for `down(sm)`. "none": the toolkit
printed the rules without media query; remove only the `@include` line and its closing brace, keep
every rule inside. Never use instead the B2C `$breakpoint-*` of `breakpoints.scss` (667px, 1023px...:
Apollo's) nor the `@custom-media` of the Canopée sources (`--tablet-landscape` 772px,
`--desktop-small` 1016px...: internal to the Canopée components, not the toolkit thresholds).

```scss
@include media-breakpoint-down(sm) { .menu { display: none; } }  // BEFORE
@media (max-width: 767.98px) { .menu { display: none; } }         // AFTER
```

A variable argument (`media-breakpoint-up($breakpoint, $breakpoints)` in a mixin or an `@each`): keep
the `@include` and the loop. `--write` wrote `_toolkit-breakpoints.scss` (the toolkit functions and
mixins, same values) and imports it in the file that compiled this one; a line that asks you to import
it gives the exact `@import`. Do not edit that file.

`rem(24px)` becomes `1.5rem` (px / 16); any other `rem(X)` becomes `calc((X) / 16px * 1rem)`, the same
number (Sass computes it). A toolkit function or mixin without equivalent
(`theme-color-level`, `color-yiq`, `str-replace`, `generate-universes`, `hasIcon`...): keep the line and
STOP and ask.

### SASS_UNDEFINED

A Sass variable or mixin used in a file that compiled with the toolkit, and that neither the project
nor the toolkit defines: it came with an import that is gone. Find its definition in the old code
(`git show HEAD:<file>` and the files it imported) and write exactly that value; keep the line
meanwhile. Not found: STOP and ask. Never delete the line, never declare the name with a value of your
own.

### SASS_LOST

`--write` recorded, file by file, every toolkit variable, function, mixin, breakpoint and removed token
in use, with its exact replacements. A `SASS_LOST` line means the file has fewer of them than after
`--write`: one was deleted, or replaced by another value. `git diff <file>` shows where: put the line
back with the replacement of its `SASS_VAR` / `SASS_MIXIN` / `TOKEN_REMOVED` line (the value printed,
or the `var(--token)`). A project variable that holds exactly that value counts, and so does the
literal value in place of the `var(--token)` the script wrote. Another token with the same colour does
not (`var(--axablue80)` where the script wrote `var(--brand-primary)`). Never "fix" it by writing the
value somewhere else in the file.

```scss
.card { border: 1px solid $color-mercury; }   // BEFORE --write
.card { border: 1px solid #e5e5e5; }          // after --write: keep it
.card { }                                     // WRONG: SASS_LOST
```

### SASS_VALUE

A toolkit variable that the project defines with another value than the toolkit, in a line added after
`--write` (the script records the definitions that existed before). It is an invented value: write the
value printed on the line, or the `var(--token)` it gives.

Also a project `$x: value !default` placed after the toolkit import: it did nothing while the toolkit was
there (the toolkit value applied); once the import is gone, its own value would apply. The line gives
the toolkit value the pages had: write it, or STOP and ask if a page needs the other one.

### LITERAL

No action: the toolkit values the script wrote, or a MANUAL line asks you to write, as the toolkit
value and not `var(--token)`, with the reason. Either no Canopée token has exactly this value (never
use a close one), or a token exists but Sass or JavaScript reads the value there (a Sass function, an
operator, `@if`, a Sass variable, a mixin argument, an interpolation, `:export`...), or nothing loads
the Canopée stylesheet for that file, or the project declares the token itself. Keep these values as
they are. `--write` records the list in `.canopee-migrate.json`; `--check` prints it again with the
line where each value is now (at most 20 colours), and `--report` writes all of them: the report
copies that section of the last `--report` (SKILL.md, step 7).

### TOKEN_REMOVED

Custom properties that Canopée no longer defines. A `var(--x)` with an unknown name silently renders
nothing: no error, no warning. Keep every `var(--x)` as it is and declare the old value once in the
project, under the same name (the script prints it), e.g. in the global stylesheet:

```css
:root {
  --spacing-16: 16px; /* Apollo token removed from Canopée: old value */
}
```

Once the project declares the name, the line disappears. Never delete a `var(--x)`, nor the declaration
or the rule that uses it.

Apollo / Look & Feel:

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

Toolkit, when the project loaded `af-toolkit-core` (the Bootstrap 4 `:root` of the toolkit): `--primary`,
`--secondary`, `--success`, `--info`, `--warning`, `--danger`, `--light`, `--dark`, the colours
(`--blue`, `--red`, `--gray`...), `--breakpoint-xs` to `--breakpoint-xl` and `--font-family-sans-serif`,
`--font-family-monospace`; the line prints each old value. `--white` exists in Canopée with the same
value.

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
with the same values, and list the lines left in the report. Never delete a rule to shorten this list:
a dead rule does nothing, a deleted one can take a value or a breakpoint still needed with it.

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
