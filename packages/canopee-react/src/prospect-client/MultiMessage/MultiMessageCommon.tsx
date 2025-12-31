import type { ComponentPropsWithoutRef, ComponentType } from "react";
import { useState } from "react";
import type { ButtonProps } from "../Button/ButtonCommon";
import type { Icon } from "../Icon/IconCommon";
import type { MessageProps } from "../Message/MessageCommon";
import type { MessageVariants } from "../Message/types";

type Headings = "h2" | "h3" | "h4" | "h5" | "h6";

export type Notification = {
  /** Unique identifier for the notification */
  key: string;
  /** Content of the notification */
  value: string;
};

export type MultiMessageProps = {
  /** Array of notifications to display */
  notifications: Notification[];
  /** Message variant (validation, error, warning, information, neutral) */
  variant?: MessageVariants;
  /** HTML heading level used for the message titles */
  heading?: Headings;
  /** Label for the previous button (for accessibility) */
  previousLabel?: string;
  /** Label for the next button (for accessibility) */
  nextLabel?: string;
  /** Text displayed between current and total count */
  separatorText?: string;
} & Omit<ComponentPropsWithoutRef<"div">, "children">;

type MultiMessagePropsWithComponents = MultiMessageProps & {
  MessageComponent: ComponentType<MessageProps>;
  ButtonComponent: ComponentType<ButtonProps>;
  IconComponent: typeof Icon;
  iconLeft: string;
  iconRight: string;
};

const defaultClassName = "af-multimessage";

export const MultiMessageCommon = ({
  notifications,
  variant = "information",
  heading = "h2",
  previousLabel = "Notification précédente",
  nextLabel = "Notification suivante",
  separatorText = "sur",
  className,
  MessageComponent,
  ButtonComponent,
  IconComponent,
  iconLeft,
  iconRight,
  ...divProps
}: MultiMessagePropsWithComponents) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (notifications.length === 0) return null;

  if (notifications.length === 1) {
    return (
      <div
        className={[defaultClassName, className].filter(Boolean).join(" ")}
        {...divProps}
      >
        <MessageComponent
          title={notifications[0].key}
          heading={heading}
          variant={variant}
        >
          {notifications[0].value}
        </MessageComponent>
      </div>
    );
  }

  const currentNotification = notifications[currentIndex];
  const totalNotifications = notifications.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalNotifications - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalNotifications - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className={[defaultClassName, className].filter(Boolean).join(" ")}
      {...divProps}
    >
      <div className={`${defaultClassName}__wrapper`}>
        <MessageComponent
          title={currentNotification.key}
          heading={heading}
          variant={variant}
          className={`${defaultClassName}__message`}
        >
          {currentNotification.value}
        </MessageComponent>

        <div className={`${defaultClassName}__controls`}>
          <ButtonComponent
            variant="ghost"
            iconLeft={<IconComponent src={iconLeft} />}
            aria-label={previousLabel}
            onClick={goToPrevious}
          />

          <div className={`${defaultClassName}__counter`}>
            <span>{currentIndex + 1}</span>
            <span> {separatorText} </span>
            <span>{totalNotifications}</span>
          </div>

          <ButtonComponent
            variant="ghost"
            iconLeft={<IconComponent src={iconRight} />}
            aria-label={nextLabel}
            onClick={goToNext}
          />
        </div>
      </div>
    </div>
  );
};
