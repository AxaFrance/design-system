import type { Meta, StoryObj } from "@storybook/react";
import { Toggle } from "@axa-fr/design-system-apollo-react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components/Toggle",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Toggle>>;

export const Playground: Story = {
  name: "Toggle",
  render: (args) => <Toggle {...args} />,
  args: {
    disabled: false,
  },
};

export const Checked: Story = {
  name: "Toggle Checked",
  render: (args) => <Toggle {...args} />,
  args: {
    disabled: false,
    checked: true,
  },
  argTypes: {
    checked: {
      table: {
        disable: true,
      },
    },
  },
};
