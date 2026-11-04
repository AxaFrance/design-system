# Styles de texte

Un style de texte réunit la police, la graisse, la taille et l'interligne d'un texte. Les styles de Canopée sont dans la librairie Fondations Canopée, et chacune de leurs valeurs est reliée à une variable. Ils servent au B2C comme au B2B.

## Les styles

Un style se choisit selon le rôle du texte, jamais parce que sa taille tombe juste.

| Famille | Rôle | Exemple |
|---|---|---|
| heading | Titre de page ou de section, qui structure la page | Titre de page |
| title | Titre d'un composant ou d'une de ses parties, cliquable ou non | Titre de Card |
| subtitle | Texte court sous un title ou un heading, qui le complète | Sous-titre de Card |
| body | Texte qui se lit comme un contenu | Paragraphe de texte |
| label | Texte court qui nomme un élément d'interface ou dit son état | Texte de Button |
| caption | Annotation d'un champ de formulaire | Message d'erreur |

Ce rôle et cet exemple sont aussi la description de chaque style dans Figma.

Un même composant garde la même famille en B2C et en B2B. Le niveau peut changer pour garder la taille d'origine de chaque univers. Exemple : l'en-tête de colonne d'un tableau prend title/1 en B2C et title/2 en B2B.

Tous les styles sont en Source Sans Pro, sauf heading/h1 et heading/h2, en Publico Headline dans le B2C. Le heading/h2 du thème Prospect est en Publico Light, au lieu de Publico Headline Bold.

## Un style s'adapte à l'univers, au thème et à l'écran

Le designer garde le même style et choisit le mode de la collection Typography sur son cadre : prospect ou client, desktop ou mobile en B2C, distributeur en B2B. Le texte prend les bonnes valeurs tout seul.

En B2C, la taille ne dépend que de l'écran, prospect et client ont les mêmes valeurs. Le desktop commence à 1024 px, comme dans le code. Le B2B n'a qu'un mode.

| Style | B2C desktop | B2C mobile | B2B |
|---|---|---|---|
| heading/h1 | 40 / 50 | 28 / 36 | 22 / 28 |
| heading/h2 | 32 / 40 | 24 / 30 | 20 / 24 |
| heading/h3 | 24 / 30 | 20 / 24 | 18 / 24 |
| heading/h4 | 20 / 24 | 18 / 24 | 16 / 22 |
| title/1 | 18 / 24 | 16 / 20 | 20 / 24 |
| title/2 | 16 / 20 | 14 / 18 | 16 / 22 |
| subtitle/1 | 18 / 24 | 16 / 20 | 18 / 24 |
| subtitle/2 | 16 / 20 | 14 / 18 | 16 / 22 |
| subtitle/3 | 14 / 18 | 14 / 18 | 14 / 18 |
| body/1 | 18 / 24 | 16 / 20 | 18 / 24 |
| body/2 | 16 / 20 | 14 / 18 | 16 / 22 |
| body/3 | 14 / 18 | 14 / 18 | 15 / 20 |
| label/1 | 18 / 24 | 16 / 20 | 16 / 20 |
| label/2 | 16 / 20 | 14 / 18 | 14 / 16 |
| label/3 | 14 / 18 | 14 / 18 | 13 / 16 |
| caption/1 | 16 / 20 | 14 / 18 | 14 / 18 |
| caption/2 | 16 / 20 | 14 / 18 | 13 / 16 |

Le premier chiffre est la taille, le second l'interligne, en pixels. Un style en regular et sa version en semibold ont les mêmes valeurs.

## Le nom d'un style

- Un heading prend son niveau. Exemple : heading/h2.
- Les autres familles prennent leur numéro, puis leur graisse. Exemple : body/2/semibold.

Les styles ne sont ni soulignés ni barrés, comme dans le code. Le composant écrit lui-même le soulignement dans son CSS.

Les règles d'écriture sont celles de la nomenclature de Canopée : en minuscules, en anglais, sans accent, avec un tiret entre les mots.

## Les variables derrière les styles

Les variables de la collection Typography portent le nom du style, suivi de la propriété. Chaque style en a quatre : font-family, font-weight, font-size et line-height. Exemple : body/2/regular/font-size.

Chaque variable pointe vers une primitive dans chacun des cinq modes.

Dans le code, les barres obliques deviennent des tirets, comme pour les primitives. Exemple : --heading-h1-font-size.

## Un besoin ?

Un style manque ? Les canaux Aide et demande de l'équipe Teams Canopée, B2C ou B2B, sont là pour en parler.
