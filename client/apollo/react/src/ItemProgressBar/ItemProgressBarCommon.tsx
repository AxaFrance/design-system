import type { ComponentProps } from "react";

const DEFAULT_MAX = 100;

type ItemProgressBarProps = ComponentProps<"progress">;

export const ItemProgressBar = ({
  className,
  ...props
}: ItemProgressBarProps) => (
  <progress
    className={["af-item-progress-bar", className].filter(Boolean).join(" ")}
    max={DEFAULT_MAX}
    {...props}
  />
);

ItemProgressBar.displayName = "ItemProgressBar";
