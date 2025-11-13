import { useId, type ComponentProps, type ReactNode } from "react";

type ProgressBarProps = ComponentProps<"progress"> & {
  label?: ReactNode;
  percentage?: boolean;
};

export const ProgressBar = ({
  id,
  label,
  percentage = false,
  className,
  ...props
}: ProgressBarProps) => {
  let inputId = useId();
  inputId = id || inputId;

  return (
    <>
      {Boolean(label) && (
        <label className="af-progress-bar__label" htmlFor={inputId}>
          {label}
        </label>
      )}
      <div className="af-progress-bar__container">
        <progress
          id={inputId}
          className={["af-progress-bar", className].filter(Boolean).join(" ")}
          {...props}
        />
        {Boolean(percentage) && <span>{props.value} %</span>}
      </div>
    </>
  );
};

ProgressBar.displayName = "ProgressBar";
