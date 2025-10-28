import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupApollo.css";
import { ProgressBar } from "../ProgressBar/ProgressBarApollo";
import {
  ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (props: ProgressBarGroupProps) => (
  <ProgressBarGroupCommon {...props} ProgressBarComponent={ProgressBar} />
);
