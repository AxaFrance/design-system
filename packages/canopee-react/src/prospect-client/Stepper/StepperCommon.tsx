import {
  type ComponentType,
  type HTMLAttributes,
  type ReactNode,
  useId,
} from "react";
import {
  ItemMessage,
  type ItemMessageProps,
} from "../Form/ItemMessage/ItemMessageCommon";
import { type ProgressBarGroupProps } from "../ProgressBarGroup/ProgressBarGroupCommon";
import type { HeadingCommonProps } from "../Heading/HeadingCommon";
import type { HeadingLevel } from "../Heading/types";

export type StepperProps = {
  currentStepProgress?: number;
  currentStep: number;
  currentSubtitle?: ReactNode;
  currentTitle?: ReactNode;
  nbSteps?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  helper?: string;
  icon?: string;
  iconProps?: HeadingCommonProps["iconProps"];
  message?: string;
  messageType?: ItemMessageProps["messageType"];
  titleLevel?: HeadingLevel;
} & Omit<HTMLAttributes<HTMLDivElement>, "role" | "title">;

export type StepperCommonProps = StepperProps & {
  ProgressBarGroupComponent: ComponentType<ProgressBarGroupProps>;
  HeadingComponent: ComponentType<HeadingCommonProps>;
};

export const StepperCommon = ({
  currentStepProgress,
  currentTitle,
  nbSteps,
  currentStep,
  currentSubtitle,
  className,
  ProgressBarGroupComponent,
  HeadingComponent,
  helper,
  icon,
  iconProps,
  message,
  messageType = "success",
  titleLevel = 2,
  ...props
}: StepperCommonProps) => {
  const titleId = useId();

  return (
    <div className="af-stepper" {...props} tabIndex={undefined}>
      <div className="af-stepper__header" id={titleId}>
        <HeadingComponent
          level={titleLevel}
          icon={icon}
          iconProps={iconProps}
          firstSubtitle={currentSubtitle}
        >
          {currentTitle}
        </HeadingComponent>
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
