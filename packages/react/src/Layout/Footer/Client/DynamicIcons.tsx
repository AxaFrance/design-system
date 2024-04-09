import { Facebook, LinkedIn, X, YouTube } from "../../../Icons/Icon.client";

export const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  switch (iconName) {
    case "facebook":
      return <Facebook className={className} />;
    case "twitter":
      return <X className={className} />;
    case "youtube":
      return <YouTube className={className} />;
    case "linkedin":
      return <LinkedIn className={className} />;
    default:
      return iconName;
  }
};
