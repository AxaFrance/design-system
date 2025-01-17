import "@axa-fr/design-system-slash-css/dist/Button/Button.css";

import { ComponentPropsWithoutRef, PropsWithChildren } from "react";
import { getComponentClassName } from "../utilities";

type ButtonProps = {
  classModifier?: string;
} & ComponentPropsWithoutRef<"button">;

export const Button = ({
  children,
  classModifier,
  className,
  ...args
}: PropsWithChildren<ButtonProps>) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    "af-btn",
  );

  return (
    <button className={componentClassName} type="button" {...args}>
      {children}
    </button>
  );
};
