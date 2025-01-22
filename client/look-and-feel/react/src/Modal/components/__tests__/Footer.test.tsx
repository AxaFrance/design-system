import { render } from "@testing-library/react";
import { Footer, FooterProps } from "../Footer";

describe("Footer", () => {
  const defaultProps: FooterProps = {
    className: "custom-class",
  };

  it("should render with default class", () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("af-modal__footer");
  });

  it("should render with additional class", () => {
    const { container } = render(<Footer {...defaultProps} />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("af-modal__footer custom-class");
  });

  it("should filter out falsy class names", () => {
    const { container } = render(<Footer className={undefined} />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("af-modal__footer");
  });
});
