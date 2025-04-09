import "@axa-fr/design-system-apollo-css/dist/Form/Radio/RadioLF.scss";

import { ComponentProps, useState } from "react";
import svgIconUncheckedSrc400 from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import svgIconUncheckedSrc700 from "@material-symbols/svg-700/outlined/radio_button_unchecked.svg";
import { Radio as RadioCommon } from "./RadioCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageLF";
import { Icon } from "../../Icon/IconLF";

export const Radio = (
  props: Omit<
    ComponentProps<typeof RadioCommon>,
    "ItemMessageComponent" | "IconComponent"
  >,
) => {
  const [isHovered, setIsHovered] = useState(false);

  const svgIconUncheckedSrc = isHovered
    ? svgIconUncheckedSrc700
    : svgIconUncheckedSrc400;
  return (
    <RadioCommon
      {...props}
      svgIconUncheckedSrc={svgIconUncheckedSrc}
      ItemMessageComponent={ItemMessage}
      IconComponent={Icon}
      onMouseEnterProps={() => setIsHovered(true)}
      onMouseLeaveProps={() => setIsHovered(false)}
    />
  );
};
