import { useMemo, type ReactNode } from "react";
import { getComponentClassName } from "../utilities";

type IconBgProps = {
  isDisabled?: boolean;
  className?: string;
  classModifier?: string;
  children: ReactNode;
};

/**
 * @deprecated Use Icon instead
 */
export const IconBg = ({
  children,
  className,
  classModifier,
  isDisabled = false,
}: IconBgProps) => {
  const componentClassName = useMemo(() => {
    let newClassModifier = classModifier;

    if (isDisabled) {
      newClassModifier += " disabled";
    }

    return getComponentClassName("af-icon-bg", className, newClassModifier);
  }, [classModifier, isDisabled, className]);

  return <div className={componentClassName}>{children}</div>;
};
