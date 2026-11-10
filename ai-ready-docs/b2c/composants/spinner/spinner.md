# Spinner 1.0.0

Utilise les design tokens de Canopée 2.0.0 ou d'une version plus récente.

## Description

Le Spinner indique qu'un contenu est en cours de chargement, ou qu'une action est en cours de traitement.

## Quand l'utiliser

### À utiliser pour

- Indiquer que des données sont en cours de chargement, ou qu'une action est en cours de traitement, comme l'envoi d'un formulaire.
- Indiquer le chargement dans un Button, qui affiche alors un Spinner.

### À ne pas utiliser pour

- Une action dont le résultat s'affiche tout de suite : le Spinner ferait croire à un chargement.
- Des chargements répétés tout au long d'un parcours : le système paraîtrait lent.
- Un chargement qui affiche un titre, ou qui s'affiche par-dessus la page : prendre le template Loader, qui assemble un Spinner, un titre et un sous-titre.

## Règles selon les propriétés

### colorScheme=blue

Sur un fond clair.

### colorScheme=white

Sur un fond foncé, comme le fond bleu d'un Button.

### colorScheme=gray

Sur un fond neutre, comme la ligne d'un fichier en cours d'envoi.

### size=small

Dans un autre composant, comme un Button.

### size=large

Posé seul, ou dans un Loader.

## Exemples

- Chargement d'une liste de résultats : colorScheme=blue, size=large.
- Envoi d'un formulaire : le Button à fond bleu passe en chargement, et son Spinner est en colorScheme=white, size=small.

## Interdits

- Modifier localement la couleur ou la taille du Spinner, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

Aucun. Le Spinner n'affiche ni texte ni icône à l'écran.

## Rédaction

Le texte lu par les lecteurs d'écran est « Chargement en cours » par défaut. Si le Spinner accompagne une tâche précise, le texte la nomme. Exemple : « Téléchargement en cours ».

## Comportement

- Le Spinner s'affiche le temps du chargement, et disparaît dès que le contenu est chargé.
- Il ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<div>`, avec le rôle ARIA status ou alert selon l'usage.

- role="status" pour un chargement qui laisse l'utilisateur continuer : le lecteur d'écran l'annonce après sa lecture en cours.
- role="alert" pour prévenir l'utilisateur tout de suite : le lecteur d'écran interrompt sa lecture pour l'annoncer.
- Le nom accessible vient de `aria-label`, avec le texte décrit dans la rubrique Rédaction.
- Quand un autre élément annonce déjà le chargement, le Spinner est purement décoratif et porte `aria-hidden="true"`.
- Le Spinner ne reçoit pas le focus et n'entre pas dans l'ordre de tabulation.
- Pour les personnes qui ont demandé moins de mouvement dans les réglages de leur appareil, l'animation ralentit ou s'arrête, avec la media query `prefers-reduced-motion`.

Référence : [WAI-ARIA 1.2, rôle status](https://www.w3.org/TR/wai-aria-1.2/#status).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-spinner--spinner) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-spinner--spinner).

Code source : [dossier Spinner sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Spinner).

Détail de l'implémentation : [page Spinner du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/06-message-feedback.md#spinner).

Cette fiche sur GitHub : [spinner.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/spinner/spinner.md).

Import, selon le thème :

```tsx
import { Spinner } from "@axa-fr/canopee-react/prospect";
import { Spinner } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Spinner text="Chargement des résultats" />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| colorScheme | `variant` |
| size=small | `size={24}` |
| Aucun équivalent | `size={32}` |
| size=large | `size={40}` |
| _animation | Aucun équivalent |
| Aucun équivalent | `text`, le nom accessible |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className`.

## Noms à ne pas employer

Roue de chargement, indicateur de chargement, throbber.

Ces noms désignent Spinner. Le seul nom à employer est Spinner.

## Décisions

- **1.0.0 - 10/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Spinner, celui du thème prospect. Il est construit avec des traits, comme le code des deux thèmes, alors que celui du thème client était fait de formes pleines.
- **1.0.0 - 10/11/26.** L'anneau fixe prend la couleur de l'arc qui tourne, à 20 % d'opacité, comme dans le code. En colorScheme=white, l'arc blanc reste ainsi visible sur l'anneau.
- **1.0.0 - 10/11/26.** L'anneau laisse 4 px de marge dans son cadre, pour suivre une grille de 4 px, comme le code du thème prospect.
- **1.0.0 - 10/11/26.** size=large et colorScheme=blue sont les valeurs par défaut, comme dans le code.
- **1.0.0 - 10/11/26.** La taille moyenne est retirée de Figma : elle ne servait que dans ClickItem, un composant de la page Legacy.
- **1.0.0 - 10/11/26.** _animation ne sert qu'à animer le Spinner dans un prototype Figma.

## Points ouverts

- **Taille moyenne du code.** Le code propose encore `size={32}`, que Figma n'a plus. En attendant : ne pas l'utiliser.
- **Rôle ARIA du code.** Le code pose role="alert" par défaut, et toujours `aria-live="assertive"`, même pour un chargement qui laisse l'utilisateur continuer. En attendant : signaler.
- **Mouvement réduit.** Le CSS du Spinner ne tient pas compte de `prefers-reduced-motion`. En attendant : signaler.
- **Épaisseur du trait.** Le code du thème client trace un trait de 2 px en size=small et de 4 px en size=large, contre 3 px dans Figma. En attendant : rien ne change à l'usage, l'écart se corrige dans le code.
- **Retouches locales.** L'interdit de modifier la couleur ou la taille reprend la règle de Button, d'IconButton et de Divider, sans source propre au Spinner. En attendant : il s'applique.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
