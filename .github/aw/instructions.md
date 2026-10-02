---
description: Repository-specific gh-aw authoring and validation requirements.
---

# Repository Instructions

## Scope

These rules apply when creating, editing, reviewing, or upgrading agentic workflow files in this repository.

## Required validation

- After any change to `.github/workflows/*.md`, run `gh aw compile` once and include the generated lock file in the same change.
- Do not use `gh aw compile --watch` in scripts or validation commands.
- Keep generated lock files in sync with their source Markdown.

## Authentication and permissions

- Keep agent jobs read-only. Route GitHub writes through the relevant `safe-outputs` instead of granting direct write permissions to an agent job.
- For the Copilot engine, use `permissions: { copilot-requests: write }` and `${{ github.token }}`. This does not require a PAT or a `COPILOT_GITHUB_TOKEN` secret.
- Grant only the permissions required by the trigger, tools, and configured safe outputs.
- Never place credentials in workflow Markdown, committed files, or prompt text.
