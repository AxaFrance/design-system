import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TextInput } from "../TextInputLF";

describe("<TextInput />", () => {
  describe("render", () => {
    it("renders correctly label only", () => {
      render(<TextInput label="foo" />);

      const textinput = screen.getByLabelText("foo");
      expect(textinput).toBeInTheDocument();
    });

    it("renders correctly full", () => {
      render(
        <TextInput
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
    it("shouldn't have an accessibility violation <TextInput />", async () => {
      const { container } = render(<TextInput label="foo" />);

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
