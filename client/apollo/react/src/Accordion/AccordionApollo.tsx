import type { ComponentProps } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreApollo";
import { AccordionTagDateContainer } from "./AccordionTagDateContainer/AccordionTagDateContainerApollo";
import { Icon } from "../Icon/IconApollo";
import { Accordion as AccordionCommon } from "./AccordionCommon";
import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionApollo.scss";

export const Accordion = (
  props: Omit<
    ComponentProps<typeof AccordionCommon>,
    | "AccordionCoreComponent"
    | "AccordionTagDateContainerComponent"
    | "IconComponent"
  >,
) => (
  <AccordionCommon
    {...props}
    AccordionCoreComponent={AccordionCore}
    AccordionTagDateContainerComponent={AccordionTagDateContainer}
    IconComponent={Icon}
  />
);

export { type AccordionVariants, accordionVariants } from "./AccordionCommon";
