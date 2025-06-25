import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreApollo.scss";
import type { ComponentProps } from "react";
import { AccordionCore as AccordionCoreCommon } from "./AccordionCoreCommon";

export const AccordionCore = (
  props: ComponentProps<typeof AccordionCoreCommon>,
) => <AccordionCoreCommon {...props} />;
