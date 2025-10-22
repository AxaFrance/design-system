import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { InputDateText } from "../InputDateTextLF";

describe("<InputDateText />", () => {
  describe("render", () => {
    it("renders correctly label only", () => {
      render(<InputDateText label="foo" />);

      const textinput = screen.getByLabelText("foo");

      expect(textinput).toBeInTheDocument();
    });

    it("renders correctly full", () => {
      render(
        <InputDateText
          id="id"
          label="foo"
          name="name"
          placeholder="placeholder"
          helper="helper"
          value="value"
          onChange={() => {}}
          required
          buttonLabel="buttonLabel"
          description="description"
          unit="unit"
          message="message"
          messageType="error"
        />,
      );

      const textinput = screen.getByLabelText(/foo/);

      expect(textinput).toBeInTheDocument();
      expect(textinput).toHaveAccessibleDescription("helper message");
      expect(textinput).toHaveProperty("placeholder", "placeholder");
      expect(textinput).toHaveAccessibleErrorMessage("message");
      expect(textinput).toHaveValue("value");
      expect(textinput).toHaveClass("af-form__input-text");
      expect(textinput).toHaveAttribute("name", "name");
      expect(textinput).toHaveAttribute("type", "text");
      expect(textinput).toBeRequired();
      expect(textinput).toHaveAttribute("id", "id");
      screen.getByRole("button", { name: "buttonLabel" });
      screen.getByText("description");
      screen.getByText("unit");
    });
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <InputDateText />", async () => {
      const { container } = render(<InputDateText label="foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it("should set aria-describedby when helper is present", () => {
      render(<InputDateText label="foo" helper="Help text" />);

      const input = screen.getByLabelText("foo");
      const helper = screen.getByText("Help text");

      expect(input).toHaveAttribute("aria-describedby");
      expect(input.getAttribute("aria-describedby")).toStrictEqual(
        helper.getAttribute("id"),
      );
    });

    it("should set aria-describedby with two ids when helper and success are present", () => {
      render(
        <InputDateText
          label="foo"
          helper="Help text"
          message="Success message"
          messageType="success"
        />,
      );

      const input = screen.getByLabelText("foo");
      const helper = screen.getByText("Help text");
      const success = screen.getByText("Success message");

      expect(input).toHaveAttribute("aria-describedby");
      expect(input.getAttribute("aria-describedby")).toStrictEqual(
        `${helper.getAttribute("id")} ${success.parentElement!.getAttribute("id")}`,
      );
    });

    it("should set aria-errormessage when error is present", () => {
      render(<InputDateText label="foo" message="Error message" />);

      const input = screen.getByLabelText("foo");
      const error = screen.getByText("Error message");

      expect(input).toHaveAttribute("aria-errormessage");
      expect(input.getAttribute("aria-errormessage")).toStrictEqual(
        error.parentElement!.getAttribute("id"),
      );
    });

    it("should not set aria-describedby or aria-errormessage when no helper, no message", () => {
      render(<InputDateText label="foo" />);

      const input = screen.getByLabelText("foo");

      expect(input).not.toHaveAttribute("aria-describedby");
      expect(input).not.toHaveAttribute("aria-errormessage");
    });
  });
});
