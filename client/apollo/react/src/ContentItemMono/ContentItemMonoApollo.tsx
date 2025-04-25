import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoApollo.scss";
import { BasePicture } from "../BasePicture/BasePictureApollo";
import { Icon } from "../Icon/IconApollo";
import {
  ContentItemMonoCommon,
  ContentItemProps,
} from "./ContentItemMonoCommon";

export const ContentItemMono = (props: ContentItemProps) => (
  <ContentItemMonoCommon
    {...props}
    BasePictureComponent={BasePicture}
    IconComponent={Icon}
  />
);
