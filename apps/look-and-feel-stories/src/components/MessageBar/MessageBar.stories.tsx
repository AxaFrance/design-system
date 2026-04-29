import type { Meta, StoryObj } from "@storybook/react";
import {
  MessageBar,
  messageBarVariants,
  Button,
} from "@axa-fr/canopee-react/client";

const meta: Meta<typeof MessageBar> = {
  component: MessageBar,
  title: "Components/MessageBar",
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem", maxWidth: "900px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    variant: {
      options: Object.values(messageBarVariants),
      control: { type: "select" },
    },
    showDescription: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof MessageBar>;

const primaryButton = (
  <Button variant="primary" onClick={() => undefined}>
    Primary
  </Button>
);

const DESCRIPTION =
  "Vos informations personnelles doivent etre actualisees afin de maintenir la protection de vos donnees.";

export const Playground: Story = {
  name: "MessageBar",
  args: {
    title: "Pensez a mettre a jour votre dossier client AXA",
    variant: "blue",
    showDescription: true,
    button: primaryButton,
    description: DESCRIPTION,
  },
};
