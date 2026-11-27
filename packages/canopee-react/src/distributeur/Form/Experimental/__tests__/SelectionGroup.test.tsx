import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SelectionGroup } from "../SelectionGroup";
import { RadioGroup } from "../Radio/RadioGroup";
import { RadioCard } from "../Radio/RadioCard";
import { CheckboxGroup } from "../Checkbox/CheckboxGroup";
import { CheckboxCard } from "../Checkbox/CheckboxCard";

describe("SelectionGroup", () => {
  it.each(["horizontal", "vertical"] as const)(
    "should share %s card layout classes across radio and checkbox groups",
    (orientation) => {
      const { container } = render(
        <>
          <RadioGroup
            orientation={orientation}
            variant="card"
            className="custom"
          >
            <RadioCard id="radio" name="radio" value="radio" label="Radio" />
          </RadioGroup>
          <CheckboxGroup
            orientation={orientation}
            variant="card"
            className="custom"
          >
            <CheckboxCard
              id="checkbox"
              name="checkbox"
              value="checkbox"
              label="Checkbox"
            />
          </CheckboxGroup>
        </>,
      );

      const groups = container.querySelectorAll(".af-selection-card");
      expect(groups).toHaveLength(2);
      expect(groups[0]).toHaveClass(
        "af-radio__group",
        `af-radio__group--${orientation}`,
        "af-radio__group--card",
      );
      expect(groups[1]).toHaveClass(
        "af-checkbox__group",
        `af-checkbox__group--${orientation}`,
        "af-checkbox__group--card",
      );
      groups.forEach((group) => {
        expect(group).toHaveClass(
          `af-selection-card--${orientation}`,
          "af-selection-card--card",
          "custom",
        );
      });
      expect(container.querySelector(".af-radiocard")).not.toHaveClass(
        "af-selection-card",
      );
      expect(container.querySelector(".af-checkbox-card")).not.toHaveClass(
        "af-selection-card",
      );
      expect(screen.getByRole("radio", { name: "Radio" })).toBeInTheDocument();
      expect(
        screen.getByRole("checkbox", { name: "Checkbox" }),
      ).toBeInTheDocument();
    },
  );

  it.each(["button", "text"] as const)(
    "should preserve the %s variant without adding the card modifier",
    (variant) => {
      const { container } = render(
        <SelectionGroup
          baseClassName="af-checkbox__group"
          orientation="vertical"
          variant={variant}
        >
          <span>Option</span>
        </SelectionGroup>,
      );

      expect(container.firstChild).toHaveClass(
        "af-checkbox__group",
        `af-checkbox__group--${variant}`,
        "af-checkbox__group--vertical",
        "af-selection-card",
        `af-selection-card--${variant}`,
        "af-selection-card--vertical",
      );
      expect(container.firstChild).not.toHaveClass("af-selection-card--card");
      expect(screen.getByText("Option")).toBeInTheDocument();
    },
  );

  it("should retain shared orientation for radio cards without an explicit variant", () => {
    const { container } = render(
      <RadioGroup orientation="vertical">
        <RadioCard id="radio" name="radio" value="radio" label="Radio" />
      </RadioGroup>,
    );

    expect(container.firstChild).toHaveClass(
      "af-selection-card",
      "af-selection-card--vertical",
      "af-radio__group--button",
    );
    expect(container.querySelector(".af-radiocard")).toBeInTheDocument();
  });
});
