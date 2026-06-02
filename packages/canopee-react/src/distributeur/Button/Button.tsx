import { forwardRef, type PropsWithChildren } from "react";

import "@axa-fr/canopee-css/distributeur/Button/Button.css";
import { ButtonPolymorphe, type ButtonProps } from "./ButtonPolymorphe";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "validated"
  | "danger"
  | "ghost"
  | "ghost-reverse";

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
    <ButtonPolymorphe
      type="button"
      className={className}
      variant={variant}
      small={small}
      {...props}
      ref={ref}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </ButtonPolymorphe>
  ),
);

Button.displayName = "Button";
