import { AccordionCore } from "../AccordionCore/AccordionCoreApollo";
import { Icon } from "../Icon/IconApollo";
import {
  AccordionContextualCommon,
  type AccordionContextualProps,
} from "./AccordionContextualCommon";
import "@axa-fr/canopee-css/prospect/AccordionContextual/AccordionContextualApollo.css";

export const AccordionContextual = (props: AccordionContextualProps) => (
  <AccordionContextualCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    IconComponent={Icon}
  />
);

export {
  type AccordionContextualVariants,
  accordionContextualVariants,
} from "./AccordionContextualCommon";
