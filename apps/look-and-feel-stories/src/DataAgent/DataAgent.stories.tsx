import { Meta, StoryObj } from "@storybook/react";
import { DataAgent } from "@axa-fr/design-system-apollo-react/lf";
import accountBalanceWallet from "@material-symbols/svg-400/rounded/account_balance_wallet-fill.svg";
import call from "@material-symbols/svg-400/rounded/call-fill.svg";
import fax from "@material-symbols/svg-400/rounded/fax-fill.svg";
import { action } from "@storybook/addon-actions";

type Story = StoryObj<typeof DataAgent>;

const meta: Meta<typeof DataAgent> = {
  title: "Components/DataAgent",
  component: DataAgent,
};
export default meta;

export const Default: Story = {
  name: "DataAgent",
  render: ({ ...args }) => <DataAgent {...args} />,
  args: {
    agentProps: {
      picture: "https://dummyimage.com/48/48/fff&text=A",
      title: "Michel Lhote",
      subtitle: "AXA Assurance & Banque",
      type: "picture",
    },
    agentContractProps: {
      title: "Contrat rattaché",
      subtitle: "Assurance Vie, Auto, Habitation, Complémentaire santé",
      type: "stick",
    },
    contents: [
      {
        type: "icon",
        icon: call,
        subtitle1: "01 23 34 45 67",
        title: "",
      },
      {
        type: "icon",
        icon: fax,
        subtitle1: "01 23 34 45 67",
        title: "",
      },
      {
        type: "icon",
        icon: fax,
        subtitle1: "01 23 34 45 67",
        title: "",
      },
    ],
    clickContents: [
      {
        variant: "small",
        icon: accountBalanceWallet,
        title: "Envoyer un message",
        onClick: action("Clicked on Envoyer un message"),
      },
      {
        variant: "small",
        icon: accountBalanceWallet,
        title: "Envoyer un message à l’agent",
        onClick: action("Clicked on Envoyer un message à l’agent"),
      },
      {
        variant: "small",
        icon: accountBalanceWallet,
        title: "Accéder à plus d’informations",
        onClick: action("Clicked on Accéder à plus d’informations"),
      },
    ],
    texteOrias: "N° Orias (orias.fr) : 10057601 - 10057601",
    isCompact: true,
  },
};
