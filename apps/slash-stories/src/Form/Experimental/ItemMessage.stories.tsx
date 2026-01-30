import { ItemMessage } from "@axa-fr/canopee-react/distributeur/experimental";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Experimental/Form/Atoms/ItemMessage",
  component: ItemMessage,
  argTypes: {
    children: { control: "text" },
    variant: {
      control: { type: "inline-radio" },
      options: [undefined, "error", "success"],
    },
  },
} satisfies Meta<typeof ItemMessage>;

export default meta;
type Story = StoryObj<typeof ItemMessage>;

export const ItemMessageHelpStory: Story = {
  name: "Help Message",
  render: ({ children, ...args }) => (
    <ItemMessage {...args}>{children}</ItemMessage>
  ),
  args: {
    children: "Help message",
  },
  argTypes: {},
};

export const ItemMessageErrorStory: Story = {
  name: "Error Message",
  render: ({ children, ...args }) => (
    <ItemMessage {...args}>{children}</ItemMessage>
  ),
  args: {
    variant: "error",
    children: "Error message",
  },
  argTypes: {},
};

export const ItemMessageSuccessStory: Story = {
  name: "Success Message",
  render: ({ children, ...args }) => (
    <ItemMessage {...args}>{children}</ItemMessage>
  ),
  args: {
    variant: "success",
    children: "Success message",
  },
  argTypes: {},
};
