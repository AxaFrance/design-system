# Multi-sélection : TagList, ItemMultiSelect, MultiSelectList, DropdownMultiSelect

---

## TagList

Liste de tags avec débordement automatique. Affiche les N premiers tags, puis un tag `+X` pour les tags masqués.

### Import

```tsx
import { TagList, type TagListProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TagListProps = ComponentProps<"div"> & {
  children: ReactNode;
  hideThreshold?: number;        // Nombre max de tags visibles (défaut: 2)
};
```

### Exemple

```tsx
<TagList hideThreshold={3}>
  <Tag>Option A</Tag>
  <Tag>Option B</Tag>
  <Tag>Option C</Tag>
  <Tag>Option D</Tag>
  <Tag>Option E</Tag>
</TagList>
// Affiche : [Option A] [Option B] [Option C] [+2]
```

---

## ItemMultiSelect

Item de sélection multiple avec checkbox intégrée. Utilisé comme brique de base dans `MultiSelectList`.

### Import

```tsx
import { ItemMultiSelect, type ItemMultiSelectProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ItemMultiSelectProps = Omit<ComponentProps<"input">, "type"> & {
  label: ReactNode;
  variant?: "primary" | "secondary";  // (défaut: "primary")
  // + tous props input HTML (checked, onChange, disabled, id, name, aria-*, …)
};
```

### Exemple

```tsx
<ItemMultiSelect
  id="opt-1"
  label="Option 1"
  checked={checked}
  onChange={(e) => setChecked(e.target.checked)}
/>

<ItemMultiSelect
  id="opt-2"
  label="Option 2"
  variant="secondary"
  disabled
/>
```

---

## MultiSelectList

Liste de `ItemMultiSelect` avec alternance automatique primary/secondary.

### Import

```tsx
import { MultiSelectList, type MultiSelectListProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type MultiSelectListProps = {
  items: ItemMultiSelectProps[];    // Tableau d'items (id, label, checked, …)
  onChange?: (id: string, checked: boolean) => void;
};
```

### Exemple

```tsx
const items = [
  { id: "a", label: "Option A", checked: true },
  { id: "b", label: "Option B", checked: false },
  { id: "c", label: "Option C", checked: false },
];

<MultiSelectList
  items={items}
  onChange={(id, checked) => console.log(id, checked)}
/>
```

---

## DropdownMultiSelect

Select multiple complet avec dropdown, liste de checkboxes, tags des éléments sélectionnés, label, helper et message d'erreur. Combine `MultiSelectList` + `TagList` + `ItemLabel` + `ItemMessage`.

### Import

```tsx
import {
  DropdownMultiSelect,
  type DropdownMultiSelectProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type DropdownMultiSelectProps = {
  label: ReactNode;
  items: { id: string; label: ReactNode; checked?: boolean }[];
  values?: string[];              // Mode contrôlé : IDs sélectionnés
  defaultValues?: string[];       // Mode non-contrôlé : IDs initiaux
  hideThreshold?: number;         // Tags visibles sous le dropdown (défaut: 2)
  onChange?: (values: string[]) => void;
  // Props héritées de Dropdown :
  helper?: string;
  error?: string;
  message?: string;
  messageType?: "error" | "success" | "warning";
  description?: string;
  moreButtonLabel?: string;
  onMoreButtonClick?: () => void;
  sideButtonLabel?: string;
  onSideButtonClick?: () => void;
  required?: boolean;
  disabled?: boolean;
  id?: string;
};
```

### Exemple — mode contrôlé

```tsx
const items = [
  { id: "option-1", label: "Option 1" },
  { id: "option-2", label: "Option 2" },
  { id: "option-3", label: "Option 3" },
  { id: "option-4", label: "Option 4" },
];

const [values, setValues] = useState(["option-2"]);

<DropdownMultiSelect
  label="Choix multiples"
  helper="Sélectionnez une ou plusieurs options"
  items={items}
  values={values}
  onChange={setValues}
/>
```

### Exemple — avec erreur

```tsx
<DropdownMultiSelect
  label="Garanties"
  items={items}
  values={[]}
  error="Champ obligatoire"
  required
/>
```

### Exemple — désactivé

```tsx
<DropdownMultiSelect
  label="Options"
  items={items}
  values={["option-1"]}
  disabled
/>
```

### Comportement

- Le panneau s'ouvre au clic sur le bouton trigger
- Se ferme au clic extérieur ou via la touche `Escape`
- Les tags sélectionnés s'affichent sous le dropdown avec overflow via `TagList`
- Accessible : `aria-expanded`, `aria-controls`, `aria-haspopup="listbox"`, compteur sr-only
