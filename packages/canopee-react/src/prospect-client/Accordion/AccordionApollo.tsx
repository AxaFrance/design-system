import { AccordionCore } from "../AccordionCore/AccordionCoreApollo";
import { Tag } from "../Tag/TagApollo";
import { Icon } from "../Icon/IconApollo";
import { AccordionCommon, type AccordionProps } from "./AccordionCommon";
import "@axa-fr/canopee-css/prospect/Accordion/AccordionApollo.css";

export const Accordion = (props: AccordionProps) => (
  <AccordionCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    TagComponent={Tag}
    IconComponent={Icon}
  />
);

export { type AccordionVariants, accordionVariants } from "./AccordionCommon";
