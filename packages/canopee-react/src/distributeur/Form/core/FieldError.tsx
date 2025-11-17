import { getComponentClassName } from "../../utilities";
import { MessageTypes } from "./MessageTypes";

const DEFAULT_CLASS_NAME = "af-form__message";

type FieldProps = {
  message?: string | null;
  messageType?: MessageTypes;
  errorId?: string;
};

export const FieldError = ({
  message = null,
  messageType = MessageTypes.error,
  errorId = undefined,
}: FieldProps) => {
  const className = getComponentClassName(
    DEFAULT_CLASS_NAME,
    messageType,
    DEFAULT_CLASS_NAME,
  );

  return (
    message && (
      <small className={className}>
        <span className="glyphicon glyphicon-exclamation-sign" />
        <span
          id={errorId}
          role="alert"
          className={`af-form__${messageType}-text`}
        >
          {message}
        </span>
      </small>
    )
  );
};
