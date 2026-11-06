/* eslint-disable-next-line import/no-extraneous-dependencies */
import { useState } from "react";
import { Button, Pagination, Table, Tag } from "@axa-fr/canopee-react/client";
import "./Remboursements.css";

import { ALL_DATA, STATUS_VARIANTS, type DataRow } from "./constants";

const getStatusTag = (statut: DataRow["statut"]) => (
  <Tag variant={STATUS_VARIANTS[statut]}>{statut}</Tag>
);

export const Remboursements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.max(1, Math.ceil(ALL_DATA.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = ALL_DATA.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Table>
        <Table.THead>
          <Table.Tr>
            <Table.Th>Libellé</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Statut</Table.Th>
            <Table.Th>Montant</Table.Th>
          </Table.Tr>
        </Table.THead>

        <Table.TBody variant="alternate">
          {currentData.map((row) => (
            <Table.Tr key={row.id} size="M">
              <Table.Td>{row.libelle}</Table.Td>
              <Table.Td>{row.date}</Table.Td>
              <Table.Td>{getStatusTag(row.statut)}</Table.Td>
              <Table.Td position="right">{row.montant.toFixed(2)} €</Table.Td>
            </Table.Tr>
          ))}
        </Table.TBody>
      </Table>

      <Pagination
        numberPages={totalPages}
        currentPage={currentPage}
        onChangePage={setCurrentPage}
        asItem={Button}
        className="table-page__pagination"
      />
    </>
  );
};
