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

client/apollo/react/       # Thin wrapper re-exportant prospect-client
client/look-and-feel/react # Thin wrapper re-exportant prospect-client
slash/react/               # Thin wrapper re-exportant distributeur
```

**Points critiques** :
- Les composants Prospect/Client partagent du code (`*Common.tsx`) avec surcharges par thème
- Les packages `client/*/react` et `slash/react` ne sont que des re-exports
- Le vrai code React est dans `packages/canopee-react/src/`
- Les CSS sont dans `packages/canopee-css/` et `client/*/css`, `slash/css`

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
{items.length && <List items={items} />}

// ✅ Bon - ternaire explicite
{items.length > 0 ? <List items={items} /> : null}
{Boolean(subtitle) && <p>{subtitle}</p>}
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
npm run lint:slash               # Lint Distributeur seulement
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
- **ESLint/Prettier** : configs partagées dans `packages/eslint-config` et `packages/prettier-config`
- **Turbo** : cache activé sauf pour tâches `dev` (persistent)
- **Workspace npm** : tous les packages sont liés via workspaces npm 11.6.4
