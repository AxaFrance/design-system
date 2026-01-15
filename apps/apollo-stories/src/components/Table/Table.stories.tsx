/* eslint-disable import/no-relative-packages */
import { Meta, StoryObj } from "@storybook/react";
import { Table } from "../../../../../packages/canopee-react/src/prospect-client/Table/TableCommon";
import { THead } from "../../../../../packages/canopee-react/src/prospect-client/Table/THead";
import { TBody } from "../../../../../packages/canopee-react/src/prospect-client/Table/TBody";
import { Tr } from "../../../../../packages/canopee-react/src/prospect-client/Table/Tr";
import { Th } from "../../../../../packages/canopee-react/src/prospect-client/Table/Th";
import { Td } from "../../../../../packages/canopee-react/src/prospect-client/Table/Td";

import "../../../../../packages/canopee-css/src/prospect-client/Table/TableCommon.css";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
};

export default meta;

type Story = StoryObj<typeof Table>;

export const SimpleTable: Story = {
  name: "Tableau simple",
  render: () => (
    <Table>
      <THead>
        <Tr>
          <Th size="L">Prénom</Th>
          <Th>Nom</Th>
          <Th position="right">Email</Th>
          <Th>Téléphone</Th>
        </Tr>
      </THead>
      <TBody>
        <Tr>
          <Td>Jean</Td>
          <Td>Dupont</Td>
          <Td>jean.dupont@example.com</Td>
          <Td>06 12 34 56 78</Td>
        </Tr>
        <Tr>
          <Td>Marie</Td>
          <Td>Martin</Td>
          <Td>marie.martin@example.com</Td>
          <Td>06 98 76 54 32</Td>
        </Tr>
        <Tr>
          <Td>Pierre</Td>
          <Td>Bernard</Td>
          <Td>pierre.bernard@example.com</Td>
          <Td>06 11 22 33 44</Td>
        </Tr>
        <Tr>
          <Td>Sophie</Td>
          <Td>Dubois</Td>
          <Td>sophie.dubois@example.com</Td>
          <Td>06 55 66 77 88</Td>
        </Tr>
      </TBody>
    </Table>
  ),
};
