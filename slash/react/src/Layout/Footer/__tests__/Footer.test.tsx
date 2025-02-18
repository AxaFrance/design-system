import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Footer } from "../Footer";

describe("Footer component", () => {
  it("should render with default props", () => {
    render(<Footer />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveClass("af-footer");

    const logoElement = screen.getByRole("img", { hidden: true });
    expect(logoElement).toHaveClass("af-footer__logo");

    const copyrightElement = screen.getByText(
      /© \d{4} AXA Tous droits réservés/,
    );
    expect(copyrightElement).toBeInTheDocument();
  });

  it("should render with a version", () => {
    const version = "1.0.0";
    render(<Footer version={version} />);

    const versionElement = screen.getByText(`Version: ${version}`);
    expect(versionElement).toBeInTheDocument();
    expect(versionElement).toHaveClass("af-footer__version");
  });

  it("should apply additional class names", () => {
    render(<Footer className="custom-class" />);

    const footerElement = screen.getByRole("contentinfo");
    expect(footerElement).toHaveClass("af-footer");
    expect(footerElement).toHaveClass("custom-class");
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <Footer />", async () => {
      const version = "1.0.0";
      const { container } = render(<Footer version={version} />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
