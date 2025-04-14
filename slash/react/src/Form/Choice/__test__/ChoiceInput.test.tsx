import { render, screen, within } from "@testing-library/react";
import { axe } from "jest-axe";
import { ChoiceInput } from "../ChoiceInput";

describe("ChoiceInput", () => {
  it("should have label, value and default class", () => {
    // Act
    render(<ChoiceInput id="choix" label="ChoiceInput label" value="true" />);

    // Assert
    expect(screen.getByText("ChoiceInput label")).toHaveClass(
      "af-form__group-label",
    );
    const group = screen.getByRole("radiogroup", {
      name: /choiceinput label/i,
    });

    const oui = within(group).getByRole("radio", { name: "Oui" });
    const non = within(group).getByRole("radio", { name: /non/i });
    expect(oui).toBeChecked();
    expect(oui).toHaveClass("af-form__input-radio");
    expect(non).not.toBeChecked();
    expect(non).toHaveClass("af-form__input-radio");
  });

  it("shouldn't print help message on force display message", () => {
    // Act
    render(
      <ChoiceInput
        label="TextInput label"
        message="Hello message"
        value="true"
        id="choix"
        forceDisplayMessage
      />,
    );

    // Assert
    expect(screen.queryByText("Hello help Message")).not.toBeInTheDocument();
    expect(screen.getByText("Hello message")).toBeInTheDocument();
  });

  it("should change the input container classname", () => {
    // Act
    render(
      <ChoiceInput
        label="ChoiceInput label"
        classNameContainerLabel="labelClassName"
        classNameContainerInput="InputClassName"
        value="true"
        id="choix"
      />,
    );

    // Assert
    expect(screen.getByText("ChoiceInput label").parentElement).toHaveClass(
      "labelClassName",
    );
    expect(
      screen.getByRole("radio", {
        name: /oui/i,
      }).parentElement?.parentElement?.parentElement,
    ).toHaveClass("InputClassName");
  });

  it("shouldn't have an accessibility violation <ChoiceInput/>", async () => {
    // Act
    const { container } = render(
      <ChoiceInput label="TextInput label" value="true" id="choix" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
