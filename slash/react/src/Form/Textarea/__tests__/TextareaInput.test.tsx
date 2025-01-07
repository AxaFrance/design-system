import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { TextareaInput } from "../TextareaInput";

describe("TextareaInput", () => {
  it("should have value", () => {
    // Act
    render(
      <TextareaInput label="TextareaInput label" value="A textarea input" />,
    );

    // Assert
    expect(
      screen.getByRole("textbox", { name: /textareainput label/i }),
    ).toHaveValue("A textarea input");
  });

  it("should have default class", () => {
    // Act
    render(
      <TextareaInput
        id="textareainput-id"
        label="TextareaInput label"
        value="A textarea input"
      />,
    );

    // Assert
    expect(
      screen.getByRole("textbox", { name: /textareainput label/i }),
    ).toHaveClass("af-form__input-textarea");
  });

  it("should have label text", () => {
    // Act
    render(
      <TextareaInput id="textareainput-id" label="TextareaInput label">
        A textarea input
      </TextareaInput>,
    );

    // Assert
    expect(screen.getByText("TextareaInput label")).toHaveClass(
      "af-form__group-label",
    );
  });

  it("shouldn't have an accessibility violation <TextareaInput/>", async () => {
    // Act
    const { container } = render(
      <TextareaInput
        id="textareainput-id"
        label="TextareaInput label"
        value="A textarea input"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
