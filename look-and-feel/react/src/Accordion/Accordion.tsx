import type React from "react";
import { useCallback, useMemo, type ComponentProps } from "react";
import type { Tag } from "../Tag";
import {
  BREAKPOINT,
  getComponentClassName,
  useIsSmallScreen,
} from "../utilities";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer";

type AccordionProps = {
  title: string;
  children: React.ReactNode;
  className?: string;
  classModifier?: string;
  icon?: React.ReactNode;
  subtitle?: string;
  tag?: string;
  tagProps?: ComponentProps<typeof Tag>;
  date?: string;
  value?: string;
  isOpen?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isTitleFirst?: boolean;
};

export const Accordion = ({
  title,
  children,
  className,
  classModifier,
  icon,
  subtitle,
  tag,
  tagProps,
  date,
  value,
  isOpen,
  onClick,
  isTitleFirst = true,
}: AccordionProps) => {
  const isMobile = useIsSmallScreen(BREAKPOINT.SM);

  const componentClassName = useMemo(
    () => getComponentClassName(className, classModifier, "af-accordion"),
    [classModifier, className],
  );

  const isShowingIcon = useMemo(
    () => icon && isTitleFirst,
    [icon, isTitleFirst],
  );

  const handleToggle = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (onClick) {
        event.preventDefault();
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <details className={componentClassName} open={isOpen}>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <summary
        className={`af-accordion__summary${isTitleFirst ? " af-accordion__summary--title-first" : ""}`}
        onClick={handleToggle}
        role="button"
        tabIndex={0}
      >
        {isShowingIcon && isMobile && (
          <div className="af-accordion__icon">{icon}</div>
        )}
        {!isTitleFirst && (
          <AccordionTagDateContainer
            tag={tag}
            date={date}
            tagProps={tagProps}
          />
        )}
        <div className="af-accordion__title-container">
          {isShowingIcon && !isMobile && (
            <div className="af-accordion__icon">{icon}</div>
          )}
          <p className="af-accordion__title">{title}</p>
          {subtitle && <p className="af-accordion__subtitle">{subtitle}</p>}
        </div>
        {isTitleFirst && (
          <AccordionTagDateContainer
            tag={tag}
            date={date}
            tagProps={tagProps}
          />
        )}
        {value && <p className="af-accordion__value">{value}</p>}
      </summary>
      <hr className="af-accordion__separator" />
      <div className="af-accordion__content">{children}</div>
    </details>
  );
};
