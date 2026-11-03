import type { ReactNode } from "react";
import { CardButton } from "../../../CardButton/CardButton";
import { Svg } from "../../../Svg";
import { getClassName } from "../../../utilities/helpers/getClassName";
import { CheckboxItem } from "./CheckboxItem";
import type { CheckboxTextProps } from "./CheckboxText";

export type CheckboxCardProps = CheckboxTextProps & {
  icon?: ReactNode;
  action?: ReactNode;
  orientation?: "horizontal" | "vertical";
};

export const CheckboxCard = ({
  id,
  label,
  icon,
  action,
  orientation = "horizontal",
  ...props
}: CheckboxCardProps) => (
  <div
    className={getClassName({
      baseClassName: "af-checkbox-card",
      modifiers: [orientation],
    })}
  >
    <CardButton
      component="label"
      htmlFor={id}
      className="af-checkbox__card"
      orientation={orientation}
    >
      <CheckboxItem id={id} {...props} />
      {typeof icon === "string" ? (
        <Svg className="af-basecard__icon" src={icon} />
      ) : (
        icon
      )}
      <span className="af-checkbox-card__label">{label}</span>
    </CardButton>
    {action ? <span className="af-checkbox-card__action">{action}</span> : null}
  </div>
);
