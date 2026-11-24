# ProgressBar 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

La ProgressBar montre l'avancement mesurable d'une tâche. Son remplissage se règle avec value, de 0 à 100.

## Quand l'utiliser

### À utiliser pour

- Suivre une tâche dont l'avancement se mesure, comme le téléversement d'un fichier ou d'une photo.

### À ne pas utiliser pour

- Un chargement dont l'avancement ne se mesure pas : prendre Spinner.
- Les étapes d'un parcours, comme un formulaire en plusieurs pages : prendre Stepper.
- Une mesure qui n'est pas un avancement, comme un taux de remplissage ou un score : Non documenté.

## Règles selon les propriétés

### showPercentage=true

Quand la tâche dure assez longtemps pour que l'utilisateur suive sa progression, comme le téléversement d'un gros fichier.

## Exemples

- Téléversement d'un justificatif, à moitié fait : value=50, showPercentage=true, libellé « Téléversement du justificatif ».
- Téléversement d'une photo qui commence : value=5, libellé « Téléversement de la photo du véhicule ».

## Interdits

- Modifier localement la couleur, la hauteur ou l'arrondi de la ProgressBar, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Une barre, et un pourcentage en option.
- Un libellé, que la ProgressBar n'affiche pas à l'écran et que lisent les lecteurs d'écran. Il est obligatoire, sauf quand un texte visible de la page nomme déjà la tâche.
- Dans Figma, le libellé n'a pas de propriété : le développeur l'ajoute dans le code.

## Rédaction

- Le libellé nomme la tâche suivie, sans dire que c'est une barre. Exemple : « Téléversement du justificatif ».
- Le pourcentage s'écrit avec une espace avant le signe : « 45 % ».

## Comportement

- La ProgressBar ne réagit ni au clic ni au clavier.
- La barre n'avance pas seule : la page met à jour sa valeur à chaque progrès de la tâche.
- À la fin, la barre atteint 100 %, puis la page affiche le résultat.
- Si la tâche échoue, la barre s'arrête à sa valeur, et la page affiche un message d'erreur qui dit quoi faire.

## Accessibilité

Un élément `<progress>`, de rôle ARIA progressbar, avec les attributs `value` et `max`.

- Le nom accessible vient du libellé. Sans libellé, il vient du texte de la page qui nomme la tâche, relié à la barre avec `aria-labelledby`.
- La ProgressBar ne s'atteint pas avec la touche Tab et ne porte aucun `tabindex`.
- Le lecteur d'écran annonce le rôle, la valeur et le libellé. Il ne lit pas le pourcentage affiché, pour ne pas annoncer la valeur deux fois.
- Quand la valeur change, la page annonce l'avancement aux lecteurs d'écran, avec un conteneur `aria-live`. Le rythme des annonces : Non documenté.
- Quand plusieurs ProgressBar sont dans la même page, chacune a son propre libellé.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-progressbar--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-progressbar--docs).

Code source : [dossier ProgressBar sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ProgressBar).

Détail de l'implémentation : [page ProgressBar du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/11-progress.md#progressbar).

Cette fiche sur GitHub : [progressbar.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/progressbar/progressbar.md).

Import, selon le thème :

```tsx
import { ProgressBar } from "@axa-fr/canopee-react/prospect";
import { ProgressBar } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<ProgressBar
  value={50}
  max={100}
  label="Téléversement du justificatif"
  showPercentage
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| value, de 0 à 100 par pas de 5 | `value` et `max` |
| Aucun équivalent | `label`, le libellé lu par les lecteurs d'écran |
| _StepperProgress, le sous-composant de Stepper | `ProgressBarGroup`, une barre par étape |

Dans le code, `value` prend n'importe quel nombre, et `max` fixe la valeur d'une barre pleine. Sans `max`, `max` vaut 1 : `value={50}` affiche alors une barre pleine.

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className`, `id` et les autres attributs de `<progress>`.

## Noms à ne pas employer

Progress Bar, Progess Bar, _Progress_Bar, Progress, barre de progression, barre d'avancement.

Ces noms désignent ProgressBar. Le seul nom à employer est ProgressBar.

## Décisions

- **1.0.0 - 12/10/26.** Les propriétés Size et Percentage deviennent value et showPercentage, les noms du code.
- **1.0.0 - 16/11/26.** Dans Figma, les thèmes prospect et client partagent une seule ProgressBar, celle du thème prospect, car leurs deux versions avaient le même rendu.
- **1.0.0 - 16/11/26.** La ProgressBar s'utilise seule, quand l'avancement d'une tâche se mesure. L'ancienne documentation du B2C la réservait au Stepper.
- **1.0.0 - 16/11/26.** value prend 21 valeurs, de 0 à 100 par pas de 5, parce que Figma ne peut pas faire varier une longueur avec un nombre. Dans une maquette, une autre valeur s'arrondit au multiple de 5 le plus proche.
- **1.0.0 - 16/11/26.** Le pourcentage est en label/2/semibold, comme dans le code. Dans Figma, sa largeur suit son texte.
- **1.0.0 - 16/11/26.** La hauteur de la barre reprend celle du code, sans token, car Fondations Canopée n'a pas de taille qui lui corresponde.
- **1.0.0 - 16/11/26.** Le libellé n'a pas de propriété dans Figma, car il ne s'affiche pas : il ne sert qu'aux lecteurs d'écran.
- **1.0.0 - 16/11/26.** Le pourcentage s'affiche quand la tâche dure assez longtemps pour être suivie. Aucune source ne le disait : la règle reprend les pratiques courantes.
- **1.0.0 - 16/11/26.** À la fin de la tâche, la barre atteint 100 %. Quand la tâche échoue, elle s'arrête à sa valeur, sans état d'erreur, et la page affiche un message. Aucune source ne le disait : la règle reprend les pratiques courantes.
- **1.0.0 - 24/11/26.** La description parle d'un avancement mesurable, et non plus d'une durée connue : un envoi de fichier a un pourcentage connu, mais rarement une durée.

## Points ouverts

- **Hauteur sans token.** Aucun token de Fondations Canopée ne porte la hauteur de la barre. En attendant : la valeur du JSON s'applique.
- **Largeur du pourcentage.** Le code réserve au pourcentage une largeur fixe de 41 px, et la barre garde sa longueur. Dans Figma, la barre raccourcit un peu quand le pourcentage s'allonge. En attendant : rien ne change à l'usage.
- **Pourcentage et max.** Dans le code, le pourcentage affiché reprend `value` tel quel, sans tenir compte de `max`. Il n'est juste que si `max` vaut 100. En attendant : avec showPercentage, `max` vaut 100.
- **Annonce de l'avancement.** Le code n'annonce pas l'avancement aux lecteurs d'écran, et aucune source ne dit à quel rythme l'annoncer. En attendant : la page l'ajoute, comme le décrit la rubrique Accessibilité.
- **Mesure qui n'est pas un avancement.** Aucune source ne dit quel composant prendre pour un taux de remplissage ou un score. En attendant : signaler.
- **Plugin Copilot et Storybook.** Le plugin et Storybook disent que le libellé est visible, alors que le code le masque à l'écran. Le plugin montre aussi une ProgressBar pour les étapes d'un formulaire, un cas réservé à Stepper. En attendant : la fiche fait foi.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
