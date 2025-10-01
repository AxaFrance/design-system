import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { DataAgent } from "@axa-fr/design-system-apollo-react";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import alternateEmail from "@material-symbols/svg-400/rounded/alternate_email-fill.svg";

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
        icon: accountBalance,
        subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
        title: "",
      },
      {
        type: "icon",
        icon: accountBalance,
        subtitle1: "01 23 34 45 67",
        title: "",
      },
      {
        type: "icon",
        icon: accountBalance,
        subtitle1: "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
        title: "",
      },
    ],
    clickContents: [
      {
        variant: "large",
        icon: alternateEmail,
        title: "Nous contacter",
        onClick: action("Clicked on Nous contacter"),
      },
      {
        variant: "small",
        icon: accountBalance,
        title: "Prendre rendez-vous",
        onClick: action("Clicked on Prendre rendez-vous"),
      },
      {
        variant: "small",
        icon: accountBalance,
        title: "Voir le site-web",
        onClick: action("Clicked on Voir le site-web"),
      },
    ],
    texteOrias: "N° Orias (orias.fr) : 10057601 - 10057601",
    isCompact: true,
  },
};
