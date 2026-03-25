# Form Checkbox

## Overview
Checkboxes allow users to select multiple options from a list. The component supports multiple display modes (classic, default, inline, toggle) and grouped selection with state management.

## Import
```tsx
import { Checkbox, CheckboxItem, CheckboxInput } from "@axa-fr/canopee-react/distributeur";
```

## Components

### CheckboxItem (Individual)
A single checkbox with label.
```tsx
import { CheckboxItem } from "@axa-fr/canopee-react/distributeur";

<CheckboxItem id="agree" label="I agree to terms" checked={true} />
```

### Checkbox (Group with data)
Multiple checkboxes rendered from options list.
```tsx
import { Checkbox } from "@axa-fr/canopee-react/distributeur";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" }
];

<Checkbox options={options} values={["apple"]} />
```

### CheckboxInput (High-level)
Complete form wrapper with label and validation.
```tsx
import { CheckboxInput } from "@axa-fr/canopee-react/distributeur";

<CheckboxInput
  id="fruits"
  name="fruits"
  label="Select Fruits"
  options={options}
/>
```

## Props

### Checkbox / CheckboxInput

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `Option[]` | Required | Array of `{value, label, disabled?, id?}` |
| `values` | `string[]` | - | Selected values |
| `mode` | `"default" \| "classic" \| "inline" \| "toggle"` | `"default"` | Display mode |
| `id` | `string` | - | HTML id attribute |
| `name` | `string` | - | HTML name attribute |
| `label` | `string` | - | Input label |
| `disabled` | `boolean` | `false` | Disables all checkboxes |
| `readOnly` | `boolean` | `false` | Read-only mode |
| `required` | `boolean` | `false` | Required field |
| `onChange` | `function` | - | Change handler |

### CheckboxItem

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `id` | `string` | - | HTML id |
| `name` | `string` | - | HTML name |
| `label` | `string \| ReactNode` | - | Checkbox label |
| `value` | `string` | - | Option value |
| `checked` | `boolean` | `false` | Checked state |
| `disabled` | `boolean` | `false` | Disabled state |
| `readOnly` | `boolean` | `false` | Read-only state |
| `onChange` | `function` | - | Change handler |

## Display Modes

### Default Mode (Custom Styling)
Modern checkbox with custom styling.
```tsx
const options = [
  { value: "js", label: "JavaScript" },
  { value: "ts", label: "TypeScript" },
  { value: "py", label: "Python" }
];

<Checkbox
  mode="default"
  options={options}
  values={["js"]}
/>
```

### Classic Mode (Native HTML)
Traditional HTML checkboxes.
```tsx
<Checkbox
  mode="classic"
  options={options}
  values={["js"]}
/>
```

### Inline Mode
Horizontal layout.
```tsx
<Checkbox
  mode="inline"
  options={options}
  values={["js"]}
/>
```

### Toggle Mode
iPhone-style toggles (for 2-option selections).
```tsx
const toggleOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" }
];

<Checkbox
  mode="toggle"
  options={toggleOptions}
  values={["yes"]}
/>
```

## Single Checkbox Usage

### Simple Checkbox
```tsx
const [agreed, setAgreed] = useState(false);

<CheckboxItem
  id="terms"
  label="I agree to the terms"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>
```

### Disabled Checkbox
```tsx
<CheckboxItem
  id="disabled"
  label="Disabled option"
  disabled
/>
```

## Multiple Selection Usage

### Basic Group
```tsx
import { useCallback, useState } from "react";
import { Checkbox } from "@axa-fr/canopee-react/distributeur";

const interests = [
  { value: "sports", label: "Sports" },
  { value: "music", label: "Music" },
  { value: "gaming", label: "Gaming" },
  { value: "reading", label: "Reading" }
];

const InterestSelector = () => {
  const [selected, setSelected] = useState<string[]>([]);
  
  const handleChange = useCallback((data) => {
    setSelected(data.values);
  }, []);
  
  return (
    <Checkbox
      id="interests"
      name="interests"
      options={interests}
      values={selected}
      onChange={handleChange}
    />
  );
};
```

### With Validation
```tsx
const [interests, setInterests] = useState<string[]>([]);
const [error, setError] = useState("");

const handleChange = (data) => {
  setInterests(data.values);
  if (data.values.length === 0) {
    setError("Please select at least one interest");
  } else {
    setError("");
  }
};

<CheckboxInput
  id="interests"
  name="interests"
  label="Select your interests"
  options={interests}
  values={interests}
  onChange={handleChange}
  message={error}
  messageType={error ? "error" : undefined}
/>
```

### Disabled Options
```tsx
const statusOptions = [
  { value: "active", label: "Active" },
  { value: "inactive", label: "Inactive", disabled: true },
  { value: "pending", label: "Pending" }
];

<Checkbox
  options={statusOptions}
  values={["active"]}
/>
```

## Form Integration

```tsx
const RegistrationForm = () => {
  const [data, setData] = useState({
    interests: [],
    newsletter: false
  });
  
  const handleInterestsChange = (checkboxData) => {
    setData(prev => ({
      ...prev,
      interests: checkboxData.values
    }));
  };
  
  const handleNewsletterChange = (e) => {
    setData(prev => ({
      ...prev,
      newsletter: e.target.checked
    }));
  };
  
  return (
    <form className="af-form" onSubmit={(e) => {
      e.preventDefault();
      console.log("Form data:", data);
    }}>
      <Checkbox
        id="interests"
        name="interests"
        label="Interests"
        options={[
          { value: "tech", label: "Technology" },
          { value: "business", label: "Business" }
        ]}
        values={data.interests}
        onChange={handleInterestsChange}
      />
      
      <CheckboxItem
        id="newsletter"
        name="newsletter"
        label="Subscribe to newsletter"
        checked={data.newsletter}
        onChange={handleNewsletterChange}
      />
      
      <button type="submit">Register</button>
    </form>
  );
};
```

## Change Handler Data Structure

The `onChange` handler receives an object with:
```tsx
{
  id?: string;           // Component id
  name?: string;         // Component name
  values: string[];      // Selected values array
  target: {
    value: string;       // Changed item value
    checked: boolean;    // New checked state
  }
}
```

## Accessibility
- Labels associated with each checkbox
- Keyboard navigation (Tab to move, Space/Enter to toggle)
- Visual indicators for checked, disabled, and focused states
- ARIA attributes for screen readers
- Required indicators shown with asterisk

## Best Practices
- Display related checkboxes together
- Use mode="default" for modern UI
- Provide clear descriptive labels
- Use disabled state for unavailable options
- Validate minimums/maximums needed (e.g., "select at least 2")
- Group related checkboxes logically
- Test with keyboard-only navigation

## CSS Classes
- `.af-form__checkbox-custom` - Default mode styling
- `.af-form__checkbox` - Classic mode styling
- `.af-form__checkbox-inline` - Inline mode styling
- `.af-form__checkbox-toggle` - Toggle mode styling
