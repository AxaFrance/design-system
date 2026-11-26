# Accordion 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

L'Accordion affiche un en-tête qui montre ou masque la section de contenu qui lui est associée.

## Quand l'utiliser

### À utiliser pour

- Un contenu secondaire, que l'utilisateur ouvre seulement s'il en a besoin. Exemple : le détail des garanties d'un contrat, les mentions d'une offre.
- Une liste de questions et de réponses, une question par Accordion.
- Une page longue, que l'utilisateur parcourt plus vite quand seuls les titres de ses sections sont visibles.

### À ne pas utiliser pour

- Un contenu nécessaire pour avancer dans le parcours : l'afficher directement dans la page.
- Passer d'une vue à une autre de même niveau : prendre Tabs.
- Un message important qui concerne une partie de l'écran : prendre Alert.
- Un message qui concerne toute la page ou l'ensemble du service : prendre Banner.
- Un contenu qui demande une réponse avant de continuer : prendre Dialog pour une question courte à deux réponses, Modal sinon.
- Le résumé d'un contrat, avec un sous-titre, un Tag et des montants : Non documenté, voir les points ouverts.

## Règles selon les propriétés

### open=false

L'Accordion s'affiche d'abord fermé. Seul l'en-tête est visible.

### open=true

Le contenu s'affiche sous l'en-tête. À réserver à un Accordion que l'utilisateur vient d'ouvrir, ou à une page qui s'ouvre sur une réponse précise.

### bordered=true

L'Accordion a une bordure. C'est la valeur par défaut.

### bordered=false

Les cas où l'Accordion perd sa bordure ne sont pas encore définis. Voir les points ouverts.

### colorScheme=default

Sur un fond clair, comme color/white. C'est la valeur par défaut.

### colorScheme=inverse

Sur un fond foncé, comme color/blue/700.

### breakpoint=0

Sur un écran de moins de 1024 px de large.

## Exemples

- Garanties d'un contrat : title « Garanties incluses », le détail des garanties dans children.
- Question fréquente : showIcon=false, title « Comment déclarer un sinistre ? », la réponse dans children.
- Bloc sur fond foncé : colorScheme=inverse, title « Bon à savoir », un paragraphe dans children.

## Interdits

- colorScheme=inverse sur un fond clair, ou colorScheme=default sur un fond foncé.
- Un bouton, un lien ou un champ dans l'en-tête. Tout l'en-tête ouvre et ferme l'Accordion, un autre élément cliquable dans l'en-tête serait inaccessible.
- Un Accordion dans le contenu d'un autre Accordion.
- Désactiver l'IconButton de l'en-tête, le mettre en chargement, changer son niveau, sa taille ou sa flèche. L'Accordion règle lui-même son état.
- Modifier localement la couleur ou les marges, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system. L'icône de gauche se change par la propriété icon de l'Accordion, et le contenu par le slot children.

## Contenu

- Un titre, obligatoire, sur une seule ligne si possible.
- Une icône, facultative, de la librairie Figma Fondations Canopée.
- Un IconButton à droite de l'en-tête, toujours présent, qui montre si l'Accordion est ouvert ou fermé.
- Un contenu libre dans le slot children : du texte, une liste, des composants.

## Rédaction

- Le titre dit ce que contient l'Accordion, en quelques mots, sans point final. Exemple : « Garanties incluses ».
- Pour une question fréquente, le titre est la question, avec son point d'interrogation. Exemple : « Comment déclarer un sinistre ? ».
- Le titre ne dit pas « Cliquez ici » ni « Voir plus ». L'IconButton montre déjà que l'Accordion s'ouvre.

## Comportement

- Un clic n'importe où sur l'en-tête ouvre ou ferme l'Accordion.
- Au survol, le fond de tout l'Accordion change. Il ne change pas de nouveau à l'appui.
- Au focus, tout l'Accordion garde le fond du survol et prend le contour de focus, même en bordered=false.
- L'IconButton de l'en-tête ne change pas pendant le survol et le focus.
- Ouvrir un Accordion ne ferme pas les autres. Chacun s'ouvre et se ferme seul.
- L'Accordion reste dans l'état où l'utilisateur l'a laissé tant qu'il reste sur la page.

## Accessibilité

Un élément `<details>`, dont l'en-tête est un `<summary>`. Le navigateur annonce si l'Accordion est ouvert ou fermé, sans attribut ARIA à ajouter.

- Le nom accessible est le titre.
- L'icône et la flèche sont décoratives et ne sont pas annoncées.
- La flèche n'est pas un bouton à part. L'en-tête est le seul élément qui prend le focus, et la touche Tab l'atteint en une fois.
- Entrée ou Espace ouvre et ferme l'Accordion.
- La zone cliquable est tout l'en-tête.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte.
- Le titre atteint 15:1 sur color/white en colorScheme=default.
- En colorScheme=inverse, le titre et l'icône en blanc atteignent le même ratio sur color/blue/700.
- La bordure du focus atteint 6,9:1 sur color/white. En colorScheme=inverse, voir les points ouverts.

Références : [ARIA Authoring Practices Guide, Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/), [ARIA Authoring Practices Guide, Accordion Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/accordion/), [Material Design, Expansion panels](https://m1.material.io/components/expansion-panels.html) et [Carbon, Accordion](https://carbondesignsystem.com/components/accordion/usage/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-accordioncontextual--accordioncontextual) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-accordioncontextual--accordioncontextual).

Code source : [dossier AccordionContextual sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/AccordionContextual).

Détail de l'implémentation : [page AccordionContextual du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/02-accordion.md#accordioncontextual).

Cette fiche sur GitHub : [accordion.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/accordion/accordion.md).

Le code a aussi un composant `Accordion`, qui est un résumé de contrat et non cet Accordion (`prospect.ts:7`). Pour cet Accordion, il faut importer `AccordionContextual`.

Import, selon le thème :

```tsx
import { AccordionContextual } from "@axa-fr/canopee-react/prospect";
import { AccordionContextual } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus. L'icône est un fichier SVG, importé à part.

Exemple :

```tsx
import { AccordionContextual } from "@axa-fr/canopee-react/prospect";
import bankIcon from "@material-symbols/svg-700/rounded/account_balance-fill.svg";

<AccordionContextual icon={bankIcon} title="Garanties incluses">
  <p>Vol, incendie et dégâts des eaux sont couverts toute l'année.</p>
</AccordionContextual>
```

Un `onClick` passé au composant bloque l'ouverture native de l'Accordion (`AccordionCoreCommon.tsx:42`, `AccordionCoreCommon.tsx:43`). Il faut alors piloter `open` soi-même.

Le composant fixe `showArrowAsClickIcon={false}`, mais une prop passée par le dev l'écrase (`AccordionContextualCommon.tsx:49`, `AccordionContextualCommon.tsx:65`).

L'Accordion est un `<details>` (`AccordionCoreCommon.tsx:57`), dont l'en-tête est un `<summary>` qui prend le focus (`AccordionCoreCommon.tsx:64`, `AccordionCoreCommon.tsx:66`). L'icône et la flèche portent `role="presentation"` (`AccordionContextualCommon.tsx:55`, `AccordionCoreCommon.tsx:82`). Le titre est un paragraphe (`AccordionContextualCommon.tsx:62`).

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Accordion | `AccordionContextual` |
| title | `title` |
| icon | `icon`, l'adresse du fichier SVG |
| showIcon | Sans équivalent, `icon` est omis (`AccordionContextualCommon.tsx:53`) |
| children | `children` |
| open | `open`, l'attribut du `<details>` |
| colorScheme=default | `variant="info"`, la valeur par défaut (`AccordionContextualCommon.tsx:34`) |
| colorScheme=inverse | `variant="reverse"` |
| Sans équivalent | `variant="warning"`, voir les points ouverts |
| bordered | Sans équivalent, voir les points ouverts |
| state | Sans équivalent, voir les points ouverts |
| IconButton de l'en-tête | Une icône dans le `<summary>`, sans fond de bouton (`AccordionContextualCommon.tsx:49`) |
| disabled, loading, hierarchy et size de l'IconButton | Sans équivalent |
| Sans équivalent | `onClick`, `summaryProps`, `className` |
| breakpoint | Sans équivalent, le code change la taille du titre en client à partir de 1024 px (`AccordionContextualLF.css:6`) |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`.

## Noms à ne pas employer

AccordionContextual, AccordionCore, accordéon, accordéon contextuel, expansion panel, collapse, disclosure, dépliant.

Ces noms désignent Accordion. Le seul nom à employer est Accordion.

## Décisions

- **1.0.0 - 25/11/26.** Le composant s'appelle Accordion, le nom standard du marché, comme dans Carbon. Le code l'appelle AccordionContextual.
- **1.0.0 - 25/11/26.** L'Accordion est reconstruit de zéro, d'après la maquette de référence posée sur la page Structure du fichier Figma : une icône, un titre et un IconButton. Les anciens composants de Figma sont rangés dans la page Legacy.
- **1.0.0 - 25/11/26.** Le titre est en color/blue/700, comme le titre bleu de `variant="info"` dans le code (`AccordionContextualApollo.css:9`, `AccordionContextualLF.css:12`).
- **1.0.0 - 25/11/26.** La bordure passe par la variante bordered, et non par un booléen. Une bordure change le rendu du composant, elle n'ajoute pas un élément. bordered=true est la valeur par défaut, comme dans la maquette de référence. Le code suivra.
- **1.0.0 - 26/11/26.** L'Accordion a une propriété state et suit le pattern Fond, comme FormCard. Son fond passe en color/gray/100 au hover et au focus. Le focus prend tout l'Accordion, parce que c'est l'en-tête entier qui reçoit le focus dans le code (`AccordionCoreCommon.tsx:64`, `AccordionCoreCommon.tsx:66`).
- **1.0.0 - 26/11/26.** L'IconButton de l'en-tête ne change dans aucun état, comme le Radio d'une FormCard. Quand le parent est cliquable en entier, c'est lui qui réagit.
- **1.0.0 - 26/11/26.** L'Accordion n'a pas de press, comme toute surface d'après les principes d'interaction. Le code ne dessine pas de press non plus.
- **1.0.0 - 26/11/26.** En colorScheme=inverse, le fond passe en color/blue/800 au hover et au focus, comme Button et IconButton en inverse. Un fond color/gray/100 rendrait le titre blanc illisible.
- **1.0.0 - 25/11/26.** En colorScheme=inverse, le focus garde color/blue/400, comme Button, IconButton et Link.
- **1.0.0 - 25/11/26.** Dans Figma, la flèche est un IconButton tertiary small, comme dans la maquette de référence. Dans le code, elle reste une icône décorative du `<summary>`, avec l'aspect de l'IconButton. Le code suivra le rendu, pas l'élément, pour ne pas placer un bouton dans l'en-tête.
- **1.0.0 - 25/11/26.** L'en-tête a des marges latérales de 24 px en desktop et de 16 px en mobile, et le contenu ouvert garde les mêmes marges. Le code suivra.
- **1.0.0 - 25/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Accordion, qui n'a pas de propriété _theme. L'IconButton est exposé dans le panneau de l'Accordion : le designer y règle son _theme.
- **1.0.0 - 25/11/26.** Le contenu passe par le slot children, comme dans le code. Figma impose qu'un slot soit placé directement dans le composant, et la bordure est donc portée par le composant lui-même, sans calque container.
- **1.0.0 - 25/11/26.** Le texte par défaut est « Title », comme pour tout composant.
- **1.0.0 - 26/11/26.** L'Accordion n'a pas de propriété tone. La valeur warning de l'ancien composant de Figma servait surtout au Banner, qui n'en utilise plus depuis le 23/11.
- **1.0.0 - 26/11/26.** L'en-tête ouvert n'a pas de trait de séparation avec le contenu, comme dans le code (`AccordionContextualCommon.css:40`, `AccordionContextualCommon.css:41`).
- **1.0.0 - 26/11/26.** L'en-tête entier est un contrôle : son titre, son icône et son IconButton gardent color/blue/700. La règle des couleurs le prévoit pour un composant cliquable en entier qui n'est qu'un contrôle, comme un _MenuItem.

## Points ouverts

- **Rendu dans le code.** Le code a des marges latérales de 12 px (`AccordionContextualCommon.css:6`), un contenu ouvert à 16 px de marge (`AccordionContextualCommon.css:46`), et ses couleurs viennent de l'ancienne palette. Figma suit les décisions. En attendant : Figma fait foi, et signaler l'écart.
- **Composant Accordion du code.** Le code a aussi un composant `Accordion`, le résumé de contrat (`prospect.ts:7`, `client.ts:7`), que le plugin Copilot appelle aussi Accordion (`02-accordion.md:7`). Ce n'est pas cet Accordion. En attendant : importer `AccordionContextual`, et signaler.
- **Bordure dans le code.** `AccordionContextual` n'a pas de bordure. Seul le composant `Accordion` du code en a une, avec `isPlain` (`AccordionCoreCommon.css:22`). En attendant : signaler.
- **Hover et focus dans le code.** Le code ne dessine ni le fond du hover et du press, ni la bordure du focus. Le focus est celui du navigateur. En attendant : Figma fait foi, et signaler.
- **Focus en inverse.** La bordure du focus color/blue/400 atteint environ 2,2:1 sur color/blue/700. Le WCAG demande 3:1 pour un indicateur de focus. Button, IconButton et Link ont le même écart. En attendant : color/blue/400, et signaler.
- **Titre.** Le titre est un paragraphe, et non un titre HTML, alors que l'ARIA Authoring Practices Guide place chaque en-tête de son motif Accordion dans un titre (`AccordionContextualCommon.tsx:62`). En attendant : signaler.
- **bordered=false.** Rien ne dit quand retirer la bordure. En attendant : bordered=true.
- **variant="warning".** Le code a une valeur warning, sans équivalent dans Figma. En attendant : un message important prend Alert, et signaler tout usage de `variant="warning"`.
- **Résumé de contrat.** Le composant `Accordion` du code, avec un sous-titre, un Tag, une date et des montants, n'a pas encore d'équivalent IA-ready dans Figma. En attendant : signaler.
- **Plusieurs Accordion.** L'écart entre des Accordion empilés n'est pas défini, ni le cas où un seul doit rester ouvert à la fois. En attendant : pour n'en garder qu'un ouvert, le code peut donner le même attribut `name` à leurs `<details>` (`AccordionCoreCommon.tsx:22`, `AccordionCoreCommon.tsx:62`), et signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
