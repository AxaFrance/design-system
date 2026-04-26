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

const DESCRIPTION_RED =
  "Information utile, importante ou critique, pour aider a comprendre les informations presentees.";

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

export const Blue: Story = {
  args: {
    title: "Pensez a mettre a jour votre dossier client AXA",
    variant: "blue",
    button: primaryButton,
    description: DESCRIPTION,
  },
};

export const Red: Story = {
  args: {
    title: "Titre du message",
    variant: "red",
    button: primaryButton,
    description: DESCRIPTION_RED,
  },
};

export const Open: Story = {
  args: {
    title: "Pensez a mettre a jour votre dossier client AXA",
    variant: "blue",
    showDescription: true,
    button: primaryButton,
    description: DESCRIPTION,
  },
};

export const All: StoryObj = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <MessageBar
        title="Pensez a mettre a jour votre dossier client AXA"
        variant="blue"
        button={primaryButton}
        description={DESCRIPTION}
      />
      <MessageBar
        title="Titre du message"
        variant="red"
        button={primaryButton}
        description={DESCRIPTION_RED}
      />
    </div>
  ),
};
