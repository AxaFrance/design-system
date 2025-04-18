import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreLF.scss";
import type { ComponentProps } from "react";
import { ClickIcon } from "../ClickIcon/ClickIconLF";
import { AccordionCore as AccordionCoreCommon } from "./AccordionCoreCommon";

export const AccordionCore = (
  props: Omit<ComponentProps<typeof AccordionCoreCommon>, "ClickIconComponent">,
) => <AccordionCoreCommon {...props} ClickIconComponent={ClickIcon} />;
