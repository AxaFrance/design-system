import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { axe } from "jest-axe";
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

  describe("step state for assistive technologies", () => {
    const renderSteps = () =>
      render(
        <Steps>
          <Step id="a11y-1" href="/etape1" number="1" title="Identité" />
          <Step id="a11y-2" number="2" mode="active" title="Adresse" />
          <Step id="a11y-3" number="3" mode="disabled" title="Paiement" />
        </Steps>,
      );

    it("adds the state of a completed step to its link name", () => {
      renderSteps();

      expect(screen.getByRole("link")).toHaveAccessibleName(
        /Identité \(complété\)$/,
      );
    });

    it("marks the active step as the current step and reads its state", () => {
      renderSteps();

      const [completed, active, upcoming] = screen.getAllByRole("listitem");
      expect(active).toHaveAttribute("aria-current", "step");
      expect(active).toHaveTextContent("Adresse (en cours)");
      expect(completed).not.toHaveAttribute("aria-current");
      expect(upcoming).not.toHaveAttribute("aria-current");
    });

    it("reads the state of an upcoming step", () => {
      renderSteps();

      expect(screen.getAllByRole("listitem")[2]).toHaveTextContent(
        "Paiement (à venir)",
      );
    });

    it("keeps the state text visually hidden", () => {
      renderSteps();

      expect(screen.getByText("(en cours)")).toHaveStyle({
        position: "absolute",
        overflow: "hidden",
      });
    });

    it("uses a custom stateLabel in the hidden text", () => {
      render(
        <Steps>
          <Step
            id="a11y-custom"
            href="/etape1"
            title="Identité"
            stateLabel="validée"
          />
        </Steps>,
      );

      expect(screen.getByRole("link")).toHaveAccessibleName(
        /Identité \(validée\)$/,
      );
    });

    it("sets aria-current passed to StepBase", () => {
      render(
        <Steps>
          <StepBase id="a11y-base" title="Custom" aria-current="step">
            <span className="af-steps-list-step__title">Custom</span>
          </StepBase>
        </Steps>,
      );

      expect(screen.getByRole("listitem")).toHaveAttribute(
        "aria-current",
        "step",
      );
    });

    it("has no accessibility violations", async () => {
      const { container } = renderSteps();

      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
