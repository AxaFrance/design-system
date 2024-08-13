import type { Meta, StoryObj } from "@storybook/react";
import person from "@material-symbols/svg-400/outlined/person-fill.svg";
import lock from "@material-symbols/svg-400/outlined/lock-fill.svg";
import { Svg } from "../../../Svg";
import { Button, ButtonVariants } from "../../../client";
import { HeaderClient } from "./Header.client";

const meta: Meta<typeof HeaderClient> = {
  component: HeaderClient,
  title: "Look-and-feel/Components/Header",
};

export default meta;

type Story = StoryObj<React.ComponentProps<typeof HeaderClient>>;

export const Default: Story = {
  name: "Header",
  render: () => <HeaderClient />,
};

export const HeaderWithNavBar: StoryObj<typeof HeaderClient> = {
  name: "Header with navigation bar",
  render: () => (
    <HeaderClient>
      <a
        key="MES CONTRATS link"
        className="af-navbar-item__link"
        href="/mes-contrats"
        target="_"
      >
        MES CONTRATS
      </a>
      <a
        key="MES AVANTAGES link"
        className="af-navbar-item__link"
        href="/mes-avantages"
        target="_"
      >
        MES AVANTAGES
      </a>
      <a
        key="MES DOCUMENTS link"
        className="af-navbar-item__link"
        href="/mes-documents"
        target="_"
      >
        MES DOCUMENTS
      </a>
    </HeaderClient>
  ),
};

export const HeaderWithNavBarAndRightItem: StoryObj<typeof HeaderClient> = {
  name: "Header with navigation bar and right item",
  render: ({ rightItem }) => (
    <HeaderClient rightItem={rightItem}>
      <a
        key="MES CONTRATS link"
        className="af-navbar-item__link"
        href="/mes-contrats"
      >
        MES CONTRATS
      </a>
      <a
        key="MES AVANTAGES link"
        className="af-navbar-item__link"
        href="/mes-avantages"
      >
        MES AVANTAGES
      </a>
      <a
        key="MES DOCUMENTS link"
        className="af-navbar-item__link"
        href="/mes-documents"
      >
        MES DOCUMENTS
      </a>
    </HeaderClient>
  ),
  args: {
    rightItem: [
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant={ButtonVariants.secondary}
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant={ButtonVariants.ghost}
      >
        Mon Profil
      </Button>,
    ],
  },
};

export const HeaderWithLinksAndRightItemAndPreviousLink: StoryObj<
  typeof HeaderClient
> = {
  name: "Header with links, right item and Previous link",
  render: ({ previousLink, rightItem }) => (
    <HeaderClient previousLink={previousLink} rightItem={rightItem}>
      <a
        key="MES CONTRATS link"
        className="af-navbar-item__link"
        href="/mes-contrats"
      >
        MES CONTRATS
      </a>
      <a
        key="MES AVANTAGES link"
        className="af-navbar-item__link"
        href="/mes-avantages"
      >
        MES AVANTAGES
      </a>
      <a
        key="MES DOCUMENTS link"
        className="af-navbar-item__link"
        href="/mes-documents"
      >
        MES DOCUMENTS
      </a>
    </HeaderClient>
  ),
  args: {
    previousLink: (
      <a key="Previous link" href="/mes-contrats">
        Retour à mes contrats
      </a>
    ),
    rightItem: [
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant={ButtonVariants.secondary}
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant={ButtonVariants.ghost}
      >
        Mon Profil
      </Button>,
    ],
  },
};

export const HeaderWithLinksAndRightItemAndPreviousLinkAndActiveLink: StoryObj<
  typeof HeaderClient
> = {
  name: "Header with links, right item, Previous link and active link",
  render: ({ defaultActiveLink, previousLink, rightItem }) => (
    <HeaderClient
      defaultActiveLink={defaultActiveLink}
      previousLink={previousLink}
      rightItem={rightItem}
    >
      <a
        key="MES CONTRATS link"
        className="af-navbar-item__link"
        href="/mes-contrats"
      >
        MES CONTRATS
      </a>
      <a
        key="MES AVANTAGES link"
        className="af-navbar-item__link"
        href="/mes-avantages"
      >
        MES AVANTAGES
      </a>
      <a
        key="MES DOCUMENTS link"
        className="af-navbar-item__link"
        href="/mes-documents"
      >
        MES DOCUMENTS
      </a>
    </HeaderClient>
  ),
  args: {
    defaultActiveLink: 0,
    previousLink: (
      <a key="Previous link" href="/mes-contrats">
        Retour à mes contrats
      </a>
    ),
    rightItem: [
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant={ButtonVariants.secondary}
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant={ButtonVariants.ghost}
      >
        Mon Profil
      </Button>,
    ],
  },
};
