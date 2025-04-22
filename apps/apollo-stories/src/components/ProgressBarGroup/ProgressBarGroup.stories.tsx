import { ProgressBarGroup } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof ProgressBarGroup> = {
  component: ProgressBarGroup,
  title: "Components/ProgressBarGroup",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = ComponentProps<typeof ProgressBarGroup>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  render: (props) => (
    <div style={{ minWidth: "70vw" }}>
      <ProgressBarGroup {...props} />
    </div>
  ),
  args: {
    nbSteps: 4,
    currentStep: 2,
    currentStepProgress: 80,
  },
};
