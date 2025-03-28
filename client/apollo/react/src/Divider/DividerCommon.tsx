import { useMemo } from "react";
import { getComponentClassName } from "../utilities/getComponentClassName";

type DividerProps = {
  className?: string;
  classModifier?: string;
};

export const Divider = ({ className, classModifier }: DividerProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-divider", className, classModifier),
    [className, classModifier],
  );

  return <hr className={componentClassName} />;
};
