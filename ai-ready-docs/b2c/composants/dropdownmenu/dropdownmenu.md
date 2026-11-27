# DropdownMenu 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le DropdownMenu regroupe, dans un panneau, les liens et les actions du compte de l'utilisateur.

## Quand l'utiliser

### À utiliser pour

- Donner accès, depuis l'en-tête, aux pages et aux actions du compte de l'utilisateur connecté, comme son profil ou la déconnexion.

### À ne pas utiliser pour

- Choisir une valeur dans un formulaire : prendre Select.
- La navigation principale du service : prendre le menu du Header.
- Présenter des contrats ou des personnes avec leur détail : prendre ClickItem.

## Règles selon les propriétés

### breakpoint=1024

Le panneau s'ouvre par-dessus la page, depuis un déclencheur, le plus souvent un Button de l'en-tête. Le DropdownMenu ne contient pas ce déclencheur : le designer le pose à part.

### breakpoint=0

Le panneau s'affiche directement dans le menu ouvert de l'en-tête, sans déclencheur. Il suit les liens de navigation du Header, qui ne font pas partie du DropdownMenu.

### _theme=client

Dans cette variante, les Button de children sont en _theme=client.

## Exemples

- Accès au compte en desktop : breakpoint=1024, des _MenuItem dans clickItems, comme « Mon profil », et un Button tertiary « Se déconnecter » dans children.
- Le même menu en mobile : breakpoint=0, dans le menu ouvert de l'en-tête.

## Interdits

- Autre chose que des _MenuItem dans clickItems.
- Modifier localement la taille, l'espacement ou les couleurs du DropdownMenu, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- clickItems reçoit les _MenuItem, l'un sous l'autre. Un _MenuItem est une entrée cliquable, avec un libellé, une icône facultative et un chevron.
- children reçoit un contenu libre sous la liste, le plus souvent des Button. Exemple : « Se déconnecter ».
- Le nombre maximal de _MenuItem : Non documenté.

## Rédaction

- Les libellés des _MenuItem suivent la rubrique Rédaction de leur fiche.
- Le libellé du déclencheur : Non documenté.

## Comportement

- En desktop, un clic sur le déclencheur ouvre ou ferme le panneau. Un clic hors du panneau, ou la touche Échap, le ferme.
- En mobile, le panneau reste affiché tant que le menu de l'en-tête est ouvert.
- Un clic sur un _MenuItem mène vers sa page ou lance son action. Ce que devient le panneau ensuite : Non documenté.
- La place du focus à l'ouverture et à la fermeture : Non documenté.

## Accessibilité

En desktop, le panneau est un élément `<section>`, qui s'ouvre par-dessus la page avec l'API Popover du navigateur. Son nom accessible est le libellé du déclencheur, relié par `aria-labelledby`. Les _MenuItem forment une liste `<ul>`. En mobile, la `<section>` s'affiche dans la page.

- Le déclencheur est un `<button>`, relié au panneau par l'attribut `popovertarget`.
- Les _MenuItem, puis le contenu de children, s'atteignent avec la touche Tab, dans l'ordre de lecture.
- Les flèches du clavier ne parcourent pas les _MenuItem.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-menuburger-%F0%9F%9A%A7--menuburger) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-menuburger-%F0%9F%9A%A7--menuburger).

Code source : [dossier MenuBurger sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/MenuBurger).

Détail de l'implémentation : [page MenuBurger du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/12-layout.md#menuburger-sous-composant-du-header).

Cette fiche sur GitHub : [dropdownmenu.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/dropdownmenu/dropdownmenu.md).

Import, selon le thème :

```tsx
import { MenuBurger, Button } from "@axa-fr/canopee-react/prospect";
import { MenuBurger, Button } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<MenuBurger
  buttonLabel="Mon espace"
  clickItems={[
    { title: "Mon profil", onClick: goToProfile },
    { title: "Mes contrats", onClick: goToContracts },
  ]}
>
  <Button variant="tertiary" onClick={logOut}>
    Se déconnecter
  </Button>
</MenuBurger>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| DropdownMenu | `MenuBurger` |
| Le déclencheur, posé à part | Le bouton intégré au composant, réglé par `buttonLabel`, `icon` et `variant` |
| clickItems, avec des _MenuItem | `clickItems`, une liste d'objets que le code affiche avec le ClickItem en `variant="small"` |
| children | `children` |
| breakpoint | Sans équivalent, le code change d'affichage sous 1024 px (`MenuBurgerCommon.tsx:90`) |
| Sans équivalent | En mobile, quand `MenuBurger` n'est pas seul dans son conteneur, il ajoute un trait, une marge de 24 px au-dessus du trait et un padding de 24 px en dessous (`MenuBurgerAll.css:2`) |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`.

## Noms à ne pas employer

MenuBurger, menu du compte, menu utilisateur, menu déroulant, AccountMenu.

Ces noms désignent DropdownMenu. Le seul nom à employer est DropdownMenu.

## Décisions

- **1.0.0 - 26/11/26.** Figma garde DropdownMenu, le nom standard de component.gallery et de Radix, et non MenuBurger, le nom du code.
- **1.0.0 - 26/11/26.** Figma sépare le DropdownMenu de son déclencheur, comme MUI et Radix, alors que le code les réunit dans `MenuBurger`. La fiche n'impose pas de déclencheur précis.
- **1.0.0 - 26/11/26.** Les lignes passent par _MenuItem, un sous-composant partagé avec le DataAgent, au lieu de l'ancien ClickItem en petit format.
- **1.0.0 - 26/11/26.** children accepte tout contenu, comme dans le code. Par défaut, il montre un Button secondary et un Button tertiary.
- **1.0.0 - 26/11/26.** Le DropdownMenu garde une propriété _theme, car ses Button changent beaucoup d'un thème à l'autre.
- **1.0.0 - 26/11/26.** En desktop, le panneau garde une bordure, comme dans le code, pour se détacher de la page qu'il recouvre. MUI et Radix utilisent plutôt une ombre, qui demanderait un token d'ombre et une évolution du code.
- **1.0.0 - 26/11/26.** Le panneau a un padding de 8 px à gauche et à droite, et children ajoute 8 px de chaque côté. Au hover, le fond gris d'un _MenuItem s'arrête à 8 px du bord du panneau, et son icône reste alignée sur les Button de children.
- **1.0.0 - 26/11/26.** Le DropdownMenu ne contient pas les liens de navigation du Header, comme `MenuBurger` dans le code. En mobile, ces liens s'affichent au-dessus de lui, dans le menu de l'en-tête, séparés par un trait.

## Points ouverts

- **Bordure dans le code.** Le code trace la bordure en `--blue-200` (`MenuBurgerAll.css:49`), alors que Figma la met en color/gray/200. En attendant : signaler.
- **Annonce du menu.** Le déclencheur du code porte `aria-haspopup="true"` (`MenuBurgerCommon.tsx:131`), qui annonce un menu au sens ARIA. Le panneau n'a pourtant pas le rôle `menu`. En attendant : signaler.
- **Fermeture et focus.** Ce que devient le panneau après un clic sur un _MenuItem, et la place du focus à l'ouverture et à la fermeture, ne sont pas définis. En attendant : signaler.
- **Contenus non définis.** Le nombre maximal de _MenuItem et le libellé du déclencheur ne sont pas définis. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
