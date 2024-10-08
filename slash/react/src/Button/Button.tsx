import "@axa-fr/design-system-slash-css/dist/Button/Button.scss";
import classNames from "classnames";

import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonProps = {
  classModifier?: string;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  classModifier,
  className,
  ...args
}: PropsWithChildren<ButtonProps>) => {
  const classes = classModifier
    ?.split(" ")
    .map((modifier) => `af-btn--${modifier}`)
    .join(" ");

  return (
    <button
      className={classNames("af-btn", classes, className)}
      type="button"
      {...args}
    >
      {children}
    </button>
  );
};
