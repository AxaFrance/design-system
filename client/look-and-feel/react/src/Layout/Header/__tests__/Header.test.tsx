import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "../Header";
import { BREAKPOINT } from "../../../utilities/constants";

describe("Header component", () => {
  let originalInnerWidth: number;

  beforeAll(() => {
    originalInnerWidth = window.innerWidth;
  });

  afterAll(() => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });

  test("renders logo", () => {
    render(<Header />);
    const logo = screen.getByAltText("");
    expect(logo).toBeInTheDocument();
  });

  test("renders NavBar when links are provided", () => {
    const links = [{ label: "Home", href: "/" }];
    render(<Header links={links} />);
    const navLink = screen.getByText("Home");
    expect(navLink).toBeInTheDocument();
  });

  test("renders rightItem as text when it is a string", () => {
    render(<Header rightItem="Contact" />);
    const rightItemText = screen.getByText("Contact");
    expect(rightItemText).toBeInTheDocument();
  });

  test("renders ButtonClient when rightItem is an object and screen size is >= BREAKPOINT.MD", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD + 1,
    });
    const rightItem = { value: "Login", iconLeft: null };
    render(<Header rightItem={rightItem} />);
    const button = screen.getByText("Login");
    expect(button).toBeInTheDocument();
  });

  test("renders Svg menu icon when rightItem is an object and screen size is <= BREAKPOINT.MD", () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD - 1,
    });
    const rightItem = { value: "Login", iconLeft: null };
    render(<Header rightItem={rightItem} />);
    const menuIcon = screen.getByRole("menu");
    expect(menuIcon).toBeInTheDocument();
  });

  test("toggles BurgerMenu when Svg menu icon is clicked", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD - 1,
    });
    const rightItem = { value: "Login", iconLeft: null };
    render(<Header rightItem={rightItem} />);
    const menuIcon = screen.getByRole("menu");
    await userEvent.click(menuIcon);
    const burgerMenu = screen.getByRole("navigation");
    expect(burgerMenu).toBeInTheDocument();
  });

  test("closes BurgerMenu when handleClose is called", async () => {
    Object.defineProperty(window, "innerWidth", {
      writable: true,
      configurable: true,
      value: BREAKPOINT.MD - 1,
    });
    const rightItem = { value: "Login", iconLeft: null };
    render(<Header rightItem={rightItem} />);
    const menuIcon = screen.getByRole("menu");
    await userEvent.click(menuIcon);
    expect(screen.getByRole("navigation")).toBeInTheDocument();
    await userEvent.click(menuIcon);
    expect(screen.queryByRole("navigation")).toBeNull();
  });
});
