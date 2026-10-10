import { DynamicIcon } from "./DynamicIcons";

export type SocialMedia = {
  icon: "facebook" | "twitter" | "youtube" | "linkedin";
  link: string;
  /** Name of the social network, followed by the Footer newWindowLabel */
  label?: string;
};

const defaultLabels: Record<SocialMedia["icon"], string> = {
  facebook: "Facebook",
  twitter: "X (Twitter)",
  youtube: "YouTube",
  linkedin: "LinkedIn",
};

type MenuIconsProps = {
  socialMedias: SocialMedia[];
  newWindowLabel: string;
};

export const MenuIcons = ({ socialMedias, newWindowLabel }: MenuIconsProps) => {
  if (socialMedias.length === 0) {
    return null;
  }
  return (
    <nav role="navigation" className="af-footer__footerMenuIcons">
      <ul>
        {socialMedias.map((socialItem) => (
          <li key={socialItem.icon}>
            <a
              className="af-footer__menuIconLinks"
              href={socialItem.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* The icon alternative is the link text (RGAA 6.2.1) */}
              <DynamicIcon
                iconName={socialItem.icon}
                alt={`${socialItem.label ?? defaultLabels[socialItem.icon]} (${newWindowLabel})`}
              />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
