import "@axa-fr/canopee-css/client/ProgressBarGroup/ProgressBarGroupLF.css";
import { ProgressBar } from "../ProgressBar/ProgressBarLF";
import {
  ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (props: ProgressBarGroupProps) => (
  <ProgressBarGroupCommon {...props} ProgressBarComponent={ProgressBar} />
);
