import "@axa-fr/design-system-apollo-css/dist/Button/ButtonApollo.css";
import { Spinner } from "../Spinner/SpinnerApollo";
import { ButtonCommon, type ButtonProps } from "./ButtonCommon";

export {
  buttonVariants,
  type ButtonVariants,
  type ButtonProps,
} from "./ButtonCommon";

export const Button = (props: ButtonProps) => (
  <ButtonCommon {...props} SpinnerComponent={Spinner} />
);
