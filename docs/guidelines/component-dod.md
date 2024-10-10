# Definition of done for a component

## Folder structure

### Single component

A folder containing a single component should have the following structure:

```plaintext
component-name/
  ├── __tests__/
  │   └── component-name.test.tsx
  ├── component-name.stories.tsx
  ├── component-name.mdx
  ├── component-name.tsx
  └── index.tsx
```

<!-- TODO, voir si on met juste un index, un index + component.tsx, ou juste un component.tsx -->

### Multiple components

If you need to expose multiple components from the same folder, like the
`Accordion` and `CollapseCard` from _slash_, the name of the root folder is the
main component you're exposing. In this case, it's `Accordion`. You can use the
following structure:

```plaintext
Accordion/
  ├── __tests__/
  │   └── Accordion.test.tsx
  ├── Accordion.mdx
  ├── Accordion.stories.tsx
  ├── Accordion.tsx
  ├── CollapseCard.tsx
  └── index.ts
```

The barrel file `index.ts` should export the component(s) like this:

```typescript
export { Accordion } from "./Accordion";
export { CollapseCard } from "./CollapseCard";
```

## Tests

Every new component should be tested. If your component is just a static
component for styling purposes, you can create a snapshot test. If your
component has some logic, you should write tests using `testing-library` and
`user-event`, covering each user interaction possible.

## Stories

Every component should have a stories allowing the users to visualize the
possible states. The stories should be defined in a `component-name.stories.tsx`
file. Then a `component-name.mdx` file should be created to document the
component.

Here is an example of what a mdx file should might look like:

````mdx
import { Canvas, Controls, Meta } from "@storybook/addon-docs";
import * as ButtonStories from "./Button.stories";

<Meta of={ButtonStories} name="Button" />

# Button

Short description of the component.

## Import

Short sample that users can copy and paste to import the component.

```tsx
import { Button } from "@axa-fr/design-system-slash-react";

const MyComponent = () => (
  <Button classModifier="reverse" type="submit">
    My button
  </Button>
);
```

## Components

When a component is composed of multiple components, list them here.

## Playground

A canvas to play with the component.

<Canvas of={ButtonStories.Playground}></Canvas>
<Controls of={ButtonStories.Playground} />

## Usage

If necessary, provide examples of how to use the component in different
scenarios, describe props etc...

## Examples of class modifiers

Use the `classModifier` prop to change the look of the button.

<Canvas of={ButtonStories.MultiExamples} layout="fullscreen" />
````

### Accessibility

Every component should tested for accessibility.

### Responsive design

Every component should be tested for responsiveness if it makes sense.

### Updating the sample

When adding a new component, make sure to update the sample to include it and
check that it behaves as expected when used in a client application with other
components.
