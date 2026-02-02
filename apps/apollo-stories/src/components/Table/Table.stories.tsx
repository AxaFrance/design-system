import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import {
  Table,
  Button,
  Tag,
  type HeadColorVariants,
  type BodyColorVariants,
  type RowSizeVariants,
} from "@axa-fr/canopee-react/prospect";

interface TableStoryArgs {
  theadVariant?: HeadColorVariants;
  tbodyVariant?: BodyColorVariants;
  rowSize?: RowSizeVariants;
  row1Size?: RowSizeVariants;
  row2Size?: RowSizeVariants;
  row3Size?: RowSizeVariants;
  row4Size?: RowSizeVariants;
}

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<TableStoryArgs>;

export const BasicTable: Story = {
  name: "Tableau basique",
  args: {
    theadVariant: "blue",
    tbodyVariant: undefined,
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Prénom</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Téléphone</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Dupont</Table.Td>
          <Table.Td>Jean</Table.Td>
          <Table.Td>jean.dupont@example.com</Table.Td>
          <Table.Td>06 12 34 56 78</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Martin</Table.Td>
          <Table.Td>Marie</Table.Td>
          <Table.Td>marie.martin@example.com</Table.Td>
          <Table.Td>06 98 76 54 32</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Bernard</Table.Td>
          <Table.Td>Pierre</Table.Td>
          <Table.Td>pierre.bernard@example.com</Table.Td>
          <Table.Td>06 11 22 33 44</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Dubois</Table.Td>
          <Table.Td>Sophie</Table.Td>
          <Table.Td>sophie.dubois@example.com</Table.Td>
          <Table.Td>06 55 66 77 88</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const AlternateVariantTable: Story = {
  name: "Tableau avec couleurs alternées",
  args: {
    theadVariant: undefined,
    tbodyVariant: "alternate",
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Produit</Table.Th>
          <Table.Th>Catégorie</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th>Stock</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Ordinateur Portable</Table.Td>
          <Table.Td>Électronique</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
          <Table.Td>15</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Souris sans fil</Table.Td>
          <Table.Td>Accessoires</Table.Td>
          <Table.Td position="right">29,99 €</Table.Td>
          <Table.Td>50</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Clavier mécanique</Table.Td>
          <Table.Td>Accessoires</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
          <Table.Td>23</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Écran 27</Table.Td>
          <Table.Td>Électronique</Table.Td>
          <Table.Td position="right">299,00 €</Table.Td>
          <Table.Td>8</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const TableWithTags: Story = {
  name: "Tableau avec tags, statuts et tri",
  args: {
    theadVariant: undefined,
    tbodyVariant: "alternate",
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th onSort={action("sort-reference")}>Référence</Table.Th>
          <Table.Th onSort={action("sort-statut")}>Statut</Table.Th>
          <Table.Th onSort={action("sort-client")}>Client</Table.Th>
          <Table.Th onSort={action("sort-montant")}>Montant</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>REF-001</Table.Td>
          <Table.Td>
            <Tag variant="success">Validé</Tag>
          </Table.Td>
          <Table.Td>Jean Dupont</Table.Td>
          <Table.Td position="right">220,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>REF-002</Table.Td>
          <Table.Td>
            <Tag variant="warning">En attente</Tag>
          </Table.Td>
          <Table.Td>Marie Martin</Table.Td>
          <Table.Td position="right">450,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>REF-003</Table.Td>
          <Table.Td>
            <Tag variant="error">Rejeté</Tag>
          </Table.Td>
          <Table.Td>Pierre Bernard</Table.Td>
          <Table.Td position="right">180,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>REF-004</Table.Td>
          <Table.Td>
            <Tag variant="info">En cours</Tag>
          </Table.Td>
          <Table.Td>Sophie Dubois</Table.Td>
          <Table.Td position="right">320,00 €</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const TableWithButtons: Story = {
  name: "Tableau avec sélection et actions",
  args: {
    theadVariant: "gray",
    tbodyVariant: undefined,
    rowSize: "L",
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
    rowSize: {
      control: { type: "select" },
      options: ["S", "M", "L"],
      description: "Taille des lignes",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th onCheck={action("select-all")}>Utilisateur</Table.Th>
          <Table.Th onSort={action("sort-email")}>Email</Table.Th>
          <Table.Th onSort={action("sort-role")}>Rôle</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Jean Dupont</Table.Td>
          <Table.Td>jean.dupont@example.com</Table.Td>
          <Table.Td>Administrateur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Marie Martin</Table.Td>
          <Table.Td>marie.martin@example.com</Table.Td>
          <Table.Td>Éditeur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Pierre Bernard</Table.Td>
          <Table.Td>pierre.bernard@example.com</Table.Td>
          <Table.Td>Lecteur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
        <Table.Tr size={args.rowSize}>
          <Table.Td>Sophie Dubois</Table.Td>
          <Table.Td>sophie.dubois@example.com</Table.Td>
          <Table.Td>Éditeur</Table.Td>
          <Table.Td>
            <Button variant="tertiary">Modifier</Button>
          </Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const TableWithDifferentSizes: Story = {
  name: "Tableau avec tailles de lignes variées",
  args: {
    theadVariant: undefined,
    tbodyVariant: "alternate",
    row1Size: "S",
    row2Size: "M",
    row3Size: "L",
    row4Size: undefined,
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
    row1Size: {
      control: { type: "select" },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 1",
    },
    row2Size: {
      control: { type: "select" },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 2",
    },
    row3Size: {
      control: { type: "select" },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 3",
    },
    row4Size: {
      control: { type: "select" },
      options: ["S", "M", "L"],
      description: "Taille de la ligne 4",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th>Disponibilité</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr size={args.row1Size}>
          <Table.Td>Produit A</Table.Td>
          <Table.Td>Description courte</Table.Td>
          <Table.Td position="right">49,99 €</Table.Td>
          <Table.Td>En stock</Table.Td>
        </Table.Tr>
        <Table.Tr size={args.row2Size}>
          <Table.Td>Produit B</Table.Td>
          <Table.Td>Description de longueur moyenne pour ce produit</Table.Td>
          <Table.Td position="right">79,99 €</Table.Td>
          <Table.Td>En stock</Table.Td>
        </Table.Tr>
        <Table.Tr size={args.row3Size}>
          <Table.Td>Produit C</Table.Td>
          <Table.Td>
            Description très détaillée avec beaucoup informations
          </Table.Td>
          <Table.Td position="right">129,99 €</Table.Td>
          <Table.Td>Stock limité</Table.Td>
        </Table.Tr>
        <Table.Tr size={args.row4Size}>
          <Table.Td>Produit D</Table.Td>
          <Table.Td>Description standard</Table.Td>
          <Table.Td position="right">99,99 €</Table.Td>
          <Table.Td>Sur commande</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const TableWithAlignments: Story = {
  name: "Tableau avec alignements différents",
  args: {
    theadVariant: undefined,
    tbodyVariant: undefined,
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Article</Table.Th>
          <Table.Th>Quantité</Table.Th>
          <Table.Th>Prix unitaire</Table.Th>
          <Table.Th>Total</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Ordinateur</Table.Td>
          <Table.Td position="center">1</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
          <Table.Td position="right">899,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Souris</Table.Td>
          <Table.Td position="center">2</Table.Td>
          <Table.Td position="right">29,99 €</Table.Td>
          <Table.Td position="right">59,98 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Clavier</Table.Td>
          <Table.Td position="center">1</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
          <Table.Td position="right">89,00 €</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Câble HDMI</Table.Td>
          <Table.Td position="center">3</Table.Td>
          <Table.Td position="right">15,99 €</Table.Td>
          <Table.Td position="right">47,97 €</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const CompactTable: Story = {
  name: "Tableau compact (3 colonnes)",
  args: {
    theadVariant: undefined,
    tbodyVariant: undefined,
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Statut</Table.Th>
          <Table.Th>Date</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>Projet Alpha</Table.Td>
          <Table.Td>
            <Tag variant="success">Terminé</Tag>
          </Table.Td>
          <Table.Td>10/01/2026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Projet Beta</Table.Td>
          <Table.Td>
            <Tag variant="info">En cours</Tag>
          </Table.Td>
          <Table.Td>15/01/2026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Projet Gamma</Table.Td>
          <Table.Td>
            <Tag variant="warning">Planifié</Tag>
          </Table.Td>
          <Table.Td>20/01/2026</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>Projet Delta</Table.Td>
          <Table.Td>
            <Tag variant="error">Annulé</Tag>
          </Table.Td>
          <Table.Td>05/01/2026</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};

export const WideTable: Story = {
  name: "Tableau large (6 colonnes)",
  args: {
    theadVariant: undefined,
    tbodyVariant: "alternate",
  },
  argTypes: {
    theadVariant: {
      control: { type: "select" },
      options: ["gray", "blue"],
      description: "Variant de l'en-tête du tableau",
    },
    tbodyVariant: {
      control: { type: "select" },
      options: ["white", "blue", "alternate"],
      description: "Variant du corps du tableau",
    },
  },
  render: (args: TableStoryArgs) => (
    <Table>
      <Table.THead variant={args.theadVariant}>
        <Table.Tr>
          <Table.Th>ID</Table.Th>
          <Table.Th>Nom</Table.Th>
          <Table.Th>Catégorie</Table.Th>
          <Table.Th>Prix</Table.Th>
          <Table.Th>Stock</Table.Th>
          <Table.Th>Fournisseur</Table.Th>
        </Table.Tr>
      </Table.THead>
      <Table.TBody variant={args.tbodyVariant}>
        <Table.Tr>
          <Table.Td>001</Table.Td>
          <Table.Td>Clavier</Table.Td>
          <Table.Td>Périphériques</Table.Td>
          <Table.Td position="right">45,00 €</Table.Td>
          <Table.Td>25</Table.Td>
          <Table.Td>TechCorp</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>002</Table.Td>
          <Table.Td>Souris</Table.Td>
          <Table.Td>Périphériques</Table.Td>
          <Table.Td position="right">30,00 €</Table.Td>
          <Table.Td>40</Table.Td>
          <Table.Td>TechCorp</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>003</Table.Td>
          <Table.Td>Écran</Table.Td>
          <Table.Td>Affichage</Table.Td>
          <Table.Td position="right">250,00 €</Table.Td>
          <Table.Td>12</Table.Td>
          <Table.Td>ScreenPro</Table.Td>
        </Table.Tr>
        <Table.Tr>
          <Table.Td>004</Table.Td>
          <Table.Td>Casque</Table.Td>
          <Table.Td>Audio</Table.Td>
          <Table.Td position="right">80,00 €</Table.Td>
          <Table.Td>18</Table.Td>
          <Table.Td>SoundMax</Table.Td>
        </Table.Tr>
      </Table.TBody>
    </Table>
  ),
};
