# Steps (Étapes)

## Présentation
Le composant Steps affiche un indicateur de progression horizontal. Le composant VerticalStep permet de créer un stepper vertical avec gestion des modes édition/validation/verrouillage. Le composant ItemFormHelper affiche l'état d'avancement d'une section de formulaire (à compléter / en cours / validé). Les composants FormHelper et ListFormHelper l'utilisent pour montrer l'avancement d'un formulaire à plusieurs sections sur une seule page.

## Import
```tsx
import {
  Steps,
  Step,
  VerticalStep,
  ItemFormHelper,
  FormHelper,
  ListFormHelper,
} from "@axa-fr/canopee-react/distributeur";
```

## Composants
- **Steps** : Conteneur des étapes horizontales
- **Step** : Étape individuelle dans le flux horizontal
- **VerticalStep** : Étape verticale avec gestion de mode (édition, validation, verrouillage)
- **ItemFormHelper** : Indicateur d'état d'avancement d'une section de formulaire
- **FormHelper** : Encart d'avancement d'un formulaire (titre, légende des états, contenu libre)
- **ListFormHelper** : Liste des étapes du formulaire, à placer dans `FormHelper`

## Steps horizontales

### Props — Steps

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Éléments `Step` enfants |
| `className` | `string` | `"af-steps-new"` | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM |

### Props — Step

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | **Obligatoire** | Identifiant unique de l'étape |
| `title` | `string` | **Obligatoire** | Titre de l'étape |
| `number` | `ReactNode` | - | Numéro affiché dans l'étape |
| `mode` | `"link" \| "active" \| "disabled"` | `"link"` | Mode d'affichage de l'étape |
| `href` | `string` | - | URL de navigation (utilisé en mode `"link"`) |
| `onClick` | `(e: CustomClickEvent) => void` | - | Gestionnaire de clic (utilisé en mode `"link"`) |
| `stateLabel` | `string` | - | Label d'état pour l'accessibilité (ex : "complété", "en cours", "à venir") |
| `className` | `string` | - | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM |

### Modes de Step

- **`"link"`** (défaut) : étape passée, cliquable (lien navigable)
- **`"active"`** : étape en cours, non cliquable
- **`"disabled"`** : étape future, non cliquable et grisée

### Exemple

```tsx
import { Steps, Step } from "@axa-fr/canopee-react/distributeur";
import type { StepLinkOnClickHandler } from "@axa-fr/canopee-react/distributeur";

const TunnelCommande = () => {
  const handleClick: StepLinkOnClickHandler = ({ id, title }) => {
    console.log(`Navigation vers l'étape ${title}`);
  };

  return (
    <Steps>
      <Step
        id="etape1"
        href="/etape1"
        number="1"
        title="Panier"
        mode="link"
        onClick={handleClick}
      />
      <Step
        id="etape2"
        href="/etape2"
        number="2"
        title="Livraison"
        mode="link"
        onClick={handleClick}
      />
      <Step
        id="etape3"
        number="3"
        title="Paiement"
        mode="active"
      />
      <Step
        id="etape4"
        title="Confirmation"
        mode="disabled"
      />
    </Steps>
  );
};
```

## VerticalStep

Le composant `VerticalStep` gère trois modes : `"locked"` (verrouillé), `"edited"` (en édition) et `"validated"` (validé). Le contenu affiché dépend du mode : le formulaire en mode édition, la restitution en mode validé, rien en mode verrouillé.

### Props — VerticalStep

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `string` | **Obligatoire** | Titre de l'étape |
| `stepMode` | `"edited" \| "validated" \| "locked"` | **Obligatoire** | Mode courant de l'étape |
| `onEdit` | `React.MouseEventHandler<HTMLButtonElement>` | **Obligatoire** | Gestionnaire appelé au clic sur le bouton Modifier (affiché en mode `"validated"`) |
| `form` | `ReactNode` | **Obligatoire** | Contenu du formulaire, affiché en mode `"edited"` |
| `restitution` | `ReactNode` | **Obligatoire** | Contenu de restitution, affiché en mode `"validated"` |
| `id` | `string` | Auto-généré | Identifiant du titre de l'étape (pour ancres/navigation) |
| `editButtonLabel` | `string` | `"Modifier"` | Texte du bouton de modification |
| `editButtonAriaLabel` | `string` | `"Modifier l'étape {title}"` | Aria-label du bouton de modification |
| `showRestitution` | `boolean` | `true` | Affiche ou masque la restitution en mode `"validated"` |
| `contentRight` | `string` | - | Contenu textuel affiché à droite du titre |
| `contentRightAriaLabel` | `string` | `"Contenu supplémentaire étape verticale {title}"` | Aria-label du contenu à droite |
| `readonly` | `boolean` | `false` | Masque le bouton Modifier en mode `"validated"` |
| `stateLabels` | `{ validatedState: string, editState: string, lockedState: string }` | `{ validatedState: "validée", editState: "en cours de modification", lockedState: "verrouillée" }` | Labels d'état pour l'accessibilité (aria-label de la section) |

### Exemple complet

```tsx
import { useState } from "react";
import { VerticalStep, TextInput, Button } from "@axa-fr/canopee-react/distributeur";

const FormulaireEtapes = () => {
  const [configMode, setConfigMode] = useState<"edited" | "validated" | "locked">("edited");
  const [confirmMode, setConfirmMode] = useState<"edited" | "validated" | "locked">("locked");

  const handleValiderConfig = () => {
    setConfigMode("validated");
    setConfirmMode("edited");
  };

  return (
    <>
      <VerticalStep
        title="Configuration"
        id="configurationStepTitle"
        stepMode={configMode}
        onEdit={() => setConfigMode("edited")}
        form={
          <form>
            <fieldset>
              <legend className="sr-only">Formulaire Configuration</legend>
              <TextInput
                id="dateEffet"
                name="dateEffet"
                label="Date d'effet"
                required
                helpMessage="jj/mm/aaaa"
              />
              <Button variant="validated" onClick={handleValiderConfig}>
                Valider
              </Button>
            </fieldset>
          </form>
        }
        restitution={<p>Date d'effet : 01/01/2026</p>}
      />

      <VerticalStep
        title="Confirmation"
        id="confirmationStepTitle"
        stepMode={confirmMode}
        onEdit={() => setConfirmMode("edited")}
        form={<p>Formulaire de confirmation...</p>}
        restitution={<p>Dossier confirmé</p>}
      />
    </>
  );
};
```

### Étape validée sans restitution

```tsx
<VerticalStep
  title="Configuration"
  stepMode="validated"
  onEdit={() => setMode("edited")}
  form={<p>Formulaire...</p>}
  restitution={<p>Restitution...</p>}
  showRestitution={false}
/>
```

### Étape validée en lecture seule (sans bouton Modifier)

```tsx
<VerticalStep
  title="Configuration"
  stepMode="validated"
  onEdit={() => {}}
  form={<p>Formulaire...</p>}
  restitution={<p>Résultat validé</p>}
  readonly
/>
```

### Étape avec contenu à droite

```tsx
<VerticalStep
  title="Configuration"
  stepMode="validated"
  contentRight="Contenu supplémentaire"
  onEdit={() => setMode("edited")}
  form={<p>Formulaire...</p>}
  restitution={<p>Restitution...</p>}
/>
```

### Labels d'état personnalisés (accessibilité)

Par défaut, le composant génère un `aria-label` de la forme `"Étape verticale {title} ({stateLabel})"`. On peut personnaliser les labels d'état :

```tsx
<VerticalStep
  title="Configuration"
  stepMode="validated"
  stateLabels={{
    validatedState: "completed",
    editState: "being edited",
    lockedState: "locked",
  }}
  onEdit={() => setMode("edited")}
  form={<p>Formulaire...</p>}
  restitution={<p>Restitution...</p>}
/>
{/* aria-label="Étape verticale Configuration (completed)" */}
```

## ItemFormHelper

`ItemFormHelper` est un atome qui signale l'état d'avancement d'une section de formulaire. Il se place à côté d'un titre de section ou dans une zone d'aide, et affiche une icône plus un libellé.

### Props — ItemFormHelper

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | `"todo" \| "inprogress" \| "validated"` | **Obligatoire** | État d'avancement : pilote l'icône, la couleur et le libellé par défaut |
| `label` | `string` | - | Nom de l'étape. Sans `label`, l'item affiche le texte de son état (usage légende) |
| `stateLabel` | `string` | Texte d'état du `variant` | Remplace le texte d'état : visible sans `label`, masqué et lu après le `label` sinon |
| `className` | `string` | - | Classe CSS additionnelle, ajoutée après le modifier BEM |

Les autres attributs HTML d'un `span` (`id`, `data-*`, `aria-*`…) sont transmis à la racine.

Le type `ItemFormHelperVariant` et le type `ItemFormHelperProps` sont exportés depuis `@axa-fr/canopee-react/distributeur`.

### Variants

| Variant (état Figma) | Icône | Couleur | Texte d'état par défaut |
|----------------------|-------|---------|-------------------------|
| `todo` (Todo) | `circle` (cercle vide) | `--axablue80` | `à compléter` |
| `inprogress` (Active) | `circle-fill` (cercle plein) | `--axablue80` | `en cours` |
| `validated` (Done) | `check` | `--green30` | `validé` |

Les icônes sont fournies par le composant (Material Symbols, rendues via `Svg` en 12 × 12) : rien à passer côté consommateur.

### Exemple

```tsx
import { ItemFormHelper, Title } from "@axa-fr/canopee-react/distributeur";

const SectionIdentite = () => (
  <>
    <Title>Identité</Title>
    <ItemFormHelper variant="inprogress" />
  </>
);
```

### Nom d'étape et texte d'état

```tsx
{/* Affiche « Pièces justificatives », lu « Pièces justificatives, à compléter » */}
<ItemFormHelper variant="todo" label="Pièces justificatives" />

{/* Texte d'état traduit */}
<ItemFormHelper variant="validated" label="Identity" stateLabel="completed" />
```

### Points d'attention

- L'état est toujours donné en texte : visible sans `label`, masqué visuellement et lu après le `label` sinon. L'icône est décorative (`aria-hidden`).
- La racine est un `span` en `inline-flex` : l'item se place dans une liste, un lien ou à la suite d'un titre sans casser le flux.
- Les textes d'état par défaut sont en français ; pour une application multilingue, passer `stateLabel`.

## FormHelper et ListFormHelper

`FormHelper` accompagne un formulaire à plusieurs sections affiché sur une seule page : un en-tête bleu avec le titre, une légende des trois états (rendue avec `ItemFormHelper`), puis un contenu libre, en général un `ListFormHelper`. `ListFormHelper` liste les sections dans l'ordre, chacune rendue avec `ItemFormHelper`.

À ne pas utiliser avec un stepper horizontal, ni comme navigation de page ou menu d'ancres (utiliser la Navbar ou l'Anchor Menu).

### Props — FormHelper

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `string` | **Obligatoire** | Titre affiché dans l'en-tête bleu |
| `heading` | `"h2" \| "h3" \| "h4"` | `"h2"` | Niveau du titre |
| `stateLabels` | `FormHelperStateLabels` | - | Textes de la légende, par état (`todo`, `inprogress`, `validated`) |
| `children` | `ReactNode` | **Obligatoire** | Contenu de l'encart, en général un `ListFormHelper` |
| `aria-label` | `string` | `"Progression du formulaire"` | Nom du repère `aside` |
| `className` | `string` | - | Classe CSS additionnelle |

Les autres attributs HTML d'un `aside` sont transmis.

### Props — ListFormHelper

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `steps` | `ListFormHelperStep[]` | **Obligatoire** | Sections du formulaire, dans l'ordre |
| `navAriaLabel` | `string` | `"étapes du formulaire"` | Nom du `nav`, rendu dès qu'une étape a un `href` |
| `stateLabels` | `FormHelperStateLabels` | - | Textes d'état lus après le nom de chaque étape |
| `className` | `string` | - | Classe CSS additionnelle de l'`ol` |

```ts
type ListFormHelperStep = {
  label: string; // nom de la section
  variant: "todo" | "inprogress" | "validated";
  href?: string; // ex. "#tarification" : rend l'étape cliquable
  onClick?: MouseEventHandler<HTMLAnchorElement>; // seulement avec href
};
```

Les types `FormHelperProps`, `ListFormHelperProps`, `ListFormHelperStep` et `FormHelperStateLabels` sont exportés depuis `@axa-fr/canopee-react/distributeur`.

### Exemple

```tsx
import { FormHelper, ListFormHelper } from "@axa-fr/canopee-react/distributeur";

const AssistantCreation = () => (
  <FormHelper title="Assistant de création">
    <ListFormHelper
      steps={[
        { label: "Informations clients", variant: "validated", href: "#clients" },
        { label: "Tarification", variant: "inprogress", href: "#tarification" },
        { label: "Signature du contrat", variant: "todo", href: "#signature" },
      ]}
    />
  </FormHelper>
);
```

### Depuis des VerticalStep

| `VerticalStep` (`stepMode`) | `ListFormHelper` (`variant`) |
|-----------------------------|------------------------------|
| `locked` | `todo` |
| `edited` | `inprogress` |
| `validated` | `validated` |

### Points d'attention

- `FormHelper` rend un `aside` nommé et un vrai titre (`h2` par défaut) ; `ListFormHelper` rend un `ol`, entouré d'un `nav` dès qu'une étape a un `href`.
- La première étape `inprogress` reçoit `aria-current="step"`. Chaque étape est lue « nom, état » (ex. « Tarification, en cours ») ; les liens sont soulignés en permanence.
- Le composant ne se positionne pas : le rendre sticky depuis la mise en page (via `className`).
- Pas d'état désactivé ni de titre de section : ils ne figurent pas dans la spécification zeroheight.
- Un seul `ListFormHelper` par `FormHelper` : il porte la numérotation de l'`ol`, le nom du `nav` et l'unique `aria-current`.

## Classes CSS
- `.af-steps-new` — Conteneur des étapes horizontales
- `.af-steps-list` — Liste des étapes horizontales
- `.af-steps-list-step` — Étape individuelle horizontale
- `.af-vertical-step` — Étape verticale
- `.af-vertical-step--edition` — Étape verticale en mode édition
- `.af-item-form-helper` — Indicateur d'état d'une section de formulaire
- `.af-item-form-helper--todo` / `--inprogress` / `--validated` — Modifiers d'état
- `.af-item-form-helper__label` — Texte affiché (nom de l'étape ou texte d'état)
- `.af-item-form-helper__state` — Texte d'état masqué visuellement, lu après le nom de l'étape
- `.af-form-helper` — Encart d'avancement (`aside`)
- `.af-form-helper__title` / `__legend` / `__body` — En-tête, légende et contenu de l'encart
- `.af-list-form-helper` — Liste des étapes (`ol`)
- `.af-list-form-helper__step` / `__link` — Étape et lien vers sa section
