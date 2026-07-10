import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { RadioText } from "../RadioText";

describe("RadioText", () => {
  it("should render a radio input with associated label", () => {
    render(<RadioText id="radio1" label="Option 1" name="group" value="1" />);

    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();

    const label = screen.getByText("Option 1");
    expect(label).toBeInTheDocument();
  });

  it("should associate label with radio via htmlFor", () => {
    render(<RadioText id="radio1" label="Option 1" name="group" value="1" />);

    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.id).toBe("radio1");

    const label = screen.getByLabelText("Option 1");
    expect(label).toBe(radio);
  });

  it("should have correct BEM classes", () => {
    render(<RadioText id="radio1" label="Option 1" name="group" value="1" />);

    const labelElement = screen.getByText("Option 1").parentElement;
    expect(labelElement).toHaveClass("af-radio__text");

    const span = screen.getByText("Option 1");
    expect(span).toHaveClass("af-radio__label");
  });

  it("should render ReactNode labels", () => {
    render(
      <RadioText
        id="radio1"
        label={<strong>Bold Option</strong>}
        name="group"
        value="1"
      />,
    );

    const boldElement = screen.getByText("Bold Option");
    expect(boldElement.tagName).toBe("STRONG");
  });

  it("should support disabled state", () => {
    render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        disabled
      />,
    );

    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.disabled).toBe(true);
  });

  it("should support required state", () => {
    render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        required
      />,
    );

    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.required).toBe(true);
  });

  it("should support checked state", () => {
    render(
      <RadioText id="radio1" label="Option 1" name="group" value="1" checked />,
    );

    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("should forward onChange callback", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        onChange={onChange}
      />,
    );

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should trigger onChange when clicking the label", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        onChange={onChange}
      />,
    );

    const label = screen.getByLabelText("Option 1");
    await user.click(label);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should not trigger onChange when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        disabled
        onChange={onChange}
      />,
    );

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should work with multiple radios in same group", () => {
    render(
      <>
        <RadioText id="radio1" label="Option 1" name="group" value="1" />
        <RadioText id="radio2" label="Option 2" name="group" value="2" />
        <RadioText id="radio3" label="Option 3" name="group" value="3" />
      </>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
    expect(radios[0]).toHaveAttribute("value", "1");
    expect(radios[1]).toHaveAttribute("value", "2");
    expect(radios[2]).toHaveAttribute("value", "3");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <RadioText id="radio1" label="Option 1" name="group" value="1" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations when disabled", async () => {
    const { container } = render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        disabled
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations with required", async () => {
    const { container } = render(
      <RadioText
        id="radio1"
        label="Option 1"
        name="group"
        value="1"
        required
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
