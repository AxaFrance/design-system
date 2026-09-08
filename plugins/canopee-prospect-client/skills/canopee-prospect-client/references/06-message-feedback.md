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
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type MessageProps = {
    variant: MessageVariants; // "validation" | "error" | "warning" | "information" | "neutral"
    title?: string;
    children?: ReactNode; // Corps du message
    action?: ReactElement<typeof Link | ComponentType<ButtonProps>>;
    iconSize?: number; // Taille icône en px (défaut: 24)
    heading?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; // Niveau titre (défaut: "h4")
} & ComponentPropsWithoutRef<'section'>;
```

### Comportement aria

| Variante  | `role`    |
| --------- | --------- |
| `error`   | `"alert"` |
| `warning` | `"alert"` |
| Autres    | aucun     |

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
import {
    CardMessage,
    cardMessageVariants,
    type CardMessageVariants,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type CardMessageProps = ComponentPropsWithoutRef<'div'> & {
    variant?: CardMessageVariants; // "info" | "warning" | "error" | "neutral"  (défaut: "info")
    title?: string; // Titre optionnel en gras
    text: string; // Texte principal (obligatoire)
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
import { Loader, type LoaderProps } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type LoaderProps = {
    isDialog?: boolean; // Rendu en <dialog> (true) ou <article> (false)
    title: string; // Texte principal (obligatoire)
    subtitle?: string; // Sous-texte optionnel
    spinnerProps?: SpinnerProps; // Props transmis au Spinner
    as?: ElementType; // Élément racine (polymorphique)
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
import {
    Spinner,
    spinnerVariants,
    type SpinnerVariants,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type SpinnerProps = {
    size?: 24 | 32 | 40; // Taille en px (défaut: 40)
    variant?: SpinnerVariants; // "blue" | "gray" | "white"  (défaut: "blue")
    text?: string; // aria-label (défaut: "Chargement en cours")
} & ComponentPropsWithoutRef<'div'>;
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

Placeholder de chargement basé sur des blocs individuels typés. `Skeleton` est la brique de base utilisée par `SkeletonGrid`, `SkeletonList` et `ExitLayoutSkeleton`.

### Import

```tsx
import {
    Skeleton,
    skeletonVariants,
    skeletonSizeVariants,
    type SkeletonProps,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type SkeletonProps = {
    variant?: 'rectangle' | 'circle' | 'action';
    size?: 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL';
    colSize?: number; // Nombre de colonnes occupées par le skeleton
    rowSize?: number; // Nombre de lignes occupées par le skeleton
    className?: string;
    'aria-busy'?: boolean;
    'aria-label'?: string;
};
```

### Exemple

```tsx
<Skeleton />

<Skeleton variant="circle" size="S" />

<Skeleton variant="action" size="M" colSize={12} />
```

## SkeletonGrid

Grille de skeletons à deux niveaux. Chaque cellule reçoit les props complètes de `Skeleton`.

### Import

```tsx
import {
    SkeletonGrid,
    type SkeletonGridProps,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type SkeletonGridProps = {
    grid: SkeletonProps[][]; // Chaque ligne contient une liste de cellules skeleton
    className?: string;
    'aria-busy'?: boolean; // (défaut: true)
    'aria-label'?: string; // (défaut: "Chargement")
    maxCols?: number; // Nombre max de colonnes (défaut: 12)
    colGap?: number; // Espace entre colonnes en px (défaut: 16)
    rowGap?: number; // Espace entre rangées en px (défaut: 8)
    isLoading?: boolean; // Si false, affiche children (défaut: true)
    children?: ReactNode; // Contenu affiché quand isLoading=false
};
```

### Exemple

```tsx
<SkeletonGrid
    grid={[
        [{ colSize: 12 }],
        [{ colSize: 12 }],
        [
            { colSize: 6, variant: 'circle', size: 'S' },
            { colSize: 6, variant: 'rectangle', size: 'L' },
        ],
    ]}
/>
```

---

## SkeletonList

Skeleton optimisé pour les listes : génère plusieurs listes de `SkeletonGrid`.

### Import

```tsx
import {
    SkeletonList,
    type SkeletonListProps,
} from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type SkeletonListProps = {
    lists: {
        lines?: number; // Nombre de répétitions de la grille (défaut: 1)
        grid: SkeletonProps[][]; // Grille par item
    }[];
    isLoading?: boolean;
    className?: string;
    children?: ReactNode; // Contenu réel quand isLoading=false
};
```

### Exemple

```tsx
// Affiche 2 listes de squelettes quand isLoading=true
<SkeletonList
    isLoading={isLoading}
    lists={[
        { lines: 3, grid: [[{ colSize: 2 }, { colSize: 8 }, { colSize: 2 }]] },
        { lines: 2, grid: [[{ colSize: 12 }]] },
    ]}
>
    <MyRealList items={items} />
</SkeletonList>
```

## ExitLayoutSkeleton

Version skeleton de `ExitLayout`, utilisée pendant le chargement des pages de sortie.

### Import

```tsx
import { ExitLayoutSkeleton } from '@axa-fr/canopee-react/prospect';
// ou client
```

### Props

```tsx
type ExitLayoutSkeletonProps = {
    hasAgent?: boolean;
    hasIcon?: boolean;
    hasAction?: boolean;
    hasContent?: boolean;
    hasHeading?: boolean;
};
```

### Exemple

```tsx
<ExitLayoutSkeleton hasAgent hasIcon hasAction hasContent hasHeading />
```
