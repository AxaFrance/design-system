# LevelSelector 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le LevelSelector permet à l'utilisateur de choisir un niveau sur une courte échelle.

## Quand l'utiliser

### À utiliser pour

- Choisir un niveau sur une échelle où chaque niveau ajoute au précédent. Exemple : un niveau de protection, sans protection, standard ou maximale.

### À ne pas utiliser pour

- Comparer des options que l'utilisateur doit voir ensemble, avec leur détail, même rangées dans un ordre : prendre Radio.
- Saisir une quantité ou un montant : prendre TextInput.
- Montrer l'avancement d'une tâche, sans choix de l'utilisateur : prendre ProgressBar.
- Choisir parmi plus de quatre niveaux : Non documenté.

## Règles selon les propriétés

### value=0

Aucune barre n'est pleine. value=0 est un niveau que l'utilisateur peut choisir, et la description le nomme. Exemple : « Sans protection ».

### stepsCount=1

Une seule barre, en plus de value=0. Son usage, plutôt qu'un Switch ou une Checkbox : Non documenté.

### showTitle=false

Le titre est masqué. C'est permis seulement quand un autre texte visible nomme déjà le LevelSelector, comme le titre de la section qui le contient.

### showDescription=false

La description est masquée. C'est permis seulement quand un autre texte visible dit ce qu'apporte le niveau choisi.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les barres sont plus hautes, pour être touchées plus facilement.

## Exemples

- Protection standard : title « Niveau de protection », stepsCount=2, value=1, description « Protection standard ».
- Sans protection : stepsCount=2, value=0, description « Sans protection ».
- Protection maximale : stepsCount=2, value=2, description « Protection maximale ».

## Interdits

- value plus grand que stepsCount.
- Modifier localement la taille, l'espacement ou les couleurs du LevelSelector, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un titre, obligatoire sauf dans le cas de showTitle=false.
- Un bouton moins et un bouton plus, deux IconButton, de part et d'autre des barres.
- Une à trois barres, des _LevelSelectorStep ([_levelselectorstep.json](_levelselectorstep.json)). Les barres jusqu'au niveau choisi sont pleines.
- Une description, obligatoire sauf dans le cas de showDescription=false.

## Rédaction

- **Titre.** Un groupe nominal court, qui dit ce que l'utilisateur règle. Exemple : « Niveau de protection ».
- **Description.** Un groupe nominal court, qui dit ce qu'apporte le niveau choisi. Exemple : « Protection standard ».

## Comportement

- Un clic sur le bouton plus monte d'un niveau, et un clic sur le bouton moins descend d'un niveau.
- Le bouton moins est désactivé en value=0, et le bouton plus quand value atteint stepsCount.
- Un clic sur une barre choisit son niveau.
- La description change avec le niveau choisi.
- Un LevelSelector désactivé : Non documenté.

## Accessibilité

Un élément `<fieldset>` avec le rôle `radiogroup`. Le titre est son `<legend>`.

- Chaque barre est un `<input type="radio">` dans un `<label>`. Le `<label>` porte un `aria-label`, « Niveau 1 », « Niveau 2 » ou « Niveau 3 », qui sert de nom au bouton radio.
- `aria-describedby` relie chaque barre à la description.
- La description porte `aria-live="polite"` : le lecteur d'écran l'annonce quand elle change.
- Les boutons moins et plus sont nommés « Diminuer le niveau » et « Augmenter le niveau ».
- En showTitle=false, le nom accessible du groupe : Non documenté.
- La touche Tab passe du bouton moins à la barre du niveau choisi, ou à la première barre en value=0, puis au bouton plus. Un bouton désactivé sort de l'ordre de tabulation. Entre les barres, les flèches déplacent le focus et choisissent le niveau.
- La place du focus quand le bouton qui l'a se désactive : Non documenté.
- Le focus reste toujours visible.
- La bordure d'une barre vide contraste avec le fond à 3:1 au moins (WCAG).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-levelselector--levelselector) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-levelselector--levelselector).

Code source : [dossier LevelSelector sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/LevelSelector).

Détail de l'implémentation : [page LevelSelector du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/12-layout.md#levelselector).

Cette fiche sur GitHub : [levelselector.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/levelselector/levelselector.md).

Import, selon le thème :

```tsx
import { LevelSelector } from "@axa-fr/canopee-react/prospect";
import { LevelSelector } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
const descriptions = ["Sans protection", "Protection standard", "Protection maximale"];
const [niveau, setNiveau] = useState(1);

<LevelSelector
  title="Niveau de protection"
  description={descriptions[niveau]}
  value={niveau}
  stepsCount={2}
  onChange={setNiveau}
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| title, affiché par showTitle | `title`, obligatoire dans le code |
| showTitle=false | `title=""`, et le groupe perd son nom, voir les points ouverts |
| description, affichée par showDescription | `description` |
| value | `value` |
| stepsCount | `stepsCount` |
| Les boutons moins et plus, des IconButton | Deux `ClickIcon`, nommés par `minusAriaLabel` et `plusAriaLabel` |
| Les barres, des _LevelSelectorStep | Des boutons radio, sans composant à part |
| _theme | Le chemin d'import, `/prospect` ou `/client` |

breakpoint n'a pas d'équivalent dans le code. Le LevelSelector ne garde pas le niveau choisi : la page passe `value` et le met à jour dans `onChange`. Il n'accepte pas `name`, et son niveau ne part pas avec un formulaire HTML.

## Noms à ne pas employer

Level Selector, sélecteur de niveau.

Ces noms désignent LevelSelector. Le seul nom à employer est LevelSelector.

## Décisions

- **1.0.0 - 20/11/26.** Le LevelSelector garde la propriété _theme, car ses IconButton changent de forme entre les thèmes : ronds dans le thème prospect, avec un arrondi de 8 px dans le thème client. Le reste du composant est le même dans les deux thèmes.
- **1.0.0 - 20/11/26.** La propriété stepsCount règle le nombre de barres, de 1 à 3, et vaut 2 par défaut, comme dans le code. Avant cette version, Figma avait toujours trois barres.
- **1.0.0 - 20/11/26.** Le LevelSelector a 36 variantes : une par valeur de value, de 0 à stepsCount, pour chaque valeur de stepsCount, chaque breakpoint et chaque thème.
- **1.0.0 - 20/11/26.** Les boutons moins et plus sont des IconButton secondaires, à la petite taille, avec les icônes icon/remove et icon/add de la librairie Figma Fondations Canopée. Ils remplacent l'ancien composant Figma ClickIcon, archivé.
- **1.0.0 - 20/11/26.** Les barres suivent les principes d'interaction du pattern Fond. Une barre pleine est en color/blue/600, et une barre vide a une bordure color/blue/600 de 1 px. Au hover, une barre vide prend un fond color/gray/100, et au focus, une bordure color/blue/400 de 2 px. Le code met du bleu foncé, et une outline de 1 px au hover comme au focus.
- **1.0.0 - 20/11/26.** Dans Figma, les thèmes prospect et client avaient chacun leur _LevelSelectorStep, identiques. Un seul _LevelSelectorStep sert maintenant aux deux thèmes.

## Points ouverts

- **Couleurs dans le code.** Dans les deux thèmes, le code met les barres en bleu foncé (`LevelSelectorApollo.css:6`, `LevelSelectorLF.css:6`), avec une outline de 1 px au hover et au focus (`LevelSelectorCommon.css:60`), et la bordure de la carte en bleu clair (`LevelSelectorCommon.css:7`). Dans le thème prospect, il met aussi le titre en bleu foncé (`LevelSelectorApollo.css:7`). En attendant : signaler.
- **Textes dans le code.** Le code affiche le titre en 16 px sur tous les écrans (`LevelSelectorCommon.css:12`), alors que title/1/regular passe à 18 px sur desktop. Dans le thème client, la description est en 16 px (`LevelSelectorLF.css:9`), alors que subtitle/3/regular reste à 14 px. L'interligne de 125 % (`LevelSelectorCommon.css:14`, `LevelSelectorCommon.css:22`) donne 20 px au titre au lieu de 24, et 17,5 px à la description du thème prospect au lieu de 20. En attendant : signaler.
- **Thème client dans le code.** La carte du thème client garde un arrondi de 4 px (`CardLF.css:5`). En attendant : signaler.
- **Contraste du focus sur une barre pleine.** La bordure color/blue/400 touche le fond color/blue/600 avec un contraste de 1,58:1. Les principes d'interaction demandent au moins 3:1. En attendant : signaler.
- **Titre masqué dans le code.** Sans `title`, le code n'affiche pas de `<legend>` (`LevelSelectorCommon.tsx:44`), et le groupe n'a plus de nom accessible. En attendant : signaler.
- **Noms des niveaux.** Le code nomme les barres « Niveau 1 », « Niveau 2 » et « Niveau 3 », sans réglage possible (`LevelSelectorCommon.tsx:59`). Ces noms ne disent pas ce qu'apporte chaque niveau. En attendant : signaler.
- **Focus d'un bouton désactivé.** Le bouton plus ou moins se désactive quand l'utilisateur atteint une extrémité, alors qu'il a le focus (`LevelSelectorCommon.tsx:52`, `LevelSelectorCommon.tsx:76`). La place du focus n'est pas définie. En attendant : signaler.
- **Plus de quatre niveaux.** Le LevelSelector a trois barres au plus, soit quatre niveaux avec value=0. En attendant : signaler.
- **Un seul niveau.** L'usage de stepsCount=1, plutôt qu'un Switch ou une Checkbox, n'est pas défini. En attendant : signaler.
- **Exemple de la page Storybook.** Son exemple d'usage passe `steps` et un texte enfant, que le code n'accepte pas (`LevelSelector.mdx:19`). En attendant : utiliser `stepsCount`.
- **État désactivé.** Le LevelSelector n'a d'état désactivé ni dans Figma ni dans le code. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
