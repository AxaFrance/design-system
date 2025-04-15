import type { Meta, StoryObj } from "@storybook/react";

import { TimelineVertical } from "@axa-fr/design-system-apollo-react";

const meta: Meta<typeof TimelineVertical> = {
  component: TimelineVertical,
  title: "Components/TimelineVertical",
};

export default meta;

type StoryProps = React.ComponentProps<typeof TimelineVertical>;
type Story = StoryObj<StoryProps>;

export const Playground: Story = {
  name: "TimelineVertical",
  args: {
    tag: "Étape 1",
    title: "Envoi de documents via Sécur'AXA",
    children:
      "Vous allez recevoir un e-mail d'accès à Sécur'AXA, un espace où transmettre vos documents confidentiels dont vos documents médicaux.",
  },
};
