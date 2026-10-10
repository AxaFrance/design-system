# Canopée Migration

Agent skill that migrates a React project to the Canopée design system
(`@axa-fr/canopee-react`, `@axa-fr/canopee-css`):

- from `@axa-fr/react-toolkit-*` (distributeur universe, ex-Slash);
- from `@axa-fr/design-system-slash-*` (Slash), `@axa-fr/design-system-apollo-*` (Apollo, `/lf` included)
  and `@axa-fr/design-system-look-and-feel-*` (Look & Feel);
- from Canopée 1.x to 2.0 (`--target 2`, once 2.0 is released).

It is built for small, cheap models. A Node script (no dependency, works offline) does the inventory
and every safe 1:1 rewrite: import paths, default imports, renamed components, known `classModifier`
values, renamed props, CSS paths, renamed tokens. The model only fixes the lines the script lists, with
one reference section per case, then runs the project checks: the procedure is designed to need only a
handful of requests.

Styles get the same care: a toolkit Sass variable, function or breakpoint is replaced by the exact
Canopée token or the literal toolkit value, or left as it is and listed with the value to write; never
deleted. `--write` records every toolkit value, breakpoint and removed token in use, and `--check`
reports any of them deleted afterwards without its replacement (`SASS_LOST`).

## Install in the project to migrate

The skill is a folder: copy `skills/canopee-migration` into the project. GitHub Copilot (VS Code, Copilot CLI,
cloud agent) reads skills from `.github/skills/`, `.agents/skills/` and `.claude/skills/`; Claude Code
reads `.claude/skills/`.

With the GitHub CLI (`gh skill`, April 2026 or later), from the project root:

```bash
gh skill install AxaFrance/design-system canopee-migration --pin main
```

It installs into `.agents/skills/canopee-migration`. Without `--pin`, `gh` uses the latest GitHub release of
this repository, which may not contain the skill yet. For Claude Code add `--agent claude-code`.

Without the GitHub CLI (macOS, Linux, Git Bash; on Windows PowerShell write `curl.exe`):

```bash
mkdir -p .github/skills && curl -sL https://codeload.github.com/AxaFrance/design-system/tar.gz/main | tar -xz -C .github/skills --strip-components=4 design-system-main/plugins/canopee-migration/skills/canopee-migration
```

With Copilot CLI plugins:

```bash
copilot plugin marketplace add AxaFrance/design-system
copilot plugin install canopee-migration@canopee-plugins
```

Remove the folder once the migration is merged.

## Use

In Copilot Chat (agent mode) or Copilot CLI, with any model:

```text
/canopee-migration migrate this project to Canopée
```

The agent follows `SKILL.md`: inventory, `--write`, install, fix the checklist, `--check` (typecheck,
lint, tests and build of the project) until it prints `VERDICT: DONE`, report.

The script also works without an agent:

```bash
node .github/skills/canopee-migration/scripts/canopee-migrate.mjs            # dry run, writes nothing
node .github/skills/canopee-migration/scripts/canopee-migrate.mjs --write    # applies the safe rewrites
node .github/skills/canopee-migration/scripts/canopee-migrate.mjs --check    # what is left + project checks
node .github/skills/canopee-migration/scripts/canopee-migrate.mjs --help
```

## Content

| Path | Role |
| --- | --- |
| `skills/canopee-migration/SKILL.md` | procedure for the agent (short, loaded when the skill is used) |
| `skills/canopee-migration/scripts/canopee-migrate.mjs` | inventory and safe rewrites, dry run by default |
| `skills/canopee-migration/scripts/toolkit-sass.json` | values of the toolkit Sass variables, Canopée colour tokens |
| `skills/canopee-migration/references/toolkit-to-canopee.md` | `@axa-fr/react-toolkit-*` to distributeur |
| `skills/canopee-migration/references/packages-and-css.md` | package names, CSS, Sass, tokens, Jest |
| `skills/canopee-migration/references/canopee-1-to-2.md` | breaking changes of Canopée 2.0 |

## Maintenance

The script embeds facts read from the published packages (exports of `@axa-fr/canopee-react` 1.8.0 and
2.0.0-alpha.76, files of `@axa-fr/canopee-css`, toolkit 3.0.2, Slash, Apollo and Look & Feel). When a
release removes or renames an export, a stylesheet or a token, update the `EXPORTS`, `CSS_*` and
rename tables at the top of the script and the matching reference section.

`toolkit-sass.json` holds the values of the Sass variables of `@axa-fr/react-toolkit-core` 3.0.2
(`src/common/scss`, unchanged since 1.4.1) as Sass resolves them (`toolkit` for the toolkit's own
files, `bootstrap` for its Bootstrap 4 copy, maps and `url()` values included), the variables of the
toolkit component stylesheets by file (`components`), the `:root` custom properties of
`af-toolkit-core.css` (`rootProperties`), the toolkit mixins and functions without equivalent
(`mixins`, `functions`), and the literal colours of `@axa-fr/canopee-css`
`distributeur/common/tokens.css` (identical in 1.8.0 and 2.0.0-alpha.76). Update `tokens` when a
release changes these colours.
