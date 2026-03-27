# MultiSelect / MultiSelectInput

Sélection multiple avancée basée sur `react-select` avec support du chargement asynchrone des options. `MultiSelect` est le composant bas niveau ; `MultiSelectInput` est le wrapper complet avec label et gestion des erreurs.

## Import

```tsx
import { MultiSelectInput } from "@axa-fr/canopee-react/distributeur";
// ou pour le composant bas niveau :
import { MultiSelect } from "@axa-fr/canopee-react/distributeur";
```

## Types

```tsx
type Option = { value: string; label: string };

type OnChangeProps = {
  id: string;
  name: string;
  values?: string[];  // Valeurs sélectionnées (multi)
  value?: string;     // Valeur sélectionnée (mono)
};
```

## Composants

### MultiSelectInput (recommandé)

Wrapper complet avec label et gestion des erreurs.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `id` | `string` | Auto-généré | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `loadOptions` | `(inputValue: string) => Promise<Option[]>` | - | Chargement asynchrone des options |
| `options` | `Option[]` | - | Options statiques |
| `values` | `string[]` | - | Valeurs sélectionnées (mode multi) |
| `value` | `string` | - | Valeur sélectionnée (mode mono) |
| `onChange` | `(data: OnChangeProps) => void` | - | Gestionnaire de changement |
| `placeholder` | `string` | `"- Sélectionner -"` | Texte placeholder |
| `disabled` | `boolean` | `false` | Champ désactivé |
| `selectedLimit` | `number` | - | Nombre maximum de sélections |
| `selectedLimitLabel` | `string` | - | Message affiché quand la limite est atteinte |
| `required` | `boolean` | `false` | Champ obligatoire |
| `message` | `string` | - | Message d'erreur |

## Utilisation

```tsx
import { MultiSelectInput } from "@axa-fr/canopee-react/distributeur";

// Options statiques
<MultiSelectInput
  id="competences"
  name="competences"
  label="Compétences requises"
  options={[
    { value: "react", label: "React" },
    { value: "ts", label: "TypeScript" },
    { value: "css", label: "CSS" }
  ]}
  values={competencesSelectionnees}
  onChange={({ values }) => setCompetences(values ?? [])}
/>

// Chargement asynchrone (recherche API)
const chargerOptions = async (recherche: string) => {
  const resultats = await rechercherVilles(recherche);
  return resultats.map(v => ({ value: v.code, label: v.nom }));
};

<MultiSelectInput
  id="villes"
  name="villes"
  label="Villes couvertes"
  loadOptions={chargerOptions}
  values={villesSelectionnees}
  onChange={({ values }) => setVilles(values ?? [])}
  placeholder="Rechercher une ville..."
/>

// Avec limite de sélection
<MultiSelectInput
  id="options"
  name="options"
  label="Options (max 3)"
  options={optionsDisponibles}
  values={optionsSelectionnees}
  onChange={({ values }) => setOptions(values ?? [])}
  selectedLimit={3}
  selectedLimitLabel="Vous ne pouvez pas sélectionner plus de 3 options"
/>
```
