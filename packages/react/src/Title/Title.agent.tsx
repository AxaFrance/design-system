import "@axa-fr/design-system-css/dist/Title/Title.agent.scss";
import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";
import { cx } from "classix";

type TitleProps = ComponentPropsWithRef<"h1"> & {
  classModifier?: string;
};

export const Title = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<TitleProps>
>(({ className, classModifier, children, ...otherProps }, ref) => {
  return (
    <h1 ref={ref} className={cx(classModifier, className)} {...otherProps}>
      {children}
    </h1>
  );
});
Title.displayName = "Title";
