import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@axa-fr/design-system-apollo-react";
import { renderToggle } from "./render";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components/Toggle",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = Omit<React.ComponentProps<typeof Toggle>, "handleChange">;

type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Toggle",
  render: renderToggle,
  args: {
    selected: false,
    disabled: false,
  },
};
