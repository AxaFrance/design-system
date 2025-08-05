import classNames from "classnames";
import { type ComponentProps, type ComponentType, useId } from "react";
import { ItemProgressBar } from "../ItemProgressBar/ItemProgressBarCommon";

const INITIAL_STEPPER_PROGRESS = 10;
const MAX_STEPPER_PROGRESS = 100;

export type ProgressBarGroupProps = {
  currentStepProgress?: number;
  currentStep: number;
  nbSteps?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  label?: string;
  className?: string;
  ItemProgressBarComponent: ComponentType<
    ComponentProps<typeof ItemProgressBar>
  >;
};

export const ProgressBarGroup = ({
  currentStepProgress = INITIAL_STEPPER_PROGRESS,
  nbSteps = 4,
  currentStep,
  label,
  className,
  ItemProgressBarComponent,
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
        <ItemProgressBarComponent
          key={`${stepperId}-${index}`}
          value={getCurrentProgress(index)}
          aria-current={index === currentStep}
        />
      ))}
    </div>
  );
};
