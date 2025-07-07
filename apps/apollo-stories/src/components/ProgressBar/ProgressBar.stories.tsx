import { ProgressBar } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "Components/ProgressBar",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = ComponentProps<typeof ProgressBar>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  render: (props) => (
    <div style={{ minWidth: "70vw" }}>
      <ProgressBar {...props} />
    </div>
  ),
  args: {
    value: 90,
  },
};
