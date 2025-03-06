import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Infos } from "./Infos";

describe("Infos", () => {
  test("should display 3 items", async () => {
    const { container } = render(
      <Infos
        infos={[
          {
            word: "Client :",
            definition: "0123456789 - DUVAL",
            id: "header-client-infos-id",
          },
          {
            word: "Portefeuille:",
            definition: "000123456789",
            id: "header-portefeuille-id",
          },
          { word: "Statut :", definition: "Initial", id: "header-statut-id" },
        ]}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
    expect(
      screen.getByRole("definition", { name: /client/i }),
    ).toHaveTextContent("0123456789 - DUVAL");
    expect(
      screen.getByRole("definition", { name: /portefeuille/i }),
    ).toHaveTextContent("000123456789");
    expect(
      screen.getByRole("definition", { name: /statut/i }),
    ).toHaveTextContent("Initial");
  });

  test("should display 3 items without id infos", async () => {
    const { container } = render(
      <Infos
        infos={[
          {
            word: "Client :",
            definition: "0123456789 - DUVAL",
          },
          {
            word: "Portefeuille:",
            definition: "000123456789",
          },
          { word: "Statut :", definition: "Initial" },
        ]}
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
    expect(
      screen.getByRole("definition", { name: /client/i }),
    ).toHaveTextContent("0123456789 - DUVAL");
    expect(
      screen.getByRole("definition", { name: /portefeuille/i }),
    ).toHaveTextContent("000123456789");
    expect(
      screen.getByRole("definition", { name: /statut/i }),
    ).toHaveTextContent("Initial");
  });
});
