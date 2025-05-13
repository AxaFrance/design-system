import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DateInput } from "../DateInputApollo";

describe("<DateInput />", () => {
  const testDate = new Date("2025-01-01");
  it("renders the DateInput component with label only", () => {
    render(<DateInput label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders all props", () => {
    render(
      <DateInput
        id="id"
        label="test"
        name="name"
        error="error"
        value={testDate}
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
    expect(dateInput).toHaveAccessibleErrorMessage("error");
    expect(dateInput).toHaveValue("2025-01-01");
    expect(dateInput).toHaveClass("af-form__input-date");
    expect(dateInput).toHaveAttribute("name", "name");
    expect(dateInput).toHaveAttribute("type", "date");
    expect(dateInput).toBeRequired();
    expect(dateInput).toHaveAttribute("id", "id");
  });

  it("handles a Date object as value correctly", () => {
    render(<DateInput label="test" value={testDate} />);
    const dateInput = screen.getByLabelText(/test/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue("2025-01-01");
  });

  it("handles a string in YYYY-MM-DD format as value correctly", () => {
    render(<DateInput label="test" value="2025-01-01" />);
    const dateInput = screen.getByLabelText(/test/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue("2025-01-01");
  });

  it("displays an empty value when no value is provided", () => {
    render(<DateInput label="test" />);
    const dateInput = screen.getByLabelText(/test/);
    expect(dateInput).toBeInTheDocument();
    expect(dateInput).toHaveValue("");
  });
});

describe("A11Y", () => {
  it("shouldn't have an accessibility violation <DateInput />", async () => {
    const { container } = render(<DateInput label="test" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
