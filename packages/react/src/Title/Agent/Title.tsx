import "@axa-fr/design-system-css/dist/Title/Agent/Title.scss";
import { ComponentPropsWithRef, PropsWithChildren, forwardRef } from "react";

import { getComponentClassName } from "../../Form/core";

type Headings = "h2" | "h3" | "h4";

type TitleProps = ComponentPropsWithRef<"h2"> & {
  classModifier?: string;
  heading?: Headings;
};

export const Title = forwardRef<
  HTMLHeadingElement,
  PropsWithChildren<TitleProps>
>(
  (
    {
      className,
      classModifier,
      children,
      heading: Heading = "h2",
      ...otherProps
    },
    ref,
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-title",
    );

    return (
      <Heading ref={ref} className={componentClassName} {...otherProps}>
        {children}
      </Heading>
    );
  },
);
Title.displayName = "Title";
