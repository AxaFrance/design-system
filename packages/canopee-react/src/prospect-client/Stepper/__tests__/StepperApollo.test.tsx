import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Stepper } from "../StepperApollo";

describe("StepperApollo", () => {
  it("renders the stepper with title and progress", () => {
    render(<Stepper currentStep={1} currentTitle="Step 1" nbSteps={4} />);

    expect(screen.getByRole("heading", { name: "Step 1" })).toBeInTheDocument();
  });
});
