import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";

import { Spinner } from "../Spinner/SpinnerCommon";

export const buttonVariants = {
  primary: "primary",
  "primary-business": "primary-business",
  "primary-inverse": "primary-inverse",
  secondary: "secondary",
  "secondary-inverse": "secondary-inverse",
  tertiary: "tertiary",
  ghost: "ghost",
} as const;

export type ButtonVariants = keyof typeof buttonVariants;

type ButtonProps = {
  variant?: ButtonVariants;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  className,
  variant = "primary",
  iconLeft,
  iconRight,
  disabled,
  loading,
  ...args
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={["af-btn-client", `af-btn-client--${variant}`, className]
      .filter(Boolean)
      .join(" ")}
    disabled={disabled || loading}
    type="button"
    {...args}
  >
    {iconLeft}
    {children}
    {iconRight}
    {loading && <Spinner size={24} variant="gray" />}
  </button>
);
