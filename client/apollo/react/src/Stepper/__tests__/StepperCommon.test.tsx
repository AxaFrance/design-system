import { render, screen } from "@testing-library/react";
import { Stepper } from "../StepperCommon";
import { ProgressBarGroup } from "../../ProgressBarGroup/ProgressBarGroupApollo";

describe("Stepper Component", () => {
  it("renders the title and subtitle when visible", () => {
    render(
      <Stepper
        currentStep={1}
        currentTitle="Step 1 Title"
        currentSubtitle="Step 1 Subtitle"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const title = screen.getByRole("heading", { name: "Step 1 Title" });
    const subtitle = screen.getByText("Step 1 Subtitle");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it("hides the title and subtitle when visibility is disabled", () => {
    render(
      <Stepper
        currentStep={1}
        currentTitle="Step 1 Title"
        currentSubtitle=""
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const subtitle = screen.queryByText("Step 1 Subtitle");

    expect(subtitle).not.toBeInTheDocument();
  });

  it("renders the ProgressBarGroupComponent with correct props", () => {
    render(
      <Stepper
        currentStep={2}
        currentStepProgress={50}
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const progressBars = screen.getAllByRole("progressbar", {
      hidden: true,
    });
    expect(progressBars).toHaveLength(4);
  });

  it("renders the helper text when provided", () => {
    render(
      <Stepper
        currentStep={1}
        helper="This is a helper text"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const helper = screen.getByText("This is a helper text");
    expect(helper).toBeInTheDocument();
  });

  it("renders the message when provided", () => {
    render(
      <Stepper
        currentStep={1}
        message="This is a success message"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const message = screen.getByText("This is a success message");
    expect(message).toBeInTheDocument();
  });

  it("applies additional className to the ProgressBarGroupComponent", () => {
    render(
      <Stepper
        currentStep={1}
        className="custom-class"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const progressBarGroup = screen.getByRole("group");
    expect(progressBarGroup).toHaveClass("custom-class");
  });
});
