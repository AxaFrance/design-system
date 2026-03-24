# Message, CardMessage, Loader, Spinner, Skeleton

---

## Message

Composant d'alerte accessible, avec icône automatique selon la variante.

### Import

```tsx
import {
  Message,
  messageVariants,
  type MessageVariants,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type MessageProps = {
  variant: MessageVariants;       // "validation" | "error" | "warning" | "information" | "neutral"
  title?: string;
  children?: ReactNode;           // Corps du message
  action?: ReactElement<typeof Link | ComponentType<ButtonProps>>;
  iconSize?: number;              // Taille icône en px (défaut: 24)
  heading?: "h2" | "h3" | "h4" | "h5" | "h6";  // Niveau titre (défaut: "h4")
} & ComponentPropsWithoutRef<"section">;
```

### Comportement aria

| Variante | `role` |
|---|---|
| `error` | `"alert"` |
| `warning` | `"alert"` |
| Autres | aucun |

### Exemples

```tsx
<Message variant="information" title="Information">
  Votre demande est en cours de traitement.
</Message>

<Message
  variant="error"
  title="Erreur de paiement"
  action={<Button variant="ghost">Réessayer</Button>}
>
  Votre carte bancaire a été refusée. Vérifiez vos informations.
</Message>

<Message
  variant="validation"
  title="Inscription réussie"
  action={<Link href="/">Retour à l'accueil</Link>}
/>

<Message variant="warning" title="Attention">
  Votre session expirera dans 5 minutes.
</Message>

<Message variant="neutral">
  Pour toute question, contactez votre conseiller.
</Message>
```

---

## CardMessage

Message compact format carte, sans icône automatique.

### Import

```tsx
import { CardMessage, cardMessageVariants, type CardMessageVariants } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type CardMessageProps = ComponentPropsWithoutRef<"div"> & {
  variant?: CardMessageVariants;  // "info" | "warning" | "error" | "neutral"  (défaut: "info")
  title?: string;                 // Titre optionnel en gras
  text: string;                   // Texte principal (obligatoire)
};
```

### Exemple

```tsx
<CardMessage
  variant="warning"
  title="Délai de traitement"
  text="Votre dossier peut prendre jusqu'à 5 jours ouvrés."
/>

<CardMessage variant="info" text="Les prix affichés incluent toutes taxes." />
```

---

## Loader

Page de chargement (plein écran ou en ligne) avec spinner et texte.

### Import

```tsx
import { Loader, type LoaderProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type LoaderProps = {
  isDialog?: boolean;             // Rendu en <dialog> (true) ou <article> (false)
  title: string;                  // Texte principal (obligatoire)
  subtitle?: string;              // Sous-texte optionnel
  spinnerProps?: SpinnerProps;    // Props transmis au Spinner
  as?: ElementType;               // Élément racine (polymorphique)
};
```

### Exemple

```tsx
<Loader title="Chargement en cours" subtitle="Veuillez patienter…" />

// En tant que dialog
<Loader
  isDialog
  title="Envoi du formulaire"
  spinnerProps={{ variant: "blue", size: 40 }}
/>
```

---

## Spinner

Indicateur de chargement circulaire inline.

### Import

```tsx
import { Spinner, spinnerVariants, type SpinnerVariants } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type SpinnerProps = {
  size?: 24 | 32 | 40;           // Taille en px (défaut: 40)
  variant?: SpinnerVariants;     // "blue" | "gray" | "white"  (défaut: "blue")
  text?: string;                 // aria-label (défaut: "Chargement en cours")
} & ComponentPropsWithoutRef<"div">;
```

Le spinner est accessible : `role="alert"`, `aria-busy`, `aria-live="assertive"`.

### Exemple

```tsx
<Spinner />  // par défaut : 40px, bleu

<Spinner size={24} variant="gray" />      // dans un bouton
<Spinner size={32} variant="white" text="Envoi en cours" />  // sur fond bleu
```

---

## Skeleton

Placeholder de chargement sur grille. Affiche des blocs de substitution en attendant le contenu.

### Import

```tsx
import { Skeleton, type SkeletonProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type SkeletonProps = {
  grid: number[][];               // Tableau de rangées, chaque rangée = tableau de tailles de colonnes
  className?: string;
  "aria-busy"?: boolean;          // (défaut: true)
  "aria-label"?: string;          // (défaut: "Chargement")
  maxCols?: number;               // Nombre max de colonnes (défaut: 12)
  colGap?: number;                // Espace entre colonnes en px (défaut: 16)
  rowGap?: number;                // Espace entre rangées en px (défaut: 8)
  isLoading?: boolean;            // Si false, affiche children (défaut: true)
  children?: ReactNode;           // Contenu affiché quand isLoading=false
};
```

### Exemple

```tsx
// 3 rangées : 1 bloc de 12, 1 bloc de 6, 2 blocs de 6
<Skeleton grid={[[12], [6], [6, 6]]} />

// Avec isLoading conditionnel
<Skeleton grid={[[12], [6, 6]]} isLoading={isLoading}>
  <div>Contenu réel</div>
</Skeleton>
```

---

## SkeletonList

Skeleton optimisé pour les listes : génère plusieurs listes avec SkeletonItem.

### Import

```tsx
import { SkeletonList, type SkeletonListProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type SkeletonListProps = {
  lists: {
    lines?: number;              // Nombre de répétitions de la grille (défaut: 1)
    grid: SkeletonProps["grid"]; // Grille par item
  }[];
  isLoading?: boolean;
  className?: string;
  children?: ReactNode;         // Contenu réel quand isLoading=false
};
```

### Exemple

```tsx
// Affiche 2 listes de squelettes quand isLoading=true
<SkeletonList
  isLoading={isLoading}
  lists={[
    { lines: 3, grid: [[2, 8, 2]] },  // 3 rangées de 3 colonnes
    { lines: 2, grid: [[12]] },        // 2 rangées pleine largeur
  ]}
>
  <MyRealList items={items} />
</SkeletonList>
```
