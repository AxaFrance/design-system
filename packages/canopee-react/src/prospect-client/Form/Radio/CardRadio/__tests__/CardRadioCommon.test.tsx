import { render, screen } from "@testing-library/react";
import type { ComponentProps } from "react";
import { Radio } from "../../Radio/RadioCommon";
import { CardRadioCommon } from "../CardRadioCommon";

const MockIconComponent = (props: ComponentProps<"svg">) => (
  <svg data-testid="mock-icon" {...props} />
);

describe("CardRadioCommon", () => {
  it("should render the label", () => {
    render(
      <CardRadioCommon
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
      <CardRadioCommon
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
      <CardRadioCommon
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
      <CardRadioCommon
        label="Label"
        icon="icon-src"
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    expect(screen.getByTestId("mock-icon")).toBeInTheDocument();
  });

  it("should render the image if src is provided", () => {
    render(
      <CardRadioCommon
        label="Label"
        position="horizontal"
        src="image-src"
        basePictureProps={{ alt: "Test Image" }}
        RadioComponent={Radio}
        IconComponent={MockIconComponent}
        name="test"
      />,
    );

    const img = screen.getByAltText("Test Image");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "image-src");
  });

  it("should render the RadioComponent with the correct props", () => {
    render(
      <CardRadioCommon
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
