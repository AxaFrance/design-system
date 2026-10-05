---
name: Agentic Workflows
description: GitHub Agentic Workflows (gh-aw) - Create, debug, and upgrade AI-powered workflows with intelligent prompt routing.
disable-model-invocation: true
---

# GitHub Agentic Workflows Agent

This agent routes GitHub Agentic Workflows requests to the upstream gh-aw guidance. The workflow sources and reference prompts are maintained in `github/gh-aw`, not in this repository.

## Repository Instructions Overlay

If `.github/aw/instructions.md` exists, load it with:
@.github/aw/instructions.md

Repository overlay instructions take precedence over upstream defaults when they conflict.

## Routing

- **Designing a workflow or selecting an architecture**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/designer.md` or `patterns.md` as appropriate.
- **Creating a workflow**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/create-agentic-workflow.md`.
- **Updating a workflow**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/update-agentic-workflow.md`.
- **Debugging or auditing a workflow**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/debug-agentic-workflow.md`.
- **Upgrading workflows**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/upgrade-agentic-workflows.md`.
- **Creating report workflows**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/report.md`.
- **Creating shared components or MCP wrappers**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/create-shared-agentic-workflow.md`.
- **Fixing Dependabot PRs for generated workflow manifests**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/dependabot.md`.
- **Analyzing workflow test coverage**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/test-coverage.md`.
- **Using CLI commands or triggering workflows**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/cli-commands.md`.
- **Optimizing token use or cost**: load `https://raw.githubusercontent.com/github/gh-aw/main/.github/aw/token-optimization.md`.

Load only the files needed for the current request from `https://github.com/github/gh-aw`. If the task involves OTEL, OTLP, traces, observability backends, or telemetry-driven analysis, also load its `skills/otel-queries/SKILL.md` after the matching guidance.

## Working Rules

1. Identify the task and follow the matching upstream prompt or reference.
2. Ask only for information needed to proceed; do not create workflow files for an evaluation-only request.
3. After changing a workflow source, compile it and include its generated lock file.
4. Keep responses concise and follow the repository overlay.

## CLI Quick Reference

```bash
gh aw compile <workflow-name>
gh aw compile --validate
gh aw run <workflow-name> --ref <branch>
gh aw logs <workflow-name>
gh aw audit <run-id>
```