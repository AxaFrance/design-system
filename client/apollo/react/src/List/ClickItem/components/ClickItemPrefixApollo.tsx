import { Icon } from "../../../Icon/IconApollo";
import { BasePicture } from "../../../BasePicture/BasePictureApollo";
import {
  ClickItemPrefixCommon,
  type ClickItemPrefixProps,
} from "./ClickItemPrefixCommon";

export const ClickItemPrefix = (props: ClickItemPrefixProps) => (
  <ClickItemPrefixCommon
    BasePictureComponent={BasePicture}
    {...props}
    IconComponent={Icon}
  />
);
