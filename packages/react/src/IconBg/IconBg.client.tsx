import { useMemo, type ReactNode } from "react";
import { getComponentClassName } from "../Form/core";

type IconBgProps = {
  isDisabled?: boolean;
  className?: string;
  classModifier?: string;
  children: ReactNode;
};

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

    return getComponentClassName(className, newClassModifier, "af-icon-bg");
  }, [classModifier, isDisabled, className]);

  return <div className={componentClassName}>{children}</div>;
};
