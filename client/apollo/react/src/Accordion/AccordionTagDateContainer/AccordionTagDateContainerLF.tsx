import type { ComponentProps } from "react";
import { Tag } from "../../Tag/TagLF";
import { AccordionTagDateContainer as AccordionTagDateContainerCommon } from "./AccordionTagDateContainerCommon";

import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreLF.scss";

export const AccordionTagDateContainer = (
  props: Omit<
    ComponentProps<typeof AccordionTagDateContainerCommon>,
    "TagComponent"
  >,
) => <AccordionTagDateContainerCommon {...props} TagComponent={Tag} />;
