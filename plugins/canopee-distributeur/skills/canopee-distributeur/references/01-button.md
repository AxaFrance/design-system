# Button (Bouton)

## Présentation
Le composant Button est un élément bouton stylé et flexible, supportant plusieurs variantes, tailles et positionnements d'icônes. C'est le composant principal d'appel à l'action pour les interactions utilisateur.

## Import
```tsx
import { Button } from "@axa-fr/canopee-react/distributeur";
```

## Utilisation de base
```tsx
import { Button } from "@axa-fr/canopee-react/distributeur";

const MonComposant = () => {
  const [count, setCount] = useState(0);
  
  return (
    <Button type="button" onClick={() => setCount(count + 1)}>
      Cliqué {count} fois
    </Button>
  );
};
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `variant` | `"primary" \| "secondary" \| "validated" \| "danger" \| "ghost" \| "ghost-reverse"` | `"primary"` | Style visuel du bouton |
| `small` | `boolean` | `false` | Rendu en petite taille si activé |
| `leftIcon` | `ReactNode` | `undefined` | Élément icône affiché à gauche |
| `rightIcon` | `ReactNode` | `undefined` | Élément icône affiché à droite |
| `type` | `"button" \| "submit" \| "reset"` | `"button"` | Type HTML du bouton |
| `disabled` | `boolean` | `false` | Désactive le bouton |
| `children` | `ReactNode` | Obligatoire | Texte du bouton |

Tous les attributs HTML standard du `<button>` sont supportés.

## Variantes

### Primary (par défaut)
Bouton d'appel à l'action principal. Un seul par page/section.
```tsx
<Button variant="primary">Action principale</Button>
```

### Secondary
Bouton d'action secondaire. Plusieurs autorisés par section.
```tsx
<Button variant="secondary">Action secondaire</Button>
```

### Validated
Bouton de confirmation ou de succès.
```tsx
<Button variant="validated">Confirmer</Button>
```

### Danger
Bouton pour actions destructives (suppression, annulation critique).
```tsx
<Button variant="danger">Supprimer</Button>
```

### Ghost
Bouton transparent avec bordure.
```tsx
<Button variant="ghost">Bouton ghost</Button>
```

### Ghost Reverse
Bouton ghost avec couleurs inversées pour fonds sombres.
```tsx
<Button variant="ghost-reverse">Ghost inversé</Button>
```

## Tailles

### Taille par défaut
```tsx
<Button>Taille normale</Button>
```

### Petite taille
```tsx
<Button small>Petit bouton</Button>
```

## Avec icônes

```tsx
import checkIcon from "@material-symbols/svg-400/outlined/check.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import { Button, Svg } from "@axa-fr/canopee-react/distributeur";

const MonComposant = () => (
  <>
    <Button leftIcon={<Svg src={checkIcon} />}>
      Confirmer
    </Button>
    <Button rightIcon={<Svg src={deleteIcon} />}>
      Supprimer
    </Button>
    <Button 
      variant="secondary" 
      leftIcon={<Svg src={checkIcon} />}
      rightIcon={<Svg src={deleteIcon} />}
    >
      Bouton complexe
    </Button>
  </>
);
```

## Utilisation en formulaire

### Bouton de soumission
```tsx
<form onSubmit={handleSubmit}>
  <input type="text" />
  <Button type="submit" variant="primary">
    Valider
  </Button>
</form>
```

### Bouton de réinitialisation
```tsx
<form>
  <input type="text" />
  <Button type="reset" variant="secondary">
    Réinitialiser
  </Button>
</form>
```

## États

### Désactivé
```tsx
<Button disabled>Bouton désactivé</Button>
```

## Accessibilité
- Les boutons sont des éléments HTML sémantiques
- Utiliser `type="submit"` dans les formulaires pour la navigation clavier
- Les boutons icône seuls doivent avoir un `aria-label`
- L'état désactivé est visuellement distinct et empêche l'interaction

## Bonnes pratiques
- Un seul bouton primary par page/section
- Positionner les boutons de manière cohérente (alignés à droite pour les formulaires)
- Associer primary et secondary pour les actions complémentaires
- Utiliser la variante danger avec parcimonie
- Assurer une zone de clic suffisante (minimum 44x44px)
- Utiliser ghost pour les actions tertiaires

## Classes CSS
- `.af-btn` - Classe de base du bouton
- `.af-btn--primary` - Variante primary
- `.af-btn--secondary` - Variante secondary
- `.af-btn--validated` - Variante validated
- `.af-btn--danger` - Variante danger
- `.af-btn--ghost` - Variante ghost
- `.af-btn--ghost-reverse` - Variante ghost-reverse
- `.af-btn--small` - Petite taille
