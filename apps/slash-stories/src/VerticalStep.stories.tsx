import type { Meta, StoryObj } from "@storybook/react";
import { Button, VerticalStep } from "@axa-fr/design-system-slash-react";

const meta = {
  title: "Components/Steps/VerticalStep",
  component: VerticalStep,
} satisfies Meta<typeof VerticalStep>;

export default meta;
type Story = StoryObj<typeof meta>;

export const VerticalStepLockedStory: Story = {
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>,
  },
};

export const VerticalStepEditedStory: Story = {
  name: "Test composant VerticalStep en édition",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "edited",
    onEdit: () => {},
    form: (
      <section>
        <h3>Formulaire de l'étape configuration</h3>

        <Button type="submit" classModifier="success">
          Valider l'étape
        </Button>
      </section>
    ),
    restitution: <h3>Resitution de l'étape configuration</h3>,
  },
};

export const VerticalStepValidatedWithoutRestitutionStory: Story = {
  name: "Test composant VerticalStep validé sans restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>,
    showRestitution: false,
  },
};

export const VerticalStepValidatedWithRestitutionStory: Story = {
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l'étape configuration</h3>,
    restitution: <h3>Resitution de l'étape configuration</h3>,
  },
};

type FullStory = StoryObj<typeof VerticalStep>;
export const ManyVerticalStep: FullStory = {
  name: "Test composant avec plusieurs VerticalStep",
  render: () => (
    <>
      <VerticalStep {...VerticalStepValidatedWithoutRestitutionStory.args} />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.args} />
      <VerticalStep {...VerticalStepEditedStory.args} />
      <VerticalStep {...VerticalStepLockedStory.args} />
    </>
  ),
};
