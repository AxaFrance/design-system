import "@axa-fr/design-system-look-and-feel-css/dist/common/reboot.scss";
import "@axa-fr/design-system-look-and-feel-css/dist/Layout/Footer/Footer.client.scss";
import expandMore from "@material-symbols/svg-400/outlined/keyboard_arrow_down.svg";
import classNames from "classnames";
import { FC, useCallback, useState } from "react";
import { MenuIcons, SocialMedia } from "./MenuIcons";
import { Link, MenuLink } from "./MenuLink";
import { Svg } from "../../../Svg";

type Props = {
  links: Link[];
  socialMedias?: SocialMedia[];
  copyright: string;
  expandLinkText: string;
  id?: string;
};

export const Footer: FC<Props> = ({
  links,
  socialMedias = [],
  copyright,
  expandLinkText,
  id,
}) => {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const handleClick = useCallback(() => {
    setIsAboutOpen((isOpen) => !isOpen);
  }, []);
  return (
    <footer id={id} className="af-footer">
      <div className="af-footer__footerTop">
        <nav className="af-footer__menuTop" aria-label={expandLinkText}>
          <button
            type="button"
            onClick={handleClick}
            className="af-footer__menuAboutTrigger"
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
          <MenuLink links={links} isAboutOpen={isAboutOpen} />
        </nav>
        <MenuIcons socialMedias={socialMedias} />
      </div>
      <div className="af-footer__footerBottom">
        <div className="af-footer__footerBottomWidth">
          <span className="af-footer__textCopyright">{copyright}</span>
        </div>
      </div>
    </footer>
  );
};
