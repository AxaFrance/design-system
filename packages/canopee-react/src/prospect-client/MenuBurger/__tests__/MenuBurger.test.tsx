import { render, screen } from "@testing-library/react";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import person from "@material-symbols/svg-400/outlined/person.svg";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { Button } from "../../Button/ButtonApollo";
import { Icon } from "../../Icon/IconApollo";
import { ClickItem } from "../../List/ClickItem/ClickItemApollo";
import { List } from "../../List/List/ListApollo";
import { useIsSmallScreen } from "../../utilities/hook/useIsSmallScreen";
import { MenuBurgerCommon } from "../MenuBurgerCommon";

vi.mock("../../utilities/hook/useIsSmallScreen");

describe("MenuBurger", () => {
  const renderMenuBurger = (props = {}) =>
    render(
      <MenuBurgerCommon
        buttonLabel="Mon espace"
        ButtonComponent={Button}
        ClickItemComponent={ClickItem}
        IconComponent={Icon}
        ListComponent={List}
        {...props}
      />,
    );

  describe("mobile (isSmallScreen = true)", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(true);
    });

    it("does not render the trigger button", () => {
      renderMenuBurger();

      expect(
        screen.queryByRole("button", { name: /mon espace/i }),
      ).not.toBeInTheDocument();
    });

    it("renders click items and children in the panel without popover", () => {
      const { container } = renderMenuBurger({
        clickItems: [{ title: "Mon profil", state: "default" }],
        children: <p>Besoin d&apos;aide ?</p>,
      });

      const panel = container.querySelector(".af-menu-burger__panel");

      expect(panel).not.toHaveAttribute("popover");
      expect(screen.getByText("Mon profil")).toBeInTheDocument();
      expect(screen.getByText("Besoin d'aide ?")).toBeInTheDocument();
    });

    it("renders ClickItem entries and children inside the panel", () => {
      const { container } = renderMenuBurger({
        clickItems: [{ title: "Mon profil", state: "default" }],
        children: <p>Besoin d&apos;aide ?</p>,
      });

      expect(screen.getByText("Mon profil")).toBeInTheDocument();
      expect(screen.getByText("Besoin d'aide ?")).toBeInTheDocument();
      expect(screen.queryByRole("navigation")).not.toBeInTheDocument();
      expect(
        container.querySelector(".af-menu-burger__click-items"),
      ).toBeTruthy();
      expect(
        container.querySelector(".af-menu-burger__click-items"),
      ).toHaveClass("af-card--unstyled");
      expect(
        container.querySelector(".af-apollo-click-item--small"),
      ).toBeTruthy();
    });
  });

  describe("desktop (isSmallScreen = false)", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    it("renders the trigger button", () => {
      renderMenuBurger();

      expect(
        screen.getByRole("button", { name: /mon espace/i }),
      ).toBeInTheDocument();
    });

    it("uses person as default leading icon and accepts an override", () => {
      const { rerender, container } = renderMenuBurger();

      expect(
        container.querySelector(
          `.af-menu-burger__button [data-src="${person}"]`,
        ),
      ).toBeInTheDocument();

      rerender(
        <MenuBurgerCommon
          buttonLabel="Mon espace"
          icon={accountBalance}
          ButtonComponent={Button}
          ClickItemComponent={ClickItem}
          IconComponent={Icon}
          ListComponent={List}
        />,
      );

      expect(
        container.querySelector(
          `.af-menu-burger__button [data-src="${accountBalance}"]`,
        ),
      ).toBeInTheDocument();
    });

    it("supports primary button variant", () => {
      renderMenuBurger({ variant: "primary" });

      expect(screen.getByRole("button", { name: /mon espace/i })).toHaveClass(
        "af-btn-client--primary",
      );
    });

    it("connects the trigger button to the popover panel", () => {
      const { container } = renderMenuBurger();

      const button = screen.getByRole("button", { name: /mon espace/i });
      const panel = container.querySelector(".af-menu-burger__panel");

      expect(panel).toHaveAttribute("popover", "auto");
      expect(panel?.id).toBeTruthy();
      expect(button).toHaveAttribute("popovertarget", panel?.id);
      expect(button).toHaveAttribute("popovertargetaction", "toggle");
    });

    it("uses section element for the panel with aria-labelledby pointing to the trigger", () => {
      const { container } = renderMenuBurger();

      const button = screen.getByRole("button", { name: /mon espace/i });
      const panel = container.querySelector("section.af-menu-burger__panel");

      expect(panel).toBeInTheDocument();
      expect(panel).not.toHaveAttribute("role");
      expect(panel).toHaveAttribute("aria-labelledby", button.id);
    });
  });

  describe("mobile (isSmallScreen = true) — accessibility", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(true);
    });

    it("does not set role or aria-labelledby on the panel", () => {
      const { container } = renderMenuBurger();
      const panel = container.querySelector(".af-menu-burger__panel");

      expect(panel).not.toHaveAttribute("role");
      expect(panel).not.toHaveAttribute("aria-labelledby");
    });
  });
});
