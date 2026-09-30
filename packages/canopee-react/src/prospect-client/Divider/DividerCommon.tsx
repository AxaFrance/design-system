import { useMemo } from "react";
import { getClassName } from "../utilities/getClassName";

type DividerProps = {
  className?: string;
};

export const Divider = ({ className }: DividerProps) => {
  const componentClassName = useMemo(
    () => getClassName({ baseClassName: "af-divider", className }),
    [className],
  );

  return <hr className={componentClassName} />;
};
