import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Radio } from "../RadioApollo";

describe("Radio Component", () => {
  it("should render correctly with default props", () => {
    render(<Radio />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeInTheDocument();
    expect(radioInput).toHaveClass("af-radio");
  });

  it("should render as checked when the checked prop is true", () => {
    render(<Radio checked onChange={vi.fn()} />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toBeChecked();
  });

  it("should call the onChange handler when clicked", async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();
    render(<Radio onChange={handleChange} />);

    const radioInput = screen.getByRole("radio");
    await user.click(radioInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should pass additional props to the input element", () => {
    render(<Radio aria-label="custom" />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toHaveAttribute("aria-label", "custom");
  });

  it("should apply custom class names", () => {
    render(<Radio className="custom-class" />);

    const radioInput = screen.getByRole("radio");
    expect(radioInput).toHaveClass("af-radio custom-class");
  });
});
