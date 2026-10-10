import classNames from "classnames";
import { type RefObject, useLayoutEffect, useRef } from "react";
import { useIsSmallScreen } from "../../utilities/hook/useIsSmallScreen";
import { BREAKPOINT } from "../../utilities/constants";
import { VisuallyHidden } from "../../utilities/VisuallyHidden";

export type Link = {
  link: string;
  text: string;
  openInCurrentTab?: boolean;
};

type MenuLinkProps = {
  id?: string;
  /** Gets the focus back if the list collapses while it holds the focus */
  triggerRef?: RefObject<HTMLButtonElement | null>;
  links: Link[];
  isAboutOpen?: boolean;
  newWindowLabel: string;
};

export const MenuLink = ({
  id,
  triggerRef,
  links,
  isAboutOpen = false,
  newWindowLabel,
}: MenuLinkProps) => {
  const isSmallScreen = useIsSmallScreen(BREAKPOINT.MD);
  // Collapsed on small screens: the links can be neither focused nor read
  const isCollapsed = isSmallScreen && !isAboutOpen;
  const listRef = useRef<HTMLUListElement>(null);

  // A resize or a zoom can collapse the list around the focus, which inert drops
  useLayoutEffect(() => {
    if (isCollapsed && listRef.current?.contains(document.activeElement)) {
      triggerRef?.current?.focus();
    }
  }, [isCollapsed, triggerRef]);

  if (links.length === 0) {
    return null;
  }
  return (
    <ul
      id={id}
      ref={listRef}
      className={classNames(
        "af-footer__menuLinks",
        isAboutOpen && "af-footer__menuLinks--display",
      )}
      inert={isCollapsed}
    >
      {links.map((menuItem) => (
        <li key={menuItem.text}>
          <a
            className="af-footer__linkItem"
            href={menuItem.link}
            target={menuItem.openInCurrentTab ? "_top" : "_blank"}
            rel="noreferrer"
          >
            {menuItem.text}
            {menuItem.openInCurrentTab ? null : (
              <>
                {" "}
                <VisuallyHidden>({newWindowLabel})</VisuallyHidden>
              </>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
};
