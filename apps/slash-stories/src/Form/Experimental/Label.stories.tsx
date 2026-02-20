import { Label } from "@axa-fr/canopee-react/distributeur/experimental";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Experimental/Form/Atoms/Label",
  component: Label,
  argTypes: {
    children: { control: "text" },
    required: { control: "boolean" },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof Label>;

export const DefaultStory: Story = {
  name: "Default",
  render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Label text",
    htmlFor: "input-id",
  },
};

export const RequiredStory: Story = {
  name: "Required",
  render: ({ children, ...args }) => <Label {...args}>{children}</Label>,
  args: {
    children: "Required field",
    htmlFor: "input-id",
    required: true,
  },
};
