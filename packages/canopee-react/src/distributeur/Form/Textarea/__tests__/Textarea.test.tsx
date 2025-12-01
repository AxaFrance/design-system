import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { Textarea } from "../Textarea";

describe("Textarea", () => {
  it("should render children", () => {
    // Act
    render(<Textarea>A textarea</Textarea>);

    // Assert
    expect(screen.getByRole("textbox")).toHaveValue("A textarea");
  });

  it("should have default class", () => {
    // Act
    render(<Textarea>A textarea</Textarea>);

    // Assert
    expect(screen.getByRole("textbox")).toHaveClass("af-form__input-textarea");
  });

  it("should have custom class", () => {
    // Act
    render(<Textarea className="custom-class">A textarea</Textarea>);

    // Assert
    expect(screen.getByRole("textbox")).toHaveClass("custom-class", {
      exact: true,
    });
  });

  it("should have custom class with modifier", () => {
    // Act
    render(
      <Textarea className="custom-class" classModifier="modifier">
        A textarea
      </Textarea>,
    );

    // Assert
    expect(screen.getByRole("textbox")).toHaveClass(
      "custom-class custom-class--modifier",
      {
        exact: true,
      },
    );
  });

  it("should have label", () => {
    // Act
    render(<Textarea aria-label="textarea label">A textarea</Textarea>);

    // Assert
    expect(screen.getByLabelText("textarea label")).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation <Textarea/>", async () => {
    // Act
    const { container } = render(
      <Textarea
        id="id-textarea"
        aria-label="textarea label"
        value="A textarea"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
