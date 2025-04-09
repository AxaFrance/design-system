import "@axa-fr/design-system-apollo-css/dist/ClickIcon/ClickIconApollo.scss";
import { ComponentProps } from "react";
import { ClickIcon as ClickIconCommon } from "./ClickIconCommon";

export const ClickIcon = (props: ComponentProps<typeof ClickIconCommon>) => (
  <ClickIconCommon {...props} />
);
