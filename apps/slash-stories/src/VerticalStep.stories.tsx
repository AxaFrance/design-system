import { Button, VerticalStep } from "@axa-fr/canopee-react/distributeur";
import preview from "../.storybook/preview";

const meta = preview.meta({
  title: "Components/Steps/VerticalStep",
  component: VerticalStep,
});
export default meta;

export const VerticalStepLockedStory = meta.story({
  name: "Test composant VerticalStep bloqué",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "locked",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
  },
});

export const VerticalStepEditedStory = meta.story({
  name: "Test composant VerticalStep en édition",
  args: {
    title: "Configuration",
    stepMode: "edited",
    onEdit: () => {},
    form: (
      <section>
        <h3>Formulaire de l&apos;étape configuration</h3>

        <Button type="submit" variant="validated">
          Valider l&apos;étape
        </Button>
      </section>
    ),
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
  },
});

export const VerticalStepValidatedWithoutRestitutionStory = meta.story({
  name: "Test composant VerticalStep validé sans restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    showRestitution: false,
  },
});

export const VerticalStepValidatedWithRestitutionStory = meta.story({
  name: "Test composant VerticalStep validé avec restitution",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
  },
});

export const VerticalStepValidatedWithContentRightStory = meta.story({
  name: "Test composant VerticalStep validé avec contenu à droite",
  args: {
    title: "Configuration",
    id: "configuration",
    stepMode: "validated",
    contentRight: "Contenu à droite",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
  },
});

export const VerticalStepValidatedReadOnlyStory = meta.story({
  name: "Test composant VerticalStep validé en lecture seule",
  args: {
    title: "Configuration",
    stepMode: "validated",
    onEdit: () => {},
    form: <h3>Formulaire de l&apos;étape configuration</h3>,
    restitution: <h3>Resitution de l&apos;étape configuration</h3>,
    readonly: true,
  },
});

export const ManyVerticalStep = meta.story({
  name: "Test composant avec plusieurs VerticalStep",
  render: () => (
    <>
      <VerticalStep
        {...VerticalStepValidatedWithoutRestitutionStory.input.args}
      />
      <VerticalStep {...VerticalStepValidatedWithRestitutionStory.input.args} />
      <VerticalStep
        {...VerticalStepValidatedWithContentRightStory.input.args}
      />
      <VerticalStep {...VerticalStepEditedStory.input.args} />
      <VerticalStep {...VerticalStepLockedStory.input.args} />
    </>
  ),
});
