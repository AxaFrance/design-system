import "@axa-fr/design-system-slash-css/dist/Title/Title.scss";
import {
  ComponentPropsWithRef,
  PropsWithChildren,
  ReactElement,
  forwardRef,
} from "react";

import { getComponentClassName } from "../utilities";

type Headings = "h2" | "h3" | "h4";

type TitleProps = ComponentPropsWithRef<"h2"> & {
  classModifier?: string;
  heading?: Headings;
  variant?: "content-left" | "content-right";
  content?: ReactElement;
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
      variant = "content-left",
      content,
      ...otherProps
    },
    ref,
  ) => {
    let componentClassName = getComponentClassName(
      className,
      classModifier,
      "af-title",
    );

    if (!className && variant) {
      componentClassName = `${componentClassName} af-title--${variant}`;
    }

    return variant === "content-right" ? (
      <div className="af-title-container">
        <Heading ref={ref} className={componentClassName} {...otherProps}>
          {children}
        </Heading>
        {content}
      </div>
    ) : (
      <Heading ref={ref} className={componentClassName} {...otherProps}>
        {children}
        {content}
      </Heading>
    );
  },
);
Title.displayName = "Title";
