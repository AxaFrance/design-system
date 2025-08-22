import classNames from "classnames";
import { type ComponentProps, type ComponentType, useId } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBarCommon";

const INITIAL_STEPPER_PROGRESS = 10;
const MAX_STEPPER_PROGRESS = 100;

export type ProgressBarGroupProps = {
  currentStepProgress?: number;
  currentStep: number;
  nbSteps?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;
  label?: string;
  className?: string;
  ProgressBarComponent: ComponentType<ComponentProps<typeof ProgressBar>>;
};

export const ProgressBarGroup = ({
  currentStepProgress = INITIAL_STEPPER_PROGRESS,
  nbSteps = 4,
  currentStep,
  label,
  className,
  ProgressBarComponent,
}: ProgressBarGroupProps) => {
  const stepperId = useId();

  const getCurrentProgress = (index: number) => {
    if (index < currentStep) {
      return MAX_STEPPER_PROGRESS;
    }
    if (index === currentStep) {
      return currentStepProgress || INITIAL_STEPPER_PROGRESS;
    }
    return 0;
  };

  return (
    <div
      id={stepperId}
      role="group"
      aria-label={label}
      className={classNames("af-progress-bar-group", className)}
    >
      {[...Array(nbSteps).keys()].map((index) => (
        <ProgressBarComponent
          key={`${stepperId}-${index}`}
          value={getCurrentProgress(index)}
          active={index === currentStep}
          stepNumber={index + 1}
          totalSteps={nbSteps}
        />
      ))}
    </div>
  );
};
