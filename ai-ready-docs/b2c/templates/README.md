# Templates

Un template est un assemblage de composants de Canopée. Chaque template appartient à l'un des trois niveaux suivants, emboîtés les uns dans les autres.

| Niveau | Définition | Contenu |
|---|---|---|
| Page | Un écran complet. | Uniquement des sections, empilées. |
| Section | Une bande pleine largeur de la page, avec une seule fonction. | Uniquement des blocs. |
| Bloc | Un groupe d'éléments qui servent ensemble. | Des composants de Canopée et d'autres éléments, comme des textes, des images, des icônes, des logos ou des pictogrammes. |

Une section ne contient jamais de composant directement. Un composant seul, comme le Header, est placé dans un bloc à lui seul.

Ici, une page et une section sont des niveaux de template, pas les pages ni les sections d'un fichier Figma.

Chaque template a une fiche et un changelog, rangés dans le dossier de son niveau. Comme celle d'un composant, la fiche a deux parties : un JSON généré depuis Figma et un Markdown écrit à la main, qui fait foi. Le Markdown suit la [trame de la fiche d'un template](trame-fiche-template.md). Le JSON suit le [format du JSON d'un composant](../composants/format-json-composant.md).
