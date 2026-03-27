# Date / DateInput

Champ de saisie de date. `Date` est le composant bas niveau ; `DateInput` est le wrapper complet avec label et gestion des erreurs.

## Import

```tsx
import { DateInput } from "@axa-fr/canopee-react/distributeur";
// ou pour le composant bas niveau :
import { Date } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### DateInput (recommandé)

Wrapper complet avec label et gestion des erreurs. Accepte `value` comme `Date` ou `string`.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `id` | `string` | Auto-généré | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `value` | `Date \| string` | - | Valeur contrôlée |
| `defaultValue` | `Date \| string` | - | Valeur initiale non contrôlée |
| `required` | `boolean` | `false` | Champ obligatoire |
| `disabled` | `boolean` | `false` | Champ désactivé |
| `message` | `string` | - | Message d'erreur |
| `messageType` | `"error" \| "success" \| "info"` | - | Type du message |
| `min` | `string` | - | Date minimale (format YYYY-MM-DD) |
| `max` | `string` | - | Date maximale (format YYYY-MM-DD) |

### Date (bas niveau)

Input `<input type="date">` stylé. La `value` peut être un objet `Date` ou une string (le composant formate automatiquement).

## Utilisation

```tsx
import { DateInput } from "@axa-fr/canopee-react/distributeur";

// Saisie de date simple
<DateInput
  id="naissance"
  name="naissance"
  label="Date de naissance"
/>

// Valeur contrôlée
<DateInput
  id="contrat"
  name="contrat"
  label="Date d'effet du contrat"
  value={dateContrat}
  onChange={(e) => setDateContrat(e.target.value)}
  required
/>

// Avec contraintes
<DateInput
  id="rdv"
  name="rdv"
  label="Date de rendez-vous"
  min="2026-01-01"
  max="2026-12-31"
  message={erreurs.rdv}
  messageType="error"
/>
```
