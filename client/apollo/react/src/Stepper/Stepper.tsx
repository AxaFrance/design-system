import { HTMLAttributes, useId } from "react";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroup";

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
  currentStepProgress,
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

  return (
    <div className="af-stepper-client" {...props}>
      <div>
        {isTitleVisible && currentTitle && (
          <h2 className="af-stepper-client__title" aria-describedby={stepperId}>
            {currentTitle}
          </h2>
        )}
        {isSubtitleVisible && currentSubtitle && (
          <p className="af-stepper-client__subtitle">{currentSubtitle}</p>
        )}
      </div>
      <ProgressBarGroup
        label={currentTitle}
        className={className}
        currentStep={currentStep}
        nbSteps={nbSteps}
        currentStepProgress={currentStepProgress}
      />
    </div>
  );
};
