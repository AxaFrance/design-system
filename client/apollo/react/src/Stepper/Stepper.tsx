import { ComponentType, HTMLAttributes, useId } from "react";
import { ProgressBarGroupProps } from "../ProgressBarGroup/ProgressBarGroup";
import { ItemMessage } from "../Form/ItemMessage/ItemMessageCommon";

export type StepperProps = {
  currentStepProgress?: number;
  currentStep: number;
  currentSubtitle?: string;
  currentTitle?: string;
  nbSteps: 2 | 3 | 4 | 5 | 6;
  isTitleVisible?: boolean;
  isSubtitleVisible?: boolean;
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
  isTitleVisible = true,
  isSubtitleVisible = true,
  className,
  ProgressBarGroupComponent,
  ...props
}: StepperProps) => {
  const stepperId = useId();

  return (
    <div className="af-stepper-client" {...props}>
      <div className="af-stepper-client__header">
        {isTitleVisible && currentTitle && (
          <h2 className="af-stepper-client__title" aria-describedby={stepperId}>
            {currentTitle}
          </h2>
        )}
        {isSubtitleVisible && currentSubtitle && (
          <p className="af-stepper-client__subtitle">{currentSubtitle}</p>
        )}
      </div>
      <ProgressBarGroupComponent
        label={currentTitle}
        className={className}
        currentStep={currentStep}
        nbSteps={nbSteps}
        currentStepProgress={currentStepProgress}
      />
      <span className="af-stepper-client__helper">
        Sauf mention du contraire, tous les champs sont obligatoires.
      </span>
      <ItemMessage message="My message" messageType="success" />
    </div>
  );
};
