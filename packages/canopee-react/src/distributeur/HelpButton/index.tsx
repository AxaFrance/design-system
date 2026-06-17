import "@axa-fr/canopee-css/distributeur/HelpButton/HelpButton.css";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import info from "@material-symbols/svg-400/rounded/info_i-fill.svg";
import { Popover } from "../Popover";
import { getClassName } from "../utilities/helpers/getClassName";
import { Svg } from "../Svg";

type HelpProps = Omit<
  ComponentPropsWithoutRef<typeof Popover>,
  "popoverElement"
> & {
  helpButtonContent?: ReactNode;
  variant?: "default" | "inverse";
};

export const HelpButton = ({
  className,
  classModifier,
  children,
  mode = "click",
  placement = "right",
  variant = "default",
  helpButtonContent = <Svg src={info} alt="Help" />,
}: HelpProps) => {
  const buttonClassName = classNames(
    "btn",
    getClassName({
      baseClassName: "af-btn--circle",
      modifiers: [
        ...(classModifier?.split(" ") ?? []),
        ...(variant === "inverse" ? ["inverse"] : []),
      ],
    }),
  );

  return (
    <Popover
      className={classNames("af-help-button", className)}
      classModifier={classModifier}
      placement={placement}
      mode={mode}
      popoverElement={children}
    >
      <div className={buttonClassName}>{helpButtonContent}</div>
    </Popover>
  );
};
