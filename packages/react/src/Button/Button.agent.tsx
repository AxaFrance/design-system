import "@axa-fr/design-system-css/dist/Button/Button.agent.scss";
import { cx } from "classix";

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
    <button className={cx("af-btn", classes, className)} {...args}>
      {children}
    </button>
  );
};
