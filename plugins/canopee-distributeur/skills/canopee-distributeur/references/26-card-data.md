# CardData

Carte d'affichage de données avec en-tête structuré (titre, sous-titre, icône, description) et zone de contenu.

## Import

```tsx
import { CardData } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | **Obligatoire** | Titre de la carte |
| `icon` | `string` | **Obligatoire** | Chemin SVG de l'icône (import Material Symbols) |
| `subTitle` | `ReactNode` | - | Sous-titre affiché sous le titre |
| `description` | `ReactNode` | - | Description additionnelle |
| `variant` | `"default" \| "error" \| "warning" \| "information" \| "success" \| "dark" \| "gray" \| "purple"` | `"default"` | Style visuel de l'en-tête |
| `contentRight` | `ReactNode` | - | Contenu affiché à droite de l'en-tête (ex: bouton) |
| `withDivider` | `boolean` | `true` | Affiche un séparateur entre l'en-tête et le corps |
| `contentFitAllSize` | `boolean` | `false` | Le corps de la carte occupe toute la largeur disponible |
| `children` | `ReactNode` | - | Contenu du corps de la carte |

## Utilisation

```tsx
import { CardData } from "@axa-fr/canopee-react/distributeur";
import contractIcon from "@material-symbols/svg-400/outlined/description.svg";

// Carte simple
<CardData
  title="Mon contrat"
  icon={contractIcon}
>
  <p>Contenu du contrat...</p>
</CardData>

// Avec sous-titre et description
<CardData
  title="Assurance Habitation"
  subTitle="Contrat n° 123456"
  description="Valide jusqu'au 31/12/2026"
  icon={contractIcon}
  variant="default"
>
  <p>Détails du contrat...</p>
</CardData>

// Variante avec alerte
import warningIcon from "@material-symbols/svg-400/outlined/warning.svg";

<CardData
  title="Action requise"
  icon={warningIcon}
  variant="warning"
  contentRight={<Button small>Régulariser</Button>}
>
  <p>Votre paiement est en attente.</p>
</CardData>

// Sans séparateur et contenu pleine largeur
<CardData
  title="Tableau"
  icon={tableIcon}
  withDivider={false}
  contentFitAllSize={true}
>
  <table>...</table>
</CardData>
```
