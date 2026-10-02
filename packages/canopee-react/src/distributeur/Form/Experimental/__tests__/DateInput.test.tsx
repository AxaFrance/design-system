import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { DateInput } from "../DateInput";

describe("DateInput", () => {
  const fakeDate = new Date("2025-03-28");

  it("should render a date input with its label and default class", () => {
    render(<DateInput label="Birth date" value={fakeDate} readOnly />);

    const input = screen.getByLabelText("Birth date");
    expect(input).toHaveAttribute("type", "date");
    expect(input).toHaveClass("af-input__input");
    expect(input).toHaveValue("2025-03-28");
  });

  it("should accept an ISO string value", () => {
    render(<DateInput label="Birth date" value="2025-03-28" readOnly />);

    expect(screen.getByLabelText("Birth date")).toHaveValue("2025-03-28");
  });

  it("should format Date min and max boundaries", () => {
    render(
      <DateInput
        label="Birth date"
        min={new Date("2025-01-01")}
        max="2025-12-31"
      />,
    );

    const input = screen.getByLabelText("Birth date");
    expect(input).toHaveAttribute("min", "2025-01-01");
    expect(input).toHaveAttribute("max", "2025-12-31");
  });

  it("should generate an id when none is provided", () => {
    render(<DateInput label="Birth date" defaultValue={fakeDate} />);

    expect(screen.getByLabelText("Birth date").id).toBeTruthy();
  });

  it("should use the provided id", () => {
    render(<DateInput label="Birth date" id="birthdate" />);

    expect(screen.getByLabelText("Birth date").id).toBe("birthdate");
  });

  it("should render the help message and link it to the input", () => {
    render(<DateInput label="Birth date" helpMessage="Format: DD/MM/YYYY" />);

    const input = screen.getByLabelText("Birth date");
    const helpMessage = screen.getByText("Format: DD/MM/YYYY");

    expect(helpMessage).toBeInTheDocument();
    expect(input.getAttribute("aria-describedby")).toContain(helpMessage.id);
  });

  it("should render the error message, link it to the input and mark it invalid", () => {
    render(
      <DateInput label="Birth date" errorMessage="This field is required" />,
    );

    const input = screen.getByLabelText("Birth date");
    const errorMessage = screen.getByText("This field is required");

    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input.getAttribute("aria-describedby")).toContain(errorMessage.id);
  });

  it("should render the content on the right of the input", () => {
    render(<DateInput label="Birth date" contentRight="jours" />);

    expect(screen.getByText("jours")).toBeInTheDocument();
  });

  it("should apply the custom class names", () => {
    render(
      <DateInput
        label="Birth date"
        containerClassName="containerClassName"
        labelClassName="labelClassName"
        inputClassName="inputClassName"
      />,
    );

    const input = screen.getByLabelText("Birth date");
    expect(input).toHaveClass("af-input__input", "inputClassName");

    const label = screen.getByText("Birth date");
    expect(label).toHaveClass("af-label", "labelClassName");
    expect(input.parentElement).toHaveClass("containerClassName");
  });

  it("should forward the ref to the input element", () => {
    const TestWrapper = () => {
      const ref = useRef<HTMLInputElement>(null);
      return <DateInput label="Birth date" ref={ref} />;
    };
    const { container } = render(<TestWrapper />);

    expect(container.querySelector("input")).toBe(
      screen.getByLabelText("Birth date"),
    );
  });

  it("should forward the onChange callback", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<DateInput label="Birth date" onChange={onChange} />);

    await user.type(screen.getByLabelText("Birth date"), "2025-03-28");

    expect(onChange).toHaveBeenCalled();
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <DateInput
        label="Birth date"
        helpMessage="Format: DD/MM/YYYY"
        errorMessage="This field is required"
        value={fakeDate}
        readOnly
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
