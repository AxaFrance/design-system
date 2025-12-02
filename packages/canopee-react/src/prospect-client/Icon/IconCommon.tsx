import { ComponentProps, useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { Svg } from "../Svg/Svg";

export const iconVariants = {
  primary: "primary",
  secondary: "secondary",
  disabled: "disabled",
  info: "info",
  warning: "warning",
  inverse: "inverse",
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
  ...props
}: IconProps) => {
  const componentClassName = useMemo(() => {
    const newClassModifier = [
      variant,
      iconSizeVariants[size],
      hasBackground && "has-background",
    ]
      .filter(Boolean)
      .join(" ");

    return getComponentClassName("af-icon", "", newClassModifier);
  }, [variant, hasBackground, size]);

  return (
    <div className={componentClassName}>
      <Svg {...props} />
    </div>
  );
};
