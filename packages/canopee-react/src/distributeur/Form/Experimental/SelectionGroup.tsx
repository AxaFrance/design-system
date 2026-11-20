import type { ReactNode } from "react";
import classNames from "classnames";
import { getClassName } from "../../utilities/helpers/getClassName";

type SelectionGroupProps = {
  baseClassName: string;
  children: ReactNode;
  className?: string;
  orientation: "horizontal" | "vertical";
  variant: "button" | "text" | "card";
};

export const SelectionGroup = ({
  baseClassName,
  children,
  className,
  orientation,
  variant,
}: SelectionGroupProps) => {
  const selectionCardClassName = getClassName({
    baseClassName: "af-selection-card",
    modifiers: [orientation, variant],
  });

  const componentClassName = getClassName({
    baseClassName,
    modifiers: [orientation, variant],
    className,
  });

  return (
    <div className={classNames(selectionCardClassName, componentClassName)}>
      {children}
    </div>
  );
};
