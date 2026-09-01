import { type ComponentProps, useMemo } from "react";
import { Svg } from "../Svg/Svg";
import { getClassName } from "../utilities/getClassName";

export const iconVariants = {
  primary: "primary",
  secondary: "secondary",
  disabled: "disabled",
  success: "success",
  error: "error",
  warning: "warning",
} as const;
export type IconVariants = keyof typeof iconVariants;

export const iconSizeVariants = {
  L: "large",
  M: "medium",
  S: "small",
  XS: "extra-small",
} as const;
export type IconSizeVariants = keyof typeof iconSizeVariants;

export type IconProps = ComponentProps<typeof Svg> & {
  variant?: IconVariants;
  size?: IconSizeVariants;
  hasBackground?: boolean;
};

export const Icon = ({
  variant = "primary",
  size = "S",
  hasBackground = false,
  className,
  ...props
}: IconProps) => {
  const componentClassName = useMemo(
    () =>
      getClassName({
        baseClassName: "af-icon",
        className,
        modifiers: [
          variant,
          iconSizeVariants[size],
          hasBackground && "has-background",
        ].filter(Boolean),
      }),
    [className, variant, size, hasBackground],
  );

  return (
    <div className={componentClassName}>
      <Svg {...props} />
    </div>
  );
};
