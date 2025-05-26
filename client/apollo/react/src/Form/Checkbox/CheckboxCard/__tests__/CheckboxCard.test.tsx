import homeIcons from "@material-symbols/svg-400/outlined/home.svg";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it } from "vitest";
import * as useIsSmallScreen from "../../../../utilities/hook/useIsSmallScreen";
import { CheckboxCard } from "../CheckboxCardApollo";
import * as CheckboxCardItem from "../CheckboxCardItem";

describe("CheckboxCard", () => {
  const args = {
    labelGroup: "Quelle ville ?",
    descriptionGroup: "Choisissez une ville",
    isRequired: true,
    options: [
      {
        label: "Paris",
        description: "Capitale de la France",
        subtitle: "Nord",
        name: "paris",
        value: "paris",
        icon: homeIcons,
      },
    ],
  };

  it("should render the CheckboxText component with label", () => {
    // Act
    render(<CheckboxCard type="vertical" {...args} />);

    // Then
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
    expect(screen.getByText("Paris")).toBeInTheDocument();
  });

  it("should check and uncheck CheckboxCard", async () => {
    // Act
    render(<CheckboxCard type="vertical" {...args} />);
    const checkboxLabel = screen.getByText("Paris");
    const checkbox = screen.getByRole("checkbox");

    // Then
    expect(checkbox).not.toBeChecked();
    await userEvent.click(checkboxLabel);
    expect(checkbox).toBeChecked();
    await userEvent.click(checkboxLabel);
    expect(checkbox).not.toBeChecked();
  });

  it("should violate accessibility the of CheckboxCard", async () => {
    // Act
    const { container } = render(<CheckboxCard type="vertical" {...args} />);

    // Then
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should display error message when error prop is provided", () => {
    render(
      <CheckboxCard type="vertical" {...args} error="Erreur obligatoire" />,
    );

    expect(screen.getByText("Erreur obligatoire")).toBeInTheDocument();
  });

  it.each`
    isSmallScreen | expectedSize
    ${true}       | ${"M"}
    ${false}      | ${"L"}
  `(
    "should give the size $expectedSize to CheckboxCardItem when useIsSmallScreen returns $isSmallScreen",
    ({ isSmallScreen, expectedSize }) => {
      vi.spyOn(useIsSmallScreen, "useIsSmallScreen").mockReturnValue(
        isSmallScreen,
      );
      const CheckboxCardItemMock = vi.spyOn(
        CheckboxCardItem,
        "CheckboxCardItem",
      );

      render(<CheckboxCard type="vertical" {...args} />);

      expect(CheckboxCardItemMock).toHaveBeenCalledWith(
        expect.objectContaining({ size: expectedSize }),
        undefined,
      );
    },
  );
});
