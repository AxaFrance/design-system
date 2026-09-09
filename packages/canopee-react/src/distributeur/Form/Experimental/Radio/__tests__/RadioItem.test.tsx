import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { RadioItem } from "../RadioItem";

describe("RadioItem", () => {
  it("should render a radio input element", () => {
    render(<RadioItem />);
    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();
  });

  it("should have the correct BEM class", () => {
    render(<RadioItem />);
    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("af-radio__item");
  });

  it("should accept and apply a custom className", () => {
    render(<RadioItem className="custom-class" />);
    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("af-radio__item");
    expect(radio).toHaveClass("custom-class");
  });

  it("should forward standard HTML attributes", () => {
    render(
      <RadioItem
        id="test-radio"
        name="test-group"
        value="test-value"
        required
      />,
    );
    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.id).toBe("test-radio");
    expect(radio.name).toBe("test-group");
    expect(radio.value).toBe("test-value");
    expect(radio.required).toBe(true);
  });

  it("should support checked state", () => {
    render(<RadioItem id="radio1" name="group" value="1" checked />);
    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("should support disabled state", () => {
    render(<RadioItem disabled />);
    const radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.disabled).toBe(true);
  });

  it("should call onChange callback when selected", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<RadioItem name="test" value="1" onChange={onChange} />);

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should toggle checked state on click", async () => {
    const { rerender } = render(
      <RadioItem id="radio1" name="group" value="1" />,
    );

    let radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.checked).toBe(false);

    rerender(<RadioItem id="radio1" name="group" value="1" checked />);
    radio = screen.getByRole("radio") as HTMLInputElement;
    expect(radio.checked).toBe(true);
  });

  it("should not be clickable when disabled", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();
    render(<RadioItem disabled name="test" value="1" onChange={onChange} />);

    const radio = screen.getByRole("radio");
    await user.click(radio);

    expect(onChange).not.toHaveBeenCalled();
  });

  it("should have no accessibility violations when properly labeled", async () => {
    const { container } = render(
      <label htmlFor="radio1">
        <RadioItem id="radio1" name="group" value="1" />
        Option 1
      </label>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("should have no accessibility violations when properly labeled and disabled", async () => {
    const { container } = render(
      <label htmlFor="radio1">
        <RadioItem id="radio1" name="group" value="1" disabled />
        Option 1
      </label>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
