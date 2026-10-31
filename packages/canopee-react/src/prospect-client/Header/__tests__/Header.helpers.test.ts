import { afterEach, describe, expect, it, vi } from "vitest";
import {
  getFocusableElements,
  getKeyedItems,
  lockPageScroll,
  makeOthersInert,
  withoutIcons,
} from "../Header.helpers";

describe("Header helpers", () => {
  afterEach(() => {
    document.body.innerHTML = "";
  });

  describe("getFocusableElements", () => {
    it("returns the focusable elements in document order", () => {
      document.body.innerHTML = `
        <div id="panel">
          <a href="#un">Un</a>
          <a>Sans destination</a>
          <button type="button">Deux</button>
          <button type="button" disabled>Désactivé</button>
          <input type="hidden" />
          <input aria-label="Trois" />
          <span tabindex="0">Quatre</span>
          <span tabindex="-1">Hors tabulation</span>
          <div hidden><a href="#cache">Caché</a></div>
          <div inert><a href="#inerte">Inerte</a></div>
        </div>
      `;

      const panel = document.getElementById("panel") as HTMLElement;

      expect(
        getFocusableElements(panel).map(
          (element) =>
            element.textContent || element.getAttribute("aria-label"),
        ),
      ).toEqual(["Un", "Deux", "Trois", "Quatre"]);
    });
  });

  describe("makeOthersInert", () => {
    it("makes the siblings of the root and of its ancestors inert, then restores them", () => {
      document.body.innerHTML = `
        <div id="layout">
          <header id="header"><button type="button">Menu</button></header>
          <main id="main">Contenu</main>
        </div>
        <footer id="footer">Pied de page</footer>
      `;
      const byId = (id: string) => document.getElementById(id) as HTMLElement;

      const restore = makeOthersInert(byId("header"));

      expect(byId("main")).toHaveAttribute("inert");
      expect(byId("footer")).toHaveAttribute("inert");
      expect(byId("header")).not.toHaveAttribute("inert");
      expect(byId("layout")).not.toHaveAttribute("inert");

      restore();

      expect(byId("main")).not.toHaveAttribute("inert");
      expect(byId("footer")).not.toHaveAttribute("inert");
    });

    it("leaves the elements that were already inert as they were", () => {
      document.body.innerHTML = `
        <header id="header"></header>
        <aside id="aside" inert></aside>
      `;
      const aside = document.getElementById("aside") as HTMLElement;

      makeOthersInert(document.getElementById("header") as HTMLElement)();

      expect(aside).toHaveAttribute("inert");
    });
  });

  describe("lockPageScroll", () => {
    const { style } = document.documentElement;

    afterEach(() => {
      vi.restoreAllMocks();
      style.overflow = "";
      style.paddingRight = "";
    });

    it("hides the overflow of the page, then restores it", () => {
      style.overflow = "scroll";

      const restore = lockPageScroll();
      expect(style.overflow).toBe("hidden");

      restore();
      expect(style.overflow).toBe("scroll");
    });

    it("keeps the width of the scrollbar to avoid a shift of the layout", () => {
      vi.spyOn(document.documentElement, "clientWidth", "get").mockReturnValue(
        window.innerWidth - 15,
      );

      const restore = lockPageScroll();
      expect(style.paddingRight).toBe("15px");

      restore();
      expect(style.paddingRight).toBe("");
    });

    it("adds no padding when the page has no scrollbar", () => {
      vi.spyOn(document.documentElement, "clientWidth", "get").mockReturnValue(
        window.innerWidth,
      );

      lockPageScroll();

      expect(style.paddingRight).toBe("");
    });
  });

  describe("withoutIcons", () => {
    it("removes the icon of each item and keeps the rest", () => {
      const items = [
        { href: "#accueil", label: "Accueil", icon: "home.svg" },
        { href: "#contrats", label: "Contrats" },
      ];

      expect(withoutIcons(items)).toEqual([
        { href: "#accueil", label: "Accueil" },
        { href: "#contrats", label: "Contrats" },
      ]);
      expect(items[0].icon).toBe("home.svg");
    });
  });

  describe("getKeyedItems", () => {
    it("makes the keys unique when several items share the same name", () => {
      const items = [{ title: "Profil" }, { title: "Aide" }, { title: "Aide" }];

      expect(
        getKeyedItems(items, (item) => item.title).map(({ key }) => key),
      ).toEqual(["Profil", "Aide", "Aide-2"]);
    });

    it("keeps each item next to its key", () => {
      const items = [{ title: "Profil" }];

      expect(getKeyedItems(items, (item) => item.title)).toEqual([
        { key: "Profil", item: items[0] },
      ]);
    });
  });
});
