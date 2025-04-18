import "@axa-fr/design-system-apollo-css/dist/Accordion/AccordionApollo.scss";
import type { ComponentProps } from "react";
import { AccordionCore } from "../AccordionCore/AccordionCoreApollo";

import { Accordion as AccordionCommon } from "./AccordionCommon";

export const Accordion = (
  props: Omit<ComponentProps<typeof AccordionCommon>, "AccordionCoreComponent">,
) => <AccordionCommon {...props} AccordionCoreComponent={AccordionCore} />;
