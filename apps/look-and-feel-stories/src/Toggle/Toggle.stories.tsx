import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@axa-fr/design-system-apollo-react/lf";
import { renderToggle } from "./render";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components/Toggle",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    handleChange: {
      table: {
        readonly: true,
      },
    },
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
