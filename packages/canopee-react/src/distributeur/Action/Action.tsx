import "@axa-fr/canopee-css/distributeur/Action/Action.css";
import classNames from "classnames";
import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type ActionCoreProps = ComponentPropsWithRef<"a"> & {
  icon: string;
  /** @deprecated Use `className` instead. */
  classModifier?: string;
};

export const Action = ({
  icon,
  className,
  classModifier,
  ...otherProps
}: ActionCoreProps) => {
  const componentClassName = classNames(
    "btn",
    getClassName({
      baseClassName: "af-btn--circle",
      modifiers: classModifier?.split(" "),
      className,
    }),
  );
  return (
    <a {...otherProps} className={componentClassName}>
      <i role="img" className={`glyphicon glyphicon-${icon}`} />
    </a>
  );
};

Action.displayName = "Action";
