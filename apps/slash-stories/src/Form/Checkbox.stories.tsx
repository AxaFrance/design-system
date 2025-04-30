import {
  Checkbox,
  CheckboxInput,
  CheckboxItem,
  CheckboxModes,
  MessageTypes,
} from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

const messageTypes = Object.values(MessageTypes);

const meta: Meta = {
  title: "Components/Form/Input/Checkbox",
  component: CheckboxInput,
  argTypes: {
    onChange: { action: "onChange" },
    messageType: {
      options: messageTypes,
      control: "inline-radio",
    },
    mode: {
      control: { type: "select", options: Object.values(CheckboxModes) },
    },
  },
  args: { onChange: fn() },
};

export default meta;

const modifiers = ["required", "disabled"];

const Badge = ({
  children,
  classModifier,
}: PropsWithChildren<{ classModifier?: string }>) => (
  <strong style={{ color: "green" }} className={classModifier ?? ""}>
    {children}
  </strong>
);

const options = [
  { label: "Disabled", value: "1", disabled: true, id: "uniqueId1" },
  { label: "Unchecked", value: "2", id: "uniqueId2" },
  { label: "Checked", value: "3" },
  { label: <Badge classModifier="success">A JSX element</Badge>, value: "4" },
];
const values = ["1", "3"];

type Story = StoryObj<
  Omit<ComponentPropsWithoutRef<typeof CheckboxInput>, "classModifier"> & {
    classModifier: string[];
  }
>;

export const CheckboxInputStory: Story = {
  name: "CheckboxInput",
  render: ({ classModifier, ...args }) => (
    <form className="af-form" name="myform">
      <CheckboxInput
        {...args}
        values={values}
        options={options}
        classModifier={(classModifier ?? []).join(" ")}
        isVisible
        classNameContainerLabel="col-md-2"
        classNameContainerInput="col-md-10"
      />
    </form>
  ),
  args: {
    label: "Place type",
    required: true,
    classModifier: [],
    mode: CheckboxModes.classic,
    message: "Error message",
    messageType: MessageTypes.error,
    forceDisplayMessage: false,
    id: "inputuniqueid",
    name: "placeType",
  },
  argTypes: {
    classModifier: { options: modifiers, control: { type: "inline-check" } },
    mode: {
      options: Object.values(CheckboxModes),
      control: { type: "select", options: Object.values(CheckboxModes) },
    },
    onChange: { action: "onChange" },
  },
  parameters: {
    controls: {
      include: [
        "label",
        "classModifier",
        "mode",
        "message",
        "messageType",
        "forceDisplayMessage",
        "onChange",
        "required",
      ],
    },
  },
};

export const CheckboxInputErrorStory: Story = {
  name: "CheckboxInputError",
  render: ({ classModifier, ...args }) => (
    <form className="af-form" name="myform">
      <CheckboxInput
        {...args}
        values={[]}
        options={options}
        classModifier={(classModifier ?? []).join(" ")}
        isVisible
        classNameContainerLabel="col-md-2"
        classNameContainerInput="col-md-10"
      />
    </form>
  ),
  args: {
    label: "Place type",
    required: true,
    classModifier: [],
    mode: CheckboxModes.default,
    message: "Error message",
    messageType: MessageTypes.error,
    forceDisplayMessage: true,
    id: "inputuniqueid",
    name: "placeType",
  },
  argTypes: {
    classModifier: { options: modifiers, control: { type: "inline-check" } },
    mode: {
      options: Object.values(CheckboxModes),
      control: { type: "inline-radio" },
    },
  },
  parameters: {
    controls: {
      include: [
        "label",
        "classModifier",
        "mode",
        "message",
        "messageType",
        "forceDisplayMessage",
        "onChange",
        "required",
      ],
    },
  },
};

export const CheckboxItemToggleStory: StoryObj<{
  isChecked: boolean;
  disabled: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = {
  name: "CheckboxItem Toggle",
  render: (args) => (
    <CheckboxItem
      {...args}
      name="placeType"
      id="uniqueid"
      value="toto"
      className="af-form__checkbox-toggle"
    />
  ),
  args: { isChecked: true, disabled: false },
  argTypes: { onChange: { action: "onChange" } },
  parameters: { controls: { include: ["isChecked", "disabled", "onChange"] } },
};

export const CheckboxItemStory: StoryObj<typeof CheckboxItem> = {
  name: "CheckboxItem",
  render: ({ isChecked, ...args }) => (
    <CheckboxItem
      {...args}
      name="placeType"
      id="uniqueid"
      value="toto"
      defaultChecked={isChecked}
    />
  ),
  args: { label: "web center forever", isChecked: true, disabled: false },
  parameters: {
    controls: { include: ["isChecked", "disabled", "label", "onChange"] },
  },
};

export const CheckboxStory: StoryObj<typeof Checkbox> = {
  name: "Checkbox",
  render: (args) => (
    <Checkbox
      {...args}
      options={options}
      values={values}
      name="placeName"
      id="uniqueid"
      placeholder="Paris"
    />
  ),
  args: { mode: CheckboxModes.default },
  parameters: { controls: { include: ["mode"] } },
};
