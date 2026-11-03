import type { ReactNode } from "react";
import { CardButton } from "../../CardButton/CardButton";
import { Svg } from "../../Svg";
import { getClassName } from "../../utilities/helpers/getClassName";

type SelectionCardProps = {
  id?: string;
  label?: ReactNode;
  icon?: ReactNode;
  action?: ReactNode;
  orientation: "horizontal" | "vertical";
  baseClassName: string;
  cardClassName: string;
  children: ReactNode;
};

export const SelectionCard = ({
  id,
  label,
  icon,
  action,
  orientation,
  baseClassName,
  cardClassName,
  children,
}: SelectionCardProps) => (
  <div
    className={getClassName({
      baseClassName: "af-selection-card-item",
      modifiers: [orientation],
      className: getClassName({
        baseClassName,
        modifiers: [orientation],
      }),
    })}
  >
    <CardButton
      component="label"
      htmlFor={id}
      className={`af-selection-card-item__card ${cardClassName}`}
      orientation={orientation}
    >
      {children}
      {typeof icon === "string" ? (
        <Svg className="af-basecard__icon" src={icon} />
      ) : (
        icon
      )}
      <span className={`af-selection-card-item__label ${baseClassName}__label`}>
        {label}
      </span>
    </CardButton>
    {action ? (
      <span
        className={`af-selection-card-item__action ${baseClassName}__action`}
      >
        {action}
      </span>
    ) : null}
  </div>
);
