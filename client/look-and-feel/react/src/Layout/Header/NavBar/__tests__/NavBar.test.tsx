import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { ElementType } from "react";
import folderOpen from "@material-symbols/svg-400/outlined/folder_open-fill.svg";
import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import { NavBarProps } from "../types";
import { NavBar } from "../NavBar";
import { Svg } from "../../../../Svg";

describe("NavBar component", () => {
  const defaultProps: NavBarProps = {
    activeLink: 0,
    setActiveLink: vi.fn(),
    links: [
      {
        id: 1,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={home} aria-hidden />
              Home
            </>
          ),
          to: "/home",
        },
      },
      {
        id: 2,
        Wrapper: "a" as ElementType,
        props: {
          children: (
            <>
              <Svg src={folderOpen} aria-hidden />
              Mes dossiers
            </>
          ),
          to: "/folder",
        },
      },
    ],
  };

  test("should render NavBar with links", () => {
    render(<NavBar {...defaultProps} />);

    const homeText = screen.getByText("Home");
    const foldersText = screen.getByText("Mes dossiers");

    expect(homeText).toBeInTheDocument();
    expect(foldersText).toBeInTheDocument();
  });

  test("should set active link on click", async () => {
    render(<NavBar {...defaultProps} />);
    const link = screen.getByText("Home");
    await userEvent.click(link);
    expect(defaultProps.setActiveLink).toHaveBeenCalledWith(0);
  });

  test("shold set active link on focus", () => {
    render(<NavBar {...defaultProps} />);
    const link = screen.getByText("Mes dossiers");
    fireEvent.focus(link);
    expect(defaultProps.setActiveLink).toHaveBeenCalledWith(1);
  });

  test("should apply active class to active link", () => {
    render(<NavBar {...defaultProps} activeLink={1} />);
    const activeLink = screen.getByText("Mes dossiers");
    expect(activeLink).toHaveClass("af-navbar-item__link--active");
  });
});
