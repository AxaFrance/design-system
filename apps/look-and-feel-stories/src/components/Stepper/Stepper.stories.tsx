import { Stepper } from "@axa-fr/canopee-react/client";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Components/Stepper",
  parameters: {
    layout: "centered",
  },
  argTypes: {
    messageType: { control: "select", options: ["error", "success"] },
    titleLevel: { control: "select", options: [1, 2, 3, 4] },
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

type StoryProps = ComponentProps<typeof Stepper>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Stepper",
  args: {
    currentTitle: "Titre étape",
    currentStep: 2,
    currentSubtitle: "Étape X sur X",
    currentStepProgress: 50,
    message: "Titre message",
    helper: "Sauf mention du contraire, tous les champs sont obligatoires.",
  },
};
