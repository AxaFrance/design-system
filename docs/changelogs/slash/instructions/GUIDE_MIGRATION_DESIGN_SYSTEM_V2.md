# Instructions de Migration - Design System AXA Slash v2.0.5

Instructions réutilisables pour migrer automatiquement vers la version 2.0.5 du design system AXA Slash.

## Étape 1: Préparation

### 1.1 Backup et branches

```bash
# Créer une branche de migration
git checkout -b migration/design-system-v2.0.0

# Backup du projet
git tag backup-before-migration-$(date +%Y%m%d)
```

### 1.2 Mise à jour de la dépendance

```bash
# Dans package.json, mettre à jour la version
npm install @axa-fr/design-system-slash-react@2.0.5
```

## Étape 2: Migrations automatiques par recherche/remplacement

### 2.1 Migration des imports - Alert vers Message

```bash
# Rechercher et remplacer dans tous les fichiers .tsx/.ts
find src/ -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/import { Alert/import { Message/g'
find src/ -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/, Alert/, Message/g'
find src/ -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/Alert,/Message,/g'
```

### 2.2 Migration des imports - Badge vers Tag

```bash
# Rechercher et remplacer dans tous les fichiers .tsx/.ts
find src/ -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/import { Badge/import { Tag/g'
find src/ -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/, Badge/, Tag/g'
find src/ -name "*.tsx" -o -name "*.ts" | xargs sed -i 's/Badge,/Tag,/g'
```

### 2.3 Migration des composants - Alert vers Message

```bash
# Remplacer les usages du composant Alert
find src/ -name "*.tsx" | xargs sed -i 's/<Alert/<Message/g'
find src/ -name "*.tsx" | xargs sed -i 's/<\/Alert>/<\/Message>/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="error"/variant="error"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="info"/variant="information"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="danger"/variant="warning"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="warning"/variant="warning"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="success"/variant="success"/g'
# Supprimer l'attribut icon (géré automatiquement)
find src/ -name "*.tsx" | xargs sed -i 's/icon="[^"]*"//g'
```

### 2.4 Migration des composants - Badge vers Tag

```bash
# Remplacer les usages du composant Badge
find src/ -name "*.tsx" | xargs sed -i 's/<Badge/<Tag/g'
find src/ -name "*.tsx" | xargs sed -i 's/<\/Badge>/<\/Tag>/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="info"/variant="information"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="danger"/variant="warning"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="success"/variant="success"/g'
find src/ -name "*.tsx" | xargs sed -i 's/classModifier="error"/variant="error"/g'
```

### 2.5 Migration des composants - Accordion

```bash
# Remplacer classModifier par variant dans les composants Accordion
find src/ -name "*.tsx" | xargs sed -i 's/<Accordion classModifier="default"/<Accordion variant="default"/g'
find src/ -name "*.tsx" | xargs sed -i 's/<Accordion classModifier="white"/<Accordion variant="white"/g'
find src/ -name "*.tsx" | xargs sed -i 's/<Accordion classModifier="light"/<Accordion variant="light"/g'
find src/ -name "*.tsx" | xargs sed -i 's/<Accordion classModifier=""/<Accordion variant="default"/g'

# Rechercher les autres usages de classModifier sur Accordion pour traitement manuel
grep -r "Accordion.*classModifier=" src/ --include="*.tsx"
```

### 2.6 Migration des tokens CSS

```bash
# Mise à jour des tokens de couleur dans tous les fichiers CSS/SCSS
find src/ -name "*.css" -o -name "*.scss" | xargs sed -i 's/--green40/--green30/g'
find src/ -name "*.css" -o -name "*.scss" | xargs sed -i 's/--green50/--green40/g'
```

## Étape 3: Migrations manuelles complexes

### 3.1 Migration du composant Button

**Action :** Rechercher tous les fichiers contenant `<Button classModifier=`

```bash
grep -r "Button classModifier=" src/ --include="*.tsx"
```

**Pour chaque occurrence trouvée, appliquer les transformations suivantes :**

| Ancien                    | Nouveau                      |
| ------------------------- | ---------------------------- |
| `classModifier="success"` | `variant="validated"`        |
| `classModifier="reverse"` | `variant="secondary"`        |
| `classModifier="danger"`  | `variant="danger"`           |
| `classModifier=""`        | `variant="primary"` (défaut) |

**Migration des icônes dans Button :**

```bash
# Rechercher les boutons avec des icônes
grep -r "Button.*classModifier.*hasiconLeft\|Button.*classModifier.*hasiconRight" src/ --include="*.tsx"
```

Transformer manuellement :

- `classModifier="hasiconLeft"` + icône enfant → `leftIcon={icône}`
- `classModifier="hasiconRight"` + icône enfant → `rightIcon={icône}`

### 3.2 Ajout de MainContainer

**Action :** Identifier les pages principales

```bash
# Rechercher les composants de page
find src/pages -name "*.tsx" | head -10
```

**Pour chaque page, enrober le contenu principal dans MainContainer :**

Ajouter l'import :

```jsx
import { MainContainer } from '@axa-fr/design-system-slash-react';
```

Transformer le contenu :

```jsx
// Avant
export const MaPage = () => {
  return (
    <>
      <HeaderTitle title="Titre" />
      <section>{/* contenu */}</section>
    </>
  );
};

// Après
export const MaPage = () => {
  return (
    <>
      <HeaderTitle title="Titre" />
      <MainContainer>{/* contenu */}</MainContainer>
    </>
  );
};
```

## Étape 4: Validation

### 4.1 Tests de compilation

```bash
npm run build
```

### 4.2 Tests fonctionnels

```bash
npm run test
```

## Ressources

- [Changelog v2.0.0](https://github.com/AxaFrance/design-system/blob/main/docs/changelogs/slash/CHANGELOG_v2.0.0.md)
- [Storybook Design System](https://axafrance.github.io/design-system/slash/react/latest/?path=/docs/components-accordion--docs)
