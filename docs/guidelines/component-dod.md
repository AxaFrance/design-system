# Definition of done for a component

- [Definition of done for a component](#definition-of-done-for-a-component)
  - [Folder structure](#folder-structure)
    - [Single component](#single-component)
    - [Multiple components](#multiple-components)
  - [Tests](#tests)
  - [Documentation](#documentation)
    - [Stories](#stories)
    - [Depreciate component or prop](#depreciate-component-or-prop)
    - [Copilot](#copilot)
  - [Accessibility](#accessibility)
  - [Responsive design](#responsive-design)
  - [Updating the sample](#updating-the-sample)


## Folder structure

### Single component

A folder containing a single component should have the following structure:

```plaintext
component-name/
  ├── __tests__/
  │   └── component-name.test.tsx
  ├── component-name.tsx
  └── index.tsx
```

<!-- TODO, voir si on met juste un index, un index + component.tsx, ou juste un component.tsx -->

### Multiple components

If you need to expose multiple components from the same folder, like the
`Accordion` and `CollapseCard`, the name of the root folder is the
main component you're exposing. In this case, it's `Accordion`. You can use the
following structure:

```plaintext
Accordion/
  ├── __tests__/
  │   └── Accordion.test.tsx
  ├── Accordion.tsx
  ├── CollapseCard.tsx
  └── index.ts
```

The barrel file `index.ts` should export the component(s) like this:

```typescript
export { Accordion } from './Accordion';
export { CollapseCard } from './CollapseCard';
```

## Tests

Every new component should be tested. If your component is just a static
component for styling purposes, you can create a snapshot test. If your
component has some logic, you should write tests using `testing-library` and
`user-event`, covering each user interaction possible.

## Documentation

### Stories

Every component should have a stories allowing the users to visualize the
possible states. The stories should be defined in a `component-name.stories.tsx`
file. Then a `component-name.mdx` file should be created to document the
component.

Here is an example of what a mdx file should might look like:

````mdx
import { Canvas, Controls, Meta } from '@storybook/addon-docs';
import * as ButtonStories from './Button.stories';

<Meta of={ButtonStories} name="Button" />

# Button

Short description of the component.

## Import

Short sample that users can copy and paste to import the component.

```tsx
import { Button } from '@axa-fr/canopee-react/distributeur';

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

### Depreciate component or prop

To indicate that a component or a prop is now deprecated, you should first add a `@deprecated` comment above the element like this:

```tsx
/** @deprecated Use `NonDeprecatedComponent` instead. */
const DeprecatedComponent = () => <p>deprecated component</p>;

type NonDeprecatedComponentProps =
  | {
      /** @deprecated Use `children` prop instead. */
      text: string;
    }
  | { children: string };

const NonDeprecatedComponent = ({
  children,
  text,
}: NonDeprecatedComponentProps) => <p>{children ?? text}</p>;
```

Additionally, it is important to indicate in the MDX file that the component or the prop is deprecated. This warns that it might be removed in a future release.

Example in the MDX file :

```markdown
# DeprecatedComponent

> **Warning:** This component is deprecated. Please use `NonDeprecatedComponent` instead.

# NonDeprecatedComponent

> **Warning:** The `text` prop is deprecated. Please use `children` prop instead.
```

### Copilot

When you create a new component (or you update an existing one), you need to update the skill provided by the Design System in order to have the new component available when an user use Copilot. To do that, you can write by your own the *reference* file for your component in `/plugins/canopee-{univers}/skills/references/{component-name}.md` or you can use the agent `/create-skill`.

## Accessibility

Every component should tested for accessibility.

## Responsive design

Every component should be tested for responsiveness if it makes sense.

## Updating the sample

When adding a new component, make sure to update the sample to include it and
check that it behaves as expected when used in a client application with other
components.
