import { DebugGrid } from "../../Grid/DebugGridLF";
import { Header } from "../../Header/HeaderLF";
import { Footer } from "../Footer/FooterLF";
import {
  Bottom,
  MainLayoutCommon,
  Top,
  type MainLayoutProps,
  type MainLayoutSlotProps,
  type MainLayoutWithSubComponents,
} from "./MainLayoutCommon";
import { Link } from "../../Link/LinkLF";
import { Icon } from "../../Icon/IconLF";

import "@axa-fr/canopee-css/client/Layout/MainLayout/MainLayoutLF.css";

/**
 * Client page skeleton: header, optional `MainLayout.Top` area, main content (children),
 * optional `MainLayout.Bottom` area and footer.
 */
export const MainLayout: MainLayoutWithSubComponents = (
  props: MainLayoutProps,
) => (
  <MainLayoutCommon
    {...props}
    HeaderComponent={Header}
    FooterComponent={Footer}
    DebugGridComponent={DebugGrid}
    LinkComponent={Link}
    IconComponent={Icon}
  />
);

MainLayout.Top = Top;
MainLayout.Bottom = Bottom;

export type { MainLayoutProps, MainLayoutSlotProps };
