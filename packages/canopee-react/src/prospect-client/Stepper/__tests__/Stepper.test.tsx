import { render, screen } from "@testing-library/react";
import { Stepper as StepperApollo } from "../StepperApollo";
import { Stepper as StepperLF } from "../StepperLF";

const themes = [
  { name: "Apollo", Component: StepperApollo },
  { name: "LF", Component: StepperLF },
];

describe.each(themes)("Stepper $name Component", ({ Component }) => {
  it("renders the title through the Heading molecule, the progress bars and the helper", () => {
    render(
      <Component
        currentStep={2}
        currentStepProgress={50}
        currentTitle="Step 2 Title"
        currentSubtitle="Step 2 Subtitle"
        helper="This is a helper text"
        nbSteps={4}
        titleLevel={3}
      />,
    );

    const title = screen.getByRole("heading", { name: "Step 2 Title" });

    expect(title.tagName).toStrictEqual("H3");
    expect(screen.getByText("Step 2 Subtitle")).toBeInTheDocument();
    expect(screen.getAllByRole("progressbar", { hidden: true })).toHaveLength(
      4,
    );
    expect(screen.getByText("This is a helper text")).toBeInTheDocument();
  });
});
