import {
  Header,
  type ClickItemStates,
  type MenuBurgerProps,
  type TabMenuProps,
  Button,
  Icon,
  type TagVariants,
} from "@axa-fr/canopee-react/prospect";

import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import logout from "@material-symbols/svg-400/rounded/logout.svg";
import settings from "@material-symbols/svg-400/rounded/settings-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";

const meta: Meta<typeof Header> = {
  title: "Components/Header",
  parameters: { layout: "fullscreen" },
  component: Header,
};

export default meta;

const tabMenuProps: TabMenuProps = {
  items: [
    { href: "#accueil", label: "Accueil" },
    { href: "#contrats", label: "Contrats" },
  ],
};

const menuBurgerProps: MenuBurgerProps = {
  buttonLabel: "Mon espace",
  children: (
    <Button
      variant="tertiary"
      iconLeft={<Icon src={logout} variant="primary" size="S" />}
      onClick={action("Logout clicked")}
    >
      Déconnexion
    </Button>
  ),
  clickItems: [
    {
      icon: accountBalance,
      title: "Mon profil",
      subtitle: "Informations personnelles",
      textSecondary: "Consulter et modifier vos données",
      state: "default" as ClickItemStates,
      ariaLabelForActionIcon: "Aller à mon profil",
      tagLabel: "Nouveau",
      tagProps: { variant: "info" as TagVariants },
      onClick: action("Profil clicked"),
    },
    {
      icon: settings,
      title: "Préférences",
      subtitle: "Notifications et sécurité",
      state: "default" as ClickItemStates,
      ariaLabelForActionIcon: "Aller aux préférences",
      onClick: action("Preferences clicked"),
    },

    {
      icon: settings,
      title: "Préférences",
      state: "default" as ClickItemStates,
      onClick: action("Preferences clicked"),
    },
    {
      icon: settings,
      title: "Préférences",
      state: "default" as ClickItemStates,
      onClick: action("Preferences clicked"),
    },
    {
      icon: settings,
      title: "Préférences",
      state: "default" as ClickItemStates,
      onClick: action("Preferences clicked"),
    },
  ],
};

export const Default: StoryObj<typeof Header> = {
  args: {
    appNameProps: { label: "Mon application" },
    tabMenuProps,
    menuBurgerProps,
    actionChildren: (
      <Button
        variant="secondary"
        iconLeft={<Icon src={accountBalance} size="S" />}
        onClick={action("Logout clicked")}
      >
        Accéder à AXA Banque
      </Button>
    ),
  },
};

export const Logo: StoryObj<typeof Header> = {
  args: {
    appNameProps: { label: "Mon application" },
  },
};

export const LogoAndMenu: StoryObj<typeof Header> = {
  args: {
    appNameProps: { label: "Mon application" },
    tabMenuProps,
  },
};

export const LogoAndActionChildren: StoryObj<typeof Header> = {
  args: {
    appNameProps: { label: "Mon application" },
    actionChildren: (
      <Button
        variant="secondary"
        iconLeft={<Icon src={accountBalance} size="S" />}
        onClick={action("Logout clicked")}
      >
        Accéder à AXA Banque
      </Button>
    ),
  },
};

export const LogoAndActionChildrenAndMenuBurger: StoryObj<typeof Header> = {
  args: {
    appNameProps: { label: "Mon application" },
    actionChildren: (
      <Button
        variant="secondary"
        iconLeft={<Icon src={accountBalance} size="S" />}
        onClick={action("Logout clicked")}
      >
        Accéder à AXA Banque
      </Button>
    ),
    menuBurgerProps,
  },
};

export const LogoAndMenuBurger: StoryObj<typeof Header> = {
  args: {
    appNameProps: { label: "Mon application" },
    menuBurgerProps,
  },
};

export const LogoAndMenuWithTitle: StoryObj<typeof Header> = {
  args: {
    title: "Tableau de bord",
    appNameProps: { label: "Mon application" },
    tabMenuProps,
  },
};

export const LogoWithTitle: StoryObj<typeof Header> = {
  args: {
    title: "Tableau de bord",
    appNameProps: { label: "Mon application" },
  },
};
