# Button 1.0.0

Utilise les design tokens de Canopée 2.0.0 ou d'une version plus récente.

## Description

Le Button déclenche une action dans la page. Son importance se règle avec hierarchy, de primary pour l'action que l'utilisateur doit faire en priorité, à tertiary pour une action complémentaire.

## Quand l'utiliser

### À utiliser pour

- Déclencher une action dans la page : soumettre, enregistrer, finaliser, continuer.
- Confirmer ou annuler une action dans une fenêtre modale.
- Ouvrir une fenêtre modale, un menu ou un panneau dans la page.

### À ne pas utiliser pour

- Naviguer vers une autre page : prendre Link.
- Une action représentée par une icône seule : prendre IconButton.
- Activer ou désactiver une option : prendre Toggle.
- Choisir une option parmi plusieurs : prendre CardRadio.

## Règles selon les propriétés

### hierarchy=primary

L'action la plus importante de la page, celle que l'utilisateur doit faire en priorité. Une page n'a qu'un seul Button primary, sans compter le Header. Le primary d'une bannière compte dans cette limite. Une fenêtre modale a droit à son propre primary. Il sert aussi à valider un tarif ou un rendez-vous avec un conseiller à la fin d'un parcours.

### hierarchy=secondary

Une action moins prioritaire, qui accompagne le primary. Exemple : « Annuler » à côté de « Enregistrer ».

### hierarchy=tertiary

Une action complémentaire ou facultative, la plus discrète, souvent à côté d'un primary ou d'un secondary. Exemple : « Passer cette étape ».

### disabled=true

L'action existe mais n'est pas disponible pour l'instant, par exemple tant qu'un formulaire est incomplet. Le texte autour du bouton dit pourquoi. Un bouton désactivé ne sert jamais à masquer une action à laquelle l'utilisateur n'a pas droit.

### loading=true

L'action est lancée et le traitement est en cours, par exemple l'envoi d'un formulaire. Le bouton garde sa couleur et son libellé. Un Spinner s'ajoute à droite du libellé, après l'icône de droite s'il y en a une. Le Spinner prend la couleur du libellé : blanc pour hierarchy=primary avec colorScheme=default ou colorScheme=business, bleu dans les autres cas. Dans Figma, loading=true n'existe qu'avec state=default : le focus d'un bouton en chargement n'y est pas représenté.

### colorScheme=inverse

Sur un fond foncé ou coloré, par exemple dans une bannière.

### colorScheme=business

Seulement pour le bouton de souscription d'une page de tarif, quand cette page est une étape d'un parcours. À la dernière étape du parcours, le bouton qui valide le tarif est en colorScheme=default. Le bouton d'une bannière sur fond foncé ou coloré est en colorScheme=inverse.

### size=large

La taille par défaut, pour la plupart des actions. Exemples : les boutons d'une fenêtre modale, « Précédent » et « Suivant » dans un parcours.

### size=medium

Le Button des actions du Header.

### size=small

Le plus petit Button, surtout en hierarchy=tertiary, mais possible avec tous les niveaux. Un Button en hierarchy=tertiary et size=small remplace l'ancien ButtonGhost. Exemples : les actions « Modifier » et « En savoir plus » d'ItemLabel, le bouton d'un ContentItemDuoAction, ou celui d'un Message qui propose une action.

## Exemples

- Action principale d'un formulaire : hierarchy=primary, label « Enregistrer ».
- Début et fin d'un parcours : hierarchy=primary, label « Commencer », puis « Finaliser ».
- Modale de confirmation : hierarchy=primary, label « Confirmer la résiliation » plutôt que « Oui », et hierarchy=secondary, label « Annuler ».
- Étape facultative d'un parcours : hierarchy=primary, label « Continuer », et hierarchy=tertiary, label « Passer cette étape ».
- Bannière sur fond bleu : hierarchy=primary, colorScheme=inverse, label « Obtenir un tarif ».
- Formulaire en cours d'enregistrement : hierarchy=primary, loading=true, label « Enregistrer ».

## Interdits

- colorScheme=inverse ou colorScheme=business avec une autre hierarchy que primary.
- loading=true avec disabled=true, state=hover ou state=press.
- Modifier localement la taille ou les couleurs du bouton, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.
- Ajouter un calque dans le bouton au lieu d'activer un emplacement d'icône.

## Contenu

- Un libellé, obligatoire, sur une seule ligne.
- Une icône au plus, à gauche avec leftIcon ou à droite avec rightIcon. Le composant permet les deux, mais l'usage n'en garde qu'une.
- L'icône prend toujours la couleur du texte.

## Rédaction

- **Forme.** Un verbe à l'infinitif suivi d'un complément : « Obtenir un tarif », « Contacter un conseiller », « Trouver une agence ». Le verbe seul suffit pour une action courante : « Annuler », « Fermer », « Continuer ». Pas de verbe conjugué, pas de « je ».
- **Sens.** Le libellé décrit l'action déclenchée, sans formule générique.
- **Longueur.** 35 caractères et 5 mots au plus, espaces compris.
- **Casse.** Une majuscule au début, pas de ponctuation finale. Jamais tout en majuscules, ni une majuscule à chaque mot.
- **Pronoms.** « mon », « ma » ou « mes » seulement si le bouton mène à l'Espace Client connecté. « notre » ou « nos » seulement dans une communication institutionnelle. Jamais « votre ». « nous » seulement pour un bouton de contact, comme « Nous contacter », ou pour mener vers une offre depuis une bannière marketing.
- **Parcours à étapes.** « Commencer » au début, « Finaliser » à la fin, « Précédent » et « Suivant » entre deux étapes, « Retour » pour quitter, plutôt que « Revenir » ou « Retourner ».
- **Fenêtres modales.** Le bouton reprend les termes du titre ou du texte de la modale, avec la même formulation pour une même action. Si le titre pose une question, le bouton y répond. Si la réponse est oui ou non, il précise l'action par un verbe.

## Comportement

- Un clic ou une activation au clavier déclenche une seule action, jamais deux effets différents.
- Au repos, le bouton est à l'état par défaut ou désactivé. Le survol, l'appui et le focus ne viennent que de l'interaction.
- Désactivé, le bouton ne réagit ni au clic ni au clavier.
- Pendant un chargement, le bouton ne réagit ni au clic ni au clavier, et son aspect ne change pas au survol ni à l'appui. Contrairement à un bouton désactivé, il reste atteignable au clavier et garde son anneau de focus.
- Sur desktop, plusieurs boutons voisins s'affichent sur une même ligne. Sur mobile, ils s'empilent en colonne, sauf dans un parcours, où ils restent sur une ligne.
- Sur une ligne, le primary est le dernier bouton à droite, dans une fenêtre modale comme dans un parcours.

## Accessibilité

Un élément `<button>` natif, de rôle ARIA button.

- `type="button"` par défaut. `type="submit"` quand il envoie un formulaire.
- `aria-expanded` et `aria-controls` quand il ouvre ou ferme une zone de la page.
- `aria-haspopup` quand il ouvre un menu ou une fenêtre modale.
- `aria-busy="true"` et `aria-disabled="true"` pendant un chargement, à la place de l'attribut `disabled`, pour que le bouton garde le focus.
- Le libellé visible nomme l'action. Un nom accessible avec aria-label ne sert que si aucun libellé pertinent n'est possible.
- Le lecteur d'écran annonce le nom du bouton quand il reçoit le focus.
- Un chargement est annoncé, par exemple « Chargement en cours ».
- L'indicateur de focus reste toujours visible.
- Le texte contraste avec le fond à 4,5:1 au moins, et l'anneau de focus à 3:1 au moins (WCAG).
- La zone cliquable mesure au moins 24 × 24 px (WCAG 2.2).
- Un bouton désactivé n'est pas atteignable au clavier. La raison de l'indisponibilité est donc écrite dans le texte autour, pas seulement dans le bouton.
- Le bouton s'atteint avec Tab et s'active avec Entrée ou Espace, dans un ordre de tabulation logique.
- Des actions liées se regroupent dans une liste quand c'est pertinent, pour que les technologies d'assistance annoncent le groupe.

Référence : [ARIA Authoring Practices Guide, Button Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/button/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-button--button) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-button--button).

Code source : [dossier Button sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Button).

Import, selon le thème :

```tsx
import { Button } from "@axa-fr/canopee-react/prospect";
import { Button } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemples :

```tsx
<Button variant="primary" onClick={save}>Enregistrer</Button>

import arrowForward from "@material-symbols/svg-400/outlined/arrow_forward.svg";
import { Icon } from "@axa-fr/canopee-react/prospect";

<Button variant="primary" iconRight={<Icon src={arrowForward} size="S" variant="primary" />}>
  Continuer
</Button>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| hierarchy=primary | `variant="primary"` |
| hierarchy=primary, colorScheme=business | `variant="primary-business"` |
| hierarchy=primary, colorScheme=inverse | `variant="primary-inverse"` |
| hierarchy=secondary | `variant="secondary"` |
| hierarchy=tertiary | `variant="tertiary"` |
| label | `children` |
| leftIcon, affichée par showLeftIcon | `iconLeft` |
| rightIcon, affichée par showRightIcon | `iconRight` |
| loading | `loading` |

`variant` vaut `primary` par défaut. Sans équivalent dans le code : state, que le code rend par `:hover`, `:focus-visible` et `:active`, et _theme, qui correspond au chemin d'import, `/prospect` ou `/client`. size n'a pas d'équivalent non plus : le code n'a qu'une taille. Sans équivalent dans Figma : `type`, qui vaut `button` par défaut, les autres attributs HTML du `<button>`, et les variantes `secondary-inverse` et `ghost`.

## Noms à ne pas employer

Bouton, CTA, call to action, bouton d'action, bouton principal, bouton secondaire, Button Primary, Button Secondary, Button Tertiary, Ghost Button.

Ces noms désignent Button. Le seul nom à employer est Button.

## Décisions

- **1.0.0 - 16/09/26.** L'importance s'appelle hierarchy, et non variant comme dans le code, parce que variant a déjà un sens dans Figma.
- **1.0.0 - 14/10/26.** Les quatre boutons Figma, ButtonPrimary, ButtonSecondary, ButtonTertiary et ButtonGhost, sont fusionnés en un seul Button, pour suivre la nomenclature et le code.
- **1.0.0 - 16/10/26.** Button garde trois niveaux et une seule logique d'interaction : chaque état descend d'un cran dans la même palette, et le focus reprend le survol avec un anneau. Le secondary devient un bouton plein clair. Le bouton à contour, le secondary inverse et le ghost disparaissent. Le code sera mis à jour pour suivre.
- **1.0.0 - 16/10/26.** La taille d'écran passe par les modes de variables, et non par des variantes. Le composant a un mode par défaut, desktop, et le mode mobile se choisit sur l'instance (23/10/26).
- **1.0.0 - 23/10/26.** Le code actuel correspond à l'ancien Button et à l'ancienne nomenclature. Il sera mis à jour pour suivre ce composant. Le tableau des écarts relie donc les niveaux par leur nom, et non par leur rendu actuel, et il se videra quand le code aura suivi.
- **1.0.0 - 23/10/26.** Les règles ajoutées en rédigeant la fiche sont validées : les alternatives Link, ClickIcon, Toggle et CardRadio, la règle de disabled=true, et les seuils de contraste et de taille.
- **1.0.0 - 23/10/26.** Les règles de Comportement, d'Accessibilité et de Rédaction, reprises de la page Zeroheight de Button Primary, valent pour tous les niveaux.
- **1.0.0 - 23/10/26.** Le thème passe par une variante `_theme`, prospect ou client, parce que la forme change : l'arrondi et les marges. Les modes de variables restent réservés aux thèmes de couleurs. Le composant n'utilise que des variables de Fondations.
- **1.0.0 - 16/10/26.** Les actions « Modifier » et « En savoir plus » d'ItemLabel ne passent pas par Button, mais par un sous-composant propre à ItemLabel.
- **1.0.0 - 27/10/26.** Une action représentée par une icône seule passe par un composant dédié, IconButton, et non par une variante de Button. Ses règles diffèrent : pas de libellé visible, et un nom accessible obligatoire. Son nom suit le standard du marché.
- **1.0.0 - 27/10/26.** Une page n'a qu'un seul Button primary, sans compter le Header, et non un seul par zone. Le primary d'une bannière compte dans cette limite. Une fenêtre modale a droit à son propre primary.
- **1.0.0 - 27/10/26.** colorScheme=business sert aux actions liées à la souscription ou à une offre commerciale.
- **1.0.0 - 27/10/26.** Sur mobile, plusieurs boutons voisins s'empilent en colonne, sauf dans un parcours.
- **1.0.0 - 28/10/26.** Button a une variante loading dans Figma, comme dans le code, parce que les designers en ont besoin dans leurs maquettes.
- **1.0.0 - 30/10/26.** En chargement, le bouton garde sa couleur, affiche un Spinner et ne réagit plus. Il n'utilise pas l'attribut `disabled`, pour garder le focus.
- **1.0.0 - 30/10/26.** Le secondary redevient un bouton à contour, comme l'ancien ButtonSecondary. Au survol et à l'appui, il prend le fond du tertiary dans le même état. Cette décision remplace celle du 16/10/26, qui en faisait un bouton plein clair.
- **1.0.0 - 30/10/26.** Button a trois tailles, selon sa hauteur : size=large (56 px), size=medium (48 px) et size=small (32 px). La valeur par défaut est size=large. Un Button en hierarchy=tertiary et size=small remplace l'ancien ButtonGhost.
- **1.0.0 - 02/11/26.** Sur une ligne, le primary est le dernier bouton à droite.
- **1.0.0 - 02/11/26.** colorScheme=business ne sert que sur une page de tarif, dans un parcours. Le bouton d'une bannière sur fond foncé ou coloré est en colorScheme=inverse. À la dernière étape d'un parcours, le bouton qui valide le tarif est en colorScheme=default. Cette décision remplace celle du 27/10/26, qui ouvrait business à toute offre commerciale.
- **1.0.0 - 02/11/26.** Chaque taille a son usage : size=large pour la plupart des actions, size=medium pour le Header, size=small surtout en hierarchy=tertiary, mais possible avec tous les niveaux.
- **1.0.0 - 02/11/26.** Les actions « Modifier » et « En savoir plus » d'ItemLabel passent par un Button en size=small. Cette décision remplace celle du 16/10/26, qui prévoyait un sous-composant propre à ItemLabel.
- **1.0.0 - 04/11/26.** Au repos, le secondary et le tertiary n'ont pas de fond. Le bouton désactivé garde son fond gris.

## Points ouverts

- **Rendu du code.** Tant que le code n'a pas suivi, le rendu diffère de Figma : `secondary` a un fond blanc au repos et n'a pas les mêmes couleurs au survol et à l'appui, `tertiary` est un bouton plein clair, le press éclaircit au lieu de foncer, et `secondary-inverse` et `ghost` existent encore. En attendant : les noms du tableau des écarts s'appliquent, et `secondary-inverse` et `ghost` ne s'utilisent plus.
- **Chargement dans le code.** Le code désactive le bouton pendant un chargement (`disabled={disabled || loading}`). Le bouton et son Spinner deviennent gris, et le bouton perd le focus. Il n'a pas non plus `aria-busy`. Le code affiche aussi ce Spinner sur un bouton seulement désactivé. En attendant : `loading` s'utilise sans surcharge de style, l'écart se corrige dans le code.
- **Anneau de focus.** Il est en color/blue/300 et à 2 px du bouton dans Figma, en `--blue-650` et à 3 px dans le code. En attendant : rien ne change à l'usage, l'écart se corrige dans le code.
- **Groupe de boutons.** L'ordre des boutons à gauche du primary n'est pas documenté, ni celui des boutons empilés en colonne sur mobile, ni la place du groupe dans la page (aligné à gauche, centré ou aligné à droite). En attendant : signaler.
- **Autres usages du medium.** En dehors du Header, size=medium peut servir dans des cas précis, qui ne sont pas encore documentés. En attendant : signaler.
- **Tailles dans le code.** Le code n'a pas de propriété de taille. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
