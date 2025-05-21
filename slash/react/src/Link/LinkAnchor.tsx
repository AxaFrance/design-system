import classnames from "classnames";
import { ComponentPropsWithRef, forwardRef, type ReactNode } from "react";
import { linkClassName } from "./linkClassName";

type AnchorLinkProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
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
