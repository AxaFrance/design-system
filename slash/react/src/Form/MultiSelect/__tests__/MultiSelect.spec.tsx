import { render, screen, waitFor, within } from "@testing-library/react";

import { userEvent } from "@testing-library/user-event";
import { axe } from "jest-axe";
import { useState } from "react";
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

const TestComponentWrapper = () => {
  const [newValue, setNewValue] = useState(value);
  const [newValues, setNewValues] = useState(values);

  const commonProps = {
    name: "placeName",
    options,
    menuPortalTarget: document.body,
  };

  return (
    <>
      <div data-testid="react-select-container-value">
        <MultiSelect
          {...commonProps}
          onChange={(data) => {
            setNewValue(data.value as string);
          }}
          value={newValue}
        />
      </div>
      <div data-testid="react-select-container-values">
        <MultiSelect
          {...commonProps}
          onChange={(data) => {
            setNewValues(data.values as string[]);
          }}
          values={newValues}
        />
      </div>
    </>
  );
};

describe("MultiSelect", () => {
  it("should display the option list when clicked", async () => {
    // Given
    render(<TestComponentWrapper />);

    const container = screen.getByTestId("react-select-container-value");

    // When
    await userEvent.click(within(container).getByRole("combobox"));

    // Then
    const listbox = await screen.getByRole("listbox");

    await waitFor(() => {
      expect(
        within(listbox).getByRole("option", { name: /For fun/i }),
      ).toBeVisible();
      expect(
        within(listbox).getByRole("option", { name: /For work/i }),
      ).toBeVisible();
      expect(
        within(listbox).getByRole("option", { name: /For drink/i }),
      ).toBeVisible();
      expect(
        within(listbox).getByRole("option", { name: /For sleep/i }),
      ).toBeVisible();
      expect(
        within(listbox).getByRole("option", { name: /For swim/i }),
      ).toBeVisible();
    });
  });

  it("should allow the user to select an option", async () => {
    // Given
    render(<TestComponentWrapper />);

    const container = screen.getByTestId("react-select-container-value");

    within(container).getByText("For fun");

    // When
    await userEvent.click(within(container).getByRole("combobox"));

    const listbox = await screen.getByRole("listbox");

    await userEvent.click(
      within(listbox).getByRole("option", { name: /For work/i }),
    );

    // Then
    await waitFor(() => {
      expect(within(container).getByText("For work")).toBeVisible();
    });
  });

  it("should allow the user to select multi option", async () => {
    // Given
    render(<TestComponentWrapper />);

    const container = screen.getByTestId("react-select-container-values");

    within(container).getByText("For fun");
    within(container).getByText("For drink");

    // When
    await userEvent.click(within(container).getByRole("combobox"));

    const listbox = await screen.getByRole("listbox");

    await userEvent.click(
      within(listbox).getByRole("option", { name: /For work/i }),
    );

    // Then
    await waitFor(() => {
      expect(within(container).getByText("For fun")).toBeVisible();
      expect(within(container).getByText("For work")).toBeVisible();
      expect(within(container).getByText("For drink")).toBeVisible();
    });
  });

  it("should allow the user to unselect multi option by list", async () => {
    // Given
    render(<TestComponentWrapper />);

    const container = screen.getByTestId("react-select-container-values");

    within(container).getByText("For fun");
    within(container).getByText("For drink");

    // When
    await userEvent.click(within(container).getByRole("combobox"));

    const listbox = await screen.getByRole("listbox");

    await userEvent.click(
      within(listbox).getByRole("option", { name: /For fun/i }),
    );

    // Then
    await waitFor(() => {
      expect(within(container).queryByText("For fun")).not.toBeInTheDocument();
      expect(within(container).getByText("For drink")).toBeVisible();
    });
  });

  it("should allow the user to unselect multi option by tag", async () => {
    // Given
    render(<TestComponentWrapper />);

    const container = screen.getByTestId("react-select-container-values");

    within(container).getByText("For fun");
    within(container).getByText("For drink");

    // When
    await userEvent.click(
      within(container).getByRole("button", {
        name: "Remove For fun",
      }),
    );

    // Then
    await waitFor(() => {
      expect(within(container).queryByText("For fun")).not.toBeInTheDocument();
      expect(within(container).getByText("For drink")).toBeVisible();
    });
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
