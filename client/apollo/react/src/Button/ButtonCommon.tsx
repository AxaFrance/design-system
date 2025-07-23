import type {
  ComponentProps,
  ComponentPropsWithoutRef,
  ComponentType,
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

export type ButtonProps = {
  variant?: ButtonVariants;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
  loading?: boolean;
} & ComponentPropsWithoutRef<"button">;

type ButtonCommonProps = ButtonProps & {
  SpinnerComponent: ComponentType<ComponentProps<typeof Spinner>>;
};

export const ButtonCommon = ({
  children,
  className,
  variant = "primary",
  iconLeft,
  iconRight,
  disabled,
  loading,
  SpinnerComponent,
  ...args
}: PropsWithChildren<ButtonCommonProps>) => (
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
    {disabled || loading ? <SpinnerComponent size={24} variant="gray" /> : null}
  </button>
);
