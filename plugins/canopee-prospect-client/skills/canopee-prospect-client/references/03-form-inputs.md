# Formulaires — Inputs texte, dates et téléphone

Tous les composants de cette section partagent le même pattern :
- `label` : label du champ
- `helper` : texte d'aide affiché sous le label
- `message` + `messageType` : message d'état
- `containerProps` : props `GridContainerProps` pour la grille responsive (data-cols-*)
- `required` : marqueur visuel requis + attribut HTML `required`
- Supportent `ref` (forwardRef)

---

## InputText

Champ texte avec label, helper, message et optional unit.

### Import

```tsx
import { InputText } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type InputTextProps = ComponentProps<"input"> & {
  unit?: ReactNode;               // Unité affichée (ex: icône €, texte "km")
  classModifier?: string;
  label?: ReactNode;              // Label au-dessus du champ
  helper?: string;                // Texte d'aide (ex: "Format attendu : JJ/MM/AAAA")
  message?: ReactNode;            // Message d'état unifié
  messageType?: "error" | "success" | "warning";
  containerProps?: GridContainerProps;
  description?: ReactNode;        // Description enrichie sous le label
  moreButtonLabel?: ReactNode;    // Bouton "en savoir plus" dans le label
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
  sideButtonLabel?: ReactNode;    // Bouton secondaire dans le label (ex: "Modifier")
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
```

### Exemples

```tsx
import { InputText } from "@axa-fr/canopee-react/prospect";
import { Svg } from "@axa-fr/canopee-react/prospect";
import euroIcon from "@material-symbols/svg-400/outlined/euro_symbol.svg";

// Basique
<InputText
  label="Votre nom"
  name="name"
  placeholder="Jean Dupont"
  required
/>

// Avec message d'erreur natif
<InputText
  label="Email"
  type="email"
  name="email"
  message="Format d'email invalide"
  messageType="error"
/>

// Avec unité
<InputText
  label="Montant"
  type="number"
  name="amount"
  unit={<Svg src={euroIcon} aria-label="en euros" />}
/>

// Avec description et bouton more
<InputText
  label="Numéro de contrat"
  name="contract"
  description="Disponible sur votre attestation"
  moreButtonLabel="En savoir plus"
  onMoreButtonClick={() => openHelp()}
/>

// Grille responsive
<InputText
  label="Code postal"
  name="zipcode"
  containerProps={{
    "data-cols-mobile": "12",
    "data-cols-tablet": "6",
    "data-cols-desktop-medium": "4",
  }}
/>
```

---

## Dropdown

Select natif enrichi avec label et messages.

### Import

```tsx
import { Dropdown } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type DropdownProps = ComponentPropsWithRef<"select"> & {
  id?: string;
  classModifier?: string;
  label?: ReactNode;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  placeholder?: string;           // Option désactivée en premier
  description?: ReactNode;
  helper?: string;
  containerProps?: GridContainerProps;
  moreButtonLabel?: ReactNode;
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
  sideButtonLabel?: ReactNode;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
```

### Exemple

```tsx
<Dropdown label="Pays" name="country" required placeholder="Choisir un pays">
  <option value="FR">France</option>
  <option value="BE">Belgique</option>
  <option value="CH">Suisse</option>
</Dropdown>

<Dropdown
  label="Civilité"
  name="civility"
  message="Ce champ est obligatoire"
  messageType="error"
>
  <option value="M">M.</option>
  <option value="Mme">Mme</option>
</Dropdown>
```

---

## TextArea

Zone de texte multiligne avec label et messages.

### Import

```tsx
import { TextArea } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TextAreaProps = ComponentPropsWithRef<"textarea"> & {
  label?: ReactNode;
  helper?: string;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  containerProps?: GridContainerProps;
  description?: ReactNode;
  moreButtonLabel?: ReactNode;
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
  sideButtonLabel?: ReactNode;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
```

### Exemple

```tsx
<TextArea
  label="Votre message"
  name="message"
  rows={5}
  placeholder="Décrivez votre demande..."
  required
  message="Le message est trop court (min. 20 caractères)"
  messageType="error"
/>
```

---

## InputDate

Sélecteur de date avec support du picker natif ou mode texte uniquement (`hidePicker`).

### Import

```tsx
import { InputDate } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type InputDateProps = Omit<ComponentPropsWithRef<"input">, "value" | "min" | "max"> & {
  classModifier?: string;
  defaultValue?: Date | string;
  value?: Date | string;          // Accepte un objet Date
  min?: string;                   // Format ISO: "2020-01-01"
  max?: string;
  helper?: string;
  hidePicker?: boolean;           // Cache l'icône picker natif
  label: ReactNode;               // Obligatoire
  containerProps?: GridContainerProps;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  description?: ReactNode;
  moreButtonLabel?: ReactNode;
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
```

### Exemple

```tsx
<InputDate
  label="Date de naissance"
  name="birthdate"
  required
  min="1900-01-01"
  max="2006-12-31"
/>

<InputDate
  label="Date de début"
  name="startDate"
  value={new Date("2024-01-15")}
  onChange={(e) => setDate(e.target.value)}
  hidePicker
/>
```

---

## InputPhone

Champ téléphone avec sélecteur de code pays (react-select) et masque français.

### Import

```tsx
import { InputPhone, type OptionType } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type InputPhoneProps = ComponentPropsWithRef<"input"> & {
  classModifier?: string;
  helper?: string;
  defaultCountry?: string;        // Code pays par défaut (ex: "FR")
  showSelect?: boolean;           // Affiche le sélecteur de pays (défaut: false)
  disabled?: boolean;
  countryCodeOptions?: OptionType[]; // Liste des pays { label, value }
  onChangeSelect?: (value: SingleValue<OptionType>) => void;
  onChangeInput?: (value: string) => void; // Valeur démasquée
  mask?: (value: string) => string;        // Fonction de masque personnalisée
  label: ReactNode;               // Obligatoire
  containerProps?: GridContainerProps;
  message?: ReactNode;
  messageType?: "error" | "success" | "warning";
  description?: ReactNode;
  moreButtonLabel?: ReactNode;
  onMoreButtonClick?: MouseEventHandler<HTMLButtonElement>;
  sideButtonLabel?: ReactNode;
  onSideButtonClick?: MouseEventHandler<HTMLButtonElement>;
};
```

### Exemple

```tsx
<InputPhone
  label="Numéro de téléphone"
  name="phone"
  required
  defaultCountry="FR"
  showSelect={false}
  onChangeInput={(value) => setPhone(value)}
/>

<InputPhone
  label="Téléphone international"
  name="intlPhone"
  showSelect
  countryCodeOptions={[
    { label: "🇫🇷 +33", value: "+33" },
    { label: "🇧🇪 +32", value: "+32" },
  ]}
  onChangeSelect={(opt) => setCountry(opt?.value)}
  onChangeInput={(value) => setPhone(value)}
/>
```
