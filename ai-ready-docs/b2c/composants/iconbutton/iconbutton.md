# IconButton 1.0.0

Utilise les design tokens de Canopée 2.0.0 ou d'une version plus récente.

## Description

L'IconButton déclenche une action dans la page, représentée par une icône seule. Son importance se règle avec hierarchy, comme pour Button, de primary pour l'action que l'utilisateur doit faire en priorité, à tertiary pour une action complémentaire.

## Quand l'utiliser

### À utiliser pour

- Déclencher une action simple et courante, que l'icône suffit à faire comprendre, quand un libellé visible ne tient pas : fermer une fenêtre, modifier un élément, afficher plus d'actions.

### À ne pas utiliser pour

- Une action que l'icône seule ne rend pas évidente, ou qu'elle pourrait faire mal comprendre : prendre Button, avec un libellé.
- Une action critique, qui demande une confirmation explicite : prendre Button, avec un libellé.
- Naviguer vers une autre page : Non documenté.

## Règles selon les propriétés

### hierarchy=primary

L'action la plus importante, celle que l'utilisateur doit faire en priorité.

### hierarchy=secondary

Une action moins prioritaire, qui accompagne l'action principale. Exemple : modifier un élément d'une liste.

### hierarchy=tertiary

Une action complémentaire ou facultative, la plus discrète. Exemple : fermer une fenêtre modale.

### disabled=true

L'action existe mais n'est pas disponible pour l'instant. Le texte autour du bouton dit pourquoi. Un IconButton désactivé ne sert jamais à masquer une action à laquelle l'utilisateur n'a pas droit.

### colorScheme=inverse

Sur un fond foncé ou coloré.

### size=small

La taille par défaut, quand le composant qui contient l'IconButton n'est pas cliquable lui-même. Exemple : la croix qui ferme une fenêtre modale.

### size=x-small

Un IconButton placé dans un composant déjà cliquable en entier. Exemple : l'action à droite d'un ClickItem, une ligne cliquable.

## Exemples

- Fermer une fenêtre modale : hierarchy=tertiary, icône close, nom accessible « Fermer ».
- Modifier une ligne d'une liste : hierarchy=secondary, icône edit, nom accessible « Modifier l'adresse ».
- Ouvrir un menu d'actions : hierarchy=tertiary, icône more_vert, nom accessible « Afficher plus d'actions ».
- Lancer une vidéo sur fond bleu : hierarchy=primary, colorScheme=inverse, icône play_arrow, nom accessible « Lancer la vidéo ».

## Interdits

- colorScheme=inverse avec une autre hierarchy que primary.
- Une icône prise ailleurs que dans la bibliothèque d'icônes de Canopée, Material Symbols dans le code.
- Modifier localement la taille ou les couleurs du bouton, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Une icône, obligatoire.
- Un nom accessible, obligatoire, qui n'est pas affiché.
- Aucun texte visible.

## Rédaction

- Le nom accessible décrit l'action, pas l'icône : « Fermer », et non « Croix ».
- Il commence par un verbe à l'infinitif, suivi d'un complément si plusieurs actions se ressemblent dans la page : « Modifier l'adresse », « Dupliquer le contrat ».
- Une majuscule au début, pas de ponctuation finale.

## Comportement

- Un clic ou une activation au clavier déclenche une seule action, jamais deux effets différents.
- Au repos, le bouton est à l'état par défaut ou désactivé. Le survol, l'appui et le focus ne viennent que de l'interaction.
- Désactivé, le bouton ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<button>` natif, de rôle ARIA button.

- `type="button"` par défaut.
- Le nom accessible passe par `aria-label`. `aria-labelledby` le remplace quand un texte de la page, même masqué, nomme déjà l'action. `title` peut compléter le nom, jamais le remplacer.
- `aria-haspopup="menu"` quand il ouvre un menu, `aria-haspopup="dialog"` quand il ouvre une fenêtre modale.
- `aria-expanded` et `aria-controls` quand il ouvre ou ferme une zone de la page.
- Le lecteur d'écran annonce le rôle et le nom du bouton quand il reçoit le focus.
- L'indicateur de focus reste toujours visible.
- L'icône contraste avec le fond à 3:1 au moins, et l'anneau de focus aussi (WCAG).
- La zone cliquable mesure au moins 24 × 24 px (WCAG 2.2).
- Le bouton s'atteint avec Tab et s'active avec Entrée ou Espace, dans un ordre de tabulation logique.
- Plusieurs IconButton liés se regroupent dans un conteneur de rôle group, avec un nom pour le groupe. Exemple : « Actions sur l'adresse » pour Modifier et Dupliquer.

Référence : [ARIA Authoring Practices Guide, Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

## Code

IconButton n'existe pas encore dans le code, qui utilise ClickIcon à sa place.

Storybook de ClickIcon, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-clickicon--clickicon) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-clickicon--clickicon).

Code source : [dossier ClickIcon sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ClickIcon).

Import, selon le thème :

```tsx
import { ClickIcon } from "@axa-fr/canopee-react/prospect";
import { ClickIcon } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
import closeIcon from "@material-symbols/svg-400/outlined/close.svg";

<ClickIcon src={closeIcon} variant="ghost" aria-label="Fermer" onClick={onClose} />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| IconButton | `ClickIcon` |
| icon | `src` |
| hierarchy=secondary | `variant="default"` |
| hierarchy=tertiary | `variant="ghost"` |
| disabled=true | `iconVariant="disabled"` |
| size=small | `size="S"` |
| size=x-small | `size="XS"` |

`variant` vaut `default` par défaut, et `size` vaut `S`. Deux valeurs de Figma n'ont pas d'équivalent dans le code : hierarchy=primary et colorScheme=inverse. state n'en a pas non plus, et le code rend les états par `:hover`, `:focus-visible` et `:active`. _theme correspond au chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : les valeurs `L` et `M` de `size`, `iconVariant` pour les autres couleurs de l'icône, et les autres attributs HTML du `<button>`.

## Noms à ne pas employer

ClickIcon, Click Icon, bouton icône, bouton d'icône, icône cliquable, icon button.

Ces noms désignent IconButton. Le seul nom à employer est IconButton.

## Décisions

- **1.0.0 - 27/10/26.** Une action représentée par une icône seule passe par un composant dédié, IconButton, et non par une variante de Button. Ses règles diffèrent : pas de libellé visible, et un nom accessible obligatoire.
- **1.0.0 - 27/10/26.** Le nom IconButton suit le standard du marché. ClickIcon, le nom actuel du code, décrit le geste et non le composant.
- **1.0.0 - 27/10/26.** IconButton reprend les propriétés, les couleurs et l'anneau de focus de Button, pour que les deux composants restent cohérents.
- **1.0.0 - 30/10/26.** Comme pour Button, le secondary redevient un bouton à contour. Au survol et à l'appui, il prend le fond du tertiary dans le même état.
- **1.0.0 - 30/10/26.** IconButton reprend les deux tailles de l'ancien ClickIcon : size=small (40 px), la valeur par défaut, et size=x-small (24 px). La taille de 56 px disparaît.
- **1.0.0 - 02/11/26.** size=small sert quand le composant qui contient l'IconButton n'est pas cliquable lui-même, comme une fenêtre modale. size=x-small sert dans un composant déjà cliquable en entier, comme ClickItem.
- **1.0.0 - 02/11/26.** IconButton n'a pas de colorScheme business, contrairement à Button. Une souscription demande un libellé, donc un Button.
- **1.0.0 - 04/11/26.** Comme pour Button, le secondary et le tertiary n'ont pas de fond au repos. Le bouton désactivé garde son fond gris.

## Points ouverts

- **Code.** ClickIcon s'approche d'IconButton, mais il n'a ni primary ni colorScheme, et il n'impose pas de nom accessible. Au repos, `variant="default"` a un fond bleu clair, alors que hierarchy=secondary n'a pas de fond. En attendant : le code utilise ClickIcon selon le tableau des écarts, toujours avec un nom accessible, et hierarchy=primary et colorScheme=inverse ne s'utilisent pas dans le code.
- **Tailles.** IconButton a deux tailles, size=small et size=x-small. Dans le code, `size` accepte aussi L et M. En attendant : `size` ne prend que `S` ou `XS`, `iconVariant` ne prend que `disabled`, et un besoin d'une autre taille se signale.
- **Fond foncé.** colorScheme=inverse n'existe qu'avec hierarchy=primary. Une action discrète sur un fond foncé, comme fermer une bannière, n'a donc pas de variante adaptée. En attendant : signaler.
- **Navigation.** Zeroheight permet à Click Icon d'être un lien `<a>` quand l'action mène à une autre page. Le code ne le permet pas, et la fiche Button renvoie vers Link pour naviguer. En attendant : signaler.
- **Plusieurs primary.** La fiche Button n'autorise qu'un seul Button primary par page, sans compter le Header. Rien ne dit si un IconButton primary compte dans cette limite. En attendant : signaler.
- **Règles reprises de Button.** Plusieurs règles viennent de la fiche Button, sans source propre à IconButton : hierarchy, disabled=true et colorScheme, le Comportement, la Rédaction, `aria-expanded` et `aria-controls`, et le contraste de l'anneau de focus. En attendant : elles s'appliquent.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
