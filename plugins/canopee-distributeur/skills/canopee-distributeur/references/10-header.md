# Composant Header (En-tête)

## Présentation
Header est la barre de navigation supérieure d'une application, avec support du logo, des informations utilisateur et des éléments de menu.

## Import
```tsx
import { 
  Header, 
  HeaderTitle, 
  NavBar, 
  NavBarItem,
  User, 
  Infos, 
  Name 
} from "@axa-fr/canopee-react/distributeur";
```

## Composants
- **Header** : Conteneur principal
- **HeaderTitle** : Section titre de l'en-tête
- **NavBar** : Conteneur du menu de navigation
- **NavBarItem** : Élément individuel du menu
- **User** : Affichage du profil utilisateur
- **Infos** : Affichage d'informations
- **Name** : Affichage du nom de l'application/marque

## En-tête simple

```tsx
import logo from "@axa-fr/canopee-css/logo-axa.svg";
import { Header, Name } from "@axa-fr/canopee-react/distributeur";

<Header>
  <Name 
    img={logo}
    title="Mon Application"
    subtitle="Version 1.0"
    onClick={() => navigate("/")}
  />
</Header>
```

## Avec informations utilisateur

```tsx
import { Header, Name, User, Infos } from "@axa-fr/canopee-react/distributeur";

<Header>
  <Name img={logo} title="Tableau de bord" subtitle="Panneau d'administration" />
  <Infos infos={[
    { word: "Client :", definition: "0123456789" },
    { word: "Statut :", definition: "Actif" }
  ]} />
  <User username="Jean Dupont" onLogout={handleLogout} />
</Header>
```

## Avec navigation

`NavBar` est le menu principal (`id="mainmenu"`, en tiroir sur petit écran) ; chaque `NavBarItem` reçoit
son lien dans `actionElt`.

```tsx
import { NavBar, NavBarItem } from "@axa-fr/canopee-react/distributeur";

const [isMenuOpen, setIsMenuOpen] = useState(false);

<NavBar isVisible={isMenuOpen} onClick={() => setIsMenuOpen(false)}>
  <NavBarItem actionElt={<a className="af-nav__link" href="/accueil">Accueil</a>} />
  <NavBarItem actionElt={<a className="af-nav__link" href="/produits">Produits</a>} />
  <NavBarItem actionElt={<a className="af-nav__link" href="/a-propos">À propos</a>} />
</NavBar>
```

### Clavier (NavBar)

- Tab entre dans le menu sur l'élément actif ; **Tab et Maj+Tab en sortent** vers l'élément suivant ou
  précédent de la page.
- **Entrée** suit le lien de l'élément qui a le focus.
- Le menu n'intercepte que les flèches (élément actif, sous-menu) et Échap (fermeture du sous-menu) :
  toutes les autres touches gardent leur comportement natif.

## HeaderTitle (barre de titre de page)

Le composant `HeaderTitle` rend un `<h1>` stylé avec support d'un sous-titre, de contenus gauche/droite, d'un menu hamburger et d'une barre d'ancrage.

### Props — HeaderTitle

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `string` | **Obligatoire** | Titre principal de la page (rendu en `<h1>`) |
| `subtitle` | `string` | - | Sous-titre affiché sous le titre |
| `contentLeft` | `ReactNode` | - | Contenu à gauche du titre |
| `contentRight` | `ReactNode` | - | Contenu affiché à droite (ex : bouton, lien) |
| `isSticky` | `boolean` | `true` | Barre collante en haut de page |
| `toggleMenu` | `() => void` | - | Affiche, sur petit écran, le bouton hamburger qui ouvre le menu principal (`<button>`) |
| `isMenuOpen` | `boolean` | - | État du menu ouvert par ce bouton, exposé par `aria-expanded`, avec `aria-controls="mainmenu"` (les deux absents si non renseigné ; `MenuTitleWrapper` le transmet) |
| `toggleMenuLabel` | `string` | `"Menu principal"` | Nom accessible du bouton hamburger |
| `anchorNavBarItems` | `AnchorNavBarItem[]` | - | Éléments de navigation par ancres sous le titre |
| `children` | `ReactNode` | - | Contenu additionnel après le titre |
| `className` | `string` | `"af-title-bar"` | Classe CSS |

### Utilisation

```tsx
import { HeaderTitle } from "@axa-fr/canopee-react/distributeur";

// Titre simple
<HeaderTitle title="Tableau de bord" />

// Avec sous-titre
<HeaderTitle title="Détail du contrat" subtitle="N° 123456789" />

// Avec bouton hamburger (petit écran) : passer l'état du menu pour aria-expanded
const [isMenuOpen, setIsMenuOpen] = useState(false);
<HeaderTitle
  title="Tableau de bord"
  toggleMenu={() => setIsMenuOpen(!isMenuOpen)}
  isMenuOpen={isMenuOpen}
/>

// Avec contenu à droite
<HeaderTitle
  title="Mes informations"
  contentRight={<Button variant="secondary">Modifier</Button>}
/>

// Avec barre d'ancrage
<HeaderTitle
  title="Dossier client"
  anchorNavBarItems={[
    { label: "Identité", href: "#identite" },
    { label: "Contrats", href: "#contrats" },
    { label: "Sinistres", href: "#sinistres" },
  ]}
/>
```

## Classes CSS
- `.af-header` - En-tête de base
- `.af-container` - Contrainte de largeur
- `.af-logo` - Conteneur du logo
- `.af-logo__brand` - Image de marque
- `.af-title-bar` - Barre de titre de page (HeaderTitle)
