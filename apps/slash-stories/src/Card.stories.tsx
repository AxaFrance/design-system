import { Card } from "@axa-fr/design-system-slash-react";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn(), disabled: false },
  argTypes: {
    classModifier: {
      options: ["error", "my-custom-class"],
      control: { type: "radio" },
    },
    mode: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;

export const Default: StoryObj<typeof Card> = {
  name: "Card Button with icon",

  render: ({ ...args }) => (
    <Card {...args} icon={villaIcon}>
      Contenu
    </Card>
  ),
};

export const VerticalWithoutIcon: StoryObj<typeof Card> = {
  name: "Card Button",

  render: ({ ...args }) => <Card {...args}>Contenu</Card>,
};

export const Horizontal: StoryObj<typeof Card> = {
  name: "Card Button Horizontal with icon",
  render: ({ ...args }) => (
    <Card {...args} icon={villaIcon} mode="horizontal">
      Contenu
    </Card>
  ),
};

export const HorizontalWithoutIcon: StoryObj<typeof Card> = {
  name: "Card Button Horizontal",
  render: ({ ...args }) => (
    <Card {...args} mode="horizontal">
      Contenu
    </Card>
  ),
};
