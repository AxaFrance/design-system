import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { Svg } from "../Svg/Svg";

export const iconVariants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
} as const;
export type IconVariants = keyof typeof iconVariants;

export const sizeVariants = {
  L: "large",
  M: "medium",
  S: "small",
  XS: "extra-small",
} as const;

export type IconProps = {
  icon: string;
  variant?: IconVariants;
  size?: "L" | "M" | "S" | "XS";
  background?: boolean;
  className?: string;
};

export const Icon = ({
  icon,
  variant = "primary",
  size = "S",
  background = false,
  className,
}: IconProps) => {
  const componentClassName = useMemo(() => {
    let newClassModifier = `${variant} ${sizeVariants[size]}`;

    if (background) newClassModifier += " background";

    return getComponentClassName("af-icon", className, newClassModifier);
  }, [variant, className, background, size]);

  return (
    <div data-testid="iconContainer" className={componentClassName}>
      <Svg src={icon} />
    </div>
  );
};
