import classNames from "classnames";
import { BREAKPOINT, useIsSmallScreen } from "../../utilities";

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
  const isSmallScreen = useIsSmallScreen(BREAKPOINT.MD);

  if (links.length === 0) {
    return null;
  }
  return (
    <ul
      className={classNames(
        "af-footer__menuLinks",
        isAboutOpen && "af-footer__menuLinks--display",
      )}
    >
      {links.map((menuItem) => (
        <li key={menuItem.text}>
          <a
            className="af-footer__linkItem"
            href={menuItem.link}
            target={menuItem.openInCurrentTab ? "_top" : "_blank"}
            rel="noreferrer"
            tabIndex={isSmallScreen && !isAboutOpen ? -1 : undefined}
          >
            {menuItem.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
