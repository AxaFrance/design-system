# Form Radio

## Overview
Radio component provides single-selection from multiple options with support for different display modes (classic, default, inline, card).

## Import
```tsx
import { Radio, RadioItem, RadioInput } from "@axa-fr/canopee-react/distributeur";
```

## Components
- **Radio**: Multiple radio buttons from options
- **RadioItem**: Single radio button
- **RadioInput**: Complete form wrapper with label

## Basic Usage

```tsx
import { Radio } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

const GenderSelector = () => {
  const [gender, setGender] = useState("");
  
  return (
    <Radio
      id="gender"
      name="gender"
      mode="default"
      value={gender}
      onChange={(e) => setGender(e.target.value)}
      options={[
        { value: "male", label: "Male" },
        { value: "female", label: "Female" },
        { value: "other", label: "Other" }
      ]}
    />
  );
};
```

## Display Modes

```tsx
// Classic (native HTML)
<Radio mode="classic" options={options} />

// Default (custom styled)
<Radio mode="default" options={options} />

// Inline (horizontal layout)
<Radio mode="inline" options={options} />

// Card (large clickable cards)
<Radio mode="cardRadio" options={options} />
```

## Complete Form Integration

```tsx
const PreferenceForm = () => {
  const [preferences, setPreferences] = useState({
    frequency: "weekly",
    format: "email"
  });
  
  return (
    <form className="af-form">
      <RadioInput
        id="frequency"
        name="frequency"
        label="Update Frequency"
        value={preferences.frequency}
        onChange={(e) => setPreferences({
          ...preferences,
          frequency: e.target.value
        })}
        options={[
          { value: "daily", label: "Daily" },
          { value: "weekly", label: "Weekly" },
          { value: "monthly", label: "Monthly" }
        ]}
      />
      
      <RadioInput
        id="format"
        name="format"
        label="Notification Format"
        mode="inline"
        value={preferences.format}
        onChange={(e) => setPreferences({
          ...preferences,
          format: e.target.value
        })}
        options={[
          { value: "email", label: "Email" },
          { value: "sms", label: "SMS" },
          { value: "push", label: "Push" }
        ]}
      />
      
      <button type="submit">Save</button>
    </form>
  );
};
```

## CSS Classes
- `.af-form__radio` - Classic mode
- `.af-form__radio-custom` - Default mode
- `.af-form__radio-inline` - Inline mode
- `.af-form__radio-card` - Card mode
