import classNames from "classnames";
import { useCallback, useId } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBar";

const INITIAL_STEPPER_PROGRESS = 10;
const MAX_STEPPER_PROGRESS = 100;

export type ProgressBarGroupProps = {
  currentStepProgress?: number;
  currentStep: number;
  nbSteps: 2 | 3 | 4 | 5 | 6;
  label?: string;
  className?: string;
};

export const ProgressBarGroup = ({
  currentStepProgress = INITIAL_STEPPER_PROGRESS,
  nbSteps,
  currentStep,
  label,
  className,
}: ProgressBarGroupProps) => {
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
    <div
      id={stepperId}
      role="group"
      aria-label={label}
      className={classNames("af-progress-bar-group", className)}
    >
      {[...Array(nbSteps).keys()].map((index) => (
        <ProgressBar
          key={`${stepperId}-${index}`}
          value={getCurrentProgress(index)}
        />
      ))}
    </div>
  );
};
