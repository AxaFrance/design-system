import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { createRef, StrictMode, type ComponentProps } from "react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AppName } from "../../AppName/AppName";
import { Button } from "../../Button/ButtonApollo";
import { ClickIcon } from "../../ClickIcon/ClickIconApollo";
import { Heading } from "../../Heading/HeadingApollo";
import { ClickItem } from "../../List/ClickItem/ClickItemApollo";
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
  ClickItemComponent: ClickItem,
  appNameProps: { label: "Mon application" },
} as const;

const tabMenuItems = [
  { href: "#accueil", label: "Accueil", isActive: true },
  { href: "#contrats", label: "Contrats" },
];

const menuBurgerWithLabel = { buttonLabel: "Mon espace" };

const fullProps = (): Partial<HeaderCommonProps> => ({
  tabMenuProps: { items: tabMenuItems },
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

const getMenuPanel = () => {
  const panelId = getMenuButton().getAttribute("aria-controls");
  return document.getElementById(panelId ?? "") as HTMLElement;
};

const openMenu = async (user = userEvent.setup()) => {
  await user.click(getMenuButton());
  return user;
};

// ─── Tests ───────────────────────────────────────────────────────────────────

/**
 * useIsSmallScreen is mocked. Each describe group sets the return value
 * to reflect either desktop (false) or mobile (true) context.
 */
describe("HeaderCommon", () => {
  describe("large screens", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(false);
    });

    describe("AppName", () => {
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
        expect(screen.getByRole("navigation")).toHaveClass(
          "af-header__tab-menu",
        );
      });

      it("renders all tab items", () => {
        renderHeader({ tabMenuProps: { items: tabMenuItems } });
        expect(screen.getByText("Accueil")).toBeInTheDocument();
        expect(screen.getByText("Contrats")).toBeInTheDocument();
      });
    });

    describe("MenuBurger", () => {
      it("is rendered when menuBurgerProps is provided", () => {
        renderHeader({ menuBurgerProps: menuBurgerWithLabel });
        expect(
          document.querySelector(".af-header__menu-burger"),
        ).toBeInTheDocument();
        expect(
          screen.getByRole("button", { name: /mon espace/i }),
        ).toBeInTheDocument();
      });

      it("is not rendered when menuBurgerProps is not provided", () => {
        renderHeader();
        expect(
          document.querySelector(".af-header__menu-burger"),
        ).not.toBeInTheDocument();
      });
    });

    describe("title", () => {
      it("is rendered as a level 1 heading", () => {
        renderHeader({
          title: "Mon titre",
          menuBurgerProps: menuBurgerWithLabel,
        });
        expect(
          screen.getByRole("heading", { level: 1, name: "Mon titre" }),
        ).toBeInTheDocument();
      });

      it("is rendered alone, without any action", () => {
        renderHeader({ title: "Devis assurance auto" });
        expect(
          screen
            .getByRole("heading", { level: 1, name: "Devis assurance auto" })
            .closest(".af-header__actions"),
        ).toBeInTheDocument();
      });

      it("applies af-header__title class", () => {
        renderHeader({ title: "Mon titre" });
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

    it("renders neither the menu button nor the menu panel", () => {
      renderHeader(fullProps());

      expect(
        screen.queryByRole("button", { name: "Menu" }),
      ).not.toBeInTheDocument();
      expect(
        document.querySelector(".af-header__panel"),
      ).not.toBeInTheDocument();
    });

    it("shouldn't have an accessibility violation", async () => {
      const { container } = renderHeader({ ...fullProps(), title: "Titre" });

      expect(await axe(container)).toHaveNoViolations();
    });
  });

  describe("small screens", () => {
    beforeEach(() => {
      vi.mocked(useIsSmallScreen).mockReturnValue(true);
    });

    describe("bar", () => {
      it("renders the title next to the logo, outside the menu panel", () => {
        renderHeader({ ...fullProps(), title: "Devis assurance auto" });

        const title = screen.getByRole("heading", {
          level: 1,
          name: "Devis assurance auto",
        });
        expect(title.closest(".af-header__panel")).toBeNull();
        expect(title.closest(".af-header__actions")).toBeNull();
      });

      it("renders no menu button when there is nothing to put in the panel", () => {
        renderHeader({ title: "Devis assurance auto" });

        expect(
          screen.queryByRole("button", { name: "Menu" }),
        ).not.toBeInTheDocument();
      });

      it("renders no menu button for an account menu without content", () => {
        renderHeader({ menuBurgerProps: menuBurgerWithLabel });

        expect(
          screen.queryByRole("button", { name: "Menu" }),
        ).not.toBeInTheDocument();
      });

      it("does not render the large screen navigation nor the account button", () => {
        renderHeader(fullProps());

        expect(
          document.querySelector(".af-header__menu"),
        ).not.toBeInTheDocument();
        expect(
          screen.queryByRole("button", { name: /mon espace/i }),
        ).not.toBeInTheDocument();
      });
    });

    describe("menu button", () => {
      it.each([
        ["navigation", { tabMenuProps: { items: tabMenuItems } }],
        [
          "account entries",
          {
            menuBurgerProps: {
              ...menuBurgerWithLabel,
              clickItems: [{ title: "Mon profil" }],
            },
          },
        ],
        ["free content", { actionChildren: <span>Action</span> }],
      ])("is rendered for %s", (_, props) => {
        renderHeader(props);

        expect(getMenuButton()).toHaveClass("af-header__menu-icon");
      });

      it("is a collapsed disclosure button controlling the hidden panel", () => {
        renderHeader(fullProps());

        const button = getMenuButton();
        expect(button).toHaveAttribute("aria-expanded", "false");
        expect(button).not.toHaveAttribute("aria-haspopup");
        expect(getMenuPanel()).toHaveClass("af-header__panel");
        expect(getMenuPanel()).not.toBeVisible();
      });

      it("uses a custom accessible name from clickIconProps", () => {
        renderHeader({
          ...fullProps(),
          clickIconProps: { "aria-label": "Ouvrir la navigation", src: "" },
        });

        expect(
          screen.getByRole("button", { name: "Ouvrir la navigation" }),
        ).toHaveAttribute("aria-expanded", "false");
      });

      it("calls the onClick of clickIconProps", async () => {
        const onClick = vi.fn();
        renderHeader({ ...fullProps(), clickIconProps: { onClick, src: "" } });

        await openMenu();

        expect(onClick).toHaveBeenCalledOnce();
        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
      });

      it("forwards the ref of clickIconProps to the button", () => {
        const objectRef = createRef<HTMLButtonElement>();
        const callbackRef = vi.fn();
        const { unmount } = renderHeader({
          ...fullProps(),
          clickIconProps: { ref: objectRef, src: "" },
        });
        expect(objectRef.current).toBe(getMenuButton());
        unmount();

        renderHeader({
          ...fullProps(),
          clickIconProps: { ref: callbackRef, src: "" },
        });
        expect(callbackRef).toHaveBeenCalledWith(getMenuButton());
      });

      it("gets a unique panel id in each header", () => {
        render(
          <>
            <HeaderCommon {...defaultProps} {...fullProps()} />
            <HeaderCommon {...defaultProps} {...fullProps()} />
          </>,
        );

        const [first, second] = screen.getAllByRole("button", {
          name: "Menu",
        });
        const firstId = first.getAttribute("aria-controls");
        const secondId = second.getAttribute("aria-controls");

        expect(firstId).not.toBe(secondId);
        expect(document.getElementById(firstId ?? "")).toBeInTheDocument();
        expect(document.getElementById(secondId ?? "")).toBeInTheDocument();
      });
    });

    describe("opening and closing", () => {
      it("opens the panel with a click and moves the focus to its first entry", async () => {
        renderHeader(fullProps());

        await openMenu();

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
        expect(getMenuPanel()).toBeVisible();
        expect(screen.getByRole("link", { name: "Accueil" })).toHaveFocus();
        expect(getMenuPanel().parentElement).toHaveClass("af-header__overlay");
      });

      it("opens with Enter, closes with Escape and gives the focus back to the button", async () => {
        const user = userEvent.setup();
        renderHeader(fullProps());

        await user.tab();
        expect(getMenuButton()).toHaveFocus();

        await user.keyboard("{Enter}");
        expect(getMenuPanel()).toBeVisible();
        expect(screen.getByRole("link", { name: "Accueil" })).toHaveFocus();

        await user.keyboard("{Escape}");
        expect(getMenuButton()).toHaveAttribute("aria-expanded", "false");
        expect(getMenuPanel()).not.toBeVisible();
        expect(getMenuButton()).toHaveFocus();
      });

      it("opens with Space and lets Tab move through the panel entries", async () => {
        const user = userEvent.setup();
        renderHeader(fullProps());

        getMenuButton().focus();
        await user.keyboard(" ");
        expect(getMenuPanel()).toBeVisible();

        await user.tab();
        expect(screen.getByRole("link", { name: "Contrats" })).toHaveFocus();
        await user.tab();
        expect(
          screen.getByRole("button", { name: "Mon profil" }),
        ).toHaveFocus();
      });

      it("closes with the button, which keeps the focus", async () => {
        renderHeader(fullProps());
        const user = await openMenu();

        await user.click(getMenuButton());

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "false");
        expect(getMenuPanel()).not.toBeVisible();
        expect(getMenuButton()).toHaveFocus();
      });

      it("closes with a click on the veil and gives the focus back to the button", async () => {
        renderHeader(fullProps());
        const user = await openMenu();

        const veil = getMenuPanel().parentElement as HTMLElement;
        await user.click(veil);

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "false");
        expect(veil).not.toBeVisible();
        expect(getMenuButton()).toHaveFocus();
      });

      it("closes when a navigation link is chosen", async () => {
        const onClick = vi.fn();
        renderHeader({
          tabMenuProps: {
            items: [{ href: "#contrats", label: "Contrats", onClick }],
          },
        });
        const user = await openMenu();

        await user.click(screen.getByRole("link", { name: "Contrats" }));

        expect(onClick).toHaveBeenCalledOnce();
        expect(getMenuPanel()).not.toBeVisible();
        expect(getMenuButton()).toHaveFocus();
      });

      it("closes when an account entry is chosen", async () => {
        const props = fullProps();
        renderHeader(props);
        const user = await openMenu();

        await user.click(screen.getByRole("button", { name: "Mon profil" }));

        expect(
          props.menuBurgerProps?.clickItems?.[0].onClick,
        ).toHaveBeenCalled();
        expect(getMenuPanel()).not.toBeVisible();
      });

      it("closes when the logo link is chosen", async () => {
        renderHeader({
          ...fullProps(),
          appNameProps: {
            label: "Mon application",
            logoAlt: "Accueil AXA",
            logoLinkProps: { href: "#accueil" },
          },
        });
        const user = await openMenu();

        await user.click(screen.getByRole("link", { name: "Accueil AXA" }));

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "false");
      });

      it("closes when a link of the free content is chosen", async () => {
        renderHeader({
          ...fullProps(),
          actionChildren: <a href="#banque">Accéder à AXA Banque</a>,
        });
        const user = await openMenu();

        await user.click(
          screen.getByRole("link", { name: "Accéder à AXA Banque" }),
        );

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "false");
      });

      it("stays open when another button of the panel is clicked", async () => {
        const onClick = vi.fn();
        renderHeader({
          ...fullProps(),
          actionChildren: (
            <Button variant="secondary" onClick={onClick}>
              Nous contacter
            </Button>
          ),
        });
        const user = await openMenu();

        await user.click(
          screen.getByRole("button", { name: "Nous contacter" }),
        );

        expect(onClick).toHaveBeenCalledOnce();
        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
      });

      it("stays open when the title is clicked", async () => {
        renderHeader({ ...fullProps(), title: "Devis assurance auto" });
        const user = await openMenu();

        await user.click(screen.getByText("Devis assurance auto"));

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
      });

      it("still calls the onClickCapture of the header", async () => {
        const onClickCapture = vi.fn();
        renderHeader({ ...fullProps(), onClickCapture });

        await openMenu();

        expect(onClickCapture).toHaveBeenCalled();
      });

      it("stays open when a non-interactive part of the panel is clicked", async () => {
        renderHeader({
          ...fullProps(),
          actionChildren: <p>Besoin d&apos;aide ?</p>,
        });
        const user = await openMenu();

        await user.click(screen.getByText("Besoin d'aide ?"));

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
      });

      it("ignores an Escape key already handled by another component", async () => {
        const handledElsewhere = (event: KeyboardEvent) =>
          event.preventDefault();
        renderHeader(fullProps());
        const user = await openMenu();

        document.addEventListener("keydown", handledElsewhere, {
          capture: true,
        });
        await user.keyboard("{Escape}");
        document.removeEventListener("keydown", handledElsewhere, {
          capture: true,
        });

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
      });

      it("leaves Escape to a dialog open in the panel", async () => {
        renderHeader({
          ...fullProps(),
          actionChildren: (
            <dialog open aria-label="Confirmation">
              <button type="button">Annuler</button>
            </dialog>
          ),
        });
        const user = await openMenu();

        screen.getByRole("button", { name: "Annuler" }).focus();
        await user.keyboard("{Escape}");

        expect(getMenuButton()).toHaveAttribute("aria-expanded", "true");
      });

      it("forgets the open state when the screen becomes large", async () => {
        const { rerender } = renderHeader(fullProps());
        await openMenu();

        vi.mocked(useIsSmallScreen).mockReturnValue(false);
        rerender(<HeaderCommon {...defaultProps} {...fullProps()} />);
        expect(
          document.querySelector(".af-header__panel"),
        ).not.toBeInTheDocument();

        vi.mocked(useIsSmallScreen).mockReturnValue(true);
        rerender(<HeaderCommon {...defaultProps} {...fullProps()} />);
        expect(getMenuButton()).toHaveAttribute("aria-expanded", "false");
        expect(getMenuPanel()).not.toBeVisible();
      });
    });

    describe("panel content", () => {
      it("renders the navigation entries as links wrapping a small ClickItem", async () => {
        renderHeader(fullProps());
        await openMenu();

        const navigation = within(getMenuPanel()).getByRole("navigation");
        const link = within(navigation).getByRole("link", { name: "Accueil" });

        expect(link).toHaveAttribute("href", "#accueil");
        expect(link).toHaveClass("af-header__panel-link");
        expect(
          link.querySelector(".af-apollo-click-item--small"),
        ).toBeInTheDocument();
      });

      it("marks only the current page with aria-current", async () => {
        renderHeader(fullProps());
        await openMenu();

        expect(screen.getByRole("link", { name: "Accueil" })).toHaveAttribute(
          "aria-current",
          "page",
        );
        expect(
          screen.getByRole("link", { name: "Contrats" }),
        ).not.toHaveAttribute("aria-current");
      });

      it("names the panel navigation like the large screen navigation", async () => {
        renderHeader({
          tabMenuProps: {
            items: tabMenuItems,
            "aria-label": "Navigation principale",
          },
        });
        await openMenu();

        expect(
          screen.getByRole("navigation", { name: "Navigation principale" }),
        ).toBeInTheDocument();
      });

      it("orders entries, free content and account content like the mockup", async () => {
        renderHeader(fullProps());
        await openMenu();

        const texts = Array.from(
          getMenuPanel().querySelectorAll(
            ".af-apollo-click-item__title, .af-btn-client",
          ),
        ).map((element) => element.textContent);

        expect(texts).toEqual([
          "Accueil",
          "Contrats",
          "Mon profil",
          "Accéder à AXA Banque",
          "Déconnexion",
        ]);
      });

      it("keeps a key for each entry when several share the same title", async () => {
        const consoleError = vi
          .spyOn(console, "error")
          .mockImplementation(() => undefined);
        renderHeader({
          menuBurgerProps: {
            ...menuBurgerWithLabel,
            clickItems: [{ title: "Préférences" }, { title: "Préférences" }],
          },
        });
        await openMenu();

        expect(screen.getAllByText("Préférences")).toHaveLength(2);
        expect(consoleError).not.toHaveBeenCalled();
        consoleError.mockRestore();
      });
    });

    describe("rest of the page", () => {
      const renderPage = () =>
        render(
          <>
            <HeaderCommon {...defaultProps} {...fullProps()} />
            <main>
              <a href="#contenu">Contenu</a>
            </main>
            <footer inert>Pied de page</footer>
          </>,
        );

      it("is inert while the panel is open, and restored when it closes", async () => {
        renderPage();
        const main = screen.getByRole("main", { hidden: true });

        const user = await openMenu();
        expect(main).toHaveAttribute("inert");
        expect(document.querySelector("header")).not.toHaveAttribute("inert");

        await user.keyboard("{Escape}");
        expect(main).not.toHaveAttribute("inert");
      });

      it("leaves the elements that were already inert as they were", async () => {
        renderPage();

        const user = await openMenu();
        await user.click(getMenuButton());

        expect(screen.getByText("Pied de page")).toHaveAttribute("inert");
      });

      it("does not scroll while the panel is open", async () => {
        document.documentElement.style.overflow = "auto";
        renderPage();

        const user = await openMenu();
        expect(document.documentElement.style.overflow).toBe("hidden");

        await user.keyboard("{Escape}");
        expect(document.documentElement.style.overflow).toBe("auto");
        document.documentElement.style.overflow = "";
      });

      it("is restored when the header is removed while open", async () => {
        const { unmount } = renderPage();
        const main = screen.getByRole("main", { hidden: true });
        await openMenu();

        unmount();

        expect(main).not.toHaveAttribute("inert");
        expect(document.documentElement.style.overflow).toBe("");
      });

      it("is restored in strict mode as well", async () => {
        render(
          <StrictMode>
            <HeaderCommon {...defaultProps} {...fullProps()} />
            <main>Contenu</main>
          </StrictMode>,
        );
        const main = screen.getByRole("main", { hidden: true });

        const user = await openMenu();
        expect(main).toHaveAttribute("inert");
        expect(screen.getByRole("link", { name: "Accueil" })).toHaveFocus();

        await user.keyboard("{Escape}");
        expect(main).not.toHaveAttribute("inert");
        expect(document.documentElement.style.overflow).toBe("");
        expect(getMenuButton()).toHaveFocus();
      });
    });

    it("shouldn't have an accessibility violation, panel closed", async () => {
      const { container } = renderHeader({ ...fullProps(), title: "Titre" });

      expect(await axe(container)).toHaveNoViolations();
    });

    it("shouldn't have an accessibility violation, panel open", async () => {
      const { container } = renderHeader({ ...fullProps(), title: "Titre" });
      await openMenu();

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});

describe.each([
  ["Apollo", HeaderApollo],
  ["Look & Feel", HeaderLF],
])("%s Header", (_, Header) => {
  beforeEach(() => {
    vi.mocked(useIsSmallScreen).mockReturnValue(true);
  });

  it("renders the navigation entries as ClickItems in the menu panel", async () => {
    render(
      <Header
        appNameProps={{ label: "Mon application" }}
        tabMenuProps={{ items: tabMenuItems }}
      />,
    );

    await openMenu();

    expect(
      screen
        .getByRole("link", { name: "Contrats" })
        .querySelector(".af-apollo-click-item"),
    ).toBeInTheDocument();
  });
});
