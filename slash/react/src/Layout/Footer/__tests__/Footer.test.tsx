import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Footer } from "../Footer";

describe("Footer component", () => {
  it("should render with default props", () => {
    render(<Footer />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("af-footer");
    const link = screen.getByRole("link", { name: "Logo Axa" });
    expect(link).toHaveAttribute("href", "https://www.axa.fr/");
    expect(link).toHaveAttribute("title", "Site Axa");
    const img = screen.getByRole("img", { name: "Logo Axa" });
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("alt", "Logo Axa");
    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} AXA Tous droits réservés`,
      ),
    ).toBeInTheDocument();
  });

  it("should render children", () => {
    render(<Footer>Test Footer</Footer>);

    expect(screen.getByText("Test Footer")).toBeInTheDocument();
  });

  it("should not render icon", () => {
    render(<Footer icon="" />);

    expect(
      screen.queryByRole("img", { name: "Logo Axa" }),
    ).not.toBeInTheDocument();
  });

  it("should render with component props", () => {
    render(
      <Footer
        className="new-classname"
        href="/new-route"
        alt="new-alt"
        title="new-title"
      />,
    );

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("new-classname");
    const link = screen.getByRole("link", { name: "new-alt" });
    expect(link).toHaveAttribute("href", "/new-route");
    expect(link).toHaveAttribute("title", "new-title");
    const img = screen.getByRole("img", { name: "new-alt" });
    expect(img).toHaveAttribute("alt", "new-alt");
    expect(
      screen.getByText(
        `© ${new Date().getFullYear()} AXA Tous droits réservés`,
      ),
    ).toBeInTheDocument();
  });

  it("should not have an accessibility violation", async () => {
    const { container } = render(<Footer />);

    expect(await axe(container)).toHaveNoViolations();
  });
});
