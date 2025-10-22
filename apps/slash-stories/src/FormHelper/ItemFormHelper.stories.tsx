import type { Meta, StoryObj } from "@storybook/react";
import { ItemFormHelper } from "@axa-fr/design-system-slash-react";

const meta: Meta<typeof ItemFormHelper> = {
  component: ItemFormHelper,
  title: "Components/FormHelper/ItemFormHelper",
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <>
      <ItemFormHelper label="En cours" mode="edited" ancre="" />
      <ItemFormHelper label="A compléter" mode="locked" ancre="" />
      <ItemFormHelper label="Validé" mode="validated" ancre="" />
      <ItemFormHelper label="Désactivé" mode="disabled" ancre="" />
    </>
  ),
};

export const Anchor: Story = {
  render: () => (
    <>
      <ItemFormHelper label="En cours" mode="edited" ancre="versEnCours" />
      <ItemFormHelper label="A compléter" mode="locked" ancre="versLocked" />
      <ItemFormHelper label="Validé" mode="validated" ancre="VersValider" />
    </>
  ),
};
