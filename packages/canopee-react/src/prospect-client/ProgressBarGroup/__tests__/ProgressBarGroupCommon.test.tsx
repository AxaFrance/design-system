import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { ProgressBar } from "../../ProgressBar/ProgressBarCommon";
import { ProgressBarGroupCommon } from "../ProgressBarGroupCommon";
import * as ProgressBarGroupModule from "../useSequentialProgress";

describe("ProgressBarGroup Component", () => {
  it("renders the correct number of steps", () => {
    render(
      <ProgressBarGroupCommon
        currentStep={2}
        stepsCount={5}
        ProgressBarComponent={ProgressBar}
      />,
    );
    const list = screen.getByRole("list");
    expect(list.children).toHaveLength(5);
  });

  it("renders all ProgressBar with aria-hidden", () => {
    render(
      <ProgressBarGroupCommon
        currentStep={1}
        stepsCount={3}
        ProgressBarComponent={ProgressBar}
      />,
    );
    const list = screen.getByRole("list");
    for (const li of Array.from(list.children)) {
      const progressBar = li.children[0];
      expect(progressBar).toHaveAttribute("aria-hidden");
    }
  });

  it("passes correct values from useSequentialProgress to each ProgressBar", () => {
    const mockValues = [0.5, 0.25, 0];
    vi.spyOn(ProgressBarGroupModule, "useSequentialProgress").mockReturnValue(
      mockValues,
    );

    render(
      <ProgressBarGroupCommon
        currentStep={1}
        currentStepProgress={25}
        stepsCount={3}
        ProgressBarComponent={ProgressBar}
      />,
    );

    const list = screen.getByRole("list");
    Array.from(list.children).forEach((li, i) => {
      const progressBar = li.querySelector(".af-progress-bar");
      expect(progressBar).toHaveAttribute("value", mockValues[i].toString());
    });
    vi.restoreAllMocks();
  });

  it("applies custom className", () => {
    render(
      <ProgressBarGroupCommon
        currentStep={1}
        className="custom-class"
        stepsCount={3}
        ProgressBarComponent={ProgressBar}
      />,
    );

    const list = screen.getByRole("list");
    expect(list).toHaveClass("af-progress-bar-group custom-class");
  });
});
