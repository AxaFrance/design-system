import {
  Header,
  type ClickItemStates,
  type HeaderProps,
  type MenuBurgerProps,
  Button,
  Icon,
  type TagVariants,
} from "@axa-fr/canopee-react/prospect";

import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import contract from "@material-symbols/svg-400/rounded/contract-fill.svg";
import home from "@material-symbols/svg-400/rounded/home-fill.svg";
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

// The mockup shows the AXA logo alone, a link to the home page.
const appNameProps: HeaderProps["appNameProps"] = {
  logoLinkProps: { href: "#" },
};

// The icons are only shown in the small screen menu.
const tabMenuProps: HeaderProps["tabMenuProps"] = {
  items: [
    { href: "#accueil", label: "Accueil", icon: home, isActive: true },
    { href: "#contrats", label: "Contrats", icon: contract },
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
    appNameProps,
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
    appNameProps,
  },
};

export const LogoAndMenu: StoryObj<typeof Header> = {
  args: {
    appNameProps,
    tabMenuProps,
  },
};

export const LogoAndActionChildren: StoryObj<typeof Header> = {
  args: {
    appNameProps,
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
    appNameProps,
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
    appNameProps,
    menuBurgerProps,
  },
};

export const LogoAndMenuWithTitle: StoryObj<typeof Header> = {
  args: {
    title: "Tableau de bord",
    appNameProps,
    tabMenuProps,
  },
};

export const LogoWithTitle: StoryObj<typeof Header> = {
  name: "Parcours (logo and title)",
  args: {
    title: "Devis assurance auto",
    appNameProps,
  },
};

/**
 * Deprecated: the Header mockup shows the AXA logo alone, without any name
 * next to it. `appNameProps.label` still works in 2.x.
 */
export const DeprecatedAppNameLabel: StoryObj<typeof Header> = {
  name: "Deprecated: application name next to the logo",
  parameters: {
    docs: {
      description: {
        story:
          "Deprecated: `appNameProps.label` displays a name next to the logo, which is not in the Header mockup. Leave it empty; the title of the Parcours style goes in `title`.",
      },
    },
  },
  args: {
    appNameProps: { ...appNameProps, label: "Mon application" },
    tabMenuProps,
  },
};
