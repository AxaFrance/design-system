import { ComponentPropsWithRef } from "react";
import {
  Icon,
  IconVariants,
  IconSizeVariants,
  iconSizeVariants,
} from "../Icon/IconCommon";
import { getClassName } from "../utilities/getClassName";

export type ClickIconProps = ComponentPropsWithRef<"button"> & {
  src: string;
  className?: string;
  iconVariant?: IconVariants;
  iconClassName?: string;
  size?: IconSizeVariants;
  hasBackground?: boolean;
};

export const ClickIcon = ({
  src,
  className,
  iconVariant = "primary",
  iconClassName,
  size = "S",
  hasBackground = true,
  ...props
}: ClickIconProps) => {
  const componentClassName = getClassName({
    baseClassName: "af-click-icon",
    modifiers: [!hasBackground && "without-background", iconSizeVariants[size]],
    className,
  });
  return (
    <button
      type="button"
      className={componentClassName}
      disabled={iconVariant === "disabled"}
      {...props}
    >
      <Icon
        src={src}
        variant={iconVariant}
        className={iconClassName}
        size={size}
      />
    </button>
  );
};
