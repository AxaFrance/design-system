import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { InputDate } from "../InputDateApollo";

describe("<InputDate />", () => {
  const testDate = new Date("2025-01-01");
  it("renders the InputDate component with label only", () => {
    render(<InputDate label="Test Label" />);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("renders all props", () => {
    render(
      <InputDate
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

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveAccessibleDescription("helper");
    expect(inputDate).toHaveAccessibleErrorMessage("error");
    expect(inputDate).toHaveValue("2025-01-01");
    expect(inputDate).toHaveClass("af-form__input-date");
    expect(inputDate).toHaveAttribute("name", "name");
    expect(inputDate).toHaveAttribute("type", "date");
    expect(inputDate).toBeRequired();
    expect(inputDate).toHaveAttribute("id", "id");
  });

  it("handles a Date object as value correctly", () => {
    render(<InputDate label="test" value={testDate} />);
    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveValue("2025-01-01");
  });

  it("handles a string in YYYY-MM-DD format as value correctly", () => {
    render(<InputDate label="test" value="2025-01-01" />);
    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveValue("2025-01-01");
  });

  it("displays an empty value when no value is provided", () => {
    render(<InputDate label="test" />);
    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toBeInTheDocument();
    expect(inputDate).toHaveValue("");
  });
});

describe("A11Y", () => {
  it("shouldn't have an accessibility violation <InputDate />", async () => {
    const { container } = render(<InputDate label="test" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
