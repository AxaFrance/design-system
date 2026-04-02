# Steps (Étapes)

## Présentation
Le composant Steps affiche un indicateur de progression horizontal. Le composant VerticalStep permet de créer un stepper vertical avec gestion des modes édition/validation/verrouillage.

## Import
```tsx
import { Steps, Step, VerticalStep } from "@axa-fr/canopee-react/distributeur";
```

## Composants
- **Steps** : Conteneur des étapes horizontales
- **Step** : Étape individuelle dans le flux horizontal
- **VerticalStep** : Étape verticale avec gestion de mode (édition, validation, verrouillage)

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

## Classes CSS
- `.af-steps-new` — Conteneur des étapes horizontales
- `.af-steps-list` — Liste des étapes horizontales
- `.af-steps-list-step` — Étape individuelle horizontale
- `.af-vertical-step` — Étape verticale
- `.af-vertical-step--edition` — Étape verticale en mode édition
