import type { ComponentProps } from "react";
import classNames from "classnames";
import { Svg } from "../Svg";
import "@axa-fr/design-system-slash-css/dist/Card/Card.css";

const DEFAULT_CLASS_NAME = "af-card";

type CardProps = ComponentProps<"button"> & {
  /** By default : *vertical* */
  orientation?: "vertical" | "horizontal";
  /** icon url, for exemple from "@material-symbols" :
   *
   *  import villaIcon from "@material-symbols/svg-400/outlined/villa.svg"; */
  iconSrc?: string;
  error?: boolean;
  active?: boolean;
};

export const Card = ({
  children,
  className,
  iconSrc,
  orientation = "vertical",
  error = false,
  active = false,
  ...otherProps
}: CardProps) => (
  <button
    type="button"
    className={classNames(
      DEFAULT_CLASS_NAME,
      active && `${DEFAULT_CLASS_NAME}--active`,
      error && `${DEFAULT_CLASS_NAME}--error`,
      orientation === "horizontal" && `${DEFAULT_CLASS_NAME}--${orientation}`,
      className,
    )}
    {...otherProps}
  >
    {iconSrc ? <Svg src={iconSrc} /> : null}
    {children}
  </button>
);
