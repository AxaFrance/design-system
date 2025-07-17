import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TextArea } from "../TextAreaLF";

describe("<TextArea />", () => {
  it("should render component with default props", () => {
    render(
      <TextArea
        label="Label"
        value="Lorem Ipsum"
        description="Description"
        helper="Helper"
        buttonLabel="Button label"
        onChange={() => {}}
        error="Error message"
        sideButtonLabel="button"
      />,
    );
    const textLabel = screen.getByText("Label");
    const textAreDescritpion = screen.getByText("Description");
    const textArea = screen.getByText("Lorem Ipsum");
    const input = screen.getByRole("textbox");
    expect(input).toBeInTheDocument();
    expect(textLabel).toBeInTheDocument();
    expect(textAreDescritpion).toBeInTheDocument();
    expect(textArea).toBeInTheDocument();
  });

  describe("A11Y", () => {
    it("shouldn't have an accessibility violation <TextArea />", async () => {
      const { container } = render(
        <TextArea label="Label" helper="Help text" />,
      );
      expect(await axe(container)).toHaveNoViolations();
    });

    it("should set aria-describedby when helper is present", () => {
      render(<TextArea label="Label" helper="Help text" />);

      const input = screen.getByRole("textbox");
      const helper = screen.getByText("Help text");
      expect(input).toHaveAttribute("aria-describedby");
      expect(input.getAttribute("aria-describedby")).toStrictEqual(
        helper.getAttribute("id"),
      );
    });

    it("should set aria-errormessage when error is present", () => {
      render(<TextArea label="Label" error="Error message" />);

      const input = screen.getByRole("textbox");
      const error = screen.getByText("Error message");
      expect(input).toHaveAttribute("aria-errormessage");
      expect(input.getAttribute("aria-errormessage")).toStrictEqual(
        error.parentElement!.getAttribute("id"),
      );
    });

    it("should not set aria-describedby or aria-errormessage when no helper, success, or error", () => {
      render(<TextArea label="Label" />);

      const input = screen.getByRole("textbox");
      expect(input).not.toHaveAttribute("aria-describedby");
      expect(input).not.toHaveAttribute("aria-errormessage");
    });
  });
});
