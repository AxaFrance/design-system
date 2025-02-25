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
          type: <a href="/mes-contrats">MES CONTRATS</a>,
        },
        {
          label: "MES AVANTAGES",
          href: "/mes-avantages",
          type: <a href="/mes-avantages">MES AVANTAGES</a>,
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
          type: <a href="/mes-contrats">MES CONTRATS</a>,
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
          type: <a href="/mes-contrats">MES CONTRATS</a>,
        },
      ]}
      burgerMenuItems={[
        {
          label: "MES AVANTAGES",
          href: "/mes-avantages",
          type: <a href="/mes-avantages">MES AVANTAGES</a>,
        },
        {
          label: "MES DOCUMENTS",
          href: "/mes-documents",
          type: <a href="/mes-documents">MES DOCUMENTS</a>,
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
