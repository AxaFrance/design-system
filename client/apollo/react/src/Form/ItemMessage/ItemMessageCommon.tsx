import errorIcon from "@material-symbols/svg-400/outlined/error-fill.svg";
import successIcon from "@material-symbols/svg-400/outlined/check_circle-fill.svg";
import { Svg } from "../../Svg/Svg";

type ItemMessageProps = {
  message: string;
  id?: string;
  type?: "error" | "success";
};

export const ItemMessage = ({
  message,
  id,
  type = "error",
}: ItemMessageProps) => (
  <div className={`af-item-message af-item-message--${type}`}>
    <Svg
      src={type === "error" ? errorIcon : successIcon}
      className="af-item-message__icon"
    />
    <span id={id} aria-live="assertive" className="af-item-message__message">
      {message}
    </span>
  </div>
);
