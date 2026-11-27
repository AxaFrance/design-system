# TableMobileCard 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

La TableMobileCard présente une ligne d'un Table sous forme de carte, en paires de libellé et de valeur.

## Quand l'utiliser

### À utiliser pour

- Afficher les données d'un Table sur un écran de moins de 1024 px de large : une TableMobileCard par ligne du tableau, l'une sous l'autre.

### À ne pas utiliser pour

- Un écran de 1024 px de large ou plus : prendre Table.
- Une donnée seule avec son libellé, hors tableau : prendre ContentItemDuo.

## Règles selon les propriétés

### orientation=horizontal

Le libellé à gauche, la valeur à droite, pour une valeur courte, comme un montant ou une date. C'est la valeur par défaut.

### orientation=vertical

La valeur sous son libellé, alignée à gauche, pour une valeur longue ou un composant large.

### colorScheme=blue

Le _TableMobileCardRow prend un fond bleu clair. Un _TableMobileCardRow sur deux en colorScheme=blue alterne les fonds.

### type=children

La valeur est un composant posé dans le slot du _TableMobileCardRow, comme un Tag ou un Link.

### showDivider=false

Le dernier _TableMobileCardRow d'une carte prend showDivider=false, car le bord de la carte le ferme déjà.

## Exemples

- Un contrat sur mobile : une TableMobileCard avec trois _TableMobileCardRow, « Contrat », « Échéance » et « Montant », en orientation=horizontal, le dernier en showDivider=false.
- Le statut d'un contrat : un _TableMobileCardRow en type=children, avec un Tag dans son slot.
- Des fonds alternés : le deuxième _TableMobileCardRow d'une carte, puis un sur deux, en colorScheme=blue.

## Interdits

- Autre chose qu'un _TableMobileCardRow dans le slot de la TableMobileCard.
- Un texte posé directement dans le slot d'un _TableMobileCardRow : prendre type=text.
- showDivider=false sur un autre _TableMobileCardRow que le dernier.
- Modifier localement la taille, l'espacement ou les couleurs de la TableMobileCard, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- La TableMobileCard reçoit dans son slot des _TableMobileCardRow ([_tablemobilecardrow.json](_tablemobilecardrow.json)), l'un sous l'autre.
- Un _TableMobileCardRow porte un libellé obligatoire et une valeur. Selon son type, la valeur est un texte ou un composant.
- Le nombre maximal de _TableMobileCardRow : Non documenté.

## Rédaction

- Le libellé reprend l'en-tête de sa colonne dans le Table, et les libellés suivent l'ordre des colonnes. Exemple : « Échéance ».
- Le format des nombres, des montants et des dates : Non documenté.

## Comportement

- La TableMobileCard prend toute la largeur de son conteneur.
- La carte ne réagit pas au clic. Une action, comme un Button ou un Link, se pose dans la valeur d'un _TableMobileCardRow en type=children.
- Le tri et la sélection d'un Table, une fois affiché en TableMobileCard : Non documenté.
- L'espace entre deux cartes : Non documenté.

## Accessibilité

Une liste de définitions `<dl>`. Chaque _TableMobileCardRow regroupe un libellé `<dt>` et sa valeur `<dd>`.

- Le lecteur d'écran lit chaque libellé, puis sa valeur.
- Un Button ou un Link posé dans une valeur a un nom accessible qui cite son libellé. Exemple : « Télécharger le prospectus ».
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Le libellé et la valeur atteignent 19,3:1 sur fond blanc et 15,6:1 sur fond bleu.
- Comment nommer une carte, ou la relier à la ligne du tableau qu'elle représente : Non documenté.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-tablemobilecard--table-mobile-card) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-tablemobilecard--table-mobile-card).

Code source : [dossier TableMobileCard sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/TableMobileCard).

Détail de l'implémentation : [page TableMobileCard du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/14-data-display.md#tablemobilecard).

Cette fiche sur GitHub : [tablemobilecard.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/tablemobilecard/tablemobilecard.md).

Import, selon le thème :

```tsx
import { TableMobileCard, Tag } from "@axa-fr/canopee-react/prospect";
import { TableMobileCard, Tag } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<TableMobileCard variant="alternate">
  <TableMobileCard.DRow>
    <TableMobileCard.Dt>Contrat</TableMobileCard.Dt>
    <TableMobileCard.Dd>Habitation</TableMobileCard.Dd>
  </TableMobileCard.DRow>
  <TableMobileCard.DRow>
    <TableMobileCard.Dt>Statut</TableMobileCard.Dt>
    <TableMobileCard.Dd>
      <Tag variant="success">Validé</Tag>
    </TableMobileCard.Dd>
  </TableMobileCard.DRow>
</TableMobileCard>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| TableMobileCard | `TableMobileCard` |
| _TableMobileCardRow | `TableMobileCard.DRow` |
| label | `TableMobileCard.Dt` |
| value, ou le slot en type=children | `TableMobileCard.Dd` |
| orientation | `direction` de `TableMobileCard.DRow`, `row` pour horizontal et `column` pour vertical |
| colorScheme de _TableMobileCardRow | `variant` de `TableMobileCard`, pour toute la carte |
| Un _TableMobileCardRow sur deux en colorScheme=blue | `variant="alternate"` de `TableMobileCard` |
| showDivider=false sur le dernier _TableMobileCardRow | Sans équivalent, le code retire le trait de la dernière ligne |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. `TableMobileCard` vaut `alternate` par défaut, et `TableMobileCard.DRow` vaut `row`.

## Noms à ne pas employer

Carte de tableau, table card, tableau mobile.

Ces noms désignent TableMobileCard. Le seul nom à employer est TableMobileCard.

## Décisions

- **1.0.0 - 25/11/26.** La TableMobileCard est un composant à part, comme dans le code, et non une variante de Table. Dans Figma, une variante de breakpoint garderait les colonnes du Table, sans pouvoir les changer en cartes.
- **1.0.0 - 25/11/26.** La TableMobileCard reçoit ses _TableMobileCardRow dans un slot. Elle n'a pas de colorScheme, car une carte ne peut pas colorer les lignes posées dans son slot : chaque _TableMobileCardRow porte le sien.
- **1.0.0 - 25/11/26.** Le _TableMobileCardRow porte ses propres textes, au lieu de l'ancienne cellule de valeur à 16 types. Le libellé est en body/2/regular et la valeur en body/2/semibold, à 16 px comme dans le code. Le type=children remplace la valeur par un slot.
- **1.0.0 - 25/11/26.** Le _TableMobileCardRow n'a pas de propriété _theme, comme les parties du Table, sous réserve de validation par les développeurs de Canopée.

## Points ouverts

- **Trait entre les lignes.** Le code trace les lignes en `--blue-200` (`TableMobileCardAll.css:13`), alors que Figma prend le Divider, en color/gray/200. En attendant : signaler.
- **Fond bleu.** Le code prend `--blue-040` pour une ligne bleue (`TableMobileCardAll.css:53`), alors que Figma prend color/blue/050. En attendant : signaler.
- **Nom de la carte.** Rien ne nomme une carte pour un lecteur d'écran, ni ne la relie à la ligne du tableau qu'elle représente. En attendant : signaler.
- **Tri et sélection.** Ce que deviennent le tri et la sélection d'un Table une fois affiché en cartes n'est pas défini. En attendant : signaler.
- **Contenus et mise en page non définis.** Le nombre maximal de _TableMobileCardRow, le format des nombres, des montants et des dates, et l'espace entre deux cartes ne sont pas définis. En attendant : signaler.
- **Largeur de bascule.** La page d'exemple de Storybook passe aux TableMobileCard à 667 px de large ou moins (`Table.tsx:241`), et non sous 1024 px. En attendant : 1024 px.
- **Propriété _theme à valider.** La TableMobileCard et son _TableMobileCardRow n'ont pas de propriété _theme, comme les sous-composants du Table. Ce choix reste à valider avec les développeurs de Canopée. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
