import {
  ComponentPropsWithoutRef,
  forwardRef,
  PropsWithChildren,
  ReactNode,
} from "react";
import classNames from "classnames";

import "@axa-fr/design-system-slash-css/dist/Button/Button.scss";

export type Variants = "primary" | "secondary" | "validated" | "danger";
export type Sizes = "default" | "small";

type ButtonProps = {
  variant?: Variants;
  size?: Sizes;
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
      size = "default",
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
        size !== "default" && `${DEFAULT_CLASS_NAME}--${size}`,
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
