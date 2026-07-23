import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { TabMenu } from "../TabMenu";

describe("TabMenu", () => {
  it("renders as nav element with ul list", () => {
    render(<TabMenu items={[{ href: "#contracts", label: "Mes contrats" }]} />);
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
    expect(nav.querySelector("ul")).toBeInTheDocument();
  });

  it("renders with ItemMenu for each item", () => {
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    expect(
      screen.getByRole("link", { name: "Mes contrats" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Mes sinistres" }),
    ).toBeInTheDocument();
  });

  it("applies class af-tab-menu", () => {
    const { container } = render(
      <TabMenu items={[{ href: "#", label: "Item" }]} />,
    );
    const nav = container.querySelector(".af-tab-menu");
    expect(nav).toBeInTheDocument();
  });

  it("accepts custom className", () => {
    const { container } = render(
      <TabMenu
        className="custom-class"
        items={[{ href: "#", label: "Item" }]}
      />,
    );
    const nav = container.querySelector(".af-tab-menu");
    expect(nav).toHaveClass("custom-class");
  });

  it("returns null when items is empty", () => {
    const { container } = render(<TabMenu items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("returns null when items is undefined", () => {
    const { container } = render(<TabMenu />);
    expect(container.firstChild).toBeNull();
  });

  it("sets initial position when initialPosition is provided", () => {
    render(
      <TabMenu
        initialPosition={1}
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const firstLink = screen.getByRole("link", { name: "Mes contrats" });
    const secondLink = screen.getByRole("link", { name: "Mes sinistres" });
    expect(firstLink).toHaveAttribute("tabindex", "-1");
    expect(secondLink).toHaveAttribute("tabindex", "0");
  });

  it("defaults to position 0 when initialPosition is not provided", () => {
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const firstLink = screen.getByRole("link", { name: "Mes contrats" });
    expect(firstLink).toHaveAttribute("tabindex", "0");
  });

  it("sets focus to first item by default", () => {
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const firstLink = screen.getByRole("link", { name: "Mes contrats" });
    expect(firstLink).toHaveAttribute("tabindex", "0");
  });

  it("navigates to next item with ArrowRight", async () => {
    const user = userEvent.setup();
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const nav = screen.getByRole("navigation");
    await user.click(nav);
    await user.keyboard("{ArrowRight}");

    const firstLink = screen.getByRole("link", { name: "Mes contrats" });
    const secondLink = screen.getByRole("link", { name: "Mes sinistres" });
    expect(firstLink).toHaveAttribute("tabindex", "-1");
    expect(secondLink).toHaveAttribute("tabindex", "0");
  });

  it("navigates to previous item with ArrowLeft", async () => {
    const user = userEvent.setup();
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const nav = screen.getByRole("navigation");
    await user.click(nav);
    await user.keyboard("{ArrowRight}");
    await user.keyboard("{ArrowLeft}");

    const firstLink = screen.getByRole("link", { name: "Mes contrats" });
    expect(firstLink).toHaveAttribute("tabindex", "0");
  });

  it("wraps to last item when pressing ArrowLeft on first item", async () => {
    const user = userEvent.setup();
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const nav = screen.getByRole("navigation");
    await user.click(nav);
    await user.keyboard("{ArrowLeft}");

    const lastLink = screen.getByRole("link", { name: "Mes sinistres" });
    expect(lastLink).toHaveAttribute("tabindex", "0");
  });

  it("wraps to first item when pressing ArrowRight on last item", async () => {
    const user = userEvent.setup();
    render(
      <TabMenu
        items={[
          { href: "#contracts", label: "Mes contrats" },
          { href: "#claims", label: "Mes sinistres" },
        ]}
      />,
    );
    const nav = screen.getByRole("navigation");
    await user.click(nav);
    await user.keyboard("{ArrowRight}");
    await user.keyboard("{ArrowRight}");

    const firstLink = screen.getByRole("link", { name: "Mes contrats" });
    expect(firstLink).toHaveAttribute("tabindex", "0");
  });

  describe("violation tests", () => {
    it("ignores unhandled keys", async () => {
      const user = userEvent.setup();
      render(
        <TabMenu
          items={[
            { href: "#contracts", label: "Mes contrats" },
            { href: "#claims", label: "Mes sinistres" },
          ]}
        />,
      );
      const nav = screen.getByRole("navigation");
      const firstLink = screen.getByRole("link", { name: "Mes contrats" });

      await user.click(nav);
      await user.keyboard("{Enter}");

      expect(firstLink).toHaveAttribute("tabindex", "0");
    });

    it("works with single item", async () => {
      const user = userEvent.setup();
      render(<TabMenu items={[{ href: "#item", label: "Item" }]} />);
      const nav = screen.getByRole("navigation");
      await user.click(nav);
      await user.keyboard("{ArrowRight}");

      const link = screen.getByRole("link", { name: "Item" });
      expect(link).toHaveAttribute("tabindex", "0");
    });

    it("updates tabIndex when navigating", async () => {
      const user = userEvent.setup();
      render(
        <TabMenu
          items={[
            { href: "#contracts", label: "Mes contrats" },
            { href: "#claims", label: "Mes sinistres" },
          ]}
        />,
      );
      const nav = screen.getByRole("navigation");
      const firstLink = screen.getByRole("link", { name: "Mes contrats" });
      const secondLink = screen.getByRole("link", { name: "Mes sinistres" });

      await user.click(nav);
      expect(firstLink).toHaveAttribute("tabindex", "0");
      expect(secondLink).toHaveAttribute("tabindex", "-1");

      await user.keyboard("{ArrowRight}");
      expect(firstLink).toHaveAttribute("tabindex", "-1");
      expect(secondLink).toHaveAttribute("tabindex", "0");
    });

    it("allows multiple sequential navigation", async () => {
      const user = userEvent.setup();
      render(
        <TabMenu
          items={[
            { href: "#contracts", label: "Mes contrats" },
            { href: "#claims", label: "Mes sinistres" },
            { href: "#documents", label: "Mes documents" },
          ]}
        />,
      );
      const nav = screen.getByRole("navigation");
      await user.click(nav);

      // Navigate: 0 -> 1 -> 2 -> 0
      await user.keyboard("{ArrowRight}");
      await user.keyboard("{ArrowRight}");
      await user.keyboard("{ArrowRight}");

      const firstLink = screen.getByRole("link", { name: "Mes contrats" });
      expect(firstLink).toHaveAttribute("tabindex", "0");
    });

    it("respects isActive prop when provided", () => {
      render(
        <TabMenu
          items={[
            { href: "#contracts", label: "Mes contrats" },
            { href: "#claims", label: "Mes sinistres", isActive: true },
          ]}
        />,
      );
      const firstLink = screen.getByRole("link", { name: "Mes contrats" });
      expect(firstLink).toHaveAttribute("tabindex", "0");
    });
  });
});
