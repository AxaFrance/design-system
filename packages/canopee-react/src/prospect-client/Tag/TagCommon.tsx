import { useMemo, type ComponentProps } from "react";
import { getClassName } from "../utilities/getClassName";

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
    () =>
      getClassName({
        baseClassName: "af-tag",
        className,
        modifiers: [variant],
      }),
    [className, variant],
  );

  return (
    <div className={componentClassName} {...divProps}>
      <span className="af-tag__label">{children}</span>
    </div>
  );
};
