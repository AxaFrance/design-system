import "@axa-fr/design-system-slash-css/dist/Form/InputError/InputError.client.scss";
import errorIcon from "@material-symbols/svg-400/outlined/error.svg";
import { Svg } from "../../Svg";

type InputErrorProps = {
  message: string;
  id?: string;
};

export const InputError = ({ message, id }: InputErrorProps) => (
  <div className="af-input-error">
    <Svg src={errorIcon} className="af-input-error__icon" />
    <span id={id} aria-live="assertive" className="af-input-error__message">
      {message}
    </span>
  </div>
);
