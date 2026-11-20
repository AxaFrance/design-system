# _Tab 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le _Tab est un onglet, qui affiche un contenu ou mène vers une autre rubrique.

## Quand l'utiliser

### À utiliser pour

- Un onglet de Tabs, qui affiche un des contenus d'une même page sans la recharger. Exemple : « Garanties », « Documents » et « Paiements » sur la page d'un contrat.
- Un lien du menu du Header, avec colorScheme=header, qui mène vers une autre rubrique. Exemple : « Mes contrats ».

### À ne pas utiliser pour

- Un _Tab posé directement dans une maquette, hors de Tabs et du menu du Header : prendre Tabs.
- Lancer une action : prendre Button.
- Mener vers une autre page depuis le contenu : prendre Link.
- Passer d'une étape à l'autre d'un parcours : prendre Stepper.
- Passer d'une page à l'autre d'une liste : prendre Pagination.

## Règles selon les propriétés

### selected=true

L'onglet affiché dans Tabs, ou la rubrique de la page affichée dans le menu du Header.

### colorScheme=header

Seulement dans le menu du Header. Chaque _Tab y mène vers une autre page, et selected=true marque la rubrique de la page affichée.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé utilise la version mobile de son style de texte.

## Exemples

- Page d'un contrat, trois contenus : un Tabs avec trois _Tab, « Garanties » en selected=true, « Documents » et « Paiements ».
- Menu du Header de l'espace client, sur la page des contrats : _Tab colorScheme=header « Mes contrats » en selected=true, puis « Mes sinistres » en selected=false.

## Interdits

- colorScheme=header hors du menu du Header, et colorScheme=default dans le menu du Header.
- Plusieurs _Tab en selected=true dans un même Tabs ou un même menu du Header.
- state=press avec selected=true : un onglet déjà affiché ne réagit plus au clic.
- Modifier localement la taille, la police ou les couleurs, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, obligatoire, sur une seule ligne.
- Ni icône, ni badge, ni compteur.

## Rédaction

- Un nom ou un groupe nominal qui nomme le contenu ou la rubrique, sans verbe. Exemple : « Mes contrats ». À éviter : « Voir mes contrats ».
- Un ou deux mots de préférence, comme le recommande Carbon.
- Une majuscule au début seulement, sans point final.
- Deux _Tab d'un même groupe n'ont jamais le même libellé.
- La longueur maximale du libellé : Non documenté.

## Comportement

- Dans Tabs, un clic sur le _Tab déjà affiché ne change rien. Le reste du comportement est décrit dans la fiche Tabs.
- Dans le menu du Header, avec colorScheme=header, un clic sur un _Tab ouvre la page de la rubrique.
- Le menu du Header sur un écran de moins de 1024 px : Non documenté.
- Le _Tab n'a pas d'état désactivé. Que faire d'un onglet indisponible : Non documenté.

## Accessibilité

Dans Tabs, un élément `<button type="button" role="tab">`, placé dans un conteneur `role="tablist"`. Chaque _Tab porte `aria-selected`, et `aria-controls` vers son contenu. Le contenu porte `role="tabpanel"` et `aria-labelledby` vers son _Tab.

- Le nom accessible est le libellé. Le lecteur d'écran annonce le nom, le rôle, l'état et la position. Exemple : « Garanties, onglet, sélectionné, 1 sur 3 ».
- Le nom de la liste et le clavier sont décrits dans la fiche Tabs.

Dans le menu du Header, avec colorScheme=header, un lien `<a href>` dans une liste `<ul>`, placée dans un `<nav>`. Pas de `role="tab"` : chaque _Tab mène vers une autre page.

- Le _Tab de la page affichée porte `aria-current="page"`.
- Le `<nav>` a un nom accessible. Exemple : `aria-label="Menu principal"`.
- La touche Tab passe d'un lien à l'autre, et Entrée ouvre la page.

Partout :

- Le focus clavier reste toujours visible.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Il demande 3:1 pour ce qui montre un état.
- Sur fond blanc, le libellé atteint 19,3:1 en selected=false. Il atteint 10,9:1 en selected=true, et dans les deux cas en colorScheme=header.
- Le trait de selected=true atteint 10,9:1 en colorScheme=default. En colorScheme=header, il atteint 3,3:1 sur fond blanc. Au hover, sur le fond color/gray/100, il tombe à 2,6:1.
- L'anneau de focus atteint 6,9:1.
- La sélection se voit au trait sous le libellé, pas seulement à la couleur du texte.
- La zone cliquable fait toute la taille du _Tab, 48 px de haut au moins.

Références : [ARIA Authoring Practices Guide, Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/), et [`aria-current`](https://www.w3.org/TR/wai-aria-1.2/#aria-current) pour le menu du Header.

## Code

Storybook de ItemTabBar, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-itemtabbar--itemtabbar) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-tabbar-itemtabbar--itemtabbar).

Storybook du menu du Header, selon le thème : [TabMenu prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-tabmenu-%F0%9F%9A%A7--tabmenu) ou [TabMenu client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-tabmenu-%F0%9F%9A%A7--tabmenu).

Code source : [dossier ItemTabBar sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ItemTabBar), et [dossier ItemMenu](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ItemMenu) pour colorScheme=header.

Détail de l'implémentation : [page ItemTabBar du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/10-navigation.md#itemtabbar), et [page ItemMenu](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/10-navigation.md#itemmenu).

Cette fiche sur GitHub : [_tab.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/_tab/_tab.md).

Import, selon le thème :

```tsx
import { TabBar, Header } from "@axa-fr/canopee-react/prospect";
import { TabBar, Header } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple : les _Tab se déclarent dans les `items` de TabBar, qui affiche chaque ItemTabBar et son contenu.

```tsx
<TabBar
  items={[
    { title: "Garanties", content: <Garanties /> },
    { title: "Documents", content: <Documents /> },
  ]}
/>
```

Dans le menu du Header, les _Tab en colorScheme=header se déclarent dans les `items` de `tabMenuProps`, que le Header passe à TabMenu.

```tsx
<Header
  appNameProps={{ label: "Espace client" }}
  tabMenuProps={{
    "aria-label": "Menu principal",
    items: [
      { label: "Mes contrats", href: "/contrats", "aria-current": "page" },
      { label: "Mes sinistres", href: "/sinistres" },
    ],
  }}
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| _Tab | `ItemTabBar` |
| _Tab colorScheme=header | `ItemMenu`, affiché par `TabMenu` dans le Header |
| label | `title` dans `ItemTabBar`, `label` dans les `items` de `TabMenu` |
| selected | `aria-selected` dans TabBar, réglé au chargement par `preSelectedTabIndex`. `isActive` dans ItemMenu, réglé par `initialPosition` dans TabMenu |
| state | Sans équivalent, le navigateur applique les états |
| colorScheme | Sans équivalent, ce sont deux composants |
| breakpoint | Sans équivalent, une media query change la taille à partir de 1024 px |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. TabBar se sert du libellé comme clé : deux `title` identiques entrent en conflit.

## Noms à ne pas employer

Tab, item tab, ItemTabBar, ItemMenu, _ItemMenu, entrée de menu, item de menu, lien de menu.

Ces noms désignent _Tab. Le seul nom à employer est _Tab.

## Décisions

- **1.0.0 - 19/11/26.** Dans Figma, les thèmes prospect et client partagent un seul _Tab. Leurs variantes étaient identiques.
- **1.0.0 - 19/11/26.** Le _Tab suit le pattern Hybride des principes d'interaction : un fond au hover et au press, et un trait de 2 px sous le libellé en selected=true.
- **1.0.0 - 19/11/26.** Le _Tab n'a pas de press en selected=true : un onglet déjà affiché ne réagit plus au clic.
- **1.0.0 - 19/11/26.** Les liens du menu du Header sont des _Tab en colorScheme=header. Ils ont la même structure que l'onglet de Tabs, avec un autre jeu de couleurs. L'ancien _ItemMenu de Figma est remplacé. Dans le code, ce sont deux composants, `ItemTabBar` et `ItemMenu`.
- **1.0.0 - 19/11/26.** Dans le menu du Header, le _Tab prend toute la hauteur de la rangée, avec le libellé centré, comme dans le code.
- **1.0.0 - 19/11/26.** Le _Tab a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024.
- **1.0.0 - 19/11/26.** En breakpoint=0, le _Tab fait 48 px de haut au moins, comme dans le code.

## Points ouverts

- **Rubrique affichée dans le code.** ItemMenu marque la rubrique affichée avec une classe CSS seulement, sans `aria-current="page"` (`ItemMenuCommon.tsx:34`). En attendant : la rubrique Accessibilité de cette fiche s'applique.
- **Clavier du menu du Header dans le code.** TabMenu rend le `<nav>` focusable (`TabMenu.tsx:81`). Seul le lien marqué entre dans l'ordre de tabulation, les autres ont `tabindex="-1"` (`TabMenu.tsx:93`). La touche Tab ne passe donc pas d'un lien à l'autre. Les flèches gauche et droite déplacent le focus, et le lien qui le reçoit prend le rendu de selected=true sans changer de page (`TabMenu.tsx:59`, `TabMenu.tsx:92`). En attendant : signaler.
- **Rendu dans le code.** Le code affiche un trait de 4 px au hover et en selected=true (`ItemTabBarCommon.css:24`), sans fond au hover ni au press (`ItemTabBarCommon.css:16`). Hors sélection, le libellé est en graisse regular (`ItemTabBarCommon.css:13`), et en bleu dans le thème prospect (`ItemTabBarApollo.css:5`). L'interligne vaut 125 % (`ItemTabBarCommon.css:14`). Le contour de focus est écarté de 2 px de tous les côtés (`ItemTabBarCommon.css:32`). Le _Tab fait 52 px de haut au moins en desktop (`ItemTabBarCommon.css:44`), contre 56 px dans Figma. Ses couleurs viennent de l'ancienne palette (`ItemTabBarCommon.css:6`). En attendant : signaler.
- **Onglet indisponible.** Le _Tab n'a pas d'état désactivé dans Figma. TabBar ne transmet à ItemTabBar que `title` (`TabBarCommon.tsx:110`). Un `disabled` passé dans `items` reste donc sans effet, alors que le plugin Copilot l'annonce (`10-navigation.md:28`). En attendant : signaler.
- **Menu du Header sur mobile.** Sous 1024 px, le Header range ses liens dans un menu ouvert par un bouton (`HeaderCommon.tsx:98`). Le code les affiche en liste verticale (`TabMenuAll.css:18`), avec un trait à gauche et non dessous (`ItemMenuCommon.css:12`). Figma a pourtant un _Tab en colorScheme=header et breakpoint=0, avec un trait dessous. En attendant : signaler.
- **Contraste du trait du menu du Header.** Au hover, le trait color/red/300 de selected=true n'atteint que 2,6:1 sur le fond color/gray/100. En attendant : signaler.
- **Longueur.** La longueur maximale du libellé n'est pas fixée. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
