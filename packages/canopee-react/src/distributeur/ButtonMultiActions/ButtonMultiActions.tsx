import "@axa-fr/canopee-css/distributeur/MultiActionsButton/MultiActionsButton.css";
import chevronDown from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import {
  type ComponentPropsWithoutRef,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  type ToggleEvent,
  useId,
  useRef,
} from "react";
import { Button } from "../Button/Button";
import { Svg } from "../Svg";
import { getClassName } from "../utilities/helpers/getClassName";

export type ButtonMultiActionsProps = {
  label?: string;
  menuLabel?: string;
  align?: "auto" | "left" | "right";
} & Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    children: ReactNode;
  };

export const ButtonMultiActions = ({
  label = "Actions",
  menuLabel = "Actions supplémentaires",
  align = "auto",
  className,
  id,
  onClick,
  onKeyDown,
  onMouseDown,
  children,
  ...buttonProps
}: ButtonMultiActionsProps) => {
  const generatedId = useId();
  const menuId = `${id ?? `af-button-multi-actions-${generatedId}`}-menu`;
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleMenuToggle = (event: ToggleEvent<HTMLDivElement>) => {
    const isOpen = event.newState === "open";

    triggerRef.current?.setAttribute("aria-expanded", String(isOpen));

    if (!isOpen) {
      triggerRef.current?.focus();
    }
  };

  // Open the menu and focus its first item when navigating with ArrowDown
  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    onKeyDown?.(event);
    if (event.defaultPrevented || menuRef.current?.matches(":popover-open"))
      return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      menuRef.current?.showPopover();
    }
  };

  // Close the menu once an action inside it has been activated
  const handleMenuClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) {
      menuRef.current?.hidePopover();
    }
  };

  // Close the menu when the user presses Escape, returning focus to the trigger
  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      menuRef.current?.hidePopover();
    }
  };

  return (
    <div className="af-button-multi-actions" ref={containerRef}>
      <Button
        ref={triggerRef}
        variant="ghost"
        className={getClassName({
          baseClassName: "af-button-multi-actions__trigger",
          modifiers: [align],
          className,
        })}
        aria-haspopup="menu"
        aria-controls={menuId}
        aria-expanded="false"
        onClick={onClick}
        onKeyDown={handleTriggerKeyDown}
        onMouseDown={onMouseDown}
        {...buttonProps}
        popoverTarget={menuId}
        rightIcon={
          <Svg
            src={chevronDown}
            alt=""
            aria-hidden="true"
            className={getClassName({
              baseClassName: "af-button-multi-actions__icon",
            })}
          />
        }
      >
        {label}
      </Button>

      <div
        popover="auto"
        id={menuId}
        role="menu"
        aria-label={menuLabel}
        tabIndex={-1}
        className="af-button-multi-actions__menu"
        ref={menuRef}
        onToggle={handleMenuToggle}
        onKeyDown={handleMenuKeyDown}
        onClick={handleMenuClick}
      >
        {children}
      </div>
    </div>
  );
};
