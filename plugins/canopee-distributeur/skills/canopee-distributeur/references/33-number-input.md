# Number / NumberInput

Champ de saisie numérique (`<input type="number">`). `Number` est le composant bas niveau ; `NumberInput` est le wrapper complet avec label et gestion des erreurs.

## Import

```tsx
import { NumberInput } from "@axa-fr/canopee-react/distributeur";
// ou pour le composant bas niveau :
import { Number } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### NumberInput (recommandé)

Wrapper complet avec label et gestion des erreurs.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `id` | `string` | Auto-généré | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `value` | `number \| string` | - | Valeur contrôlée |
| `required` | `boolean` | `false` | Champ obligatoire |
| `disabled` | `boolean` | `false` | Champ désactivé |
| `min` | `number` | - | Valeur minimale |
| `max` | `number` | - | Valeur maximale |
| `step` | `number` | - | Pas d'incrément |
| `message` | `string` | - | Message d'erreur |
| `messageType` | `"error" \| "success" \| "info"` | - | Type du message |

Tous les attributs HTML standard de `<input type="number">` sont supportés.

### Number (bas niveau)

Input `<input type="number">` stylé seul, sans label.

#### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `classModifier` | `string` | - | Modificateur CSS BEM |

Plus tous les attributs HTML standard de `<input>` sauf `type` (forcé à `"number"`).

## Utilisation

```tsx
import { NumberInput } from "@axa-fr/canopee-react/distributeur";

// Champ numérique simple
<NumberInput
  id="quantite"
  name="quantite"
  label="Quantité"
  min={1}
/>

// Champ contrôlé avec plage
<NumberInput
  id="age"
  name="age"
  label="Âge"
  value={age}
  onChange={(e) => setAge(Number(e.target.value))}
  min={18}
  max={120}
  required
/>

// Champ avec pas et message d'erreur
<NumberInput
  id="montant"
  name="montant"
  label="Montant (€)"
  min={0}
  step={100}
  message={erreurs.montant}
  messageType="error"
/>
```
