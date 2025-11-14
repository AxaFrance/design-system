import { Divider } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Divider> = {
  title: "Components/Divider",
  component: Divider,
};

export default meta;

export const Default: StoryObj<typeof Divider> = {
  name: "Divider",
  render: (args) => (
    <div>
      <span>Hello</span>
      <Divider {...args} /> <span>world!</span>
    </div>
  ),
  args: {
    classModifier: " ",
  },
  argTypes: {
    classModifier: {
      control: { type: "text" },
      defaultValue: " ",
    },
  },
};
