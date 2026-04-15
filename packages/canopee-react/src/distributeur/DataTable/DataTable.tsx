import { useEffect, useState } from "react";
import {
  filterFns,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import type {
  CellContext,
  ColumnDef,
  FilterFnOption,
  PaginationState,
} from "@tanstack/react-table";
import "@axa-fr/canopee-css/distributeur/DataTable/DataTable.css";
import { Table, Paging } from "../Table";
import { CheckboxItem } from "../Form/Checkbox";
import { DebouncedInput } from "./DebouncedInput";
import { DataTableHeader } from "./DataTableHeader";
import { DataTableBody } from "./DataTableBody";

const selectionColumn: ColumnDef<unknown, unknown> = {
  id: "select",
  enableColumnFilter: false,
  enableSorting: false,
  size: 10,
  header: ({ table }) => (
    <CheckboxItem
      isChecked={table.getIsAllRowsSelected()}
      onChange={table.getToggleAllRowsSelectedHandler()}
      aria-label="Tout sélectionner"
      label=""
    />
  ),
  cell: ({ row }) => (
    <CheckboxItem
      isChecked={row.getIsSelected()}
      disabled={!row.getCanSelect()}
      onChange={row.getToggleSelectedHandler()}
      aria-label={`Sélectionner ligne ${row.id}`}
      label=""
    />
  ),
};

export type DataTableColumnDefinition<T = unknown> = {
  accessorKey: string;
  header: React.ReactNode;
  filterVariant?: "select" | "date" | "range";
  selectOptions?: string[];
  cellRender?: (value: string, row: T) => React.ReactNode;
};

export type DataTableColumnFilter = {
  id: string;
  value: unknown;
};

export type DataTableColumnVisibility = Record<string, boolean>;

export type DataTableRowSelection = Record<string, boolean>;

export interface DataTableProps<T = unknown> {
  data: T[];
  columns: DataTableColumnDefinition<T>[];
  columnVisibility?: DataTableColumnVisibility;
  paginationConfig?: {
    pageIndex: number;
    pageSize: number;
  };
  options?: {
    enableSorting?: boolean;
    enableColumnFilters?: boolean;
    enablePagination?: boolean;
    enableRowSelection?: boolean;
    enableGlobalFilter?: boolean;
  };
  onColumnFiltersChange?: (filters: DataTableColumnFilter[]) => void;
  onRowSelectionChange?: (selection: T[]) => void;
  onGlobalFilterChange?: (value: string) => void;
}

export const DataTable = ({
  data,
  columns,
  columnVisibility,
  paginationConfig,
  options = {
    enableColumnFilters: false,
    enableSorting: false,
    enablePagination: false,
    enableRowSelection: false,
    enableGlobalFilter: false,
  },
  onColumnFiltersChange,
  onRowSelectionChange,
  onGlobalFilterChange,
}: DataTableProps) => {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: paginationConfig?.pageIndex ?? 0,
    pageSize: paginationConfig?.pageSize ?? 25,
  });

  const [columnFilters, setColumnFilters] = useState<DataTableColumnFilter[]>(
    [],
  );
  const [rowSelection, setRowSelection] = useState<DataTableRowSelection>({});
  const [globalFilter, setGlobalFilter] = useState("");

  const handleGlobalFilterChange = (value: string) => {
    setGlobalFilter(value);
    onGlobalFilterChange?.(value);
  };

  const mappedColumns = [
    ...(options?.enableRowSelection ? [selectionColumn] : []),
    ...columns.map((column) => {
      const { cellRender } = column;

      return {
        accessorKey: column.accessorKey,
        header: () => column.header,
        filterFn: (column.filterVariant === "select"
          ? "equalsString"
          : "includesString") as FilterFnOption<unknown>,
        ...(cellRender
          ? {
              cell: (info: CellContext<unknown, unknown>) =>
                cellRender(
                  (info.getValue() as string | undefined) ?? "",
                  info.row.original,
                ),
            }
          : {}),
        meta: {
          filterVariant: column.filterVariant,
          options: column.selectOptions,
        },
      };
    }),
  ];

  const table = useReactTable({
    columns: mappedColumns,
    data,
    state: {
      columnFilters,
      columnVisibility,
      globalFilter,
      pagination,
      rowSelection,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    globalFilterFn: filterFns.includesString,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  useEffect(() => {
    if (options?.enableRowSelection && onRowSelectionChange) {
      const selected = table
        .getFilteredSelectedRowModel()
        .rows.map((row) => row.original);
      onRowSelectionChange(selected);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rowSelection]);

  useEffect(() => {
    if (options?.enableColumnFilters && onColumnFiltersChange) {
      onColumnFiltersChange(columnFilters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [columnFilters]);

  return (
    <div className="af-datatable">
      {options?.enableGlobalFilter ? (
        <div className="af-datatable__global-filter">
          <DebouncedInput
            value={globalFilter}
            onChange={handleGlobalFilterChange}
            placeholder="Rechercher..."
          />
        </div>
      ) : null}
      <Table>
        <DataTableHeader
          headerGroups={table.getHeaderGroups()}
          enableSorting={options?.enableSorting}
          enableColumnFilters={options?.enableColumnFilters}
        />
        <DataTableBody
          rows={table.getRowModel().rows}
          emptyColSpan={columns.length + (options?.enableRowSelection ? 1 : 0)}
        />
      </Table>
      {options?.enablePagination ? (
        <Paging
          currentPage={table.getState().pagination.pageIndex + 1}
          numberItems={table.getState().pagination.pageSize}
          numberPages={table.getPageCount()}
          mode="default"
          elementsLabel="éléments"
          selectAriaLabel="Nombre d'éléments à afficher"
          onChange={(e) => {
            table.setPageIndex(e.page - 1);
            table.setPageSize(e.numberItems);
          }}
        />
      ) : null}
    </div>
  );
};
