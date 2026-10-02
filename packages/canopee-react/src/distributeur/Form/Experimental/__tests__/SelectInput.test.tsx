import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
import { useRef } from "react";
import { describe, expect, it, vi } from "vitest";
import { SelectInput } from "../SelectInput";

describe("SelectInput", () => {
  const options = (
    <>
      <option value="fr">France</option>
      <option value="be">Belgium</option>
      <option value="es" disabled>
        Spain
      </option>
    </>
  );

  it("should render a select with its label, default class and options", () => {
    render(<SelectInput label="Country" options={options} />);

    const select = screen.getByLabelText("Country");
    expect(select.tagName).toBe("SELECT");
    expect(select).toHaveClass("af-input__input");
    expect(screen.getAllByRole("option")).toHaveLength(4);
    expect(screen.getByRole("option", { name: "France" })).toHaveValue("fr");
  });

  it("should render grouped options", () => {
    render(
      <SelectInput
        label="Country"
        options={
          <>
            <optgroup label="Europe">
              <option value="fr">France</option>
              <option value="es">Spain</option>
            </optgroup>
            <optgroup label="America">
              <option value="us">United States</option>
            </optgroup>
          </>
        }
      />,
    );

    expect(screen.getAllByRole("group")).toHaveLength(2);
    expect(screen.getByRole("group", { name: "Europe" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "United States" })).toHaveValue(
      "us",
    );
  });

  it("should render the default placeholder option", () => {
    render(<SelectInput label="Country" options={options} />);

    expect(screen.getByRole("option", { name: "- Select -" })).toHaveValue("");
  });

  it("should render a custom placeholder option", () => {
    render(
      <SelectInput
        label="Country"
        options={options}
        placeholder="Choose a country"
      />,
    );

    expect(
      screen.getByRole("option", { name: "Choose a country" }),
    ).toHaveValue("");
  });

  it("should not render any placeholder option when placeholder is null", () => {
    render(
      <SelectInput label="Country" options={options} placeholder={null} />,
    );

    expect(screen.getAllByRole("option")).toHaveLength(3);
  });

  it("should forward the option attributes", () => {
    render(<SelectInput label="Country" options={options} />);

    expect(screen.getByRole("option", { name: "Spain" })).toBeDisabled();
  });

  it("should select the provided value", () => {
    render(
      <SelectInput
        label="Country"
        options={options}
        value="be"
        onChange={vi.fn()}
      />,
    );

    expect(screen.getByLabelText("Country")).toHaveValue("be");
  });

  it("should generate an id when none is provided", () => {
    render(<SelectInput label="Country" options={options} />);

    expect(screen.getByLabelText("Country").id).toBeTruthy();
  });

  it("should use the provided id", () => {
    render(<SelectInput label="Country" options={options} id="country" />);

    expect(screen.getByLabelText("Country").id).toBe("country");
  });

  it("should render the help message and link it to the select", () => {
    render(
      <SelectInput
        label="Country"
        options={options}
        helpMessage="Where do you live?"
      />,
    );

    const select = screen.getByLabelText("Country");
    const helpMessage = screen.getByText("Where do you live?");

    expect(helpMessage).toBeInTheDocument();
    expect(select.getAttribute("aria-describedby")).toContain(helpMessage.id);
  });

  it("should render the error message, link it to the select and mark it invalid", () => {
    render(
      <SelectInput
        label="Country"
        options={options}
        errorMessage="This field is required"
      />,
    );

    const select = screen.getByLabelText("Country");
    const errorMessage = screen.getByText("This field is required");

    expect(select).toHaveAttribute("aria-invalid", "true");
    expect(select.getAttribute("aria-describedby")).toContain(errorMessage.id);
  });

  it("should render the content on the right of the select", () => {
    render(
      <SelectInput label="Country" options={options} contentRight="pays" />,
    );

    expect(screen.getByText("pays")).toBeInTheDocument();
  });

  it("should apply the custom class names", () => {
    render(
      <SelectInput
        label="Country"
        options={options}
        containerClassName="containerClassName"
        labelClassName="labelClassName"
        inputClassName="inputClassName"
      />,
    );

    const select = screen.getByLabelText("Country");
    expect(select).toHaveClass("af-input__input", "inputClassName");

    const label = screen.getByText("Country");
    expect(label).toHaveClass("af-label", "labelClassName");
    expect(select.parentElement).toHaveClass("containerClassName");
  });

  it("should forward the ref to the select element", () => {
    const TestWrapper = () => {
      const ref = useRef<HTMLSelectElement>(null);
      return <SelectInput label="Country" options={options} ref={ref} />;
    };
    const { container } = render(<TestWrapper />);

    expect(container.querySelector("select")).toBe(
      screen.getByLabelText("Country"),
    );
  });

  it("should forward the onChange callback", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(
      <SelectInput label="Country" options={options} onChange={onChange} />,
    );

    await user.selectOptions(screen.getByLabelText("Country"), "fr");

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it("shouldn't have an accessibility violation", async () => {
    const { container } = render(
      <SelectInput
        label="Country"
        options={options}
        helpMessage="Where do you live?"
        errorMessage="This field is required"
      />,
    );

    expect(await axe(container)).toHaveNoViolations();
  });
});
