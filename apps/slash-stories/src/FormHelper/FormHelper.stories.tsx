import type { Meta, StoryObj } from "@storybook/react";
import { FormHelper } from "@axa-fr/canopee-react/distributeur";

const meta: Meta<typeof FormHelper> = {
  component: FormHelper,
  title: "Components/FormHelper/FormHelper",
  argTypes: {
    formTitle: { control: { type: "text" } },
    sections: { control: { type: "object" } },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  name: "FormHelper",
  args: {
    formTitle: "Assistant de saisie",
    sections: [
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
    ],
  },
};
