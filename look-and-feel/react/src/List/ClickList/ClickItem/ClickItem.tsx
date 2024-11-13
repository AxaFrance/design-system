import chevron from "@material-symbols/svg-400/outlined/chevron_right.svg";
import { useMemo } from "react";
import { Svg } from "../../../Svg";
import { getComponentClassName } from "../../../utilities";
import type { TClickItem } from "./types";

export const ClickItem = ({
  children,
  icon,
  parentClickComponent: ClickComponent = ({
    children: parentClickComponentChildren,
    ...parentClickComponentProps
  }) => (
    <button type="button" {...parentClickComponentProps}>
      {parentClickComponentChildren}
    </button>
  ),
  isDisabled = false,
  className,
  classModifier = "",
  ...otherProps
}: TClickItem) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        className,
        `${classModifier}${isDisabled ? " disabled" : ""}`,
        "af-click-item",
      ),
    [className, classModifier, isDisabled],
  );

  return (
    <ClickComponent
      className={componentClassName}
      disabled={isDisabled}
      aria-disabled={isDisabled}
      {...otherProps}
    >
      <div className="af-click-item__content">
        {icon && <div className="af-click-item__icon">{icon}</div>}
        <div className="af-click-item__label">{children}</div>
      </div>
      <div className="af-click-item__action">
        <Svg src={chevron} aria-hidden />
      </div>
    </ClickComponent>
  );
};
