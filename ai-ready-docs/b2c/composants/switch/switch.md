# Switch 1.0.0

Utilise des design tokens qui ne sont pas encore dans une version publiée de Canopée.

## Description

Le Switch permet à l'utilisateur d'activer ou de désactiver une option, avec un effet immédiat.

## Quand l'utiliser

### À utiliser pour

- Activer ou désactiver un réglage qui s'applique tout de suite. Exemple : « Notifications par e-mail » dans les préférences de l'espace client.
- Activer ou désactiver une option dans une ligne de liste ou une cellule de tableau, quand le changement s'applique sans autre action.

### À ne pas utiliser pour

- Un choix qui ne s'applique qu'à l'envoi d'un formulaire : prendre Checkbox.
- Accepter des conditions ou donner un consentement : prendre Checkbox.
- Choisir une valeur parmi plusieurs, même parmi deux, comme « Mensuel » ou « Annuel » : prendre Radio.
- Lancer une action, comme enregistrer ou supprimer : prendre Button.
- Afficher un statut que l'utilisateur ne peut pas changer, comme « Actif » : prendre Tag.

## Règles selon les propriétés

### checked=true

L'option est activée, et son effet est déjà appliqué.

### disabled=true

L'option ne peut pas être changée pour l'instant, par exemple parce qu'elle dépend d'un autre réglage. Un texte à côté du Switch dit pourquoi, quand la raison n'est pas évidente.

### showLabel=false

Le libellé du Switch est masqué. C'est permis seulement quand un autre texte visible nomme déjà l'option, comme le titre d'une ligne de liste ou l'en-tête d'une colonne de tableau.

### breakpoint=0

Sur un écran de moins de 1024 px de large. Le libellé utilise la version mobile de son style de texte.

## Exemples

- Préférence de l'espace client : label « Recevoir les offres par e-mail », checked=false.
- Réglage bloqué tant qu'une information manque : checked=false et disabled=true, label « Rappel par SMS », avec le texte d'aide « Ajoutez un numéro de téléphone pour activer ce réglage ».
- Ligne de liste dont le titre nomme déjà l'option : showLabel=false.

## Interdits

- disabled=true avec un autre état que state=default.
- Modifier localement la taille, l'espacement ou les couleurs du Switch, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.

## Contenu

- Un libellé, à droite du Switch, sauf en showLabel=false. Sur plusieurs lignes, il garde la piste alignée sur sa première ligne.
- Une seule option par Switch.

## Rédaction

- Le libellé dit ce qui s'applique quand le Switch est en checked=true. Il ne commence pas par « Activer » ou « Désactiver », car le Switch le dit déjà. À éviter : « Activer les notifications par e-mail ».
- Le libellé reste le même quelle que soit la position du Switch. À éviter : « Activé » et « Désactivé » à la place du libellé, ou un libellé qui change selon checked.
- Un libellé court, sans point final.

## Comportement

- Un clic sur le Switch ou sur son libellé fait passer checked de false à true, ou l'inverse. La poignée glisse de gauche à droite, ou l'inverse.
- Le changement s'applique tout de suite, sans bouton de validation.
- Si le changement ne peut pas s'appliquer, par exemple après une erreur du serveur, le Switch revient à sa position d'avant, et un _FormHelperText d'erreur, sous le Switch, dit pourquoi.
- En disabled=true, le Switch ne réagit ni au clic ni au clavier.

## Accessibilité

Un élément `<input type="checkbox">` avec `role="switch"`, dans un `<label>`.

- Le nom accessible est le libellé. En showLabel=false, le Switch se relie au texte qui le nomme, avec `aria-labelledby`.
- Le lecteur d'écran annonce le nom, le rôle et la position du Switch. Exemple : « Notifications par e-mail, interrupteur, activé ».
- Le Switch entre dans l'ordre de tabulation, sauf en disabled=true. Le focus clavier reste toujours visible, et son anneau entoure la piste et son libellé.
- La touche Espace le fait basculer. La touche Entrée ne fait rien, comme sur une case à cocher native.
- Les icônes de la poignée sont décoratives et masquées au lecteur d'écran avec `aria-hidden="true"`.
- La position du Switch se voit à la place de la poignée et à son icône, pas seulement à la couleur de la piste.
- Le WCAG demande un contraste de 3:1 au moins pour un composant d'interface, sauf en disabled=true. Sur fond blanc, la piste atteint 3,95:1 en checked=false. Elle atteint 10,9:1 en checked=true. L'anneau de focus atteint 6,9:1.
- La zone cliquable comprend le libellé.

Référence : [ARIA Authoring Practices Guide, Switch Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/switch/).

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-toggle--toggle) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-toggle--toggle).

Code source : [dossier Toggle sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/Toggle).

Détail de l'implémentation : [page Toggle du plugin Copilot](https://github.com/AxaFrance/design-system/blob/main/plugins/canopee-prospect-client/skills/canopee-prospect-client/references/15-visuals.md#toggle).

Cette fiche sur GitHub : [switch.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/switch/switch.md).

Import, selon le thème :

```tsx
import { Toggle } from "@axa-fr/canopee-react/prospect";
import { Toggle } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<Toggle id="email-offers" checked={enabled} onChange={(e) => setEnabled(e.target.checked)} />
<label htmlFor="email-offers">Recevoir les offres par e-mail</label>
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Switch | `Toggle` |
| checked | `checked` |
| disabled | `disabled` |
| label, affiché par showLabel | Sans équivalent, le libellé s'écrit à part, dans un `<label>` relié par `htmlFor` |
| state | Sans équivalent, le code n'utilise que `:focus-visible` en CSS |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. breakpoint n'a pas d'équivalent dans le code. Le composant accepte tous les attributs d'un `<input>`, sauf `type` et `style`, et `className` s'applique au `<label>` qui enveloppe le Switch (`ToggleCommon.tsx:26`). Sans équivalent dans Figma : `id`, `name`, `onChange`, `defaultChecked`.

## Noms à ne pas employer

Toggle, interrupteur, bouton bascule, commutateur.

Ces noms désignent Switch. Le seul nom à employer est Switch.

## Décisions

- **1.0.0 - 17/11/26.** Le Switch applique son changement tout de suite. Un choix qui attend l'envoi d'un formulaire prend une Checkbox. Le libellé ne change pas avec la position du Switch. Ces règles suivent les recommandations du Nielsen Norman Group, de Carbon et du pattern Switch du W3C (APG). L'ancienne documentation du B2C disait seulement que le Switch affiche « immédiatement la modification ».
- **1.0.0 - 17/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Switch. Ils ne différaient que par des réglages sans effet visible.
- **1.0.0 - 17/11/26.** Le Switch a une propriété state : default, hover et focus. Il n'a pas de press, car sa poignée bouge dès l'appui.
- **1.0.0 - 17/11/26.** Le Switch porte son libellé, à droite, comme une Checkbox. showLabel=false masque ce libellé quand un autre texte visible nomme déjà l'option.
- **1.0.0 - 17/11/26.** En checked=false, la piste passe en color/gray/500 au repos et en color/gray/600 au hover et au focus. Elle atteint ainsi les 3:1 du WCAG, que le color/gray/400 de l'ancienne version et du code n'atteignait pas.
- **1.0.0 - 17/11/26.** En checked=true, la piste prend color/blue/600, la couleur réservée aux éléments interactifs, au lieu du color/blue/700 de l'ancienne version et du code. Au hover et au focus, elle passe en color/blue/700.
- **1.0.0 - 17/11/26.** L'icône de la poignée prend la couleur de la piste, comme dans le code, sauf en disabled=true.
- **1.0.0 - 17/11/26.** En disabled=true, la piste prend la couleur d'accent des composants désactivés, color/gray/300, en checked=false comme en checked=true. La poignée passe en color/gray/100, pour qu'un Switch en disabled=true se distingue d'un Switch en state=default. L'icône passe en color/gray/400.
- **1.0.0 - 17/11/26.** Le Switch mesure 40 × 24 px, comme dans le code.
- **1.0.0 - 17/11/26.** Les icônes de la poignée viennent de Fondations Canopée, à la taille icon/size/extra-small.
- **1.0.0 - 18/11/26.** L'anneau de focus entoure la piste et le libellé, comme celui de Checkbox et Radio, car un clic sur le libellé bascule aussi le Switch.

## Points ouverts

- **Rôle dans le code.** Le code utilise une case à cocher sans `role="switch"` (`ToggleCommon.tsx:45`). Le lecteur d'écran annonce donc « case à cocher » au lieu d'« interrupteur ». En attendant : signaler.
- **Libellé dans le code.** Le code n'a pas de libellé : son `<label>` n'enveloppe que le Switch, sans texte. En attendant : écrire le libellé à part et le relier par `htmlFor` ou `aria-labelledby`.
- **Hover dans le code.** Le code n'a pas de hover (`ToggleCommon.css`). En attendant : signaler.
- **Anneau de focus dans le code.** Le code trace l'anneau autour de la piste seule (`ToggleCommon.css:69`), car le libellé s'écrit à part. En attendant : signaler.
- **Couleurs dans le code.** Le code diffère de Figma sur quatre couleurs. La piste en checked=false est d'un gris plus clair (`ToggleCommon.css:3`). La piste en checked=true est d'un bleu plus foncé (`ToggleCommon.css:75`). L'anneau de focus est bleu foncé (`ToggleCommon.css:5`). En disabled=true, la piste et l'icône sont en gris moyen (`ToggleCommon.css:22`). Les couleurs de Figma font foi. En attendant : signaler.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
