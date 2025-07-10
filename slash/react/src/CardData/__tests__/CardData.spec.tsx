import { render, screen } from "@testing-library/react";
import bank from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import { axe } from "jest-axe";
import { CardData } from "../CardData";
import { Table } from "../../Table";
import { Button } from "../../Button/Button";

describe("CardData", () => {
  it("affichage du CardData", async () => {
    render(
      <CardData title="Titre de la carte" icon={bank}>
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
      </CardData>,
    );

    expect(
      screen.getByRole("heading", {
        name: "Titre de la carte Sous titre de la carte",
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
      </CardData>,
    );

    expect(screen.getByRole("button", { name: "Bouton" })).toBeInTheDocument();
  });

  it("ne doit pas avoir de violations d’accessibilité (axe)", async () => {
    const { container } = render(
      <CardData title="Titre de la carte" icon={bank}>
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
      </CardData>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
