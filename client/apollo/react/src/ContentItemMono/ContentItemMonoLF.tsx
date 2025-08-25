import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import { Icon } from "../Icon/IconLF";
import {
  ContentItemMonoCommon,
  type ContentItemProps,
} from "./ContentItemMonoCommon";

export const ContentItemMono = (props: ContentItemProps) => (
  <ContentItemMonoCommon {...props} IconComponent={Icon} />
);
