import type { Meta, StoryObj } from "@storybook/react";
import {
  Button,
  Card,
  DebugGrid,
  Icon,
  MainLayout,
  type MainLayoutProps,
} from "@axa-fr/canopee-react/client";
import accountBalance from "@material-symbols/svg-400/rounded/account_balance-fill.svg";
import { action } from "storybook/actions";
import {
  copyright,
  expandLinkText,
  links,
  menuBurgerProps,
  socialMedias,
  tabMenuProps,
} from "../LayoutDemo/LayoutDemo.constant";
import "../layout.css";

const headerProps: MainLayoutProps["headerProps"] = {
  appNameProps: { label: "Car insurance" },
  tabMenuProps,
  menuBurgerProps,
  actionChildren: (
    <Button
      variant="secondary"
      iconLeft={<Icon src={accountBalance} size="S" />}
      onClick={action("Action clicked")}
    >
      Accéder à AXA Banque
    </Button>
  ),
};

const footerProps: MainLayoutProps["footerProps"] = {
  links,
  socialMedias,
  copyright,
  expandLinkText,
};

const top = (
  <MainLayout.Top>
    <Card className="af-card--layout">MainLayout.Top</Card>
  </MainLayout.Top>
);

const content = (
  <Card className="af-card--layout af-card--layout--plainheight">Children</Card>
);

const bottom = (
  <MainLayout.Bottom>
    <Card className="af-card--layout">MainLayout.Bottom</Card>
  </MainLayout.Bottom>
);

const meta = {
  title: "Layouts/Main Layout",
  component: MainLayout,
  parameters: { layout: "fullscreen" },
  decorators: [
    (Story, { args }) => (
      <>
        {args.debugGridProps ? (
          <DebugGrid<{ forceVisible?: boolean }>
            {...args.debugGridProps}
            forceVisible
          />
        ) : null}
        <Story args={{ ...args, debugGridProps: undefined }} />
      </>
    ),
  ],
  argTypes: {
    children: { control: false },
    headerProps: { control: "object" },
    footerProps: { control: "object" },
  },
  args: {
    className: "layout-demo",
    headerProps,
    footerProps,
    debugGridProps: { isCheckedByDefault: true },
  },
} satisfies Meta<typeof MainLayout>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: "Top + Children + Bottom",
  args: {
    backLinkProps: { href: "#", children: "Retour" },
  },
  render: (args) => (
    <MainLayout {...args}>
      {top}
      {content}
      {bottom}
    </MainLayout>
  ),
};

export const TopAndContent: Story = {
  name: "Top + Children",
  render: (args) => (
    <MainLayout {...args}>
      {top}
      {content}
    </MainLayout>
  ),
};

export const ContentAndBottom: Story = {
  name: "Children + Bottom",
  render: (args) => (
    <MainLayout {...args}>
      {content}
      {bottom}
    </MainLayout>
  ),
};

export const ContentOnly: Story = {
  name: "Children only",
  render: (args) => <MainLayout {...args}>{content}</MainLayout>,
};
