import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../utilities";

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
    () => getComponentClassName("af-tag", className, classModifier),
    [className, classModifier],
  );

  return (
    <div className={componentClassName} {...divProps}>
      <span className="af-tag__label">{children}</span>
    </div>
  );
};
