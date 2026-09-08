/* eslint-disable import/no-extraneous-dependencies */
import type { ReactNode } from "react";
import {
  DebugGrid,
  Header,
  Icon,
  Footer,
  Button,
} from "@axa-fr/canopee-react/prospect";

import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import { action } from "storybook/actions";
import "./LayoutDemo.css";

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
}: {
  children: ReactNode;
  title?: string;
}) => (
  <>
    <DebugGrid isCheckedByDefault forceVisible />
    <Header
      appNameProps={{ label: title ?? "Mon application" }}
      tabMenuProps={tabMenuProps}
      menuBurgerProps={menuBurgerProps}
      actionChildren={
        <Button
          variant="secondary"
          iconLeft={<Icon src={accountBalance} size="S" />}
          onClick={action("Logout clicked")}
        >
          Accéder à AXA Banque
        </Button>
      }
    />
    <main className="grid">{children}</main>
    <Footer
      links={links}
      socialMedias={socialMedias}
      copyright={copyright}
      expandLinkText={expandLinkText}
    />
  </>
);
