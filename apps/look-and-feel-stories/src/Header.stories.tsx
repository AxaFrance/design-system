import { Meta, StoryObj } from "@storybook/react";
import {
  Header,
  Svg,
  Button,
  ButtonVariants,
} from "@axa-fr/design-system-look-and-feel-react";

import lock from "@material-symbols/svg-400/outlined/lock-fill.svg";

const meta: Meta<typeof Header> = {
  component: Header,
  title: "Components/Header",
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof Header>>;

export const Default: Story = {
  name: "Header",
  render: () => <Header />,
};

export const HeaderWithNavBar: StoryObj<typeof Header> = {
  name: "Header with navigation bar",
  render: () => (
    <Header
      links={[
        {
          label: "MES CONTRATS",
          href: "/mes-contrats",
        },
        {
          label: "MES AVANTAGES",
          href: "/mes-avantages",
        },
      ]}
    />
  ),
};

export const HeaderWithNavBarAndRightItemTitle: StoryObj<typeof Header> = {
  name: "Header with navigation bar and right item title",
  render: ({ rightItem }) => (
    <Header
      rightItem={rightItem}
      links={[
        {
          label: "MES CONTRATS",
          href: "/mes-contrats",
        },
      ]}
    />
  ),
  args: {
    rightItem: "Banque",
  },
};

export const HeaderWithLinksAndRightItemAndButtonAndButtonBurger: StoryObj<
  typeof Header
> = {
  name: "Header with links, right item button",
  render: ({ rightItem }) => (
    <Header
      rightItem={rightItem}
      links={[
        {
          label: "MES CONTRATS",
          href: "/mes-contrats",
        },
      ]}
      burgerMenuItems={[
        {
          label: "MES AVANTAGES",
          href: "/mes-avantages",
        },
        {
          label: "MES DOCUMENTS",
          href: "/mes-documents",
        },
      ]}
    >
      <Button
        variant={ButtonVariants.tertiary}
        iconLeft={<Svg src={lock} fill="#00008f" />}
      >
        déconexion
      </Button>
    </Header>
  ),
  args: {
    rightItem: {
      iconLeft: <Svg src={lock} fill="#00008f" />,
      value: "Banque",
    },
  },
};
