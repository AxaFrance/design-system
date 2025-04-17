import {
  CardMessage,
  cardMessageVariants,
} from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardMessage> = {
  component: CardMessage,
  title: "Components/CardMessage",
};

export default meta;

type Story = StoryObj<typeof CardMessage>;

export const Default: Story = {
  name: "CardMessage",
  render: ({ ...args }) => <CardMessage {...args} />,
  args: {
    title: "Title",
    text: "This is a message",
  },
  argTypes: {
    variant: {
      options: Object.values(cardMessageVariants),
      control: { type: "select" },
    },
  },
};
