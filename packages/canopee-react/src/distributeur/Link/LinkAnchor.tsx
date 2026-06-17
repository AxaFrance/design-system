import classnames from "classnames";
import { type ComponentPropsWithRef, type ReactElement } from "react";
import { Svg } from "../Svg";
import { linkClassName } from "./linkClassName";

type AnchorLinkProps = {
  leftIcon?: ReactElement<typeof Svg>;
  rightIcon?: ReactElement<typeof Svg>;
  className?: string;
  disabled?: boolean;
  variant?: "default" | "reverse";
};

type LinkComponentProps = ComponentPropsWithRef<"a"> & AnchorLinkProps;

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
    <a
      className={finalClassName}
      rel={target === "_blank" ? "noopener noreferrer" : rel}
      aria-disabled={disabled ?? restProps["aria-disabled"]}
      target={target}
      {...restProps}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </a>
  );
};

LinkAnchor.displayName = "LinkAnchor";

export { LinkAnchor, type LinkComponentProps };
