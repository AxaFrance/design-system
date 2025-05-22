import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useState } from "react";
import { ChoiceInput } from "../ChoiceInput";

describe("ChoiceInput Component", () => {
  it("does not affect other ChoiceInput components in the same form when a choice is selected", () => {
    const TestComponent = () => {
      const [valueChoice1, setValueChoice1] = useState(false);
      const [valueChoice2, setValueChoice2] = useState(false);

      return (
        <>
          <ChoiceInput
            id="choice-1"
            label="Choice 1"
            value={valueChoice1.toString()}
            options={[
              { label: "choice1: Oui", value: true },
              { label: "choice1: Non", value: false },
            ]}
            onChange={(e) => setValueChoice1(e.target.value === "true")}
          />
          <ChoiceInput
            id="choice-2"
            label="Choice 2"
            value={valueChoice2.toString()}
            options={[
              { label: "choice2: Oui", value: true },
              { label: "choice2: Non", value: false },
            ]}
            onChange={(e) => setValueChoice2(e.target.value === "true")}
          />
        </>
      );
    };

    render(<TestComponent />);

    // Act
    const optionChoice1Oui = screen.getByLabelText("choice1: Oui");
    fireEvent.click(optionChoice1Oui);

    // Assert
    expect(optionChoice1Oui).toBeChecked();

    const optionChoice2Oui = screen.getByLabelText("choice2: Oui");
    expect(optionChoice2Oui).not.toBeChecked();
  });
});
