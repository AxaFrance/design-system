import "@axa-fr/design-system-css/dist/Button/Button.agent.scss";
import { cx } from "classix";

import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

type ButtonProps = {
  classModifier?: string;
} & ComponentPropsWithoutRef<"button">;

export const ButtonAgent = ({
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
      className={cx("af-btn", classes, className)}
      type="button"
      {...args}
    >
      {children}
    </button>
  );
};
