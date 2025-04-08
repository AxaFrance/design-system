import { ComponentPropsWithRef } from "react";
import { Icon } from "../Icon/IconCommon";

export const clickIconVariants = {
  default: "default",
  hover: "hover",
  active: "active",
  disabled: "disabled",
} as const;
export type ClickIconVariants = keyof typeof clickIconVariants;

export type ClickIconProps = ComponentPropsWithRef<"button"> & {
  src: string;
  variant?: ClickIconVariants;
  className?: string;
};

export const ClickIcon = ({
  src,
  variant = "default",
  disabled,
  className,
  ...props
}: ClickIconProps) => {
  return (
    <button
      type="button"
      className={["af-click-icon", `af-click-icon--${variant}`, className]
        .filter(Boolean)
        .join(" ")}
      disabled={disabled || variant === "disabled"}
      {...props}
    >
      <Icon src={src} />
    </button>
  );
};
