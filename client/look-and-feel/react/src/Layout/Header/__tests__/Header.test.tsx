import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import userEvent from "@testing-library/user-event";
import { Header } from "../Header";
import { BREAKPOINT } from "../../../utilities";

describe("Header Component", () => {
  const children = (
    <a key="link 1" href="/">
      Home
    </a>
  );
  const rightItem = (
    <button type="button" key="button 1">
      Mon Profil
    </button>
  );
  const previousLink = <a href="/">Retour à l&apos;accueil</a>;

  beforeEach(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD + 1,
    });
  });

  it("should render the logo image with alt text", () => {
    render(<Header />);

    screen.getByAltText(/logo AXA/);
  });

  it("should render NavBar with children and right item if provided", () => {
    render(<Header rightItem={rightItem}>{children}</Header>);

    screen.getByRole("navigation", { name: /menu principal/i });
    screen.getByRole("button", { name: /Mon Profil/i });
  });

  it("should render the PreviousLink component", async () => {
    render(<Header previousLink={previousLink} />);

    const link = screen.getByRole("link");

    await userEvent.click(link);

    expect(link).toHaveTextContent(/Retour à l'accueil/i);
  });

  it("should hide burger menu on window resize above the breakpoint", async () => {
    render(<Header rightItem={rightItem}>{children}</Header>);

    global.innerWidth = BREAKPOINT.MD - 1;

    const burgerButton = screen.getByRole("button", {
      name: /Ouvrir le menu/i,
    });

    await userEvent.click(burgerButton);

    expect(burgerButton).toHaveAttribute("aria-label", "Fermer le menu");
  });
});
