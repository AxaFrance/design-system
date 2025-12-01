import "@axa-fr/canopee-css/client/ContentItemMono/ContentItemMonoLF.css";
import { Icon } from "../Icon/IconLF";
import {
  ContentItemMonoCommon,
  type ContentItemProps,
} from "./ContentItemMonoCommon";

export const ContentItemMono = (props: ContentItemProps) => (
  <ContentItemMonoCommon {...props} IconComponent={Icon} />
);
