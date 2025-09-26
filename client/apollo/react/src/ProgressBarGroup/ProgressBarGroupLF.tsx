import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupLF.css";
import { ProgressBar } from "../ProgressBar/ProgressBarLF";
import {
  ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (props: ProgressBarGroupProps) => (
  <ProgressBarGroupCommon {...props} ProgressBarComponent={ProgressBar} />
);
