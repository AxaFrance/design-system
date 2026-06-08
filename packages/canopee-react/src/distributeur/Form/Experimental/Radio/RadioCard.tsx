import { type ReactNode } from "react";
import { CardButton } from "../../../CardButton/CardButton";
import { Svg } from "../../../Svg";
import { RadioItem, type RadioItemProps } from "./RadioItem";
import { getClassName } from "../../../utilities/helpers/getClassName";

export type RadioCardProps = {
  label?: string;
  icon?: ReactNode;
  action?: ReactNode;
  orientation?: "horizontal" | "vertical";
} & RadioItemProps;

export const RadioCard = ({
  id,
  icon,
  label,
  action,
  orientation = "horizontal",
  ...props
}: RadioCardProps) => {
  const radioCardClassName = getClassName({
    baseClassName: "af-radiocard",
    modifiers: [orientation],
  });

  return (
    <div className={radioCardClassName}>
      <CardButton
        component="label"
        htmlFor={id}
        className="af-radio__card"
        orientation={orientation}
        style={{ flex: 1 }}
      >
        <RadioItem id={id} {...props} />
        {typeof icon === "string" ? (
          <Svg className="af-basecard__icon" src={icon} />
        ) : (
          icon
        )}
        <span className="af-radiocard__label">{label}</span>
      </CardButton>
      {action ? <span className="af-radiocard__action">{action}</span> : null}
    </div>
  );
};
