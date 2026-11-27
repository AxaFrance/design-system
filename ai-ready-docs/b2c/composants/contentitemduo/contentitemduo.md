# ContentItemDuo 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le ContentItemDuo présente une donnée avec son libellé, comme un montant ou une date d'échéance.

## Quand l'utiliser

### À utiliser pour

- Afficher les données d'un contrat ou d'un profil, un ContentItemDuo par donnée. Exemple : « Numéro de contrat » et « AB-123-CD ».
- Récapituler les réponses d'un formulaire avant leur envoi.

### À ne pas utiliser pour

- Une information avec une photo, une icône ou un trait vertical : prendre ContentItem.
- Une ligne de tableau sur un écran de moins de 1024 px de large : prendre TableMobileCard.
- Une donnée qui se modifie sur place : prendre le champ qui convient, comme TextInput.

## Règles selon les propriétés

### orientation=horizontal

Pour une valeur courte, comme un montant, une date ou un numéro de contrat. C'est la valeur par défaut.

### orientation=vertical

Pour une valeur longue, comme une adresse.

### size=large

La taille par défaut, pour la plupart des usages.

### size=small

Pour un espace étroit, comme un récapitulatif dans un panneau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style de texte.

### showMessage=true

Pour un message sur cette donnée, comme le résultat d'une action ou un point d'attention.

### showButton=true

Pour ouvrir un complément d'information sur la donnée.

## Exemples

- Numéro de contrat : orientation=horizontal, label « Numéro de contrat », value « AB-123-CD ».
- Adresse : orientation=vertical, label « Adresse », value « 15 rue de la Paix, 75001 Paris ».
- Récapitulatif dans un panneau étroit : size=small, label « Date d'effet », value « 01/03/2027 ».
- Donnée à vérifier : showMessage=true, avec un _FormHelperText au ton warning.
- Date d'effet expliquée : showButton=true, label « Date d'effet », value « 01/03/2027 ».

## Interdits

- size=small avec orientation=vertical.
- Un autre composant qu'un Link dans le bouton, ou un autre message qu'un _FormHelperText.
- Un _FormHelperText au ton neutral, car le code ne propose pas ce ton ici.
- Modifier localement la taille, l'espacement ou les couleurs du ContentItemDuo, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé et une valeur, tous deux obligatoires.
- Un _FormHelperText sous la valeur, facultatif.
- Un Link « En savoir plus », facultatif.

## Rédaction

- Le libellé nomme la donnée, sans deux-points ni point final. Exemple : « Date d'effet ».
- La valeur reprend la donnée telle quelle. Le format des montants et des dates : Non documenté.
- La longueur maximale du libellé et de la valeur : Non documenté.
- Le Link dit « En savoir plus ». Un autre texte, comme « Modifier » : Non documenté.

## Comportement

- Le ContentItemDuo ne réagit pas au clic. Seul son Link se clique.

## Accessibilité

Un élément `<div>`, placé dans un `<dl>` avec les autres ContentItemDuo. Le libellé est dans un `<dt>`, la valeur et le _FormHelperText dans un `<dd>`, et le Link est un `<button>`.

- Le lecteur d'écran lit le libellé, puis la valeur.
- Le ContentItemDuo ne reçoit pas le focus. La touche Tab atteint seulement son Link.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Sur fond blanc, la valeur en color/gray/900 atteint 19,3:1, et le libellé en color/gray/600 atteint 5,7:1.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-contentitemduo--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-contentitemduo--docs).

Code source : [dossier ContentItemDuo sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/List/ContentItemDuo).

Détail de l'implémentation : [page ContentItemDuo du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/08-lists.md#contentitemduo).

Cette fiche sur GitHub : [contentitemduo.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/contentitemduo/contentitemduo.md).

Import, selon le thème :

```tsx
import { ContentItemDuo } from "@axa-fr/canopee-react/prospect";
import { ContentItemDuo } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<dl>
  <ContentItemDuo label="Numéro de contrat" value="AB-123-CD" />
  <ContentItemDuo
    label="Adresse"
    value="15 rue de la Paix, 75001 Paris"
    position="vertical"
  />
</dl>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| label | `label` |
| value | `value` |
| orientation | `position` |
| size | `size` |
| Le _FormHelperText, affiché par showMessage | `message` et `messageType` |
| Le Link, affiché par showButton | `buttonText` et `onButtonClick`, tous deux nécessaires. Le code affiche un Button en `variant="ghost"` |
| Le ton du _FormHelperText | `messageType`, error par défaut, sans valeur neutre |
| breakpoint | Sans équivalent. Le code agrandit les textes à partir de 1024 px (`ContentItemDuoCommon.css:45`), sauf en size=small (`ContentItemDuoCommon.css:63`) |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className`.

## Noms à ne pas employer

Paire libellé valeur, ligne de donnée, item de restitution, ContentItem Duo.

Ces noms désignent ContentItemDuo. Le seul nom à employer est ContentItemDuo.

## Décisions

- **1.0.0 - 27/11/26.** ContentItemDuo devient un composant, et non plus un template de bloc, car il se pose seul dans une page, comme le composant que le code exporte. Les maquettes qui l'utilisent n'ont rien à remplacer.
- **1.0.0 - 27/11/26.** ContentItemDuo reste à part de ContentItem et de _TableMobileCardRow, car leurs propriétés diffèrent. ContentItemDuo a un message et un Link. ContentItem a une photo, une icône ou un trait vertical, et _TableMobileCardRow un fond bleu et un trait de séparation.
- **1.0.0 - 27/11/26.** Les booléens showLabel et showValue disparaissent, car le code exige le libellé et la valeur.
- **1.0.0 - 27/11/26.** size=small n'existe qu'en orientation=horizontal, comme dans le code. L'ancienne variante mobile verticale, notée small, devient size=large, sans changer de rendu.
- **1.0.0 - 27/11/26.** Le bouton « En savoir plus » devient un Link small, rendu en `<button>` dans le code, comme l'action « En savoir plus » de _FormLabel. Il n'a pas d'icône pour le moment.
- **1.0.0 - 27/11/26.** ContentItemDuo n'a pas de propriété _theme, car le code a le même rendu dans les deux thèmes, sous réserve de validation par les développeurs de Canopée.

## Points ouverts

- **Bouton dans le code.** Le code affiche l'action avec un Button, et non avec un Link (`ContentItemDuoCommon.tsx:62`). En attendant : Link dans Figma, et signaler.
- **Link hors du `<dt>` et du `<dd>`.** Le code place le bouton directement dans le `<div>` (`ContentItemDuoCommon.tsx:59`), ce que le HTML n'autorise pas dans un `<dl>`. En attendant : signaler.
- **Nom du Link dans le code.** Le code ne transmet au bouton que son texte et son action (`ContentItemDuoCommon.tsx:60`). Aucun attribut ne peut compléter « En savoir plus » pour un lecteur d'écran. En attendant : signaler.
- **Couleurs dans le code.** Le code affiche le libellé dans un gris plus foncé que Figma, et la valeur dans un gris plus clair (`ContentItemDuoApollo.css:5`). Les deux restent au-dessus de 4,5:1. En attendant : signaler.
- **Message aligné à droite.** En size=small, le _FormHelperText est aligné à droite par une surcharge de mise en page dans Figma, faute de propriété pour l'aligner. En attendant : rien ne change à l'usage, le code aligne aussi le message à droite.
- **Plugin Copilot.** Sa page ContentItemDuo présente le bouton comme une action « Modifier ». Son exemple associe aussi position="vertical" et size="small", ce que le code refuse (`ContentItemDuoCommon.tsx:11`). En attendant : la fiche fait foi, et signaler.
- **Contenus non définis.** Le format des montants et des dates, la longueur maximale des textes, ce qu'ouvre « En savoir plus » et l'espace entre deux ContentItemDuo ne sont pas définis. En attendant : signaler.
- **Propriété _theme à valider.** Les développeurs de Canopée n'ont pas encore validé l'absence de _theme. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
