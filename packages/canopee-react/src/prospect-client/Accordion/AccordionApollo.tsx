import { AccordionCore } from "../AccordionCore/AccordionCoreApollo";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer/AccordionTagDateContainerApollo";
import { Icon } from "../Icon/IconApollo";
import { AccordionCommon, type AccordionProps } from "./AccordionCommon";
import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionApollo.css";

export const Accordion = (props: AccordionProps) => (
  <AccordionCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    AccordionTagDateContainerComponent={AccordionTagDateContainer}
    IconComponent={Icon}
  />
);

export { type AccordionVariants, accordionVariants } from "./AccordionCommon";
