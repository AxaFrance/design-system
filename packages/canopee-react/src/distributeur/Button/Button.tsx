import classNames from "classnames";
import {
  type ComponentPropsWithRef,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import "@axa-fr/canopee-css/distributeur/Button/Button.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "validated"
  | "danger"
  | "ghost"
  | "ghost-reverse";

type ButtonProps = PropsWithChildren<
  {
    variant?: ButtonVariant;
    small?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
  } & ComponentPropsWithRef<"button">
>;

const DEFAULT_CLASS_NAME = "af-btn";

export const Button = ({
  variant = "primary",
  small,
  leftIcon,
  rightIcon,
  className,
  children,
  ...props
}: ButtonProps) => (
  <button
    type="button"
    className={classNames(
      DEFAULT_CLASS_NAME,
      variant !== "primary" && `${DEFAULT_CLASS_NAME}--${variant}`,
      small && `${DEFAULT_CLASS_NAME}--small`,
      className,
    )}
    {...props}
  >
    {leftIcon}
    {children}
    {rightIcon}
  </button>
);

Button.displayName = "Button";
