import { render, screen } from "@testing-library/react";
import { ItemProgressBar } from "../ItemProgressBarCommon";

describe("ItemProgressBar Component", () => {
  it("renders progress bar correctly", () => {
    render(<ItemProgressBar value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute("max", "100");
    expect(progressBar).toHaveValue(50);
  });

  it("applies custom className", () => {
    render(<ItemProgressBar className="custom-class" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("af-item-progress-bar custom-class");
  });

  it("overrides default max value", () => {
    render(<ItemProgressBar max={1} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("max", "1");
  });
});
