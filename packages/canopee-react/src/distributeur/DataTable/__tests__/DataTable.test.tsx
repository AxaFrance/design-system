import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, test } from "vitest";
import { DataTable } from "../DataTable";

const columns = [
  { accessorKey: "name", header: "Nom" },
  { accessorKey: "age", header: "Âge" },
  { accessorKey: "city", header: "Ville" },
];

const data = [
  { name: "Bob", age: "25", city: "Lyon" },
  { name: "Alice", age: "30", city: "Paris" },
  { name: "Charlie", age: "35", city: "Marseille" },
];

describe("DataTable", () => {
  test("should render column headers", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(
      screen.getByRole("columnheader", { name: "Nom" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Âge" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Ville" }),
    ).toBeInTheDocument();
  });

  test("should render all data rows", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(screen.getByRole("cell", { name: "Alice" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Bob" })).toBeInTheDocument();
    expect(screen.getByRole("cell", { name: "Charlie" })).toBeInTheDocument();
  });

  test("should render custom cell via cellRender", () => {
    const columnsWithRender = [
      {
        accessorKey: "name",
        header: "Nom",
        cellRender: (value: string) => (
          <strong data-testid="custom">{value}</strong>
        ),
      },
    ];

    render(<DataTable data={data} columns={columnsWithRender} />);

    const customCells = screen.getAllByTestId("custom");
    expect(customCells).toHaveLength(3);
    expect(customCells[0]).toHaveTextContent("Bob");
  });

  test("should hide a column based on columnVisibility", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        columnVisibility={{ age: false }}
      />,
    );

    expect(
      screen.queryByRole("columnheader", { name: "Âge" }),
    ).not.toBeInTheDocument();
    expect(
      screen.getByRole("columnheader", { name: "Nom" }),
    ).toBeInTheDocument();
  });

  test("should display empty message when data is empty", () => {
    render(<DataTable data={[]} columns={columns} />);

    expect(screen.getByText("Aucun résultat trouvé")).toBeInTheDocument();
  });

  test("should not display empty message when data is present", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(screen.queryByText("Aucun résultat trouvé")).not.toBeInTheDocument();
  });

  test("should not render global filter input by default", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(
      screen.queryByPlaceholderText("Rechercher..."),
    ).not.toBeInTheDocument();
  });

  test("should render global filter input when enableGlobalFilter is true", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableGlobalFilter: true }}
      />,
    );

    expect(screen.getByPlaceholderText("Rechercher...")).toBeInTheDocument();
  });

  test("should filter displayed rows based on global filter", async () => {
    const user = userEvent.setup();

    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableGlobalFilter: true }}
      />,
    );

    await user.type(screen.getByPlaceholderText("Rechercher..."), "Alice");

    await waitFor(() => {
      expect(screen.getByText("Alice")).toBeInTheDocument();
      expect(screen.queryByText("Bob")).not.toBeInTheDocument();
    });
  });

  test("should not render column filters by default", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(
      screen.queryByPlaceholderText("Recherche..."),
    ).not.toBeInTheDocument();
  });

  test("should render column filter inputs when enableColumnFilters is true", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableColumnFilters: true }}
      />,
    );

    const filterInputs = screen.getAllByPlaceholderText("Recherche...");
    expect(filterInputs.length).toBeGreaterThan(0);
  });

  test("should call onColumnFiltersChange when a column filter changes", async () => {
    const user = userEvent.setup();
    const onColumnFiltersChange = vi.fn();

    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableColumnFilters: true }}
        onColumnFiltersChange={onColumnFiltersChange}
      />,
    );

    const [firstFilter] = screen.getAllByPlaceholderText("Recherche...");
    await user.type(firstFilter, "Bob");
    await waitFor(() => expect(onColumnFiltersChange).toHaveBeenCalled());
  });

  test("should filter with exact match on select variant", async () => {
    const columnsWithSelect = [
      { accessorKey: "name", header: "Nom" },
      {
        accessorKey: "city",
        header: "Ville",
        filterVariant: "select" as const,
        selectOptions: ["Lyon", "Paris", "Marseille"],
      },
    ];

    render(
      <DataTable
        data={data}
        columns={columnsWithSelect}
        options={{ enableColumnFilters: true }}
      />,
    );

    await userEvent.selectOptions(screen.getByRole("combobox"), "Lyon");

    await waitFor(() => {
      expect(screen.getByText("Bob")).toBeInTheDocument();
      expect(screen.queryByText("Alice")).not.toBeInTheDocument();
    });
  });

  test("should not render pagination by default", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(screen.queryByRole("combobox")).not.toBeInTheDocument();
  });

  test("should render pagination when enablePagination is true", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enablePagination: true }}
        paginationConfig={{ pageIndex: 0, pageSize: 2 }}
      />,
    );

    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  test("should display only pageSize rows when pagination is enabled", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enablePagination: true }}
        paginationConfig={{ pageIndex: 0, pageSize: 2 }}
      />,
    );

    expect(screen.getAllByRole("row")).toHaveLength(3);
  });
  test("should not render checkboxes by default", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(screen.queryByRole("checkbox")).not.toBeInTheDocument();
  });

  test("should render one checkbox per row plus header checkbox", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableRowSelection: true }}
      />,
    );

    expect(screen.getAllByRole("checkbox")).toHaveLength(data.length + 1);
  });

  test("should call onRowSelectionChange when a row is selected", async () => {
    const onRowSelectionChange = vi.fn();

    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableRowSelection: true }}
        onRowSelectionChange={onRowSelectionChange}
      />,
    );

    const [, firstRowCheckbox] = screen.getAllByRole("checkbox");
    await userEvent.click(firstRowCheckbox);

    expect(onRowSelectionChange).toHaveBeenCalledWith([data[0]]);
  });

  test("should select all rows when clicking the header checkbox", async () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableRowSelection: true }}
      />,
    );

    await userEvent.click(
      screen.getByRole("checkbox", { name: "Tout sélectionner" }),
    );

    const [, ...rowCheckboxes] = screen.getAllByRole("checkbox");
    rowCheckboxes.forEach((cb) => expect(cb).toBeChecked());
  });
  test("should not render sort buttons by default", () => {
    render(<DataTable data={data} columns={columns} />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test("should render sort buttons when enableSorting is true", () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableSorting: true }}
      />,
    );

    expect(screen.getAllByRole("button").length).toBe(columns.length);
  });

  test("should sort rows ascending when clicking a header button", async () => {
    render(
      <DataTable
        data={data}
        columns={columns}
        options={{ enableSorting: true }}
      />,
    );

    await userEvent.click(
      screen.getByRole("button", { name: "Trier par name" }),
    );

    await waitFor(() => {
      const rows = screen.getAllByRole("row");
      expect(within(rows[1]).getByText("Alice")).toBeInTheDocument();
      expect(within(rows[2]).getByText("Bob")).toBeInTheDocument();
      expect(within(rows[3]).getByText("Charlie")).toBeInTheDocument();
    });
  });

  test("shouldn't have accessibility violations with all options enabled", async () => {
    const { container } = render(
      <DataTable
        data={data}
        columns={columns}
        options={{
          enableGlobalFilter: true,
          enableColumnFilters: true,
          enableRowSelection: true,
          enableSorting: true,
          enablePagination: true,
        }}
        paginationConfig={{ pageIndex: 0, pageSize: 25 }}
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  }, 30000);
});
