import classNames from "classnames";
import {
  type ComponentPropsWithoutRef,
  type ElementType,
  forwardRef,
  type PropsWithChildren,
  type ReactNode,
} from "react";

import "@axa-fr/canopee-css/distributeur/Button/Button.css";
import type { ButtonVariant } from "./Button";
import type { LinkVariant } from "../Link/LinkAnchor";

type BaseProps = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  small?: boolean;
  className?: string;
};

export type ButtonProps = BaseProps & {
  as?: "button";
  variant?: ButtonVariant;
} & ComponentPropsWithoutRef<"button">;

export type LinkProps = BaseProps & {
  as: "a";
  variant?: LinkVariant;
} & ComponentPropsWithoutRef<"a">;

type ActionProps = ButtonProps | LinkProps;

const DEFAULT_CLASS_NAME = "af-btn";

const getClassName = (props: ActionProps): string => {
  if (props.as === "a") {
    const { variant = "default", className } = props;
    return classNames(
      DEFAULT_CLASS_NAME,
      `${DEFAULT_CLASS_NAME}--${variant === "reverse" ? "ghost-reverse" : "ghost"}`,
      className,
    );
  }

  const { variant = "primary", small, className } = props;
  return classNames(
    DEFAULT_CLASS_NAME,
    variant !== "primary" && `${DEFAULT_CLASS_NAME}--${variant}`,
    small && `${DEFAULT_CLASS_NAME}--small`,
    className,
  );
};

export const ButtonPolymorphe = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  PropsWithChildren<ActionProps>
>(
  (
    {
      as = "button",
      variant,
      small,
      leftIcon,
      rightIcon,
      className,
      children,
      ...props
    },
    ref,
  ) => {
    const Tag = as as ElementType;
    const computedClassName = getClassName({
      as,
      variant,
      small,
      className,
    } as ActionProps);

    return (
      <Tag className={computedClassName} ref={ref} type={as} {...props}>
        {leftIcon}
        {children}
        {rightIcon}
      </Tag>
    );
  },
);

ButtonPolymorphe.displayName = "ButtonPolymorphe";
