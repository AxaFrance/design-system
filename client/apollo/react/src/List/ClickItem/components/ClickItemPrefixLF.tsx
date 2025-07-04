import { Icon } from "../../../Icon/IconLF";
import { BasePicture } from "../../../BasePicture/BasePictureLF";
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
