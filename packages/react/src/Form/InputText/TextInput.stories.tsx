import type { Meta, StoryObj } from "@storybook/react";
import { MessageTypes } from "../core";
import { TextInput } from "./TextInput";
import { TYPES } from "./constants";

const meta: Meta<typeof TextInput> = {
  component: TextInput,
  title: "Components/Form/Input/TextInput",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof TextInput>>;

export const TextInputStory: Story = {
  name: "TextInput",
  render: ({ onChange, ...args }) => (
    <TextInput onChange={onChange} {...args} />
  ),
  args: {
    classModifier: "",
    value: "John Doe",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    readOnly: false,
    disabled: false,
    autoFocus: false,
    className: "",
    type: "text",
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
    type: {
      options: TYPES,
      control: { type: "select" },
    },
  },
};
