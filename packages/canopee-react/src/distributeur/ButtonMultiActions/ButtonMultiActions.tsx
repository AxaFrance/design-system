import "@axa-fr/canopee-css/distributeur/MultiActionsButton/MultiActionsButton.css";
import chevronDown from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import {
  type ComponentPropsWithoutRef,
  type FocusEvent,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Button } from "../Button/Button";
import { Svg } from "../Svg";
import { getClassName } from "../utilities/helpers/getClassName";

type ButtonMultiActionsProps = {
  label?: string;
  menuLabel?: string;
  align?: "left" | "right";
} & Omit<ComponentPropsWithoutRef<"button">, "children"> & {
    children: ReactNode;
  };

export const ButtonMultiActions = ({
  label = "Actions",
  menuLabel = "Actions supplémentaires",
  align = "left",
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
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Focus the first menu item when the menu opens
  useEffect(() => {
    if (!isOpen) {
      return;
    }

    (menuRef.current?.firstElementChild as HTMLElement | null)?.focus();
  }, [isOpen]);

  // Close the menu and return focus to the trigger button
  const closeMenu = () => {
    setIsOpen(false);
    triggerRef.current?.focus();
  };

  // Close the menu when the user presses Escape, returning focus to the trigger
  const handleEscapeKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Escape" || event.key === "Esc") {
      event.preventDefault();
      closeMenu();
    }
  };

  // Open the menu when the user presses Enter or ArrowDown on the trigger button
  const handleTriggerKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === "ArrowDown" || event.key === "Enter") {
      // Prevent the browser from also firing a native click (which would
      // re-focus the trigger button and race with focusing the menu item).
      event.preventDefault();
      setIsOpen(true);
    }

    handleEscapeKeyDown(event);

    onKeyDown?.(event);
  };

  const handleMenuKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    handleEscapeKeyDown(event);
  };

  // Close the menu when the user clicks outside of it
  const handleContainerBlur = (event: FocusEvent<HTMLDivElement>) => {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setIsOpen(false);
    }
  };

  const handleMenuClickCapture = () => {
    closeMenu();
  };

  // Toggle the menu when the user clicks on the trigger button
  const handleTriggerClick = (event: MouseEvent<HTMLButtonElement>) => {
    setIsOpen((previousValue) => !previousValue);
    onClick?.(event);
  };

  // Prevent the browser from focusing the trigger on mouse click, so it
  // doesn't race with focusing the first menu item once the menu opens.
  const handleTriggerMouseDown = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onMouseDown?.(event);
  };

  return (
    <div
      className="af-button-multi-actions"
      ref={containerRef}
      onBlur={handleContainerBlur}
    >
      <Button
        ref={triggerRef}
        variant="ghost"
        className={getClassName({
          baseClassName: "af-button-multi-actions__trigger",
          modifiers: [align],
          className,
        })}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={handleTriggerClick}
        onKeyDown={handleTriggerKeyDown}
        onMouseDown={handleTriggerMouseDown}
        {...buttonProps}
        rightIcon={
          <Svg
            src={chevronDown}
            alt=""
            aria-hidden="true"
            className={getClassName({
              baseClassName: "af-button-multi-actions__icon",
              modifiers: [isOpen && "open"],
            })}
          />
        }
      >
        <span>{label}</span>
      </Button>

      {isOpen ? (
        <div
          id={menuId}
          role="menu"
          aria-label={menuLabel}
          tabIndex={-1}
          className="af-button-multi-actions__menu"
          ref={menuRef}
          onKeyDown={handleMenuKeyDown}
          onClickCapture={handleMenuClickCapture}
        >
          {children}
        </div>
      ) : null}
    </div>
  );
};

ButtonMultiActions.displayName = "ButtonMultiActions";
