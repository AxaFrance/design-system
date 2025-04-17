import {
  CardMessage,
  cardMessageVariants,
} from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CardMessage> = {
  component: CardMessage,
  title: "Components/CardMessage",
};

export default meta;

type Story = StoryObj<typeof CardMessage>;

export const Default: Story = {
  name: "CardMessage",
  render: ({ ...args }) => <CardMessage aria-label="toto" {...args} />,
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
