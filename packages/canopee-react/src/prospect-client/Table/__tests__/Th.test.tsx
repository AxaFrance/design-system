import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { type ReactNode } from "react";
import { describe, expect, it, vi } from "vitest";
import { Table as TableApollo } from "../TableApollo";
import { Table as TableLF } from "../TableLF";

describe.each([
  ["Apollo", TableApollo],
  ["LF", TableLF],
])("Table.Th %s", (_, Table) => {
  const renderHeader = (headerCell: ReactNode) =>
    render(
      <Table>
        <Table.THead>
          <Table.Tr>{headerCell}</Table.Tr>
        </Table.THead>
        <Table.TBody>
          <Table.Tr>
            <Table.Td>Jean Dupont</Table.Td>
          </Table.Tr>
        </Table.TBody>
      </Table>,
    );

  it("should name the sort button and the select-all checkbox", async () => {
    const { container } = renderHeader(
      <Table.Th onSort={vi.fn()} onCheck={vi.fn()}>
        Nom
      </Table.Th>,
    );

    expect(screen.getByRole("button")).toHaveAccessibleName("Trier par Nom");
    expect(screen.getByRole("checkbox")).toHaveAccessibleName(
      "Tout sélectionner",
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should keep the header text as the name of the column header", () => {
    renderHeader(
      <Table.Th onSort={vi.fn()} onCheck={vi.fn()}>
        Nom
      </Table.Th>,
    );

    expect(screen.getByRole("columnheader")).toHaveAccessibleName("Nom");
  });

  it("should keep an aria-label passed on the header", () => {
    renderHeader(
      <Table.Th onSort={vi.fn()} aria-label="Nom du client">
        Nom
      </Table.Th>,
    );

    expect(screen.getByRole("columnheader")).toHaveAccessibleName(
      "Nom du client",
    );
  });

  it("should use the given sort and checkbox labels", () => {
    renderHeader(
      <Table.Th
        onSort={vi.fn()}
        onCheck={vi.fn()}
        sortLabel="Trier les contrats"
        checkboxLabel="Sélectionner tous les contrats"
      >
        Contrat
      </Table.Th>,
    );

    expect(screen.getByRole("button")).toHaveAccessibleName(
      "Trier les contrats",
    );
    expect(screen.getByRole("checkbox")).toHaveAccessibleName(
      "Sélectionner tous les contrats",
    );
  });

  it("should name the sort button from an element header text", () => {
    renderHeader(
      <>
        <Table.Th onSort={vi.fn()}>
          <strong>Nom</strong>
        </Table.Th>
        <Table.Th onSort={vi.fn()}>
          <span>Prénom</span>
        </Table.Th>
      </>,
    );

    const [nom, prenom] = screen.getAllByRole("button");
    expect(nom).toHaveAccessibleName("Trier par Nom");
    expect(prenom).toHaveAccessibleName("Trier par Prénom");
  });

  it("should fall back to a generic sort label without header text", () => {
    renderHeader(<Table.Th onSort={vi.fn()} />);

    expect(screen.getByRole("button")).toHaveAccessibleName("Trier la colonne");
  });

  it.each(["ascending", "descending", "none"] as const)(
    "should expose the %s sort direction on a sortable header",
    (sortDirection) => {
      renderHeader(
        <Table.Th onSort={vi.fn()} sortDirection={sortDirection}>
          Nom
        </Table.Th>,
      );

      expect(screen.getByRole("columnheader")).toHaveAttribute(
        "aria-sort",
        sortDirection,
      );
    },
  );

  it("should not set aria-sort on a header without onSort", () => {
    renderHeader(<Table.Th sortDirection="ascending">Nom</Table.Th>);

    expect(screen.getByRole("columnheader")).not.toHaveAttribute("aria-sort");
  });

  it("should keep an aria-sort passed directly", () => {
    renderHeader(
      <Table.Th
        onSort={vi.fn()}
        sortDirection="ascending"
        aria-sort="descending"
      >
        Nom
      </Table.Th>,
    );

    expect(screen.getByRole("columnheader")).toHaveAttribute(
      "aria-sort",
      "descending",
    );
  });

  it("should call onSort and onCheck", async () => {
    const user = userEvent.setup();
    const onSort = vi.fn();
    const onCheck = vi.fn();
    renderHeader(
      <Table.Th onSort={onSort} onCheck={onCheck}>
        Nom
      </Table.Th>,
    );

    await user.click(screen.getByRole("button", { name: "Trier par Nom" }));
    await user.click(
      screen.getByRole("checkbox", { name: "Tout sélectionner" }),
    );

    expect(onSort).toHaveBeenCalledTimes(1);
    expect(onCheck).toHaveBeenCalledTimes(1);
  });
});
