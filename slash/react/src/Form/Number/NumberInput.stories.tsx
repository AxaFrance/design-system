import type { Meta, StoryObj } from "@storybook/react";
import { NumberInput } from "./NumberInput";
import { MessageTypes } from "../core";

const MODIFIERS = ["", "required", "disabled"];

const meta: Meta<typeof NumberInput> = {
  component: NumberInput,
  title: "Slash/Components/Form/Input/Number",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type StoryProps = Omit<
  React.ComponentProps<typeof NumberInput>,
  "classModifier"
> & {
  classModifier: string[];
};
type Story = StoryObj<StoryProps>;

export const NumberInputStory: Story = {
  name: "NumberInput",
  render: ({ classModifier, onChange, ...args }) => (
    <NumberInput
      classModifier={classModifier.join(" ")}
      onChange={onChange}
      {...args}
    />
  ),
  args: {
    classModifier: [] as string[],
    value: 5,
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    label: "Your name",
    message: "",
    helpMessage: "Aide à la saisie",
    forceDisplayMessage: false,
    messageType: MessageTypes.error,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
    "aria-disabled": false,
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "inline-check" },
    },
  },
};
