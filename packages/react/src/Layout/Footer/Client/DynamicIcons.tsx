import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";
import X from "@mui/icons-material/X";
import YouTube from "@mui/icons-material/YouTube";

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
