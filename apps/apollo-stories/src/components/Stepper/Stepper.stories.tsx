import { Stepper } from "@axa-fr/design-system-apollo-react";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Components/Stepper",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<ComponentProps<typeof Stepper>>;

export const Playground: Story = {
  name: "Stepper",
  render: (props) => (
    <div style={{ minWidth: "70vw" }}>
      <Stepper {...props} />
    </div>
  ),
  args: {
    nbSteps: 8,
    currentTitle: "Titre étape",
    currentStep: 2,
    currentSubtitle: "Étape X sur X",
    currentStepProgress: 50,
    message: "Titre message",
    helper: "Sauf mention du contraire, tous les champs sont obligatoires.",
  },
  argTypes: {
    messageType: { control: "select", options: ["error", "success"] },
  },
};
