# Formulaires — Checkbox et Radio

---

## Checkbox (bas niveau)

Input checkbox HTML accessible, sans label.

### Import

```tsx
import { Checkbox } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type CheckboxProps = {
} & Omit<ComponentProps<"input">, "disabled" | "type">;
// Tous les attributs <input type="checkbox"> transmis
```

---

## CheckboxText

Checkbox avec label inline et message d'état.

### Import

```tsx
import { CheckboxText } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type CheckboxTextProps = {
  label: string | ReactNode;      // Label affiché à droite de la checkbox (obligatoire)
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  containerProps?: GridContainerProps;
} & Omit<CheckboxProps, "aria-errormessage" | "aria-invalid">;
```

### Exemple

```tsx
<CheckboxText
  name="terms"
  required
  label={
    <>
      J'accepte les <Link href="/cgu">conditions générales d'utilisation</Link>
    </>
  }
  message="Vous devez accepter les CGU pour continuer"
  messageType="error"
/>
```

---

## CardCheckbox

Groupe de checkboxes en mode carte (vertical ou horizontal). Peut fonctionner en mode `text` pour un rendu CheckboxText.

### Import

```tsx
import { CardCheckbox } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type CardCheckboxProps = {
  type?: "vertical" | "horizontal";  // Orientation des cartes (défaut: "vertical")
  mode?: "text";                      // Mode CheckboxText au lieu de cartes
  label: ReactNode;                   // Label du groupe (légende)
  description?: ReactNode;
  required?: boolean;
  options: {
    label: ReactNode;
    value: string;
    checked?: boolean;
    disabled?: boolean;
    description?: ReactNode;
    subtitle?: ReactNode;
    icon?: string;                    // SVG src pour l'icône de la carte
  }[];
  name: string;                       // Attribut name du groupe
  onChange?: ChangeEventHandler<HTMLInputElement>;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  containerProps?: GridContainerProps<"fieldset">;
};
```

### Exemple

```tsx
<CardCheckbox
  label="Quels contrats souhaitez-vous renouveler ?"
  description="Sélectionnez un ou plusieurs contrats"
  name="contracts"
  required
  onChange={(e) => handleChange(e)}
  options={[
    {
      label: "Assurance Auto",
      value: "auto",
      checked: false,
      icon: autoIcon,
      description: "Véhicule personnel",
    },
    {
      label: "Assurance Habitation",
      value: "home",
      checked: true,
      icon: homeIcon,
    },
    {
      label: "Assurance Santé",
      value: "health",
      checked: false,
      disabled: true,
    },
  ]}
/>

// Mode horizontal
<CardCheckbox
  label="Préférences"
  name="prefs"
  type="horizontal"
  options={[
    { label: "Email", value: "email" },
    { label: "SMS", value: "sms" },
  ]}
/>
```

---

## CardCheckboxOption

Option individuelle de carte checkbox (utilisé à l'intérieur de `CardCheckbox` ou seul).

### Import

```tsx
import { CardCheckboxOption } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type CardCheckboxOptionProps = CheckboxProps & {
  label: ReactNode;
  type?: "vertical" | "horizontal";
  description?: ReactNode;
  subtitle?: ReactNode;
  icon?: IconProps["src"];          // SVG src
};
```

---

## Radio (bas niveau)

Input radio HTML accessible, sans label.

### Import

```tsx
import { Radio } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type RadioProps = Omit<ComponentProps<"input">, "disabled" | "type"> & {
  isInvalid?: boolean;            // Ajoute la classe af-radio--invalid
};
```

---

## CardRadioGroup

Groupe de radios en mode cartes.

### Import

```tsx
import { CardRadioGroup } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type CardRadioGroupProps = {
  cardStyle?: "vertical" | "horizontal";  // Orientation des cartes
  position?: "line" | "column";           // "column" pour vertical, "line" pour horizontal
  label: ReactNode;                        // Légende du groupe (obligatoire)
  description?: ReactNode;
  required?: boolean;
  options: {
    label: ReactNode;
    value: string | number;
    checked?: boolean;
    disabled?: boolean;
    description?: ReactNode;
    subtitle?: ReactNode;
    icon?: string;                          // SVG src
    src?: string;                           // Image (BasePicture)
    basePictureProps?: Partial<ComponentProps<typeof BasePicture>>;
  }[];
  name: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  containerProps?: GridContainerProps<"fieldset">;
};
```

### Exemple

```tsx
<CardRadioGroup
  label="Quelle assurance vous convient ?"
  name="insurance"
  required
  onChange={(e) => setInsurance(e.target.value)}
  options={[
    {
      label: "Formule Essentielle",
      value: "essential",
      checked: true,
      description: "Couverture de base",
      subtitle: "À partir de 12€/mois",
      icon: shieldIcon,
    },
    {
      label: "Formule Confort",
      value: "comfort",
      checked: false,
      description: "Couverture étendue",
      subtitle: "À partir de 22€/mois",
      icon: shieldPlusIcon,
    },
  ]}
/>

// Horizontal
<CardRadioGroup
  label="Êtes-vous propriétaire ?"
  name="ownership"
  position="line"
  options={[
    { label: "Oui", value: "yes" },
    { label: "Non", value: "no" },
  ]}
/>
```

---

## CardRadioOption

Option individuelle de carte radio (utilisé dans `CardRadioGroup` ou seul).

### Import

```tsx
import { CardRadioOption } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type CardRadioOptionProps = {
  label: ReactNode;
  position?: "vertical" | "horizontal";
  icon?: string;                    // SVG src
  src?: string;                     // URL image (BasePicture)
  basePictureProps?: Partial<ComponentProps<typeof BasePicture>>;
  description?: ReactNode;
  subtitle?: ReactNode;
  isInvalid?: boolean;
} & Omit<ComponentProps<"input">, "size">;  // attributs <input type="radio">
```
