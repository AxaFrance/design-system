import "@axa-fr/canopee-css/distributeur/Form/Experimental/InputContainer.css";
import classNames from "classnames";
import type { PropsWithChildren } from "react";

type InputContainerProps = PropsWithChildren<{
  vertical?: boolean;
  className?: string;
  component?: "div" | "fieldset";
}>;

export const InputContainer = ({
  children,
  vertical,
  className,
  component: Component = "div",
}: InputContainerProps) => {
  const containerClass = classNames(
    "af-input__container",
    { "af-input__container--vertical": vertical },
    className,
  );
  return <Component className={containerClass}>{children}</Component>;
};
