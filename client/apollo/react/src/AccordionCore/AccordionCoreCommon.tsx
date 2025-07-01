import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
} from "react";
import keyboardUp from "@material-symbols/svg-400/rounded/keyboard_arrow_up-fill.svg";
import { Svg } from "../Svg/Svg";

type AccordionProps = {
  summary: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  summaryProps?: ComponentProps<"summary">;
  onClick?: (event: MouseEvent<HTMLDetailsElement>) => void;
} & Partial<ComponentProps<"details">>;

export const AccordionCore = ({
  summary,
  children,
  className,
  summaryProps,
  isOpen = false,
  onClick,
  ...detailsProps
}: AccordionProps) => {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const handleToggle = useCallback(
    (event: MouseEvent<HTMLDetailsElement>) => {
      if (onClick) {
        event.preventDefault();
        onClick(event);
      }
    },
    [onClick],
  );

  return (
    <details
      className={["af-apollo-accordion", className].filter(Boolean).join(" ")}
      ref={detailsRef}
      open={isOpen}
      {...detailsProps}
    >
      <summary
        onClick={handleToggle}
        role="button"
        tabIndex={0}
        {...summaryProps}
        className={["af-apollo-accordion__summary", summaryProps?.className]
          .filter(Boolean)
          .join(" ")}
      >
        {summary}
        <div className={["af-accordion__arrow", "af-click-icon"].join(" ")}>
          <div className="af-icon af-icon--primary">
            <Svg src={keyboardUp} role="presentation" />
          </div>
        </div>
      </summary>
      {children}
    </details>
  );
};
