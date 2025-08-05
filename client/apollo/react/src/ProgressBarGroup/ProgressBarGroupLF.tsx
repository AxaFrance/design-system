import "@axa-fr/design-system-apollo-css/dist/ProgressBarGroup/ProgressBarGroupLF.scss";
import { ItemProgressBar } from "../ItemProgressBar/ItemProgressBarLF";
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
