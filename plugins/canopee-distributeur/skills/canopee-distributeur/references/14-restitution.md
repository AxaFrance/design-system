# Restitution

## Présentation
Le composant Restitution affiche des données en lecture seule sous forme de liste de définitions (paires label-valeur).

## Import
```tsx
import { 
  Restitution, 
  RestitutionList,
  SectionRestitution,
  ArticleRestitution 
} from "@axa-fr/canopee-react/distributeur";
```

## Utilisation de base

```tsx
import { Restitution } from "@axa-fr/canopee-react/distributeur";

<Restitution label="Email">
  jean.dupont@exemple.fr
</Restitution>
```

## Champs multiples

```tsx
import { RestitutionList } from "@axa-fr/canopee-react/distributeur";

<RestitutionList>
  <Restitution label="Nom complet">
    Jean Dupont
  </Restitution>
  <Restitution label="Email">
    jean@exemple.fr
  </Restitution>
  <Restitution label="Téléphone">
    +33 1 23 45 67 89
  </Restitution>
</RestitutionList>
```

## Sections

```tsx
import { 
  SectionRestitution, 
  SectionRestitutionTitle,
  ArticleRestitution 
} from "@axa-fr/canopee-react/distributeur";

<SectionRestitution>
  <SectionRestitutionTitle>
    Informations personnelles
  </SectionRestitutionTitle>
  <ArticleRestitution>
    <Restitution label="Nom">Jean Dupont</Restitution>
    <Restitution label="Âge">35</Restitution>
  </ArticleRestitution>
</SectionRestitution>
```

## Classes CSS
- `.af-restitution__listdef` - Classe de base
- `.af-restitution__text` - Label
- `.af-restitution__listdef-value` - Valeur
