import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  useMemo,
  type ReactNode,
} from "react";
import { Svg } from "../Svg/Svg";
import { getComponentClassName } from "../utilities/getComponentClassName";

export const linkVariants = {
  underline: "underline",
  arrow: "arrow",
  "underline-inverse": "underline-inverse",
  "arrow-inverse": "arrow-inverse",
} as const;

export type LinkVariants = keyof typeof linkVariants;

type LinkProps = {
  variant?: LinkVariants;
  openInNewTab?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  classModifier?: string;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
  variant = "underline",
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
        `${classModifier}${!className && openInNewTab ? " openInNewTab" : ""} ${variant}`,
      ),
    [classModifier, className, openInNewTab, variant],
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
