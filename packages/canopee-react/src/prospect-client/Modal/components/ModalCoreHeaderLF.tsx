import { Heading } from "../../Heading/HeadingLF";
import type { ModalCoreHeaderProps } from "../types";
import { ModalCoreHeaderCommon } from "./ModalCoreHeaderCommon";

export const ModalCoreHeader = (args: ModalCoreHeaderProps) => (
  <ModalCoreHeaderCommon headingComponent={Heading} {...args} />
);
