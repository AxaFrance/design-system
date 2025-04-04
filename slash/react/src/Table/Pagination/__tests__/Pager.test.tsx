import { render, screen } from "@testing-library/react";
import { Table } from "../../Table";
import { Paging } from "../Paging";

it("should render Pager correctly with a select having the right aria label", () => {
  render(
    <>
      <Table>{/* Table content */}</Table>
      <Paging
        currentPage={3}
        numberItems={10}
        displayLabel="Affichage"
        selectAriaLabel="Affichage"
        numberPages={9}
        mode="default"
      />
    </>,
  );

  const link = screen.getByRole("combobox");
  expect(link).toHaveAttribute("aria-label", "Affichage");
});
