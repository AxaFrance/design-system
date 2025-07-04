import { Meta, StoryObj } from "@storybook/react";
import { DataAgent } from "@axa-fr/design-system-apollo-react";
import bank from "@material-symbols/svg-400/rounded/account_balance_wallet-fill.svg";

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
        icon: bank,
        subtitle1: "6 place du 14 juillet 28 240 Ivry la Bataille",
      },
      {
        type: "icon",
        icon: bank,
        subtitle1: "01 23 34 45 67",
      },
      {
        type: "icon",
        icon: bank,
        subtitle1: "Ouvert aujourd’hui de 09h00 à 13h00 et de 14h00 à 18h00",
      },
    ],
    className: "fr-m-5w",
  },
};
