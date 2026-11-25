# Table 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Table présente des données en lignes et en colonnes, pour les comparer.

## Quand l'utiliser

### À utiliser pour

- Comparer des éléments de même nature selon plusieurs critères, sur un écran de 1024 px de large ou plus. Exemple : des contrats, avec leur référence, leur échéance, leur montant et leur statut.

### À ne pas utiliser pour

- Un écran de moins de 1024 px de large : prendre TableMobileCard, une carte par ligne du tableau.
- Disposer des contenus en colonnes, sans données à comparer : Non documenté.

## Règles selon les propriétés

### type=text

Un texte, aligné à gauche.

### type=number

Un nombre ou un montant, aligné à droite, pour que les chiffres se lisent en colonne. L'en-tête de la colonne prend placement=right.

### type=children

Un composant posé dans le slot de la cellule, comme un Tag, une Checkbox, un Link ou un Button.

### size=small

Pour une ligne de texte dans un tableau dense.

### size=large

Pour un texte avec son texte secondaire, ou pour un champ comme TextInput.

### colorScheme=blue

Le _TableCell prend un fond bleu clair. Pour colorer une ligne, chaque _TableCell de cette ligne passe en colorScheme=blue, dans toutes les _TableColumn. Une ligne sur deux en bleu donne des lignes alternées, qui aident à suivre une ligne dans un tableau large.

### colorScheme=gray

Le _TableHeaderCell prend un fond gris au lieu du bleu. Quand le préférer au bleu : Non documenté.

### placement=top

Le contenu du _TableCell se cale en haut de la cellule au lieu d'être centré, quand les cellules d'une même ligne n'ont pas la même hauteur de contenu.

### showCheckbox=true

Le _TableHeaderCell porte une Checkbox. Son usage, comme sélectionner les lignes du tableau : Non documenté.

### showSortButton=true

Le _TableHeaderCell porte un bouton de tri, pour une colonne que l'utilisateur peut trier.

### showHeader=false

Une _TableColumn sans en-tête. Dans quel cas : Non documenté.

## Exemples

- Liste de contrats : quatre _TableColumn. « Référence » et « Client » en type=text, « Montant » en type=number avec un en-tête en placement=right, et « Statut » en type=children avec un Tag.
- Tableau aux lignes alternées : les _TableCell de la deuxième ligne, puis d'une ligne sur deux, en colorScheme=blue.
- Tableau triable : showSortButton=true sur l'en-tête des colonnes que l'utilisateur peut trier.

## Interdits

- Autre chose qu'une _TableColumn dans le slot de Table, ou qu'un _TableCell dans le slot d'une _TableColumn.
- Un texte posé directement dans le slot d'un _TableCell : prendre type=text ou type=number.
- showDescription=true sur un _TableCell en size=small ou size=medium, car le texte secondaire n'y tient pas.
- Des cellules de size différentes sur une même ligne, car les lignes se décaleraient d'une colonne à l'autre.
- Des colorScheme différents sur une même ligne.
- Modifier localement la taille, l'espacement ou les couleurs du Table, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Le Table reçoit dans son slot des _TableColumn ([_tablecolumn.json](_tablecolumn.json)), placées côte à côte.
- Une _TableColumn porte un _TableHeaderCell ([_tableheadercell.json](_tableheadercell.json)), masquable avec showHeader. Elle reçoit dans son slot un _TableCell ([_tablecell.json](_tablecell.json)) par ligne.
- Un _TableHeaderCell porte un libellé, et en option une Checkbox et un bouton de tri.
- Un _TableCell porte, selon son type, un texte avec un texte secondaire facultatif, un nombre ou un composant.
- Le nombre maximal de colonnes et de lignes : Non documenté.

## Rédaction

- Le libellé d'un en-tête nomme la donnée de sa colonne, en un ou deux mots, sans verbe. Exemple : « Échéance ».
- Le format des nombres, des montants et des dates : Non documenté.
- Ce qu'affiche une cellule sans donnée : Non documenté.

## Comportement

- Le Table prend toute la largeur de son conteneur.
- Le Table ne se change pas seul en cartes. Sous 1024 px de large, la page affiche des TableMobileCard à sa place.
- Un clic sur le bouton de tri d'un en-tête demande le tri des lignes selon cette colonne. L'ordre du tri, et la façon de le montrer : Non documenté.
- Ce qu'affiche le Table sans aucune ligne, ou pendant le chargement des données : Non documenté.
- Quand le tableau dépasse la largeur de l'écran : Non documenté.

## Accessibilité

Un élément `<table>` natif, avec `<thead>`, `<tbody>`, `<tr>`, `<th>` et `<td>`. Chaque en-tête de colonne est un `<th>` qui porte `scope="col"`.

- Le tableau a un nom accessible, avec `aria-label` ou un élément `<caption>`. Exemple : `aria-label="Historique des contrats"`.
- Le lecteur d'écran annonce chaque cellule avec l'en-tête de sa colonne.
- Le bouton de tri a un nom accessible, qui nomme la colonne. L'en-tête d'une colonne triée porte `aria-sort`, avec `ascending` ou `descending`.
- La Checkbox de l'en-tête a un nom accessible.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Le texte d'une cellule atteint 19,3:1 sur fond blanc et 15,6:1 sur fond bleu. Le texte secondaire atteint 5,7:1 sur fond blanc et 4,6:1 sur fond bleu. Le libellé d'un en-tête atteint 15,6:1 sur fond bleu et 17,2:1 sur fond gris.

Référence : [ARIA Authoring Practices Guide, Table Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/table/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-table--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-table--docs).

Code source : [dossier Table sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Table).

Détail de l'implémentation : [page Table du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/14-data-display.md#table).

Cette fiche sur GitHub : [table.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/table/table.md).

Import, selon le thème :

```tsx
import { Table, Tag } from "@axa-fr/canopee-react/prospect";
import { Table, Tag } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Table aria-label="Historique des contrats">
  <Table.THead>
    <Table.Tr>
      <Table.Th scope="col">Référence</Table.Th>
      <Table.Th scope="col">Statut</Table.Th>
      <Table.Th scope="col" position="right">
        Montant
      </Table.Th>
    </Table.Tr>
  </Table.THead>
  <Table.TBody variant="alternate">
    <Table.Tr size="M">
      <Table.Td>REF-001</Table.Td>
      <Table.Td>
        <Tag variant="success">Validé</Tag>
      </Table.Td>
      <Table.Td position="right">220,00 €</Table.Td>
    </Table.Tr>
  </Table.TBody>
</Table>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Table | `Table` |
| _TableColumn | Sans équivalent, le code construit le tableau par lignes, avec `Table.Tr` |
| _TableHeaderCell | `Table.Th`, dans `Table.THead` |
| _TableCell | `Table.Td`, dans `Table.TBody` |
| label et value | `children` de `Table.Td` |
| Le texte secondaire, affiché par showDescription | Sans équivalent |
| showHeader=false | Sans équivalent |
| colorScheme de _TableHeaderCell | `variant` de `Table.THead` |
| colorScheme de _TableCell | `variant` de `Table.TBody`, pour tout le corps, ou de `Table.Td`, pour une cellule |
| Une ligne sur deux en colorScheme=blue | `variant="alternate"` de `Table.TBody` |
| size=small, size=medium et size=large | `size="S"`, `size="M"` et `size="L"` de `Table.Tr` |
| placement de _TableCell | `verticalAlign` de `Table.Td`, `middle` pour center |
| placement de _TableHeaderCell | `position` de `Table.Th` |
| type=number | `position="right"` de `Table.Td` |
| showCheckbox | `onCheck` de `Table.Th` |
| showSortButton | `onSort` de `Table.Th` |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. `Table.THead` vaut `blue` par défaut, `Table.TBody` vaut `white`, et `Table.Tr` vaut `S`, alors que Figma prend size=medium par défaut. `size` de `Table.Tr` ne change que la hauteur des `Table.Td` (`TableCommon.css:101`). `onSort` ne reçoit aucun argument et ne trie rien : la page trie ses données et garde l'ordre en cours. Le composant ne pose pas `scope="col"`, et le développeur le passe à chaque `Table.Th`. Sans équivalent dans Figma : `position="center"` de `Table.Th` et `Table.Td`, `checkboxPosition` de `Table.Th`, et `size` de `Table.Td`.

## Noms à ne pas employer

Tableau, grille, data table, datatable, DataGrid.

Ces noms désignent Table. Le seul nom à employer est Table.

## Décisions

- **1.0.0 - 25/11/26.** Dans Figma, le Table se construit par colonnes, avec des _TableColumn placées côte à côte dans son slot. Seule une construction par colonnes garde la même largeur à toutes les cellules d'une colonne. Le code construit le tableau par lignes, ce que décrit le tableau des écarts.
- **1.0.0 - 25/11/26.** Les lignes d'une _TableColumn passent par un slot, à la place de l'ancienne propriété qui fixait leur nombre de 1 à 15. Le colorScheme passe sur chaque _TableCell, et les lignes alternées se règlent ligne par ligne.
- **1.0.0 - 25/11/26.** Les deux anciens composants de cellule, l'un pour la hauteur et la couleur, l'autre pour le contenu, sont fusionnés en un seul _TableCell, comme `Table.Td` dans le code.
- **1.0.0 - 25/11/26.** Un _TableCell n'a plus que trois types : text, number et children. Les 17 anciens types de contenu, du Tag au Select, passent par le slot de type=children.
- **1.0.0 - 25/11/26.** Le _TableCell porte ses propres textes, au lieu du template ContentItemMono, car un composant ne contient pas de template. Le texte et le nombre sont en body/2/semibold, à 16 px en semibold comme dans le code. Les cellules n'ont plus d'icône, comme `Table.Td`.
- **1.0.0 - 25/11/26.** Les cellules ont trois hauteurs, 40, 56 et 80 px, comme l'en-tête et le code. Les hauteurs de 120 et 160 px, qui ne servaient pas, disparaissent. size=medium est la valeur par défaut, la plus utilisée dans la librairie Figma.
- **1.0.0 - 25/11/26.** _TableHeaderCell et _TableCell restent deux composants, comme `Table.Th` et `Table.Td`, car leurs propriétés diffèrent. Par défaut, l'en-tête n'affiche que son libellé. Son bouton de tri est un IconButton tertiary, avec l'icône icon/unfold-more de Fondations.
- **1.0.0 - 25/11/26.** Les parties du Table n'ont pas de propriété _theme, sous réserve de validation par les développeurs de Canopée. Dans le code, seul le fond bleu de l'en-tête change entre les thèmes. Les composants posés dans les cellules gardent leur propre _theme.
- **1.0.0 - 25/11/26.** Sur un écran de moins de 1024 px de large, le Table laisse la place à TableMobileCard, un composant à part, comme dans le code. Dans Figma, une variante de breakpoint garderait les colonnes du Table, sans pouvoir les changer en cartes.

## Points ouverts

- **Thème client.** Dans le code, l'en-tête bleu prend `--blue-080` en prospect et `--blue-100` en client (`TableApollo.css:5`, `TableLF.css:5`). Figma garde un seul fond, color/blue/050. La suppression de _theme reste à valider avec les développeurs de Canopée. En attendant : signaler.
- **Libellé de l'en-tête.** Le code met le libellé en semibold (`TableCommon.css:31`), et en bleu sur l'en-tête bleu (`TableCommon.css:129`). Figma le met en label/1/regular et en color/gray/900. En attendant : signaler.
- **Trait entre les lignes.** Le code trace les lignes en `--blue-200` (`TableCommon.css:103`), alors que Figma prend le Divider, en color/gray/200. En attendant : signaler.
- **Tri.** Le bouton de tri du code n'a pas de nom accessible (`Th.tsx:36`), et son icône ne montre pas l'ordre du tri. Le composant ne pose pas `aria-sort`, mais `Table.Th` le transmet à son `<th>` (`Th.tsx:31`). L'ordre du tri n'est pas défini. En attendant : passer `aria-sort` à l'en-tête de la colonne triée, et signaler le reste.
- **Checkbox de l'en-tête.** Son usage n'est pas défini. Le code la pose sans nom accessible, et la page ne peut ni la cocher ni la mettre en état intermédiaire (`Th.tsx:33`). La page d'exemple de Storybook s'en sert pour surligner une colonne, pas pour sélectionner des lignes. En attendant : signaler.
- **Usages non définis.** Une mise en page en colonnes sans données à comparer, l'en-tête gris plutôt que bleu, et une colonne sans en-tête n'ont pas de règle. En attendant : signaler.
- **Contenus non définis.** Le nombre maximal de colonnes et de lignes, le format des nombres, des montants et des dates, et le contenu d'une cellule sans donnée ne sont pas définis. En attendant : signaler.
- **États du tableau.** Le rendu d'un tableau sans ligne, ou pendant le chargement des données, n'est pas défini. En attendant : signaler.
- **Tableau plus large que l'écran.** Le défilement horizontal, ou l'adaptation des colonnes, n'est pas défini. En attendant : signaler.
- **Largeur de bascule.** La page d'exemple de Storybook passe aux TableMobileCard sous 667 px de large (`Table.tsx:240`), et non sous 1024 px. En attendant : 1024 px.
- **Plugin Copilot.** Sa page Table nomme `colorVariant` et `sizeVariant` des propriétés que le code appelle `variant` et `size`. En attendant : la fiche fait foi.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
