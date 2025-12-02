import { Card } from "@axa-fr/canopee-react/distributeur";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
  parameters: {
    layout: "centered",
  },
  args: { onClick: fn(), disabled: false, error: false, active: false },
  argTypes: {
    orientation: {
      table: {
        disable: true,
      },
    },
    iconSrc: {
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
    <Card {...args} iconSrc={villaIcon}>
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
    <Card {...args} iconSrc={villaIcon} orientation="horizontal">
      Contenu
    </Card>
  ),
};

export const HorizontalWithoutIcon: StoryObj<typeof Card> = {
  name: "Card Button Horizontal",
  render: ({ ...args }) => (
    <Card {...args} orientation="horizontal">
      Contenu
    </Card>
  ),
};
