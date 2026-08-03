/* eslint-disable import/no-extraneous-dependencies */
import { Footer, Button, Icon } from "@axa-fr/canopee-react/prospect";
import type { ComponentProps } from "react";
import type {
  TabMenuProps,
  MenuBurgerProps,
  ClickItemStates,
  TagVariants,
} from "@axa-fr/canopee-react/prospect";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import logout from "@material-symbols/svg-400/rounded/logout.svg";
import settings from "@material-symbols/svg-400/rounded/settings-fill.svg";
import { action } from "storybook/actions";

export const links = [
  {
    link: "https://www.axa.fr/qui-sommes-nous.html",
    text: "À propos",
  },
  {
    link: "https://www.axa.fr/configuration-securite/mentions-legales.html",
    text: "Mentions légales",
  },
  {
    link: "https://www.axa.fr/configuration-securite/donnees-personnelles.html",
    text: "Données personnelles",
  },
  {
    link: "https://www.axa.fr/configuration-securite/politique-cookies.html",
    text: "Cookies",
  },
];

export const socialMedias = [
  { icon: "facebook", link: "https://www.facebook.com/axafrance" },
  { icon: "twitter", link: "https://twitter.com/AXAFrance" },
  {
    icon: "youtube",
    link: "https://www.youtube.com/user/AXAFranceChaine",
  },
  {
    icon: "linkedin",
    link: "https://www.linkedin.com/company/axa-france/",
  },
] satisfies ComponentProps<typeof Footer>["socialMedias"];

export const copyright = `@AXA ${new Date().getFullYear()} - Tous droits réservés`;

export const expandLinkText = "Liens utiles";

export const tabMenuProps: TabMenuProps = {
  items: [
    { href: "#accueil", label: "Accueil" },
    { href: "#contrats", label: "Contrats" },
  ],
};

export const menuBurgerProps: MenuBurgerProps = {
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
