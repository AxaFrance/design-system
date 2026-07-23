import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { ItemMenu } from "../ItemMenuCommon";

describe("ItemMenu", () => {
  it("renders with label", () => {
    render(<ItemMenu href="#">Mes contrats</ItemMenu>);
    expect(
      screen.getByRole("link", { name: "Mes contrats" }),
    ).toBeInTheDocument();
  });

  it("applies active modifier when isActive is true", () => {
    render(
      <ItemMenu href="#" isActive>
        Mes contrats
      </ItemMenu>,
    );
    const element = screen.getByRole("link", { name: "Mes contrats" });
    expect(element).toHaveClass("af-item-menu--active");
  });

  it("renders as an anchor element", () => {
    render(<ItemMenu href="https://example.com">Navigation Item</ItemMenu>);
    const element = screen.getByRole("link", { name: "Navigation Item" });
    expect(element).toHaveAttribute("href", "https://example.com");
  });

  it("accepts custom className", () => {
    render(
      <ItemMenu href="#" className="custom-class">
        Item
      </ItemMenu>,
    );
    const element = screen.getByRole("link", { name: "Item" });
    expect(element).toHaveClass("custom-class");
    expect(element).toHaveClass("af-item-menu");
  });

  it("supports ref prop", () => {
    const ref = createRef<HTMLAnchorElement>();

    render(
      <ItemMenu href="#" ref={ref}>
        Item
      </ItemMenu>,
    );

    const element = screen.getByRole("link", { name: "Item" });
    expect(ref.current).toBe(element);
  });
});
