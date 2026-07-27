import { ItemMenu } from "@axa-fr/canopee-react/prospect";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ItemMenu> = {
  title: "Components/ItemMenu 🚧",
  component: ItemMenu,
};
export default meta;

export const Playground: StoryObj<typeof ItemMenu> = {
  args: {
    href: "https://example.com/contracts",
    children: "Mes contrats",
    isActive: false,
  },
};
