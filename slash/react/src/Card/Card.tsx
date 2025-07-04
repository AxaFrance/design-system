import { ComponentProps } from "react";
import { getComponentClassName } from "../utilities";
import "@axa-fr/design-system-slash-css/dist/Card/Card.scss";
import { Svg } from "../Svg";

type CardProps = ComponentProps<"button"> & {
  mode?: "vertical" | "horizontal";
  /** icon url, for exemple from "@material-symbols" :
   *
   *  import villaIcon from "@material-symbols/svg-400/outlined/villa.svg"; */
  icon?: string;
  classModifier?: string;
};

export const Card = ({
  children,
  className,
  classModifier,
  mode = "vertical",
  icon,
  ...otherProps
}: CardProps) => {
  const componentClassName = getComponentClassName(
    "af-card",
    [classModifier, mode].join(" "),
    className,
  );

  return (
    <button type="button" className={componentClassName} {...otherProps}>
      {icon && <Svg width="48" height="48" src={icon} />}
      {children}
    </button>
  );
};
