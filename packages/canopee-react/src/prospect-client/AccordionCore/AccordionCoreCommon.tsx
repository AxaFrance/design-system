import {
  type ComponentProps,
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
} from "react";
import keyboardDown from "@material-symbols/svg-400/rounded/keyboard_arrow_down-fill.svg";
import type { IconProps, IconVariants } from "../Icon/IconCommon";
import { getClassName } from "../utilities/getClassName";

type SummaryOnClick = MouseEventHandler<HTMLElement>;

export type AccordionCoreProps = {
  summary: ReactNode;
  /**
   * @deprecated use `open` instead
   */
  isOpen?: boolean;
  summaryProps?: Omit<ComponentProps<"summary">, "onClick">;
  onClick?: SummaryOnClick;
  arrowIconVariant?: IconVariants;
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
  arrowIconVariant,
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
      className={getClassName({
        baseClassName: "af-apollo-accordion",
        className,
      })}
      open={isOpen}
      {...detailsProps}
    >
      <summary
        onClick={handleSummaryClick}
        tabIndex={0}
        {...summaryProps}
        className={getClassName({
          baseClassName: "af-apollo-accordion__summary",
          className: summaryProps?.className,
        })}
      >
        {summary}
        <div
          className={getClassName({
            baseClassName: "af-accordion__arrow",
            className: [
              "af-click-icon",
              arrowIconVariant === "warning" && "af-click-icon--warning",
            ]
              .filter(Boolean)
              .join(" "),
          })}
        >
          <IconComponent
            src={keyboardDown}
            role="presentation"
            variant={arrowIconVariant}
          />
        </div>
      </summary>
      {children}
    </details>
  );
};
