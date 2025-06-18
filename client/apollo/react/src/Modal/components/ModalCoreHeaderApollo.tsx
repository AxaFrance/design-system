import { Heading } from "../../Heading/HeadingApollo";
import { Icon } from "../../Icon/IconApollo";
import type { ModalCoreHeaderProps } from "../types";
import { ModalCoreHeaderCommon } from "./ModalCoreHeaderCommon";

export const ModalCoreHeader = (args: ModalCoreHeaderProps) => (
  <ModalCoreHeaderCommon
    headingComponent={Heading}
    iconComponent={Icon}
    {...args}
  />
);
