import { render } from "@testing-library/react";
import { ModalCoreFooter, type ModalCoreFooterProps } from "../ModalCoreFooter";

describe("ModalCoreFooter", () => {
  const defaultProps: ModalCoreFooterProps = {
    className: "custom-class",
  };

  it("should render with default class", () => {
    const { container } = render(<ModalCoreFooter />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("af-modal__footer");
  });

  it("should render with additional class", () => {
    const { container } = render(<ModalCoreFooter {...defaultProps} />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("af-modal__footer custom-class");
  });

  it("should filter out falsy class names", () => {
    const { container } = render(<ModalCoreFooter className={undefined} />);
    const footer = container.querySelector("footer");
    expect(footer).toHaveClass("af-modal__footer");
  });
});
