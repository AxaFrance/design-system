# Card (Carte)

## Présentation
Le composant Card est un conteneur cliquable basé sur un bouton, pour afficher du contenu avec icônes optionnelles, états d'erreur et états actifs/sélectionnés. Utilisé principalement pour les interfaces de sélection.

## Import
```tsx
import { Card, Svg } from "@axa-fr/canopee-react/distributeur";
```

## Utilisation de base
```tsx
import { Card } from "@axa-fr/canopee-react/distributeur";

const MonComposant = () => {
  const [carteSelectionnee, setCarteSelectionnee] = useState<string | null>(null);
  
  return (
    <Card 
      id="carte-1"
      onClick={() => setCarteSelectionnee("carte-1")}
      active={carteSelectionnee === "carte-1"}
    >
      Contenu de la carte
    </Card>
  );
};
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Orientation de la mise en page |
| `iconSrc` | `string` | `undefined` | URL de l'icône SVG Material Symbols |
| `error` | `boolean` | `false` | Style d'erreur rouge si actif |
| `active` | `boolean` | `false` | Style sélectionné/actif |
| `id` | `string` | - | Attribut HTML id |
| `onClick` | `(event) => void` | - | Gestionnaire de clic |
| `disabled` | `boolean` | `false` | Désactive la carte |
| `children` | `ReactNode` | - | Contenu de la carte |

Tous les attributs HTML standard du `<button>` sont supportés.

## Orientations

### Verticale (par défaut)
Icône empilée au-dessus du contenu.
```tsx
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

<Card iconSrc={villaIcon}>
  Maison
</Card>
```

### Horizontale
Icône positionnée à gauche du contenu.
```tsx
import carIcon from "@material-symbols/svg-400/outlined/car.svg";

<Card orientation="horizontal" iconSrc={carIcon}>
  Véhicule
</Card>
```

## États

### État actif/sélectionné
```tsx
<Card 
  iconSrc={villaIcon}
  active={true}
>
  Carte sélectionnée
</Card>
```

### État d'erreur
```tsx
<Card 
  iconSrc={villaIcon}
  error={true}
>
  Carte en erreur
</Card>
```

### Actif + Erreur
```tsx
<Card 
  iconSrc={villaIcon}
  active={true}
  error={true}
>
  États combinés
</Card>
```

### État désactivé
```tsx
<Card disabled>
  Carte désactivée
</Card>
```

## Utilisation des icônes

```tsx
import searchIcon from "@material-symbols/svg-400/outlined/search.svg";
import { Card, Svg } from "@axa-fr/canopee-react/distributeur";

<Card iconSrc={searchIcon}>
  Rechercher
</Card>
```

### Sans icône
```tsx
<Card>Contenu seul</Card>
```

## Exemple complet — Sélection de choix

```tsx
import { useState } from "react";
import { Card } from "@axa-fr/canopee-react/distributeur";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import apartmentIcon from "@material-symbols/svg-400/outlined/apartment.svg";
import workIcon from "@material-symbols/svg-400/outlined/work.svg";

const SelecteurTypeBien = () => {
  const [typeSelectionne, setTypeSelectionne] = useState<string | null>(null);
  
  const typesBien = [
    { id: "maison", label: "Maison", icon: homeIcon },
    { id: "appartement", label: "Appartement", icon: apartmentIcon },
    { id: "bureau", label: "Bureau", icon: workIcon }
  ];
  
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {typesBien.map(type => (
        <Card
          key={type.id}
          id={type.id}
          iconSrc={type.icon}
          active={typeSelectionne === type.id}
          onClick={() => setTypeSelectionne(type.id)}
        >
          {type.label}
        </Card>
      ))}
    </div>
  );
};
```

## Accessibilité
- Les cartes sont rendues comme des éléments `<button type="button">`
- Les gestionnaires de clic sont accessibles au clavier (Entrée, Espace)
- Utiliser l'état `active` plutôt que des marqueurs visuels pour la sélection
- L'état d'erreur doit être accompagné d'un message d'erreur visible ailleurs
- Envisager un `aria-label` pour les cartes icône-seule

## Bonnes pratiques
- Utiliser les cartes en groupe pour les flux de sélection
- Accompagner d'instructions claires sur ce que représente chaque carte
- Utiliser des tailles et styles d'icônes cohérents
- Fournir un retour visuel lors de la sélection
- Utiliser l'état d'erreur pour mettre en évidence les sélections invalides
- Prévoir des mises en page responsives (colonne unique vs grille)

## Classes CSS
- `.af-card` - Classe de base de la carte
- `.af-card--horizontal` - Orientation horizontale
- `.af-card--active` - État actif/sélectionné
- `.af-card--error` - État d'erreur
