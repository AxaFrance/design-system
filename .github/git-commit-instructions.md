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

## Scope Selection Rules (apply in this order)

Follow these rules in order, from top to bottom, to determine the correct scope(s) for your commit message:

1. If a file in the apollo folder ends with `Common`, use both `apollo` and `look&feel` as scopes, even if the name does not contain `LF`.
2. If a file name contains `LF`, use only the `look&feel` scope, even if the file is in the apollo folder (except for files ending with `Common`, which must use both `apollo` and `look&feel`).
3. If a file name contains `Apollo`, use only the `apollo` scope, even if the file is in another folder (except for files ending with `Common`).
4. For all other files:
   - Use the `slash` scope for any change in the Slash design system (`slash/` or `apps/slash-stories/`).
   - Use the `look&feel` scope for any change in the Look & Feel design system (`look-and-feel/` or `apps/look-and-feel-stories/`).
   - Use the `apollo` scope for any change in the Apollo design system (`apollo/` or `apps/apollo-stories/`).
   - Use the `design-system` scope for global, cross-cutting, or multi-design-system changes.
5. The scopes `deps`, `deps-dev`, and `release` are reserved and MUST NOT be used.
6. For each commit, analyze all staged or changed files. The commit message MUST include the union of all relevant scopes, separated by a comma and sorted alphabetically. Example: `feat(look&feel,apollo): ...` if both a look&feel and an apollo file are staged together.

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

### Examples for Special Cases

```text
ComponentLF.tsx in apollo: feat(look&feel): ...
ComponentCommon.tsx in apollo: feat(look&feel,apollo): ...
ComponentApollo.tsx and ComponentLF.tsx: feat(look&feel,apollo): ...
```
