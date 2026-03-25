# ProgressBar, ProgressBarGroup

---

## ProgressBar

Barre de progression simple (`<progress>` HTML) avec label et affichage optionnel du pourcentage.

### Import

```tsx
import { ProgressBar } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ProgressBarProps = ComponentProps<"progress"> & {
  label?: ReactNode;              // Label affiché au-dessus (crée un <label> lié au <progress>)
  showPercentage?: boolean;       // Affiche le pourcentage à droite (défaut: false)
};
```

Supporte tous les attributs natifs `<progress>` : `value`, `max`, `id`, etc.

### Exemple

```tsx
// Basique
<ProgressBar value={60} max={100} />

// Avec label et pourcentage
<ProgressBar
  value={75}
  max={100}
  label="Progression du téléversement"
  showPercentage
/>

// Dans un formulaire multi-étapes
<ProgressBar
  value={currentStep}
  max={totalSteps}
  label={`Étape ${currentStep} sur ${totalSteps}`}
  aria-label="Progression de votre demande"
/>
```

---

## ProgressBarGroup

Groupe de barres de progression utilisé par le `Stepper` pour visualiser les étapes.

### Import

```tsx
import { ProgressBarGroup } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ProgressBarGroupProps = {
  currentStep: number;            // Étape actuelle (1-based, obligatoire)
  /** @deprecated Use stepsCount */ nbSteps?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  stepsCount?: 2 | 3 | 4 | 5 | 6 | 7 | 8;  // Nombre total d'étapes (défaut via nbSteps ou 4)
  currentStepProgress?: number;   // % de completion de l'étape courante (0-100)
  max?: number;                   // Valeur max de progress (défaut: 100)
  className?: string;
} & Omit<ComponentProps<"ol">, "children" | "className">;
```

### Comportement

Chaque barre correspond à une étape :  
- Étapes **complétées** (index < currentStep) → `value = max` (100%)  
- Étape **courante** → `value = currentStepProgress`  
- Étapes **futures** → `value = 0`

La progression entre étapes est animée avec `useSequentialProgress`.

### Exemple

```tsx
// 3 étapes, actuellement à l'étape 2 à 60%
<ProgressBarGroup
  stepsCount={3}
  currentStep={2}
  currentStepProgress={60}
/>

// 5 étapes, étape 4 complète
<ProgressBarGroup
  stepsCount={5}
  currentStep={5}
  currentStepProgress={0}
/>
```

> **Note** : Préférer `Stepper` quand du titre et contexte sont nécessaires. `ProgressBarGroup` est le sous-composant interne du `Stepper`.
