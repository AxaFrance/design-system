import { DynamicIcon } from "./DynamicIcons";

export type SocialMedia = {
  icon: "facebook" | "twitter" | "youtube" | "linkedin";
  link: string;
};

type MenuIconsProps = {
  socialMedias: SocialMedia[];
};

export const MenuIcons = ({ socialMedias }: MenuIconsProps) => {
  if (socialMedias.length === 0) {
    return null;
  }
  return (
    <nav className="af-footer__footerMenuIcons">
      {socialMedias.map((socialItem) => (
        <a
          aria-label={`social media ${socialItem.icon}`}
          className="af-footer__menuIconLinks"
          key={socialItem.icon}
          href={socialItem.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          <DynamicIcon iconName={socialItem.icon} />
        </a>
      ))}
    </nav>
  );
};
