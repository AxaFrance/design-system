import "@axa-fr/design-system-apollo-css/dist/Button/ButtonLF.scss";
import { Spinner } from "../Spinner/SpinnerLF";
import { ButtonCommon, type ButtonProps } from "./ButtonCommon";

export {
  buttonVariants,
  type ButtonVariants,
  type ButtonProps,
} from "./ButtonCommon";

export const Button = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);
