---
name: canopee-prospect-client
description: Guide d'utilisation du Design System Canopée pour les univers Prospect (Apollo, B2C) et Client (Look & Feel, B2C espace client AXA). Utilise ce skill dès qu'un développeur mentionne Apollo, Look & Feel, Prospect, Client, Canopée B2C, ou veut créer une interface pour les espaces clients ou prospects AXA. Utilise-le aussi quand le code importe depuis @axa-fr/canopee-react/prospect ou @axa-fr/canopee-react/client.
---

# Canopée Design System — Univers Prospect & Client

Ce skill te guide pour aider les développeurs à utiliser le Design System Canopée dans les univers **Prospect** (B2C acquisition) et **Client** (B2C espace client) dans leurs projets React.

## Deux thèmes, une seule API

| Thème                       | Ancienne lib                  | Package d'import                 | CSS                              |
| --------------------------- | ----------------------------- | -------------------------------- | -------------------------------- |
| **Prospect** (ex-Apollo)    | `@axa-fr/apollo-react`        | `@axa-fr/canopee-react/prospect` | `@axa-fr/canopee-css/prospect/…` |
| **Client** (ex-Look & Feel) | `@axa-fr/look-and-feel-react` | `@axa-fr/canopee-react/client`   | `@axa-fr/canopee-css/client/…`   |

Les composants ont **exactement la même API**. Seul l'import change. Le code partage 100 % de la logique (`*Common.tsx`) ; les thèmes (`*Apollo.tsx` / `*LF.tsx`) injectent uniquement les CSS et les sous-composants thématisés.

## Règles toujours appliquées

**CSS — BEM strict avec préfixe `af-`**

```css
.af-btn-client              /* Block */
.af-btn-client__icon        /* Element */
.af-btn-client--primary     /* Modifier */
```

Jamais de sélecteurs par tag HTML ou ID.

**Props — noms HTML natifs, sans préfixe booléen**

```tsx
<InputText required disabled value="..." />
```

**JSX — pas de leaked render**

```tsx
{
  items.length > 0 ? <List items={items} /> : null;
}
{
  Boolean(subtitle) && <p>{subtitle}</p>;
}
```

**Messages de formulaire — API unifiée `message` + `messageType`**

Tous les inputs utilisent `message` et `messageType` pour afficher les messages d'état :

```tsx
<InputText message="Valeur invalide" messageType="error" />
<InputText message="Format correct" messageType="success" />
<InputText message="Attention" messageType="warning" />
```

## Installation

Pour le détail complet (installation next/latest, app minimale, CSS uniquement) → lire **[references/16-demarrer-un-projet.md](./references/16-demarrer-un-projet.md)**

```bash
npm install @axa-fr/canopee-react@latest @axa-fr/canopee-css@latest
npm install @material-symbols/svg-400   # peer dependency pour les icônes
```

Import de base dans l'app (**une seule fois**, en point d'entrée) — inclut automatiquement reboot CSS, tokens et grille :

```tsx
// Thème Prospect
import "@axa-fr/canopee-react/prospect";
import { Button, InputText } from "@axa-fr/canopee-react/prospect";

// Thème Client
import "@axa-fr/canopee-react/client";
import { Button, InputText } from "@axa-fr/canopee-react/client";
```

## Icônes

Pour le détail complet (composant `Icon`, `ClickIcon`, accessibilité) → lire **[references/17-icones.md](./references/17-icones.md)**

```tsx
import home from "@material-symbols/svg-400/outlined/home.svg";
import { Svg, Icon } from "@axa-fr/canopee-react/prospect";

// SVG brut (sans conteneur ni style)
<Svg src={home} />

// Icon avec variante, taille et fond optionnel
<Icon src={home} variant="primary" size="M" hasBackground />
```

## Grid et layout responsive

Pour les tokens disponibles, leur surcharge, et les imports CSS par composant → lire **[references/18-tokens-css.md](./references/18-tokens-css.md)**

La grille repose sur des **colonnes CSS custom properties** via `GridContainerProps` :

```tsx
// Sur les inputs : prop containerProps
<InputText
	label="Nom"
	containerProps={{
		"data-cols-mobile": "12",
		"data-cols-tablet": "6",
		"data-cols-desktop-medium": "4",
	}}
/>

// Pour afficher la grille en dev
<DebugGrid />
```

## Catalogue des composants — quand lire quelle référence

### Boutons et actions

| Composant   | Référence                                 | Cas d'usage                                                      |
| ----------- | ----------------------------------------- | ---------------------------------------------------------------- |
| `Button`    | [01-button.md](./references/01-button.md) | CTA, actions, 7 variantes (primary, secondary, tertiary, ghost…) |
| `ClickIcon` | [01-button.md](./references/01-button.md) | Bouton icône seul                                                |
| `Link`      | [01-button.md](./references/01-button.md) | Lien stylisé, ouverture nouvel onglet                            |

### Accords et navigation

| Composant             | Référence                                         | Cas d'usage                                 |
| --------------------- | ------------------------------------------------- | ------------------------------------------- |
| `Accordion`           | [02-accordion.md](./references/02-accordion.md)   | Accordéon riche (titre, icône, tag, dates)  |
| `AccordionContextual` | [02-accordion.md](./references/02-accordion.md)   | Accordéon info/warning/reverse              |
| `AccordionCore`       | [02-accordion.md](./references/02-accordion.md)   | Accordéon low-level (`<details>/<summary>`) |
| `TabBar`              | [10-navigation.md](./references/10-navigation.md) | Barre d'onglets                             |
| `ItemTabBar`          | [10-navigation.md](./references/10-navigation.md) | Item d'onglet individuel                    |
| `Pagination`          | [10-navigation.md](./references/10-navigation.md) | Pagination numérotée                        |
| `Stepper`             | [10-navigation.md](./references/10-navigation.md) | Indicateur de progression multi-étapes      |

### Feedback et statuts

| Composant          | Référence                                                     | Cas d'usage                                         |
| ------------------ | ------------------------------------------------------------- | --------------------------------------------------- |
| `Message`          | [06-message-feedback.md](./references/06-message-feedback.md) | Alerte validation/error/warning/information/neutral |
| `CardMessage`      | [06-message-feedback.md](./references/06-message-feedback.md) | Carte message compacte                              |
| `Loader`           | [06-message-feedback.md](./references/06-message-feedback.md) | Plein écran de chargement                           |
| `Spinner`          | [06-message-feedback.md](./references/06-message-feedback.md) | Indicateur de chargement inline                     |
| `Skeleton`         | [06-message-feedback.md](./references/06-message-feedback.md) | Placeholder de chargement grille                    |
| `SkeletonList`     | [06-message-feedback.md](./references/06-message-feedback.md) | Skeleton pour listes                                |
| `ProgressBar`      | [11-progress.md](./references/11-progress.md)                 | Barre de progression simple                         |
| `ProgressBarGroup` | [11-progress.md](./references/11-progress.md)                 | Groupe de barres de progression                     |

### Modale

| Composant         | Référence                               | Cas d'usage                              |
| ----------------- | --------------------------------------- | ---------------------------------------- |
| `Modal`           | [07-modal.md](./references/07-modal.md) | Modale complète (header + body + footer) |
| `ModalCore`       | [07-modal.md](./references/07-modal.md) | Modale low-level (`<dialog>`)            |
| `ModalCoreHeader` | [07-modal.md](./references/07-modal.md) | Header de modale bas niveau              |
| `ModalCoreBody`   | [07-modal.md](./references/07-modal.md) | Corps de modale bas niveau               |
| `ModalCoreFooter` | [07-modal.md](./references/07-modal.md) | Footer de modale bas niveau              |

### Formulaires — entrées

| Composant       | Référence                                           | Cas d'usage                             |
| --------------- | --------------------------------------------------- | --------------------------------------- |
| `InputText`     | [03-form-inputs.md](./references/03-form-inputs.md) | Champ texte avec label, helper, message |
| `InputTextAtom` | [03-form-inputs.md](./references/03-form-inputs.md) | Input bas niveau                        |
| `Dropdown`      | [03-form-inputs.md](./references/03-form-inputs.md) | Select natif avec label                 |
| `TextArea`      | [03-form-inputs.md](./references/03-form-inputs.md) | Zone de texte multiligne                |
| `InputDate`     | [03-form-inputs.md](./references/03-form-inputs.md) | Sélecteur de date                       |
| `InputPhone`    | [03-form-inputs.md](./references/03-form-inputs.md) | Input téléphone avec indicatif pays     |
| `ItemLabel`     | [04-form-misc.md](./references/04-form-misc.md)     | Label de formulaire enrichi             |
| `ItemMessage`   | [04-form-misc.md](./references/04-form-misc.md)     | Message d'erreur/succès/warning         |

### Formulaires — cases et radios

| Composant            | Référence                                                           | Cas d'usage                           |
| -------------------- | ------------------------------------------------------------------- | ------------------------------------- |
| `Checkbox`           | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Checkbox simple (bas niveau)          |
| `CheckboxText`       | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Checkbox avec label                   |
| `CardCheckbox`       | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Groupe de cases en cartes             |
| `CardCheckboxOption` | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Option individuelle de carte checkbox |
| `Radio`              | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Radio simple (bas niveau)             |
| `CardRadioGroup`     | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Groupe de radios en cartes            |
| `CardRadioOption`    | [05-form-checkbox-radio.md](./references/05-form-checkbox-radio.md) | Option individuelle de carte radio    |

### Upload de fichiers

| Composant    | Référence                                       | Cas d'usage                                      |
| ------------ | ----------------------------------------------- | ------------------------------------------------ |
| `FileUpload` | [04-form-misc.md](./references/04-form-misc.md) | Zone de dépôt de fichiers complète               |
| `InputFile`  | [04-form-misc.md](./references/04-form-misc.md) | Input fichier (bas niveau)                       |
| `ItemFile`   | [04-form-misc.md](./references/04-form-misc.md) | Item fichier uploadé (état, erreur, suppression) |

### Listes et items

| Composant              | Référence                                               | Cas d'usage                                        |
| ---------------------- | ------------------------------------------------------- | -------------------------------------------------- |
| `List`                 | [08-lists.md](./references/08-lists.md)                 | Conteneur de liste (`<ul>` / `<ol>`)               |
| `ClickItem`            | [08-lists.md](./references/08-lists.md)                 | Item de liste cliquable (small/medium/large/agent) |
| `ContentItemDuo`       | [08-lists.md](./references/08-lists.md)                 | Paire label/valeur avec bouton optionnel           |
| `ContentItemDuoAction` | [08-lists.md](./references/08-lists.md)                 | Item duo avec action toggle ou buttons             |
| `ContentItemMono`      | [09-content-items.md](./references/09-content-items.md) | Item mono (icon/picture/stick)                     |
| `DataAgent`            | [09-content-items.md](./references/09-content-items.md) | Carte agent avec contacts et actions               |

### Visuels et affichage de données

| Composant | Référence                                   | Cas d'usage                                          |
| --------- | ------------------------------------------- | ---------------------------------------------------- |
| `Tag`     | [15-visuals.md](./references/15-visuals.md) | Label de statut (info/success/warning/error/neutral) |
| `Icon`    | [15-visuals.md](./references/15-visuals.md) | Icône SVG avec variante et taille                    |
| `Heading` | [15-visuals.md](./references/15-visuals.md) | Titre de page avec icône, sous-titres, tag           |
| `Divider` | [15-visuals.md](./references/15-visuals.md) | Séparateur `<hr>`                                    |
| `Card`    | [15-visuals.md](./references/15-visuals.md) | Conteneur carte polymorphique                        |
| `Toggle`  | [15-visuals.md](./references/15-visuals.md) | Interrupteur on/off                                  |

### Tableaux

| Composant          | Référence                                             | Cas d'usage                                 |
| ------------------ | ----------------------------------------------------- | ------------------------------------------- |
| `Table`            | [14-data-display.md](./references/14-data-display.md) | Tableau responsive (THead/TBody/Tr/Th/Td)   |
| `TableMobileCard`  | [14-data-display.md](./references/14-data-display.md) | Table au format carte sur mobile (dl/dt/dd) |
| `TimelineVertical` | [14-data-display.md](./references/14-data-display.md) | Timeline verticale avec titre et tag        |

### Layout

| Composant       | Référence                                 | Cas d'usage                                 |
| --------------- | ----------------------------------------- | ------------------------------------------- |
| `Footer`        | [12-layout.md](./references/12-layout.md) | Pied de page avec liens, réseaux, copyright |
| `FormLayout`    | [12-layout.md](./references/12-layout.md) | Mise en page de formulaire responsive       |
| `ExitLayout`    | [12-layout.md](./references/12-layout.md) | Page de sortie (confirmation / erreur)      |
| `Fieldset`      | [12-layout.md](./references/12-layout.md) | Groupe de form en carte                     |
| `LevelSelector` | [12-layout.md](./references/12-layout.md) | Sélecteur de niveau par incréments          |

### Pages complètes

| Composant   | Référence                               | Cas d'usage                             |
| ----------- | --------------------------------------- | --------------------------------------- |
| `ValidPage` | [13-pages.md](./references/13-pages.md) | Page de confirmation avec agent et lien |
| `ErrorPage` | [13-pages.md](./references/13-pages.md) | Page d'erreur avec lien de retour       |

### Utilitaires

| Composant                 | Cas d'usage                                                                       |
| ------------------------- | --------------------------------------------------------------------------------- |
| `Svg`                     | Wrapper SVG brut (sans variante) — voir [17-icones.md](./references/17-icones.md) |
| `BasePicture`             | Image simple (fallback logo AXA)                                                  |
| `DebugGrid`               | Superposition grille pour le développement                                        |
| `GridContainerProps` type | Props `data-cols-*` pour la grille responsive                                     |

### Guides transverses

| Guide            | Référence                                                         | Cas d'usage                                           |
| ---------------- | ----------------------------------------------------------------- | ----------------------------------------------------- |
| Démarrage projet | [16-demarrer-un-projet.md](./references/16-demarrer-un-projet.md) | Installation, app minimale, configuration CSS         |
| Icônes           | [17-icones.md](./references/17-icones.md)                         | Material Symbols, Svg, Icon, ClickIcon, accessibilité |
| Tokens CSS       | [18-tokens-css.md](./references/18-tokens-css.md)                 | Variables CSS, surcharge, imports par composant       |

---

_Version : 2026.03.27_
