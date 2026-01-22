import { render, screen, within } from "@testing-library/react";
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

  describe("stateLabel", () => {
    it("renders custom stateLabel on Step (link)", () => {
      render(
        <Steps>
          <Step
            id="id-s1"
            href="/etape1"
            onClick={vi.fn()}
            number="1"
            mode="link"
            title="Previous step"
            stateLabel="Completed"
          />
        </Steps>,
      );

      const listItem = screen.getByRole("listitem", {
        name: "Previous step (Completed)",
      });
      expect(listItem).toBeInTheDocument();
    });

    it("renders custom stateLabel on StepBase", () => {
      render(
        <Steps>
          <StepBase id="idf-test" title="Un titre" stateLabel="In progress">
            <a
              className="af-steps-list-step__label"
              href="/#"
              onClick={vi.fn()}
            >
              <span className="af-steps-list-step__number">1</span>
              <span className="af-steps-list-step__title">Custom</span>
            </a>
          </StepBase>
        </Steps>,
      );

      const listItem = screen.getByRole("listitem", {
        name: "Un titre (In progress)",
      });
      expect(listItem).toBeInTheDocument();
    });

    it.each([
      ["link", "Lien", "Lien (complété)"],
      ["active", "Actif", "Actif (en cours)"],
      ["disabled", "Désactivé", "Désactivé (à venir)"],
    ] as const)(
      "renders default stateLabel for mode=%s (title: %s)",
      (mode, title, expectedName) => {
        render(
          <Steps>
            <Step id={`def-${mode}`} number="1" mode={mode} title={title} />
          </Steps>,
        );

        const li = screen.getByRole("listitem", { name: expectedName });
        expect(li).toBeInTheDocument();

        if (mode === "link") {
          expect(within(li).getByRole("link")).toBeInTheDocument();
        }
      },
    );
  });
});
