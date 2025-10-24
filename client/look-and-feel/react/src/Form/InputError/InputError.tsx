import errorIcon from "@material-symbols/svg-400/outlined/error.svg";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/InputError/InputError.scss";
import { Svg } from "../../Svg";

type InputErrorProps = {
  message: string;
  id?: string;
};

/**
 * @deprecated Use `ItemMessage` from `@axa-fr/design-system-apollo-react/lf` instead.
 */
export const InputError = ({ message, id }: InputErrorProps) => (
  <div className="af-input-error">
    <Svg src={errorIcon} className="af-input-error__icon" />
    <span id={id} aria-live="assertive" className="af-input-error__message">
      {message}
    </span>
  </div>
);
