import chevron from "@material-symbols/svg-400/outlined/chevron_right.svg";
import { useMemo } from "react";
import { Svg } from "../../Svg";
import { getComponentClassName } from "../../utilities";
import type { TClickItem } from "./types";

/**
 * @deprecated Use `ClickItem` from `@axa-fr/design-system-apollo-react/lf` instead.
 */
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
  disabled = isDisabled,
  className,
  classModifier = "",
  actionIcon = <Svg src={chevron} aria-hidden />,
  ...otherProps
}: TClickItem) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        "af-click-item",
        className,
        `${classModifier}${disabled ? " disabled" : ""}`,
      ),
    [className, classModifier, disabled],
  );

  return (
    <ClickComponent
      className={componentClassName}
      disabled={disabled}
      {...otherProps}
    >
      <div className="af-click-item__content">
        {icon ? <div className="af-click-item__icon">{icon}</div> : null}
        <div className="af-click-item__label">{children}</div>
      </div>
      <div className="af-click-item__action">{actionIcon}</div>
    </ClickComponent>
  );
};
