import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import checkBoxIcon from "@material-symbols/svg-400/outlined/check_small.svg";
import userEvent from "@testing-library/user-event";
import { CheckboxCommon } from "../CheckboxCommon";

describe("CheckboxCommon Component", () => {
  it("should render the CheckboxCommon component with label", () => {
    render(<CheckboxCommon checkBoxIcon={checkBoxIcon} />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeInTheDocument();
  });

  it("should checked", async () => {
    render(<CheckboxCommon checkBoxIcon={checkBoxIcon} />);
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
        errorMessage="this field is required"
      />,
    );
    const errorMessage = screen.getByText("this field is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
