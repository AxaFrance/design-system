import "@axa-fr/canopee-css/distributeur/MessageBar/MessageBar.css";
import successSvg from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import closeSvg from "@material-symbols/svg-400/outlined/close.svg";
import errorSvg from "@material-symbols/svg-400/outlined/error-fill.svg";
import infoSvg from "@material-symbols/svg-400/outlined/info-fill.svg";
import warningSvg from "@material-symbols/svg-400/outlined/warning-fill.svg";

import { MouseEventHandler, PropsWithChildren, ReactNode } from "react";
import { Svg } from "../Svg";
import { getComponentClassNameWithUserClassname } from "../utilities/helpers/getComponentClassName";

export type MessageBarVariants = "error" | "warning" | "info" | "success";

export type MessageBarProps = {
  /**
   * Content of the message title. Can be a string or a ReactNode.
   */
  title: ReactNode;
  /**
   * URL of an svg icon to display in the sidebar of the message.
   * If not provided, a default icon based on the classModifier will be used.
   * <strong>This not recommended to use</strong>. Only use as an escape hatch.
   */
  icon?: string;
  /**
   * handler for the close button click event.
   * If not provided, the close button will not be displayed.
   */
  onClose?: MouseEventHandler<HTMLButtonElement>;
  /**
   * If you want to add a custom class to the component.
   * @example
   * ```tsx
   * <Message className="my-custom-class" title="My message">
   * ```
   * will produce
   * ```html
   * <div class="my-custom-class af-alert">My message</div>
   */
  className?: string;
  /**
   * @deprecated Use `variant` instead.
   */
  classModifier?: MessageBarVariants | "danger";
  /**
   * Variant of the message.
   * This will determine the icon and the style of the message.
   */
  variant?: MessageBarVariants;
  /**
   * Aria label for the close button.
   * This is important for accessibility, use a meaningful label to describe the action.
   * @default "close"
   */
  closeButtonAriaLabel?: string;
};

const getIconUrl = (type: string) => {
  switch (type) {
    case "info":
      return infoSvg;
    case "success":
      return successSvg;
    case "error":
      return errorSvg;
    case "warning":
      return warningSvg;
    default:
      return errorSvg;
  }
};

const getVariant = (
  classModifier: MessageBarVariants | "danger",
  variant?: MessageBarVariants,
) => {
  if (variant) {
    return variant;
  }
  if (classModifier) {
    return classModifier === "danger" ? "warning" : classModifier;
  }
  return "error"; // Default variant
};

export const MessageBar = ({
  className,
  onClose,
  icon,
  title,
  children,
  classModifier = "error",
  variant, // Backward compatibility
  closeButtonAriaLabel = "close",
}: PropsWithChildren<MessageBarProps>) => {
  const safeVariant = getVariant(classModifier, variant);

  const componentClassName = getComponentClassNameWithUserClassname({
    componentClassName: "af-alert",
    userClassName: className,
    classModifier: safeVariant,
  });

  const iconSrc = icon ?? getIconUrl(safeVariant);

  return (
    <div className={componentClassName} role="alert">
      <div className="af-alert__sidebar">
        <div className="af-alert__indicator">
          <Svg src={iconSrc} className="af-alert__icon" role="presentation" />
        </div>
      </div>
      <div className="af-alert__content">
        <div className="af-alert__title">{title}</div>
        {children}
      </div>
      {onClose ? (
        <button
          onClick={onClose}
          aria-label={closeButtonAriaLabel}
          type="button"
          className="af-alert__close-button"
        >
          <Svg
            src={closeSvg}
            className="af-alert__close-icon"
            role="presentation"
          />
        </button>
      ) : null}
    </div>
  );
};
