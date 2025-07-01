import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { createRef } from "react";
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
  const close = vi.fn();

  it("should not render when items array is empty", () => {
    const ref = createRef<HTMLDialogElement | null>();
    const { container } = render(
      <BurgerMenu refModal={ref} items={[]} setActiveLink={setActiveLink} />,
    );

    expect(container.firstChild).toBeNull();
  });

  it("should render a nav element with correct ARIA attributes", () => {
    const ref = createRef<HTMLDialogElement | null>();
    ref.current = document.createElement("dialog");
    ref.current.open = true;

    render(
      <BurgerMenu refModal={ref} items={items} setActiveLink={setActiveLink} />,
    );

    const nav = screen.getByRole("navigation", {
      name: /menu principal mobile/i,
    });

    expect(nav).toHaveAttribute("aria-hidden", "false");
  });

  it("should call setActiveLink and setIsOpen when a menu item is clicked", async () => {
    const ref = createRef<HTMLDialogElement | null>();
    ref.current = document.createElement("dialog");
    ref.current.open = true;
    ref.current.close = close;

    render(
      <BurgerMenu refModal={ref} items={items} setActiveLink={setActiveLink} />,
    );

    const menuItem = screen.getAllByRole("menuitem");

    expect(menuItem).toHaveLength(2);

    await userEvent.click(menuItem[0]);
    expect(setActiveLink).toHaveBeenCalledWith(0);
    expect(close).toHaveBeenCalledOnce();
  });
});
