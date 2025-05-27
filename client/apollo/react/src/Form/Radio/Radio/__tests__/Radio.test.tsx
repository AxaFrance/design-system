import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Radio } from "../RadioApollo";

describe("Radio Component", () => {
  it("renders correctly with default props", () => {
    render(<Radio />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeInTheDocument();
  });

  it("renders as checked when the checked prop is true", () => {
    render(<Radio checked />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeChecked();
  });

  it("calls the onChange handler when clicked", () => {
    const handleChange = vi.fn();
    render(<Radio onChange={handleChange} />);

    const radioInput = screen.getByRole("radio");
    radioInput.click();

    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});
