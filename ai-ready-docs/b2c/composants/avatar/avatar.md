# Avatar 1.0.0

Utilise les design tokens de Canopée X.Y.Z ou d'une version plus récente.

## Description

L'Avatar représente un interlocuteur par une image ronde : sa photo, une icône de profil ou le logo AXA. Son contenu se règle avec type : picture par défaut, profile ou logo.

## Quand l'utiliser

### À utiliser pour

- Représenter un interlocuteur que l'utilisateur peut contacter : un conseiller, une agence AXA.
- Accompagner les informations de contact d'un interlocuteur : son nom, son numéro de téléphone, l'adresse de son agence.
- Identifier l'interlocuteur dans une conversation, comme un échange par chat avec un conseiller.

### À ne pas utiliser pour

- Une image décorative ou d'illustration : Non documenté.
- Une image éloignée des informations de l'interlocuteur : l'Avatar se place à côté de son nom, de ses coordonnées ou de son message.
- Afficher le logo AXA comme marque, quand AXA n'est pas un interlocuteur : prendre logo/axa, dans la librairie Fondations Canopée.
- Une icône qui déclenche une action : prendre IconButton.

## Règles selon les propriétés

### type=picture

Quand la photo de l'interlocuteur est disponible.

### type=profile

Quand l'interlocuteur est une personne dont la photo n'est pas disponible.

### type=logo

Quand l'interlocuteur est AXA ou une agence AXA, et non une personne.

## Exemples

- Bloc de contact d'une conseillère, avec sa photo et son nom écrit à côté : type=picture, texte alternatif vide.
- Photo d'une conseillère dans un fil de discussion, sans son nom à côté : type=picture, texte alternatif « Julie Martin ».
- Bloc de contact d'une conseillère sans photo : type=profile.
- Bloc de contact d'une agence AXA : type=logo.

## Interdits

- Modifier localement la taille, la forme ou les couleurs de l'Avatar, dans Figma comme en CSS. Un besoin particulier se traite avec l'équipe design system.
- Remplacer l'icône de type=profile ou le logo de type=logo.

## Contenu

- type=picture : une photo de l'interlocuteur, obligatoire.
- type=profile et type=logo : aucun contenu à fournir.
- L'Avatar n'affiche ni texte ni initiales.

## Rédaction

Le texte alternatif de type=picture et de type=profile se limite au nom de la personne, sans dire que c'est une image ou une icône. Exemple : « Julie Martin ».

## Comportement

- L'Avatar ne réagit ni au clic ni au clavier.
- Quand l'Avatar est placé dans un élément interactif, c'est cet élément qui réagit et qui reçoit le focus.

## Accessibilité

Un élément `<img>`.

- type=picture et type=profile : le nom accessible vient de `alt`, avec le texte décrit dans la rubrique Rédaction. Le code met `alt=""` par défaut. Le développeur renseigne donc `alt`, sauf quand le nom est déjà écrit à côté de l'Avatar.
- Quand le nom de l'interlocuteur est déjà écrit à côté, l'Avatar est décoratif et porte `alt=""`, pour que le lecteur d'écran ne lise pas deux fois le nom.
- type=logo : `alt="AXA"`, ou `alt=""` quand AXA est déjà écrit à côté.
- L'Avatar ne reçoit pas le focus et n'entre pas dans l'ordre de tabulation.

## Code

Storybook, selon le thème : [prospect](https://axafrance.github.io/design-system/prospect/react/latest/?path=/docs/components-basepicture--basepicture) ou [client](https://axafrance.github.io/design-system/client/react/latest/?path=/docs/components-basepicture--basepicture).

Code source : [dossier BasePicture sur GitHub](https://github.com/AxaFrance/design-system/tree/main/packages/canopee-react/src/prospect-client/BasePicture).

Détail de l'implémentation : Non documenté. Le plugin Copilot n'a pas de page pour ce composant.

Cette fiche sur GitHub : [avatar.md](https://github.com/AxaFrance/design-system/blob/main/ai-ready-docs/b2c/composants/avatar/avatar.md).

Import, selon le thème :

```tsx
import { BasePicture } from "@axa-fr/canopee-react/prospect";
import { BasePicture } from "@axa-fr/canopee-react/client";
```

L'import du composant charge aussi ses styles. Il n'y a pas de CSS à importer en plus.

Exemple :

```tsx
<BasePicture src="/conseillers/julie.jpg" alt="Julie Martin" />
```

Écarts entre Figma et le code :

| Figma | Code |
|---|---|
| Avatar | `BasePicture` |
| type=picture | `<BasePicture src="…" alt="…" />` |
| type=logo | `<BasePicture />` : sans `src`, le code affiche le logo AXA |
| type=profile | Aucun équivalent |

Dans le code, le thème passe par le chemin d'import, `/prospect` ou `/client`. Sans équivalent dans Figma : `className` et les autres attributs de `<img>`. Dans le code, d'autres composants affichent un BasePicture. CardRadio le règle avec `src` et `basePictureProps`, ClickItem avec `basePictureProps`, ContentItemMono et DataAgent avec `picture`.

## Noms à ne pas employer

_Base_picture, Trombi, Profil, photo de profil, photo conseiller, vignette, pastille.

Ces noms désignent Avatar. Le seul nom à employer est Avatar.

## Décisions

- **1.0.0 - 10/11/26.** Dans Figma, les thèmes prospect et client partagent un seul Avatar, car leurs deux versions avaient le même rendu. L'Avatar du thème prospect est celui qui reste.
- **1.0.0 - 10/11/26.** type remplace l'ancienne propriété Style (Trombi, Profil, Logo). Les variantes qui portaient chacune une photo d'exemple disparaissent, et une photo se change dans l'instance.
- **1.0.0 - 10/11/26.** type=picture est la valeur par défaut, car c'est l'usage le plus fréquent.
- **1.0.0 - 10/11/26.** Le logo et l'icône viennent de Fondations Canopée, logo/axa et icon/person. L'icône prend la taille icon/size/small, et le logo la taille size/48.
- **1.0.0 - 12/11/26.** Le texte alternatif se limite au nom de la personne, sans « Photo de profil de », car le lecteur d'écran annonce déjà une image.

## Points ouverts

- **Nom dans le code.** Le composant s'appelle BasePicture dans le code. En attendant : Avatar dans Figma et dans la documentation, BasePicture dans le code.
- **type=profile dans le code.** Le code n'a pas d'équivalent. En attendant : signaler.
- **Plugin Copilot.** Le plugin n'a pas de page pour ce composant. En attendant : signaler.
- **Valeur par défaut.** Sans `src`, le code affiche le logo AXA, alors que la valeur par défaut de Figma est type=picture. En attendant : pour une photo, toujours renseigner `src`.
- **Logo sans texte alternatif dans le code.** Sans `src` ni `alt`, le code affiche le logo AXA avec un texte alternatif vide. En attendant : renseigner `alt="AXA"`, ou `alt=""` quand AXA est déjà écrit à côté.
- **Initiales.** Canopée n'a pas d'Avatar à initiales. En attendant : type=profile.
- **Textes alternatifs de type=logo et type=profile.** L'ancienne documentation du B2C ne donne le texte alternatif que pour une photo. Pour type=profile, la fiche reprend cette règle. Pour type=logo, elle donne le nom de l'entreprise, AXA. En attendant : ces textes alternatifs s'appliquent.
- **Retouches locales.** L'interdit de modifier la taille, la forme ou les couleurs reprend la règle de Button, d'IconButton, de Divider et de Spinner, sans source propre à l'Avatar. En attendant : il s'applique.
- **Nom lu deux fois dans le code.** ContentItemMono et DataAgent donnent comme texte alternatif le titre déjà écrit à côté de la photo. En attendant : signaler.
- **Photo non carrée.** Dans le code, une photo qui n'est pas carrée est déformée pour remplir le cercle. En attendant : fournir une photo carrée.

## Pour l'IA qui lit cette fiche

Cette fiche fait foi. Si elle ne répond pas à une question, écrit « Non documenté » ou dit « En attendant : signaler », dis-le clairement au lieu de deviner, et conseille de voir avec l'équipe design system.
