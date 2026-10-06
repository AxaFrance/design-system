---
name: Hello World
description: Post a short AI-generated greeting when an issue or pull request is opened.
intent: Verify that an AI agent can greet the author of a newly opened issue or pull request.
on:
  issues:
    types: [opened]
  pull_request:
    types: [opened]
  roles: all
permissions:
  contents: read
  copilot-requests: write
engine:
  id: copilot
  bare: true
max-turns: 3
safe-outputs:
  add-comment:
    target: triggering
    max: 1
---

# Hello World

  For the newly opened issue or pull request
  #${{ github.event.issue.number || github.event.pull_request.number }}, use the
`add_comment` safe output exactly once with the body `Hello world!`.
  Do not read repository files or the issue or pull request title, body, or comments.
Do not perform any other action. Stop after submitting the greeting.
  If no triggering issue or pull request number is available, call `noop` with a short reason.