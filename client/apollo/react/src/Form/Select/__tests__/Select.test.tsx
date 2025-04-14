import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Select } from "../SelectCommon";
import { ItemLabel } from "../../ItemLabel/ItemLabelLF";
import { ItemMessage } from "../../ItemMessage/ItemMessageLF";

const selectLabel = "Label";
const errorMessage = "Titre du Message";
const helperText = "Information complémentaires";
const placeholderText = "EX: ABCD";

describe("Select", () => {
  it("renders select with options", () => {
    render(
      <Select
        label={selectLabel}
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
      >
        <option value="fun">For fun</option>
        <option value="work">For work</option>
        <option value="drink">For drink</option>
      </Select>,
    );

    const selectOptionElement = screen.getByLabelText(/label/i);
    userEvent.selectOptions(selectOptionElement, "fun");
    const options = screen.queryAllByText(/for/i);
    const selectedOption = options.find(
      (option) => (option as HTMLOptionElement).selected,
    );
    expect(selectedOption).toHaveTextContent("For fun");
  });

  it("renders select with many properties", () => {
    render(
      <Select
        label={selectLabel}
        error={errorMessage}
        helper={helperText}
        placeholder={placeholderText}
        required
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
      />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toBeInTheDocument();
    const placeholderElement = screen.getByText(placeholderText);
    expect(placeholderElement).toBeInTheDocument();
    expect((placeholderElement as HTMLOptionElement).disabled).toBe(true);
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <Select
        label={selectLabel}
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });

  it("applies error styles and displays error message when 'error' prop is passed", () => {
    render(
      <Select
        label={selectLabel}
        error={errorMessage}
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
      />,
    );

    const selectElement = screen.getByLabelText(/label/i);
    expect(selectElement).toHaveClass("af-form__select-input--error");
    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("applies disabled styles when select is disabled", () => {
    render(
      <Select
        label={selectLabel}
        disabled
        ItemLabelComponent={ItemLabel}
        ItemMessageComponent={ItemMessage}
      >
        <option value="fun">fun</option>
      </Select>,
    );

    const selectElement = screen.getByLabelText(/label/i);
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveClass("af-form__select-input");
  });
});
