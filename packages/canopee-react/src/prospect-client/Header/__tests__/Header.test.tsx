import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AppName } from "../../AppName/AppNameApollo";
import { Heading } from "../../Heading/HeadingApollo";
import { MenuBurger } from "../../MenuBurger/MenuBurgerApollo";
import { ClickIcon } from "../../ClickIcon/ClickIconApollo";
import { useIsSmallScreen } from "../../utilities/hook/useIsSmallScreen";
import { HeaderCommon } from "../HeaderCommon";

vi.mock("../../utilities/hook/useIsSmallScreen");

// ─── Shared fixtures ─────────────────────────────────────────────────────────

const defaultProps = {
  AppNameComponent: AppName,
  HeadingComponent: Heading,
  MenuBurgerComponent: MenuBurger,
  ClickIconComponent: ClickIcon,
  appNameProps: { label: "Mon application" },
} as const;

const tabMenuItems = [
  { href: "#accueil", label: "Accueil" },
  { href: "#contrats", label: "Contrats" },
];

const menuBurgerWithLabel = { buttonLabel: "Mon espace" };

const renderHeader = (
  props: Partial<Parameters<typeof HeaderCommon>[0]> = {},
) => render(<HeaderCommon {...defaultProps} {...props} />);

const getMenuTrigger = () =>
  screen.getByRole("button", { name: "Ouvrir le menu" });
const getMenuPanel = () => document.getElementById("af-header-menu");

// ─── Tests ───────────────────────────────────────────────────────────────────

/**
 * useIsSmallScreen is mocked. Each describe group sets the return value
 * to reflect either desktop (false) or mobile (true) context.
 */
describe("HeaderCommon", () => {
  describe("AppName", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("renders the app name label", () => {
      renderHeader();
      expect(screen.getByText("Mon application")).toBeInTheDocument();
    });

    it("applies af-header__app-name class", () => {
      renderHeader();
      expect(
        screen.getByText("Mon application").closest(".af-header__app-name"),
      ).toBeInTheDocument();
    });
  });

  describe("TabMenu", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("is rendered when tabMenuProps is provided", () => {
      renderHeader({ tabMenuProps: { items: tabMenuItems } });
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });

    it("is not rendered when tabMenuProps is not provided", () => {
      renderHeader();
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
    });

    it("applies af-header__tab-menu class", () => {
      renderHeader({ tabMenuProps: { items: tabMenuItems } });
      expect(screen.getByRole("navigation")).toHaveClass("af-header__tab-menu");
    });

    it("renders all tab items", () => {
      renderHeader({ tabMenuProps: { items: tabMenuItems } });
      expect(screen.getByText("Accueil")).toBeInTheDocument();
      expect(screen.getByText("Contrats")).toBeInTheDocument();
    });
  });

  describe("MenuBurger", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("is rendered when menuBurgerProps is provided", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(
        document.querySelector(".af-header__menu-burger"),
      ).toBeInTheDocument();
    });

    it("is not rendered when menuBurgerProps is not provided", () => {
      renderHeader();
      expect(
        document.querySelector(".af-header__menu-burger"),
      ).not.toBeInTheDocument();
    });

    it("applies af-header__menu-burger class", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(
        document.querySelector(".af-header__menu-burger"),
      ).toBeInTheDocument();
    });
  });

  describe("title", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("is rendered when title and menuBurgerProps are provided", () => {
      renderHeader({
        title: "Mon titre",
        menuBurgerProps: menuBurgerWithLabel,
      });
      expect(
        screen.getByRole("heading", { level: 1, name: "Mon titre" }),
      ).toBeInTheDocument();
    });

    it("applies af-header__title class", () => {
      renderHeader({
        title: "Mon titre",
        menuBurgerProps: menuBurgerWithLabel,
      });
      expect(
        screen.getByText("Mon titre").closest(".af-header__title"),
      ).toBeInTheDocument();
    });

    it("is not rendered when title is not provided", () => {
      renderHeader();
      expect(
        screen.queryByRole("heading", { level: 1 }),
      ).not.toBeInTheDocument();
    });
  });

  describe("actionChildren", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("is rendered when provided", () => {
      renderHeader({ actionChildren: <span>Action</span> });
      expect(screen.getByText("Action")).toBeInTheDocument();
    });

    it("is wrapped in af-header__actions-children", () => {
      renderHeader({ actionChildren: <span>Action</span> });
      expect(
        screen.getByText("Action").closest(".af-header__actions-children"),
      ).toBeInTheDocument();
    });

    it("is not rendered when not provided", () => {
      renderHeader();
      expect(
        document.querySelector(".af-header__actions-children"),
      ).not.toBeInTheDocument();
    });
  });

  describe("ClickIcon trigger", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("is not rendered when no content (tabMenu / menuBurger / actionChildren) is provided", () => {
      renderHeader();
      expect(
        screen.queryByRole("button", { name: "Ouvrir le menu" }),
      ).not.toBeInTheDocument();
    });

    it("is rendered when tabMenuProps is provided", () => {
      renderHeader({ tabMenuProps: { items: tabMenuItems } });
      expect(getMenuTrigger()).toBeInTheDocument();
    });

    it("is rendered when menuBurgerProps is provided", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuTrigger()).toBeInTheDocument();
    });

    it("is rendered when actionChildren is provided", () => {
      renderHeader({ actionChildren: <span>Action</span> });
      expect(getMenuTrigger()).toBeInTheDocument();
    });

    it("applies af-header__menu-icon class", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuTrigger()).toHaveClass("af-header__menu-icon");
    });

    it("uses the default aria-label", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuTrigger()).toHaveAttribute("aria-label", "Ouvrir le menu");
    });

    it("uses a custom aria-label when provided via clickIconProps", () => {
      renderHeader({
        menuBurgerProps: menuBurgerWithLabel,
        clickIconProps: { "aria-label": "Ouvrir la navigation", src: "" },
      });
      expect(
        screen.getByRole("button", { name: "Ouvrir la navigation" }),
      ).toBeInTheDocument();
    });
  });

  describe("Menu open/close — mobile", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(true);
    });

    it("menu panel does not have af-header__menu--open class by default", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuPanel()).not.toHaveClass("af-header__menu--open");
    });

    it("adds af-header__menu--open when trigger is clicked", async () => {
      const user = userEvent.setup();
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });

      await user.click(getMenuTrigger());
      expect(getMenuPanel()).toHaveClass("af-header__menu--open");
    });

    it("removes af-header__menu--open when trigger is clicked a second time", async () => {
      const user = userEvent.setup();
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });

      const trigger = getMenuTrigger();
      await user.click(trigger);
      await user.click(trigger);
      expect(getMenuPanel()).not.toHaveClass("af-header__menu--open");
    });

    it("closes the menu on Escape key", async () => {
      const user = userEvent.setup();
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });

      const trigger = getMenuTrigger();
      await user.click(trigger);
      expect(getMenuPanel()).toHaveClass("af-header__menu--open");

      trigger.focus();
      await user.keyboard("{Escape}");
      expect(getMenuPanel()).not.toHaveClass("af-header__menu--open");
    });

    it("sets aria-expanded to false initially", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuTrigger()).toHaveAttribute("aria-expanded", "false");
    });

    it("sets aria-expanded to true when menu is open", async () => {
      const user = userEvent.setup();
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });

      await user.click(getMenuTrigger());
      expect(getMenuTrigger()).toHaveAttribute("aria-expanded", "true");
    });

    it("sets aria-controls to the menu panel id", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuTrigger()).toHaveAttribute(
        "aria-controls",
        "af-header-menu",
      );
    });

    it("sets aria-haspopup to menu", () => {
      renderHeader({ menuBurgerProps: menuBurgerWithLabel });
      expect(getMenuTrigger()).toHaveAttribute("aria-haspopup", "menu");
    });
  });
});
