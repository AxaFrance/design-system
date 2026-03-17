import "@axa-fr/canopee-css/client/List/ContentItemDuo/ContentItemDuoLF.css";
import { Button } from "../../Button/ButtonLF";
import {
  ContentItemDuoCommon,
  type ContentItemDuoProps,
} from "./ContentItemDuoCommon";
import { ItemMessage } from "../../../client";

export const ContentItemDuo = (props: ContentItemDuoProps) => (
  <ContentItemDuoCommon
    {...props}
    ButtonComponent={Button}
    ItemMessageComponent={ItemMessage}
  />
);
