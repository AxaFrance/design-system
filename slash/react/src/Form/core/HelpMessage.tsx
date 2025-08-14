// import "@axa-fr/design-system-slash-css/dist/Form/core/HelpMessage.css";
import icon from "@material-symbols/svg-400/sharp/error-fill.svg";
import classNames from "classnames";
import { ReactNode } from "react";
import { Svg } from "../../Svg/Svg";

type HelpProps = {
  message?: ReactNode;
  error?: boolean;
  isVisible?: boolean;
  id?: string;
};

export const HelpMessage = ({
  message,
  error = false,
  isVisible = true,
  id,
}: HelpProps) => {
  const className = classNames("af-input__helper-text", {
    "af-input__helper-text--error": error,
  });

  return isVisible ? (
    <small id={id} className={className}>
      {error ? <Svg src={icon} /> : null}
      {message}
    </small>
  ) : null;
};
