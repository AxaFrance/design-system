import classNames from "classnames";

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
          {...(!isAboutOpen && { tabIndex: -1 })}
        >
          {menuItem.text}
        </a>
      ))}
    </div>
  );
};
