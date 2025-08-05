import type { ComponentProps } from "react";

const DEFAULT_MAX = 100;

type ProgressBarProps = ComponentProps<"progress">;

export const ProgressBar = ({ className, ...props }: ProgressBarProps) => (
  <progress
    className={`af-progress-bar ${className}`}
    max={DEFAULT_MAX}
    {...props}
  />
);
