import "@axa-fr/design-system-apollo-css/dist/Form/Radio/RadioApollo.scss";
import svgIconUncheckedSrc200 from "@material-symbols/svg-200/outlined/radio_button_unchecked.svg";
import svgIconUncheckedSrc400 from "@material-symbols/svg-400/outlined/radio_button_unchecked.svg";
import { ComponentProps, useState } from "react";
import { Radio as RadioCommon } from "./RadioCommon";
import { ItemMessage } from "../ItemMessage/ItemMessageApollo";
import { Icon } from "../../Icon/IconApollo";

export const Radio = (
  props: Omit<
    ComponentProps<typeof RadioCommon>,
    "ItemMessageComponent" | "IconComponent"
  >,
) => {
  const [isHovered, setIsHovered] = useState(false);

  const svgIconUncheckedSrc = isHovered
    ? svgIconUncheckedSrc400
    : svgIconUncheckedSrc200;
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
