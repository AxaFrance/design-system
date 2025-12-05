import { Card, Heading } from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";

const BASIC_CONTENT = (
  <>
    <Heading level={2} className="af-card__title">
      My card title
    </Heading>
    <p>My card content</p>
  </>
);

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  name: "Basic Content",
  render: (args) => <Card {...args} />,
  args: {
    children: BASIC_CONTENT,
  },
};

export const ButtonCard: StoryObj<typeof Card> = {
  render: (args) => <Card {...args} />,
  args: {
    children: BASIC_CONTENT,
    as: "button",
    type: "button",
  },
  argTypes: {
    onClick: { action: "onClick" },
  },
};
