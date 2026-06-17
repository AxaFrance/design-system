import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { HeaderTitle } from "../HeaderTitle";

const items = [
  { name: "Accueil", link: "#accueil" },
  { name: "À Propos", link: "#apropos" },
  { name: "Services", link: "services", externalLink: true },
  { name: "Contact", link: "#contact" },
];

describe("HeaderTitle", () => {
  it("Show HeaderTitle", () => {
    render(<HeaderTitle title="Titre de la page" />);

    expect(
      screen.getByRole("heading", { name: "Titre de la page" }),
    ).toBeInTheDocument();
  });

  it("Show HeaderTitle with subtitle", () => {
    render(<HeaderTitle title="Titre de la page" subtitle="Sous titre" />);

    expect(
      screen.getByRole("heading", { name: "Titre de la pageSous titre" }),
    ).toBeInTheDocument();
  });

  it("Show HeaderTitle with children", () => {
    render(<HeaderTitle title="Titre de la page">Test</HeaderTitle>);

    expect(screen.getByText("Test")).toBeInTheDocument();
  });

  it("Show HeaderTitle with toogleMenu", () => {
    render(
      <HeaderTitle title="Titre de la page" toggleMenu={() => {}}>
        Test
      </HeaderTitle>,
    );

    expect(screen.getByTitle("Toggle menu")).toBeInTheDocument();
  });

  it("Show HeaderTitle with anchor nav bar", () => {
    render(
      <HeaderTitle title="Titre de la page" anchorNavBarItems={items}>
        Test
      </HeaderTitle>,
    );

    expect(screen.getByRole("link", { name: "Accueil" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "À Propos" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Services" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("ne doit pas avoir de violations d’accessibilité (axe)", async () => {
    const { container } = render(<HeaderTitle title="Titre de la page" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
