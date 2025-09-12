import { render, screen } from "@testing-library/react";
import { RadioInput } from "../RadioInput";

const languageOptions = [
  { label: "French", value: "french" },
  { label: "English", value: "english" },
  { label: "Spanish", value: "spanish" },
];

describe("RadioInput", () => {
  it("should render element right to input", () => {
    // Act
    render(
      <RadioInput
        name="languages"
        mode="cardRadio"
        label="Languages"
        options={languageOptions}
      >
        Test
      </RadioInput>,
    );

    // Assert
    expect(screen.getByRole("radiogroup")).toBeInTheDocument();
    expect(screen.getByText("Test")).toBeInTheDocument();
  });
});
