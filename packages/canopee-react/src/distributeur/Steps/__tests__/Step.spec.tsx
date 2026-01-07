import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Step, StepBase, Steps } from "..";

describe("<Steps>", () => {
  it("renders Steps correctly", () => {
    render(
      <Steps>
        <Step
          id="id1"
          href="/etape1"
          onClick={vi.fn()}
          number="1"
          mode="link"
          title="Previous step"
        />
        <StepBase id="idf4" title="Un titre">
          <a className="af-steps-list-step__label" href="/#" onClick={vi.fn()}>
            <span className="af-steps-list-step__number">
              <i className="glyphicon glyphicon-ok" />
            </span>
            <span className="af-steps-list-step__title">Custom</span>
          </a>
        </StepBase>
        <Step id="id3" number="3" title="Current step" mode="active" />
        <Step id="id5" number="5" title="Final step" mode="disabled" />
      </Steps>,
    );

    expect(
      screen.getByRole("link", { name: /Previous step/i }),
    ).toBeInTheDocument();

    expect(screen.getByRole("link", { name: /Custom/i })).toBeInTheDocument();

    expect(screen.getByText("Current step")).toBeInTheDocument();

    expect(screen.getByText("Final step")).toBeInTheDocument();
  });

  it("click on link", async () => {
    const onClick = vi.fn();
    render(
      <Steps>
        <Step
          id="id1"
          href="/etape1"
          onClick={onClick}
          number="1"
          mode="link"
          title="Previous step"
        />
        <StepBase id="idf4" title="Un titre">
          <a className="af-steps-list-step__label" href="/#" onClick={vi.fn()}>
            <span className="af-steps-list-step__number">
              <i className="glyphicon glyphicon-ok" />
            </span>
            <span className="af-steps-list-step__title">Custom</span>
          </a>
        </StepBase>
        <Step id="id5" number="5" title="Final step" mode="disabled" />
      </Steps>,
    );

    const link = screen.getByRole("link", { name: /Previous step/i });

    await userEvent.click(link);

    expect(onClick).toHaveBeenCalled();
  });
});

describe("<Steps> showLastStepCheck", () => {
  it("should apply 'no-last-check' class when showLastStepCheck is false", () => {
    const { container } = render(
      <Steps showLastStepCheck={false}>
        <Step id="id1" title="Step 1" mode="link" />
        <Step id="id2" title="Step 2" mode="active" />
      </Steps>,
    );

    const stepsContainer = container.querySelector(".af-steps-new");
    expect(stepsContainer).toHaveClass("af-steps-new--no-last-check");
  });

  it("should not apply 'no-last-check' class when showLastStepCheck is true", () => {
    const { container } = render(
      <Steps showLastStepCheck>
        <Step id="id1" title="Step 1" mode="link" />
        <Step id="id2" title="Step 2" mode="active" />
      </Steps>,
    );

    const stepsContainer = container.querySelector(".af-steps-new");
    expect(stepsContainer).not.toHaveClass("af-steps-new--no-last-check");
  });

  it("should not apply 'no-last-check' class by default", () => {
    const { container } = render(
      <Steps>
        <Step id="id1" title="Step 1" mode="link" />
        <Step id="id2" title="Step 2" mode="active" />
      </Steps>,
    );

    const stepsContainer = container.querySelector(".af-steps-new");
    expect(stepsContainer).not.toHaveClass("af-steps-new--no-last-check");
  });
});
