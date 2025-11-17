import "@axa-fr/canopee-css/prospect/AccordionCore/AccordionCoreApollo.css";
import {
  AccordionCoreCommon,
  type AccordionCoreProps,
} from "./AccordionCoreCommon";
import { Icon } from "../Icon/IconApollo";

export const AccordionCore = (props: AccordionCoreProps) => (
  <AccordionCoreCommon IconComponent={Icon} {...props} />
);
