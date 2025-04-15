import { render, screen } from "@testing-library/react";
import { DateInput } from "../DateInputApollo";

describe("<DateInput />", () => {
  it("renders the DateInput component with label only", () => {
    render(<DateInput label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders fully", () => {
    render(
      <DateInput
        id="id"
        label="test"
        name="name"
        placeholder="placeholder"
        error="error"
        value="01/01/2025"
        onChange={() => {}}
        required
        description="description"
        buttonLabel="buttonLabel"
        helper="helper"
      />,
    );

    const dateInput = screen.getByLabelText(/test/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveAccessibleDescription("helper");
    expect(dateInput).toHaveProperty("placeholder", "placeholder");
    expect(dateInput).toHaveAccessibleErrorMessage("error");
    expect(dateInput).toHaveValue("01/01/2025");
    expect(dateInput).toHaveClass("af-form__input-date");
    expect(dateInput).toHaveAttribute("name", "name");
    expect(dateInput).toHaveAttribute("type", "text");
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("id", "id");
  });

  it("renders with a date picker and value is a Date object", () => {
    render(
      <DateInput
        label="test"
        hideDatePicker={false}
        value={new Date("2025-01-01")}
      />,
    );
    const dateInput = screen.getByLabelText(/test/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue("2025-01-01");
  });

  it("renders without a date picker and value is a Date object", () => {
    render(<DateInput label="test" value={new Date("2025-01-01")} />);
    const dateInput = screen.getByLabelText(/test/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue("01/01/2025");
  });
});
