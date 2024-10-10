# Writing official coding guidelines

## Status

Accepted.

## Context

Being an open-source project, we have multiple developers contributing to the
source code, with each one having their own coding style. This can lead to
inconsistencies in the codebase, making it harder to maintain and understand.

## Decision

A restrained set of guidelines will be published to the /docs folder of the
project. These guidelines will cover the following topics:

- folder structure of components
- naming conventions
- Definition of Done of a component
  - tests
  - stories with a corresponding .mdx file
  - accessibility
  - responsive design
  - updating the sample to include the component
- commit conventions

For our coding convention, we decided to rely on tooling rather than imposing a
writen set of rules. The tools we use are:

- prettier for code formatting
- eslint for code linting
- stylelint for CSS linting
- sonarqube for code quality

## Consequences

Sonarqube needs to be configured to scan the project. A set of guidelines
documents needs to be redacted and maintained. Reviewers will need to be
vigilant in enforcing the guidelines during the pull requests review.
