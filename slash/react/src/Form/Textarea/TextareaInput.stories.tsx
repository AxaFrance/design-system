import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { MessageTypes } from "../core";
import { TextareaInput } from "./TextareaInput";

const meta: Meta<typeof TextareaInput> = {
  component: TextareaInput,
  title: "Components/Form/Input/TextareaInput",
  argTypes: { onChange: { action: "onChange" } },
  args: { onChange: fn() },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof TextareaInput>>;

export const TextareaInputStory: Story = {
  name: "TextareaInput",
  render: ({ onChange, ...args }) => (
    <TextareaInput onChange={onChange} {...args} />
  ),
  args: {
    label: "Comment",
    name: "comment",
    id: "commentid",
    value: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    required: true,
    rows: 6,
    cols: 60,
    placeholder: "",
    helpMessage: "Enter a comment",
    messageType: MessageTypes.error,
    message: "",
    forceDisplayMessage: false,
    readOnly: false,
    disabled: false,
    isVisible: true,
    classModifier: "",
    className: "",
    tabIndex: 0,
    autoFocus: true,
    classNameContainerLabel: "col-md-2",
    classNameContainerInput: "col-md-10",
  },
};
