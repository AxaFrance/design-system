import type { ComponentProps } from "react";

type ItemProgressBarProps = ComponentProps<"progress">;

export const ItemProgressBar = ({
  className,
  ...props
}: ItemProgressBarProps) => (
  <progress
    className={["af-item-progress-bar", className].filter(Boolean).join(" ")}
    {...props}
  />
);

ItemProgressBar.displayName = "ItemProgressBar";
