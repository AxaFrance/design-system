import React from "react";
import arrow from "@material-symbols/svg-400/rounded/keyboard_arrow_down.svg";
import { Title } from "../Title/Title";
import { Button } from "../Button/Button";
import { Svg } from "../Svg/Svg";
import { getComponentClassName } from "../utilities";
import type { AccordionActions, AccordionVariant } from "./types";

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
  variant?: AccordionVariant;
};

const Header = ({
  children,
  className,
  classModifier,
  id,
  actions,
  variant,
}: HeaderProps) => {
  const componentClassName = getComponentClassName(
    className,
    classModifier,
    defaultClassName,
  );

  return (
    <summary className={componentClassName} id={id}>
      {variant === "light" ? (
        <Title heading="h3">
          <Svg src={arrow} className="af-accordion__item-header-icon" />
          {children}
          {actions
            ? actions
                .filter((action): action is NonNullable<typeof action> =>
                  Boolean(action),
                )
                .map(({ key, label, leftIcon, rightIcon, onClick }) => (
                  <Button
                    key={key}
                    onClick={onClick}
                    leftIcon={leftIcon ? <Svg src={leftIcon} /> : undefined}
                    rightIcon={rightIcon ? <Svg src={rightIcon} /> : undefined}
                    variant="ghost"
                  >
                    {label}
                  </Button>
                ))
            : null}
        </Title>
      ) : (
        <>
          <div className="af-accordion__header-left">
            <h3 className="af-accordion__item-title">{children}</h3>
          </div>
          <div className="af-accordion__header-right">
            {actions
              ? actions
                  .filter((action): action is NonNullable<typeof action> =>
                    Boolean(action),
                  )
                  .map(({ key, label, leftIcon, rightIcon, onClick }) => (
                    <Button
                      key={key}
                      onClick={onClick}
                      leftIcon={leftIcon ? <Svg src={leftIcon} /> : undefined}
                      rightIcon={
                        rightIcon ? <Svg src={rightIcon} /> : undefined
                      }
                      variant={variant === "white" ? "ghost" : "ghost-reverse"}
                    >
                      {label}
                    </Button>
                  ))
              : null}
            <Svg src={arrow} className="af-accordion__item-header-icon" />
          </div>
        </>
      )}
    </summary>
  );
};

export { Header };
