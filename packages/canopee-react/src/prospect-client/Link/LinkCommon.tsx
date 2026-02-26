import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  type ReactNode,
} from "react";
import { Svg } from "../Svg/Svg";
import { getClassName } from "../utilities/getClassName";

export const linkVariants = {
  inverse: "inverse",
} as const;

export type LinkVariants = keyof typeof linkVariants;

type LinkProps = {
  variant?: LinkVariants;
  openInNewTab?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  /**
   * @deprecated Use variant instead
   */
  classModifier?: string;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
  variant,
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

  return (
    <a
      className={getClassName({
        baseClassName: "af-link",
        modifiers: [classModifier, variant, openInNewTab && "openInNewTab"],
        className,
      })}
      href={href}
      {...newTabProps}
      {...props}
    >
      {leftIcon}
      {children}
      {openInNewTab || Boolean(rightIcon)
        ? (rightIcon ?? <Svg src={openInNew} />)
        : null}
    </a>
  );
};
