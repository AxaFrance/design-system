import { Meta, StoryObj } from "@storybook/react";
import {
  ClickIcon,
  clickIconVariants,
} from "@axa-fr/design-system-apollo-react/lf";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";

const meta: Meta<typeof ClickIcon> = {
  component: ClickIcon,
  title: "Components/ClickIcon",
};

export default meta;

type Story = StoryObj<typeof ClickIcon>;

export const Default: Story = {
  name: "ClickIcon",
  render: ({ ...args }) => <ClickIcon {...args} />,
  args: {
    src: bank,
    onClick: () => {
      // eslint-disable-next-line no-alert
      alert("ClickIcon clicked");
    },
  },
  argTypes: {
    variant: {
      options: Object.values(clickIconVariants),
      control: { type: "select" },
    },
  },
};
