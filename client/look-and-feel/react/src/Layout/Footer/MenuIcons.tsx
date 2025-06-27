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
    <nav role="navigation" className="af-footer__footerMenuIcons">
      <ul>
        {socialMedias.map((socialItem) => (
          <li key={socialItem.icon}>
            <a
              aria-label={`social media ${socialItem.icon}`}
              className="af-footer__menuIconLinks"
              href={socialItem.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <DynamicIcon iconName={socialItem.icon} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
