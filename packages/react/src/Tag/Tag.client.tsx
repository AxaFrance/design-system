import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../Form/core";

type TagProps = ComponentProps<"div"> & {
  isMobile?: boolean;
  classModifier?: string;
};

export const Tag = ({
  children,
  className,
  classModifier = "",
  isMobile = false,
  ...divProps
}: TagProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        className,
        isMobile ? `${classModifier} mobile` : classModifier,
        "af-tag",
      ),
    [className, isMobile, classModifier],
  );

  return (
    <div className={componentClassName} {...divProps}>
      <span className="af-tag__label">{children}</span>
    </div>
  );
};
