import facebook from "../../../assets/svg/facebook.svg";
import linkedin from "../../../assets/svg/linkedin.svg";
import twitterx from "../../../assets/svg/twitterx.svg";
import youtube from "../../../assets/svg/youtube.svg";
import { Svg } from "../../../Svg";

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
