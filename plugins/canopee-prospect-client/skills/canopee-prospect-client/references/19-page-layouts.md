# Layouts de page et patterns : MainLayout, ColumnsLayout, PatternWithAction, PatternMozaicGrid, PatternMozaicFree, PatternCardMarketing

Ces composants construisent une page complète sur la grille Canopée sans écrire de CSS de grille.

- **Layouts** : structurent la page (`MainLayout`) et ses colonnes (`ColumnsLayout`).
- **Patterns** : organisent un groupe de contenus dans une colonne ou une section.

Tous sont exportés par `@axa-fr/canopee-react/prospect` et `@axa-fr/canopee-react/client`, avec la même API.

---

## Règles de grille à connaître

La grille est définie par la classe `.grid` : 4 colonnes en mobile, 8 au-dessus de 667px, 12 au-dessus de 1023px.

- Un enfant direct de `.grid` occupe une plage définie par `--start` et `--cols`.
- La classe `.subgrid` permet à un élément de réutiliser les colonnes de son parent.
- `MainLayout` rend le contenu principal dans `<main class="af-main-layout__center grid">`. Les layouts et patterns placés dedans héritent donc de la grille.
- `ColumnsLayout`, `PatternWithAction` et `PatternMozaicGrid` reposent sur `.subgrid` : ils doivent être placés **dans un contexte `.grid`** (le `<main>` de `MainLayout`, une colonne de `ColumnsLayout`, ou un élément `.subgrid`).
- `PatternMozaicFree` et `PatternCardMarketing` créent leur propre grille interne : ils fonctionnent partout.

Pour choisir le bon pattern :

| Besoin                                                                     | Pattern                |
| -------------------------------------------------------------------------- | ---------------------- |
| Section avec un titre et une action (« Voir tout », « Ajouter »)           | `PatternWithAction`    |
| Cartes alignées sur les colonnes de la grille, nombre par ligne responsive | `PatternMozaicGrid`    |
| N colonnes égales, indépendantes de la grille (1 colonne sous 1024px)      | `PatternMozaicFree`    |
| Mise en avant de `CardMarketing` (2, 3 ou 4 cartes)                        | `PatternCardMarketing` |

---

## MainLayout

Layout de page : `Header`, lien retour, zone haute, contenu principal sur la grille, zone basse, `Footer`, et `DebugGrid` en option. Chaque zone n'est rendue que si sa prop ou son slot est fourni.

Le fond dépend du thème : blanc (`--white-1000`) en Prospect, `--gray-050` en Client.

### Import

```tsx
import {
  MainLayout,
  type MainLayoutProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type MainLayoutProps = {
  headerProps?: HeaderProps; // Props du Header (absent = pas de header)
  footerProps?: FooterProps; // Props du Footer (absent = pas de footer)
  backLinkProps?: LinkProps; // Lien retour sous le header, avec une icône flèche gauche
  debugGridProps?: DebugGridProps; // Options de la grille de développement
  className?: string; // Classe sur la racine .af-main-layout
  mainProps?: Omit<ComponentProps<"main">, "children">; // Props natives du <main>, dont className et ref
  children?: ReactNode; // Contenu rendu dans <main class="grid">
};
```

### Slots

```tsx
MainLayout.Top; // Entre le header et le <main> (bandeau, message…)
MainLayout.Bottom; // Entre le <main> et le footer
```

Chaque slot accepte un `className` appliqué à son wrapper (`.af-main-layout__top` ou `.af-main-layout__bottom`). Les slots ne sont **pas** sur la grille par défaut : ajoute `className="grid"` pour aligner leur contenu sur les colonnes.

### Structure rendue

```html
<div class="af-main-layout">
  <header>…</header>
  <div class="grid af-main-layout__back-link">…</div>
  <div class="af-main-layout__top">…</div>
  <main class="af-main-layout__center grid">…</main>
  <div class="af-main-layout__bottom">…</div>
  <footer>…</footer>
</div>
```

La racine occupe au minimum toute la hauteur de l'écran (`100svh`) : le footer reste donc en bas même avec peu de contenu.

### Exemple

```tsx
<MainLayout
  headerProps={{
    appNameProps: { label: "Mon espace", logoLinkProps: { href: "/" } },
    tabMenuProps,
    menuBurgerProps,
  }}
  footerProps={{
    expandLinkText: "À propos d'AXA",
    copyright: "© 2026 AXA - Tous droits réservés",
    links: [{ label: "Mentions légales", href: "/mentions-legales" }],
  }}
  backLinkProps={{ href: "/", children: "Retour" }}
>
  <MainLayout.Top className="grid">
    <CardMessage
      variant="info"
      title="Info"
      text="Maintenance prévue ce soir"
    />
  </MainLayout.Top>

  <Heading level={1}>Titre de la page</Heading>
  <Card>Contenu principal</Card>
</MainLayout>
```

> ⚠️ Ne mets pas `className="grid"` directement sur un composant qui a déjà `width: 100%` (comme `CardMessage`) : les marges de la grille s'ajoutent et provoquent un débordement horizontal. Mets la classe sur le slot.

---

## ColumnsLayout

Layout en colonnes à placer dans le `<main>` de `MainLayout`. Il affiche un titre de page puis jusqu'à 3 colonnes.

| Colonnes présentes (desktop ≥ 1024px) | Gauche | Contenu                           | Droite |
| ------------------------------------- | ------ | --------------------------------- | ------ |
| Contenu seul                          | –      | 12 cols                           | –      |
| Gauche + Contenu                      | 3 cols | 9 cols                            | –      |
| Contenu + Droite                      | –      | 9 cols                            | 3 cols |
| Gauche + Contenu + Droite             | 3 cols | 6 cols                            | 3 cols |
| Contenu seul + `isFit`                | –      | 8 cols centrées (colonnes 3 à 10) | –      |

En mobile et en tablette, les colonnes s'empilent dans l'ordre Gauche, Contenu, Droite.

### Import

```tsx
import {
  ColumnsLayout,
  type ColumnsLayoutProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type ColumnsLayoutProps = PropsWithChildren<{
  headingProps?: HeadingProps; // Titre de page (Heading)
  isFit?: boolean; // Réduit la largeur à 8 colonnes centrées sur desktop
  className?: string;
}>;
```

### Slots

```tsx
ColumnsLayout.Top; // Au-dessus du titre (article .subgrid pleine largeur)
ColumnsLayout.Left; // Colonne gauche
ColumnsLayout.Content; // Colonne centrale
ColumnsLayout.Right; // Colonne droite
```

Chaque colonne est une `.subgrid` : ses enfants directs s'empilent verticalement avec un espacement géré par le layout. Tu peux y placer directement des patterns.

### Exemple

```tsx
<MainLayout headerProps={headerProps} footerProps={footerProps}>
  <ColumnsLayout headingProps={{ children: "Bonjour Marion" }}>
    <ColumnsLayout.Left>
      <CardMarketing {...offre} />
      <DataAgent {...conseiller} />
    </ColumnsLayout.Left>

    <ColumnsLayout.Content>
      <PatternWithAction headingProps={{ children: "Mes contrats" }}>
        <PatternWithAction.Action>
          <Link href="/contrats" variant="button-secondary">
            Voir tous mes contrats
          </Link>
        </PatternWithAction.Action>
        <PatternMozaicFree>{/* cartes contrats */}</PatternMozaicFree>
      </PatternWithAction>
    </ColumnsLayout.Content>
  </ColumnsLayout>
</MainLayout>
```

```tsx
// Formulaire ou contenu de lecture centré
<ColumnsLayout headingProps={{ children: "Vos coordonnées" }} isFit>
  <ColumnsLayout.Content>
    <FormLayout>…</FormLayout>
  </ColumnsLayout.Content>
</ColumnsLayout>
```

---

## PatternWithAction

Section avec un titre et une action (bouton ou lien).

- **Desktop (≥ 1024px)** : l'action est alignée à droite du titre.
- **Mobile et tablette** : l'action passe **après** le contenu, pleine largeur.

La section est une `.subgrid` : son contenu reste aligné sur les colonnes du parent. Elle doit donc être placée dans un contexte `.grid` (par exemple une colonne de `ColumnsLayout`).

### Import

```tsx
import {
  PatternWithAction,
  type PatternWithActionProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type PatternWithActionProps = Omit<ComponentProps<"section">, "children"> & {
  headingProps?: HeadingProps; // Titre, rendu en h2 sauf si `level` est fourni
  children?: ReactNode; // Contenu + slot Action
};
```

### Slot

```tsx
PatternWithAction.Action; // L'action (Link variant="button-*", Button…)
```

### Exemple

```tsx
<PatternWithAction headingProps={{ children: "Mes derniers documents" }}>
  <PatternWithAction.Action>
    <Link href="/documents" variant="button-secondary">
      Afficher mes documents
    </Link>
  </PatternWithAction.Action>

  <PatternMozaicGrid cols={4} data-cols-desktop-small={4}>
    <Card>Document 1</Card>
    <Card>Document 2</Card>
    <Card>Document 3</Card>
  </PatternMozaicGrid>
</PatternWithAction>

// Titre de niveau 3
<PatternWithAction headingProps={{ children: "Sous-section", level: 3 }}>
  …
</PatternWithAction>
```

---

## PatternMozaicGrid

Mosaïque dont chaque élément occupe un nombre de colonnes **de la grille** défini par breakpoint. Les éléments restent alignés sur les colonnes du reste de la page.

- Chaque valeur est un nombre de colonnes **par élément**, pas un nombre d'éléments par ligne. Par exemple, sur une grille de 12 colonnes, `4` donne 3 éléments par ligne.
- Une valeur non fournie reprend celle du breakpoint inférieur (mobile → tablette → desktop-small → desktop-medium → desktop-large).
- La valeur est bornée entre 1 et le nombre de colonnes disponibles dans le parent.
- Le pattern doit être placé dans un contexte `.grid`.
- Les enfants **doivent transmettre la prop `style`** à leur élément racine (c'est le cas de `Card`, `CardMarketing` et des éléments HTML). Le pattern y injecte des variables CSS `--cols-*`.

### Import

```tsx
import {
  PatternMozaicGrid,
  type PatternMozaicGridProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type PatternMozaicGridProps = Omit<ComponentProps<"section">, "children"> & {
  children: ReactNode;
  cols?: number; // Valeur de départ si data-cols-mobile est absent (défaut : 2)
  "data-cols-mobile"?: number; // < 668px (défaut : cols)
  "data-cols-tablet"?: number; // ≥ 668px
  "data-cols-desktop-small"?: number; // ≥ 1024px
  "data-cols-desktop-medium"?: number; // ≥ 1280px
  "data-cols-desktop-large"?: number; // ≥ 1600px
};
```

### Exemple

```tsx
// 1 carte par ligne en mobile (4/4), 2 en tablette (4/8), 3 en desktop (4/12)
<PatternMozaicGrid
  data-cols-mobile={4}
  data-cols-tablet={4}
  data-cols-desktop-small={4}
>
  <CardMarketing {...offre1} />
  <CardMarketing {...offre2} />
  <CardMarketing {...offre3} />
</PatternMozaicGrid>
```

---

## PatternMozaicFree

Mosaïque de N colonnes de largeur égale, **indépendante** des colonnes de la grille. Elle est utile pour des listes de cartes qui doivent se partager la largeur disponible.

- Sous 1024px : 1 colonne.
- À partir de 1024px : `cols` colonnes égales.

### Import

```tsx
import {
  PatternMozaicFree,
  type PatternMozaicFreeProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type PatternMozaicFreeProps = Omit<ComponentProps<"section">, "children"> & {
  children: ReactNode;
  cols?: number; // Nombre de colonnes à partir de 1024px (défaut : 2)
};
```

### Exemple

```tsx
<PatternMozaicFree cols={3}>
  <Card>Assurance auto</Card>
  <Card>Assurance habitation</Card>
  <Card>Assurance vie</Card>
</PatternMozaicFree>
```

---

## PatternCardMarketing

Disposition dédiée aux `CardMarketing`. Les cartes d'une même ligne ont la même hauteur.

- Sous 1024px : 1 colonne.
- À partir de 1024px : 2 colonnes. **Avec exactement 3 cartes**, la première occupe 2 lignes et les deux autres s'empilent à droite (passe ces deux-là en `variant="horizontal"`).

### Import

```tsx
import {
  PatternCardMarketing,
  type PatternCardMarketingProps,
} from "@axa-fr/canopee-react/prospect";
// ou client
```

### Props

```tsx
type PatternCardMarketingProps = Omit<ComponentProps<"section">, "children"> & {
  children: ReactNode; // Les cartes, en enfants directs
};
```

### Exemple

```tsx
<PatternCardMarketing>
  <CardMarketing {...offre1} />
  <CardMarketing {...offre2} variant="horizontal" />
  <CardMarketing {...offre3} variant="horizontal" />
</PatternCardMarketing>
```

---

## Exemple complet : tableau de bord

Les composants s'emboîtent ainsi : `MainLayout` > `ColumnsLayout` > colonnes > patterns > cartes.

```tsx
import {
  Card,
  CardMarketing,
  CardMessage,
  ColumnsLayout,
  Heading,
  Link,
  MainLayout,
  PatternCardMarketing,
  PatternMozaicFree,
  PatternWithAction,
} from "@axa-fr/canopee-react/client";

export const Dashboard = () => (
  <MainLayout headerProps={headerProps} footerProps={footerProps}>
    <MainLayout.Top className="grid">
      <CardMessage variant="error" title="Paiement en retard" text="…" />
    </MainLayout.Top>

    <ColumnsLayout headingProps={{ children: "Bonjour Marion Clarentierre" }}>
      <ColumnsLayout.Left>
        <CardMarketing {...offreDuMoment} />
        <DataAgent {...conseiller} />
      </ColumnsLayout.Left>

      <ColumnsLayout.Content>
        <PatternWithAction headingProps={{ children: "Mes contrats" }}>
          <PatternWithAction.Action>
            <Link href="/contrats" variant="button-secondary">
              Voir tout
            </Link>
          </PatternWithAction.Action>
          <PatternMozaicFree>{/* cartes contrats */}</PatternMozaicFree>
        </PatternWithAction>

        <Card as="section" variant="vertical unstyled" className="subgrid">
          <Heading level={2}>Pour aller plus loin</Heading>
          <PatternCardMarketing>
            <CardMarketing {...offre1} />
            <CardMarketing {...offre2} variant="horizontal" />
            <CardMarketing {...offre3} variant="horizontal" />
          </PatternCardMarketing>
        </Card>
      </ColumnsLayout.Content>
    </ColumnsLayout>
  </MainLayout>
);
```

> Les exemples complets sont dans Storybook, sous **Layouts** (un composant par page) et **Pages/Exemples/Dashboard**.
