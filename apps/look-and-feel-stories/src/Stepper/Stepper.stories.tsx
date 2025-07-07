import { Stepper } from "@axa-fr/design-system-look-and-feel-react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { ComponentProps } from "react";

const meta: Meta<typeof Stepper> = {
  component: Stepper,
  title: "Components/Stepper",
  parameters: {
    layout: "centered",
  },
};

export default meta;

type StoryProps = ComponentProps<typeof Stepper>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "Stepper",
  render: (props) => (
    <div style={{ minWidth: "70vw" }}>
      <Stepper {...props} />
    </div>
  ),
  args: {
    currentTitle: "Titre étape",
    currentStep: 2,
    currentSubtitle: "Étape X sur X",
    currentStepProgress: 50,
    message: "Titre message",
    helper: "Sauf mention du contraire, tous les champs sont obligatoires.",
  },
};
