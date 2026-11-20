# Tabs 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Tabs permet à l'utilisateur de passer d'un contenu à l'autre, sans changer d'écran.

## Quand l'utiliser

### À utiliser pour

- Répartir les contenus d'une même page en sections de même niveau, que l'utilisateur consulte une à une. Exemple : « Garanties », « Documents » et « Paiements » sur la page d'un contrat.
- Passer d'une vue à l'autre d'une même liste. Exemple : « Contrats actifs » et « Anciens contrats ».

### À ne pas utiliser pour

- Mener vers une autre rubrique : prendre le menu du Header.
- Un parcours en étapes, à suivre dans l'ordre : prendre Stepper.
- Des contenus que l'utilisateur doit comparer ou voir ensemble : les afficher l'un sous l'autre.
- Afficher ou masquer un seul contenu : prendre Accordion.
- Passer d'une page à l'autre d'une liste : prendre Pagination.
- Lancer une action : prendre Button.

## Règles selon les propriétés

### placement=left

Les _Tab gardent la largeur de leur libellé et s'alignent à gauche. C'est la valeur par défaut, pour la plupart des usages.

### placement=center

Les _Tab se partagent toute la largeur de Tabs, à parts égales. placement=center convient à deux ou trois _Tab aux libellés courts, surtout sur mobile. Dans Figma, le designer règle en Fill container chaque _Tab qu'il ajoute dans items.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les _Tab utilisent leur version mobile.

## Exemples

- Page d'un contrat, en breakpoint=1024 : placement=left, trois _Tab, « Garanties » sélectionné, « Documents » et « Paiements ».
- Liste des contrats, en breakpoint=0 : placement=center, deux _Tab, « Contrats actifs » sélectionné et « Anciens contrats ».

## Interdits

- Autre chose qu'un _Tab dans items, comme un Button ou un texte.
- Un _Tab aux couleurs du menu du Header dans Tabs.
- Plusieurs _Tab sélectionnés, ou aucun.
- Un _Tab sélectionné à l'état press : un onglet déjà affiché ne réagit plus au clic.
- Modifier localement la taille, la couleur ou l'épaisseur du trait, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Deux _Tab au moins dans items. Chaque _Tab ([_tab.json](_tab.json)) a un libellé, obligatoire, sur une seule ligne, sans icône, badge ni compteur.
- Le nombre maximal de _Tab : Non documenté.
- Le contenu de chaque _Tab se place sous Tabs, dans la maquette. Tabs ne le contient pas.

## Rédaction

- Le libellé d'un _Tab est un nom ou un groupe nominal qui nomme le contenu, sans verbe. Exemple : « Garanties ». À éviter : « Voir les garanties ».
- Un ou deux mots de préférence, comme le recommande Carbon.
- Une majuscule au début seulement, sans point final.
- Deux _Tab d'un même Tabs n'ont jamais le même libellé.
- La longueur maximale du libellé : Non documenté.

## Comportement

- Tabs prend toute la largeur de son conteneur.
- Au chargement, le _Tab sélectionné est affiché, le premier par défaut.
- Un clic sur un _Tab affiche son contenu sous Tabs et masque les autres, sans recharger la page. Un clic sur le _Tab déjà affiché ne change rien.
- Un _Tab n'a pas d'état désactivé. Que faire d'un onglet indisponible : Non documenté.
- Quand les _Tab dépassent la largeur de l'écran : Non documenté.

## Accessibilité

Un conteneur `role="tablist"` qui contient les _Tab. Chaque _Tab est un `<button type="button" role="tab">`, qui porte `aria-selected`, et `aria-controls` vers son contenu. Chaque contenu est un `role="tabpanel"`, relié à son _Tab par `aria-labelledby`. Les contenus des autres _Tab sont masqués à l'écran et au lecteur d'écran.

- La liste a un nom accessible, avec `aria-label` ou `aria-labelledby` vers le titre de la section. Exemple : `aria-label="Informations du contrat"`.
- Le nom accessible d'un _Tab est son libellé. Le lecteur d'écran annonce le nom, le rôle, l'état et la position. Exemple : « Garanties, onglet, sélectionné, 1 sur 3 ».
- La touche Tab place le focus sur le _Tab sélectionné. Les flèches gauche et droite passent au _Tab voisin et l'affichent, en boucle. Début et Fin vont au premier et au dernier _Tab.
- Depuis le _Tab sélectionné, la touche Tab va au contenu affiché. Quand ce contenu n'a aucun élément focusable, il porte `tabindex="0"` pour recevoir le focus.
- Le contenu affiché suit la liste dans le DOM, juste après elle.
- Le focus clavier reste toujours visible.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte. Il demande 3:1 pour ce qui montre un état.
- Sur fond blanc, le libellé atteint 19,3:1 hors sélection. Il atteint 10,9:1 quand le _Tab est sélectionné.
- Le trait du _Tab sélectionné atteint 10,9:1.
- L'anneau de focus atteint 6,9:1.
- La sélection se voit au trait sous le libellé, pas seulement à la couleur du texte.
- La zone cliquable fait toute la taille du _Tab, 48 px de haut au moins.

Référence : [ARIA Authoring Practices Guide, Tabs Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/tabs/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-tabbar--tabbar) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-tabbar--tabbar). Pour chaque onglet, Storybook de ItemTabBar : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-itemtabbar--itemtabbar) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-tabbar-itemtabbar--itemtabbar).

Code source : [dossier TabBar sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/TabBar), et [dossier ItemTabBar](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/ItemTabBar) pour chaque onglet.

Détail de l'implémentation : [page TabBar du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/10-navigation.md#tabbar), et [page ItemTabBar](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/10-navigation.md#itemtabbar).

Cette fiche sur GitHub : [tabs.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/tabs/tabs.md).

Import, selon le thème :

```tsx
import { TabBar } from "@axa-fr/canopee-react/prospect";
import { TabBar } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<TabBar
  direction="center"
  items={[
    { title: "Contrats actifs", content: <ContratsActifs /> },
    { title: "Anciens contrats", content: <AnciensContrats /> },
  ]}
/>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Tabs | `TabBar` |
| placement | `direction` |
| items | `items`, une liste d'objets avec `title` et `content` |
| _Tab | `ItemTabBar`, affiché par TabBar pour chaque élément de `items` |
| Le libellé d'un _Tab | `title` |
| _Tab sélectionné | `aria-selected`, réglé au chargement par `preSelectedTabIndex`, l'index du _Tab affiché |
| Les états d'un _Tab | Sans équivalent, le navigateur applique les états |
| breakpoint | Sans équivalent, une media query change la taille à partir de 1024 px |
| Contenu sous Tabs | `content` de chaque élément de `items`, affiché par TabBar dans un `role="tabpanel"` |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. TabBar se sert du libellé comme clé : deux `title` identiques entrent en conflit. Chaque élément de `items` accepte aussi `handleSelectTab`, appelé à chaque clic sur son _Tab, même déjà affiché, et à chaque flèche qui l'affiche, mais pas au chargement. TabBar garde le _Tab affiché en interne : `preSelectedTabIndex` ne sert qu'au premier affichage.

## Noms à ne pas employer

TabBar, ItemTabBar, Tab, item tab, onglets, barre d'onglets, tab bar, tab list, menu à onglets.

Ces noms désignent Tabs. Le seul nom à employer est Tabs.

## Décisions

- **1.0.0 - 19/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Tabs et un seul _Tab. Leurs variantes étaient identiques.
- **1.0.0 - 19/11/26.** Le _Tab suit le pattern Hybride des principes d'interaction : un fond au hover et au press, et un trait de 2 px sous le libellé quand il est sélectionné. Un _Tab sélectionné n'a pas d'état press, car un onglet déjà affiché ne réagit plus au clic.
- **1.0.0 - 19/11/26.** Le _Tab a une variante par largeur d'écran. Sur mobile, il fait 48 px de haut au moins, comme dans le code.
- **1.0.0 - 19/11/26.** Le _Tab a aussi un jeu de couleurs pour le menu du Header, qui remplace l'ancien _ItemMenu de Figma. Ses règles seront écrites dans la fiche du Header.
- **1.0.0 - 20/11/26.** placement suit le code : placement=center étire les _Tab sur toute la largeur, placement=left les garde à la largeur de leur libellé. Le trait sous la liste existe dans les deux cas. La valeur par défaut est placement=left, comme dans le code.
- **1.0.0 - 20/11/26.** Les _Tab se posent dans le slot items, du même nom que la prop du code. items remplace l'ancienne propriété itemsCount, qui limitait Tabs à deux ou trois _Tab.
- **1.0.0 - 20/11/26.** items n'accepte que des _Tab.
- **1.0.0 - 20/11/26.** En placement=center, le designer règle en Fill container chaque _Tab qu'il ajoute dans items, car Figma n'étire pas tout seul un _Tab ajouté dans le slot.
- **1.0.0 - 20/11/26.** Dans Figma, Tabs a une largeur d'exemple, 522 px en desktop et 343 px en mobile. Dans une maquette, il prend la largeur de son conteneur.
- **1.0.0 - 20/11/26.** Tabs a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024.

## Points ouverts

- **Nom de la liste dans le code.** TabBar ne donne pas de nom accessible à sa liste `role="tablist"`, et ne permet pas d'en passer un (`TabBarCommon.tsx:109`). En attendant : signaler.
- **Focus du contenu dans le code.** TabBar ne met pas `tabindex="0"` sur le contenu affiché (`TabBarCommon.tsx:128`). En attendant : la rubrique Accessibilité de cette fiche s'applique.
- **Rendu de la liste dans le code.** Le trait sous la liste prend une couleur de l'ancienne palette, `--blue-200`, au lieu de color/gray/200 (`TabBarApollo.css:5`, `TabBarLF.css:5`). En attendant : signaler.
- **Rendu des _Tab dans le code.** Le code affiche un trait de 4 px au hover et sur le _Tab sélectionné (`ItemTabBarCommon.css:24`), sans fond au hover ni au press (`ItemTabBarCommon.css:16`). Hors sélection, le libellé est en graisse regular (`ItemTabBarCommon.css:13`), et en bleu dans le thème prospect (`ItemTabBarApollo.css:5`). L'interligne vaut 125 % (`ItemTabBarCommon.css:14`). Le contour de focus est écarté de 2 px de tous les côtés (`ItemTabBarCommon.css:32`). Le _Tab fait 52 px de haut au moins en desktop (`ItemTabBarCommon.css:44`), contre 56 px dans Figma. Ses couleurs viennent de l'ancienne palette (`ItemTabBarCommon.css:6`). En attendant : signaler.
- **Largeur en placement=center dans le code.** Le code ajoute à chaque _Tab la même part de la place libre (`TabBarCommon.css:22`) : un libellé plus long donne un _Tab plus large. En attendant : signaler.
- **Onglet choisi par la page.** TabBar ne permet pas à la page de changer le _Tab affiché après le premier affichage. En attendant : signaler.
- **Onglet indisponible.** Le _Tab n'a pas d'état désactivé dans Figma. TabBar ne transmet à ItemTabBar que `title` (`TabBarCommon.tsx:110`). Un `disabled` passé dans `items` reste donc sans effet, alors que le plugin Copilot l'annonce (`10-navigation.md:28`). En attendant : signaler.
- **Débordement.** Le comportement quand les _Tab dépassent la largeur de l'écran n'est pas défini. En attendant : signaler.
- **Nombre et longueur.** Ni le nombre maximal de _Tab, ni la longueur maximale de leur libellé ne sont fixés. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
