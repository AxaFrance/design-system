# Header Layout Component

## Overview
Header provides the top navigation bar of an application with support for logos, user information, and menu items.

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

## Components
- **Header**: Top-level container
- **HeaderTitle**: Header title section
- **NavBar**: Navigation menu container
- **NavBarItem**: Individual menu item
- **User**: User profile display
- **Infos**: Information display
- **Name**: Application/brand name display

## Basic Header

```tsx
import logo from "@axa-fr/canopee-css/logo-axa.svg";
import { Header, Name } from "@axa-fr/canopee-react/distributeur";

<Header>
  <Name 
    img={logo}
    title="My Application"
    subtitle="Version 1.0"
    onClick={() => navigate("/")}
  />
</Header>
```

## Header with User Info

```tsx
import { Header, Name, User, Infos } from "@axa-fr/canopee-react/distributeur";

<Header>
  <Name img={logo} title="Dashboard" subtitle="Admin Panel" />
  <Infos infos={[
    { word: "Customer:", definition: "0123456789" },
    { word: "Status:", definition: "Active" }
  ]} />
  <User username="John Doe" onLogout={handleLogout} />
</Header>
```

## With Navigation

```tsx
import { Header, NavBar, NavBarItem } from "@axa-fr/canopee-react/distributeur";

<Header>
  <Name img={logo} title="App" />
  <NavBar>
    <NavBarItem onClick={() => navigate("/home")}>Home</NavBarItem>
    <NavBarItem onClick={() => navigate("/products")}>Products</NavBarItem>
    <NavBarItem onClick={() => navigate("/about")}>About</NavBarItem>
  </NavBar>
</Header>
```

## CSS Classes
- `.af-header` - Base header
- `.af-container` - Width constraint
- `.af-logo` - Logo wrapper
- `.af-logo__brand` - Brand image
