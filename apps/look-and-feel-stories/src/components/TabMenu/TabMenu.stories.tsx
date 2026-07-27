import { TabMenu } from "@axa-fr/canopee-react/client";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof TabMenu> = {
  title: "Components/TabMenu 🚧",
  component: TabMenu,
};
export default meta;

export const Playground: StoryObj<typeof TabMenu> = {
  render: () => (
    <TabMenu
      items={[
        { href: "#contracts", label: "Mes contrats", isActive: true },
        { href: "#claims", label: "Mes sinistres" },
        { href: "#documents", label: "Mes documents" },
      ]}
    />
  ),
};
