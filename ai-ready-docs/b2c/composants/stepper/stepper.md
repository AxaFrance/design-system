# Stepper 1.0.0

Utilise les design tokens de Canopée X.Y.Z ou d'une version plus récente.

## Description

Le Stepper informe l'utilisateur de l'avancement de son parcours, pour qu'il estime le temps restant. Il affiche le titre de l'étape en cours, sa position dans le parcours et une barre de progression par étape.

## Quand l'utiliser

### À utiliser pour

- Découper un parcours long en étapes distinctes, comme une souscription, un devis ou une déclaration.
- Montrer à l'utilisateur où il en est, en haut de chaque étape du parcours.

### À ne pas utiliser pour

- Un parcours qui ne se découpe pas en étapes distinctes : ne rien ajouter.
- Suivre une seule tâche, comme l'envoi d'un fichier : prendre ProgressBar.
- Naviguer d'une étape à l'autre : Non documenté.

## Règles selon les propriétés

### titleLevel=1

Le titre de l'étape est le titre principal de la page.

### titleLevel=2

Le titre de l'étape est un titre de niveau 2, sous le titre de la page.

### showMessage=true

Un _FormHelperText sous les barres, neutre et sans icône par défaut. Il donne une aide qui vaut pour toute l'étape, comme « Sauf mention du contraire, tous les champs sont obligatoires. » Il peut aussi confirmer l'étape précédente ou signaler une erreur ou un avertissement.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent la version mobile de leur style, et les blocs se resserrent.

## Exemples

- Deuxième étape d'un devis en quatre étapes, à moitié remplie : quatre barres, réglées avec stepsCount, title « Vos coordonnées », subtitle « Étape 2 sur 4 ».
- Première étape d'une souscription, quand le titre de l'étape est le titre de la page : titleLevel=1, title « Votre besoin », subtitle « Étape 1 sur 3 ».
- Étape avec des champs obligatoires : showMessage=true, message « Sauf mention du contraire, tous les champs sont obligatoires. »

## Interdits

- Faire démarrer le Stepper ailleurs qu'à l'étape 1.
- Afficher une barre de l'étape en cours à moins de 10 %.
- Déplacer le Stepper ailleurs que sous le Header, au-dessus du contenu de l'étape.
- Modifier localement la taille, l'espacement ou les couleurs du Stepper, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un titre, obligatoire.
- Un sous-titre et un _FormHelperText, facultatifs.
- Une barre de progression par étape, de 2 à 8, réglées avec stepsCount.

## Rédaction

- **Titre.** Court, il dit la tâche de l'étape. Exemple : « Informations personnelles », « Mode de paiement ».
- **Sous-titre.** La position de l'étape, sous la forme « Étape X sur Y ».

## Comportement

- Les barres des étapes passées sont pleines, et les suivantes sont vides. La page fait avancer la barre de l'étape en cours à mesure que l'utilisateur la remplit.
- Quand l'étape change, les barres se remplissent ou se vident l'une après l'autre, avec une animation.
- Le Stepper ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<div>`. Le titre est une balise de titre HTML, `<h1>` ou `<h2>` selon titleLevel.

- La liste des barres est reliée au titre et au sous-titre de l'étape avec `aria-labelledby`.
- Les barres sont masquées aux lecteurs d'écran avec `aria-hidden`.
- Le texte contraste avec le fond à 4,5:1 au moins (WCAG).
- Le message est annoncé dès son affichage. Un message d'erreur ou d'avertissement porte aussi `role="alert"`.
- L'annonce d'un changement d'étape aux lecteurs d'écran : Non documenté.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-stepper--stepper) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-stepper--stepper-client).

Code source : [dossier Stepper sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Stepper).

Détail de l'implémentation : [page Stepper du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/10-navigation.md#stepper).

Cette fiche sur GitHub : [stepper.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/stepper/stepper.md).

Import, selon le thème :

```tsx
import { Stepper } from "@axa-fr/canopee-react/prospect";
import { Stepper } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Stepper
  nbSteps={4}
  currentStep={1}
  currentStepProgress={50}
  currentTitle="Vos coordonnées"
  currentSubtitle="Étape 2 sur 4"
  helper="Sauf mention du contraire, tous les champs sont obligatoires."
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| title | `currentTitle` |
| subtitle, affiché par showSubtitle | `currentSubtitle` |
| Le _FormHelperText, affiché par showMessage | `helper` pour une aide, ou `message` et `messageType` |
| Le nombre de barres | `nbSteps` |
| La valeur de chaque barre | `currentStep` et `currentStepProgress` |
| titleLevel | `titleLevel`, de 1 à 4 dans le code |

Dans le code, `currentStep` compte les étapes à partir de 0. `currentStepProgress` va de 0 à 100 et vaut 0 par défaut : sans lui, la barre de l'étape en cours reste vide. `messageType` vaut `success` par défaut, et `titleLevel` vaut 2.

Le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Une media query change les textes et les espacements à partir de 1024 px.

Sans équivalent dans Figma : `icon` et `iconProps`, qui affichent une icône devant le titre et seront retirés du code, et les attributs de `<div>`, sauf `role`, `title` et `tabIndex`. `className` s'applique à la liste des barres, pas au `<div>` du Stepper.

## Noms à ne pas employer

Stepper Progress, barre d'étapes, fil d'étapes, progression du parcours.

Ces noms désignent Stepper. Le seul nom à employer est Stepper.

## Décisions

- **1.0.0 - 17/11/26.** Le Stepper garde ses deux thèmes, prospect et client, car leurs espacements diffèrent, comme dans le code.
- **1.0.0 - 17/11/26.** Le Stepper n'a qu'un texte sous les barres, un _FormHelperText neutre et sans icône par défaut, qui porte l'aide comme le message. L'ancien texte d'aide gris disparaît.
- **1.0.0 - 17/11/26.** Le Stepper n'a pas d'icône devant son titre. Le code retirera la sienne quand il suivra ce composant.

## Points ouverts

- **Niveaux de titre.** Le code accepte titleLevel de 1 à 4, Figma seulement 1 et 2. En attendant : 1 ou 2.
- **Niveau de titre par défaut.** titleLevel vaut 1 par défaut dans Figma et 2 dans le code. En attendant : régler titleLevel sur chaque Stepper.
- **Changement d'étape non annoncé.** Quand l'étape change, rien ne l'annonce aux lecteurs d'écran. La position n'est lue que dans le sous-titre, s'il est affiché. En attendant : signaler.
- **Navigation entre les étapes.** Le composant qui permet de passer d'une étape à l'autre n'est pas désigné. En attendant : signaler.
- **Aide et message dans le code.** Le code affiche l'aide (`helper`) et le message (`message`) dans deux éléments séparés, l'un sous l'autre, et le message y est un succès par défaut. Figma n'en garde qu'un, le _FormHelperText, neutre par défaut. En attendant : un seul des deux à la fois.
- **Plugin Copilot.** Sa page Stepper compte les étapes à partir de 1, alors que le code compte à partir de 0. En attendant : la fiche fait foi.
- **Ancienne documentation.** Une page de l'ancienne documentation du B2C décrit une navigation au clavier d'étape en étape, alors que le Stepper n'est pas interactif. En attendant : la fiche fait foi.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
