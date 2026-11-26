# Templates

Un template assemble des composants de Canopée. Un bloc regroupe des composants et d'autres éléments qui servent ensemble, comme des textes, des images, des icônes, des logos ou des pictogrammes. Une section est une bande pleine largeur faite de blocs, et une page est un écran complet fait de sections.

- Le nom d'un template suit les mêmes règles que celui d'un composant : en anglais, en PascalCase, avec le mot qui dit ce qu'il est en dernier. Il ne contient ni le mot Template, ni Block, Section ou Page. Exemple : Loader, qui assemble un Spinner, un titre et un sous-titre, et non TemplateLoader ou LoaderBlock.
- La description d'un template commence par « Template de bloc. », « Template de section. » ou « Template de page. ». Dans le panneau Assets de Figma, la recherche lit aussi les descriptions. Un designer qui tape « template » voit donc tous les templates.
- Un composant ne contient pas de template. Quand il a besoin des mêmes éléments qu'un template, il les porte lui-même. Exemple : la Modal porte son titre, son sous-titre et son icône, au lieu du template Heading.
- Dans la librairie Figma, un template n'est pas rangé dans une famille. Il a sa page : Templates - Blocks pour un bloc, Templates - Sections pour une section et Templates - Pages pour une page.
