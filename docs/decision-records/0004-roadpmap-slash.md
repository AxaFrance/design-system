# Technical roadmap for slash in 2025

## Status

Accepted on 14/01/2025. Present at the meeting: Samuel Gomez, Johnathan Meunier,
Martin Stievenart, Guillaume Kesteman, Paul Plancq, Jean-Lou Piermé.

## Context

Our slash codebase has been around since 2019 and much has changed in the
frontend, and react worlds. Some of the technique we had to use back then are
obsolete now, and we have to adapt to the new standards.

We also have to think about the future, and how we can make our codebase more
maintainable, while avoiding large breaking changes each version.

### 1.1.0 - Immediate future

Our #1 priority is to support react 19. As soon as we are confident with it, a
1.1.0 will be shipped.

### 2.0.0 - Variants

The code has been using BEM and `classmodifier`s to handle variants. This has
been working well, but there are some challenges. The main one being that typing
`classmodifier` is impossible. Using variants, we can leverage TypeScript's
union types to type our variants. It would align with what is done in the more
recent client codebase.

Example:

```tsx
// In 1.x
<Button classModifier="secondary">Secondary button</Button>

// In 2.x
<Button variant="secondary">Secondary button</Button>
```

Removing `classModifier` means we need to add a way for our users to inject
custom classes into our components. This can be done by using the `className`
which will not remove base classes anymore.

```tsx

// In 1.x
<Button className="my-custom-class">button</Button> // would render <button class="my-custom-class">Secondary button</button>

// In 2.x
<Button className="my-custom-class">button</Button> // would render <button class="button my-custom-class">Secondary button</button>
```

This means a massive breaking change on all of our components, either with the
removal of `classModifier` or the change in the `className` behavior.

### 3.0.0 - Dropping bootstrap grid system

We have been using the bootstrap grid system for a long time. It has been
working well, but it is not the most efficient way to handle layout in 2025.
With flexboxes, and grid there are more elegant ways to align our components.

There is a massive unmaintained css file copied from bootstrap v4 that we can
remove.

Projects relying on `col-md-x` and others will have 2 options:

- include that css file themselves
- update their code to avoid relying on these classes

## Decision

A unanimous decision was made to make theses changes, in that order.

## Consequences

- Milestones will be created for each of the versions
- A migration guide will be written for each of the versions
- A post will be written to explain the changes to our users
