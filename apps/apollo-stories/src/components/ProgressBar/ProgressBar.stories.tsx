import { ProgressBar } from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof ProgressBar> = {
  component: ProgressBar,
  title: "Components/ProgressBar",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    label: {
      control: { type: "text" },
    },
    value: {
      control: { type: "range", min: 0, max: 100, step: 10 },
    },
    max: {
      control: {
        type: "number",
      },
    },
  },
  args: {
    label: "Loading something...",
    value: 70,
    max: 100,
    showPercentage: false,
  },
  decorators: [
    (Story) => (
      <div style={{ minWidth: "70vw" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type StoryProps = ComponentProps<typeof ProgressBar>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Playground",
};
