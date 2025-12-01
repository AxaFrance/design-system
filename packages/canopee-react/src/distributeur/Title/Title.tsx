import "@axa-fr/canopee-css/distributeur/Title/Title.css";
import {
  ComponentPropsWithRef,
  PropsWithChildren,
  ReactElement,
  ReactNode,
  forwardRef,
} from "react";

import { getComponentClassName } from "../utilities";

type Headings = "h2" | "h3" | "h4";

type TitleProps = ComponentPropsWithRef<"h2"> & {
  classModifier?: string;
  heading?: Headings;
  contentLeft?: ReactElement;
  contentRight?: ReactNode;
};

const baseClass = "af-title";

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
      contentLeft,
      contentRight,
      ...otherProps
    },
    ref,
  ) => {
    const componentClassName = getComponentClassName(
      className,
      classModifier,
      baseClass,
    );

    return (
      <div className={`${baseClass}--container`}>
        <Heading ref={ref} className={componentClassName} {...otherProps}>
          {children}
          {contentLeft}
        </Heading>
        {contentRight ? (
          <div className="content-right">{contentRight}</div>
        ) : null}
      </div>
    );
  },
);
Title.displayName = "Title";
