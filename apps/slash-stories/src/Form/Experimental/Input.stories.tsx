import { Input } from "@axa-fr/canopee-react/distributeur/experimental";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Experimental/Form/Atoms/Input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
    },
    onChange: { action: "changed", table: { disable: true } },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const DefaultStory: Story = {
  name: "Default",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Enter text...",
  },
};

export const DisabledStory: Story = {
  name: "Disabled",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Disabled input",
    disabled: true,
    value: "Cannot edit this",
  },
};

export const RequiredStory: Story = {
  name: "Required",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Required field",
    required: true,
  },
};

export const InvalidStory: Story = {
  name: "Invalid",
  render: (args) => <Input {...args} />,
  args: {
    placeholder: "Invalid input",
    "aria-invalid": true,
    value: "Invalid value",
  },
};
