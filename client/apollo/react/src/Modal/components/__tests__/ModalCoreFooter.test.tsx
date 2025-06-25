import { render, screen } from "@testing-library/react";
import { ModalCoreFooter } from "../ModalCoreFooterApollo";

const getFooter = () => screen.getByRole("contentinfo");

describe("ModalCoreFooter", () => {
  it("should not render when no button props provided", () => {
    const { container } = render(<ModalCoreFooter />);

    const footer = container.querySelector("footer");
    expect(footer).not.toBeInTheDocument();
  });

  it("should render with default class", () => {
    render(<ModalCoreFooter primaryButtonProps={{ children: "Primary" }} />);
    expect(getFooter()).toHaveClass("af-apollo-modal__footer");
  });

  it("should render with additional class", () => {
    render(
      <ModalCoreFooter
        className="custom-class"
        primaryButtonProps={{ children: "Primary" }}
      />,
    );
    expect(getFooter()).toHaveClass("af-apollo-modal__footer custom-class");
  });

  it("should render with primary and secondary buttons", () => {
    render(
      <ModalCoreFooter
        primaryButtonProps={{ children: "Primary" }}
        secondaryButtonProps={{ children: "Secondary" }}
      />,
    );

    const primaryButton = screen.getByRole("button", { name: "Primary" });
    const secondaryButton = screen.getByRole("button", { name: "Secondary" });
    expect(primaryButton).toBeInTheDocument();
    expect(secondaryButton).toBeInTheDocument();
  });

  it("should filter out falsy class names", () => {
    render(
      <ModalCoreFooter
        className={undefined}
        primaryButtonProps={{ children: "Primary" }}
      />,
    );
    expect(getFooter()).toHaveClass("af-apollo-modal__footer");
  });
});
