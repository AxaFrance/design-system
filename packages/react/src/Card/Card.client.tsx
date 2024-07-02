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
    () => getComponentClassName(className, classModifier, "af-card"),
    [className, classModifier],
  );
  const Component = useMemo(() => (onClick ? "button" : "section"), [onClick]);
  const componentProps: ComponentProps<"section"> & ComponentProps<"button"> =
    useMemo(
      () => (onClick ? { type: "button", onClick } : { tabIndex: 0 }),
      [onClick],
    );

  return (
    <Component
      className={componentClassName}
      {...componentProps}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
