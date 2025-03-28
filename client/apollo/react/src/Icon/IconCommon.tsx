import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";
import { Svg } from "../Svg/Svg";

export const iconVariants = {
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
} as const;
export type IconVariants = keyof typeof iconVariants;

export const iconSizeVariants = {
  L: "large",
  M: "medium",
  S: "small",
  XS: "extra-small",
} as const;
export type IconSizeVariants = keyof typeof iconSizeVariants;

export type IconProps = {
  icon: string;
  variant?: IconVariants;
  size?: IconSizeVariants;
  background?: boolean;
};

export const Icon = ({
  icon,
  variant = "primary",
  size = "S",
  background = false,
}: IconProps) => {
  const componentClassName = useMemo(() => {
    let newClassModifier = `${variant} ${iconSizeVariants[size]}`;

    if (background) newClassModifier += " background";

    return getComponentClassName("af-icon", "", newClassModifier);
  }, [variant, background, size]);

  return (
    <div data-testid="iconContainer" className={componentClassName}>
      <Svg src={icon} />
    </div>
  );
};
