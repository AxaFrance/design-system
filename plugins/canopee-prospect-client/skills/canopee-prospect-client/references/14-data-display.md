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

// Table.Th
type ThProps = ComponentPropsWithRef<"th"> & {
  position?: "left" | "center" | "right";
  checkboxPosition?: "left" | "center" | "right";
  onSort?: () => void;     // Affiche le bouton de tri (icône unfold_more)
  sortDirection?: "ascending" | "descending" | "none"; // Posé en aria-sort si onSort existe
  sortLabel?: string;      // Nom du bouton de tri (défaut : "Trier par" suivi du texte de
                           // l'en-tête, même dans un élément, sinon "Trier la colonne")
  onCheck?: () => void;    // Affiche une case à cocher dans l'en-tête
  checkboxLabel?: string;  // Nom de la case (défaut : "Tout sélectionner")
};
```

### Tri et sélection accessibles

- Passer `sortDirection` sur la colonne triée (`"ascending"` ou `"descending"`) et `"none"` sur
  les autres colonnes triables : le lecteur d'écran annonce le tri courant (`aria-sort`). Sans
  `sortDirection`, le tri n'est pas exposé : `Table.Th` ne connaît pas l'état du tri. Un
  `aria-sort` passé directement reste prioritaire.
- Le bouton de tri et la case d'en-tête ont toujours un nom. Le bouton reprend le texte de
  l'en-tête (« Trier par Nom ») ; donner un `checkboxLabel` explicite si la case ne sélectionne
  pas toutes les lignes (ex. « Sélectionner la colonne Montant »).
- L'en-tête de colonne garde son texte pour nom (`aria-labelledby`) : la case et le bouton de tri
  ne s'ajoutent pas à l'en-tête annoncé avec chaque cellule.

```tsx
<Table.Th
  scope="col"
  onSort={() => toggleSort("date")}
  sortDirection={sort.key === "date" ? sort.direction : "none"}
>
  Échéance
</Table.Th>
<Table.Th scope="col" onCheck={toggleAll} checkboxLabel="Sélectionner tous les contrats">
  Contrat
</Table.Th>
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
