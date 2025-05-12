import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import bank from "@material-symbols/svg-700/rounded/account_balance_wallet-fill.svg";
import {
  ModalCoreHeader,
  type ModalCoreHeaderProps,
} from "../ModalCoreHeaderApollo";

const title = "ModalCoreHeader Title";
const defaultProps: ModalCoreHeaderProps = {
  headingProps: { children: title },
  onClose: vi.fn(),
};

describe("ModalCoreHeader", () => {
  it("should render the header with heading", () => {
    render(<ModalCoreHeader {...defaultProps} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(title);
  });

  it("should render the icon", () => {
    render(
      <ModalCoreHeader
        {...defaultProps}
        iconProps={{ src: bank, "aria-label": "icon" }}
      />,
    );
    expect(screen.getByLabelText("icon")).toBeInTheDocument();
  });

  it("should call onClose when close button is clicked", async () => {
    render(<ModalCoreHeader {...defaultProps} />);
    const closeButton = screen.getByRole("button", {
      name: /Fermer la boite de dialogue/,
    });
    await userEvent.click(closeButton);
    expect(defaultProps.onClose).toHaveBeenCalled();
  });

  it("should apply the provided className", () => {
    render(<ModalCoreHeader {...defaultProps} className="custom-class" />);
    expect(screen.getByRole("banner")).toHaveClass("custom-class");
  });

  it("should have the correct aria-label for the close button", () => {
    render(
      <ModalCoreHeader {...defaultProps} closeButtonAriaLabel="Close Dialog" />,
    );
    expect(
      screen.getByRole("button", { name: "Close Dialog" }),
    ).toBeInTheDocument();
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <ModalCoreHeader />", async () => {
      const { container } = render(
        <ModalCoreHeader
          {...defaultProps}
          closeButtonAriaLabel="Close Dialog"
        />,
      );

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
