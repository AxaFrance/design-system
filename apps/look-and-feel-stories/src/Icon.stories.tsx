import {
  Icon,
  iconSizeVariants,
  iconVariants,
} from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";

const meta: Meta<typeof Icon> = {
  component: Icon,
  title: "Components/Icon",
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  name: "Icon",
  render: ({ ...args }) => <Icon {...args} />,
  args: {
    icon: bank,
    background: false,
  },
  argTypes: {
    variant: {
      options: Object.values(iconVariants),
      control: { type: "select" },
    },
    size: {
      options: Object.keys(iconSizeVariants),
      control: { type: "select" },
    },
  },
};
