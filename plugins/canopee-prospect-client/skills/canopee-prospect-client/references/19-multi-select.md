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
  hideThreshold?: number; // Nombre max de tags visibles (défaut: 2)
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
import {
  ItemMultiSelect,
  type ItemMultiSelectProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ItemMultiSelectProps = Omit<ComponentProps<"input">, "type"> & {
  id: string;
  label: ReactNode;
  variant?: "primary" | "secondary"; // (défaut: "primary")
  // + tous props input HTML (checked, onChange, disabled, name, aria-*, className, …)
};
```

Les props natives de l'input peuvent être surchargées individuellement sur chaque item. `type` est géré par le composant et `id` est obligatoire pour relier la checkbox à son label.

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
import {
  MultiSelectList,
  type MultiSelectListProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type MultiSelectListItem = Omit<
  ComponentProps<"input">,
  "type" | "id"
> & {
  id: string;
  label: ReactNode;
  variant?: "primary" | "secondary";
};

type MultiSelectListProps = {
  items: MultiSelectListItem[];
};
```

Chaque item peut donc surcharger les props natives de sa checkbox (`checked`, `disabled`, `name`, `aria-*`, `className`, `onChange`, etc.). La variante visuelle est alternée automatiquement par la liste.

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
/>;
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
type DropdownMultiSelectProps = Omit<
  DropdownProps,
  "children" | "value" | "defaultValue" | "multiple" | "onChange"
> &
  Omit<MultiSelectListProps, "onChange"> & {
    values?: string[]; // IDs sélectionnés à l'initialisation
    hideThreshold?: number; // Nombre de tags visibles sous le dropdown
    inputProps?: Omit<ComponentProps<"input">, "type" | "onChange">;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    // Notamment :
    items: Array<
      Omit<ComponentProps<"input">, "type" | "id"> & {
        id: string;
        label: ReactNode;
        variant?: "primary" | "secondary";
      }
    >;
    helper?: string;
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

Chaque item de `DropdownMultiSelect` reprend les props natives d'une checkbox (`checked`, `disabled`, `name`, `aria-*`, `className`, etc.), ce qui permet de surcharger la configuration input option par option. `inputProps` permet de définir des props communes à toutes les checkboxes ; les propriétés spécifiques d'un item sont ensuite appliquées à cet item.

La sélection est gérée en interne. `values` initialise les éléments sélectionnés ; lorsque cette prop est absente, les valeurs `checked` définies sur `items` servent d'initialisation. Une modification ultérieure de `values` ne réinitialise pas le composant : cette prop n'est pas un état contrôlé.

`onChange` reçoit l'événement natif de la checkbox modifiée. L'identifiant de l'option est disponible dans `event.target.value` et son nouvel état dans `event.target.checked`. Le callback est appelé avant la mise à jour de l'état interne. `inputProps` est transmis à chaque checkbox, à l'exception de `type` et `onChange`.

`hideThreshold` est transmis à `TagList` et détermine le nombre de tags sélectionnés affichés sous le dropdown. Les tags supplémentaires sont remplacés par un tag d'overflow indiquant combien de sélections sont masquées.

### Exemple — suivre la sélection

```tsx
const items = [
  { id: "option-1", label: "Option 1" },
  { id: "option-2", label: "Option 2" },
  { id: "option-3", label: "Option 3" },
  { id: "option-4", label: "Option 4" },
];

const [selectedValues, setSelectedValues] = useState(["option-2"]);

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  const { checked, value } = event.target;

  setSelectedValues((currentValues) =>
    checked
      ? [...currentValues, value]
      : currentValues.filter((selectedValue) => selectedValue !== value),
  );
};

<DropdownMultiSelect
  label="Choix multiples"
  helper="Sélectionnez une ou plusieurs options"
  items={items}
  values={selectedValues}
  onChange={handleChange}
/>;
```

### Exemple — avec erreur

```tsx
<DropdownMultiSelect
  label="Garanties"
  items={items}
  values={[]}
  message="Champ obligatoire"
  messageType="error"
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
- `values` et `items[].checked` ne servent qu'à initialiser la sélection ; pour suivre les changements, utilisez `onChange` et gérez votre propre état
- Accessible : le bouton annonce le résumé de sélection, référence le panneau via `aria-controls`, expose `aria-haspopup="listbox"` et fournit un compteur masqué aux lecteurs d'écran
