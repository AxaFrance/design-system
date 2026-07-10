import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";

import { Radio, RadioModes } from "../Radio";

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2", disabled: true },
  { value: "option3", label: "Option 3" },
];

describe("Composant Radio", () => {
  it("affiche toutes les options avec le bon label", () => {
    render(
      <Radio options={options} value="option1" mode={RadioModes.default} />,
    );
    options.forEach((option) => {
      expect(screen.getByLabelText(option.label)).toBeInTheDocument();
    });
  });

  it("coche l’option correspondant à la valeur passée", () => {
    render(<Radio options={options} value="option1" />);
    const radio1 = screen.getByLabelText("Option 1") as HTMLInputElement;
    const radio2 = screen.getByLabelText("Option 2") as HTMLInputElement;
    const radio3 = screen.getByLabelText("Option 3") as HTMLInputElement;

    expect(radio1.checked).toBe(true);
    expect(radio2.checked).toBe(false);
    expect(radio3.checked).toBe(false);
  });

  it("change la sélection quand l’utilisateur clique sur une autre option", async () => {
    const handleChange = vi.fn();
    render(<Radio options={options} value="option1" onChange={handleChange} />);
    const user = userEvent.setup();

    const radio3 = screen.getByLabelText("Option 3") as HTMLInputElement;
    await user.click(radio3);
    expect(handleChange).toHaveBeenCalled();
  });

  it("ne permet pas de sélectionner une option désactivée", async () => {
    render(<Radio options={options} value="option1" />);
    const user = userEvent.setup();

    const disabledRadio = screen.getByLabelText("Option 2") as HTMLInputElement;
    expect(disabledRadio.disabled).toBe(true);
    await user.click(disabledRadio);
    expect(disabledRadio.checked).toBe(false);
  });

  it("gère une valeur initiale qui ne correspond pas à une option", () => {
    render(<Radio options={options} value="nonexistent" />);
    options.forEach((option) => {
      const input = screen.getByLabelText(option.label) as HTMLInputElement;
      expect(input.checked).toBe(false);
    });
  });

  it("désactive tous les boutons si disabled est passé", async () => {
    render(<Radio options={options} value="option1" disabled />);
    const inputs = options.map(
      (opt) => screen.getByLabelText(opt.label) as HTMLInputElement,
    );
    for (const input of inputs) {
      expect(input.disabled).toBe(true);
    }
  });
});
