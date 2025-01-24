import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
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
});
