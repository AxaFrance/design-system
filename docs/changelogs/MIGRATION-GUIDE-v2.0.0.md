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
| `CardRadioOption` | Use the `options` API of `CardRadioGroup`. |

Update imports and component usage in applications that use one of these
aliases.

#### Deprecated props replaced by the current API

Deprecated props available in `1.8.0` have been removed from the affected
components. Apply the following migrations:

| Component | Removed prop | Replacement |
| --- | --- | --- |
| `Accordion` | `isOpen` | `open` |
| `ContentItemMono` | `icon` | `iconProps` |
| `CardCheckbox` | `labelGroup` | `label` |
| `CardCheckbox` | `descriptionGroup` | `description` |
| `CardCheckbox` | `isRequired` | `required` |
| `CardCheckbox` | `error` | `message` and `messageType` |
| `Checkbox` | `errorId` | `aria-errormessage` |
| `Checkbox` | `hasError` | `aria-invalid` |
| `CheckboxText` | `errorMessage` | `message` and `messageType` |
| `Dropdown` | `error` or `success` | `message` and `messageType` |
| `InputDate` | `error` or `success` | `message` and `messageType` |
| `InputPhone` | `error` or `success` | `message` and `messageType` |
| `InputText` | `error` or `success` | `message` and `messageType` |
| `ItemLabel` | `label` | `children` |
| `ItemLabel` | `inputId` | `htmlFor` |
| `ItemLabel` | `buttonLabel` | `moreButtonLabel` |
| `ItemLabel` | `onButtonClick` | `onMoreButtonClick` |
| `CardRadioGroup` | `type` | `position` and `cardStyle` |
| `CardRadioGroup` | `labelGroup` | `label` |
| `CardRadioGroup` | `descriptionGroup` | `description` |
| `CardRadioGroup` | `isRequired` | `required` |
| `CardRadioGroup` | `value` | Set `checked` on the matching option. |
| `CardRadioGroup` | `error` | `message` and `messageType` |
| `CardRadioOption` | `type` | `position` |
| `TextArea` | `error` | `message` and `messageType` |
| `Link` | `classModifier` | Use `variant` for a supported variant or `className` for custom styling. |
| `ContentItemDuo` | `isVertical` | `position` |
| `ContentItemDuo` | `classModifier` | `className` |
| `Modal` | `icon` | `headingProps={{ icon }}` |
| `Modal` | `iconProps` | `headingProps={{ iconProps }}` |
| `ProgressBarGroup` | `nbSteps` | `stepsCount` |

Warning states are now represented by the `warning` and `hover-warning`
variants where supported. The renamed `orange-100` token is now `orange-050`.

For form validation messages, pass the text through `message` and specify its
kind with `messageType` instead of using the former `error` or `success` props.

#### Class modifiers

The `classModifier` and `classModifiers` APIs have been removed from Prospect
and Client components. Use `className` for custom classes, or use the
component's supported variant or position props when the styling represents a
component state.

Before:

```tsx
<Link classModifier="highlighted" />
```

After:

```tsx
<Link className="highlighted" />
```

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
