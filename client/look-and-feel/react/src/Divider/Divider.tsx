import { useMemo } from "react";
import { getComponentClassName } from "../utilities";

type DividerProps = {
  className?: string;
  classModifier?: string;
};

export const Divider = ({ className, classModifier }: DividerProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName(className, classModifier, "af-divider"),
    [className, classModifier],
  );

  return <hr className={componentClassName} />;
};
