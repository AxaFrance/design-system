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

import {
  copyright,
  expandLinkText,
  links,
  socialMedias,
  tabMenuProps,
  menuBurgerProps,
} from "./LayoutDemo.constant.tsx";

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
