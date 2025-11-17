import { ComponentPropsWithRef } from "react";
import { Icon, IconVariants } from "../Icon/IconCommon";

export type ClickIconProps = ComponentPropsWithRef<"button"> & {
  src: string;
  className?: string;
  iconVariant?: IconVariants;
  iconClassName?: string;
};

export const ClickIcon = ({
  src,
  className,
  iconVariant = "primary",
  iconClassName,
  ...props
}: ClickIconProps) => (
  <button
    type="button"
    className={["af-click-icon", className].filter(Boolean).join(" ")}
    disabled={iconVariant === "disabled"}
    {...props}
  >
    <Icon src={src} variant={iconVariant} className={iconClassName} />
  </button>
);
