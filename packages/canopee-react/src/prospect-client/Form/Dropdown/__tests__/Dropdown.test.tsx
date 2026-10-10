import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { Dropdown } from "../DropdownLF";
import { Dropdown as DropdownApollo } from "../DropdownApollo";

const selectLabel = "Label";
const errorMessage = "Titre du Message";
const helperText = "Information complémentaires";
const placeholderText = "EX: ABCD";

describe("Select", () => {
  it("renders select with options", () => {
    render(
      <Dropdown label={selectLabel}>
        <option value="fun">For fun</option>
        <option value="work">For work</option>
        <option value="drink">For drink</option>
      </Dropdown>,
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
      <Dropdown
        label={selectLabel}
        message={errorMessage}
        helper={helperText}
        placeholder={placeholderText}
        required
      />,
    );

    expect(screen.getByText(errorMessage)).toBeInTheDocument();
    expect(screen.getByText(helperText)).toBeInTheDocument();
    const placeholderElement = screen.getByText(placeholderText);
    expect(placeholderElement).toBeInTheDocument();
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(<Dropdown label={selectLabel} />);
    expect(await axe(container)).toHaveNoViolations();
  });

  it("applies error styles and displays error message when 'error' prop is passed", () => {
    render(<Dropdown label={selectLabel} message={errorMessage} />);

    const selectElement = screen.getByLabelText(/label/i);
    expect(selectElement).toHaveClass("af-form__dropdown-input--error");
    const errorMessageElement = screen.getByText(errorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });

  it("applies disabled styles when select is disabled", () => {
    render(
      <Dropdown label={selectLabel} disabled>
        <option value="fun">fun</option>
      </Dropdown>,
    );

    const selectElement = screen.getByLabelText(/label/i);
    expect(selectElement).toBeDisabled();
    expect(selectElement).toHaveClass("af-form__dropdown-input");
  });
});

describe.each([
  ["Apollo", DropdownApollo],
  ["LF", Dropdown],
])("<Dropdown /> %s description and error", (_, Component) => {
  it("should describe the select with its description, helper and message", async () => {
    const { container } = render(
      <Component
        label="Pays"
        description="Description"
        helper="Aide"
        message="Erreur"
        messageType="error"
      >
        <option value="fr">France</option>
      </Component>,
    );

    const select = screen.getByRole("combobox", { name: "Pays" });
    expect(select).toHaveAccessibleDescription("Description Aide Erreur");
    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(await axe(container)).toHaveNoViolations();
  });

  it("should not set aria-invalid or aria-describedby without error or text", () => {
    render(
      <Component label="Pays">
        <option value="fr">France</option>
      </Component>,
    );

    const select = screen.getByRole("combobox", { name: "Pays" });
    expect(select).not.toHaveAttribute("aria-invalid");
    expect(select).not.toHaveAttribute("aria-describedby");
  });
});
