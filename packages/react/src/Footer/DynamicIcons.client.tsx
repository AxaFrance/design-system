import { IconCustom } from "../Icons";

export const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  switch (iconName) {
    case "facebook":
      return <IconCustom name="facebook" className={className} />;
    case "twitter":
      return <IconCustom name="twitterx" className={className} />;
    case "youtube":
      return <IconCustom name="youtube" className={className} />;
    case "linkedin":
      return <IconCustom name="linkedin" className={className} />;
    default:
      return iconName;
  }
};
