import facebook from "@axa-fr/design-system-apollo-css/facebook.svg";
import linkedin from "@axa-fr/design-system-apollo-css/linkedin.svg";
import twitterx from "@axa-fr/design-system-apollo-css/twitterx.svg";
import youtube from "@axa-fr/design-system-apollo-css/youtube.svg";

import { Svg } from "../../Svg/Svg";

export const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  switch (iconName) {
    case "facebook":
      return <Svg src={facebook} className={className} />;
    case "twitter":
      return <Svg src={twitterx} className={className} />;
    case "youtube":
      return <Svg src={youtube} className={className} />;
    case "linkedin":
      return <Svg src={linkedin} className={className} />;
    default:
      return iconName;
  }
};
