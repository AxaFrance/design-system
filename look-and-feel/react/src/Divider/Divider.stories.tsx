import type { Meta, StoryObj } from "@storybook/react";
import { Divider } from ".";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;

export const Default: StoryObj<typeof Divider> = {
  name: "Divider",
  render: (args) => <Divider {...args} />,
  args: {
    classModifier: "",
  },
};
