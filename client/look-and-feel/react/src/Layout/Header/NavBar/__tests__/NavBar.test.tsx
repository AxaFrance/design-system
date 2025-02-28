import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { NavBar, NavBarProps } from "../NavBar";

describe("NavBar component", () => {
  const defaultProps: NavBarProps = {
    activeLink: 0,
    setActiveLink: vi.fn(),
    links: [
      { label: "Home", href: "/", type: <a href="/">test</a> },
      { label: "About", href: "/about", type: <a href="/about">about</a> },
      {
        label: "Contact",
        href: "/contact",
        type: <a href="/contact">contact</a>,
      },
    ],
  };

  test("renders NavBar with links", () => {
    render(<NavBar {...defaultProps} />);
    defaultProps.links?.forEach((link) => {
      expect(screen.getByText(link.label)).toBeInTheDocument();
    });
  });

  test("sets active link on click", async () => {
    render(<NavBar {...defaultProps} />);
    const link = screen.getByText("About");
    await userEvent.click(link);
    expect(defaultProps.setActiveLink).toHaveBeenCalledWith(1);
  });

  test("sets active link on focus", () => {
    render(<NavBar {...defaultProps} />);
    const link = screen.getByText("Contact");
    fireEvent.focus(link);
    expect(defaultProps.setActiveLink).toHaveBeenCalledWith(2);
  });

  test("applies active class to active link", () => {
    render(<NavBar {...defaultProps} activeLink={1} />);
    const activeLink = screen.getByText("About");
    expect(activeLink).toHaveClass("af-navbar-item__link--active");
  });
});
