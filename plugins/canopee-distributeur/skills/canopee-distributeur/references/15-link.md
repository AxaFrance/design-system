# Link (Lien)

## Présentation
Le composant Link fournit des liens stylés pour la navigation. Il supporte deux modes : ancre HTML standard ou rendu personnalisé via une prop `render` (pour react-router-dom, Next.js, etc.).

## Import
```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";
```

## Props — Mode ancre (par défaut)

Quand aucune prop `render` n'est passée, le composant rend un `<a>` standard.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `href` | `string` | - | URL du lien |
| `children` | `ReactNode` | - | Contenu du lien |
| `target` | `string` | - | Attribut HTML target (ex : `"_blank"`) |
| `rel` | `string` | Auto si `_blank` | Attribut HTML rel (auto-ajouté en `"noopener noreferrer"` quand `target="_blank"`) |
| `leftIcon` | `ReactElement<typeof Svg>` | - | Icône à gauche du texte |
| `rightIcon` | `ReactElement<typeof Svg>` | - | Icône à droite du texte |
| `disabled` | `boolean` | - | Désactive le lien (via `aria-disabled`) |
| `variant` | `"default" \| "reverse"` | `"default"` | Variante visuelle (`"reverse"` pour fond sombre) |
| `className` | `string` | - | Classe CSS additionnelle |

Tous les attributs HTML standard de `<a>` sont également supportés.

## Props — Mode personnalisé (render)

Quand la prop `render` est passée, le composant délègue le rendu à cette fonction. C'est le mode à utiliser pour l'intégration avec des bibliothèques de routage.

| Prop | Type | Description |
|------|------|-------------|
| `render` | `(props: { className: string }) => ReactNode` | Fonction de rendu qui reçoit la classe CSS du link et retourne le JSX voulu |

## Lien standard

```tsx
import { Link } from "@axa-fr/canopee-react/distributeur";

<Link href="/produits">Produits</Link>
```

## Lien externe

Le `rel="noopener noreferrer"` est automatiquement ajouté quand `target="_blank"`.

```tsx
<Link href="https://www.axa.fr" target="_blank">
  Lien vers AXA
</Link>
```

## Lien avec icône

```tsx
import { Link, Svg } from "@axa-fr/canopee-react/distributeur";
import editIcon from "@material-symbols/svg-400/outlined/edit.svg";

<Link href="/modifier" leftIcon={<Svg src={editIcon} />}>
  Modifier
</Link>
```

## Variante reverse (fond sombre)

```tsx
<div style={{ backgroundColor: "#00008f", padding: "10px" }}>
  <Link href="/contact" variant="reverse">
    Contact
  </Link>
</div>
```

## Intégration react-router-dom

La prop `render` permet de remplacer l'élément `<a>` par le composant `Link` de react-router-dom tout en conservant le style du design system. La fonction `render` reçoit un objet `{ className }` qu'il faut transmettre au composant cible pour conserver le style.

> **Note** : la documentation Storybook mentionne une prop `component` mais celle-ci **n'existe pas** dans le code source. Seule la prop `render` est disponible pour l'intégration avec des bibliothèques de routage.

```tsx
import { Link as DSLink } from "@axa-fr/canopee-react/distributeur";
import { Link as RouterLink } from "react-router-dom";

<DSLink
  render={({ className }) => (
    <RouterLink to="/contact" className={className}>
      Aller à la page Contact
    </RouterLink>
  )}
/>
```

## Intégration Next.js

Même principe avec le composant `Link` de Next.js :

```tsx
import { Link as DSLink } from "@axa-fr/canopee-react/distributeur";
import NextLink from "next/link";

<DSLink
  render={({ className }) => (
    <NextLink href="/produits" className={className}>
      Produits
    </NextLink>
  )}
/>
```

## Utiliser un bouton au lieu d'un lien

La prop `render` permet aussi de rendre un bouton stylé comme un lien :

```tsx
<Link
  render={({ className }) => (
    <button type="button" className={className} onClick={() => alert("clic")}>
      Ce lien est en fait un bouton
    </button>
  )}
/>
```

## Classes CSS
- `.af-slash-link` — Classe de base du lien
- `.af-slash-link--reverse` — Variante pour fond sombre
