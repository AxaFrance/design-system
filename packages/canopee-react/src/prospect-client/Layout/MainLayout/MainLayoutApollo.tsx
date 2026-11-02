import { DebugGrid } from "../../Grid/DebugGridApollo";
import { Header } from "../../Header/HeaderApollo";
import { Footer } from "../Footer/FooterApollo";
import {
  Bottom,
  MainLayoutCommon,
  Top,
  type MainLayoutProps,
  type MainLayoutSlotProps,
  type MainLayoutWithSubComponents,
} from "./MainLayoutCommon";
import { Link } from "../../Link/LinkApollo";
import { Icon } from "../../Icon/IconApollo";

import "@axa-fr/canopee-css/prospect/Layout/MainLayout/MainLayoutApollo.css";

/**
 * Prospect page skeleton: header, optional `MainLayout.Top` area, main content (children),
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
