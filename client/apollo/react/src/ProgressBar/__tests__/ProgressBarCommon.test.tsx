import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../ProgressBarCommon";

describe("ProgressBar Component", () => {
  it("renders progress bar correctly", () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute("max", "100");
    expect(progressBar).toHaveValue(50);
  });

  it("applies custom className", () => {
    render(<ProgressBar className="custom-class" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("af-progress-bar custom-class");
  });

  it("overrides default max value", () => {
    render(<ProgressBar max={1} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("max", "1");
  });
});
