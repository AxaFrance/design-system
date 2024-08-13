import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "Look-and-feel/Components/Form/Input/Text",
  args: {
    value: "John Doe",
    label: "Label",
    placeholder: "¨Placeholder",
    helper: "Informations complémentaires",
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
      onChange: { action: "onChange" },
    },
    onChange: { action: "onChange" },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const TextStory: Story = {
  name: "Text",
  render: ({ onChange, ...args }) => <Text onChange={onChange} {...args} />,
};

export const TextWithDescriptionStory: Story = {
  name: "Text with description",
  render: ({ onChange, ...args }) => <Text onChange={onChange} {...args} />,
  args: {
    description: "Description",
  },
};

export const TextOnErrorStory: Story = {
  name: "Text on error",
  render: ({ onChange, ...args }) => <Text onChange={onChange} {...args} />,
  args: {
    classModifier: "error",
    description: "Description",
    error: "Error Message",
  },
};
