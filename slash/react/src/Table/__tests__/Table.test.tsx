import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

import { Table } from "../Table";

describe("Composants de la table", () => {
  it("devrait rendre un tableau avec la classe correcte", () => {
    const { container } = render(
      <Table data-testid="table">
        <Table.THead>
          <Table.Tr>
            <Table.Th>Header 1</Table.Th>
            <Table.Th>Header 2</Table.Th>
          </Table.Tr>
        </Table.THead>
        <Table.TBody>
          <Table.Tr>
            <Table.Td>Data 1</Table.Td>
            <Table.Td>Data 2</Table.Td>
          </Table.Tr>
        </Table.TBody>
      </Table>,
    );

    const table = container.querySelector("table");

    expect(table).toHaveClass("af-table");
  });

  it("devrait accepter et appliquer une classe custom", () => {
    const { container } = render(<Table className="custom-class">{}</Table>);

    const table = container.querySelector("table");
    expect(table).toHaveClass("custom-class");
  });

  it("devrait appliquer le classModifier correctement", () => {
    const { container } = render(<Table classModifier="mod" />);
    const table = container.querySelector("table");

    expect(table?.className).toContain("af-table");
    expect(table?.className).toContain("mod");
  });

  it("devrait rendre le thead avec la classe correcte", () => {
    const { container } = render(
      <Table.THead>
        <Table.Tr>
          <Table.Th>Header</Table.Th>
        </Table.Tr>
      </Table.THead>,
    );

    const thead = container.querySelector("thead");
    expect(thead).toHaveClass("af-table__thead");
  });

  it("devrait transmettre d'autres props", () => {
    const { container } = render(
      <Table.Td data-test-id="td-test" aria-label="label" />,
    );

    const td = container.querySelector("td");

    expect(td).toHaveAttribute("data-test-id", "td-test");
    expect(td).toHaveAttribute("aria-label", "label");
  });
});
