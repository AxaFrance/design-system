import {
  HelpButton,
  MessageTypes,
  TextareaInput,
} from "@axa-fr/design-system-slash-react";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta: Meta<typeof TextareaInput> = {
  component: TextareaInput,
  title: "Components/Form/Input/Textarea",
  argTypes: { onChange: { action: "onChange" } },
  args: {
    onChange: fn(),
    label: "Comment",
    name: "comment",
    id: "TextareaInputId",
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
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof TextareaInput>>;

export const TextareaInputStory: Story = {
  name: "TextareaInput",
  render: ({ onChange, ...args }) => (
    <TextareaInput onChange={onChange} {...args} />
  ),
  args: {},
};

export const TextAreaInputWithChildren: Story = {
  name: "TextareaInput with help button",
  render: ({ onChange, ...args }) => (
    <TextareaInput onChange={onChange} {...args}>
      <HelpButton mode="hover">Help</HelpButton>
    </TextareaInput>
  ),
};
