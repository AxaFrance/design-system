import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";
import { getComponentClassName } from "../Form/core";
import "@axa-fr/design-system-slash-css/dist/Badge/Badge.scss";

type BadgeProps = ComponentPropsWithRef<"span"> & {
  classModifier?: string;
  disabled?: boolean;
};

export const Badge = forwardRef<HTMLSpanElement, PropsWithChildren<BadgeProps>>(
  ({ children, className, classModifier, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-badge",
    );
    return (
      <span ref={ref} className={componentClassName} {...otherProps}>
        {children}
      </span>
    );
  },
);

Badge.displayName = "Badge";
