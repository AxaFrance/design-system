import classNames from "classnames";
import { useIsSmallScreen } from "../../../utilities/hooks/useIsSmallScreen";

const BREAKPOINT_SMALL = 1024;

export type Link = {
  link: string;
  text: string;
  openInCurrentTab?: boolean;
};

type MenuLinkProps = {
  links: Link[];
  isAboutOpen?: boolean;
};

export const MenuLink = ({ links, isAboutOpen = false }: MenuLinkProps) => {
  const isSmallScreen = useIsSmallScreen(BREAKPOINT_SMALL);

  if (links.length === 0) {
    return null;
  }
  return (
    <div
      className={classNames(
        "af-footer__menuLinks",
        isAboutOpen && "af-footer__menuLinks--display",
      )}
    >
      {links.map((menuItem) => (
        <a
          key={menuItem.text}
          className="af-footer__linkItem"
          href={menuItem.link}
          target={menuItem.openInCurrentTab ? "_top" : "_blank"}
          rel="noreferrer"
          tabIndex={isSmallScreen && !isAboutOpen ? -1 : undefined}
        >
          {menuItem.text}
        </a>
      ))}
    </div>
  );
};
