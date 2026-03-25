# Navigation : TabBar, Pagination, Stepper

---

## TabBar

Barre d'onglets accessible avec navigation clavier (ArrowLeft/Right, Home, End).

### Import

```tsx
import {
  TabBar,
  tabBarDirection,
  type TabBarDirection,
  type TabBarProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TabBarProps = {
  items: ({
    content: ReactNode;            // Contenu du panneau affiché quand l'onglet est actif
    title: string;                 // Titre du bouton d'onglet
    // + autres props du bouton ItemTabBar (disabled, onClick, etc.)
  })[];
  preSelectedTabIndex?: number;    // Index de l'onglet actif par défaut (défaut: 0)
  direction?: TabBarDirection;     // "left" | "center"  (défaut: "left")
};
```

### Exemple

```tsx
<TabBar
  direction="left"
  preSelectedTabIndex={0}
  items={[
    {
      title: "Mes contrats",
      content: <ContratsList />,
    },
    {
      title: "Mes sinistres",
      content: <SinistresList />,
    },
    {
      title: "Documents",
      content: <DocumentsList />,
    },
  ]}
/>
```

---

## ItemTabBar

Bouton d'onglet individuel (utilisé dans TabBar, ou seul pour compositions custom).

### Import

```tsx
import { ItemTabBar, type ItemTabBarProps } from "@axa-fr/canopee-react/prospect";
```

### Props

```tsx
type ItemTabBarProps = ComponentPropsWithRef<"button"> & {
  isActive?: boolean;             // (défaut: false)
  title: string;
};
```

---

## Pagination

Pagination numérotée accessible avec boutons précédent/suivant.

### Import

```tsx
import {
  Pagination,
  ItemPagination,
  type ItemPaginationProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type PaginationProps = {
  numberPages?: number;           // Total de pages (défaut: 1)
  currentPage?: number;           // Page actuelle (défaut: 1)
  onChangePage: (page: number) => void;  // Callback (obligatoire)
  hidePrevNext?: boolean;         // Cache les boutons prev/next (défaut: false)
  "aria-label"?: string;          // (défaut: "Pagination")
  asItem?: (page: number) => ReactNode;  // Rendu custom d'un item de page
  prevButtonProps?: ComponentProps<typeof ClickIcon>;
  nextButtonProps?: ComponentProps<typeof ClickIcon>;
} & ComponentPropsWithoutRef<"nav">;
```

### Exemple

```tsx
const [page, setPage] = useState(1);

<Pagination
  numberPages={10}
  currentPage={page}
  onChangePage={setPage}
  aria-label="Navigation dans les résultats"
/>

// Avec composants personnalisés (ex: React Router)
<Pagination
  numberPages={10}
  currentPage={page}
  onChangePage={setPage}
  asItem={(pageNum) => (
    <a href={`/search?page=${pageNum}`}>{pageNum}</a>
  )}
/>
```

---

## Stepper

Indicateur d'avancement multi-étapes avec titre, sous-titre et message.

### Import

```tsx
import { Stepper } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type StepperProps = {
  currentStep: number;            // Étape actuelle (1-based, obligatoire)
  nbSteps?: 2 | 3 | 4 | 5 | 6 | 7 | 8;  // Nombre total d'étapes (défaut via ProgressBarGroup)
  currentStepProgress?: number;   // Progression (0-100) dans l'étape courante
  currentTitle?: string;          // Titre de l'étape
  currentSubtitle?: string;       // Sous-titre de l'étape
  helper?: string;                // Texte d'aide sous la barre
  message?: string;               // Message de validation/erreur
  messageType?: "error" | "success" | "warning";
  titleLevel?: 1 | 2 | 3;        // Niveau de heading du titre (défaut: 2)
} & Omit<HTMLAttributes<HTMLDivElement>, "role">;
```

### Exemple

```tsx
<Stepper
  currentStep={2}
  nbSteps={4}
  currentTitle="Vos informations personnelles"
  currentSubtitle="Étape 2 sur 4"
  currentStepProgress={50}
/>

// Avec message d'erreur
<Stepper
  currentStep={3}
  nbSteps={4}
  currentTitle="Récapitulatif"
  message="Vérifiez vos informations avant de continuer"
  messageType="warning"
/>
```
