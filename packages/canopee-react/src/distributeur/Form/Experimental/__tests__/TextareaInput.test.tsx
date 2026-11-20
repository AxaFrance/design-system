import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { createRef, useState } from "react";
import { describe, expect, it } from "vitest";
import { TextareaInput } from "../TextareaInput";

describe("TextareaInput", () => {
  it("forwards the ref and native multiline attributes to the textarea", () => {
    const ref = createRef<HTMLTextAreaElement>();

    render(
      <TextareaInput
        ref={ref}
        id="notes"
        name="notes"
        label="Notes"
        rows={5}
        cols={40}
        maxLength={100}
        readOnly
        defaultValue={"First line\nSecond line"}
      />,
    );

    const textarea = screen.getByRole("textbox", { name: "Notes" });
    expect(textarea).toBeInstanceOf(HTMLTextAreaElement);
    expect(ref.current).toBe(textarea);
    expect(textarea).toHaveAttribute("id", "notes");
    expect(textarea).toHaveAttribute("name", "notes");
    expect(textarea).toHaveAttribute("rows", "5");
    expect(textarea).toHaveAttribute("cols", "40");
    expect(textarea).toHaveAttribute("maxlength", "100");
    expect(textarea).toHaveAttribute("readonly");
    expect(textarea).toHaveValue("First line\nSecond line");
  });

  it("combines external, help and error descriptions without masking the error state", async () => {
    const { container } = render(
      <>
        <p id="external-hint">Visible to your team.</p>
        <TextareaInput
          label="Notes"
          helpMessage="Keep it brief."
          errorMessage="Too many characters."
          aria-describedby="external-hint"
          aria-invalid={false}
        />
      </>,
    );

    const textarea = screen.getByRole("textbox", { name: "Notes" });
    expect(textarea).toHaveAccessibleDescription(
      "Visible to your team. Too many characters. Keep it brief.",
    );
    expect(textarea).toHaveAttribute("aria-invalid", "true");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("preserves native ARIA attributes when there is no internal error message", () => {
    render(
      <TextareaInput
        label="Notes"
        aria-label="Private notes"
        aria-invalid="spelling"
      />,
    );

    const textarea = screen.getByRole("textbox", { name: "Private notes" });
    expect(textarea).toHaveAttribute("aria-invalid", "spelling");
    expect(textarea).not.toHaveAttribute("aria-describedby");
  });

  it("aligns the label to the top left by default and supports custom classes and a unit", () => {
    render(
      <TextareaInput
        label="Notes"
        className="native-class"
        inputClassName="field-class"
        labelClassName="label-class"
        containerClassName="container-class"
        contentRight="characters"
      />,
    );

    const textarea = screen.getByRole("textbox", { name: "Notes" });
    expect(textarea).toHaveClass(
      "af-input__input",
      "af-input__textarea",
      "native-class",
      "field-class",
    );
    expect(textarea.parentElement).toHaveClass("container-class");
    expect(textarea.parentElement).not.toHaveClass(
      "af-input__container--vertical",
    );
    expect(screen.getByText("Notes")).toHaveClass(
      "af-label--top-left",
      "label-class",
    );
    expect(screen.getByText("characters")).toHaveClass("af-input__unit");
  });

  it.each([
    ["centerLeft", false],
    ["above", true],
  ] as const)("supports the %s label position", (labelPosition, vertical) => {
    render(<TextareaInput label="Notes" labelPosition={labelPosition} />);

    const textarea = screen.getByRole("textbox", { name: "Notes" });
    expect(
      textarea.parentElement?.classList.contains(
        "af-input__container--vertical",
      ),
    ).toBe(vertical);
    expect(screen.getByText("Notes")).not.toHaveClass("af-label--top-left");
  });

  it("enforces native required validation and supports controlled multiline typing", async () => {
    const user = userEvent.setup();

    const ControlledTextarea = () => {
      const [value, setValue] = useState("");

      return (
        <TextareaInput
          label="Notes"
          required
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
      );
    };

    render(<ControlledTextarea />);

    const textarea = screen.getByRole("textbox", { name: "Notes" });
    expect(textarea).toHaveAttribute("required");
    expect(textarea).toBeInvalid();

    await user.type(textarea, "First line{Enter}Second line");

    expect(textarea).toHaveValue("First line\nSecond line");
    expect(textarea).toBeValid();
  });
});
