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

```tsx
import { Header, NavBar, NavBarItem } from "@axa-fr/canopee-react/distributeur";

<Header>
  <Name img={logo} title="Application" />
  <NavBar>
    <NavBarItem onClick={() => navigate("/accueil")}>Accueil</NavBarItem>
    <NavBarItem onClick={() => navigate("/produits")}>Produits</NavBarItem>
    <NavBarItem onClick={() => navigate("/a-propos")}>À propos</NavBarItem>
  </NavBar>
</Header>
```

## Classes CSS
- `.af-header` - En-tête de base
- `.af-container` - Contrainte de largeur
- `.af-logo` - Conteneur du logo
- `.af-logo__brand` - Image de marque
