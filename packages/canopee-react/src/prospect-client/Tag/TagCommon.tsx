import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";

export const tagVariants = {
  info: "info",
  success: "success",
  warning: "warning",
  error: "error",
  neutral: "neutral",
} as const;

export type TagVariants = keyof typeof tagVariants;

export type TagProps = ComponentProps<"div"> & {
  variant?: TagVariants;
};

export const Tag = ({
  children,
  className,
  variant = "info",
  ...divProps
}: TagProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-tag", className, variant),
    [className, variant],
  );

  return (
    <div className={componentClassName} {...divProps}>
      <span className="af-tag__label">{children}</span>
    </div>
  );
};
