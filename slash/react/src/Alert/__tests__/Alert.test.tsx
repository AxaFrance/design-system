import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { axe } from "jest-axe";
import { Alert } from "../Alert";

const mockOnClose = vi.fn();

describe("Alert component", () => {
  it("should render error by default correctly", () => {
    render(<Alert title="Error: information is required" />);

    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Error: information is required");
    const alertIcon = screen.getByRole("presentation");

    expect(alert).toHaveClass("af-alert af-alert--error");
    expect(alertTitle).toBeInTheDocument();
    expect(alertIcon).toHaveClass("glyphicon glyphicon-minus-sign");
  });
  it("should render danger correctly", () => {
    render(
      <Alert classModifier="danger" title="Warning: information is missing" />,
    );

    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Warning: information is missing");
    const alertIcon = screen.getByRole("presentation");

    expect(alert).toHaveClass("af-alert af-alert--danger");
    expect(alertTitle).toBeInTheDocument();
    expect(alertIcon).toHaveClass("glyphicon glyphicon-alert");
  });
  it("should render info with custom icon and class correctly", () => {
    render(
      <Alert
        classModifier="info"
        icon="custom-icon"
        className="custom-class"
        title="Info: information is optionnal"
      />,
    );

    const alert = screen.getByRole("alert");
    const alertTitle = screen.getByText("Info: information is optionnal");
    const alertIcon = screen.getByRole("presentation");

    expect(alert).toHaveClass("custom-class custom-class--info");
    expect(alertTitle).toBeInTheDocument();
    expect(alertIcon).toHaveClass("custom-icon");
  });
  it("should render success with children correctly", () => {
    render(
      <Alert
        classModifier="success"
        title="Success: your request has been approved"
      >
        <h4>Children</h4>
      </Alert>,
    );

    const alert = screen.getByRole("alert");
    const alertIcon = screen.getByRole("presentation");
    const alertChildren = screen.getByText("Children");
    const alertTitle = screen.getByText(
      "Success: your request has been approved",
    );

    expect(alert).toHaveClass("af-alert af-alert--success");
    expect(alertIcon).toHaveClass("glyphicon glyphicon-ok");
    expect(alertTitle).toBeInTheDocument();
    expect(alertChildren).toBeInTheDocument();
  });
  it("should call onClose function when clicking the cross icon", () => {
    render(
      <Alert
        classModifier="danger"
        title="Warning: information is missing"
        onClose={mockOnClose}
      />,
    );

    const closeButton = screen.getByRole("button");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalled();
  });
  it("shouldn't have an accessibility violation <Alert />", async () => {
    // Act
    const { container } = render(
      <Alert classModifier="danger" title="Warning: information is missing" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
