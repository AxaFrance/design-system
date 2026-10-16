import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Svg } from "../Svg/Svg";
import { getClassName } from "../utilities/getClassName";
import { VisuallyHidden } from "../utilities/VisuallyHidden";

export const linkVariants = {
  inverse: "inverse",
} as const;

export type LinkVariants = keyof typeof linkVariants;

export type LinkProps = {
  variant?: LinkVariants;
  openInNewTab?: boolean;
  /**
   * Visually hidden text, in parentheses, at the end of the name of a link
   * that opens in a new tab. Default: "nouvelle fenêtre".
   */
  newWindowLabel?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
  variant,
  openInNewTab = false,
  newWindowLabel = "nouvelle fenêtre",
  leftIcon,
  rightIcon,
  children,
  className,
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
        modifiers: [variant, openInNewTab && "openInNewTab"],
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
      {/* The link is a flex container: the space is not rendered */}
      {openInNewTab ? (
        <>
          {" "}
          <VisuallyHidden>({newWindowLabel})</VisuallyHidden>
        </>
      ) : null}
    </a>
  );
};
