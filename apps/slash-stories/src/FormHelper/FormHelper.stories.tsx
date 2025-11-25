import type { Meta, StoryObj } from "@storybook/react";
import { FormHelper } from "@axa-fr/design-system-slash-react";

const meta: Meta<typeof FormHelper> = {
  component: FormHelper,
  title: "Components/FormHelper/FormHelper",
};
export default meta;
type Story = StoryObj<typeof meta>;

export const WithTitle: Story = {
  render: () => (
    <FormHelper
      formTitle="Assistant de saisie"
      sections={[
        {
          title: "Mon formulaire",
          items: [
            { label: "Configuration", mode: "validated" },
            { label: "Souscription", mode: "validated" },
            { label: "Payement", mode: "edited" },
          ],
        },
        {
          title: "Deuxième section avec ancres",
          items: [
            { label: "Préférences", mode: "locked", anchor: "preferences" },
            { label: "Souscription", mode: "locked", anchor: "subscription" },
            { label: "Retractation", mode: "locked", anchor: "retraction" },
          ],
        },
      ]}
    />
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <FormHelper
      formTitle="Assistant de saisie"
      sections={[
        {
          items: [
            { label: "En cours", mode: "edited" },
            { label: "A compléter", mode: "locked" },
            { label: "Validé", mode: "validated" },
            { label: "Désactivé", mode: "disabled" },
          ],
        },
      ]}
    />
  ),
};
