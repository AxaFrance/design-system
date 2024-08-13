import { HTMLAttributes, useCallback, useId } from "react";
import classNames from "classnames";
import "@axa-fr/design-system-look-and-feel-css/dist/Stepper/Stepper.client.scss";

const INITIAL_STEPPER_PROGRESS = 10;
const MAX_STEPPER_PROGRESS = 100;

export type StepperProps = {
  currentStepProgress?: number;
  currentStep: number;
  currentSubtitle?: string;
  currentTitle?: string;
  nbSteps: 2 | 3 | 4 | 5 | 6;
  isTitleVisible?: boolean;
  isSubtitleVisible?: boolean;
} & Omit<HTMLAttributes<HTMLDivElement>, "role">;

export const Stepper = ({
  currentStepProgress = INITIAL_STEPPER_PROGRESS,
  currentTitle,
  nbSteps,
  currentStep,
  currentSubtitle,
  isTitleVisible = true,
  isSubtitleVisible = true,
  className,
  ...props
}: StepperProps) => {
  const stepperId = useId();

  const getCurrentProgress: (index: number) => number = useCallback(
    (index) => {
      if (index < currentStep) {
        return MAX_STEPPER_PROGRESS;
      }
      if (index === currentStep) {
        if (currentStepProgress === 0) {
          return INITIAL_STEPPER_PROGRESS;
        }
        return currentStepProgress;
      }
      return 0;
    },
    [currentStep, currentStepProgress],
  );

  return (
    <div className="af-stepper-client" {...props}>
      {isTitleVisible && currentTitle && (
        <h2 className="af-stepper-client__title" aria-describedby={stepperId}>
          {currentTitle}
        </h2>
      )}
      {isSubtitleVisible && currentSubtitle && (
        <p className="af-stepper-client__subtitle">{currentSubtitle}</p>
      )}
      <div
        id={stepperId}
        role="group"
        aria-label={currentTitle}
        className={classNames("af-stepper-client__content", className)}
      >
        {[...Array(nbSteps).keys()].map((index) => (
          <div
            className="af-stepper-client__progressbar"
            key={`${stepperId}-${index}`}
            aria-current={index === currentStep}
            aria-hidden={index !== currentStep}
            aria-label={`${getCurrentProgress(index)}%`}
          >
            <div
              className="af-stepper-client__progress"
              style={{ width: `${getCurrentProgress(index)}%` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
