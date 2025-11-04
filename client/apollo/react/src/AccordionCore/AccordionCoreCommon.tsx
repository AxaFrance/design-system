import {
  type ComponentProps,
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
} from "react";
import keyboardDown from "@material-symbols/svg-400/rounded/keyboard_arrow_down-fill.svg";
import type { IconProps } from "../Icon/IconCommon";

type SummaryOnClick = MouseEventHandler<HTMLElement>;

export type AccordionCoreProps = {
  summary: ReactNode;
  isOpen?: boolean;
  summaryProps?: Omit<ComponentProps<"summary">, "onClick">;
  onClick?: SummaryOnClick;
} & ComponentProps<"details">;

export type AccordionPropsCommonProps = AccordionCoreProps & {
  IconComponent: ComponentType<IconProps>;
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
  const handleSummaryClick = useCallback<SummaryOnClick>(
    (event) => {
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
      open={isOpen}
      {...detailsProps}
    >
      <summary
        onClick={handleSummaryClick}
        tabIndex={0}
        {...summaryProps}
        className={["af-apollo-accordion__summary", summaryProps?.className]
          .filter(Boolean)
          .join(" ")}
      >
        {summary}
        <div className={["af-accordion__arrow", "af-click-icon"].join(" ")}>
          <IconComponent src={keyboardDown} role="presentation" />
        </div>
      </summary>
      {children}
    </details>
  );
};
