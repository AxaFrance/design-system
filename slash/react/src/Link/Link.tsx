import classnames from "classnames";
import {
  type ComponentProps,
  type ElementType,
  type ForwardedRef,
  forwardRef,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import "@axa-fr/design-system-slash-css/dist/Link/Link.scss";

export type LinkProps<C extends ElementType> = {
  component?: C;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  disabled?: boolean;
} & ComponentProps<C>;

export const Link = forwardRef(
  <C extends ElementType = "a">(
    {
      className,
      component: Component = "a",
      leftIcon,
      rightIcon,
      target,
      rel,
      disabled,
      children,
      ...props
    }: PropsWithChildren<LinkProps<C>>,
    ref: ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <Component
        className={classnames("af-slash-link", className)}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : rel}
        aria-disabled={disabled ?? props["aria-disabled"]}
        {...props}
        ref={ref}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </Component>
    );
  },
);

Link.displayName = "Link";
