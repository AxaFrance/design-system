# Link 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Link est un texte cliquable qui mène vers une autre page, un autre endroit de la page ou un document.

## Quand l'utiliser

### À utiliser pour

- Mener vers une autre page, un autre endroit de la page ou une ressource, comme un document à télécharger.
- Proposer un autre chemin quand l'utilisateur est bloqué. Exemple : « Trouver le numéro Siret » sous le champ Siret.
- Les actions « Modifier » et « En savoir plus » d'un _FormLabel. Le code rend alors le Link en `<button>`.

### À ne pas utiliser pour

- Déclencher une action, comme envoyer un formulaire : prendre Button. Les actions d'un _FormLabel sont la seule exception.
- Une navigation qui doit avoir l'apparence d'un bouton : prendre Button dans la maquette. Le code garde alors un Link, voir la rubrique Code.

## Règles selon les propriétés

### colorScheme=default

Sur un fond clair.

### colorScheme=inverse

Sur un fond foncé ou coloré, comme un pied de page bleu.

### size=medium

La taille par défaut, pour la plupart des Link.

### size=small

Un Link placé dans un composant compact, à côté d'un texte plus petit. Exemple : les actions « Modifier » et « En savoir plus » de _FormLabel.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé utilise la version mobile de son style de texte.

### showRightIcon=true

Pour un Link qui ouvre sa destination dans un nouvel onglet, avec l'icône icon/open-in-new. Une autre icône à droite : Non documenté.

### showLeftIcon=true

Non documenté.

## Exemples

- Renvoi vers la FAQ dans un texte : colorScheme=default, label « Consulter la FAQ ».
- Document qui s'ouvre dans un nouvel onglet : showRightIcon=true, label « Document d'information sur le produit d'assurance (DIPA) ».
- Liens d'un pied de page bleu : colorScheme=inverse, label « Mentions légales ».

## Interdits

- Modifier localement la couleur, la taille ou le soulignement du Link, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

Un libellé obligatoire, et une icône au plus de chaque côté.

## Rédaction

- Le libellé fait 40 caractères au plus, sauf le nom complet d'un document.
- Il commence par une majuscule, sauf quand il est dans une phrase. Le reste est en minuscules, sauf les sigles et les noms propres.
- Il n'a ni pronom personnel ni possessif, comme « je », « vous » ou « mon ».
- Il n'a pas de ponctuation finale, sauf quand il est dans un texte descriptif.

Le libellé se construit d'une de ces façons :

- Un verbe d'action et le sujet de la destination. Exemple : « Consulter la FAQ ».
- Le nom complet d'un document, puis son sigle entre parenthèses.
- Un verbe à l'infinitif seul, quand le Link mène vers la page où l'utilisateur modifie un élément. Exemple : « Modifier ». Une modification sur place passe par un Button.
- « En savoir plus » seul, quand sa place dans l'interface dit le sujet.
- Une adresse e-mail seule, dans une phrase ou sous un titre qui dit l'action.

## Comportement

- Un clic, ou la touche Entrée, ouvre la destination.
- Le Link n'a pas d'état désactivé. Quand le champ qui le contient est désactivé, il garde sa couleur et reste cliquable.

## Accessibilité

Un élément `<a>` avec un `href`, de rôle ARIA link. Pour une action d'un _FormLabel, un élément `<button>`, de rôle ARIA button.

- Le nom accessible est le libellé. Quand le libellé visible est peu explicite, comme « En savoir plus », le nom accessible le complète pour dire le sujet. Exemple : « En savoir plus sur la demande de carte grise ». La façon de le compléter : Non documenté.
- Chaque Link s'atteint avec la touche Tab, dans un ordre qui suit la lecture de la page.
- Le focus reste visible. Il n'est jamais retiré ni affaibli.
- La zone cliquable d'un Link seul mesure au moins 24 × 24 px, ou son centre est à 24 px au moins de celui de tout autre élément cliquable (WCAG 2.2). Un Link dans une phrase en est dispensé.
- Les Link qui vont ensemble, comme ceux d'un pied de page, sont regroupés dans une liste, pour que les lecteurs d'écran en annoncent le nombre.

Référence : [ARIA Authoring Practices Guide, Link Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/link/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-link--link) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-link--link).

Code source : [dossier Link sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Link).

Détail de l'implémentation : [page Link du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/01-button.md#link).

Cette fiche sur GitHub : [link.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/link/link.md).

Import, selon le thème :

```tsx
import { Link } from "@axa-fr/canopee-react/prospect";
import { Link } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Link href="/faq">Consulter la FAQ</Link>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| label | `children` |
| colorScheme=default | Sans `variant` |
| colorScheme=inverse | `variant="inverse"` |
| showLeftIcon=true et leftIcon | `leftIcon` |
| showRightIcon=true et rightIcon | `rightIcon`, ou `openInNewTab`, qui affiche open_in_new à droite et ouvre la destination dans un nouvel onglet |
| Aucun équivalent | `variant="button-primary"` et six autres variantes `button-*`, pour un lien à l'apparence d'un Button |
| Aucun équivalent | `as`, pour rendre le composant de navigation d'un routeur, comme celui de React Router |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className`. size n'a pas d'équivalent dans le code, qui n'a qu'une taille.

## Noms à ne pas employer

Lien, hyperlien, lien texte, Hyperlink, Anchor, TextLink.

Ces noms désignent Link. Le seul nom à employer est Link.

## Décisions

- **1.0.0 - 10/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Link, celui du thème prospect.
- **1.0.0 - 10/11/26.** La propriété type est retirée. Les icônes s'affichent avec showLeftIcon et showRightIcon, et se choisissent avec leftIcon et rightIcon, les noms du code.
- **1.0.0 - 10/11/26.** Le Link suit les principes d'interaction du pattern Contour : pas d'état press, un soulignement qui passe à 2 px au survol et au focus sans changement de couleur, et un anneau au focus.
- **1.0.0 - 10/11/26.** Le soulignement est un calque underline, relié à border/width/1, puis à border/width/2 au survol et au focus. Figma ne laisse pas l'épaisseur du soulignement d'un texte changer d'une variante à l'autre quand le texte est relié à une propriété.
- **1.0.0 - 10/11/26.** Le libellé garde la même graisse, semibold, dans toutes les variantes, parce que Figma ne laisse pas non plus la graisse d'un texte relié à une propriété changer d'une variante à l'autre. Il est en label/1/semibold en size=medium, et en label/2/semibold en size=small.
- **1.0.0 - 10/11/26.** Les icônes viennent de la librairie Fondations Canopée, comme tous les assets. Elles prennent la taille icon/size/small en size=medium, et icon/size/extra-small en size=small.
- **1.0.0 - 10/11/26.** La hauteur du Link suit son contenu, comme dans le code. Sans icône, il mesure l'interligne de son style de texte.
- **1.0.0 - 17/11/26.** Link a deux tailles : size=medium, la valeur par défaut, et size=small, avec un texte et des icônes plus petits, pour les actions de _FormLabel.
- **1.0.0 - 17/11/26.** Les actions « Modifier » et « En savoir plus » de _FormLabel passent par Link, rendu en `<button>` dans le code. Sans marge, elles s'alignent sur le libellé, comme le recommandent Primer, Atlassian et Polaris pour une action placée dans du texte.
- **1.0.0 - 17/11/26.** Le texte, le soulignement et l'icône du Link prennent la couleur réservée aux éléments interactifs, color/blue/600, au lieu du color/blue/700 de la marque. En colorScheme=inverse, ils restent en color/white.
- **1.0.0 - 17/11/26.** Une navigation qui doit avoir l'apparence d'un bouton passe par Button dans la maquette, et par un Link en variante `button-primary`, `button-secondary`… dans le code, pour rester un lien. MUI et Polaris font de même, avec un bouton qui accepte une adresse.

## Points ouverts

- **Graisse dans le code.** Le code met le Link en regular dans le thème client, sauf quand il ouvre un nouvel onglet, et en colorScheme=inverse dans les deux thèmes. Figma le met en semibold partout. En attendant : signaler.
- **Survol dans le code.** Le code change la couleur du Link au survol et garde un soulignement de 1 px. En attendant : rien ne change à l'usage, l'écart se corrige dans le code.
- **Focus dans le code.** L'anneau de focus est en `--blue-650` et à 3 px du Link dans le code, contre color/blue/400 et 2 px dans Figma. En attendant : rien ne change à l'usage, l'écart se corrige dans le code.
- **Fenêtre modale.** Dans l'ancienne documentation du B2C, un Link comme « En savoir plus » ouvre une fenêtre modale. Le plugin Copilot réserve Button à l'ouverture d'une fenêtre modale. Seules les actions de _FormLabel sont tranchées : un Link rendu en `<button>`. En attendant : signaler pour les autres cas.
- **Taille small dans le code.** Le code n'a qu'une taille de Link (`LinkCommon.css:8`). En attendant : signaler.
- **Icônes.** Aucune source ne dit quand utiliser l'icône de gauche, ni une autre icône que icon/open-in-new à droite. En attendant : signaler.
- **Nouvel onglet.** L'icône open_in_new du code n'a pas de texte alternatif : un lecteur d'écran n'annonce pas l'ouverture dans un nouvel onglet. En attendant : signaler.
- **Libellé peu explicite.** L'ancienne documentation propose l'attribut `title` pour le compléter, alors que `title` n'est pas lu de façon fiable. En attendant : signaler.
- **Retouches locales.** L'interdit de modifier la couleur, la taille ou le soulignement reprend la règle de Button, d'IconButton, de Divider et de Spinner, sans source propre au Link. En attendant : il s'applique.
- **Bleu d'interaction dans le code.** Le code dessine le Link dans le bleu de la marque, plus foncé que color/blue/600 (`LinkCommon.css:13`). En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
