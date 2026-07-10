import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { RadioButton } from "../RadioButton";

describe("RadioButton", () => {
  it("should render a radio input with button-style wrapper", () => {
    render(<RadioButton id="btn1" name="group" value="1" label="Button 1" />);

    const radio = screen.getByRole("radio", { name: "Button 1" });
    expect(radio).toBeInTheDocument();

    const label = screen.getByText("Button 1");
    expect(label).toBeInTheDocument();
  });

  it("should have button BEM class on label", () => {
    render(<RadioButton id="btn1" name="group" value="1" label="Button 1" />);

    const label = screen.getByText("Button 1").closest("label");
    expect(label).toHaveClass("af-radio__button");
  });

  it("should associate label with radio via htmlFor", () => {
    render(<RadioButton id="btn1" name="group" value="1" label="Button 1" />);

    const radio = screen.getByRole("radio", { name: "Button 1" });
    expect(radio.id).toBe("btn1");

    const label = screen.getByLabelText("Button 1");
    expect(label).toBe(radio);
  });

  it("should forward radio input attributes", () => {
    render(
      <RadioButton
        id="btn1"
        name="test-group"
        value="test-value"
        label="Button 1"
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Button 1",
    }) as HTMLInputElement;
    expect(radio.id).toBe("btn1");
    expect(radio.name).toBe("test-group");
    expect(radio.value).toBe("test-value");
  });

  it("should support checked state", () => {
    render(
      <RadioButton id="btn1" name="group" value="1" label="Button 1" checked />,
    );

    const radio = screen.getByRole("radio", {
      name: "Button 1",
    }) as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("should support disabled state", () => {
    render(
      <RadioButton
        id="btn1"
        name="group"
        value="1"
        label="Button 1"
        disabled
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Button 1",
    }) as HTMLInputElement;
    expect(radio.disabled).toBe(true);
  });

  it("should call onChange callback when selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioButton
        id="btn1"
        name="group"
        value="1"
        label="Button 1"
        onChange={onChange}
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Button 1",
    });
    await user.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should trigger onChange when clicking the label", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioButton
        id="btn1"
        name="group"
        value="1"
        label="Button 1"
        onChange={onChange}
      />,
    );

    const label = screen.getByLabelText("Button 1");
    await user.click(label);

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("should not trigger onChange when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <RadioButton
        id="btn1"
        name="group"
        value="1"
        label="Button 1"
        disabled
        onChange={onChange}
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Button 1",
    });
    await user.click(radio);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should work with multiple buttons in same group", () => {
    render(
      <>
        <RadioButton id="btn1" name="group" value="1" label="Button 1" />
        <RadioButton id="btn2" name="group" value="2" label="Button 2" />
        <RadioButton id="btn3" name="group" value="3" label="Button 3" />
      </>,
    );

    const radios = screen.getAllByRole("radio");
    expect(radios).toHaveLength(3);
    expect(radios[0]).toHaveAttribute("value", "1");
    expect(radios[1]).toHaveAttribute("value", "2");
    expect(radios[2]).toHaveAttribute("value", "3");
  });

  it("should support additional HTML attributes", () => {
    render(
      <RadioButton
        id="btn1"
        name="group"
        value="1"
        label="Button 1"
        required
        data-testid="custom-attr"
      />,
    );

    const radio = screen.getByRole("radio", {
      name: "Button 1",
    }) as HTMLInputElement;
    expect(radio.required).toBe(true);
    expect(radio).toHaveAttribute("data-testid", "custom-attr");
  });

  it("should have no accessibility violations", async () => {
    const { container } = render(
      <RadioButton id="btn1" name="group" value="1" label="Button 1" />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations when disabled", async () => {
    const { container } = render(
      <RadioButton
        id="btn1"
        name="group"
        value="1"
        label="Button 1"
        disabled
      />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations when checked", async () => {
    const { container } = render(
      <RadioButton id="btn1" name="group" value="1" label="Button 1" checked />,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
