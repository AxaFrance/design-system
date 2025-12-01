import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import { Icon } from "../../../../Icon/IconCommon";
import { ItemMessage } from "../../../ItemMessage/ItemMessageCommon";
import {
  CardCheckboxOptionCommon,
  type CardCheckboxOptionProps,
} from "../../CardCheckboxOption/CardCheckboxOptionCommon";
import { Checkbox } from "../../Checkbox/CheckboxCommon";
import {
  CardCheckboxCommon,
  type CardCheckboxProps,
} from "../CardCheckboxCommon";

const CardCheckboxOption = (props: CardCheckboxOptionProps) => (
  <CardCheckboxOptionCommon
    {...props}
    CheckboxComponent={Checkbox}
    IconComponent={Icon}
  />
);

// eslint-disable-next-line react/no-multi-comp
const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    CardCheckboxItemComponent={CardCheckboxOption}
    ItemMessageComponent={ItemMessage}
  />
);

describe("CardCheckbox", () => {
  const defaultArgs = {
    label: "Quelle ville ?",
    description: "Choisissez une ville",
    name: "ville",
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        value: "paris",
        icon: homeIcons,
      },
      {
        label: "Londres",
        description: "Capitale du Royaume-Uni",
        subtitle: "Sud",
        value: "londres",
        icon: homeIcons,
      },
    ],
  };

  it("should render the CheckboxText component with label", () => {
    render(<CardCheckbox {...defaultArgs} />);

    expect(screen.getByRole("checkbox", { name: /Paris/ })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /Londres/ }),
    ).toBeInTheDocument();
  });

  it("should call the onChange handler when clicked", async () => {
    const handleChange = vi.fn();
    render(<CardCheckbox {...defaultArgs} onChange={handleChange} />);
    const user = userEvent.setup();

    const checkboxInput = screen.getByRole("checkbox", { name: /Paris/ });
    await user.click(checkboxInput);

    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it("should not violate accessibility rules", async () => {
    const { container } = render(<CardCheckbox {...defaultArgs} />);

    expect(await axe(container)).toHaveNoViolations();
  });

  it("should display error message when error prop is provided", () => {
    render(<CardCheckbox {...defaultArgs} error="Erreur obligatoire" />);

    const checkboxInput = screen.getByRole("checkbox", { name: /Paris/ });

    expect(checkboxInput).toHaveAccessibleErrorMessage("Erreur obligatoire");
    expect(checkboxInput).not.toBeValid();
  });

  it("should display description and label when provided", () => {
    render(<CardCheckbox {...defaultArgs} />);

    expect(screen.getByText("Quelle ville ?")).toBeInTheDocument();
    expect(screen.getByText("Choisissez une ville")).toBeInTheDocument();
  });

  it("should display asterisk when required is true", () => {
    render(<CardCheckbox {...defaultArgs} required />);

    expect(screen.getByText("Quelle ville ?")).toContainHTML("*");
    expect(screen.getByRole("checkbox", { name: /Paris/ })).toBeRequired();
    expect(screen.getByRole("checkbox", { name: /Londres/ })).toBeRequired();
  });

  it("should remove required when one of checkbox is checked", async () => {
    render(<CardCheckbox {...defaultArgs} required />);
    const user = userEvent.setup();

    await user.click(screen.getByRole("checkbox", { name: /Paris/ }));

    expect(screen.getByRole("checkbox", { name: /Paris/ })).not.toBeRequired();
    expect(
      screen.getByRole("checkbox", { name: /Londres/ }),
    ).not.toBeRequired();

    await user.click(screen.getByRole("checkbox", { name: /Paris/ }));

    expect(screen.getByRole("checkbox", { name: /Paris/ })).toBeRequired();
    expect(screen.getByRole("checkbox", { name: /Londres/ })).toBeRequired();
  });

  it("should not set checkboxes as required when required is false", async () => {
    render(<CardCheckbox {...defaultArgs} required={false} />);
    const user = userEvent.setup();

    await user.click(screen.getByRole("checkbox", { name: /Paris/ }));

    expect(screen.getByRole("checkbox", { name: /Paris/ })).not.toBeRequired();
    expect(
      screen.getByRole("checkbox", { name: /Londres/ }),
    ).not.toBeRequired();

    await user.click(screen.getByRole("checkbox", { name: /Paris/ }));

    expect(screen.getByRole("checkbox", { name: /Paris/ })).not.toBeRequired();
    expect(
      screen.getByRole("checkbox", { name: /Londres/ }),
    ).not.toBeRequired();
  });

  it("should display message with error type by default", () => {
    render(<CardCheckbox {...defaultArgs} message="Error message" />);

    expect(
      screen.getByRole("checkbox", { name: /Paris/ }),
    ).toHaveAccessibleErrorMessage("Error message");
    expect(
      screen.getByRole("checkbox", { name: /Londres/ }),
    ).toHaveAccessibleErrorMessage("Error message");
  });
});
