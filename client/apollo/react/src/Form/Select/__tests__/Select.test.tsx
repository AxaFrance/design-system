import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { expect, it } from "vitest";
import { Select } from "../SelectCommon";

const selectLabel = "Label";
const errorMessage = "Titre du Message";
const helperText = "Information complémentaires";
const placeholderText = "EX: ABCD";

describe("Select", () => {
  it("Should render", () => {
    render(<Select label={selectLabel} />);
  });

  it("renders select with options", async () => {
    render(
      <Select label="Label">
        <option value="fun">For fun</option>
        <option value="work">For work</option>
        <option value="drink">For drink</option>
      </Select>,
    );

    const selectElment = screen.getByRole("combobox", { name: /label/i });
    expect(selectElment).toBeInTheDocument();
    await userEvent.click(selectElment);
    const optionElement = await screen.findByRole("option", {
      name: /For fun/i,
    });
    expect(optionElement).toBeInTheDocument();
  });

  it("renders select with many properties", () => {
    render(
      <Select
        label={selectLabel}
        error={errorMessage}
        helper={helperText}
        placeholder={placeholderText}
        required
      />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toBeInTheDocument();

    const placeholderElement = screen.getByRole("option", {
      name: new RegExp(placeholderText, "i"),
    });
    expect(placeholderElement).toBeInTheDocument();
    expect(placeholderElement).toBeDisabled();
  });

  it("shouldn't have an accessibility violation <TextArea />", async () => {
    const { container } = render(<Select label={selectLabel} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("applies error styles and displays error message when 'error' prop is passed", () => {
    render(<Select label={selectLabel} error={errorMessage} />);
    const selectElement = screen.getByRole("combobox", { name: /label/i });
    expect(selectElement).toHaveClass("af-form__select-input--error");
    const errorMsg = screen.getByText(errorMessage);
    expect(errorMsg).toBeInTheDocument();
  });

  it("applies disabled styles when select is disabled", () => {
    render(
      <Select label={selectLabel} disabled>
        <option value="fun">fun</option>
      </Select>,
    );
    const selectElement = screen.getByRole("combobox", { name: /label/i });
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveClass("af-form__select-input");
  });
});
