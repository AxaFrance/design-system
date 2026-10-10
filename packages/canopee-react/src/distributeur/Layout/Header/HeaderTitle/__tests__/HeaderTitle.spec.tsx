import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { vi } from "vitest";
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

    expect(
      screen.getByRole("button", { name: "Menu principal" }),
    ).toBeInTheDocument();
  });

  it("Show no menu toggle without toggleMenu", () => {
    render(<HeaderTitle title="Titre de la page" />);

    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("Reach the menu toggle with Tab and activate it with Enter and Space", async () => {
    const user = userEvent.setup();
    const toggleMenu = vi.fn();
    render(
      <>
        <button type="button">Avant</button>
        <HeaderTitle title="Titre de la page" toggleMenu={toggleMenu} />
      </>,
    );
    screen.getByRole("button", { name: "Avant" }).focus();

    await user.tab();
    const toggle = screen.getByRole("button", { name: "Menu principal" });

    expect(toggle).toHaveFocus();

    await user.keyboard("{Enter}");
    await user.keyboard(" ");

    expect(toggleMenu).toHaveBeenCalledTimes(2);
  });

  it("Expose the menu state with aria-expanded and aria-controls", () => {
    const { rerender } = render(
      <HeaderTitle title="Titre de la page" toggleMenu={() => {}} />,
    );
    const toggle = screen.getByRole("button", { name: "Menu principal" });

    expect(toggle).not.toHaveAttribute("aria-controls");
    expect(toggle).not.toHaveAttribute("aria-expanded");
    expect(toggle).not.toHaveAttribute("aria-haspopup");

    rerender(
      <HeaderTitle
        title="Titre de la page"
        toggleMenu={() => {}}
        isMenuOpen={false}
      />,
    );

    expect(toggle).toHaveAttribute("aria-controls", "mainmenu");
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    rerender(
      <HeaderTitle title="Titre de la page" toggleMenu={() => {}} isMenuOpen />,
    );

    expect(toggle).toHaveAttribute("aria-expanded", "true");
  });

  it("Name the menu toggle with toggleMenuLabel", () => {
    render(
      <HeaderTitle
        title="Titre de la page"
        toggleMenu={() => {}}
        toggleMenuLabel="Navigation"
      />,
    );

    expect(
      screen.getByRole("button", { name: "Navigation" }),
    ).toBeInTheDocument();
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

  it.each([undefined, false])(
    "ne doit pas avoir de violations d’accessibilité avec le bouton de menu, isMenuOpen=%s (axe)",
    async (isMenuOpen) => {
      const { container } = render(
        <HeaderTitle
          title="Titre de la page"
          toggleMenu={() => {}}
          isMenuOpen={isMenuOpen}
        />,
      );
      const results = await axe(container);
      expect(results).toHaveNoViolations();
    },
  );
});
