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
        message="error"
        messageType="error"
        value={testDate}
        onChange={() => {}}
        required
        description="description"
        moreButtonLabel="moreButtonLabel"
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

  it("handles min and max as Date objects", () => {
    render(
      <InputDate
        label="test"
        min={new Date("2024-01-01")}
        max={new Date("2025-01-01")}
      />,
    );

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toHaveAttribute("min", "2024-01-01");
    expect(inputDate).toHaveAttribute("max", "2025-01-01");
  });

  it("handles min and max as string values", () => {
    render(<InputDate label="test" min="2024-01-01" max="2025-01-01" />);

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).toHaveAttribute("min", "2024-01-01");
    expect(inputDate).toHaveAttribute("max", "2025-01-01");
  });

  it("does not set min and max attributes if not provided", () => {
    render(<InputDate label="test" />);

    const inputDate = screen.getByLabelText(/test/);
    expect(inputDate).not.toHaveAttribute("min");
    expect(inputDate).not.toHaveAttribute("max");
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <InputDate />", async () => {
      const { container } = render(<InputDate label="test" />);
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should set aria-describedby when helper is present", () => {
      render(<InputDate label="test" helper="help text" />);

      const input = screen.getByLabelText(/test/);
      expect(input).toHaveAttribute("aria-describedby");

      const helper = screen.getByText("help text");
      expect(input.getAttribute("aria-describedby")).toStrictEqual(
        helper.getAttribute("id"),
      );
    });

    it("should set aria-describedby with two ids when helper and success are present", () => {
      render(
        <InputDate
          label="test"
          helper="help text"
          message="success message"
          messageType="success"
        />,
      );

      const input = screen.getByLabelText(/test/);

      expect(input).toHaveAttribute("aria-describedby");

      const helper = screen.getByText("help text");
      const success = screen.getByText("success message");
      const inputDescribedby = input.getAttribute("aria-describedby");

      expect(inputDescribedby).toStrictEqual(
        `${helper.getAttribute("id")} ${success.parentElement!.getAttribute("id")}`,
      );
    });

    it("should set aria-errormessage when error is present", () => {
      render(
        <InputDate label="test" message="error message" messageType="error" />,
      );

      const input = screen.getByLabelText(/test/);

      expect(input).toHaveAttribute("aria-errormessage");

      const error = screen.getByText("error message");

      expect(input.getAttribute("aria-errormessage")).toStrictEqual(
        error.parentElement!.getAttribute("id"),
      );
    });

    it("should not set aria-describedby or aria-errormessage when no helper, success, or error", () => {
      render(<InputDate label="test" />);
      const input = screen.getByLabelText(/test/);
      expect(input).not.toHaveAttribute("aria-describedby");
      expect(input).not.toHaveAttribute("aria-errormessage");
    });
  });

  it("Should render the date text when hidePicker is true", () => {
    render(
      <InputDate
        label="label date text"
        hidePicker
        helper="Help text"
        message="Success message"
        messageType="success"
      />,
    );

    const input = screen.getByLabelText(/label date text/);
    const helper = screen.getByText(/Help text/);
    const success = screen.getByText(/Success message/);

    expect(input).toHaveAttribute("type", "text");
    expect(input).toHaveAttribute("pattern", "\\d{0,2}/?\\d{0,2}/?\\d{0,4}");
    expect(input).toHaveAttribute("maxlength", "10");
    expect(input).toHaveAttribute("inputMode", "numeric");
    expect(input.getAttribute("aria-describedby")).toStrictEqual(
      `${helper.getAttribute("id")} ${success.parentElement!.getAttribute("id")}`,
    );
  });
});
