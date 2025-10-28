import "@axa-fr/design-system-apollo-css/dist/List/ContentItemDuo/ContentItemDuoApollo.css";
import { Button } from "../../Button/ButtonApollo";
import {
  ContentItemDuoCommon,
  type ContentItemDuoProps,
} from "./ContentItemDuoCommon";

export const ContentItemDuo = (props: ContentItemDuoProps) => (
  <ContentItemDuoCommon {...props} ButtonComponent={Button} />
);
