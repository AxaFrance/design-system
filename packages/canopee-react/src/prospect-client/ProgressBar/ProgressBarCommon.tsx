import { useId, type ComponentProps, type ReactNode } from "react";

type ProgressBarProps = ComponentProps<"progress"> & {
  label?: ReactNode;
};

export const ProgressBar = ({
  id,
  label,
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
      <progress
        id={inputId}
        className={["af-progress-bar", className].filter(Boolean).join(" ")}
        {...props}
      />
    </>
  );
};

ProgressBar.displayName = "ProgressBar";
