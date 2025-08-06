import { render, screen } from "@testing-library/react";
import { ItemProgressBar } from "../ItemProgressBarCommon";

const label = "Label progress";
const id = "progress-bar-test-id";

describe("ItemProgressBar Component", () => {
  it("renders progress bar correctly", () => {
    render(<ItemProgressBar value={50} max={100} label={label} />);

    const progressBar = screen.getByRole("progressbar", {
      name: label,
    });
    expect(progressBar).toBeInTheDocument();
    expect(progressBar).toHaveValue(50);
    expect(progressBar).toHaveAttribute("max", "100");
  });

  it("applies custom className", () => {
    render(<ItemProgressBar className="custom-class" />);

    const progressBar = screen.getByRole("progressbar");
    expect(progressBar).toHaveClass("af-item-progress-bar custom-class");
  });

  it("applies and links label correctly with custom id", () => {
    const customId = "custom-progress-id";
    render(<ItemProgressBar id={customId} label={label} />);

    const progressBar = screen.getByRole("progressbar", {
      name: label,
    });
    expect(progressBar).toHaveAttribute("id", customId);
  });

  it("doesn't render a label element if no label prop is provided", () => {
    const { container } = render(<ItemProgressBar id={id} />);

    expect(container.querySelector(`label[for=${id}]`)).not.toBeInTheDocument();
  });
});
