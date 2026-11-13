# Canopée v1 migration

Agent skill that migrates a React project to the Canopée design system 1.x
(`@axa-fr/canopee-react`, `@axa-fr/canopee-css`):

- from `@axa-fr/react-toolkit-*` (distributeur universe, ex-Slash);
- from `@axa-fr/design-system-slash-*` (Slash), `@axa-fr/design-system-apollo-*` (Apollo, `/lf` included)
  and `@axa-fr/design-system-look-and-feel-*` (Look & Feel).

From Canopée 1.x to 2.0, see [Moving on to Canopée 2.0](#moving-on-to-canopée-20).

It is built for small, cheap models. A Node script (no dependency, works offline) does the inventory
and every safe 1:1 rewrite: import paths, default imports, renamed components, known `classModifier`
values, renamed props, CSS paths, renamed tokens. The model only fixes the lines the script lists, with
one reference section per case, then runs the project checks: the procedure is designed to need only a
handful of requests.

Styles get the same care: a toolkit Sass variable, function or breakpoint is replaced by the exact
Canopée token or the literal toolkit value, or left as it is and listed with the value to write; never
deleted. `--write` records every toolkit value, breakpoint and removed token in use, and `--check`
reports any of them deleted afterwards without its replacement (`SASS_LOST`).

The correspondence between the toolkit Sass variables and the Canopée tokens is a table,
`tokenMap` in `toolkit-sass.json`: a toolkit value maps to the distributeur token that has exactly
its colour (the token of the same name first, `$brand-primary` -> `--brand-primary`, then the palette
token, `$color-axa` -> `--axablue80`), never to a close colour nor to a token a component sets again
(`--text-color`). The script writes `var(--token)` only in a plain CSS declaration of a project that
loads the Canopée stylesheet and does not declare that token itself; where Sass computes with the
value (`darken()`, `rgba()`, `@if`, a mixin argument, a media query) or JavaScript reads it
(`:export`), it writes the toolkit value. Every value kept as a literal is listed in its report
(`LITERAL`), with the reason.

## Install in the project to migrate

The skill is a folder: copy `skills/canopee-v1-migration` into the project. GitHub Copilot (VS Code, Copilot CLI,
cloud agent) reads skills from `.github/skills/`, `.agents/skills/` and `.claude/skills/`; Claude Code
reads `.claude/skills/`.

With the GitHub CLI (`gh skill`, April 2026 or later), from the project root:

```bash
gh skill install AxaFrance/design-system canopee-v1-migration --pin main
```

It installs into `.agents/skills/canopee-v1-migration`. Without `--pin`, `gh` uses the latest GitHub release of
this repository, which may not contain the skill yet. For Claude Code add `--agent claude-code`.

Without the GitHub CLI (macOS, Linux, Git Bash; on Windows PowerShell write `curl.exe`):

```bash
mkdir -p .github/skills && curl -sL https://codeload.github.com/AxaFrance/design-system/tar.gz/main | tar -xz -C .github/skills --strip-components=4 design-system-main/plugins/canopee-v1-migration/skills/canopee-v1-migration
```

With Copilot CLI plugins:

```bash
copilot plugin marketplace add AxaFrance/design-system
copilot plugin install canopee-v1-migration@canopee-plugins
```

Remove the folder once the migration is merged.

## Use

In Copilot Chat (agent mode) or Copilot CLI, with any model:

```text
/canopee-v1-migration migrate this project to Canopée
```

The agent follows `SKILL.md`: inventory, `--write`, install, fix the checklist, `--check` (typecheck,
lint, tests and build of the project) until it prints `VERDICT: DONE`, report.

The script also works without an agent:

```bash
node .github/skills/canopee-v1-migration/scripts/canopee-migrate.mjs            # dry run, writes nothing
node .github/skills/canopee-v1-migration/scripts/canopee-migrate.mjs --write    # applies the safe rewrites
node .github/skills/canopee-v1-migration/scripts/canopee-migrate.mjs --check    # what is left + project checks
node .github/skills/canopee-v1-migration/scripts/canopee-migrate.mjs --help
```

## Content

| Path | Role |
| --- | --- |
| `skills/canopee-v1-migration/SKILL.md` | procedure for the agent (short, loaded when the skill is used) |
| `skills/canopee-v1-migration/scripts/canopee-migrate.mjs` | inventory and safe rewrites, dry run by default |
| `skills/canopee-v1-migration/scripts/toolkit-sass.json` | values of the toolkit Sass variables, Canopée tokens, toolkit to Canopée token map |
| `skills/canopee-v1-migration/references/toolkit-to-canopee.md` | `@axa-fr/react-toolkit-*` to distributeur |
| `skills/canopee-v1-migration/references/packages-and-css.md` | package names, CSS, Sass, tokens, Jest |
| `tools/build-token-map.mjs` | builds the token map of `toolkit-sass.json` (maintainers, not copied with the skill) |
| `tests/` | tests of the token map and of the Sass rewrites (`node --test`, not copied with the skill) |

## Moving on to Canopée 2.0

This skill stops at Canopée 1.x (`--target 2` is refused). Once the project is on 1.x, the upgrade to
2.0 follows the design system's own skill and guide, which avoids keeping the 2.0 changes in two
places:

- skill [canopee-v2-migration](https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/main/docs/changelogs/skills/canopee-v2-migration/SKILL.md);
- [migration guide](https://github.com/AxaFrance/design-system/blob/main/docs/changelogs/MIGRATION-GUIDE-v2.0.0.md).

## Maintenance

The script embeds facts read from the published packages (exports of `@axa-fr/canopee-react` 1.8.0,
files of `@axa-fr/canopee-css`, toolkit 3.0.2, Slash, Apollo and Look & Feel). When a
release removes or renames an export, a stylesheet or a token, update the `EXPORTS`, `CSS_*` and
rename tables at the top of the script and the matching reference section.

`toolkit-sass.json` holds the values of the Sass variables of `@axa-fr/react-toolkit-core` 3.0.2
(`src/common/scss`, unchanged since 1.4.1) as Sass resolves them (`toolkit` for the toolkit's own
files, `bootstrap` for its Bootstrap 4 copy, maps and `url()` values included), the variables each of
them is computed from (`deps`, so that a project value set before the toolkit import is never mistaken
for the toolkit's), the variables of the toolkit component stylesheets by file (`components`), the `:root` custom properties of
`af-toolkit-core.css` (`rootProperties`), the toolkit mixins and functions without equivalent
(`mixins`, `functions`). Its first sections are written by `tools/build-token-map.mjs` from the
published `@axa-fr/canopee-css` (1.8.0): `tokensSource` (version, tarball integrity, sha256 of
`tokens.css`), `tokens` (the `:root` of `distributeur/common/tokens.css` as published),
`tokensRedefined` (tokens that another rule of the distributeur CSS declares again: never chosen),
`tokenMap` and, when a colour has several candidate tokens, `tokenAmbiguous`. The resolved toolkit
values stay: the script writes them where no token fits, and checks them for `SASS_LOST`.

When a Canopée 1.x release changes the distributeur CSS (the script installs `@^1.8.0`, and its
`--check` prints a NOTE when a mapped token of the installed version has another value), rebuild the
map from the published package and check it. From the root of the repository, with the package
unpacked outside it:

```bash
D=$(mktemp -d) && (cd "$D" && npm pack @axa-fr/canopee-css@1.8.0 && tar -xzf axa-fr-canopee-css-1.8.0.tgz)
npm view @axa-fr/canopee-css@1.8.0 dist.integrity                             # for --integrity
node plugins/canopee-v1-migration/tools/build-token-map.mjs --canopee-css "$D/package" --integrity <sha512-...> --write
npx prettier --write plugins/canopee-v1-migration/skills/canopee-v1-migration/scripts/toolkit-sass.json
node plugins/canopee-v1-migration/tools/build-token-map.mjs --canopee-css "$D/package" --check
```

Without `--write` the tool prints a summary: the tokens matched by name, the ambiguous colours, and
the toolkit colours within 2/255 of a token, which it never maps (`$color-azur` `#3032c1`, `--azur`
`#3032c0`). Tests (Node 22 or later; with the `sass` package of the repository, they also compile the
rewritten Sass; with `CANOPEE_CSS_DIR="$D/package"`, they also check the JSON against the package):

```bash
node --test plugins/canopee-v1-migration/tests/*.test.mjs
```
