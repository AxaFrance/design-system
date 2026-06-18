import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Radio } from "../../Radio/RadioCommon";
import { RadioTextCommon, type RadioTextProps } from "../RadioTextCommon";

describe("RadioText Component", () => {
  const RadioText = (props: RadioTextProps) => (
    <RadioTextCommon {...props} RadioComponent={Radio} />
  );

  it("should render the label correctly", () => {
    render(<RadioText label="Option 1" name="test" value="1" />);

    expect(screen.getByRole("radio", { name: "Option 1" })).toBeInTheDocument();
  });

  it("should handle checked state", () => {
    render(
      <RadioText
        label="Option"
        name="option"
        value="1"
        checked
        onChange={vi.fn()}
      />,
    );

    const radio = screen.getByRole("radio", { name: "Option" });
    expect(radio).toBeChecked();
  });

  it("should apply invalid class when isInvalid is true", () => {
    render(<RadioText label="Option" name="option" value="1" isInvalid />);

    const radio = screen.getByRole("radio", { name: "Option" });
    expect(radio).toHaveClass("af-radio--invalid");
  });

  it("should not apply invalid class when isInvalid is false", () => {
    render(<RadioText label="Option" name="option" value="1" />);

    const radio = screen.getByRole("radio", { name: "Option" });
    expect(radio).not.toHaveClass("af-radio--invalid");
  });

  it("should call onChange when clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <RadioText
        label="Option"
        name="option"
        value="1"
        onChange={handleChange}
      />,
    );

    const radio = screen.getByRole("radio", { name: "Option" });
    await user.click(radio);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should use provided id", () => {
    render(<RadioText label="Option" name="option" value="1" id="custom-id" />);

    const radio = screen.getByRole("radio", { name: "Option" });
    expect(radio).toHaveAttribute("id", "custom-id");
  });

  it("should render ReactNode as label", () => {
    render(
      <RadioText label={<strong>Bold label</strong>} name="option" value="1" />,
    );

    expect(screen.getByText("Bold label")).toBeInTheDocument();
    expect(screen.getByRole("radio")).toBeInTheDocument();
  });
});
