import { Heading } from "../../Heading/HeadingLF";
import { Icon } from "../../Icon/IconLF";
import type { ModalCoreHeaderProps } from "../types";
import { ModalCoreHeaderCommon } from "./ModalCoreHeaderCommon";

export const ModalCoreHeader = (args: ModalCoreHeaderProps) => (
  <ModalCoreHeaderCommon
    headingComponent={Heading}
    iconComponent={Icon}
    {...args}
  />
);

export type { ModalCoreHeaderProps };
