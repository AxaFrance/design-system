import { Tag } from "../../Tag/TagLF";
import {
  AccordionTagDateContainerCommon,
  type AccordionTagDateContainerProps,
} from "./AccordionTagDateContainerCommon";
import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreLF.scss";

export const AccordionTagDateContainer = (
  props: AccordionTagDateContainerProps,
) => <AccordionTagDateContainerCommon {...props} TagComponent={Tag} />;
