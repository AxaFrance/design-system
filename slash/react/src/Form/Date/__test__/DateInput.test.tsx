import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { DateInput } from "../DateInput";

describe("DateInput", () => {
  const fakeDate = new Date("2025-03-28");

  it("should have label, value and default class", () => {
    // Act
    render(
      <DateInput
        label="DateInput label"
        value={fakeDate}
        data-testid="myElement"
      />,
    );

    // Assert
    expect(screen.getByTestId("myElement")).toHaveClass("af-form__input-date");
    const labelTextInput = screen.getByLabelText("DateInput label");
    expect(labelTextInput).toHaveValue("2025-03-28");
    expect(labelTextInput).toHaveClass("af-form__input-date");
  });

  it("shouldn't print help message on force display message", () => {
    // Act
    render(
      <DateInput
        label="DateInput label"
        helpMessage="Hello help Message"
        message="Hello message"
        value={fakeDate}
        data-testid="myElement"
        forceDisplayMessage
      />,
    );

    // Assert
    expect(screen.queryByText("Hello help Message")).not.toBeInTheDocument();
    expect(screen.getByText("Hello message")).toBeInTheDocument();
  });

  it("should print help message", () => {
    // Act
    render(
      <DateInput
        label="DateInput label"
        helpMessage="Hello help Message"
        value={fakeDate}
        data-testid="myElement"
      />,
    );

    // Assert
    expect(screen.getByText("Hello help Message")).toBeInTheDocument();
  });

  it("should change the input container classname", () => {
    // Act
    render(
      <DateInput
        label="DateInput label"
        classNameContainerLabel="labelClassName"
        classNameContainerInput="InputClassName"
        value={fakeDate}
        data-testid="myElement"
      />,
    );

    // Assert
    expect(screen.getByText("DateInput label").parentElement).toHaveClass(
      "labelClassName",
    );
    expect(
      screen.getByLabelText("DateInput label").parentElement?.parentElement,
    ).toHaveClass("InputClassName");
  });

  it("shouldn't have an accessibility violation <DateInput/>", async () => {
    // Act
    const { container } = render(
      <DateInput
        label="DateInput label"
        value={fakeDate}
        data-testid="myElement"
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
