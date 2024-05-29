import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Client/Components/Form/Input/Text",
  argTypes: { onChange: { action: "onChange" } },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  name: "Text",
  render: ({ onChange, ...args }) => <Text onChange={onChange} {...args} />,
  args: {
    value: "John Doe",
    label: "Name",
    placeholder: "Your name",
    name: "name",
    id: "nameid",
    disabled: false,
    required: false,
    className: "",
    type: "text",
  },
  argTypes: {
    type: {
      control: { type: "text" },
    },
  },
};
