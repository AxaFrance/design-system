import {
  useCallback,
  useMemo,
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
} from "react";
import { getComponentClassName } from "../utilities";

type AccordionProps = {
  summary: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  className?: string;
  classModifier?: string;
  summaryProps?: ComponentProps<"summary">;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
} & Partial<ComponentProps<"details">>;

/**
 * @deprecated Use `AccordionCore` from `@axa-fr/design-system-apollo-react/lf` package instead.
 */
export const AccordionCore = ({
  summary,
  children,
  className,
  classModifier,
  summaryProps,
  isOpen,
  onClick,
  ...detailsProps
}: AccordionProps) => {
  const componentClassName = useMemo(
    () => getComponentClassName("af-accordion", className, classModifier),
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
    <details className={componentClassName} open={isOpen} {...detailsProps}>
      <summary
        className="af-accordion__summary"
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        {...summaryProps}
      >
        {summary}
      </summary>
      <div className="af-accordion__content">{children}</div>
    </details>
  );
};
