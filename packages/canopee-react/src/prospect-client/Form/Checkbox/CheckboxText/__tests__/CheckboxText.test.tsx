import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ItemMessage } from "../../../ItemMessage/ItemMessageCommon";
import { Checkbox } from "../../Checkbox/CheckboxCommon";
import {
  CheckboxTextCommon,
  type CheckboxTextProps,
} from "../CheckboxTextCommon";

describe("CheckboxText Component", () => {
  const CheckboxText = (props: CheckboxTextProps) => (
    <CheckboxTextCommon
      {...props}
      ItemMessageComponent={ItemMessage}
      CheckboxComponent={Checkbox}
    />
  );

  it("should render the label correctly", () => {
    render(<CheckboxText label="I accept the terms" name="test" value="1" />);

    expect(
      screen.getByRole("checkbox", { name: "I accept the terms" }),
    ).toBeInTheDocument();
  });

  it("should handle checked state", () => {
    render(
      <CheckboxText
        label="Option"
        name="option"
        value="1"
        checked
        onChange={vi.fn()}
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Option" });
    expect(checkbox).toBeChecked();
  });

  it("should display the error message if provided", () => {
    render(
      <CheckboxText
        label="Option"
        name="option"
        value="1"
        errorMessage="Required error"
      />,
    );

    const checkbox = screen.getByRole("checkbox", { name: "Option" });
    expect(checkbox).toHaveAccessibleErrorMessage("Required error");
    expect(checkbox).toBeInvalid();
  });

  it("should call onChange when clicked", async () => {
    const handleChange = vi.fn();
    const user = userEvent.setup();
    render(
      <CheckboxText
        label="Option"
        name="option"
        value="1"
        onChange={handleChange}
      />,
    );
    const checkbox = screen.getByRole("checkbox", { name: "Option" });
    await user.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
