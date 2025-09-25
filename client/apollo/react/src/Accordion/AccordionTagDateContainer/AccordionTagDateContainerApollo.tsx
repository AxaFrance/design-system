import { Tag } from "../../Tag/TagApollo";
import {
  AccordionTagDateContainerCommon,
  type AccordionTagDateContainerProps,
} from "./AccordionTagDateContainerCommon";

import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreApollo.css";

export const AccordionTagDateContainer = (
  props: AccordionTagDateContainerProps,
) => <AccordionTagDateContainerCommon {...props} TagComponent={Tag} />;
