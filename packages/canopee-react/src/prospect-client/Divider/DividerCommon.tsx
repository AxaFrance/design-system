import { useMemo } from "react";
import { getClassName } from "../utilities/getClassName";

type DividerProps = {
  className?: string;
  classModifier?: string;
};

export const Divider = ({ className, classModifier }: DividerProps) => {
  const componentClassName = useMemo(
    () =>
      getClassName({
        baseClassName: "af-divider",
        className,
        modifiers: classModifier?.split(" ").filter(Boolean) ?? [],
      }),
    [className, classModifier],
  );

  return <hr className={componentClassName} />;
};
