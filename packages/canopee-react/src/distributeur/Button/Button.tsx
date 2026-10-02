import classNames from "classnames";
import { type ComponentPropsWithRef, type PropsWithChildren } from "react";

import "@axa-fr/canopee-css/distributeur/Button/Button.css";
import {
  ClickableGhost,
  type ClickableComponentProps,
} from "../ClickableGhost";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "validated"
  | "danger"
  | "ghost"
  | "ghost-reverse";

type ButtonProps = ClickableComponentProps &
  PropsWithChildren<
    {
      variant?: ButtonVariant;
      small?: boolean;
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
}: ButtonProps) => {
  if (variant === "ghost" || variant === "ghost-reverse") {
    return (
      <ClickableGhost
        component="button"
        type="button"
        variant={variant === "ghost-reverse" ? "reverse" : "ghost"}
        {...props}
      >
        {leftIcon}
        {children}
        {rightIcon}
      </ClickableGhost>
    );
  }
  return (
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
};

Button.displayName = "Button";
