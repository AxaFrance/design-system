import "@axa-fr/canopee-css/distributeur/Action/Action.css";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Popover } from "../Popover";
import { getClassName } from "../utilities/helpers/getClassName";

type HelpProps = Omit<
  ComponentPropsWithoutRef<typeof Popover>,
  "popoverElement"
> & {
  helpButtonContent?: ReactNode;
};

export const HelpButton = ({
  className,
  classModifier,
  children,
  mode = "click",
  placement = "right",
  helpButtonContent = <span className="af-more-help">i</span>,
}: HelpProps) => {
  const buttonClassName = classNames(
    "btn",
    getClassName({
      baseClassName: "af-btn--circle",
      modifiers: classModifier?.split(" "),
    }),
  );

  return (
    <Popover
      className={className}
      classModifier={classModifier}
      placement={placement}
      mode={mode}
      popoverElement={children}
    >
      <div className={buttonClassName}>{helpButtonContent}</div>
    </Popover>
  );
};
