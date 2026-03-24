# Tabs

## Overview
Tabs component provides tabbed navigation with automatic showing/hiding of related content.

## Import
```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";
```

## Basic Usage

```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";
import { useState } from "react";

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState("");
  
  return (
    <Tabs value={activeTab} onChange={(id) => setActiveTab(id)}>
      <Tabs.Tab id="tab1" label="Home">
        Home content
      </Tabs.Tab>
      <Tabs.Tab id="tab2" label="Settings">
        Settings content
      </Tabs.Tab>
      <Tabs.Tab id="tab3" label="Help">
        Help content
      </Tabs.Tab>
    </Tabs>
  );
};
```

## Example with Content

```tsx
import { Tabs } from "@axa-fr/canopee-react/distributeur";

<Tabs defaultValue="profile">
  <Tabs.Tab id="profile" label="Profile">
    <section>
      <h2>User Profile</h2>
      <p>Profile information...</p>
    </section>
  </Tabs.Tab>
  
  <Tabs.Tab id="security" label="Security">
    <section>
      <h2>Security Settings</h2>
      <p>Password and 2FA...</p>
    </section>
  </Tabs.Tab>
  
  <Tabs.Tab id="notifications" label="Notifications">
    <section>
      <h2>Notification Preferences</h2>
      <p>Email and SMS settings...</p>
    </section>
  </Tabs.Tab>
</Tabs>
```

## CSS Classes
- `.af-tabs` - Base tabs container
- `.af-tabs__nav` - Navigation bar
- `.af-tabs__panel` - Content panel
