import classNames from "classnames";
import {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from "react";

import "@axa-fr/design-system-slash-css/dist/Button/Button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "validated"
  | "danger"
  | "ghost"
  | "ghost-reverse";

type ButtonProps = {
  variant?: ButtonVariant;
  small?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

const DEFAULT_CLASS_NAME = "af-btn";

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(
  (
    {
      variant = "primary",
      small,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref,
  ) => (
    <button
      type="button"
      className={classNames(
        DEFAULT_CLASS_NAME,
        variant !== "primary" && `${DEFAULT_CLASS_NAME}--${variant}`,
        small && `${DEFAULT_CLASS_NAME}--small`,
        className,
      )}
      {...props}
      ref={ref}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </button>
  ),
);

Button.displayName = "Button";
