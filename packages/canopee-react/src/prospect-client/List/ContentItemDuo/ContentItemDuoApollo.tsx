import "@axa-fr/canopee-css/prospect/List/ContentItemDuo/ContentItemDuoApollo.css";
import { Button } from "../../Button/ButtonApollo";
import {
  ContentItemDuoCommon,
  type ContentItemDuoProps,
} from "./ContentItemDuoCommon";
import { ItemMessage } from "../../Form/ItemMessage/ItemMessageApollo";

export const ContentItemDuo = (props: ContentItemDuoProps) => (
  <ContentItemDuoCommon
    {...props}
    ButtonComponent={Button}
    ItemMessageComponent={ItemMessage}
  />
);
