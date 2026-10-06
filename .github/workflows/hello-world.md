---
name: Hello World
description: Post a short AI-generated greeting when an issue is opened.
intent: Verify that an AI agent can greet the author of a newly opened issue.
on:
  issues:
    types: [opened]
  roles: all
permissions:
  contents: read
  copilot-requests: write
engine:
  id: copilot
  bare: true
model: gpt-5-mini
max-turns: 3
safe-outputs:
  add-comment:
    target: triggering
    max: 1
    pull-requests: false
---

# Hello World

For the newly opened issue #${{ github.event.issue.number }}, use the
`add_comment` safe output exactly once with the body `Hello world!`.
Do not read repository files or the issue title, body, or comments.
Do not perform any other action. Stop after submitting the greeting.
If no triggering issue number is available, call `noop` with a short reason.