import "@axa-fr/canopee-css/prospect/Stepper/StepperApollo.css";
import { ItemMessage } from "../Form/ItemMessage/ItemMessage";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon
    {...props}
    ProgressBarGroupComponent={ProgressBarGroup}
    ItemMessageComponent={ItemMessage}
  />
);
