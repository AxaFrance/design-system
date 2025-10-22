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
      sections={[
        {
          titre: "Mon formulaire",
          items: [
            { label: "Configuration", mode: "validated" },
            { label: "Souscription", mode: "validated" },
            { label: "Payement", mode: "edited" },
          ],
        },
        {
          titre: "Deuxième section",
          items: [
            { label: "Préférences", mode: "locked" },
            { label: "Souscription", mode: "locked" },
            { label: "Retractation", mode: "locked" },
          ],
        },
      ]}
    />
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <FormHelper
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
