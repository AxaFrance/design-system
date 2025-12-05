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

1. If a file in the prospect folder ends with `Common`, use both `prospect` and `client` as scopes.
2. If a file name contains `LF`, use only the `client` scope, even if the file is in the prospect folder (except for files ending with `Common`, which must use both `prospect` and `client`).
3. If a file name contains `Apollo`, use only the `prospect` scope, even if the file is in another folder (except for files ending with `Common`).
4. For all other files:
   - Use the `distributeur` scope for any change in the Slash design system (`distributeur/` or `apps/slash-stories/`).
   - Use the `client` scope for any change in the Look & Feel design system (`look-and-feel/` or `apps/look-and-feel-stories/`).
   - Use the `prospect` scope for any change in the Apollo design system (`prospect/` or `apps/apollo-stories/`).
   - Use the `canopee` scope for global, cross-cutting, or multi-design-system changes.
5. The scopes `deps`, `deps-dev`, and `release` are reserved and MUST NOT be used.
6. For each commit, analyze all staged or changed files. The commit message MUST include the union of all relevant scopes, separated by a comma and sorted alphabetically. Example: `feat(client,prospect): ...` if both a client and an prospect file are staged together.

## Guidelines

- Use imperative mood: "Add feature" not "Added feature".
- Keep subject line under 70 characters if possible.
- Do not add a body or footer unless necessary.

## Valid Examples

```text
feat(distributeur): add new component
fix(client,prospect): fix styles and icons
chore(design-system): update dependencies
```

### Examples for Special Cases

```text
ComponentLF.tsx in prospect: feat(client): ...
ComponentCommon.tsx in prospect: feat(client,prospect): ...
ComponentApollo.tsx and ComponentLF.tsx: feat(client,prospect): ...
```
