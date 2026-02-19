import "@axa-fr/canopee-css/distributeur/EditorialMessage/EditorialMessage.css";
import { useId, type ReactNode } from "react";
import { Svg } from "../Svg";
import { getClassName } from "../utilities/helpers/getClassName";

export type EditorialMessageType = "green" | "information" | "promotion";

export type EditorialMessageProps = {
  /**
   * Type of the editorial message. Used to determine the style.
   */
  type: EditorialMessageType;
  /**
   * Icon source for the editorial message.
   */
  icon: string;
  /**
   * Additional class name(s) to apply to the component.
   */
  className?: string;
} & (
  | {
      /**
       * Title of the message. Either title or children must be provided.
       */
      title: string;
      /**
       * Content of message
       */
      children?: ReactNode;
    }
  | { title?: string; children: ReactNode }
);

/**
 * This component is a visual element used to promote information about accessibility, promotions, eco-design...
 * Its display does not depend on a user action.
 */
export const EditorialMessage = ({
  children: message,
  type,
  title,
  icon,
  className,
}: EditorialMessageProps) => {
  const computedClassName = getClassName({
    baseClassName: `af-editorial-message`,
    modifiers: [type],
    className,
  });

  const titleId = useId();

  return (
    <article className={computedClassName} aria-labelledby={titleId}>
      <div className="af-editorial-message__icon">
        <Svg src={icon} role="presentation" />
      </div>
      {title ? (
        <h4 className="af-editorial-message__title" id={titleId}>
          {title}
        </h4>
      ) : null}
      {message ? (
        <div className="af-editorial-message__content">{message}</div>
      ) : null}
    </article>
  );
};
