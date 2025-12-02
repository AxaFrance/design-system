import { ProgressBarGroup } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof ProgressBarGroup> = {
  component: ProgressBarGroup,
  title: "Components/ProgressBarGroup",
  parameters: {
    layout: "centered",
  },
  args: {
    stepsCount: 4,
    currentStep: 2,
    currentStepProgress: 80,
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

type StoryProps = ComponentProps<typeof ProgressBarGroup>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {};
