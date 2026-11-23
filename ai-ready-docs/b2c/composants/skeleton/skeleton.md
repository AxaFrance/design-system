# Skeleton 1.0.0

Utilise les design tokens de Canopée 2.0.0 ou d'une version plus récente.

## Description

Le Skeleton remplace un contenu par une forme grise animée, le temps de son chargement.

## Quand l'utiliser

### À utiliser pour

- Montrer la place d'un contenu qui charge, quand sa mise en page est connue : un bloc de texte ou d'image, un avatar, un bouton.

### À ne pas utiliser pour

- Une action en cours, comme l'envoi d'un formulaire : prendre un Button en chargement.
- Un contenu dont la mise en page n'est pas connue à l'avance : prendre Spinner.
- L'avancement mesurable d'une tâche, comme l'envoi d'un fichier : prendre ProgressBar.

## Règles selon les propriétés

### type=rectangle

Un bloc de texte ou d'image.

### type=circle

Un avatar ou une icône.

### type=action

Un bouton.

## Exemples

- Paragraphe en chargement : type=rectangle, size=medium.
- Avatar d'un conseiller en chargement : type=circle, size=medium.
- Bouton d'une zone qui charge, avant son affichage : type=action, size=medium.

## Interdits

- type=circle avec size=x-small, size=x-large ou size=xx-large.
- type=action avec une autre taille que size=medium.
- Modifier localement la hauteur, l'arrondi ou les couleurs du Skeleton, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Une forme animée, sans texte ni icône, portée par un _SkeletonAnimation ([_skeletonanimation.json](_skeletonanimation.json)).
- Sa largeur suit son conteneur, et sa hauteur vient de size. La valeur de size selon le contenu remplacé, comme une ligne de texte, un titre ou une image : Non documenté.
- Plusieurs Skeleton se combinent pour reproduire la mise en page du contenu attendu.

## Rédaction

- La zone qui charge est lue « Chargement » par défaut par les lecteurs d'écran. Un texte qui nomme le contenu attendu, comme « Chargement du profil » : Non documenté.

## Comportement

- Un reflet traverse la forme en boucle, toutes les secondes.
- Quand l'utilisateur a demandé à réduire les animations dans son système, le reflet ne bouge plus.
- Quand le contenu est chargé, il prend la place du Skeleton.
- Le Skeleton ne réagit ni au clic ni au clavier.
- Le délai avant d'afficher un Skeleton, et sa durée minimale : Non documenté.

## Accessibilité

Chaque Skeleton est un élément `<div>`, sans rôle ni nom accessible.

- Les Skeleton d'une même zone sont réunis dans un conteneur `role="status"`, qui porte `aria-busy="true"` pendant le chargement et un nom accessible, comme « Chargement ».
- L'annonce du début et de la fin du chargement au lecteur d'écran : Non documenté.
- Le seuil de contraste du Skeleton : Non documenté.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-skeleton--skeleton) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-skeleton--skeleton). Pour une zone entière, SkeletonGrid : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-skeletongrid--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-skeletongrid--docs).

Code source : [dossier Skeleton sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Skeleton), et [dossier SkeletonGrid](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/SkeletonGrid).

Détail de l'implémentation : [page Skeleton du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/06-message-feedback.md#skeleton).

Cette fiche sur GitHub : [skeleton.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/skeleton/skeleton.md).

Import, selon le thème :

```tsx
import { Skeleton, SkeletonGrid } from "@axa-fr/canopee-react/prospect";
import { Skeleton, SkeletonGrid } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple, un avatar et une ligne de texte dans une zone qui charge :

```tsx
<SkeletonGrid
  isLoading={isLoading}
  grid={[[{ variant: "circle", size: "M" }, { size: "S", colSize: 11 }]]}
>
  <Profil />
</SkeletonGrid>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| type | `variant` |
| size | `size`, avec `XS`, `S`, `M`, `L`, `XL` et `XXL` |
| L'animation, un _SkeletonAnimation | Sans équivalent, le code anime un dégradé en CSS |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Le Skeleton prend `width: 100%`, et le cercle une largeur égale à sa hauteur. Sans équivalent dans Figma : `colSize` et `rowSize`, qui placent le Skeleton dans la grille de SkeletonGrid. SkeletonGrid, SkeletonList et `ExitLayoutSkeleton` assemblent plusieurs Skeleton, et n'ont pas de composant Figma.

## Noms à ne pas employer

Skeleton loader, squelette, placeholder de chargement, shimmer.

Ces noms désignent Skeleton. Le seul nom à employer est Skeleton.

## Décisions

- **1.0.0 - 23/11/26.** La propriété type reprend `variant` du code, sous un autre nom, car variant a déjà un sens dans Figma.
- **1.0.0 - 23/11/26.** size suit l'échelle commune à tous les composants, de x-small à xx-large. La valeur xx-large a été ajoutée à cette échelle pour la forme de 400 px, comme `XXL` dans le code.
- **1.0.0 - 23/11/26.** Dans Figma, les rectangles ont une largeur d'exemple de 343 px, et le bouton de 220 px. Dans une maquette, ils prennent la largeur de leur conteneur, en Fill container, comme dans le code.
- **1.0.0 - 23/11/26.** Le sous-composant _SkeletonAnimation porte la forme et son reflet. Sa propriété de position ne sert qu'aux prototypes : la boucle fait passer le reflet du départ à l'arrivée en Smart Animate, à vitesse constante pendant une seconde, puis le ramène au départ sans transition.
- **1.0.0 - 23/11/26.** Le reflet de _SkeletonAnimation est un dégradé aux extrémités transparentes. Dans Figma, ses couleurs restent en valeurs brutes, car un token de couleur ne garde pas cette transparence. Le JSON ne reprend pas ce dégradé : il le signale seulement.
- **1.0.0 - 23/11/26.** Les hauteurs de 150 et 400 px n'ont pas de token. Le code les écrit aussi en pixels.

## Points ouverts

- **Animation dans le code.** Le code anime un dégradé diagonal entre `--gray-140` et `--gray-050` (`SkeletonAll.css:8`, `SkeletonAll.css:9`). `--gray-140` n'a pas d'équivalent dans les design tokens de Canopée, et Figma prend color/gray/100. Le reflet du code accélère (`SkeletonAll.css:74`), celui de Figma avance à vitesse constante. En attendant : signaler.
- **Zones de chargement dans le code.** Le Skeleton seul n'a ni rôle ni `aria-busy` (`Skeleton.tsx:91`). SkeletonGrid réunit ses Skeleton dans une zone `role="status"` (`SkeletonGrid.tsx:73`). SkeletonList en crée une par ligne (`SkeletonListCommon.tsx:49`), et ExitLayoutSkeleton aucune (`ExitLayoutSkeleton.tsx:34`). En attendant : utiliser SkeletonGrid, et signaler pour les deux autres.
- **Fin du chargement.** Quand le contenu arrive, SkeletonGrid retire sa zone `role="status"` (`SkeletonGrid.tsx:92`), sans repasser `aria-busy` à false ni annoncer la fin. Peu de lecteurs d'écran tiennent compte de `aria-busy`. En attendant : signaler.
- **Contraste.** color/gray/100 sur fond blanc donne 1,26:1. Le Skeleton signale un chargement, et l'application du critère WCAG 1.4.11, qui demande 3:1, n'est pas tranchée. En attendant : signaler.
- **Taille selon le contenu.** Ni Figma ni le code ne disent quelle valeur de size prendre pour une ligne de texte, un titre ou une image. En attendant : signaler.
- **Délai et durée.** Le délai avant d'afficher un Skeleton et sa durée minimale ne sont pas définis. En attendant : signaler.
- **Nom de la zone qui charge.** Les lecteurs d'écran lisent la zone « Chargement » par défaut. La fiche ne dit pas si ce nom peut citer le contenu attendu, comme « Chargement du profil ». En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
