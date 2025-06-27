import arrowForward from "@material-symbols/svg-400/rounded/arrow_forward-fill.svg";
import { Icon } from "../../../Icon/IconApollo";
import { Spinner } from "../../../Spinner/SpinnerApollo";
import { ClickIcon } from "../../../ClickIcon/ClickIconApollo";
import {
  ClickItemSuffixCommon,
  type ClickItemSuffixProps,
} from "./ClickItemSuffixCommon";

export const ClickItemSuffix = (props: ClickItemSuffixProps) => (
  <ClickItemSuffixCommon
    trailingClickIcon={arrowForward}
    IconComponent={Icon}
    SpinnerComponent={Spinner}
    ClickIconComponent={ClickIcon}
    {...props}
  />
);
