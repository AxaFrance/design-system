# Tableaux et données : Table, TableMobileCard, TimelineVertical

---

## Table

Tableau HTML accessible avec sous-composants stylisés. Supporte variantes de couleurs pour le header/body et taille des rangs.

### Import

```tsx
import {
  Table,
  type TableProps,
  type HeadColorVariants,
  type BodyColorVariants,
  type RowSizeVariants,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Sous-composants

```
Table
├── Table.THead  (thead)
├── Table.TBody  (tbody)
├── Table.Tr     (tr)
├── Table.Th     (th)
└── Table.Td     (td)
```

### Props de sous-composants

```tsx
// Table.THead
type THeadProps = ComponentPropsWithRef<"thead"> & {
  colorVariant?: HeadColorVariants;  // variantes couleur du header
};

// Table.TBody
type TBodyProps = ComponentPropsWithRef<"tbody"> & {
  colorVariant?: BodyColorVariants;  // variantes couleur du body
};

// Table.Tr
type TrProps = ComponentPropsWithRef<"tr"> & {
  sizeVariant?: RowSizeVariants;    // variantes taille des rangs
};
```

### Exemple

```tsx
<Table aria-label="Historique des contrats">
  <Table.THead>
    <Table.Tr>
      <Table.Th scope="col">Contrat</Table.Th>
      <Table.Th scope="col">Échéance</Table.Th>
      <Table.Th scope="col">Montant</Table.Th>
      <Table.Th scope="col">Statut</Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody>
    {contracts.map((contract) => (
      <Table.Tr key={contract.id}>
        <Table.Td>{contract.name}</Table.Td>
        <Table.Td>{contract.date}</Table.Td>
        <Table.Td>{contract.amount} €</Table.Td>
        <Table.Td>
          <Tag variant={contract.statusVariant}>{contract.status}</Tag>
        </Table.Td>
      </Table.Tr>
    ))}
  </Table.TBody>
</Table>
```

---

## TableMobileCard

Alternative au tableau pour l'affichage mobile, sous forme de cartes `<dl>` (description list).

### Import

```tsx
import { TableMobileCard, type TableMobileCardProps } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TableMobileCardProps = ComponentPropsWithRef<"dl"> & {
  variant?: "white" | "blue" | "alternate";  // Fond de la carte (défaut: "alternate")
};
```

### Sous-composants

```
TableMobileCard
├── TableMobileCard.DRow  (groupement term + description)
├── TableMobileCard.Dt    (terme/label)
└── TableMobileCard.Dd    (description/valeur)
```

### Exemple

```tsx
{contracts.map((contract) => (
  <TableMobileCard key={contract.id} variant="alternate">
    <TableMobileCard.DRow>
      <TableMobileCard.Dt>Contrat</TableMobileCard.Dt>
      <TableMobileCard.Dd>{contract.name}</TableMobileCard.Dd>
    </TableMobileCard.DRow>
    <TableMobileCard.DRow>
      <TableMobileCard.Dt>Échéance</TableMobileCard.Dt>
      <TableMobileCard.Dd>{contract.date}</TableMobileCard.Dd>
    </TableMobileCard.DRow>
    <TableMobileCard.DRow>
      <TableMobileCard.Dt>Montant</TableMobileCard.Dt>
      <TableMobileCard.Dd>{contract.amount} €</TableMobileCard.Dd>
    </TableMobileCard.DRow>
  </TableMobileCard>
))}
```

### Approche responsive recommandée

```tsx
// Sur desktop → Table, sur mobile → TableMobileCard
// Via CSS display:none ou composants conditionnels
<div className="hidden-mobile">
  <Table>…</Table>
</div>
<div className="visible-mobile-only">
  {contracts.map((c) => <TableMobileCard key={c.id}>…</TableMobileCard>)}
</div>
```

---

## TimelineVertical

Composant de timeline verticale pour afficher des événements chronologiques.

### Import

```tsx
import { TimelineVertical } from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type TimelineVerticalProps = PropsWithChildren<{
  title: string;                  // Titre de la section (obligatoire)
  tag: ReactNode;                 // Tag ou badge de statut (obligatoire)
  className?: string;
}>;
```

### Exemple

```tsx
import { Tag } from "@axa-fr/canopee-react/prospect";

<TimelineVertical
  title="15 janvier 2024"
  tag={<Tag variant="success">Payé</Tag>}
>
  <p>Paiement de votre cotisation mensuelle</p>
  <p>Montant : 45,00 €</p>
</TimelineVertical>

<TimelineVertical
  title="1er décembre 2023"
  tag={<Tag variant="warning">En attente</Tag>}
>
  <p>Renouvellement de votre contrat annuel</p>
</TimelineVertical>
```
