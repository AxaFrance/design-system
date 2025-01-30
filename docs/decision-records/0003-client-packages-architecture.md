# Architecture of the client packages to support multiple themes

## Status

Accepted on 14/01/2025. Present at the meeting: Samuel Gomez, Johnathan Meunier,
Martin Stievenart, Guillaume Kesteman, Paul Plancq, Jean-Lou Piermé.

## Context

Our design system needs to support 2 themes for the client oriented
applications: Look and feel, and Apollo. The proposal made by Samuel Gomez is to
create a new package for each theme. The architecture looks like this

```
client
├───look-and-feel
│   ├───css
│   │   └───src
│   │       └───Button
│   │              Button.scss
│   └───react
│       └───src
│           └───Button
│                  Button.tsx
├───apollo
│   ├───css
│   │   └───src
│   │       └───Button
│   │              Button.scss
│   └───react
│       └───src
│           └───Button
│                  Button.tsx
└───common
        └───src
            └───Button
                    Button.scss
                    Button.tsx
```

In the common folder, code that can be shared between the two themes will be
stored. For the necessary adjustments, each theme can override code. Ideally, in
the theme source files, we would only re-export the common component.

Four package would be created:

- @axa-fr/design-system-look-and-feel-css
- @axa-fr/design-system-look-and-feel-react
- @axa-fr/design-system-apollo-css
- @axa-fr/design-system-apollo-react

### Pros

- Most of the code would be common, only variants not found in a specific theme
  would be developped inside their own theme, and minor visual changes would be
  done in the respective css package.

### Cons

- More packages to maintain pipelines for
- Build is a tad more complex

## Decision

A unanimous decision was made to follow the proposed architecture.

## Consequences

- The architecture will be updated to reflect the new structure.
- The new packages will be created.
- The new packages will be published to the npm registry.
- Build pipelines will be updated to include the new packages.
