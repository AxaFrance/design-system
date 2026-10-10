import facebook from "@axa-fr/canopee-css/facebook.svg";
import linkedin from "@axa-fr/canopee-css/linkedin.svg";
import twitterx from "@axa-fr/canopee-css/twitterx.svg";
import youtube from "@axa-fr/canopee-css/youtube.svg";

import { Svg } from "../../Svg/Svg";

export const DynamicIcon = ({
  iconName,
  className,
  alt,
}: {
  iconName: string;
  className?: string;
  alt?: string;
}) => {
  switch (iconName) {
    case "facebook":
      return <Svg src={facebook} className={className} alt={alt} />;
    case "twitter":
      return <Svg src={twitterx} className={className} alt={alt} />;
    case "youtube":
      return <Svg src={youtube} className={className} alt={alt} />;
    case "linkedin":
      return <Svg src={linkedin} className={className} alt={alt} />;
    default:
      return iconName;
  }
};
