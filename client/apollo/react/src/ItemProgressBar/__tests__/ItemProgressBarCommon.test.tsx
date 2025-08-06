import { render, screen } from "@testing-library/react";
import { ItemProgressBar } from "../ItemProgressBarCommon";

describe("ItemProgressBar Component", () => {
  it("renders progress bar correctly", () => {
    render(<ItemProgressBar value={50} max={100} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveValue(50);
    expect(progressBar).toHaveAttribute("max", "100");
  });

  it("applies custom className", () => {
    render(<ItemProgressBar className="custom-class" />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("af-item-progress-bar custom-class");
  });
});
