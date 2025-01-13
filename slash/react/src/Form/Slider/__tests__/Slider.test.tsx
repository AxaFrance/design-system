import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent, { UserEvent } from "@testing-library/user-event";
import { Slider } from "../Slider";

const options = [
  { label: "64", value: 64 },
  { label: "128", value: 128 },
  { label: "256", value: 256 },
  { label: "1024", value: 1024 },
  { label: "2048", value: 2048 },
  { label: "4096", value: 4096 },
];

const optionsWithoutLabel = [
  { value: 64 },
  { value: 128 },
  { value: 256 },
  { value: 1024 },
  { value: 2048 },
  { value: 4096 },
];

const sliderIsActive = (value: string) => {
  expect(screen.getByText(value)).toHaveClass(
    "rc-slider-mark-text rc-slider-mark-text-active",
    {
      exact: true,
    },
  );
};

const sliderIsNotActive = (value: string) => {
  expect(screen.getByText(value)).toHaveClass("rc-slider-mark-text", {
    exact: true,
  });
};

describe("Slider", () => {
  let user: UserEvent;
  beforeEach(() => {
    user = userEvent.setup();
  });

  it("should have active class to default value 64", () => {
    let valueSlider: number = 64;
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        options={options}
        value={valueSlider}
        onChange={({ value }) => {
          valueSlider = value;
        }}
      />,
    );

    // Assert
    sliderIsActive("64");
    sliderIsNotActive("128");
    sliderIsNotActive("256");
    sliderIsNotActive("1024");
    sliderIsNotActive("2048");
    sliderIsNotActive("4096");
  });

  it("should have active class until 2048 value", async () => {
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        options={options}
        onChange={() => console.log("some change")}
      />,
    );

    const selectValueSlider = screen.getByText("1024");
    await user.click(selectValueSlider);

    // Assert
    sliderIsActive("64");
    sliderIsActive("128");
    sliderIsActive("256");
    sliderIsActive("1024");
    sliderIsNotActive("2048");
    sliderIsNotActive("4096");
  });

  it("should be disabled with classModifier", async () => {
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        value={256}
        options={options}
        onChange={() => console.log("some change")}
        classModifier="disabled"
      />,
    );

    const selectValueSlider = screen.getByText("1024");
    await user.click(selectValueSlider);

    // Assert
    sliderIsActive("64");
    sliderIsActive("128");
    sliderIsActive("256");
    sliderIsNotActive("1024");
    sliderIsNotActive("2048");
    sliderIsNotActive("4096");
  });

  it("should be disabled with props", async () => {
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        value={256}
        options={options}
        onChange={() => console.log("some change")}
        disabled
      />,
    );

    const selectValueSlider = screen.getByText("1024");
    await user.click(selectValueSlider);

    // Assert
    sliderIsActive("64");
    sliderIsActive("128");
    sliderIsActive("256");
    sliderIsNotActive("1024");
    sliderIsNotActive("2048");
    sliderIsNotActive("4096");
  });

  it("should have aria label handle", async () => {
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        defaultValue={256}
        ariaLabelForHandle="aria-label-handle"
        options={options}
        onChange={() => console.log("some change")}
      />,
    );

    // Assert
    const ariaLabelHandle = screen.getByLabelText("aria-label-handle");
    expect(ariaLabelHandle).toBeInTheDocument();
  });

  it("should have options without label", async () => {
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        options={optionsWithoutLabel}
        onChange={() => console.log("some change")}
      />,
    );

    const selectValueSlider = screen.getByText("1024");
    await user.click(selectValueSlider);

    // Assert
    sliderIsActive("64");
    sliderIsActive("128");
    sliderIsActive("256");
    sliderIsActive("1024");
    sliderIsNotActive("2048");
    sliderIsNotActive("4096");
  });

  it("shouldn't have an accesibility violation <Slider />", async () => {
    // Act
    const { container } = render(
      <Slider
        id="slider-id"
        name="slider-name"
        ariaLabelForHandle="slider-label"
        options={optionsWithoutLabel}
        onChange={() => console.log("some change")}
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
