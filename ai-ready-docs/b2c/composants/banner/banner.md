# Banner 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Banner affiche un message important qui concerne toute la page ou l'ensemble du service, avec une action facultative.

## Quand l'utiliser

### À utiliser pour

- Un message qui concerne toute la page ou l'ensemble du service, en haut de la page, juste sous le Header. Exemple : une maintenance prévue, une alerte météo, ou un dossier client à mettre à jour.

### À ne pas utiliser pour

- Un message qui concerne une partie de l'écran : prendre Alert.
- Les autres cas, comme l'erreur d'un champ ou une information qui demande une réponse, suivent la rubrique « À ne pas utiliser pour » de la fiche Alert.

## Règles selon les propriétés

### tone=information

Une information utile sur la page ou le service, sans échec à corriger. C'est la valeur par défaut.

### tone=error

Un échec, un blocage ou un danger important, qui demande une action ou une vigilance immédiate.

### open=false

La description est coupée à trois lignes, et « Voir plus » affiche le message entier. Le Banner s'affiche d'abord en open=false.

### open=true

La description est entière, et « Voir moins » la coupe de nouveau à trois lignes.

### breakpoint=0

Sur un écran de moins de 1024 px de large.

### _theme=client

Dans cette variante, le Button et la croix sont en _theme=client. Le Link n'a pas de thème et ne change pas.

## Exemples

- Dossier à mettre à jour : tone=information, title « Pensez à mettre à jour votre dossier client », description « Vos informations personnelles doivent être actualisées afin de maintenir la protection de vos données. », Button « Mettre à jour », showExpandButton=false.
- Prélèvement échoué : tone=error, title « Votre prélèvement a échoué », description « Vérifiez vos coordonnées bancaires pour éviter la suspension du contrat. », Button « Modifier mes coordonnées », showExpandButton=false.
- Alerte météo : tone=error, une icône de flocon, title « Alerte météo : chute de neige », description « De fortes chutes de neige sont en cours sur la commune d'Avignon. Évitez les déplacements et restez prudent. », Button « Nous appeler », showExpandButton=false.
- Maintenance prévue : tone=information, title « Maintenance prévue dimanche », showDescription=false, showExpandButton=false, showButton=false.

## Interdits

- Un ton qui ne correspond pas au message, comme tone=error pour une simple information.
- showExpandButton=true avec showDescription=false.
- showExpandButton=true avec une description de trois lignes ou moins.
- Modifier localement la couleur ou les marges, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system. L'icône se change par la propriété icon.

## Contenu

- Un titre, obligatoire.
- Une description, facultative.
- Une icône, obligatoire, de la librairie Figma Fondations Canopée.
- Un Button au plus.
- Une croix de fermeture, facultative : un IconButton.
- « Voir plus » ou « Voir moins » sous la description : un Link.

## Rédaction

- Le titre résume le message en une phrase courte, sans point final. Exemple : « Votre prélèvement a échoué ».
- La description dit ce qui se passe, puis ce que l'utilisateur peut faire, en une ou deux phrases.
- Le libellé du Button suit les règles de rédaction de la fiche Button.
- Le ton se comprend aussi par les mots, sans compter sur la couleur ni sur l'icône.

## Comportement

- Le Banner reste affiché jusqu'à ce que l'utilisateur le ferme avec la croix. Sans croix, il reste affiché.
- Après un clic sur la croix, le Banner disparaît.
- Le même Banner s'affiche sur chaque page du service tant que la situation dure.
- Un clic sur le Button lance l'action qu'il annonce.

## Accessibilité

Un élément `<section>`, nommé par son titre. L'icône est décorative et n'est pas annoncée.

- Le Banner n'a pas de rôle d'annonce. Il est lu à son tour dans la page, sans couper le lecteur d'écran.
- Le Banner ne prend pas le focus quand la page s'affiche.
- « Voir plus » et « Voir moins » ont `aria-expanded`, comme le prévoit l'ARIA Authoring Practices Guide pour une zone qui se déplie.
- La croix s'appelle « Fermer la bannière », comme dans la fiche IconButton.
- La touche Tab atteint « Voir plus » ou « Voir moins », puis le Button, puis la croix.
- Les textes et l'icône atteignent 9,1:1 sur le fond de tone=information, et 8,9:1 sur le fond de tone=error.
- Le Button suit l'accessibilité de la fiche Button.

Références : [Material Design, Banners](https://m2.material.io/components/banners), [SGDS, System banner](https://designsystem.tech.gov.sg/components/system-banner) et [ARIA Authoring Practices Guide, Disclosure Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-messagebar--messagebar) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-messagebar--messagebar).

Code source : [dossier MessageBar sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/MessageBar).

Détail de l'implémentation : [page MessageBar du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/06-message-feedback.md#messagebar).

Cette fiche sur GitHub : [banner.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/banner/banner.md).

Import, selon le thème :

```tsx
import { MessageBar } from "@axa-fr/canopee-react/prospect";
import { MessageBar } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus. L'icône est un fichier SVG, importé à part.

Exemple :

```tsx
import { MessageBar } from "@axa-fr/canopee-react/prospect";
import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";

<MessageBar
  variant="error"
  icon={errorIcon}
  title="Votre prélèvement a échoué"
  description="Vérifiez vos coordonnées bancaires pour éviter la suspension du contrat."
  buttonProps={{ children: "Modifier mes coordonnées", variant: "primary-inverse" }}
/>
```

Sous 1024 px, avec une description, le code range la description et le Button dans un Accordion fermé : le Button reste caché tant que l'Accordion n'est pas ouvert (`MessageBarCommon.tsx:94`, `MessageBarCommon.tsx:102`).

Le `<section>` est nommé par le titre avec `aria-labelledby` (`MessageBarCommon.tsx:108`, `MessageBarCommon.tsx:110`). Un `aria-label` ou un `aria-labelledby` passé au composant remplace ce nom (`MessageBarCommon.tsx:62`). L'icône porte `role="presentation"` (`MessageBarSummary.tsx:23`).

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Banner | `MessageBar` |
| tone | `variant` |
| tone=information | `variant="info"` |
| title | `title` |
| description | `description` |
| showDescription | Sans équivalent, `description` est omis |
| icon | `icon`, l'adresse du fichier SVG |
| showButton et le Button | `buttonProps`, aucun bouton sans lui |
| Button primary inverse | `variant: "primary-inverse"` dans `buttonProps` |
| open | `defaultDescriptionOpen`, l'état de départ en mobile, `false` par défaut (`MessageBarCommon.tsx:50`). En desktop, voir les points ouverts |
| breakpoint | Sans équivalent, le code change de rendu sous 1024 px (`MessageBarCommon.tsx:59`) |
| showExpandButton, « Voir plus » et « Voir moins » | Voir les points ouverts |
| showCloseButton et la croix | Voir les points ouverts |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`.

## Noms à ne pas employer

MessageBar, Message_Bar, bandeau, barre de message, system banner, notification bar.

Ces noms désignent Banner. Le seul nom à employer est Banner.

## Décisions

- **1.0.0 - 23/11/26.** Le composant s'appelle Banner, le nom standard du marché, comme dans Material Design. Le code l'appelle MessageBar.
- **1.0.0 - 23/11/26.** Le ton rouge s'appelle tone=error, comme `variant="error"` dans le code. L'ancien nom Figma, warning, ne correspondait pas à sa couleur.
- **1.0.0 - 23/11/26.** Le Button remplace l'ancien bouton de Figma, qui était archivé.
- **1.0.0 - 23/11/26.** Les textes par défaut sont « Title » et « Description », comme pour tout composant.
- **1.0.0 - 23/11/26.** Sur mobile, le Banner n'utilise plus d'Accordion. La description est coupée à trois lignes, et « Voir plus » ou « Voir moins » la déplie ou la replie. L'ancien composant de Figma, devenu Legacy/SecondaryAccordion, n'existait que pour le Footer et le Banner : un petit composant à usage unique, qu'un designer pouvait poser seul par erreur. Le code suivra.
- **1.0.0 - 23/11/26.** Le fond prend le palier 700 de son ton, color/azure/700 ou color/red/700, avec les textes et l'icône en blanc, pour que le Banner ressorte davantage que le reste de l'interface. Le code suivra.
- **1.0.0 - 24/11/26.** Le Button passe en inverse, pour rester lisible sur le fond 700.
- **1.0.0 - 24/11/26.** « Voir plus » et « Voir moins » passent par un Link small, rendu en `<button>` dans le code, comme les actions du _FormLabel. Sans marge, le Link s'aligne sur la description.
- **1.0.0 - 24/11/26.** En mobile, le titre est dans un cadre heading, avec une marge droite de 24 px, pour ne pas passer sous la croix. En desktop, heading garde une marge de 0, et n'existe que pour que desktop et mobile aient les mêmes calques.
- **1.0.0 - 24/11/26.** Le Button reste affiché en open=false, pour que l'action reste visible même quand la description est coupée.
- **1.0.0 - 24/11/26.** Le Banner a une croix de fermeture facultative, affichée par défaut, comme le prévoit Material Design.
- **1.0.0 - 24/11/26.** Figma ne peut pas savoir si la description dépasse trois lignes. showExpandButton affiche « Voir plus » et « Voir moins », et le designer le désactive quand la description est courte. Le code, lui, le saura seul.
- **1.0.0 - 24/11/26.** Toutes les variantes ont les mêmes calques. « Voir plus » et « Voir moins » restent masqués en breakpoint=1024, où showExpandButton n'a pas d'effet.
- **1.0.0 - 24/11/26.** Le Banner a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024. La propriété open n'a d'effet qu'en breakpoint=0. Elle vaut open=true par défaut dans Figma, car le desktop n'existe qu'ouvert.
- **1.0.0 - 25/11/26.** L'icône se choisit selon le message, dans tous les tons, comme le code, où `icon` est obligatoire (`MessageBarCommon.tsx:24`). La propriété icon a une icône neutre par défaut, icon/account-balance, comme Button et Link.
- **1.0.0 - 25/11/26.** Le contenu, le Button et la croix sont regroupés. La croix reste en haut à droite de ce groupe, près du message, et non au bord de l'écran.
- **1.0.0 - 27/11/26.** Le Banner a une propriété _theme, comme le DropdownMenu, car son Button change beaucoup d'un thème à l'autre. Dans le code aussi, seuls les composants qu'il contient changent d'un thème à l'autre, comme le Button (`MessageBarLF.tsx:3`). Le Button, le Link et la croix restent exposés dans le panneau du Banner.
- **1.0.0 - 25/11/26.** En mobile, la zone cliquable de la croix, 40 px, peut passer sur la fin du titre. Ce n'est pas une erreur : seuls l'icône et le rond du hover comptent, et ils ne touchent pas le texte. La croix est placée sous le texte, dans l'ordre des calques, pour que le titre reste lisible au hover. Le code fera de même.
- **1.0.0 - 25/11/26.** En desktop, le groupe du contenu a une marge droite de 48 px, pour que le Button s'arrête avant la croix.
- **1.0.0 - 25/11/26.** Le Banner n'a que deux tons. tone=error couvre aussi un danger, comme une alerte météo, que l'Alert range dans son ton d'avertissement.
- **1.0.0 - 25/11/26.** En desktop, le contenu s'aligne en haut et le Button reste centré verticalement, comme dans le code (`MessageBarAll.css:102`, `MessageBarAll.css:137`).
- **1.0.0 - 25/11/26.** « Voir plus » et « Voir moins » existent aussi en desktop, avec des variantes open=false en breakpoint=1024 : le Banner a le même comportement sur tous les écrans. open garde open=true par défaut, pour montrer le message entier. Cette décision remplace celles du 24/11/26, qui masquaient « Voir plus » en desktop et limitaient open au mobile.

## Points ouverts

- **Rendu dans le code.** Le code a des fonds clairs (`MessageBarAll.css:11`, `MessageBarAll.css:17`), avec un titre de la couleur du ton (`MessageBarAll.css:48`). Ses couleurs viennent de l'ancienne palette. En mobile, il replie la description et le Button dans un `AccordionCore` (`MessageBarCommon.tsx:88`, `MessageBarCommon.tsx:102`). Figma suit les décisions. En attendant : Figma fait foi, et signaler l'écart.
- **Marges latérales.** En desktop, les marges de 120 px, déjà dans le code (`MessageBarAll.css:97`), n'ont pas de design token. Le contenu du Banner devrait s'aligner sur celui de la page à chaque breakpoint, mais Canopée n'a encore ni grille, ni marge de page, ni largeur de conteneur en design token. En attendant : 120 px.
- **Titre.** Le titre est un paragraphe, et non un titre HTML (`MessageBarSummary.tsx:26`). En attendant : signaler.
- **Région en mobile.** Le plugin Copilot annonce une `region` en mobile dans tous les cas (`06-message-feedback.md:144`). Le code ne la rend qu'avec une description (`MessageBarCommon.tsx:88`). En attendant : le code fait foi.
- **Plusieurs Banner.** Rien ne dit quoi faire quand deux messages concernent toute la page. En attendant : signaler.
- **Banner affiché après le chargement.** Un Banner qui apparaît pendant que l'utilisateur est sur la page n'est pas annoncé. En attendant : signaler.
- **Fin du message.** Ce que devient le Banner quand la situation est résolue n'est pas défini. En attendant : signaler.
- **Fermeture.** Ce que devient un Banner fermé à la visite suivante, et où va le focus après la fermeture, ne sont pas définis. En attendant : signaler.
- **Croix et ton.** Rien ne dit s'il faut masquer la croix en tone=error, quand le problème doit être réglé avant de continuer. En attendant : signaler.
- **Position de la croix.** La croix est en haut à droite du contenu en desktop, et à 4 px du haut et de la droite du Banner en mobile. Figma ne relie cette position à aucun design token. En attendant : ces positions.
- **Croix dans le code.** La croix n'existe pas encore dans le code. En attendant : signaler.
- **« Voir plus » dans le code.** « Voir plus » et « Voir moins » n'existent pas encore dans le code. En desktop, le code affiche toujours la description entière, sans la couper (`MessageBarCommon.tsx:88`). En attendant : signaler.
- **Hover de la croix.** Au hover puis au press, la croix prend un rond color/blue/800, puis color/blue/900, des nuances prévues pour un fond color/blue/700. Sur le fond color/red/700 de tone=error, ce rond bleu forme une tache. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
