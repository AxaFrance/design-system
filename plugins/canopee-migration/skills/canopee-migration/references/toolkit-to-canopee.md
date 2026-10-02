# From @axa-fr/react-toolkit-\* to Canopée (distributeur)

Source: `@axa-fr/react-toolkit-*` 3.0.2 (last release, all packages deprecated, repository archived).
Target: `@axa-fr/canopee-react/distributeur` and `@axa-fr/canopee-css/distributeur` 1.x.
The intermediate name of this universe was Slash (`@axa-fr/design-system-slash-*`).

## What the script already did

- Every `@axa-fr/react-toolkit-<x>` and `@axa-fr/react-toolkit-all` import now points to
  `@axa-fr/canopee-react/distributeur`. Default imports became named imports
  (`import Button from "@axa-fr/react-toolkit-button"` -> `import { Button } from "@axa-fr/canopee-react/distributeur"`).
- Renamed exports are imported under the old local name, so JSX did not change:
  `Message as Alert`, `Tag as Badge`, `Action` (was `ActionCore`), `Button` (was `ButtonCore`),
  `ModalHeader` / `ModalBody` / `ModalFooter` / `ModalHeaderBase` (were `Header` / `Body` /
  `Footer` / `HeaderBase` of `react-toolkit-modal-default`). The toolkit 2.x members `Modal.Header`,
  `Modal.Body`, `Modal.Footer` are not rewritten: see `TK_MODAL`.
- `PopoverModes.over` -> `"hover"`, `PopoverModes.click` -> `"click"`, `PopoverPlacements.top` -> `"top"`,
  `LoaderModes.get` -> `"get"` (string values).
- `classModifier` on `Button`, `Alert`/`Message` and `Badge`/`Tag` became `variant` / `small` / `disabled`
  when the value was known (see `BUTTON_CLASSMODIFIER` for the rest).
- `Table.Header` / `Table.Body` -> `Table.THead` / `Table.TBody`.
- The toolkit stylesheets imported from JS (`af-toolkit-core.css`, `af-icons.css`, `af-*.css`,
  `af-components.scss`) were removed: each Canopée component imports its own CSS, and the entry point
  imports reboot, grid, icons, tokens and the Source Sans Pro font. The first one of a file became
  `import "@axa-fr/canopee-react/distributeur";`: it keeps the Canopée CSS where the toolkit CSS was,
  before the project's own stylesheets, so that their rules still win. Keep that line where it is.
- In `.scss` files: the toolkit `@import` was deleted, and each toolkit variable, `media-breakpoint-*`
  and `rem()` with a certain replacement was replaced (packages-and-css.md, `SASS`).
- The logo import now uses `@axa-fr/canopee-css/logo-axa.svg`.

Canopée needs React 18 or more (1.x) and React 19 (2.0). Upgrade `react`, `react-dom` and their
`@types` first if the script printed a NOTE about it.

### TK_REMOVED

Toolkit exports without a Canopée export. Replace the usage, then delete the name from the old import
(the old import must disappear completely).

| Toolkit | Use instead |
| --- | --- |
| `Switch`, `SwitchInput` | no equivalent. A choice among options: `RadioInput`; an on/off switch: `CheckboxInput` with `mode="toggle"`. Unsure: STOP and ask |
| `CardGroupRadio` | `RadioInput` (or `Radio`) with `mode="cardRadio"` |
| `CardGroupCheckbox` | `CheckboxInput` |
| `Card`, `CardHeader`, `CardContent`, `CardFooter`, `CardMeta` (form cards) | radio: `mode="cardRadio"`; checkbox: `CheckboxInput`. Canopée `Card` is a layout card, not the same component |
| `FileLine` | nothing: `FileInput` / `FileTable` render the lines |
| `Icon` | `<i className="glyphicon glyphicon-NAME" />`, or `Svg` with a Material Symbols file |
| `HelpInfo` | `Popover` with `mode="hover"` and `placement="top"` (the `HelpInfo` defaults): `content` goes in `popoverElement`, the children stay the trigger. `HelpInfo` rendered only its children when `content` was empty or `isDisabled` was set: keep that case by rendering the children alone. Example below |
| `PopoverBase` | `Popover` |
| `AlertWithType`, `AlertIcons` | `Message` with `variant` (`AlertCore` is already imported as `Message`) |
| `useId` | `useId` from `react` |
| `Filter`, `FilterInline`, `Panel`, `FooterClient*`, `LanguageSelection`, `SocialNetwork`, `Constants`, `createId`, `getClickId`, `withIsVisible`... | no equivalent: keep a local component or ask the team (STOP rule) |

```tsx
// BEFORE: one choice among options
import { SwitchInput } from "@axa-fr/react-toolkit-all";
<SwitchInput id="freq" name="freq" label="Frequency" options={options} value={value} onChange={onChange} />
// AFTER (onChange now receives the native event)
import { RadioInput } from "@axa-fr/canopee-react/distributeur";
<RadioInput id="freq" name="freq" label="Frequency" options={options} value={value} onChange={onChange} />
```

```tsx
// BEFORE: the children are the trigger, content is the bubble
<HelpInfo content="Recalculated every year."><span>Bonus</span></HelpInfo>
// AFTER: same bubble (on hover, above the trigger)
import { Popover } from "@axa-fr/canopee-react/distributeur";
<Popover mode="hover" placement="top" popoverElement="Recalculated every year.">
  <span>Bonus</span>
</Popover>
```

HelpInfo used as a value or a type: when the code passes `HelpInfo` around (`HelpHoverCmpt = HelpInfo`,
`Cmpt?: typeof HelpInfo`, `ComponentProps<typeof HelpInfo>`) or its `content` comes from a prop that
may be empty, add this local component once (e.g. `src/shared/components/HelpInfo/HelpInfo.tsx`) and
import it instead of the toolkit one: the call sites, the props types and the test mocks stay as they
are. Never replace the bubble by a `title` attribute (plain text only, and `title` expects a string).

```tsx
import { Popover } from "@axa-fr/canopee-react/distributeur";
import type { ReactNode } from "react";

// toolkit HelpInfo: the children are the trigger, content is the bubble (hover, above)
export type HelpInfoProps = {
  content?: ReactNode;
  children?: ReactNode;
  isDisabled?: boolean;
  className?: string;
  classModifier?: string;
};

const HelpInfo = ({ content, children, isDisabled, className, classModifier }: HelpInfoProps) =>
  !content || isDisabled ? (
    <>{children}</>
  ) : (
    <Popover mode="hover" placement="top" popoverElement={content} className={className} classModifier={classModifier}>
      {children}
    </Popover>
  );

export default HelpInfo;
```

```tsx
// BEFORE: the cell renders its label inside the toolkit HelpInfo, its hover text is the bubble
import { HelpInfo } from "@axa-fr/react-toolkit-all";
type TTdContainer = Omit<ComponentPropsWithoutRef<typeof HelpInfo>, "children" | "content"> & { hover?: ReactNode; HelpHoverCmpt?: typeof HelpInfo };
<HelpHoverCmpt content={hover} classModifier="content">{label}{children}</HelpHoverCmpt>
// AFTER: same code, the local HelpInfo is imported instead; hover still reaches the bubble
import HelpInfo from "shared/components/HelpInfo/HelpInfo";
```

`HelpButton` is another component: a round button showing an "i" icon. Its **children are the bubble
content**; `helpButtonContent` only replaces the icon inside the button, it is not the help text.
Defaults: `mode="click"`, `placement="right"`. Use it only if the design asks for that button:
`<span>Bonus</span> <HelpButton mode="hover">Recalculated every year.</HelpButton>`.

```tsx
// BEFORE
import Icon from "@axa-fr/react-toolkit-icon";
<Icon icon="home" />
// AFTER (Material Symbols, peer dependency of Canopée)
import { Svg } from "@axa-fr/canopee-react/distributeur";
import home from "@material-symbols/svg-400/outlined/home.svg";
<Svg src={home} />
```

### TK_NAMESPACE

`import * as X from "@axa-fr/react-toolkit-..."`, `require(...)` or `jest.mock(...)` of a toolkit package.
Write a normal named import from `@axa-fr/canopee-react/distributeur`. For `jest.mock`, mock the new
entry point only if the test really needs it; usually the mock can be deleted.

### TK_ENUM

A toolkit enum (`PopoverModes`, `PopoverPlacements`, `LoaderModes`) is used as a type or as a value the
script cannot replace. Use the string: `"hover"` / `"click"`; `"top"` / `"bottom"` / `"left"` / `"right"`;
`"none"` / `"get"` / `"post"` / `"delete"` / `"update"` / `"error"`. Then remove the enum from the import.

### TK_CSS_IN_STYLES

A toolkit stylesheet is imported from a `.css` / `.scss` file. If the app renders Canopée React
components, delete the import (components bring their CSS). If the app only uses classes, import
`@axa-fr/canopee-css/distributeur/distributeur.css` once instead.

### TK_ALERT_ICON

`icon` on the toolkit `Alert` (a glyphicon name such as `"info-sign"`) and `iconClassName` on `AlertCore`
have no equivalent: delete them. The Canopée `Message` `icon` is the URL of an SVG file: a glyphicon name
compiles but shows an empty icon. `Message` chooses its icon from `variant` (`error`, `warning`, `info`,
`success`).

```tsx
<Alert classModifier="info" icon="info-sign" title="Info">Text</Alert>  // BEFORE
<Alert variant="info" title="Info">Text</Alert>                          // AFTER
```

### TK_ALERT_CLASSMODIFIER

The toolkit `Alert` rendered one `af-alert--NAME` class per word of `classModifier`. Canopée `Message`
only renders `af-alert--<variant>`: the other words are lost, and with them your CSS selectors and tests
(`.af-alert--notification`). Split the value:

- `error`, `warning`, `info`, `success` -> `variant` with the same value; `danger` -> `variant="warning"`
  (Canopée does the same mapping; never `error`);
- every other word -> `className="af-alert--WORD"` (`className` is added to `af-alert`, it does not replace it).

```tsx
// BEFORE: renders af-alert af-alert--notification af-alert--<type>
<Alert classModifier={`notification ${type}`} title={label} />
// AFTER: same classes; type is "success" | "error" | "danger" | "info"
const VARIANT = { success: "success", error: "error", danger: "warning", info: "info" } as const;
<Alert variant={VARIANT[type]} className="af-alert--notification" title={label} />
```

Expression: when `classModifier` comes from a prop, a helper or a template string with a variable
(`classModifier={newClassModifier}`, `` `notification ${classModifier}` ``), its words are only known at
run time. Never `variant={x as any}` (`--check` lists it as `NO_CAST`), never pass the words without the
`af-alert--` prefix. Add this helper once to the project (e.g. `src/canopee-modifiers.ts`):

```ts
import type { MessageVariants } from "@axa-fr/canopee-react/distributeur";

// toolkit Alert classModifier words -> Canopée Message props (danger -> warning, as Canopée does)
const MESSAGE_VARIANTS = new Map<string, MessageVariants>([
  ["error", "error"],
  ["warning", "warning"],
  ["info", "info"],
  ["success", "success"],
  ["danger", "warning"],
]);

export const messageModifier = (classModifier = "") => {
  const words = classModifier.split(/\s+/).filter(Boolean);
  const other = words.filter((w) => !MESSAGE_VARIANTS.has(w));
  return {
    variant: words.map((w) => MESSAGE_VARIANTS.get(w)).find((v) => v !== undefined),
    className: other.map((w) => `af-alert--${w}`).join(" ") || undefined,
  };
};
```

```tsx
// BEFORE: the type chose the icon, classModifier the classes
<Alert icon={ALERT_ICON[type]} classModifier={`notification ${classModifier}`} title={label} />
// AFTER: the type gives the variant (and so the icon), every other word stays a class
<Alert {...messageModifier(`notification ${type} ${classModifier}`)} title={label} />

// BEFORE, with your own className as well
<Alert className={className} classModifier={newClassModifier} title={label} />
// AFTER: keep both
const m = messageModifier(newClassModifier);
<Alert variant={m.variant} className={[className, m.className].filter(Boolean).join(" ")} title={label} />
```

### TK_FOOTER

```tsx
<Footer copyright="© 2024 AXA" />   // BEFORE
<Footer>© 2024 AXA</Footer>         // AFTER
```

### TK_ACTION_ROLE

The toolkit `Action` defaulted `href` to `#` and `tabIndex` to `0`, and forced `href="/#"` and
`role="button"` when it had an `onClick`. Canopée renders a plain `<a>` with your props only: no default
`href`, `role` or `tabIndex`, and an `<a>` without `href` cannot be reached with the keyboard. Keep the
old behaviour explicitly:

```tsx
<Action icon="menu-left" onClick={back} />                         // BEFORE
<Action icon="menu-left" href="#" role="button" onClick={back} />  // AFTER
```

`role="button"` alone is not enough: `--check` lists the `Action` until it has `href` (or `tabIndex`)
and `role`.


### TK_ACTION_CLASS

The toolkit styled `.af-btn--circle` (one class); a project rule on the Action's own class, loaded later,
won. Canopée styles `.btn.af-btn--circle` (two classes: `display`, size, colours): the project rule now
loses, for example a mobile menu button hidden on desktop shows up again. Add `.btn` to the listed
selector, nothing else:

```scss
.af-title-bar__mobile-menu { display: none; }       // BEFORE
.btn.af-title-bar__mobile-menu { display: none; }   // AFTER
```
### TK_COLLAPSECARD

`CollapseCard` lost its `Header` / `Body` children. `id` and `title` are required, `isOpen` is `open`,
and `onToggle` is the native `onToggle` of `<details>`.

```tsx
// BEFORE
<CollapseCard id="c1" isOpen>
  <CollapseCard.Header>Title</CollapseCard.Header>
  <CollapseCard.Body>Content</CollapseCard.Body>
</CollapseCard>
// AFTER
<CollapseCard id="c1" title="Title" open>
  Content
</CollapseCard>
```

### TK_POPOVER

`Popover.Pop` and `Popover.Over` are gone: the content goes in `popoverElement`, the trigger in `children`.
`mode` (`"hover"` or `"click"`) is required.

```tsx
// BEFORE
<Popover mode={PopoverModes.over} placement={PopoverPlacements.top}>
  <Popover.Pop>Help text</Popover.Pop>
  <Popover.Over><span>?</span></Popover.Over>
</Popover>
// AFTER
<Popover mode="hover" placement="top" popoverElement={<p>Help text</p>}>
  <span>?</span>
</Popover>
```

`HelpButton` takes the same string `mode` and `placement` (its children are the bubble, see `TK_REMOVED`).

### TK_MODAL

Toolkit 2.x `Modal` and `BooleanModal` were shown by `isOpen`, and `Modal` had the members `Modal.Header`,
`Modal.Body`, `Modal.Footer`, `Modal.HeaderBase`. Canopée renders a native `<dialog>`: it opens with
`ref.current.showModal()` and closes with `ref.current.close()`. Do not replace `isOpen` by `open`: it
compiles, but the dialog then shows inside the page, without backdrop, and Escape or a click outside
does nothing. Keep the state, add a ref, an effect and `onClose` (native event, fired by Escape):

```tsx
// BEFORE (toolkit 2.x)
const [isOpen, setOpen] = useState(false);
<Modal isOpen={isOpen} onOutsideTap={() => setOpen(false)}>
  <Modal.Header title="Title" onCancel={() => setOpen(false)} />
  <Modal.Body>Content</Modal.Body>
  <Modal.Footer>Buttons</Modal.Footer>
</Modal>
// AFTER
import { useEffect, useRef, useState } from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "@axa-fr/canopee-react/distributeur";
const [isOpen, setOpen] = useState(false);
const modalRef = useRef<HTMLDialogElement>(null);
useEffect(() => {
  const dialog = modalRef.current;
  if (isOpen && dialog && !dialog.open) dialog.showModal();
  if (!isOpen && dialog?.open) dialog.close();
}, [isOpen]);
<Modal ref={modalRef} onOutsideTap={() => setOpen(false)} onClose={() => setOpen(false)}>
  <ModalHeader onCancel={() => setOpen(false)}>Title</ModalHeader>
  <ModalBody>Content</ModalBody>
  <ModalFooter>Buttons</ModalFooter>
</Modal>
```

The title is the children of `ModalHeader`: its `title` prop still works in 1.x but is deprecated, and in 2.0
the header text silently disappears (`PROP_REMOVED_2`). The toolkit 3.x `Modal` is already a `<dialog>` with a
`ref` and no `isOpen`: only its `Header title="..."` changes, the same way.

`BooleanModal`: the same ref, effect and `onClose`; `onSubmit`, `onCancel`, `title`, `submitTitle`,
`cancelTitle` do not change. One ref per dialog.

### TK_ONCHANGE

Toolkit 1.x and 2.x called `onChange` with `{ name, value, id }`. Canopée does not:

- `Text`, `TextInput`, `Number`, `NumberInput`, `Textarea`, `TextareaInput`,
  `Select`, `SelectInput`, `Radio`, `RadioInput`: native event.
- `Date`, `DateInput`: native event too, but read `TK_DATE`.
- `Checkbox`, `CheckboxInput`: `{ values, target: { value, checked }, name }`.
- `MultiSelect`, `File`, `FileInput`, `Choice`: read `onChange` in
  `node_modules/@axa-fr/canopee-react/dist/distributeur/Form/<Component>/<Component>.d.ts`.

```tsx
<TextInput name="city" onChange={({ value }) => setCity(value)} />       // BEFORE
<TextInput name="city" onChange={(e) => setCity(e.target.value)} />      // AFTER
```

### TK_DATE

Toolkit `Date` / `DateInput`: three changes that the typecheck does not see.

- `onChange`: the toolkit gave `{ value: Date }`, only for a complete date. Canopée gives the native event:
  read `e.target.valueAsDate`, a `Date` at UTC midnight, or `null` while the field is empty or incomplete.
  Never `new Date(e.target.value)`: an empty field gives an Invalid Date, and Canopée then throws
  `RangeError: Invalid time value` while rendering (the page goes blank). Never
  `e.target.valueAsDate || new Date()` (or `??`): clearing the field would silently set today. Keep `null`
  and type the state `Date | null`.
- `value` is controlled: the toolkit only used it as the initial value (it set `defaultValue`), so the
  field stayed editable without state. With Canopée a `value` that no `onChange` updates freezes the field:
  keep the state as in the example below, or pass `defaultValue` for a field without state.
- `value` is displayed as a UTC day: Canopée shows `value.toISOString()` (the toolkit showed the local day).
  A `Date` built at local midnight (`new Date(2000, 0, 1)`) shows the day before in France. Build dates at
  UTC midnight (`new Date(Date.UTC(2000, 0, 1))`) or pass a `"YYYY-MM-DD"` string (`value` accepts both).
  `--check` lists these three cases again until they are fixed.

```tsx
// BEFORE
const [birthdate, setBirthdate] = useState(new Date(2000, 0, 1));
<DateInput value={birthdate} onChange={({ value }) => setBirthdate(value)} />
// AFTER (null = empty field; check it where the date is used)
const [birthdate, setBirthdate] = useState<Date | null>(new Date(Date.UTC(2000, 0, 1)));
<DateInput value={birthdate ?? ""} onChange={(e) => setBirthdate(e.target.valueAsDate)} />
```

### BUTTON_CLASSMODIFIER

`Button` has no `classModifier` since Slash 2.0.

| classModifier | Canopée |
| --- | --- |
| `reverse` | `variant="secondary"` |
| `success` | `variant="validated"` |
| `danger` | `variant="danger"` |
| `small` | `small` |
| `disabled` | `disabled` |
| `hasiconLeft`, `hasIconLeft` | move the `<i>` child into `leftIcon={...}` |
| `hasiconRight`, `hasIconRight` | move the `<i>` child into `rightIcon={...}` |
| `circle`, `circle-small`, `circle-reverse`, `circle-menu` | use `Action` (round icon button) |
| other (`table-sorting`, `active`, business colours) | `className="af-btn--NAME"` |

```tsx
// BEFORE
<Button classModifier="hasiconLeft">
  <i className="glyphicon glyphicon-arrow-left" />
  Back
</Button>
// AFTER
<Button leftIcon={<i className="glyphicon glyphicon-arrow-left" />}>Back</Button>
```

Expression: when `classModifier` comes from a prop, a helper or a template string with a variable
(`classModifier={cancelClassModifier}`, `` `hasiconLeft submit${suffix}` ``), its words are only known at
run time. Never `variant={x as any}` (`--check` lists it as `NO_CAST`), never pass the words as bare
classes. Move the `hasicon*` word and its `<i>` by hand, then add this helper once to the project
(e.g. `src/canopee-modifiers.ts`) for the other words:

```ts
import type { ButtonVariant } from "@axa-fr/canopee-react/distributeur";

// toolkit Button classModifier words -> Canopée props (table above); icon words are moved by hand
const BUTTON_VARIANTS = new Map<string, ButtonVariant>([
  ["reverse", "secondary"],
  ["success", "validated"],
  ["danger", "danger"],
]);
const BUTTON_PROPS = ["small", "disabled", "hasiconLeft", "hasIconLeft", "hasiconRight", "hasIconRight"];

export const buttonModifier = (classModifier = "") => {
  const words = classModifier.split(/\s+/).filter(Boolean);
  const other = words.filter((w) => !BUTTON_VARIANTS.has(w) && !BUTTON_PROPS.includes(w));
  return {
    variant: words.map((w) => BUTTON_VARIANTS.get(w)).find((v) => v !== undefined),
    small: words.includes("small") || undefined,
    disabled: words.includes("disabled") || undefined,
    className: other.map((w) => `af-btn--${w}`).join(" ") || undefined,
  };
};
```

```tsx
// BEFORE: confirmClassModifier is "success" or "disabled" at run time
<Button className="btn af-btn" classModifier={`hasiconRight submit ${confirmClassModifier}`} disabled={hasErrors}>
  <span className="af-btn__text">Send</span>
  <i className="glyphicon glyphicon-arrowthin-right" />
</Button>
// AFTER: the spread comes first; what both give (disabled, className) is merged; af-btn is no
// longer in className
const { className: modifierClass, disabled: modifierDisabled, ...modifier } = buttonModifier(
  `submit ${confirmClassModifier}`,
);
<Button
  {...modifier}
  className={["btn", modifierClass].filter(Boolean).join(" ")}
  disabled={hasErrors || modifierDisabled}
  rightIcon={<i className="glyphicon glyphicon-arrowthin-right" />}>
  <span className="af-btn__text">Send</span>
</Button>
```

Order matters: a spread placed after your own `disabled` or `className` replaces them, and TypeScript
stops with `TS2783: 'disabled' is specified more than once`. Always put `{...modifier}` first, then
your props, and merge a value both of you give (`disabled={yours || modifierDisabled}`).

`className` no longer replaces `af-btn`: it is added to it. Remove `af-btn` from your own `className`.

### BUTTON_CLASSNAME

The toolkit `Button` used its `className` instead of `btn af-btn`, and put each `classModifier` word on
the last class of it: `className="af-link" classModifier="hasIconLeft download"` rendered
`af-link af-link--hasIconLeft af-link--download`, a link without any button look. Canopée always adds
`af-btn`, which paints it as a primary blue button. Keep the classes the toolkit rendered (your styles
use them), move the icon, and give the look with `variant`:

- a link look (`af-link`, or any class that drew a link): `variant="ghost"` (no background, no padding,
  underlined text);
- any other look: a design choice, STOP and ask (`variant="primary"` keeps the Canopée button).

```tsx
// BEFORE: renders "af-link af-link--hasIconLeft af-link--download"
<Button className="af-link" classModifier="hasIconLeft download" onClick={onDownload}>
  <Icons icon="download-csv" />
  <span className="af-link__text">{label}</span>
</Button>
// AFTER
<Button
  variant="ghost"
  className="af-link af-link--hasIconLeft af-link--download"
  leftIcon={<Icons icon="download-csv" />}
  onClick={onDownload}>
  <span className="af-link__text">{label}</span>
</Button>
```

Never `className="af-btn--download"` here: that class never existed, the toolkit rendered
`af-link--download`. `--check` lists the `Button` until it has a `variant`.

## Not detected by the script (typecheck finds them)

- `MultiSelect` options must be exactly `{ value, label }`.
- `Steps` only has the new look (the old one was already deprecated in the toolkit).
- `Alert` (now `Message`): `title` is required.
- Old visual: the toolkit grid came from Bootstrap 4; Canopée ships its own `row` / `col-*` grid.
  Remove the `bootstrap` imports when nothing else needs them.
