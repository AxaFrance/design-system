import type { ButtonHTMLAttributes, LabelHTMLAttributes } from "react";
import { getClassName } from "../utilities/helpers/getClassName";

import "@axa-fr/canopee-css/distributeur/Card/BaseCard.css";

type BaseCardOwnProps = {
  orientation?: "horizontal" | "vertical";
};

type BaseCardButtonProps = BaseCardOwnProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    component?: "button";
  };

type BaseCardLabelProps = BaseCardOwnProps &
  LabelHTMLAttributes<HTMLLabelElement> & {
    component: "label";
  };

export type BaseCardProps = BaseCardButtonProps | BaseCardLabelProps;

const isLabelCard = (props: BaseCardProps): props is BaseCardLabelProps =>
  props.component === "label";

function stripCardInternalProps(
  props: BaseCardLabelProps,
): Omit<
  BaseCardLabelProps,
  "component" | "className" | "children" | "orientation"
>;
function stripCardInternalProps(
  props: BaseCardButtonProps,
): Omit<
  BaseCardButtonProps,
  "component" | "className" | "children" | "orientation"
>;
function stripCardInternalProps(props: BaseCardProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { component, className, children, orientation, ...rest } = props;
  return rest;
}

export const BaseCard = (props: BaseCardProps) => {
  const { className, children, orientation } = props;

  const finalClassName = getClassName({
    baseClassName: "af-basecard",
    modifiers: [orientation],
    className,
  });

  if (isLabelCard(props)) {
    const labelProps = stripCardInternalProps(props);

    return (
      <label className={finalClassName} {...labelProps}>
        {children}
      </label>
    );
  }

  const { type, ...buttonProps } = stripCardInternalProps(props);

  return (
    <button
      type={type === "submit" ? "submit" : "button"}
      className={finalClassName}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
