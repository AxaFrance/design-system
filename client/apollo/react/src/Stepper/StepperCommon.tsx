import { ComponentType, HTMLAttributes, useId } from "react";
import { ProgressBarGroupProps } from "../ProgressBarGroup/ProgressBarGroupCommon";
import { ItemMessage } from "../Form/ItemMessage/ItemMessageCommon";

export type StepperProps = {
  currentStepProgress?: number;
  currentStep: number;
  currentSubtitle?: string;
  currentTitle?: string;
  nbSteps?: 3 | 4 | 5 | 6 | 7 | 8;
  helper?: string;
  message?: string;
  ProgressBarGroupComponent: ComponentType<
    Omit<ProgressBarGroupProps, "ProgressBarComponent">
  >;
} & Omit<HTMLAttributes<HTMLDivElement>, "role">;

export const Stepper = ({
  currentStepProgress,
  currentTitle,
  nbSteps,
  currentStep,
  currentSubtitle,
  className,
  ProgressBarGroupComponent,
  helper,
  message,
  ...props
}: StepperProps) => {
  const stepperId = useId();

  return (
    <div className="af-stepper" {...props}>
      <div className="af-stepper__header">
        <h2 className="af-stepper__title" aria-describedby={stepperId}>
          {currentTitle}
        </h2>
        {Boolean(currentSubtitle) && (
          <p className="af-stepper__subtitle">{currentSubtitle}</p>
        )}
      </div>
      <ProgressBarGroupComponent
        label={currentTitle}
        className={className}
        currentStep={currentStep}
        nbSteps={nbSteps}
        currentStepProgress={currentStepProgress}
      />
      {Boolean(helper) && <span className="af-stepper__helper">{helper}</span>}
      <ItemMessage message={message} messageType="success" />
    </div>
  );
};
