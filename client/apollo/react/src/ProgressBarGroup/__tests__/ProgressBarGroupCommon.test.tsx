import { render, screen } from "@testing-library/react";
import { ProgressBarGroup } from "../ProgressBarGroupCommon";
import { ProgressBar } from "../../ProgressBar/ProgressBarCommon";

describe("ProgressBarGroup Component", () => {
  it("renders the correct number of steps", () => {
    render(
      <ProgressBarGroup
        currentStep={2}
        nbSteps={5}
        ProgressBarComponent={ProgressBar}
      />,
    );
    const progressBars = screen.getAllByRole("progressbar", {
      hidden: true,
    });
    expect(progressBars).toHaveLength(5);
  });

  it("applies the correct progress values for each step", () => {
    render(
      <ProgressBarGroup
        currentStep={2}
        currentStepProgress={50}
        nbSteps={4}
        ProgressBarComponent={ProgressBar}
      />,
    );

    const progressBars = screen.getAllByRole("progressbar", {
      hidden: true,
    });
    expect(progressBars[0]).toHaveAttribute("aria-valuenow", "100"); // Step 1 completed
    expect(progressBars[1]).toHaveAttribute("aria-valuenow", "100"); // Step 2 completed
    expect(progressBars[2]).toHaveAttribute("aria-valuenow", "50"); // Step 3 in progress
    expect(progressBars[3]).toHaveAttribute("aria-valuenow", "0"); // Step 4 not started
  });

  it("uses default progress for the current step when currentStepProgress is 0", () => {
    render(
      <ProgressBarGroup
        currentStep={1}
        currentStepProgress={0}
        nbSteps={3}
        ProgressBarComponent={ProgressBar}
      />,
    );

    const progressBars = screen.getAllByRole("progressbar", {
      hidden: true,
    });
    expect(progressBars[0]).toHaveAttribute("aria-valuenow", "100"); // Step 1 completed
    expect(progressBars[1]).toHaveAttribute("aria-valuenow", "10"); // Step 2 default progress
    expect(progressBars[2]).toHaveAttribute("aria-valuenow", "0"); // Step 3 not started
  });

  it("renders with a custom label", () => {
    render(
      <ProgressBarGroup
        currentStep={1}
        label="Custom Progress Bar Group"
        nbSteps={3}
        ProgressBarComponent={ProgressBar}
      />,
    );

    const group = screen.getByRole("group", {
      name: "Custom Progress Bar Group",
    });
    expect(group).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(
      <ProgressBarGroup
        currentStep={1}
        className="custom-class"
        nbSteps={3}
        ProgressBarComponent={ProgressBar}
      />,
    );

    const group = screen.getByRole("group");
    expect(group).toHaveClass("custom-class");
  });
});
