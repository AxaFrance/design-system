# Instructions GitHub Copilot - AXA France Design System

## Architecture du Monorepo

Ce monorepo héberge 3 design systems distincts avec une architecture unifiée sous le package **Canopée** :

- **Distributeur (ex-Slash)** : B2B, applications internes collaboratrices/distributeurs → `@axa-fr/canopee-react/distributeur`
- **Prospect (ex-Apollo)** : B2C, applications exposées aux prospects → `@axa-fr/canopee-react/prospect`
- **Client (ex-Look & Feel)** : B2C, applications espace client → `@axa-fr/canopee-react/client`

### Structure Clé des Packages

```
packages/canopee-react/src/
├── distributeur/          # Composants Distributeur spécifiques
├── prospect-client/       # Composants partagés Prospect + Client
│   ├── Button/
│   │   ├── ButtonCommon.tsx   # Code partagé entre thèmes
│   │   ├── ButtonApollo.tsx   # Surcharges Prospect
│   │   └── ButtonLF.tsx       # Surcharges Client
│   └── ...
├── distributeur.ts        # Entry point avec imports CSS
├── prospect.ts            # Re-exports depuis canopee-react/prospect
└── client.ts              # Re-exports depuis canopee-react/client
```

**Points critiques** :

- Les composants Prospect/Client partagent du code (`*Common.tsx`) avec surcharges par thème
- Le vrai code React est dans `packages/canopee-react/src/`
- Les CSS sont dans `packages/canopee-css/`

## Conventions de Code

### Naming CSS - BEM Strict

Toutes les classes CSS suivent [BEM](https://getbem.com/) avec préfixe `af-` :

```css
.af-component              /* Block */
.af-component__element     /* Element */
.af-component--modifier    /* Modifier */
```

**Jamais** de sélecteurs par tag ou ID. Voir [docs/guidelines/css-classes.md](../docs/guidelines/css-classes.md)

### Naming Props - Cohérence HTML

- Utiliser les noms HTML natifs : `required`, `readOnly`, `value`, `open`
- ❌ Éviter les préfixes : `isRequired`, `isReadOnly`, `isOpen`
- Pour props custom, utiliser des noms explicites : `errorMessage` (pas `error`)
- Voir [docs/guidelines/naming-props.md](../docs/guidelines/naming-props.md)

### Conditional Rendering - Pas de Leaked Render

```tsx
// ❌ Mauvais - peut render 0 ou une string vide
{
  items.length && <List items={items} />;
}

// ✅ Bon - ternaire explicite
{
  items.length > 0 ? <List items={items} /> : null;
}
{
  Boolean(subtitle) && <p>{subtitle}</p>;
}
```

Voir [docs/guidelines/jsx-no-leaked-render.md](../docs/guidelines/jsx-no-leaked-render.md)

### Structure Composants

```
ComponentName/
├── __tests__/
│   └── ComponentName.test.tsx
├── ComponentName.tsx
└── index.tsx
```

Voir [docs/guidelines/component-dod.md](../docs/guidelines/component-dod.md)

## Workflows Développement

### Lancer Storybook par Thème

```bash
npm run dev                      # Tous les Storybooks
npm run dev:distributeur         # Distributeur uniquement
npm run dev:client               # Client uniquement
npm run dev:prospect             # Prospect uniquement
```

### Build et Tests

```bash
npm run build                    # Build all (sequential, skip samples)
npm run build:distributeur       # Build Distributeur Storybook
npm run check                    # Format, lint et types avec Vite+
npm run format                   # Formatage avec Oxfmt
npm test                         # Vitest (tous packages)
```

**Important** : Turbo orchestre les builds avec dépendances (`^build`, `^lint`)

### Commits - Conventional Commits

Format strict avec scopes spécifiques :

```
<type>(scope): <description>

BREAKING CHANGE: [si applicable]
```

**Scopes** :

- `canopee` : changements transverses aux thèmes
- `prospect`, `client`, `distributeur` : changements spécifiques au thème
- `design-system` : changements généraux (CI, docs)

**Breaking changes** : ajouter `!` après scope + section `BREAKING CHANGE:` dans le footer

```
feat(prospect)!: remove deprecated Button prop

BREAKING CHANGE: The `size` prop has been removed, use `small` instead.
```

## Migration et Documentation

### Migration Prompts

Voir [docs/decision-records/0005-migration-prompts-standardization.md](../docs/decision-records/0005-migration-prompts-standardization.md) :

- Prompts séparés du changelog
- En anglais
- Commits incrémentaux recommandés

### Decision Records

Consulter [docs/decision-records/](../docs/decision-records/) pour comprendre les choix architecturaux :

- **0003** : Architecture multi-thèmes Client/Prospect
- **0005** : Standardisation des prompts migration

## Points Spécifiques au Projet

- **Material Symbols** : utilisé pour les icônes (peer dependency)
- **PostCSS** : configuration centralisée dans `packages/postcss-config`
- **Vite+** : configuration Oxlint/Oxfmt centralisée dans `vite.config.ts` ; Stylelint conserve les règles CSS
- **Turbo** : cache activé sauf pour tâches `dev` (persistent)
- **Workspace npm** : tous les packages sont liés via workspaces npm 11.6.4

## Présentations HTML

- Pour les présentations de ce dépôt, placez les fichiers HTML et leurs ressources sous `docs/presentation/`.
- La publication publique se fait uniquement par GitHub Pages via `.github/workflows/publish.yml`, après fusion sur `main`. Le déploiement conserve les fichiers Storybook existants et retire l’ancienne redirection de la racine vers `site-slash`.
- Pour toute demande de publication d’une présentation de ce dépôt, ne proposez ni n’utilisez le déploiement Vercel intégré au plugin Frontend Slides. Publiez par GitHub Pages après fusion sur `main`.
- La page d’accueil est la présentation Canopée : `https://axafrance.github.io/design-system/`.
- Chaque fichier HTML reste aussi accessible par son nom, par exemple `https://axafrance.github.io/design-system/canopee-design-system.html`.

<!-- rtk-instructions v2 -->

# RTK — Token-Optimized CLI

**rtk** is a CLI proxy that filters and compresses command outputs, saving 60-90% tokens.
Official site: https://www.rtk-ai.app/

## Rule

Always prefix shell commands with `rtk`:

If `rtk` is not installed in the current environment, run the same command directly without the prefix.

```bash
# Instead of:              Use:
git status                 rtk git status
git log -10                rtk git log -10
cargo test                 rtk cargo test
docker ps                  rtk docker ps
kubectl get pods           rtk kubectl get pods
```

## Meta commands (use directly)

```bash
rtk gain              # Token savings dashboard
rtk gain --history    # Per-command savings history
rtk discover          # Find missed rtk opportunities
rtk proxy <cmd>       # Run raw (no filtering) but track usage
```

<!-- /rtk-instructions -->

<!--VITE PLUS START-->

# Using Vite+, the Unified Toolchain for the Web

This project is using Vite+, a unified toolchain built on top of Vite, Rolldown, Vitest, tsdown, Oxlint, Oxfmt, and Vite Task. Vite+ wraps runtime management, package management, and frontend tooling in a single global CLI called `vp`. Vite+ is distinct from Vite, and it invokes Vite through `vp dev` and `vp build`. Run `vp help` to print a list of commands and `vp <command> --help` for information about a specific command.

Docs are local at `node_modules/vite-plus/docs` or online at https://viteplus.dev/guide/.

## Built-in Commands vs Scripts

`vp <name>` runs a built-in command. `vp run <name>` runs a `package.json` script or a `vite.config.ts` task. Scripts cannot overwrite built-ins, so `vp dev` and `vp run dev` may do different things. Check `package.json` and `vite.config.ts` first, and run `vp run <name>` when the project defines a script or task with that name.

## Running Scripts

Run TypeScript and JavaScript files with `vpx <file>`, for example `vpx ./scripts/seed.ts --dry-run`. It handles enums, decorators, JSX, and tsconfig `paths`, so do not add `tsx` or `ts-node` to run scripts. `vpx --watch <file>` reruns the file when a file it uses changes, in place of `tsx watch`. `vp node <file>` runs plain Node.js.

## Tool Versions

Run `vp toolchain` to show versions and relationships in the active Vite+
release. Add a tool name to select part of the graph. For example, run
`vp toolchain vite`. Use `--global` to ignore the local `vite-plus` package. Use
`vp why <package>` to show the package-manager dependency graph.

## Review Checklist

- [ ] Run `vp install` after pulling remote changes and before getting started.
- [ ] Run `vp check` and `vp test` to format, lint, type check and test changes.
- [ ] Check if there are `vite.config.ts` tasks or `package.json` scripts necessary for validation, run via `vp run <script>`.
- [ ] If setup, runtime, or package-manager behavior looks wrong, run `vp env doctor` and include its output when asking for help.

<!--VITE PLUS END-->
