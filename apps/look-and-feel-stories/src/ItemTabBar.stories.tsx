import { ItemTabBar } from "@axa-fr/design-system-apollo-react/lf";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemTabBar> = {
  component: ItemTabBar,
  title: "Components/ItemTabBar",
};

export default meta;

type Story = StoryObj<typeof ItemTabBar>;

export const Default: Story = {
  name: "ItemTabBar",
  render: ({ ...args }) => <ItemTabBar {...args} />,
  args: {
    isActive: false,
    title: "Mes contrats",
  },
  argTypes: {
    isActive: {
      control: { type: "boolean" },
    },
    title: {
      control: { type: "text" },
    },
  },
};
