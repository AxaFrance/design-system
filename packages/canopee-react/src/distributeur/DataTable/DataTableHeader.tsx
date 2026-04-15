import { Fragment } from "react";
import type { HeaderGroup } from "@tanstack/react-table";
import { THead, Tr, Th } from "../Table";
import { ColumnFilter } from "./ColumnFilter";
import { DataTableHeaderCell } from "./DataTableHeaderCell";

type DataTableHeaderProps = {
  headerGroups: HeaderGroup<unknown>[];
  enableSorting?: boolean;
  enableColumnFilters?: boolean;
};

export const DataTableHeader = ({
  headerGroups,
  enableSorting,
  enableColumnFilters,
}: DataTableHeaderProps) => (
  <THead>
    {headerGroups.map((headerGroup) => (
      <Fragment key={headerGroup.id}>
        <Tr>
          {headerGroup.headers.map((header) => (
            <Th
              key={header.id}
              colSpan={header.colSpan}
              style={{ width: header.getSize() }}
            >
              <DataTableHeaderCell
                header={header}
                enableSorting={enableSorting}
              />
            </Th>
          ))}
        </Tr>
        {enableColumnFilters ? (
          <Tr key={`${headerGroup.id}filters`}>
            {headerGroup.headers.map((header) => (
              <Th key={`${header.id}-filter`}>
                {header.column.getCanFilter() ? (
                  <ColumnFilter column={header.column} />
                ) : (
                  <div className="visually-hidden">no content</div>
                )}
              </Th>
            ))}
          </Tr>
        ) : null}
      </Fragment>
    ))}
  </THead>
);
