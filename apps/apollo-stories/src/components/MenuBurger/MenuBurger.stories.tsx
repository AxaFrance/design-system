import {
  Button,
  Icon,
  MenuBurger,
  type MenuBurgerProps,
  type ClickItemStates,
  type TagVariants,
} from "@axa-fr/canopee-react/prospect";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import logout from "@material-symbols/svg-400/rounded/logout.svg";
import settings from "@material-symbols/svg-400/rounded/settings-fill.svg";
import { Meta, StoryObj } from "@storybook/react";
import { action } from "storybook/actions";

const meta: Meta<typeof MenuBurger> = {
  title: "Components/MenuBurger 🚧",
  component: MenuBurger,
};

export default meta;

const clickItems: NonNullable<MenuBurgerProps["clickItems"]> = [
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
];

export const Playground: StoryObj<typeof MenuBurger> = {
  render: () => (
    <MenuBurger buttonLabel="Mon espace" clickItems={clickItems}>
      <Button
        variant="tertiary"
        iconLeft={<Icon src={logout} variant="primary" size="S" />}
        onClick={action("Logout clicked")}
      >
        Déconnexion
      </Button>
    </MenuBurger>
  ),
};
