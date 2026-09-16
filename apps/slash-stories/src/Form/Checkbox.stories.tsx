import {
  Checkbox,
  CheckboxInput,
  CheckboxItem,
  CheckboxModes,
  HelpButton,
  MessageTypes,
} from "@axa-fr/canopee-react/distributeur";
import { ComponentProps, PropsWithChildren, useEffect, useState } from "react";
import preview from "../../.storybook/preview";

const messageTypes = [...Object.values(MessageTypes), ""];

const modes = [
  CheckboxModes.classic.toString(),
  CheckboxModes.default.toString(),
  CheckboxModes.inline.toString(),
  CheckboxModes.toggle.toString(),
];

const Badge = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => (
  <strong style={{ color: "green" }} className={className ?? ""}>
    {children}
  </strong>
);

const options = [
  { label: "Disabled", value: "1", disabled: true, id: "uniqueId1" },
  { label: "Unchecked", value: "2", id: "uniqueId2" },
  { label: "Checked", value: "3" },
  { label: <Badge className="success">A JSX element</Badge>, value: "4" },
];
const values = ["1", "3"];
const modifierOptions = ["required", "disabled"];

type Story = Omit<ComponentProps<typeof CheckboxInput>, "className"> & {
  modifiers: string[];
};

const meta = preview.type<{ args: Story }>().meta({
  title: "Components/Form/Input/Checkbox",
  argTypes: {
    onChange: { action: "onChange" },
    messageType: { control: { type: "select", options: messageTypes } },
    modifiers: {
      options: modifierOptions,
      control: { type: "inline-check" },
    },
    mode: {
      options: modes,
      control: {
        type: "radio",
        options: modes,
      },
    },
  },
  render: ({ modifiers, ...args }) => (
    <form className="af-form" name="myform">
      <CheckboxInput
        {...args}
        className={(modifiers ?? []).join(" ")}
        values={values}
        options={options}
        classNameContainerLabel="col-md-2"
        classNameContainerInput="col-md-10"
      />
    </form>
  ),
});

export default meta;

export const CheckboxInputStory = meta.story({
  name: "CheckboxInput",
  parameters: {
    controls: {
      include: [
        "label",
        "modifiers",
        "mode",
        "message",
        "messageType",
        "forceDisplayMessage",
        "onChange",
        "required",
      ],
    },
  },
});

export const CheckboxInputErrorStory = meta.story({
  name: "CheckboxInputError",
  render: ({ modifiers, ...args }) => (
    <form className="af-form" name="myform">
      <CheckboxInput
        {...args}
        values={values}
        options={options}
        className={(modifiers ?? []).join(" ")}
        isVisible
        classNameContainerLabel="col-md-2"
        classNameContainerInput="col-md-10"
      />
    </form>
  ),
  args: {
    label: "Place type",
    required: true,
    mode: CheckboxModes.default,
    message: "Error message",
    messageType: MessageTypes.error,
    forceDisplayMessage: true,
    id: "inputuniqueid",
    name: "placeType",
  },
  argTypes: {
    messageType: {
      options: messageTypes,
      control: {
        type: "select",
        options: messageTypes,
        labels: {
          "": "(none)",
        },
      },
    },
    mode: {
      control: { type: "select", options: Object.values(CheckboxModes) },
    },
  },
  parameters: {
    controls: {
      include: [
        "label",
        "modifiers",
        "mode",
        "message",
        "messageType",
        "forceDisplayMessage",
        "onChange",
        "required",
      ],
    },
  },
});

export const CheckboxInputWithChildren = meta.story({
  name: "CheckboxInput with help button",
  render: (args) => {
    return (
      <CheckboxInput
        {...args}
        className={(args.modifiers ?? []).join(" ")}
        name="placeType"
        id="uniqueid"
      >
        <HelpButton mode="hover">help</HelpButton>
      </CheckboxInput>
    );
  },
  args: {
    label: "Place type",
    required: true,
    mode: CheckboxModes.default,
    id: "inputuniqueid",
    name: "placeType",
    options,
  },
  parameters: { controls: { include: ["isChecked", "disabled", "onChange"] } },
});

export const CheckboxItemToggleStory = meta.story({
  name: "CheckboxItem Toggle",
  render: (args) => {
    const [state, setState] = useState<boolean>(args.isChecked ?? false);

    useEffect(() => {
      setState(args.isChecked ?? false);
    }, [args.isChecked]);

    return (
      <CheckboxItem
        {...args}
        name="placeType"
        id="uniqueid"
        value="toto"
        className={`af-form__checkbox-toggle ${(args.modifiers ?? []).join(" ")}`}
        isChecked={state}
        onChange={(e) => setState(e.target.checked)}
      />
    );
  },
  args: { isChecked: true, disabled: false },
  argTypes: { onChange: { action: "onChange" } },
  parameters: { controls: { include: ["isChecked", "disabled", "onChange"] } },
});

export const CheckboxItemStory = meta.story({
  name: "CheckboxItem",
  render: ({ isChecked, ...args }) => (
    <CheckboxItem
      {...args}
      name="placeType"
      id="uniqueid2"
      className={(args.modifiers ?? []).join(" ")}
      isChecked={false}
      onChange={() => {}}
      defaultChecked={isChecked}
    />
  ),
  args: { label: "web center forever", isChecked: true, disabled: false },
  parameters: {
    controls: { include: ["isChecked", "disabled", "label", "onChange"] },
  },
});

export const CheckboxStory = meta.story({
  name: "Checkbox",
  render: (args) => (
    <Checkbox
      {...args}
      className={(args.modifiers ?? []).join(" ")}
      options={options}
      values={values}
      name="placeName"
      id="uniqueid"
      placeholder="Paris"
    />
  ),
  args: { mode: CheckboxModes.default },
  parameters: { controls: { include: ["mode"] } },
});
