import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "../Badge";

describe("Badge component", () => {
  it("should renders success correctly", () => {
    render(<Badge classModifier="success">Success</Badge>);

    const badge = screen.getByText("Success");
    expect(badge).toHaveClass("af-badge af-badge--success");
  });
  it("should renders danger correctly", () => {
    render(<Badge classModifier="danger">Danger</Badge>);

    const badge = screen.getByText("Danger");
    expect(badge).toHaveClass("af-badge af-badge--danger");
  });
  it("should renders info correctly", () => {
    render(<Badge classModifier="info">Info</Badge>);

    const badge = screen.getByText("Info");
    expect(badge).toHaveClass("af-badge af-badge--info");
  });
  it("should renders danger with icon and custom class correctly", () => {
    render(
      <Badge role="alert" className="custom-class" classModifier="error">
        <i role="img" className="glyphicon glyphicon-bell" />
      </Badge>,
    );

    const badge = screen.getByRole("alert");
    const icon = screen.getByRole("img");
    expect(badge).toHaveClass("custom-class custom-class--error");
    expect(icon).toBeInTheDocument();
  });
});
