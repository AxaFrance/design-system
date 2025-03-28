import { render, screen } from "@testing-library/react";
import { useRef } from "react";
import { DateInput } from "../DateInput";

const TestWrapper = () => {
  const ref = useRef<HTMLInputElement>(null);
  return <DateInput label="BirthDate" ref={ref} />;
};

describe("DateInput", () => {
  it("should render correctly DateInput by passing a ref", () => {
    // Act
    const { container } = render(<TestWrapper />);

    // Assert
    const inputElement = screen.getByLabelText("BirthDate");
    expect(inputElement).toBeInTheDocument();

    const ref = container.querySelector("input");
    expect(ref).toBe(inputElement);
  });
});
