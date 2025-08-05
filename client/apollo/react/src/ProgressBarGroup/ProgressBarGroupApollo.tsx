import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupApollo.scss";
import { ItemProgressBar } from "../ItemProgressBar/ItemProgressBarApollo";
import {
  ProgressBarGroup as ProgressBarGroupCommon,
  ProgressBarGroupProps,
} from "./ProgressBarGroupCommon";

export const ProgressBarGroup = (
  props: Omit<ProgressBarGroupProps, "ItemProgressBarComponent">,
) => (
  <ProgressBarGroupCommon
    {...props}
    ItemProgressBarComponent={ItemProgressBar}
  />
);
