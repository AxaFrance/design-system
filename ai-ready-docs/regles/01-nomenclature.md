# Nomenclature

La nomenclature définit comment nommer les composants, leurs propriétés et leurs calques, au plus près du code. Quand un élément porte le même nom dans Figma et dans le code, designers et développeurs parlent le même langage. C'est aussi ce qui permet à une IA de lire le design system et de s'en servir sans se tromper.

Elle vaut pour le B2C et le B2B, Client et Prospect comme Distributeur et Collaborateur.

## Les nomenclatures

- **Composants** : les noms des composants et leurs familles.
- **Propriétés** : les propriétés communes à tous les composants, et comment construire celles d'un composant.
- **Calques** : les calques d'un composant.
- **Templates** : les noms des templates et leur page dans la librairie Figma.

Les design tokens et les assets ont une documentation dédiée.

## Les grands principes

- **Au plus près du code.** Les noms reprennent ceux du code autant que possible.
- **Un nom, une chose.** Une propriété règle un seul réglage, un calque tient un seul rôle.
- **Le même nom partout.** Une propriété qui joue le même rôle porte le même nom sur tous les composants.

Quand Figma et le code ne donnent pas le même nom, la nomenclature retient celui du code. Seules exceptions, quelques composants et propriétés gardent le nom de la nomenclature, et le code s'en rapproche progressivement. Les pages Composants et Propriétés les listent.

## L'écriture

- **PascalCase pour les composants**, selon les conventions React. Exemple : DatePicker.
- **camelCase pour les propriétés**, comme les props dans le code. Exemple : showIcon, leftIcon.
- **kebab-case pour tout le reste** : les valeurs de variantes, les calques et les design tokens s'écrivent en minuscules, avec un tiret entre les mots, comme dans le code. Exemple : top-left, left-icon.
- **En anglais**, sauf les valeurs métier, qui restent en français. Une valeur métier désigne un produit ou une garantie AXA. Exemple : prevoyance.
- **Sans accent**, quelle que soit la langue.
- **Sans préfixe ni emoji.** Une exception, le tiret bas, qui signale un sous-composant ou une propriété hors nomenclature.

## Un besoin ?

Une propriété ou une valeur manque ? Un cas n'est pas couvert ? Les canaux Aide et demande de l'équipe Teams Canopée, B2C ou B2B, sont là pour en parler. Ce qui est retenu rejoint ensuite la nomenclature.
