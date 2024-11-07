import openInNew from "@material-symbols/svg-400/outlined/open_in_new.svg";
import {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  type ReactNode,
} from "react";
import { Svg } from "../Svg";

type LinkProps = {
  openInNewTab?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<"a">;

export const Link = ({
  href,
  openInNewTab = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: PropsWithChildren<LinkProps>) => {
  const newTabProps = openInNewTab && {
    target: "_blank",
    rel: "noopener noreferrer",
  };

  return (
    <a
      className={`af-link ${openInNewTab ? " af-link--openInNewTab" : ""}`}
      href={href}
      {...newTabProps}
      {...props}
    >
      {leftIcon}
      {children}
      {(openInNewTab || Boolean(rightIcon)) &&
        (rightIcon ?? <Svg src={openInNew} />)}
    </a>
  );
};
