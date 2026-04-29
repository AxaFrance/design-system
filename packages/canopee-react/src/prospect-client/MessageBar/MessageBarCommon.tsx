import {
  useCallback,
  useState,
  type ComponentPropsWithoutRef,
  type ComponentType,
  type ReactNode,
} from "react";
import keyboardDown from "@material-symbols/svg-400/rounded/keyboard_arrow_down-fill.svg";
import { getClassName } from "../utilities/getClassName";
import type { IconProps, IconVariants } from "../Icon/IconCommon";
import type { MessageBarVariant } from "./types";

export type MessageBarProps = {
  /** Titre du message (obligatoire) */
  title: string;
  /** Description. Toujours visible en desktop ; pliable en mobile via le chevron. */
  description?: ReactNode;
  /** Icône personnalisée. Par défaut, l'icône du thème. */
  icon?: string;
  /** Variante visuelle du bandeau */
  variant?: MessageBarVariant;
  /**
   * Mobile uniquement : état initial déplié de la description (par défaut : false).
   * En desktop la description est toujours visible.
   */
  showDescription?: boolean;
  /** Bouton d'action (Button_Primary). À droite en desktop, sous la description en mobile (lorsque déplié). */
  button?: ReactNode;
} & Omit<ComponentPropsWithoutRef<"section">, "children">;

const iconVariantByMessageBarVariant: Record<MessageBarVariant, IconVariants> =
  {
    blue: "primary",
    red: "error",
  };

type MessageBarCommonProps = MessageBarProps & {
  IconComponent: ComponentType<IconProps>;
  defaultIcon: string;
};

export const MessageBarCommon = ({
  title,
  description,
  icon,
  variant = "blue",
  showDescription = false,
  button,
  className,
  IconComponent,
  defaultIcon,
  ...sectionProps
}: MessageBarCommonProps) => {
  const [isOpen, setIsOpen] = useState(showDescription);
  const hasDescription = Boolean(description);
  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <section
      className={getClassName({
        baseClassName: "af-message-bar",
        modifiers: [variant, hasDescription && isOpen && "open"],
        className,
      })}
      {...sectionProps}
    >
      <div className="af-message-bar__header">
        <IconComponent
          src={icon ?? defaultIcon}
          className="af-message-bar__icon"
          role="presentation"
          variant={iconVariantByMessageBarVariant[variant]}
        />
        <p className="af-message-bar__title">{title}</p>
        {hasDescription ? (
          <button
            type="button"
            className="af-message-bar__toggle"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Réduire le message" : "Développer le message"}
            onClick={handleToggle}
          >
            <IconComponent
              src={keyboardDown}
              role="presentation"
              className="af-message-bar__toggle-icon"
              variant={iconVariantByMessageBarVariant[variant]}
            />
          </button>
        ) : null}
      </div>
      {hasDescription ? (
        <div className="af-message-bar__body">{description}</div>
      ) : null}
      {button ? <div className="af-message-bar__action">{button}</div> : null}
    </section>
  );
};
