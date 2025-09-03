import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupApollo.scss";
import { ProgressBar } from "../ProgressBar/ProgressBarApollo";
import {
  ProgressBarGroup as ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (
  props: Omit<ProgressBarGroupProps, "ProgressBarComponent">,
) => <ProgressBarGroupCommon {...props} ProgressBarComponent={ProgressBar} />;
