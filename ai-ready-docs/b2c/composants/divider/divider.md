# Divider 1.0.0

Utilise les design tokens de Canopée 2.0.0 ou d'une version plus récente.

## Description

Le Divider sépare deux groupes de contenu par un trait fin. Son sens se règle avec orientation : horizontal par défaut, ou vertical.

## Quand l'utiliser

### À utiliser pour

- Séparer des blocs ou des sections de contenu, pour rendre l'information plus lisible.
- Séparer les éléments d'une liste ou les champs d'un formulaire.

### À ne pas utiliser pour

- Structurer les sections d'une page : prendre des titres, de heading/h2 à heading/h4.
- Séparer chaque élément d'une vue : trop de Divider surchargent l'interface.

## Règles selon les propriétés

### orientation=horizontal

Entre deux zones empilées.

### orientation=vertical

Entre deux éléments posés côte à côte. Le trait prend toute la hauteur de son conteneur.

## Exemples

- Séparer le contenu d'une fenêtre modale de ses boutons : orientation=horizontal.
- Séparer deux lignes d'un tableau : orientation=horizontal.
- Séparer les liens d'un pied de page : orientation=vertical.

## Interdits

- Modifier localement la couleur ou l'épaisseur du trait, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

Aucun. Le Divider ne contient ni texte ni icône.

## Rédaction

Aucun.

## Comportement

Aucun. Le Divider ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<hr>` natif, de rôle ARIA separator.

- Le Divider ne reçoit pas le focus et n'a pas besoin de nom accessible.
- Un Divider vertical porte `aria-orientation="vertical"`. Sans cet attribut, le rôle separator est horizontal.
- Le Divider ne porte jamais seul une information. Le trait n'a donc pas d'exigence de contraste (WCAG 1.4.11).

Référence : [WAI-ARIA 1.2, rôle separator](https://www.w3.org/TR/wai-aria-1.2/#separator).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-divider--divider) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-divider--divider).

Code source : [dossier Divider sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Divider).

Détail de l'implémentation : [page Divider du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/15-visuals.md#divider).

Cette fiche sur GitHub : [divider.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/divider/divider.md).

Import, selon le thème :

```tsx
import { Divider } from "@axa-fr/canopee-react/prospect";
import { Divider } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Divider />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| orientation=horizontal | `<Divider />` |
| orientation=vertical | Aucun équivalent |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className`.

## Noms à ne pas employer

Separator, séparateur, ligne de séparation, filet, hr.

Ces noms désignent Divider. Le seul nom à employer est Divider.

## Décisions

- **1.0.0 - 09/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Divider, car leurs deux versions avaient le même rendu. Le Divider du thème prospect est celui qui reste.
- **1.0.0 - 09/11/26.** Le trait prend color/gray/200, la couleur du Divider dans le code du B2B, pour que le B2C et le B2B aient le même Divider.
- **1.0.0 - 09/11/26.** L'épaisseur du trait est reliée à border/width/1, comme la bordure de 1 px du code.
- **1.0.0 - 09/11/26.** orientation=horizontal est la valeur par défaut, car c'est l'usage de 93 % des Divider.

## Points ouverts

- **Divider vertical.** Le code du B2C n'a pas de propriété orientation et ne trace qu'un trait horizontal. En attendant : `<Divider />` correspond à orientation=horizontal, et un besoin de Divider vertical dans le code se signale.
- **Couleur du code.** Le code du B2C trace le trait avec `--blue-200`, et non avec color/gray/200. En attendant : rien ne change à l'usage, l'écart se corrige dans le code.
- **Plugin Copilot.** La page Divider du plugin cite une propriété `classModifier`, que le code n'a pas. En attendant : ne pas l'utiliser.
- **Titres plutôt que Divider.** Le renvoi aux titres pour structurer une page vient de l'ancienne documentation du B2B. En attendant : il s'applique.
- **Retouches locales.** L'interdit de modifier la couleur ou l'épaisseur du trait reprend la règle de Button et d'IconButton, sans source propre au Divider. En attendant : il s'applique.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
