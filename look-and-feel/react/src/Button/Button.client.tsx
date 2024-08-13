import "@axa-fr/design-system-look-and-feel-css/dist/Button/Button.client.scss";
import classNames from "classnames";
import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";

export enum Variants {
  primary = "primary",
  business = "primary-business",
  secondary = "secondary",
  secondaryError = "secondary-error",
  tertiary = "tertiary",
  ghost = "ghost",
}

type ButtonProps = {
  variant?: Variants;
  iconLeft?: ReactNode;
  iconRight?: ReactNode;
} & ComponentPropsWithoutRef<"button">;

export const ButtonClient = ({
  children,
  className,
  disabled,
  variant,
  iconLeft,
  iconRight,
  ...args
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(
        "af-btn-client",
        variant && `af-btn-client--${variant.toString()}`,
        className,
      )}
      disabled={disabled}
      type="button"
      {...args}
    >
      {iconLeft}
      {children}
      {iconRight}
    </button>
  );
};
