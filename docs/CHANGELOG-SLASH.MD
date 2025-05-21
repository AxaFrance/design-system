# Release Notes for Slash

## [1.2.0] - 2025-xx-xx

### Added

#### Link Component

Added a new `Link` component to the Slash design system, providing a consistent
way to create hyperlinks across the application. It can be used as classic `a`
with the `href` prop or as a `button` with an `onClick`.

Example usage:

```jsx
<Link
    component="a"
    href="https://axafrance.github.io/design-system/slash/react/latest/"
    target="_blank"
    rightIcon={<Svg src={openInNew} />}
>
    This is an anchor tag going to the Slash storybook
</Link>
<br />
<Link
    component="button"
    onClick={() => alert("this is a button looking like a link")}
>
    Display an alert
</Link>
```

#### CSS Tokens

The design-system's colors are now available as CSS tokens. This allows for
easier customization and theming of the design system components. This is one of
the first step in our goal to get rid of SASS, to avoid forcing our users to use
SASS in their projects.

You can find the exhaustive list of tokens in the
[source code](https://github.com/AxaFrance/design-system/blob/main/slash/css/src/common/tokens.css).

```css
.my-custom-class {
  background-color: var(--axablue10);
}
```

#### NestedQuestion Component

Added a new `NestedQuestion` component to the design system. This component is
used to display a nested input that is conditionnally displayed depending on the
value of another input.

It is just a wrapper and only has a `children` prop:

```jsx
<NestedQuestion>
  <p>Whatever you want here</p>
</NestedQuestion>
```

### Improvements

#### NavBar

Allows passing NavBar props through MenuTitleWrapper to enable customization of
properties such as `positionInit`. Additionally, updates the position index upon
clicking a NavLink, ensuring that the correct nav item is selected without
requiring a page reload (example : when navigating between pages using React
Router).

VOIR AVEC GUILLAUME K pour mieux expliquer le changement
https://github.com/AxaFrance/design-system/pull/970

#### Title can now have content on the left and right

The `Title` component now supports adding content on the left and right sides of
the horizontal line. This is useful for adding buttons, links or other elements
next to the title.

```jsx
<Title
  classModifier="af-title"
  className=""
  contentLeft={<Button>Left button</Button>}
  contentRight={<Link href="/">Click me</Link>}
>
  Title with content
</Title>
```

#### FileInput `onChange` event now has a fileAction property

The `onChange` event of the `FileInput` component now includes a `fileAction`
property which is either `"add"` or `"delete"`. You can now use this property to
determine if the user added or deleted a file.

```jsx
<FileInput
  id="fileInput"
  name="fileInput"
  label="FileInput"
  onChange={({ fileAction }) => {
    if (fileAction === "add") {
      console.log("File added");
    } else if (fileAction === "delete") {
      console.log("File deleted");
    }
  }}
/>
```

#### Select now supports optgroups

The `Select` component now supports `optgroup` elements, allowing you to group
options together. You can pass whatever you want as `children`.

Using children will override the `options` prop, and it is now the recommanded
way to pass options to the `Select` component.

This is unfortunately not available yet in the `SelectInput` because the
`children` prop was already used, to add content on the right of the input. This
may come in a future release as a breaking change.

```jsx
<Select onChange={onChange} {...args}>
  <optgroup label="Groupe 1">
    <option>Option 1</option>
    <option>Option 2</option>
  </optgroup>
  <optgroup label="Groupe 2">
    <option>Option 3</option>
    <option>Option 4</option>
  </optgroup>
</Select>
```

#### Accessibility

##### Add labelledby attribute to definitions in Infos component

Add a labelledby attribute to definitions in `Infos` components. This improves
testing as well, as you can now target the definitions by name:

```jsx
// In your component
<Infos
  infos={[
    {
      word: "Name",
      definition: "John Doe",
    },
  ]}
/>;

// In your test
const definition = screen.getByRole("definition", {
  name: /name/i,
}).innerText; // === "John Doe"

// Generated HTML
<dl class="af-contrat__list">
  <dt id="info-id-3" class="af-contrat__word">
    Name
  </dt>
  <dd class="af-contrat__def" aria-labelledby="info-id-3">
    John Doe
  </dd>
</dl>;
```

##### Inputs errors are linked to the input

An input in error state now has an `aria-describedby` attribute that links the
error message to the input. This improves accessibility.

##### Miscellaneous

https://github.com/AxaFrance/design-system/pull/949

- Red colors for checkbox in error state are now darker for better contrast
- Aria-label for the close button in the Alert component is now customizable via
  `ariaLabelProp`
- You can now pass `selectAriaLabel` to the `Paging` component to customize the
  aria-label of the select element used to chose how many element to display per
  page.
- The `Modal`s are now correctly labelled with the `aria-label` attribute.

```jsx
<Alert title="my alert" ariaLabel="Close this alert" classModifier="error">
  <ul>
    <li>The last name is required</li>
    <li>The first name is required</li>
    <li>Email is required</li>
    <li>The date format is invalid</li>
  </ul>
</Alert>
```

- `Select` component now has a blue outline on focus, making it easier to see
  which element is focused.
- `Restitution` component now uses `h3` tags for the title instead of a `div`
- `Summary` doesn't log warning in the console anymore
- `DateInput` now correctly forwards the `ref` to the input element

#### Miscellaneous

- Added a alias to import the axa-logo easily:
- Icons in the `HeaderTitle` are now a bit smaller and and padded for the right
  side
- `HeaderTitle` is now a bit bigger

```ts
import logo from "@axa-fr/design-system-slash-css/logo-axa.svg";
```
