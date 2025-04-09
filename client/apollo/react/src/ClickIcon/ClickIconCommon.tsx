import { ComponentPropsWithRef } from "react";
import { Icon } from "../Icon/IconCommon";

export type ClickIconProps = ComponentPropsWithRef<"button"> & {
  src: string;
  className?: string;
};

export const ClickIcon = ({ src, className, ...props }: ClickIconProps) => {
  return (
    <button
      type="button"
      className={["af-click-icon", className].filter(Boolean).join(" ")}
      {...props}
    >
      <Icon src={src} variant="secondary" hasBackground />
    </button>
  );
};
