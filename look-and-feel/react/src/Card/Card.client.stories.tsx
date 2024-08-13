import type { Meta, StoryObj } from "@storybook/react";
import { Card } from ".";

const MODIFIERS = [" ", "elevation-2"];
const CUSTOM_CHILDREN = (
  <>
    <h1 className="af-card__title">My card title</h1>
    <p>My card content</p>
  </>
);

const meta: Meta<typeof Card> = {
  title: "Look-and-feel/Components/Card",
  component: Card,
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  name: "Card",
  render: (args) => <Card {...args} />,
  args: {
    children: CUSTOM_CHILDREN,
    classModifier: " ",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: " ",
    },
  },
};

export const ButtonCard: StoryObj<typeof Card> = {
  name: "Button Card",
  render: (args) => <Card {...args} />,
  args: {
    children: CUSTOM_CHILDREN,
    classModifier: " ",
  },
  argTypes: {
    classModifier: {
      options: MODIFIERS,
      control: { type: "select" },
      defaultValue: " ",
    },
    onClick: { action: "onClick" },
  },
};
