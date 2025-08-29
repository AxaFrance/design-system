import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Choice } from "../Choice";

describe("Choice", () => {
  it("should have value and default class", () => {
    // Act
    render(<Choice value="true" id="choix" />);

    // Assert
    const choiceFirstContent = screen.getAllByRole("radio")[0];
    expect(choiceFirstContent).toBeChecked();
    expect(choiceFirstContent).toHaveClass("af-form__input-radio");

    const choiceSecondContent = screen.getAllByRole("radio")[1];
    expect(choiceSecondContent).not.toBeChecked();
    expect(choiceSecondContent).toHaveClass("af-form__input-radio");
  });

  it("should have custom class modifier", () => {
    // Act
    render(<Choice value="true" id="choix" classModifier="custom-class" />);

    // Assert
    expect(screen.getAllByRole("radio")[0].parentElement).toHaveClass(
      "af-form__radio-custom af-form__radio-custom--custom-class",
      {
        exact: true,
      },
    );
  });

  it("should be required", () => {
    // Act
    render(<Choice value="true" id="choix" required />);

    // Assert
    expect(screen.getAllByRole("radio")[0]).toBeRequired();
  });

  it("shouldn't have an accesibility violation <Choice />", async () => {
    // Act
    const { container } = render(
      <Choice value="true" id="choix" aria-label="textLabel" />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
