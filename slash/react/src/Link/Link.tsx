import classnames from "classnames";
import { type ReactNode } from "react";

import "@axa-fr/design-system-slash-css/dist/Link/Link.scss";

type BaseProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
};

export type LinkProps = BaseProps &
  (
    | (React.ButtonHTMLAttributes<HTMLButtonElement> & {
        component: "button";
      })
    | (React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        component?: "a";
      })
  );

export const Link = ({
  className,
  component,
  leftIcon,
  rightIcon,
  disabled,
  children,
  "aria-disabled": ariaDisabled,
  ...props
}: LinkProps) => {
  const finalClassName = classnames("af-slash-link", className);
  if (component === "a") {
    const { target, rel, ...restProps } =
      props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a
        className={finalClassName}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        {...restProps}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </a>
    );
  }

  const restProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      className={finalClassName}
      type="button"
      aria-disabled={disabled ?? ariaDisabled}
      {...restProps}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  );
};

Link.displayName = "Link";
