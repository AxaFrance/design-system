import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { ItemMessage } from "../../../ItemMessage/ItemMessageCommon";
import { CardRadioOption } from "../../CardRadioOption/CardRadioOptionApollo";
import {
  CardRadioGroupCommon,
  type CardRadioGroupProps,
} from "../CardRadioGroupCommon";

describe("Radio card Component", () => {
  const radioOptions = [
    {
      label: "Paris",
      description: "Capital of France",
      subtitle: "North",
      value: "paris",
      icon: homeIcons,
    },
    {
      label: "Lyon",
      description: "Capital of gastronomy",
      subtitle: "South",
      value: "lyon",
      icon: homeIcons,
    },
  ];
  const CardRadio = (props: CardRadioGroupProps) => (
    <CardRadioGroupCommon
      {...props}
      CardRadioOptionComponent={CardRadioOption}
      ItemMessageComponent={ItemMessage}
    />
  );

  it("should render the Radio card component with label", () => {
    render(<CardRadio options={radioOptions} label="Choose a city" />);

    expect(screen.getByRole("radio", { name: /Paris/ })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /Lyon/ })).toBeInTheDocument();
  });

  it("should call the onChange handler when clicked", async () => {
    const handleChange = vi.fn();
    render(
      <CardRadio
        options={radioOptions}
        label="Choose a city"
        onChange={handleChange}
      />,
    );
    const user = userEvent.setup();

    const radioInput = screen.getByRole("radio", { name: /Paris/ });
    await user.click(radioInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should force the checked state of the radio card", () => {
    render(
      <CardRadio
        type="vertical"
        name="cities"
        label="Choose a city"
        options={[
          {
            label: "Paris",
            value: "paris",
          },
          {
            label: "Lyon",
            value: "lyon",
          },
        ]}
        value="paris"
        onChange={vi.fn()}
      />,
    );

    const parisRadio = screen.getByRole("radio", { name: /Paris/ });
    const lyonRadio = screen.getByRole("radio", { name: /Lyon/ });

    expect(parisRadio).toBeChecked();
    expect(lyonRadio).not.toBeChecked();
  });

  it("should not violate accessibility of the radio card", async () => {
    const { container } = render(
      <CardRadio options={radioOptions} label="Choose a city" />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });

  it("should display error message when error prop is provided", () => {
    render(
      <CardRadio
        options={radioOptions}
        label="Choose a city"
        error="This field is required"
      />,
    );

    const radiogroup = screen.getByRole("radiogroup", {
      name: "Choose a city",
    });
    expect(radiogroup).toHaveAccessibleErrorMessage("This field is required");
    expect(radiogroup).not.toBeValid();
  });

  it("should display description and label when provided", () => {
    render(
      <CardRadio
        options={radioOptions}
        label="Choose a city"
        description="Select your favorite city"
      />,
    );
    expect(screen.getByText("Select your favorite city")).toBeInTheDocument();
    expect(screen.getByText("Choose a city")).toBeInTheDocument();
  });

  it("should display asterisk when required is true", () => {
    render(<CardRadio options={radioOptions} label="Choose a city" required />);
    const radiogroup = screen.getByRole("radiogroup", {
      name: /Choose a city/,
    });

    expect(radiogroup).toContainHTML("*");
    expect(radiogroup).toBeRequired();
  });

  it("should display message with error type by default", () => {
    render(
      <CardRadio
        label="Choose a city"
        options={radioOptions}
        message="Error message"
      />,
    );
    const radiogroup = screen.getByRole("radiogroup", {
      name: "Choose a city",
    });

    expect(radiogroup).not.toBeValid();
    expect(radiogroup).toHaveAccessibleErrorMessage("Error message");
  });
});
