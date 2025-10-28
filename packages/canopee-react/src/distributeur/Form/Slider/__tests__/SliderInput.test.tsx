import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import { SliderInput } from "../SliderInput";

const options = [
  { label: "64", value: 64 },
  { label: "128", value: 128 },
  { label: "256", value: 256 },
  { label: "1024", value: 1024 },
  { label: "2048", value: 2048 },
  { label: "4096", value: 4096 },
];

describe("Slider", () => {
  it("should have label", () => {
    // Act
    render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    const sliderLabel = screen.getByText("labelSliderInput");
    expect(sliderLabel).toHaveClass("af-form__group-label");
  });

  it("shouldn't print help message on force display message", () => {
    // Act
    render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        helpMessage="Hello help Message"
        message="Hello message"
        forceDisplayMessage
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    expect(screen.queryByText("Hello help Message")).not.toBeInTheDocument();
    expect(screen.getByText("Hello message")).toBeInTheDocument();
  });

  it("should print help message", () => {
    // Act
    render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        helpMessage="Hello help Message"
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    expect(screen.getByText("Hello help Message")).toBeInTheDocument();
  });

  it("should have classname", async () => {
    // Act
    render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        className="classname-slider"
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    const labelSliderInput =
      screen.getByText("labelSliderInput").parentElement?.parentElement;
    expect(labelSliderInput).toHaveClass("row classname-slider", {
      exact: true,
    });
  });

  it("should have classModifier", async () => {
    // Act
    render(
      <SliderInput
        id=""
        label="labelSliderInput"
        classModifier="classname-slider"
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    const labelSliderInput =
      screen.getByText("labelSliderInput").parentElement?.parentElement;
    expect(labelSliderInput).toHaveClass(
      "row af-form__group af-form__group--classname-slider",
      { exact: true },
    );
  });

  it("should not be visible", async () => {
    // Act
    render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        isVisible={false}
        classModifier="classname-slider"
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    const labelSliderInput = screen.queryByText("labelSliderInput");
    expect(labelSliderInput).not.toBeInTheDocument();
  });

  it("should render element right to input", () => {
    // Act
    render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        className="classname-slider"
        name="name-slider-input"
        options={options}
      >
        Content
      </SliderInput>,
    );

    // Assert
    expect(screen.getByText(/content/i)).toBeInTheDocument();
  });

  it("shouldn't have an accesibility violation <SliderInput />", async () => {
    // Act
    const { container } = render(
      <SliderInput
        id="Slider-id"
        label="labelSliderInput"
        ariaLabelForHandle="airaLabelSliderInput"
        classModifier="classname-slider"
        name="name-slider-input"
        options={options}
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
