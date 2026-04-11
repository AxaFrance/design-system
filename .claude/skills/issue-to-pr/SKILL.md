---
name: issue-to-pr
description: End-to-end workflow for resolving a GitHub issue in the AxaFrance/design-system monorepo — from reading the issue to opening a labeled PR. Use whenever the user says things like "travaille sur l'issue #N", "work on issue #N", "prends l'issue #N", "fais la PR pour #N", or points at a github.com/AxaFrance/design-system/issues URL. Also triggers when the user asks to resolve, implement, or close a Canopée / Prospect / Client / Distributeur issue, even without explicitly asking for a PR. This skill enforces the project's scope/label/branch conventions AND performs a mandatory safety review because the repo is public.
---

# Issue → PR workflow (AxaFrance/design-system)

This repo is **public**. Every PR is visible to the world. A careless change to auth, CSP, cookies, or any security-adjacent surface becomes a public advertisement of a vulnerability. The first job of this skill is to decide whether the issue is safe to touch autonomously; the second is to execute the project's conventions cleanly.

Work through the phases in order. Don't skip the confirmation gates — pushing and opening a PR are shared-state actions and must be explicitly approved by the user each time.

---

## Phase 1 — Safety triage (public repo)

Before any file is opened or edited, read the issue and decide: is this a purely cosmetic / component-level change, or does it touch something that could expose users if mis-implemented?

Stop and ask the user before proceeding if the issue (or the files it implies) involves any of:

- Authentication, authorization, session handling, cookies, JWT, OAuth, SSO
- Content Security Policy, CORS, iframe sandboxing, `dangerouslySetInnerHTML`
- Cryptography, secrets, API keys, environment variables, `.env` files
- Personal data handling (PII), logging of user input, analytics payloads
- Dependency bumps of security-critical libraries (react, react-dom, anything with a known CVE pattern)
- Anything labelled `security`, `breaking-change`, or mentioning "CVE" / "vulnerability" / "exploit"
- CI/CD workflows (`.github/workflows/*`), release scripts, publish pipelines
- Requests to *remove* validation, *disable* a check, *bypass* a guard, or *silence* a warning

For a public design system the overwhelmingly common case is a visual/component tweak (padding, color, size, a11y attribute, new variant). Those are safe. The point of this phase is to catch the rare case where an "innocent" issue is actually asking for something that shouldn't be shipped without a human reviewing the threat model.

When in doubt, surface the concern in one sentence and ask — don't self-censor silently.

---

## Phase 2 — Check for existing work

Before doing anything else, verify nobody already shipped or started this. People forget to close issues after merging.

```bash
gh issue view <N> --repo AxaFrance/design-system --json state,assignees,closedByPullRequestsReferences,comments,labels
gh pr list --repo AxaFrance/design-system --state all --search "<N>" --limit 10
```

If `closedByPullRequestsReferences` is non-empty, or a PR title/body mentions `#<N>`, or a search surfaces a PR touching the same component: **stop and report**. Show the user what you found and ask whether to continue (maybe their fix is incomplete), pivot (open a follow-up), or close the issue as already-done.

Also note the issue labels here — you'll mirror them on the PR in Phase 7.

---

## Phase 3 — Understand the issue

Read the full issue body. Identify:

- **Theme scope**: Prospect only? Client only? Both? Distributeur? Transverse (canopee)? The issue body usually says so explicitly ("⚠️ Uniquement Prospect", "[Prospect][Client]", etc.). If ambiguous, ask.
- **Component**: what file(s) will change.
- **Change type**: fix / feat / refactor / docs / chore / test.
- **Acceptance criteria**: sometimes a pixel value, sometimes a Figma link, sometimes screenshots. Use them to know when you're done.

If the issue is vague ("improve the button"), ask for specifics rather than guessing. A guessed PR on a public repo wastes reviewer time.

---

## Phase 4 — Locate files (scope naming rules)

The monorepo hides the real code behind thin re-export packages. The source of truth for component code is:

- CSS: `packages/canopee-css/src/{distributeur,prospect-client}/<Component>/`
- React: `packages/canopee-react/src/{distributeur,prospect-client}/<Component>/`

File-name suffix determines which theme the file belongs to, and this drives both **where to edit** and **what commit scope to use** (rules from [.github/git-commit-instructions.md](../../../.github/git-commit-instructions.md)):

| Filename pattern | Meaning | Commit scope |
|---|---|---|
| `*Apollo.css` / `*Apollo.tsx` | Prospect-specific override | `prospect` |
| `*LF.css` / `*LF.tsx` | Client-specific override | `client` |
| `*Common.css` / `*Common.tsx` | Shared Prospect+Client code | `client,prospect` |
| `*All.css` | Shared everywhere | `client,prospect` |
| Files under `distributeur/` or `apps/slash-stories/` | Distributeur | `distributeur` |
| Files under `apps/apollo-stories/` | Prospect stories | `prospect` |
| Files under `apps/look-and-feel-stories/` | Client stories | `client` |
| Cross-cutting / tooling / CI | Everything else | `canopee` or `design-system` |

When multiple scopes apply, list them alphabetically comma-separated: `fix(client,prospect): ...`. The scopes `deps`, `deps-dev`, `release` are reserved — never use them.

**Gotcha**: a file like `ButtonApollo.css` that declares classes starting with `.af-btn-client` is normal — the classname root is shared but the file only contains Prospect overrides. Trust the filename, not the classnames, for scope selection.

---

## Phase 5 — Make the change

Keep it minimal and focused. No drive-by refactors, no reformatting unrelated lines, no "while I'm here" cleanups. The reviewer should see only what the issue asked for.

When the issue scopes the change to a specific breakpoint ("mobile only", "desktop only"), be surgical: change the base value AND add an explicit override in the other breakpoint if needed, so the untouched breakpoint's visual result doesn't drift.

Example from a real fix — issue asks for mobile height 48→56 on Prospect Button:

```css
/* Before */
.af-btn-client {
  --button-padding: var(--rem-12) var(--rem-24);   /* mobile 12+24+12 = 48 */
  @media (--desktop-small) {
    --button-line-height: var(--rem-32);           /* desktop 12+32+12 = 56 */
  }
}

/* After */
.af-btn-client {
  --button-padding: var(--rem-16) var(--rem-24);   /* mobile 16+24+16 = 56 ✓ */
  @media (--desktop-small) {
    --button-padding: var(--rem-12) var(--rem-24); /* preserved 12+32+12 = 56 ✓ */
    --button-line-height: var(--rem-32);
  }
}
```

The second line inside the media query is the "surgical preservation" — without it, the desktop height would have drifted to 64px.

---

## Phase 6 — Visual verification (before committing)

Always test in Storybook before claiming the change works. Type-checking and unit tests confirm correctness of code; they do not confirm correctness of the pixel.

**Storybook launch commands** per theme (via the monorepo scripts):

```bash
npm run dev:prospect      # apps/apollo-stories → port 6410
npm run dev:client        # apps/look-and-feel-stories
npm run dev:distributeur  # apps/slash-stories
```

**Known pitfall**: if port 6410 (or the theme's default) is already taken by another process, Storybook prompts `"Port 6410 is not available. Would you like to run Storybook on port 6411 instead? (Y/n)"` and the background task hangs silently (zero stdout). To avoid this, launch the binary directly with a chosen free port and `--ci` (non-interactive) + `--no-open`:

```bash
cd apps/apollo-stories && \
  ../../node_modules/.bin/storybook dev -p 6420 --ci --no-open
```

Run in the background, monitor the output for `Storybook X.Y.Z for react-vite started` and `Local: http://localhost:<port>/`, then give the user the URL and the specific story path to check (e.g. `?path=/story/molecules-button--button-primary`). Ask them to open DevTools, toggle responsive mode, and confirm the pixel value before you commit.

If a browser MCP is available, use it to capture screenshots; otherwise hand off to the user.

---

## Phase 7 — Commit, push, PR, labels

**Confirmation gate**: do not execute Phase 7 until the user has visually validated Phase 6.

### Branch

```bash
git switch -c <type>/<theme>-<short-kebab-description>
# examples:
#   fix/prospect-button-mobile-height
#   feat/client-header-skip-link
#   fix/client,prospect-itemmessage-import
```

### Commit message

Format (strict): `<type>(<scope>): <imperative description>`

- Types allowed: `feat`, `fix`, `chore`, `docs`, `refactor`, `test`
- Imperative mood, lowercase, ≤ 70 characters, no trailing period
- No body unless something non-obvious deserves one line of "why"
- No `refs #N` or `closes #N` in the commit title — that goes in the PR body

Good: `fix(prospect): align button mobile height to 56px`
Bad: `fix: Button Height (Mobile) 48→56 — refs #1756`

Stage only the files you touched (`git add <explicit paths>`, not `git add .`). The repo has a lint-staged hook that runs stylelint/eslint on commit; if it rewrites your files, that's fine, the commit picks up the fixed content automatically.

### PR body template

Keep it short. Follow the style of recent merged PRs (check `gh pr view <recent-pr> --repo AxaFrance/design-system` if unsure).

```
<one-line summary of the user-visible change>

<optional one-line "how": what knob moved and why, if non-obvious>

Closes #<N>
```

If the issue links to Figma, paste the Figma URL below `Closes #<N>`. That's the convention in several merged PRs.

### Open the PR

```bash
gh pr create --repo AxaFrance/design-system --base main \
  --head <branch> --title "<commit title>" --body "$(cat <<'EOF'
<body>
EOF
)"
```

### Labels

Inherit from the issue, then add package-scope labels for the files you touched:

- `css-package` — if you touched `packages/canopee-css/**`
- `react-package` — if you touched `packages/canopee-react/**`

Common labels to expect on the issue and mirror on the PR: `Prospect`, `Client`, `molecule`, `atome`, `Organisme`, `Fondations`, `Evolution`, `Création`, `accessibility`, `bug`.

Do **not** add `bug` just because the type is `fix` — look at the issue. `fix` commits that implement an `Evolution`-labelled issue should carry `Evolution`, not `bug`. Example from #1756 (type `fix`, issue label `Evolution`): final PR labels were `Prospect`, `molecule`, `Evolution`, `css-package`.

```bash
gh pr edit <PR-number> --repo AxaFrance/design-system \
  --add-label "Label1,Label2,Label3,Label4"
```

---

## Confirmation gates recap

These are the three moments where you must pause and get an explicit "go" from the user before acting, because the actions affect shared or public state:

1. Before running visual tests if the safety triage in Phase 1 turned up anything non-trivial
2. Before `git push` (branch becomes visible on the remote)
3. Before `gh pr create` (PR becomes visible to the world and pings reviewers)

A single blanket "fais la PR" from the user at the start is enough to clear gates 2 and 3 *for this specific issue only*. It is not a standing authorization for future issues.

---

## Quick reference: the happy path (no surprises)

1. `gh issue view <N> --repo AxaFrance/design-system` — read it, safety-check it
2. `gh pr list --repo AxaFrance/design-system --state all --search "<N>"` — no duplicates
3. Locate files via naming rules (Phase 4)
4. Edit minimally
5. Launch Storybook on a free port with `--ci --no-open`, share URL
6. User confirms the pixel
7. Branch → commit → push → PR → labels
8. Return the PR URL

If any step surprises you (unexpected files, ambiguous scope, hanging dev server, label not found), stop and report — don't paper over it.
