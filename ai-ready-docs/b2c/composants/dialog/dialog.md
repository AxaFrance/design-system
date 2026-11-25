# Dialog 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Dialog pose une question courte à l'utilisateur, dans une fenêtre qui s'ouvre par-dessus l'écran. Le titre pose la question, la description en donne la conséquence, et deux Button portent les réponses.

## Quand l'utiliser

### À utiliser pour

- Faire confirmer une action difficile ou impossible à annuler, avant de la lancer. Exemple : supprimer un document, ou quitter un parcours sans enregistrer.

### À ne pas utiliser pour

- Un contenu libre, des champs ou un texte long : prendre Modal.
- Un message qui ne bloque pas l'utilisateur : prendre Alert.
- Une action facile à annuler : pas de Dialog, l'action se fait directement.

## Règles selon les propriétés

### breakpoint=0

Sur un écran de moins de 1024 px de large. Les deux Button restent sur une ligne et se partagent la largeur de la fenêtre.

## Exemples

- Suppression d'un document : title « Supprimer ce document ? », description « Le document sera supprimé de votre espace, sans retour possible. », Button secondary « Annuler » et Button primary « Supprimer le document ».
- Sortie d'un parcours : title « Quitter la souscription ? », description « Les informations saisies ne seront pas enregistrées. », Button secondary « Rester » et Button primary « Quitter la souscription ».

## Interdits

- Un Dialog ouvert par-dessus un autre Dialog.
- Changer la hierarchy, le colorScheme ou la size des Button du Dialog.
- Modifier localement la taille, l'espacement ou les couleurs du Dialog, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un titre, obligatoire.
- Une description, obligatoire, d'une ou deux phrases.
- Deux Button, obligatoires : à gauche le Button secondary, qui renonce, et à droite le Button primary, qui confirme.

## Rédaction

- Le titre pose la question en quelques mots, et finit par un point d'interrogation. Exemple : « Supprimer ce document ? ».
- La description dit ce qui se passe si l'utilisateur confirme, surtout ce qui ne pourra pas être annulé.
- Les libellés des Button suivent la rubrique Rédaction de la fiche Button, qui a une règle pour les fenêtres modales. Le Button primary répond au titre par un verbe : « Supprimer le document » pour « Supprimer ce document ? », jamais « Oui » ni « OK ».

## Comportement

- Le Dialog s'ouvre quand l'utilisateur demande une action, comme un clic sur un Button, et avant que l'action soit faite.
- Il assombrit l'écran et bloque le reste de l'interface jusqu'à sa fermeture.
- Le Button secondary et la touche Échap ferment le Dialog sans faire l'action.
- Le Button primary fait l'action, puis ferme le Dialog.
- Un clic hors de la fenêtre ne ferme pas le Dialog, pour éviter une réponse par erreur.
- Ce que fait le Dialog quand l'action du Button primary charge ou échoue : Non documenté.

## Accessibilité

Un élément `<dialog>` natif, ouvert avec `showModal()`, qui porte `role="alertdialog"` et `aria-modal="true"`. Le titre sert de nom accessible, avec `aria-labelledby`. La description est reliée avec `aria-describedby`. Le titre est un titre de niveau 2.

- À l'ouverture, le focus va sur le Button secondary, la réponse qui ne lance pas l'action.
- Tant que le Dialog est ouvert, le focus et la touche Tab restent dans la fenêtre, et le reste de l'écran n'est ni atteignable ni lu.
- À la fermeture, le focus revient sur l'élément qui a ouvert le Dialog, en général un Button.
- Si l'action a fait disparaître cet élément, comme le Button d'un document supprimé : Non documenté.
- Le Button qui ouvre le Dialog porte `aria-haspopup="dialog"`.

## Code

Le code de Canopée n'a pas encore de Dialog : pas de page Storybook, pas de dossier sur GitHub, pas de page dans le plugin Copilot.

Cette fiche sur GitHub : [dialog.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/dialog/dialog.md).

Écarts entre Figma et le code : aucun tableau, car le composant n'existe que dans Figma.

## Noms à ne pas employer

AlertDialog, ConfirmDialog, popin de confirmation, modale de confirmation, boîte de confirmation.

Ces noms désignent Dialog. Le seul nom à employer est Dialog.

## Décisions

- **1.0.0 - 24/11/26.** Une question courte avec deux réponses passe par un composant à part, Dialog, et non par la Modal. Le Dialog n'a pas de slot : un titre, une description et deux Button. Radix sépare aussi la confirmation de la fenêtre à contenu libre, avec un AlertDialog à part.
- **1.0.0 - 24/11/26.** Le Dialog reprend le header de la Modal, avec le même style de titre, pour que les deux fenêtres restent cohérentes. Il n'a ni sous-titre ni croix : l'utilisateur répond avec un des deux Button, ou ferme avec Échap.
- **1.0.0 - 24/11/26.** Le Dialog n'a pas d'icône, contrairement à la Modal, comme l'AlertDialog de Radix. Une icône ajouterait un choix sans règle pour le designer.
- **1.0.0 - 24/11/26.** Le Dialog a des marges plus serrées que la Modal, car sa fenêtre est plus petite et son texte plus court : 24 px autour du contenu et avant les Button, et 8 px entre le titre et la description, en desktop comme en mobile.
- **1.0.0 - 24/11/26.** Les Button du Dialog gardent la grande taille, comme ceux de la Modal, car la fiche Button réserve la taille moyenne au Header.
- **1.0.0 - 24/11/26.** En mobile, le Dialog reste centré, alors que la Modal se pose en bas de l'écran. Une question courte n'a pas besoin de toute la largeur.
- **1.0.0 - 24/11/26.** Dans Figma, la fenêtre a une largeur d'exemple de 480 px en desktop. Dans une maquette, sa hauteur suit le titre et la description.
- **1.0.0 - 24/11/26.** Le Dialog n'a pas de propriété _theme, comme la Modal. Dans le thème client, le designer règle le _theme des Button, exposés dans le panneau du Dialog.
- **1.0.0 - 25/11/26.** Le titre passe en color/gray/900, car color/blue/700 est réservé aux éléments interactifs.

## Points ouverts

- **Code.** Le code de Canopée n'a pas de Dialog, et la fiche Modal renvoie les confirmations vers lui. La Modal ne le remplace pas, car sa croix et un clic hors de la fenêtre la ferment. En attendant : signaler.
- **Largeur en desktop.** Figma montre une largeur d'exemple de 480 px, et la largeur cible du code n'est pas tranchée. En attendant : signaler.
- **Focus après l'action.** Quand l'action fait disparaître l'élément qui a ouvert le Dialog, la place du focus n'est pas définie. Le guide ARIA demande un élément qui permet de poursuivre le parcours. En attendant : signaler.
- **Action destructive.** Button n'a pas de variante pour une action destructive, comme une suppression. Le Button primary du Dialog reste donc bleu. En attendant : Button primary.
- **Dialog sur une Modal.** Rien ne dit si un Dialog peut s'ouvrir par-dessus une Modal, par exemple pour confirmer l'abandon d'une saisie. En attendant : signaler.
- **Action en cours ou en échec.** Ce que fait le Dialog quand l'action du Button primary charge ou échoue n'est pas défini. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
