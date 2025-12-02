import { Button, Table, CardData } from "@axa-fr/canopee-react/distributeur";
import type { Meta, StoryObj } from "@storybook/react";

import bank from "@material-symbols/svg-400/rounded/account_balance-fill.svg";

const meta = {
  title: "Components/CardData",
  component: CardData,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: [
          "error",
          "warning",
          "information",
          "success",
          "default",
          "dark",
          "gray",
          "purple",
        ],
      },
      description: "Change the background color of the icon",
    },
  },
} satisfies Meta<typeof CardData>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CardDataPrimary: Story = {
  name: "CardData",
  args: {
    title: "Saisie de contrat",
    children: (
      <Table style={{ boxShadow: "none" }}>
        <Table.TBody>
          <Table.Tr>
            <Table.Td>Date dépôt par le délégataire</Table.Td>
            <Table.Td>-</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Date de réception du flux</Table.Td>
            <Table.Td>13/06/2024</Table.Td>
          </Table.Tr>
          <Table.Tr>
            <Table.Td>Date de création dans Porteur de Risque</Table.Td>
            <Table.Td>25/12/2024</Table.Td>
          </Table.Tr>
        </Table.TBody>
      </Table>
    ),
    contentFitAllSize: true,
    icon: bank,
  },
};

export const CardDataPrimaryAvecSousTitre: Story = {
  name: "CardData with subtitle",
  args: {
    title: "Console des flux",
    subTitle: "Sous-titre de la carte",
    children: (
      <>
        <p style={{ marginTop: 0 }}>Contenu de la carte</p>
        <Button classModifier="reverse">Accéder à la console de flux</Button>
      </>
    ),
    icon: bank,
    variant: "success",
  },
};

export const CardDataPrimaryAvecDescription: Story = {
  name: "CardData with description",
  args: {
    title: "Console des flux",
    description: "Description de la carte",
    children: (
      <>
        <p style={{ marginTop: 0 }}>Contenu de la carte</p>
        <Button classModifier="reverse">Accéder à la console de flux</Button>
      </>
    ),
    icon: bank,
    variant: "success",
  },
};

export const CardDataWithContentRight: Story = {
  name: "CardData with contentRight",
  args: {
    title: "Console des flux",
    subTitle: "Sous-titre de la carte",
    description: "Description de la carte",
    children: (
      <>
        <p style={{ marginTop: 0 }}>Contenu de la carte</p>
        <Button classModifier="reverse">Accéder à la console de flux</Button>
      </>
    ),
    icon: bank,
    variant: "error",
    contentRight: (
      <Button classModifier="reverse">Accéder à la console de flux</Button>
    ),
  },
};
