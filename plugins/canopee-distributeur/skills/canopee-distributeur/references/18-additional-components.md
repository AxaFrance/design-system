# Additional Core Components

## Divider

Simple visual separator line component.

```tsx
import { Divider } from "@axa-fr/canopee-react/distributeur";

<Divider />
<Divider className="custom-divider" />
```

## Title

Styled heading component.

```tsx
import { Title } from "@axa-fr/canopee-react/distributeur";

<Title level={1}>Main Title</Title>
<Title level={2}>Subtitle</Title>
<Title level={3}>Section Title</Title>
```

## Action

Button-like action component for triggering operations.

```tsx
import { Action } from "@axa-fr/canopee-react/distributeur";

<Action onClick={() => handleAction()}>
  Perform Action
</Action>
```

## Svg

SVG wrapper component for icon rendering.

```tsx
import { Svg } from "@axa-fr/canopee-react/distributeur";
import icon from "@material-symbols/svg-400/outlined/info.svg";

<Svg src={icon} alt="Information" />
```

## MainContainer

Layout wrapper for main content area.

```tsx
import { MainContainer } from "@axa-fr/canopee-react/distributeur";

<MainContainer>
  <h1>Page Content</h1>
  <p>Content goes here</p>
</MainContainer>
```

## HelpButton

Interactive help/info button component.

```tsx
import { HelpButton } from "@axa-fr/canopee-react/distributeur";

<HelpButton>
  This is help text explaining the field
</HelpButton>
```

## Loader

Loading indicator component.

```tsx
import { Loader } from "@axa-fr/canopee-react/distributeur";

<Loader />
<Loader size="small" />
<Loader size="large" />
```

## CardData

Data display card component.

```tsx
import { CardData } from "@axa-fr/canopee-react/distributeur";

<CardData variant="default">
  <h3>Card Title</h3>
  <p>Card content</p>
</CardData>
```

## EditorialMessage

Large message component for editorial content.

```tsx
import { EditorialMessage } from "@axa-fr/canopee-react/distributeur";

<EditorialMessage type="info">
  Important information about the system
</EditorialMessage>
```

## Popover

Tooltip/popover component for contextual information.

```tsx
import { Popover } from "@axa-fr/canopee-react/distributeur";

<Popover 
  mode="click"
  placement="top"
  popoverElement={<div>Help content</div>}
>
  <button>Help</button>
</Popover>
```

## Summary

Summary/accordion-like component for collapsible content.

```tsx
import { Summary } from "@axa-fr/canopee-react/distributeur";

<Summary label="View Details">
  Detailed content here
</Summary>
```

## Form Components (High-level Wrappers)

### Textarea
```tsx
import { Textarea, TextareaInput } from "@axa-fr/canopee-react/distributeur";

<TextareaInput
  id="message"
  name="message"
  label="Your Message"
  placeholder="Enter message..."
/>
```

### Select Variants
```tsx
import { SelectBase } from "@axa-fr/canopee-react/distributeur";

<SelectBase>
  <option>Option 1</option>
  <option>Option 2</option>
</SelectBase>
```

### Choice (Toggle-like)
```tsx
import { Choice, ChoiceInput } from "@axa-fr/canopee-react/distributeur";

<Choice options={[
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" }
]} />
```

### Date Picker
```tsx
import { Date, DateInput } from "@axa-fr/canopee-react/distributeur";

<DateInput
  id="birth"
  name="birth"
  label="Birth Date"
  type="date"
/>
```

### Password Input
```tsx
import { Pass, PassInput } from "@axa-fr/canopee-react/distributeur";

<PassInput
  id="password"
  name="password"
  label="Password"
/>
```

### Number Input
```tsx
import { Number, NumberInput } from "@axa-fr/canopee-react/distributeur";

<NumberInput
  id="quantity"
  name="quantity"
  label="Quantity"
  min={1}
/>
```

### File Upload
```tsx
import { File, FileInput } from "@axa-fr/canopee-react/distributeur";

<FileInput
  id="document"
  name="document"
  label="Upload Document"
  accept=".pdf,.doc"
/>
```

### MultiSelect
```tsx
import { MultiSelect, MultiSelectInput } from "@axa-fr/canopee-react/distributeur";

<MultiSelectInput
  id="skills"
  name="skills"
  label="Select Skills"
  options={skillOptions}
/>
```

### Slider
```tsx
import { Slider, SliderInput } from "@axa-fr/canopee-react/distributeur";

<SliderInput
  id="price"
  name="price"
  label="Price Range"
  min={0}
  max={1000}
/>
```

### NestedQuestion
```tsx
import { NestedQuestion } from "@axa-fr/canopee-react/distributeur";

<NestedQuestion label="Parent question">
  <p>Content shown when parent is answered</p>
</NestedQuestion>
```

## Experimental Components

Advanced/experimental form components available via `canopee-react/distributeur-experimental`:
- InputContainer
- Label (high-level)
- Input wrapper
- ItemMessage
- InputUnit

These are subject to API changes and should be used carefully in production.
