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
  CheckboxTextCommon,
  type CheckboxTextProps,
} from "../../CheckboxText/CheckboxTextCommon";
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
const CheckboxText = (props: CheckboxTextProps) => (
  <CheckboxTextCommon
    {...props}
    CheckboxComponent={Checkbox}
    ItemMessageComponent={ItemMessage}
  />
);

// eslint-disable-next-line react/no-multi-comp
const CardCheckbox = (props: CardCheckboxProps) => (
  <CardCheckboxCommon
    {...props}
    CardCheckboxItemComponent={CardCheckboxOption}
    CheckboxTextComponent={CheckboxText}
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

  it("should display error message when error prop is provided (deprecated)", () => {
    render(<CardCheckbox {...defaultArgs} error="Erreur obligatoire" />);

    const checkboxInput = screen.getByRole("checkbox", { name: /Paris/ });

    expect(checkboxInput).toHaveAccessibleErrorMessage("Erreur obligatoire");
    expect(checkboxInput).not.toBeValid();
  });

  it("should display error message when message prop is provided with error type", () => {
    render(
      <CardCheckbox
        {...defaultArgs}
        message="Champ obligatoire"
        messageType="error"
      />,
    );

    const parisCheckbox = screen.getByRole("checkbox", { name: /Paris/ });
    const londresCheckbox = screen.getByRole("checkbox", { name: /Londres/ });

    expect(parisCheckbox).toHaveAccessibleErrorMessage("Champ obligatoire");
    expect(parisCheckbox).not.toBeValid();
    expect(londresCheckbox).toHaveAccessibleErrorMessage("Champ obligatoire");
    expect(londresCheckbox).not.toBeValid();
  });

  it("should not mark checkboxes as invalid when messageType is not error", () => {
    render(
      <CardCheckbox
        {...defaultArgs}
        message="Information"
        messageType="success"
      />,
    );

    const parisCheckbox = screen.getByRole("checkbox", { name: /Paris/ });

    expect(parisCheckbox).toBeValid();
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

  it("should render CheckboxText components when mode is text", () => {
    render(<CardCheckbox {...defaultArgs} mode="text" />);

    expect(screen.getByRole("checkbox", { name: /Paris/ })).toBeInTheDocument();
    expect(
      screen.getByRole("checkbox", { name: /Londres/ }),
    ).toBeInTheDocument();
    expect(screen.queryByRole("presentation")).not.toBeInTheDocument();
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

  it("should set aria-invalid and aria-errormessage directly on checkboxes", () => {
    render(
      <CardCheckbox
        {...defaultArgs}
        message="Erreur directe"
        messageType="error"
      />,
    );

    const parisCheckbox = screen.getByRole("checkbox", { name: /Paris/ });

    expect(parisCheckbox).toHaveAttribute("aria-invalid", "true");
    expect(parisCheckbox).toHaveAttribute("aria-errormessage");
  });
});
