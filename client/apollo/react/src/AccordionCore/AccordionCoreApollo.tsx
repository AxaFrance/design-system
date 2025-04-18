import "@axa-fr/design-system-apollo-css/dist/AccordionCore/AccordionCoreApollo.scss";
import type { ComponentProps } from "react";
import { ClickIcon } from "../ClickIcon/ClickIconApollo";
import { AccordionCore as AccordionCoreCommon } from "./AccordionCoreCommon";

export const AccordionCore = (
  props: Omit<ComponentProps<typeof AccordionCoreCommon>, "ClickIconComponent">,
) => <AccordionCoreCommon {...props} ClickIconComponent={ClickIcon} />;
