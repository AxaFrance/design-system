import { LoaderCommon, type LoaderProps } from "./LoaderCommon";
import { Spinner } from "../Spinner/SpinnerApollo";
import "@axa-fr/canopee-css/prospect/Loader/LoaderApollo.css";

export { type LoaderProps } from "./LoaderCommon";

export const Loader = (props: LoaderProps) => (
  <LoaderCommon {...props} SpinnerComponent={Spinner} />
);

Loader.displayName = "Loader";
