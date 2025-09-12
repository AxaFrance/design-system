import {
  ComponentType,
  type ElementType,
  type HTMLAttributes,
  useId,
} from "react";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../Form/ItemMessage/ItemMessageCommon";
import { ProgressBarGroupProps } from "../ProgressBarGroup/ProgressBarGroupCommon";

export type StepperProps = {
  currentStepProgress?: number;
  currentStep: number;
  currentSubtitle?: string;
  currentTitle?: string;
  nbSteps?: 3 | 4 | 5 | 6 | 7 | 8;
  helper?: string;
  message?: string;
  messageType?: ItemMessageProps["messageType"];
  titleLevel?: 1 | 2 | 3;
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
  messageType = "success",
  titleLevel = 2,
  ...props
}: StepperProps) => {
  const titleId = useId();
  const Title = `h${titleLevel}` as ElementType<
    HTMLAttributes<HTMLHeadingElement>
  >;

  return (
    <div className="af-stepper" {...props} tabIndex={undefined}>
      <div className="af-stepper__header">
        <Title id={titleId} className="af-stepper__title">
          {currentTitle}
        </Title>
        {Boolean(currentSubtitle) && (
          <p className="af-stepper__subtitle">{currentSubtitle}</p>
        )}
      </div>
      <ProgressBarGroupComponent
        className={className}
        currentStep={currentStep}
        stepsCount={nbSteps}
        currentStepProgress={currentStepProgress}
        aria-labelledby={titleId}
      />
      {Boolean(helper) && <span className="af-stepper__helper">{helper}</span>}
      <ItemMessage message={message} messageType={messageType} />
    </div>
  );
};
