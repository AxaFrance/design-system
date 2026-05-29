import { MessageBar } from "@axa-fr/canopee-react/prospect";
import accountBalanceIcon from "@material-symbols/svg-400/outlined/account_balance-fill.svg";
import homeIcon from "@material-symbols/svg-400/outlined/home.svg";
import type { Meta, StoryObj } from "@storybook/react";
import type { ComponentProps } from "react";

const MESSAGE_BAR_VARIANTS = ["info", "error"] as const;

const ICONS: Record<string, string> = {
  accountBalanceIcon,
  homeIcon,
};

type MessageBarStoryProps = ComponentProps<typeof MessageBar> & {
  icon: keyof typeof ICONS;
};

const meta: Meta<MessageBarStoryProps> = {
  component: MessageBar,
  title: "Components/MessageBar",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "The description is displayed directly on desktop and uses AccordionCore only on small screens.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: "1rem", maxWidth: "900px", margin: "0 auto" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    description: {
      control: { type: "text" },
    },
    icon: {
      control: { type: "select" },
      options: Object.keys(ICONS),
    },
    variant: {
      options: MESSAGE_BAR_VARIANTS,
      control: { type: "select" },
    },
    defaultDescriptionOpen: {
      control: { type: "boolean" },
      description: "Initial expanded state for the mobile accordion.",
    },
    buttonProps: {
      control: { type: "object" },
    },
  },
};

export default meta;
type Story = StoryObj<MessageBarStoryProps>;

const DESCRIPTION =
  "Vos informations personnelles doivent etre actualisees afin de maintenir la protection de vos donnees.";

export const Playground: Story = {
  name: "MessageBar",
  args: {
    title: "Pensez a mettre a jour votre dossier client AXA",
    icon: "accountBalanceIcon",
    variant: "info",
    defaultDescriptionOpen: true,
    buttonProps: { children: "Primary", variant: "primary" },
    description: DESCRIPTION,
  },
  render: ({ icon, ...args }) => (
    <MessageBar {...args} icon={ICONS[icon] ?? icon} />
  ),
};
