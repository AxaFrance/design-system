import { axe } from "jest-axe";
import { render, screen } from "@testing-library/react";
import { AnchorNavBar } from "../AnchorNavBar";

const items = [
  { name: "Accueil", link: "#accueil" },
  { name: "À Propos", link: "#apropos" },
  { name: "Services", link: "services", externalLink: true },
  { name: "Contact", render: () => <a href="#contact">Contact</a> },
];

describe("NavBar", () => {
  it("Affiche la NavBar avec les elements", () => {
    render(<AnchorNavBar items={items} />);

    items.forEach((item) => {
      const linkElement = screen.getByText(item.name);
      expect(linkElement).toBeInTheDocument();
    });
  });

  it("Affiche le lien actif", () => {
    render(<AnchorNavBar items={items} />);

    const activeLink = screen.getByText("Accueil");
    expect(activeLink.getAttribute("class")).toContain("active");
  });

  it("Affiche les liens externes correctement", () => {
    render(<AnchorNavBar items={items} />);

    const externalLink = screen.getByRole("link", { name: "Services" });
    expect(externalLink).toHaveAttribute("href", "services");
    expect(externalLink.querySelector("svg")).toHaveClass(
      "af-anchor-navbar-external-link-svg",
    );
  });

  it("Affiche les liens externes correctement", () => {
    render(<AnchorNavBar items={items} />);

    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("ne doit pas avoir de violations d’accessibilité (axe)", async () => {
    const { container } = render(<AnchorNavBar items={items} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
