# ContentItem 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le ContentItem présente une information et son détail, comme un contrat, une personne ou une coordonnée.

## Quand l'utiliser

### À utiliser pour

- Présenter une personne, avec sa photo, son nom et son rôle. Exemple : le conseiller d'un client.
- Présenter une coordonnée ou une information courte, avec une icône. Exemple : une adresse, un numéro de téléphone, des horaires.
- Présenter une information liée à celle du dessus, avec un trait vertical. Exemple : sous le conseiller, le contrat qu'il suit.
- Présenter un réglage avec son Switch, ou une information qu'il est possible de modifier ou de supprimer.

### À ne pas utiliser pour

- Une information qui se clique en entier pour ouvrir un autre contenu : prendre ClickItem.
- Une paire de libellé et de valeur, comme « Montant » et « 45 € » : prendre ContentItemDuo.
- Une entrée de menu : prendre _MenuItem, dans un DropdownMenu.
- Un titre de page ou de section : prendre Heading.

## Règles selon les propriétés

### type=picture

Quand la personne présentée a une photo. C'est la valeur par défaut.

### type=icon

Pour une coordonnée ou une information courte, avec une icône de la librairie Figma Fondations Canopée.

### type=stick

Pour une information liée à celle du dessus.

### size=large

Pour la personne principale d'une page, comme le conseiller d'un client.

### actions=buttons

Quand l'information peut se modifier ou se supprimer.

### actions=switch

Quand l'information décrit un réglage que l'utilisateur active ou désactive.

## Exemples

- Conseiller du client : type=picture, title « Michel Lhote », subtitle « Agent général d'assurance ».
- Contrat rattaché : type=stick, title « Contrat rattaché », subtitle « Assurance Vie, Auto, Habitation ».
- Adresse d'une agence : type=icon, title « 6 place du 14 juillet », subtitle « 28240 Ivry-la-Bataille ».
- Réglage des notifications : type=icon, actions=switch, title « Notifications par e-mail ».
- Adresse modifiable : type=icon, actions=buttons, title « 6 place du 14 juillet », avec les Button « Modifier » et « Supprimer ».
- Conseiller en tête de page : type=picture, size=large, title « Michel Lhote ».

## Interdits

- size=large avec type=icon ou type=stick.
- showDescription=true avec type=picture ou type=stick.
- En actions=buttons, autre chose que deux Button tertiary.
- En actions=switch, autre chose qu'un Switch.
- Modifier localement la taille, l'espacement ou les couleurs du ContentItem, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un title, obligatoire, sauf en type=icon où un seul des trois textes suffit.
- À gauche, selon type, une photo, une icône facultative ou un trait.
- À droite, aucune action, deux Button ou un Switch. Une seule action : Non documenté.

## Rédaction

- Le title dit l'information principale, sans point final. Exemple : « Contrat rattaché ».
- Le subtitle et la description la précisent, en quelques mots. Exemple : « Assurance Vie, Auto, Habitation ».
- La longueur maximale des textes : Non documenté.

## Comportement

- Le ContentItem ne réagit pas au clic. Seuls ses Button et son Switch se cliquent.

## Accessibilité

Un élément `<div>`, dont les textes sont des `<span>`.

- Le ContentItem ne reçoit pas le focus. La touche Tab atteint seulement ses Button et son Switch.
- La photo est décorative par défaut, car le nom est écrit à côté. Elle ne prend un texte alternatif que si elle dit plus que le texte.
- L'icône et le trait sont décoratifs.
- Les deux Button se placent dans un conteneur de rôle group, nommé d'après l'information. Exemple : « Actions sur l'adresse ».
- Le Switch prend le title pour nom accessible, relié par `aria-labelledby`.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Sur fond blanc, les textes en color/gray/900 atteignent 19,3:1, et ceux en color/gray/600 atteignent 5,7:1.
- Plusieurs ContentItem l'un sous l'autre, en liste `<ul>` ou non : Non documenté.

## Code

Storybook de ContentItemMono, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-contentitemmono--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-contentitemmono--docs).

Storybook de ContentItemDuoAction, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-list-contentitemduoaction--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-list-contentitemduoaction--docs).

Code source : [dossier ContentItemMono](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ContentItemMono) et [dossier ContentItemDuoAction](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ContentItemDuoAction) sur GitHub.

Détail de l'implémentation : [page ContentItemMono](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/09-content-items.md#contentitemmono) et [page ContentItemDuoAction](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/08-lists.md#contentitemduoaction) du plugin Copilot.

Cette fiche sur GitHub : [contentitem.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/contentitem/contentitem.md).

Import, selon le thème :

```tsx
import { ContentItemMono, ContentItemDuoAction } from "@axa-fr/canopee-react/prospect";
import { ContentItemMono, ContentItemDuoAction } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus. L'icône est un fichier SVG, importé à part.

Exemple :

```tsx
<ContentItemMono
  type="picture"
  picture="/conseiller.jpg"
  title="Michel Lhote"
  subtitle="Agent général d'assurance"
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| ContentItem en actions=none | `ContentItemMono` |
| ContentItem en actions=buttons ou actions=switch | `ContentItemDuoAction`, qui contient un `ContentItemMono` dans `contentItemProps` |
| type | `type`, mêmes valeurs |
| size | `size`, pour `type="picture"` |
| title | `title` |
| subtitle | `subtitle`, ou `subtitle1` en `type="icon"` |
| description | `subtitle2`, en `type="icon"` seulement |
| La photo de l'Avatar, exposé dans le panneau | `picture`, l'adresse de l'image |
| icon, affichée par showIcon | `iconProps` |
| actions=buttons | `state="edit"` et `buttons` |
| actions=switch | `state="toggle"` et `toggleProps`, les props du `Toggle`, le Switch du code |
| Le texte alternatif de la photo | `basePictureProps.alt`, vide par défaut |
| showTitle, showSubtitle, showDescription | Sans équivalent, un texte omis ne s'affiche pas |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. En `type="picture"`, le code exige `title` et `subtitle`. En `type="stick"`, il exige `title`.

## Noms à ne pas employer

ContentItemMono, ContentItemDuoAction, ContentMonoItem, item de contenu, ligne d'information.

Ces noms désignent ContentItem. Le seul nom à employer est ContentItem.

## Décisions

- **1.0.0 - 26/11/26.** ContentItem réunit les anciens ContentItemMono et ContentItemDuoAction, qui avaient les mêmes propriétés, à part les actions. Les deux anciens composants restent sur la page Legacy de la librairie Figma, sous les noms Legacy/ContentItemMono et Legacy/ContentItemDuoAction.
- **1.0.0 - 26/11/26.** ContentItem est un composant, et non plus un template, car le DataAgent le contient et un composant ne contient pas de template.
- **1.0.0 - 26/11/26.** ContentItemDuo reste un composant à part, car une paire de libellé et de valeur n'a pas les mêmes propriétés.
- **1.0.0 - 26/11/26.** Les actions passent par une variante actions, et non par un slot. La variante empêche d'afficher à la fois des Button et un Switch.
- **1.0.0 - 26/11/26.** En type=icon, l'icône est en color/gray/800, dans un rond color/gray/050 de 48 px, comme celle de la Modal en mobile et comme le fond de l'Avatar sans photo. Le rond a la taille de la photo du type picture.
- **1.0.0 - 26/11/26.** En type=stick, le trait garde color/blue/700, la couleur de la marque. C'est une exception à la règle qui réserve ce bleu aux éléments interactifs.
- **1.0.0 - 26/11/26.** Le title est en color/gray/900, car le ContentItem présente un contenu et ne se clique pas.
- **1.0.0 - 26/11/26.** ContentItem n'a pas de propriété _theme, sous réserve de validation par les développeurs de Canopée. Figma garde le rendu du thème prospect.

## Points ouverts

- **Titre large dans le code.** En size=large, Figma met le titre en Publico Headline Bold, 24 px, sans style de texte. Le code le met en Publico Headline Light (`ContentItemMonoApollo.css:43`), en 20 px sous 1024 px de large et en 24 px au-delà (`ContentItemMonoCommon.css:46`). En attendant : Figma fait foi, et signaler.
- **Titre large en client.** Le thème client met ce titre en Publico bold (`ContentItemMonoLF.css:43`). En attendant : signaler.
- **Propriété _theme à valider.** Les développeurs de Canopée n'ont pas encore validé l'absence de _theme. En attendant : signaler.
- **Nom du Switch dans le code.** Le title n'a pas d'`id` (`ContentItemMonoCore.tsx:42`), et le Switch ne peut donc pas s'y relier. En attendant : `aria-label` sur le `Toggle`, avec le texte du title.
- **Icône dans le code.** Le code affiche l'icône seule, sans rond, et en bleu (`IconCommon.css:24`). En attendant : signaler.
- **Deux composants dans le code.** Le code n'a pas de composant unique ContentItem. En attendant : le tableau des écarts s'applique.
- **Contenus non définis.** La longueur maximale des textes et l'espace entre deux ContentItem ne sont pas définis. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
