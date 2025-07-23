import classnames from "classnames";
import { ComponentPropsWithRef, forwardRef, ReactElement } from "react";
import { linkClassName } from "./linkClassName";
import { Svg } from "../Svg";

type AnchorLinkProps = {
  leftIcon?: ReactElement<typeof Svg>;
  rightIcon?: ReactElement<typeof Svg>;
  className?: string;
  disabled?: boolean;
};

type LinkComponentProps = ComponentPropsWithRef<"a"> & AnchorLinkProps;

const LinkAnchor = forwardRef<HTMLAnchorElement, LinkComponentProps>(
  (
    {
      className,
      target,
      rel,
      leftIcon,
      children,
      rightIcon,
      disabled,
      ...restProps
    }: LinkComponentProps,
    ref,
  ) => {
    const finalClassName = classnames(linkClassName, className);

    return (
      <a
        className={finalClassName}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        aria-disabled={disabled ?? restProps["aria-disabled"]}
        ref={ref}
        target={target}
        {...restProps}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  },
);

LinkAnchor.displayName = "LinkAnchor";

export { LinkAnchor, type LinkComponentProps };
