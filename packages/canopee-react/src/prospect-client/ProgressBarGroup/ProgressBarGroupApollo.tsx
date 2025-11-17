import "@axa-fr/canopee-css/prospect/ProgressBarGroup/ProgressBarGroupApollo.css";
import { ProgressBar } from "../ProgressBar/ProgressBarApollo";
import {
  ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (props: ProgressBarGroupProps) => (
  <ProgressBarGroupCommon {...props} ProgressBarComponent={ProgressBar} />
);
