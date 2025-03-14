import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { BurgerMenu } from "../BurgerMenu";

describe("BurgerMenu Component", () => {
  const items = [
    <a key="home link" href="/">
      Home
    </a>,
    <a key="about link" href="/about">
      About
    </a>,
  ];

  const setActiveLink = vi.fn();
  const setIsOpen = vi.fn();

  it("should not render when items array is empty", () => {
    const { container } = render(
      <BurgerMenu
        isOpen={false}
        items={[]}
        setActiveLink={setActiveLink}
        setIsOpen={setIsOpen}
      />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("should render a nav element with correct ARIA attributes", () => {
    render(
      <BurgerMenu
        isOpen
        items={items}
        setActiveLink={setActiveLink}
        setIsOpen={setIsOpen}
      />,
    );

    const nav = screen.getByRole("navigation", {
      name: /menu principal mobile/i,
    });

    expect(nav).toHaveAttribute("aria-hidden", "false");
  });

  it("should call setActiveLink and setIsOpen when a menu item is clicked", async () => {
    render(
      <BurgerMenu
        isOpen
        items={items}
        setActiveLink={setActiveLink}
        setIsOpen={setIsOpen}
      />,
    );

    const menuItem = screen.getAllByRole("menuitem");

    expect(menuItem).toHaveLength(2);

    await userEvent.click(menuItem[0]);
    expect(setActiveLink).toHaveBeenCalledWith(0);
    expect(setIsOpen).toHaveBeenCalledWith(false);
  });
});
