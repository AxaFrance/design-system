import { ReactNode } from "react";
import { getComponentClassName } from "./getComponentClassName";

type FieldProps = {
  isVisible?: boolean;
  className?: string;
  classModifier?: string;
  children?: ReactNode;
};

export const FieldInput = ({
  children,
  className = "",
  classModifier = "",
  isVisible = true,
}: FieldProps) => {
  if (!isVisible) {
    return null;
  }

  const newClassName = getComponentClassName(className, classModifier, "");
  return <div className={newClassName}>{children}</div>;
};
