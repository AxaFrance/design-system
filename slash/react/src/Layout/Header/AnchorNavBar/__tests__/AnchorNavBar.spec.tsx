import { axe } from "jest-axe";
import { act, render, screen, within } from "@testing-library/react";
import { useState } from "react";
import { AnchorNavBar } from "../AnchorNavBar";

const AnchorNavBarComponent = () => {
  const [activeItem, setActiveItem] = useState("Accueil");
  const items = [
    { name: "Accueil", link: "#accueil", isActive: activeItem === "Accueil" },
    {
      name: "À Propos",
      link: "#apropos",
      isActive: activeItem === "À Propos",
      onClick: () => {
        setActiveItem("À Propos");
      },
    },
    {
      name: "Services",
      link: "services",
      externalLink: true,
    },
    { name: "Contact", render: () => <a href="#contact">Contact</a> },
  ];

  return <AnchorNavBar items={items} />;
};

describe("NavBar", () => {
  it("Affiche la NavBar avec les elements", () => {
    render(<AnchorNavBarComponent />);

    const accueil = screen.getByRole("link", { name: "Accueil" });
    expect(accueil).toBeInTheDocument();

    const about = screen.getByRole("link", { name: "À Propos" });
    expect(about).toBeInTheDocument();

    const services = screen.getByRole("link", { name: "Services" });
    expect(services).toBeInTheDocument();

    const contact = screen.getByRole("link", { name: "Contact" });
    expect(contact).toBeInTheDocument();
  });

  it("Affiche le lien actif", () => {
    render(<AnchorNavBarComponent />);

    const activeLink = screen.getByRole("link", { name: "Accueil" });
    expect(activeLink.getAttribute("class")).toContain(
      "af-anchor-navbar-link--active",
    );
  });

  it("Changement du lien actif", () => {
    render(<AnchorNavBarComponent />);

    const aboutLink = screen.getByRole("link", { name: "À Propos" });
    act(() => aboutLink.click());

    expect(aboutLink.getAttribute("class")).toContain(
      "af-anchor-navbar-link--active",
    );
    expect(
      screen.getByRole("link", { name: "Accueil" }).getAttribute("class"),
    ).not.toContain("af-anchor-navbar-link--active");
  });

  it("Affiche les liens externes correctement", () => {
    render(<AnchorNavBarComponent />);

    const externalLink = screen.getByRole("link", { name: "Services" });
    expect(externalLink).toHaveAttribute("href", "services");
    expect(within(externalLink).getByRole("presentation")).toHaveClass(
      "af-anchor-navbar-external-link-svg",
    );
  });

  it("Affiche les liens externes correctement", () => {
    render(<AnchorNavBarComponent />);

    expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  });

  it("ne doit pas avoir de violations d’accessibilité (axe)", async () => {
    const { container } = render(<AnchorNavBarComponent />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
