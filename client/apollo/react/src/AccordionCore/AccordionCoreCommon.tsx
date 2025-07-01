import {
  type ComponentProps,
  ComponentType,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useRef,
} from "react";
import keyboardUp from "@material-symbols/svg-400/rounded/keyboard_arrow_up-fill.svg";
import { Icon } from "../Icon/IconCommon";

export type AccordionProps = {
  summary: ReactNode;
  children: ReactNode;
  isOpen?: boolean;
  summaryProps?: ComponentProps<"summary">;
  onClick?: (event: MouseEvent<HTMLDetailsElement>) => void;
} & Partial<ComponentProps<"details">>;

export type AccordionPropsCommonProps = AccordionProps & {
  IconComponent: ComponentType<ComponentProps<typeof Icon>>;
};

export const AccordionCoreCommon = ({
  summary,
  children,
  className,
  summaryProps,
  isOpen = false,
  IconComponent,
  onClick,
  ...detailsProps
}: AccordionPropsCommonProps) => {
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
          <IconComponent src={keyboardUp} role="presentation" />
        </div>
      </summary>
      {children}
    </details>
  );
};
