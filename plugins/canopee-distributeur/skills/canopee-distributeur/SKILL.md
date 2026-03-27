---
name: canopee-distributeur
description: Guide d'utilisation du Design System Canopée pour l'univers Distributeur (B2B, applications internes collaborateurs/distributeurs AXA). Utilise ce skill dès qu'un développeur mentionne Canopée, Slash, le design system distributeur, des composants React AXA B2B, ou veut créer une interface pour des applications internes AXA. Utilise-le aussi quand le code importe depuis @axa-fr/canopee-react/distributeur ou @axa-fr/canopee-css/distributeur.
---

# Canopée Design System — Univers Distributeur

Ce skill te guide pour aider les développeurs à utiliser le Design System Canopée Distributeur dans leurs projets React B2B. Tous les imports viennent de `@axa-fr/canopee-react/distributeur`.

## Règles toujours appliquées

Ces règles s'appliquent à tout code que tu génères avec ce design system.

**CSS — BEM strict avec préfixe `af-`**

```css
.af-button           /* Block */
.af-button__icon     /* Element */
.af-button--primary  /* Modifier */
```

Jamais de sélecteurs par tag HTML ou par ID.

**Props — noms HTML natifs, sans préfixe**

```tsx
<TextInput required readOnly value="..." />
```

**JSX — pas de leaked render**

```tsx
{
  items.length > 0 ? <List items={items} /> : null;
}
```

**Formulaires — toujours enveloppés dans `<form className="af-form">`**

**Composants hauts niveau d'abord** — utilise `TextInput` plutôt que `Text`, `SelectInput` pour les formulaires complets, sauf besoin explicite du bas niveau.

## Installation et démarrage

Pour le détail complet (installation, configuration CSS, application minimale) → lire **[references/38-demarrer-un-projet.md](./references/38-demarrer-un-projet.md)**

```bash
npm install @axa-fr/canopee-react@latest @axa-fr/canopee-css@latest
# Icônes (recommandé)
npm install @material-symbols/svg-400
```

Import de base dans ton application :

```tsx
import "@axa-fr/canopee-css/distributeur/common/tokens.css"; // tokens CSS globaux
import { Button } from "@axa-fr/canopee-react/distributeur";
```

## Icônes

Pour le détail complet (bonnes pratiques, accessibilité, SVG custom) → lire **[references/39-icones.md](./references/39-icones.md)**

```tsx
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

<Svg src={home} />;
```

## Tokens CSS (variables)

Pour la liste des tokens et les bonnes pratiques de surcharge → lire **[references/40-tokens-css.md](./references/40-tokens-css.md)**

```ts
import "@axa-fr/canopee-css/distributeur/common/tokens.css";
```

## Catalogue des composants — quand lire quelle référence

Lis la référence correspondante dès que le développeur demande de l'aide sur un composant ou veut l'utiliser.

### Composants de base

| Composant | Référence                                   | Cas d'usage                                             |
| --------- | ------------------------------------------- | ------------------------------------------------------- |
| `Button`  | [01-button.md](./references/01-button.md)   | CTA, actions, variantes primary/secondary/danger/ghost… |
| `Card`    | [02-card.md](./references/02-card.md)       | Sélection visuelle par carte cliquable                  |
| `Tag`     | [16-tag.md](./references/16-tag.md)         | Labels de statut, catégories                            |
| `Link`    | [15-link.md](./references/15-link.md)       | Liens stylisés, intégration React Router / Next.js      |
| `Divider` | [18-divider.md](./references/18-divider.md) | Séparateur horizontal ou vertical                       |
| `Title`   | [19-title.md](./references/19-title.md)     | Titre stylé h2/h3/h4 avec éléments latéraux             |
| `Action`  | [20-action.md](./references/20-action.md)   | Lien circulaire avec icône                              |
| `Svg`     | [21-svg.md](./references/21-svg.md)         | Enveloppe SVG pour les icônes Material Symbols          |

### Layout

| Composant                                   | Référence                                                 | Cas d'usage                       |
| ------------------------------------------- | --------------------------------------------------------- | --------------------------------- |
| `Header`, `NavBar`, `Name`, `User`, `Infos` | [10-header.md](./references/10-header.md)                 | Barre de navigation supérieure    |
| `Footer`                                    | [11-footer.md](./references/11-footer.md)                 | Pied de page avec logo et version |
| `MainContainer`                             | [22-main-container.md](./references/22-main-container.md) | Conteneur principal `<main>`      |

### Formulaires — entrées texte

| Composant                    | Référence                                             | Cas d'usage                              |
| ---------------------------- | ----------------------------------------------------- | ---------------------------------------- |
| `TextInput` / `Text`         | [03-text-input.md](./references/03-text-input.md)     | Champs texte, email, tel, password, url… |
| `Textarea` / `TextareaInput` | [29-textarea.md](./references/29-textarea.md)         | Texte multiligne                         |
| `Pass` / `PassInput`         | [32-pass-input.md](./references/32-pass-input.md)     | Mot de passe avec toggle visibilité      |
| `Number` / `NumberInput`     | [33-number-input.md](./references/33-number-input.md) | Entrée numérique                         |
| `Date` / `DateInput`         | [31-date-input.md](./references/31-date-input.md)     | Sélecteur de date                        |

### Formulaires — sélections

| Composant                                     | Référence                                                   | Cas d'usage                                              |
| --------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| `Checkbox` / `CheckboxItem` / `CheckboxInput` | [04-checkbox.md](./references/04-checkbox.md)               | Sélection multiple, modes classic/default/inline/toggle  |
| `Radio` / `RadioItem` / `RadioInput`          | [17-radio.md](./references/17-radio.md)                     | Sélection unique, modes classic/default/inline/cardRadio |
| `Select` / `SelectInput`                      | [05-select.md](./references/05-select.md)                   | Dropdown, options ou JSX children                        |
| `Choice` / `ChoiceInput`                      | [30-choice.md](./references/30-choice.md)                   | Choix binaire oui/non (options booléennes)               |
| `MultiSelect` / `MultiSelectInput`            | [35-multi-select.md](./references/35-multi-select.md)       | Sélection multiple avancée (react-select, async)         |
| `File` / `FileInput`                          | [34-file-input.md](./references/34-file-input.md)           | Upload fichier avec drag-and-drop                        |
| `NestedQuestion`                              | [37-nested-question.md](./references/37-nested-question.md) | Questions conditionnelles imbriquées                     |

### Composants Expérimentaux

Disponibles via `@axa-fr/canopee-react/distributeur-experimental` — API instable, à utiliser avec précaution : `InputContainer`, `Label`, `Input`, `ItemMessage`, `InputUnit`.

### Structure et feedback

| Composant                            | Référence                                                       | Cas d'usage                                        |
| ------------------------------------ | --------------------------------------------------------------- | -------------------------------------------------- |
| `Message`                            | [06-message.md](./references/06-message.md)                     | Alertes error/warning/info/success, dismissible    |
| `Accordion` / `CollapseCard`         | [07-accordion.md](./references/07-accordion.md)                 | Sections dépliables, variantes default/white/light |
| `Modal` / `BooleanModal`             | [08-modal.md](./references/08-modal.md)                         | Fenêtres modales, tailles sm/default/lg            |
| `Table`                              | [09-table.md](./references/09-table.md)                         | Tableaux avec THead/TBody/Th/Td, pagination        |
| `Tabs`                               | [12-tabs.md](./references/12-tabs.md)                           | Navigation par onglets                             |
| `Steps` / `VerticalStep`             | [13-steps.md](./references/13-steps.md)                         | Indicateur de progression horizontale/verticale    |
| `Restitution` / `SectionRestitution` | [14-restitution.md](./references/14-restitution.md)             | Affichage lecture seule label/valeur               |
| `Popover`                            | [23-popover.md](./references/23-popover.md)                     | Infobulle au clic ou au survol                     |
| `HelpButton`                         | [24-help-button.md](./references/24-help-button.md)             | Bouton d'aide contextuelle (wrap Popover)          |
| `Loader`                             | [25-loader.md](./references/25-loader.md)                       | Indicateur de chargement avec overlay              |
| `CardData`                           | [26-card-data.md](./references/26-card-data.md)                 | Carte de données avec en-tête structuré            |
| `EditorialMessage`                   | [27-editorial-message.md](./references/27-editorial-message.md) | Message éditorial (écologie, promo, info)          |
| `Summary`                            | [28-summary.md](./references/28-summary.md)                     | Récapitulatif des erreurs de formulaire            |

## Variants rapides à mémoriser

- **Button** : `primary` · `secondary` · `validated` · `danger` · `ghost` · `ghost-reverse`
- **Message** : `error` · `warning` · `info` · `success`
- **Tag** : `success` · `warning` · `error` · `information` · `default` · `dark` · `purple` · `gray` · `white`
- **Accordion** : `default` · `white` · `light`
- **Radio** : `classic` · `default` · `inline` · `cardRadio`
- **Checkbox** : `classic` · `default` · `inline` · `toggle`

## Accessibilité — points clés

Tous les composants respectent WCAG 2.1. Rappels lors de la génération de code :

- Fournir un `aria-label` sur les boutons icône seule
- Utiliser `scope="col"` / `scope="row"` dans les `<th>` de tableaux
- Ne jamais véhiculer une information uniquement par la couleur
- Tester la navigation clavier (Tab, Enter, Espace, flèches)

---

_Version : 2026.03.27-d_
