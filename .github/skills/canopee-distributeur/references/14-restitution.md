# Restitution

## Overview
Restitution component displays read-only data in a definition list format (label-value pairs).

## Import
```tsx
import { 
  Restitution, 
  RestitutionList,
  SectionRestitution,
  ArticleRestitution 
} from "@axa-fr/canopee-react/distributeur";
```

## Basic Usage

```tsx
import { Restitution } from "@axa-fr/canopee-react/distributeur";

<Restitution label="Email">
  john.doe@example.com
</Restitution>
```

## Multiple Fields

```tsx
import { RestitutionList } from "@axa-fr/canopee-react/distributeur";

<RestitutionList>
  <Restitution label="Full Name">
    John Doe
  </Restitution>
  <Restitution label="Email">
    john@example.com
  </Restitution>
  <Restitution label="Phone">
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
    Personal Information
  </SectionRestitutionTitle>
  <ArticleRestitution>
    <Restitution label="Name">John Doe</Restitution>
    <Restitution label="Age">35</Restitution>
  </ArticleRestitution>
</SectionRestitution>
```

## CSS Classes
- `.af-restitution__listdef` - Base class
- `.af-restitution__text` - Label
- `.af-restitution__listdef-value` - Value
