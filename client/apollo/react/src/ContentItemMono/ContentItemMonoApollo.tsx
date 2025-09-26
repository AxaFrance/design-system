import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoApollo.css";
import { Icon } from "../Icon/IconApollo";
import {
  ContentItemMonoCommon,
  type ContentItemProps,
} from "./ContentItemMonoCommon";

export const ContentItemMono = (props: ContentItemProps) => (
  <ContentItemMonoCommon {...props} IconComponent={Icon} />
);
