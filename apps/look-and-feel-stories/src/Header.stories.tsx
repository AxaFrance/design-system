import { Button, Header, Svg } from "@axa-fr/design-system-look-and-feel-react";
import contractEdit from "@material-symbols/svg-400/outlined/contract_edit.svg";
import workspacePremium from "@material-symbols/svg-400/outlined/workspace_premium.svg";
import textSnippet from "@material-symbols/svg-400/outlined/text_snippet-fill.svg";
import lock from "@material-symbols/svg-400/outlined/lock-fill.svg";
import person from "@material-symbols/svg-400/outlined/person-fill.svg";
import type { Meta, StoryObj } from "@storybook/react";

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
    <Header>
      <a key="MES CONTRATS link" href="/mes-contrats" target="_">
        <Svg src={contractEdit} aria-hidden />
        MES CONTRATS
      </a>
      <a key="MES AVANTAGES link" href="/mes-avantages" target="_">
        <Svg src={workspacePremium} aria-hidden />
        MES AVANTAGES
      </a>
      <a key="MES DOCUMENTS link" href="/mes-documents" target="_">
        <Svg src={textSnippet} aria-hidden />
        MES DOCUMENTS
      </a>
    </Header>
  ),
};

export const HeaderWithNavBarAndRightItem: StoryObj<typeof Header> = {
  name: "Header with navigation bar and right item",
  render: ({ rightItem }) => (
    <Header rightItem={rightItem}>
      <a key="MES CONTRATS link" href="/mes-contrats" target="_">
        <Svg src={contractEdit} aria-hidden />
        MES CONTRATS
      </a>
      <a key="MES AVANTAGES link" href="/mes-avantages" target="_">
        <Svg src={workspacePremium} aria-hidden />
        MES AVANTAGES
      </a>
      <a key="MES DOCUMENTS link" href="/mes-documents" target="_">
        <Svg src={textSnippet} aria-hidden />
        MES DOCUMENTS
      </a>
    </Header>
  ),
  args: {
    rightItem: [
      <Button
        key="Banking Space Button"
        iconLeft={<Svg src={lock} fill="#00008f" />}
        variant="secondary"
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant="ghost"
      >
        Mon Profil
      </Button>,
    ],
  },
};

export const HeaderWithLinksAndRightItemAndPreviousLink: StoryObj<
  typeof Header
> = {
  name: "Header with links, right item and Previous link",
  render: ({ previousLink, rightItem }) => (
    <Header previousLink={previousLink} rightItem={rightItem}>
      <a key="MES CONTRATS link" href="/mes-contrats" target="_">
        <Svg src={contractEdit} aria-hidden />
        MES CONTRATS
      </a>
      <a key="MES AVANTAGES link" href="/mes-avantages" target="_">
        <Svg src={workspacePremium} aria-hidden />
        MES AVANTAGES
      </a>
      <a key="MES DOCUMENTS link" href="/mes-documents" target="_">
        <Svg src={textSnippet} aria-hidden />
        MES DOCUMENTS
      </a>
    </Header>
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
        variant="secondary"
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant="ghost"
      >
        Mon Profil
      </Button>,
    ],
  },
};

export const HeaderWithLinksAndRightItemAndPreviousLinkAndActiveLink: StoryObj<
  typeof Header
> = {
  name: "Header with links, right item, Previous link and active link",
  render: ({ defaultActiveLink, previousLink, rightItem }) => (
    <Header
      defaultActiveLink={defaultActiveLink}
      previousLink={previousLink}
      rightItem={rightItem}
    >
      <a key="MES CONTRATS link" href="/mes-contrats" target="_">
        <Svg src={contractEdit} aria-hidden />
        MES CONTRATS
      </a>
      <a key="MES AVANTAGES link" href="/mes-avantages" target="_">
        <Svg src={workspacePremium} aria-hidden />
        MES AVANTAGES
      </a>
      <a key="MES DOCUMENTS link" href="/mes-documents" target="_">
        <Svg src={textSnippet} aria-hidden />
        MES DOCUMENTS
      </a>
    </Header>
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
        variant="secondary"
      >
        Espace Banque
      </Button>,
      <Button
        key="Profile Button"
        iconLeft={<Svg src={person} fill="#00008f" />}
        variant="ghost"
      >
        Mon Profil
      </Button>,
    ],
  },
};
