# Utilisation de GitHub Copilot

Ce guide explique comment utiliser efficacement GitHub Copilot pour contribuer au Design System AXA France.

## Vue d'ensemble

GitHub Copilot est configuré dans ce projet avec :

- **Instructions globales** : Règles et conventions toujours actives
- **Agents spécialisés** : Experts pour des tâches spécifiques
- **Guidelines** : Documentation des standards du projet

## Instructions Globales

Les instructions globales sont définies dans `.github/copilot-instructions.md` et sont **automatiquement chargées** pour toutes les interactions avec Copilot dans ce workspace.

### Contenu des instructions

- Architecture du monorepo (Distributeur, Prospect, Client)
- Conventions CSS (BEM strict avec préfixe `af-`)
- Conventions de naming des props (HTML-native)
- Règles de conditional rendering
- Structure des composants
- Workflows de développement
- Format des commits (Conventional Commits)

### Quand sont-elles utilisées ?

**Toujours.** Copilot applique ces règles automatiquement lors de :

- Suggestions de code inline
- Génération de composants
- Refactoring
- Review de code

## Agents Spécialisés

Les agents sont des personas expertes dans un domaine précis. Ils doivent être **invoqués explicitement**.

### Agents disponibles

#### 1. Expert Création de Composants

**Fichier** : `.github/agents/composant-design-system.agent.md`

**Utilisation** :

```
@composant-design-system Créer un composant Card pour le thème Distributeur
```

**Expertise** :

- Création complète de composants React et CSS
- Application des conventions du Design System
- Génération de tests, stories et documentation
- Checklist complète en 6 phases

**Quand l'utiliser** :

- Créer un nouveau composant
- Scaffolder la structure complète (React + CSS + Tests + Storybook)
- Avoir un guide pas-à-pas pour la création

#### 2. Expert Accessibilité

**Fichier** : `.github/agents/accessibility-expert.agent.md` (ou `.agent.fr.md` pour version française)

**Utilisation** :

```
@accessibility-expert Vérifier l'accessibilité de ce dialog
```

**Expertise** :

- Standards WCAG 2.1/2.2 (A/AA/AAA)
- Sémantique HTML et ARIA
- Navigation clavier et gestion du focus
- Tests d'accessibilité (screen readers, axe, pa11y)

**Quand l'utiliser** :

- Vérifier l'accessibilité d'un composant
- Corriger des problèmes a11y
- Ajouter la navigation clavier
- Créer des composants complexes (modals, menus, tabs)

#### 3. Expert React Frontend

**Fichier** : `.github/agents/expert-react-frontend-engineer.agent.md`

**Utilisation** :

```
@expert-react-frontend Comment implémenter useOptimistic avec TypeScript ?
```

**Expertise** :

- React 19+ (hooks modernes, Server Components)
- TypeScript avancé
- Patterns de performance
- State management
- Testing avec React Testing Library

**Quand l'utiliser** :

- Questions sur React hooks avancés
- Patterns TypeScript complexes
- Optimisation de performance
- Architecture de composants

## Workflow de Création de Composant

### Avec l'agent spécialisé (Recommandé)

1. **Invoquer l'agent** :

   ```
   @composant-design-system Je veux créer un composant Badge pour le thème Prospect/Client avec variants success, warning, error
   ```

2. **Suivre la checklist** générée :
   - Phase 1 : Préparation
   - Phase 2 : Implémentation React
   - Phase 3 : Implémentation CSS
   - Phase 4 : Tests
   - Phase 5 : Documentation
   - Phase 6 : Validation

3. **Valider** :
   ```bash
   npm run lint
   npm test
   npm run build
   ```

### Sans agent (Quick mode)

Pour des modifications mineures, Copilot utilisera les instructions globales :

```
Ajouter une prop `size` au composant Button avec les valeurs small, medium, large
```

## Bonnes Pratiques

### 1. Contexte clair dans les prompts

❌ **Mauvais** :

```
Créer un bouton
```

✅ **Bon** :

```
Créer un composant Button pour le thème Distributeur avec variants primary/secondary et tailles small/medium/large, accessible WCAG AA
```

### 2. Spécifier le thème

Toujours préciser pour quel thème vous créez un composant :

```
@composant-design-system Créer un composant Modal pour Prospect/Client
```

### 3. Demander les tests

Si Copilot ne génère pas automatiquement les tests :

```
Ajouter les tests unitaires pour ce composant avec React Testing Library
```

### 4. Vérifier l'accessibilité

Pour tout composant interactif :

```
@accessibility-expert Vérifier l'accessibilité clavier et screen reader de ce composant
```

### 5. Demander la documentation

```
Générer le fichier .mdx Storybook pour ce composant avec exemples
```

## Exemples de Prompts Efficaces

### Création de composant

```
@composant-design-system Créer un composant Tooltip pour le thème Distributeur.
Le tooltip doit :
- S'afficher au hover et au focus
- Supporter les positions top/right/bottom/left
- Être accessible (ARIA et clavier)
- Inclure tests, stories et documentation
```

### Refactoring

```
Refactorer ce composant pour respecter les conventions BEM strictes et le naming HTML-native des props
```

### Accessibilité

```
@accessibility-expert Ce dialog ne gère pas bien le focus. Ajouter :
- Focus trap quand ouvert
- Restauration du focus à la fermeture
- Fermeture avec Escape
- Annoncement aux lecteurs d'écran
```

### Tests

```
Ajouter des tests pour :
- Tous les variants du composant
- La navigation clavier
- Les interactions utilisateur (click, hover)
- L'accessibilité (rôles ARIA)
```

## Vérification Automatique

Copilot applique automatiquement ces règles :

### ✅ Conventions respectées

- Classes CSS avec préfixe `af-` et BEM strict
- Props HTML-native (`disabled`, `required`) sans préfixe `is`
- Conditional rendering avec ternaires explicites
- Pas de `data-testid` dans les composants
- TypeScript strict avec types discriminés

### ❌ Anti-patterns détectés

Copilot devrait vous avertir si vous tentez :

```tsx
// ❌ Sélecteur par tag
button { color: red; }

// ❌ Prop avec préfixe
interface Props { isDisabled?: boolean; }

// ❌ Leaked render
{count && <span>{count}</span>}

// ❌ data-testid
<button data-testid="my-btn">Click</button>
```

## Commandes Utiles

### Activer un agent spécifique

Dans le chat Copilot :

```
@nom-agent votre question
```

### Demander le contexte du projet

```
Quelles sont les conventions CSS de ce projet ?
```

```
Comment créer un nouveau composant pour le thème Prospect ?
```

### Générer depuis un template

```
@composant-design-system Utiliser le template React pour créer un composant Accordion
```

## Limitations

### Ce que Copilot fait bien

- ✅ Appliquer les conventions BEM
- ✅ Respecter le naming des props
- ✅ Générer des structures de composants
- ✅ Créer des tests basiques
- ✅ Suggérer des améliorations d'accessibilité

### Ce qui nécessite validation humaine

- ⚠️ Choix architectural complexes
- ⚠️ Tests de navigation clavier avancés
- ⚠️ Vérification manuelle au lecteur d'écran
- ⚠️ Validation des contrastes dans tous les thèmes
- ⚠️ Tests dans Storybook pour chaque thème

## Ressources

- [Instructions globales](../../.github/copilot-instructions.md)
- [Agent Création Composant](../../.github/agents/composant-design-system.agent.md)
- [Agent Accessibilité](../../.github/agents/accessibility-expert.agent.md)
- [Agent React Expert](../../.github/agents/expert-react-frontend-engineer.agent.md)
- [Guidelines CSS](./css-classes.md)
- [Guidelines Props](./naming-props.md)
- [Guidelines JSX](./jsx-no-leaked-render.md)
- [Definition of Done](./component-dod.md)

## Support

Si Copilot ne respecte pas les conventions ou génère du code incorrect :

1. **Rappeler les règles** : Mentionner explicitement la convention dans votre prompt
2. **Utiliser un agent** : `@composant-design-system` applique les règles strictement
3. **Référencer une guideline** : "Respecter la guideline css-classes.md"
4. **Fournir un exemple** : Montrer le code attendu

## Amélioration Continue

Les instructions et agents évoluent avec le projet. Si vous identifiez :

- Une convention manquante
- Un pattern récurrent à documenter
- Une amélioration des agents

Proposez une modification des fichiers :

- `.github/copilot-instructions.md`
- `.github/agents/*.agent.md`
- `docs/guidelines/*.md`
