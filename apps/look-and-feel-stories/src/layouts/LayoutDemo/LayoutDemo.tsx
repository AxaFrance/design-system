import type { ReactNode } from "react";
import { DebugGrid, Link, Heading, Footer } from "@axa-fr/canopee-react/client";
import logo from "@axa-fr/canopee-css/logo-axa.svg";
import "./LayoutDemo.css";
import {
  copyright,
  expandLinkText,
  links,
  socialMedias,
} from "./LayoutDemo.constant";

export const LayoutDemo = ({
  children,
  title,
}: {
  children: ReactNode;
  title?: string;
}) => (
  <>
    <DebugGrid isCheckedByDefault forceVisible />
    <header className="af-header-layout">
      <Link href="/" className="af-header-layout-logo-link">
        <img src={logo} alt="Logo AXA" className="af-header-layout-logo" />
      </Link>
      {title ? <Heading level={1}>{title}</Heading> : null}
    </header>
    <main className="grid">{children}</main>
    <Footer
      links={links}
      socialMedias={socialMedias}
      copyright={copyright}
      expandLinkText={expandLinkText}
    />
  </>
);
