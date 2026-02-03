import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Icon, TableCard } from "@axa-fr/canopee-react/client";
import download from "@material-symbols/svg-400/outlined/download_2-fill.svg";

interface TableCardStoryArgs {
  variant?: "alternate" | "blue" | "white";
  direction?: "row" | "column";
}

const meta: Meta<typeof TableCard> = {
  title: "Components/TableCard",
  component: TableCard,
};

export default meta;

type Story = StoryObj<TableCardStoryArgs>;

export const BasicTableCard: Story = {
  name: "Table Card basique",
  args: {
    variant: "alternate",
    direction: "row",
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["alternate", "white", "blue"],
      description: "Variant de la couleur des lignes",
    },
    direction: {
      control: { type: "select" },
      options: ["row", "column"],
      description: "Variant de la disposition des éléments d'une ligne",
    },
  },
  render: (args: TableCardStoryArgs) => (
    <TableCard variant={args.variant}>
      <TableCard.DRow>
        <TableCard.Dt>Produit/Support</TableCard.Dt>
        <TableCard.Dd>AB Sustainable Global Thematic A</TableCard.Dd>
      </TableCard.DRow>
      <TableCard.DRow>
        <TableCard.Dt>Code Isin</TableCard.Dt>
        <TableCard.Dd>LU0101010101</TableCard.Dd>
      </TableCard.DRow>
      <TableCard.DRow>
        <TableCard.Dt>Status</TableCard.Dt>
        <TableCard.Dd>Ouvert</TableCard.Dd>
      </TableCard.DRow>
      <TableCard.DRow>
        <TableCard.Dt>Qualification SFDR</TableCard.Dt>
        <TableCard.Dd>9</TableCard.Dd>
      </TableCard.DRow>
      <TableCard.DRow direction={args.direction}>
        <TableCard.Dt>DIC/DIS/DICI</TableCard.Dt>
        <TableCard.Dd>
          <Button
            variant="ghost"
            iconRight={<Icon src={download} onClick={action("download_1")} />}
          >
            Télécharger
          </Button>
        </TableCard.Dd>
      </TableCard.DRow>
      <TableCard.DRow>
        <TableCard.Dt>Prospectus</TableCard.Dt>
        <TableCard.Dd>
          <Button
            variant="ghost"
            iconRight={<Icon src={download} onClick={action("download_2")} />}
          >
            Télécharger
          </Button>
        </TableCard.Dd>
      </TableCard.DRow>
      <TableCard.DRow>
        <TableCard.Dt>Rapport annuelle</TableCard.Dt>
        <TableCard.Dd>
          <Button
            variant="ghost"
            iconRight={<Icon src={download} onClick={action("download_3")} />}
          >
            Télécharger
          </Button>
        </TableCard.Dd>
      </TableCard.DRow>
    </TableCard>
  ),
};
