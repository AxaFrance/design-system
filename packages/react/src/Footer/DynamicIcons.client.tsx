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
      return <IconCustom name="Facebook" className={className} />;
    case "twitter":
      return <IconCustom name="Twitterx" className={className} />;
    case "youtube":
      return <IconCustom name="Youtube" className={className} />;
    case "linkedin":
      return <IconCustom name="Linkedin" className={className} />;
    default:
      return iconName;
  }
};
