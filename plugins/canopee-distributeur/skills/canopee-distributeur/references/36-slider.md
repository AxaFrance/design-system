# Slider / SliderInput

> ⚠️ **DÉPRÉCIÉ** — Ce composant sera supprimé dans une prochaine version majeure. Évitez de l'utiliser dans de nouveaux projets.

Curseur de sélection d'une valeur numérique parmi un tableau d'options prédéfinies, basé sur `rc-slider`. `Slider` est le composant bas niveau ; `SliderInput` est le wrapper complet avec label.

## Import

```tsx
import { SliderInput } from "@axa-fr/canopee-react/distributeur";
```

## Props de SliderInput

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `id` | `string` | **Obligatoire** | Identifiant HTML |
| `name` | `string` | **Obligatoire** | Attribut HTML `name` |
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `options` | `Array<{ value: number, label?: string \| ReactNode }>` | **Obligatoire** | Points de valeur disponibles sur le curseur |
| `value` | `number` | - | Valeur sélectionnée |
| `defaultValue` | `number` | - | Valeur initiale non contrôlée |
| `onChange` | `(data: { id: string, name: string, value: number }) => void` | - | Gestionnaire de changement de valeur |
| `onChangeComplete` | `(data: { id: string, name: string, value: number }) => void` | - | Gestionnaire appelé quand l'utilisateur relâche le curseur |
| `disabled` | `boolean` | `false` | Curseur désactivé |
| `classModifier` | `string` | - | Modificateur CSS BEM |

## Utilisation

```tsx
import { SliderInput } from "@axa-fr/canopee-react/distributeur";

<SliderInput
  id="montant"
  name="montant"
  label="Montant de la couverture"
  options={[
    { value: 0, label: "0 €" },
    { value: 500, label: "500 €" },
    { value: 1000, label: "1 000 €" },
    { value: 2000, label: "2 000 €" },
    { value: 5000, label: "5 000 €" }
  ]}
  value={montant}
  onChange={({ value }) => setMontant(value)}
/>
```
