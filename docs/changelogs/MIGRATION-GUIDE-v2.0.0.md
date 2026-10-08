# Migration Guide: v1.8.0 to v2.0.0

This guide is for applications consuming the Design System. It describes the
breaking changes between `1.8.0` and `2.0.0` and the updates you may need to
make in your application before upgrading to `2.0.0`.

For a guided repository migration, use the [Canopée v2 migration Copilot skill](https://raw.githubusercontent.com/AxaFrance/design-system/refs/heads/main/docs/changelogs/skills/canopee-v2-migration/SKILL.md).

## Breaking changes

### React version requirement

Version `2.0.0` supports React 19 only. React 18, which was supported by
version `1.8.0`, is no longer supported.

Before upgrading the Design System, update the React runtime used by your
application, including `react` and `react-dom`, to compatible React 19
versions. Then update the Design System packages.

```bash
npm install react@19 react-dom@19
```

Applications that must remain on React 18 cannot upgrade to Design System
version `2.0.0`.

### Legacy mirror packages

The legacy mirror packages are no longer maintained or published with version
`2.0.0`. They must be replaced by the corresponding Canopée packages. Do not
add new dependencies on the old package names.

| Legacy package | Canopée package |
| --- | --- |
| `@axa-fr/design-system-apollo-react` | `@axa-fr/canopee-react/prospect` |
| `@axa-fr/design-system-apollo-css` | `@axa-fr/canopee-css/prospect` |
| `@axa-fr/design-system-slash-react` | `@axa-fr/canopee-react/distributeur` |
| `@axa-fr/design-system-slash-css` | `@axa-fr/canopee-css/distributeur` |

The Apollo React mirror previously exposed the Look & Feel universe through
its `lf` entry point. Replace imports from that entry point with:

```tsx
import { Button } from "@axa-fr/canopee-react/client";
```

The React and CSS entry points are now selected explicitly by universe:

```tsx
import { Button as ProspectButton } from "@axa-fr/canopee-react/prospect";
import { Button as DistributeurButton } from "@axa-fr/canopee-react/distributeur";
```

Use the CSS package entry point that matches the universe and import the
component stylesheet explicitly:

```css
@import "@axa-fr/canopee-css/prospect/Button/ButtonApollo.css";
@import "@axa-fr/canopee-css/client/Button/ButtonLF.css";
@import "@axa-fr/canopee-css/distributeur/Button/Button.css";
```

The `client` universe replaces the former Look & Feel package and Storybook
paths. Update hard-coded documentation or deployment links from
`look-and-feel/...` to `client/...` where applicable.

Client and Prospect styles are now wrapped in CSS layers. Review custom CSS
overrides and layer ordering if application styles relied on the previous
import order.

### Distributeur

#### Removed `PassInput`

`PassInput` is no longer available in the Distributeur package. If your
application imports it, replace it with the supported password-input
component used by your application, then review its props and behavior.

The following deprecated Distributeur exports are also no longer available:

| Removed API | Replacement |
| --- | --- |
| `Badge` | `Tag` |
| `Alert` | `Message` |
| `Pass` | Use the supported password input component. |
| `Slider` | Use the supported range or number input component. |
| `SliderInput` | Use the supported range or number input component. |
| `SelectBase` | `Select` |
| `SelectDefaultWithOptions` | `SelectDefault` |
| `getComponentClassName` | `getClassName` |

`FieldForm` and `FieldInput` were deprecated internal components and are no
longer exported. Applications should use the public field components, such as
`Field`, `TextInput`, or `SelectInput`, instead.

If your application uses the deprecated `Select.options` prop, render native
`option` elements as `Select` children:

```tsx
<Select value={value} onChange={handleChange}>
 <option value="first">First</option>
 <option value="second">Second</option>
</Select>
```

`SelectInput.options` is not affected by this change.

For the removed Distributeur select aliases, use native `option` children so
the replacement keeps the same field semantics:

```tsx
// Before
<SelectDefaultWithOptions options={options} />

// After
<SelectDefault>
  {options.map((option) => (
    <option key={option.value} value={option.value}>
      {option.label}
    </option>
  ))}
</SelectDefault>
```

#### Distributeur class modifiers and deprecated props

The `classModifier` and `classModifiers` APIs have been removed from
Distributeur components. Use `className` for custom styling. Some components
have a more specific replacement:

| Component | Removed API | Replacement |
| --- | --- | --- |
| `Accordion` | `classModifier` | `variant` |
| `Message` | `classModifier` | `variant` |
| `Modal` | `classModifier` | `size` or `className` |
| Other Distributeur components | `classModifier` | `className` |

The deprecated visibility prop on `Field` was also removed. Control whether a
field is rendered in the application instead of passing `isVisible`.

### Prospect and Client

The following deprecated component aliases are no longer exported:

| Removed alias | Replacement |
| --- | --- |
| `CheckboxCard` | `CardCheckbox` |
| `DateInput` | `InputDate` |
| `TextInput` | `InputText` |
| `CardRadio` | `CardRadioGroup` |
| `CardRadioOption` | `CardRadio`, used through the `options` API of `CardRadioGroup`. |

Update imports and component usage in applications that use one of these
aliases.

When the replacement keeps the same responsibility, migrate the import and
then compare the generated markup and styling in the affected story:

```tsx
// Before
import {
  CheckboxCard,
  DateInput,
  TextInput,
} from "@axa-fr/canopee-react/client";

// After
import {
  CardCheckbox,
  InputDate,
  InputText,
} from "@axa-fr/canopee-react/client";
```

#### Migrating replacement components without visual regressions

Some replacements split responsibilities that were previously combined in one
component. Preserve both the data contract and the visual layout when making
the change. In particular, the old `CardRadio` group API must be migrated to
`CardRadioGroup`; the individual option is now `CardRadio`.

`CardRadioGroup` also changes its implicit layout defaults. In v1.8.0, the
group defaulted to `type="vertical"` and `position="column"`, even when the
application did not pass a `type` prop. In v2.0.0, `type` is removed,
`cardStyle` controls each card orientation, and `position` controls the group
layout. When neither replacement prop is provided, the group no longer derives
the v1.8.0 defaults and may render its cards in a different arrangement.

Do not leave both replacement props implicit during the migration. For code
that relied on the v1.8.0 defaults without passing `type`, migrate this:

```tsx
// v1.8.0: type was omitted, but its vertical default was still applied
<CardRadioGroup label="Choose a city" options={options} />
```

to this, which preserves the v1.8.0 layout explicitly:

```tsx
<CardRadioGroup
  cardStyle="vertical"
  position="column"
  label="Choose a city"
  options={options}
/>
```

Do not confuse the two props: `cardStyle` is forwarded as `position="vertical"
| "horizontal"` to each `CardRadio`, while `position="column" | "line"`
controls the layout container of the group.

The individual option also changes from `CardRadioOption` to `CardRadio`.
Rename its `type` prop to `position` and replace `isInvalid` with
`variant="error"` or `variant="warning"`:

```tsx
// Before
<CardRadioOption
  type="horizontal"
  isInvalid
  label="Paris"
  value="paris"
/>

// After
<CardRadio
  position="horizontal"
  variant="error"
  label="Paris"
  value="paris"
/>
```

For a group of horizontal cards displayed on one line:

Before:

```tsx
import { CardRadio } from "@axa-fr/canopee-react/client";

<CardRadio
  labelGroup="Choose a city"
  descriptionGroup="Select one option"
  type="horizontal"
  value={selectedCity}
  error="Choose a city"
  options={options}
  onChange={handleChange}
/>
```

After:

```tsx
import { CardRadioGroup } from "@axa-fr/canopee-react/client";

<CardRadioGroup
  label="Choose a city"
  description="Select one option"
  cardStyle="horizontal"
  position="line"
  message="Choose a city"
  messageType="error"
  options={options.map((option) => ({
    ...option,
    checked: option.value === selectedCity,
  }))}
  onChange={handleChange}
/>
```

Use `cardStyle="vertical"` with `position="column"` for the equivalent
v1.8.0 card orientation and group layout. The `position` inside each option is
also available when an option needs an individual orientation, and the option
component is now named `CardRadio`:

```tsx
const options = [
  {
    label: "Paris",
    value: "paris",
    position: "horizontal",
    description: "France",
  },
];
```

Map the former invalid state to `variant="error"` on an individual
`CardRadio`, or use the group's `message` and `messageType` for group-level
validation. After migration, compare the card orientation, group layout,
selected value, and error presentation with the v1.8.0 rendering.

#### API migration reference

Use this table as a quick reference. The examples below explain the
structural migrations and the checks needed to preserve behavior or visual
appearance.

| Component | Removed prop | Replacement |
| --- | --- | --- |
| `Accordion` | `isOpen` | `open` |
| `CardRadioGroup` | `type` | `cardStyle` for card orientation and `position` for group layout |
| `CardRadioGroup` | `labelGroup` | `label` |
| `CardRadioGroup` | `descriptionGroup` | `description` |
| `CardRadioGroup` | `isRequired` | `required` |
| `CardRadioGroup` | `value` | Set `checked` on the matching item in `options` |
| `CardRadioGroup` | `error` | `message` and `messageType` |
| `CardRadioOption` | `type` | `CardRadio.position` |
| `CardRadioOption` | `isInvalid` | `CardRadio.variant` |
| `ContentItemMono` | `icon` | `iconProps` |
| `CardCheckbox` | `labelGroup` | `label` |
| `CardCheckbox` | `descriptionGroup` | `description` |
| `CardCheckbox` | `isRequired` | `required` |
| `CardCheckbox` | `error` | `message` and `messageType` |
| `Checkbox` | `errorId` | `aria-errormessage` |
| `Checkbox` | `hasError` | `variant="error"` or `variant="warning"` |
| `CheckboxText` | `errorMessage` | `message` and `messageType` |
| `Dropdown` | `error` or `success` | `message` and `messageType` |
| `InputDate` | `error` or `success` | `message` and `messageType` |
| `InputPhone` | `error` or `success` | `message` and `messageType` |
| `InputText` | `error` or `success` | `message` and `messageType` |
| `ItemLabel` | `label` | `children` |
| `ItemLabel` | `inputId` | `htmlFor` |
| `ItemLabel` | `buttonLabel` | `moreButtonLabel` |
| `ItemLabel` | `onButtonClick` | `onMoreButtonClick` |
| `TextArea` | `error` | `message` and `messageType` |
| `Link` | `classModifier` | Use `variant` for a supported variant or `className` for custom styling. |
| `ContentItemDuo` | `isVertical` | `position` |
| `ContentItemDuo` | `classModifier` | `position` for `vertical`/`horizontal`, `size` for supported sizes, or `className` only for a genuinely custom class |
| `Modal` | `icon` | `headingProps={{ icon }}` |
| `Modal` | `iconProps` | `headingProps={{ iconProps }}` |
| `ProgressBarGroup` | `nbSteps` | `stepsCount` |

##### Form action labels

For `Dropdown`, `InputDate`, `InputFile`, `InputPhone`, `InputText`, and
`TextArea`, replace the deprecated contextual-button props with their explicit
names:

| Removed prop | Replacement |
| --- | --- |
| `buttonLabel` | `moreButtonLabel` |
| `onButtonClick` | `onMoreButtonClick` |

Do not apply this replacement to `MenuBurger.buttonLabel`, which remains the
label for its menu trigger.

##### Validation variants

The `isInvalid` prop was removed from `Checkbox`, `Radio`, and components that
inherit their input props, such as `RadioText`. Use the semantic `variant`
instead:

```tsx
<Checkbox variant="error" />
<Radio variant="warning" />
```

Use `message` and `messageType` for the associated validation message where the
component supports a message API.

##### Disclosure state

The controlled state of the public `Accordion` uses the native `open` prop.
The lower-level `AccordionCore` uses `summary`; do not apply that rename to
the public `Accordion`, which keeps its `title` content prop.

Before:

```tsx
<Accordion title="Personal details" isOpen={isOpen} onClick={toggle}>
  {children}
</Accordion>
```

After:

```tsx
<Accordion title="Personal details" open={isOpen} onClick={toggle}>
  {children}
</Accordion>
```

Keep the existing `variant` and `className` values when migrating so the
visual treatment is unchanged.

For the lower-level `AccordionCore`, migrate both names:

```tsx
// Before
<AccordionCore title="Personal details" isOpen={isOpen}>
  {children}
</AccordionCore>

// After
<AccordionCore summary="Personal details" open={isOpen}>
  {children}
</AccordionCore>
```

##### Form feedback and validation

The former string props on form controls become a message plus an explicit
message type. The same transformation applies to `Dropdown`, `InputDate`,
`InputPhone`, `InputText`, and `TextArea`.

Before:

```tsx
<InputText label="Email" error="Enter a valid email address" />
```

After:

```tsx
<InputText
  label="Email"
  message="Enter a valid email address"
  messageType="error"
/>
```

For `CheckboxText`, replace `errorMessage` with the same pair. For the base
`Checkbox`, replace `hasError` with `variant="error"` and preserve the
`aria-errormessage` association when supplying a custom error message.

Before:

```tsx
<CheckboxText label="Accept" errorMessage="This choice is required" />
```

After:

```tsx
<CheckboxText
  label="Accept"
  message="This choice is required"
  messageType="error"
/>
```

##### Card checkbox

`CheckboxCard` becomes `CardCheckbox`. Keep the option `type` to preserve the
horizontal or vertical layout, and move group labels and validation feedback
to their v2 names.

Before:

```tsx
<CheckboxCard
  labelGroup="Contact preferences"
  descriptionGroup="Choose all that apply"
  type="horizontal"
  isRequired
  error="Select at least one option"
  options={options}
/>
```

After:

```tsx
<CardCheckbox
  label="Contact preferences"
  description="Choose all that apply"
  type="horizontal"
  required
  message="Select at least one option"
  messageType="error"
  options={options}
/>
```

##### Content and layout

For an icon content item, move the former icon value into `iconProps` so the
icon configuration is preserved rather than replacing it with a bare string.

Before:

```tsx
<ContentItemMono type="icon" icon="info" title="More information" />
```

After:

```tsx
<ContentItemMono
  type="icon"
  iconProps={{ src: infoIcon }}
  title="More information"
/>
```

For `ContentItemDuo`, replace `isVertical` with `position` and keep
`className` for custom styling:

```tsx
<ContentItemDuo position="vertical" className="custom-content-item">
  {children}
</ContentItemDuo>
```

##### Labels and progress

`ItemLabel` now uses native label semantics and explicit action names:

```tsx
<ItemLabel
  htmlFor="email"
  moreButtonLabel="Why do we need this?"
  onMoreButtonClick={showExplanation}
>
  Email
</ItemLabel>
```

For `ProgressBarGroup`, rename `nbSteps` to `stepsCount` without changing the
current step or progress values:

```tsx
<ProgressBarGroup
  currentStep={currentStep}
  currentStepProgress={progress}
  stepsCount={5}
/>
```

##### Modal heading props

When configuring a modal heading, keep the icon configuration intact by
nesting it under `headingProps`:

Before:

```tsx
<Modal icon={icon} iconProps={{ size: "S" }} />
```

After:

```tsx
<Modal headingProps={{ icon, iconProps: { size: "S" } }} />
```

Warning states are now represented by the `warning` and `hover-warning`
variants where supported. The renamed `orange-100` token is now `orange-050`.

For form validation messages, pass the text through `message` and specify its
kind with `messageType` instead of using the former `error` or `success` props.

#### Skeleton components and modal headers

The skeleton APIs now use dedicated components and structured cell definitions.
This migration also changes the default visual appearance: in v1.8.0,
`Skeleton` was the grid container. In v2.0.0, `SkeletonGrid` is the grid
container and `Skeleton` is an individual cell. A cell now defaults to the
`rectangle` variant with size `M` and a rounded shape.

- Replace `Skeleton grid={...}` with `SkeletonGrid grid={...}`.
- Convert numeric cells to objects containing `colSize`, preserving any
  documented cell props such as `size` or `variant`.
- Update `SkeletonList.lists` entries to use the same structured `grid` shape;
  each entry may also define `lines` to repeat the grid.

Before:

```tsx
<Skeleton grid={[[3, 9], [12]]} />
```

After:

```tsx
<SkeletonGrid
  grid={[
    [{ colSize: 3 }, { colSize: 9 }],
    [{ colSize: 12 }],
  ]}
/>
```

To avoid the large `M` default while staying within the library styles, choose
the smallest supported rectangle size explicitly. The migration adopts the
closest supported library style:

```tsx
<SkeletonGrid
  grid={[
    [
      { colSize: 3, size: "XS", variant: "rectangle" },
      { colSize: 9, size: "XS", variant: "rectangle" },
    ],
    [{ colSize: 12, size: "XS", variant: "rectangle" }],
  ]}
/>
```

The same cell migration applies to every `SkeletonList.lists[].grid` entry.
Do not add a CSS override to reproduce the former appearance; use the
supported v2 `size` and `variant` values so the component keeps the library's
responsive and theme-aware styling.

For `ModalCoreHeader`, move `iconProps` into `headingProps`:

```tsx
<ModalCoreHeader headingProps={{ children: title, iconProps }} />
```

#### Header heading semantics

`Header.Name` no longer renders an `h2`. Update tests and custom selectors such
as `h2.af-header__title` to target its text instead.
Keep the page's main heading on `HeaderTitle` (`h1`) so the heading hierarchy
remains valid.

#### Class modifiers

The `classModifier` and `classModifiers` APIs have been removed from Prospect
and Client components. They did not behave like `className`: a modifier such
as `vertical` was converted into a BEM class based on the component block, for
example `af-content-item-duo--vertical`. A mechanical replacement such as
`className="vertical"` therefore does not preserve the same style.

Use the component's supported semantic prop when one exists. For
`ContentItemDuo`, migrate layout modifiers as follows:

Before:

```tsx
<ContentItemDuo classModifier="vertical" label="Label" value="Value" />
```

After:

```tsx
<ContentItemDuo position="vertical" label="Label" value="Value" />
```

For a size modifier, use the corresponding `size` prop:

Before:

```tsx
<ContentItemDuo classModifier="large" label="Label" value="Value" />
```

After:

```tsx
<ContentItemDuo size="large" label="Label" value="Value" />
```

The same rule applies to other components: use `variant`, `position`, or
`size` when the former modifier represented a documented component state. Use
`className` only for a genuinely custom class, knowing that it is appended as
written and does not generate an `af-...--modifier` class.

The deprecated `getComponentClassName` helper has also been replaced by
`getClassName` for applications that import the helper directly.

## Step-by-Step Migration

### Step 1: Preparation

```bash
git checkout -b migration/design-system-v2
git tag backup-before-migration-$(date +%Y%m%d)
```

### Step 2: Dependency Updates

```bash
npm install react@19 react-dom@19 @axa-fr/canopee-react@2.0.0 @axa-fr/canopee-css@2.0.0
```

### Step 3: Automatic Migrations

There is no official codemod for this release. Search for the removed package
names, aliases, props, and `classModifier` or `classModifiers` usages listed
above before compiling.

### Step 4: Manual Migrations

Update imports, replace deprecated props with their semantic equivalents, and
review custom CSS selectors and CSS layer ordering.

### Step 5: Verification

- [ ] The project compiles with React 19 and Canopée 2.0.0.
- [ ] Tests pass without selectors targeting removed aliases or the old Header
  `Name` heading element.
- [ ] Replacement components preserve the previous layout, selected/checked
  state, validation message, and visual variants in their affected stories.
- [ ] The interface and accessibility tree preserve the intended heading order.
- [ ] Custom styles still have the intended precedence.

---

### ⚡ Automatic migration prompt

```text
Update this application from Design System v1.8.0 to v2.0.0. Replace legacy
Apollo and Slash packages with the matching Canopée universe entry points,
remove deprecated aliases and props, migrate classModifier/classModifiers to
className or the documented semantic props, update CardRadio APIs and the
orange-050 token, and verify the result with the type checker and test suite.
```
