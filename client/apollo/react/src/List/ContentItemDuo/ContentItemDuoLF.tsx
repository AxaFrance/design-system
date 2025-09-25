import "@axa-fr/design-system-apollo-css/dist/List/ContentItemDuo/ContentItemDuoLF.css";
import { Button } from "../../Button/ButtonLF";
import {
  ContentItemDuoCommon,
  type ContentItemDuoProps,
} from "./ContentItemDuoCommon";

export const ContentItemDuo = (props: ContentItemDuoProps) => (
  <ContentItemDuoCommon {...props} ButtonComponent={Button} />
);
