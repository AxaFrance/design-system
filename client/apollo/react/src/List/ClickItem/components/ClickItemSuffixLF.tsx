import keyboardArrowRight from "@material-symbols/svg-400/rounded/keyboard_arrow_right-fill.svg";
import { Icon } from "../../../Icon/IconLF";
import { Spinner } from "../../../Spinner/SpinnerLF";
import { ClickIcon } from "../../../ClickIcon/ClickIconLF";
import {
  ClickItemSuffixCommon,
  type ClickItemSuffixProps,
} from "./ClickItemSuffixCommon";

export const ClickItemSuffix = (props: ClickItemSuffixProps) => (
  <ClickItemSuffixCommon
    trailingClickIcon={keyboardArrowRight}
    IconComponent={Icon}
    SpinnerComponent={Spinner}
    ClickIconComponent={ClickIcon}
    {...props}
  />
);
