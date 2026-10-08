---
name: canopee-v2-migration
description: Migrate an application or package from AXA Design System 1.8.0 to Canopée 2.0.0. Use this skill whenever a user mentions this migration, Apollo or Slash package replacement, React 19 compatibility, deprecated Canopée APIs, or class modifier removal, even if they do not explicitly ask for a migration plan. Read the version 2.0.0 changelog and migration guide before deciding what to change, apply only documented migrations, determine available commands from package.json scripts, and prefer verification in this order: single-file typecheck, component-focused test, then package lint.
---

# Canopée 2.0.0 Migration

Migrate consumers from Design System 1.8.0 to Canopée 2.0.0 in a controlled,
evidence-based sequence. Migration rules must come from the v2.0.0 release
documents rather than from a permanently embedded list in this skill.

## Source of truth

- [changelog](https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/main/docs/changelogs/CHANGELOG-v2.0.0.md) for the complete release scope.
- [migration guide](https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/main/docs/changelogs/MIGRATION-GUIDE-v2.0.0.md) for consumer migrations and replacements.

Fetch and read both documents before proposing edits. Confirm that their
headings or release metadata identify version 2.0.0. Also confirm that the
guide covers migration from the consumer's current version, ideally 1.8.0. If
the guide uses a broad baseline such as `1.x.x`, compare its documented APIs
with the target before editing and report the ambiguity in the final result.
Because these fixed URLs use the repository's `main` branch, record the
retrieved release metadata. If only one document is retrievable or only one
confirms v2.0.0, stop and report which document failed and why; do not proceed
using a single document. Stop if either URL is unavailable or no longer
describes the v2.0.0 release. Do not reconstruct a migration from memory or
from stale hard-coded mappings.

Use the changelog to understand release scope and the migration guide to derive
the actual package, import, API, prop, token, CSS, and behavior changes.
If the changelog describes a change the migration guide does not map to a
replacement, treat it as an unresolved match and report it for manual review
rather than acting on the changelog alone.

Treat the migration guide as authoritative. Do not infer a replacement when
the guide does not define one; report the occurrence for manual review.

## Operating rules

1. Identify the migration target before editing. Determine whether the task
   concerns an application, a sample, a Storybook app, or a package in this
   monorepo. Preserve unrelated user changes.
2. Establish a baseline using the ordered verification procedure in the
   Validation checklist. If no baseline can run, record why and continue with
   a static audit: a read-only scan of imports, package manifests, and CSS for
   deprecated identifiers without running any commands.
3. Extract the migration categories, deprecated identifiers, replacements,
   prerequisites, and verification requirements from the v2.0.0 documents.
   Search the target scope for those extracted identifiers and for related
   package manifests, imports, CSS imports, configuration, and documentation.
4. Classify every match as a real migration, documentation-only reference,
   generated output, or intentional compatibility fixture. Do not blindly
   replace text in generated files, lockfiles, snapshots, or historical
   changelogs.
5. Apply small edits grouped by migration category. Use the Validation
   checklist for all verification decisions before moving to the next category.
6. Preserve public behavior and accessibility semantics. Prefer semantic v2
   props such as `open`, `required`, `message`, `messageType`, `position`,
   `className`, and `getClassName` only where the guide maps the old API to
   them.
7. Do not add compatibility aliases, reintroduce removed APIs, or create a
   codemod unless the user explicitly requests that behavior.

## Migration sequence

### Apply the extracted migration

1. Update runtime and dependency prerequisites from the guide, using the
   repository package manager and conventions. Do not manually edit lockfiles
   unless regeneration is impossible.
2. Apply package, React, import, and CSS changes exactly as documented for the
   target universe and version. Review custom CSS precedence when the release
   changes layers or reset behavior.
3. Migrate removed components, aliases, props, tokens, helpers, and class APIs
   only when the guide defines a replacement. Check current type definitions
   when a mapping is conditional.
4. Preserve accessibility semantics and behavior. Pay special attention to
   headings, form error associations, focus behavior, and controlled state.
5. Leave historical changelogs, generated output, snapshots, and compatibility
   fixtures unchanged unless the migration guide explicitly includes them.

## Validation checklist

Determine available commands from the target's `package.json` scripts and run
the following checks in order, skipping a check only when its trigger does not
apply or the command is unavailable. Record unavailable commands and the
reason in the final report.

| Order | Check | Trigger |
| --- | --- | --- |
| 1 | Single-file typecheck | The target exposes a typecheck command that accepts the changed file. |
| 2 | Component-focused test | A changed component has a focused test command. |
| 3 | Package lint | The affected package exposes a lint command. |
| 4 | Legacy-match search | Always: search for active legacy package names, removed aliases, deprecated props, class modifiers, and React 18 constraints. |
| 5 | Affected package/application typecheck or build | No single-file typecheck was available, or the change affects package-wide types/build output. |
| 6 | Broader tests | The change crosses package boundaries. Run the repository test command after focused tests. |
| 7 | Accessibility and CSS inspection | Headings, form error associations, focus behavior, or CSS layer precedence changed. |

Apply this ordered checklist after each migration category and again after all
edits; do not duplicate checks that already passed for an unchanged category.

Do not claim the migration is complete while unresolved matches remain. Separate
intentional historical/generated matches from actionable findings in the final
report.

## Final report

Summarize:

1. Scope migrated and files changed.
2. Dependency, import, API, prop, token, and CSS-layer changes made.
3. Unresolved matches requiring manual decisions, with their file paths.
4. Validation commands run and their results.
5. Any baseline failures or unrelated pre-existing failures.

When no target repository or files are supplied, perform an audit and return a
prioritized migration plan instead of editing arbitrary files.