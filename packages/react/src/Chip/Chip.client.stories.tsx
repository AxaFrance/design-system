import type { Meta, StoryObj } from "@storybook/react";
import { Chip } from ".";

const meta: Meta<typeof Chip> = {
  title: "Client/Components/Chip",
  component: Chip,
};

export default meta;

export const Default: StoryObj<typeof Chip> = {
  name: "Chip",
  render: (args) => <Chip {...args} />,
  args: {
    children: "Texte",
    classModifier: "",
    isMobile: false,
  },
  argTypes: {
    classModifier: {
      options: ["", "success", "error", "warning", "info"],
      control: { type: "select" },
      defaultValue: "",
    },
  },
};
