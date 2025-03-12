import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { NavBar } from "../NavBar";

describe("NavBar Component", () => {
  const setActiveLink = vi.fn();
  const children = [
    <a key="home link" href="/">
      Home
    </a>,
    <a key="about link" href="/about">
      About
    </a>,
  ];

  it("renders children with correct props", () => {
    render(
      <NavBar activeLink={0} setActiveLink={setActiveLink}>
        {children}
      </NavBar>,
    );

    const links = screen.getAllByRole("menuitem");

    expect(links).toHaveLength(2);
    expect(links[0]).toHaveClass(
      "af-navbar-item__link af-navbar-item__link--active",
    );
    expect(links[1]).toHaveClass("af-navbar-item__link");
  });

  it("calls setActiveLink when a link is clicked", async () => {
    render(<NavBar setActiveLink={setActiveLink}>{children}</NavBar>);

    const links = screen.getAllByRole("menuitem");
    await userEvent.click(links[0]);

    expect(setActiveLink).toHaveBeenCalledWith(0);
  });

  it("calls setActiveLink when a link is focused", async () => {
    render(<NavBar setActiveLink={setActiveLink}>{children}</NavBar>);

    const links = screen.getAllByRole("menuitem");
    await userEvent.tab();

    expect(links[0]).toHaveFocus();
    expect(setActiveLink).toHaveBeenCalledWith(0);
  });

  it("returns null if no valid children are provided", () => {
    const { container } = render(<NavBar setActiveLink={() => {}} />);
    expect(container.firstChild).toBeNull();
  });
});
