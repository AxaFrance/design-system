# Card

## Overview
The Card component is a clickable button-based container for displaying content with optional icons, error states, and active/selected states. It's commonly used for choice selection interfaces.

## Import
```tsx
import { Card, Svg } from "@axa-fr/canopee-react/distributeur";
```

## Basic Usage
```tsx
import { Card } from "@axa-fr/canopee-react/distributeur";

const MyComponent = () => {
  const [selectedCard, setSelectedCard] = useState<string | null>(null);
  
  return (
    <Card 
      id="card-1"
      onClick={() => setSelectedCard("card-1")}
      active={selectedCard === "card-1"}
    >
      Card Content
    </Card>
  );
};
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `orientation` | `"vertical" \| "horizontal"` | `"vertical"` | Layout orientation |
| `iconSrc` | `string` | `undefined` | Material Symbols SVG icon URL |
| `error` | `boolean` | `false` | Red error styling when true |
| `active` | `boolean` | `false` | Selected/active state styling |
| `id` | `string` | - | HTML id attribute |
| `onClick` | `(event) => void` | - | Click handler |
| `disabled` | `boolean` | `false` | Disables the card |
| `children` | `ReactNode` | - | Card content |

All standard HTML button attributes are supported.

## Orientations

### Vertical (Default)
Icon stacked above content (icon-on-top layout).
```tsx
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

<Card iconSrc={villaIcon}>
  House
</Card>
```

### Horizontal
Icon positioned to the left of content (side-by-side layout).
```tsx
import carIcon from "@material-symbols/svg-400/outlined/car.svg";

<Card orientation="horizontal" iconSrc={carIcon}>
  Vehicle
</Card>
```

## States

### Active/Selected State
```tsx
<Card 
  iconSrc={villaIcon}
  active={true}
>
  Selected Card
</Card>
```

### Error State
```tsx
<Card 
  iconSrc={villaIcon}
  error={true}
>
  Error Card
</Card>
```

### Active + Error (Mutually indicative)
```tsx
<Card 
  iconSrc={villaIcon}
  active={true}
  error={true}
>
  Conflicting States
</Card>
```

### Disabled State
```tsx
<Card disabled>
  Disabled Card
</Card>
```

## Icon Usage

### Material Symbols
```tsx
import searchIcon from "@material-symbols/svg-400/outlined/search.svg";
import { Card, Svg } from "@axa-fr/canopee-react/distributeur";

<Card iconSrc={searchIcon}>
  Search
</Card>
```

### Without Icon
```tsx
<Card>Content Only</Card>
```

## Full Example - Choice Selection

```tsx
import { useState } from "react";
import { Card } from "@axa-fr/canopee-react/distributeur";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import apartmentIcon from "@material-symbols/svg-400/outlined/apartment.svg";
import workIcon from "@material-symbols/svg-400/outlined/work.svg";

const PropertyTypeSelector = () => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  
  const propertyTypes = [
    { id: "home", label: "House", icon: homeIcon },
    { id: "apartment", label: "Apartment", icon: apartmentIcon },
    { id: "office", label: "Office", icon: workIcon }
  ];
  
  return (
    <div style={{ display: "flex", gap: "1rem" }}>
      {propertyTypes.map(type => (
        <Card
          key={type.id}
          id={type.id}
          iconSrc={type.icon}
          active={selectedType === type.id}
          onClick={() => setSelectedType(type.id)}
        >
          {type.label}
        </Card>
      ))}
    </div>
  );
};
```

## Accessibility
- Cards are rendered as `<button type="button">` elements
- Click handlers are keyboard accessible (Enter, Space)
- Use `active` state instead of visual markers for selection
- Error state should be accompanied by error messaging elsewhere
- Consider `aria-label` for icon-only cards for clarity

## Best Practices
- Use Cards in groups for selection workflows
- Pair with clear instructions about what each card represents
- Use consistent icon sizes and styles
- Provide feedback when cards are selected/active
- Use error state to highlight invalid selections
- Consider responsive layouts for mobile (single column vs grid)
- Don't mix error and active states on the same card

## CSS Classes
- `.af-card` - Base card class
- `.af-card--vertical` - Vertical orientation (default, no modifier needed)
- `.af-card--horizontal` - Horizontal orientation
- `.af-card--active` - Active/selected state
- `.af-card--error` - Error state
