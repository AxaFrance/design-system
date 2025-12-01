import { render, screen } from "@testing-library/react";
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

  it("should render the subtitle if provided", () => {
    render(
      <CardCheckboxOption label="Label" subtitle="Test Subtitle" name="test" />,
    );
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
  });
});
