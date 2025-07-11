import { render, screen } from "@testing-library/react";
import { InputError } from "../InputError";

describe("InputError", () => {
  it("renders the error message", () => {
    const message = "This is an error message";
    render(<InputError message={message} />);

    const errorMessage = screen.getByText(message);
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveAttribute("aria-live", "assertive");
  });

  it("renders with an optional id", () => {
    const message = "This is an error message";
    const id = "error-id";
    render(<InputError message={message} id={id} />);

    const errorMessage = screen.getByText(message);
    expect(errorMessage).toHaveAttribute("id", id);
  });
});
