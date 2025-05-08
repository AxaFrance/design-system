import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { CheckboxText } from "../CheckboxTextApollo";

describe("CheckboxText Component", () => {
  const props = {
    label: "label axa fr",
    inputProps: {
      name: "checkboxTextTest",
      value: "value",
      inputId: "checkboxText-1",
      errorMessage: "",
    },
  };
  it("should render the CheckboxText component with label", () => {
    // Act
    render(<CheckboxText {...props} />);

    // Then
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("label axa fr")).toBeInTheDocument();
  });

  it("should render error when error is provided", () => {
    // Act
    render(<CheckboxText {...props} errorMessage="error field" />);

    // Then
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("label axa fr")).toBeInTheDocument();
    expect(screen.getByText("error field")).toBeInTheDocument();
  });

  it("should check and uncheck CheckboxText", async () => {
    // Act
    render(<CheckboxText {...props} />);
    const checkboxLabel = screen.getByText("label axa fr");
    const checkbox = screen.getByRole("checkbox");

    // Then
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkboxLabel);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkboxLabel);
    expect(checkbox).not.toBeChecked();
  });

  it("should violate accessibility the of CheckboxText", async () => {
    // Act
    const { container } = render(<CheckboxText {...props} />);

    // Then
    expect(await axe(container)).toHaveNoViolations();
  });
});
