import {
  useCallback,
  useId,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
} from "react";
import keyboardDown from "@material-symbols/svg-400/rounded/keyboard_arrow_down-fill.svg";
import type { ButtonProps } from "../Button/ButtonCommon";
import type { ClickIconProps } from "../ClickIcon/ClickIconCommon";
import { getClassName } from "../utilities/getClassName";
import type { IconProps, IconVariants } from "../Icon/IconCommon";
import type { MessageBarVariant } from "./types";

export type MessageBarProps = {
  /** Message title. */
  title: string;
  /** Description. Always visible on desktop and collapsible on mobile. */
  description?: ReactNode;
  /** Icon displayed before the title. */
  icon: string;
  /** Visual variant. */
  variant?: MessageBarVariant;
  /** Initial mobile expanded state for the description. */
  defaultDescriptionOpen?: boolean;
  /** Action button props. No button is rendered when omitted. */
  buttonProps?: ButtonProps;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

const iconVariantByMessageBarVariant: Record<MessageBarVariant, IconVariants> =
  {
    blue: "primary",
    red: "error",
  };

type MessageBarCommonProps = MessageBarProps & {
  ButtonComponent: ComponentType<ButtonProps>;
  ClickIconComponent: ComponentType<ClickIconProps>;
  IconComponent: ComponentType<IconProps>;
};

export const MessageBarCommon = ({
  title,
  description,
  icon,
  variant = "blue",
  defaultDescriptionOpen = false,
  buttonProps,
  className,
  ButtonComponent,
  ClickIconComponent,
  IconComponent,
  ...sectionProps
}: MessageBarCommonProps) => {
  const titleId = useId();
  const [isOpen, setIsOpen] = useState(defaultDescriptionOpen);
  const hasDescription = Boolean(description);
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);
  const sectionAriaLabelledBy =
    sectionProps["aria-label"] || sectionProps["aria-labelledby"]
      ? undefined
      : titleId;

  return (
    <section
      className={getClassName({
        baseClassName: "af-message-bar",
        modifiers: [variant, hasDescription && isOpen && "open"],
        className,
      })}
      aria-labelledby={sectionAriaLabelledBy}
      {...sectionProps}
    >
      <div className="af-message-bar__header">
        <IconComponent
          src={icon}
          className="af-message-bar__icon"
          role="presentation"
          variant={iconVariantByMessageBarVariant[variant]}
        />
        <p id={titleId} className="af-message-bar__title">
          {title}
        </p>
        {hasDescription ? (
          <ClickIconComponent
            className="af-message-bar__toggle"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Réduire le message" : "Développer le message"}
            iconClassName="af-message-bar__toggle-icon"
            iconVariant={iconVariantByMessageBarVariant[variant]}
            onClick={handleToggle}
            src={keyboardDown}
            variant="ghost"
          />
        ) : null}
      </div>
      {hasDescription && typeof description === "string" ? (
        <p className="af-message-bar__body">{description}</p>
      ) : null}
      {hasDescription && typeof description !== "string" ? (
        <div className="af-message-bar__body">{description}</div>
      ) : null}
      {buttonProps ? (
        <ButtonComponent
          {...buttonProps}
          className={getClassName({
            baseClassName: "af-message-bar__action",
            className: buttonProps.className,
          })}
        />
      ) : null}
    </section>
  );
};
