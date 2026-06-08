import type { ReactNode } from "react";
import { BaseCard, type BaseCardProps } from "../Card/BaseCard";
import "@axa-fr/canopee-css/distributeur/CardButton/CardButton.css";
import { getClassName } from "../utilities/helpers/getClassName";

type CardButtonOwnProps = {
  className?: string;
  children?: ReactNode;
  icon?: ReactNode;
  orientation?: "horizontal" | "vertical";
};

type CardButtonAsButtonProps = CardButtonOwnProps &
  Omit<
    Extract<BaseCardProps, { component?: "button" }>,
    "className" | "children"
  >;

type CardButtonAsLabelProps = CardButtonOwnProps &
  Omit<
    Extract<BaseCardProps, { component: "label" }>,
    "className" | "children"
  >;

export type CardButtonProps = CardButtonAsButtonProps | CardButtonAsLabelProps;

export const CardButton = ({
  className,
  children = "Card Button",
  icon = null,
  orientation = "horizontal",
  ...props
}: CardButtonProps) => {
  const finalClassName = getClassName({
    baseClassName: "af-cardbutton",
    className,
    modifiers: [orientation],
  });

  if (props.component === "label") {
    return (
      <BaseCard className={finalClassName} {...props}>
        {icon}
        {children}
      </BaseCard>
    );
  }

  return (
    <BaseCard className={finalClassName} {...props}>
      {icon}
      {children}
    </BaseCard>
  );
};
