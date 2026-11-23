# Alert 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

L'Alert affiche un message court et important, sans interrompre ce que fait l'utilisateur.

## Quand l'utiliser

### À utiliser pour

- Un message qui concerne une partie de l'écran, posé à côté d'elle. Exemple : une erreur de paiement au-dessus du formulaire de carte bancaire.
- Le résultat d'une action, quand il doit rester visible. Exemple : la confirmation d'une demande envoyée.
- Plusieurs messages du même endroit, affichés un à la fois, avec showPagination=true.

### À ne pas utiliser pour

- Un message qui concerne toute la page ou tout le service, comme une maintenance prévue : prendre Banner.
- L'erreur d'un seul champ de formulaire : prendre le _FormHelperText du champ, en tone=error.
- Une confirmation qui disparaît d'elle-même après quelques secondes : Non documenté.
- Une information qui demande une réponse avant de continuer : prendre Modal.

## Règles selon les propriétés

### tone=neutral

Une information générale, sans enjeu particulier.

### tone=information

Une information utile pour la suite du parcours. C'est la valeur par défaut.

### tone=success

Une action qui a réussi.

### tone=warning

Un risque ou une conséquence à connaître avant d'agir.

### tone=error

Un échec, que l'utilisateur doit corriger pour continuer.

### showPagination=true

Plusieurs messages au même endroit. L'Alert en affiche un à la fois, et la pagination passe de l'un à l'autre. Chaque message garde son propre ton, son titre, sa description et son lien.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les textes utilisent leur taille mobile.

## Exemples

- Paiement refusé : tone=error, title « Paiement refusé », description « Votre carte a été refusée. Vérifiez sa date d'expiration. », lien « Modifier la carte ».
- Demande envoyée : tone=success, title « Demande envoyée », description « Vous recevrez une réponse sous 48 heures. », sans lien.
- Document à fournir : tone=warning, title « Justificatif manquant », description « Ajoutez votre justificatif de domicile avant le 15 décembre. », lien « Ajouter le document ».
- Nouvelle attestation : tone=information, title « Nouvelle attestation », description « Votre attestation 2027 est disponible. », lien « Télécharger l'attestation ».
- Horaires du service client : tone=neutral, title « Horaires », description « Nos conseillers vous répondent du lundi au vendredi, de 9 h à 18 h. », sans lien.
- Trois messages sur un contrat : showPagination=true, compteur « Page 1 sur 3 », premier message en tone=error.

## Interdits

- showPagination=true avec un seul message.
- showPagination=true avec showActions=false : la pagination disparaît avec le pied de l'Alert. Voir les points ouverts.
- Un Button à la place du lien, même si le code l'accepte. Voir les points ouverts.
- Un ton qui ne correspond pas au message, comme tone=success pour annoncer une erreur.
- Modifier localement la couleur, l'icône ou l'arrondi, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Une description, obligatoire.
- Un titre, facultatif, sur une ligne de préférence.
- Un lien au plus, qui mène vers l'action à faire ou vers plus de détails.
- Le lien est un Link, à sa taille et à ses couleurs par défaut. Il n'affiche son icône de droite que s'il ouvre un nouvel onglet, comme le prévoit la fiche Link.
- L'icône vient du ton. Le designer ne la choisit pas.
- Avec showPagination=true, la pagination s'affiche à gauche du lien. Une Alert avec pagination et sans lien : Non documenté (voir les points ouverts).

## Rédaction

- Le titre résume le message en quelques mots, sans point final. Exemple : « Paiement refusé ».
- La description explique ce qui se passe, puis ce que l'utilisateur peut faire, en une ou deux phrases.
- Le libellé du lien suit les règles de rédaction de la fiche Link.
- Le ton se comprend aussi par les mots, sans compter sur la couleur ni sur l'icône.

## Comportement

- L'Alert reste affichée tant que la situation dure. Elle n'a pas de bouton de fermeture, et ne disparaît jamais d'elle-même, comme le recommande l'ARIA Authoring Practices Guide.
- Avec showPagination=true, les flèches affichent le message précédent ou suivant. La pagination suit les règles de la fiche Pagination, avec un message par page.
- Avec showPagination=true, la pagination et le lien restent sur la même ligne en desktop comme en mobile. Quand la place manque, le lien passe sous la pagination.
- Un clic sur le lien mène vers l'action ou la page qu'il annonce.
- L'ordre des messages quand il y en a plusieurs, et ce que devient un message résolu : Non documenté.

## Accessibilité

Un élément `<section>`. Il porte `role="alert"` en tone=error et en tone=warning, et `role="status"` dans les autres tons. Le titre est un titre HTML, `<h4>` par défaut. L'icône est décorative et n'est pas annoncée. Avec showPagination=true, la pagination suit l'accessibilité de la fiche Pagination.

- L'Alert ne prend pas le focus quand elle apparaît. L'utilisateur continue ce qu'il faisait.
- En tone=error ou tone=warning, l'Alert est annoncée dès qu'elle apparaît ou change, en coupant ce que lit le lecteur d'écran. Dans les autres tons, elle est annoncée sans couper sa lecture. Une Alert déjà présente au chargement de la page n'est en général pas annoncée. Comment signaler une Alert affichée après un rechargement, comme un paiement refusé : Non documenté.
- Le niveau du titre suit la structure de la page. Exemple : `<h3>` dans une section qui a un `<h2>`.
- Avec showPagination=true, la pagination s'appelle « Pagination des messages ». Ses flèches s'appellent « Message précédent » et « Message suivant ».
- La touche Tab atteint la pagination puis le lien, dans l'ordre.
- Le WCAG demande un contraste de 4,5:1 au moins pour un texte.
- Sur leur fond, les textes atteignent 7,6:1 en tone=neutral.
- Ils atteignent 7,8:1 en tone=information.
- Ils atteignent 4,9:1 en tone=success.
- Ils atteignent 7,3:1 en tone=warning.
- Ils atteignent 7,8:1 en tone=error.
- Le lien atteint 9,3:1 au moins, sur tous les fonds.

Références : [ARIA Authoring Practices Guide, Alert Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/alert/), [MUI, Alert](https://mui.com/material-ui/react-alert/) et [Carbon, Notification](https://carbondesignsystem.com/components/notification/usage/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-message--message) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-message--message). Avec plusieurs messages, Storybook de MultiMessage : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-multimessage--multimessage) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-multimessage--multimessage).

Code source : [dossier Message sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Message), et [dossier MultiMessage](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/MultiMessage) pour plusieurs messages.

Détail de l'implémentation : [page Message du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/06-message-feedback.md#message).

Cette fiche sur GitHub : [alert.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/alert/alert.md).

Import, selon le thème :

```tsx
import { Message, MultiMessage } from "@axa-fr/canopee-react/prospect";
import { Message, MultiMessage } from "@axa-fr/canopee-react/client";
```

Les exemples importent aussi `Link`, et le type de la liste des messages avec `import { type MultiMessageItem }`, depuis le même chemin.

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Message
  variant="error"
  title="Paiement refusé"
  heading="h3"
  action={<Link href="/paiement">Modifier la carte</Link>}
>
  Votre carte a été refusée. Vérifiez sa date d'expiration.
</Message>
```

Exemple avec plusieurs messages :

```tsx
const messages: MultiMessageItem[] = [
  {
    variant: "error",
    title: "Paiement refusé",
    children: "Votre carte a été refusée. Vérifiez sa date d'expiration.",
    action: <Link href="/paiement">Modifier la carte</Link>,
  },
  {
    variant: "information",
    title: "Nouvelle attestation",
    children: "Votre attestation 2027 est disponible.",
  },
];

<MultiMessage items={messages} heading="h3" />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Alert | `Message` |
| Alert avec showPagination=true | `MultiMessage`, qui affiche un `Message` à la fois |
| tone | `variant` |
| tone=success | `variant="validation"` |
| title | `title` |
| description | `children` |
| showTitle | Sans équivalent, `title` est omis |
| showActions et le lien | `action`, qui accepte un Link ou un Button |
| showPagination | Sans équivalent, MultiMessage affiche la pagination dès que `items` contient plus d'un message |
| L'icône | Sans équivalent, le code la choisit selon `variant` |
| La taille de l'icône, 24 px | `iconSize`, 24 par défaut, à ne pas changer |
| breakpoint | Sans équivalent, une media query change la taille du titre à partir de 1024 px |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. `heading` règle le niveau du titre, `h4` par défaut. MultiMessage accepte aussi `defaultActiveIndex`, le premier message affiché, et `activeIndex` avec `onChangeActive`, pour que la page choisisse le message affiché. `prevLabel` et `nextLabel` renomment les flèches, et `prevButtonProps` et `nextButtonProps` leur passent d'autres attributs. Une liste `items` vide n'affiche rien. Un `activeIndex` hors de la liste affiche le premier ou le dernier message.

## Noms à ne pas employer

Message, MultiMessage, notification, inline notification, callout, encart, message d'alerte.

Ces noms désignent Alert. Le seul nom à employer est Alert.

## Décisions

- **1.0.0 - 23/11/26.** Le composant s'appelle Alert, le nom standard du marché, comme dans MUI. Le code l'appelle Message, et MultiMessage quand il affiche plusieurs messages.
- **1.0.0 - 23/11/26.** Dans Figma, les thèmes prospect et client partagent une seule Alert. Les variantes ne différaient que par l'arrondi, 8 px en prospect et 12 px en client. L'Alert garde 8 px. L'Alert n'a pas non plus de propriété _theme pour sa Pagination, qui change de forme dans le thème client : dans ce thème, le designer règle _theme sur la Pagination, exposée dans le panneau de l'Alert.
- **1.0.0 - 23/11/26.** Les icônes viennent de la librairie Figma Fondations Canopée, comme dans le code : icon/info en tone=neutral, icon/emoji-objects en tone=information, icon/check-circle en tone=success, icon/warning en tone=warning et icon/error en tone=error.
- **1.0.0 - 23/11/26.** Les textes et l'icône prennent le palier 700 de leur ton dans les cinq tons, comme le Tag. Les tons restent alignés, et chacun atteint le contraste AA du WCAG.
- **1.0.0 - 23/11/26.** L'Alert n'a qu'un lien, comme le code n'accepte qu'une action, et comme Carbon le fait pour ses notifications. Le deuxième lien de l'ancienne Alert de Figma est retiré.
- **1.0.0 - 23/11/26.** showPagination remplace l'ancienne Alert à plusieurs messages de Figma, qui est supprimée. La pagination reste en compteur, comme le code l'impose même en desktop.
- **1.0.0 - 23/11/26.** En mobile, l'ancienne Alert à plusieurs messages de Figma plaçait le lien au-dessus de la pagination. L'Alert suit le code, avec la pagination d'abord et le lien à sa droite, ou en dessous quand la place manque.
- **1.0.0 - 23/11/26.** showActions affiche ou masque tout le pied de l'Alert, avec le lien et la pagination. Figma ne replie pas un cadre dont tout le contenu est masqué.
- **1.0.0 - 23/11/26.** Toutes les variantes ont les mêmes calques. La pagination est masquée tant que showPagination=false.
- **1.0.0 - 23/11/26.** L'Alert a une propriété breakpoint, avec une variante par largeur d'écran : breakpoint=1024 pour desktop et breakpoint=0 pour mobile. La valeur par défaut est breakpoint=1024.
- **1.0.0 - 23/11/26.** Par défaut, le lien n'a pas d'icône, et son texte est « Label », comme celui de tout composant. L'icône icon/open-in-new reste à afficher pour un lien qui ouvre un nouvel onglet.

## Points ouverts

- **Deux actions.** Le code n'accepte qu'une action par message (`MessageCommon.tsx:24`). Un message qui aurait besoin de deux actions n'a pas de réponse. En attendant : signaler.
- **Pagination sans lien.** Dans Figma, la pagination ne s'affiche qu'avec showActions=true. Le code permet plusieurs messages sans action (`MultiMessageFooter.tsx:36`). En attendant : signaler.
- **Compteur des messages.** Le compteur dit « Page 1 sur 3 » pour des messages, car MultiMessage reprend le texte de la Pagination (`PaginationCommon.tsx:68`). En attendant : signaler.
- **Nom de la pagination.** Le code impose le nom « Pagination des messages » (`MultiMessageFooter.tsx:43`). Deux Alert à plusieurs messages sur un même écran ont une pagination du même nom. En attendant : signaler.
- **Rôle dans le plugin Copilot.** Le plugin n'annonce aucun rôle hors tone=error et tone=warning (`06-message-feedback.md:39`). Le code pose `role="status"` (`Message.helpers.ts:10`). Le plugin ne documente pas MultiMessage. En attendant : le code fait foi.
- **Rendu dans le code.** En tone=warning, le fond prend une couleur rouge (`MessageApollo.css:37`). Dans le thème client, l'Alert a un fond blanc (`MessageLF.css:6`). Elle y a aussi un contour de la couleur du ton (`MessageLF.css:7`). Son arrondi y vaut 12 px (`MessageLF.css:8`). Sa description y est grise, et non de la couleur du ton (`MessageLF.css:12`). Les couleurs viennent de l'ancienne palette (`MessageApollo.css:5`). Seul le titre change de taille à partir de 1024 px, pas la description (`MessageApollo.css:20`). Avec plusieurs messages, le pied est écarté de 24 px, contre 8 px dans Figma (`MultiMessageCommon.css:10`). L'icône y est écartée du texte de 16 px dans le thème prospect et de 12 px dans le thème client (`MultiMessageApollo.css:4`, `MultiMessageLF.css:4`), contre 8 px dans Figma. En attendant : signaler.
- **Annonce d'un changement de message.** Avec plusieurs messages, le code change le contenu et le rôle d'une même zone (`MultiMessageCommon.tsx:83`). L'annonce de chaque nouveau message par les lecteurs d'écran n'est pas vérifiée. En attendant : tester avec un lecteur d'écran, et signaler.
- **Focus d'une flèche désactivée.** La flèche se désactive alors qu'elle a le focus, sur le premier ou le dernier message (`PaginationCommon.tsx:62`, `PaginationCommon.tsx:79`). La place du focus n'est pas définie. En attendant : signaler.
- **Alert au chargement de la page.** Une Alert affichée après un rechargement, comme un paiement refusé, n'est ni annoncée ni mise au focus. La façon de la signaler n'est pas définie. En attendant : signaler.
- **Ordre des messages.** L'ordre des messages, et ce que devient un message résolu, ne sont pas définis. En attendant : signaler.
- **Confirmation temporaire.** Aucun composant n'affiche une confirmation qui disparaît d'elle-même. En attendant : signaler.
- **Neutral ou information.** Aucune source ne dit quand prendre tone=neutral plutôt que tone=information. En attendant : signaler.
- **Palier de la couleur du texte.** Comme pour le Tag, le texte et l'icône prennent le palier 700 dans tous les tons. L'équipe design system prévoit de retravailler la palette verte, puis de passer le texte en 600, comme celui de _FormHelperText. En attendant : 700.
- **Fond de tone=success.** Le fond très pâle de tone=success se distingue mal d'une page blanche, comme pour le Tag. En attendant : signaler.
- **Action sur place.** Une action qui ne mène pas à une autre page, comme réessayer un envoi, demande un Button, que l'Alert n'accepte pas. Le code et le plugin Copilot en acceptent un (`MessageCommon.tsx:24`, `06-message-feedback.md:51`). En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
