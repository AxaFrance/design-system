import "@axa-fr/canopee-css/distributeur/Form/Experimental/ItemMessage.css";
import success from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import error from "@material-symbols/svg-400/outlined/error-fill.svg";

import { ReactNode } from "react";
import { Svg } from "../../Svg";
import { getClassName } from "../../utilities/helpers/getClassName";

type Props = {
  children: ReactNode;
  /**
   * The variant of the message.
   * - "error": displays an error message with an error icon.
   * - "success": displays a success message with a success icon.
   * - undefined: displays an help message without any icon.
   *
   * @default undefined
   */
  variant?: "error" | "success";
  /**
   * Additional class name(s) to apply to the component.
   */
  className?: string;
  /**
   * The id attribute for the component.
   *
   * Useful for linking the message to other elements for accessibility.
   * @default undefined
   *
   */
  id?: string;
};

const iconByVariant = {
  success,
  error,
};

export const ItemMessage = ({ variant, children, className, id }: Props) => {
  const componentClassName = getClassName({
    baseClassName: "af-item-message",
    className,
    modifiers: [variant],
  });

  const icon = variant ? iconByVariant[variant] : null;

  return (
    <div className={componentClassName} id={id}>
      {icon ? <Svg src={icon} className="af-item-message__icon" /> : null}
      {children}
    </div>
  );
};
