import { useCallback, useMemo, type MouseEvent, type ReactNode } from "react";
import { getComponentClassName } from "../utilities";

type NewAccordionProps = {
  title: ReactNode;
  children: ReactNode;
  className?: string;
  classModifier?: string;
  isOpen?: boolean;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const AccordionCore = ({
  title,
  children,
  className,
  classModifier,
  isOpen,
  onClick,
}: NewAccordionProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName(className, classModifier, "af-accordion"),
    [classModifier, className],
  );

  const handleToggle = useCallback(
    (event: MouseEvent<HTMLButtonElement>) => {
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
        className="af-accordion__summary"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
      >
        <div className="af-accordion__title-container">{title}</div>
      </summary>
      <hr className="af-accordion__separator" />
      <div className="af-accordion__content">{children}</div>
    </details>
  );
};
