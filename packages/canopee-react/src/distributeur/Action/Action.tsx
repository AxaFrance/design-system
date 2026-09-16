import "@axa-fr/canopee-css/distributeur/Action/Action.css";
import classNames from "classnames";
import { type ComponentPropsWithRef } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type ActionCoreProps = ComponentPropsWithRef<"a"> & {
  icon: string;
};

export const Action = ({ icon, className, ...otherProps }: ActionCoreProps) => {
  const componentClassName = classNames(
    "btn",
    getClassName({
      baseClassName: "af-btn--circle",
      className,
    }),
  );
  return (
    <a {...otherProps} className={componentClassName}>
      <i role="presentation" className={`glyphicon glyphicon-${icon}`} />
    </a>
  );
};

Action.displayName = "Action";
