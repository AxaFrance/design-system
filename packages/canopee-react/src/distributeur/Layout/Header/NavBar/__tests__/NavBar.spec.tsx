import { render, screen } from "@testing-library/react";
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
  const preventedKeys = new Map<string, boolean>();
  const recordKeyDown = (event: KeyboardEvent) => {
    preventedKeys.set(event.key, event.defaultPrevented);
  };

  beforeEach(() => {
    preventedKeys.clear();
    document.addEventListener("keydown", recordKeyDown);
  });

  afterEach(() => {
    document.removeEventListener("keydown", recordKeyDown);
  });

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

  it.each(["Tab", "Enter", " "])(
    "keeps the default action of the %j key",
    async (key) => {
      const user = userEvent.setup();
      const { container } = renderNavBar();
      container.addEventListener("click", (event) => event.preventDefault());
      screen.getByRole("menuitem", { name: "Home" }).focus();

      await user.keyboard(key === " " ? key : `{${key}}`);

      expect(preventedKeys.get(key)).toBe(false);
    },
  );

  it("moves the focus with the arrow keys", async () => {
    const user = userEvent.setup();
    renderNavBar();
    const home = screen.getByRole("menuitem", { name: "Home" });
    const contracts = screen.getByRole("menuitem", { name: "Contrats" });
    home.focus();

    await user.keyboard("{ArrowRight}");

    expect(contracts).toHaveFocus();

    await user.keyboard("{ArrowDown}");

    expect(screen.getByRole("menuitem", { name: "Auto" })).toHaveFocus();

    await user.keyboard("{ArrowUp}");

    expect(contracts).toHaveFocus();

    await user.keyboard("{ArrowLeft}");

    expect(home).toHaveFocus();
  });

  it("gives the focus back to the parent item when Escape closes a submenu", async () => {
    const user = userEvent.setup();
    renderNavBar();
    const home = screen.getByRole("menuitem", { name: "Home" });
    const contracts = screen.getByRole("menuitem", { name: "Contrats" });
    home.focus();
    await user.keyboard("{ArrowRight}{ArrowDown}");

    expect(screen.getByRole("menuitem", { name: "Auto" })).toHaveFocus();

    await user.keyboard("{Escape}");

    expect(contracts).toHaveAttribute("aria-expanded", "false");
    expect(contracts).toHaveFocus();

    await user.keyboard("{Escape}");

    expect(contracts).toHaveFocus();
  });

  it("closes an open submenu when Tab leaves it", async () => {
    const user = userEvent.setup();
    renderNavBar();
    const contracts = screen.getByRole("menuitem", { name: "Contrats" });
    screen.getByRole("menuitem", { name: "Home" }).focus();
    await user.keyboard("{ArrowRight}{ArrowDown}");

    await user.tab();

    expect(screen.getByRole("button", { name: "Après le menu" })).toHaveFocus();
    expect(contracts).toHaveAttribute("aria-expanded", "false");

    await user.tab({ shift: true });

    expect(contracts).toHaveFocus();
  });

  it("closes an open submenu when Shift+Tab leaves it", async () => {
    const user = userEvent.setup();
    renderNavBar();
    const contracts = screen.getByRole("menuitem", { name: "Contrats" });
    screen.getByRole("menuitem", { name: "Home" }).focus();
    await user.keyboard("{ArrowRight}{ArrowDown}");

    await user.tab({ shift: true });

    expect(contracts).toHaveAttribute("aria-expanded", "false");
    expect(screen.getByRole("menubar")).not.toContainElement(
      document.activeElement as HTMLElement,
    );
    expect(document.body).not.toHaveFocus();
  });

  it("still handles arrow keys and Escape", async () => {
    const user = userEvent.setup();
    renderNavBar();
    const home = screen.getByRole("menuitem", { name: "Home" });
    const contracts = screen.getByRole("menuitem", { name: "Contrats" });
    home.focus();

    expect(home).toHaveAttribute("tabindex", "0");

    await user.keyboard("{ArrowRight}");

    expect(preventedKeys.get("ArrowRight")).toBe(true);
    expect(home).toHaveAttribute("tabindex", "-1");
    expect(contracts).toHaveAttribute("tabindex", "0");

    await user.keyboard("{ArrowDown}");

    expect(preventedKeys.get("ArrowDown")).toBe(true);
    expect(contracts).toHaveAttribute("aria-expanded", "true");

    await user.keyboard("{Escape}");

    expect(preventedKeys.get("Escape")).toBe(true);
    expect(contracts).toHaveAttribute("aria-expanded", "false");
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = renderNavBar();

    expect(await axe(container)).toHaveNoViolations();
  });
});
