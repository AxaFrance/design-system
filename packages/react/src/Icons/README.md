https://github.com/marella/material-design-icons/blob/main/scripts/README.md

To update icons if needed

1. Delete all svgs

```
npx @material-design-icons/scripts delete svg --in packages\react\src\Icons\svg
```

2. Download all svgs

```
npx @material-design-icons/scripts download svg --to packages\react\src\Icons\svg
```

3. Download metadata (just to check version, useless)

```
npx @material-design-icons/scripts download metadata --to packages\react\src\Icons\metadata
```

4. Download types

```
npx @material-design-icons/scripts generate types --in packages\react\src\Icons\types
```

5. Reshape types in 2 files like current (constants.ts and icons.client.tsx)
