import { ComponentPropsWithoutRef } from "react";
import { getComponentClassName } from "../agent";
import "@axa-fr/design-system-css/dist/Action/Action.scss";

type ActionProps = ComponentPropsWithoutRef<"a"> & {
  icon: string;
  classModifier?: string;
};

const Action = ({
  icon,
  href = "#",
  tabIndex = 0,
  className,
  classModifier,
  role,
  onClick,
  ...otherProps
}: ActionProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "btn af-btn--circle",
  );
  return (
    <a
      {...otherProps}
      className={componentClassName}
      href={onClick ? "/#" : href}
      role={onClick ? "button" : role}
      onClick={onClick}
      tabIndex={tabIndex}
    >
      <i className={`glyphicon glyphicon-${icon}`} />
    </a>
  );
};

export { Action };
