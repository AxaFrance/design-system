import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import successIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import { Svg } from "../../Svg/Svg";

type ItemMessageProps = {
  message?: string;
  id?: string;
  messageType?: "error" | "success";
};

export const ItemMessage = ({
  message,
  id,
  messageType = "error",
}: ItemMessageProps) => {
  if (!message) {
    return null;
  }

  return (
    <small
      className={`af-item-message af-item-message--${messageType}`}
      role={messageType === "error" ? "alert" : undefined}
      aria-live="assertive"
    >
      <Svg
        src={messageType === "error" ? errorIcon : successIcon}
        className="af-item-message__icon"
        aria-hidden="true"
      />
      <span id={id} className="af-item-message__message">
        {message}
      </span>
    </small>
  );
};
