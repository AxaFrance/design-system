import { render, screen } from "@testing-library/react";
import { TableCard } from "../TableCardCommon";

describe("TableCard", () => {
  it("should render correctly", () => {
    render(
      <TableCard>
        <TableCard.DRow data-testid="firstDRow">
          <TableCard.Dt>Nom</TableCard.Dt>
          <TableCard.Dd>Dupont</TableCard.Dd>
        </TableCard.DRow>
        <TableCard.DRow>
          <TableCard.Dt>Nom</TableCard.Dt>
          <TableCard.Dd>Dupont</TableCard.Dd>
        </TableCard.DRow>
      </TableCard>,
    );

    const dt = screen.getByTestId("firstDRow");
    const dds = screen.getAllByRole("definition");

    expect(dt).toHaveClass("af-table-card__drow--row");
    expect(dds.length).toEqual(2);
  });

  it("should render vertical row correctly", () => {
    render(
      <TableCard>
        <TableCard.DRow data-testid="firstDRow" direction="column">
          <TableCard.Dt>Nom</TableCard.Dt>
          <TableCard.Dd>Dupont</TableCard.Dd>
        </TableCard.DRow>
      </TableCard>,
    );

    const dt = screen.getByTestId("firstDRow");

    expect(dt).toHaveClass("af-table-card__drow--column");
  });
});
