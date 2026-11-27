# Modal 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

La Modal affiche un contenu libre dans une fenêtre qui s'ouvre par-dessus l'écran. Un header porte le titre et la croix, un slot reçoit le contenu, et jusqu'à trois Button portent les actions.

## Quand l'utiliser

### À utiliser pour

- Un contenu qui demande l'attention de l'utilisateur avant qu'il revienne à l'écran, sans changer d'écran. Exemple : le détail d'une garantie, ou un court formulaire pour modifier une adresse.

### À ne pas utiliser pour

- Une confirmation courte, avec une question et deux réponses, comme « Supprimer ce document ? » : prendre Dialog.
- Un message qui ne bloque pas l'utilisateur : prendre Alert.
- Un contenu qui reste dans la page, que l'utilisateur affiche ou masque : prendre Accordion.
- Un parcours en plusieurs étapes : prendre une page, avec Stepper.

## Règles selon les propriétés

### scrollable=true

Le contenu dépasse la hauteur de la fenêtre. Le slot défile, une barre de défilement s'affiche, et un trait sépare le contenu des Button. Le header et les Button restent visibles.

### breakpoint=0

Sur un écran de moins de 1024 px de large. La fenêtre prend toute la largeur de l'écran et se pose en bas. Les Button restent sur une ligne et se partagent la largeur, comme dans le code.

### showTertiaryButton=true

Une troisième action, moins importante que les deux autres, placée à leur gauche.

### _theme=client

Dans cette variante, les Button sont en _theme=client. La croix reste ronde, comme dans le thème prospect, et la fenêtre garde l'arrondi et les marges du thème prospect.

## Exemples

- Détail d'une garantie : title « Assistance 0 km », subtitle « Incluse dans votre formule », une icône de Fondations, un texte dans children, showSecondaryButton=false, Button primary « Fermer ».
- Modification d'une adresse : title « Modifier votre adresse », showSubtitle=false, showIcon=false, un TextInput dans children, Button secondary « Annuler » et Button primary « Enregistrer ».
- Conditions à lire : title « Conditions générales », showSubtitle=false, showIcon=false, scrollable=true, le texte des conditions dans children, showSecondaryButton=false, Button primary « Accepter les conditions ».

## Interdits

- Une Modal ouverte par-dessus une autre Modal.
- Des Button posés dans children pour remplacer ceux du bas.
- Changer la hierarchy, le colorScheme ou la size des Button de la Modal.
- Modifier localement la taille, l'espacement ou les couleurs de la Modal, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un titre, obligatoire, et un sous-titre facultatif.
- Une icône facultative, un asset de la librairie Figma Fondations Canopée, posée dans un rond.
- Une croix, toujours présente, un IconButton.
- Un slot children, pour n'importe quel contenu : un texte, des champs, une liste.
- Trois Button au plus, du moins important au plus important de gauche à droite : tertiary, secondary, puis primary.

## Rédaction

- Le titre dit le sujet ou l'action en quelques mots, sans point final. Exemple : « Modifier votre adresse ».
- Les libellés des Button suivent la rubrique Rédaction de la fiche Button, qui a une règle pour les fenêtres modales.

## Comportement

- La Modal s'ouvre après une action de l'utilisateur, comme un clic sur un Button.
- Elle assombrit l'écran et bloque le reste de l'interface jusqu'à sa fermeture.
- La croix, la touche Échap et un clic hors de la fenêtre la ferment.
- Un Button primary ou secondary ferme la Modal une fois son action faite.
- L'effet du Button tertiary, et ce que fait la Modal quand l'action du Button primary charge ou échoue : Non documenté.
- Un clic hors de la fenêtre pendant une saisie dans un formulaire : Non documenté.

## Accessibilité

Un élément `<dialog>` natif, ouvert avec `showModal()`, qui porte `aria-modal` et prend le titre pour nom accessible. Le titre est un titre de niveau 2.

- À l'ouverture, le focus va sur le premier élément qu'il peut atteindre, la croix.
- Tant que la Modal est ouverte, le focus et la touche Tab restent dans la fenêtre, et le reste de l'écran n'est ni atteignable ni lu.
- La croix a un nom accessible, « Fermer la boite de dialogue » par défaut.
- À la fermeture, le focus revient sur l'élément qui l'avait avant l'ouverture, en général le Button qui a ouvert la Modal.
- Le Button qui ouvre la Modal porte `aria-haspopup="dialog"`.
- L'icône est décorative et n'est pas annoncée.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-modal--docs) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-modal--docs).

Code source : [dossier Modal sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Modal).

Détail de l'implémentation : [page Modal du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/07-modal.md#modal-haut-niveau).

Cette fiche sur GitHub : [modal.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/modal/modal.md).

Import, selon le thème :

```tsx
import { Modal, Button } from "@axa-fr/canopee-react/prospect";
import { Modal, Button } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
const modalRef = useRef<HTMLDialogElement>(null);

<Button aria-haspopup="dialog" onClick={() => modalRef.current?.showModal()}>
  Modifier l'adresse
</Button>

<Modal
  ref={modalRef}
  title="Modifier votre adresse"
  onClose={() => modalRef.current?.close()}
  secondaryButtonProps={{
    children: "Annuler",
    onClick: () => modalRef.current?.close(),
  }}
  primaryButtonProps={{
    children: "Enregistrer",
    onClick: () => {
      enregistrerAdresse();
      modalRef.current?.close();
    },
  }}
>
  <FormulaireAdresse />
</Modal>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Modal | `Modal` |
| title | `title`, qui sert aussi de nom accessible |
| subtitle, affiché par showSubtitle | `headingProps.firstSubtitle` |
| icon, affichée par showIcon | `headingProps.icon`, avec `headingProps.iconProps` |
| children | `children` |
| Les Button primary, secondary et tertiary | `primaryButtonProps`, `secondaryButtonProps` et `tertiaryButtonProps` |
| La croix, un IconButton | `ClickIcon`, nommé par `closeButtonAriaLabel` |
| scrollable | Sans équivalent, le code détecte que le contenu défile |
| breakpoint | Sans équivalent, une media query change l'affichage à partir de 1024 px |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. La Modal s'ouvre avec `showModal()` et se ferme avec `close()`, sur la référence de l'élément `<dialog>`, jamais avec `open` ni en la retirant de la page. La croix et un clic hors de la fenêtre appellent `onClose` sans fermer la Modal : `onClose` doit donc appeler `close()`. Il est aussi appelé à chaque fermeture, par Échap ou par `close()`. `headingProps.level` change le niveau du titre, 2 par défaut. Sans équivalent dans Figma : `ModalCore`, `ModalCoreHeader`, `ModalCoreBody` et `ModalCoreFooter`, qui composent une fenêtre sur mesure, et `headingProps.tag`.

## Noms à ne pas employer

Modale, popin, pop-up, boîte de dialogue.

Ces noms désignent Modal. Le seul nom à employer est Modal.

## Décisions

- **1.0.0 - 24/11/26.** Le titre, le sous-titre et l'icône appartiennent à la Modal. Ils ne viennent plus du template Heading, car un composant ne contient pas de template. Dans le code, le header affiche un Heading de niveau 2.
- **1.0.0 - 24/11/26.** Le contenu passe par un slot children, à la place de l'ancien composant Slot, supprimé. La description fixe de l'ancienne Modal est retirée : le texte va dans le slot.
- **1.0.0 - 24/11/26.** La croix est un IconButton tertiary avec l'icône icon/cross, et les actions sont des Button. Ils remplacent les anciens ClickIcon, ButtonPrimary et ButtonSecondary de Figma, archivés.
- **1.0.0 - 24/11/26.** Les trois Button suivent le code : tertiary, secondary et primary, chacun affiché par son booléen, à la grande taille que la fiche Button prévoit pour une Modal. Le sous-titre et l'icône sont affichés par défaut, et le Button tertiary masqué.
- **1.0.0 - 24/11/26.** L'icône est un asset de Fondations Canopée, posé dans un rond color/gray/050. L'ancien composant Icon de Figma, qui l'entourait, n'existe plus.
- **1.0.0 - 24/11/26.** scrollable remplace l'ancienne propriété _scrollable, qui ne servait qu'au prototype. En scrollable=true, le body a une hauteur fixe qui défile dans un prototype, avec une barre native/Scrollbar et un trait au-dessus des Button. Les marges autour des Button se resserrent comme dans le code.
- **1.0.0 - 24/11/26.** Dans Figma, la fenêtre a une largeur d'exemple de 720 px en desktop. Dans une maquette, la hauteur suit le contenu posé dans le slot.
- **1.0.0 - 24/11/26.** En mobile, les Button restent sur une ligne et se partagent la largeur, comme dans le code, alors qu'ailleurs ils s'empilent en colonne.
- **1.0.0 - 25/11/26.** Le titre passe en color/gray/900 et l'icône en color/gray/800, car color/blue/700 est réservé aux éléments interactifs.
- **1.0.0 - 27/11/26.** La Modal a une propriété _theme, car ses Button changent de forme et de typographie d'un thème à l'autre. La croix reste ronde dans les deux thèmes, comme dans le code (`ClickIconCommon.css:7`). Le designer règle les Button dans le panneau de la Modal, où ils sont exposés. La croix y est exposée aussi, mais sa forme ronde ne change pas d'un thème à l'autre.
- **1.0.0 - 27/11/26.** Le voile est un calque overlay en color/gray/800, à 48 % d'opacité, comme le voile du thème client dans le code (`ModalLF.css:9`). L'opacité est portée par le calque, pour que les instances la gardent.
- **1.0.0 - 27/11/26.** Le slot children a un auto layout vertical et suit la hauteur de son contenu, avec 100 px au minimum pour qu'un slot vide reste visible.
- **1.0.0 - 27/11/26.** Le titre et la croix sont centrés verticalement dans le header, pour que le titre seul, sans icône ni subtitle, reste aligné sur la croix.

## Points ouverts

- **Thème client dans le code.** Le code du thème client a un arrondi de 8 px (`ModalLF.css:10`) et des marges plus serrées (`ModalLF.css:11`), alors que Figma garde ceux du thème prospect. En attendant : signaler.
- **Trait en desktop.** Le code ne pose le trait au-dessus des Button que sur mobile (`ModalApollo.css:34`), alors que Figma l'affiche aussi en desktop. En attendant : signaler.
- **Croix dans le code.** Le code dessine la croix avec un ClickIcon à fond bleu clair (`ModalCoreHeaderCommon.tsx:30`), alors que Figma prend un IconButton tertiary, sans fond. En attendant : signaler.
- **Corps de la fenêtre dans le code.** Le code place le contenu dans un élément `<main>` (`ModalCoreBody.tsx:15`). Une page qui a déjà son `<main>` en a alors deux. En attendant : signaler.
- **Focus après la fermeture.** Si l'élément qui avait le focus avant l'ouverture a disparu, la place du focus n'est pas définie. En attendant : signaler.
- **Largeur en desktop.** Le code garde une largeur de 100 % (`ModalCommon.css:7`), sans largeur maximale propre en desktop (`ModalCommon.css:67`), alors que Figma montre 720 px. La largeur cible n'est pas tranchée. En attendant : signaler.
- **Attribut title dans le code.** Le code pose aussi `title` en attribut HTML sur le `<dialog>` (`ModalCore.tsx:18`), ce qui peut afficher une infobulle au survol de la fenêtre. En attendant : signaler.
- **Action en cours ou en échec.** L'effet du Button tertiary, et ce que fait la Modal quand l'action du Button primary charge ou échoue, ne sont pas définis. En attendant : signaler.
- **Clic hors de la fenêtre pendant une saisie.** Fermer la Modal sur un clic hors de la fenêtre peut faire perdre une saisie en cours. En attendant : signaler.
- **Couleurs du titre et de l'icône dans le code.** Le Heading du code met un titre de niveau 2 en `--blue-1000` (`HeadingApollo.css:19`), et son icône aussi (`IconCommon.css:64`), alors que Figma les met en color/gray/900 et color/gray/800. En attendant : signaler.
- **Dialog sur une Modal.** Aucune règle de Canopée ne dit si un Dialog peut s'ouvrir par-dessus une Modal, par exemple pour confirmer l'abandon d'une saisie. En attendant : signaler.
- **Voile du thème prospect dans le code.** Le code du thème prospect a un voile bleu à 40 % (`ModalApollo.css:8`), alors que Figma garde le voile gris des deux thèmes. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
