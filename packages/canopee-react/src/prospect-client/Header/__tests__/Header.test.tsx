import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { type ComponentProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AppName } from "../../AppName/AppName";
import { Button } from "../../Button/ButtonApollo";
import { ClickIcon } from "../../ClickIcon/ClickIconApollo";
import { Heading } from "../../Heading/HeadingApollo";
import { MenuBurger } from "../../MenuBurger/MenuBurgerApollo";
import { useIsSmallScreen } from "../../utilities/hook/useIsSmallScreen";
import { Header as HeaderApollo } from "../HeaderApollo";
import { HeaderCommon } from "../HeaderCommon";
import { Header as HeaderLF } from "../HeaderLF";

vi.mock("../../utilities/hook/useIsSmallScreen");

// ─── Shared fixtures ─────────────────────────────────────────────────────────

type HeaderCommonProps = ComponentProps<typeof HeaderCommon>;

const defaultProps = {
  AppNameComponent: AppName,
  HeadingComponent: Heading,
  MenuBurgerComponent: MenuBurger,
  ClickIconComponent: ClickIcon,
  appNameProps: { logoLinkProps: { href: "/" } },
} as const;

const tabMenuItems = [
  { href: "#accueil", label: "Accueil", isActive: true },
  { href: "#contrats", label: "Contrats" },
];

const fullProps = (): Partial<HeaderCommonProps> => ({
  tabMenuProps: { items: tabMenuItems, "aria-label": "Navigation" },
  menuBurgerProps: {
    buttonLabel: "Mon espace",
    clickItems: [{ title: "Mon profil", onClick: vi.fn() }],
    children: <Button variant="tertiary">Déconnexion</Button>,
  },
  actionChildren: <Button variant="secondary">Accéder à AXA Banque</Button>,
});

const renderHeader = (props: Partial<HeaderCommonProps> = {}) =>
  render(<HeaderCommon {...defaultProps} {...props} />);

const getMenuButton = () => screen.getByRole("button", { name: "Menu" });

const getMenu = () =>
  document.getElementById(
    getMenuButton().getAttribute("popovertarget") ?? "",
  ) as HTMLElement;

// The jsdom polyfill of vitest.setup.ts shows an open popover with an inline
// display: block, and a closed one with display: none.
const isOpen = (element: HTMLElement) => element.style.display === "block";

// ─── Tests ───────────────────────────────────────────────────────────────────

describe("HeaderCommon", () => {
  describe.each([
    ["large screens", false],
    ["small screens", true],
  ])("on %s", (_, isSmallScreen) => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(isSmallScreen);
    });

    it("renders the logo, a link to the home page", () => {
      renderHeader();

      expect(screen.getByRole("link")).toHaveAttribute("href", "/");
    });

    it("renders the deprecated app name when it is provided", () => {
      renderHeader({ appNameProps: { label: "Mon application" } });

      expect(screen.getByText("Mon application")).toBeInTheDocument();
    });

    it("renders the title as a heading of level 1, outside the menu", () => {
      renderHeader({ ...fullProps(), title: "Devis assurance auto" });

      const title = screen.getByRole("heading", {
        level: 1,
        name: "Devis assurance auto",
      });
      expect(title.closest(".af-header__title")).not.toBeNull();
      expect(getMenu()).not.toContainElement(title);
    });

    it("renders the navigation, the actions and the account menu once, in the menu", () => {
      renderHeader(fullProps());

      const menu = getMenu();
      // Closed popovers hide their content: query hidden elements too.
      const navigation = screen.getByRole("navigation", {
        name: "Navigation",
        hidden: true,
      });

      expect(screen.getAllByRole("navigation", { hidden: true })).toHaveLength(
        1,
      );
      expect(menu).toContainElement(navigation);
      expect(navigation).toHaveClass("af-tab-menu", "af-header__tab-menu");
      expect(
        within(navigation).getByRole("link", { name: "Accueil", hidden: true }),
      ).toHaveClass("af-item-menu", "af-item-menu--active");
      expect(
        within(navigation).getByRole("link", {
          name: "Contrats",
          hidden: true,
        }),
      ).toBeInTheDocument();
      expect(
        within(menu).getByRole("button", {
          name: "Accéder à AXA Banque",
          hidden: true,
        }).parentElement,
      ).toHaveClass("af-header__actions-children");
      expect(menu.querySelector(".af-header__actions")).toContainElement(
        menu.querySelector(".af-menu-burger"),
      );
      expect(menu.querySelector(".af-menu-burger")).toHaveClass(
        "af-header__menu-burger",
      );
      expect(within(menu).getByText("Mon profil")).toBeInTheDocument();
      expect(
        within(menu).getByRole("button", { name: "Déconnexion", hidden: true }),
      ).toBeInTheDocument();
    });

    it("renders the menu button and the close button with their names", () => {
      renderHeader({
        ...fullProps(),
        clickIconProps: { src: "", "aria-label": "Ouvrir la navigation" },
        closeButtonAriaLabel: "Fermer la navigation",
      });

      const menuButton = screen.getByRole("button", {
        name: "Ouvrir la navigation",
      });
      const closeButton = screen.getByRole("button", {
        name: "Fermer la navigation",
        hidden: true,
      });

      expect(menuButton).toHaveClass("af-header__menu-icon");
      expect(closeButton).toHaveClass("af-header__menu-close");
      expect(menuButton).not.toHaveAttribute("aria-haspopup");
    });

    it("renders neither the menu button nor the menu without content", () => {
      const { container } = renderHeader({ title: "Devis assurance auto" });

      expect(screen.queryByRole("button")).not.toBeInTheDocument();
      expect(container.querySelector(".af-header__menu")).toBeNull();
    });

    it.each([
      ["tabMenuProps", { tabMenuProps: { items: tabMenuItems } }],
      ["menuBurgerProps", { menuBurgerProps: { buttonLabel: "Mon espace" } }],
      ["actionChildren", { actionChildren: <Button>Action</Button> }],
    ])("renders the menu button with %s only", (_name, props) => {
      renderHeader(props);

      expect(getMenuButton()).toBeInTheDocument();
    });

    it("renders no menu button with an empty navigation", () => {
      renderHeader({ tabMenuProps: { items: [] } });

      expect(
        screen.queryByRole("button", { name: "Menu" }),
      ).not.toBeInTheDocument();
    });

    it("keeps the className and the props of the header", () => {
      renderHeader({ className: "my-header", "aria-label": "En-tête" });

      expect(screen.getByRole("banner", { name: "En-tête" })).toHaveClass(
        "af-header",
        "my-header",
      );
    });

    it("shouldn't have an accessibility violation", async () => {
      const { container } = renderHeader({
        ...fullProps(),
        title: "Devis assurance auto",
      });

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("on large screens", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("does not make the menu a popover", () => {
      renderHeader(fullProps());

      expect(getMenu()).not.toHaveAttribute("popover");
    });

    it("opens the account menu with its own button", () => {
      renderHeader(fullProps());

      expect(
        screen.getByRole("button", { name: "Mon espace" }),
      ).toHaveAttribute("popovertargetaction", "toggle");
    });
  });

  describe("on small screens", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(true);
    });

    it("makes the menu a native popover, controlled by the menu button", () => {
      renderHeader(fullProps());

      const menuButton = getMenuButton();
      const menu = getMenu();

      expect(menu).toHaveAttribute("popover", "auto");
      expect(menu).toHaveClass("af-header__menu");
      expect(menuButton).toHaveAttribute("aria-controls", menu.id);
      expect(menuButton).toHaveAttribute("popovertargetaction", "toggle");
    });

    it("hides the menu with the close button, the first element of the menu", () => {
      renderHeader(fullProps());

      const closeButton = screen.getByRole("button", {
        name: "Fermer le menu",
        hidden: true,
      });

      expect(getMenu().firstElementChild).toBe(closeButton);
      expect(closeButton).toHaveAttribute("popovertarget", getMenu().id);
      expect(closeButton).toHaveAttribute("popovertargetaction", "hide");
    });

    it("does not render the account menu button", () => {
      renderHeader(fullProps());

      expect(
        screen.queryByRole("button", { name: "Mon espace" }),
      ).not.toBeInTheDocument();
    });

    it("opens and closes the menu with the menu button", async () => {
      const user = userEvent.setup();
      renderHeader(fullProps());

      await user.click(getMenuButton());
      expect(isOpen(getMenu())).toBe(true);

      await user.click(getMenuButton());
      expect(isOpen(getMenu())).toBe(false);
    });

    it("closes the menu with the close button", async () => {
      const user = userEvent.setup();
      renderHeader(fullProps());

      await user.click(getMenuButton());
      await user.click(screen.getByRole("button", { name: "Fermer le menu" }));

      expect(isOpen(getMenu())).toBe(false);
    });

    it("closes the menu with Escape", async () => {
      const user = userEvent.setup();
      renderHeader(fullProps());

      await user.click(getMenuButton());
      await user.keyboard("{Escape}");

      expect(isOpen(getMenu())).toBe(false);
    });

    it("closes the menu with a click outside of it", async () => {
      const user = userEvent.setup();
      renderHeader({ ...fullProps(), title: "Devis assurance auto" });

      await user.click(getMenuButton());
      await user.click(screen.getByRole("heading", { level: 1 }));

      expect(isOpen(getMenu())).toBe(false);
    });

    it("keeps the menu open with a click inside it", async () => {
      const user = userEvent.setup();
      renderHeader(fullProps());

      await user.click(getMenuButton());
      await user.click(
        screen.getByRole("button", { name: "Accéder à AXA Banque" }),
      );

      expect(isOpen(getMenu())).toBe(true);
    });

    it("keeps the onClick of clickIconProps", async () => {
      const onClick = vi.fn();
      const user = userEvent.setup();
      renderHeader({ ...fullProps(), clickIconProps: { src: "", onClick } });

      await user.click(getMenuButton());

      expect(onClick).toHaveBeenCalledTimes(1);
      expect(isOpen(getMenu())).toBe(true);
    });

    it("stops being a popover on large screens", () => {
      const { rerender } = renderHeader(fullProps());
      expect(getMenu()).toHaveAttribute("popover", "auto");

      vi.mocked(useIsSmallScreen).mockReturnValue(false);
      rerender(<HeaderCommon {...defaultProps} {...fullProps()} />);

      expect(getMenu()).not.toHaveAttribute("popover");
    });

    it("shouldn't have an accessibility violation, menu open", async () => {
      const user = userEvent.setup();
      const { container } = renderHeader(fullProps());

      await user.click(getMenuButton());

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

describe.each([
  ["Apollo", HeaderApollo],
  ["LF", HeaderLF],
])("Header %s", (_, Header) => {
  beforeEach(() => {
    vi.mocked(useIsSmallScreen).mockReturnValue(true);
  });

  it("renders the menu with the components of the look", async () => {
    const user = userEvent.setup();
    render(
      <Header
        appNameProps={{ logoLinkProps: { href: "/" } }}
        tabMenuProps={{ items: tabMenuItems }}
        menuBurgerProps={{
          buttonLabel: "Mon espace",
          clickItems: [{ title: "Mon profil", onClick: vi.fn() }],
        }}
      />,
    );

    await user.click(getMenuButton());

    expect(isOpen(getMenu())).toBe(true);
    expect(
      within(getMenu()).getByRole("link", { name: "Accueil" }),
    ).toBeInTheDocument();
    expect(within(getMenu()).getByText("Mon profil")).toBeInTheDocument();
  });
});
