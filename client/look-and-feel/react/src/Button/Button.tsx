import "@axa-fr/design-system-look-and-feel-css/dist/Button/Button.scss";
import classNames from "classnames";
import { ComponentPropsWithoutRef, PropsWithChildren, ReactNode } from "react";
import { Loader } from "../Loader";

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
  loading?: boolean;
} & ComponentPropsWithoutRef<"button">;

export const ButtonClient = ({
  children,
  className,
  disabled,
  variant,
  iconLeft,
  iconRight,
  loading,
  ...args
}: PropsWithChildren<ButtonProps>) => {
  return (
    <button
      className={classNames(
        "af-btn-client",
        variant && `af-btn-client--${variant.toString()}`,
        className,
      )}
      disabled={disabled || loading}
      type="button"
      {...args}
    >
      {iconLeft}
      {children}
      {iconRight}
      {loading && <Loader size={24} border={3} variant="gray" />}
    </button>
  );
};
