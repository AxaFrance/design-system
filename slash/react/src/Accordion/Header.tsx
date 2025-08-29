import React from "react";
import arrow from "@material-symbols/svg-400/rounded/keyboard_arrow_down.svg";
import { Button } from "../Button/Button";
import { Svg } from "../Svg/Svg";
import { getComponentClassName } from "../utilities";
import type { AccordionActions } from "./types";

const defaultClassName = "af-accordion__item-header";

export type HeaderToggleElement = {
  isOpen: boolean;
  index: number;
  id: string;
};

export type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  classModifier?: string;
  id?: string;
  actions?: AccordionActions;
  type?: string;
};

const Header = ({
  children,
  className,
  classModifier,
  id,
  actions,
  type,
}: HeaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <summary className={componentClassName} id={id}>
      <div className="af-accordion__header-left">
        <h3 className="af-accordion__item-title">{children}</h3>
      </div>
      <div className="af-accordion__header-right">
        {actions
          ? actions
              .filter((action): action is NonNullable<typeof action> =>
                Boolean(action),
              )
              .map(({ key, label, onClick }) => (
                <Button
                  key={key}
                  onClick={onClick}
                  variant={
                    ["white", "light"].includes(type ?? "")
                      ? "ghost"
                      : "ghost-reverse"
                  }
                >
                  {label}
                </Button>
              ))
          : null}
        <Svg src={arrow} />
      </div>
    </summary>
  );
};

export { Header };
