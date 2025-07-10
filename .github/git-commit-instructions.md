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

- slash: for any change in the Slash design system (`slash/` folder or its stories in `apps/slash-stories/`)
- look&feel: for any change in the Look & Feel design system (`look-and-feel/` folder or its stories in `apps/look-and-feel-stories/`)
- apollo: for any change in the Apollo design system (`apollo/` folder or its stories in `apps/apollo-stories/`)
- design-system: for global or cross-cutting changes, or changes affecting multiple design systems

> **Note:** The scopes `deps`, `deps-dev`, and `release` are reserved and must NOT be used.

## Scope Selection Rules (apply in this order)

- **1.** If a file in the apollo folder ends with `Common`, use both `apollo` and `look&feel` as scopes, even if the name does not contain `LF`.
- **2.** If a file name contains `LF`, use only `look&feel` as scope, even if it is in the apollo folder (except for files ending with `Common`, which must use both `apollo` and `look&feel`).
- **3.** If a file name contains `Apollo`, use only `apollo` as scope, even if it is in another folder (except for files ending with `Common`).
- **4.** For all other files, use the scope corresponding to their design system folder (`slash`, `look&feel`, `apollo`) or `design-system` for global changes.

When generating a commit message, always analyze all staged or changed files. For each file, determine its relevant scope(s) according to the rules above. The final commit message MUST include the union of all relevant scopes, separated by a comma and sorted alphabetically. Example: `feat(look&feel,apollo): ...` if both a look&feel and an apollo file are staged.

## Guidelines

- Use imperative mood: "Add feature" not "Added feature".
- Keep subject line under 70 characters if possible.
- Do not add a body or footer unless necessary.

## Valid Examples

```text
feat(slash): add new component
fix(look&feel,apollo): fix styles and icons
chore(design-system): update dependencies
```

### Special Cases

```text
ComponentLF.tsx in apollo: feat(look&feel): ...
ComponentCommon.tsx in apollo: feat(look&feel,apollo): ...
ComponentApollo.tsx and ComponentLF.tsx: feat(look&feel,apollo): ...
```
