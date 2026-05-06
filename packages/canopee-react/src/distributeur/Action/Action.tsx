import "@axa-fr/canopee-css/distributeur/Action/Action.css";
import classNames from "classnames";
import { type ComponentPropsWithoutRef, forwardRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type ActionCoreProps = ComponentPropsWithoutRef<"a"> & {
  icon: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const Action = forwardRef<HTMLAnchorElement, ActionCoreProps>(
  ({ icon, className, classModifier, ...otherProps }, ref) => {
    const componentClassName = classNames(
      "btn",
      getClassName({
        baseClassName: "af-btn--circle",
        modifiers: classModifier?.split(" "),
        className,
      }),
    );
    return (
      <a {...otherProps} className={componentClassName} ref={ref}>
        <i role="img" className={`glyphicon glyphicon-${icon}`} />
      </a>
    );
  },
);

Action.displayName = "Action";
