import bank from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Button } from "../../Button/Button";
import { Table } from "../../Table";
import { CardData } from "../CardData";

const TableExample = () => (
  <Table style={{ boxShadow: "none" }} aria-label="Tableau de contenu">
    <Table.TBody>
      <Table.Tr>
        <Table.Td>Date dépôt par le délégataire</Table.Td>
        <Table.Td>-</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Date de réception du flux</Table.Td>
        <Table.Td>13/06/2024</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>Date de création dans Porteur de Risque</Table.Td>
        <Table.Td>25/12/2024</Table.Td>
      </Table.Tr>
    </Table.TBody>
  </Table>
);

describe("CardData", () => {
  it("affichage du CardData", async () => {
    render(
      <CardData title="Titre de la carte" icon={bank}>
        <TableExample />
      </CardData>,
    );

    expect(
      screen.getByRole("heading", { name: "Titre de la carte", level: 3 }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("table", { name: "Tableau de contenu" }),
    ).toBeInTheDocument();
  });

  it("show subtitle", async () => {
    render(
      <CardData
        title="Titre de la carte"
        subTitle="Sous titre de la carte"
        icon={bank}
      >
        <TableExample />
      </CardData>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Titre de la carteSous titre de la carte",
        level: 3,
      }),
    ).toBeInTheDocument();
  });

  it("show description", async () => {
    render(
      <CardData
        title="Titre de la carte"
        description="Description de la carte"
        icon={bank}
      >
        <TableExample />
      </CardData>,
    );

    expect(
      await screen.findByRole("heading", {
        name: "Titre de la carteDescription de la carte",
        level: 3,
      }),
    ).toBeInTheDocument();
  });

  it("show contentRight", async () => {
    render(
      <CardData
        title="Titre de la carte"
        contentRight={<Button>Bouton</Button>}
        icon={bank}
      >
        <TableExample />
      </CardData>,
    );

    expect(screen.getByRole("button", { name: "Bouton" })).toBeInTheDocument();
  });

  it("ne doit pas avoir de violations d’accessibilité (axe)", async () => {
    const { container } = render(
      <CardData title="Titre de la carte" icon={bank}>
        <TableExample />
      </CardData>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
