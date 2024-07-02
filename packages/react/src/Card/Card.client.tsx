import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../Form/core";

type CardProps = ComponentProps<"section"> &
  ComponentProps<"button"> & {
    classModifier?: string;
  };

export const Card = ({
  children,
  className,
  classModifier,
  onClick,
  ...otherProps
}: CardProps) => {
  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        className,
        onClick ? `${classModifier} button` : classModifier,
        "af-card",
      ),
    [className, onClick, classModifier],
  );

  return onClick ? ( // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <button
      type="button"
      className={componentClassName}
      tabIndex={0}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  ) : (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-tabindex
    <section className={componentClassName} tabIndex={0} {...otherProps}>
      {children}
    </section>
  );
};
