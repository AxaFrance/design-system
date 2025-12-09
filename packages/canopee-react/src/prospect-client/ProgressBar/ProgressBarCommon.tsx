import { useId, type ComponentProps, type ReactNode } from "react";
import { getClassName } from "../utilities/getClassName";

type ProgressBarProps = ComponentProps<"progress"> & {
  label?: ReactNode;
  showPercentage?: boolean;
};

export const ProgressBar = ({
  id,
  label,
  showPercentage = false,
  className,
  ...props
}: ProgressBarProps) => {
  let inputId = useId();
  inputId = id || inputId;

  const componentClassName = getClassName({
    baseClassName: "af-progress-bar",
    className,
  });

  return (
    <>
      {Boolean(label) && (
        <label className="af-progress-bar__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className={componentClassName} tabIndex={-1}>
        <progress
          id={inputId}
          className="af-progress-bar__progress"
          {...props}
        />
        {Boolean(showPercentage) && (
          <span aria-hidden="true">{props.value} %</span>
        )}
      </div>
    </>
  );
};

ProgressBar.displayName = "ProgressBar";
