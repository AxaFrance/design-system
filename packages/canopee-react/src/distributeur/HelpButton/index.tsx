import "@axa-fr/design-system-slash-css/dist/Action/Action.scss";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Popover } from "../Popover";
import { getComponentClassName } from "../utilities";

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
  const buttonClassName = getComponentClassName(
    "btn af-btn--circle",
    classModifier,
    "",
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
