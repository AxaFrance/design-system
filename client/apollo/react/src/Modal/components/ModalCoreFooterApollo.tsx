import { Button } from "../../Button/ButtonApollo";
import type { ModalCoreFooterProps } from "../types";
import { ModalCoreFooterCommon } from "./ModalCoreFooterCommon";

export const ModalCoreFooter = (args: ModalCoreFooterProps) => (
  <ModalCoreFooterCommon buttonComponent={Button} {...args} />
);

export type { ModalCoreFooterProps };
