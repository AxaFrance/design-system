import { ReactNode } from "react";
import { getComponentClassName } from "../../../utilities";

type FieldProps = {
  isVisible?: boolean;
  className?: string;
  classModifier?: string;
  children?: ReactNode;
};

/**
 * @deprecated This component is deprecated and will be removed in future versions.
 * This was an internal component and it is not recommended to use it directly in your code as it is not a public API.
 */
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

FieldInput.displayName = "FieldInput";
