# Canopée 1.x to 2.0

2.0 is not released yet: on npm, `latest` is 1.8.0 and `next` is a 2.0.0 alpha. Use `--target 2` only
when the team asked for 2.0. Everything below breaks in 2.0; in 1.x the old forms still work
(deprecated), so the same changes can be made on 1.x first.

## What the script already does with `--target 2`

- `Alert` -> `Message`, `Badge` -> `Tag` (distributeur); `CheckboxCard` -> `CardCheckbox`,
  `DateInput` -> `InputDate`, `TextInput` -> `InputText` (client) as import aliases.
- B2C `CardRadio` (the 1.x group) -> `CardRadioGroup`, and `CardRadioOption` -> `CardRadio`, both as
  import aliases, so JSX keeps working with the 1.x meaning.
- `Table.Header` / `Table.Body` -> `Table.THead` / `Table.TBody`.
- `classModifier` -> `variant` on `Message` and `Tag` when the value is known.
- B2C props: `isOpen` -> `open` (Accordion, AccordionContextual, AccordionCore), `labelGroup` /
  `descriptionGroup` / `isRequired` -> `label` / `description` / `required` (CardCheckbox, CardRadioGroup),
  `buttonLabel` / `onButtonClick` -> `moreButtonLabel` / `onMoreButtonClick` (ItemLabel, Dropdown, InputDate,
  InputPhone, InputText, TextArea), `inputId` -> `htmlFor` (ItemLabel), `nbSteps` ->
  `stepsCount` (ProgressBarGroup), `hasError` / `errorId` -> `aria-invalid` / `aria-errormessage` (Checkbox),
  `isInvalid` -> `variant="error"` (Radio).
- `--orange-100` -> `--orange-050`; renamed stylesheets (`rebootLF.css` -> `reboot.css`,
  `ItemMessageLF/Apollo.css` -> `ItemMessageAll.css`, `SkeletonLF/Apollo.css` -> `SkeletonAll.css`,
  `CardRadioOption/*` -> `CardRadio/*`).

React 19 is required (`react` and `react-dom` >= 19).

### REMOVED_2

| Removed | Use instead |
| --- | --- |
| `Pass`, `PassInput` | `<TextInput type="password" />` |
| `Slider`, `SliderInput` | `NumberInput` or another control |
| `SelectBase` | `<Select>` with `<option>` children |
| `FieldForm`, `FieldInput`, `LegacyField` | the `*Input` components (`TextInput`, `SelectInput`...) |
| `getComponentClassName`, `getComponentClassNameWithUserClassname` | `getClassName({ baseClassName, modifiers, className })` |

```tsx
<PassInput label="Password" name="pwd" id="pwd" />                  // BEFORE
<TextInput label="Password" name="pwd" id="pwd" type="password" />  // AFTER
```

### CLASSMODIFIER

`classModifier` is removed from every distributeur component. `className` is now added to the
default class instead of replacing it, so a modifier can be passed as a class:

```tsx
<Title classModifier="small">Contracts</Title>        // BEFORE (renders af-title af-title--small)
<Title className="af-title--small">Contracts</Title>  // AFTER
```

Prefer a real prop when there is one: `Button` `variant` / `small`, `Message` and `Tag` `variant`,
`Accordion` `variant`, `Modal` `size`. To know the modifier class, look at the class the 1.x component
rendered (`af-<block>--<modifier>`).

### PROP_REMOVED_2

| Component | Removed prop | Do |
| --- | --- | --- |
| `Select` (distributeur) | `options` | `<option>` children (`SelectInput` keeps `options`) |
| `ModalHeader` | `title` | pass the title as children. In 2.0 `title` is still accepted as an HTML attribute (tooltip): the header text silently disappears |
| `Field`, and every `*Input` (`TextInput`, `SelectInput`, `DateInput`...) | `isVisible` (`Field` also loses `classNameSuffix`) | render the field conditionally |
| `InputText`, `InputDate`, `InputPhone`, `Dropdown`, `TextArea`, `CardCheckbox`, `CardRadioGroup` | `error`, `success` | `message="..."` with `messageType="error"` or `"success"` |
| `CheckboxText` | `errorMessage` | `message` + `messageType="error"` |
| `CardRadioGroup` | `type`, `value` | `position` and `cardStyle`; `checked` on the selected item of `options` |
| `CardRadioOption` (2.0 `CardRadio`) | `type` | `position` |
| `ContentItemMono` | `icon` | `iconProps` |
| `ContentItemDuo` | `classModifier`, `isVertical` | `size`, `position="vertical"` |
| `Link` (B2C) | `classModifier` | `variant` |
| `Modal` (B2C) | `icon`, `iconProps` | `headingProps={{ icon, iconProps }}` |
| `ItemLabel` | `label` | children |

```tsx
<ModalHeader title="Delete the file" onCancel={close} />                // BEFORE
<ModalHeader onCancel={close}>Delete the file</ModalHeader>             // AFTER
```

```tsx
<InputText label="Name" error="Required" />                             // BEFORE
<InputText label="Name" message="Required" messageType="error" />       // AFTER
```

### PROP_CONFLICT

The element has both the deprecated prop and its replacement (e.g. `labelGroup` and `label`). Keep the
new one only, with the value that is really displayed today (1.x renders both side by side).

### LOADER_2

The distributeur `Loader` no longer has `mode`. It takes `text` (required) and `variant`
(`"fullscreen"` default, `"content"`, `"inline"`), and is rendered only while loading. With
`variant="fullscreen"` it renders its children and the overlay.

The 1.x texts were: `get` "Chargement en cours", `post` "Sauvegarde en cours", `delete`
"Suppression en cours", `update` "Mise à jour en cours", `error` "Une erreur est survenue lors du chargement du composant".

```tsx
// BEFORE
<Loader mode={loading ? "get" : "none"}>
  <Results />
</Loader>
// AFTER
{loading ? (
  <Loader text="Chargement en cours">
    <Results />
  </Loader>
) : (
  <Results />
)}
```

`mode="error"` was an error message, not a loader: show a `Message variant="error"` instead.

### FIELD_2

In 1.x `Field` is the legacy field (children API). In 2.0 `Field` is the new field: it renders the input
through `renderInput({ id, inputClassName, errorId, ariaInvalid })`. Prefer the ready-made `*Input`
components (`TextInput`, `SelectInput`, `DateInput`...); use `renderInput` only for a custom input.

### CARDRADIO_2

In 1.x `CardRadio` is a deprecated alias of `CardRadioGroup`; in 2.0 `CardRadio` is the option
(formerly `CardRadioOption`). The script renames them when it knows the project is on 1.x. It reports
this code when the installed version is unknown (`"*"`, `"latest"`): if the project is on 1.x, rename
`CardRadio` to `CardRadioGroup` and `CardRadioOption` to `CardRadio`, in this order. The CSS class of the
group is `af-card-radio-group` since 1.4.0.

### LAYERS

All Canopée CSS is now inside `@layer canopee` (and `reset`). CSS outside any layer wins over layered
CSS, whatever the specificity: your overrides apply more easily, but a global rule such as
`button { ... }` or `a { color: ... }` in the app now also wins over Canopée components. Check the
pages visually and scope such rules.

### NAME

`Name` (distributeur header) renders a `<p class="af-header__title">` instead of an `<h2>`. Update tests
that query the heading (`getByRole("heading", { level: 2 })`) and CSS selectors `h2.af-header__title`.
