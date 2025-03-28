import type { Meta, StoryObj } from "@storybook/react";

import { Toggle } from "@axa-fr/design-system-apollo-react";

const meta: Meta<typeof Toggle> = {
  component: Toggle,
  title: "Components/Toggle",
  parameters: {
    layout: "centered",
  },
  args: {
    selected: false,
  },
  argTypes: {
    //  onClick: { action: "clicked" }
    selected: {
      control: "boolean",
    },
  },
};

export default meta;

type StoryProps = React.ComponentProps<typeof Toggle>;

type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Toggle",
  render: (args) => <Toggle {...args} />,
  args: {
    selected: false,
  },
};
