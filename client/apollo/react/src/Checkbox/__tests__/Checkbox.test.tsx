import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check_small.svg";
import userEvent from "@testing-library/user-event";
import { CheckboxCommon } from "../CheckboxCommon";

describe("Checkbox Component", () => {
  it("should render the Checkbox component with label", () => {
    render(<CheckboxCommon checkBoxIcon={checkBoxIcon} label="AXA fr" />);
    const checkbox = screen.getByRole("checkbox");
    const label = screen.getByText("AXA fr");
    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
  });

  it("should checked", async () => {
    render(<CheckboxCommon checkBoxIcon={checkBoxIcon} label="AXA fr" />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("should render the error message", () => {
    render(
      <CheckboxCommon
        checkBoxIcon={checkBoxIcon}
        label="AXA fr"
        errorMessage="this field is required"
      />,
    );
    const errorMessage = screen.getByText("this field is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
