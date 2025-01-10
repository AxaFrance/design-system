import { useMemo, type ComponentProps } from "react";
import { getComponentClassName } from "../utilities";

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

  return (
    <Component
      className={componentClassName}
      {...(onClick ? { type: "button", onClick } : {})}
      {...otherProps}
    >
      {children}
    </Component>
  );
};
