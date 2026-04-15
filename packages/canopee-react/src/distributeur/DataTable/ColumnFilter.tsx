import type { Column } from "@tanstack/react-table";
import { Date } from "../Form/Date";
import { Select } from "../Form/Select";
import { DebouncedInput } from "./DebouncedInput";

type ColumnFilterMeta = {
  filterVariant?: "select" | "date" | "range";
  options?: string[];
};

export const ColumnFilter = ({
  column,
}: {
  column: Column<unknown, unknown>;
}) => {
  const { filterVariant, options } = (column.columnDef.meta as
    | ColumnFilterMeta
    | undefined) ?? { filterVariant: "range" };
  const columnFilterValue = (column.getFilterValue() ?? "") as string;
  const keyName = column.id;

  const onChange = (value: string) => {
    column.setFilterValue(value || undefined);
  };

  if (filterVariant === "select") {
    return (
      <Select
        aria-label={keyName}
        onChange={(e) => onChange(e.target.value)}
        value={columnFilterValue}
        placeholder="Selectionner..."
        forceDisplayPlaceholder
      >
        {(options ?? []).map((value: string) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </Select>
    );
  }

  if (filterVariant === "date") {
    return (
      <Date
        aria-label={keyName}
        onChange={(e) => onChange(e.target.value)}
        value={columnFilterValue?.toString()}
      />
    );
  }

  return (
    <DebouncedInput
      aria-label={keyName}
      value={columnFilterValue}
      onChange={onChange}
      placeholder="Recherche..."
    />
  );
};
