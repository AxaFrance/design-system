import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { describe, expect, it, vi } from "vitest";
import { CheckboxInput, type CheckboxInputProps } from "../CheckboxInput";

const options = [
  { name: "transport", value: "train", label: "Train" },
  { name: "transport", value: "bike", label: "Bike" },
];

describe.each(["button", "text", "card"] as const)(
  "CheckboxInput (%s variant)",
  (variant) => {
    const props: CheckboxInputProps = {
      label: "Transport",
      variant,
      options,
    };

    it("should render an accessible fieldset and initially unchecked options", () => {
      render(<CheckboxInput {...props} />);

      expect(screen.getByRole("group", { name: "Transport" }).tagName).toBe(
        "FIELDSET",
      );
      expect(screen.getAllByRole("checkbox")).toHaveLength(2);
      expect(screen.getByRole("checkbox", { name: "Train" })).not.toBeChecked();
      expect(screen.getByRole("checkbox", { name: "Bike" })).not.toBeChecked();
    });

    it("should select multiple options and deselect them independently", async () => {
      const user = userEvent.setup();
      render(<CheckboxInput {...props} />);
      const train = screen.getByRole("checkbox", { name: "Train" });
      const bike = screen.getByRole("checkbox", { name: "Bike" });

      await user.click(screen.getByText("Train"));
      await user.click(screen.getByText("Bike"));
      expect(train).toBeChecked();
      expect(bike).toBeChecked();

      await user.click(screen.getByText("Train"));
      expect(train).not.toBeChecked();
      expect(bike).toBeChecked();
    });

    it("should allow each option to be reached by Tab and toggled with Space", async () => {
      const user = userEvent.setup();
      render(<CheckboxInput {...props} />);
      const train = screen.getByRole("checkbox", { name: "Train" });
      const bike = screen.getByRole("checkbox", { name: "Bike" });

      await user.tab();
      expect(train).toHaveFocus();
      await user.keyboard(" ");
      expect(train).toBeChecked();
      await user.tab();
      expect(bike).toHaveFocus();
      await user.keyboard(" ");
      expect(bike).toBeChecked();
      expect(train).toBeChecked();
    });

    it("should forward option attributes, refs and native change events", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const ref = vi.fn();
      render(
        <CheckboxInput
          {...props}
          options={[
            { ...options[0], id: "train", onChange, ref, defaultChecked: true },
            { ...options[1], disabled: true, defaultChecked: true },
          ]}
        />,
      );
      const train = screen.getByRole("checkbox", { name: "Train" });
      const bike = screen.getByRole("checkbox", { name: "Bike" });

      expect(train).toHaveAttribute("id", "train");
      expect(train).toHaveAttribute("name", "transport");
      expect(train).toHaveAttribute("value", "train");
      expect(ref).toHaveBeenCalledWith(train);
      expect(train).toBeChecked();
      expect(bike).toBeDisabled();
      expect(bike).toBeChecked();
      await user.click(train);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(onChange.mock.calls[0][0].target).toBe(train);
      expect(train).not.toBeChecked();
      await user.click(bike);
      expect(bike).toBeChecked();
    });

    it("should support controlled options without managing their state", async () => {
      const user = userEvent.setup();
      const onChange = vi.fn();
      const { rerender } = render(
        <CheckboxInput
          {...props}
          options={[{ ...options[0], checked: false, onChange }]}
        />,
      );
      const train = screen.getByRole("checkbox", { name: "Train" });
      await user.click(train);
      expect(onChange).toHaveBeenCalledTimes(1);
      expect(train).not.toBeChecked();

      rerender(
        <CheckboxInput
          {...props}
          options={[{ ...options[0], checked: true, onChange }]}
        />,
      );
      expect(train).toBeChecked();
    });

    it("should associate help and errors with every option and preserve option descriptions", () => {
      render(
        <>
          <span id="detail">Additional detail</span>
          <CheckboxInput
            {...props}
            id="transport"
            helpMessage="Choose several options"
            errorMessage="Select at least one option"
            options={[
              { ...options[0], "aria-describedby": "detail" },
              options[1],
            ]}
          />
        </>,
      );

      expect(screen.getByRole("group")).toHaveAccessibleDescription(
        "Select at least one option Choose several options",
      );
      expect(screen.getByRole("checkbox", { name: "Train" })).toHaveAttribute(
        "aria-describedby",
        "transport-description transport-helper detail",
      );
      screen.getAllByRole("checkbox").forEach((checkbox) => {
        expect(checkbox).toHaveAttribute("aria-invalid", "true");
      });
    });

    it("should clear error attributes when the error is removed", () => {
      const { rerender } = render(
        <CheckboxInput {...props} errorMessage="Select an option" />,
      );
      rerender(<CheckboxInput {...props} />);

      screen.getAllByRole("checkbox").forEach((checkbox) => {
        expect(checkbox).not.toHaveAttribute("aria-invalid");
        expect(checkbox).not.toHaveAttribute("aria-describedby");
      });
      expect(screen.queryByText("Select an option")).not.toBeInTheDocument();
    });

    it("should generate unique stable ids for fields and options", () => {
      const { rerender } = render(
        <>
          <CheckboxInput {...props} />
          <CheckboxInput {...props} />
        </>,
      );
      const ids = screen
        .getAllByRole("checkbox")
        .map((checkbox) => checkbox.id);
      expect(new Set(ids).size).toBe(4);
      ids.forEach((id) => expect(id).not.toBe(""));

      rerender(
        <>
          <CheckboxInput {...props} />
          <CheckboxInput {...props} />
        </>,
      );
      expect(
        screen.getAllByRole("checkbox").map((checkbox) => checkbox.id),
      ).toEqual(ids);
    });

    it("should preserve option ids and selection when options are reordered", async () => {
      const user = userEvent.setup();
      const { rerender } = render(<CheckboxInput {...props} />);
      const train = screen.getByRole("checkbox", { name: "Train" });
      const { id } = train;
      await user.click(train);

      rerender(<CheckboxInput {...props} options={[options[1], options[0]]} />);

      expect(screen.getByRole("checkbox", { name: "Train" })).toHaveAttribute(
        "id",
        id,
      );
      expect(screen.getByRole("checkbox", { name: "Train" })).toBeChecked();
      expect(screen.getByRole("checkbox", { name: "Bike" })).not.toBeChecked();
    });

    it("should support label placement, custom classes, units and children", () => {
      render(
        <CheckboxInput
          {...props}
          labelPosition="above"
          containerClassName="custom-container"
          inputClassName="custom-input"
          labelClassName="custom-label"
          contentRight="Unit"
          required
        >
          <span>Additional content</span>
        </CheckboxInput>,
      );

      expect(screen.getByRole("group")).toHaveClass(
        "custom-container",
        "af-input__container--vertical",
      );
      expect(screen.getByText("Transport")).toHaveClass("custom-label");
      expect(screen.getByText("*")).toHaveAttribute("aria-hidden", "true");
      expect(screen.getByText("Unit")).toHaveClass("af-input__unit");
      expect(screen.getByText("Additional content").parentElement).toHaveClass(
        "af-checkbox__group",
        "custom-input",
      );
      screen.getAllByRole("checkbox").forEach((checkbox) => {
        expect(checkbox).not.toBeRequired();
      });
    });

    it.each(["horizontal", "vertical"] as const)(
      "should support %s group orientation",
      (orientation) => {
        const { container } = render(
          <CheckboxInput {...props} orientation={orientation} />,
        );
        expect(container.querySelector(".af-checkbox__group")).toHaveClass(
          `af-checkbox__group--${orientation}`,
          `af-checkbox__group--${variant}`,
        );
        if (orientation === "vertical") {
          expect(screen.getByText("Transport")).toHaveClass(
            "af-label--top-left",
          );
        }
      },
    );

    it.each([undefined, "Choose an option"])(
      "should have no accessibility violations (error: %s)",
      async (errorMessage) => {
        const { container } = render(
          <CheckboxInput
            {...props}
            required
            helpMessage="Choose several options"
            errorMessage={errorMessage}
          />,
        );
        expect(await axe(container)).toHaveNoViolations();
      },
    );
  },
);

describe("CheckboxInput variants", () => {
  it("should default to the button variant", () => {
    const { container } = render(
      <CheckboxInput label="Transport" options={options} />,
    );
    expect(container.querySelector(".af-checkbox__group")).toHaveClass(
      "af-checkbox__group--button",
    );
    expect(container.querySelectorAll(".af-checkbox__button")).toHaveLength(2);
  });

  it("should render card icons and actions", () => {
    render(
      <CheckboxInput
        label="Transport"
        variant="card"
        orientation="vertical"
        options={[
          {
            ...options[0],
            icon: (
              <span data-testid="icon" aria-hidden>
                Icon
              </span>
            ),
            action: "Recommended for long trips",
          },
        ]}
      />,
    );
    expect(screen.getByTestId("icon")).toBeInTheDocument();
    expect(screen.getByText("Recommended for long trips")).toHaveClass(
      "af-checkbox-card__action",
    );
    expect(
      screen
        .getByRole("checkbox", { name: "Train" })
        .closest(".af-checkbox-card"),
    ).toHaveClass("af-checkbox-card--vertical");
  });
});
