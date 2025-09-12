import classNames from "classnames";
import { type ComponentProps, type ComponentType, useId } from "react";
import { ProgressBar } from "../ProgressBar/ProgressBarCommon";
import { useSequentialProgress } from "./useSequentialProgress";

export type ProgressBarGroupProps = {
  currentStepProgress?: number;
  currentStep: number;
  /**
   * @deprecated Use `stepsCount` instead.
   */
  nbSteps?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  stepsCount?: 2 | 3 | 4 | 5 | 6 | 7 | 8;
  max?: number;
  className?: string;
  ProgressBarComponent: ComponentType<ComponentProps<typeof ProgressBar>>;
} & Omit<ComponentProps<"ol">, "children" | "className">;

export const ProgressBarGroup = ({
  currentStepProgress = 0,
  max = 100,
  nbSteps = 4,
  stepsCount = nbSteps,
  currentStep,
  className,
  ProgressBarComponent,
  ...props
}: ProgressBarGroupProps) => {
  const stepperId = useId();
  const progressValues = useSequentialProgress(
    currentStepProgress / max,
    currentStep,
    stepsCount,
  );

  return (
    <ol className={classNames("af-progress-bar-group", className)} {...props}>
      {progressValues.map((value, index) => (
        <li
          // The index is safe here as the list of progress bars is static and never changes
          // eslint-disable-next-line react/no-array-index-key
          key={`af-progress-bar-group__item--${stepperId}-${index}`}
          className="af-progress-bar-group__item"
        >
          <ProgressBarComponent value={value} aria-hidden />
        </li>
      ))}
    </ol>
  );
};
