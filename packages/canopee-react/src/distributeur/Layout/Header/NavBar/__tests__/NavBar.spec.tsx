import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { vi } from "vitest";
import { NavBar } from "../NavBar";
import { NavBarItem } from "../NavBarItem";

const renderNavBar = () =>
  render(
    <>
      <NavBar isVisible onClick={() => {}}>
        <NavBarItem
          actionElt={
            <a className="af-nav__link" href="/home">
              Home
            </a>
          }
        />
        <NavBarItem
          ariaLabel="Contrats"
          actionElt={<span className="af-nav__link">Contrats</span>}
        >
          <NavBarItem
            actionElt={
              <a className="af-nav__link" href="/contrats/auto">
                Auto
              </a>
            }
          />
        </NavBarItem>
      </NavBar>
      <button type="button">Après le menu</button>
    </>,
  );

describe("NavBar", () => {
  it("lets Tab leave the menu and Shift+Tab come back", async () => {
    const user = userEvent.setup();
    renderNavBar();
    const home = screen.getByRole("menuitem", { name: "Home" });
    home.focus();

    await user.tab();

    expect(screen.getByRole("button", { name: "Après le menu" })).toHaveFocus();

    await user.tab({ shift: true });

    expect(home).toHaveFocus();
  });

  it("activates the focused link with Enter", async () => {
    const user = userEvent.setup();
    const onLinkClick = vi.fn((event: MouseEvent) => event.preventDefault());
    const { container } = renderNavBar();
    container.addEventListener("click", onLinkClick);
    const home = screen.getByRole("menuitem", { name: "Home" });
    home.focus();

    await user.keyboard("{Enter}");

    expect(onLinkClick).toHaveBeenCalledTimes(1);
    expect(onLinkClick.mock.calls[0][0].target).toBe(home);
  });

  it("keeps the default action of the keys it does not handle", () => {
    renderNavBar();
    const home = screen.getByRole("menuitem", { name: "Home" });

    expect(fireEvent.keyDown(home, { key: "Tab" })).toBe(true);
    expect(fireEvent.keyDown(home, { key: "Enter" })).toBe(true);
    expect(fireEvent.keyDown(home, { key: " " })).toBe(true);
  });

  it("still handles arrow keys and Escape", () => {
    renderNavBar();
    const home = screen.getByRole("menuitem", { name: "Home" });
    const contracts = screen.getByRole("menuitem", { name: "Contrats" });

    expect(home).toHaveAttribute("tabindex", "0");
    expect(fireEvent.keyDown(home, { key: "ArrowRight" })).toBe(false);
    expect(home).toHaveAttribute("tabindex", "-1");
    expect(contracts).toHaveAttribute("tabindex", "0");

    expect(fireEvent.keyDown(contracts, { key: "ArrowDown" })).toBe(false);
    expect(contracts).toHaveAttribute("aria-expanded", "true");

    expect(fireEvent.keyDown(contracts, { key: "Escape" })).toBe(false);
    expect(contracts).toHaveAttribute("aria-expanded", "false");
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = renderNavBar();

    expect(await axe(container)).toHaveNoViolations();
  });
});
