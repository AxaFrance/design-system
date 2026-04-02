# Restitution

## Présentation
Les composants Restitution forment un groupe de composants liés permettant d'afficher des données récapitulatives en lecture seule (paires label-valeur). Le composant racine est `ArticleRestitution` qui englobe tous les autres.

## Import
```tsx
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionRow,
  SectionRestitutionColumn,
  Restitution,
  RestitutionList,
} from "@axa-fr/canopee-react/distributeur";
```

## Hiérarchie des composants

La structure d'imbrication est la suivante :

```
ArticleRestitution               (article — conteneur racine)
├── HeaderRestitution            (header — titre, sous-titre, lien d'action)
└── SectionRestitution           (section — conteneur de lignes)
    └── SectionRestitutionRow    (div — ligne, avec titre optionnel)
        └── SectionRestitutionColumn  (div — colonne, avec titre optionnel)
            └── Restitution      (dl — paire label/valeur)
                └── RestitutionList  (ul — liste de valeurs, optionnel)
```

## Composants et props

### ArticleRestitution

Conteneur racine `<article>`.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Contenu (HeaderRestitution + SectionRestitution) |
| `className` | `string` | `"af-restitution"` | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM (ex : `"lg"`) |

### HeaderRestitution

En-tête avec titre, sous-titre et contenu à droite (ex : bouton Modifier).

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | **Obligatoire** | Titre principal |
| `subtitle` | `ReactNode` | - | Sous-titre |
| `rightTitle` | `ReactNode` | - | Contenu à droite (ex : lien de modification) |
| `className` | `string` | `"af-restitution__header"` | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM |

### SectionRestitution

Conteneur `<section>` pour les lignes de restitution.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `children` | `ReactNode` | - | Éléments `SectionRestitutionRow` |
| `className` | `string` | `"af-restitution__content"` | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM |

### SectionRestitutionRow

Ligne de restitution avec titre optionnel. Peut contenir des `SectionRestitutionColumn`.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `ReactNode` | - | Titre de la ligne (rendu via `SectionRestitutionTitle`) |
| `children` | `ReactNode` | - | Éléments `SectionRestitutionColumn` |
| `className` | `string` | `"col col-sm-12 col-md-12 col-lg-12 col-xl-12"` | Classe CSS |
| `classNameContainer` | `string` | `"row af-restitution__content-left"` | Classe CSS du conteneur interne |
| `classModifier` | `string` | - | Modificateur CSS BEM |

### SectionRestitutionColumn

Colonne à l'intérieur d'une ligne, avec titre optionnel. Contient les éléments `Restitution`.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `title` | `string` | - | Titre de la colonne |
| `children` | `ReactNode` | - | Éléments `Restitution` |
| `className` | `string` | `"col-sm-12 col-md-12 col-lg-6 col-xl-6"` | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM |

### Restitution

Paire label/valeur rendue en `<dl>`. Si aucun enfant n'est passé, affiche `"-"` par défaut.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `label` | `string` | **Obligatoire** | Label de la donnée |
| `children` | `ReactNode` | `"-"` | Valeur à afficher |
| `className` | `string` | `"af-restitution__listdef"` | Classe CSS |
| `classModifier` | `string` | - | Modificateur CSS BEM (ex : `"marge"`) |

### RestitutionList

Liste de valeurs sous forme `<ul>`, à utiliser comme **enfant** d'un composant `Restitution`.

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `values` | `string[]` | **Obligatoire** | Valeurs à afficher en liste |

## Utilisation de base

### Restitution simple (label-valeur)
```tsx
<ArticleRestitution>
  <SectionRestitution>
    <SectionRestitutionRow>
      <SectionRestitutionColumn>
        <Restitution label="Nom">Jean Dupont</Restitution>
        <Restitution label="Email">jean@exemple.fr</Restitution>
        <Restitution label="Téléphone">+33 1 23 45 67 89</Restitution>
      </SectionRestitutionColumn>
    </SectionRestitutionRow>
  </SectionRestitution>
</ArticleRestitution>
```

### Valeur absente (affiche "-" par défaut)
```tsx
<Restitution label="TT" />
{/* Affiche "TT" avec la valeur "-" */}
```

## Exemple complet

```tsx
import {
  ArticleRestitution,
  HeaderRestitution,
  SectionRestitution,
  SectionRestitutionRow,
  SectionRestitutionColumn,
  Restitution,
  RestitutionList,
} from "@axa-fr/canopee-react/distributeur";

const RecapContrat = () => (
  <ArticleRestitution classModifier="lg">
    <HeaderRestitution
      title="Tarifs"
      subtitle="Tout adhérent, assuré, base (sans EAC ou sans PAC)"
      rightTitle={
        <a className="af-link af-link--hasIconLeft" href="/modifier">
          <span className="af-link__text">Modifier</span>
        </a>
      }
    />
    <SectionRestitution>
      <SectionRestitutionRow title="Base de calcul des prestations">
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
          <Restitution label="Garanties complémentaires" classModifier="marge">
            <RestitutionList
              values={[
                "Vol au domicile",
                "Vol étendu aux appareils nomades",
                "Bris de glace",
                "Plomberie et électricité",
                "Jardin",
              ]}
            />
          </Restitution>
        </SectionRestitutionColumn>
        <SectionRestitutionColumn>
          <Restitution label="TA">99,99 %</Restitution>
          <Restitution label="EURO">EURO</Restitution>
          <Restitution label="TT" />
        </SectionRestitutionColumn>
      </SectionRestitutionRow>
    </SectionRestitution>
  </ArticleRestitution>
);
```

### Colonnes avec titres individuels

Les titres peuvent être portés par la `SectionRestitutionRow` (titre commun) ou par chaque `SectionRestitutionColumn` (titres par colonne) :

```tsx
<SectionRestitution>
  <SectionRestitutionRow>
    <SectionRestitutionColumn title="Garanties incluses">
      <Restitution label="TA">99,99 %</Restitution>
      <Restitution label="EURO">EURO</Restitution>
    </SectionRestitutionColumn>
    <SectionRestitutionColumn title="Garanties optionnelles">
      <Restitution label="TA">50,00 %</Restitution>
      <Restitution label="EURO">
        <span style={{ textDecoration: "underline" }}>EURO</span>
      </Restitution>
    </SectionRestitutionColumn>
  </SectionRestitutionRow>
</SectionRestitution>
```

## Classes CSS
- `.af-restitution` — Conteneur article
- `.af-restitution__header` — En-tête
- `.af-restitution__title` — Titre de l'en-tête
- `.af-restitution__content` — Section
- `.af-restitution__content-title` — Titre de ligne/colonne (h4)
- `.af-restitution__listdef` — Paire label/valeur (dl)
- `.af-restitution__text` — Label
- `.af-restitution__listdef-value` — Valeur
- `.af-restitution__listul` — Liste de valeurs
