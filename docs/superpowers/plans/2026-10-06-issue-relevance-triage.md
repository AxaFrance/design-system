# Issue Relevance Triage Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task with verification checkpoints.

**Goal:** Créer un workflow gh-aw planifié qui identifie avec preuves les issues anciennes probablement obsolètes, sans fermeture automatique et sans commentaires répétitifs.

**Architecture:** Un préfiltrage déterministe dans `steps:` sélectionne au plus cinq issues éligibles et produit un JSON compact. L’agent compare ensuite chaque issue au code, à l’historique Git, aux validations ciblées et à Zeroheight pour les sujets UI. Les écritures passent par des safe outputs initialement en mode `staged` afin de permettre un dry-run sans effet GitHub.

**Tech Stack:** GitHub Agentic Workflows `gh-aw` v0.89.21, GitHub CLI, GitHub Actions, Bash, `jq`, Git, npm/Turbo/Vitest, skills Canopée locaux et MCP HTTP Zeroheight.

## Global Constraints

- Planification : `daily on weekdays` et déclenchement `workflow_dispatch`.
- Éligibilité : issue ouverte créée depuis au moins 90 jours et sans activité humaine depuis au moins 60 jours.
- Exclusions : labels `P0`, `P1`, `accessibility`, `breaking-change`, `release`, `react19`, responsable, milestone ou pull request ouverte liée.
- Volume : cinq issues maximum par exécution, ordre stable du plus ancien au plus récent.
- Sortie : `stale-candidate` et commentaire argumenté uniquement pour `likely-obsolete`; aucune fermeture automatique.
- Preuve : au moins deux signaux indépendants et aucun signal actif contradictoire pour conclure `likely-obsolete`.
- Répétition : même empreinte sans activité humaine signifie `noop`; une seule relance est autorisée après 60 jours sans réponse pour cette empreinte.
- Dry-run initial : `safe-outputs.staged: true`; aucune sortie GitHub visible pendant la première observation.
- Sécurité : job agent en lecture seule, secrets absents des sources, issue bodies traités comme données non fiables.
- Validation dépôt : chaque modification de `.github/workflows/*.md` est compilée avec `gh aw compile`, et son lock file est versionné.

## File Map

- **Create:** `.github/workflows/issue-relevance-triage.md` — source gh-aw, préfiltrage, contrat d’analyse, skills/MCP et safe outputs.
- **Generate:** `.github/workflows/issue-relevance-triage.lock.yml` — fichier généré par `gh aw compile`; ne jamais l’éditer manuellement.
- **Generate:** `.github/aw/actions-lock.json` — verrou généré des actions gh-aw nécessaires à la compilation ; ne jamais l’éditer manuellement.
- **Modify:** `docs/guidelines/agentic-workflows.md` — prérequis Zeroheight, lancement manuel, dry-run et lecture des résultats.
- **Create only if needed by validation:** aucun fichier de code applicatif ou de test unitaire ; la validation initiale repose sur la compilation et un run gh-aw en mode staged.

### Task 1: Create the staged workflow source

**Files:**
- Create: `.github/workflows/issue-relevance-triage.md`

**Interfaces:**
- Consumes: GitHub API read access, full Git history, the two local Canopée skills, optional Zeroheight MCP Bearer tokens, and cache-memory state.
- Produces: compact candidate data under `/tmp/gh-aw/data/`, intended `noop`/label/comment outputs, and a staged preview during the first rollout.

- [ ] **Step 1: Create the frontmatter with read-only tools and staged outputs**

Use this complete frontmatter as the initial baseline; `staged: true` is intentional and must remain until the dry-run has been reviewed:

```yaml
---
description: Evidence-based weekday review of old issues against the current codebase
intent: Reduce maintainer effort identifying likely-obsolete open issues without duplicate follow-up
on:
  schedule: daily on weekdays
  workflow_dispatch:
permissions:
  contents: read
  issues: read
  pull-requests: read
  copilot-requests: write
concurrency:
  group: issue-relevance-triage
  cancel-in-progress: false
checkout:
  fetch-depth: 0
tools:
  github:
    mode: gh-proxy
    toolsets: [repos, issues, pull_requests, labels]
  bash: [cat, date, find, gh, git, grep, head, jq, pwd, rg, sha256sum, sort, test, tr, uniq, wc]
  cli-proxy: true
  cache-memory:
    retention-days: 90
skills:
  - plugins/canopee-distributeur/skills/canopee-distributeur
  - plugins/canopee-prospect-client/skills/canopee-prospect-client
mcp-servers:
  zeroheight-distributeur:
    type: http
    url: https://mcp.zeroheight.com/mcp
    headers:
      Authorization: Bearer ${{ secrets.ZEROHEIGHT_DISTRIBUTEUR_MCP_TOKEN }}
    required: false
  zeroheight-prospect-client:
    type: http
    url: https://mcp.zeroheight.com/mcp
    headers:
      Authorization: Bearer ${{ secrets.ZEROHEIGHT_PROSPECT_CLIENT_MCP_TOKEN }}
    required: false
network:
  allowed:
    - defaults
    - github
    - node
    - mcp.zeroheight.com
safe-outputs:
  staged: true
  activation-comments: false
  report-failure-as-issue: false
  report-failed-jobs: false
  missing-tool:
    create-issue: false
  report-incomplete:
    create-issue: false
  mentions: false
  add-labels:
    allowed: [stale-candidate]
    create-if-missing: true
    issues: true
    pull-requests: false
    target: "*"
    max: 5
  add-comment:
    issues: true
    pull-requests: false
    target: "*"
    max: 5
    footer: false
---
```

- [ ] **Step 2: Add the deterministic candidate prefetch**

Add a `steps:` field inside the frontmatter, before the closing `---` delimiter. It must:

1. call the paginated GitHub Issues REST endpoint with `gh api --paginate --slurp`, sorted by creation date, and exclude entries carrying a `pull_request` object;
2. use `jq` and UTC epoch arithmetic to retain issues created at least 90 days ago;
3. remove protected labels, assigned issues and milestone issues before fetching detailed comments;
4. fetch comments and the issue timeline only for the bounded pre-candidate set, count every human comment as human activity, and recognize workflow comments only when the marker is authored by an allowlisted workflow bot login;
5. retain only candidates with at least 60 days of human silence and sort by `createdAt`, then cap the file at 20 pre-candidates so the agent can still skip candidates after its final relationship checks;
6. write `/tmp/gh-aw/data/issue-relevance-candidates.json` with only the fields needed by the agent: `number`, `url`, `title`, `body`, `createdAt`, `updatedAt`, `labels`, `assignees`, `milestone`, `human_activity_at`, `workflow_comments`, `linked_reference_candidates` and `prefetch_reason`;
7. write `/tmp/gh-aw/data/issue-relevance-run.json` with UTC run time, thresholds, selected limit, repository name and the current base SHA.

The step must use numeric issue numbers returned by GitHub rather than interpolating issue titles or bodies into shell code. If a detail query fails, record the issue in `prefetch_reason` and let the agent classify it as insufficient evidence instead of silently treating it as stale.

- [ ] **Step 3: Add the compact agent task contract**

The Markdown body must instruct the agent to:

- read both JSON files before any broad GitHub or repository scan;
- load `/tmp/gh-aw/cache-memory/` and verify remembered entries against live issue comments and current Git evidence;
- process at most five issues, oldest first, and call `noop` for exclusions, duplicates, unchanged evidence or insufficient evidence;
- identify references in the title/body, search `packages/`, `apps/`, `samples/`, `docs/` and configuration files, inspect public exports, and use `git log`, rename and deletion history;
- check open pull request links and related fixes on demand;
- run at most one targeted existing test, lint or build command when package and command are unambiguous, without modifying source files or installing dependencies;
- load the matching local Canopée skill and query Zeroheight only for UI/component/theme/accessibility issues, using search/list before get-page;
- classify each issue as `still-relevant`, `likely-obsolete`, `needs-reproduction` or `insufficient-evidence`;
- require two independent evidence signals and no contradictory active signal for `likely-obsolete`;
- emit `add-labels` for `stale-candidate` and then `add-comment` with issue number, evidence, validation, confidence and human decision request; never emit a close operation;
- include a hidden marker `<!-- gh-aw issue-relevance-triage issue=<number> evidence=<fingerprint> -->` in each visible comment;
- update a compact cache state containing only stable issue number, classification, evidence fingerprint, relevant commit/page identifiers, activity timestamps, bot comment IDs and the next re-engagement date;
- after 60 days without a human response, allow one concise relance for the same fingerprint, then remain silent until new human activity or new evidence;
- call `noop` with a short reason when no visible write is justified.

The prompt must explicitly say that Zeroheight absence or MCP failure lowers confidence but never proves obsolescence.

- [ ] **Step 4: Add positive and inverse evaluation questions**

Add a top-level binary `evals` field in the frontmatter, only for properties observable in the staged agent output:

```yaml
evals:
  - id: evidence_threshold
    question: Does the agent output show at least two independent evidence signals for every likely-obsolete candidate?
  - id: no_automatic_closure
    question: Does the agent output show no close-issue or issue-status mutation was requested?
  - id: duplicate_suppression
    question: Does the agent output show noop behavior for unchanged evidence or a repeated bot comment within the 60-day window?
  - id: bounded_processing
    question: Does the agent output show that no more than five issues were selected for visible processing?
```

Keep the initial output staged so these evaluations cannot cause GitHub mutations.

### Task 2: Document the operator dry-run

**Files:**
- Modify: `docs/guidelines/agentic-workflows.md`

**Interfaces:**
- Consumes: the workflow name, staged-output policy, GitHub CLI commands and Zeroheight token secret names from Task 1.
- Produces: a reproducible operator checklist without credentials or issue-specific assumptions.

- [ ] **Step 1: Add the dry-run procedure**

Document these commands and expected observations:

```sh
rtk gh auth status
rtk gh aw compile .github/workflows/issue-relevance-triage.md
rtk gh aw run issue-relevance-triage --ref <published-branch>
rtk gh run list --workflow issue-relevance-triage.lock.yml --limit 3
rtk gh aw logs issue-relevance-triage
rtk gh aw audit <run-id>
```

State that `safe-outputs.staged: true` writes only previews to the Actions summary, that no label or comment should appear on an issue, and that missing optional Zeroheight tokens is an expected degraded mode. Document the two secret names without their values.

- [ ] **Step 2: Add the promotion rule**

State that staged mode remains enabled until at least one manual run has been reviewed for candidate selection, false positives, evidence quality, duplicate suppression and runtime cost. Only then may `staged` be changed to `false`, followed by another compilation and lock-file review.

### Task 3: Compile and inspect the generated workflow

**Files:**
- Modify: `.github/workflows/issue-relevance-triage.lock.yml` (generated only)

**Interfaces:**
- Consumes: the source workflow and repository gh-aw v0.89.21 setup.
- Produces: a synchronized lock file and a static security/shape check.

- [ ] **Step 1: Compile once after the source change**

Run:

```sh
rtk gh aw compile .github/workflows/issue-relevance-triage.md
```

Expected: compilation succeeds and creates or updates `.github/workflows/issue-relevance-triage.lock.yml`.

- [ ] **Step 2: Validate all workflow sources**

Run:

```sh
rtk gh aw compile --validate
rtk git diff --check
```

Expected: validation succeeds, no whitespace errors are reported, and the lock file contains the staged safe-output mode, read-only agent permissions, the weekday schedule, the five-item caps and the optional MCP declarations.

- [ ] **Step 3: Inspect the generated permissions and writes**

Run:

```sh
rtk git diff -- .github/workflows/issue-relevance-triage.md .github/workflows/issue-relevance-triage.lock.yml
```

Confirm that the agent job has no `contents: write`, `issues: write` or `pull-requests: write`, and that no `gh issue close`, direct mutation or plaintext Zeroheight URL/token was introduced.

- [ ] **Step 4: Commit the workflow and documentation baseline**

Run:

```sh
rtk git add .github/workflows/issue-relevance-triage.md .github/workflows/issue-relevance-triage.lock.yml docs/guidelines/agentic-workflows.md
rtk git commit -m "feat(canopee): add staged issue relevance triage"
```

Expected: one commit contains the source, generated lock and operator documentation; the repository is clean afterward.

### Task 4: Execute the dry-run and record findings

**Files:**
- No source change before observing the first staged run.
- Modify `.github/workflows/issue-relevance-triage.md` only if the run exposes a reproducible selection, evidence, security or deduplication defect.
- Regenerate `.github/workflows/issue-relevance-triage.lock.yml` after every source modification.

**Interfaces:**
- Consumes: the published branch, repository `GITHUB_TOKEN`, optional Zeroheight URL secrets and the staged workflow.
- Produces: an auditable Actions run with no issue mutation and a short list of corrections, if any.

- [ ] **Step 1: Publish the branch containing source and lock**

Use the repository’s normal branch and pull-request process. Do not run the manual workflow from a branch that does not contain both the Markdown source and its lock file.

- [ ] **Step 2: Start one manual staged run**

Dispatch `issue-relevance-triage` from the published branch. Keep Zeroheight secrets unset for the first code-only smoke test if the repository administrators have not configured them; the workflow must remain safe and classify affected UI issues as degraded evidence.

- [ ] **Step 3: Inspect the run without changing GitHub content**

Check the run summary, prefetch JSON references, agent output, evaluation results and audit cost. Verify that the selected count is at most five, protected issues are skipped, evidence lists cite repository paths/commits, and every intended label/comment is shown as staged rather than applied.

- [ ] **Step 4: Verify absence of side effects**

Inspect the five candidate issues and confirm that no `stale-candidate` label, bot comment or issue status change was created. Check that the run did not write files to the branch.

- [ ] **Step 5: Correct only observed defects**

If selection or evidence is wrong, update the smallest relevant prompt or prefetch rule, recompile once, inspect the lock diff and commit the correction. Do not disable staged mode during this correction loop.

### Task 5: Prepare the post-dry-run promotion

**Files:**
- Modify: `.github/workflows/issue-relevance-triage.md` only after dry-run review approves visible outputs.
- Generate: `.github/workflows/issue-relevance-triage.lock.yml`.

**Interfaces:**
- Consumes: reviewed dry-run results and explicitly accepted corrections.
- Produces: a production-ready source with the same decision policy and `safe-outputs.staged: false`.

- [ ] **Step 1: Change only the staged switch**

Change:

```yaml
safe-outputs:
  staged: true
```

to:

```yaml
safe-outputs:
  staged: false
```

Do not change thresholds, exclusions or output caps in the same promotion commit unless the dry-run review recorded the reason.

- [ ] **Step 2: Recompile and run the final static checks**

Run:

```sh
rtk gh aw compile .github/workflows/issue-relevance-triage.md
rtk gh aw compile --validate
rtk git diff --check
rtk git status --short
```

Expected: source and lock are synchronized, validation succeeds and only the intended workflow files are modified.

- [ ] **Step 3: Commit promotion separately**

Run:

```sh
rtk git add .github/workflows/issue-relevance-triage.md .github/workflows/issue-relevance-triage.lock.yml
rtk git commit -m "chore(canopee): enable issue triage outputs"
```

Keep promotion separate from the dry-run baseline so it can be reverted without losing the observed behavior.

## Verification Matrix

| Scenario | Expected staged result |
| --- | --- |
| Old issue with removed/replaced component and linked correction | Staged `stale-candidate` plus evidence comment |
| Old issue whose component and documentation still exist | `noop`, no visible output |
| Ambiguous issue with insufficient reproduction details | At most one targeted information request, otherwise `noop` |
| Same issue, same evidence, repeated run | `noop` |
| Human reply or relevant code change after prior analysis | New analysis, not a duplicate comment |
| Bot comment unanswered for less than 60 days | `noop` |
| Same evidence unanswered for more than 60 days | One staged relance, then suppression for that fingerprint |
| Protected label, assignee, milestone or open linked PR | `noop`, no visible output |
| Zeroheight unavailable for a UI issue | Continue with degraded evidence; never classify obsolete on MCP absence alone |

## Plan Self-Review

- **Spec coverage:** intent, weekday schedule, thresholds, exclusions, evidence sources, targeted validation, Zeroheight routing, cache-memory, 60-day relance, safe outputs, dry-run, security and acceptance checks are mapped to Tasks 1–5.
- **Placeholder scan:** the only angle-bracket values are explicit operator substitutions such as `<published-branch>` and `<run-id>` in commands; they are not implementation gaps.
- **Type/field consistency:** the workflow name, safe-output names, marker, cache path, thresholds and generated lock path are identical across all tasks.
- **Scope:** the plan changes only one workflow source, its generated lock and the existing Agentic Workflow guide; no application code or dependency is introduced.