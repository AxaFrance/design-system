import type {
  ComponentPropsWithoutRef,
  PropsWithChildren,
  ReactNode,
} from "react";

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
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  className,
  variant = "primary",
  iconLeft,
  iconRight,
  ...args
}: PropsWithChildren<ButtonProps>) => (
  <button
    className={[
      "af-btn-client",
      variant && `af-btn-client--${variant}`,
      className,
    ]
      .filter(Boolean)
      .join(" ")}
    type="button"
    {...args}
  >
    {iconLeft}
    {children}
    {iconRight}
  </button>
);
