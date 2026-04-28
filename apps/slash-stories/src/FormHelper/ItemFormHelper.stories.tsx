import type { Meta, StoryObj } from "@storybook/react";
import { ItemFormHelper } from "@axa-fr/canopee-react/distributeur";

const meta: Meta<typeof ItemFormHelper> = {
  component: ItemFormHelper,
  title: "Components/FormHelper/ItemFormHelper",
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <ItemFormHelper label="En cours" mode="edited" />
      <ItemFormHelper label="A compléter" mode="locked" />
      <ItemFormHelper label="Validé" mode="validated" />
      <ItemFormHelper label="Désactivé" mode="disabled" />
    </>
  ),
};

export const Anchor: Story = {
  render: () => (
    <>
      <ItemFormHelper label="En cours" mode="edited" anchor="versEnCours" />
      <ItemFormHelper label="A compléter" mode="locked" anchor="versLocked" />
      <ItemFormHelper label="Validé" mode="validated" anchor="VersValider" />
    </>
  ),
};
