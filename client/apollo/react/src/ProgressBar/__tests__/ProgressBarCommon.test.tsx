import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../ProgressBarCommon";

describe("ProgressBar Component", () => {
  it("renders with default props", () => {
    render(<ProgressBar value={100} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveAttribute("aria-valuemin", "0");
    expect(progressBar).toHaveAttribute("aria-valuemax", "100");
    expect(progressBar).toHaveAttribute("aria-valuenow", "100");
    expect(progressBar).toHaveAttribute("aria-label", "Progression : 100%");
  });

  it("renders with a custom value", () => {
    render(<ProgressBar value={50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-valuenow", "50");
    expect(progressBar).toHaveAttribute("aria-label", "Progression : 50%");
  });

  it("clamps value to the minimum", () => {
    render(<ProgressBar value={-50} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-valuenow", "0");
  });

  it("clamps value to the maximum", () => {
    render(<ProgressBar value={150} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-valuenow", "100");
  });

  it("applies the active state correctly", () => {
    render(<ProgressBar active value={30} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveAttribute("aria-current", "true");
  });

  it("does not hide the progress bar when active is true", () => {
    render(<ProgressBar active value={30} />);
    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).not.toHaveAttribute("aria-hidden", "true");
  });

  describe("ProgressBar - percentage display", () => {
    it("displays the percentage in all cases", () => {
      render(<ProgressBar value={45} stepNumber={2} totalSteps={3} />);
      expect(screen.getByText("Progression 45%")).toBeInTheDocument();

      render(<ProgressBar value={100} stepNumber={1} totalSteps={3} />);
      expect(screen.getByText("Progression 100%")).toBeInTheDocument();

      render(<ProgressBar value={0} stepNumber={3} totalSteps={3} />);
      expect(screen.getByText("Progression 0%")).toBeInTheDocument();
    });
  });
});
