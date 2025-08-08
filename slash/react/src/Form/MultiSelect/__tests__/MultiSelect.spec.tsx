import { render, screen, within } from "@testing-library/react";

import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { MultiSelect } from "../MultiSelect";

export const options = [
  { value: "fun", label: "For fun" },
  { value: "work", label: "For work" },
  { value: "drink", label: "For drink" },
  { value: "sleep", label: "For sleep" },
  { value: "swim", label: "For swim" },
];

export const values = ["fun", "drink"];
const [value] = values;

const commonProps = {
  name: "placeName",
  options,
  menuPortalTarget: document.body,
};

describe("MultiSelect", () => {
  it("should display the option list when clicked", async () => {
    // Given
    render(<MultiSelect {...commonProps} value={value} />);

    // When
    await userEvent.click(screen.getByRole("combobox"));

    // Then
    const listbox = screen.getByRole("listbox");

    expect(
      await within(listbox).findByRole("option", { name: /For fun/i }),
    ).toBeVisible();
    expect(
      await within(listbox).findByRole("option", { name: /For work/i }),
    ).toBeVisible();
    expect(
      await within(listbox).findByRole("option", { name: /For drink/i }),
    ).toBeVisible();
    expect(
      await within(listbox).findByRole("option", { name: /For sleep/i }),
    ).toBeVisible();
    expect(
      await within(listbox).findByRole("option", { name: /For swim/i }),
    ).toBeVisible();
  });

  it("should allow the user to select an option", async () => {
    const onChange = vi.fn();

    // Given
    render(<MultiSelect {...commonProps} onChange={onChange} value={value} />);

    screen.getByText("For fun");

    // When
    await userEvent.click(screen.getByRole("combobox"));

    const listbox = screen.getByRole("listbox");

    await userEvent.click(
      within(listbox).getByRole("option", { name: /For work/i }),
    );

    // Then
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        value: "work",
      }),
    );
  });

  it("should allow the user to select multi option", async () => {
    const onChange = vi.fn();

    // Given
    render(
      <MultiSelect {...commonProps} onChange={onChange} values={values} />,
    );

    screen.getByText("For fun");
    screen.getByText("For drink");

    // When
    await userEvent.click(screen.getByRole("combobox"));

    const listbox = await screen.getByRole("listbox");

    await userEvent.click(
      within(listbox).getByRole("option", { name: /For work/i }),
    );

    // Then
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        values: ["fun", "drink", "work"],
      }),
    );
  });

  it("should allow the user to unselect multi option by list", async () => {
    const onChange = vi.fn();

    // Given
    render(
      <MultiSelect {...commonProps} onChange={onChange} values={values} />,
    );

    screen.getByText("For fun");
    screen.getByText("For drink");

    // When
    await userEvent.click(screen.getByRole("combobox"));

    const listbox = screen.getByRole("listbox");

    await userEvent.click(
      within(listbox).getByRole("option", { name: /For fun/i }),
    );

    // Then
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        values: ["drink"],
      }),
    );
  });

  it("should allow the user to unselect multi option by tag", async () => {
    const onChange = vi.fn();

    // Given
    render(
      <MultiSelect {...commonProps} onChange={onChange} values={values} />,
    );

    screen.getByText("For fun");
    screen.getByText("For drink");

    // When
    await userEvent.click(
      screen.getByRole("button", {
        name: "Remove For fun",
      }),
    );

    // Then
    expect(onChange).toHaveBeenCalledWith(
      expect.objectContaining({
        values: ["drink"],
      }),
    );
  });

  it("shouldn't have an accessibility violation <MultiSelect />", async () => {
    const { container } = render(
      <MultiSelect
        name="placeName"
        onChange={vi.fn()}
        options={options}
        values={values}
        aria-label="multiselect-example"
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
