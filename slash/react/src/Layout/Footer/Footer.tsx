import logoAxa from "@axa-fr/design-system-slash-css/dist/common/assets/logo-axa.svg";
import classNames from "classnames";
import { forwardRef, type ComponentProps } from "react";
import { Grid } from "../../Grid/Grid";

import "@axa-fr/design-system-slash-css/dist/Layout/Footer/Footer.scss";

type FooterProps = Omit<ComponentProps<"footer">, "children"> & {
  version?: string;
};

const copyright = `© ${new Date().getFullYear()} AXA Tous droits réservés`;

export const Footer = forwardRef<HTMLElement, FooterProps>(
  ({ className, version, ...props }, ref) => (
    <Grid
      component="footer"
      className={classNames("af-footer", className)}
      {...props}
      ref={ref}
    >
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img className="af-footer__logo" src={logoAxa} aria-hidden />
      <p className="af-footer__copyright">{copyright}</p>
      {version && <p className="af-footer__version">Version: {version}</p>}
    </Grid>
  ),
);
Footer.displayName = "Footer";
