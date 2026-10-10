import expandMore from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import classNames from "classnames";
import { useCallback, useId, useRef, useState } from "react";
import { Svg } from "../../Svg/Svg";
import { MenuIcons, type SocialMedia } from "./MenuIcons";
import { type Link, MenuLink } from "./MenuLink";

export type FooterProps = {
  links: Link[];
  socialMedias?: SocialMedia[];
  copyright: string;
  expandLinkText: string;
  id?: string;
  /**
   * Visually hidden text, in parentheses, at the end of the name of the links
   * that open in a new tab. Default: "nouvelle fenêtre".
   */
  newWindowLabel?: string;
};

export const Footer = ({
  links,
  socialMedias = [],
  copyright,
  expandLinkText,
  id,
  newWindowLabel = "nouvelle fenêtre",
}: FooterProps) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const linksId = useId();
  const triggerRef = useRef<HTMLButtonElement>(null);

  const handleClick = useCallback(() => {
    setIsAboutOpen((isOpen) => !isOpen);
  }, []);

  return (
    <footer role="contentinfo" id={id} className="af-footer">
      <div className="af-footer__footerTop">
        <nav
          role="navigation"
          className="af-footer__menuTop"
          aria-label={expandLinkText}
        >
          <button
            ref={triggerRef}
            type="button"
            onClick={handleClick}
            className="af-footer__menuAboutTrigger"
            aria-expanded={isAboutOpen}
            aria-controls={links.length > 0 ? linksId : undefined}
          >
            <span className="af-footer__menuAboutTriggerText">
              {expandLinkText}
            </span>
            <Svg
              src={expandMore}
              className={classNames(
                "af-footer__icon",
                "af-footer__iconTrigger",
                isAboutOpen && "af-footer__iconTrigger--display",
              )}
            />
          </button>
          <MenuLink
            id={linksId}
            triggerRef={triggerRef}
            links={links}
            isAboutOpen={isAboutOpen}
            newWindowLabel={newWindowLabel}
          />
        </nav>
        <MenuIcons
          socialMedias={socialMedias}
          newWindowLabel={newWindowLabel}
        />
      </div>
      <div className="af-footer__footerBottom">
        <div className="af-footer__footerBottomWidth">
          <span className="af-footer__textCopyright">{copyright}</span>
        </div>
      </div>
    </footer>
  );
};
