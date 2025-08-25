import { render, screen } from "@testing-library/react";
import { Stepper } from "../StepperCommon";
import { ProgressBarGroup } from "../../ProgressBarGroup/ProgressBarGroupApollo";
import { ItemMessageProps } from "../../Form/ItemMessage/ItemMessageCommon";

describe("Stepper Component", () => {
  it("renders the title and subtitle when visible", () => {
    render(
      <Stepper
        currentStep={1}
        currentTitle="Step 1 Title"
        currentSubtitle="Step 1 Subtitle"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const title = screen.getByRole("heading", { name: "Step 1 Title" });
    const subtitle = screen.getByText("Step 1 Subtitle");

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
  });

  it("hides the title and subtitle when visibility is disabled", () => {
    render(
      <Stepper
        currentStep={1}
        currentTitle="Step 1 Title"
        currentSubtitle=""
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const subtitle = screen.queryByText("Step 1 Subtitle");

    expect(subtitle).not.toBeInTheDocument();
  });

  it("renders the ProgressBarGroupComponent with correct props", () => {
    render(
      <Stepper
        currentStep={2}
        currentStepProgress={50}
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const progressBars = screen.getAllByRole("progressbar", {
      hidden: true,
    });
    expect(progressBars).toHaveLength(4);
  });

  it("renders the helper text when provided", () => {
    render(
      <Stepper
        currentStep={1}
        helper="This is a helper text"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const helper = screen.getByText("This is a helper text");
    expect(helper).toBeInTheDocument();
  });

  it.each([
    ["success", "This is a success message", null],
    ["error", "This is an error message", "alert"],
  ])(
    "renders a %s message when message provided with %s message type",
    (messageType, messageText, expectedRole) => {
      render(
        <Stepper
          currentStep={1}
          message={messageText}
          nbSteps={4}
          ProgressBarGroupComponent={ProgressBarGroup}
          messageType={messageType as ItemMessageProps["messageType"]}
        />,
      );

      const message = screen.getByText(messageText);
      expect(message.parentElement?.classList).toContain(
        `af-item-message--${messageType}`,
      );
      expect(message.parentElement?.role).toBe(expectedRole);
      expect(message).toBeInTheDocument();
    },
  );

  it("applies additional className to the ProgressBarGroupComponent", () => {
    render(
      <Stepper
        currentStep={1}
        className="custom-class"
        nbSteps={4}
        ProgressBarGroupComponent={ProgressBarGroup}
      />,
    );

    const progressBarGroup = screen.getByRole("group");
    expect(progressBarGroup).toHaveClass("custom-class");
  });

  it.each([
    [1, "H1"],
    [2, "H2"],
    [3, "H3"],
  ])(
    "should render the title as a %s according to titleLevel prop",
    (level, tag) => {
      render(
        <Stepper
          currentStep={1}
          currentTitle={`Step Title ${tag}`}
          nbSteps={4}
          ProgressBarGroupComponent={ProgressBarGroup}
          titleLevel={level as 1 | 2 | 3}
        />,
      );
      const heading = screen.getByRole("heading", {
        name: `Step Title ${tag}`,
      });
      expect(heading.tagName).toStrictEqual(tag);
    },
  );
});
