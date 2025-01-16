import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useMemo,
  type ReactNode,
} from "react";
import { Svg } from "../Svg";
import { getComponentClassName } from "../utilities";

type LinkProps = {
  openInNewTab?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  classModifier?: string;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
  openInNewTab = false,
  leftIcon,
  rightIcon,
  children,
  className,
  classModifier = "",
  ...props
}: PropsWithChildren<LinkProps>) => {
  const newTabProps = openInNewTab && {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  const componentClassName = useMemo(
    () =>
      getComponentClassName(
        "af-link",
        className,
        `${classModifier}${!className && openInNewTab ? " openInNewTab" : ""}`,
      ),
    [classModifier, className, openInNewTab],
  );

  return (
    <a className={componentClassName} href={href} {...newTabProps} {...props}>
      {leftIcon}
      {children}
      {(openInNewTab || Boolean(rightIcon)) &&
        (rightIcon ?? <Svg src={openInNew} />)}
    </a>
  );
};
