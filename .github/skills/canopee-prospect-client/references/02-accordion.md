# Accordion, AccordionContextual, AccordionCore

Trois niveaux d'abstraction pour les accordéons.

---

## Accordion

Accordéon riche avec titre, icône SVG, sous-titre, tag, dates, info1/info2 et contenu déployé.

### Import

```tsx
import {
  Accordion,
  accordionVariants,
  type AccordionVariants,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type AccordionProps = {
  variant?: AccordionVariants;            // "primary" | "secondary"  (défaut: "primary")
  title: string;                          // Titre principal (obligatoire)
  subtitle?: string;                      // Sous-titre
  icon?: string;                          // SVG src pour l'icône dans le header
  info1: string;                          // Texte info ligne 1
  info2: string;                          // Texte info ligne 2
  dateLabel?: string;                     // Texte de la date affichée dans un <time>
  dateProps?: Omit<ComponentProps<"time">, "children">; // ex: { dateTime: "2024-01-01" }
  tagLabel?: string;                      // Label du Tag optionnel
  tagProps?: Omit<TagProps, "children">; // ex: { variant: "warning" }
  isPlain?: boolean;                      // Variante sans style de fond
  // + toutes les props de AccordionCore sauf `summary`
  open?: boolean;
  /** @deprecated */ isOpen?: boolean;
  onClick?: MouseEventHandler<HTMLElement>;
  showArrowAsClickIcon?: boolean;
  arrowIconVariant?: IconVariants;
  summaryProps?: Omit<ComponentProps<"summary">, "onClick">;
  children?: ReactNode;                   // Contenu déplié
};
```

### Variantes disponibles

| Variante | Usage |
|---|---|
| `primary` | Style principal (fond bleu clair) |
| `secondary` | Style secondaire |

### Exemple

```tsx
import bank from "@material-symbols/svg-700/rounded/account_balance-fill.svg";

<Accordion
  variant="primary"
  icon={bank}
  title="Assurance Habitation"
  subtitle="MRH n° 123456"
  info1="Contrat valide"
  info2="+ 686,00 €"
  tagLabel="En attente"
  tagProps={{ variant: "warning" }}
  dateLabel="01/01/2024"
  dateProps={{ dateTime: "2024-01-01" }}
>
  <p>Contenu détaillé du contrat...</p>
</Accordion>
```

---

## AccordionContextual

Accordéon contextuel simplifié, orienté information / alerte.

### Import

```tsx
import {
  AccordionContextual,
  accordionContextualVariants,
  type AccordionContextualVariants,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type AccordionContextualProps = {
  variant?: AccordionContextualVariants; // "info" | "warning" | "reverse"  (défaut: "info")
  title: string;                         // Titre (obligatoire)
  icon?: string;                         // SVG src optionnel
  // + props de AccordionCore (open, onClick, summaryProps, children, …)
};
```

### Comportement des variantes

| Variante | Couleur icône | Usage |
|---|---|---|
| `info` | `primary` (bleu) | Information standard |
| `warning` | `error` (rouge) | Alerte importante |
| `reverse` | `secondary` | Sur fond coloré |

### Exemple

```tsx
import info from "@material-symbols/svg-400/outlined/info.svg";

<AccordionContextual
  variant="info"
  icon={info}
  title="Bon à savoir"
>
  <p>Votre contrat est renouvelable chaque année.</p>
</AccordionContextual>

<AccordionContextual variant="warning" title="Attention">
  <p>Votre paiement est en attente de validation.</p>
</AccordionContextual>
```

---

## AccordionCore

Composant `<details>/<summary>` accessible, bas niveau — à utiliser quand les variantes Accordion / AccordionContextual ne suffisent pas.

### Import

```tsx
import { AccordionCore } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type AccordionCoreProps = {
  summary: ReactNode;                             // Contenu du <summary> (obligatoire)
  /** @deprecated */ isOpen?: boolean;            // Remplacé par open (HTML natif)
  open?: boolean;                                 // État ouvert/fermé
  summaryProps?: Omit<ComponentProps<"summary">, "onClick">;
  onClick?: MouseEventHandler<HTMLElement>;       // Intercepte le clic (empêche toggle natif)
  showArrowAsClickIcon?: boolean;                 // Flèche stylisée comme ClickIcon (défaut: true)
  arrowIconVariant?: IconVariants;               // Variante couleur de la flèche
} & ComponentProps<"details">;
```

### Exemple

```tsx
<AccordionCore
  summary={<span>Mon titre personnalisé</span>}
  open={isOpen}
  onClick={() => setIsOpen(!isOpen)}
>
  <div>Contenu libre</div>
</AccordionCore>
```
