import { InputUnit } from "@axa-fr/canopee-react/distributeur/experimental";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Experimental/Form/Atoms/InputUnit",
  component: InputUnit,
  argTypes: {
    children: { control: "text" },
  },
} satisfies Meta<typeof InputUnit>;

export default meta;
type Story = StoryObj<typeof InputUnit>;

export const DefaultStory: Story = {
  name: "Default",
  render: ({ children, ...args }) => (
    <InputUnit {...args}>{children}</InputUnit>
  ),
  args: {
    children: "€",
  },
};

export const PercentageStory: Story = {
  name: "Percentage",
  render: ({ children, ...args }) => (
    <InputUnit {...args}>{children}</InputUnit>
  ),
  args: {
    children: "%",
  },
};

export const TextUnitStory: Story = {
  name: "Text Unit",
  render: ({ children, ...args }) => (
    <InputUnit {...args}>{children}</InputUnit>
  ),
  args: {
    children: "per month",
  },
};
