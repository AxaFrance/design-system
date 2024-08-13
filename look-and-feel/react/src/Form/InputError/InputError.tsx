import errorIcon from "@material-symbols/svg-400/outlined/error.svg";
import "@axa-fr/design-system-look-and-feel-css/dist/Form/InputError/InputError.client.scss";
import { Svg } from "../../Svg";

type InputErrorProps = {
  message: string;
};

export const InputError = ({ message }: InputErrorProps) => (
  <div className="af-input-error">
    <Svg src={errorIcon} className="af-input-error__icon" />
    <span className="af-input-error__message">{message}</span>
  </div>
);
