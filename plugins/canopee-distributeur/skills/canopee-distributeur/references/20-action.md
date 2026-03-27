# Action

Lien stylé sous forme de bouton circulaire avec icône. C'est un élément `<a>` (et non un `<button>`).

## Import

```tsx
import { Action } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `icon` | `string` | **Obligatoire** | Nom de l'icône |
| `href` | `string` | - | URL de destination |
| `onClick` | `MouseEventHandler` | - | Gestionnaire de clic |
| `className` | `string` | - | Classes CSS additionnelles |
| `classModifier` | `string` | - | Modificateur CSS BEM |

Tous les attributs HTML standard du `<a>` sont supportés (`aria-label`, `target`, `rel`, `aria-disabled`, …).

> **Important :** Toujours fournir un `aria-label` explicite car le composant n'affiche que l'icône, sans texte visible.

## Utilisation

```tsx
import { Action } from "@axa-fr/canopee-react/distributeur";

// Lien de navigation
<Action icon="pencil" href="/modifier" aria-label="Modifier" />

// Bouton d'action (sans navigation)
<Action icon="trash" onClick={() => handleDelete()} aria-label="Supprimer" />

// Lien externe
<Action
  icon="open_in_new"
  href="https://exemple.fr"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Ouvrir dans un nouvel onglet"
/>
```
