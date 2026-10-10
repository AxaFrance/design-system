import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { NavBarItem } from "../../NavBar";
import { MenuTitleWrapper } from "../MenuTitleWrapper";

describe("MenuTitleWrapper", () => {
  afterEach(() => {
    document.body.classList.remove("af-menu-open");
  });

  it("exposes the NavBar state on the menu toggle", async () => {
    const user = userEvent.setup();
    const { container } = render(
      <MenuTitleWrapper menuVisible={false} title="Titre" subtitle="Sous-titre">
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/home">
              Accueil
            </a>
          }
        />
      </MenuTitleWrapper>,
    );
    const toggle = screen.getByRole("button", { name: "Menu principal" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(toggle).toHaveAttribute("aria-controls", "mainmenu");
    expect(container.querySelector("#mainmenu")).toBeInTheDocument();

    await user.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(await axe(container)).toHaveNoViolations();
  });
});
