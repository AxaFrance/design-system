import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupLF.scss";
import { ProgressBar } from "../ProgressBar/ProgressBarLF";
import {
  ProgressBarGroup as ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (
  props: Omit<ProgressBarGroupProps, "ProgressBarComponent">,
) => <ProgressBarGroupCommon {...props} ProgressBarComponent={ProgressBar} />;
