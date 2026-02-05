import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Button, Icon, TableMobileCard } from "@axa-fr/canopee-react/client";
import download from "@material-symbols/svg-400/outlined/download_2-fill.svg";

interface TableMobileCardStoryArgs {
  variant?: "alternate" | "blue" | "white";
  direction?: "row" | "column";
}

const meta: Meta<typeof TableMobileCard> = {
  title: "Components/TableMobileCard",
  component: TableMobileCard,
};

export default meta;

type Story = StoryObj<TableMobileCardStoryArgs>;

export const BasicTableMobileCard: Story = {
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
  render: (args: TableMobileCardStoryArgs) => (
    <TableMobileCard variant={args.variant}>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Produit/Support</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          AB Sustainable Global Thematic A
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Code Isin</TableMobileCard.Dt>
        <TableMobileCard.Dd>LU0101010101</TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Status</TableMobileCard.Dt>
        <TableMobileCard.Dd>Ouvert</TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Qualification SFDR</TableMobileCard.Dt>
        <TableMobileCard.Dd>9</TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow direction={args.direction}>
        <TableMobileCard.Dt>DIC/DIS/DICI</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button
            variant="ghost"
            iconRight={<Icon src={download} onClick={action("download_1")} />}
          >
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Prospectus</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button
            variant="ghost"
            iconRight={<Icon src={download} onClick={action("download_2")} />}
          >
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
      <TableMobileCard.DRow>
        <TableMobileCard.Dt>Rapport annuelle</TableMobileCard.Dt>
        <TableMobileCard.Dd>
          <Button
            variant="ghost"
            iconRight={<Icon src={download} onClick={action("download_3")} />}
          >
            Télécharger
          </Button>
        </TableMobileCard.Dd>
      </TableMobileCard.DRow>
    </TableMobileCard>
  ),
};
