# Git Commit Instructions

## Conventional Commits Format

Use the following format for commit messages:

```text
<type>[scope]: <description>
```

### Allowed Types

- feat
- fix
- chore
- docs
- refactor
- test

### Allowed Scopes

- slash: commits related to the Slash design system (UI kit, components, styles, etc. in the `slash/` folder)
- look&feel: commits related to the Look & Feel design system (UI kit, components, styles, etc. in the `look-and-feel/` folder)
- apollo: commits related to the Apollo design system (UI kit, components, styles, etc. in the `apollo/` folder)
- design-system: commits that affect the overall monorepo, shared tooling, documentation, or general project configuration (not specific to a single design system)

If the commit affects two or more design systems, separate scopes with a comma, e.g.:

```text
fix(look&feel,apollo): fix styles and icons
```

For general project changes, use the `design-system` scope.

> **Note:** The scopes `deps`, `deps-dev`, and `release` are reserved and must NOT be used.

### Guidelines

- Use imperative mood: "Add feature" not "Added feature".
- Keep subject line under 70 characters if possible.
- For breaking changes, add a `!` after the scope (e.g., `feat(slash)!: ...`) and include a `BREAKING CHANGE:` section in the footer describing the breaking change.
- Do not add a body or footer unless necessary.

### Valid Examples

```text
feat(slash): add new component
fix(look&feel,apollo): fix styles and icons
chore(design-system): update dependencies
feat(slash)!: remove classModifiers

BREAKING CHANGE: classModifiers prop has been removed from all components.
```
