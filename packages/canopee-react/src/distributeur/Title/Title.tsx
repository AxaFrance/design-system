import "@axa-fr/canopee-css/distributeur/Title/Title.css";
import {
  type ComponentPropsWithRef,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
  forwardRef,
} from "react";

import { Divider } from "../Divider/Divider";
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

    const hasContent = Boolean(contentLeft || contentRight);

    return (
      <div className={`${baseClass}--container`}>
        <Heading ref={ref} className={componentClassName} {...otherProps}>
          {children}
        </Heading>
        {hasContent ? (
          <div className={`${baseClass}--content`}>
            {contentLeft ? (
              <div className="content-left">{contentLeft}</div>
            ) : null}
            <Divider mode="horizontal" />
            {contentRight ? (
              <div className="content-right">{contentRight}</div>
            ) : null}
          </div>
        ) : null}
      </div>
    );
  },
);
Title.displayName = "Title";
