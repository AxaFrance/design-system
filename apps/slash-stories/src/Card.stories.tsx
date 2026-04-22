import { Card } from "@axa-fr/canopee-react/distributeur";
import villaIcon from "@material-symbols/svg-400/outlined/villa.svg";
import { fn } from "storybook/test";
import preview from "../.storybook/preview";

const meta = preview.meta({
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
});
export default meta;

export const Default = meta.story({
  name: "Card Button with icon",

  render: ({ ...args }) => (
    <Card {...args} iconSrc={villaIcon}>
      Contenu
    </Card>
  ),
});

export const VerticalWithoutIcon = meta.story({
  name: "Card Button",

  render: ({ ...args }) => <Card {...args}>Contenu</Card>,
});

export const Horizontal = meta.story({
  name: "Card Button Horizontal with icon",
  render: ({ ...args }) => (
    <Card {...args} iconSrc={villaIcon} orientation="horizontal">
      Contenu
    </Card>
  ),
});

export const HorizontalWithoutIcon = meta.story({
  name: "Card Button Horizontal",
  render: ({ ...args }) => (
    <Card {...args} orientation="horizontal">
      Contenu
    </Card>
  ),
});
