import { flexRender } from "@tanstack/react-table";
import type { Row } from "@tanstack/react-table";
import { TBody, Tr, Td } from "../Table";

type DataTableBodyProps = {
  rows: Row<unknown>[];
  emptyColSpan: number;
};

export const DataTableBody = ({ rows, emptyColSpan }: DataTableBodyProps) => (
  <TBody>
    {rows.length === 0 && (
      <Tr>
        <Td classModifier="no-content" colSpan={emptyColSpan}>
          Aucun résultat trouvé
        </Td>
      </Tr>
    )}
    {rows.map((row) => (
      <Tr key={row.id}>
        {row.getVisibleCells().map((cell) => (
          <Td key={cell.id}>
            {flexRender(cell.column.columnDef.cell, cell.getContext())}
          </Td>
        ))}
      </Tr>
    ))}
  </TBody>
);
