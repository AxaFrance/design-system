import { LoaderCommon, type LoaderProps } from "./LoaderCommon";
import { Spinner } from "../Spinner/SpinnerLF";
import "@axa-fr/canopee-css/client/Loader/LoaderLF.css";

export { type LoaderProps } from "./LoaderCommon";

export const Loader = (props: LoaderProps) => (
  <LoaderCommon {...props} SpinnerComponent={Spinner} />
);

Loader.displayName = "Loader";
