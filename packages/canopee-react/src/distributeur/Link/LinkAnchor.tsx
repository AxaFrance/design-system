import classnames from "classnames";
import { type AnchorHTMLAttributes } from "react";
import { linkClassName } from "./linkClassName";
import {
  ClickableGhost,
  type ClickableComponentProps,
} from "../ClickableGhost";

type AnchorLinkProps = ClickableComponentProps & {
  className?: string;
  disabled?: boolean;
  variant?: "default" | "reverse";
};

type LinkComponentProps = AnchorHTMLAttributes<HTMLAnchorElement> &
  AnchorLinkProps;

const LinkAnchor = ({
  className,
  target,
  rel,
  leftIcon,
  children,
  rightIcon,
  disabled,
  variant,
  ...restProps
}: LinkComponentProps) => {
  const finalClassName = classnames(linkClassName, className, {
    [`${linkClassName}--reverse`]: variant === "reverse",
  });

  return (
    <ClickableGhost
      component="a"
      className={finalClassName}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      aria-disabled={disabled ?? restProps["aria-disabled"]}
      target={target}
      {...restProps}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </ClickableGhost>
  );
};

LinkAnchor.displayName = "LinkAnchor";

export { LinkAnchor, type LinkComponentProps };
