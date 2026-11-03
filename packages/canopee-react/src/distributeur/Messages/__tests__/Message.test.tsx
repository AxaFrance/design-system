import { fireEvent, render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Message } from "../Message";

const mockOnClose = vi.fn();

describe("Alert component", () => {
  it("should render error by default correctly", () => {
    render(<Message title="Error: information is required" />);

    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Error: information is required");

    expect(alert).toHaveClass("af-alert af-alert--error");
    expect(alertTitle).toBeInTheDocument();
  });
  it("should render warning correctly", () => {
    render(
      <Message variant="warning" title="Warning: information is missing" />,
    );

    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Warning: information is missing");

    expect(alert).toHaveClass("af-alert af-alert--warning");
    expect(alertTitle).toBeInTheDocument();
  });
  it("should render info with custom icon and class correctly", () => {
    render(
      <Message
        variant="info"
        className="custom-class"
        title="Info: information is optionnal"
      />,
    );

    const alert = screen.getByRole("status");
    const alertTitle = screen.getByText("Info: information is optionnal");

    expect(alert).toHaveClass("custom-class af-alert af-alert--info");
    expect(alertTitle).toBeInTheDocument();
  });
  it("should render success with children correctly", () => {
    render(
      <Message
        variant="success"
        title="Success: your request has been approved"
      >
        <h4>Children</h4>
      </Message>,
    );

    const alert = screen.getByRole("status");
    const alertChildren = screen.getByText("Children");
    const alertTitle = screen.getByText(
      "Success: your request has been approved",
    );

    expect(alert).toHaveClass("af-alert af-alert--success");
    expect(alertTitle).toBeInTheDocument();
    expect(alertChildren).toBeInTheDocument();
  });
  it("should call onClose function when clicking the cross icon", () => {
    render(
      <Message
        variant="warning"
        title="Warning: information is missing"
        onClose={mockOnClose}
      />,
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
  it.each([
    ["error", "alert"],
    ["warning", "alert"],
    ["info", "status"],
    ["success", "status"],
  ] as const)("should give the %s variant the %s role", (variant, role) => {
    render(<Message variant={variant} title="Message" />);

    expect(screen.getByRole(role)).toHaveTextContent("Message");
    expect(
      screen.queryByRole(role === "alert" ? "status" : "alert"),
    ).not.toBeInTheDocument();
  });
  it("should name the close button in French by default", () => {
    render(<Message title="Information" onClose={mockOnClose} />);

    expect(screen.getByRole("button", { name: "Fermer" })).toBeInTheDocument();
  });
  it("should name the close button with closeButtonAriaLabel", () => {
    render(
      <Message
        title="Information"
        onClose={mockOnClose}
        closeButtonAriaLabel="Fermer le message"
      />,
    );

    expect(
      screen.getByRole("button", { name: "Fermer le message" }),
    ).toBeInTheDocument();
  });
  it("shouldn't have an accessibility violation <Message />", async () => {
    // Act
    const { container } = render(
      <Message variant="warning" title="Warning: information is missing" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
