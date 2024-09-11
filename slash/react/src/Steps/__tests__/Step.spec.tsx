import { render } from "@testing-library/react";
import { Step, StepBase, Steps } from "..";

describe("<Steps>", () => {
  it("renders Steps correctly", () => {
    const { asFragment } = render(
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
        <Step id="id5" number="5" title="Final step" mode="disabled" />
      </Steps>,
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
