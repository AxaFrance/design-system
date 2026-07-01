import {
  type ComponentProps,
  type ComponentType,
  type MouseEventHandler,
  type ReactNode,
  useCallback,
} from "react";
import keyboardDown from "@material-symbols/svg-400/rounded/keyboard_arrow_down-fill.svg";
import type { ClickIconVariant } from "../ClickIcon/ClickIconCommon";
import type { IconProps } from "../Icon/IconCommon";
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
  showArrowAsClickIcon?: boolean;
  arrowClickIconVariant?: ClickIconVariant;
  arrowIconVariant?: IconProps["variant"];
} & ComponentProps<"details">;

export type AccordionPropsCommonProps = AccordionCoreProps & {
  IconComponent: ComponentType<IconProps>;
};

export const AccordionCoreCommon = ({
  summary,
  children,
  className,
  summaryProps,
  isOpen,
  IconComponent,
  onClick,
  open = false,
  showArrowAsClickIcon = true,
  arrowClickIconVariant = "default",
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
  const accordionOpen = isOpen ?? open;
  const arrowClassName = showArrowAsClickIcon
    ? getClassName({
        baseClassName: "af-click-icon",
        modifiers: [arrowClickIconVariant === "ghost" && arrowClickIconVariant],
      })
    : undefined;

  return (
    <details
      className={getClassName({
        baseClassName: "af-apollo-accordion",
        className,
      })}
      open={accordionOpen}
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
            className: arrowClassName,
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
