import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { InputText } from "../InputTextLF";

describe("<InputText />", () => {
  describe("render", () => {
    it("renders correctly label only", () => {
      render(<InputText label="foo" />);

      const textinput = screen.getByLabelText("foo");
      expect(textinput).toBeInTheDocument();
    });

    it("renders correctly full", () => {
      render(
        <InputText
          id="id"
          label="foo"
          name="name"
          placeholder="placeholder"
          helper="helper"
          error="error"
          value="value"
          onChange={() => {}}
          required
          buttonLabel="buttonLabel"
          description="description"
          unit="unit"
        />,
      );

      const textinput = screen.getByLabelText(/foo/);
      expect(textinput).toBeInTheDocument();
      expect(textinput).toHaveAccessibleDescription("helper");
      expect(textinput).toHaveProperty("placeholder", "placeholder");
      expect(textinput).toHaveAccessibleErrorMessage("error");
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
    it("shouldn't have an accessibility violation <InputText />", async () => {
      const { container } = render(<InputText label="foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });

    it("should set aria-describedby when helper is present", () => {
      render(<InputText label="foo" helper="Help text" />);

      const input = screen.getByLabelText("foo");
      const helper = screen.getByText("Help text");
      expect(input).toHaveAttribute("aria-describedby");
      expect(input.getAttribute("aria-describedby")).toStrictEqual(
        helper.getAttribute("id"),
      );
    });

    it("should set aria-describedby with two ids when helper and success are present", () => {
      render(
        <InputText label="foo" helper="Help text" success="Success message" />,
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
      render(<InputText label="foo" error="Error message" />);

      const input = screen.getByLabelText("foo");
      const error = screen.getByText("Error message");
      expect(input).toHaveAttribute("aria-errormessage");
      expect(input.getAttribute("aria-errormessage")).toStrictEqual(
        error.parentElement!.getAttribute("id"),
      );
    });

    it("should not set aria-describedby or aria-errormessage when no helper, success, or error", () => {
      render(<InputText label="foo" />);

      const input = screen.getByLabelText("foo");
      expect(input).not.toHaveAttribute("aria-describedby");
      expect(input).not.toHaveAttribute("aria-errormessage");
    });
  });
});
