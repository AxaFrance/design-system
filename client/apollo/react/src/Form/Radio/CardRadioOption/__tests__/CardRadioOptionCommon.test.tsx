import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { Radio } from "../../Radio/RadioCommon";
import { CardRadioOptionCommon } from "../CardRadioOptionCommon";

const MockIconComponent = (props: ComponentProps<"svg">) => (
  <svg data-testid="mock-icon" {...props} />
);

describe("CardRadioOptionCommon", () => {
  it("should render the label", () => {
    render(
      <CardRadioOptionCommon
        label="Test Label"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("should render the description if provided", () => {
    render(
      <CardRadioOptionCommon
        label="Label"
        description="Test Description"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should render the subtitle if provided", () => {
    render(
      <CardRadioOptionCommon
        label="Label"
        subtitle="Test Subtitle"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("should render the icon if provided", () => {
    render(
      <CardRadioOptionCommon
        label="Label"
        icon="icon-src"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should apply the invalid class if isInvalid is true", () => {
    render(
      <CardRadioOptionCommon
        label="Label"
        isInvalid
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    const radio = screen.getByRole("radio");
    expect(radio).toHaveClass("af-card-radio-option");
    expect(radio).toHaveClass("af-card-radio-option--invalid");
  });

  it("should apply the horizontal class if type is horizontal", () => {
    render(
      <CardRadioOptionCommon
        label="Label"
        type="horizontal"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    expect(screen.getByRole("radio")).toHaveClass(
      "af-card-radio-option--horizontal",
    );
  });

  it("should render the RadioComponent with the correct props", () => {
    render(
      <CardRadioOptionCommon
        label="Label"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
        value="radio-value"
        isInvalid
      />,
    );

    const radio = screen.getByRole("radio");
    expect(radio).toBeInTheDocument();
    expect(radio).toHaveAttribute("name", "test");
    expect(radio).toHaveAttribute("value", "radio-value");
  });
});
