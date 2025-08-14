import "@axa-fr/design-system-slash-css/dist/Form/Experimental/HelpMessage.css";
import icon from "@material-symbols/svg-400/sharp/error-fill.svg";
import classNames from "classnames";
import { PropsWithChildren } from "react";
import { Svg } from "../../Svg/Svg";

export type ItemMessageHelperProps = PropsWithChildren<{
  /**
   * Whether the message is an error message or not.
   * If true, an error icon will be displayed before the message, and the message will have an error style.
   * If false, the message will be displayed as a regular helper text.
   * @default false
   */
  error?: boolean;
  /**
   * The id of the message element, used for accessibility purposes.
   * This id can be used to link the message to an input field or other elements.
   */
  id?: string;
}>;

export const ItemMessageHelper = ({
  children,
  error = false,
  id,
}: ItemMessageHelperProps) => {
  const className = classNames("af-input__helper-text", {
    "af-input__helper-text--error": error,
  });

  return (
    <small id={id} className={className}>
      {error ? <Svg src={icon} /> : null}
      {children}
    </small>
  );
};
