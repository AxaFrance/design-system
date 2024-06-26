import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../Form/core";

type ChipProps = ComponentProps<"div"> & {
  isMobile?: boolean;
  classModifier?: string;
};

export const Chip = ({
  children,
  className,
  classModifier = "",
  isMobile = false,
  ...divProps
}: ChipProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        className,
        isMobile ? `${classModifier} mobile` : classModifier,
        "af-chip",
      ),
    [className, isMobile, classModifier],
  );

  return (
    <div className={componentClassName} {...divProps}>
      <span className="af-chip__label">{children}</span>
    </div>
  );
};
