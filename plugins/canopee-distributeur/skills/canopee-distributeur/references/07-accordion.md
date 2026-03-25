# Accordion

## Overview
The Accordion component is a collapsible container system that displays multiple sections with expand/collapse functionality. It supports single-expand and multi-expand modes with optional action buttons.

## Import
```tsx
import { 
  Accordion, 
  CollapseCard 
} from "@axa-fr/canopee-react/distributeur";
```

## Components

### Accordion
Container for collapse sections.

### CollapseCard (or CollapseItem)
Individual expandable section within accordion.

## Props

### Accordion

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "white" \| "light"` | `"default"` | Visual styling |
| `onlyOne` | `boolean` | `false` | Only one card open at a time |
| `children` | `CollapseCard[]` | Required | Array of CollapseCard components |
| `className` | `string` | - | Additional CSS classes |
| `classModifier` | `string` | - | CSS modifier (deprecated, use variant) |

### CollapseCard

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | Required | Unique identifier for card |
| `title` | `string \| ReactNode` | Required | Card header/title |
| `open` | `boolean` | `false` | Initially open state |
| `children` | `ReactNode` | - | Collapsible content |
| `actions` | `Action[]` | - | Action buttons |
| `variant` | `"default" \| "white" \| "light"` | - | Optional override |
| `classModifier` | `string` | - | Additional CSS modifier |

## Action Object

```tsx
type Action = {
  key: string;           // Unique action identifier
  label: string;         // Button text
  onClick: () => void;   // Click handler
  leftIcon?: ReactNode;  // Icon on left
  rightIcon?: ReactNode; // Icon on right
};
```

## Basic Usage

### Default Accordion
```tsx
import { Accordion, CollapseCard } from "@axa-fr/canopee-react/distributeur";

<Accordion>
  <CollapseCard 
    id="section1" 
    title="Section 1"
  >
    Content for section 1
  </CollapseCard>
  
  <CollapseCard 
    id="section2" 
    title="Section 2"
    open={true}
  >
    Content for section 2 (initially open)
  </CollapseCard>
</Accordion>
```

### Multi-Expand (Default)
Multiple sections can be open simultaneously:
```tsx
<Accordion>
  <CollapseCard id="faq1" title="What is included?">
    Full description of included features...
  </CollapseCard>
  <CollapseCard id="faq2" title="How long is shipping?">
    Estimated shipping details...
  </CollapseCard>
</Accordion>
```

### Single-Expand Mode
Only one section open at a time:
```tsx
<Accordion onlyOne={true}>
  <CollapseCard id="step1" title="Step 1: Register">
    Registration instructions...
  </CollapseCard>
  <CollapseCard id="step2" title="Step 2: Verify">
    Verification instructions...
  </CollapseCard>
</Accordion>
```

## Visual Variants

### Default (Blue background)
```tsx
<Accordion variant="default">
  <CollapseCard id="card" title="Default Style">
    Content with blue header
  </CollapseCard>
</Accordion>
```

### White Variant
```tsx
<Accordion variant="white">
  <CollapseCard id="card" title="White Background">
    Minimalist white header style
  </CollapseCard>
</Accordion>
```

### Light Variant
```tsx
<Accordion variant="light">
  <CollapseCard id="card" title="Light Style">
    Light gray background
  </CollapseCard>
</Accordion>
```

## With Actions

### Single Action
```tsx
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";
import { Svg } from "@axa-fr/canopee-react/distributeur";

<Accordion>
  <CollapseCard
    id="item1"
    title="Item with Action"
    actions={[
      {
        key: "delete",
        label: "Delete",
        rightIcon: <Svg src={deleteIcon} />,
        onClick: () => console.log("Delete clicked")
      }
    ]}
  >
    Content here
  </CollapseCard>
</Accordion>
```

### Multiple Actions (Max 2)
```tsx
import editIcon from "@material-symbols/svg-400/outlined/edit.svg";
import deleteIcon from "@material-symbols/svg-400/outlined/delete.svg";

<CollapseCard
  id="item2"
  title="Editable Item"
  actions={[
    {
      key: "edit",
      label: "Edit",
      leftIcon: <Svg src={editIcon} />,
      onClick: () => handleEdit()
    },
    {
      key: "delete",
      label: "Delete",
      rightIcon: <Svg src={deleteIcon} />,
      onClick: () => handleDelete()
    }
  ]}
>
  Item content
</CollapseCard>
```

## Content Examples

### Rich HTML Content
```tsx
<CollapseCard id="rich" title="Complex Content">
  <section>
    <h3>Features</h3>
    <ul>
      <li>Feature 1</li>
      <li>Feature 2</li>
    </ul>
  </section>
  <section>
    <h3>Technical Specs</h3>
    <table>
      <tr><td>Spec</td><td>Value</td></tr>
    </table>
  </section>
</CollapseCard>
```

### Nested Components
```tsx
import { CheckboxItem } from "@axa-fr/canopee-react/distributeur";

<CollapseCard id="nested" title="With Checkboxes">
  <CheckboxItem label="Option A" />
  <CheckboxItem label="Option B" />
  <CheckboxItem label="Option C" />
</CollapseCard>
```

## FAQ Example

```tsx
const FAQSection = () => {
  const faqs = [
    {
      id: "q1",
      title: "What payment methods are accepted?",
      content: "We accept all major credit cards, PayPal, and bank transfers."
    },
    {
      id: "q2",
      title: "What is your refund policy?",
      content: "30-day money-back guarantee on all purchases."
    },
    {
      id: "q3",
      title: "Do you ship internationally?",
      content: "Yes, we ship to over 150 countries worldwide."
    }
  ];
  
  return (
    <Accordion onlyOne={false}>
      {faqs.map(faq => (
        <CollapseCard 
          key={faq.id} 
          id={faq.id} 
          title={faq.title}
        >
          {faq.content}
        </CollapseCard>
      ))}
    </Accordion>
  );
};
```

## Settings/Configuration Example

```tsx
const SettingsPanel = () => {
  const [settings, setSettings] = useState({});
  
  const handleDelete = (itemId: string) => {
    console.log(`Removing ${itemId}`);
    // Handle deletion logic
  };
  
  return (
    <Accordion variant="white" onlyOne={false}>
      <CollapseCard
        id="notifications"
        title="Notification Settings"
        open={true}
      >
        <CheckboxItem label="Email notifications" />
        <CheckboxItem label="SMS alerts" />
      </CollapseCard>
      
      <CollapseCard
        id="privacy"
        title="Privacy Settings"
        actions={[
          {
            key: "reset",
            label: "Reset",
            onClick: () => handleDelete("privacy")
          }
        ]}
      >
        <CheckboxItem label="Share profile" />
        <CheckboxItem label="Allow recommendations" />
      </CollapseCard>
    </Accordion>
  );
};
```

## Controlled Expansion

```tsx
const [expandedCards, setExpandedCards] = useState<Set<string>>(
  new Set(["section1"])
);

const toggleCard = (cardId: string) => {
  setExpandedCards(prev => {
    const newSet = new Set(prev);
    if (newSet.has(cardId)) {
      newSet.delete(cardId);
    } else {
      newSet.add(cardId);
    }
    return newSet;
  });
};

// Note: CollapseCard expansion is controlled internally
// Use open prop to set initial state
<Accordion>
  <CollapseCard id="card1" title="Card 1" open={expandedCards.has("card1")}>
    Content
  </CollapseCard>
</Accordion>
```

## Accessibility
- Keyboard navigation (Tab through titles, Enter/Space to expand)
- Sections clearly labeled with headings
- Action buttons accessible via keyboard
- ARIA attributes for expanded/collapsed state
- Sufficient color contrast in all variants

## Best Practices
- Use descriptive, concise section titles
- Keep content within each section focused
- Use onlyOne mode for step-by-step workflows
- Provide actions only when needed
- Put most important FAQ/content in first section
- Test with keyboard navigation
- Use consistent variant across related accordions

## CSS Classes
- `.af-accordion` - Base accordion class
- `.af-accordion--default` - Default variant
- `.af-accordion--white` - White variant
- `.af-accordion--light` - Light variant
