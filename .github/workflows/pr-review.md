---
name: pr-review
description: Review pull requests for quality and issues and summarize repository status
on:
  schedule: daily
  pull_request:
    types: [ready_for_review]
permissions:
  contents: read
  issues: read
  pull-requests: read
engine: copilot
tools:
  github:
    toolsets: [repos, issues, pull_requests]
    min-integrity: approved
safe-outputs:
  add-comment:
    max: 1
timeout-minutes: 30
evals:
  - id: operational_value
    question: "Does the agent output provide a current repository status summary with the count and direct links of open pull requests awaiting review and the count of open issues?"
  - id: review_queue_count
    question: "Does the output state an explicit count of open pull requests that need review?"
  - id: review_queue_links
    question: "Does every listed open pull request that needs review include a direct GitHub URL?"
  - id: open_issue_count
    question: "Does the output state an explicit count of currently open issues?"
---

# Pull request review and repository status

Review the repository using only evidence available through the GitHub tools and
the checked-in repository context. This repository is the AXA France Design
System monorepo: it contains the Canopée React and CSS packages for the
Distributeur, Prospect, and Client universes. It uses npm 11.6.4, Node.js
24.11.1, Turbo, Vitest, and GitHub Actions. Relevant validation commands are
`npm run build`, `npm run lint`, and `npm run test`; commits follow Conventional
Commits with scopes such as `canopee`, `prospect`, `client`, `distributeur`, and
`design-system`.

## Required repository status

At the start of every run, inspect the repository's open pull requests and open
issues. Identify pull requests that are open and currently awaiting maintainer
review (including those marked ready for review). Produce a concise status
summary containing:

- an explicit count of open pull requests awaiting review;
- one bullet per such pull request with its title, number, and direct HTML URL;
- an explicit count of all open issues.

If a category is empty, report `0` and say so explicitly. Do not infer counts
from search-result truncation: paginate or otherwise verify the complete set.

## Pull request review

When the run was triggered by `ready_for_review`, review that pull request
against the repository conventions and changed files. Focus on actionable,
evidence-backed defects and regressions, especially:

- correctness and unintended behavior changes in shared or theme-specific
  components;
- accessibility and React rendering issues;
- CSS BEM naming and theme-boundary consistency;
- missing or inadequate tests;
- security, dependency, build, and performance risks;
- compatibility with the documented npm, Turbo, Vitest, and GitHub Actions
  workflows.

Use the repository README, CONTRIBUTING guide, relevant docs, and existing CI
configuration as context. Distinguish a confirmed issue from a suggestion.
When there are no actionable findings, say so clearly.

## Reporting and boundaries

On a pull request trigger, post at most one concise comment to that pull
request. Put the status summary first, followed by review findings ordered by
severity and file/line references where available. On a scheduled run, only
post a comment when GitHub provides a clear issue or pull-request discussion
target; otherwise return the status summary as the run output without inventing
a target.

DO NOT approve pull requests or request changes. DO NOT modify code, labels,
milestones, issue state, branches, releases, or workflow files. DO NOT create
issues or pull requests. DO NOT post speculative, stylistic-only, duplicate,
or low-confidence findings. DO NOT claim a command, test, or review was run
unless the available evidence shows it. DO NOT expose secrets or reproduce
private data. Keep the output factual, concise, and useful to maintainers.
