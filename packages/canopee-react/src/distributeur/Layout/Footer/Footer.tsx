import logo from "@axa-fr/canopee-css/logo-axa.svg";
import "@axa-fr/canopee-css/distributeur/Layout/Footer/Footer.css";
import "@axa-fr/canopee-css/distributeur/common/breakpoints.css";
import { PropsWithChildren, forwardRef } from "react";
import classNames from "classnames";

type FooterProps = {
  href?: string;
  title?: string;
  alt?: string;
  icon?: string;
  className?: string;
  version?: string;
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
      version,
      children = `© ${new Date().getFullYear()} AXA Tous droits réservés`,
      ...props
    },
    ref,
  ) => (
    <footer
      ref={ref}
      className={classNames("af-container", className)}
      {...props}
    >
      {Boolean(icon) && (
        <a
          className="af-logo"
          href={href}
          title={title}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="af-logo__brand" src={icon} alt={alt} />
        </a>
      )}
      <div className="af-footer-content">{children}</div>
      {version ? (
        <span className="af-footer-version">Version {version}</span>
      ) : null}
    </footer>
  ),
);
Footer.displayName = "Footer";
