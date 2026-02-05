import { render, screen } from "@testing-library/react";
import { TableMobileCard } from "../TableMobileCardCommon";

describe("TableMobileCard", () => {
  it("should render correctly", () => {
    render(
      <TableMobileCard>
        <TableMobileCard.DRow data-testid="firstDRow">
          <TableMobileCard.Dt>Nom</TableMobileCard.Dt>
          <TableMobileCard.Dd>Dupont</TableMobileCard.Dd>
        </TableMobileCard.DRow>
        <TableMobileCard.DRow>
          <TableMobileCard.Dt>Nom</TableMobileCard.Dt>
          <TableMobileCard.Dd>Dupont</TableMobileCard.Dd>
        </TableMobileCard.DRow>
      </TableMobileCard>,
    );

    const dt = screen.getByTestId("firstDRow");
    const dds = screen.getAllByRole("definition");

    expect(dt).toHaveClass("af-table-mobile-card__drow--row");
    expect(dds.length).toEqual(2);
  });

  it("should render vertical row correctly", () => {
    render(
      <TableMobileCard>
        <TableMobileCard.DRow data-testid="firstDRow" direction="column">
          <TableMobileCard.Dt>Nom</TableMobileCard.Dt>
          <TableMobileCard.Dd>Dupont</TableMobileCard.Dd>
        </TableMobileCard.DRow>
      </TableMobileCard>,
    );

    const dt = screen.getByTestId("firstDRow");

    expect(dt).toHaveClass("af-table-mobile-card__drow--column");
  });
});
