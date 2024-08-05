import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { Stepper } from "./Stepper.client";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Client/Components/Stepper",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = Omit<
  ComponentProps<typeof Stepper>,
  | "currentStep"
  | "currentStepProgress"
  | "isTitleVisible"
  | "isSubtitleVisible"
  | "currentTitle"
  | "nbSteps"
> & {
  currentStep: number;
  currentSubtitle: string;
  currentStepProgress: number;
  isTitleVisible: boolean;
  isSubtitleVisible: boolean;
  currentTitle: string;
  nbSteps: 2 | 3 | 4 | 5 | 6;
};
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Stepper",
  render: (props) => (
    <div style={{ minWidth: "70vw" }}>
      <Stepper {...props} />
    </div>
  ),
  args: {
    nbSteps: 3,
    currentTitle: "Step title",
    currentStep: 2,
    currentSubtitle: "Step subtitle",
    currentStepProgress: 50,
    isTitleVisible: true,
    isSubtitleVisible: true,
  },
};
