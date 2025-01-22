import home from "@material-symbols/svg-400/outlined/home-fill.svg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header, HeaderProps } from "../Header";

const defaultProps: HeaderProps = {
  title: "Header Title",
  onCancel: vi.fn(),
};

describe("Header", () => {
  it("should render the header with title", () => {
    render(<Header {...defaultProps} />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
      "Header Title",
    );
  });

  it("should render the subtitle if provided", () => {
    render(<Header {...defaultProps} subtitle="Subtitle" />);
    expect(screen.getByText("Subtitle")).toBeInTheDocument();
  });

  it("should render the iconTitle if provided", () => {
    render(<Header {...defaultProps} iconTitle={home} />);
    expect(screen.getAllByRole("graphics-document")[1]).toHaveAttribute(
      "data-src",
      expect.stringMatching(/home-fill.svg/),
    );
  });

  it("should call onCancel when close button is clicked", async () => {
    render(<Header {...defaultProps} />);
    const closeButton = screen.getByRole("button", {
      name: /Fermer la boite de dialogue/,
    });
    await userEvent.click(closeButton);
    expect(defaultProps.onCancel).toHaveBeenCalled();
  });

  it("should apply the provided className", () => {
    render(<Header {...defaultProps} className="custom-class" />);
    expect(screen.getByRole("banner")).toHaveClass("custom-class");
  });

  it("should use the correct heading level", () => {
    render(<Header {...defaultProps} levelTitle={3} />);
    expect(screen.getByRole("heading", { level: 3 })).toBeInTheDocument();
  });

  it("should have the correct aria-label for the close button", () => {
    render(<Header {...defaultProps} closeButtonAriaLabel="Close Dialog" />);
    expect(
      screen.getByRole("button", { name: "Close Dialog" }),
    ).toBeInTheDocument();
  });
});
