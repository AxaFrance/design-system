import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../Form/core";
import "@axa-fr/design-system-slash-css/dist/Action/Action.scss";

type ActionCoreProps = ComponentPropsWithoutRef<"a"> & {
  icon: string;
  classModifier?: string;
};

export const Action = ({
  icon,
  className,
  classModifier,
  ...otherProps
}: ActionCoreProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "btn af-btn--circle",
  );
  return (
    <a {...otherProps} className={componentClassName}>
      <i className={`glyphicon glyphicon-${icon}`} />
    </a>
  );
};
