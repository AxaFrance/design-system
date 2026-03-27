# Link (Lien)

## Présentation
Le composant Link fournit des éléments d'ancrage stylés pour la navigation, avec support des composants de routage personnalisés (Next.js, React Router, etc.).

## Import
```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `href` | `string` | - | URL du lien (pour ancre standard) |
| `render` | `function` | - | Fonction de rendu personnalisée (pour routeur) |
| `children` | `ReactNode` | Obligatoire | Texte/contenu du lien |
| `target` | `string` | - | Attribut HTML target |
| `rel` | `string` | - | Attribut HTML rel |

## Lien standard

```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link href="/produits">Produits</Link>
```

## Lien externe

```tsx
<Link href="https://exemple.fr" target="_blank" rel="noopener noreferrer">
  Site externe
</Link>
```

## Avec React Router

```tsx
import { useNavigate } from "react-router-dom";
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link render={() => (
  <div onClick={() => navigate("/page")}>
    Naviguer vers la page
  </div>
)} />
```

## Avec Next.js

```tsx
import NextLink from "next/link";
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link
  render={(children) => (
    <NextLink href="/produits">
      {children}
    </NextLink>
  )}
>
  Produits
</Link>
```

## Classes CSS
- `.af-link` - Classe de base du lien
