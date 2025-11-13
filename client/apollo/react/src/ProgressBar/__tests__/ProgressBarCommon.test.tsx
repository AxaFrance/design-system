import { render, screen } from "@testing-library/react";
import { ProgressBar } from "../ProgressBarCommon";

const label = "Label progress";
const id = "progress-bar-test-id";

describe("ProgressBar Component", () => {
  it("renders progress bar correctly", () => {
    render(<ProgressBar value={50} max={100} label={label} />);

    const progressBar = screen.getByRole("progressbar", {
      name: label,
    });
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveValue(50);
    expect(progressBar).toHaveAttribute("max", "100");
    expect(screen.queryByText("50 %")).toBeNull();
  });

  it("applies custom className", () => {
    render(<ProgressBar className="custom-class" />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("af-progress-bar custom-class");
  });

  it("applies and links label correctly with custom id", () => {
    const customId = "custom-progress-id";
    render(<ProgressBar id={customId} label={label} />);

    const progressBar = screen.getByRole("progressbar", {
      name: label,
    });
    expect(progressBar).toHaveAttribute("id", customId);
  });

  it("doesn't render a label element if no label prop is provided", () => {
    const { container } = render(<ProgressBar id={id} />);

    expect(container.querySelector(`label[for=${id}]`)).not.toBeInTheDocument();
  });

  it("does render percentage if props percetage id provided", () => {
    render(<ProgressBar id={id} value={50} max={100} percentage />);

    expect(screen.getByText("50 %")).toBeInTheDocument();
  });
});
