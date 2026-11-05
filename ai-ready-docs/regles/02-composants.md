# Composants

Le nom d'un composant est celui que le designer cherche dans les assets Figma et celui que le développeur importe dans le code. Autant que possible, c'est le même. Cette page fixe les règles pour nommer un composant, puis les familles qui les rangent.

## Écrire le nom

Les noms s'écrivent en PascalCase, c'est-à-dire avec une capitale au début de chaque mot et sans séparateur. Exemple : TextInput. Les autres règles d'écriture valent pour toute la nomenclature : en anglais, sans accent, sans préfixe ni emoji.

- Figma prend le nom standard du marché, celui de [MUI](https://mui.com/material-ui/all-components/) ou de [component.gallery](https://component.gallery/components/). Quand le code exporte déjà le composant sous ce nom, les deux restent identiques. Exemple : Link.
- Quand le nom du code n'est pas standard, Figma prend quand même le nom standard. Le code s'aligne peu à peu, à chaque évolution du composant, et la fiche du composant donne le nom du code en attendant. Exemple : IconButton dans Figma, ClickIcon dans le code.
- Le mot qui dit ce qu'est le composant vient en dernier, et les précisions avant, comme en anglais. Exemple : TextInput est un champ, IconButton un bouton, _PaginationItem un élément de Pagination. Exemple d'écart : ItemFile.
- Un même composant porte le même nom en B2C et en B2B.
- Le nom ne dit que ce qu'est le composant, sans statut, version ni emoji. Exemple d'écart : Button v2.
- Un sigle s'écrit comme un mot. Exemple : AiAnswer, et non AIAnswer.
- Les niveaux, les types et les orientations passent par les propriétés, pas par des composants séparés. Exemple : un seul Stepper avec la propriété orientation, et non un Horizontal Stepper et un Vertical Stepper.
- Deux versions deviennent deux composants quand elles n'ont pas les mêmes propriétés. Exemple : un champ date a les propriétés de son calendrier, c'est un composant à part. Un champ mot de passe a les mêmes propriétés qu'un champ texte, c'est un type.

## Les sous-composants

Un sous-composant sert à construire les autres, il n'est pas posé tel quel dans une maquette. Il commence par un tiret bas et n'est pas publié.

- Un élément qui se répète dans plusieurs composants devient un sous-composant, plutôt que d'être reconstruit dans chacun. Il se modifie ainsi à un seul endroit. Exemple : _FormLabel, le libellé de tous les champs.
- Son nom reprend celui du composant qu'il construit, puis l'élément. Exemple : _PaginationItem pour un numéro de page de Pagination. Il reste ainsi rangé à côté de son parent.
- Si le code l'exporte sous un autre nom, la même règle s'applique, et le code s'aligne peu à peu. Exemple : _FileUploadItem dans Figma, ItemFile dans le code.
- Il est rangé dans la famille du composant qu'il construit. S'il en construit plusieurs, il va dans la famille de ce qu'il est. Exemple : _FormLabel va dans Forms, même s'il sert aussi aux cellules de tableau.

## Les composants du navigateur

Certains éléments sont affichés par le navigateur lui-même, et non par le code, comme la liste qui s'ouvre sous un select natif. Ils ont leurs propres composants, dans un dossier native. Exemple : native/SelectList.

## Les familles

Chaque famille est une page de la librairie Figma. Le B2C et le B2B ont les mêmes familles, rangées par usage. Une famille sans composant garde sa page, et il n'y a pas de page à part pour les sous-composants.

La page porte simplement le nom de la famille, et les pages suivent l'ordre du tableau.

| Famille | Ce qu'elle regroupe |
|---|---|
| Actions | Ce qui déclenche une action : boutons, liens, cartes cliquables. |
| Forms | Les champs de formulaire et les éléments qui les accompagnent. |
| Navigation | Ce qui permet de se déplacer : en-tête, pied de page, onglets, pagination. |
| Content | Ce qui affiche une information : données, cartes de données, icônes, images. |
| Feedback | Ce qui répond à l'utilisateur : messages et indicateurs de chargement. |
| Progression | Ce qui montre l'avancement : étapes, frise, barre de progression. |
| Structure | Ce qui organise la page : titres, accordéons, fenêtres, tableaux. |
| AI | Les composants des assistants IA. |

## Les templates

Un template assemble des composants de Canopée. Un bloc regroupe des composants et d'autres éléments qui servent ensemble, comme des textes, des images, des icônes, des logos ou des pictogrammes, une section est une bande pleine largeur faite de blocs, et une page est un écran complet fait de sections.

- Le nom d'un template suit les mêmes règles que celui d'un composant. Il ne contient ni le mot Template, ni Block, Section ou Page. Exemple : Loader, qui assemble un Spinner, un titre et un sous-titre, et non TemplateLoader ou LoaderBlock.
- La description d'un template commence par « Template de bloc. », « Template de section. » ou « Template de page. ». Dans le panneau Assets de Figma, la recherche lit aussi les descriptions. Un designer qui tape « template » voit donc tous les templates.
- Dans la librairie Figma, un template n'est pas rangé dans une famille. Il a sa page : Templates - Blocks pour un bloc, Templates - Sections pour une section et Templates - Pages pour une page.
