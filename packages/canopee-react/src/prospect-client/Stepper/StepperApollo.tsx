import "@axa-fr/canopee-css/prospect/Stepper/StepperApollo.css";
import { Heading } from "../Heading/HeadingApollo";
import { ProgressBarGroup } from "../ProgressBarGroup/ProgressBarGroupApollo";
import { ItemMessage } from "../Form/ItemMessage/ItemMessageApollo";
import { StepperCommon, type StepperProps } from "./StepperCommon";

export const Stepper = (props: StepperProps) => (
  <StepperCommon
    {...props}
    ProgressBarGroupComponent={ProgressBarGroup}
    HeadingComponent={Heading}
    ItemMessageComponent={ItemMessage}
  />
);
