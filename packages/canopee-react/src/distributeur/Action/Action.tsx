import "@axa-fr/canopee-css/distributeur/Action/Action.css";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { getComponentClassName } from "../utilities";

type ActionCoreProps = ComponentPropsWithoutRef<"a"> & {
  icon: string;
  classModifier?: string;
};

export const Action = forwardRef<HTMLAnchorElement, ActionCoreProps>(
  ({ icon, className, classModifier, ...otherProps }, ref) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "btn af-btn--circle",
    );
    return (
      <a {...otherProps} className={componentClassName} ref={ref}>
        <i role="img" className={`glyphicon glyphicon-${icon}`} />
      </a>
    );
  },
);

Action.displayName = "Action";
