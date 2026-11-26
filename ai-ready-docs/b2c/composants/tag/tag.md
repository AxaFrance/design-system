# Tag 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Tag est un texte court et non cliquable, qui donne le statut ou la catégorie d'un élément. Son sens se règle avec tone : information par défaut, success, warning, error ou neutral.

## Quand l'utiliser

### À utiliser pour

- Donner le statut d'un élément : un contrat, une demande, un remboursement. Exemple : « En attente » sur une demande de remboursement.
- Indiquer qu'un élément est nouveau ou qu'une action reste à reprendre. Exemple : « Nouveau » sur un document.
- Classer un élément dans une catégorie. Exemple : « Conseil » sur un article.
- Afficher les options choisies dans un Select à choix multiple.

### À ne pas utiliser pour

- Plusieurs statuts ou catégories sur un même élément : Non documenté.
- Une information longue, de plus de deux mots : écrire un texte à côté de l'élément.
- Une action : prendre Button.
- Un lien : prendre Link.
- Un filtre : Non documenté.

## Règles selon les propriétés

### tone=information

Un élément nouveau, en cours, ou une action que l'utilisateur peut reprendre. Aussi une catégorie. Exemple : « Nouveau », « En cours », « À terminer », « Conseil ». Quand une action de l'utilisateur est attendue, prendre tone=warning.

### tone=success

Une action réalisée avec succès ou un statut validé. Exemple : « Validé », « Effectué ».

### tone=warning

Une action en attente, du côté d'AXA ou de l'utilisateur. Exemple : « En attente », « Action demandée ».

### tone=error

Un échec ou un refus. Exemple : « Rejeté », « Non conforme ».

### tone=neutral

Un élément expiré ou résilié, dont le texte donne la date. Exemple : « Résilié le 12/03/2026 ». Aussi une option choisie dans un Select à choix multiple.

### disabled=true

Seulement pour un Tag qui fait partie d'un composant désactivé. Exemple : les Tags des options choisies dans un Select à choix multiple en disabled=true.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le Tag utilise sa version mobile, plus petite.

## Exemples

- Document ajouté depuis la dernière visite : tone=information, « Nouveau ».
- Devis commencé et pas terminé : tone=information, « À terminer ».
- Remboursement versé : tone=success, « Effectué ».
- Demande de remboursement en cours d'analyse par AXA : tone=warning, « En attente ».
- Pièce justificative refusée : tone=error, « Rejeté ».
- Contrat résilié : tone=neutral, « Résilié le 12/03/2026 ».
- Option choisie dans un Select à choix multiple et désactivé : tone=neutral, disabled=true, « Habitation ».

## Interdits

- Choisir tone pour sa couleur plutôt que pour son sens. Exemple : tone=success pour mettre un mot en vert.
- disabled=true avec tone=information, tone=success, tone=warning ou tone=error.
- Modifier localement la taille, la forme ou les couleurs du Tag, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un texte, obligatoire, sur une seule ligne.
- Rien d'autre : ni icône, ni lien.

## Rédaction

- Deux mots au plus, et 21 caractères au plus, espaces compris. Pour un élément expiré ou résilié, tone=neutral ajoute une date après son mot. Exemple : « En attente », « Résilié le 12/03/2026 ».
- Le texte dit le statut, sans le sujet. Exemple : « Validé », pas « Devis validé ».
- Des mots qui se comprennent seuls. Exemple : « Nouveau », « En cours », « Action demandée ».
- Le texte ne commence pas par un verbe à l'infinitif, et ne contient ni pronom ni nom d'offre AXA. À éviter : « Terminer », « Votre contrat ».
- Une majuscule au début seulement, sans ponctuation, sauf la barre oblique d'une date. Exemple : « Résilié le 12/03/2026 ».

## Comportement

- Le Tag ne réagit ni au clic ni au clavier.
- Le texte ne passe jamais à la ligne.

## Accessibilité

Un élément `<div>`, sans rôle ARIA.

- Le statut passe par le texte, jamais par la couleur seule.
- Le texte contraste avec le fond à 4,5:1 au moins (WCAG). En disabled=true, ce seuil ne s'applique pas, car le WCAG en dispense le texte d'un composant désactivé.
- En disabled=true, le Tag ne porte ni `disabled` ni `aria-disabled`. Le composant qui contient le Tag porte l'état désactivé, et le lecteur d'écran l'annonce.
- Le Tag ne reçoit pas le focus et n'entre pas dans l'ordre de tabulation.
- Le lecteur d'écran lit le texte du Tag avec le reste du contenu, dans l'ordre de la page.
- Quand le statut change sans recharger la page, le lecteur d'écran l'annonce. Exemple : « En attente » devient « Validé ». Le développeur prévoit cette annonce dans la page, par exemple avec une zone `aria-live`. Le Tag ne la porte pas.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-tag--tag) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-tag--tag).

Code source : [dossier Tag sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Tag).

Détail de l'implémentation : [page Tag du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/15-visuals.md#tag).

Cette fiche sur GitHub : [tag.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/tag/tag.md).

Import, selon le thème :

```tsx
import { Tag } from "@axa-fr/canopee-react/prospect";
import { Tag } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Tag variant="warning">En attente</Tag>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| tone | `variant` |
| tone=information | `variant="info"` |
| label | `children` |
| disabled | Sans équivalent |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className` et les autres attributs de `<div>`. Dans le code, d'autres composants affichent un Tag : Accordion et ClickItem le règlent avec `tagLabel` et `tagProps`, Heading et TimelineVertical avec `tag` et `tagProps`. Dans Heading, le Tag vaut `variant="neutral"` par défaut. Dans un ClickItem désactivé, il passe en `neutral`.

breakpoint n'a pas d'équivalent dans le code. Une media query agrandit le texte à partir de 1024 px, et les marges ne changent pas.

## Noms à ne pas employer

Badge, étiquette, pastille, chip, statut.

Ces noms désignent Tag. Le seul nom à employer est Tag.

## Décisions

- **1.0.0 - 13/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Tag, au fond teinté du thème prospect. Le fond blanc du thème client disparaît.
- **1.0.0 - 13/11/26.** Le Tag n'a pas de bordure, pour ne pas ressembler au Button secondary, qui a un contour, alors que le Tag ne réagit pas au clic. Sans bordure, il alourdit aussi moins les pages qui en contiennent plusieurs. Le fond teinté le détache de la page dans la plupart des tons.
- **1.0.0 - 13/11/26.** tone=information est la valeur par défaut, comme dans le code.
- **1.0.0 - 16/11/26.** Le Tag a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024.
- **1.0.0 - 20/11/26.** Le Tag a une propriété disabled, pour suivre le composant désactivé qui le contient, comme un Select à choix multiple. En disabled=true, le texte passe en color/gray/400 sur le fond color/gray/050, comme la valeur d'un champ désactivé. Tous les tons auraient alors le même rendu gris : seul tone=neutral a donc une variante disabled=true. Carbon et Material UI prévoient aussi un état désactivé pour ce composant.

## Points ouverts

- **Bordure et fond dans le code.** Le code ne suit pas encore les décisions du 13/11/26 : il affiche une bordure dans les deux thèmes, et un fond blanc dans le thème client. En attendant : signaler.
- **Marges dans le code.** Le code a 2 px de marge en haut et en bas, contre 0 dans Figma. Il garde 8 px sur les côtés sur toutes les largeurs d'écran, contre 6 px en mobile dans Figma. En attendant : signaler.
- **Fond de tone=success.** Sans bordure, le fond très pâle de tone=success se distingue mal d'une page blanche. En attendant : signaler.
- **Palier de la couleur du texte.** Le texte prend le palier 700 dans tous les tons. Sur le fond 050, le palier 600 du vert n'atteint pas le contraste AA (WCAG), et les cinq tons restent alignés. L'équipe design system prévoit de retravailler la palette verte, puis de passer le texte en 600, comme celui de _FormHelperText. En attendant : 700.
- **Retour à la ligne dans le code.** Le code n'empêche pas un texte long de passer à la ligne. En attendant : respecter la limite de 21 caractères.
- **Plusieurs tags sur un même élément.** L'ancienne documentation du B2C l'interdit, alors que le code a un composant TagList. En attendant : signaler.
- **Information ou warning.** La frontière entre une action possible (tone=information) et une action attendue (tone=warning) n'est pas écrite dans l'ancienne documentation du B2C. Cette fiche la reprend de l'usage courant des design systems du marché. En attendant : elle s'applique.
- **Filtre.** Canopée n'a pas de composant de filtre pour le B2C. En attendant : signaler.
- **Annonce d'un statut qui change.** Canopée ne fournit pas de composant pour faire cette annonce. En attendant : une zone `aria-live` dans la page.
- **Accessibilité de l'ancienne documentation.** Elle demande `aria-label`, `tabindex="-1"` et une liste `<ul>`, ce que le code ne fait pas. En attendant : la rubrique Accessibilité de cette fiche s'applique.
- **disabled dans le code.** Le Tag du code n'a pas de prop `disabled`. Dans un ClickItem désactivé, le Tag passe en `variant="neutral"`, mais son texte ne passe pas en gris (`ClickItemCommon.tsx:75`). DropdownMultiSelect, le Select à choix multiple du code, garde ses Tags en `variant="info"`, même désactivé (`DropdownMultiSelectCommon.tsx:194`). En attendant : signaler.
- **Exemple du plugin Copilot.** Sa page Tag affiche « Résilié » en `variant="error"`, alors que cette fiche le met en tone=neutral. En attendant : tone=neutral.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
