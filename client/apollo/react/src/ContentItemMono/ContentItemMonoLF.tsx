import "@axa-fr/design-system-apollo-css/dist/ContentItemMono/ContentItemMonoLF.scss";
import { BasePicture } from "../BasePicture/BasePictureLF";
import { Icon } from "../Icon/IconLF";
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
