/* eslint-disable import/no-extraneous-dependencies */
import type { ReactNode } from "react";
import type { MainLayoutProps } from "@axa-fr/canopee-react/prospect";
import { Button, Icon, MainLayout } from "@axa-fr/canopee-react/prospect";

import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import { action } from "storybook/actions";

import {
  copyright,
  expandLinkText,
  links,
  socialMedias,
  tabMenuProps,
  menuBurgerProps,
} from "./LayoutDemo.constant.tsx";

/**
 * Storybook layout wrapper used by page and layout stories.
 *
 * @component
 * @param {{ children: ReactNode; title?: string }} props - LayoutDemo props.
 * @param {ReactNode} props.children - Story content rendered between the header and the footer.
 * @param {string} [props.title] - Title shown in the header.
 * @returns {JSX.Element} The rendered Storybook layout wrapper.
 */
export const LayoutDemo = ({
  children,
  title,
  ...props
}: {
  children: ReactNode;
  title?: string;
} & Omit<
  MainLayoutProps,
  "headerProps" | "footerProps" | "DebugGridProps"
>) => (
  <MainLayout
    DebugGridProps={{ isCheckedByDefault: true, forceVisible: true }}
    headerProps={{
      appNameProps: { label: title ?? "" },
      tabMenuProps,
      menuBurgerProps,
      "aria-label": title ?? "",
      actionChildren: (
        <Button
          variant="secondary"
          iconLeft={<Icon src={accountBalance} size="S" />}
          onClick={action("Logout clicked")}
        >
          Accéder à AXA Banque
        </Button>
      ),
    }}
    footerProps={{
      links,
      socialMedias,
      copyright,
      expandLinkText,
    }}
    {...props}
  >
    {children}
  </MainLayout>
);
