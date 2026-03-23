import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import userEvent from "@testing-library/user-event";
import { Icon } from "../../../../Icon/IconCommon";
import { Checkbox } from "../../Checkbox/CheckboxCommon";
import {
  CardCheckboxOptionCommon,
  type CardCheckboxOptionProps,
} from "../CardCheckboxOptionCommon";

const CardCheckboxOption = (props: CardCheckboxOptionProps) => (
  <CardCheckboxOptionCommon
    {...props}
    CheckboxComponent={Checkbox}
    IconComponent={Icon}
  />
);

describe("CardCheckboxOptionCommon", () => {
  it("should render the label", () => {
    render(<CardCheckboxOption label="Test Label" name="test" />);

    expect(
      screen.getByRole("checkbox", { name: "Test Label" }),
    ).toBeInTheDocument();
  });

  it("should render the description if provided", () => {
    render(
      <CardCheckboxOption
        label="Label"
        description="Test Description"
        name="test"
      />,
    );
    expect(screen.getByText("Test Description")).toBeInTheDocument();
  });

  it("should not render the description if not provided", () => {
    const { container } = render(
      <CardCheckboxOption label="Label" name="test" />,
    );
    expect(
      container.querySelector(".af-card-checkbox-option__description"),
    ).not.toBeInTheDocument();
  });

  it("should render the subtitle if provided", () => {
    render(
      <CardCheckboxOption label="Label" subtitle="Test Subtitle" name="test" />,
    );
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });

  it("should not render the subtitle if not provided", () => {
    const { container } = render(
      <CardCheckboxOption label="Label" name="test" />,
    );
    expect(
      container.querySelector(".af-card-checkbox-option__subtitle"),
    ).not.toBeInTheDocument();
  });

  it("should render an icon when icon prop is provided", () => {
    render(<CardCheckboxOption label="Label" icon="check" name="test" />);
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("should not render an icon when icon prop is not provided", () => {
    render(<CardCheckboxOption label="Label" name="test" />);
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
  });

  it("should apply horizontal class when type is horizontal", () => {
    const { container } = render(
      <CardCheckboxOption label="Label" type="horizontal" name="test" />,
    );
    expect(container.firstChild).toHaveClass(
      "af-card-checkbox-option--horizontal",
    );
  });

  it("should not apply horizontal class when type is vertical", () => {
    const { container } = render(
      <CardCheckboxOption label="Label" type="vertical" name="test" />,
    );
    expect(container.firstChild).not.toHaveClass(
      "af-card-checkbox-option--horizontal",
    );
  });

  it("should merge custom className", () => {
    const { container } = render(
      <CardCheckboxOption label="Label" className="custom" name="test" />,
    );
    expect(container.firstChild).toHaveClass("af-card-checkbox-option");
    expect(container.firstChild).toHaveClass("custom");
  });

  it("should forward ref to the input element", () => {
    const ref = createRef<HTMLInputElement>();
    render(
      <CardCheckboxOptionCommon
        ref={ref}
        label="Label"
        name="test"
        CheckboxComponent={Checkbox}
        IconComponent={Icon}
      />,
    );
    expect(ref.current).toBeInstanceOf(HTMLInputElement);
    expect(ref.current?.type).toBe("checkbox");
  });

  it("should toggle checked state on click", async () => {
    const user = userEvent.setup();
    render(<CardCheckboxOption label="Label" name="test" />);

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).not.toBeChecked();

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("should pass input props to the checkbox", () => {
    render(
      <CardCheckboxOption
        label="Label"
        name="test"
        defaultChecked
        aria-describedby="help-text"
      />,
    );
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
    expect(checkbox).toHaveAttribute("aria-describedby", "help-text");
  });
});
