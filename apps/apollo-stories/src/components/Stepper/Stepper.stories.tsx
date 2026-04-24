import { Stepper } from "@axa-fr/canopee-react/prospect";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import bank from "@material-symbols/svg-700/rounded/account_balance.svg";

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

type Story = StoryObj<ComponentProps<typeof Stepper>>;

export const Playground: Story = {
  name: "Playground",
  args: {
    nbSteps: 8,
    currentTitle: "Titre étape",
    currentStep: 2,
    currentSubtitle: "Étape X sur X",
    currentStepProgress: 50,
    message: "Titre message",
    helper: "Sauf mention du contraire, tous les champs sont obligatoires.",
  },
};

export const WithIcon: Story = {
  name: "WithIcon",
  args: {
    nbSteps: 8,
    currentTitle: "Titre étape",
    currentStep: 2,
    currentSubtitle: "Étape X sur X",
    currentStepProgress: 50,
    icon: bank,
    titleLevel: 1,
    helper: "Sauf mention du contraire, tous les champs sont obligatoires.",
  },
};
