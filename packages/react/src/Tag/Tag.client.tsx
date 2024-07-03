import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../Form/core";

type TagProps = ComponentProps<"div"> & {
  classModifier?: string;
};

export const Tag = ({
  children,
  className,
  classModifier = "",
  ...divProps
}: TagProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName(className, classModifier, "af-tag"),
    [className, classModifier],
  );

  return (
    <div className={componentClassName} {...divProps}>
      <span className="af-tag__label">{children}</span>
    </div>
  );
};
