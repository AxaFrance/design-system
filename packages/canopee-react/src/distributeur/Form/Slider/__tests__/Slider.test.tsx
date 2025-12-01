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

const mockFn = vi.fn();

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

  it("should value 64 have active class", () => {
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

  it("should have default value 256", () => {
    let valueSlider: number = 256;
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        options={options}
        defaultValue={valueSlider}
        onChange={({ value }) => {
          valueSlider = value;
        }}
      />,
    );

    // Assert
    sliderIsActive("64");
    sliderIsActive("128");
    sliderIsActive("256");
    sliderIsNotActive("1024");
    sliderIsNotActive("2048");
    sliderIsNotActive("4096");
  });

  it("should have active class until 2048 value", async () => {
    const valueSlider: number = 1024;
    // Act
    render(
      <Slider
        id="slider-id"
        name="slider-name"
        defaultValue={valueSlider}
        options={options}
        onChange={() => mockFn()}
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
        onChange={() => mockFn()}
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
        onChange={() => mockFn()}
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
        onChange={() => mockFn()}
      />,
    );

    // Assert
    const ariaLabelHandle = screen.getByLabelText("aria-label-handle");
    expect(ariaLabelHandle).toBeInTheDocument();
  });

  it("shouldn't have an accesibility violation <Slider /> with onChangeComplete props", async () => {
    // Act
    const { container } = render(
      <Slider
        id="slider-id"
        name="slider-name"
        ariaLabelForHandle="slider-label"
        options={optionsWithoutLabel}
        onChangeComplete={(selectedValue: {
          id: string;
          name: string;
          value: number;
        }) => {
          mockFn(selectedValue);
        }}
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });

  it("shouldn't have an accesibility violation <Slider />", async () => {
    // Act
    const { container } = render(
      <Slider
        id="slider-id"
        name="slider-name"
        ariaLabelForHandle="slider-label"
        options={optionsWithoutLabel}
        onChange={() => mockFn()}
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });
});
