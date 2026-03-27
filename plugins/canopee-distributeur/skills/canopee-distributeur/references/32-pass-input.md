# Pass / PassInput

Champ de saisie de mot de passe avec toggle de visibilité. `Pass` est le composant bas niveau ; `PassInput` est le wrapper complet avec label, gestion des erreurs et indicateur de force.

## Import

```tsx
import { PassInput } from "@axa-fr/canopee-react/distributeur";
// ou pour le composant bas niveau :
import { Pass } from "@axa-fr/canopee-react/distributeur";
```

## Composants

### PassInput (recommandé)

Wrapper complet avec label, gestion des erreurs et indicateur de force du mot de passe. Gère le toggle visibilité en interne.

#### Props principales

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `ReactNode` | **Obligatoire** | Label du champ |
| `id` | `string` | Auto-généré | Identifiant HTML |
| `name` | `string` | - | Attribut HTML `name` |
| `score` | `string` | - | Force du mot de passe (de `"0"` faible à `"4"` excellent). Affiche un indicateur coloré. |
| `required` | `boolean` | `false` | Champ obligatoire |
| `disabled` | `boolean` | `false` | Champ désactivé |
| `message` | `string` | - | Message d'erreur ou conseil |
| `helpMessage` | `ReactNode` | - | Message d'aide |

Tous les attributs HTML standard de `<input>` sont supportés (`placeholder`, `autoComplete`, …).

### Pass (bas niveau)

Input de mot de passe stylé avec bouton de toggle. Requiert `onToggleType` pour gérer l'alternance.

#### Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `onToggleType` | `() => void` | **Obligatoire** | Gestionnaire pour basculer la visibilité |
| `type` | `"text" \| "password"` | `"password"` | Type actuel du champ |
| `classModifier` | `string` | - | Modificateur CSS BEM |

## Niveaux de score

| Score | Libellé affiché |
|-------|-----------------|
| `"0"` | Mauvais |
| `"1"` | Passable |
| `"2"` | Bon |
| `"3"` | Très bon |
| `"4"` | Excellent |

## Utilisation

```tsx
import { PassInput } from "@axa-fr/canopee-react/distributeur";

// Champ mot de passe simple
<PassInput
  id="password"
  name="password"
  label="Mot de passe"
  required
/>

// Avec indicateur de force (calculé côté applicatif, ex: avec zxcvbn)
<PassInput
  id="password"
  name="password"
  label="Mot de passe"
  score={String(passwordStrength)}
  helpMessage="Minimum 8 caractères, une majuscule, un chiffre."
/>

// Confirmation de mot de passe
<PassInput
  id="confirm-password"
  name="confirmPassword"
  label="Confirmer le mot de passe"
  message={passwordMismatch ? "Les mots de passe ne correspondent pas" : undefined}
  messageType="error"
/>
```
