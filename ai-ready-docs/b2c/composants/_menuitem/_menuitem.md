# _MenuItem 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le _MenuItem est une entrée cliquable d'un menu, qui mène vers une page ou lance une action.

## Quand l'utiliser

### À utiliser pour

- Construire les entrées d'un DropdownMenu, une par page ou par action du compte. Exemple : « Mon profil ».
- Construire les actions d'un DataAgent. Exemple : « Prendre rendez-vous ».

### À ne pas utiliser pour

- Présenter un contrat, une personne ou un autre objet avec son détail : prendre ClickItem.
- Un lien dans un texte : prendre Link.
- Une action seule, hors d'un menu : prendre Button.

## Règles selon les propriétés

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé utilise la version mobile de son style de texte.

### showIcon=false

La ligne n'affiche que son libellé et son chevron. Quand afficher l'icône : Non documenté.

## Exemples

- Page du compte dans un DropdownMenu : label « Mon profil », avec une icône de Fondations.
- Action d'un DataAgent : label « Prendre rendez-vous ».

## Interdits

- Un _MenuItem posé seul, hors d'un DropdownMenu ou d'un DataAgent.
- Modifier localement la taille, l'espacement ou les couleurs du _MenuItem, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, obligatoire.
- À gauche, une icône facultative, de la librairie Figma Fondations Canopée.
- À droite, un chevron, toujours affiché.
- Un libellé trop long pour une ligne : Non documenté.

## Rédaction

- Le libellé dit la page ou l'action en quelques mots, sans point final. Exemples : « Mon profil », « Prendre rendez-vous ».

## Comportement

- Un clic n'importe où sur la ligne mène vers sa page ou lance son action.
- Le _MenuItem n'a pas d'état désactivé. Une entrée indisponible : Non documenté.

## Accessibilité

Un élément `<button>`, que le DropdownMenu ou le DataAgent place dans un `<li>`.

- Le nom accessible est le libellé. Quand le libellé est peu explicite, le développeur donne un nom accessible plus complet, qui commence par le libellé visible.
- L'icône et le chevron sont décoratifs et ne sont pas annoncés.
- Chaque ligne s'atteint avec la touche Tab. La touche Entrée ou Espace la déclenche.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Le libellé atteint 15:1 sur fond blanc, et 11,9:1 sur le fond gris du hover.
- La ligne mesure 40 px de haut, au-dessus des 24 px que demande le WCAG 2.2 pour une zone cliquable.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-list-clickitem--clickitem) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-list-clickitem--clickitem).

Code source : [dossier ClickItem sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/List/ClickItem).

Détail de l'implémentation : [page ClickItem du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/08-lists.md#clickitem).

Cette fiche sur GitHub : [_menuitem.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/_menuitem/_menuitem.md).

Import, selon le thème :

```tsx
import { MenuBurger } from "@axa-fr/canopee-react/prospect";
import { MenuBurger } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple, dans un DropdownMenu :

```tsx
import settings from "@material-symbols/svg-400/rounded/settings-fill.svg";

<MenuBurger
  buttonLabel="Mon espace"
  clickItems={[{ icon: settings, title: "Mon profil", onClick: goToProfile }]}
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| _MenuItem | Un objet de `clickItems` dans `MenuBurger`, ou de `clickContents` dans `DataAgent`, que le code affiche avec le `ClickItem` en `variant="small"` |
| label | `title` |
| icon, affichée par showIcon | `icon`, l'adresse du fichier SVG |
| state=hover, state=focus | Sans équivalent, le navigateur gère le survol et le focus |
| Sans équivalent | `state`, qui vaut `default`, `disabled` ou `loading` |
| Sans équivalent | `ariaLabelForActionIcon`, qui remplace le libellé comme nom accessible |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. En `variant="small"`, le code masque le sous-titre, les textes secondaires et le Tag (`ClickItemCommon.css:63`).

## Noms à ne pas employer

ClickItem small, petit ClickItem, item de menu.

Ces noms désignent _MenuItem. Le seul nom à employer est _MenuItem.

## Décisions

- **1.0.0 - 25/11/26.** Le petit format de l'ancien ClickItem devient un sous-composant à part, car son rendu et son comportement sont trop différents de ceux du ClickItem.
- **1.0.0 - 26/11/26.** _MenuItem sert au DropdownMenu et au DataAgent. Il a donc sa propre fiche, comme _FormLabel. Son nom suit le MenuItem de MUI et l'Item du DropdownMenu de Radix.
- **1.0.0 - 26/11/26.** _MenuItem n'a pas de propriété _theme : il garde un seul rendu dans les deux thèmes.
- **1.0.0 - 26/11/26.** Le texte de la ligne s'appelle label, comme dans Button et Link, car c'est le texte court d'un élément cliquable, et non le titre d'un bloc. Le code l'appelle `title`.
- **1.0.0 - 26/11/26.** Le libellé et les deux icônes sont en color/blue/700, la couleur des éléments interactifs. Dans le DataAgent, ce bleu distingue les actions des coordonnées, qui ne se cliquent pas.
- **1.0.0 - 26/11/26.** La ligne suit le pattern Fond des principes d'interaction : au hover, son fond passe en color/gray/100. Au focus, son contour color/blue/400 de 2 px se trace à l'intérieur de la ligne, comme pour _SelectListItem.
- **1.0.0 - 26/11/26.** En desktop, le libellé passe à 16 px, comme dans le code, au lieu des 14 px de l'ancien ClickItem.

## Points ouverts

- **Libellé en client.** Dans le thème client, le code met le libellé en `--gray-1000` et en regular (`ClickItemLF.css:40`). En attendant : signaler.
- **Survol et focus dans le code.** Au survol et au focus, le code souligne le libellé dans les deux thèmes, sans fond gris (`ClickItemCommon.css:70`). En client, le libellé passe aussi du gris au bleu au survol (`ClickItemLF.css:43`). Au focus clavier, la ligne garde en plus le contour par défaut du navigateur. En attendant : signaler.
- **Entrée désactivée dans le code.** Avec `state="disabled"` ou `state="loading"`, le code désactive le bouton sans changer son rendu, car son style désactivé ne vise que les grands formats (`ClickItemCommon.tsx:42`, `ClickItemCommon.css:98`). En attendant : signaler.
- **Composant dans le code.** Le code n'a pas de composant à part : il passe le ClickItem en `variant="small"`. En attendant : signaler.
- **Navigation.** Une entrée qui mène vers une autre page est rendue en `<button>`, et non en lien (`ClickItemWrapper.tsx:14`). En attendant : signaler.
- **Contenus non définis.** Quand afficher l'icône, ce que devient un libellé trop long et la façon de montrer une entrée indisponible ne sont pas définis. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
