import IconFacebook from "@mui/icons-material/Facebook";
import IconTwitterX from "@mui/icons-material/X";
import IconYoutube from "@mui/icons-material/YouTube";
import IconLinkedIn from "@mui/icons-material/LinkedIn";

export const DynamicIcon = ({
  iconName,
  className,
}: {
  iconName: string;
  className?: string;
}) => {
  switch (iconName) {
    case "facebook":
      return <IconFacebook className={className} />;
    case "twitter":
      return <IconTwitterX className={className} />;
    case "youtube":
      return <IconYoutube className={className} />;
    case "linkedin":
      return <IconLinkedIn className={className} />;
    default:
      return iconName;
  }
};
