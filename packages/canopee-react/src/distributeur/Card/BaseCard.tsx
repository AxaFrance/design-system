import type {
  ButtonHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react";
import { getClassName } from "../utilities/helpers/getClassName";

type BaseCardOwnProps = {
  className?: string;
  orientation?: "horizontal" | "vertical";
  children: ReactNode;
};

type BaseCardButtonProps = BaseCardOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    component?: "button";
  };

type BaseCardLabelProps = BaseCardOwnProps &
  Omit<LabelHTMLAttributes<HTMLLabelElement>, "className" | "children"> & {
    component: "label";
  };

export type BaseCardProps = BaseCardButtonProps | BaseCardLabelProps;

const isLabelCard = (props: BaseCardProps): props is BaseCardLabelProps =>
  props.component === "label";

const stripCardInternalProps = <T extends Record<string, unknown>>(props: T) =>
  Object.fromEntries(
    Object.entries(props).filter(
      ([key]) =>
        key !== "component" && key !== "className" && key !== "children",
    ),
  );

export const BaseCard = (props: BaseCardProps) => {
  const { className, children, orientation } = props;

  const finalClassName = getClassName({
    baseClassName: "af-basecard",
    modifiers: [orientation],
    className,
  });

  if (isLabelCard(props)) {
    const labelProps = stripCardInternalProps(props) as Omit<
      BaseCardLabelProps,
      "component" | "className" | "children"
    >;

    return (
      <label className={finalClassName} {...labelProps}>
        {children}
      </label>
    );
  }

  const buttonProps = stripCardInternalProps(props) as Omit<
    BaseCardButtonProps,
    "component" | "className" | "children"
  >;
  const { type } = props;

  if (type === "submit") {
    return (
      <button type="submit" className={finalClassName} {...buttonProps}>
        {children}
      </button>
    );
  }

  return (
    <button type="button" className={finalClassName} {...buttonProps}>
      {children}
    </button>
  );
};
