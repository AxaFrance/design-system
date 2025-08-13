import "@axa-fr/design-system-slash-css/dist/Form/Experimental/InputContainer.css";
import classNames from "classnames";
import { PropsWithChildren } from "react";

type InputContainerProps = PropsWithChildren<{
  vertical?: boolean;
  className?: string;
}>;

export const InputContainer = ({
  children,
  vertical,
  className,
}: InputContainerProps) => {
  const containerClass = classNames(
    "af-input__container",
    { "af-input__container--vertical": vertical },
    className,
  );
  return <div className={containerClass}>{children}</div>;
};
