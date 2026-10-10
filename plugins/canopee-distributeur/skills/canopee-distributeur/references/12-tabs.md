# Tabs (Onglets)

## Présentation
Le composant Tabs fournit une navigation par onglets avec affichage/masquage automatique du contenu associé.

## Import
```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";
```

## Props — Tabs

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `Tabs.Tab` (un ou plusieurs) | **Obligatoire** | Les onglets |
| `activeIndex` | `string` | `"0"` | Index de l'onglet actif, sous forme de chaîne ; suivi quand la prop change |
| `onChange` | `(event) => void` | - | Appelé à chaque changement d'onglet (clic, flèches, Début, Fin) |
| `aria-label` | `string` | - | Nom accessible de la liste d'onglets |
| `aria-labelledby` | `string` | - | Id d'un titre visible qui nomme la liste d'onglets |
| `className` | `string` | `"af-tabs"` | Classe CSS |

## Props — Tabs.Tab

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | **Obligatoire** | Titre de l'onglet |
| `children` | `ReactNode` | - | Contenu du panneau |

## Utilisation de base

```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";

<Tabs aria-label="Mon compte">
  <Tabs.Tab title="Accueil">Contenu de l'accueil</Tabs.Tab>
  <Tabs.Tab title="Paramètres">Contenu des paramètres</Tabs.Tab>
  <Tabs.Tab title="Aide">Contenu de l'aide</Tabs.Tab>
</Tabs>
```

## Exemple avec contenu

```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";

<h2 id="titre-profil">Mon profil</h2>
<Tabs aria-labelledby="titre-profil" activeIndex="1">
  <Tabs.Tab title="Profil">
    <section>
      <h3>Profil utilisateur</h3>
      <p>Informations du profil...</p>
    </section>
  </Tabs.Tab>

  <Tabs.Tab title="Sécurité">
    <section>
      <h3>Paramètres de sécurité</h3>
      <p>Mot de passe et double authentification...</p>
    </section>
  </Tabs.Tab>

  <Tabs.Tab title="Notifications">
    <section>
      <h3>Préférences de notification</h3>
      <p>Paramètres e-mail et SMS...</p>
    </section>
  </Tabs.Tab>
</Tabs>
```

## Accessibilité

- La liste des titres est un `tablist` (sur le `ul`), chaque titre un `tab` avec `aria-selected` ; chaque
  panneau est un `tabpanel` relié à son onglet (`aria-controls`, `aria-labelledby`), hors du `tablist`.
- Clavier : seul l'onglet actif est dans l'ordre de tabulation ; flèches gauche et droite, Début et Fin
  changent d'onglet ; Tab mène ensuite au panneau affiché.
- Nommer la liste avec `aria-label`, ou avec `aria-labelledby` vers un titre visible, en particulier quand
  la page contient plusieurs groupes d'onglets.

## Classes CSS
- `.af-tabs` - Conteneur principal des onglets
- `.af-tabs__control` - Liste des onglets (`tablist`)
- `.af-tabs__item` (`--active`) - Élément de liste d'un onglet
- `.af-tabs__link` - Bouton d'onglet (`tab`)
- `.af-tabs__content` - Conteneur des panneaux
- `.af-tabs__pane` (`--active`) - Panneau de contenu (`tabpanel`), masqué s'il n'est pas actif
