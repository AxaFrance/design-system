import "@axa-fr/canopee-css/distributeur/Title/Title.css";
import {
  type ComponentPropsWithRef,
  type PropsWithChildren,
  type ReactElement,
  type ReactNode,
} from "react";

import { getClassName } from "../utilities/helpers/getClassName";

type Headings = "h2" | "h3" | "h4";

type TitleProps = ComponentPropsWithRef<"h2"> & {
  /** @deprecated Use `className` instead. */
  classModifier?: string;
  heading?: Headings;
  contentLeft?: ReactElement;
  contentRight?: ReactNode;
};

const baseClass = "af-title";

export const Title = ({
  className,
  classModifier,
  children,
  heading: Heading = "h2",
  contentLeft,
  contentRight,
  ...otherProps
}: PropsWithChildren<TitleProps>) => {
  const componentClassName = getClassName({
    baseClassName: baseClass,
    modifiers: classModifier?.split(" "),
    className,
  });

  return (
    <div className={`${baseClass}--container`}>
      <Heading className={componentClassName} {...otherProps}>
        {children}
        {contentLeft}
      </Heading>
      {contentRight ? (
        <div className="content-right">{contentRight}</div>
      ) : null}
    </div>
  );
};
Title.displayName = "Title";
