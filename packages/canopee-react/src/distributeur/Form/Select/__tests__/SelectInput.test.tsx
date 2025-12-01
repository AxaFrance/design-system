import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import userEvent from "@testing-library/user-event";
import { SelectInput } from "../SelectInput";

const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
];

describe("SelectInput", () => {
  it("should have label", () => {
    // Act
    render(
      <SelectInput
        label="label select input"
        mode="default"
        options={options}
      />,
    );

    // Assert
    const labelSelectInput = screen.getByRole("combobox", {
      name: "label select input",
    });
    expect(labelSelectInput).toHaveClass("af-form__input-select");
  });

  it("shouldn't have an accessibility violation <Select />", async () => {
    // Act
    const { container } = render(
      <SelectInput
        label="label select input"
        aria-label="select-default"
        onChange={() => {}}
        defaultValue="fun"
        options={options}
      />,
    );

    // Assert
    expect(await axe(container)).toHaveNoViolations();
  });

  it.each([
    [false, "fun", undefined],
    [false, "", undefined],
    [false, undefined, "fun"],
    [false, undefined, ""],
    [true, undefined, undefined],
  ])(
    "should display placeholder at component render when required=%s, value=%s, defaultValue=%s",
    async (required, value, defaultValue) => {
      render(
        <SelectInput
          mode="default"
          label="label select input"
          onChange={() => {}}
          value={value}
          defaultValue={defaultValue}
          options={options}
          placeholder="sélectionner une option"
          required={required}
        />,
      );

      // Assert
      const placeholder = screen.queryByRole("option", {
        name: /sélectionner une option/i,
      });

      expect(placeholder).toBeInTheDocument();
    },
  );

  it.each([
    [true, "fun", undefined],
    [true, undefined, "fun"],
  ])(
    "shouldn't display placeholder at component render when required=%s, value=%s, defaultValue=%s",
    async (required, value, defaultValue) => {
      render(
        <SelectInput
          mode="default"
          label="label select input"
          onChange={() => {}}
          value={value}
          defaultValue={defaultValue}
          options={options}
          placeholder="sélectionner une option"
          required={required}
        />,
      );

      // Assert
      const placeholder = screen.queryByRole("option", {
        name: /sélectionner une option/i,
      });

      expect(placeholder).not.toBeInTheDocument();
    },
  );

  it("shouldn't display placeholder when value is required and modified", async () => {
    render(
      <SelectInput
        mode="default"
        label="label select input"
        onChange={() => {}}
        options={options}
        placeholder="sélectionner une option"
        required
      />,
    );

    // Act
    await userEvent.selectOptions(screen.getByRole("combobox"), "fun");

    // Assert
    const placeholder = screen.queryByRole("option", {
      name: /sélectionner une option/i,
    });
    expect(placeholder).not.toBeInTheDocument();
  });
});
