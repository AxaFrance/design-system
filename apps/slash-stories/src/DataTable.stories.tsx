import {
  DataTable,
  Button,
  type DataTableColumnDefinition,
} from "@axa-fr/canopee-react/distributeur";
import type { Meta, StoryObj } from "@storybook/react";

type Person = {
  id: string;
  firstName: string;
  lastName: string;
  age: string;
  city: string;
  status: string;
  birthdate: string;
};

const data: Person[] = [
  {
    id: "1",
    firstName: "Jean",
    lastName: "Dupont",
    age: "32",
    city: "Paris",
    status: "Actif",
    birthdate: "1991-01-15",
  },
  {
    id: "2",
    firstName: "Marie",
    lastName: "Martin",
    age: "28",
    city: "Lyon",
    status: "Actif",
    birthdate: "1995-03-22",
  },
  {
    id: "3",
    firstName: "Pierre",
    lastName: "Bernard",
    age: "45",
    city: "Marseille",
    status: "Inactif",
    birthdate: "1978-07-10",
  },
  {
    id: "4",
    firstName: "Sophie",
    lastName: "Petit",
    age: "36",
    city: "Toulouse",
    status: "Actif",
    birthdate: "1987-11-05",
  },
  {
    id: "5",
    firstName: "Luc",
    lastName: "Robert",
    age: "52",
    city: "Bordeaux",
    status: "Inactif",
    birthdate: "1971-05-30",
  },
  {
    id: "6",
    firstName: "Claire",
    lastName: "Moreau",
    age: "29",
    city: "Nantes",
    status: "Actif",
    birthdate: "1994-09-18",
  },
  {
    id: "7",
    firstName: "Antoine",
    lastName: "Simon",
    age: "41",
    city: "Strasbourg",
    status: "Actif",
    birthdate: "1982-02-14",
  },
  {
    id: "8",
    firstName: "Émilie",
    lastName: "Laurent",
    age: "33",
    city: "Lille",
    status: "Inactif",
    birthdate: "1990-06-25",
  },
];

const columns = [
  {
    accessorKey: "firstName",
    header: "Prénom",
    cellRender: (value: string) => value,
  },
  {
    accessorKey: "lastName",
    header: "Nom",
    cellRender: (value: string) => value,
  },
  {
    accessorKey: "age",
    header: "Âge",
    cellRender: (value: string) => value,
  },
  {
    accessorKey: "city",
    header: "Ville",
    cellRender: (value: string) => value,
  },
  {
    accessorKey: "status",
    header: "Statut",
    cellRender: (value: string) => value,
    filterVariant: "select",
    selectOptions: ["Actif", "Inactif"],
  },
  {
    accessorKey: "birthdate",
    header: "Date de naissance",
    cellRender: (value: string) => value,
    filterVariant: "date",
  },
] as DataTableColumnDefinition[];

const meta: Meta<typeof DataTable> = {
  component: DataTable,
  title: "Components/DataTable",
};

export default meta;

type Story = StoryObj<typeof DataTable>;

export const Simple: Story = {
  render: () => <DataTable data={data} columns={columns} />,
};

export const WithSorting: Story = {
  name: "Avec tri",
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      options={{ enableSorting: true }}
    />
  ),
};

export const WithFilters: Story = {
  name: "Avec filtres",
  render: () => {
    return (
      <DataTable
        data={data}
        columns={columns}
        options={{ enableColumnFilters: true }}
      />
    );
  },
};

export const WithPagination: Story = {
  name: "Avec pagination",
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      paginationConfig={{ pageIndex: 0, pageSize: 3 }}
      options={{ enablePagination: true }}
    />
  ),
};

export const WithRowSelection: Story = {
  name: "Avec sélection de lignes",
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      options={{ enableRowSelection: true }}
    />
  ),
};

export const WithGlobalFilter: Story = {
  name: "Avec filtre global",
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      options={{ enableGlobalFilter: true }}
    />
  ),
};

export const WithActionColumn: Story = {
  name: "Avec colonne d'action",
  render: () => {
    const columnsWithAction: DataTableColumnDefinition<Person>[] = [
      ...columns,
      {
        accessorKey: "id",
        header: "Actions",
        cellRender: () => (
          <div style={{ display: "flex" }}>
            <Button variant="ghost" small style={{ flexGrow: 1 }}>
              Créer
            </Button>
            <Button
              variant="ghost"
              small
              style={{ marginLeft: "10px", flexGrow: 1 }}
            >
              Modifier
            </Button>
            <Button
              variant="ghost"
              small
              style={{ marginLeft: "10px", flexGrow: 1 }}
            >
              Supprimer
            </Button>
          </div>
        ),
      },
    ];

    return (
      <DataTable
        data={data}
        columns={columnsWithAction as DataTableColumnDefinition[]}
      />
    );
  },
};

export const Empty: Story = {
  name: "Aucune donnée",
  render: () => <DataTable data={[]} columns={columns} />,
};

export const FullFeatured: Story = {
  name: "Toutes les fonctionnalités",
  render: () => (
    <DataTable
      data={data}
      columns={columns}
      paginationConfig={{ pageIndex: 0, pageSize: 5 }}
      options={{
        enableSorting: true,
        enableColumnFilters: true,
        enableGlobalFilter: true,
        enablePagination: true,
        enableRowSelection: true,
      }}
    />
  ),
};
