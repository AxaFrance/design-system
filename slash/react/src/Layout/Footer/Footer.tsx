import logo from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";
import "@axa-fr/design-system-slash-css/dist/Layout/Footer/Footer.scss";
import { PropsWithChildren, forwardRef } from "react";

type FooterProps = {
  href?: string;
  title?: string;
  alt?: string;
  icon?: string;
  className?: string;
};

export const Footer = forwardRef<
  HTMLDivElement,
  PropsWithChildren<FooterProps>
>(
  (
    {
      className = "af-footer",
      href = "https://www.axa.fr/",
      title = "Site Axa",
      icon = logo,
      alt = "Logo Axa",
      children = `© ${new Date().getFullYear()} AXA Tous droits réservés`,
      ...props
    },
    ref,
  ) => (
    <footer ref={ref} className={className} {...props}>
      <div className="container-fluid container">
        {Boolean(icon) && (
          <a className="af-logo" href={href} title={title} target="blank">
            <img className="af-logo__brand" src={icon} alt={alt} />
          </a>
        )}
        <div className="af-footer-content">{children}</div>
      </div>
    </footer>
  ),
);
Footer.displayName = "Footer";
