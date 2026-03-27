# Composant Footer (Pied de page)

## Présentation
Footer affiche la section inférieure d'une application avec la marque, le copyright et des informations de version optionnelles.

## Import
```tsx
import { Footer } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `href` | `string` | `"https://www.axa.fr/"` | URL du lien du logo |
| `title` | `string` | `"Site Axa"` | Titre/info-bulle du lien |
| `icon` | `string` | Logo AXA | URL SVG de l'icône de marque |
| `alt` | `string` | `"Logo Axa"` | Texte alternatif de l'icône |
| `version` | `string` | - | Numéro de version à afficher |
| `className` | `string` | `"af-footer"` | Classes CSS |
| `children` | `ReactNode` | Texte copyright | Contenu du pied de page |

## Pied de page simple

```tsx
import { Footer } from "@axa-fr/canopee-react/distributeur";

<Footer />
```

## Avec numéro de version

```tsx
<Footer version="1.2.3">
  © 2024 Mon Entreprise. Tous droits réservés.
</Footer>
```

## Logo et lien personnalisés

```tsx
import customLogo from "./logo.svg";

<Footer 
  icon={customLogo}
  href="https://monentreprise.fr"
  title="Mon Entreprise"
>
  © 2024 Mon Entreprise
</Footer>
```

## Sans logo

```tsx
<Footer icon="">
  © 2024 Tous droits réservés
</Footer>
```

## Classes CSS
- `.af-footer` - Pied de page de base
- `.af-logo` - Conteneur du logo
- `.af-footer-content` - Section du contenu
